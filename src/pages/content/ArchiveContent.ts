

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
      "A personal reflection on childhood, seasons, and the way growing up asks us to leave places behind.",
    date: "January 2025",
    image: imageMap["dirt.jpg"], 

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
    slug: "the-orchard",
    title: "The Orchard",
    excerpt:
      "A child facing the end of summer. Freedom narrows as the season shifts. The orchard stands steady while light fades. It is about letting go of wild days and stepping into change.",
    date: "March 2026",
    image: imageMap["peach.jpeg"], // reference the imported URL directly
    
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
    {
    slug: "night-games",
    title: "Night Games",
    excerpt:
      "A vivid, immersive look at summer nights ruled by play, freedom, and imagination, where games, fireflies, and the thrill of the dark transform ordinary streets into a world full of possibility and wonder.",
    date: "February 2024",
    image: imageMap["night.jpeg"], // reference the imported URL directly
    
    content: [
      "There was a stretch of years when summer did not belong to adults.",
"",
"It belonged to the children of the neighborhood.",
"",
"The sun would drag itself behind the rooftops, leaving behind a sky that felt endless. Dinner plates clattered inside open kitchen windows. Sprinklers ticked across lawns. Someone’s mom would shout a name into the hot, thick air. And the kids would gather at the end of the cul de sac like a restless country preparing for war.",
"",
"We called them night games.",
"",
"Kick the Can. Hide and Seek. Steal the Flag.",
"",
"The rules were always half remembered and half invented. The older kids claimed authority. The younger ones protested. Someone cried at least once a week. None of it mattered. What mattered was the feeling of stepping past the last porch light and into the dark.",
"",
"Summer nights were warm in a way that felt personal. The air pressed gently against our bare arms. Asphalt still held the day’s heat. Grass stuck to the backs of our legs. Fireflies flickered at the edges of the yards, small blinking lanterns that seemed to approve of our rule. They did not belong to the sky. They belonged to us.",
"",
"In daylight we were children with chores and curfews. With parents who could see us.",
"",
"At night we were sovereign.",
"",
"Kick the Can was chaos disguised as a game. One metal clang and the whole world reset. We would scatter into hedges and behind sheds, hearts hammering, holding our breath so long it made our ears ring. The thrill was not just in hiding. It was in not being found. In believing, for a few electric seconds, that we had slipped beyond the reach of everyone who knew our names.",
"",
"Hide and Seek felt peaceful and thrilling. The counting. The waiting. The way the dark sharpened your hearing. A footstep in gravel sounded like thunder. A laugh had to be swallowed before it betrayed you. Sometimes you would crouch behind a parked car, staring up at the stars, and forget entirely that you were playing a game. The sky felt too big. The night too alive.",
"",
"Steal the Flag was strategy and sprinting. It was allegiance. You knew exactly who was on your side and who was not. The boundary lines were invisible but absolute. Crossing into enemy territory felt dangerous in a way that childhood rarely did. We chased each other through backyards that were not technically ours, trusting that no one would call the authorities, that the only consequence would be grass stains and a scolding to quiet down.",
"",
"The fireflies were constant. They blinked in tall grass and near chain link fences. They hovered low over the irrigation ditch that ran behind the houses. We chased them sometimes, cupping our hands around their glow, then opening our palms to watch the light drift upward again. It felt like holding a piece of the nights magic, if only for a moment.",
"",
"We believed we were invisible.",
"We believed we were unstoppable.",
"",
"There was a specific hour when the night shifted. The fireflies thinned out by then. The stars took over. Eventually a porch light would flick on. A name would be called. The spell would thin.",
"",
"We would walk home sweaty and triumphant, shoes in hand, smelling like grass and exhaustion. The house would feel smaller than it had that morning. But for a few hours we had ruled something vast.",
"",
"I do not remember who won most nights.",
"",
"I remember the dark and the way the world felt possible when it was lit only by blinking insects and the faith that someone would count to thirty and come looking for you.",
    ],
  },
   {
    slug: "fox-and-geese",
    title: "Fox and Geese",
    excerpt:
      "A nostalgic winter memory, where a mother’s careful, playful designs turn snow into adventure, warmth, and wonder, leaving a lasting imprint of joy, freedom, and resilience.",
    date: "June 2025",
    image: imageMap["foxGeese.jpeg"], // reference the imported URL directly
    
    content: [
     "When the first snow fell,",
"my mother would go outside alone.",

"She wasn’t shoveling or scattering salt.",
"She was making a small world for her children.",

"We would press our faces to the cold glass, and watch her walk through the untouched white,",
"her boots leaving long, winding lines.",
"She drew corridors and wide turns and places to stop and breathe.",
"She mapped out adventure before we ever stepped into it.",
"Every winter, she carved us a place to run.",

"Fox and Geese, she called it.",

"We chased and fled along the narrow paths she had carefully laid out for us. Our voices pierced the silence that followed the first snowfall of winter, our lungs burning brightly in the crisp, clean air that felt almost sacred. We were reckless with laughing. We were fearless in mittens. We were wild as only warm children in a cold world can be.",

"Sometimes the fox caught us.",
"Sometimes we escaped by a heartbeat.",
"And still we ran.",

"When our legs failed and our tears froze in the corners of our eyes, we went home to heat and light and sweetness.",
"The kitchen always remembered what we needed.",
"Cocoa steamed in our hands.",
"Bread softened our mouths.",
"Cinnamon and sugar told us winter was not a thing to fear but a thing to survive beautifully.",

"Then, full and glowing, we returned to the snow.",

"It amazes me now how small our problems were back then,",
"or maybe how well they were hidden beneath frost and laughter.",
"The world had not yet taught us its sharpest edges.",
"Nothing followed us into that maze of white. Nothing could reach us there.",
"We were geese.",
"We were flying even with our feet on the ground.",

"And my mother, she stood somewhere nearby, letting the cold take her so we could have something to run through.",

"Every time the world feels too large and cruel,",
"I remember her boots in the snow.",
"I remember the maze.",
"I remember the glow of the kitchen light waiting for us.",

"And even now,",
"no matter where winter finds me,",
"no matter how old I get,",
"part of me is still out there in the snow.",
"Waiting for the fox.",
"Running with the geese.",
"Believing, with my whole body, that warmth is real and coming soon.",
    ],
  },
  {
    slug: "the-return",
    title: "The Return",
    excerpt:
      "A quiet, intimate moment between child and adult, capturing wonder, vulnerability, and the tender reckoning of growing up while staying present to love, joy, and bravery.",
    date: "May 2023",
    image: imageMap["return.jpg"], // reference the imported URL directly
    content: [
    "She finds me on warm pavement.",
"Hands behind her back,",
"studying me like I am the strange one.",
"",
"She is six.",
"",
"Knees smudged with dirt from the driveway.",
"Chalk dust on her fingers.",
"Hair slipping from its clip.",
"A small gold heart beating fast with plans.",
"",
"Magic hums around her.",
"The crack in the cement is a canyon.",
"The ants are explorers hauling treasure.",
"The sky is wide enough to swallow fear whole.",
"",
"She looks at me carefully.",
"",
"“You don’t run anymore,” she says.",
"",
"She’s not accusing.",
"Just certain.",
"",
"I tell her running is not necessary now.",
"That I have things to do.",
"Important things.",
"",
"She crouches near the ants, watching one struggle with a crumb twice its size.",
"",
"“They don’t stop,” she says.",
"",
"Then she stands again and looks straight at me.",
"",
"“You used to laugh with your whole body.”",
"",
"It is not a question.",
"",
"I feel that one.",
"",
"I try to smile wide for her.",
"Show her I am still capable.",
"",
"She studies it.",
"",
"“Why do you hold it in now?”",
"",
"There it is.",
"The blade.",
"",
"I start to explain about composure.",
"About being appropriate.",
"About growing up.",
"",
"She tilts her head, unsure.",
"",
"“Are you still brave?” she asks.",
"",
"She’s not loud.",
"Just needing to know.",
"",
"I say I am trying.",
"",
"She presses her palm against my chest, checking.",
"Feeling for something she remembers.",
"",
"“You feel smaller,” she says.",
"",
"Not mean.",
"Just confused.",
"",
"“I want you to be happy.”",
"",
"The ants keep moving.",
"The pavement holds its heat.",
"",
"She steps back, dust on her knees,",
"eyes still bright enough to believe joy is something you chase.",
"",
"She does not promise to return.",
"",
"She only watches me a moment longer,",
"unsure,",
"",
"as if deciding",
"whether I am still someone",
"she can grow into.",
    ],
  },
];