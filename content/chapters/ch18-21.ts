import type { Chapter, Milestone } from "../types";

/**
 * Joshua 18-21: Shiloh and the survey, the remaining allotments, the cities of
 * refuge, and the forty-eight Levitical towns.
 *
 * Three constraints govern this file.
 *
 * 1. Levi is never drawn as a territory. The text says it has none, so the map
 *    shows only scattered town markers inside other tribes' areas.
 * 2. Two of the six cities of refuge, Bezer and Golan, have no known location, and
 *    Ramoth in Gilead is disputed. They are named in the narrative and carried in
 *    the entity lists, and they are absent from `mapFeatureIds` on purpose.
 * 3. Simeon gets no block of its own. Its towns sit inside Judah's area, which is
 *    what Joshua 19:1-9 describes.
 */

export const CHAPTERS: Chapter[] = [
  /* ================================================================== */
  /* Chapter 18                                                         */
  /* ================================================================== */
  {
    id: "ch18",
    number: 18,
    title: "Shiloh, the survey, and Benjamin",
    summary:
      "The tent of meeting moves up from the valley to Shiloh, Joshua confronts seven tribes still without land, a survey party writes a description of what is left, and the lot gives Benjamin a small and strategically crowded territory.",
    phase: "inheritance-and-life",
    scriptureRange: "Joshua 18:1-28",
    milestoneIds: [
      "ch18-tent-of-meeting-to-shiloh",
      "ch18-rebuke-and-survey-party",
      "ch18-lot-cast-at-shiloh",
      "ch18-benjamin-allotted",
    ],
    sections: [
      {
        id: "ch18-at-a-glance",
        kind: "at-a-glance",
        title: "At a glance",
        body:
          "Israel's centre moves from [[entity:gilgal]] on the valley floor up to [[entity:shiloh]] in the hill country, and the tent of meeting goes with it. Seven tribes still hold no inheritance. [[entity:joshua]] asks them how long they mean to wait, sends twenty-one men to survey the land and write it down, and casts lots at Shiloh. [[entity:tribe-benjamin]] draws the first of the seven portions.",
        scriptureRefs: ["Joshua 18:1-10", "Joshua 18:11-28"],
        citations: [],
        evidenceLabels: ["biblical-account"],
      },
      {
        id: "ch18-walk-through",
        kind: "walk-through",
        title: "Walk through the chapter",
        body:
          "The chapter opens with a move. The whole assembly gathers at [[entity:shiloh]] and the tent of meeting is set up there, which shifts Israel's base out of the valley camp at [[entity:gilgal]] and into the highlands for the rest of the book. In the same verse the text says the land was subdued; three verses later [[entity:joshua]] accuses seven tribes of neglecting to go in and possess it. Both sentences stand, and neither is withdrawn.\n\nHis remedy is procedural rather than military. Each of the seven tribes appoints three men, twenty-one in all, who walk the land, describe it town by town, and write the result into a document divided into seven portions. When it comes back, Joshua casts lots at Shiloh before the LORD. [[entity:tribe-judah]] is already settled to the south and the house of Joseph to the north, so the seven have to fit around them.\n\nThe lot falls first to [[entity:tribe-benjamin]]. Its boundary runs from the [[entity:jordan-river]] past [[entity:jericho]], west along the ridge by [[entity:bethel]], down to the mountain south of [[entity:lower-beth-horon]], out to [[entity:kiriath-jearim]], then back east through the valley under [[entity:jerusalem]] to the [[entity:salt-sea]]. Twenty-six towns follow, [[entity:gibeon]], [[entity:mizpah-benjamin]], [[entity:beeroth]] and [[entity:chephirah]] among them.",
        scriptureRefs: ["Joshua 18:1-3", "Joshua 18:4-10", "Joshua 18:11-20", "Joshua 18:21-28"],
        citations: [
          {
            sourceId: "hess-joshua",
            locator: "on Joshua 18:1-10",
            supportedClaim:
              "The survey party produces a written description of the land that the lot then divides",
          },
        ],
        evidenceLabels: ["biblical-account"],
      },
      {
        id: "ch18-what-brought-us-here",
        kind: "what-brought-us-here",
        title: "What brought us here",
        body:
          "Chapters 14 to 17 gave the south to [[entity:tribe-judah]] and the centre to [[entity:tribe-ephraim]] and [[entity:tribe-manasseh-west]], with [[entity:caleb]] claiming [[entity:hebron]] ahead of everyone. [[entity:tribe-reuben]], [[entity:tribe-gad]] and [[entity:tribe-manasseh-east]] had already received their land from [[entity:moses]] before the book opened. That leaves seven tribes unplaced and an assembly still camped near the river. The work has stalled, and chapter 18 treats the stalling, not enemy strength, as the thing needing a remedy.",
        scriptureRefs: ["Joshua 13:8-14", "Joshua 14:6-15", "Joshua 17:14-18"],
        citations: [
          {
            sourceId: "woudstra-joshua",
            supportedClaim:
              "The allotment chapters are structured around a distinction between land assigned and land entered",
          },
        ],
        evidenceLabels: ["biblical-account"],
      },
      {
        id: "ch18-surrounding-world",
        kind: "surrounding-world",
        title: "The surrounding world",
        body:
          "[[entity:shiloh]] is Khirbet Seilun, identified with unusual confidence because the ancient name survived in the local one. Excavation found Middle Bronze fortification, then a substantial village in the Iron Age I period with storage buildings, and then a destruction generally connected with the events behind 1 Samuel 4. No sanctuary building has been dug up there, which is worth saying plainly; it is also what you would expect of a tent.\n\nThe written survey is the other thing a reader from a later century might miss. Boundary descriptions traced point by point, and town lists counted by number, resemble the administrative paperwork of the second millennium rather than a storyteller's summary. That does not by itself date the lists, and scholars disagree about when they were compiled.",
        scriptureRefs: ["Joshua 18:8-9", "1 Samuel 4:10-11"],
        citations: [
          {
            sourceId: "finkelstein-shiloh",
            supportedClaim:
              "Shiloh's occupation sequence, its Iron Age I prominence, and the destruction of that phase",
          },
          {
            sourceId: "hess-joshua",
            supportedClaim:
              "Joshua's boundary and town lists resemble second-millennium administrative forms",
          },
          {
            sourceId: "aharoni-land-of-bible",
            supportedClaim:
              "The tribal lists follow an administrative logic of boundary points and counted towns",
          },
        ],
        evidenceLabels: ["externally-attested", "reconstruction", "disputed"],
        collapsedByDefault: true,
      },
      {
        id: "ch18-why-it-matters",
        kind: "why-it-matters",
        title: "Why it matters",
        body:
          "Joshua's question treats delay as a spiritual problem rather than a logistical one. Nothing in the chapter suggests the seven tribes lacked the means; what they lack is the will to go up and live on ground already assigned to them. A gift can be genuine and unclaimed at the same time, and the book is content to leave that uncomfortable.\n\nReformed readers, Calvin among them, take the lot in the same direction: not a gamble but a submission of the division to God's decision, which is why the text says Joshua cast lots *before the LORD*. That is a Reformed emphasis and not the only Christian reading; others weigh the lot as a practical safeguard that stopped the strongest tribes simply taking the best ground. Either way the land is handed out rather than seized.",
        scriptureRefs: ["Joshua 18:3", "Joshua 18:6-10"],
        citations: [
          {
            sourceId: "calvin-joshua",
            locator: "on Joshua 18",
            supportedClaim:
              "Calvin reads the casting of the lot as an appeal to God's decision rather than to chance",
          },
          {
            sourceId: "davis-joshua",
            supportedClaim:
              "Joshua's rebuke is read as addressing reluctance rather than incapacity",
          },
        ],
        evidenceLabels: ["theological-interpretation"],
      },
      {
        id: "ch18-details-worth-noticing",
        kind: "details-worth-noticing",
        title: "Details worth noticing",
        body:
          "Verse 1 says the land was subdued; verse 3 asks how long the tribes will neglect to possess it. The book keeps those two verbs apart, and a reader who collapses them will misread the next six chapters.\n\nJoshua pauses in the middle of the instructions to say that [[entity:tribe-levi]] has no portion because the priesthood is its inheritance. That sentence is the seed of chapter 21.\n\nBenjamin's town list ends with 'the Jebusite, also called Jerusalem'. [[entity:jerusalem]] is therefore inside an allotment while [[entity:jebusites]] still live in it, and Joshua 15:63 has already said so. The list also includes [[entity:bethel]], whose approaches sit on Ephraim's border, and a Gibeath usually taken to be [[entity:gibeah]].",
        scriptureRefs: ["Joshua 18:1", "Joshua 18:3", "Joshua 18:7", "Joshua 18:28", "Joshua 15:63"],
        citations: [
          {
            sourceId: "kitchen-reliability",
            supportedClaim:
              "The book's summary statements have to be read against its own admissions of unconquered ground",
          },
        ],
        evidenceLabels: ["biblical-account"],
        collapsedByDefault: true,
      },
      {
        id: "ch18-difficult-questions",
        kind: "difficult-questions",
        title: "Difficult questions",
        body:
          "Why survey land that has already been given? The chapter does not answer, and the two obvious answers pull against each other: either the promise needs human work to become an address, or the survey is an admission that nobody yet knows what is out there.\n\nThe historical question is what kind of document Joshua 18:9 describes. Some read the lists as genuine early registers preserved and reused; others as the administrative geography of a much later kingdom projected backwards. We cannot decide this from the lists alone, and this study does not pretend the disagreement is settled.",
        scriptureRefs: ["Joshua 18:4-9"],
        citations: [
          {
            sourceId: "boling-wright-joshua",
            supportedClaim:
              "The tribal lists are reconstructed by some scholars as reflecting a later administrative reality",
          },
          {
            sourceId: "hess-joshua",
            supportedClaim:
              "The lists are argued by others to preserve second-millennium documentary forms",
          },
          {
            sourceId: "butler-joshua",
            supportedClaim:
              "Form-critical analysis of the boundary and town lists remains contested",
          },
        ],
        evidenceLabels: ["disputed", "reconstruction"],
        collapsedByDefault: true,
      },
    ],
    discussionQuestions: [
      "Joshua 18:1 says the land was subdued and 18:3 says the tribes had not gone in to possess it. What practical difference is the chapter drawing between those two things?",
      "Why might it matter that the sanctuary moved from a camp beside the Jordan fords to a basin in the hill country, rather than staying at the crossing place Israel entered by?",
      "The seven tribes are told to write a description of the land before any lot is cast. What does that order of operations suggest about how the inheritance was meant to work?",
      "Benjamin's territory is small but holds Jericho, the Gibeonite towns, the Beth-horon descent and Jerusalem's site. What would you expect that to mean for the tribe that lives there?",
      "Jerusalem appears in Benjamin's town list while the book says its inhabitants were not driven out. How should a reader hold a list like that?",
    ],
    relatedEntityIds: [
      "joshua",
      "moses",
      "caleb",
      "shiloh",
      "gilgal",
      "jericho",
      "bethel",
      "gibeon",
      "chephirah",
      "beeroth",
      "kiriath-jearim",
      "mizpah-benjamin",
      "gibeah",
      "jerusalem",
      "lower-beth-horon",
      "upper-beth-horon",
      "jordan-river",
      "salt-sea",
      "tribe-benjamin",
      "tribe-judah",
      "tribe-ephraim",
      "tribe-manasseh-west",
      "tribe-manasseh-east",
      "tribe-reuben",
      "tribe-gad",
      "tribe-levi",
      "jebusites",
      "gibeonite-league",
      "region-hill-country-ephraim",
      "region-jordan-valley",
    ],
    themeIds: ["land-and-inheritance", "holiness-and-presence", "obedience-and-failure"],
    wordCount: 485,
  },

  /* ================================================================== */
  /* Chapter 19                                                         */
  /* ================================================================== */
  {
    id: "ch19",
    number: 19,
    title: "The remaining tribes, and Joshua last",
    summary:
      "Six more lots are drawn for Simeon, Zebulun, Issachar, Asher, Naphtali and Dan, and when everything else has been handed out the man who ran the distribution is given one town in the hills of Ephraim.",
    phase: "inheritance-and-life",
    scriptureRange: "Joshua 19:1-51",
    milestoneIds: [
      "ch19-simeon-within-judah",
      "ch19-zebulun-in-lower-galilee",
      "ch19-issachar-and-the-valley",
      "ch19-asher-toward-sidon",
      "ch19-naphtali-in-the-north",
      "ch19-dan-toward-the-coast",
      "ch19-joshua-takes-his-portion-last",
    ],
    sections: [
      {
        id: "ch19-at-a-glance",
        kind: "at-a-glance",
        title: "At a glance",
        body:
          "Lots two to seven finish the distribution. [[entity:tribe-simeon]] receives towns inside Judah's area rather than a block of its own. [[entity:tribe-zebulun]], [[entity:tribe-issachar]], [[entity:tribe-asher]] and [[entity:tribe-naphtali]] take the north; [[entity:tribe-dan]] takes a small area toward the coast that it does not hold. Last of all, [[entity:joshua]] is given [[entity:timnath-serah]], and the allotment closes at [[entity:shiloh]].",
        scriptureRefs: ["Joshua 19:1-9", "Joshua 19:40-48", "Joshua 19:49-51"],
        citations: [],
        evidenceLabels: ["biblical-account"],
      },
      {
        id: "ch19-walk-through",
        kind: "walk-through",
        title: "Walk through the chapter",
        body:
          "The second lot goes to [[entity:tribe-simeon]], and the text is unusually frank about why it looks odd: Judah's portion was too large, so Simeon's seventeen towns sit inside it. [[entity:beersheba]] heads the list; [[entity:hormah]] and Ziklag are on it and cannot be located today.\n\nThen the north, in four lots. [[entity:tribe-zebulun]] gets the basins of lower Galilee, with [[entity:shimron]] the only town in its twelve that can be placed with confidence. [[entity:tribe-issachar]] gets the [[entity:region-jezreel-valley]] and its eastern approaches, ending at the [[entity:jordan-river]]. [[entity:tribe-asher]] runs up the coast behind [[entity:mount-carmel]] as far as [[entity:kanah]], [[entity:sidon]] and [[entity:tyre]]. [[entity:tribe-naphtali]] takes upper Galilee and the western side of the upper Jordan, with nineteen fortified towns including [[entity:chinnereth]], [[entity:hazor]] and [[entity:kedesh-naphtali]].\n\nThe seventh lot, [[entity:tribe-dan]], is the smallest and the most exposed: [[entity:aijalon]], [[entity:timnah]], [[entity:ekron]] and a border facing [[entity:joppa]]. Verse 47 adds in a single sentence that Dan later went north and took Leshem.\n\nOnly then does Israel give [[entity:joshua]] the town he asks for, [[entity:timnath-serah]], and the whole distribution is sealed at [[entity:shiloh]] with [[entity:eleazar]] named first.",
        scriptureRefs: [
          "Joshua 19:1-9",
          "Joshua 19:10-23",
          "Joshua 19:24-39",
          "Joshua 19:40-48",
          "Joshua 19:49-51",
        ],
        citations: [
          {
            sourceId: "rainey-notley-sacred-bridge",
            supportedClaim:
              "Site identifications for the northern town lists, many of which remain unplaced",
          },
        ],
        evidenceLabels: ["biblical-account", "reconstruction"],
      },
      {
        id: "ch19-what-brought-us-here",
        kind: "what-brought-us-here",
        title: "What brought us here",
        body:
          "The survey party of chapter 18 came back with the land written down in seven parts, and the first of those parts went to [[entity:tribe-benjamin]]. Chapter 19 works through the remaining six without a break in procedure: one lot, one boundary or town list, one closing formula. The northern tribes are also the ones whose ground chapter 11 fought over and chapter 17 admitted was not cleared, so their allotments arrive already qualified.",
        scriptureRefs: ["Joshua 18:8-10", "Joshua 11:1-15", "Joshua 17:11-13"],
        citations: [
          {
            sourceId: "howard-joshua",
            supportedClaim:
              "The allotment sequence in chapters 18 and 19 follows a single repeated structure",
          },
        ],
        evidenceLabels: ["biblical-account"],
      },
      {
        id: "ch19-surrounding-world",
        kind: "surrounding-world",
        title: "The surrounding world",
        body:
          "The northern lists are not invented names. [[entity:achshaph]] and [[entity:shimron]] both turn up in Egyptian topographical lists of Canaanite towns, and [[entity:joppa]], on Dan's border, was an Egyptian administrative centre in the Late Bronze Age. The coast that Asher's boundary runs along belonged to the harbour cities of [[entity:tyre]] and [[entity:sidon]], which is exactly why Joshua 13:4-6 had already listed the [[entity:sidonians]] among those not driven out.\n\nSo Asher's allotment is drawn across ground the book itself says stayed Sidonian, and Dan's runs onto the [[entity:region-coastal-plain]] where the [[entity:philistines]] and towns like [[entity:gezer]] remained. Being assigned a coastline is not the same as reaching it.",
        scriptureRefs: ["Joshua 19:28-30", "Joshua 19:43-46", "Joshua 13:4-6", "Joshua 16:10"],
        citations: [
          {
            sourceId: "thutmose-iii-lists",
            supportedClaim:
              "Several towns in Joshua's northern lists appear independently in Egyptian topographical lists",
          },
          {
            sourceId: "rainey-notley-sacred-bridge",
            supportedClaim:
              "Joppa's role as a harbour and Egyptian administrative centre, and the Phoenician hold on the coast north of Carmel",
          },
          {
            sourceId: "aharoni-land-of-bible",
            supportedClaim:
              "Asher's described area overlaps territory the biblical text concedes was Sidonian",
          },
        ],
        evidenceLabels: ["externally-attested", "biblical-account"],
        collapsedByDefault: true,
      },
      {
        id: "ch19-why-it-matters",
        kind: "why-it-matters",
        title: "Why it matters",
        body:
          "The distribution is bracketed by its two survivors of the wilderness generation. [[entity:caleb]] came first and asked for the hardest hill country in the south; [[entity:joshua]] comes last and receives one town in his own tribal hills. The man holding the lot does not draw for himself until everyone else is placed, and the text keeps his portion to two verses.\n\nThat restraint is doing theological work, not just characterisation. The closing formula puts [[entity:eleazar]] the priest before Joshua and sets the whole business at the door of the tent of meeting, which frames the land as something distributed under God rather than allocated by the leader who won it.",
        scriptureRefs: ["Joshua 14:6-15", "Joshua 19:49-51"],
        citations: [
          {
            sourceId: "hawk-joshua",
            supportedClaim:
              "Caleb's request and Joshua's portion frame the allotment section as a literary pair",
          },
          {
            sourceId: "davis-joshua",
            supportedClaim:
              "The leader receiving his inheritance last is read as an intentional restraint in the narrative",
          },
        ],
        evidenceLabels: ["biblical-account", "theological-interpretation"],
      },
      {
        id: "ch19-details-worth-noticing",
        kind: "details-worth-noticing",
        title: "Details worth noticing",
        body:
          "Many of Simeon's towns already appeared in Judah's list in chapter 15. The overlap is not a slip; it is what having your inheritance inside somebody else's looks like on paper.\n\n[[entity:tribe-zebulun]] never reaches the sea here, although Genesis 49:13 speaks of Zebulun at the haven of ships. Joshua's Zebulun is inland, and the book does not reconcile the two.\n\nNaphtali's boundary in verse 34 reaches 'to Judah at the Jordan', which makes no geographical sense and is a recognised textual problem rather than a lost southern enclave.\n\nDan's single verse about taking Leshem is the only place Joshua looks ahead to the migration that Judges 18 narrates at length.",
        scriptureRefs: ["Joshua 15:26-32", "Joshua 19:15", "Joshua 19:34", "Joshua 19:47", "Genesis 49:13", "Judges 18:27-29"],
        citations: [
          {
            sourceId: "butler-joshua",
            locator: "on Joshua 19:34",
            supportedClaim:
              "The reference to Judah in Naphtali's boundary is treated as a text-critical difficulty",
          },
          {
            sourceId: "aharoni-land-of-bible",
            supportedClaim:
              "Simeon's town list duplicates names in Judah's southern district list",
          },
        ],
        evidenceLabels: ["biblical-account", "disputed"],
        collapsedByDefault: true,
      },
      {
        id: "ch19-difficult-questions",
        kind: "difficult-questions",
        title: "Difficult questions",
        body:
          "How much of the northern map can we actually draw? Honestly, not much. Most of the boundary points in Zebulun, Issachar, Asher and Naphtali are names with no identified site, so every polygon for these four is a reconstruction built around a handful of fixed towns, and different atlases draw them differently.\n\nThere is also a question about what the lists represent: an early settlement pattern, or the districts of a later kingdom written back into Joshua's mouth. Both are argued by serious scholars, and the lists cannot settle it by themselves.",
        scriptureRefs: ["Joshua 19:10-39"],
        citations: [
          {
            sourceId: "curtis-oxford-bible-atlas",
            supportedClaim:
              "Mainstream atlases draw the northern tribal boundaries with explicit caution",
          },
          {
            sourceId: "boling-wright-joshua",
            supportedClaim:
              "The northern lists are read by some as reflecting later administrative districts",
          },
          {
            sourceId: "pitkanen-joshua",
            supportedClaim:
              "Comparison with ancient Near Eastern land-distribution practice is used to defend an early setting for the lists",
          },
        ],
        evidenceLabels: ["reconstruction", "disputed"],
        collapsedByDefault: true,
      },
    ],
    discussionQuestions: [
      "Joshua 19:9 says Simeon received towns inside Judah because Judah's share was too large. What does a tribe without a border of its own gain and lose?",
      "Asher's boundary is drawn as far as Tyre and Sidon while Joshua 13:4-6 says the Sidonians were not driven out. What is the text doing by describing land it admits was not held?",
      "Dan is given the outlet of the Sorek and Aijalon valleys onto the coastal plain, the most trafficked ground in the whole distribution. How does that help explain what happens to Dan later?",
      "Joshua hands out every other portion before receiving one town for himself. What would the chapter feel like if his portion came first?",
      "Four of the seven lots in chapters 18 and 19 describe land the book elsewhere says was not cleared. Does that weaken the allotment or clarify what an allotment is?",
    ],
    relatedEntityIds: [
      "joshua",
      "eleazar",
      "caleb",
      "tribe-simeon",
      "tribe-zebulun",
      "tribe-issachar",
      "tribe-asher",
      "tribe-naphtali",
      "tribe-dan",
      "tribe-judah",
      "tribe-ephraim",
      "tribe-manasseh-west",
      "beersheba",
      "hormah",
      "shimron",
      "achshaph",
      "kanah",
      "tyre",
      "sidon",
      "mount-carmel",
      "chinnereth",
      "sea-of-chinnereth",
      "hazor",
      "kedesh-naphtali",
      "aijalon",
      "timnah",
      "ekron",
      "joppa",
      "gezer",
      "beth-shan",
      "taanach",
      "jordan-river",
      "timnath-serah",
      "shiloh",
      "sidonians",
      "philistines",
      "canaanites",
      "region-negev",
      "region-galilee",
      "region-jezreel-valley",
      "region-coastal-plain",
      "region-hill-country-ephraim",
    ],
    themeIds: ["land-and-inheritance", "leadership-and-succession", "unity-among-tribes"],
    wordCount: 433,
  },

  /* ================================================================== */
  /* Chapter 20                                                         */
  /* ================================================================== */
  {
    id: "ch20",
    number: 20,
    title: "Cities of refuge",
    summary:
      "Six towns are set apart, three west of the Jordan and three east of it, where someone who has killed accidentally can state his case at the gate and live until he is tried.",
    phase: "inheritance-and-life",
    scriptureRange: "Joshua 20:1-9",
    milestoneIds: [
      "ch20-command-restated-from-moses",
      "ch20-three-cities-west-of-jordan",
      "ch20-three-cities-east-of-jordan",
    ],
    sections: [
      {
        id: "ch20-at-a-glance",
        kind: "at-a-glance",
        title: "At a glance",
        body:
          "The LORD tells [[entity:joshua]] to appoint the cities of refuge that [[entity:moses]] had already commanded. Six towns are named, three west of the [[entity:jordan-river]] and three east of it. A person who has killed someone unintentionally may run to one, state his case at the gate, and live there safely until he stands trial. The provision covers resident foreigners as well as Israelites.",
        scriptureRefs: ["Joshua 20:1-6", "Joshua 20:7-9"],
        citations: [],
        evidenceLabels: ["biblical-account"],
      },
      {
        id: "ch20-walk-through",
        kind: "walk-through",
        title: "Walk through the chapter",
        body:
          "This is the shortest chapter in the allotment section and almost entirely legal. The instruction comes with a backward glance: appoint the cities of refuge 'of which I spoke to you by Moses'. Nothing here is new law.\n\nThe procedure is specific. The man who has killed someone accidentally runs to one of the towns, stops at the entrance of the gate, and states his case in the hearing of the elders. They take him in and give him a place to live. If the avenger of blood arrives, they are not to hand him over. He stays until he has stood before the assembly for judgement, and then until the death of the serving high priest, after which he may go home.\n\nThe six towns follow. West of the [[entity:jordan-river]]: [[entity:kedesh-naphtali]] in the hills of Naphtali, [[entity:shechem]] in the hills of Ephraim, and Kiriath-arba, that is [[entity:hebron]], in the hills of Judah. East of it: [[entity:bezer]] in Reuben's plateau country, [[entity:ramoth-gilead]] in Gad, and [[entity:golan-city]] in Bashan. The closing verse adds the alien living among Israel to the list of those who may use them.",
        scriptureRefs: ["Joshua 20:1-6", "Joshua 20:7-8", "Joshua 20:9"],
        citations: [
          {
            sourceId: "milgrom-numbers",
            supportedClaim:
              "The refuge procedure in Joshua 20 restates the arrangement set out in the Torah legislation",
          },
        ],
        evidenceLabels: ["biblical-account"],
      },
      {
        id: "ch20-what-brought-us-here",
        kind: "what-brought-us-here",
        title: "What brought us here",
        body:
          "Numbers 35 had already required six refuge towns, three on each side of the river, drawn from the Levites' forty-eight and open to Israelite and foreigner alike. Deuteronomy 4:41-43 records [[entity:moses]] setting apart the eastern three by name before he died. So the three western towns are the genuinely new item here, and they could not be chosen until the land west of the [[entity:jordan-river]] had been allotted, which is why the chapter sits where it does.",
        scriptureRefs: ["Numbers 35:9-15", "Deuteronomy 4:41-43", "Joshua 20:7-8"],
        citations: [
          {
            sourceId: "block-deuteronomy",
            supportedClaim:
              "Deuteronomy records the designation of the three Transjordan refuge cities under Moses",
          },
          {
            sourceId: "milgrom-numbers",
            supportedClaim:
              "Numbers 35 sets the number of refuge cities at six, three on each side of the Jordan",
          },
        ],
        evidenceLabels: ["biblical-account"],
      },
      {
        id: "ch20-surrounding-world",
        kind: "surrounding-world",
        title: "The surrounding world",
        body:
          "The avenger of blood was not a vigilante. He was the nearest male relative, carrying a recognised duty to answer a killing in a society with no police and no public prosecutor. Kin responsibility of this kind is widespread in the ancient Near East, and the refuge system does not abolish it; it interrupts it long enough for a hearing.\n\nWhat is distinctive is the sorting. Numbers 35 separates the man who struck with a weapon or lay in wait from the man whose stone or shove killed without hostility, and refuses ransom for the first while protecting the second. The town gate, where the elders sat, was the ordinary place for such a hearing.",
        scriptureRefs: ["Numbers 35:16-25", "Numbers 35:30-33", "Joshua 20:4-6"],
        citations: [
          {
            sourceId: "milgrom-numbers",
            supportedClaim:
              "Comparative ancient Near Eastern law on kin responsibility for homicide and the distinction between intent and accident",
          },
          {
            sourceId: "dotp-historical-books",
            supportedClaim:
              "The town gate functioned as the normal venue for elders hearing a case",
          },
        ],
        evidenceLabels: ["biblical-account", "externally-attested"],
        collapsedByDefault: true,
      },
      {
        id: "ch20-why-it-matters",
        kind: "why-it-matters",
        title: "Why it matters",
        body:
          "The geography is the legal provision. A law that says an accidental killer may be protected is worth nothing if the nearest protection is a week away, so the six towns are spread deliberately, three along the length of the western highland and three across the eastern plateau, and every one of them sits on or beside a road. Mercy here is measured in walking distance.\n\nIt is also a limit placed on Israel, not on outsiders. The person the law restrains is the grieving relative with a legitimate claim, and the person it shelters may be a resident foreigner. None of this licenses anyone's violence now; it is the opposite, an early insistence that killing be examined before it is answered.",
        scriptureRefs: ["Joshua 20:7-9", "Numbers 35:15"],
        citations: [
          {
            sourceId: "rainey-notley-sacred-bridge",
            supportedClaim:
              "The refuge cities lie on or beside the principal north-south routes on both sides of the Jordan",
          },
          {
            sourceId: "wright-ot-ethics",
            supportedClaim:
              "Israel's land and justice laws restrain the community that holds the land rather than authorising its expansion",
          },
        ],
        evidenceLabels: ["theological-interpretation", "reconstruction"],
      },
      {
        id: "ch20-details-worth-noticing",
        kind: "details-worth-noticing",
        title: "Details worth noticing",
        body:
          "All six refuge towns turn out in the next chapter to be Levitical towns. The shelter is administered by the landless tribe, which means the institution belongs to the sanctuary system rather than to any tribe's courts.\n\nThe release comes at the death of the high priest, and the text gives no reason. Interpreters have read it as a form of expiation, or as an amnesty marking the end of an era; the chapter simply states it.\n\nThe man must 'declare his case' at the gate before he is admitted. Refuge is not automatic, and the elders are not told to take his word for it.",
        scriptureRefs: ["Joshua 20:4", "Joshua 20:6", "Joshua 21:13", "Joshua 21:21", "Joshua 21:27"],
        citations: [
          {
            sourceId: "milgrom-numbers",
            supportedClaim:
              "The release of the fugitive at the high priest's death is discussed without a stated rationale in the text",
          },
          {
            sourceId: "haran-levitical-cities",
            supportedClaim:
              "The six refuge cities are drawn from the list of Levitical towns",
          },
        ],
        evidenceLabels: ["biblical-account", "theological-interpretation"],
        collapsedByDefault: true,
      },
      {
        id: "ch20-difficult-questions",
        kind: "difficult-questions",
        title: "Difficult questions",
        body:
          "Two of the six cannot be found. [[entity:bezer]] and [[entity:golan-city]] have no identification anyone agrees on, and [[entity:ramoth-gilead]] is disputed, with Tell er-Ramith the usual candidate. So four of the six can be shown on a map, one of those four only as a contested proposal, and two are simply absent from it.\n\nThat is awkward for a chapter whose whole point is spacing, because the spacing cannot be checked where it would matter most, east of the river. A second question is whether the system ever operated. No narrative in the Old Testament shows anyone using a city of refuge, which some read as silence and others as evidence that the list is an ideal.",
        scriptureRefs: ["Joshua 20:8"],
        citations: [
          {
            sourceId: "rainey-notley-sacred-bridge",
            supportedClaim:
              "Bezer and the city of Golan have no secure identification, and Ramoth in Gilead is contested",
          },
          {
            sourceId: "haran-levitical-cities",
            supportedClaim:
              "Whether the refuge and Levitical city lists describe a working institution or an ideal arrangement is unresolved",
          },
        ],
        evidenceLabels: ["disputed"],
        collapsedByDefault: true,
      },
    ],
    discussionQuestions: [
      "Joshua 20 protects the accidental killer and restrains the grieving relative. Which of those two is the harder provision to accept, and why?",
      "The six towns are spread along the length of the country rather than clustered. What does the layout tell you about who the law was written for?",
      "Bezer and Golan cannot be located and Ramoth in Gilead is disputed. How should a study map show a chapter whose meaning depends on distances it cannot measure?",
      "Why might it matter that the refuge towns are Levitical towns rather than ordinary tribal ones?",
      "The fugitive stays until the death of the high priest. What does tying his release to a priest's life, rather than to a sentence, suggest about how the killing was understood?",
    ],
    relatedEntityIds: [
      "joshua",
      "moses",
      "kedesh-naphtali",
      "shechem",
      "hebron",
      "bezer",
      "ramoth-gilead",
      "golan-city",
      "jordan-river",
      "tribe-levi",
      "tribe-naphtali",
      "tribe-ephraim",
      "tribe-judah",
      "tribe-reuben",
      "tribe-gad",
      "tribe-manasseh-east",
      "region-hill-country-judah",
      "region-hill-country-ephraim",
      "region-galilee",
      "region-gilead",
      "region-bashan",
    ],
    themeIds: ["judgment-and-mercy", "covenant-faithfulness", "outsiders-and-belonging"],
    wordCount: 454,
  },

  /* ================================================================== */
  /* Chapter 21                                                         */
  /* ================================================================== */
  {
    id: "ch21",
    number: 21,
    title: "The Levitical cities, and a closing claim",
    summary:
      "The Levites ask for the towns Moses had promised them, forty-eight are named across every tribal area on both sides of the Jordan, and the chapter ends by saying that not one word of the LORD's promise failed.",
    phase: "inheritance-and-life",
    scriptureRange: "Joshua 21:1-45",
    milestoneIds: [
      "ch21-levites-ask-for-towns",
      "ch21-thirteen-towns-for-aarons-sons",
      "ch21-forty-eight-towns-scattered",
      "ch21-not-one-word-failed",
    ],
    sections: [
      {
        id: "ch21-at-a-glance",
        kind: "at-a-glance",
        title: "At a glance",
        body:
          "The heads of [[entity:tribe-levi]] come to [[entity:eleazar]] and [[entity:joshua]] at [[entity:shiloh]] and ask for the towns and pasture [[entity:moses]] had commanded. Forty-eight are assigned by clan out of every other tribe's inheritance, thirteen of them to the descendants of [[entity:aaron]]. Levi receives no territory at all. The chapter closes by declaring that nothing the LORD had promised failed.",
        scriptureRefs: ["Joshua 21:1-3", "Joshua 21:41-45"],
        citations: [],
        evidenceLabels: ["biblical-account"],
      },
      {
        id: "ch21-walk-through",
        kind: "walk-through",
        title: "Walk through the chapter",
        body:
          "The Levites have to ask. They come to [[entity:eleazar]], [[entity:joshua]] and the tribal heads at [[entity:shiloh]] and quote the command given through [[entity:moses]]: towns to live in, with pasture for their livestock. No lot draws them a country, because there is no country to draw.\n\nWhat follows is a list organised by clan rather than by region. The first lot gives the descendants of [[entity:aaron]] thirteen towns out of Judah, Simeon and Benjamin, [[entity:hebron]], [[entity:libnah]], [[entity:jattir]], [[entity:eshtemoa]], [[entity:debir]], [[entity:beth-shemesh]] and [[entity:gibeon]] among them. The rest of Kohath receives ten out of Ephraim, Dan and western Manasseh, including [[entity:shechem]], [[entity:gezer]], [[entity:upper-beth-horon]], [[entity:aijalon]] and [[entity:taanach]]. Gershon receives thirteen in the north and in Bashan, among them [[entity:kedesh-naphtali]] and [[entity:ashtaroth]]. Merari receives twelve from Zebulun, Reuben and Gad, including [[entity:ramoth-gilead]], [[entity:heshbon]] and [[entity:jazer]]. Forty-eight in total, each with its belt of pasture.\n\nThen, without transition, three verses of summary: the LORD gave Israel all the land he swore to their fathers, he gave them rest on every side, and nothing failed of any good thing he had spoken.",
        scriptureRefs: ["Joshua 21:1-3", "Joshua 21:4-8", "Joshua 21:9-40", "Joshua 21:43-45"],
        citations: [
          {
            sourceId: "haran-levitical-cities",
            supportedClaim:
              "The list assigns towns with pasture by Levite clan rather than as a contiguous territory",
          },
        ],
        evidenceLabels: ["biblical-account"],
      },
      {
        id: "ch21-what-brought-us-here",
        kind: "what-brought-us-here",
        title: "What brought us here",
        body:
          "Levi's exclusion from territory has been stated four times already in the book, most recently in the middle of Joshua's instructions to the survey party: the priesthood of the LORD is their inheritance. Numbers 35:1-8 set the number at forty-eight, six of them the cities of refuge just designated in chapter 20. Deuteronomy 18:1-2 puts the principle bluntly, that Levi has no portion and the LORD himself is its inheritance. Chapter 21 is the accounting entry for all of that.",
        scriptureRefs: ["Joshua 13:14", "Joshua 13:33", "Joshua 18:7", "Numbers 35:1-8", "Deuteronomy 18:1-2"],
        citations: [
          {
            sourceId: "milgrom-numbers",
            supportedClaim:
              "Numbers 35 requires forty-eight Levitical towns with pasture, including the six refuge cities",
          },
        ],
        evidenceLabels: ["biblical-account"],
      },
      {
        id: "ch21-surrounding-world",
        kind: "surrounding-world",
        title: "The surrounding world",
        body:
          "A tribe without fields needed another way to eat. The Levites' support came from offerings and tithes rather than harvests, with a measured strip of grazing around each town, a thousand cubits out from the wall on the reckoning of Numbers 35. Pasture supports animals, not grain and olives, which is a different economy from every other tribe's.\n\nWhether the forty-eight ever functioned as a system is genuinely disputed. The parallel list in 1 Chronicles 6:54-81 differs in places, several of the towns are ones Joshua says were not cleared, and no narrative anywhere shows the arrangement in operation. Proposals range from an early working institution to a later ideal projected backwards.",
        scriptureRefs: ["Numbers 35:4-5", "Deuteronomy 18:1-5", "1 Chronicles 6:54-81"],
        citations: [
          {
            sourceId: "haran-levitical-cities",
            supportedClaim:
              "Whether the Levitical city list describes a functioning system, an ideal, or a later arrangement is unresolved",
          },
          {
            sourceId: "milgrom-numbers",
            supportedClaim:
              "The Levites' pasture is measured out from the town wall and their support comes from offerings and tithes",
          },
          {
            sourceId: "stager-forging-identity",
            supportedClaim:
              "Highland village economies depended on grain, olives and livestock in combination",
          },
        ],
        evidenceLabels: ["biblical-account", "disputed", "reconstruction"],
        collapsedByDefault: true,
      },
      {
        id: "ch21-why-it-matters",
        kind: "why-it-matters",
        title: "Why it matters",
        body:
          "Levi has no polygon on this map and never will, and that absence is the content. One tribe in twelve holds no ground, lives inside everyone else's inheritance, and is supported by what the others bring. Scattering it means no region of Israel is without someone whose living depends on the sanctuary and whose job is teaching the law.\n\nLeviticus 25:23 gives the principle the arrangement rests on: the land is not finally Israel's to own, because it is the LORD's. Levi is the visible case of that, holding towns and pasture on the same terms everyone else holds farms, only without the farm. Reformed writers have read Levi's portion as a standing sign that the inheritance was never really the soil; that reading is one Christian option among several, not the plain sense of the chapter.",
        scriptureRefs: ["Joshua 21:41-42", "Leviticus 25:23", "Deuteronomy 18:1-2"],
        citations: [
          {
            sourceId: "wright-ot-ethics",
            supportedClaim:
              "Levi's landlessness belongs to a land ethic in which the land is held from God rather than owned outright",
          },
          {
            sourceId: "woudstra-joshua",
            supportedClaim:
              "A Reformed covenantal reading treats Levi's portion as a sign that the inheritance exceeds the territory",
          },
          {
            sourceId: "vos-biblical-theology",
            supportedClaim:
              "The land is treated in Reformed biblical theology as a stage in a larger redemptive history",
          },
        ],
        evidenceLabels: ["theological-interpretation"],
      },
      {
        id: "ch21-details-worth-noticing",
        kind: "details-worth-noticing",
        title: "Details worth noticing",
        body:
          "[[entity:hebron]] goes to the priests, but verse 12 gives the city's fields and villages to [[entity:caleb]]. Town and farmland are separated in the same breath, which tells you what a Levitical town actually was.\n\nFour of the forty-eight sit in places the book says were not taken, [[entity:gezer]] and [[entity:taanach]] among them. A priestly town inside an unpossessed town is a claim on paper.\n\nThe four verses listing Reuben's towns, [[entity:bezer]] included, are missing from many Hebrew manuscripts and present in the Greek tradition. Most modern translations print them, and the reason is a copying accident rather than a doctrinal one.",
        scriptureRefs: ["Joshua 21:11-12", "Joshua 21:21-25", "Joshua 21:36-37", "Joshua 16:10", "Joshua 17:11-13"],
        citations: [
          {
            sourceId: "butler-joshua",
            locator: "on Joshua 21:36-37",
            supportedClaim:
              "The verses listing Reuben's Levitical towns are absent from many Masoretic manuscripts and present in the Greek tradition",
          },
          {
            sourceId: "hess-joshua",
            locator: "on Joshua 21:11-12",
            supportedClaim:
              "The town of Hebron is assigned to the priests while its fields go to Caleb",
          },
        ],
        evidenceLabels: ["biblical-account", "disputed"],
        collapsedByDefault: true,
      },
      {
        id: "ch21-difficult-questions",
        kind: "difficult-questions",
        title: "Difficult questions",
        body:
          "Joshua 21:45 says nothing failed of any good thing the LORD had spoken. Joshua 13:1 says very much land remains to be possessed. Joshua 23:12-14 puts both in one speech, warning about the nations that remain and then insisting that not one thing has failed. The book does not reconcile these, and neither will this study.\n\nFour readings are on offer: that the promise concerned what God did rather than what Israel occupied; that the summaries use the conventional totalising language of ancient war reports; that Joshua deliberately holds the tension open; and that the passages come from different hands. Each accounts for part of it. What none of them can do is make the gap disappear, because the book put these statements a few chapters apart on purpose or with its eyes open.",
        scriptureRefs: ["Joshua 21:43-45", "Joshua 13:1-7", "Joshua 23:12-14", "Joshua 15:63", "Joshua 17:12-13"],
        citations: [
          {
            sourceId: "kitchen-reliability",
            supportedClaim:
              "The book's summary statements should be read against its own admissions of unconquered territory",
          },
          {
            sourceId: "younger-conquest-accounts",
            supportedClaim:
              "Totalising summary language is a shared convention of ancient Near Eastern conquest reporting",
          },
          {
            sourceId: "mitchell-together-in-land",
            supportedClaim:
              "Joshua holds statements of complete fulfilment alongside narratives of coexistence without resolving them",
          },
          {
            sourceId: "butler-joshua",
            supportedClaim:
              "The summary in Joshua 21:43-45 is assigned by some scholars to a different compositional layer from the admissions of remaining land",
          },
          {
            sourceId: "howard-joshua",
            supportedClaim:
              "The language of rest in Joshua 21:44 is read as a theological claim about God's gift rather than a census of occupied ground",
          },
        ],
        evidenceLabels: ["biblical-account", "disputed", "theological-interpretation"],
        collapsedByDefault: true,
      },
    ],
    discussionQuestions: [
      "The Levites have to come and ask for their towns while every other tribe is given one by lot. Why might the chapter tell it that way round?",
      "Levi is present in every tribal area and owns none of it. What does that arrangement do to the idea of inheritance the rest of the book has been building?",
      "Hebron's town goes to the priests and its fields to Caleb. What does that division show about what a Levitical town with pasture actually was?",
      "Joshua 21:45 says nothing failed; Joshua 13:1 says much land remains. What do you lose if you harmonise them, and what do you lose if you leave them standing?",
      "Some of the forty-eight towns sit in places the book says were not cleared. How does that affect how you read the list?",
    ],
    relatedEntityIds: [
      "joshua",
      "eleazar",
      "aaron",
      "moses",
      "caleb",
      "tribe-levi",
      "tribe-judah",
      "tribe-simeon",
      "tribe-benjamin",
      "tribe-ephraim",
      "tribe-dan",
      "tribe-manasseh-west",
      "tribe-manasseh-east",
      "tribe-issachar",
      "tribe-asher",
      "tribe-naphtali",
      "tribe-zebulun",
      "tribe-reuben",
      "tribe-gad",
      "shiloh",
      "hebron",
      "libnah",
      "jattir",
      "eshtemoa",
      "debir",
      "beth-shemesh",
      "gibeon",
      "shechem",
      "gezer",
      "upper-beth-horon",
      "aijalon",
      "taanach",
      "kedesh-naphtali",
      "ashtaroth",
      "ramoth-gilead",
      "heshbon",
      "jazer",
      "bezer",
      "golan-city",
      "region-gilead",
      "region-bashan",
    ],
    themeIds: ["promise-and-fulfillment", "land-and-inheritance", "rest"],
    wordCount: 456,
  },
];

export const MILESTONES: Milestone[] = [
  /* ---------------------------- Chapter 18 --------------------------- */
  {
    id: "ch18-tent-of-meeting-to-shiloh",
    chapter: 18,
    order: 1,
    title: "The tent of meeting moves to Shiloh",
    scriptureRefs: ["Joshua 18:1"],
    narrative:
      "The whole congregation assembles at [[entity:shiloh]] and sets up the tent of meeting there. No battle is fought for the site and no reason is given for choosing it; the move is simply reported in one verse, and it changes the shape of the rest of the book.\n\nUntil now Israel's base has been [[entity:gilgal]] on the valley floor near [[entity:jericho]], a camp beside the Jordan fords and below sea level. Shiloh sits roughly thirty kilometres north-west of it and close to a kilometre higher, in a small upland basin in the hill country of [[entity:tribe-ephraim]], a little east of the road that runs along the watershed from [[entity:bethel]] to [[entity:shechem]].\n\nThe effect is to put the sanctuary inside the hill country the tribes are actually settling rather than at the edge of it. Every assembly from here on happens at Shiloh, including the allotments of the next three chapters.",
    entityIds: [
      "joshua",
      "shiloh",
      "gilgal",
      "jericho",
      "bethel",
      "shechem",
      "tribe-ephraim",
      "region-hill-country-ephraim",
      "region-jordan-valley",
    ],
    mapFeatureIds: ["site-shiloh", "site-gilgal", "site-jericho", "site-bethel"],
    mapCaption:
      "The tent of meeting now stands at Shiloh in the hill country, and the valley camp at Gilgal drops out of the story.",
    whatChanged:
      "Israel's centre of gravity leaves the rift valley. Gilgal is no longer the place the narrative returns to; from here on the assemblies are in the hills.",
    geographyExplanation:
      "The two sites belong to different worlds. Gilgal lies in the rift valley at roughly 250 m below sea level, hot, spring-fed, and next to the Jordan crossings: an excellent bridgehead and a poor centre. Shiloh sits at about 700 m on the central highland, in a basin with farmland around it, off the main ridge route but within a day's walk of both Bethel and Shechem. Moving the tent of meeting there puts a climb of nearly a kilometre between the sanctuary and the river, and puts the sanctuary among the people who will live in the hill country.",
    sequenceType: "event",
    viewport: { center: [35.4, 31.96], zoom: 9 },
    citations: [
      {
        sourceId: "finkelstein-shiloh",
        supportedClaim:
          "Shiloh is identified with Khirbet Seilun and shows substantial Iron Age I occupation",
      },
      {
        sourceId: "rainey-notley-sacred-bridge",
        supportedClaim:
          "Shiloh's position in an upland basin slightly east of the Bethel to Shechem watershed route",
      },
    ],
    evidenceLabels: ["biblical-account", "externally-attested"],
  },
  {
    id: "ch18-rebuke-and-survey-party",
    chapter: 18,
    order: 2,
    title: "Joshua rebukes the seven tribes and sends a survey party",
    scriptureRefs: ["Joshua 18:2-9"],
    narrative:
      "Seven tribes still have no inheritance. [[entity:joshua]] asks them how long they will neglect to go in and possess the land the LORD has given them, which is a rebuke rather than a question, and then turns it into a procedure: three men from each tribe, twenty-one in all, to walk the land, describe it town by town, and divide it into seven portions on paper.\n\nHe fixes two edges before they start. [[entity:tribe-judah]] stays in its borders to the south and the house of Joseph in theirs to the north, so the seven portions have to be found in what is left. He also repeats that [[entity:tribe-levi]] gets no portion and that the eastern tribes already have theirs from [[entity:moses]].\n\nThe men go, survey the land by cities into seven parts in a written document, and bring it back to the camp at [[entity:shiloh]].",
    entityIds: [
      "joshua",
      "moses",
      "shiloh",
      "tribe-judah",
      "tribe-ephraim",
      "tribe-manasseh-west",
      "tribe-levi",
      "tribe-reuben",
      "tribe-gad",
      "tribe-manasseh-east",
      "region-hill-country-ephraim",
      "region-galilee",
      "region-jezreel-valley",
    ],
    mapFeatureIds: ["site-shiloh", "site-shechem", "site-megiddo", "site-hazor"],
    mapCaption:
      "Twenty-one men walk the unallotted land north and west of Shiloh and bring back a written description of it.",
    whatChanged:
      "No territory changes hands. What appears is the scope of the survey: the ground still unassigned, reaching from Benjamin's plateau up through the Jezreel valley into Galilee.",
    geographyExplanation:
      "This is a walking commission across the most awkward terrain in the country. From Shiloh the unallotted land runs north through the hill country, across the open floor of the Jezreel valley, and up into the Galilean highlands, roughly 120 km to the northern limit and back, with the coastal plain to the west. It crosses ground the book has already said was not cleared, including the valley towns of chapter 17. A survey made on foot through such country produces something patchy by nature: boundary points named from local landmarks, and towns counted where they could be counted.",
    sequenceType: "event",
    viewport: {
      center: [35.3, 32.3],
      zoom: 8,
      bounds: [
        [34.7, 31.3],
        [35.9, 33.3],
      ],
    },
    citations: [
      {
        sourceId: "hess-joshua",
        locator: "on Joshua 18:4-9",
        supportedClaim:
          "The survey produces a written town-by-town description that the lot then divides",
      },
      {
        sourceId: "aharoni-land-of-bible",
        supportedClaim:
          "The tribal descriptions combine named boundary points with counted town lists",
      },
    ],
    evidenceLabels: ["biblical-account", "reconstruction"],
  },
  {
    id: "ch18-lot-cast-at-shiloh",
    chapter: 18,
    order: 3,
    title: "The lot is cast at Shiloh",
    scriptureRefs: ["Joshua 18:6", "Joshua 18:8-10"],
    narrative:
      "With the document in hand, [[entity:joshua]] casts lots at [[entity:shiloh]] before the LORD and divides the land among the tribes according to their divisions. The text says twice that the lot is cast there and before the LORD, which is the detail it cares about: the place and the presence, not the mechanism. How the lot worked is never described.\n\nWhat the lot does and does not decide is worth keeping straight. The seven portions were shaped by the survey party; the lot attaches a tribe to a portion. It is an allocation procedure with the outcome removed from human negotiation, which is why the strongest tribes cannot simply take the best valleys.\n\nEverything assigned in chapters 18 and 19 is decided from this one basin in the hills of [[entity:tribe-ephraim]].",
    entityIds: ["joshua", "eleazar", "shiloh", "tribe-ephraim", "region-hill-country-ephraim"],
    mapFeatureIds: ["site-shiloh"],
    mapCaption:
      "Lots are cast at Shiloh before the LORD, and the seven surveyed portions are attached to the seven remaining tribes.",
    whatChanged:
      "Nothing moves on the ground. A decision point appears: from this one place in the Ephraimite hills, land from the Negev to upper Galilee is assigned.",
    geographyExplanation:
      "Shiloh is a modest site for the work done in it. The basin holds enough flat ground for an assembly and enough farmland to feed one for a while, with springs nearby and the watershed road close enough to reach but not so close that traffic runs through it. From this single point the chapter distributes ground spanning some 200 km, from [[entity:beersheba]] at the desert fringe to [[entity:kedesh-naphtali]] in upper Galilee, most of which the men casting the lot had never stood on.",
    sequenceType: "event",
    viewport: { center: [35.2894, 32.0561], zoom: 11 },
    citations: [
      {
        sourceId: "woudstra-joshua",
        supportedClaim:
          "The repeated formula places the allotment before the LORD at Shiloh as a deliberate emphasis",
      },
      {
        sourceId: "finkelstein-shiloh",
        supportedClaim:
          "The site of Shiloh and the scale of its Iron Age I settlement",
      },
    ],
    evidenceLabels: ["biblical-account", "theological-interpretation"],
  },
  {
    id: "ch18-benjamin-allotted",
    chapter: 18,
    order: 4,
    title: "Benjamin's boundary and towns",
    scriptureRefs: ["Joshua 18:11-28"],
    narrative:
      "The first of the seven lots goes to [[entity:tribe-benjamin]], and the border is traced with unusual care because there is so little room for it. It starts at the [[entity:jordan-river]], climbs past [[entity:jericho]] on the north, runs west along the hills to the wilderness of Beth Aven and by [[entity:bethel]], turns south at the mountain above [[entity:lower-beth-horon]], reaches [[entity:kiriath-jearim]], and comes back east along the valley of Hinnom under the Jebusite city, past the ascent of Adummim, to the north bay of the [[entity:salt-sea]].\n\nTwenty-six towns are listed in two groups. They include [[entity:jericho]], [[entity:bethel]], [[entity:gibeon]], [[entity:beeroth]], [[entity:chephirah]], [[entity:mizpah-benjamin]], a Gibeath usually identified with [[entity:gibeah]], and the Jebusite city that is [[entity:jerusalem]].\n\nThe territory is one of the smallest in the book and holds more of its story than any other.",
    entityIds: [
      "tribe-benjamin",
      "tribe-judah",
      "tribe-ephraim",
      "jericho",
      "bethel",
      "gibeon",
      "beeroth",
      "chephirah",
      "kiriath-jearim",
      "mizpah-benjamin",
      "gibeah",
      "jerusalem",
      "lower-beth-horon",
      "upper-beth-horon",
      "jordan-river",
      "salt-sea",
      "jebusites",
      "gibeonite-league",
      "region-arabah",
    ],
    mapFeatureIds: [
      "site-jericho",
      "site-bethel",
      "site-gibeon",
      "site-beeroth",
      "site-chephirah",
      "site-kiriath-jearim",
      "site-mizpah-benjamin",
      "site-gibeah",
      "site-jerusalem",
      "site-lower-beth-horon",
      "site-upper-beth-horon",
      "site-jordan-river",
      "site-salt-sea",
    ],
    mapCaption:
      "Benjamin's allotted area: a narrow band from the Jordan to the western plateau, with Jerusalem's site on its southern edge.",
    whatChanged:
      "An approximate allotment area appears between Judah and Ephraim. It is an assignment, not a record of control: the Jebusites are still in Jerusalem and the Gibeonites hold four towns inside it under treaty.",
    geographyExplanation:
      "Benjamin is small and strategically dense, which is the whole point of it. Roughly forty kilometres from the [[entity:jordan-river]] to [[entity:kiriath-jearim]] and under twenty north to south, it spans from 250 m below sea level to nearly 900 m at [[entity:bethel]], and it contains both practical approaches into the central highlands: the climb from [[entity:jericho]] by the ascent of Adummim, and the [[entity:upper-beth-horon]] descent to the coastal plain. The watershed road from [[entity:jerusalem]] to Bethel runs straight through it. Whoever holds this plateau controls who gets into the hill country and who gets out, which is why so much of Joshua, and of later Israelite history, happens inside so little ground.",
    sequenceType: "allotment",
    viewport: { center: [35.22, 31.87], zoom: 10 },
    citations: [
      {
        sourceId: "rainey-notley-sacred-bridge",
        supportedClaim:
          "The Benjamin plateau carries the routes linking the Jordan valley, the watershed road and the Beth-horon descent",
      },
      {
        sourceId: "hess-joshua",
        locator: "on Joshua 18:11-28",
        supportedClaim:
          "Benjamin's boundary is described in unusual detail relative to the size of the territory",
      },
      {
        sourceId: "aharoni-land-of-bible",
        supportedClaim:
          "Reconstruction of Benjamin's boundary from the named points, several of which are unidentified",
      },
    ],
    evidenceLabels: ["biblical-account", "reconstruction"],
  },

  /* ---------------------------- Chapter 19 --------------------------- */
  {
    id: "ch19-simeon-within-judah",
    chapter: 19,
    order: 1,
    title: "Simeon's towns inside Judah",
    scriptureRefs: ["Joshua 19:1-9"],
    narrative:
      "The second lot comes out for [[entity:tribe-simeon]], and the text says at once that its inheritance lay in the middle of Judah's. Seventeen towns are listed with their villages, headed by [[entity:beersheba]] and including [[entity:hormah]], Ziklag and Ramah of the South, most of them in the dry country at the edge of the [[entity:region-negev]].\n\nVerse 9 gives the reason without embarrassment: Judah's portion was more than Judah needed, so Simeon was given towns out of it. There is no boundary description, because there is no boundary to describe.\n\nSeveral of these names have already appeared in Judah's own list in chapter 15. That overlap is not a mistake in the record; it is what an inheritance inside someone else's inheritance looks like when it is written down.",
    entityIds: [
      "tribe-simeon",
      "tribe-judah",
      "beersheba",
      "hormah",
      "region-negev",
      "region-hill-country-judah",
    ],
    mapFeatureIds: ["site-beersheba"],
    mapCaption:
      "Simeon appears as towns inside Judah's area, not as a territory of its own; several of its named towns cannot be located.",
    whatChanged:
      "No new block of land is drawn. Town markers appear inside Judah's allotted area, which is the only honest way to show what Joshua 19:1-9 describes.",
    geographyExplanation:
      "Simeon's towns sit where farming stops being reliable. Rainfall along the northern Negev fringe is marginal, so settlement follows wells and wadi beds rather than field systems, and the distances between towns are larger than in the hill country. [[entity:beersheba]] marks the practical southern limit of settled agriculture. A tribe holding scattered towns in this country has no frontier to defend and nowhere to expand into, and it is the tribe that effectively disappears from later Israelite history.",
    sequenceType: "allotment",
    viewport: { center: [34.95, 31.32], zoom: 9 },
    citations: [
      {
        sourceId: "aharoni-land-of-bible",
        supportedClaim:
          "Simeon's town list overlaps Judah's southern district list, and its towns lie in the Negev fringe",
      },
      {
        sourceId: "rainey-notley-sacred-bridge",
        supportedClaim:
          "Several of Simeon's towns, including Hormah and Ziklag, have no agreed identification",
      },
    ],
    evidenceLabels: ["biblical-account", "reconstruction"],
  },
  {
    id: "ch19-zebulun-in-lower-galilee",
    chapter: 19,
    order: 2,
    title: "Zebulun in lower Galilee",
    scriptureRefs: ["Joshua 19:10-16"],
    narrative:
      "The third lot goes to [[entity:tribe-zebulun]]. Its border is traced through Sarid, Jokneam, Chisloth-tabor, Daberath, Gath-hepher, Hannathon and the valley of Iphtahel, and twelve towns are counted, [[entity:shimron]] among them.\n\nOf all those names, Shimron is the only one this study will place with any confidence. The rest are either unidentified or proposed on the strength of a surviving name alone, which means the area drawn for Zebulun is a reconstruction hung on one fixed point and a general sense of the country the names belong to.\n\nThe territory is inland: the basins and low ridges of lower [[entity:region-galilee]], north of the [[entity:region-jezreel-valley]] and south of the higher Galilean hills.",
    entityIds: [
      "tribe-zebulun",
      "tribe-issachar",
      "tribe-asher",
      "tribe-naphtali",
      "shimron",
      "region-galilee",
      "region-jezreel-valley",
    ],
    mapFeatureIds: ["site-shimron"],
    mapCaption:
      "Zebulun's approximate area in lower Galilee, reconstructed around Shimron because the rest of its boundary points are unplaced.",
    whatChanged:
      "An approximate area appears in lower Galilee. Its edges are the softest so far, and the study draws them as an indication rather than a boundary.",
    geographyExplanation:
      "Lower Galilee is built of east-west ridges with flat-floored basins between them, lower and more open than the highlands to the north, and the basins are good grain country. Routes from the coast to the Sea of Chinnereth thread through these valleys, so Zebulun's ground is crossed by traffic without commanding any of it. The tribe is landlocked here, with the [[entity:mount-carmel]] ridge and Asher's plain between it and the sea.",
    sequenceType: "allotment",
    viewport: { center: [35.25, 32.72], zoom: 10 },
    citations: [
      {
        sourceId: "rainey-notley-sacred-bridge",
        supportedClaim:
          "Most of Zebulun's boundary points are unidentified; Shimron is placed at Tel Shimron",
      },
      {
        sourceId: "aharoni-land-of-bible",
        supportedClaim:
          "The physical structure of lower Galilee as basins between east-west ridges",
      },
    ],
    evidenceLabels: ["biblical-account", "reconstruction"],
  },
  {
    id: "ch19-issachar-and-the-valley",
    chapter: 19,
    order: 3,
    title: "Issachar and the Jezreel valley",
    scriptureRefs: ["Joshua 19:17-23"],
    narrative:
      "The fourth lot goes to [[entity:tribe-issachar]]. Sixteen towns are named, beginning with Jezreel and taking in Shunem, Anaharath and En-gannim, with the border reaching Tabor and ending at the [[entity:jordan-river]].\n\nThis is the best farmland in the whole distribution and the hardest to hold. Chapter 17 has already given several towns inside this same area to [[entity:tribe-manasseh-west]], [[entity:beth-shan]] and [[entity:taanach]] among them, and has already said that Manasseh could not drive out the people living in them because they were determined to stay in the valley.\n\nSo Issachar's allotment and the book's own admission of failure describe the same ground, a few chapters apart, without comment.",
    entityIds: [
      "tribe-issachar",
      "tribe-manasseh-west",
      "beth-shan",
      "taanach",
      "megiddo",
      "jordan-river",
      "region-jezreel-valley",
      "canaanites",
    ],
    mapFeatureIds: ["site-beth-shan", "site-taanach", "site-megiddo", "site-jordan-river"],
    mapCaption:
      "Issachar's approximate area covers the Jezreel valley floor, including towns chapter 17 says were not taken.",
    whatChanged:
      "An approximate area appears across the valley. With the remaining-land layer on, much of it is covered by towns the book says stayed Canaanite.",
    geographyExplanation:
      "The [[entity:region-jezreel-valley]] is flat, well watered and wide open, which makes it the richest ground in the country and the worst to fight for on foot. Chariots work here. The valley is ringed by strong fortified towns, [[entity:megiddo]] guarding the pass from the coast, [[entity:taanach]] on the southern rim, [[entity:beth-shan]] where the valley meets the Jordan trench, and the international route between Egypt and the north runs through it. Being assigned this valley and being able to live in it are two very different things, and the book says so.",
    sequenceType: "allotment",
    viewport: { center: [35.35, 32.55], zoom: 10 },
    citations: [
      {
        sourceId: "rainey-notley-sacred-bridge",
        supportedClaim:
          "Megiddo, Taanach and Beth-shan control the approaches to and through the Jezreel valley",
      },
      {
        sourceId: "hess-joshua",
        locator: "on Joshua 17:11-13",
        supportedClaim:
          "Towns within Issachar's described area are assigned to Manasseh and reported as not taken",
      },
    ],
    evidenceLabels: ["biblical-account", "reconstruction"],
  },
  {
    id: "ch19-asher-toward-sidon",
    chapter: 19,
    order: 4,
    title: "Asher, drawn across Sidonian ground",
    scriptureRefs: ["Joshua 19:24-31"],
    narrative:
      "The fifth lot goes to [[entity:tribe-asher]]. Its list runs to twenty-two towns and its border is described reaching [[entity:mount-carmel]] on the west, then north through Cabul and [[entity:kanah]] to great [[entity:sidon]], turning at the fortified city of [[entity:tyre]] and ending at the sea.\n\nThis is the clearest case in the book of a boundary drawn through land the text itself says was not held. Joshua 13:4-6 lists the [[entity:sidonians]] among the peoples remaining, and the coast between Carmel and Sidon belonged to the Phoenician harbour cities throughout the period.\n\nAsher's allotment and Asher's possession are therefore two different maps, and the book prints both.",
    entityIds: [
      "tribe-asher",
      "tribe-zebulun",
      "sidonians",
      "mount-carmel",
      "kanah",
      "sidon",
      "tyre",
      "achshaph",
      "great-sea",
      "region-coastal-plain",
    ],
    mapFeatureIds: [
      "site-mount-carmel",
      "site-kanah",
      "site-sidon",
      "site-tyre",
      "site-achshaph",
      "site-great-sea",
    ],
    mapCaption:
      "Asher's described area runs from Carmel to Sidon, across the coast the book says remained Sidonian.",
    whatChanged:
      "An approximate area appears along the northern coast. Switch on the remaining-land layer and most of its northern half is covered by territory Joshua 13 lists as unpossessed.",
    geographyExplanation:
      "North of the [[entity:mount-carmel]] headland the coastal plain narrows to a strip between the hills and the sea, widening at the bay of Acco and then pinching again toward [[entity:tyre]]. That strip carries the coastal route and its anchorages, which is why the Phoenician cities sat on it and kept it. From Carmel to [[entity:sidon]] is about ninety kilometres of ground that Asher's boundary description crosses and that the same book says stayed in other hands.",
    sequenceType: "allotment",
    viewport: { center: [35.2, 33.05], zoom: 9 },
    citations: [
      {
        sourceId: "rainey-notley-sacred-bridge",
        supportedClaim:
          "The Phoenician cities controlled the narrow coast north of Carmel and its anchorages",
      },
      {
        sourceId: "aharoni-land-of-bible",
        supportedClaim:
          "Asher's described boundary extends into territory the biblical text concedes was Sidonian",
      },
    ],
    evidenceLabels: ["biblical-account", "reconstruction"],
  },
  {
    id: "ch19-naphtali-in-the-north",
    chapter: 19,
    order: 5,
    title: "Naphtali in upper Galilee",
    scriptureRefs: ["Joshua 19:32-39"],
    narrative:
      "The sixth lot goes to [[entity:tribe-naphtali]]. Its border runs from Heleph and the oak in Zaanannim to the [[entity:jordan-river]], west to Aznoth-tabor and Hukkok, and it touches Zebulun on the south and Asher on the west. Nineteen fortified towns are counted, including [[entity:chinnereth]] on the lake shore, [[entity:hazor]], and [[entity:kedesh-naphtali]] in the northern hills.\n\nTwo of those names carry weight. Hazor was the largest city in the land and the head of the northern coalition burned in chapter 11; it is now a town inside an allotment. Kedesh will be named in the next chapter as a city of refuge.\n\nNaphtali's ground is the country Israel enters last and holds most thinly.",
    entityIds: [
      "tribe-naphtali",
      "tribe-zebulun",
      "tribe-asher",
      "chinnereth",
      "sea-of-chinnereth",
      "hazor",
      "kedesh-naphtali",
      "jordan-river",
      "region-galilee",
    ],
    mapFeatureIds: [
      "site-chinnereth",
      "site-hazor",
      "site-kedesh-naphtali",
      "site-sea-of-chinnereth",
      "site-jordan-river",
    ],
    mapCaption:
      "Naphtali's approximate area covers upper Galilee and the western side of the upper Jordan, with Hazor inside it.",
    whatChanged:
      "An approximate area appears in the far north. Hazor moves from being a burned enemy capital to being a town in an allotment, which is a change of status rather than of position.",
    geographyExplanation:
      "Upper [[entity:region-galilee]] is the highest and wettest part of the country, rising above 1,000 m, cut by steep valleys and much harder to move through than the basins to the south. Below it the upper Jordan corridor carries the road from Damascus and the north down to the [[entity:sea-of-chinnereth]], which is precisely why [[entity:hazor]] grew where it did and why the far north was contested by powers far larger than Israel. Naphtali's allotment straddles both: defensible hills and an international route it could not close.",
    sequenceType: "allotment",
    viewport: { center: [35.55, 33.0], zoom: 9 },
    citations: [
      {
        sourceId: "rainey-notley-sacred-bridge",
        supportedClaim:
          "The upper Jordan corridor carries the route from Damascus, which Hazor commanded",
      },
      {
        sourceId: "aharoni-land-of-bible",
        supportedClaim:
          "Upper Galilee's elevation and terrain distinguish it from the lower Galilean basins",
      },
    ],
    evidenceLabels: ["biblical-account", "reconstruction"],
  },
  {
    id: "ch19-dan-toward-the-coast",
    chapter: 19,
    order: 6,
    title: "Dan, allotted the ground it does not hold",
    scriptureRefs: ["Joshua 19:40-48"],
    narrative:
      "The seventh lot goes to [[entity:tribe-dan]]: Zorah, Eshtaol, Ir-shemesh, Shaalabbin, [[entity:aijalon]], [[entity:timnah]], [[entity:ekron]], Gibbethon, Baalath, Bene-berak and Gath-rimmon, with the border facing [[entity:joppa]].\n\nIt is the smallest allotment and the most exposed. [[entity:ekron]] is one of the five Philistine cities that chapter 13 has already listed among the land remaining, and [[entity:gezer]], just north of this area, is the town chapter 16 says Ephraim did not clear. Dan is assigned the outlet of the Sorek and Aijalon valleys onto the [[entity:region-coastal-plain]], and nothing in Joshua says it took them.\n\nVerse 47 notes in one sentence that the Danites later went north and captured Leshem, renaming it Dan. The full account belongs to Judges 18 and is deliberately kept off this map.",
    entityIds: [
      "tribe-dan",
      "tribe-judah",
      "tribe-benjamin",
      "tribe-ephraim",
      "aijalon",
      "timnah",
      "ekron",
      "joppa",
      "gezer",
      "beth-shemesh",
      "philistines",
      "region-coastal-plain",
      "region-shephelah",
    ],
    mapFeatureIds: [
      "site-aijalon",
      "site-timnah",
      "site-ekron",
      "site-joppa",
      "site-gezer",
      "site-beth-shemesh",
    ],
    mapCaption:
      "Dan's allotted area at the western outlet of the Sorek and Aijalon valleys, including Ekron, which the book lists among the land not taken.",
    whatChanged:
      "A small approximate area appears between Judah, Benjamin and the sea. It overlaps Philistine ground on the remaining-land layer, and no northern territory is drawn, because the migration in Judges 18 is outside this book.",
    geographyExplanation:
      "Dan is given the flattest and busiest ground in the distribution. The Sorek and Aijalon valleys are the two western corridors out of the hill country, and where they open onto the [[entity:region-coastal-plain]] they meet the international highway between Egypt and the north. [[entity:gezer]] sits on that junction and [[entity:ekron]] on the plain beyond it. Open country suits chariots and fortified towns suit whoever already holds them, which makes this the least defensible portion in the book for a tribe arriving on foot from the hills.",
    sequenceType: "allotment",
    viewport: { center: [34.92, 31.87], zoom: 10 },
    citations: [
      {
        sourceId: "rainey-notley-sacred-bridge",
        supportedClaim:
          "The Sorek and Aijalon valleys are the principal western corridors between the hill country and the coastal highway",
      },
      {
        sourceId: "hess-joshua",
        locator: "on Joshua 19:40-48",
        supportedClaim:
          "Dan's allotted towns include places the book elsewhere reports as unpossessed",
      },
      {
        sourceId: "anchor-bible-dictionary",
        locator: "s.v. Dan",
        supportedClaim:
          "The northern settlement of Dan at Laish is treated as a separate episode from the original allotment",
      },
    ],
    evidenceLabels: ["biblical-account", "reconstruction"],
  },
  {
    id: "ch19-joshua-takes-his-portion-last",
    chapter: 19,
    order: 7,
    title: "Joshua's own inheritance, last of all",
    scriptureRefs: ["Joshua 19:49-51"],
    narrative:
      "When the distribution is finished, Israel gives [[entity:joshua]] an inheritance among them. At the LORD's command they give him the town he asks for, [[entity:timnath-serah]] in the hill country of [[entity:tribe-ephraim]], and he builds it and lives there.\n\nTwo verses, and they come last. [[entity:caleb]], the other scout who had brought back a minority report forty-five years earlier, asked first and asked for the hardest country in the south. Joshua, who has been holding the lot for everybody else, takes one town in his own tribal hills after everyone else is placed.\n\nThe chapter then closes the whole allotment with a formula that names [[entity:eleazar]] the priest first, then Joshua, then the heads of the tribes, at [[entity:shiloh]] before the LORD, at the door of the tent of meeting.",
    entityIds: [
      "joshua",
      "caleb",
      "eleazar",
      "timnath-serah",
      "shiloh",
      "tribe-ephraim",
      "region-hill-country-ephraim",
    ],
    mapFeatureIds: ["site-timnath-serah", "site-shiloh"],
    mapCaption:
      "Joshua receives Timnath-serah in the Ephraimite hills, and the distribution is sealed at Shiloh.",
    whatChanged:
      "One town is added, in the tribe Joshua already belonged to. The allotment is now complete, and the place it was all decided from is named one last time.",
    geographyExplanation:
      "[[entity:timnath-serah]] is usually identified with Khirbet Tibnah, on the western flank of the Ephraimite highlands where the hills start to break down toward the coastal foothills. The identification rests on the surviving name and the general location the text gives, which is worth saying plainly given that this is the leader's own portion and burial place. It is ordinary hill country: terraced slopes, small valleys, no route worth controlling and no fortress. Compared with [[entity:caleb]]'s [[entity:hebron]] on the southern ridge road, or with the valley towns nobody could take, it is a modest piece of ground.",
    sequenceType: "allotment",
    viewport: { center: [35.15, 32.05], zoom: 10 },
    citations: [
      {
        sourceId: "rainey-notley-sacred-bridge",
        supportedClaim:
          "Timnath-serah is usually identified with Khirbet Tibnah in the western Ephraimite hills",
      },
      {
        sourceId: "hawk-joshua",
        supportedClaim:
          "Caleb's first request and Joshua's final portion function as a deliberate frame around the allotment",
      },
    ],
    evidenceLabels: ["biblical-account", "reconstruction", "theological-interpretation"],
  },

  /* ---------------------------- Chapter 20 --------------------------- */
  {
    id: "ch20-command-restated-from-moses",
    chapter: 20,
    order: 1,
    title: "The command restated from Moses",
    scriptureRefs: ["Joshua 20:1-6", "Numbers 35:9-15", "Deuteronomy 4:41-43"],
    narrative:
      "The LORD tells [[entity:joshua]] to assign the cities of refuge 'of which I spoke to you by [[entity:moses]]'. The chapter is a restatement, and it says so in its second verse.\n\nThe provision it restates is narrow and precise. A person who kills someone accidentally or unintentionally may flee to one of these towns. He stops at the entrance of the gate and states his case to the elders, who take him in and give him somewhere to live. If the avenger of blood follows, they are not to hand him over, because he struck without hatred. He stays until he has stood before the assembly for judgement, and then until the death of the serving high priest, after which he may go home.\n\nNone of this protects a murderer. Numbers 35 draws the line between the man who lay in wait and the man whose stone killed by accident, and refuses ransom for the first.",
    entityIds: ["joshua", "moses", "eleazar", "tribe-levi"],
    mapFeatureIds: ["site-shiloh", "site-jordan-river"],
    mapCaption:
      "The instruction looks back to Moses; nothing is added to the map until the six towns are named.",
    whatChanged:
      "Nothing changes geographically. This is the text reaching back to legislation given east of the Jordan before the book opened.",
    geographyExplanation:
      "The law assumes distance and roads before it names a single town. A provision that turns on whether a frightened man can reach a gate is a provision about travel time, and it only becomes real once someone decides where the gates are. That is why the chapter waits until the land has been allotted: [[entity:moses]] could name the three eastern towns because that territory was already assigned, and the three western ones had to wait for chapters 15 to 19.",
    sequenceType: "retrospective",
    viewport: {
      center: [35.4, 32.0],
      zoom: 8,
      bounds: [
        [34.7, 31.1],
        [36.2, 33.4],
      ],
    },
    citations: [
      {
        sourceId: "milgrom-numbers",
        supportedClaim:
          "Numbers 35 distinguishes intentional killing from accident and sets the refuge procedure Joshua 20 restates",
      },
      {
        sourceId: "block-deuteronomy",
        supportedClaim:
          "Moses designated the three Transjordan refuge cities before Israel crossed the river",
      },
    ],
    evidenceLabels: ["biblical-account"],
  },
  {
    id: "ch20-three-cities-west-of-jordan",
    chapter: 20,
    order: 2,
    title: "Three cities west of the Jordan",
    scriptureRefs: ["Joshua 20:7"],
    narrative:
      "Three towns are set apart west of the river: [[entity:kedesh-naphtali]] in the hill country of [[entity:tribe-naphtali]], [[entity:shechem]] in the hill country of [[entity:tribe-ephraim]], and Kiriath-arba, that is [[entity:hebron]], in the hill country of [[entity:tribe-judah]].\n\nAll three can be located with confidence, and all three sit on the same spine of country. Read from north to south they divide the length of the western highland into roughly equal thirds, each of them on or beside the ridge route that runs the length of it.\n\nThe text never states a maximum distance anyone should have to run. The spacing is the argument, and it is visible on the ground rather than in the wording.",
    entityIds: [
      "kedesh-naphtali",
      "shechem",
      "hebron",
      "tribe-naphtali",
      "tribe-ephraim",
      "tribe-judah",
      "tribe-levi",
      "region-galilee",
      "region-hill-country-ephraim",
      "region-hill-country-judah",
    ],
    mapFeatureIds: ["site-kedesh-naphtali", "site-shechem", "site-hebron"],
    mapCaption:
      "Kedesh, Shechem and Hebron, spaced along the length of the western hill country.",
    whatChanged:
      "Three towns already on the map take on a second function. No new territory appears; what appears is a pattern of spacing.",
    geographyExplanation:
      "The three are strung along the central ridge, which is also the main north-south road. [[entity:kedesh-naphtali]] to [[entity:shechem]] is about a hundred kilometres, [[entity:shechem]] to [[entity:hebron]] about eighty, which puts most of the settled highland within forty to fifty kilometres of one of them. That is a long day's walk on a good road and a plausible one for someone running for his life, but the arithmetic works only for the ridge itself. From the Negev fringe or the coastal foothills the nearest gate is considerably further, and the text does not pretend otherwise.",
    sequenceType: "summary",
    viewport: { center: [35.25, 32.3], zoom: 8 },
    citations: [
      {
        sourceId: "rainey-notley-sacred-bridge",
        supportedClaim:
          "Kedesh, Shechem and Hebron lie along the central ridge route that carries north-south traffic",
      },
      {
        sourceId: "beitzel-moody-atlas",
        supportedClaim:
          "The spacing of the refuge cities is standardly presented as a deliberate distribution across the country",
      },
    ],
    evidenceLabels: ["biblical-account", "reconstruction"],
  },
  {
    id: "ch20-three-cities-east-of-jordan",
    chapter: 20,
    order: 3,
    title: "Three cities east of the Jordan, and two we cannot find",
    scriptureRefs: ["Joshua 20:8-9", "Deuteronomy 4:43"],
    narrative:
      "East of the [[entity:jordan-river]] the text names [[entity:bezer]] in the wilderness on Reuben's plateau, [[entity:ramoth-gilead]] in Gad, and [[entity:golan-city]] in Bashan out of eastern Manasseh.\n\nHere the study has to stop short. [[entity:bezer]] has no identification anyone agrees on. [[entity:golan-city]] has none either; the regional name Golan survives, but that is the region, not the town, and the two must not be confused. [[entity:ramoth-gilead]] is disputed, with Tell er-Ramith the most cited candidate among several.\n\nSo of the six cities of refuge, three are firmly placed, one is shown only as a contested proposal, and two are absent from the map altogether. The chapter's final verse widens the provision one more time: these towns are for the children of Israel and for the alien living among them alike.",
    entityIds: [
      "bezer",
      "ramoth-gilead",
      "golan-city",
      "jordan-river",
      "tribe-reuben",
      "tribe-gad",
      "tribe-manasseh-east",
      "region-gilead",
      "region-bashan",
    ],
    mapFeatureIds: ["site-ramoth-gilead", "site-jordan-river"],
    mapCaption:
      "Only Ramoth in Gilead can be shown east of the river, and only as a disputed candidate; Bezer and Golan are deliberately absent.",
    whatChanged:
      "One disputed point appears east of the Jordan. Two of the six refuge cities are named in the text and shown nowhere, because no location for them is known.",
    geographyExplanation:
      "The eastern three were meant to cover the plateau the way the western three cover the ridge: [[entity:bezer]] on Reuben's tableland north of the Arnon, [[entity:ramoth-gilead]] in the Gilead highlands, [[entity:golan-city]] on the Bashan plateau, spread from the desert fringe to the slopes below Hermon. That is the design the names imply. It cannot be checked, because two of the three points are missing, and a chapter whose whole logic is spacing is precisely the place where missing coordinates hurt. Inventing them would turn an honest gap into a tidy diagram.",
    sequenceType: "summary",
    viewport: { center: [35.95, 32.1], zoom: 8 },
    citations: [
      {
        sourceId: "rainey-notley-sacred-bridge",
        supportedClaim:
          "Bezer and the city of Golan are not securely located, and Ramoth in Gilead remains disputed",
      },
      {
        sourceId: "anchor-bible-dictionary",
        locator: "s.v. Bezer; s.v. Golan",
        supportedClaim:
          "No proposed identification for Bezer or for the city of Golan has achieved agreement",
      },
      {
        sourceId: "milgrom-numbers",
        supportedClaim:
          "The refuge provision applies to the resident foreigner as well as to Israelites",
      },
    ],
    evidenceLabels: ["biblical-account", "disputed"],
  },

  /* ---------------------------- Chapter 21 --------------------------- */
  {
    id: "ch21-levites-ask-for-towns",
    chapter: 21,
    order: 1,
    title: "The Levites ask for their towns",
    scriptureRefs: ["Joshua 21:1-3", "Numbers 35:1-8"],
    narrative:
      "The heads of the Levite fathers' houses come to [[entity:eleazar]] the priest, [[entity:joshua]] and the heads of the tribes at [[entity:shiloh]], and they ask. They quote the command given through [[entity:moses]]: towns to live in, with pasture for their livestock. Israel gives them the towns out of its own inheritance.\n\nThis is the only tribe in the book that has to make a request rather than draw a portion, and the difference is structural, not incidental. There is no seventh or thirteenth block of land waiting for [[entity:tribe-levi]], because the text has said four times already that it has no territorial inheritance at all.\n\nWhat it asks for is a town and a belt of grazing around it, repeated forty-eight times inside other people's land.",
    entityIds: ["tribe-levi", "eleazar", "joshua", "moses", "aaron", "shiloh"],
    mapFeatureIds: ["site-shiloh"],
    mapCaption:
      "At Shiloh the Levites ask for towns and pasture rather than a territory, and Israel grants it out of its own inheritance.",
    whatChanged:
      "Nothing yet. A request is made at Shiloh, and the map is about to gain forty-eight points and no polygon.",
    geographyExplanation:
      "What the Levites ask for is a specific kind of ground. Numbers 35 measures their pasture out from the town wall, a thousand cubits around and two thousand to a side, which is a grazing belt rather than a farm: enough for flocks and pack animals, not enough to live on by cropping. A tribe supported by offerings and tithes needs different land from a tribe supported by grain, olives and vines, and in the highland economy those are genuinely different uses of a hillside.",
    sequenceType: "event",
    viewport: { center: [35.2894, 32.0561], zoom: 11 },
    citations: [
      {
        sourceId: "milgrom-numbers",
        supportedClaim:
          "Numbers 35 specifies the Levites' towns with a measured belt of pasture for livestock",
      },
      {
        sourceId: "stager-forging-identity",
        supportedClaim:
          "Highland agriculture combined grain, orchard crops and grazing on distinct kinds of ground",
      },
    ],
    evidenceLabels: ["biblical-account", "externally-attested"],
  },
  {
    id: "ch21-thirteen-towns-for-aarons-sons",
    chapter: 21,
    order: 2,
    title: "Thirteen towns for the descendants of Aaron",
    scriptureRefs: ["Joshua 21:4", "Joshua 21:9-19"],
    narrative:
      "The first lot goes to the Kohathites, and within them to the descendants of [[entity:aaron]], the priests: thirteen towns out of Judah, Simeon and Benjamin.\n\nNine come from the south: [[entity:hebron]], [[entity:libnah]], [[entity:jattir]], [[entity:eshtemoa]], Holon, [[entity:debir]], Ain, Juttah and [[entity:beth-shemesh]]. Four come from the Benjamin plateau: [[entity:gibeon]], Geba, Anathoth and Almon. [[entity:hebron]] is named here again as a city of refuge, and the text adds that while the town went to the priests, its fields and villages went to [[entity:caleb]].\n\nThe priestly towns are the tightest cluster in the chapter, all of them in the southern hill country and on the plateau just north of it, and several of them, [[entity:libnah]] among them, cannot be located.",
    entityIds: [
      "aaron",
      "caleb",
      "tribe-levi",
      "tribe-judah",
      "tribe-simeon",
      "tribe-benjamin",
      "hebron",
      "libnah",
      "jattir",
      "eshtemoa",
      "debir",
      "beth-shemesh",
      "gibeon",
      "region-hill-country-judah",
      "region-shephelah",
    ],
    mapFeatureIds: [
      "site-hebron",
      "site-jattir",
      "site-eshtemoa",
      "site-debir",
      "site-beth-shemesh",
      "site-gibeon",
    ],
    mapCaption:
      "The priests' thirteen towns cluster in the southern hill country and on the Benjamin plateau.",
    whatChanged:
      "Town markers appear inside Judah's, Simeon's and Benjamin's areas. No Levite territory is drawn, and none ever will be.",
    geographyExplanation:
      "These towns sit on and beside the southern ridge road, from [[entity:jattir]] on the Negev edge through [[entity:hebron]] at about 900 m to [[entity:gibeon]] on the plateau, with [[entity:beth-shemesh]] out west where the Sorek valley opens toward the lowland. The whole cluster fits inside roughly sixty kilometres of the country's spine. Concentrating the priestly line along the main highland route puts it on the road everybody uses, which is a practical arrangement for a group whose work involves people coming to them.",
    sequenceType: "allotment",
    viewport: { center: [35.1, 31.62], zoom: 9 },
    citations: [
      {
        sourceId: "haran-levitical-cities",
        supportedClaim:
          "The Aaronide towns form a distinct southern group within the Levitical list",
      },
      {
        sourceId: "rainey-notley-sacred-bridge",
        supportedClaim:
          "The southern ridge route links Hebron, the Judean hill towns and the Benjamin plateau",
      },
      {
        sourceId: "hess-joshua",
        locator: "on Joshua 21:11-12",
        supportedClaim:
          "Hebron's town is given to the priests while its fields and villages remain Caleb's",
      },
    ],
    evidenceLabels: ["biblical-account", "reconstruction"],
  },
  {
    id: "ch21-forty-eight-towns-scattered",
    chapter: 21,
    order: 3,
    title: "Forty-eight towns, and no territory",
    scriptureRefs: ["Joshua 21:5-8", "Joshua 21:20-42"],
    narrative:
      "The rest of the list works by clan. The remaining Kohathites receive ten towns from Ephraim, Dan and western Manasseh, including [[entity:shechem]], [[entity:gezer]], [[entity:upper-beth-horon]], [[entity:aijalon]] and [[entity:taanach]]. Gershon receives thirteen from Issachar, Asher, Naphtali and eastern Manasseh, among them [[entity:kedesh-naphtali]], [[entity:ashtaroth]] and [[entity:golan-city]]. Merari receives twelve from Zebulun, Reuben and Gad, including [[entity:bezer]], [[entity:ramoth-gilead]], [[entity:heshbon]] and [[entity:jazer]].\n\nForty-eight towns, each with its pasture, in every tribal area on both sides of the [[entity:jordan-river]]. No polygon is drawn for [[entity:tribe-levi]] on this map, and that is not a gap in the data: the text is explicit that Levi has no such inheritance, so drawing one would contradict the chapter it came from.\n\nSeveral of the forty-eight cannot be placed at all, [[entity:libnah]], [[entity:jazer]], [[entity:bezer]] and [[entity:golan-city]] among them.",
    entityIds: [
      "tribe-levi",
      "tribe-ephraim",
      "tribe-dan",
      "tribe-manasseh-west",
      "tribe-manasseh-east",
      "tribe-issachar",
      "tribe-asher",
      "tribe-naphtali",
      "tribe-zebulun",
      "tribe-reuben",
      "tribe-gad",
      "shechem",
      "gezer",
      "upper-beth-horon",
      "aijalon",
      "taanach",
      "kedesh-naphtali",
      "ashtaroth",
      "heshbon",
      "ramoth-gilead",
      "jazer",
      "bezer",
      "golan-city",
      "libnah",
      "jordan-river",
      "region-gilead",
      "region-bashan",
      "region-galilee",
    ],
    mapFeatureIds: [
      "site-shechem",
      "site-gezer",
      "site-upper-beth-horon",
      "site-aijalon",
      "site-taanach",
      "site-kedesh-naphtali",
      "site-ashtaroth",
      "site-heshbon",
      "site-ramoth-gilead",
    ],
    mapCaption:
      "The Levitical towns that can be located, scattered from Bashan to the Negev fringe, with no Levite territory anywhere.",
    whatChanged:
      "Points appear inside every other tribe's area and nothing is shaded. Levi is the one tribe on this map with presence everywhere and territory nowhere.",
    geographyExplanation:
      "The distribution is the content. The towns that can be placed run from [[entity:ashtaroth]] on the Bashan plateau and [[entity:kedesh-naphtali]] in upper Galilee, through [[entity:taanach]] on the Jezreel rim and [[entity:shechem]] in the central pass, down past [[entity:gezer]] and [[entity:aijalon]] on the western approaches to the southern hill country, and across the river to [[entity:heshbon]] and [[entity:ramoth-gilead]]. No tribal area is without one, and several sit in towns the book says were never cleared, [[entity:gezer]] and [[entity:taanach]] among them, which means part of this pattern is a claim rather than an address.",
    sequenceType: "allotment",
    viewport: {
      center: [35.4, 32.0],
      zoom: 7,
      bounds: [
        [34.6, 31.1],
        [36.3, 33.4],
      ],
    },
    citations: [
      {
        sourceId: "haran-levitical-cities",
        supportedClaim:
          "The forty-eight towns are distributed by Levite clan across all the tribal areas rather than forming a territory",
      },
      {
        sourceId: "rainey-notley-sacred-bridge",
        supportedClaim:
          "Identifications and non-identifications among the Levitical towns on both sides of the Jordan",
      },
      {
        sourceId: "kitchen-reliability",
        supportedClaim:
          "Some towns named in the lists are ones the book reports as not taken",
      },
    ],
    evidenceLabels: ["biblical-account", "reconstruction", "disputed"],
  },
  {
    id: "ch21-not-one-word-failed",
    chapter: 21,
    order: 4,
    title: "Not one word failed",
    scriptureRefs: ["Joshua 21:43-45", "Joshua 13:1-7", "Joshua 23:12-14"],
    narrative:
      "Three verses close the allotment section. The LORD gave Israel all the land he swore to their fathers; they possessed it and lived in it. He gave them rest all around. Not one good thing he had spoken failed; all of it came to pass.\n\nThat is said eight chapters after the LORD told [[entity:joshua]] there remained very much land to be possessed, and two chapters before [[entity:joshua]] warns Israel about the nations that remain among them and in the same speech repeats that not one thing has failed. The book holds all of it at once.\n\nThe honest thing a map can do here is refuse to tidy up. [[entity:jerusalem]] is still Jebusite, [[entity:gezer]] is still uncleared, the valley towns are still Canaanite, and the coast north of Carmel is still Sidonian. The summary is made over that map, not instead of it.",
    entityIds: [
      "joshua",
      "jerusalem",
      "gezer",
      "beth-shan",
      "megiddo",
      "taanach",
      "sidon",
      "tyre",
      "ekron",
      "jebusites",
      "canaanites",
      "sidonians",
      "philistines",
      "tribe-levi",
      "region-coastal-plain",
      "region-jezreel-valley",
    ],
    mapFeatureIds: [
      "site-jerusalem",
      "site-gezer",
      "site-beth-shan",
      "site-megiddo",
      "site-taanach",
      "site-sidon",
      "site-tyre",
      "site-ekron",
    ],
    mapCaption:
      "The closing summary is spoken over a map that still has unpossessed ground on it, and the book leaves both standing.",
    whatChanged:
      "Nothing is added and nothing is removed. The text looks back over the whole distribution and calls it complete while the remaining-land layer is still populated.",
    geographyExplanation:
      "Set the summary beside the terrain and you can see exactly which ground is at issue. It is the flat, fertile and well-connected ground: the [[entity:region-coastal-plain]] with the coastal highway, the [[entity:region-jezreel-valley]] with its ring of fortified towns, the Phoenician coast, and the one fortified ridge at [[entity:jerusalem]] that Judah and Benjamin both failed to take. What Israel holds is the hill country, which is defensible, farmable with effort, and of little interest to chariot armies. Rest on every side is claimed over a country whose best ground is still in other hands.",
    sequenceType: "retrospective",
    viewport: {
      center: [35.2, 32.0],
      zoom: 7,
      bounds: [
        [34.3, 31.1],
        [36.0, 33.6],
      ],
    },
    citations: [
      {
        sourceId: "kitchen-reliability",
        supportedClaim:
          "The summary statements must be read against the book's own admissions of unconquered territory",
      },
      {
        sourceId: "mitchell-together-in-land",
        supportedClaim:
          "Joshua sets claims of complete fulfilment beside narratives of coexistence without resolving the tension",
      },
      {
        sourceId: "howard-joshua",
        supportedClaim:
          "The rest formula in Joshua 21:44 is a theological claim about God's gift rather than a report of total occupation",
      },
    ],
    evidenceLabels: ["biblical-account", "theological-interpretation", "disputed"],
  },
];
