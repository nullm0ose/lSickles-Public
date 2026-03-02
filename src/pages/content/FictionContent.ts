// content/FictionContent.ts

const images = import.meta.glob("../../assets/*.{jpg,jpeg,png}", { eager: true, as: "url" });

const imageMap: Record<string, string> = {};
for (const path in images) {
  const filename = path.split("/").pop(); // get "cherry.jpeg"
  if (filename) imageMap[filename] = images[path] as string;
}


export interface FictionPost {
  slug: string;
  title: string;
  excerpt: string;
  date: string;
  content: string[];
  image?: string; // optional image filename
}

export const fictionPosts: FictionPost[] = [
  {
    slug: "the-last-lighthouse",
    title: "The Last Lighthouse",
    excerpt:
      "A reflective short story about solitude, memory, and the enduring presence of the past on the edge of the sea.",
    date: "January 2026",
    content: [
      "On the edge of the cliff, the lighthouse stood alone, its paint peeling and its light dim.",
      "Marion had come here for reasons she couldn't name, but the sound of waves crashing below seemed to whisper them anyway.",
      "Inside, the spiral staircase creaked with every step. Shadows danced across the walls as she climbed.",
      "At the top, the wind hit her face, salty and sharp, carrying with it memories she hadn't thought about in years.",
      "She realized that some places hold echoes, and some lights never truly go out.",
    ],
  },
  {
    slug: "paper-boats",
    title: "Paper Boats",
    excerpt:
      "A short story about childhood, hope, and letting go, told through the metaphor of paper boats set afloat in a quiet stream.",
    date: "December 2025",
    content: [
      "The little boy folded paper boats every evening and placed them in the stream that ran behind his house.",
      "Each boat carried a wish: a whispered word, a hope for tomorrow, a secret that no one else knew.",
      "The stream took them away slowly, twisting and turning, never rushing.",
      "Sometimes the boats capsized; sometimes they floated far out of sight. But the boy never stopped folding.",
      "He learned that letting go could feel like holding on, and that journeys begin in small hands.",
    ],
  },
  {
    slug: "midnight-market",
    title: "Midnight Market",
    excerpt:
      "A story about a mysterious market that appears only at night, exploring wonder, curiosity, and fleeting magic.",
    date: "November 2025",
    content: [
      "The market appeared only at midnight, under a crescent moon that hung low in the sky.",
      "Stalls glimmered with lanterns, and the smell of spices and roasted nuts drifted in the cool air.",
      "People moved silently, trading whispers and stories more than goods.",
      "Lila wandered through the aisles, her fingers brushing past fabrics that shimmered like water, and she felt as if she had stepped into someone else’s dream.",
      "By the time dawn approached, the market vanished, leaving only footprints and a sense of wonder.",
    ],
  },
  {
    slug: "the-clockmakers-apprentice",
    title: "The Clockmaker's Apprentice",
    excerpt:
      "A story about time, mentorship, and discovering the hidden rhythms of life through the eyes of a young apprentice.",
    date: "October 2025",
    content: [
      "Every clock in the shop ticked in perfect rhythm, yet none matched the heartbeat of the old clockmaker.",
      "Tommy, his apprentice, learned to wind the clocks, polish the brass, and oil the tiny gears.",
      "But the real lesson was not in keeping time—it was in understanding it: the quiet pauses, the sudden jumps, the moments lost and found.",
      "One evening, Tommy noticed a clock he had never seen before, hidden in a corner. It didn't tick, but it hummed.",
      "From that day, he realized that some moments are measured not by hands or seconds, but by how fully we live them.",
    ],
  },
];