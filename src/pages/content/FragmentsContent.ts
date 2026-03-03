// content/FictionContent.ts

const images = import.meta.glob("../../assets/*.{jpg,jpeg,png}", { eager: true, as: "url" });

const imageMap: Record<string, string> = {};
for (const path in images) {
  const filename = path.split("/").pop(); // get "cherry.jpeg"
  if (filename) imageMap[filename] = images[path] as string;
}


export interface FragmentsPost {
  slug: string;
  title: string;
  excerpt: string;
  date: string;
  content: string[];
  image?: string; // optional image filename
}

export const fragmentsPosts: FragmentsPost[] = [
  {
    slug: "aunthood-101",
    title: "Aunthood 101",
    excerpt:
      "MISSING DESCRIPTION",
    date: "January 2026",
    content: [
      "A few months ago I had an intense conversation with my five year old niece while her three year old sister sat beside her. My sister had run into a store for a few minutes and left me in the car with the girls.",
"",
"They were strapped into their seats but already twisting around, small fingers working at the buckles with serious focus.",
"",
"“Stay buckled,” I said, turning around from the front seat.",
"",
"She looked at me with full conviction and said I could not tell her what to do because I was not her mom. There was no hesitation. Just fact. In her mind, authority belonged to mothers.",
"",
"I told her that when her mom trusts me to take care of her and her sister, I am the adult in charge. I said it calmly. I have learned that tone matters with five year olds. She absorbed this, but she did not concede.",
"",
"Then she pivoted.",
"",
"“Well you can tell your OWN kids what to do.”",
"",
"I told her I did not have kids.",
"",
"She asked why.",
"",
"I told her the truth. I said I did not want to be a mother.",
"",
"She gasped. It was theatrical and completely sincere. Then she yelled, louder than necessary and with full five year old outrage, “WELL I GUESS YOU DON’T WANT TO SEE US EVER AGAIN THEN.”",
"",
"The logic stunned me. I had not realized those two things were connected in her mind. Not wanting my own children meant not wanting children at all. Which meant not wanting her or her sister.",
"",
"I explained that not wanting to be a mother is not the same as not wanting to be an auntie. I told her I love being their aunt more than almost anything. That I chose this role. That I show up for it on purpose.",
"",
"She went silent. The three year old hummed to herself, unconcerned. But the five year old was thinking. You could feel it. The air shifted into that deep processing silence children fall into when their world rearranges slightly.",
"",
"After a few moments she announced, with full confidence and zero inside voice, “SO DID YOU GO TO COLLEGE TO BE AN AUNTIE?”",
"",
"I laughed harder than I should have. I could not help it.",
"",
"The question was not mocking. It was practical. If something matters to adults, surely they study for it. Surely there is training.",
"",
"No, I did not go to college to be an auntie.",
"",
"But I have studied love in other ways. I have practiced how to listen. How to kneel down to eye level. How to mean what I say. How to hold boundaries without withdrawing affection. How to choose children without needing to own them.",
"",
"I did not earn a degree in auntie.",
"",
"I chose it.",
"",
"And it is the title I carry with the most pride.",
    ],
  },
  {
    slug: "hope",
    title: "Hope",
    excerpt:
      "MISSING DESCRIPTION",
    date: "December 2025",
    content: [
     "For the sorrowful.",
"For the keepers of memory.",
"For the ones who lift their eyes and believe anyway.",
"For the ones who whisper to the stars.",
"",
"For the ones who ache.",
"For the ones who still reach for light.",
"",
"This is where we begin.",
"In that split second after the shooting star passes, when we close our eyes and hope finds us.",
"",
"I remember being young and standing in the dark long after I was supposed to be inside. The sky felt endless then. The constellations never stayed still. I would trace them with my finger, believing that they were waiting for me. And when a streak of light cut across the black, my whole body reacted before my mind did.",
"",
"Hope was never lost. Sometimes it was just hiding. It lived in that forgotten space after the falling star, when i believed something unseen could still move toward me.",
"",
"I think I am still that girl. I think most of us are.",
    ],
  },
];