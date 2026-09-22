import type { Chapter, Milestone } from "../types";

/**
 * Joshua 17: the lot for Manasseh, the daughters of Zelophehad, and the valley
 * Israel could not take.
 *
 * Three constraints govern this file.
 *
 * 1. The allotment and the failure are written in the same breath. Joshua 17:11
 *    lists six towns as Manasseh's and 17:12 says Manasseh could not take them,
 *    and those towns are precisely the ones holding the Jezreel corridor. The
 *    unheld ground here is not a marginal strip; it is the portion's whole value.
 * 2. Several boundary points cannot be placed. Michmethath, En Tappuah, the
 *    brook Kanah and the Asher of verse 7 are named without being locatable, and
 *    En-dor has no entry in the site register. They appear in the prose and are
 *    deliberately absent from `mapFeatureIds`.
 * 3. "Chariots of iron" is left as the text's phrase. What it denotes is not
 *    settled, and nothing in this chapter is used to date anything.
 *
 * `sequenceType` is `allotment` for the territorial beats and `summary` for the
 * unpossessed-towns notice and the exchange with the house of Joseph. There is no
 * located episode in sequence in this chapter, so nothing here is an `event`.
 */

export const CHAPTERS: Chapter[] = [
  /* ================================================================== */
  /* Chapter 17                                                         */
  /* ================================================================== */
  {
    id: "ch17",
    number: 17,
    title: "Manasseh, the daughters of Zelophehad, and the valley Israel could not take",
    summary:
      "Joseph's firstborn tribe receives land on both sides of the Jordan, five sisters are given an inheritance in their own right because Moses had been commanded to give them one, and the chapter ends by admitting that the valley towns at the heart of the portion stayed in Canaanite hands.",
    phase: "inheritance-and-life",
    scriptureRange: "Joshua 17:1-18",
    milestoneIds: [
      "ch17-daughters-of-zelophehad-inherit",
      "ch17-border-to-the-great-sea",
      "ch17-valley-towns-not-taken",
      "ch17-iron-chariots-and-the-forest",
    ],
    sections: [
      {
        id: "ch17-at-a-glance",
        kind: "at-a-glance",
        title: "At a glance",
        body:
          "[[entity:tribe-manasseh-east]] already holds [[entity:region-gilead]] and [[entity:region-bashan]] under [[entity:machir]]. West of the river ten portions go to the remaining clans, and [[entity:zelophehads-daughters]] receive an inheritance among their father's male relatives because [[entity:moses]] had been commanded to give them one. The border of [[entity:tribe-manasseh-west]] reaches the [[entity:great-sea]]. Then the chapter admits that the valley towns were never taken.",
        scriptureRefs: ["Joshua 17:1-6", "Joshua 17:7-11", "Joshua 17:12-18"],
        citations: [],
        evidenceLabels: ["biblical-account"],
      },
      {
        id: "ch17-walk-through",
        kind: "walk-through",
        title: "Walk through the chapter",
        body:
          "The chapter opens by naming [[entity:tribe-manasseh-west]] and [[entity:tribe-manasseh-east]] as one tribe with two homes. [[entity:machir]], Manasseh's firstborn, already holds [[entity:region-gilead]] and [[entity:region-bashan]] east of the [[entity:jordan-river]] from [[entity:moses]]. Six clans remain to be placed in the west.\n\nThen the register stops for a legal case. [[entity:zelophehad]] son of [[entity:hepher]] died leaving five daughters and no sons. [[entity:zelophehads-daughters]] come to [[entity:eleazar]], [[entity:joshua]] and the leaders and say that the LORD commanded Moses to give them an inheritance among their brothers. They are given one, among the brothers of their father, and ten portions fall to Manasseh west of the river.\n\nThe border follows. It runs from Asher to Michmethath near [[entity:shechem]], past the people of En Tappuah, down to the brook Kanah and out to the [[entity:great-sea]], with [[entity:tribe-asher]] to the north and [[entity:tribe-issachar]] to the east. Inside those two tribes Manasseh holds [[entity:beth-shan]], [[entity:ibleam]], [[entity:dor]], En-dor, [[entity:taanach]] and [[entity:megiddo]].\n\nAnd then, flatly: Manasseh could not drive out the people of those towns. The [[entity:canaanites]] went on living there, and when Israel grew strong it put them to forced labour instead. When the house of Joseph protests that one lot is too small, [[entity:joshua]] tells them to clear the forest, they answer that the valley Canaanites have chariots of iron, and he replies that they will drive them out.",
        scriptureRefs: [
          "Joshua 17:1-2",
          "Joshua 17:3-6",
          "Joshua 17:7-11",
          "Joshua 17:12-13",
          "Joshua 17:14-18",
        ],
        citations: [
          {
            sourceId: "hess-joshua",
            locator: "on Joshua 17:1-13",
            supportedClaim:
              "The chapter combines a clan register, a boundary description, and an admission that the listed towns were not taken",
          },
        ],
        evidenceLabels: ["biblical-account"],
      },
      {
        id: "ch17-what-brought-us-here",
        kind: "what-brought-us-here",
        title: "What brought us here",
        body:
          "Two decisions made before this chapter shape all of it. [[entity:moses]] had given [[entity:region-gilead]] and [[entity:region-bashan]] to [[entity:tribe-manasseh-east]] along with the portions of [[entity:tribe-reuben]] and [[entity:tribe-gad]], which is why half a tribe is already settled when its lot is drawn. And when [[entity:zelophehads-daughters]] brought their case to Moses in Numbers 27, the answer was not a favour but a rule: if a man dies leaving no son, his inheritance passes to his daughters. Joshua 17 is where that rule is carried out.\n\nImmediately before this, Joshua 16 gave [[entity:tribe-ephraim]] its portion and conceded that the [[entity:canaanites]] in [[entity:gezer]] were not driven out but put to forced labour. The shape of this chapter's ending is therefore already familiar when it arrives.",
        scriptureRefs: [
          "Numbers 27:1-11",
          "Numbers 36:1-12",
          "Joshua 13:29-31",
          "Joshua 16:5-10",
        ],
        citations: [
          {
            sourceId: "milgrom-numbers",
            locator: "on Numbers 27:1-11 and 36",
            supportedClaim:
              "The petition of Zelophehad's daughters produced a general inheritance ruling rather than a single exemption",
          },
          {
            sourceId: "woudstra-joshua",
            supportedClaim:
              "The allotment chapters are built around the distinction between land assigned and land entered",
          },
        ],
        evidenceLabels: ["biblical-account"],
      },
      {
        id: "ch17-surrounding-world",
        kind: "surrounding-world",
        title: "The surrounding world",
        body:
          "The [[entity:region-jezreel-valley]] is the one place where a broad flat road crosses the country. Traffic coming up the coast turns inland at the [[entity:mount-carmel]] headland, climbs through a pass [[entity:megiddo]] guards, crosses the open floor past [[entity:taanach]] and [[entity:ibleam]], and reaches the [[entity:region-jordan-valley]] at [[entity:beth-shan]], from where roads run north toward Damascus. Every town Joshua 17:11 names sits on that line or on the coast beside it.\n\nEgypt knew it. The campaign records of Thutmose III make Megiddo the objective of a march through a narrow pass, and Megiddo, Taanach and Beth-shan turn up in Egyptian topographical lists of Canaanite towns. Beth-shan itself held an Egyptian garrison and administrative buildings in the Late Bronze Age. [[entity:egypt-new-kingdom]] was not a distant rumour in this valley.\n\nFlat ground is chariot ground, and that is the practical fact behind verse 16. On the iron, care is owed. The phrase is the text's own, and what it denotes is unsettled: iron fittings on a wooden vehicle, a general term for formidable chariotry, or something else again. The move to widespread iron working in the region is generally placed later than most reconstructions of these events, which is a reason to leave the phrase alone rather than a reason to date the chapter by it.",
        scriptureRefs: ["Joshua 17:11", "Joshua 17:16"],
        citations: [
          {
            sourceId: "rainey-notley-sacred-bridge",
            supportedClaim:
              "The Jezreel valley as the principal east-west corridor, with Megiddo guarding the pass from the coastal plain and Beth-shan at the eastern outlet",
          },
          {
            sourceId: "thutmose-iii-lists",
            supportedClaim:
              "Megiddo as the objective of an Egyptian campaign through a narrow pass, and the appearance of these valley towns in Egyptian topographical lists",
          },
          {
            sourceId: "mazar-archaeology-land",
            supportedClaim:
              "Egyptian administrative and military presence at Beth-shan in the Late Bronze Age, and the later chronology of widespread iron working in the region",
          },
          {
            sourceId: "hess-joshua",
            locator: "on Joshua 17:16",
            supportedClaim:
              "The sense of the phrase rendered 'chariots of iron' is not settled",
          },
        ],
        evidenceLabels: ["externally-attested", "biblical-account", "disputed"],
        collapsedByDefault: true,
      },
      {
        id: "ch17-why-it-matters",
        kind: "why-it-matters",
        title: "Why it matters",
        body:
          "Two claims sit in this chapter and neither is softened.\n\nThe first is that an inheritance ruling made years earlier is honoured when it costs something. [[entity:zelophehads-daughters]] are not granted a favour on the day; they receive what the text says the LORD had already commanded [[entity:moses]] to give them, and five names go into the register of a tribe. In a book where inheritance is the whole subject, being named in that register is the concrete form of belonging. A rule that could easily have been quietly dropped during the division is instead the stated reason Manasseh counts ten portions west of the river.\n\nThe second is harder. The same chapter that records [[entity:joshua]]'s assurance that the house of [[entity:joseph]] will drive out the Canaanites has already said, six verses earlier, that [[entity:tribe-manasseh-west]] did not. The tribe is handed the best ground in the country and cannot live on it. Reformed readers have generally taken the gap as evidence of Israel's unbelief rather than of God failing to perform, and Calvin reads the forced labour of verse 13 as a preference for profit over obedience. That is a Reformed emphasis and not the only Christian reading; others hear the chapter as honest reporting that declines to tidy the record. On either reading the book puts the gift and the shortfall on the same page and leaves them there.",
        scriptureRefs: ["Joshua 17:3-6", "Joshua 17:12-13", "Joshua 17:17-18"],
        citations: [
          {
            sourceId: "milgrom-numbers",
            supportedClaim:
              "The daughters of Zelophehad receive a portion under a standing inheritance rule rather than an ad hoc concession",
          },
          {
            sourceId: "calvin-joshua",
            locator: "on Joshua 17:12-13",
            supportedClaim:
              "Calvin reads Israel's imposition of forced labour rather than removal as a preference for profit over obedience",
          },
          {
            sourceId: "mitchell-together-in-land",
            supportedClaim:
              "Joshua holds commands to drive out and narratives of coexistence together without resolving the tension",
          },
        ],
        evidenceLabels: ["biblical-account", "theological-interpretation"],
      },
      {
        id: "ch17-details-worth-noticing",
        kind: "details-worth-noticing",
        title: "Details worth noticing",
        body:
          "Manasseh is the only tribe with land on both sides of the [[entity:jordan-river]], and the book never treats that as tidy. Joshua 22 turns the arrangement into a crisis when the eastern tribes build an altar by the river on their way home.\n\nSeveral of the boundary points here cannot be placed. Michmethath, En Tappuah and the brook Kanah are named as though any reader would know them, and we do not. The Kanah of verse 9 is a wadi running west to the [[entity:great-sea]] and is a different place from the [[entity:kanah]] used as a marker for [[entity:tribe-asher]] in chapter 19; more than one course has been proposed for it. The Asher of verse 7 may be the tribe or a town of the same name, and no site is identified either way. En-dor, listed among Manasseh's towns in verse 11, has no location in this study, so it is named in the text and absent from the map. Verse 8 is stranger still: the land of Tappuah is Manasseh's while the town of Tappuah belongs to [[entity:tribe-ephraim]].\n\n[[entity:joshua]] is himself an Ephraimite, and the complaint in verse 14 comes from the house of [[entity:joseph]], his own tribal group. He answers it by telling them to go and work harder.",
        scriptureRefs: [
          "Joshua 17:1",
          "Joshua 17:7-9",
          "Joshua 17:11",
          "Joshua 17:14-15",
          "Joshua 22:9-12",
        ],
        citations: [
          {
            sourceId: "aharoni-land-of-bible",
            supportedClaim:
              "Most of the boundary points in Manasseh's description are unidentified, and the brook Kanah has competing proposals",
          },
          {
            sourceId: "butler-joshua",
            locator: "on Joshua 17:7-11",
            supportedClaim:
              "The Asher of verse 7 and the relationship of Tappuah's land to its town are recognised difficulties in the description",
          },
        ],
        evidenceLabels: ["biblical-account", "reconstruction", "disputed"],
        collapsedByDefault: true,
      },
      {
        id: "ch17-difficult-questions",
        kind: "difficult-questions",
        title: "Difficult questions",
        body:
          "[[entity:joshua]] closes the chapter telling the house of [[entity:joseph]] that they *shall* drive out the Canaanites, though they have chariots of iron and though they are strong. Verse 12 has already said that [[entity:tribe-manasseh-west]] could not, and Judges 1:27-28 repeats the failure town by town. Three ways of holding that have been argued. The assurance may be conditional in practice, so the word stands and Israel forfeits it. The chapter may be preserving more than one source or period without harmonising them. Or the book may be refusing on purpose to resolve the tension, setting the promise beside the shortfall because that is the situation its readers were living in.\n\nThe second question is what it does to a reader's idea of divine promise to find it printed next to an admission of military limitation. The text does not treat the limitation as embarrassing enough to delete, and the honest starting point is that the book kept both sentences. Nothing here turns a promise of land into a warrant for anyone's territorial claim now.",
        scriptureRefs: ["Joshua 17:12-13", "Joshua 17:17-18", "Judges 1:27-28"],
        citations: [
          {
            sourceId: "mitchell-together-in-land",
            supportedClaim:
              "The book sets commands and assurances beside reports of coexistence and leaves the tension standing",
          },
          {
            sourceId: "boling-wright-joshua",
            supportedClaim:
              "The allotment material is read by some as combining sources of different periods without harmonisation",
          },
          {
            sourceId: "mcconville-williams-joshua",
            supportedClaim:
              "Christian theology has handled Joshua's unfulfilled assurances as conditional rather than as failed",
          },
        ],
        evidenceLabels: [
          "biblical-account",
          "disputed",
          "theological-interpretation",
        ],
        collapsedByDefault: true,
      },
    ],
    discussionQuestions: [
      "Joshua 17:11 counts Beth-shan, Ibleam, Dor, En-dor, Taanach and Megiddo as Manasseh's, and 17:12 says Manasseh could not take them. Those towns ring the one broad flat route across the country. What changes when you notice that the unheld ground was the most valuable ground?",
      "The daughters of Zelophehad receive their inheritance because the LORD had already commanded Moses to give them one. Why might the text present this as obedience to an old ruling rather than as a decision made on the day?",
      "Joshua tells the house of Joseph to go up and clear the forest; they answer that the hill country is not enough and the valley has iron chariots. Who is right about the terrain, and does being right settle the argument?",
      "Manasseh is one tribe with land on both sides of the Jordan. What practical difficulties would you expect that to create, for the tribe and for Israel?",
      "Joshua is an Ephraimite hearing a complaint from Ephraim and Manasseh, his own tribal group. Does that make his answer easier or harder to give?",
    ],
    relatedEntityIds: [
      "joshua",
      "eleazar",
      "moses",
      "joseph",
      "machir",
      "hepher",
      "zelophehad",
      "zelophehads-daughters",
      "tribe-manasseh-west",
      "tribe-manasseh-east",
      "tribe-ephraim",
      "tribe-asher",
      "tribe-issachar",
      "tribe-reuben",
      "tribe-gad",
      "canaanites",
      "perizzites",
      "rephaim",
      "canaanite-city-states",
      "egypt-new-kingdom",
      "beth-shan",
      "ibleam",
      "dor",
      "taanach",
      "megiddo",
      "shechem",
      "gezer",
      "kanah",
      "mount-carmel",
      "jordan-river",
      "great-sea",
      "region-jezreel-valley",
      "region-gilead",
      "region-bashan",
      "region-hill-country-ephraim",
      "region-coastal-plain",
      "region-jordan-valley",
    ],
    themeIds: [
      "land-and-inheritance",
      "promise-and-fulfillment",
      "obedience-and-failure",
    ],
    wordCount: 623,
  },
];

export const MILESTONES: Milestone[] = [
  /* ---------------------------- Chapter 17 --------------------------- */
  {
    id: "ch17-daughters-of-zelophehad-inherit",
    chapter: 17,
    order: 1,
    title: "Manasseh's lot, and the daughters of Zelophehad",
    scriptureRefs: ["Joshua 17:1-6"],
    narrative:
      "The lot for Manasseh begins with a tribe that already owns half of what it needs. [[entity:machir]], Manasseh's firstborn, holds [[entity:region-gilead]] and [[entity:region-bashan]] east of the [[entity:jordan-river]], given under [[entity:moses]] before this book opened. Six clans of Manasseh remain to be placed west of the river.\n\nThen the register stops for a legal case. [[entity:zelophehad]] son of [[entity:hepher]] died with five daughters and no sons. [[entity:zelophehads-daughters]], Mahlah, Noah, Hoglah, Milcah and Tirzah, come to [[entity:eleazar]] the priest, [[entity:joshua]] and the leaders, and state their claim as a matter of record: the LORD commanded Moses to give us an inheritance among our brothers. They are given one, among the brothers of their father.\n\nTen portions then fall to [[entity:tribe-manasseh-west]], and verse 6 gives the reason: the daughters of Manasseh had an inheritance among his sons. How those ten are counted against the six clan names of verse 2 is not spelled out, and commentators reckon it differently. What the chapter is clear about is the principle, and that the principle was not invented on the day.",
    entityIds: [
      "machir",
      "zelophehad",
      "hepher",
      "zelophehads-daughters",
      "joseph",
      "moses",
      "joshua",
      "eleazar",
      "tribe-manasseh-west",
      "tribe-manasseh-east",
      "tribe-ephraim",
      "region-gilead",
      "region-bashan",
      "region-hill-country-ephraim",
      "jordan-river",
    ],
    mapFeatureIds: [
      "allot-manasseh-west",
      "allot-manasseh-east",
      "region-gilead",
      "region-bashan",
      "site-jordan-river",
    ],
    mapCaption:
      "Manasseh's two portions: Gilead and Bashan east of the Jordan, and the clan lands west of it where Zelophehad's daughters receive their share.",
    whatChanged:
      "No ground is taken and nothing moves. The western half of Manasseh's assigned area appears alongside the eastern half it already held, and part of that western share is entered in the names of five women.",
    geographyExplanation:
      "Manasseh is split by the deepest trench in the region. [[entity:region-gilead]] and [[entity:region-bashan]] are wooded upland and basalt plateau east of the [[entity:jordan-river]], suited to grain and grazing and reached from the west only by dropping more than a kilometre into the rift and climbing out the other side. Western Manasseh is a different country: hill country north of [[entity:tribe-ephraim]] that falls away toward the [[entity:region-jezreel-valley]] and the [[entity:region-coastal-plain]]. The daughters' inheritance belongs to the western side, and 'among the brothers of their father' describes something specific on the ground rather than a district on a map: plots inside a clan's holding in the hills, terraced slopes and small valley floors worked by single households. Land in this country is held in family-sized pieces, which is exactly why who is named in the register matters.",
    sequenceType: "allotment",
    viewport: {
      center: [35.6, 32.5],
      zoom: 8,
      bounds: [
        [34.7, 31.95],
        [36.45, 33.15],
      ],
    },
    citations: [
      {
        sourceId: "milgrom-numbers",
        locator: "on Numbers 27:1-11",
        supportedClaim:
          "The inheritance ruling behind Joshua 17:3-6 was issued as a general rule under Moses",
      },
      {
        sourceId: "hess-joshua",
        locator: "on Joshua 17:1-6",
        supportedClaim:
          "The count of ten portions against the clan names of verse 2 is reckoned in more than one way",
      },
      {
        sourceId: "stager-forging-identity",
        supportedClaim:
          "Highland landholding in this period was organised around households and clans working terraced plots",
      },
    ],
    evidenceLabels: ["biblical-account", "reconstruction"],
  },
  {
    id: "ch17-border-to-the-great-sea",
    chapter: 17,
    order: 2,
    title: "The western border, and six towns inside other tribes",
    scriptureRefs: ["Joshua 17:7-11"],
    narrative:
      "West of the river the border is traced in five verses, and half of it cannot be followed. It runs from Asher to Michmethath, which the text places before [[entity:shechem]], then south to the people of En Tappuah, down to the brook Kanah and out to the [[entity:great-sea]]. Verse 8 adds a complication in passing: the land of Tappuah is Manasseh's, but the town of Tappuah itself belongs to [[entity:tribe-ephraim]], and verse 9 says the same of other towns in the area. The two halves of Joseph are interleaved along this line rather than divided by it.\n\nNorth and east, [[entity:tribe-manasseh-west]] touches [[entity:tribe-asher]] and [[entity:tribe-issachar]]. Inside those two allotments it is nevertheless granted six towns with their villages: [[entity:beth-shan]], [[entity:ibleam]], [[entity:dor]], En-dor, [[entity:taanach]] and [[entity:megiddo]].\n\nThose six are not an afterthought at the end of a list. They are the towns that hold the roads.",
    entityIds: [
      "tribe-manasseh-west",
      "tribe-ephraim",
      "tribe-asher",
      "tribe-issachar",
      "shechem",
      "great-sea",
      "beth-shan",
      "ibleam",
      "dor",
      "taanach",
      "megiddo",
      "mount-carmel",
      "region-jezreel-valley",
      "region-coastal-plain",
      "region-hill-country-ephraim",
    ],
    mapFeatureIds: [
      "allot-manasseh-west",
      "site-shechem",
      "site-great-sea",
      "site-beth-shan",
      "site-ibleam",
      "site-dor",
      "site-taanach",
      "site-megiddo",
    ],
    mapCaption:
      "Manasseh's border runs from near Shechem west to the sea, while six towns lying inside Issachar and Asher are counted as Manasseh's.",
    whatChanged:
      "The western allotment now has an outline, from the Shechem area to the coast. Six markers appear in relation to it: Beth-shan, Ibleam, Dor, En-dor, Taanach and Megiddo belong to Manasseh while lying in other tribes' ground. En-dor is not drawn, because its site is not identified.",
    geographyExplanation:
      "A boundary drawn along a wadi is a boundary anyone can walk, which is why the brook Kanah appears here even though its course cannot be fixed; more than one wadi running west from the central hills to the [[entity:great-sea]] has been proposed, and this study treats the line as approximate. From the basin at [[entity:shechem]], around 550 m above sea level, the ground falls steadily westward through low ridges to the [[entity:region-coastal-plain]], which is why the described area reaches the sea while the settled ground did not. The six towns granted inside [[entity:tribe-asher]] and [[entity:tribe-issachar]] sit somewhere else entirely, on the rim of the [[entity:region-jezreel-valley]] and at its outlets, roughly forty to fifty kilometres north of the Shechem end of the boundary just traced. Manasseh is being given two things at once: a block of hill country, and a detached set of towns on the country's main crossroads.",
    sequenceType: "allotment",
    viewport: {
      center: [35.1, 32.35],
      zoom: 9,
      bounds: [
        [34.7, 32.0],
        [35.7, 32.7],
      ],
    },
    citations: [
      {
        sourceId: "aharoni-land-of-bible",
        supportedClaim:
          "Manasseh's boundary is reconstructed from a small number of identifiable points, and the brook Kanah has competing identifications",
      },
      {
        sourceId: "rainey-notley-sacred-bridge",
        supportedClaim:
          "The positions of Beth-shan, Ibleam, Dor, Taanach and Megiddo on the Jezreel valley's rim and outlets",
      },
      {
        sourceId: "curtis-oxford-bible-atlas",
        supportedClaim:
          "Mainstream atlases draw the Manasseh and Ephraim boundary with explicit caution",
      },
    ],
    evidenceLabels: ["biblical-account", "reconstruction"],
  },
  {
    id: "ch17-valley-towns-not-taken",
    chapter: 17,
    order: 3,
    title: "The towns Manasseh could not take",
    scriptureRefs: ["Joshua 17:12-13"],
    narrative:
      "Two verses undo the list just given. [[entity:tribe-manasseh-west]] could not drive out the inhabitants of those towns; the [[entity:canaanites]] persisted in living in that land. Later, when Israel had grown strong, it put them to forced labour and did not utterly drive them out.\n\nThe text neither explains the failure nor excuses it, and it does not say Manasseh was beaten in the field. What it says is that the people stayed, and that the arrangement Israel eventually reached was a labour arrangement rather than a removal.\n\nNotice which towns these are. [[entity:beth-shan]], [[entity:ibleam]], [[entity:dor]], [[entity:taanach]] and [[entity:megiddo]] are not marginal places on a frontier. They are the towns that sit where the roads meet, and several of their kings appear in the register of defeated rulers in Joshua 12. Beating a king in the field and holding his town were different achievements, and this is the clearest place in the book where the book itself says so.",
    entityIds: [
      "tribe-manasseh-west",
      "tribe-asher",
      "tribe-issachar",
      "canaanites",
      "canaanite-city-states",
      "egypt-new-kingdom",
      "beth-shan",
      "ibleam",
      "dor",
      "taanach",
      "megiddo",
      "mount-carmel",
      "region-jezreel-valley",
      "region-jordan-valley",
      "region-coastal-plain",
    ],
    mapFeatureIds: [
      "site-beth-shan",
      "site-ibleam",
      "site-dor",
      "site-taanach",
      "site-megiddo",
      "region-jezreel-valley",
      "allot-manasseh-west",
    ],
    mapCaption:
      "The five located towns Manasseh could not take, ringing the Jezreel valley from the coast at Dor to the Jordan outlet at Beth-shan.",
    whatChanged:
      "The allotment does not shrink and no ground is lost. What appears is a contradiction inside it: the towns ringing the Jezreel valley are marked as Canaanite-held while remaining inside Manasseh's assigned area.",
    geographyExplanation:
      "Put the five located towns on the map and they draw a line rather than a scatter. [[entity:megiddo]] stands at the western entrance, where the pass down from the coastal hills opens into the valley. [[entity:taanach]] and [[entity:ibleam]] sit on the southern rim where the tracks from the hill country come out. [[entity:beth-shan]] guards the eastern outlet, where the valley drops into the [[entity:region-jordan-valley]] to about 110 m below sea level. [[entity:dor]] holds an anchorage on the coast beyond [[entity:mount-carmel]]. The [[entity:region-jezreel-valley]] floor between them is low, flat and well watered, the best farmland in the country and the only broad east-west passage across it. That combination is why the towns were strong, why Egypt kept a hand on them, and why an infantry force coming out of the hills could not simply walk in. The ground Manasseh failed to take is not a strip at the edge of its portion. It is most of the portion's economic and strategic value.",
    sequenceType: "summary",
    viewport: { center: [35.25, 32.58], zoom: 9 },
    citations: [
      {
        sourceId: "rainey-notley-sacred-bridge",
        supportedClaim:
          "The ring of fortified towns around the Jezreel valley controls the passes and the valley's eastern and western outlets",
      },
      {
        sourceId: "mazar-archaeology-land",
        supportedClaim:
          "Egyptian administrative and military presence at Beth-shan in the Late Bronze Age",
      },
      {
        sourceId: "kitchen-reliability",
        supportedClaim:
          "The book's claims of victory have to be read against its own admissions that named towns were not held",
      },
    ],
    evidenceLabels: ["biblical-account", "externally-attested"],
  },
  {
    id: "ch17-iron-chariots-and-the-forest",
    chapter: 17,
    order: 4,
    title: "One lot is not enough, and the valley has iron chariots",
    scriptureRefs: ["Joshua 17:14-18"],
    narrative:
      "The house of [[entity:joseph]] comes to [[entity:joshua]] with a grievance: why one lot and one portion, when we are a numerous people whom the LORD has blessed? His answer is not more land but harder land. If you are numerous, go up to the forest and clear it for yourselves in the country of the [[entity:perizzites]] and the [[entity:rephaim]], since the hill country of [[entity:tribe-ephraim]] is too narrow for you.\n\nThey push back with the one fact that settles nothing and explains everything. The hill country is not enough for us, and all the [[entity:canaanites]] who live in the valley have chariots of iron, both those in [[entity:beth-shan]] and its towns and those in the [[entity:region-jezreel-valley]].\n\nJoshua does not deny it. He grants that they are a numerous people with great power, tells them that the hill country and its forest will be theirs to the farthest extent, and then says the thing the chapter has already contradicted: you shall drive out the Canaanites, though they have chariots of iron, and though they are strong.",
    entityIds: [
      "joshua",
      "joseph",
      "tribe-ephraim",
      "tribe-manasseh-west",
      "canaanites",
      "perizzites",
      "rephaim",
      "beth-shan",
      "megiddo",
      "region-jezreel-valley",
      "region-hill-country-ephraim",
    ],
    mapFeatureIds: [
      "region-hill-country-ephraim",
      "region-jezreel-valley",
      "site-beth-shan",
      "site-megiddo",
      "allot-manasseh-west",
    ],
    mapCaption:
      "Joseph asks for more land, Joshua points to the forested hill country, and Joseph points to the chariot country in the valley.",
    whatChanged:
      "Nothing is assigned and nothing is taken. The map shows the two kinds of ground the argument is about: forested highland that can be cleared, and open valley floor that cannot be entered.",
    geographyExplanation:
      "The argument is about two soils. The central hill country was more wooded in antiquity than the bare slopes a visitor sees today, and clearing it meant felling trees, cutting terraces into limestone and digging cisterns, because the rain falls only in winter and there is very little surface water up there. That is slow, heavy work which rewards a large population, and it is exactly what Joshua points out. The [[entity:region-jezreel-valley]] needs no clearing at all: the floor is deep alluvium, flat, fed by springs and drained westward by the Kishon, and a chariot can be driven across it. Height is the whole difference. The hills of [[entity:region-hill-country-ephraim]] stand between roughly 500 and 900 m, the valley floor lies close to sea level and falls below it toward [[entity:beth-shan]], and terrain that stops a chariot is terrain the weaker force wants. As for the iron, the phrase belongs to the text and this study leaves it there rather than turning it into a date.",
    sequenceType: "summary",
    viewport: { center: [35.25, 32.5], zoom: 9 },
    citations: [
      {
        sourceId: "stager-forging-identity",
        supportedClaim:
          "Settling the central highlands required woodland clearance, terracing and cisterns, and the agricultural cost of that work",
      },
      {
        sourceId: "beitzel-moody-atlas",
        supportedClaim:
          "The rainfall, drainage and elevation contrast between the central hill country and the Jezreel valley floor",
      },
      {
        sourceId: "mazar-archaeology-land",
        supportedClaim:
          "The chronology of iron working in the region is later than the events most reconstructions place here",
      },
      {
        sourceId: "hess-joshua",
        locator: "on Joshua 17:14-18",
        supportedClaim:
          "The sense of 'chariots of iron' is uncertain, and the exchange turns on the contrast between highland and valley terrain",
      },
    ],
    evidenceLabels: ["biblical-account", "externally-attested", "disputed"],
  },
];
