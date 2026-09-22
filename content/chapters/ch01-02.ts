/**
 * Joshua 1-4: the commission, the reconnaissance of Jericho, the crossing of the
 * Jordan, and the stones set up at Gilgal.
 *
 * Three editorial commitments shape this file.
 *
 * First, chapter 1 verses 3 and 4 are a description, not a conquest. The extent
 * named there reaches the Euphrates, which is larger than anything the book goes
 * on to report as held and larger than anything Israel is later said to possess.
 * Its milestone is typed `allotment`, so the map widens its frame instead of
 * animating a march, and the caption says the inside of the outline is not filled.
 *
 * Second, the crossing is narrated as impossible rather than convenient. The
 * Jordan is at flood stage because it is harvest, and the text's own explanation
 * is the ark, not hydrology. Bank collapses have dammed the river in recorded
 * history, and that is worth knowing, but Joshua 3 does not describe a landslide.
 * Where this file mentions one it labels it a modern reconstruction in the same
 * sentence.
 *
 * Third, Gilgal is where chapters 5 to 10 operate from and nobody knows where it
 * is. The site register marks it disputed and the pin represents the area the text
 * describes. That is said out loud rather than hidden behind a confident dot.
 */

import type { Chapter, Milestone } from "../types";

export const CHAPTERS: Chapter[] = [
  /* ================================================================ */
  /* Chapter 1                                                        */
  /* ================================================================ */
  {
    id: "ch1",
    number: 1,
    title: "The commission",
    summary:
      "Moses is dead. Before it is a conquest narrative this is a succession narrative, and its weight falls on continuity: the promise sworn to the fathers, the land described to Moses, the law Joshua is told to keep.",
    phase: "preparation-and-entry",
    scriptureRange: "Joshua 1:1-18",
    milestoneIds: [
      "ch1-moses-is-dead",
      "ch1-described-extent",
      "ch1-three-days-to-the-crossing",
      "ch1-eastern-tribes-obligation",
    ],
    sections: [
      {
        id: "ch1-at-a-glance",
        kind: "at-a-glance",
        title: "At a glance",
        body:
          "Moses is dead, and the book begins by saying so. God tells [[entity:joshua]] to cross the Jordan, describes the land in terms far wider than anything the book goes on to report as held, and ties success to keeping Moses' law rather than to generalship. Be strong and courageous is said three times, then a fourth time back to Joshua by the eastern tribes.",
        scriptureRefs: ["Joshua 1:1-18"],
        citations: [],
        evidenceLabels: ["biblical-account"],
      },
      {
        id: "ch1-walk-through",
        kind: "walk-through",
        title: "Walk through the chapter",
        body:
          "The first word about [[entity:joshua]] is his old job title. He is Moses' servant, and Moses, the servant of Yahweh, is dead. Nothing is said about grief and nothing about a ceremony; the succession happens in a speech.\n\n" +
          "What God gives Joshua is first a command to move, then a description of where. Every place your foot treads, from the wilderness and this Lebanon to the great river Euphrates and the Great Sea. Then the assurance: as I was with [[entity:moses]], so I will be with you. Then the charge, three times, be strong and courageous, and each time it is tied not to numbers or nerve but to the book of the law, which is to stay in his mouth and be meditated on day and night.\n\n" +
          "Joshua's own first recorded act is logistics. He sends the officers through the camp: prepare food, you cross in three days.\n\n" +
          "Then he turns to [[entity:tribe-reuben]], [[entity:tribe-gad]] and [[entity:tribe-manasseh-east]], who already have land east of the river. Their families stay; their fighting men cross armed and ahead of their brothers, and they go home only when the others have rest. The tribes agree, and add a line of their own: whoever rebels will die. Only be strong and courageous.",
        scriptureRefs: ["Joshua 1:1-18"],
        citations: [
          {
            sourceId: "hess-joshua",
            locator: "on Joshua 1:1-9",
            supportedClaim:
              "The charge to Joshua is built around obedience to the law of Moses rather than around military instruction, and the exhortation is repeated three times",
          },
        ],
        evidenceLabels: ["biblical-account"],
      },
      {
        id: "ch1-what-brought-us-here",
        kind: "what-brought-us-here",
        title: "What brought us here",
        body:
          "[[entity:joshua]] is not a new name here. He appears as Moses' aide from the Exodus onward, as one of the twelve men sent to scout Canaan, and as one of only two of that generation permitted to enter it. His appointment has already happened twice: Moses laid hands on him before [[entity:eleazar]] and the assembly, and Moses charged him publicly in front of all Israel. Chapter 1 is God confirming a transfer that Moses had already made.\n\n" +
          "The eastern arrangement is older too. [[entity:tribe-reuben]] and [[entity:tribe-gad]] asked Moses for the land taken from [[entity:sihon]] and [[entity:og]], and the price Moses set was that their men fight west of the river until the rest of Israel had rest. Verses 12 to 18 are Joshua calling that in, and chapter 22 is where the account is finally settled.",
        scriptureRefs: [
          "Numbers 14:6-9",
          "Numbers 27:18-23",
          "Numbers 32:20-22",
          "Deuteronomy 31:7-8",
          "Deuteronomy 34:5-9",
        ],
        citations: [
          {
            sourceId: "block-deuteronomy",
            locator: "on Deuteronomy 31",
            supportedClaim:
              "Moses commissions Joshua publicly before his death, so Joshua 1 confirms an appointment rather than making one",
          },
          {
            sourceId: "block-deuteronomy",
            locator: "on Deuteronomy 3:18-20",
            supportedClaim:
              "The eastern tribes' obligation to fight west of the Jordan until their brothers have rest is set out in Moses' instructions",
          },
        ],
        evidenceLabels: ["biblical-account"],
      },
      {
        id: "ch1-surrounding-world",
        kind: "surrounding-world",
        title: "The surrounding world",
        body:
          "Canaan in the Late Bronze Age was not a country waiting to be annexed. It was a patchwork of small towns, each with a ruler holding the fields and villages within a few hours' walk, and all of them nominally answerable to Egypt. The Amarna letters are these rulers' own correspondence: they address Pharaoh as servants, complain about each other, and beg for a handful of soldiers. Egypt held the region through tribute, garrisons and vassals rather than through settlement, and its grip weakened toward the end of the period.\n\n" +
          "That is the world the description in verses 3 and 4 is spoken into, and it changes what the promise is offering. There was no throne in Canaan to capture and no capital whose fall would settle the question. A land organised this way could only be taken town by town, which is exactly the shape of chapters 6 to 12, and living in it meant surviving among dozens of neighbours who each had walls. It also frames the book's strangest silence. [[entity:egypt-new-kingdom]] is the strongest power anywhere near this story and is never named as an opponent in it.",
        scriptureRefs: ["Joshua 1:2-4"],
        citations: [
          {
            sourceId: "moran-amarna",
            supportedClaim:
              "The Amarna correspondence shows Canaan as a landscape of small city-state rulers writing to Pharaoh as servants and requesting small detachments of troops",
          },
          {
            sourceId: "rainey-notley-sacred-bridge",
            supportedClaim:
              "Egyptian control of Canaan operated through vassal rulers, garrisons and tribute, and weakened toward the end of the Late Bronze Age",
          },
          {
            sourceId: "mazar-archaeology-land",
            supportedClaim:
              "Late Bronze towns in Canaan were small, so a 'king' in this setting ruled a town and its fields",
          },
          {
            sourceId: "weinfeld-promise-land",
            supportedClaim:
              "The land promise is framed in the idiom of a grant of inheritance rather than as the annexation of an existing state",
          },
        ],
        evidenceLabels: ["externally-attested", "biblical-account"],
        collapsedByDefault: true,
      },
      {
        id: "ch1-why-it-matters",
        kind: "why-it-matters",
        title: "Why it matters",
        body:
          "The chapter's whole argument is continuity. The land is the land sworn to the fathers; the instruction is the instruction given to Moses; the presence promised is the presence Moses had. Joshua is handed nothing of his own. Even the courage he is commanded to have is grounded in someone else's promise.\n\n" +
          "Reformed readings press that hardest. Woudstra takes the land grant as one administration of a single covenant running from [[entity:abraham]] forward, so Joshua's task is to administer an inheritance rather than to win one, and Calvin reads verse 8 as making obedience the condition of the blessing without making it the ground of the gift. That is one Christian reading among several. Others put the accent on the conditionality itself, hearing in verses 7 and 8 a warning aimed past Joshua at later readers who had already lost the land.",
        scriptureRefs: ["Joshua 1:5-9", "Genesis 15:18-21", "Deuteronomy 17:18-20"],
        citations: [
          {
            sourceId: "woudstra-joshua",
            locator: "on Joshua 1:1-9",
            supportedClaim:
              "A Reformed covenantal reading in which the land grant belongs to one covenant running from the patriarchs forward",
          },
          {
            sourceId: "calvin-joshua",
            locator: "on Joshua 1:8",
            supportedClaim:
              "Calvin treats obedience to the law as the condition of the promised blessing without making it the basis of the gift",
          },
          {
            sourceId: "butler-joshua",
            locator: "on Joshua 1:7-8",
            supportedClaim:
              "The emphasis on the book of the law addresses a later audience for whom possession of the land was already a question",
          },
        ],
        evidenceLabels: ["theological-interpretation", "biblical-account"],
      },
      {
        id: "ch1-details-worth-noticing",
        kind: "details-worth-noticing",
        title: "Details worth noticing",
        body:
          "Verse 1 calls Moses the servant of Yahweh and [[entity:joshua]] the servant of Moses. Joshua receives the higher title only at his death, in Joshua 24:29.\n\n" +
          "Verse 4's phrase about all the land of the [[entity:hittites]] sits oddly in a description of Canaan, since the Hittite kingdom lay well to the north in Anatolia and Syria. It is one reason commentators read the verse as a horizon sketched in famous landmarks rather than as a surveyed boundary.\n\n" +
          "Three days turns up repeatedly in these opening chapters. The crossing is three days off here, [[entity:rahab]] tells the spies to hide three days in the hills, and the officers move through the camp after three days in chapter 3. The intervals do not obviously line up into one timetable, and the book makes no attempt to reconcile them.",
        scriptureRefs: ["Joshua 1:1", "Joshua 1:4", "Joshua 1:11", "Joshua 24:29"],
        citations: [
          {
            sourceId: "hess-joshua",
            locator: "on Joshua 1:4",
            supportedClaim:
              "The reference to the land of the Hittites describes a wide northern horizon rather than a boundary of Canaan",
          },
          {
            sourceId: "butler-joshua",
            locator: "on Joshua 1:10-11",
            supportedClaim:
              "The three-day notices in Joshua 1 to 3 are difficult to combine into a single sequence",
          },
        ],
        evidenceLabels: ["biblical-account", "disputed"],
        collapsedByDefault: true,
      },
      {
        id: "ch1-difficult-questions",
        kind: "difficult-questions",
        title: "Difficult questions",
        body:
          "Verses 3 and 4 describe a land reaching the Euphrates. Israel is never said in this book to hold that, and the book says so itself: Joshua 13:1 has God telling Joshua that very much land remains, Joshua 23:4 has Joshua allotting nations that remain, and [[entity:region-lebanon]] stands inside the extent here and among the unconquered there. The tension is not a slip somebody failed to tidy. It runs the length of the volume.\n\n" +
          "Three ways of taking it are live, and they are not exclusive. The verse may be a grant, describing a horizon the grantor is entitled to name whether or not it is occupied, which is how 1 Kings 4:21 later describes the reach of Solomon's rule. It may be a boundary formula drawn from the idiom of imperial inscriptions, in which totality is conventional rather than measured. Or it may be a standard the book deliberately sets so that chapters 13 and 23 can measure Israel against it. This study does not choose between them, and it does not colour in the outline.",
        scriptureRefs: [
          "Joshua 1:3-4",
          "Joshua 13:1-6",
          "Joshua 23:4-5",
          "Deuteronomy 11:24",
          "1 Kings 4:21",
        ],
        citations: [
          {
            sourceId: "hess-joshua",
            locator: "on Joshua 1:4 and 13:5",
            supportedClaim:
              "Lebanon appears both inside the described extent of the land and in the list of territory not yet possessed",
          },
          {
            sourceId: "weinfeld-promise-land",
            supportedClaim:
              "Descriptions of the promised land vary in extent and belong to the language of land grant rather than of survey",
          },
          {
            sourceId: "younger-conquest-accounts",
            supportedClaim:
              "Totalising territorial language is a convention of ancient conquest and boundary reporting",
          },
          {
            sourceId: "kitchen-reliability",
            supportedClaim:
              "The book's wide summaries must be read against its own admissions of territory not possessed",
          },
        ],
        evidenceLabels: ["biblical-account", "disputed", "externally-attested"],
        collapsedByDefault: true,
      },
    ],
    discussionQuestions: [
      "The charge repeats be strong and courageous three times and attaches it to keeping the law rather than to tactics. What does that ordering suggest Joshua was expected to be afraid of?",
      "Verse 4 describes a land reaching the Euphrates and Joshua 13:1 says much of it is still unpossessed. What should a map of Joshua 1 actually draw?",
      "Joshua is introduced as Moses' servant and does not get a title of his own until he dies. What is the book doing by keeping him in Moses' shadow through the whole commission?",
      "The eastern tribes already have their land, and are held to [[ref:Numbers 32:20-27|fighting for land they will never live on]] until everyone else has rest. What holds an arrangement like that together?",
    ],
    relatedEntityIds: [
      "joshua",
      "moses",
      "nun",
      "eleazar",
      "abraham",
      "rahab",
      "sihon",
      "og",
      "jordan-river",
      "shittim",
      "mount-nebo",
      "jericho",
      "great-sea",
      "mount-hermon",
      "heshbon",
      "ashtaroth",
      "region-moab-plateau",
      "region-jordan-valley",
      "region-lebanon",
      "region-gilead",
      "region-bashan",
      "hittites",
      "canaanites",
      "egypt-new-kingdom",
      "canaanite-city-states",
      "tribe-reuben",
      "tribe-gad",
      "tribe-manasseh-east",
    ],
    themeIds: [
      "leadership-and-succession",
      "promise-and-fulfillment",
      "land-and-inheritance",
    ],
    wordCount: 543,
  },

  /* ================================================================ */
  /* Chapter 2                                                        */
  /* ================================================================ */
  {
    id: "ch2",
    number: 2,
    title: "Rahab and the spies",
    summary:
      "Jericho seen from the inside. The one person in the chapter who states Israel's theology plainly is a Canaanite woman who sells sex for a living, and she is the reason two Israelites get home alive.",
    phase: "preparation-and-entry",
    scriptureRange: "Joshua 2:1-24",
    milestoneIds: [
      "ch2-two-men-cross-to-jericho",
      "ch2-rahab-on-the-roof",
      "ch2-down-the-wall",
      "ch2-three-days-in-the-hills",
    ],
    sections: [
      {
        id: "ch2-at-a-glance",
        kind: "at-a-glance",
        title: "At a glance",
        body:
          "Joshua sends two men to scout Jericho. They lodge with [[entity:rahab]], a Canaanite prostitute whose house is built into the city wall. She hides them under drying flax, misdirects the king's search party, and then delivers the clearest statement of Israel's theology anyone makes in the chapter. She bargains for her family and lets the men down by a rope.",
        scriptureRefs: ["Joshua 2:1-24"],
        citations: [],
        evidenceLabels: ["biblical-account"],
      },
      {
        id: "ch2-walk-through",
        kind: "walk-through",
        title: "Walk through the chapter",
        body:
          "[[entity:joshua]] sends two men out of the camp secretly, to view the land and Jericho in particular. They go into the house of a prostitute named [[entity:rahab]] and stay there. The text gives no reason for the choice.\n\n" +
          "Word reaches the king of [[entity:jericho]], who sends to Rahab for the men. By then she has taken them up to the flat roof and covered them with flax stalks laid out to dry. She tells the messengers the men have gone, suggesting a quick pursuit might catch them. The search leaves toward the fords, and the gate shuts behind it.\n\n" +
          "On the roof, she speaks. She knows Yahweh has given Israel the land. She has heard about [[ref:Exodus 14:21-31|the sea drying up]], and about [[entity:sihon]] and [[entity:og]]. Every heart in the city has melted. Yahweh is God in heaven above and on earth beneath. Then a demand: swear to me and to my father's house. They swear, with conditions. A scarlet cord in the window. Her family inside. Nothing said outside.\n\n" +
          "She lowers them by a rope through that window, because the house is built into the wall. They hide three days in the hills, then cross back. Their report to Joshua is nearly her sentence returned: Yahweh has given the land, and all its inhabitants melt before us.",
        scriptureRefs: ["Joshua 2:1-24"],
        citations: [
          {
            sourceId: "hess-joshua",
            locator: "on Joshua 2",
            supportedClaim:
              "Rahab's speech is the theological centre of the chapter and the spies' report repeats her language back to Joshua",
          },
        ],
        evidenceLabels: ["biblical-account"],
      },
      {
        id: "ch2-what-brought-us-here",
        kind: "what-brought-us-here",
        title: "What brought us here",
        body:
          "Joshua has done this job himself. He was one of [[ref:Numbers 13:1-16|the twelve men Moses sent from Kadesh]], and one of [[ref:Numbers 14:6-9|the two who came back saying the land could be taken]]. That earlier reconnaissance ended in [[ref:Numbers 13:31-33|a report that frightened Israel out of entering]] for [[ref:Numbers 14:26-35|a generation]]. This one is smaller, quieter and aimed at a single town.\n\n" +
          "The camp they leave is [[entity:shittim]], and the last thing Numbers reports happening there is Israel being drawn into the worship of another god and into sexual relations with [[entity:moab]] and Midian. Sending two men from that camp into a prostitute's house is a juxtaposition readers have long found pointed. What happens in the house runs the other way: the Canaanite woman is the one speaking for Yahweh.",
        scriptureRefs: [
          "Numbers 13:1-3",
          "Numbers 14:6-10",
          "Numbers 25:1-3",
          "Joshua 2:1",
        ],
        citations: [
          {
            sourceId: "hawk-joshua",
            locator: "on Joshua 2:1",
            supportedClaim:
              "The setting at Shittim and the choice of house are read as a deliberate literary inversion of the episode at Baal-Peor",
          },
          {
            sourceId: "hess-joshua",
            locator: "on Joshua 2:1",
            supportedClaim:
              "The mission is set against the earlier reconnaissance from Kadesh in which Joshua took part",
          },
        ],
        evidenceLabels: ["biblical-account", "theological-interpretation"],
      },
      {
        id: "ch2-surrounding-world",
        kind: "surrounding-world",
        title: "The surrounding world",
        body:
          "Jericho sits on a perennial spring where the road up from the Jordan fords begins to climb toward the hill country. It was a small walled town, the kind that controls a crossing and an oasis rather than a province, and most of its living came from irrigated fields around the spring. That is why flax is drying on a roof: flax is pulled before the grain harvest, then dried and retted for linen.\n\n" +
          "Roofs in towns like this were flat, plastered and used as working and sleeping space, so stalks spread there to dry are ordinary and so is a conversation held up in the open air. Houses commonly abutted the fortification line, and rooms were sometimes built directly against or into it, sharing its outer face. What state Jericho's own defences were in is a genuinely contested question, and it belongs to chapter 6.\n\n" +
          "How would a woman in Jericho know about a sea in Egypt a generation ago and a battle in Bashan last season? The same way anyone did. News travelled with traders, refugees and messengers along the routes Jericho guarded, and the Amarna correspondence shows Canaanite rulers well informed about events far outside their own valleys.",
        scriptureRefs: ["Joshua 2:6", "Joshua 2:10", "Joshua 2:15"],
        citations: [
          {
            sourceId: "nigro-tell-es-sultan",
            supportedClaim:
              "Tell es-Sultan is a small mound beside a perennial spring on the western edge of the Jordan valley, occupied for millennia",
          },
          {
            sourceId: "rainey-notley-sacred-bridge",
            supportedClaim:
              "Jericho commands the approach from the Jordan fords to the central hill country, and information moved along those routes",
          },
          {
            sourceId: "mazar-archaeology-land",
            supportedClaim:
              "Domestic architecture in Bronze Age Canaanite towns used flat roofs as working space and commonly built houses against the fortification line",
          },
          {
            sourceId: "moran-amarna",
            supportedClaim:
              "Canaanite rulers were well informed about military and political events well outside their own districts",
          },
          {
            sourceId: "hess-joshua",
            locator: "on Joshua 2:6",
            supportedClaim:
              "Flax drying on the roof places the episode in spring, the same season as the flooded Jordan of Joshua 3:15",
          },
        ],
        evidenceLabels: ["externally-attested", "biblical-account"],
        collapsedByDefault: true,
      },
      {
        id: "ch2-why-it-matters",
        kind: "why-it-matters",
        title: "Why it matters",
        body:
          "The chapter's theology is on the lips of the wrong person. [[entity:rahab]] is Canaanite, a woman, and a prostitute, and her sentence in verse 11, that Yahweh is God in heaven above and on earth beneath, is lifted almost intact from Deuteronomy 4:39. Nobody in Israel says anything that clear in these four chapters. The spies barely speak at all.\n\n" +
          "What that does to the book is structural rather than sentimental. If the issue in Canaan were ancestry, Rahab would be on the wrong side of it and stay there. She does not. She hears, she concludes, she acts, and she and her household live while Jericho does not. Held next to [[entity:achan]] five chapters later, an Israelite who takes what was devoted and dies with his household, the pairing is hard to read as accidental. The line the book actually draws is not one a map could draw.",
        scriptureRefs: ["Joshua 2:9-11", "Deuteronomy 4:39", "Joshua 7:24-26"],
        citations: [
          {
            sourceId: "hess-joshua",
            locator: "on Joshua 2:11",
            supportedClaim:
              "Rahab's confession echoes the language of Deuteronomy 4:39",
          },
          {
            sourceId: "hawk-joshua",
            supportedClaim:
              "Rahab and Achan function as a deliberate pair, an outsider brought in and an insider destroyed",
          },
          {
            sourceId: "mcconville-williams-joshua",
            supportedClaim:
              "The book's dividing line is response to Yahweh rather than ethnic descent",
          },
        ],
        evidenceLabels: ["biblical-account", "theological-interpretation"],
      },
      {
        id: "ch2-details-worth-noticing",
        kind: "details-worth-noticing",
        title: "Details worth noticing",
        body:
          "The word used of [[entity:rahab]] is the ordinary Hebrew term for a prostitute. Attempts to render it innkeeper are not supported by the term, and the narrative shows no interest in softening it. Her occupation is also what makes the story work: a house where strangers come and go without comment, and a woman who can speak to the king's men at her own door.\n\n" +
          "The oath is spatial. Everyone to be spared must be inside the house, anyone who steps into the street voids the guarantee, and the house is identified by a mark in a window. Safety is a place, which is the logic the doorframes in Exodus 12 work on as well.\n\n" +
          "The rope she lowers them with and the cord she is told to display are both ordinary domestic cordage, hanging from the same window. The sign is not supplied by Israel. She already owns it.\n\n" +
          "The spies' one reported sentence, in verse 24, is Rahab's claim handed back to Joshua. They scouted a city and came home quoting a Canaanite.",
        scriptureRefs: ["Joshua 2:1", "Joshua 2:15-21", "Joshua 2:24", "Exodus 12:7"],
        citations: [
          {
            sourceId: "bird-harlot-heroine",
            supportedClaim:
              "The term used of Rahab is the ordinary word for a prostitute, and her occupation explains both the traffic through her house and her freedom to deal with the king's messengers",
          },
          {
            sourceId: "hess-joshua",
            locator: "on Joshua 2:17-21",
            supportedClaim:
              "The oath is conditional on those to be spared remaining inside the marked house",
          },
        ],
        evidenceLabels: ["biblical-account"],
        collapsedByDefault: true,
      },
      {
        id: "ch2-difficult-questions",
        kind: "difficult-questions",
        title: "Difficult questions",
        body:
          "Rahab lies, and the narrative never comments. She misdirects a search party, and the New Testament texts that commend her faith do not raise the deception. Calvin met this head on and held that the lie itself was not excusable while the faith behind it was genuine, which is one Reformed way of keeping both. Others argue the narrative is working with a recognised category of deception under unjust threat, and others that the storyteller simply has no interest in the question. The text does not settle it.\n\n" +
          "Then there is what happens to her afterwards. When Jericho falls, her family is brought out and set outside the camp of Israel, and only after that is it said that she lived in Israel's midst. Spared is not the same as belonging, and the book records the interval without explaining it.\n\n" +
          "A smaller puzzle: the mission gathers no military intelligence. No count of fighting men, no note on the walls, no assessment of the gate. The one substantive thing the spies learn, they learn because a resident tells them.",
        scriptureRefs: ["Joshua 2:4-6", "Joshua 6:22-25", "Joshua 2:24"],
        citations: [
          {
            sourceId: "calvin-joshua",
            locator: "on Joshua 2:4-6",
            supportedClaim:
              "A Reformed reading that commends Rahab's faith while declining to excuse the falsehood",
          },
          {
            sourceId: "hawk-joshua",
            locator: "on Joshua 6:22-25",
            supportedClaim:
              "Rahab's household is placed outside the camp before any statement that she dwelt in Israel",
          },
          {
            sourceId: "hess-joshua",
            locator: "on Joshua 2:22-24",
            supportedClaim:
              "The spies' report concerns the morale of the land's inhabitants rather than its defences",
          },
        ],
        evidenceLabels: [
          "biblical-account",
          "theological-interpretation",
          "disputed",
        ],
        collapsedByDefault: true,
      },
    ],
    discussionQuestions: [
      "The clearest statement of Israel's own theology in these chapters is made by a Canaanite prostitute. What is the book doing by putting it in her mouth rather than in Joshua's?",
      "The two men are sent to view the land and come back with a report about morale rather than about defences. What did the mission actually accomplish?",
      "Rahab lies to the king's messengers and the narrative says nothing about it. Is the silence approval, indifference, or something else?",
      "Her family is spared, and then set outside the camp. What do you think has to happen for someone to move from spared to belonging?",
    ],
    relatedEntityIds: [
      "joshua",
      "rahab",
      "achan",
      "sihon",
      "og",
      "jericho",
      "shittim",
      "jordan-river",
      "region-jordan-valley",
      "canaanites",
      "amorites",
      "moab",
      "egypt-new-kingdom",
      "canaanite-city-states",
    ],
    themeIds: [
      "outsiders-and-belonging",
      "judgment-and-mercy",
      "promise-and-fulfillment",
    ],
    wordCount: 553,
  },
];

export const MILESTONES: Milestone[] = [
  /* ---------------------------------------------------------------- */
  /* Chapter 1                                                        */
  /* ---------------------------------------------------------------- */
  {
    id: "ch1-moses-is-dead",
    chapter: 1,
    order: 1,
    title: "Moses is dead, and Joshua is told to cross",
    scriptureRefs: ["Joshua 1:1-9"],
    narrative:
      "The book's first sentence is an obituary. Moses the servant of Yahweh is dead, and the man addressed is identified by his relationship to him: Joshua son of Nun, Moses' servant.\n\nWhat follows is not an installation ceremony. [[ref:Numbers 27:18-23|That had already happened]], in Moses' lifetime and in front of the assembly, and [[ref:Deuteronomy 31:7-8|Moses had charged Joshua publicly]] besides. Here God simply speaks, and the speech does three things at once. It gives an order, arise and cross this Jordan. It renews a promise, the land I am giving them, sworn to their fathers. And it sets a condition with nothing military in it: keep the whole law Moses commanded, do not turn from it to the right or the left, keep this book in your mouth and think about it day and night.\n\nBe strong and courageous comes three times in nine verses. The repetition is the point. A man told that often not to be afraid is a man with reasons to be, and the chapter never pretends otherwise.",
    entityIds: [
      "joshua",
      "moses",
      "nun",
      "jordan-river",
      "shittim",
      "mount-nebo",
      "jericho",
      "region-moab-plateau",
    ],
    mapFeatureIds: [
      "site-shittim",
      "site-jordan-river",
      "site-mount-nebo",
      "site-jericho",
      "region-moab-plateau",
    ],
    mapCaption:
      "Israel is camped on the valley floor east of the Jordan, opposite Jericho, with the Nebo ridge behind it.",
    whatChanged:
      "Nothing moves. The camp is where Deuteronomy left it, and the only thing that changes in this milestone is who is being spoken to.",
    geographyExplanation:
      "Israel is camped on the plains of Moab, a strip of valley floor east of the Jordan directly opposite Jericho and roughly two hundred and fifty metres below sea level. It is hot, watered by springs and wadis coming off the eastern plateau, and broad enough to hold a large encampment that is not being fed by farming. Behind the camp the ground climbs steeply to the Nebo ridge, from which the Jordan valley and the hill country beyond are visible on a clear day. Ahead lies the river and, some eight kilometres past it, the oasis and walls of Jericho. The whole commission is spoken within sight of the thing being promised, which is why the chapter can afford to be about obedience rather than about reconnaissance.",
    sequenceType: "event",
    viewport: {
      center: [35.6, 31.85],
      zoom: 10,
      bounds: [
        [35.35, 31.72],
        [35.85, 31.96],
      ],
    },
    citations: [
      {
        sourceId: "hess-joshua",
        locator: "on Joshua 1:1-9",
        supportedClaim:
          "The commission renews the promise to the fathers and makes obedience to the law of Moses its condition",
      },
      {
        sourceId: "rainey-notley-sacred-bridge",
        supportedClaim:
          "The plains of Moab are a defined stretch of valley floor opposite Jericho, below sea level, overlooked by the Nebo ridge",
      },
    ],
    evidenceLabels: ["biblical-account", "externally-attested"],
  },
  {
    id: "ch1-described-extent",
    chapter: 1,
    order: 2,
    title: "The extent described in verses 3 and 4",
    scriptureRefs: ["Joshua 1:3-4", "Deuteronomy 11:24", "Joshua 13:1-6"],
    narrative:
      "Four limits are named and none of them is a line. The wilderness in the south, this Lebanon in the north, the great river Euphrates in the north-east, and the Great Sea where the sun goes down. Between the second and the third lies all the land of the Hittites, a phrase that sits oddly here, since the Hittite kingdom lay well to the north.\n\nRead as a map this is enormous, several hundred kilometres deep, taking in Syria and the middle Euphrates. Read as what it is, a horizon given in landmarks, it states scope rather than holdings. The same book will say, twelve chapters later, that very much land remains to be possessed, and will name Lebanon among it. Both sentences are in Joshua. The honest way to draw verse 4 is as an outline with nothing coloured inside it, because the book itself never claims the inside was filled.",
    entityIds: [
      "joshua",
      "moses",
      "great-sea",
      "mount-hermon",
      "jordan-river",
      "region-lebanon",
      "hittites",
      "canaanites",
    ],
    mapFeatureIds: [
      "site-great-sea",
      "site-mount-hermon",
      "site-jordan-river",
      "remain-lebanon",
    ],
    mapCaption:
      "The widest description in the book, shown as a described horizon rather than as ground held.",
    whatChanged:
      "Nothing is entered and nothing is taken. This is a territorial description, so the map widens its frame and adds no advance, no route and no shaded holding.",
    geographyExplanation:
      "The four markers are chosen because everyone knows them. Three are real and fixed: the Great Sea on the west, the Lebanon range in the north, the desert margin in the south. The fourth, the Euphrates, lies several hundred kilometres north-east of the Jordan, well beyond any ground this book narrates Israel as entering. The distance is the information. Between the Jordan and the Euphrates sit the Syrian steppe and the territory of powers that Joshua never mentions. Reading the verse as a claim to that country produces a map contradicted twelve chapters later by Joshua 13, where Lebanon and the northern valley appear among the land still to be possessed. The same range therefore belongs on two layers at once, as terrain and as territory not taken, and both are accurate.",
    sequenceType: "allotment",
    viewport: {
      center: [36.2, 32.8],
      zoom: 7,
      bounds: [
        [33.6, 29.9],
        [39.2, 35.4],
      ],
    },
    citations: [
      {
        sourceId: "hess-joshua",
        locator: "on Joshua 1:3-4",
        supportedClaim:
          "The description in Joshua 1:4 names a wide horizon in landmarks, including Lebanon, which Joshua 13:5 lists among the land not yet possessed",
      },
      {
        sourceId: "weinfeld-promise-land",
        supportedClaim:
          "Descriptions of the promised land vary in extent and belong to the language of a grant rather than of a surveyed boundary",
      },
      {
        sourceId: "kitchen-reliability",
        supportedClaim:
          "Wide territorial statements in Joshua must be read against the book's own admissions of land not possessed",
      },
      {
        sourceId: "rainey-notley-sacred-bridge",
        supportedClaim:
          "The Great Sea, the Lebanon range and the Euphrates as the outer markers used in biblical land descriptions, and the distances between them",
      },
    ],
    evidenceLabels: ["biblical-account", "disputed"],
  },
  {
    id: "ch1-three-days-to-the-crossing",
    chapter: 1,
    order: 3,
    title: "Three days to the crossing",
    scriptureRefs: ["Joshua 1:10-11"],
    narrative:
      "Joshua's first recorded act as leader is an order about food. The officers go through the camp with one instruction: prepare provisions, because in three days you cross this Jordan to go in and possess the land.\n\nIt is a small detail with a good deal inside it. Israel is still being fed by manna at this point, and the text does not explain what the provisions were for. The move itself is short, about ten kilometres from the camp in the plains of Moab down to the riverbank opposite Jericho, so the three days are not travelling time. And the verb in the order is possess, not raid. Whatever the crossing turns out to cost, the stated intention from the first order onward is to stay.",
    entityIds: [
      "joshua",
      "shittim",
      "jordan-river",
      "jericho",
      "region-moab-plateau",
      "region-jordan-valley",
    ],
    mapFeatureIds: [
      "site-shittim",
      "site-jordan-crossing-region",
      "site-jordan-river",
      "route-shittim-to-jordan",
      "site-jericho",
    ],
    mapCaption:
      "About ten kilometres of valley floor between the camp at Shittim and the reach of river opposite Jericho.",
    whatChanged:
      "Still nothing on the ground. An order has been given for a move that has not happened yet, so the route is shown as intent rather than as travel.",
    geographyExplanation:
      "The plains of Moab and the Jericho oasis are two ends of a single flat corridor, and the gap between them is small. Ten kilometres of valley floor, most of it level, then the river, then another eight or so to Jericho itself. Nothing about the distance requires three days. What does take preparation is the river. The Jordan does not run in a straight channel but winds through a dense thicketed floodplain, the Zor, sunk below the wider valley terrace, and at this season it is over its banks. An army that means to cross with families, livestock and equipment has to gather and carry what it needs first, because there is no provisioning on the far bank until the harvest around Jericho is reached.",
    sequenceType: "event",
    viewport: {
      center: [35.58, 31.858],
      zoom: 11,
    },
    citations: [
      {
        sourceId: "rainey-notley-sacred-bridge",
        supportedClaim:
          "The distance from the plains of Moab to the Jordan opposite Jericho, and from the river to the Jericho oasis",
      },
      {
        sourceId: "hess-joshua",
        locator: "on Joshua 1:10-11",
        supportedClaim:
          "The order to prepare provisions precedes the crossing and uses the language of taking possession",
      },
    ],
    evidenceLabels: ["biblical-account", "reconstruction"],
  },
  {
    id: "ch1-eastern-tribes-obligation",
    chapter: 1,
    order: 4,
    title: "The eastern tribes are held to their terms",
    scriptureRefs: [
      "Joshua 1:12-18",
      "Numbers 32:20-22",
      "Deuteronomy 3:18-20",
    ],
    narrative:
      "[[entity:tribe-reuben]], [[entity:tribe-gad]] and [[entity:tribe-manasseh-east]] are in an odd position. They already have what everyone else is crossing to get. Moses gave them the plateau and highlands taken from [[entity:sihon]] and [[entity:og]], and their wives, children and herds are staying there.\n\nJoshua holds them to the terms. Their fighting men cross armed and go in front, and they may return to their own land only when their brothers have rest and have possessed theirs. The debt is not measured in years but in an outcome, which means nobody in the chapter knows how long it will run.\n\nThey agree without hedging, then add something Joshua did not ask for: anyone who rebels against your orders will be put to death. Only be strong and courageous. The fourth and last use of that phrase in the chapter is theirs, spoken back to him.\n\nThis thread does not close until chapter 22, and when it does it nearly causes a war.",
    entityIds: [
      "joshua",
      "moses",
      "sihon",
      "og",
      "tribe-reuben",
      "tribe-gad",
      "tribe-manasseh-east",
      "heshbon",
      "ashtaroth",
      "jordan-river",
      "region-gilead",
      "region-bashan",
    ],
    mapFeatureIds: [
      "site-heshbon",
      "site-ashtaroth",
      "site-jordan-river",
      "site-arnon-river",
      "site-jabbok-river",
      "region-gilead",
      "region-bashan",
    ],
    mapCaption:
      "The eastern tribes' land lies behind them, across the river. The obligation they are held to runs west.",
    whatChanged:
      "No border moves and no ground changes hands. What changes is that fighting men from land already settled are committed to a campaign on the far side of the river, for an unspecified length of time.",
    geographyExplanation:
      "The eastern holdings are real country, not a consolation prize. North of the Arnon gorge and running up past the Jabbok into Gilead and Bashan is high rolling tableland with enough rain for grain and grazing, which is the stated reason Reuben and Gad wanted it in the first place. What makes the arrangement fragile is the river between. The Jordan is crossable at a limited number of fords, and in flood at even fewer, so an obligation to fight on the western side means leaving families a long way behind a barrier that is not always passable. The same geography that makes the eastern tribes secure at home makes them look, from the west bank, like people who have settled outside. Chapter 22 is the argument that follows from exactly this.",
    sequenceType: "event",
    viewport: {
      center: [35.85, 32.1],
      zoom: 8,
      bounds: [
        [35.4, 31.4],
        [36.35, 33.0],
      ],
    },
    citations: [
      {
        sourceId: "havrelock-river-jordan",
        supportedClaim:
          "The Jordan functions as a boundary that both joins and separates, which is what puts the eastern tribes in an ambiguous position",
      },
      {
        sourceId: "block-deuteronomy",
        locator: "on Deuteronomy 3:18-20",
        supportedClaim:
          "Moses set the condition that the eastern tribes' men fight west of the river until the other tribes had rest",
      },
      {
        sourceId: "rainey-notley-sacred-bridge",
        supportedClaim:
          "The Transjordan plateau between the Arnon and the Jabbok, and Gilead and Bashan beyond it, as grain and grazing country",
      },
    ],
    evidenceLabels: ["biblical-account", "externally-attested"],
  },

  /* ---------------------------------------------------------------- */
  /* Chapter 2                                                        */
  /* ---------------------------------------------------------------- */
  {
    id: "ch2-two-men-cross-to-jericho",
    chapter: 2,
    order: 1,
    title: "Two men go into Jericho",
    scriptureRefs: ["Joshua 2:1"],
    narrative:
      "One verse covers the whole journey. Joshua sends two men from [[entity:shittim]] secretly, telling them to view the land and Jericho in particular, and the next thing the text reports is that they are inside the city, in the house of a woman named [[entity:rahab]].\n\nNothing is said about how they crossed a river in flood, nothing about how they got through a gate, and nothing about why they went to that house. The silence is worth registering, because readers tend to fill it. The text's only interest is in getting them to the roof where the speech happens.\n\nCommentators have noted that the secrecy may be directed at Israel as much as at Jericho, since the last public scouting report stopped the nation in its tracks for a generation. The text does not say.",
    entityIds: [
      "joshua",
      "rahab",
      "shittim",
      "jericho",
      "jordan-river",
      "region-jordan-valley",
      "canaanites",
    ],
    mapFeatureIds: [
      "site-shittim",
      "site-jordan-river",
      "site-jordan-crossing-region",
      "site-jericho",
      "region-jordan-valley",
    ],
    mapCaption:
      "Two men cross the valley floor from the camp at Shittim to the walled mound at Jericho.",
    whatChanged:
      "Two Israelites are inside a Canaanite town for the first time in the book. No ground is held and no force has moved.",
    geographyExplanation:
      "The distance is short and the terrain is easy: roughly twenty kilometres of flat valley floor from Shittim to Jericho, with the river in the middle of it. What makes the errand serious is not the walk but the crossing, since the Jordan is at flood stage in this season, and the town at the far end sits in open country where two strangers approaching from the east have nowhere to hide. Jericho watches that approach for a living. It stands at the point where anyone coming up from the fords has to pass before climbing into the hill country, which is exactly why it is the town Joshua names.",
    sequenceType: "event",
    viewport: {
      center: [35.5, 31.87],
      zoom: 11,
      bounds: [
        [35.38, 31.8],
        [35.7, 31.94],
      ],
    },
    citations: [
      {
        sourceId: "hess-joshua",
        locator: "on Joshua 2:1",
        supportedClaim:
          "The spies are sent secretly and the narrative passes over the journey and the entry into the city without comment",
      },
      {
        sourceId: "rainey-notley-sacred-bridge",
        supportedClaim:
          "Jericho stands where the route from the Jordan fords begins the ascent into the central hill country",
      },
    ],
    evidenceLabels: ["biblical-account", "externally-attested"],
  },
  {
    id: "ch2-rahab-on-the-roof",
    chapter: 2,
    order: 2,
    title: "Rahab on the roof",
    scriptureRefs: ["Joshua 2:2-14"],
    narrative:
      "The king of Jericho hears about it and sends to [[entity:rahab]] directly. That detail says something about the size of the place: the ruler knows whose house the strangers went into.\n\nShe has already moved them. Up to the flat roof, under stalks of flax spread out to dry, then back down to deal with the men at her door. They came, she says, and they left; the gate was closing; go after them. The search party takes the road toward the fords.\n\nThen she climbs back up, and what follows is the theological centre of the chapter. I know Yahweh has given you this land. Terror of you has fallen on us. We heard how he dried up the sea in front of you, and what you did to [[entity:sihon]] and [[entity:og]] east of the river. Our hearts melted and no courage is left in anyone. Yahweh your God is God in heaven above and on earth beneath.\n\nOnly then does she ask for anything. Deal kindly with my father's house as I have dealt kindly with you, and give me a sure sign. Her terms are ready before she has their answer.",
    entityIds: [
      "rahab",
      "sihon",
      "og",
      "jericho",
      "jordan-river",
      "canaanites",
      "amorites",
      "egypt-new-kingdom",
    ],
    mapFeatureIds: ["site-jericho"],
    mapCaption:
      "Rahab's house stands in the wall of a small mound beside the spring, with the desert escarpment rising behind the town.",
    whatChanged:
      "Nothing territorial. What changes is informational, and it runs both ways: Israel learns that Jericho's morale has already collapsed, and one household in Jericho secures an undertaking.",
    geographyExplanation:
      "Jericho's mound, Tell es-Sultan, sits beside a perennial spring on the western edge of the valley floor, roughly two hundred and fifty metres below sea level. It is one of the lowest inhabited places anywhere and one of the longest occupied, lived in on and off for thousands of years before this chapter. It is also small, a walled area of a few hectares rather than a city in any modern sense, which is what makes a king who knows whose house the strangers entered entirely plausible. Immediately west the ground rises steeply into bare limestone escarpment cut by wadis. Immediately east is flat irrigated ground running out to the river. Rahab's window looks out from the wall of a town with a desert at its back and a floodplain in front of it.",
    sequenceType: "event",
    viewport: {
      center: [35.4442, 31.8715],
      zoom: 12,
    },
    citations: [
      {
        sourceId: "hess-joshua",
        locator: "on Joshua 2:8-13",
        supportedClaim:
          "Rahab's speech reports the effect of news of the sea crossing and the defeats of Sihon and Og on Canaanite morale",
      },
      {
        sourceId: "nigro-tell-es-sultan",
        supportedClaim:
          "Tell es-Sultan is a small mound beside a perennial spring, far below sea level, with a very long occupation history",
      },
      {
        sourceId: "rainey-notley-sacred-bridge",
        supportedClaim:
          "The setting of Jericho between the desert escarpment to the west and the irrigated valley floor to the east",
      },
      {
        sourceId: "bird-harlot-heroine",
        supportedClaim:
          "Rahab's position in the town explains both the traffic through her house and her ability to negotiate at her own door",
      },
    ],
    evidenceLabels: ["biblical-account", "externally-attested"],
  },
  {
    id: "ch2-down-the-wall",
    chapter: 2,
    order: 3,
    title: "Down the wall on a rope",
    scriptureRefs: ["Joshua 2:15-21"],
    narrative:
      "Verse 15 is the detail everything else hangs on. Her house was in the side of the wall and she lived in the wall, so she lets them down by a rope through a window and they never go near a gate.\n\nThe terms are settled on the way out. Go to the hills and hide three days until the pursuers are back, then go your way. The men add conditions of their own, and they are precise. This scarlet cord in the window. Everyone you want spared inside this house. Anyone who steps into the street is on his own, and if you tell anyone, the oath is void.\n\nShe agrees, they go, and she ties the cord in the window. The chapter does not say she sat by it or watched for the army. It records only that the mark went up while Israel was still on the far side of the river.",
    entityIds: ["rahab", "jericho", "canaanites"],
    mapFeatureIds: ["site-jericho"],
    mapCaption:
      "A rope out of a window in the fortification line, and a scarlet cord left hanging in its place.",
    whatChanged:
      "The spies are outside the walls with an agreement in force, and one window in Jericho's fortification line is now marked.",
    geographyExplanation:
      "A house in the wall is not an oddity. In a town this size the fortification line was the most substantial masonry available, and domestic rooms were commonly built against it or into it, sharing its outer face. A window in that face opens straight onto the slope outside the town, which is why a rope is enough to put two men in open country without passing a gate. How Jericho's own defences were built, and what condition they were in, is a genuinely contested archaeological question that belongs to chapter 6. All this chapter needs from the ground is that the wall had houses in it, and that the terrain outside fell away toward hills close enough to reach before the search party got back.",
    sequenceType: "event",
    viewport: {
      center: [35.4442, 31.8715],
      zoom: 12,
    },
    citations: [
      {
        sourceId: "mazar-archaeology-land",
        supportedClaim:
          "Houses in Bronze Age Canaanite towns were commonly built against or into the fortification line",
      },
      {
        sourceId: "hess-joshua",
        locator: "on Joshua 2:15-21",
        supportedClaim:
          "The house's position in the wall allows the escape, and the oath is made conditional on the marked window and on the household staying indoors",
      },
    ],
    evidenceLabels: ["biblical-account", "externally-attested"],
  },
  {
    id: "ch2-three-days-in-the-hills",
    chapter: 2,
    order: 4,
    title: "Three days in the hills, then the report",
    scriptureRefs: ["Joshua 2:22-24"],
    narrative:
      "They do exactly what she told them. Three days in the hill country while the search works the fords, then down, across the river, and back to [[entity:joshua]].\n\nTheir report is two sentences long and contains no military information at all. Yahweh has delivered all the land into our hands, and all the inhabitants melt before us. No count of fighting men, no note on the height of the walls, no assessment of the gate. What they bring back is morale, and they bring it back in the words of the woman who gave it to them.\n\nIt is Numbers 13 run again with the opposite outcome. The same errand, a comparable report, and this time nobody argues.",
    entityIds: [
      "joshua",
      "rahab",
      "jericho",
      "shittim",
      "jordan-river",
      "region-jordan-valley",
    ],
    mapFeatureIds: [
      "site-jericho",
      "site-jordan-river",
      "site-jordan-crossing-region",
      "site-shittim",
      "region-jordan-valley",
    ],
    mapCaption:
      "The spies wait out the search in the escarpment west of Jericho, then recross to the camp.",
    whatChanged:
      "The reconnaissance ends and Israel has its answer. Still no ground taken, but the decision to cross is now backed by testimony from inside the first town.",
    geographyExplanation:
      "The hills they hide in are the desert escarpment immediately west of Jericho, where within two or three kilometres the valley floor gives way to bare limestone rising more than a kilometre, cut by deep wadis and pocked with caves. It is close, it is visible from the town, and it is close to unsearchable. The pursuit goes the other way, east to the fords, because that is the direction men trying to reach the Israelite camp would have to take. That is what makes Rahab's instruction good advice: the searchers are working the only route out while the spies sit above them on the wrong side of town. When the three days are up the same short distances let them come down, cross, and be back in camp quickly.",
    sequenceType: "event",
    viewport: {
      center: [35.5, 31.87],
      zoom: 11,
      bounds: [
        [35.36, 31.8],
        [35.68, 31.94],
      ],
    },
    citations: [
      {
        sourceId: "rainey-notley-sacred-bridge",
        supportedClaim:
          "The escarpment west of Jericho rises steeply out of the valley floor and the Jordan is crossed at a limited number of fords",
      },
      {
        sourceId: "hess-joshua",
        locator: "on Joshua 2:22-24",
        supportedClaim:
          "The spies' report to Joshua restates Rahab's own claim about the land and its inhabitants",
      },
    ],
    evidenceLabels: ["biblical-account", "externally-attested"],
  },
];
