import type { Chapter, Milestone } from "../types";

/**
 * Joshua 13-14: the land that remains, the eastern inheritance, and Caleb's
 * portion at Hebron.
 *
 * Four constraints govern this file.
 *
 * 1. Chapter 12 counted thirty-one defeated kings; chapter 13 opens by saying
 *    very much land remains unpossessed. Those two facts belong in the same
 *    breath, and no sentence here is allowed to separate them.
 * 2. No milestone in chapter 13 is an `event`. The survey of remaining land is a
 *    `summary`, the three eastern portions are `allotment`, and the notice about
 *    Geshur and Maacah is a `summary`. Drawing any of them as chronological
 *    advance would make the map assert a march the text does not narrate.
 * 3. The Philistine chronology problem is stated and left open. Joshua 13:3
 *    treats the five rulers as a present political fact; the material culture
 *    identified as Philistine appears in those cities later than most
 *    reconstructions of these events. This file names the tension and picks no
 *    resolution.
 * 4. Caleb's forty-five years is the text's own interval figure and stays that
 *    way. It is never converted into an absolute date, and nothing is supplied
 *    about his motive or physical condition beyond what he says.
 */

export const CHAPTERS: Chapter[] = [
  /* ================================================================== */
  /* Chapter 13                                                         */
  /* ================================================================== */
  {
    id: "ch13",
    number: 13,
    title: "The land that remains, and the eastern inheritance",
    summary:
      "One chapter after a register of thirty-one defeated kings, Yahweh tells an aging Joshua that very much land is still unpossessed, names it city by city, and then the text records the Transjordan portions Moses had already given to Reuben, Gad and half of Manasseh.",
    phase: "inheritance-and-life",
    scriptureRange: "Joshua 13:1-33",
    milestoneIds: [
      "ch13-land-that-remains",
      "ch13-geshur-and-maacah-remain",
      "ch13-reuben-on-the-plateau",
      "ch13-gad-in-gilead",
      "ch13-half-manasseh-in-bashan",
    ],
    sections: [
      {
        id: "ch13-at-a-glance",
        kind: "at-a-glance",
        title: "At a glance",
        body:
          "[[entity:joshua]] is old, and Yahweh's word to him in this chapter is that very much land remains to be possessed. The text names it: the [[entity:philistines]] with their five rulers, the [[entity:avvim]], the [[entity:sidonians]], [[entity:region-lebanon]] and [[entity:mount-hermon]]. The rest records the eastern inheritance [[entity:moses]] had already given to [[entity:tribe-reuben]], [[entity:tribe-gad]] and [[entity:tribe-manasseh-east]]. The [[entity:geshurites]] and [[entity:maacathites]] are not driven out, and [[entity:tribe-levi]] gets no land at all.",
        scriptureRefs: ["Joshua 13:1-7", "Joshua 13:8-14", "Joshua 13:15-33"],
        citations: [],
        evidenceLabels: ["biblical-account"],
      },
      {
        id: "ch13-walk-through",
        kind: "walk-through",
        title: "Walk through the chapter",
        body:
          "The chapter begins with an aging leader and an unfinished job. [[entity:joshua]] is old and advanced in years, and the first thing Yahweh says to him is not congratulation but a statement of shortfall: there remains yet very much land to be possessed. One chapter earlier the book counted thirty-one kings struck down. Both sentences stand, and neither is withdrawn.\n\nThen the shortfall is itemised, which is what makes it impossible to soften. All the regions of the [[entity:philistines]] and the [[entity:geshurites]]; the five Philistine rulers of [[entity:gaza]], [[entity:ashdod]], [[entity:ashkelon]], [[entity:gath]] and [[entity:ekron]]; the [[entity:avvim]]; Sidonian land as far as the Amorite border; the Gebalites and all [[entity:region-lebanon]] from [[entity:baal-gad]] below [[entity:mount-hermon]] to the entrance of Hamath; every hill dweller as far as [[entity:misrephoth-maim]]. Allot it anyway, Yahweh says.\n\nThe rest of the chapter looks east to land [[entity:moses]] had already handed out. [[entity:tribe-reuben]] takes the tableland from the [[entity:arnon-river]] north past [[entity:dibon]] and [[entity:heshbon]]. [[entity:tribe-gad]] takes [[entity:region-gilead]] and the valley towns as far as [[entity:succoth]]. [[entity:tribe-manasseh-east]] takes [[entity:region-bashan]], [[entity:og]]'s kingdom, with [[entity:ashtaroth]] and [[entity:edrei]].\n\nTwo notices sit inside that survey and are not smoothed over. Israel did not drive out the Geshurites or the [[entity:maacathites]], who live within Israel to this day. And [[entity:balaam]] son of Beor was killed with the sword among the rest of the slain.",
        scriptureRefs: [
          "Joshua 13:1",
          "Joshua 13:2-6",
          "Joshua 13:8-13",
          "Joshua 13:15-31",
        ],
        citations: [
          {
            sourceId: "hess-joshua",
            locator: "on Joshua 13:1-7",
            supportedClaim:
              "The chapter's opening reframes the second half of the book by itemising territory still unpossessed",
          },
        ],
        evidenceLabels: ["biblical-account"],
      },
      {
        id: "ch13-what-brought-us-here",
        kind: "what-brought-us-here",
        title: "What brought us here",
        body:
          "Chapter 12 closed with a ledger: two kings east of the [[entity:jordan-river]] under [[entity:moses]], thirty-one west of it under [[entity:joshua]]. No land was claimed in that list, only rulers beaten. Before this book opened, Moses had already defeated [[entity:sihon]] of [[entity:heshbon]] and [[entity:og]] of [[entity:region-bashan]] and assigned their territory to the two and a half eastern tribes. Chapter 13 picks up both threads at once. It repeats the eastern assignment as settled business, and it tells Joshua plainly what thirty-one victories did not achieve.",
        scriptureRefs: ["Joshua 12:1-6", "Joshua 12:7-24", "Numbers 32:33-42"],
        citations: [
          {
            sourceId: "kitchen-reliability",
            supportedClaim:
              "The book's victory summaries have to be read against its own admissions of unconquered territory",
          },
        ],
        evidenceLabels: ["biblical-account"],
      },
      {
        id: "ch13-surrounding-world",
        kind: "surrounding-world",
        title: "The surrounding world",
        body:
          "East of the [[entity:jordan-river]] the land rises in one step. From a valley floor below sea level an escarpment climbs to rolling tableland at roughly 700 to 900 m, open grain and grazing country cut by two great gorges: the [[entity:arnon-river]], the modern Wadi Mujib, and the [[entity:jabbok-river]], the Zarqa. That tableland is what [[entity:tribe-reuben]] receives, and Hebrew has a word for it, the level place. [[entity:region-gilead]] northward is different ground: higher, wetter, wooded, broken into ridges and steep valleys, hill country rather than plateau. [[entity:region-bashan]] beyond it is deep basalt soil with almost no natural edges, which is why the text describes Bashan by naming towns instead of tracing a line.\n\nWest, the five Philistine cities sit on the southern [[entity:region-coastal-plain]], three near the sea and two inland where the valleys of the [[entity:region-shephelah]] come down. Joshua 13:3 treats their five rulers as a present political fact. The distinctive material culture that archaeologists identify as Philistine appears in those cities around the early twelfth century, later than most reconstructions place these events. The tension is real, and this study does not resolve it.\n\n[[entity:moab]], immediately south of Reuben's plateau, is attested outside the Bible by the ninth-century Mesha stele, found at [[entity:dibon]]. That is centuries later, and it cannot confirm anything about the Late Bronze situation on this plateau.",
        scriptureRefs: ["Joshua 13:2-5", "Joshua 13:9-12"],
        citations: [
          {
            sourceId: "rainey-notley-sacred-bridge",
            supportedClaim:
              "The Transjordanian tableland, the Gilead highland and the Bashan plateau as distinct terrain, and the positions of the five Philistine cities",
          },
          {
            sourceId: "aharoni-land-of-bible",
            supportedClaim:
              "Regional terminology for the eastern tableland and for the southern coastal plain",
          },
          {
            sourceId: "stager-forging-identity",
            supportedClaim:
              "Philistine settlement on the southern coast is dated to the transition from the Late Bronze to the Iron Age",
          },
          {
            sourceId: "mesha-stele",
            supportedClaim:
              "A ninth-century Moabite royal inscription found at Dhiban attests the kingdom of Moab several centuries after Joshua",
          },
        ],
        evidenceLabels: ["externally-attested", "disputed", "reconstruction"],
        collapsedByDefault: true,
      },
      {
        id: "ch13-why-it-matters",
        kind: "why-it-matters",
        title: "Why it matters",
        body:
          "Chapter 12 counted thirty-one kings struck down. Chapter 13 opens by saying very much land remains to be possessed. Put those two facts in one breath, which is how the book arranges them, and they define the distinction that governs everything to chapter 21: beating a ruler in the field is not occupying his country, and being allotted ground is not living on it. Every boundary list that follows has to be read with 13:1 in mind.\n\nThere is a quieter claim as well. [[entity:tribe-levi]] receives no territory, and the chapter gives two reasons: the offerings made by fire are Levi's inheritance, and Yahweh himself is. A book preoccupied with land deliberately leaves one tribe landless.\n\nReformed readers typically take the distance between promise and possession as normal rather than as a failure of the promise: the grant is secure and entering it is progressive and contested. That is a Reformed emphasis and not the only Christian reading. Others hear these same verses first of all as indictment, and the chapter does not settle which tone is correct.",
        scriptureRefs: ["Joshua 13:1", "Joshua 13:6-7", "Joshua 13:14", "Joshua 13:33"],
        citations: [
          {
            sourceId: "woudstra-joshua",
            supportedClaim:
              "A Reformed covenantal reading holds the land grant secure while possession of it remains progressive",
          },
          {
            sourceId: "weinfeld-promise-land",
            supportedClaim:
              "The allotment texts work in the idiom of land grant and inheritance rather than of military occupation",
          },
          {
            sourceId: "kitchen-reliability",
            supportedClaim:
              "Joshua distinguishes disabling strikes against rulers from occupation of their territory",
          },
        ],
        evidenceLabels: ["theological-interpretation", "biblical-account"],
      },
      {
        id: "ch13-details-worth-noticing",
        kind: "details-worth-noticing",
        title: "Details worth noticing",
        body:
          "Verse 22 reports, without comment, that Israel killed [[entity:balaam]] son of Beor with the sword among the rest of their slain. The man who blessed Israel when he was hired to curse it dies inside a casualty clause in a chapter about boundaries, and Joshua offers no explanation at all.\n\n[[entity:tribe-reuben]]'s and [[entity:tribe-gad]]'s descriptions overlap. [[entity:heshbon]] heads Reuben's town list at verse 17 and turns up again in Gad's at verse 26, and Gilead falls to Gad while also appearing in the general eastern summary at verse 11. The text draws no line between the two tribes, so a map should not draw one either.\n\n[[entity:jazer]], which heads Gad's list, cannot be located. Candidates have been proposed in the hills north-west of modern Amman and none has been established, so it is absent from the map on purpose rather than by oversight.\n\nLevi's landlessness is stated twice, at verse 14 and verse 33, and the two statements differ. The first makes the offerings Levi's inheritance; the second makes Yahweh himself.",
        scriptureRefs: [
          "Joshua 13:11",
          "Joshua 13:14",
          "Joshua 13:17",
          "Joshua 13:22",
          "Joshua 13:25-26",
          "Joshua 13:33",
          "Numbers 31:8",
        ],
        citations: [
          {
            sourceId: "hess-joshua",
            locator: "on Joshua 13:22",
            supportedClaim:
              "The notice of Balaam's death repeats Numbers 31:8 and is left without comment in Joshua",
          },
          {
            sourceId: "rainey-notley-sacred-bridge",
            supportedClaim:
              "Jazer has no established identification despite several proposals in the hills of Gilead",
          },
          {
            sourceId: "butler-joshua",
            locator: "on Joshua 13:15-28",
            supportedClaim:
              "The Reuben and Gad descriptions overlap and the text supplies no boundary between them",
          },
        ],
        evidenceLabels: ["biblical-account", "reconstruction"],
        collapsedByDefault: true,
      },
      {
        id: "ch13-difficult-questions",
        kind: "difficult-questions",
        title: "Difficult questions",
        body:
          "How can [[entity:philistines]] organised around five cities be a present political fact here? The material culture identified as Philistine appears at [[entity:gaza]], [[entity:ashdod]], [[entity:ashkelon]], [[entity:gath]] and [[entity:ekron]] around the early twelfth century, later than most reconstructions of Joshua's campaigns. Several options are on the table: the name may be used broadly for coastal peoples, an earlier Aegean presence may simply be invisible in the pottery, or the list may carry a later writer's geography. We do not know which, and this study picks none of them.\n\nVerse 6 has Yahweh say of these peoples, 'I will drive them out from before the children of Israel'. Verse 13 says Israel did not drive out the [[entity:geshurites]] or the [[entity:maacathites]]. The book states both within eight verses and reconciles neither.\n\nAt [[entity:heshbon]], Tell Hisban has produced little Late Bronze material. That is not the same as evidence against the narrative, which would look like a thriving unconquered city, but it is not support either, and keeping those two apart matters more here than reaching a verdict.",
        scriptureRefs: ["Joshua 13:2-6", "Joshua 13:13", "Joshua 13:10"],
        citations: [
          {
            sourceId: "stager-forging-identity",
            supportedClaim:
              "The dating of Philistine settlement on the southern coastal plain",
          },
          {
            sourceId: "mazar-archaeology-land",
            supportedClaim:
              "Material evidence for Philistine settlement in the five-city area, and limited Late Bronze material at Tell Hisban",
          },
          {
            sourceId: "provan-long-longman",
            supportedClaim:
              "Absence of evidence and evidence against a reconstruction are different claims and must be weighed differently",
          },
          {
            sourceId: "mitchell-together-in-land",
            supportedClaim:
              "Joshua holds promises of dispossession alongside reports of coexistence without resolving the tension",
          },
        ],
        evidenceLabels: ["disputed", "reconstruction", "biblical-account"],
        collapsedByDefault: true,
      },
    ],
    discussionQuestions: [
      "Joshua 12 lists thirty-one defeated kings and Joshua 13:1 says very much land remains to be possessed. What is the book asking a reader to hold together?",
      "Yahweh tells Joshua to allot the Philistine plain and the Sidonian coast to Israel. What kind of act is an allotment, if the ground in question belongs to someone else?",
      "Reuben receives open tableland above the Arnon, Gad the wooded ridges of Gilead, and half of Manasseh the basalt plain of Bashan. How might three quite different landscapes shape three tribes differently?",
      "The chapter mentions in a single clause that Israel killed Balaam with the sword. Why might a chapter about boundaries include that, and what does it do to the tone?",
      "Levi is told twice that it has no land because the offerings and Yahweh himself are its inheritance. What does a landless tribe contribute to a book preoccupied with land?",
    ],
    relatedEntityIds: [
      "joshua",
      "moses",
      "balaam",
      "sihon",
      "og",
      "machir",
      "tribe-reuben",
      "tribe-gad",
      "tribe-manasseh-east",
      "tribe-levi",
      "philistines",
      "geshurites",
      "maacathites",
      "avvim",
      "sidonians",
      "canaanites",
      "amorites",
      "rephaim",
      "moab",
      "ammon",
      "gaza",
      "ashdod",
      "ashkelon",
      "gath",
      "ekron",
      "sidon",
      "misrephoth-maim",
      "baal-gad",
      "mount-hermon",
      "heshbon",
      "dibon",
      "ashtaroth",
      "edrei",
      "succoth",
      "jazer",
      "rabbah-ammon",
      "beth-peor",
      "mount-nebo",
      "arnon-river",
      "jabbok-river",
      "jordan-river",
      "sea-of-chinnereth",
      "salt-sea",
      "great-sea",
      "brook-of-egypt",
      "jericho",
      "region-gilead",
      "region-bashan",
      "region-moab-plateau",
      "region-lebanon",
      "region-coastal-plain",
      "region-shephelah",
      "region-jordan-valley",
    ],
    themeIds: ["land-and-inheritance", "obedience-and-failure", "promise-and-fulfillment"],
    wordCount: 548,
  },

  /* ================================================================== */
  /* Chapter 14                                                         */
  /* ================================================================== */
  {
    id: "ch14",
    number: 14,
    title: "Caleb's portion",
    summary:
      "Allotment west of the Jordan begins by lot under Eleazar, Joshua and the tribal heads, and is interrupted at once by Caleb, who recalls forty-five years and asks for the hill country where the Anakim live. Joshua gives him Hebron.",
    phase: "inheritance-and-life",
    scriptureRange: "Joshua 14:1-15",
    milestoneIds: [
      "ch14-allotment-by-lot-begins",
      "ch14-caleb-and-kadesh-barnea",
      "ch14-ask-for-the-hill-country",
      "ch14-hebron-given-to-caleb",
    ],
    sections: [
      {
        id: "ch14-at-a-glance",
        kind: "at-a-glance",
        title: "At a glance",
        body:
          "Allotment west of the [[entity:jordan-river]] begins: [[entity:eleazar]] the priest, [[entity:joshua]] and the heads of the tribes distribute by lot, as Yahweh had commanded through [[entity:moses]]. Before any tribe is named, [[entity:caleb]] son of [[entity:jephunneh]] the Kenizzite makes the longest speech in the book: forty when he scouted the land, eighty-five now, asking for the hill country where the [[entity:anakim]] live. Joshua blesses him and gives him [[entity:hebron]].",
        scriptureRefs: ["Joshua 14:1-5", "Joshua 14:6-12", "Joshua 14:13-15"],
        citations: [],
        evidenceLabels: ["biblical-account"],
      },
      {
        id: "ch14-walk-through",
        kind: "walk-through",
        title: "Walk through the chapter",
        body:
          "The chapter opens with procedure. [[entity:eleazar]] the priest, [[entity:joshua]] son of [[entity:nun]], and the heads of the fathers' houses distribute the inheritances by lot, as Yahweh [[ref:Numbers 26:52-56|had commanded through]] [[entity:moses]]. The arithmetic is spelled out: two and a half tribes already hold land east of the [[entity:jordan-river]], [[entity:tribe-levi]] gets towns with pasture but no territory, and [[entity:joseph]] counts as two tribes.\n\nThen everything stops before a single boundary is drawn. [[entity:tribe-judah]] comes to Joshua at [[entity:gilgal]], and [[entity:caleb]] son of [[entity:jephunneh]] the Kenizzite makes the longest speech any individual makes in this book. He was forty when Moses sent him from [[entity:kadesh-barnea]] to spy out the land. He brought back word as it was in his heart. His brothers made the heart of the people melt; he wholly followed Yahweh his God, and Moses swore that the land he had walked on would be his.\n\nNow Yahweh has kept him alive these forty-five years and he is eighty-five today, his strength for war what it was then. So: give me this hill country. The [[entity:anakim]] are there with great fortified cities, and it may be that Yahweh will be with him and he will drive them out.\n\nJoshua blesses him and gives him [[entity:hebron]], his inheritance to this day. Then the chapter closes: the land had rest from war.",
        scriptureRefs: ["Joshua 14:1-5", "Joshua 14:6-9", "Joshua 14:10-12", "Joshua 14:13-15"],
        citations: [
          {
            sourceId: "hess-joshua",
            locator: "on Joshua 14:6-15",
            supportedClaim:
              "Caleb's speech is the longest by any individual in Joshua and interrupts the allotment procedure before any tribal boundary is given",
          },
        ],
        evidenceLabels: ["biblical-account"],
      },
      {
        id: "ch14-what-brought-us-here",
        kind: "what-brought-us-here",
        title: "What brought us here",
        body:
          "Forty-five years earlier, by this chapter's own reckoning, [[entity:moses]] sent twelve men from [[entity:kadesh-barnea]] to look at the land. Ten came back describing fortified cities and giants and said it could not be taken. [[entity:caleb]] and [[entity:joshua]] disagreed, the people sided with the ten, and that generation died in the wilderness with the two dissenters excepted by name.\n\nCloser to hand, Joshua 11 has already reported that Joshua cut the [[entity:anakim]] off from the hill country, from [[entity:hebron]], [[entity:debir]] and [[entity:anab]], and that none were left in Israel's territory, only in [[entity:gaza]], [[entity:gath]] and [[entity:ashdod]]. Caleb now asks for that same hill country and speaks of the Anakim as still in it.",
        scriptureRefs: ["Numbers 13:25-33", "Numbers 14:20-24", "Deuteronomy 1:34-36", "Joshua 11:21-22"],
        citations: [
          {
            sourceId: "howard-joshua",
            supportedClaim:
              "Joshua 14 is constructed as the resolution of the scouting narrative of Numbers 13 and 14",
          },
          {
            sourceId: "butler-joshua",
            locator: "on Joshua 11:21-22 and 14:12",
            supportedClaim:
              "Joshua 11 reports the Anakim cut off from the hill country while Joshua 14 has Caleb speak of them as present",
          },
        ],
        evidenceLabels: ["biblical-account"],
      },
      {
        id: "ch14-surrounding-world",
        kind: "surrounding-world",
        title: "The surrounding world",
        body:
          "[[entity:hebron]] sits at roughly 900 m on the crest of the southern hill country, the highest of the significant towns on that ridge. The ridge is the country's spine and carries its main north to south road, running up from [[entity:beersheba]] through Hebron toward [[entity:jerusalem]] and [[entity:bethel]], so holding Hebron means holding the southern half of that route. Rain on the crest supports vines, olives and grain, which makes this farmed country rather than grazing country, and within a few kilometres the land falls away west into the [[entity:region-shephelah]] and east into the [[entity:region-wilderness-judah]].\n\nThe ancient site is Tell er-Rumeida, inside the modern city. Hebron is therefore one of the better identified places in the book: the name has stayed in continuous use, the mound lies where the name is, and excavation there has found Bronze Age settlement.\n\n[[entity:kadesh-barnea]], the wilderness base Caleb refers to, is usually placed at Tell el-Qudeirat in the north-eastern Sinai, chosen for its spring in country that otherwise has almost no reliable water. The fortress excavated at that site is Iron Age, later than the wilderness period, so the identification rests on the geography and the water rather than on remains from the right centuries.",
        scriptureRefs: ["Joshua 14:6", "Joshua 14:12-15"],
        citations: [
          {
            sourceId: "rainey-notley-sacred-bridge",
            supportedClaim:
              "Hebron's position on the southern ridge route, and the usual placement of Kadesh-barnea at Tell el-Qudeirat",
          },
          {
            sourceId: "rasmussen-zondervan-atlas",
            supportedClaim:
              "Elevations and agricultural character of the southern hill country ridge",
          },
          {
            sourceId: "mazar-archaeology-land",
            supportedClaim:
              "Bronze Age settlement at Tell er-Rumeida, and the Iron Age date of the excavated fortress at Tell el-Qudeirat",
          },
        ],
        evidenceLabels: ["externally-attested", "reconstruction"],
        collapsedByDefault: true,
      },
      {
        id: "ch14-why-it-matters",
        kind: "why-it-matters",
        title: "Why it matters",
        body:
          "This chapter is the book's answer to Numbers 13. The man who brought back the minority report receives, by name and in public, the exact ground he was willing to enter when almost nobody else was. The phrase attached to him recurs three times in nine verses, twice from his own mouth and once from the narrator: he wholly followed Yahweh. Joshua does not present that as courage in the abstract. It is a specific, checkable, forty-five-year record.\n\nThe chapter is also careful about what a grant is. [[entity:caleb]] receives [[entity:hebron]] as an inheritance and in the same breath says it may be that Yahweh will be with him and he will drive them out. Being given the hill country and holding the hill country stay distinct even here, in the most positive allotment scene in the book.\n\nReformed readers usually take Caleb as an instance of persevering faith in a promise not yet enjoyed, held across four decades of delay. That is a Reformed emphasis and not the only Christian reading; the text itself reports what he said and what he was given, and draws no moral.",
        scriptureRefs: ["Joshua 14:8", "Joshua 14:9", "Joshua 14:12", "Joshua 14:14"],
        citations: [
          {
            sourceId: "davis-joshua",
            supportedClaim:
              "A Reformed expositional reading treats Caleb as a study in perseverance across delay",
          },
          {
            sourceId: "woudstra-joshua",
            locator: "on Joshua 14:6-15",
            supportedClaim:
              "The repeated formula that Caleb wholly followed Yahweh carries the chapter's theological weight",
          },
          {
            sourceId: "creach-joshua",
            supportedClaim:
              "Caleb's conditional phrasing keeps the grant of Hebron distinct from its possession",
          },
        ],
        evidenceLabels: ["theological-interpretation", "biblical-account"],
      },
      {
        id: "ch14-details-worth-noticing",
        kind: "details-worth-noticing",
        title: "Details worth noticing",
        body:
          "[[entity:caleb]] approaches Joshua at [[entity:gilgal]], not at [[entity:shiloh]]. The remaining allotments in chapters 18 to 21 are transacted at Shiloh, so this scene still belongs to the earlier camp near the [[entity:jordan-river]].\n\nThe text calls him a Kenizzite twice, at verse 6 and verse 14, and [[entity:moses]] uses the same word of him at Numbers 32:12. Genesis places [[entity:kenaz]] in Esau's line, outside Israel's ancestry, and yet Caleb comes forward here at the head of [[entity:tribe-judah]]. Joshua never explains how both are true.\n\nForty-five years is one of very few internal interval figures anywhere in the book. It is the text's own chronology, anchored to nothing outside itself, and it is not convertible into dates.\n\nVerse 15 says Hebron's older name, Kiriath-arba, came from the greatest man among the [[entity:anakim]]. Joshua 15:13 names him Arba, the father of Anak.\n\nAnd the sentence that ends the chapter, then the land had rest from war, stands one chapter after there remains yet very much land to be possessed.",
        scriptureRefs: [
          "Joshua 14:6",
          "Joshua 14:10",
          "Joshua 14:14",
          "Joshua 14:15",
          "Joshua 15:13",
          "Joshua 13:1",
          "Numbers 32:12",
        ],
        citations: [
          {
            sourceId: "hess-joshua",
            locator: "on Joshua 14:6 and 14:14",
            supportedClaim:
              "The Kenizzite designation is applied to Caleb twice in this chapter and again in Numbers 32:12",
          },
          {
            sourceId: "butler-joshua",
            locator: "on Joshua 14:6",
            supportedClaim:
              "The Caleb scene is set at Gilgal, distinct from the Shiloh setting of the later allotments",
          },
          {
            sourceId: "hawk-joshua",
            supportedClaim:
              "Joshua repeatedly records outsiders inside Israel without smoothing the genealogical difficulty",
          },
        ],
        evidenceLabels: ["biblical-account"],
        collapsedByDefault: true,
      },
      {
        id: "ch14-difficult-questions",
        kind: "difficult-questions",
        title: "Difficult questions",
        body:
          "The Kenizzite problem has no solution inside the text. Genesis 36:11 lists [[entity:kenaz]] among the descendants of Esau, which puts that line outside Israel's ancestry, and Joshua twice attaches the label to [[entity:caleb]] while placing him at the head of [[entity:tribe-judah]]. Proposals exist: a Kenizzite clan absorbed into Judah, two unrelated men named Kenaz, a genealogy reckoned by adoption. The text states both facts and explains neither, and this study leaves it standing.\n\nThe forty-five years invites arithmetic the book never performs. Deuteronomy 2:14 gives thirty-eight years from [[entity:kadesh-barnea]] to the crossing of the Zered, which would leave roughly seven years for everything in Joshua 1 to 12. That is a reasonable inference. It is also an inference, not a statement, and Joshua gives no campaign chronology of its own.\n\n[[entity:hebron]] is given to Caleb here, granted again at Joshua 15:13-14, and named a Levitical city of refuge at Joshua 21:11-12, where Caleb keeps its fields and villages. Whether those are three notices of one grant or a record of later adjustment, we do not know.",
        scriptureRefs: [
          "Joshua 14:6",
          "Joshua 14:10",
          "Joshua 14:13",
          "Joshua 15:13-14",
          "Joshua 21:11-12",
          "Genesis 36:11",
          "Deuteronomy 2:14",
        ],
        citations: [
          {
            sourceId: "hess-joshua",
            locator: "on Joshua 14:6-14",
            supportedClaim:
              "The tension between Caleb's Kenizzite designation and his place in Judah is noted and not resolved by the text",
          },
          {
            sourceId: "hawk-joshua",
            supportedClaim:
              "Caleb belongs with the book's pattern of outsiders counted inside Israel",
          },
          {
            sourceId: "butler-joshua",
            locator: "on Joshua 14:10",
            supportedClaim:
              "The forty-five year figure is the book's only interval of its kind and supports no absolute chronology",
          },
          {
            sourceId: "haran-levitical-cities",
            supportedClaim:
              "Hebron functions both as Caleb's inheritance and as a Levitical city, with its surrounding fields retained by Caleb",
          },
        ],
        evidenceLabels: ["disputed", "biblical-account", "reconstruction"],
        collapsedByDefault: true,
      },
    ],
    discussionQuestions: [
      "Caleb asks for the one part of the land that frightened the other ten scouts. Why might the dissenting scout want exactly that ground?",
      "He says it may be that Yahweh will be with him and he will drive them out. What does that phrasing suggest about how he understands the gift he has just received?",
      "The chapter ends with the land having rest from war, one chapter after the statement that very much land remains to be possessed. How would you hold those two sentences together?",
      "The text calls Caleb a Kenizzite and also puts him at the head of Judah, without explaining either. What does that do to the question of who counts as Israel?",
      "Forty-five years passed between the promise and the portion. What does the book gain by giving that number rather than leaving the gap vague?",
    ],
    relatedEntityIds: [
      "caleb",
      "joshua",
      "moses",
      "eleazar",
      "nun",
      "jephunneh",
      "kenaz",
      "joseph",
      "anakim",
      "kenizzites",
      "tribe-judah",
      "tribe-levi",
      "tribe-ephraim",
      "tribe-manasseh-west",
      "hebron",
      "gilgal",
      "shiloh",
      "kadesh-barnea",
      "debir",
      "anab",
      "gaza",
      "gath",
      "ashdod",
      "beersheba",
      "jerusalem",
      "bethel",
      "jordan-river",
      "region-hill-country-judah",
      "region-shephelah",
      "region-wilderness-judah",
      "region-negev",
    ],
    themeIds: ["promise-and-fulfillment", "land-and-inheritance", "outsiders-and-belonging"],
    wordCount: 586,
  },
];

export const MILESTONES: Milestone[] = [
  /* ---------------------------- Chapter 13 --------------------------- */
  {
    id: "ch13-land-that-remains",
    chapter: 13,
    order: 1,
    title: "Very much land remains",
    scriptureRefs: ["Joshua 13:1-7"],
    narrative:
      "Yahweh's opening word to an aging [[entity:joshua]] is a list of what Israel does not have. All the regions of the [[entity:philistines]] and all the [[entity:geshurites]]; the coast from the Shihor before Egypt to the border of [[entity:ekron]]; the five Philistine rulers of [[entity:gaza]], [[entity:ashdod]], [[entity:ashkelon]], [[entity:gath]] and Ekron; the [[entity:avvim]] to the south; Canaanite and Sidonian land up to the Amorite border; the Gebalites and all [[entity:region-lebanon]] eastward from [[entity:baal-gad]] under [[entity:mount-hermon]] to the entrance of Hamath; every hill dweller as far as [[entity:misrephoth-maim]], all the [[entity:sidonians]].\n\nThat is the whole southern plain and the whole north. Then the instruction: allot it to Israel for an inheritance anyway, because Yahweh says he will drive them out. [[entity:joshua]] is to divide land Israel has never entered, on the strength of a promise rather than of a conquest.\n\nNothing here is a march and nothing is a victory. It is an inventory of absence, which is why the map shows scope and not movement.",
    entityIds: [
      "joshua",
      "philistines",
      "geshurites",
      "avvim",
      "sidonians",
      "canaanites",
      "amorites",
      "gaza",
      "ashdod",
      "ashkelon",
      "gath",
      "ekron",
      "sidon",
      "misrephoth-maim",
      "baal-gad",
      "mount-hermon",
      "great-sea",
      "brook-of-egypt",
      "region-lebanon",
      "region-coastal-plain",
      "region-shephelah",
    ],
    mapFeatureIds: [
      "remain-philistia",
      "remain-phoenician-coast",
      "remain-lebanon",
      "site-gaza",
      "site-ashdod",
      "site-ashkelon",
      "site-ekron",
      "site-gath",
      "site-sidon",
      "site-baal-gad",
      "site-mount-hermon",
      "site-great-sea",
      "site-brook-of-egypt",
      "region-coastal-plain",
    ],
    mapCaption:
      "The land Joshua 13 says still remains: the Philistine plain in the south, the Sidonian coast, and Lebanon up to Mount Hermon.",
    whatChanged:
      "Nothing is gained. What appears is the size of the gap: the southern coastal plain, the northern coast, and the mountain zone behind it, none of it possessed and all of it inside the land Joshua is told to allot.",
    geographyExplanation:
      "These are the two richest and most travelled parts of the country, and Israel holds neither. The southern [[entity:region-coastal-plain]] is flat, well watered and in places more than twenty kilometres wide, carrying the main highway between Egypt and the north; the five Philistine cities sit on it, three within reach of the sea and two inland where the valleys of the [[entity:region-shephelah]] come down. The northern coast has the opposite shape, a narrow shelf pinched between mountain and water, which is what made [[entity:sidon]] and its neighbours maritime rather than agricultural. Behind it the Lebanon range runs well over 2,000 m and [[entity:mount-hermon]] above 2,800 m. Israel's settlement in this period is in the hill country, which is the poorest and least contested ground on this list. A family on the ridge could see the coastal highway and never use it.",
    sequenceType: "summary",
    viewport: {
      center: [34.9, 32.3],
      zoom: 8,
      bounds: [
        [33.8, 31.0],
        [36.0, 33.6],
      ],
    },
    citations: [
      {
        sourceId: "hess-joshua",
        locator: "on Joshua 13:1-6",
        supportedClaim:
          "Joshua 13 lists Philistine, Sidonian and Lebanese territory among land not yet possessed, and instructs that it be allotted regardless",
      },
      {
        sourceId: "rainey-notley-sacred-bridge",
        supportedClaim:
          "The coastal highway across the southern plain, the positions of the five Philistine cities, and the narrow shelf of the Phoenician coast",
      },
      {
        sourceId: "stager-forging-identity",
        supportedClaim:
          "Highland settlement and the agricultural realities behind Israel's position away from the plain",
      },
    ],
    evidenceLabels: ["biblical-account", "externally-attested", "disputed"],
  },
  {
    id: "ch13-geshur-and-maacah-remain",
    chapter: 13,
    order: 2,
    title: "Geshur and Maacah live within Israel",
    scriptureRefs: ["Joshua 13:11-14"],
    narrative:
      "The summary of the eastern territory reaches a long way north. It takes in [[entity:region-gilead]], the border of the [[entity:geshurites]] and [[entity:maacathites]], all of [[entity:mount-hermon]], and all of [[entity:region-bashan]] as far as Salecah, which was [[entity:og]]'s kingdom.\n\nThen verse 13, in one flat sentence: nevertheless the children of Israel did not drive out the Geshurites or the Maacathites, but Geshur and Maacath live within Israel to this day. The two groups are inside the described extent of Israel's eastern inheritance and are also, by the book's own statement, still there.\n\nThe next verse adds that [[entity:tribe-levi]] receives no inheritance, because the offerings made by fire to Yahweh are its portion. Within four verses the chapter names ground assigned but not taken, and a tribe given no ground at all.",
    entityIds: [
      "geshurites",
      "maacathites",
      "og",
      "tribe-manasseh-east",
      "tribe-levi",
      "mount-hermon",
      "sea-of-chinnereth",
      "region-bashan",
      "region-gilead",
    ],
    mapFeatureIds: [
      "remain-geshur-maacah",
      "allot-manasseh-east",
      "site-mount-hermon",
      "site-sea-of-chinnereth",
      "region-bashan",
    ],
    mapCaption:
      "Geshur and Maacah, north-east of the lake and under Hermon: inside the described eastern inheritance, and not dispossessed.",
    whatChanged:
      "An unpossessed zone appears underneath eastern Manasseh's assigned area, so the two overlap on the map. Levi appears nowhere at all, because the text gives it nothing to draw.",
    geographyExplanation:
      "This is the far north-east corner of the land described in Joshua, the ground between the [[entity:sea-of-chinnereth]] and the foot of [[entity:mount-hermon]]. It is high, well watered by Hermon's snowmelt, and it carries the approach from Damascus down to the lake, which makes it valuable and hard to close off. Neither Geshur nor Maacah has a described boundary anywhere in the text, so the shaded zone marks roughly where rather than how far. That vagueness is itself informative: the book can name the peoples it did not remove without being able to say where their land stopped, which is the normal condition of a frontier as against a border.",
    sequenceType: "summary",
    viewport: {
      center: [35.8, 33.05],
      zoom: 9,
      bounds: [
        [35.45, 32.65],
        [36.15, 33.45],
      ],
    },
    citations: [
      {
        sourceId: "hess-joshua",
        locator: "on Joshua 13:11-14",
        supportedClaim:
          "Joshua 13:13 states that the Geshurites and Maacathites were not driven out and continued living within Israel",
      },
      {
        sourceId: "rainey-notley-sacred-bridge",
        supportedClaim:
          "The position of Geshur and Maacah north-east of the Sea of Chinnereth, below Hermon, without described boundaries",
      },
      {
        sourceId: "haran-levitical-cities",
        supportedClaim:
          "Levi's provision is towns with pasture rather than a territorial inheritance",
      },
    ],
    evidenceLabels: ["biblical-account", "reconstruction"],
  },
  {
    id: "ch13-reuben-on-the-plateau",
    chapter: 13,
    order: 3,
    title: "Reuben on the southern tableland",
    scriptureRefs: ["Joshua 13:15-23"],
    narrative:
      "[[entity:moses]], not [[entity:joshua]], gave this. [[entity:tribe-reuben]]'s area runs from Aroer on the lip of the [[entity:arnon-river]] gorge north across the tableland: the plain by Medeba, [[entity:heshbon]] with all its towns on the level ground, [[entity:dibon]], Bamoth Baal, Kiriathaim, Sibmah, [[entity:beth-peor]], and the slopes of Pisgah below [[entity:mount-nebo]]. Its western border is simply the bank of the [[entity:jordan-river]].\n\nAll of this had been [[entity:sihon]]'s kingdom. The text notes that Moses struck Sihon along with five Midianite chiefs, and then adds in one clause, with no comment whatever, that Israel also killed [[entity:balaam]] son of Beor with the sword among the rest of their slain.\n\nThis is an assignment, not a campaign. Reuben is receiving ground taken before the book of Joshua began, and it is the only allotment in the book whose southern edge is a genuine physical barrier.",
    entityIds: [
      "moses",
      "joshua",
      "balaam",
      "sihon",
      "tribe-reuben",
      "heshbon",
      "dibon",
      "beth-peor",
      "mount-nebo",
      "arnon-river",
      "jordan-river",
      "salt-sea",
      "jericho",
      "moab",
      "region-moab-plateau",
      "region-jordan-valley",
    ],
    mapFeatureIds: [
      "allot-reuben",
      "site-heshbon",
      "site-dibon",
      "site-beth-peor",
      "site-mount-nebo",
      "site-arnon-river",
      "site-salt-sea",
      "region-moab-plateau",
    ],
    mapCaption:
      "Reuben's assigned area: the tableland between the Arnon gorge and the plains of Moab opposite Jericho.",
    whatChanged:
      "An approximate area appears east of the Jordan, from the Arnon north to the plains of Moab. It records an assignment Moses made before this book opened; nothing here is newly conquered.",
    geographyExplanation:
      "Reuben's ground is a plateau, and Hebrew has a word for it that means the level place. It sits at roughly 700 to 800 m, catching just enough rain along its western edge for grain and thinning eastward into steppe and then desert. Its southern limit is the [[entity:arnon-river]], the modern Wadi Mujib, a canyon several hundred metres deep, which works as a border precisely because crossing it costs a day rather than an hour. Its western limit is the escarpment falling to the [[entity:jordan-river]], more than a kilometre of descent within a few horizontal kilometres, with [[entity:mount-nebo]] on the rim looking across at [[entity:jericho]]. Open, exposed, excellent for flocks, and almost impossible to hold: there are no natural strongpoints on a tableland, which is one reason this particular ground is fought over again long after Joshua.",
    sequenceType: "allotment",
    viewport: {
      center: [35.75, 31.65],
      zoom: 9,
      bounds: [
        [35.4, 31.35],
        [36.1, 31.98],
      ],
    },
    citations: [
      {
        sourceId: "hess-joshua",
        locator: "on Joshua 13:15-23",
        supportedClaim:
          "Reuben's description is built from towns on the tableland with the Arnon and the Jordan as its limits",
      },
      {
        sourceId: "rainey-notley-sacred-bridge",
        supportedClaim:
          "The Arnon gorge as a physical barrier and boundary, and the character of the tableland north of it",
      },
      {
        sourceId: "mesha-stele",
        supportedClaim:
          "A ninth-century Moabite king records holding towns on this plateau, including Medeba and Dibon, centuries after Joshua",
      },
    ],
    evidenceLabels: ["biblical-account", "reconstruction", "externally-attested"],
  },
  {
    id: "ch13-gad-in-gilead",
    chapter: 13,
    order: 4,
    title: "Gad in Gilead and the valley",
    scriptureRefs: ["Joshua 13:24-28"],
    narrative:
      "[[entity:tribe-gad]]'s portion opens with [[entity:jazer]] and all the cities of [[entity:region-gilead]], then half the land of the children of [[entity:ammon]] as far as Aroer near [[entity:rabbah-ammon]], then a run of places from [[entity:heshbon]] to Ramath Mizpeh and Betonim, and from Mahanaim to the border of Debir. Down in the valley it takes Beth Haram, Beth Nimrah, [[entity:succoth]] and Zaphon, the remainder of [[entity:sihon]]'s kingdom, with the bank of the [[entity:jordan-river]] as its western edge and the far end of the [[entity:sea-of-chinnereth]] as its northern reach.\n\nTwo things in that list are worth slowing down for. Gad is described partly by towns and partly by region names, which makes it the least drawable of the three eastern portions. And it overlaps Reuben: [[entity:heshbon]] stands in both lists, and the text never draws a line between the tribes. The reach toward Ammon is also careful, stopping at a border Deuteronomy had told Israel not to cross.",
    entityIds: [
      "tribe-gad",
      "tribe-reuben",
      "sihon",
      "ammon",
      "jazer",
      "heshbon",
      "succoth",
      "rabbah-ammon",
      "jabbok-river",
      "jordan-river",
      "sea-of-chinnereth",
      "region-gilead",
      "region-jordan-valley",
    ],
    mapFeatureIds: [
      "allot-gad",
      "site-succoth",
      "site-rabbah-ammon",
      "site-heshbon",
      "site-jabbok-river",
      "site-sea-of-chinnereth",
      "site-jordan-river",
      "region-gilead",
    ],
    mapCaption:
      "Gad's assigned area: the Gilead highland astride the Jabbok, plus a strip of valley floor along the Jordan.",
    whatChanged:
      "A second approximate area appears north of Reuben's, overlapping it around Heshbon. The overlap is drawn rather than tidied away, because the text supplies no boundary between the two tribes.",
    geographyExplanation:
      "[[entity:region-gilead]] is the best watered country east of the river, and the least like the plateau below it. Rainfall on its western ridges rivals the Judean hills, and it carried real forest in antiquity, which is why the text can speak of the woods of Gilead. The [[entity:jabbok-river]], the modern Zarqa, cuts it in half in a gorge that a traveller has to descend and climb rather than cross, and the King's Highway runs north to south along the plateau shoulder to the east. Gad's territory therefore spans three quite different bands within perhaps thirty kilometres: valley floor below sea level along the [[entity:jordan-river]], wooded ridge rising past 1,000 m, and the dry eastern rim facing [[entity:rabbah-ammon]]. A tribe holding that has grazing, timber and grain, and three frontiers to watch.",
    sequenceType: "allotment",
    viewport: {
      center: [35.8, 32.1],
      zoom: 9,
      bounds: [
        [35.4, 31.75],
        [36.2, 32.55],
      ],
    },
    citations: [
      {
        sourceId: "hess-joshua",
        locator: "on Joshua 13:24-28",
        supportedClaim:
          "Gad's inheritance is described by a mixture of town names and region names, and overlaps Reuben's list at Heshbon",
      },
      {
        sourceId: "rainey-notley-sacred-bridge",
        supportedClaim:
          "Gilead's rainfall and woodland, the Jabbok gorge as an internal divider, and the line of the King's Highway",
      },
      {
        sourceId: "aharoni-land-of-bible",
        supportedClaim:
          "The eastern allotments are reconstructed from region names rather than from traceable boundary points",
      },
    ],
    evidenceLabels: ["biblical-account", "reconstruction"],
  },
  {
    id: "ch13-half-manasseh-in-bashan",
    chapter: 13,
    order: 5,
    title: "Half of Manasseh in Bashan",
    scriptureRefs: ["Joshua 13:29-33"],
    narrative:
      "The third eastern portion goes to the half-tribe, [[entity:tribe-manasseh-east]]. From Mahanaim it covers all of [[entity:region-bashan]], all the kingdom of [[entity:og]], and the villages of Jair, which the text counts as sixty towns. Half of [[entity:region-gilead]] goes with it, together with [[entity:ashtaroth]] and [[entity:edrei]], Og's two royal cities, and all of it is for the children of [[entity:machir]] son of Manasseh.\n\nThe chapter then closes twice over. First a formula: these are the inheritances [[entity:moses]] distributed in the plains of Moab, beyond the [[entity:jordan-river]] at [[entity:jericho]], eastward. Then the last verse, repeating what verse 14 already said, that Moses gave no inheritance to [[entity:tribe-levi]], because Yahweh the God of Israel is their inheritance.\n\nSixty towns are claimed and not one of them is described by a boundary. This is the vaguest allotment in the book.",
    entityIds: [
      "tribe-manasseh-east",
      "og",
      "machir",
      "moses",
      "tribe-levi",
      "ashtaroth",
      "edrei",
      "jordan-river",
      "jericho",
      "sea-of-chinnereth",
      "mount-hermon",
      "region-bashan",
      "region-gilead",
      "region-moab-plateau",
      "rephaim",
    ],
    mapFeatureIds: [
      "allot-manasseh-east",
      "site-ashtaroth",
      "site-edrei",
      "site-sea-of-chinnereth",
      "site-mount-hermon",
      "region-bashan",
      "region-gilead",
    ],
    mapCaption:
      "Eastern Manasseh's assigned area in Bashan, drawn schematically: the text names regions and royal cities, never a boundary.",
    whatChanged:
      "The last of the three eastern areas appears, and it is the loosest. Its outline is marked schematic because the description gives almost nothing to interpolate between.",
    geographyExplanation:
      "[[entity:region-bashan]] is basalt country, and that single fact explains the allotment's shape. Lava flows off the Hauran left deep dark soil on an open plateau at roughly 500 to 700 m, the best grain land anywhere in the region and proverbially good for cattle. It also left almost no natural boundaries: no gorge, no ridge, no coastline, nothing for a boundary description to hold on to. So the text names [[entity:ashtaroth]] and [[entity:edrei]] and counts sixty villages instead of tracing a line, and the map can only answer roughly where. The open ground that makes Bashan rich also makes it indefensible, and it lies directly on the route south from Damascus, which is why this corner keeps changing hands.",
    sequenceType: "allotment",
    viewport: {
      center: [36.0, 32.8],
      zoom: 9,
      bounds: [
        [35.5, 32.3],
        [36.5, 33.25],
      ],
    },
    citations: [
      {
        sourceId: "hess-joshua",
        locator: "on Joshua 13:29-33",
        supportedClaim:
          "Eastern Manasseh's inheritance is described by region names, royal cities and a count of villages rather than by boundaries",
      },
      {
        sourceId: "rainey-notley-sacred-bridge",
        supportedClaim:
          "Bashan's basalt soils, its openness, and its position on the route south from Damascus",
      },
      {
        sourceId: "aharoni-land-of-bible",
        supportedClaim:
          "Bashan has few natural limits, so its extent in the biblical descriptions is indicative rather than bounded",
      },
    ],
    evidenceLabels: ["biblical-account", "reconstruction"],
  },

  /* ---------------------------- Chapter 14 --------------------------- */
  {
    id: "ch14-allotment-by-lot-begins",
    chapter: 14,
    order: 1,
    title: "Distribution west of the Jordan begins",
    scriptureRefs: ["Joshua 14:1-5"],
    narrative:
      "The second half of the book changes its business. [[entity:eleazar]] the priest, [[entity:joshua]] son of [[entity:nun]], and the heads of the fathers' houses begin distributing inheritances in the land of Canaan by lot, as Yahweh had commanded through [[entity:moses]].\n\nThe text pauses to do the arithmetic. Two and a half tribes already have their land east of the [[entity:jordan-river]], given by Moses. [[entity:tribe-levi]] receives no inheritance among the rest, only towns to live in with pasture for its livestock. The sons of [[entity:joseph]] count as two tribes, [[entity:tribe-ephraim]] and [[entity:tribe-manasseh-west]], which keeps the total at twelve portions while nine and a half tribes remain to be settled west of the river.\n\nNo one moves in these verses and nothing is taken. The map can only show the field of operation: the country west of the Jordan, which is now to be divided by lot rather than by conquest.",
    entityIds: [
      "eleazar",
      "joshua",
      "nun",
      "moses",
      "joseph",
      "tribe-levi",
      "tribe-ephraim",
      "tribe-manasseh-west",
      "tribe-judah",
      "jordan-river",
      "gilgal",
      "region-hill-country-judah",
      "region-hill-country-ephraim",
    ],
    mapFeatureIds: [
      "allot-levi-none",
      "site-gilgal",
      "site-jordan-river",
      "region-hill-country-judah",
      "region-hill-country-ephraim",
    ],
    mapCaption:
      "The ground still to be divided: the hill country west of the Jordan, with the camp at Gilgal where the distribution begins.",
    whatChanged:
      "No territory changes hands. A procedure starts: distribution by lot, overseen by a priest, a leader and the tribal heads, with Levi marked as receiving towns rather than land.",
    geographyExplanation:
      "Everything from here to chapter 19 concerns the land west of the [[entity:jordan-river]], and the bulk of what Israel can realistically expect to hold is the central spine: the [[entity:region-hill-country-judah]] and the [[entity:region-hill-country-ephraim]]. That is not an accident of the lot. The hill country is limestone ridge at 700 to 1,000 m, cut by short steep valleys, thin on soil and dependent on rain rather than rivers, and it is the ground the chariot powers of the plains had the least interest in. The plains and the great valleys are richer, which is exactly why they are held by others. The camp is still at [[entity:gilgal]] near the river at this stage, not yet at [[entity:shiloh]], so the distribution is being run from the valley floor.",
    sequenceType: "summary",
    viewport: {
      center: [35.2, 31.95],
      zoom: 8,
      bounds: [
        [34.6, 31.0],
        [35.75, 32.6],
      ],
    },
    citations: [
      {
        sourceId: "woudstra-joshua",
        locator: "on Joshua 14:1-5",
        supportedClaim:
          "The allotment section opens with a statement of procedure and personnel rather than with a boundary",
      },
      {
        sourceId: "haran-levitical-cities",
        supportedClaim:
          "Levi is provided for by towns with surrounding pasture instead of a tribal territory",
      },
      {
        sourceId: "rainey-notley-sacred-bridge",
        supportedClaim:
          "The central hill country is the least contested ground in the land, in contrast with the plains and valleys",
      },
    ],
    evidenceLabels: ["biblical-account", "reconstruction"],
  },
  {
    id: "ch14-caleb-and-kadesh-barnea",
    chapter: 14,
    order: 2,
    title: "Forty-five years back to Kadesh-barnea",
    scriptureRefs: ["Joshua 14:6-9"],
    narrative:
      "[[entity:tribe-judah]] comes to [[entity:joshua]] at [[entity:gilgal]], and [[entity:caleb]] son of [[entity:jephunneh]] the Kenizzite opens by reaching back decades. You know what Yahweh said to [[entity:moses]] about me and about you at [[entity:kadesh-barnea]]. I was forty when Moses sent me from there to spy out the land. I brought him word again as it was in my heart.\n\nThen the hard part, stated without softening. My brothers who went up with me made the heart of the people melt, but I wholly followed Yahweh my God. And Moses swore that day that the land Caleb had walked on would be an inheritance for him and his children forever, for the same reason.\n\nThis milestone is memory, not movement. The map looks south to the wilderness base the speech names and to the ground the speech is about, and nothing on it happens now.",
    entityIds: [
      "caleb",
      "joshua",
      "moses",
      "jephunneh",
      "kenizzites",
      "tribe-judah",
      "kadesh-barnea",
      "gilgal",
      "hebron",
      "region-negev",
      "region-hill-country-judah",
    ],
    mapFeatureIds: [
      "site-kadesh-barnea",
      "site-gilgal",
      "site-hebron",
      "region-negev",
      "region-hill-country-judah",
    ],
    mapCaption:
      "Caleb's speech at Gilgal reaches back to Kadesh-barnea in the south and forward to the hill country around Hebron.",
    whatChanged:
      "Nothing on the ground. A claim is entered: [[ref:Numbers 14:24|an oath made at Kadesh-barnea forty-five years earlier]] is put on the record in front of Joshua and the men of Judah.",
    geographyExplanation:
      "[[entity:kadesh-barnea]] lies far to the south-west, in dry country beyond the [[entity:region-negev]], and it is a place at all because of water: the usual identification is Tell el-Qudeirat, chosen for its spring. From there the land Caleb was sent to scout begins with the Negev and then rises into the [[entity:region-hill-country-judah]], where [[entity:hebron]] sits on the crest. The distance from Kadesh-barnea to Hebron is on the order of 120 km, and the climb is from desert basin to nearly 900 m. That is the journey the speech assumes twice: once as a scouting trip made at forty, once as the forty-five year wait between the oath and this conversation at [[entity:gilgal]] in the Jordan valley, which is itself below sea level.",
    sequenceType: "retrospective",
    viewport: {
      center: [34.98, 31.28],
      zoom: 8,
      bounds: [
        [34.25, 30.5],
        [35.7, 32.0],
      ],
    },
    citations: [
      {
        sourceId: "hess-joshua",
        locator: "on Joshua 14:6-9",
        supportedClaim:
          "Caleb's speech grounds his claim in the oath Moses swore at Kadesh-barnea and in his own dissent from the other scouts",
      },
      {
        sourceId: "rainey-notley-sacred-bridge",
        supportedClaim:
          "The position of Kadesh-barnea in the arid south-west and the route from there up into the Judean hill country",
      },
      {
        sourceId: "howard-joshua",
        supportedClaim:
          "The chapter functions as the settlement of an account opened in Numbers 13 and 14",
      },
    ],
    evidenceLabels: ["biblical-account", "reconstruction"],
  },
  {
    id: "ch14-ask-for-the-hill-country",
    chapter: 14,
    order: 3,
    title: "Give me this hill country",
    scriptureRefs: ["Joshua 14:10-12"],
    narrative:
      "[[entity:caleb]] states his age and his condition in his own words, and the text supplies nothing beyond them. Yahweh has kept him alive these forty-five years. He is eighty-five today. As his strength was in the day Moses sent him, so is his strength now, for war and for going out and coming in.\n\nThen the request, and it is not a modest one: now therefore give me this hill country, of which Yahweh spoke that day. He names the reason it frightened everyone else in the same sentence. You heard how the [[entity:anakim]] were there, with great and fortified cities.\n\nHis last clause is conditional rather than confident. It may be that Yahweh will be with me, and I shall drive them out, as Yahweh said. The one scout who said the land could be taken does not claim he will take it on his own account.",
    entityIds: [
      "caleb",
      "joshua",
      "moses",
      "anakim",
      "tribe-judah",
      "hebron",
      "debir",
      "anab",
      "gilgal",
      "region-hill-country-judah",
    ],
    mapFeatureIds: [
      "site-hebron",
      "site-debir",
      "site-anab",
      "site-gilgal",
      "region-hill-country-judah",
    ],
    mapCaption:
      "The hill country Caleb asks for, around Hebron, Debir and Anab. He is still standing at Gilgal while he asks.",
    whatChanged:
      "Nothing is occupied and no one marches. A request is made and the object of it becomes visible: the southern hill country, the Anakim country of Joshua 11, and the most defensible ground in the land.",
    geographyExplanation:
      "The ground Caleb asks for is the reason the request is notable. The southern [[entity:region-hill-country-judah]] is high, broken country on limestone, with [[entity:hebron]] near 900 m on the crest and [[entity:debir]] and [[entity:anab]] on the slopes running south-west toward the [[entity:region-shephelah]]. Narrow approaches and steep valleys make it poor country for chariots and good country for walled towns on hilltops, which is exactly what makes the great fortified cities he mentions a real problem for an attacker. It is also, once held, the hardest part of the land to take back. Caleb is asking for terrain that is difficult in proportion to its value, and he is asking for it from the valley floor at [[entity:gilgal]], roughly 1,100 m below the town he names.",
    sequenceType: "event",
    viewport: {
      center: [35.1, 31.6],
      zoom: 10,
    },
    citations: [
      {
        sourceId: "hess-joshua",
        locator: "on Joshua 14:10-12",
        supportedClaim:
          "Caleb's request is for the Anakim hill country and is phrased conditionally rather than as an assurance",
      },
      {
        sourceId: "rasmussen-zondervan-atlas",
        supportedClaim:
          "The elevation and broken terrain of the southern Judean hill country and the positions of Debir and Anab",
      },
      {
        sourceId: "creach-joshua",
        supportedClaim:
          "The conditional clause in Caleb's request keeps the outcome with Yahweh rather than with Caleb's strength",
      },
    ],
    evidenceLabels: ["biblical-account", "reconstruction"],
  },
  {
    id: "ch14-hebron-given-to-caleb",
    chapter: 14,
    order: 4,
    title: "Hebron given to Caleb",
    scriptureRefs: ["Joshua 14:13-15"],
    narrative:
      "[[entity:joshua]] blesses him and gives [[entity:hebron]] to [[entity:caleb]] son of [[entity:jephunneh]] for an inheritance. The narrator repeats the reason in his own voice: Hebron became Caleb's inheritance to this day because he wholly followed Yahweh, the God of Israel.\n\nA note on the name follows. Hebron was formerly Kiriath-arba, called after the greatest man among the [[entity:anakim]], which leaves the town carrying the memory of the people who made it frightening. Then the chapter's last sentence: and the land had rest from war.\n\nThis is a grant, and the map marks it as one. The first named portion west of the [[entity:jordan-river]] goes to an individual rather than a tribe, inside what will become [[entity:tribe-judah]]'s territory, and the text has already said the driving out is still ahead of him.",
    entityIds: [
      "joshua",
      "caleb",
      "jephunneh",
      "anakim",
      "tribe-judah",
      "hebron",
      "jordan-river",
      "region-hill-country-judah",
    ],
    mapFeatureIds: [
      "site-hebron",
      "allot-judah",
      "region-hill-country-judah",
    ],
    mapCaption:
      "Hebron, granted to Caleb as an inheritance, inside the territory later allotted to Judah.",
    whatChanged:
      "The first portion west of the Jordan is assigned, and it is assigned to a person rather than a tribe. Hebron is Caleb's by grant. Taking it from the Anakim is still future in the text's own words.",
    geographyExplanation:
      "[[entity:hebron]] is the natural centre of the southern hill country rather than one town among many. It sits at roughly 900 m where the ridge road passes, with good soil in the surrounding basins for vines and olives, and the ancient mound is Tell er-Rumeida within the modern city, where excavation has found Bronze Age settlement. That combination of height, water, farmland and road makes it the obvious seat of whoever controls the south, which is why it appears in the conquest lists, in the allotment to Caleb, and later as a Levitical city of refuge. Granting Hebron to one man therefore places a single household at the hinge of the southern [[entity:region-hill-country-judah]], inside what becomes [[entity:tribe-judah]]'s share.",
    sequenceType: "allotment",
    viewport: {
      center: [35.0994, 31.5236],
      zoom: 10,
    },
    citations: [
      {
        sourceId: "hess-joshua",
        locator: "on Joshua 14:13-15",
        supportedClaim:
          "Hebron is granted to Caleb personally, and the narrator repeats the reason given in Caleb's speech",
      },
      {
        sourceId: "rainey-notley-sacred-bridge",
        supportedClaim:
          "Hebron identified with Tell er-Rumeida, on the ridge road at roughly 900 m, as the centre of the southern hill country",
      },
      {
        sourceId: "weinfeld-promise-land",
        supportedClaim:
          "The grant of Hebron is expressed in the language of inheritance rather than of capture",
      },
    ],
    evidenceLabels: ["biblical-account", "externally-attested"],
  },
];
