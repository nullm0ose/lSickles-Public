

const images = import.meta.glob("../../assets/*.{jpg,jpeg,png}", { eager: true, as: "url" });

const imageMap: Record<string, string> = {};
for (const path in images) {
  const filename = path.split("/").pop(); // get "cherry.jpeg"
  if (filename) imageMap[filename] = images[path] as string;
}



export interface ArchivePost {
  slug: string;
  title: string;
  excerpt: string;
  date: string;
  content: string[];
  image?: string; // optional image filename
}

export const archivePosts: ArchivePost[] = [
  {
    slug: "dirt-hill",
    title: "Dirt Hill",
    excerpt:
      "A nostalgic personal reflection on childhood, seasons, and the way growing up asks us to leave places behind.",
    date: "January 2026",

    content: [
      "The red brick house sat at the end of a long road.",
      "I lived there from ages seven through thirteen.",
      "Those years shaped me in ways I did not understand at the time.",
      "Behind that house the field stretched open and wide.",
      "At the far edge of it stood the dirt hill.",
      "The hill had no story when we found it.",
      "It was only a mound of earth left by developers who moved on to other plans.",
      "No one claimed it.",
      "No one cared about it.",
      "It waited without purpose until the day the children arrived.",
      "We made that hill our place.",
      "We climbed it every season.",
      "Summer left it dry and warm.",
      "We ran to the top and shouted into the wind.",
      "Winter buried it in snow and gave us a bright slope to slide down.",
      "Spring turned it slick and soft.",
      "Autumn wrapped it in cold and made us feel older.",
      "The hill changed with the year, yet it always stayed steady under our feet.",
      "It held our games.",
      "It held the noise we made.",
      "Every day we returned, and every day it welcomed us.",
      "There came a time when the hill felt smaller.",
      "Our legs grew longer.",
      "Our voices shifted.",
      "The magic stayed, but we began to outgrow it.",
      "The field seemed different.",
      "The house seemed smaller.",
      "We were moving toward something we could not name.",
      "When my family left the red brick house, I felt the weight of that change without knowing how to hold it.",
      "I said goodbye to the field.",
      "I said goodbye to the red brick house.",
      "And I said goodbye to the dirt hill.",
      "I carry it with me now with love for the child who ruled its top, with joy for the seasons it gave me, with sadness for the way growing up asks us to leave things behind.",
    ],
  },
  {
    slug: "orchard",
    title: "Orchard",
    excerpt:
      "A lyrical memory of church orchards, a mother’s kitchen, and the way endings can still offer sweetness and safety.",
    date: "February 2026",
    content: [
      "The turn of seasons always settled into my chest in a way I did not know how to name. School returned. The light changed. The days felt shorter even before they were. But the orchard opened, and that meant something familiar.",
      "Our church orchards were spread across Orem, wide stretches of trees that felt endless to a child. Families went there to pick fruit for the people who needed it most in our community. I did not understand the structure of it then. I only understood the feeling. Rows of trees. Voices drifting in the air. The sense that this work mattered.",
      "The fallen fruit belonged to us. Apples still warm from the sun. Peaches soft from their fall. Their skins bruised in the places where earth caught them. I used to gather them with a sense of devotion. My hands were small. I tried to cradle them gently, as tho each peach sensed my care. They left a scent on my skin that stayed through the whole day. Sweet. Sharp. Almost golden.",
      "My mother turned those bruised peaches into something magical. She stood at the stove for hours. Steam rose around her. Peach skins curled at the edges as they simmered. Apple slices softened in a pot that never seemed to rest. I can still see her hands. Quick. Sure. Never wasting a single piece. The kitchen glowed with jars that caught the light. Our house smelled warm in a way that shaped my idea of safety.",
      "I remember the orchard as clearly as that kitchen. The air tasted clean. The grass brushed against my legs. My feet were dusty by the time we left. The trees stood in tall lines, and I walked between. The world felt big and open. I felt small, but not lost.",
      "The orchard carried its own sadness. I knew that once we picked the fruit, summer was truly ending. My freedom would fold itself away until next year. But the orchard also carried a kind of comfort. It gave us jars full of sweetness that lasted long after the cold came. It gave my mother a reason to fill the kitchen with warmth. It gave me the sense that endings could still give something back.",
      "That place lives in me. The smell of ripe peaches in my hands. The sound of my mother’s work. The shift in the air when the season turned. It reminds me that change often comes with a mix of sorrow and sweetness. It taught me that simple things can stay for years inside the heart. Even the bruised fruit. Even the child I was, lifting each peach as if it were fragile and worth saving.",
    ],
  },
];