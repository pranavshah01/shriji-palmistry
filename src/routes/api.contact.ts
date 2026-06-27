import { createFileRoute } from "@tanstack/react-router";
import { Resend } from "resend";
import { z } from "zod";

const contactSchema = z.object({
  name: z.string().min(2, "Name must be at least 2 characters"),
  email: z.string().email("Invalid email address"),
  dateOfBirth: z.string().min(1, "Date of birth is required"),
  timeOfBirth: z.string().optional(),
  placeOfBirth: z.string().min(2, "Place of birth is required"),
  question: z.string().min(10, "Question must be at least 10 characters"),
});

export const Route = createFileRoute("/api/contact")({
  server: {
    handlers: {
      POST: async ({ request }) => {
        try {
          const body = await request.json();
          const validatedData = contactSchema.parse(body);

          const resend = new Resend(process.env.RESEND_API_KEY);

          const emailContent = `
New Contact Form Submission

Name: ${validatedData.name}
Email: ${validatedData.email}
Date of Birth: ${validatedData.dateOfBirth}
Time of Birth: ${validatedData.timeOfBirth || 'Not provided'}
Place of Birth: ${validatedData.placeOfBirth}

Question:
${validatedData.question}
          `.trim();

          const { data, error } = await resend.emails.send({
            from: process.env.RESEND_FROM_EMAIL || 'onboarding@resend.dev',
            to: process.env.RESEND_TO_EMAIL || 'kanaiyalalgandhi301@gmail.com',
            subject: `New Contact Form Submission from ${validatedData.name}`,
            text: emailContent,
            html: `
              <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto;">
                <h2 style="color: #1a1530;">New Contact Form Submission</h2>
                <div style="background: #f5f5f5; padding: 20px; border-radius: 8px; margin: 20px 0;">
                  <p><strong>Name:</strong> ${validatedData.name}</p>
                  <p><strong>Email:</strong> ${validatedData.email}</p>
                  <p><strong>Date of Birth:</strong> ${validatedData.dateOfBirth}</p>
                  <p><strong>Time of Birth:</strong> ${validatedData.timeOfBirth || 'Not provided'}</p>
                  <p><strong>Place of Birth:</strong> ${validatedData.placeOfBirth}</p>
                </div>
                <h3 style="color: #1a1530;">Question:</h3>
                <p style="background: #fff; padding: 15px; border-left: 4px solid #D4AF37; margin: 10px 0;">
                  ${validatedData.question.replace(/\n/g, '<br>')}
                </p>
              </div>
            `,
          });

          if (error) {
            console.error("Resend error:", error);
            return new Response(
              JSON.stringify({ error: "Failed to send email" }),
              { status: 500, headers: { "Content-Type": "application/json" } }
            );
          }

          return new Response(
            JSON.stringify({ success: true, messageId: data?.id }),
            { status: 200, headers: { "Content-Type": "application/json" } }
          );
        } catch (error) {
          console.error("Contact form error:", error);
          
          if (error instanceof z.ZodError) {
            return new Response(
              JSON.stringify({ error: "Validation failed", details: error.errors }),
              { status: 400, headers: { "Content-Type": "application/json" } }
            );
          }

          return new Response(
            JSON.stringify({ error: "Internal server error" }),
            { status: 500, headers: { "Content-Type": "application/json" } }
          );
        }
      },
    },
  },
});
