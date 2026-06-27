export interface Article {
  slug: string;
  title: string;
  dek: string;
  date: string;
  readMins: number;
  body: string[];
}

export const articles: Article[] = [
  {
    slug: "moon-sign-not-sun-sign",
    title: "Why Vedic astrology uses the moon sign, not the sun sign",
    dek: "If your western horoscope feels generic, this is why. Vedic astrology starts somewhere else entirely.",
    date: "2026-04-10",
    readMins: 6,
    body: [
      "Walk up to most people in the United States and ask their sign. They will name their sun sign — the constellation the sun was passing through on their birthday. Walk up to a jyotishi in India and ask the same question, and they will ask for your moon sign, your janma rashi.",
      "The difference is not trivial. Western astrology was shaped by Greco-Roman culture, where the sun — bright, public, ego — was the natural anchor. Vedic astrology grew out of a tradition that prized the inner life over the outer one, and the moon — mind, memory, instinct, mother — was the natural anchor instead.",
      "Your moon sign, in classical jyotish, is read as the colour of your mind. It tells the jyotishi how you receive the world before you decide what to do with it. The sun is still there — important, but one of nine grahas, not the centre of the system.",
      "There is also a more technical reason. Vedic astrology uses the sidereal zodiac, fixed against the actual stars. Western astrology uses the tropical zodiac, fixed against the seasons. The two have drifted roughly 24 degrees apart over the centuries. If you are a tropical Scorpio, you are very likely a sidereal Libra. The signs do not map one-to-one.",
      "So when your American horoscope app insists you are a fiery Leo and you feel nothing of the kind, the reason is often simple: in the Vedic sky, you are not.",
    ],
  },
  {
    slug: "sade-sati-explained",
    title: "Sade Sati — what it really means and what it doesn't",
    dek: "The seven-and-a-half-year transit of Saturn is the most feared phase in jyotish. Most of that fear is misplaced.",
    date: "2026-03-22",
    readMins: 7,
    body: [
      "Mention Sade Sati to an Indian family elder and watch the room change. Saturn — Shani — transiting the twelfth, first, and second houses from the natal moon for seven and a half years has a fearsome reputation. People delay marriages, cancel investments, and lose sleep over it.",
      "What the classical texts actually say is more interesting. Saturn is the planet of time, weight, and consequence. He is not a punisher; he is an accountant. Sade Sati is the period when his ledger comes due — the choices you have been making for years finally meet their structure.",
      "If you have been building patiently, in alignment with your dharma, Sade Sati can be the period your life becomes serious in the best sense. If you have been avoiding hard truths, Saturn will hand them to you, often in compressed form.",
      "The phase has three parts of roughly two and a half years each: the twelfth-house pass (loss of the unnecessary), the first-house pass (the self is tested), and the second-house pass (resources and family). Each has its own texture; the middle one is usually the most demanding.",
      "Remedies in classical jyotish for Saturn are striking in how undramatic they are. Honest work. Service to people older or less fortunate than you. Walking. Simple food. Punctuality. Saturn does not respond to grand gestures; he responds to consistency.",
      "If you are in your Sade Sati, the right question is not how to escape it. The right question is what part of your life Saturn is asking you to take seriously.",
    ],
  },
  {
    slug: "gemstone-buying-mistakes",
    title: "Choosing a gemstone: five mistakes diaspora buyers make",
    dek: "A ratna is a prescription, not a piece of jewellery. Here is what goes wrong most often.",
    date: "2026-02-15",
    readMins: 5,
    body: [
      "Walking through Jackson Heights or Devon Avenue, the gemstone shops are a temptation. Bright yellow sapphires, deep blue neelam, blood-red coral — all promising prosperity, peace, or love. Most diaspora buyers we speak with have made at least one of the following mistakes.",
      "One. Buying based on sun sign or birth month. A ratna in jyotish is chosen for a planet that needs strengthening in your kundli, not for the month you were born. Birthstone charts in American jewellery stores are a different tradition entirely.",
      "Two. Wearing neelam without a trial. Blue sapphire is the fastest-acting ratna. Worn correctly it can transform a life; worn incorrectly it can dismantle one in weeks. Classical practice is a three-day trial under the pillow before any commitment.",
      "Three. Confusing semi-precious substitutes with the real stone. An amethyst is not a substitute for blue sapphire. Yellow citrine is not pukhraj. The substitutes have their own gentle effects, but they are not pinch-hitting for the real planet.",
      "Four. Wrong finger, wrong metal, wrong day. A correctly chosen ratna in the wrong setting is half-asleep. Each planet has its finger, its metal, and the day and muhurat for first wearing.",
      "Five. Buying before the kundli is read. The most expensive mistake. Spend on the reading first. The right ratna is often less expensive than the wrong one, and sometimes the right answer is no stone at all.",
    ],
  },
];

export function getArticle(slug: string) {
  return articles.find((a) => a.slug === slug);
}
