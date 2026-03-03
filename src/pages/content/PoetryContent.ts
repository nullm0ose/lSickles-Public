// content/PoetryContent.ts

import { imageMap } from "./imageMap";


export interface PoetryPost {
  slug: string;
  title: string;
  excerpt: string;
  date: string;
  content: string[];
  image?: string; // optional image filename  
}


export const poetryPosts: PoetryPost[] = [
  {
    slug: "grief-taught-me",
    title: "Grief Taught Me",
    excerpt:
      "A free verse poem about learning to live beside grief instead of being consumed by it.",
    date: "September 2020",
    image: imageMap["grief.jpg"], // reference the imported URL directly
    content: [
      `Grief taught me
how to live inside a silence
that had a name.`,
      `It rearranged the furniture of my soul
suddenly, nothing fit
the way it used to.`,
      `I’ve stared into the space
where someone should be,
and found only the outline
of memory.`,
      `I’ve spoken to the air,
half-believing it could carry
something back.`,
      `I’ve sat with shadows,
let them speak,
let them stay too long.`,
      `I’ve wandered through a stillness,
where moonlight softened the dark,
and grief, once a shadow,
learned to breathe beside me.`,
      `It folded around me
like an old coat
I never asked to wear,
but couldn’t take off.`,
      `These dark days
aren’t just shadows,
they have weight,
and scent,
and time.`,
      `But now I’ve learned
to walk beside them,
not behind,
not ahead.`,
      `Just beside,
and an understanding that stays,
even when the light returns.`,
    ],
  },
  {
    slug: "sprouts",
    title: "Sprouts",
    excerpt:
      "A metaphor rich reflection on seeds, hidden beginnings, and the trust required for growth to take place.",
    date: "September 2025",
     image: imageMap["sprout.jpg"], 
    content: [
      `Seeds are peculiar little travelers.
Sometimes they are tucked in pockets, get stuck to sleeves, wedged in shoe treads, carried in the bellies of birds who do not know they are delivering futures.`,
      `One falls into your hand and it looks like a freckle. Another like a splinter of wood. Nothing about them announces orchards or flowers. You could line ten of them on a windowsill and never guess which one dreams of becoming tomatoes and which one is planning to be a tall sunflower with a crooked neck. They keep their identities folded tight.`,
      `They look like nothing.
They are not nothing.`,
      `A seed does its best work where no one is watching. Buried under damp soil. In the ground where roots learn which way is down and which way is water. It grows toward a sky it has never seen, just on trust.`,
      `Planting a seed in the soil is akin to whispering a secret to the earth. You press it in, cover it, and trust the ground to keep it safe. Down there, in the cool dark, the seed listens. It swells at the sound of water and stretches at the hint of warmth. It decides, in its own time, to open.`,
      `The first sprout is always a surprise. Sometimes it comes in slightly crooked, so you tilt it toward the sun. You check on it more than you admit. You hope it keeps going.`,
      `Days pass and the plant grows stronger. Roots wander off like curious little children, mapping the hidden world beneath your feet.`,
      `Then one morning there is a bud. Then a bloom. Then something generous appears. A bean. A berry. A bright faced flower that follows the day across the sky. All of it from that one speck that was almost brushed off your palm.`,
      `Seeds are funny that way.
They look like endings but behave like beginnings.
They trust the dark. They trust the wait.
And sometimes people are like that too. Walking around looking ordinary while whole forests rest inside them, waiting for a little light and a place to root.`,
    ],
  },
  {
    slug: "the-cherry-tree",
    title: "The Cherry Tree",
    excerpt:
      "A metaphor for depression and return. The world keeps moving. The tree blooms anyway. Recovery comes slowly, almost unnoticed, but it comes.",
    date: "January 2026",
    image: imageMap["cherry2.jpg"], // reference the imported URL directly
    content: [
      `I noticed the cherries today,
growing on my favorite tree outside my bedroom window.
Some were big, ripe, and red,
others still small, their color pale
yet each one held the promise of sweetness.`,
      `The longer I searched its branches,
the more cherries I found,
clusters hidden beneath green leaves,
ripening with patience.
They had been there all along,
growing, changing, waiting
though I had not thought to look.`,
      `How many seasons had passed,
with this tree offering its gifts,
while my eyes were elsewhere?
And yet, it did not mind my absence,
nor did it wait for my attention
to bear fruit.`,
      `I wonder what else has been growing,
unseen, unnoticed,
waiting for the day I finally
could see.`,
      `I wonder what else has been waiting,
patient and persistent,
just beyond my awareness.
What beauty, what abundance,
what miracles exist
even when I am not looking?`,
    ],
  },
  {
    slug: "way-home",
    title: "Way Home",
    excerpt:
      "A reflective prose piece about a bike ride that becomes a meditation on trust, stillness, and returning to oneself.",
    date: "June 2024",
    image: imageMap["boat.jpg"], // reference the imported URL directly
    content: [
      `The wind isn’t always kind, but today it carries me. It moves through the spokes of my bike like breath through a flute, and for a moment, I feel myself becoming part of its song.`,
      `Beside me, the river speaks in broken whispers, sharing its secrets with the rocks below. There’s no rush to its rhythm. It lingers. It remembers.`,
      `White sails drift across the water like pillowcases left out to dry, worn and soft, tilting gently in the breeze. They ride the invisible currents with trust, and I wonder what it might feel like to do the same, to lean into something I can’t see but still believe in. To let go, just a little.`,
      `The path curves ahead like a thought I’ve had before, familiar, quiet, and lined with wildflowers. They bloom as if waiting just for me, their small faces catching the sun without asking for anything in return.`,
      `Trees lean in like old storytellers, their limbs stretching over the path, offering shade, comfort, and presence to anyone who bothers to notice. I imagine their stories, the ones I’ll never finish reading. Their shadows sweep across my skin like lullabies I used to know by heart, soft, forgotten melodies that somehow return when I need them.`,
      `Everything around me holds still and moves at once. The sky, the wind, the river, all of it seems to know exactly where to find me. The shadow of my wheels curls beneath me like a fiddlehead, unfurling in the last light of day.`,
      `When I finally arrive home, my legs are aching and my heart is quiet. But I carry with me every detail of this ordinary ride, each breath of wind, each wildflower, each whisper of water, as if it were something just for me.`,
    ],
  },
  {
    slug: "the-wind-and-the-wall",
    title: "Wind and the Wall",
    excerpt:
      "A childhood moment suspended between imagination and reality, where the wind almost carries a girl into flight.",
    date: "November 2021",
     image: imageMap["house.jpeg"], 
    content: [
      `I climbed the stone wall in the backyard,
bare feet pressing against the rough, cold edges,
arms spread wide, the wind tugging at my sleeves.`,
      `The sky, restless,
clouds racing like wild horses,
tho I am just as untamed.`,
      `If I lean forward, just a little,
the wind might carry me
not far, just enough to taste the sky,
to see the world from the height of birds.`,
      `Below, the grass ripples in waves,
the trees nod their heavy heads,
and I know, in this moment,
I am lighter than I have ever been.`,
      `I close my eyes and lift my chin,
waiting for the wind to take me,
believing, for just a breath,
that it will.`,
      `But then`,
      `a voice from the kitchen window,
calling me back,
pulling me down,
reminding me of shoes and supper and things that keep feet on the ground.`,
      `Still, as I jumped off the wall,
just for a moment,
before I landed`,
      `I swear I felt the sky take me.`,
    ],
  },
  {
    slug: "the-ants-go-marching",
    title: "The Ants Go Marching",
    excerpt:
      "Childhood wonder and the quiet magic that endures into adulthood. It explores imagination, memory, and the sacredness of paying attention to small things.",
    date: "July 2025",
    image: imageMap["ants.jpg"], 
    content: [
     "When my dad first met me,",
"I was crouched low to the ground,",
"tiny knees bent like question marks",
"on a sun warmed sidewalk.",
"He asked what I was doing",
"I didn’t look up.",
"Just pointed",
"to the steady parade",
"of black specks",
"carrying crumbs",
"and stories",
"back to their hill.",
"",
"“Talking to my friends,” I said,",
"as if it were obvious.",
"As if anyone with eyes",
"could see their tiny importance.",
"",
"He loved that story",
"the way I spoke to ants",
"with the seriousness of diplomats,",
"how I watched their order",
"like it was a sacred ritual,",
"how I believed in small magic.",
"",
"I still do.",
"",
"Now the sidewalk is cracked,",
"and time has folded itself",
"into the lines of my palms.",
"But I still kneel",
"for the quiet things.",
"",
"Still marvel",
"at the way shadows stretch",
"before the sun bows out,",
"how a wind chime tells secrets",
"in the breeze,",
"how a line of ants",
"can feel like a symphony",
"if you listen hard enough.",
"",
"I have grown,",
"but the ants still speak to me.",
"",
"My imagination never softened",
"it grew stronger.",
"It learned to find wonder",
"in the slowness of ordinary days.",
"",
"He saw me first",
"with my nose to the earth,",
"and maybe he knew",
"then",
"that I would never stop looking",
"for the beauty",
"beneath the obvious.",
"",
"And maybe he saw it too",
"the holiness",
"of a child",
"who speaks to ants",
"and means it.",
"",
"We, my younger self and I",
"still find magic",
"where others see routine.",
"We still believe the world speaks,",
"even in whispers.",
"",
"And the ants?",
"They are still marching.",
"Still my friends.",
"Still enough.",
    ],
  },
];