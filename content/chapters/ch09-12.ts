/**
 * Joshua 9-12: a treaty obtained by deception, the southern campaign, the
 * northern coalition, and the closing register of kings.
 *
 * Two editorial commitments shape this file.
 *
 * First, nothing here is drawn as held territory. The five-king and northern
 * coalitions are sets of cities joined by lines, because that is all they were.
 * Chapter 12 is a list of defeated rulers, not a map of an empire, and five of
 * its thirty-one kings belong to cities the same book later says Israel did not
 * possess.
 *
 * Second, the places the study cannot locate stay off the map. Makkedah, Libnah,
 * Madon, Hormah, Mount Halak and Misrephoth-maim carry no coordinate in the site
 * register and none is invented here. Their absence is stated in the captions
 * rather than hidden by a plausible pin.
 */

import type { Chapter, Milestone } from "../types";

export const CHAPTERS: Chapter[] = [
  /* ================================================================ */
  /* Chapter 9                                                        */
  /* ================================================================ */
  {
    id: "ch9",
    number: 9,
    title: "The treaty at Gibeon",
    summary:
      "Four towns on the Benjamin plateau send envoys in worn-out clothes claiming to come from a far country. Israel swears an oath without asking God, learns the truth in three days, and keeps the oath anyway.",
    phase: "campaigns-and-consequences",
    scriptureRange: "Joshua 9:1-27",
    milestoneIds: [
      "ch9-the-worn-sandals",
      "ch9-the-oath-sworn",
      "ch9-the-fraud-discovered",
      "ch9-woodcutters-and-water-carriers",
    ],
    sections: [
      {
        id: "ch9-at-a-glance",
        kind: "at-a-glance",
        title: "At a glance",
        body:
          "The men of Gibeon cannot win a battle, so they win a treaty instead. With cracked wineskins and mouldy bread as evidence of a long road, they extract a sworn covenant from Israel's leaders. Within three days Israel learns that these people live about thirty kilometres away. The oath stands. The Gibeonites become woodcutters and water carriers at the altar.",
        scriptureRefs: ["Joshua 9:1-27"],
        citations: [],
        evidenceLabels: ["biblical-account"],
      },
      {
        id: "ch9-walk-through",
        kind: "walk-through",
        title: "Walk through the chapter",
        body:
          "The kings of the land are forming a single front. One group breaks ranks. [[entity:gibeon]] has heard what happened at [[entity:jericho]] and [[entity:ai]], and judges that a sworn agreement will hold where walls will not.\n\n" +
          "Its men load donkeys with worn sacks, split wineskins, patched sandals and mouldy bread, and present themselves at [[entity:gilgal]] as envoys from far away. The speech is carefully built: they name what God did in Egypt and to [[entity:sihon]] and [[entity:og]], which is old news, and say nothing of Jericho or Ai, which would betray how recently they heard it. Israel inspects the provisions but does not ask counsel from Yahweh's mouth. [[entity:joshua]] makes peace, and the leaders swear.\n\n" +
          "Three days later the truth arrives. Israel marches to the four towns and does not touch them, because of the oath. The congregation complains; the leaders do not budge. Joshua asks why they lied, and they answer without excuses: we heard what your God had commanded, and we were afraid for our lives. They are set to cutting wood and carrying water for the congregation and for the altar.",
        scriptureRefs: ["Joshua 9:1-27"],
        citations: [
          {
            sourceId: "hess-joshua",
            locator: "on Joshua 9:9-13",
            supportedClaim:
              "The envoys' speech cites the older Egypt and Transjordan events and pointedly omits Jericho and Ai",
          },
        ],
        evidenceLabels: ["biblical-account"],
      },
      {
        id: "ch9-what-brought-us-here",
        kind: "what-brought-us-here",
        title: "What brought us here",
        body:
          "Jericho has fallen, and Ai has been taken on a second attempt after [[entity:achan]]'s theft cost Israel a defeat. Between that recovery and this chapter Israel stood at [[entity:shechem]] to hear the whole law read aloud. So these envoys approach a people who have just publicly rebound themselves to Moses' instructions, among which is a flat prohibition on covenants with the peoples of the land.\n\n" +
          "Those same instructions contain the loophole the envoys aim at. Deuteronomy 20 divides cities in two: one very far off may be offered terms, while the cities of these nearby nations may not. Distance is the whole test, and distance is the one thing the Gibeonites can fake.",
        scriptureRefs: [
          "Joshua 8:30-35",
          "Deuteronomy 7:1-2",
          "Deuteronomy 20:10-18",
          "Exodus 23:32",
        ],
        citations: [
          {
            sourceId: "block-deuteronomy",
            locator: "on Deuteronomy 7",
            supportedClaim:
              "Deuteronomy forbids treaty-making with the peoples of the land as part of its instruction about the nations",
          },
          {
            sourceId: "block-deuteronomy",
            locator: "on Deuteronomy 20:10-18",
            supportedClaim:
              "Deuteronomy's rules of war distinguish distant cities, which may be offered terms, from the nearby nations, making distance the operative criterion",
          },
        ],
        evidenceLabels: ["biblical-account"],
      },
      {
        id: "ch9-surrounding-world",
        kind: "surrounding-world",
        title: "The surrounding world",
        body:
          "A treaty here was an oath sworn before gods expected to act against whoever broke it. That is why Israel's leaders treat the agreement as unbreakable once sworn: the name invoked was Yahweh's, so the cost of breaking it would fall on Israel. The Gibeonites' repeated \"we are your servants\" is standard vassal language.\n\n" +
          "Gibeon is firmly identified: el-Jib yielded jar handles inscribed with the town's name, and Late Bronze remains thinner than a description of a great city would suggest. The label Hivite has nothing behind it, and 2 Samuel 21 calls the same group Amorites.",
        scriptureRefs: ["Joshua 9:8", "Joshua 9:11", "2 Samuel 21:1-2"],
        citations: [
          {
            sourceId: "hillers-covenant",
            supportedClaim:
              "Treaties in the ancient Near East were oaths sworn before deities, which is why a sworn agreement bound Israel even when it had been obtained dishonestly",
          },
          {
            sourceId: "mendenhall-law-covenant",
            supportedClaim:
              "The vassal's self-designation as servant belongs to the standard form of suzerain-vassal treaty language",
          },
          {
            sourceId: "pritchard-gibeon",
            supportedClaim:
              "Inscribed jar handles at el-Jib secure the identification of Gibeon, and the Late Bronze evidence at the site proved thinner than expected",
          },
        ],
        evidenceLabels: ["externally-attested", "biblical-account"],
        collapsedByDefault: true,
      },
      {
        id: "ch9-why-it-matters",
        kind: "why-it-matters",
        title: "Why it matters",
        body:
          "Israel's leaders discover they have been conned and conclude that this changes nothing, because God's name is attached to the promise. The question is not what Gibeon deserves but whose reputation is in the oath.\n\n" +
          "Reformed treatments press the point. Calvin locates the sin in swearing rashly, not in refusing to break the oath afterwards, and the Westminster Confession holds that a lawful oath binds even to one's own loss while no oath binds anyone to sin. That is one Christian reading, not the only one. Others put the weight elsewhere, taking the chapter's real subject to be a Canaanite town that survives because of what it had heard about Yahweh, with the oath as the mechanism rather than the point.",
        scriptureRefs: ["Joshua 9:14", "Joshua 9:18-20"],
        citations: [
          {
            sourceId: "calvin-joshua",
            locator: "on Joshua 9",
            supportedClaim:
              "Calvin locates Israel's fault in the rashness of the oath rather than in the refusal to break it",
          },
          {
            sourceId: "hawk-joshua",
            supportedClaim:
              "A reading that treats the Gibeonites' survival, like Rahab's, as the chapter's central concern rather than the ethics of the oath",
          },
          {
            sourceId: "westminster-confession",
            locator: "chapter 22, of lawful oaths and vows",
            supportedClaim:
              "A confessional Reformed position that a lawful oath binds even to the swearer's hurt, and that no oath binds to sin",
          },
        ],
        evidenceLabels: ["theological-interpretation", "biblical-account"],
      },
      {
        id: "ch9-details-worth-noticing",
        kind: "details-worth-noticing",
        title: "Details worth noticing",
        body:
          "The phrase given to the Gibeonites is not invented for them. Deuteronomy 29 lists the foreigners in Israel's camps, \"from the one who cuts your wood to the one who draws your water\", among those standing inside the covenant, so the sentence that looks like a punishment is also the vocabulary of belonging.\n\n" +
          "[[entity:gibeon]] later appears in Joshua 21 among the towns given to the priests, and in 2 Samuel a famine is traced to Saul's killing of Gibeonites.",
        scriptureRefs: [
          "Deuteronomy 29:10-12",
          "Joshua 21:17",
          "2 Samuel 21:1-6",
        ],
        citations: [
          {
            sourceId: "blenkinsopp-gibeon",
            supportedClaim:
              "The Gibeonites retain a distinct standing within Israel long after the treaty, and the oath is still treated as binding in the David narratives",
          },
        ],
        evidenceLabels: ["biblical-account"],
        collapsedByDefault: true,
      },
      {
        id: "ch9-difficult-questions",
        kind: "difficult-questions",
        title: "Difficult questions",
        body:
          "Israel does the thing it was explicitly told not to do, and God does not overturn it. Some readers locate the fault in the treaty itself, a breach of Deuteronomy 7:2. Others note that the narrator names only one failure, the failure to enquire, and that the oath is afterwards treated as valid by everyone in the book.\n\n" +
          "Chapter 9 also belongs with Rahab: Canaanites who have heard what God did act on it and end up inside Israel, while Israelites who should know better stumble. The book does not resolve the tension, and neither does this study.",
        scriptureRefs: ["Joshua 9:14-15", "Joshua 11:19", "Deuteronomy 7:2"],
        citations: [
          {
            sourceId: "hawk-joshua",
            supportedClaim:
              "Rahab and the Gibeonites function together as outsiders brought inside while insiders fail",
          },
          {
            sourceId: "mitchell-together-in-land",
            supportedClaim:
              "Joshua holds commands to destroy alongside narratives of coexistence and declines to resolve the tension",
          },
        ],
        evidenceLabels: ["biblical-account", "theological-interpretation"],
        collapsedByDefault: true,
      },
    ],
    discussionQuestions: [
      "The Gibeonites mention Egypt, Sihon and Og but never Jericho or Ai. What does that omission tell you about how carefully the ruse was built?",
      "Gibeon sits about thirty kilometres from Gilgal, one day's walk over the plateau. Why did nobody in Israel test the claim before swearing?",
      "Joshua 9:14 names the failure as not asking counsel of God, not as making peace. Does that change how you read what follows?",
      "Israel's leaders keep an oath they were tricked into. When is honouring a commitment obtained dishonestly the right thing to do, and when is it not?",
    ],
    relatedEntityIds: [
      "joshua",
      "moses",
      "sihon",
      "og",
      "achan",
      "gibeon",
      "chephirah",
      "beeroth",
      "kiriath-jearim",
      "gilgal",
      "jericho",
      "ai",
      "shechem",
      "gibeonite-league",
      "hivites",
      "canaanite-city-states",
    ],
    themeIds: [
      "covenant-faithfulness",
      "outsiders-and-belonging",
      "obedience-and-failure",
    ],
    wordCount: 477,
  },

  /* ================================================================ */
  /* Chapter 10                                                       */
  /* ================================================================ */
  {
    id: "ch10",
    number: 10,
    title: "The southern campaign and the long day",
    summary:
      "Five kings besiege Gibeon for defecting. Joshua climbs a thousand metres overnight from the Jordan valley, breaks them on the Beth-horon descent, and a poem about sun and moon is quoted into the middle of the account.",
    phase: "campaigns-and-consequences",
    scriptureRange: "Joshua 10:1-43",
    milestoneIds: [
      "ch10-five-kings-besiege-gibeon",
      "ch10-night-march-from-gilgal",
      "ch10-beth-horon-rout",
      "ch10-kings-at-makkedah",
      "ch10-southern-towns",
    ],
    sections: [
      {
        id: "ch10-at-a-glance",
        kind: "at-a-glance",
        title: "At a glance",
        body:
          "Gibeon's defection unites the southern rulers. Five kings besiege the town; Gibeon calls in the treaty; Joshua marches all night out of the Jordan valley and arrives at dawn. The coalition breaks westward down the Beth-horon pass under hail. A poem about sun and moon is quoted here, the five kings are executed, and a run of southern towns is reported taken.",
        scriptureRefs: ["Joshua 10:1-43"],
        citations: [],
        evidenceLabels: ["biblical-account"],
      },
      {
        id: "ch10-walk-through",
        kind: "walk-through",
        title: "Walk through the chapter",
        body:
          "[[entity:adoni-zedek]] of [[entity:jerusalem]] does the arithmetic. Gibeon is a substantial town whose men are fighters, and it has gone over to Israel. He calls in [[entity:hoham]] of [[entity:hebron]], [[entity:piram]] of [[entity:jarmuth]], [[entity:japhia]] of [[entity:lachish]] and [[entity:debir-king]] of [[entity:eglon]], and the five encamp against Gibeon.\n\n" +
          "Gibeon sends to [[entity:gilgal]]: do not abandon your servants. The treaty Israel was tricked into now obliges it to fight. [[entity:joshua]] marches all night and comes on them suddenly. They break and run west along the only good road off the plateau, and the pursuit follows them down the [[entity:upper-beth-horon]] descent, hailstones killing more than the sword does, as far as [[entity:azekah]].\n\n" +
          "Into this the narrator sets two lines of poetry addressed to sun and moon, quoted from the book of Jashar, and comments that no day was ever like it, because God listened to a man.\n\n" +
          "The five kings are found hiding in a cave and killed. The chapter then closes with a compressed list of towns struck, and with [[entity:horam]] of [[entity:gezer]] destroyed in the field when he comes to help [[entity:lachish]]. The final verse sends the whole army back down to the camp at Gilgal, which is the plainest signal in the chapter that nothing has been garrisoned.",
        scriptureRefs: ["Joshua 10:1-43"],
        citations: [
          {
            sourceId: "hess-joshua",
            locator: "on Joshua 10:1-5",
            supportedClaim:
              "The coalition forms in direct response to Gibeon's treaty with Israel and is a temporary military arrangement",
          },
        ],
        evidenceLabels: ["biblical-account"],
      },
      {
        id: "ch10-what-brought-us-here",
        kind: "what-brought-us-here",
        title: "What brought us here",
        body:
          "This chapter is the bill for chapter 9. The treaty that looked like an embarrassment drags Israel into a war it did not choose, against five cities at once. Gibeon's defection matters to the southern rulers for the same reason it mattered to Israel: the town commands the plateau road, and losing it opens the ridge from the north.\n\n" +
          "Israel also has to answer from where it still is. The camp is down at [[entity:gilgal]] in the Jordan valley, a day's walk and a thousand metres below the town it is now sworn to protect, and the coalition is already encamped against it.",
        scriptureRefs: ["Joshua 9:15-21", "Joshua 10:1-6"],
        citations: [
          {
            sourceId: "rainey-notley-sacred-bridge",
            supportedClaim:
              "Gibeon's position on the Benjamin plateau controls the approach along the central ridge",
          },
        ],
        evidenceLabels: ["biblical-account", "reconstruction"],
      },
      {
        id: "ch10-surrounding-world",
        kind: "surrounding-world",
        title: "The surrounding world",
        body:
          "Verses 28 to 39 run through town after town in an almost identical formula, and verse 40 then claims four whole regions in one sentence. Assyrian, Egyptian and Hittite conquest reports use the same repertoire of total claims and stock phrases, and a ninth-century Moabite king describes his own campaigns in language very like Joshua's, including the vocabulary of devoting a place to destruction. The idiom belonged to the region, not to Israel alone.\n\n" +
          "So verse 40 is a summary heading, not a census: this chapter itself reports the king of Gezer dying in the field while his city goes untouched.",
        scriptureRefs: ["Joshua 10:28-40", "Joshua 10:33", "Joshua 13:1"],
        citations: [
          {
            sourceId: "younger-conquest-accounts",
            supportedClaim:
              "Assyrian, Egyptian, Hittite and Hebrew conquest reports share a rhetorical repertoire that includes hyperbolic totality and stock formulas",
          },
          {
            sourceId: "mesha-stele",
            supportedClaim:
              "A non-Israelite king describes his campaigns in the same idiom of total devastation, including the term usually rendered devote to destruction",
          },
          {
            sourceId: "kitchen-reliability",
            supportedClaim:
              "The campaigns are better read as disabling strikes than as occupation, and the book's summaries must be read against its own admissions",
          },
        ],
        evidenceLabels: ["externally-attested", "biblical-account"],
        collapsedByDefault: true,
      },
      {
        id: "ch10-why-it-matters",
        kind: "why-it-matters",
        title: "Why it matters",
        body:
          "The one thing the chapter states outright about the day is not astronomical. It is that Yahweh listened to the voice of a man, and fought for Israel. The panic, the hail and the sky are all attributed to God, not to Israel's tactics.\n\n" +
          "Harder to hold alongside that: the rescue Israel mounts is a rescue of Canaanites, undertaken because a promise was made to them, and the campaign that follows is reported with the flat brutality the ancient genre supplies. Neither half cancels the other, and neither licenses anybody's violence now.",
        scriptureRefs: ["Joshua 10:8", "Joshua 10:14", "Joshua 10:42"],
        citations: [
          {
            sourceId: "davis-joshua",
            locator: "on Joshua 10",
            supportedClaim:
              "An expositional Reformed reading that the chapter's emphasis falls on God fighting for Israel rather than on Israel's competence",
          },
          {
            sourceId: "mcconville-williams-joshua",
            supportedClaim:
              "Distinguishing what the text claims about God's action from any modern warrant for violence",
          },
        ],
        evidenceLabels: ["theological-interpretation", "biblical-account"],
      },
      {
        id: "ch10-details-worth-noticing",
        kind: "details-worth-noticing",
        title: "Details worth noticing",
        body:
          "The two places named in the poem are the top and the bottom of the same road. Gibeon sits on the plateau; the valley of [[entity:aijalon]] opens at the foot of the Beth-horon descent.\n\n" +
          "[[entity:makkedah]] is named seven times in the chapter and cannot be located. Neither can [[entity:libnah]]. Both are absent from the map on purpose.",
        scriptureRefs: ["Joshua 10:12-13", "Joshua 10:16-28"],
        citations: [
          {
            sourceId: "rainey-notley-sacred-bridge",
            supportedClaim:
              "Gibeon and the Aijalon valley stand at opposite ends of the Beth-horon route, and Makkedah remains unlocated",
          },
        ],
        evidenceLabels: ["biblical-account", "externally-attested"],
        collapsedByDefault: true,
      },
      {
        id: "ch10-difficult-questions",
        kind: "difficult-questions",
        title: "Difficult questions",
        body:
          "Joshua 10:12-14 is heavily argued, and this study does not pick a winner. Five live readings. A poetic fragment quoted from an older collection, which the text itself flags by naming the book of Jashar. A request for shade or darkness rather than extra daylight, since the Hebrew verbs can carry the sense of ceasing to shine. Sun-and-moon language drawn from celestial omen texts, making this a plea for a sign of victory rather than a change in the solar system. An annular solar eclipse, resting on a particular rendering of two verbs and on one chronology. And a lengthened day, with verse 14 meant as plainly as it reads.\n\n" +
          "Each carries a cost: the omen and darkness readings work harder on verse 13b, the eclipse commits to a date, and the plain miracle leaves the mechanics unexplained.",
        scriptureRefs: ["Joshua 10:12-14"],
        citations: [
          {
            sourceId: "walton-celestial-omens",
            supportedClaim:
              "The sun and moon language of Joshua 10 draws on the vocabulary of Mesopotamian celestial omen texts, so the request concerns a sign of victory",
          },
          {
            sourceId: "humphreys-waddington-eclipse",
            supportedClaim:
              "An annular solar eclipse is proposed as the event behind the passage, depending on a particular translation of two Hebrew verbs and on a late chronology",
          },
          {
            sourceId: "butler-joshua",
            locator: "on Joshua 10:12-15",
            supportedClaim:
              "The passage contains a quoted poetic fragment marked by the reference to the book of Jashar",
          },
          {
            sourceId: "howard-joshua",
            locator: "on Joshua 10:12-14",
            supportedClaim:
              "Survey of the major readings of the long day, including the straightforward miracle reading",
          },
        ],
        evidenceLabels: ["disputed", "biblical-account"],
        collapsedByDefault: true,
      },
    ],
    discussionQuestions: [
      "Israel fights this battle because of an oath it was tricked into. What does it cost Israel, and what does keeping it say about the oath?",
      "The night march climbs roughly a thousand metres from the Jordan valley to the plateau. What does arriving at dawn, unannounced, buy Joshua?",
      "The poem names Gibeon and the valley of Aijalon, the two ends of the Beth-horon road. How does knowing that terrain change how you hear the lines?",
      "Verse 40 says Joshua left no one remaining in the whole south; verse 33 says the king of Gezer was killed while his city stood. How do you hold both?",
      "Makkedah is named repeatedly and cannot be found. Does an unlocatable place in a detailed account trouble you, or is that what you would expect?",
    ],
    relatedEntityIds: [
      "joshua",
      "adoni-zedek",
      "hoham",
      "piram",
      "japhia",
      "debir-king",
      "horam",
      "gibeon",
      "gilgal",
      "jerusalem",
      "hebron",
      "jarmuth",
      "lachish",
      "eglon",
      "upper-beth-horon",
      "lower-beth-horon",
      "aijalon",
      "azekah",
      "makkedah",
      "libnah",
      "debir",
      "gezer",
      "southern-coalition",
      "region-shephelah",
      "region-negev",
      "region-goshen-judah",
      "region-hill-country-judah",
      "amorites",
    ],
    themeIds: [
      "covenant-faithfulness",
      "promise-and-fulfillment",
      "judgment-and-mercy",
    ],
    wordCount: 466,
  },

  /* ================================================================ */
  /* Chapter 11                                                       */
  /* ================================================================ */
  {
    id: "ch11",
    number: 11,
    title: "The northern coalition, and a summary of the whole",
    summary:
      "Jabin of Hazor gathers the north with horses and chariots. The coalition is broken at the waters of Merom, Hazor alone is burned, and the chapter closes with a summary that reaches from Mount Halak to Baal-gad.",
    phase: "campaigns-and-consequences",
    scriptureRange: "Joshua 11:1-23",
    milestoneIds: [
      "ch11-jabin-gathers-the-north",
      "ch11-coalition-broken-at-merom",
      "ch11-hazor-burned",
      "ch11-halak-to-baal-gad",
    ],
    sections: [
      {
        id: "ch11-at-a-glance",
        kind: "at-a-glance",
        title: "At a glance",
        body:
          "News travels north. Jabin of Hazor, ruler of the largest city in the land, assembles a coalition with chariotry and musters at the waters of Merom. Israel attacks first, the horses are hamstrung and the chariots burned, and Hazor alone of the mound-cities is put to the torch. The chapter then compresses years of fighting into a summary and says the land had rest.",
        scriptureRefs: ["Joshua 11:1-23"],
        citations: [],
        evidenceLabels: ["biblical-account"],
      },
      {
        id: "ch11-walk-through",
        kind: "walk-through",
        title: "Walk through the chapter",
        body:
          "[[entity:jabin]] of [[entity:hazor]] gathers a far larger force than the southern five: [[entity:jobab]] of [[entity:madon]], the kings of [[entity:shimron]] and [[entity:achshaph]], rulers from the hill country, the Arabah south of [[entity:chinnereth]], the lowland and the heights of [[entity:dor]]. They bring very many horses and chariots and camp at the [[entity:waters-of-merom]].\n\n" +
          "[[entity:joshua]] is told not to fear them, and is given an instruction that sounds like waste: hamstring the horses, burn the chariots. He attacks suddenly, and the coalition breaks and is pursued north-west toward Sidon, west toward [[entity:misrephoth-maim]], and east into the valley of Mizpah.\n\n" +
          "Joshua then turns back for Hazor, kills its king, and burns the city, which had been the head of all those kingdoms. The text is careful: of the cities standing on their mounds, Israel burned none except this one.\n\n" +
          "Then the chapter zooms out. Joshua took the whole land, from [[entity:mount-halak]] to [[entity:baal-gad]] below [[entity:mount-hermon]]. He made war a long time. No city made peace except Gibeon. The [[entity:anakim]] were cut off from the hill country, though some remained in the Philistine cities. The land had rest from war.",
        scriptureRefs: ["Joshua 11:1-23"],
        citations: [
          {
            sourceId: "hess-joshua",
            locator: "on Joshua 11:1-5",
            supportedClaim:
              "Jabin assembles a coalition described as including chariotry, mustering at the waters of Merom",
          },
        ],
        evidenceLabels: ["biblical-account"],
      },
      {
        id: "ch11-what-brought-us-here",
        kind: "what-brought-us-here",
        title: "What brought us here",
        body:
          "Jabin reacts as [[entity:adoni-zedek]] did: an army has appeared in the hill country and the usual arrangements no longer hold. The difference is scale. Hazor was the dominant power of the north, and what it assembles is drawn from four separate zones of country. The north takes a different kind of fight, and the text concedes that it took a long time.\n\n" +
          "Geography accounts for some of that. The southern campaign turned on one ridge road and one descent; the north is open country cut by broad valleys, so a force built around chariots never has to funnel itself into a pass.",
        scriptureRefs: ["Joshua 10:1-5", "Joshua 11:1-5", "Joshua 11:18"],
        citations: [
          {
            sourceId: "aharoni-land-of-bible",
            supportedClaim:
              "The northern valleys are open country suited to chariot forces, unlike the single ridge route of the southern campaign",
          },
        ],
        evidenceLabels: ["biblical-account"],
      },
      {
        id: "ch11-surrounding-world",
        kind: "surrounding-world",
        title: "The surrounding world",
        body:
          "A chariot force is decisive on the Jezreel valley floor or in the Huleh basin and useless on a broken hillside, so the detail about horses and chariots is a statement about terrain. It is also why Israel's early holdings are highland and its failures are in the valleys.\n\n" +
          "Hazor's scale is not exaggeration. Upper mound and lower city together cover roughly eighty hectares, and the mound at Jericho would fit inside many times over. Hazor appears in Egyptian and Mesopotamian records as a power in its own right, which is what \"the head of all those kingdoms\" claims.",
        scriptureRefs: ["Joshua 11:4-9", "Joshua 11:10-13"],
        citations: [
          {
            sourceId: "yadin-hazor",
            supportedClaim:
              "Hazor's exceptional size, roughly two hundred acres including the lower city",
          },
          {
            sourceId: "mazar-archaeology-land",
            supportedClaim:
              "Typical Late Bronze towns in Canaan were small, so Hazor's area is exceptional rather than normal",
          },
          {
            sourceId: "aharoni-land-of-bible",
            supportedClaim:
              "The valley systems favour chariot warfare while the highlands do not, shaping where control was possible",
          },
        ],
        evidenceLabels: ["externally-attested", "biblical-account"],
        collapsedByDefault: true,
      },
      {
        id: "ch11-why-it-matters",
        kind: "why-it-matters",
        title: "Why it matters",
        body:
          "\"The land had rest from war\" is the first time the book says anything like it, and rest is one of Joshua's governing ideas: not leisure but the end of being at risk.\n\n" +
          "Read that sentence slowly, because two chapters later God tells Joshua that very much land remains to be possessed. Both statements stand in the same book, and the honest reading holds them together. Rest means the organised resistance is broken and the campaigns are over. It does not mean the map is filled in.",
        scriptureRefs: ["Joshua 11:23", "Joshua 13:1", "Joshua 21:44"],
        citations: [
          {
            sourceId: "howard-joshua",
            supportedClaim:
              "Rest functions as a theological category in Joshua, distinct from complete territorial control",
          },
          {
            sourceId: "woudstra-joshua",
            locator: "on Joshua 11:23",
            supportedClaim:
              "A Reformed reading of the rest formula as covenantal rather than as a claim of exhaustive occupation",
          },
        ],
        evidenceLabels: ["theological-interpretation", "biblical-account"],
      },
      {
        id: "ch11-details-worth-noticing",
        kind: "details-worth-noticing",
        title: "Details worth noticing",
        body:
          "Israel destroys the chariot force instead of using it, removing the one technology that could have changed its position in the valleys.\n\n" +
          "Verse 13 is worth not skimming: of the cities on their mounds, only Hazor was burned. The book distinguishes defeating a city from destroying it.\n\n" +
          "[[entity:madon]], [[entity:mount-halak]] and [[entity:misrephoth-maim]] are named here and none can be located. The muster site itself, the [[entity:waters-of-merom]], is disputed.",
        scriptureRefs: ["Joshua 11:6", "Joshua 11:9", "Joshua 11:13"],
        citations: [
          {
            sourceId: "rainey-notley-sacred-bridge",
            supportedClaim:
              "Mount Halak and Misrephoth-maim have no accepted identification, and several locations are proposed for the waters of Merom",
          },
        ],
        evidenceLabels: ["biblical-account", "disputed"],
        collapsedByDefault: true,
      },
      {
        id: "ch11-difficult-questions",
        kind: "difficult-questions",
        title: "Difficult questions",
        body:
          "Hazor is the best test case in the book for what archaeology can and cannot settle. The Late Bronze destruction was violent. Two excavators of the same site have published different conclusions about who did it: Ben-Tor argues for an external attacker and takes Israel as the best candidate, while Zuckerman read the same evidence as the city's own population turning on its rulers. Egyptians and rival Canaanite cities have also been proposed. A burnt layer does not carry a signature.\n\n" +
          "The chapter also holds its hardest sentence: God hardened their hearts so that they would come out to battle. Christian readers handle this very differently. This study will not treat the verse as a pattern for anyone's conduct now.",
        scriptureRefs: ["Joshua 11:10-13", "Joshua 11:20"],
        citations: [
          {
            sourceId: "ben-tor-hazor",
            supportedClaim:
              "Ben-Tor's renewed excavations document the burning of the Late Bronze palace and argue for an external destroyer",
          },
          {
            sourceId: "ben-tor-zuckerman-hazor",
            supportedClaim:
              "Two excavators of the same site reach different conclusions about who destroyed Hazor, showing that destruction layers do not identify their authors",
          },
          {
            sourceId: "trimm-destruction-canaanites",
            supportedClaim:
              "A survey of the main Christian approaches to the destruction commands, stated without advocating one",
          },
        ],
        evidenceLabels: ["disputed", "externally-attested", "biblical-account"],
        collapsedByDefault: true,
      },
    ],
    discussionQuestions: [
      "Hazor is many times the size of Jericho, yet the account of its fall is a few verses. Why might the book spend so little on its biggest target?",
      "Israel burns the chariots rather than keeping them. What does refusing that advantage say, given that Israel later cannot hold the chariot country of the valleys?",
      "Verse 23 says Joshua took the whole land and the land had rest. Joshua 13:1 says much land remains. What work is each sentence doing?",
      "Two archaeologists who dug Hazor disagree about who burned it. What should a careful reader do with a disagreement like that?",
      "The muster site at the waters of Merom cannot be located with confidence. How much does the battle's meaning depend on knowing where it happened?",
    ],
    relatedEntityIds: [
      "joshua",
      "jabin",
      "jobab",
      "moses",
      "adoni-zedek",
      "hazor",
      "waters-of-merom",
      "madon",
      "shimron",
      "achshaph",
      "chinnereth",
      "dor",
      "mount-hermon",
      "baal-gad",
      "mount-halak",
      "misrephoth-maim",
      "sidon",
      "gibeon",
      "hebron",
      "debir",
      "anab",
      "northern-coalition",
      "anakim",
      "region-galilee",
      "region-huleh-basin",
      "region-jezreel-valley",
      "canaanites",
    ],
    themeIds: ["rest", "promise-and-fulfillment", "obedience-and-failure"],
    wordCount: 444,
  },

  /* ================================================================ */
  /* Chapter 12                                                       */
  /* ================================================================ */
  {
    id: "ch12",
    number: 12,
    title: "The register of defeated kings",
    summary:
      "A closing ledger: two kings east of the Jordan under Moses, thirty-one west of it under Joshua. It is a list of rulers beaten, not a map of land held, and several of the cities named reappear later among those Israel did not possess.",
    phase: "campaigns-and-consequences",
    scriptureRange: "Joshua 12:1-24",
    milestoneIds: ["ch12-transjordan-kings", "ch12-thirty-one-kings"],
    sections: [
      {
        id: "ch12-at-a-glance",
        kind: "at-a-glance",
        title: "At a glance",
        body:
          "The campaign narrative stops and a ledger begins. First the two Transjordan kings defeated under Moses, Sihon and Og, with their territories described by region. Then thirty-one kings west of the Jordan, counted off one by one and totalled. No battles are retold. It is a record of rulers beaten, and it should not be read as a record of cities held.",
        scriptureRefs: ["Joshua 12:1-24"],
        citations: [],
        evidenceLabels: ["biblical-account"],
      },
      {
        id: "ch12-walk-through",
        kind: "walk-through",
        title: "Walk through the chapter",
        body:
          "The chapter falls in two halves. Verses 1 to 6 look east across the Jordan and credit [[entity:moses]]: [[entity:sihon]] of [[entity:heshbon]], whose reach runs from the [[entity:arnon-river]] up to the [[entity:jabbok-river]], and [[entity:og]] of Bashan at [[entity:ashtaroth]] and [[entity:edrei]]. Their land went to Reuben, Gad and half of Manasseh before this book opened.\n\n" +
          "Verses 7 to 24 turn west and credit [[entity:joshua]]. The frame is the pair of limits used in chapter 11, [[entity:baal-gad]] to [[entity:mount-halak]], then the physical zones. Then the list runs, each entry the same shape. The king of [[entity:jericho]], one. The king of [[entity:ai]], one. On through [[entity:jerusalem]], [[entity:hebron]], [[entity:lachish]], [[entity:eglon]], [[entity:gezer]], [[entity:debir]], down to [[entity:hormah]] and [[entity:arad]], north to [[entity:hazor]], [[entity:megiddo]], [[entity:taanach]], [[entity:dor]] and [[entity:tirzah]]. Thirty-one kings in total.\n\n" +
          "Verse 8 puts the zones and the peoples together, hill country and lowland and Arabah and slopes and wilderness and Negev, Hittite and Amorite and Canaanite and Perizzite and Hivite and Jebusite. That doubled formula is what the book reaches for when it wants to say all of it at once.\n\n" +
          "Nothing is narrated. No city is said to be occupied. The repeated word is \"king\", and the repeated number is one.",
        scriptureRefs: ["Joshua 12:1-24"],
        citations: [
          {
            sourceId: "butler-joshua",
            locator: "on Joshua 12",
            supportedClaim:
              "Form-critical analysis of the register as a list with a fixed formula rather than a narrative",
          },
        ],
        evidenceLabels: ["biblical-account"],
      },
      {
        id: "ch12-what-brought-us-here",
        kind: "what-brought-us-here",
        title: "What brought us here",
        body:
          "The eastern half reaches back before Joshua begins, to the defeats the Gibeonite envoys cited as old news in chapter 9. The western half gathers Jericho and Ai, the southern campaign that Gibeon's treaty triggered, and the northern coalition. The register is the hinge of the book: the fighting ends here, and chapter 13 opens with God telling Joshua that much land remains.\n\n" +
          "One entry has already shown how to read the rest. [[entity:horam]] of [[entity:gezer]] is struck down in chapter 10 while his city is never said to fall, and he is counted here all the same.",
        scriptureRefs: [
          "Numbers 21:21-35",
          "Joshua 9:10",
          "Joshua 10:33",
          "Joshua 12:12",
          "Joshua 13:1",
        ],
        citations: [],
        evidenceLabels: ["biblical-account"],
      },
      {
        id: "ch12-surrounding-world",
        kind: "surrounding-world",
        title: "The surrounding world",
        body:
          "A king-list is a recognised ancient genre. Egyptian pharaohs carved topographical lists of Canaanite towns on temple walls, Thutmose III's at Karnak among them, and several names overlap with Joshua's. Such lists were monuments to a campaign's reach, not surveys of administration. They compress years, omit reverses, and count places without claiming to govern them.\n\n" +
          "The Amarna letters show dozens of small rulers writing to Pharaoh, each controlling a town and its fields. Thirty-one kings is not thirty-one nations but the political texture of the country, which is why so many could be beaten in so few campaigns and why beating them settled so little.",
        scriptureRefs: ["Joshua 12:7-24"],
        citations: [
          {
            sourceId: "thutmose-iii-lists",
            supportedClaim:
              "Egyptian royal topographical lists name Canaanite towns, several of which also appear in Joshua, as records of campaign reach",
          },
          {
            sourceId: "younger-conquest-accounts",
            supportedClaim:
              "Ancient conquest accounts and their lists follow shared conventions that compress time and assert totality",
          },
          {
            sourceId: "moran-amarna",
            supportedClaim:
              "The Amarna correspondence shows Canaan as a landscape of small city-state rulers under Egyptian oversight",
          },
        ],
        evidenceLabels: ["externally-attested", "biblical-account"],
        collapsedByDefault: true,
      },
      {
        id: "ch12-why-it-matters",
        kind: "why-it-matters",
        title: "Why it matters",
        body:
          "Put the list beside what the same book says later. [[entity:jerusalem]] is here at verse 10; Joshua 15:63 says Judah could not drive out its inhabitants. [[entity:gezer]] is here at verse 12; Joshua 16:10 says the Canaanites there were not driven out. [[entity:megiddo]], [[entity:taanach]] and [[entity:dor]] are here at verses 21 to 23; Joshua 17:11-13 says Manasseh could not take them. Five of the thirty-one, defeated and unpossessed, in one book.\n\n" +
          "That is not a contradiction the editor missed. Defeating a king in the field, burning a city, being allotted land, and living on it are four different things, and Joshua keeps them apart. Chapter 12 records the first; chapter 13 says how much of the rest is still owed.",
        scriptureRefs: [
          "Joshua 12:10-23",
          "Joshua 15:63",
          "Joshua 16:10",
          "Joshua 17:11-13",
        ],
        citations: [
          {
            sourceId: "kitchen-reliability",
            supportedClaim:
              "The register should be read as a record of disabling strikes against rulers rather than as a claim of occupation, against the book's own admissions of unconquered territory",
          },
          {
            sourceId: "hess-joshua",
            locator: "on Joshua 12",
            supportedClaim:
              "Several cities in the register recur later in the book among places Israel did not take",
          },
        ],
        evidenceLabels: ["biblical-account", "theological-interpretation"],
      },
      {
        id: "ch12-details-worth-noticing",
        kind: "details-worth-noticing",
        title: "Details worth noticing",
        body:
          "Moses is credited with the east, Joshua with the west.\n\n" +
          "Ten of the thirty-one cannot be placed. [[entity:makkedah]], [[entity:libnah]], [[entity:hormah]] and [[entity:madon]] have no secure location, and neither do Geder, Tappuah, Hepher, Lassharon, Jokneam or Goiim in Gilgal. Of the twenty-one that can be shown, four are disputed.\n\n" +
          "[[entity:ai]] and [[entity:arad]] are both in the list: Ai's identification is the sharpest site problem in the book, and the mound at Arad has a long occupation gap here.",
        scriptureRefs: ["Joshua 12:6", "Joshua 12:7", "Joshua 12:14-24"],
        citations: [
          {
            sourceId: "rainey-notley-sacred-bridge",
            supportedClaim:
              "Several towns in the register of kings have no agreed identification, and others remain disputed",
          },
          {
            sourceId: "mazar-archaeology-land",
            supportedClaim:
              "The occupation sequence at Tel Arad leaves a long gap between the Early Bronze city and the Iron Age fortress",
          },
        ],
        evidenceLabels: ["biblical-account", "disputed"],
        collapsedByDefault: true,
      },
      {
        id: "ch12-difficult-questions",
        kind: "difficult-questions",
        title: "Difficult questions",
        body:
          "If thirty-one kings were struck down, why is the country not Israel's? The register claims victories, not real estate, and the book answers one chapter later by naming what remains.\n\n" +
          "To a historian the list is harder. Several named cities have no Late Bronze destruction to point to, and some were not occupied then at all. Scholars split accordingly: some read chapter 12 as an early administrative source, others as a later composition assembling names into a monument. Either way the genre is a list of rulers. A list of kings is not a claim to their cities, and treating it as one has produced more bad maps of Joshua than any other single mistake.",
        scriptureRefs: ["Joshua 12:24", "Joshua 13:1-6"],
        citations: [
          {
            sourceId: "provan-long-longman",
            supportedClaim:
              "How historians weigh biblical testimony alongside material evidence, and why absence of evidence differs from evidence against",
          },
          {
            sourceId: "boling-wright-joshua",
            locator: "on Joshua 12",
            supportedClaim:
              "A reconstruction reading the register as material assembled in the book's compositional history",
          },
          {
            sourceId: "hess-joshua",
            locator: "on Joshua 12",
            supportedClaim:
              "The argument that the lists in Joshua reflect genuine second-millennium administrative forms",
          },
        ],
        evidenceLabels: ["disputed", "biblical-account"],
        collapsedByDefault: true,
      },
    ],
    discussionQuestions: [
      "Jerusalem, Gezer, Megiddo, Taanach and Dor are all in this list and all later named as not possessed. What does the book gain by keeping both records?",
      "The register names no battles at all. What does a bare list communicate that a narrative would not?",
      "Ten of the thirty-one cities cannot be located, and four more are disputed. How should a study map show a list it can only half place?",
      "The eastern kings are credited to Moses and the western to Joshua. Why might the book be careful about that division here of all places?",
      "Chapter 12 ends with a total and chapter 13 begins with a deficit. Which of the two would you say the book wants you to remember?",
    ],
    relatedEntityIds: [
      "joshua",
      "moses",
      "sihon",
      "og",
      "jabin",
      "horam",
      "heshbon",
      "dibon",
      "ashtaroth",
      "edrei",
      "arnon-river",
      "jabbok-river",
      "mount-hermon",
      "baal-gad",
      "mount-halak",
      "jericho",
      "ai",
      "bethel",
      "jerusalem",
      "hebron",
      "jarmuth",
      "lachish",
      "eglon",
      "gezer",
      "debir",
      "libnah",
      "makkedah",
      "adullam",
      "hormah",
      "arad",
      "aphek",
      "madon",
      "hazor",
      "shimron",
      "achshaph",
      "taanach",
      "megiddo",
      "kedesh-naphtali",
      "dor",
      "tirzah",
      "mount-carmel",
      "canaanite-city-states",
      "tribe-reuben",
      "tribe-gad",
      "tribe-manasseh-east",
    ],
    themeIds: [
      "promise-and-fulfillment",
      "land-and-inheritance",
      "obedience-and-failure",
    ],
    wordCount: 480,
  },
];

export const MILESTONES: Milestone[] = [
  /* ---------------------------------------------------------------- */
  /* Chapter 9                                                        */
  /* ---------------------------------------------------------------- */
  {
    id: "ch9-the-worn-sandals",
    chapter: 9,
    order: 1,
    title: "Worn sandals and mouldy bread",
    scriptureRefs: ["Joshua 9:3-13"],
    narrative:
      "The people of Gibeon act on intelligence. They know what happened at Jericho and Ai, and they know that Israel is under orders to destroy the peoples of the land while being permitted to treat with cities far away. So they manufacture distance. Old sacks, split wineskins, patched sandals, and bread gone dry and mouldy are laid out as evidence of a long road, and the envoys walk down to the camp at Gilgal to ask for a covenant.\n\nThe fiction they build is a document of the gap they need. They speak of Egypt and of Sihon and Og, events old enough to have travelled far. They say nothing of Jericho or Ai, a week's news that would place them close. Everything in the performance is designed to answer the one question Deuteronomy makes decisive: how far away do you live?",
    entityIds: [
      "gibeon",
      "chephirah",
      "beeroth",
      "kiriath-jearim",
      "gilgal",
      "gibeonite-league",
      "hivites",
      "sihon",
      "og",
      "joshua",
    ],
    mapFeatureIds: [
      "site-gilgal",
      "site-gibeon",
      "site-chephirah",
      "site-beeroth",
      "site-kiriath-jearim",
      "site-jericho",
      "site-ai",
    ],
    mapCaption:
      "The four Gibeonite towns sit on the Benjamin plateau, roughly thirty kilometres west of the camp at Gilgal.",
    whatChanged:
      "Nothing moves yet. The map's job here is to show the lie: four towns one day's walk from Israel's camp, presented as a far country.",
    geographyExplanation:
      "Thirty kilometres is the whole argument. From the valley floor near Jericho, an ordinary walker reaches the Benjamin plateau in a day, and the plateau is visible from the hills above the camp. Gibeon, Chephirah, Beeroth and Kiriath-jearim cluster within about twelve kilometres of one another around the watershed road north of Jerusalem. Israel had already walked the ridge to Ai and Bethel, barely fifteen kilometres from Gibeon. The claim of a very long journey was not merely false, it was checkable in an afternoon, which is why the failure to enquire is the fault the narrator names.",
    sequenceType: "event",
    viewport: {
      center: [35.34, 31.86],
      zoom: 10,
      bounds: [
        [35.05, 31.75],
        [35.6, 31.95],
      ],
    },
    citations: [
      {
        sourceId: "hess-joshua",
        locator: "on Joshua 9:3-13",
        supportedClaim:
          "The envoys' props and speech are constructed to establish distance, the criterion that governs whether a treaty is permitted",
      },
      {
        sourceId: "rainey-notley-sacred-bridge",
        supportedClaim:
          "The four Gibeonite towns lie close together on the Benjamin plateau within a day's travel of the Jericho area",
      },
    ],
    evidenceLabels: ["biblical-account", "externally-attested"],
  },
  {
    id: "ch9-the-oath-sworn",
    chapter: 9,
    order: 2,
    title: "The oath sworn at Gilgal",
    scriptureRefs: ["Joshua 9:14-15"],
    narrative:
      "The men of Israel take some of the provisions and examine them. The test is physical, and it works: the bread really is stale. What they do not do is ask God. The narrator states the omission in the same sentence as the inspection, and the placement is the judgement.\n\nJoshua then makes peace and cuts a covenant to let them live, and the leaders of the congregation swear it. Two levels of commitment are stacked here. There is an agreement, and there is an oath by the name of Yahweh underwriting it. In this world the second is the load-bearing element: a treaty was enforced not by courts but by the gods invoked in swearing it, who were expected to act against whoever broke faith. Israel has just attached God's name to a promise obtained by fraud, and the rest of the chapter, along with the next one and an episode centuries later, follows from that.",
    entityIds: ["joshua", "gilgal", "gibeon", "gibeonite-league"],
    mapFeatureIds: ["site-gilgal", "site-gibeon", "site-jericho"],
    mapCaption:
      "The covenant is sworn at Israel's camp in the Jordan valley, not at Gibeon.",
    whatChanged:
      "Four towns on the plateau are now inside Israel's obligations without a single soldier moving. The change is legal, not territorial, and the map should not shade anything.",
    geographyExplanation:
      "The camp lies on the valley floor about two hundred and fifty metres below sea level, in a hot oasis strip beside the Jordan. Envoys arriving here have descended from the highlands, and the descent is part of why worn-out gear reads as plausible: the road from the plateau to the valley is hard on footwear. The camp's position also explains the negotiation. Israel is still based east of the hill country, with Jericho and Ai taken but the plateau ahead unentered, so a delegation from over the horizon was exactly the kind of thing Israel had no independent way to check.",
    sequenceType: "event",
    viewport: { center: [35.5083, 31.8686], zoom: 11 },
    citations: [
      {
        sourceId: "hillers-covenant",
        supportedClaim:
          "A treaty was constituted by an oath sworn before deities, making the invoked god the guarantor rather than any human authority",
      },
      {
        sourceId: "calvin-joshua",
        locator: "on Joshua 9:14",
        supportedClaim:
          "A Reformed reading that identifies the sin in the failure to seek God's counsel before swearing",
      },
    ],
    evidenceLabels: ["biblical-account", "externally-attested"],
  },
  {
    id: "ch9-the-fraud-discovered",
    chapter: 9,
    order: 3,
    title: "Three days later",
    scriptureRefs: ["Joshua 9:16-21"],
    narrative:
      "Three days after the oath, Israel hears that the far country is next door. On the third day of marching they reach the towns themselves: Gibeon, Chephirah, Beeroth and Kiriath-jearim, all of them neighbours.\n\nAnd Israel does not strike them. The reason given is exact: the leaders had sworn to them by Yahweh, the God of Israel. The congregation grumbles at its leaders, which is the same complaint Israel made in the wilderness, and this time the leaders hold. Their argument is not that the Gibeonites deserve protection. It is that breaking the oath would bring wrath on Israel. The oath binds because of whose name is in it, and fraud on the other side does not release the swearer.\n\nThe outcome is a working compromise. They live, and they serve. Nobody in the chapter pretends this is a clean result.",
    entityIds: [
      "gibeon",
      "chephirah",
      "beeroth",
      "kiriath-jearim",
      "gibeonite-league",
      "joshua",
      "gilgal",
    ],
    mapFeatureIds: [
      "site-gibeon",
      "site-chephirah",
      "site-beeroth",
      "site-kiriath-jearim",
      "site-gilgal",
    ],
    mapCaption:
      "Israel marches to the four towns it has just sworn not to destroy.",
    whatChanged:
      "Israel is on the plateau for the first time, and the four towns are visible as what they are: neighbours. No territory is taken and none should be coloured.",
    geographyExplanation:
      "The towns ring the southern end of the Benjamin plateau, a relatively level shelf around seven hundred metres above sea level where the north-south watershed road meets the routes running west to the coastal plain. Kiriath-jearim sits lowest and furthest west, toward the Sorek approaches; Beeroth lies north on the ridge road; Chephirah is west of Gibeon. Whoever holds this cluster holds the junction. That is why the towns were worth protecting to Israel, and why, in the next chapter, five southern kings consider their defection an emergency.",
    sequenceType: "event",
    viewport: {
      center: [35.15, 31.86],
      zoom: 11,
      bounds: [
        [35.06, 31.78],
        [35.26, 31.93],
      ],
    },
    citations: [
      {
        sourceId: "rainey-notley-sacred-bridge",
        supportedClaim:
          "The Gibeonite towns cluster around the junction of the watershed road and the western routes off the Benjamin plateau",
      },
      {
        sourceId: "hillers-covenant",
        supportedClaim:
          "Deceit in obtaining an oath did not release the party who swore it",
      },
    ],
    evidenceLabels: ["biblical-account", "externally-attested"],
  },
  {
    id: "ch9-woodcutters-and-water-carriers",
    chapter: 9,
    order: 4,
    title: "Woodcutters and water carriers",
    scriptureRefs: ["Joshua 9:22-27"],
    narrative:
      "Joshua puts the question directly and gets a direct answer. The Gibeonites do not claim a right; they say they were told what Israel's God had commanded and were afraid for their lives. Then they hand themselves over: do to us what seems right to you.\n\nWhat seems right is servitude, framed as a curse, and protection, delivered in fact. They are set to cutting wood and drawing water for the congregation and for the altar of God. The phrase is not coined here. Deuteronomy 29 uses the same pairing for the foreigners in Israel's camps, and does so while listing them among those entering the covenant. So the sentence has two faces at once: a demotion, and a description of resident outsiders who stand inside Israel's worship. The chapter closes with \"to this day\", the narrator's note that this arrangement was still visible when he wrote.",
    entityIds: [
      "gibeon",
      "chephirah",
      "beeroth",
      "kiriath-jearim",
      "gibeonite-league",
      "hivites",
      "joshua",
    ],
    mapFeatureIds: [
      "site-gibeon",
      "site-chephirah",
      "site-beeroth",
      "site-kiriath-jearim",
    ],
    mapCaption:
      "Four town points, connected. Their standing inside Israel is a matter of oath, not of ground held.",
    whatChanged:
      "The towns remain inhabited by their own people under Israelite obligation. This is a change of status, so the map adds no conquest marker and draws no polygon.",
    geographyExplanation:
      "Water and wood are the two commodities the plateau has to fetch. There is no perennial river up here; Gibeon's own supply came from a rock-cut system reaching the water table, the sort of engineering a plateau town needs when rainfall is its only input. Firewood on limestone hills means scrub and terrace clearance, not forest. Assigning these four towns to supply water and wood for the sanctuary attaches a permanent labour obligation to settlements that already knew how to do both, in country where both were hard work.",
    sequenceType: "summary",
    viewport: { center: [35.1847, 31.8463], zoom: 11 },
    citations: [
      {
        sourceId: "pritchard-gibeon",
        supportedClaim:
          "Excavation at el-Jib recovered the town's water system and the inscribed jar handles that secure the identification",
      },
      {
        sourceId: "blenkinsopp-gibeon",
        supportedClaim:
          "The four towns act as a group and retain a distinct standing within Israel after the treaty",
      },
      {
        sourceId: "block-deuteronomy",
        locator: "on Deuteronomy 29:10-12",
        supportedClaim:
          "The phrase about cutting wood and drawing water describes resident foreigners listed as entering the covenant",
      },
    ],
    evidenceLabels: ["biblical-account", "externally-attested"],
  },

  /* ---------------------------------------------------------------- */
  /* Chapter 10                                                       */
  /* ---------------------------------------------------------------- */
  {
    id: "ch10-five-kings-besiege-gibeon",
    chapter: 10,
    order: 1,
    title: "Five kings besiege Gibeon",
    scriptureRefs: ["Joshua 10:1-6"],
    narrative:
      "Adoni-zedek of Jerusalem reads the treaty as a strategic disaster and says so plainly: Gibeon is a great city, greater than Ai, and its men are fighters. A town of that weight changing sides threatens every ruler on the southern ridge. He writes to four others, Hoham of Hebron, Piram of Jarmuth, Japhia of Lachish and Debir of Eglon, and the five bring their forces up to Gibeon and besiege it.\n\nNote what this alliance is. Five men who each governed one town and its fields, combining for one operation against a neighbour who had defected. It has no capital, no shared border and no existence after this campaign. Gibeon, under siege, sends word down to Gilgal with a claim on the oath Israel swore: do not abandon your servants. The chapter's whole action is set in motion by a promise obtained under false pretences.",
    entityIds: [
      "adoni-zedek",
      "hoham",
      "piram",
      "japhia",
      "debir-king",
      "jerusalem",
      "hebron",
      "jarmuth",
      "lachish",
      "eglon",
      "gibeon",
      "southern-coalition",
      "canaanite-city-states",
    ],
    mapFeatureIds: [
      "site-jerusalem",
      "site-hebron",
      "site-jarmuth",
      "site-lachish",
      "site-eglon",
      "site-gibeon",
    ],
    mapCaption:
      "Five city points joined by thin lines, converging on Gibeon. The coalition is a set of cities, never a shaded country.",
    whatChanged:
      "Five separate cities are now acting together against one town. Nothing between them is under common control, so nothing between them is filled in.",
    geographyExplanation:
      "The five cities are not a bloc. Jerusalem and Hebron sit on the southern ridge road, roughly nine hundred metres up; Jarmuth, Lachish and Eglon lie west and below in the Shephelah, the belt of low chalk hills where the valleys run from the coastal plain into the highlands. Between them are ravines and separate watersheds. What links them is the ridge route and their shared interest in the plateau, because Gibeon stands where the north-south ridge road crosses the routes down to the coast. Adoni-zedek's problem is not that Gibeon is near him, about ten kilometres north, but that whoever holds it controls his approaches.",
    sequenceType: "event",
    viewport: {
      center: [35.05, 31.67],
      zoom: 9,
      bounds: [
        [34.8, 31.44],
        [35.3, 31.9],
      ],
    },
    citations: [
      {
        sourceId: "hess-joshua",
        locator: "on Joshua 10:1-5",
        supportedClaim:
          "The five-king coalition is a temporary military arrangement formed in response to Gibeon's treaty",
      },
      {
        sourceId: "moran-amarna",
        supportedClaim:
          "Canaanite rulers of this period governed single towns with their surrounding fields and combined only for particular purposes",
      },
      {
        sourceId: "aharoni-land-of-bible",
        supportedClaim:
          "The Shephelah's valleys and the southern ridge road are separate route systems joined at the Benjamin plateau",
      },
    ],
    evidenceLabels: ["biblical-account", "externally-attested"],
  },
  {
    id: "ch10-night-march-from-gilgal",
    chapter: 10,
    order: 2,
    title: "The night march from Gilgal",
    scriptureRefs: ["Joshua 10:7-9"],
    narrative:
      "Joshua goes up from Gilgal with the whole army and marches all night. The text gives the detail twice, that he came on them suddenly and that he marched from Gilgal all night, and the repetition is doing work: surprise on this ground had to be bought with a specific and brutal effort.\n\nHe also receives an assurance before he moves, not after. Do not fear them, for I have delivered them into your hands. The chapter will attribute the day's outcome to God at every turn, but it does not therefore make the march easy or the decision safe. Israel leaves a camp in the Jordan valley in the dark and arrives on the plateau at first light, in front of five armies that have no reason to expect anyone.",
    entityIds: ["joshua", "gilgal", "gibeon", "southern-coalition"],
    mapFeatureIds: ["site-gilgal", "site-gibeon", "site-jericho"],
    mapCaption:
      "The overnight ascent from the Jordan valley to the Benjamin plateau, about thirty kilometres and a thousand metres of climb.",
    whatChanged:
      "Israel's army moves from the valley floor to the plateau in a single night. This is the movement the whole southern campaign hangs on.",
    geographyExplanation:
      "This is the hardest piece of ground in the book to cross quickly. Gilgal lies near Jericho on a valley floor about two hundred and fifty metres below sea level. Gibeon stands roughly seven hundred metres above it. That is close to a thousand metres of ascent over about thirty kilometres, done in darkness, up the wadi routes that climb from the oasis to the watershed. The gradient is not even; the worst of it comes in the middle, on slopes that force a column into single file. Doing it at night removes the one thing the defenders on the plateau had, which is a long sightline down the ascent. The coalition expected any relief force to be seen coming for hours.",
    sequenceType: "event",
    viewport: {
      center: [35.35, 31.86],
      zoom: 10,
      bounds: [
        [35.1, 31.78],
        [35.58, 31.93],
      ],
    },
    citations: [
      {
        sourceId: "beitzel-moody-atlas",
        supportedClaim:
          "The ascent from the Jericho oasis to the Benjamin plateau climbs roughly a thousand metres by the wadi routes",
      },
      {
        sourceId: "rainey-notley-sacred-bridge",
        supportedClaim:
          "The routes linking the Jordan valley to the watershed road near Gibeon and their gradients",
      },
    ],
    evidenceLabels: ["biblical-account", "reconstruction"],
  },
  {
    id: "ch10-beth-horon-rout",
    chapter: 10,
    order: 3,
    title: "Down the Beth-horon descent, and the poem about sun and moon",
    scriptureRefs: ["Joshua 10:10-15"],
    narrative:
      "The coalition breaks at Gibeon and runs west, down the Beth-horon road, because it is the only good way off the plateau in that direction. The pursuit follows them past Upper and Lower Beth-horon and on to Azekah, and the text says the hailstones killed more of them than Israel's swords did.\n\nInto the middle of this the narrator places two lines of verse. Sun, stand still on Gibeon; moon, stop in the valley of Aijalon. He then asks whether this is not written in the book of Jashar, a collection now lost, and adds that the sun stayed in the middle of the sky about a whole day, and that there was never a day like it, because Yahweh listened to the voice of a man.\n\nThe quotation marker matters. The text itself tells us it is citing poetry, which is why the passage is argued over as poetry rather than simply as report.",
    entityIds: [
      "joshua",
      "gibeon",
      "upper-beth-horon",
      "lower-beth-horon",
      "aijalon",
      "azekah",
      "southern-coalition",
      "region-shephelah",
    ],
    mapFeatureIds: [
      "site-gibeon",
      "site-upper-beth-horon",
      "site-lower-beth-horon",
      "site-aijalon",
      "site-azekah",
    ],
    mapCaption:
      "The rout runs west off the plateau through the two Beth-horons into the Aijalon valley, then south-west to Azekah.",
    whatChanged:
      "The coalition's field army is destroyed strung out along a mountain road. No city changes hands in this milestone, and none should be marked as taken.",
    geographyExplanation:
      "The Beth-horon road is the reason this becomes a rout rather than a retreat. From the plateau near Gibeon the route drops something over five hundred metres to the Aijalon valley floor, losing most of it in the few kilometres between Upper Beth-horon and Lower Beth-horon on a narrow spur with ravines either side. An army going down it cannot hold a line, cannot turn, and cannot spread out; it becomes a column with its back exposed. Every army that ever used this pass, Israelite, Seleucid and Roman alike, found the same thing. Azekah lies a further twenty-five kilometres south-west at the mouth of the Elah valley, which measures how far the pursuit ran once the descent had done its work. The poem's two places, Gibeon above and the Aijalon valley below, are precisely the top and bottom of this road.",
    sequenceType: "event",
    viewport: {
      center: [35.05, 31.82],
      zoom: 10,
      bounds: [
        [34.9, 31.66],
        [35.24, 31.93],
      ],
    },
    citations: [
      {
        sourceId: "rainey-notley-sacred-bridge",
        supportedClaim:
          "The Beth-horon ridge road is the principal descent from the Benjamin plateau to the coastal plain, and Gibeon and the Aijalon valley stand at its two ends",
      },
      {
        sourceId: "butler-joshua",
        locator: "on Joshua 10:12-13",
        supportedClaim:
          "The reference to the book of Jashar marks the lines as a quotation from an earlier poetic collection",
      },
      {
        sourceId: "walton-celestial-omens",
        supportedClaim:
          "The sun and moon language belongs to the vocabulary of celestial omens, so the request may concern a sign rather than solar mechanics",
      },
    ],
    evidenceLabels: ["biblical-account", "disputed", "externally-attested"],
  },
  {
    id: "ch10-kings-at-makkedah",
    chapter: 10,
    order: 4,
    title: "The five kings in the cave at Makkedah",
    scriptureRefs: ["Joshua 10:16-28"],
    narrative:
      "The five kings hide in a cave at Makkedah. Joshua has stones rolled across the entrance and guards posted, and refuses to let the capture distract from the pursuit: do not stop here, keep after them, do not let them reach their cities. Only when the fighting is finished are the kings brought out.\n\nWhat follows is a public ritual of dominance. The commanders put their feet on the kings' necks while Joshua tells them not to be afraid, then the kings are killed and hung on trees until evening, taken down at sunset in keeping with the law, and thrown back into the cave, which is sealed with the same great stones. The town is taken the same day.\n\nMakkedah is named seven times in this chapter and its location is unknown. Not disputed between candidates so much as simply not established. The study does not place it.",
    entityIds: [
      "joshua",
      "makkedah",
      "adoni-zedek",
      "hoham",
      "piram",
      "japhia",
      "debir-king",
      "southern-coalition",
      "azekah",
      "region-shephelah",
    ],
    mapFeatureIds: [
      "site-azekah",
      "site-jarmuth",
      "site-lachish",
      "site-eglon",
    ],
    mapCaption:
      "Makkedah is absent from this map on purpose: the town and its cave cannot be located, so nothing is pinned.",
    whatChanged:
      "The five rulers are dead and their cities are leaderless, but the map cannot show where it happened. The gap in the middle of this view is the honest result.",
    geographyExplanation:
      "The account puts Makkedah somewhere in the Shephelah within reach of the pursuit, which is as far as the text goes. That belt of soft chalk hills is riddled with caves, natural and cut, so a cave used as a hiding place is entirely at home here and entirely unidentifiable. Khirbet el-Qom has been suggested among others, without agreement. The surrounding geography still says something useful: the coalition fled away from the ridge and into the lowlands, and the instruction not to let them reach their cities shows what everyone understood the stakes to be. A ruler who got back behind his own walls could not be finished off in the field.",
    sequenceType: "event",
    viewport: {
      center: [34.96, 31.62],
      zoom: 10,
      bounds: [
        [34.8, 31.45],
        [35.12, 31.78],
      ],
    },
    citations: [
      {
        sourceId: "rainey-notley-sacred-bridge",
        supportedClaim:
          "Makkedah remains unlocated, with proposals that have not achieved agreement",
      },
      {
        sourceId: "aharoni-land-of-bible",
        supportedClaim:
          "The Shephelah is a belt of soft chalk hills in which caves are common",
      },
    ],
    evidenceLabels: ["biblical-account"],
  },
  {
    id: "ch10-southern-towns",
    chapter: 10,
    order: 5,
    title: "The sweep of southern towns",
    scriptureRefs: ["Joshua 10:28-43"],
    narrative:
      "The last section of the chapter changes gear. Makkedah, Libnah, Lachish, Eglon, Hebron, Debir: each gets two or three verses in a near-identical formula, with the comparison always to what was done at the town before. Horam of Gezer comes to help Lachish and is destroyed in the field, and his city is not said to be taken at all.\n\nThen a single sentence claims the lot: Joshua struck all the land, the hill country, the Negev, the lowland and the slopes, from Kadesh-barnea to Gaza and all the land of Goshen as far as Gibeon. And he returned to the camp at Gilgal.\n\nThat last clause is the tell. The army goes home to the valley. This is a report of towns broken in a series of strikes, not of a country occupied, and the writer moves from narrative into summary formula to say so.",
    entityIds: [
      "joshua",
      "horam",
      "makkedah",
      "libnah",
      "lachish",
      "eglon",
      "hebron",
      "debir",
      "gezer",
      "gilgal",
      "gibeon",
      "region-shephelah",
      "region-negev",
      "region-goshen-judah",
      "region-hill-country-judah",
    ],
    mapFeatureIds: [
      "site-lachish",
      "site-eglon",
      "site-hebron",
      "site-debir",
      "site-gezer",
      "site-azekah",
      "site-gibeon",
      "site-gaza",
      "site-kadesh-barnea",
    ],
    mapCaption:
      "The towns the summary names, shown as points across the south. Two of them, Makkedah and Libnah, cannot be placed at all.",
    whatChanged:
      "A run of southern towns is reported struck, and the army returns to Gilgal. Nothing here is held: this view must not be drawn as a filled southern territory.",
    geographyExplanation:
      "The named towns trace the two systems the south is built from. Lachish, Eglon and Libnah belong to the Shephelah and its valleys, the approach routes from the coastal plain; Hebron and Debir sit on and below the southern ridge, nine hundred metres up in country where terraced farming works and cavalry does not. Gezer stands apart at the north-west corner, guarding where the Aijalon route meets the coastal highway, and its king dies without his city falling. The outer markers of verse 41, Kadesh-barnea in the far southern desert and Gaza on the coast, are the widest limits the writer can name, and they enclose ground that Israel demonstrably did not settle: Gaza appears three chapters later among the land still to be possessed.",
    sequenceType: "summary",
    viewport: {
      center: [34.83, 31.25],
      zoom: 8,
      bounds: [
        [34.35, 30.6],
        [35.3, 31.9],
      ],
    },
    citations: [
      {
        sourceId: "younger-conquest-accounts",
        supportedClaim:
          "The repeated formula and the totalising summary belong to a conventional ancient conquest-report style rather than to a record of occupation",
      },
      {
        sourceId: "kitchen-reliability",
        supportedClaim:
          "The southern sequence is better read as a series of disabling strikes followed by withdrawal to base",
      },
      {
        sourceId: "ussishkin-lachish",
        supportedClaim:
          "Lachish was a substantial Shephelah centre with a destruction sequence that cannot on its own be assigned to this campaign",
      },
    ],
    evidenceLabels: ["biblical-account", "externally-attested"],
  },

  /* ---------------------------------------------------------------- */
  /* Chapter 11                                                       */
  /* ---------------------------------------------------------------- */
  {
    id: "ch11-jabin-gathers-the-north",
    chapter: 11,
    order: 1,
    title: "Jabin gathers the north at the waters of Merom",
    scriptureRefs: ["Joshua 11:1-5"],
    narrative:
      "Jabin of Hazor summons a far wider alliance than the southern five. Jobab of Madon, the kings of Shimron and Achshaph, and rulers from four different kinds of country: the northern hills, the Arabah south of Chinnereth, the lowland, and the heights of Dor on the coast. They come with very many horses and chariots and camp together at the waters of Merom.\n\nThis is still not a state. It is a set of towns whose rulers agreed to meet at one place, and the text names the place by its water rather than by a city, which is a clue to what a muster needed. Several of the members cannot be located. Madon has no agreed site and may be a textual variant, Achshaph is disputed, and the muster site itself is disputed. The lines on the map that join these cities are honest only if they are drawn dashed.",
    entityIds: [
      "jabin",
      "jobab",
      "hazor",
      "madon",
      "shimron",
      "achshaph",
      "chinnereth",
      "dor",
      "waters-of-merom",
      "northern-coalition",
      "region-galilee",
      "region-huleh-basin",
      "region-jezreel-valley",
    ],
    mapFeatureIds: [
      "site-hazor",
      "site-waters-of-merom",
      "site-shimron",
      "site-achshaph",
      "site-chinnereth",
      "site-dor",
      "site-mount-hermon",
    ],
    mapCaption:
      "Northern city points converging on a disputed muster site. Madon is missing because it cannot be located.",
    whatChanged:
      "A second and larger coalition exists, drawn from the coast, the Galilean hills and the upper Jordan. It is a set of cities, not a northern kingdom, and nothing between the points is shaded.",
    geographyExplanation:
      "The north is a different military problem from the south. Instead of one ridge road there are several open corridors: the Huleh basin below Hazor where the route from Syria enters the country, the Jezreel valley cutting west to the sea, the coastal plain past Dor. All of them are flat, which is what makes the chariot detail matter. A force built around chariots musters and fights where the ground allows it, and that is the strongest argument in the debate over where the waters of Merom were. A site near Meiron in the Upper Galilean hills fits the name; a location lower down in the Huleh basin fits the chariots. The study shows the more cited option and marks it disputed rather than choosing on the strength of the terrain argument alone.",
    sequenceType: "event",
    viewport: {
      center: [35.4, 32.95],
      zoom: 8,
      bounds: [
        [34.88, 32.48],
        [35.92, 33.45],
      ],
    },
    citations: [
      {
        sourceId: "hess-joshua",
        locator: "on Joshua 11:1-5",
        supportedClaim:
          "Jabin assembles a coalition described as including chariotry, mustering at the waters of Merom",
      },
      {
        sourceId: "rainey-notley-sacred-bridge",
        supportedClaim:
          "Competing proposals for the waters of Merom, in the Upper Galilean hills and in the Huleh basin",
      },
      {
        sourceId: "butler-joshua",
        supportedClaim:
          "The name Madon differs between the Hebrew and Greek textual traditions",
      },
    ],
    evidenceLabels: ["biblical-account", "disputed"],
  },
  {
    id: "ch11-coalition-broken-at-merom",
    chapter: 11,
    order: 2,
    title: "The coalition broken",
    scriptureRefs: ["Joshua 11:6-9"],
    narrative:
      "Joshua is given a timetable, tomorrow at this time, and an instruction that reads like sabotage of his own spoils: hamstring their horses and burn their chariots. Then, as at Gibeon, he arrives suddenly and attacks before the coalition is ready.\n\nThe pursuit runs three ways, which tells us the force scattered rather than retreated: north-west to great Sidon, west to Misrephoth-maim, and east into the valley of Mizpah. Two of those three destinations say something about the limits of the victory. Sidon is a Phoenician city that Israel never holds, and it turns up later among the peoples not driven out. Misrephoth-maim cannot be located at all, so the western limit of the pursuit is a name without a place.\n\nAnd Joshua does what he was told with the captured horses and chariots. Israel destroys the technology instead of adopting it.",
    entityIds: [
      "joshua",
      "waters-of-merom",
      "misrephoth-maim",
      "sidon",
      "hazor",
      "northern-coalition",
      "sidonians",
    ],
    mapFeatureIds: [
      "site-waters-of-merom",
      "site-hazor",
      "site-sidon",
      "site-chinnereth",
    ],
    mapCaption:
      "The rout scatters north-west toward Sidon, west toward the unlocatable Misrephoth-maim, and east into the valley of Mizpah.",
    whatChanged:
      "The northern field army ceases to exist and its chariot force is destroyed. No city has yet changed hands, and the pursuit's western limit cannot be drawn.",
    geographyExplanation:
      "The three directions of flight fan out from the upper Jordan region along the routes available. North-west leads over the Galilean hills and down to the Phoenician coast at Sidon, about sixty kilometres away; west runs toward the Acco plain; east drops into the upper rift. That the survivors dispersed along three separate corridors rather than falling back on one fortress is consistent with a coalition rather than a single army, since each contingent ran for its own country. The hamstringing of the horses happens here, on ground where chariots were worth having, which is why the order is startling: Israel gives up the one asset that would have let it fight in the valleys it later fails to hold.",
    sequenceType: "event",
    viewport: {
      center: [35.45, 33.2],
      zoom: 9,
      bounds: [
        [35.1, 32.85],
        [35.75, 33.62],
      ],
    },
    citations: [
      {
        sourceId: "rainey-notley-sacred-bridge",
        supportedClaim:
          "The routes from the upper Jordan region to the Phoenician coast and the Acco plain, and the unlocated position of Misrephoth-maim",
      },
      {
        sourceId: "hess-joshua",
        locator: "on Joshua 11:6-9",
        supportedClaim:
          "The command to hamstring the horses and burn the chariots is given without explanation and carried out",
      },
    ],
    evidenceLabels: ["biblical-account", "reconstruction"],
  },
  {
    id: "ch11-hazor-burned",
    chapter: 11,
    order: 3,
    title: "Hazor burned",
    scriptureRefs: ["Joshua 11:10-15"],
    narrative:
      "Joshua turns back for Hazor, kills its king, and burns the city. The reason given is its standing: Hazor had been the head of all those kingdoms. Then comes a sentence that many readers skip. Of the cities that stood on their mounds, Israel burned none of them, except Hazor only.\n\nSo the chapter that sounds most total is also the chapter that distinguishes most carefully. Kings were killed and cities were captured, but the towns were left standing, because Israel intended to live in them. One city was burned, and it was the one that had been the regional power. That is a targeted act against a centre of authority rather than a policy of levelling the country.\n\nThe archaeology confirms the scale of what is claimed here and cannot confirm who did it. Both halves of that sentence belong in any honest account.",
    entityIds: ["joshua", "jabin", "hazor", "moses", "region-huleh-basin"],
    mapFeatureIds: ["site-hazor", "site-waters-of-merom"],
    mapCaption:
      "Hazor, roughly eighty hectares of upper and lower city, the one town in the chapter said to be burned.",
    whatChanged:
      "The dominant city of the north is destroyed and its king is dead. The other captured towns are explicitly left standing, so only Hazor carries a destruction marker.",
    geographyExplanation:
      "Hazor sits above the Huleh basin at the point where the road from Syria and Mesopotamia enters the country, which is why it was the largest city in the land and why it was worth its reputation. The upper mound plus the lower city covers around eighty hectares; the mound at Jericho would fit inside it many times over. A city that size is not a fortified village but a regional capital with a palace, and it controlled traffic through a corridor nobody could bypass. Burning it removes a coordinating power from the north in a way that taking a hill town never could, which is a plausible reason for treating it differently from every other city in the campaign.",
    sequenceType: "event",
    viewport: { center: [35.5686, 33.0175], zoom: 11 },
    citations: [
      {
        sourceId: "yadin-hazor",
        supportedClaim:
          "Hazor's exceptional size, roughly two hundred acres including the lower city, and a violent destruction of the Late Bronze city",
      },
      {
        sourceId: "ben-tor-hazor",
        supportedClaim:
          "The renewed excavations document the burning of the Late Bronze palace",
      },
      {
        sourceId: "ben-tor-zuckerman-hazor",
        supportedClaim:
          "Two excavators of the same site reach different conclusions about who destroyed Hazor",
      },
      {
        sourceId: "rainey-notley-sacred-bridge",
        supportedClaim:
          "Hazor's position controls the northern entry route into the country through the Huleh basin",
      },
    ],
    evidenceLabels: ["biblical-account", "externally-attested", "disputed"],
  },
  {
    id: "ch11-halak-to-baal-gad",
    chapter: 11,
    order: 4,
    title: "From Mount Halak to Baal-gad",
    scriptureRefs: ["Joshua 11:16-23"],
    narrative:
      "The camera pulls back. Joshua took all that land, hill country and Negev and Goshen and lowland and Arabah, from Mount Halak that rises toward Seir as far as Baal-gad in the valley of Lebanon below Mount Hermon. He took their kings and put them to death. He made war a long time. No city made peace except Gibeon's Hivites. The Anakim were cut off from the hill country, though some remained in Gaza, Gath and Ashdod. The land had rest from war.\n\nRead the qualifications inside the summary. A long time, which collapses years into a paragraph. Some remained, in three named cities. The southern limit, Mount Halak, has no accepted identification, and the northern one, Baal-gad, is located only as a general area. The two ends of the claim are a name nobody can place and a region rather than a point.",
    entityIds: [
      "joshua",
      "mount-halak",
      "baal-gad",
      "mount-hermon",
      "gibeon",
      "anakim",
      "hebron",
      "debir",
      "anab",
      "region-negev",
      "region-goshen-judah",
      "region-galilee",
      "hivites",
    ],
    mapFeatureIds: [
      "site-baal-gad",
      "site-mount-hermon",
      "site-gibeon",
      "site-hebron",
      "site-debir",
      "site-anab",
      "site-gaza",
      "site-gath",
      "site-ashdod",
    ],
    mapCaption:
      "The widest view in the book so far, shown as scope rather than possession. Mount Halak, the southern limit, cannot be placed.",
    whatChanged:
      "Nothing new is captured. This is the reach of the campaigns stated in one sentence, and it must not be drawn as controlled territory: the same book says two chapters later that much land remains unpossessed.",
    geographyExplanation:
      "The two limits are chosen for their visibility, not their precision. Mount Hermon, above two thousand eight hundred metres and snow-capped for much of the year, is visible from most of Galilee and functions in these summaries as the obvious northern marker; Baal-gad is placed somewhere in the valley below it. At the other end, Mount Halak is described only as rising toward Seir, the Edomite hills, and no site has ever been agreed. Naming a campaign's extent by a famous mountain at one end and an unidentifiable one at the other is a reminder of what this kind of sentence is: a statement of reach in recognisable landmarks, not a surveyed boundary. The three cities where the Anakim remained are all on the coastal plain, the flat ground Israel does not take.",
    sequenceType: "summary",
    viewport: {
      center: [35.2, 32.1],
      zoom: 7,
      bounds: [
        [34.2, 30.8],
        [36.1, 33.5],
      ],
    },
    citations: [
      {
        sourceId: "rainey-notley-sacred-bridge",
        supportedClaim:
          "Mount Halak has no accepted identification and Baal-gad is located only generally, below Hermon in the Lebanon valley",
      },
      {
        sourceId: "younger-conquest-accounts",
        supportedClaim:
          "Summary statements of total conquest are a conventional feature of the genre and coexist with admissions of incompleteness",
      },
      {
        sourceId: "hess-joshua",
        locator: "on Joshua 11:21-22",
        supportedClaim:
          "The Anakim are restricted to named towns and their survival in the Philistine cities is noted in the same passage",
      },
    ],
    evidenceLabels: ["biblical-account", "reconstruction"],
  },

  /* ---------------------------------------------------------------- */
  /* Chapter 12                                                       */
  /* ---------------------------------------------------------------- */
  {
    id: "ch12-transjordan-kings",
    chapter: 12,
    order: 1,
    title: "Sihon and Og, east of the Jordan",
    scriptureRefs: ["Joshua 12:1-6"],
    narrative:
      "The register opens by looking backward and eastward, to two kings defeated before the book of Joshua began. Sihon the Amorite ruled from Heshbon, and his reach is described by landmarks rather than by a border: from the Arnon gorge north to the Jabbok, taking in half of Gilead and the Arabah down to the Salt Sea. Og of Bashan, called a survivor of the Rephaim, ruled at Ashtaroth and Edrei, over Hermon and Salecah and all Bashan.\n\nThe credit is given to Moses, twice called the servant of Yahweh, and the text notes that he assigned this land to Reuben, Gad and half of Manasseh. Two things are being kept apart even here. The kings were struck, which is a military fact, and the land was given as a possession, which is an assignment. The register is careful about which verb goes with which.",
    entityIds: [
      "sihon",
      "og",
      "moses",
      "heshbon",
      "dibon",
      "ashtaroth",
      "edrei",
      "arnon-river",
      "jabbok-river",
      "mount-hermon",
      "tribe-reuben",
      "tribe-gad",
      "tribe-manasseh-east",
      "region-bashan",
      "region-gilead",
      "rephaim",
    ],
    mapFeatureIds: [
      "site-heshbon",
      "site-dibon",
      "site-ashtaroth",
      "site-edrei",
      "site-arnon-river",
      "site-jabbok-river",
      "site-mount-hermon",
      "site-sea-of-chinnereth",
      "site-salt-sea",
    ],
    mapCaption:
      "The eastern plateau, described by rivers and royal towns. Heshbon, Dibon, Ashtaroth and Edrei are located anchors, not entries in the list of thirty-one.",
    whatChanged:
      "Nothing changes. This milestone looks back to events that preceded the book, and the map recalls them without adding any advance.",
    geographyExplanation:
      "The eastern territories are defined by two canyons and a plateau. The Arnon, the modern Wadi Mujib, drops hundreds of metres into the Dead Sea and works as a border precisely because crossing it is difficult; the Jabbok, the Zarqa, cuts the Gilead highlands in half further north. Between and above them runs high rolling tableland with enough rain for grain and grazing, which is why Reuben and Gad wanted it. Bashan, further north and east, is basalt country with deep soil and almost no natural boundaries, which is why the register describes Og's realm by naming towns and regions rather than lines. This is the one part of the land where the text's limits are mostly real physical features.",
    sequenceType: "retrospective",
    viewport: {
      center: [35.85, 32.4],
      zoom: 8,
      bounds: [
        [35.4, 31.4],
        [36.3, 33.5],
      ],
    },
    citations: [
      {
        sourceId: "rainey-notley-sacred-bridge",
        supportedClaim:
          "The Arnon and Jabbok gorges as boundaries of the Transjordan territories, and the identification of Heshbon, Ashtaroth and Edrei",
      },
      {
        sourceId: "mazar-archaeology-land",
        supportedClaim:
          "Limited Late Bronze evidence at Tell Hisban, the site identified with Heshbon",
      },
      {
        sourceId: "hess-joshua",
        locator: "on Joshua 12:1-6",
        supportedClaim:
          "The eastern section credits Moses and distinguishes striking the kings from assigning the land as a possession",
      },
    ],
    evidenceLabels: ["biblical-account", "externally-attested"],
  },
  {
    id: "ch12-thirty-one-kings",
    chapter: 12,
    order: 2,
    title: "Thirty-one kings west of the Jordan",
    scriptureRefs: ["Joshua 12:7-24"],
    narrative:
      "Then the list. The king of Jericho, one. The king of Ai, one. Jerusalem, Hebron, Jarmuth, Lachish, Eglon, Gezer, Debir, Geder, Hormah, Arad, Libnah, Adullam, Makkedah, Bethel, Tappuah, Hepher, Aphek, Lassharon, Madon, Hazor, Shimron Meron, Achshaph, Taanach, Megiddo, Kedesh, Jokneam in Carmel, Dor, Goiim in Gilgal, Tirzah. Thirty-one kings.\n\nNow set five of those entries beside the rest of the book. Jerusalem, verse 10: Joshua 15:63 says Judah could not drive out the people living there. Gezer, verse 12: Joshua 16:10 says the Canaanites in Gezer were not driven out. Megiddo, Taanach and Dor, verses 21 to 23: Joshua 17:11-13 says Manasseh could not take them.\n\nThe same book lists these cities as defeated and as unpossessed. Both statements are in the register's own volume, and a map that fills in this list with a colour has flatly contradicted the text it claims to illustrate.",
    entityIds: [
      "joshua",
      "jericho",
      "ai",
      "bethel",
      "jerusalem",
      "hebron",
      "jarmuth",
      "lachish",
      "eglon",
      "gezer",
      "debir",
      "libnah",
      "makkedah",
      "hormah",
      "arad",
      "adullam",
      "aphek",
      "madon",
      "hazor",
      "shimron",
      "achshaph",
      "taanach",
      "megiddo",
      "kedesh-naphtali",
      "dor",
      "tirzah",
      "mount-carmel",
      "canaanite-city-states",
      "jebusites",
    ],
    mapFeatureIds: [
      "site-jericho",
      "site-ai",
      "site-bethel",
      "site-jerusalem",
      "site-hebron",
      "site-jarmuth",
      "site-lachish",
      "site-eglon",
      "site-gezer",
      "site-debir",
      "site-arad",
      "site-adullam",
      "site-aphek",
      "site-hazor",
      "site-shimron",
      "site-achshaph",
      "site-taanach",
      "site-megiddo",
      "site-kedesh-naphtali",
      "site-dor",
      "site-tirzah",
      "site-mount-carmel",
    ],
    mapCaption:
      "Twenty-one of the thirty-one kings' cities, as points. Ten cannot be placed, four of the rest are disputed, and none of this is territory.",
    whatChanged:
      "Nothing is conquered in this milestone. A register replaces a narrative, and the map answers with dots and gaps rather than with any filled area.",
    geographyExplanation:
      "Plotted as points, the list stops looking like a country and starts looking like what it is: a scatter of small centres along the routes that mattered. Most sit where a road meets a pass or a spring. Megiddo and Taanach guard the entries to the Jezreel valley; Gezer and Aphek command the coastal highway; Lachish, Jarmuth, Adullam and Azekah's neighbours hold the Shephelah valleys; Hazor sits on the northern gate. The gaps are as informative as the points. Makkedah, Libnah, Hormah and Madon have no secure location, and Geder, Tappuah, Hepher, Lassharon, Jokneam and Goiim in Gilgal are no better placed, which means a third of the list cannot be drawn. Of the twenty-one that can be, four are disputed. Arad is on the map, but the excavated mound there has a long occupation gap in the relevant period, so its presence in the list is a genuine historical difficulty rather than a confirmation.",
    sequenceType: "summary",
    viewport: {
      center: [35.1, 32.2],
      zoom: 7,
      bounds: [
        [34.3, 31.15],
        [35.95, 33.45],
      ],
    },
    citations: [
      {
        sourceId: "butler-joshua",
        locator: "on Joshua 12:7-24",
        supportedClaim:
          "The register follows a fixed list formula rather than a narrative structure",
      },
      {
        sourceId: "thutmose-iii-lists",
        supportedClaim:
          "Egyptian topographical lists of Canaanite towns provide the closest generic parallel to a register of this kind",
      },
      {
        sourceId: "younger-conquest-accounts",
        supportedClaim:
          "Conquest lists record campaign reach and assert totality without implying administration of the places named",
      },
      {
        sourceId: "kitchen-reliability",
        supportedClaim:
          "The register names kings defeated, and the book's later admissions show that several of their cities were not possessed",
      },
      {
        sourceId: "rainey-notley-sacred-bridge",
        supportedClaim:
          "Ten of the towns in the register have no agreed identification, and several others remain disputed",
      },
      {
        sourceId: "mazar-archaeology-land",
        supportedClaim:
          "The occupation sequence at Tel Arad leaves a long gap between the Early Bronze city and the Iron Age fortress",
      },
    ],
    evidenceLabels: [
      "biblical-account",
      "externally-attested",
      "disputed",
      "reconstruction",
    ],
  },
];
