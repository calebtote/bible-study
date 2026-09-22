/**
 * Joshua 22-24: the book's conclusion.
 *
 * Three chapters that resolve nothing militarily and everything else. An altar
 * that almost starts a civil war, a farewell speech that names the land Israel
 * does not hold, and a covenant renewal that ends in three graves.
 *
 * Two mapping rules govern this file. The altar of chapter 22 has no identified
 * location and none is asserted. The recital of chapter 24 reaches from beyond
 * the Euphrates to Egypt and is `retrospective`: it is memory, not movement, and
 * nothing in it is drawn as territory Israel held.
 */

import type { Chapter, Milestone } from "../types";

export const CHAPTERS: Chapter[] = [
  /* ================================================================== */
  /* Chapter 22                                                         */
  /* ================================================================== */
  {
    id: "ch22",
    number: 22,
    title: "The altar by the Jordan",
    summary:
      "The eastern tribes are released with a blessing, build a large altar by the river on the way home, and Israel musters to destroy them before anyone asks what the altar is for.",
    phase: "unity-farewell-covenant",
    scriptureRange: "Joshua 22:1-34",
    milestoneIds: [
      "ch22-eastern-tribes-released",
      "ch22-altar-by-the-jordan",
      "ch22-muster-at-shiloh",
      "ch22-phinehas-delegation",
      "ch22-altar-as-witness",
    ],
    sections: [
      {
        id: "ch22-at-a-glance",
        kind: "at-a-glance",
        title: "At a glance",
        body: `Joshua releases the tribes settled east of the Jordan, blesses them, and sends them home from [[entity:shiloh]] with a share of the plunder. On the way they build a conspicuous altar beside the river. Israel hears, musters for war against its own, and sends a priest to ask a question first. The answer prevents the war.`,
        scriptureRefs: ["Joshua 22:1-34"],
        citations: [],
        evidenceLabels: ["biblical-account"],
      },
      {
        id: "ch22-walk-through",
        kind: "walk-through",
        title: "Walk through the chapter",
        body: `The chapter opens with a discharge. Joshua commends [[entity:tribe-reuben]], [[entity:tribe-gad]] and the eastern half of Manasseh for not deserting their brothers, repeats Moses' charge to love and obey, and sends them home rich, with orders to share the plunder with the kinsmen who stayed east. They leave [[entity:shiloh]] for [[entity:region-gilead]].

At the river they build an altar, and the narrator pauses to say it was great to look at. What Israel hears is not a monument but a rebellion, and the congregation gathers at Shiloh for war.

Instead of marching, they send [[entity:phinehas]] with ten clan heads, one per tribe. The speech is an indictment: this is treachery, it will draw wrath on everyone, and there are precedents. They name the plague at Peor, and [[entity:achan]], who did not perish alone in his sin.

The answer is an oath and an explanation. The altar takes no offering and no sacrifice. It is a witness, built to the pattern of the real altar, against a day when western children tell eastern children that the river is a border, so they have no portion in the LORD. The war is dropped.`,
        scriptureRefs: ["Joshua 22:1-9", "Joshua 22:10-20", "Joshua 22:21-34"],
        citations: [
          {
            sourceId: "hess-joshua",
            locator: "on Joshua 22",
            supportedClaim:
              "The chapter is structured as a formal discharge of the eastern tribes followed by an accusation and a defence",
          },
        ],
        evidenceLabels: ["biblical-account"],
      },
      {
        id: "ch22-what-brought-us-here",
        kind: "what-brought-us-here",
        title: "What brought us here",
        body: `[[entity:tribe-reuben]] and [[entity:tribe-gad]] had asked Moses for the grazing country east of the river, and he agreed on one condition: they would cross over armed and fight until the rest of Israel had its inheritance. Joshua took that promise up again before the crossing. Chapter 21 closed with rest, so the condition now expires, and Joshua 22 settles an account opened two books earlier.`,
        scriptureRefs: ["Numbers 32:1-32", "Joshua 1:12-18", "Joshua 21:43-45"],
        citations: [
          {
            sourceId: "milgrom-numbers",
            locator: "on Numbers 32",
            supportedClaim:
              "The eastern tribes' inheritance was granted by Moses on condition of military service west of the Jordan",
          },
        ],
        evidenceLabels: ["biblical-account"],
      },
      {
        id: "ch22-surrounding-world",
        kind: "surrounding-world",
        title: "The surrounding world",
        body: `Deuteronomy restricts sacrifice to the one place the LORD chooses, and in Joshua that place is the tent at [[entity:shiloh]], whose standing as an early central sanctuary the excavations support. Elsewhere in the ancient Near East communities multiplied sanctuaries freely. Israel's single-altar rule was the unusual one, and a rival altar at the land's edge would in time have made a second people.

Monuments as legal witnesses were ordinary, though: heaps and pillars were raised to be seen and appealed to later. The eastern tribes were using a familiar instrument, which is why the misreading was easy.`,
        scriptureRefs: ["Deuteronomy 12:5-14", "Joshua 18:1", "Genesis 31:44-52"],
        citations: [
          {
            sourceId: "block-deuteronomy",
            locator: "on Deuteronomy 12",
            supportedClaim:
              "Deuteronomy restricts sacrificial worship to a single chosen place, which is the law the delegation assumes",
          },
          {
            sourceId: "finkelstein-shiloh",
            supportedClaim:
              "Shiloh's occupation history and its standing as an early central sanctuary",
          },
          {
            sourceId: "hillers-covenant",
            supportedClaim:
              "Monuments and heaps of stones functioned as witnesses to agreements in the ancient Near East",
          },
        ],
        evidenceLabels: ["biblical-account", "externally-attested"],
        collapsedByDefault: true,
      },
      {
        id: "ch22-why-it-matters",
        kind: "why-it-matters",
        title: "Why it matters",
        body: `The fear the eastern tribes voice is not about land. It is that their grandchildren will be told they are not Israel. A boundary crossable on foot has become an argument about who belongs, and they build something large because they do not trust memory to hold on its own.

What the chapter shows about Israel is less flattering: it moves from rumour to full muster without asking a question, and against its own tribes. The delegation reverses that. Read as the Reformed commentary tradition has tended to read it, zeal for the covenant and obedience to it are not the same thing.`,
        scriptureRefs: ["Joshua 22:24-27", "Joshua 22:30-33", "Judges 20:1-11"],
        citations: [
          {
            sourceId: "havrelock-river-jordan",
            supportedClaim:
              "The Jordan functions as a line that both joins and divides, and the eastern tribes' position in Joshua 22 turns on that ambiguity",
          },
          {
            sourceId: "calvin-joshua",
            locator: "on Joshua 22",
            supportedClaim:
              "A Reformed reading that commends the delegation's restraint and warns against zeal uninformed by inquiry",
          },
        ],
        evidenceLabels: ["theological-interpretation"],
      },
      {
        id: "ch22-details-worth-noticing",
        kind: "details-worth-noticing",
        title: "Details worth noticing",
        body: `Where the altar stood is not known. The Hebrew calls the spot the region about the Jordan and adds that it was in the land of Canaan, on Israel's side, yet the delegation travels into Gilead to find the builders. The Hebrew and Greek traditions differ, and no site has ever been identified, so this study places the altar nowhere.

[[entity:phinehas]] leads the delegation, not his father [[entity:eleazar]], and the text never says why. And the altar's name is a sentence rather than a word: a witness between us that the LORD is God.`,
        scriptureRefs: ["Joshua 22:10-11", "Joshua 22:13-15", "Joshua 22:34"],
        citations: [
          {
            sourceId: "butler-joshua",
            locator: "on Joshua 22:10-11",
            supportedClaim:
              "The Hebrew and Greek textual traditions differ over the altar's side of the river",
          },
          {
            sourceId: "rainey-notley-sacred-bridge",
            supportedClaim:
              "No location for the altar of Joshua 22 has been identified in the historical geography of the Jordan valley",
          },
        ],
        evidenceLabels: ["biblical-account", "disputed"],
        collapsedByDefault: true,
      },
      {
        id: "ch22-difficult-questions",
        kind: "difficult-questions",
        title: "Difficult questions",
        body: `Was mustering for war an overreaction? On the chapter's own terms, no. A second altar meant a second sanctuary, and the two cases the delegation cites, Peor and [[entity:achan]], are both occasions when one group's act fell on everybody.

That does not make the near war admirable. Nothing in the text praises the muster, and the whole crisis rested on a motive nobody had asked about. An identical structure was either rebellion or testimony depending on intent, and intent is the one thing a monument cannot display. The chapter leaves that unresolved.`,
        scriptureRefs: ["Numbers 25:1-13", "Joshua 7:1", "Joshua 22:22-23"],
        citations: [
          {
            sourceId: "mitchell-together-in-land",
            supportedClaim:
              "Joshua holds unresolved tensions in place rather than harmonising them, including over who counts as inside Israel",
          },
          {
            sourceId: "woudstra-joshua",
            locator: "on Joshua 22",
            supportedClaim:
              "A Reformed treatment of the chapter as a covenant emergency governed by the law of the single altar",
          },
        ],
        evidenceLabels: ["biblical-account", "theological-interpretation"],
        collapsedByDefault: true,
      },
    ],
    discussionQuestions: [
      "The eastern tribes' stated fear is that their children will be told they have no portion in the LORD. The obstacle between them is a modest river in a deep valley, not a sea. What made that fear plausible anyway?",
      "Israel mustered at Shiloh before it asked a question, and the delegation asked a question before it drew a sword. What accounts for the difference between the two responses inside a single chapter?",
      "The altar was built great to look at, and then named with a whole sentence. Who was it aimed at, and what does its size tell you about what the builders expected to happen?",
      "No site has ever been identified for this altar, and the text is not even consistent about which bank it stood on. Does the missing location change how the chapter reads?",
    ],
    relatedEntityIds: [
      "joshua",
      "phinehas",
      "eleazar",
      "moses",
      "achan",
      "tribe-reuben",
      "tribe-gad",
      "tribe-manasseh-east",
      "tribe-manasseh-west",
      "tribe-ephraim",
      "tribe-levi",
      "shiloh",
      "jordan-river",
      "jordan-crossing-region",
      "region-gilead",
      "region-bashan",
      "region-jordan-valley",
      "jabbok-river",
      "heshbon",
      "dibon",
      "moab",
    ],
    themeIds: [
      "unity-among-tribes",
      "covenant-faithfulness",
      "holiness-and-presence",
      "memory-and-memorials",
    ],
    wordCount: 695,
  },

  /* ================================================================== */
  /* Chapter 23                                                         */
  /* ================================================================== */
  {
    id: "ch23",
    number: 23,
    title: "Joshua's farewell warning",
    summary:
      "Joshua, old, gathers Israel's leaders and says that not one good word has failed, in the same breath as he warns them about the nations still living among them.",
    phase: "unity-farewell-covenant",
    scriptureRange: "Joshua 23:1-16",
    milestoneIds: [
      "ch23-joshua-old-assembles-leaders",
      "ch23-review-of-what-god-has-done",
      "ch23-nations-that-remain",
      "ch23-blessing-and-curse",
    ],
    sections: [
      {
        id: "ch23-at-a-glance",
        kind: "at-a-glance",
        title: "At a glance",
        body: `Joshua is old. He summons Israel's elders, heads, judges and officers to say nothing new. He reviews what God has done, warns that the nations still living among them will become a snare if Israel intermarries and turns aside, and sets blessing and curse before them. No place is named. No ground changes hands.`,
        scriptureRefs: ["Joshua 23:1-16"],
        citations: [],
        evidenceLabels: ["biblical-account"],
      },
      {
        id: "ch23-walk-through",
        kind: "walk-through",
        title: "Walk through the chapter",
        body: `The opening is a time marker rather than a place: after many days, with rest given and Joshua well advanced in years. He calls the leadership, not the whole assembly, and begins with what they have seen for themselves. It is the LORD who fought.

Then comes the sentence that makes this chapter the book's own audit. Joshua says he has allotted to them the nations that remain, from the Jordan to [[entity:great-sea]] in the west. The inheritance on paper includes people still living on it. God will drive them out, he says.

The charge follows: hold to the book of the law, do not go among these remaining nations, do not name their gods or serve them. If Israel clings to the remnant of the nations and intermarries with them, God will stop driving them out, and they will become a snare, a trap, a scourge in the sides and thorns in the eyes.

Not one thing has failed of all the good God promised; therefore the same God will bring all the evil he promised too, if Israel breaks the covenant. The speech ends on the curse.`,
        scriptureRefs: ["Joshua 23:1-5", "Joshua 23:6-13", "Joshua 23:14-16"],
        citations: [
          {
            sourceId: "howard-joshua",
            locator: "on Joshua 23",
            supportedClaim:
              "The farewell address is structured as review, charge, warning, and a symmetrical statement of blessing and curse",
          },
        ],
        evidenceLabels: ["biblical-account"],
      },
      {
        id: "ch23-what-brought-us-here",
        kind: "what-brought-us-here",
        title: "What brought us here",
        body: `Nothing here is a new admission. Joshua 13 opened the allotment section by listing what was left: the Philistine coast, [[entity:region-lebanon]] as far as [[entity:mount-hermon]], and the Sidonian hill country. The allotments then recorded the specifics. Judah could not take [[entity:jerusalem]]. Ephraim did not clear [[entity:gezer]]. Manasseh could not hold the valley towns, [[entity:beth-shan]] among them. Chapter 23 gathers all of it into one sentence.`,
        scriptureRefs: [
          "Joshua 13:1-7",
          "Joshua 15:63",
          "Joshua 16:10",
          "Joshua 17:12-13",
        ],
        citations: [
          {
            sourceId: "kitchen-reliability",
            supportedClaim:
              "The book's summary statements have to be read against its own repeated admissions of unconquered territory",
          },
        ],
        evidenceLabels: ["biblical-account"],
      },
      {
        id: "ch23-surrounding-world",
        kind: "surrounding-world",
        title: "The surrounding world",
        body: `The gaps are not random. They are the flat ground and the trade routes: the coastal corridor carrying the international highway between Egypt and the north, and the valley floors where chariots work. Egyptian authority in Canaan ran through garrisons and vassal rulers in exactly those places, one reason highland farmers did not take them. Settlement archaeology for the period shows growth in the hill country, not the plains.

Intermarriage was the ordinary way populations merged here, through households rather than treaties, which is why Joshua names it as the danger instead of naming armies.`,
        scriptureRefs: ["Joshua 23:7", "Joshua 23:12-13", "Deuteronomy 7:1-6"],
        citations: [
          {
            sourceId: "aharoni-land-of-bible",
            supportedClaim:
              "The coastal route was the principal international highway and the plains the most contested ground",
          },
          {
            sourceId: "moran-amarna",
            supportedClaim:
              "Egyptian oversight of Canaan operated through local city rulers and garrison centres in the lowlands",
          },
          {
            sourceId: "stager-forging-identity",
            supportedClaim:
              "Early Israelite settlement is concentrated in highland villages rather than in the plains and valleys",
          },
        ],
        evidenceLabels: ["externally-attested", "biblical-account"],
        collapsedByDefault: true,
      },
      {
        id: "ch23-why-it-matters",
        kind: "why-it-matters",
        title: "Why it matters",
        body: `This is where an honest map earns its keep. Everything the book conceded along the way is visible at once: a described inheritance reaching water Israel never controlled, and a remaining-land layer covering the best of the country. The promise has been kept, the work is unfinished, and the unfinished part is now a danger rather than a target.

Reformed readings press the asymmetry: what God promised he did, and what Israel had to do it has not done, so the land is held by a faithfulness not its own. That is one Christian reading among others, and either way the last word is the curse.`,
        scriptureRefs: ["Joshua 23:4-5", "Joshua 23:14-16"],
        citations: [
          {
            sourceId: "woudstra-joshua",
            locator: "on Joshua 23",
            supportedClaim:
              "A Reformed covenantal reading in which the fulfilment of the land promise rests on divine faithfulness rather than Israelite achievement",
          },
          {
            sourceId: "davis-joshua",
            locator: "on Joshua 23",
            supportedClaim:
              "An expositional Reformed treatment of the warning as addressed to a generation that has just been told it succeeded",
          },
        ],
        evidenceLabels: ["theological-interpretation"],
      },
      {
        id: "ch23-details-worth-noticing",
        kind: "details-worth-noticing",
        title: "Details worth noticing",
        body: `Joshua 23 never says where it happens. Readers often supply [[entity:shiloh]], where the tent was, or borrow [[entity:shechem]] from the next chapter, but the text gives a time and not a location, and this study leaves it that way.

Compare the two farewell chapters. In 23 Joshua speaks in his own voice; in 24 the speech is framed as the LORD's own first-person recital.

The four images in the warning are irritants rather than armies: snare, trap, scourge, thorns. The threat is erosion, from inside the household.`,
        scriptureRefs: ["Joshua 23:2", "Joshua 23:13", "Joshua 24:2"],
        citations: [
          {
            sourceId: "hess-joshua",
            locator: "on Joshua 23",
            supportedClaim:
              "Joshua 23 gives no setting for the assembly, in contrast with the located assembly of Joshua 24",
          },
        ],
        evidenceLabels: ["biblical-account"],
        collapsedByDefault: true,
      },
      {
        id: "ch23-difficult-questions",
        kind: "difficult-questions",
        title: "Difficult questions",
        body: `How can not one thing have failed while nations remain? Conquest reports across the ancient Near East routinely use totalising language their own authors did not take literally. Or the promise concerned what God undertook, with possession left as Israel's task. Or the book is a later composition reconciling a memory of success with a reality of coexistence.

The warning is about worship, not ancestry: this same book brings Rahab and a Kenizzite named [[entity:caleb]] fully inside Israel. Reading Joshua 23 as a text about bloodlines misreads it, and that misreading has done real damage.`,
        scriptureRefs: ["Joshua 23:14", "Joshua 6:25", "Joshua 14:6-14"],
        citations: [
          {
            sourceId: "younger-conquest-accounts",
            supportedClaim:
              "Hyperbolic totality is a shared convention of ancient Near Eastern conquest reporting",
          },
          {
            sourceId: "finkelstein-silberman-unearthed",
            supportedClaim:
              "A sceptical reading in which the conquest summaries are later literary constructions",
          },
          {
            sourceId: "hess-joshua",
            locator: "on Joshua 14:6",
            supportedClaim:
              "Caleb is identified as a Kenizzite and still counted fully within Judah",
          },
        ],
        evidenceLabels: ["disputed", "theological-interpretation"],
        collapsedByDefault: true,
      },
    ],
    discussionQuestions: [
      "Joshua says not one good word has failed and that nations still remain, in the same speech. How would you hold both without quietly softening one of them?",
      "Turn the remaining-land layer on for this chapter. Standing on a ridge in Ephraim, which of those gaps would have been visible to the people hearing this speech, and which would only have been known by report?",
      "The danger Joshua names is intermarriage, yet Rahab and Caleb are already inside Israel in this book. What distinction is the warning actually drawing?",
      "Snare, trap, scourge, thorns: not one of these is a military image. Why warn a nation with the vocabulary of nuisance?",
      "The speech ends on the curse rather than the blessing. What does that ordering do to a reader who has just finished the allotment chapters?",
    ],
    relatedEntityIds: [
      "joshua",
      "moses",
      "caleb",
      "canaanites",
      "amorites",
      "philistines",
      "sidonians",
      "egypt-new-kingdom",
      "tribe-judah",
      "tribe-ephraim",
      "tribe-manasseh-west",
      "tribe-asher",
      "great-sea",
      "jordan-river",
      "region-lebanon",
      "mount-hermon",
      "region-coastal-plain",
      "region-jezreel-valley",
      "jerusalem",
      "gezer",
      "megiddo",
      "beth-shan",
      "dor",
      "sidon",
      "shiloh",
      "shechem",
    ],
    themeIds: [
      "obedience-and-failure",
      "covenant-faithfulness",
      "promise-and-fulfillment",
      "rest",
    ],
    wordCount: 694,
  },

  /* ================================================================== */
  /* Chapter 24                                                         */
  /* ================================================================== */
  {
    id: "ch24",
    number: 24,
    title: "Covenant renewal at Shechem",
    summary:
      "At Shechem the whole story is retold in God's own voice, beginning with idolatry beyond the Euphrates, and Israel chooses. Then the book closes with three burials.",
    phase: "unity-farewell-covenant",
    scriptureRange: "Joshua 24:1-33",
    milestoneIds: [
      "ch24-assembly-at-shechem",
      "ch24-the-recital",
      "ch24-choose-this-day",
      "ch24-covenant-and-stone",
      "ch24-three-burials",
    ],
    sections: [
      {
        id: "ch24-at-a-glance",
        kind: "at-a-glance",
        title: "At a glance",
        body: `Joshua gathers the tribes at [[entity:shechem]] and puts the whole story into God's own mouth, starting beyond the Euphrates with [[entity:terah]], who served other gods. He demands a decision, refuses the people's first easy answer, writes the covenant down and sets up a stone to hear it. Then three graves close the book.`,
        scriptureRefs: ["Joshua 24:1-33"],
        citations: [],
        evidenceLabels: ["biblical-account"],
      },
      {
        id: "ch24-walk-through",
        kind: "walk-through",
        title: "Walk through the chapter",
        body: `The tribes assemble at [[entity:shechem]]. What follows is not Joshua's speech but a recital in the first person: your fathers lived beyond the River and served other gods; I took [[entity:abraham]] and led him through this land; I gave him [[entity:isaac]]; [[entity:jacob]] and his children went down to [[entity:egypt-new-kingdom]]; I sent [[entity:moses]] and [[entity:aaron]]; I brought you to the sea and covered your pursuers; [[entity:balak]] hired [[entity:balaam]] and I would not listen to him; you crossed the Jordan and came to [[entity:jericho]]. It ends on a gift: land you did not work, cities you did not build, vineyards you did not plant.

Then the demand. Put away the gods your fathers served beyond the River and in Egypt. Choose today. Joshua commits his own household first, and the people answer well. He refuses their answer: you cannot serve this God, he is holy and jealous. They insist, and he names them witnesses against themselves.

A covenant is made, a statute written into the book of the law, and a great stone set up under the oak, because the stone has heard everything said. Joshua dies at a hundred and ten.`,
        scriptureRefs: ["Joshua 24:1-13", "Joshua 24:14-24", "Joshua 24:25-31"],
        citations: [
          {
            sourceId: "hess-joshua",
            locator: "on Joshua 24",
            supportedClaim:
              "The chapter moves from a first-person divine recital to a demand for decision and a witnessed covenant act",
          },
        ],
        evidenceLabels: ["biblical-account"],
      },
      {
        id: "ch24-what-brought-us-here",
        kind: "what-brought-us-here",
        title: "What brought us here",
        body: `[[entity:shechem]] was already a covenant place. Abraham built an altar here. [[entity:jacob]] bought a parcel of ground from the sons of Hamor, and later buried his household's foreign gods under a tree at Shechem, which makes Joshua's demand here a deliberate echo. [[entity:joseph]] made Israel swear to carry his bones out of Egypt. Joshua 8 records an earlier ceremony of blessing and curse at [[entity:mount-ebal]] and [[entity:mount-gerizim]]. The book never reports a battle for Shechem.`,
        scriptureRefs: [
          "Genesis 12:6-7",
          "Genesis 33:18-20",
          "Genesis 35:1-4",
          "Genesis 50:24-26",
          "Exodus 13:19",
          "Joshua 8:30-35",
        ],
        citations: [
          {
            sourceId: "wright-shechem",
            supportedClaim:
              "Shechem's long covenantal associations, its fortress-temple, and the absence of any reported battle for the city in Joshua",
          },
        ],
        evidenceLabels: ["biblical-account", "externally-attested"],
      },
      {
        id: "ch24-surrounding-world",
        kind: "surrounding-world",
        title: "The surrounding world",
        body: `Hittite treaties between a great king and a subject ruler open with an account of what the great king has done for the lesser party, then set out obligations, name witnesses, and deposit the written text. Joshua 24 has the history, the obligation, the witnesses and the deposit in that order. The parallel is real; the dating inference sometimes drawn from it is contested, because the same elements persist in later treaty writing.

Shechem itself was a substantial centre with a fortress-temple, and its ruler appears in fourteenth-century Egyptian diplomatic correspondence as a troublesome figure.`,
        scriptureRefs: ["Joshua 24:2-13", "Joshua 24:25-27", "Deuteronomy 27:1-26"],
        citations: [
          {
            sourceId: "mendenhall-law-covenant",
            supportedClaim:
              "The classic comparison of Joshua 24 with the Hittite suzerain-vassal treaty structure",
          },
          {
            sourceId: "hillers-covenant",
            supportedClaim:
              "Treaty form, oath-taking and the role of witnesses in covenant making, including the limits of dating arguments from form",
          },
          {
            sourceId: "moran-amarna",
            supportedClaim:
              "Shechem appears in the Amarna correspondence as a significant political centre under Labayu",
          },
        ],
        evidenceLabels: ["externally-attested", "reconstruction", "disputed"],
        collapsedByDefault: true,
      },
      {
        id: "ch24-why-it-matters",
        kind: "why-it-matters",
        title: "Why it matters",
        body: `Israel's founding story begins with an ancestor's father serving other gods beyond a river. The recital leaves nothing for Israel to claim: not the land, not the cities, not the vineyards, not even a respectable origin.

A book about receiving land closes with three burials, and the land receives its people: Joshua in his own portion, [[entity:joseph]] in his father's field, [[entity:eleazar]] in the hills. No monument to victory, three graves and a stone that listens. Reformed readers hear in that a covenant sustained by God's action rather than Israel's, which is one Christian reading among others.`,
        scriptureRefs: ["Joshua 24:2", "Joshua 24:13", "Joshua 24:29-33"],
        citations: [
          {
            sourceId: "calvin-joshua",
            locator: "on Joshua 24:19",
            supportedClaim:
              "A Reformed reading in which Joshua's refusal of the people's answer exposes self-confidence rather than rejecting the covenant",
          },
          {
            sourceId: "robertson-christ-of-covenants",
            supportedClaim:
              "A Reformed covenantal account in which the covenant rests on divine initiative prior to human commitment",
          },
        ],
        evidenceLabels: ["theological-interpretation"],
      },
      {
        id: "ch24-details-worth-noticing",
        kind: "details-worth-noticing",
        title: "Details worth noticing",
        body: `The Greek tradition reads Shiloh rather than [[entity:shechem]] in verses 1 and 25, which matters because the tent of meeting was at Shiloh and Joshua 24 mentions a sanctuary of the LORD at Shechem without explaining it.

Verse 2 says plainly that Abraham's father served other gods. It is not an aside; it is where the story is made to start.

Two of the three burial places cannot be pinned. [[entity:timnath-serah]] is probably Khirbet Tibnah, no more than probably, and the hill of Phinehas is unlocated.`,
        scriptureRefs: ["Joshua 24:1", "Joshua 24:2", "Joshua 24:12", "Joshua 24:31", "Joshua 24:33"],
        citations: [
          {
            sourceId: "butler-joshua",
            locator: "on Joshua 24:1, 25",
            supportedClaim:
              "The Greek textual tradition reads Shiloh where the Hebrew has Shechem",
          },
          {
            sourceId: "rainey-notley-sacred-bridge",
            supportedClaim:
              "Timnath-serah is only tentatively identified with Khirbet Tibnah, and Eleazar's burial place is not located",
          },
        ],
        evidenceLabels: ["biblical-account", "disputed"],
        collapsedByDefault: true,
      },
      {
        id: "ch24-difficult-questions",
        kind: "difficult-questions",
        title: "Difficult questions",
        body: `Why does Joshua tell the people they cannot serve God? Read one way, following Calvin and the Reformed tradition, he is puncturing an untested confidence. Read another, he is making the legal move a witnessed oath requires. The text does not choose.

Is the ceremony old or late? Commentators who emphasise the treaty parallels treat it as early; others read it as a later composition framing the Deuteronomistic story.

Graves are not a triumph. Whether that ending is honesty about an unfinished conquest or hope planted in the ground depends on what comes next, and Judges answers quickly.`,
        scriptureRefs: ["Joshua 24:19-24", "Joshua 24:29-33", "Judges 2:6-13"],
        citations: [
          {
            sourceId: "mcconville-williams-joshua",
            supportedClaim:
              "The chapter's rhetoric of refusal and consent read as covenant procedure rather than as discouragement",
          },
          {
            sourceId: "boling-wright-joshua",
            supportedClaim:
              "A reconstruction treating Joshua 24 as part of a later compositional framework",
          },
          {
            sourceId: "kitchen-reliability",
            supportedClaim:
              "An argument that the chapter's form and detail support an early setting",
          },
        ],
        evidenceLabels: ["disputed", "theological-interpretation"],
        collapsedByDefault: true,
      },
    ],
    discussionQuestions: [
      "The recital begins with Abraham's father serving other gods. What does that starting point do to any claim Israel might make on the land it has just been given?",
      "The map for the recital spans from beyond the Euphrates to Egypt, and Israel held none of it. What goes wrong if you read that span as territory rather than as memory?",
      "Joshua tells the people they cannot serve the LORD, and they insist twice that they will. Would you have accepted their answer?",
      "Jacob bought ground at Shechem generations earlier, and Joseph's bones end up buried in it. Why does the book close at a purchased field rather than at a captured city?",
      "Three burials end a book about receiving land. What is that ending claiming, and what is it refusing to claim?",
    ],
    relatedEntityIds: [
      "joshua",
      "eleazar",
      "phinehas",
      "moses",
      "aaron",
      "joseph",
      "abraham",
      "isaac",
      "jacob",
      "terah",
      "balaam",
      "balak",
      "shechem",
      "mount-ebal",
      "mount-gerizim",
      "timnath-serah",
      "region-hill-country-ephraim",
      "jordan-river",
      "jericho",
      "egypt-new-kingdom",
      "amorites",
      "canaanites",
      "moab",
      "tribe-ephraim",
      "tribe-levi",
    ],
    themeIds: [
      "covenant-faithfulness",
      "promise-and-fulfillment",
      "memory-and-memorials",
      "land-and-inheritance",
    ],
    wordCount: 696,
  },
];

export const MILESTONES: Milestone[] = [
  /* ---------------------------------------------------------------- */
  /* Chapter 22                                                       */
  /* ---------------------------------------------------------------- */
  {
    id: "ch22-eastern-tribes-released",
    chapter: 22,
    order: 1,
    title: "The eastern tribes are released and blessed",
    scriptureRefs: ["Joshua 22:1-9"],
    narrative: `Joshua calls Reuben, Gad and the eastern half of Manasseh and discharges them. They have not deserted their brothers through the whole campaign, so the condition Moses attached to their inheritance east of the river is satisfied. He repeats the charge to love and obey, blesses them, and tells them to go home with their livestock, silver, bronze, iron and clothing, and to divide the plunder with the kinsmen who stayed east to hold the ground.

They set out from Shiloh, which the text is careful to locate in the land of Canaan, for Gilead, which it does not. That geographic asymmetry is the whole problem of the chapter in a single verse. Around half of Israel's fighting strength is now walking away from the sanctuary and across the only line in the country that everybody agrees is a line.`,
    entityIds: [
      "joshua",
      "tribe-reuben",
      "tribe-gad",
      "tribe-manasseh-east",
      "moses",
      "shiloh",
      "region-gilead",
      "region-bashan",
      "jordan-river",
    ],
    mapFeatureIds: ["site-shiloh", "site-jordan-river", "site-jordan-crossing-region"],
    mapCaption:
      "The eastern tribes leave Shiloh in the hill country and head down toward the Jordan for Gilead and Bashan.",
    whatChanged:
      "Israel's forces separate for the first time since the crossing. Nothing is gained or lost on the ground; the change is who stands where.",
    geographyExplanation:
      "Shiloh sits in the central hill country; the Jordan valley floor lies below sea level. Getting home meant descending well over a thousand metres in roughly twenty-five kilometres of straight-line distance, and considerably further on foot through the wadis, then crossing at one of a small number of practical fords, then climbing again onto the Gilead uplands. The route is not hard, but it is a full journey, and it puts the tent of meeting a multi-day walk behind them.",
    sequenceType: "event",
    viewport: { center: [35.38, 32.02], zoom: 9 },
    citations: [
      {
        sourceId: "rainey-notley-sacred-bridge",
        supportedClaim:
          "The descent from the central hill country to the Jordan valley and the limited number of practical fords",
      },
    ],
    evidenceLabels: ["biblical-account"],
  },
  {
    id: "ch22-altar-by-the-jordan",
    chapter: 22,
    order: 2,
    title: "They build a great altar by the Jordan",
    scriptureRefs: ["Joshua 22:10-11"],
    narrative: `Reaching the river, the eastern tribes build an altar, and the narrator adds a detail that turns out to matter: it was great to look at. Then the report reaches the rest of Israel, and the report is not neutral. What the western tribes hear is that their brothers have built an altar at the border, on Israel's side of the river, and that this is rebellion.

Where it stood is not known. The Hebrew calls the place the region about the Jordan and says it was in the land of Canaan, which is the western side, while the delegation sent to confront the builders travels into Gilead on the eastern side. The Hebrew and Greek traditions differ, and no candidate site has ever been proposed with any weight. This study therefore asserts no location: the altar belongs somewhere by the Jordan, in Gilead or at the crossing, and that is as far as the evidence goes.`,
    entityIds: [
      "tribe-reuben",
      "tribe-gad",
      "tribe-manasseh-east",
      "jordan-river",
      "region-gilead",
      "region-jordan-valley",
      "jabbok-river",
    ],
    mapFeatureIds: ["site-jordan-river", "site-jabbok-river", "site-jordan-crossing-region"],
    mapCaption:
      "The altar is built somewhere along this reach of the Jordan; the map shows the river because the site itself is unknown.",
    whatChanged:
      "A structure now exists that both sides of Israel interpret differently. No pin is added, because no location for it is known.",
    geographyExplanation:
      "The Jordan is a small river at the bottom of a deep trench, and the trench does the dividing rather than the water. Crossings are few and fixed by terrain, so anything built beside a crossing is seen by everyone who uses it. That is a plausible reason for a witness monument to stand here, and it is also why a suspected rival sanctuary here would have been intolerable: it would sit on the route between the two halves of Israel, at the point where the country's clearest natural boundary becomes a gate.",
    sequenceType: "event",
    viewport: {
      center: [35.6, 31.99],
      zoom: 9,
      bounds: [
        [35.35, 31.75],
        [35.9, 32.3],
      ],
    },
    citations: [
      {
        sourceId: "butler-joshua",
        locator: "on Joshua 22:10-11",
        supportedClaim:
          "The Hebrew and Greek traditions differ over which side of the Jordan the altar stood on",
      },
      {
        sourceId: "havrelock-river-jordan",
        supportedClaim:
          "The Jordan's function as a boundary that both separates and connects the two halves of Israel",
      },
    ],
    evidenceLabels: ["biblical-account", "disputed"],
  },
  {
    id: "ch22-muster-at-shiloh",
    chapter: 22,
    order: 3,
    title: "Israel musters at Shiloh for war",
    scriptureRefs: ["Joshua 22:12"],
    narrative: `One verse, and it is the most alarming in the chapter. The whole congregation gathers at Shiloh to go up against Reuben, Gad and half of Manasseh in war. No message has been sent. No question has been asked. The book that has spent eleven chapters on campaigns against Canaanite cities now shows Israel assembling against Israel on the strength of a rumour, and it does so at the sanctuary.

Shiloh is the right place for it in more than one sense. This is where the tent of meeting stands and where the last seven allotments were drawn by lot, so it is the natural assembly point. It is also the institution the reported altar was thought to threaten. The muster is a defence of the one place of sacrifice, organised at the one place of sacrifice.`,
    entityIds: [
      "shiloh",
      "tribe-reuben",
      "tribe-gad",
      "tribe-manasseh-east",
      "tribe-ephraim",
      "tribe-levi",
      "region-hill-country-ephraim",
    ],
    mapFeatureIds: ["site-shiloh"],
    mapCaption:
      "Israel assembles at Shiloh, where the tent of meeting stands, to make war on its own eastern tribes.",
    whatChanged:
      "Shiloh changes function on the map: an assembly and allotment centre becomes a staging point for war against fellow Israelites.",
    geographyExplanation:
      "Shiloh sits off the main watershed route in a small upland basin ringed by hills, which is part of why it worked as a sanctuary: defensible enough, central to the hill country tribes, and not on the road an army would naturally take. Mustering here rather than at the river also means the decision to fight was taken a full day's march and a thousand-metre descent away from the thing being argued about, by people who had only heard a report of it.",
    sequenceType: "event",
    viewport: { center: [35.289, 32.056], zoom: 10 },
    citations: [
      {
        sourceId: "finkelstein-shiloh",
        supportedClaim:
          "Shiloh's position and occupation history as an upland central sanctuary site",
      },
    ],
    evidenceLabels: ["biblical-account", "externally-attested"],
  },
  {
    id: "ch22-phinehas-delegation",
    chapter: 22,
    order: 4,
    title: "Phinehas leads a delegation into Gilead",
    scriptureRefs: ["Joshua 22:13-20"],
    narrative: `Before the army moves, Israel sends Phinehas son of Eleazar with ten clan heads, one from each tribe, into Gilead. The composition matters: a priest for the cultic question and a full slate of tribal representatives for the political one.

Their speech is an indictment, not an inquiry. This is treachery against the God of Israel. Have you learned nothing from Peor, where a plague fell on the congregation? If you rebel today, tomorrow God will be angry with all of Israel. Remember Achan, who did not perish alone in his sin. They offer one way out: if the eastern land is unclean, come across and take a share among us instead, but do not build a rival altar.

It is worth noticing what the delegation is for. They have come a long way to make an accusation, and by making it in person they have also, without intending to, created the chance for an answer.`,
    entityIds: [
      "phinehas",
      "eleazar",
      "achan",
      "tribe-reuben",
      "tribe-gad",
      "tribe-manasseh-east",
      "region-gilead",
      "jordan-river",
      "shiloh",
      "moab",
    ],
    mapFeatureIds: [
      "site-shiloh",
      "site-jordan-river",
      "site-jabbok-river",
      "site-jordan-crossing-region",
    ],
    mapCaption:
      "Phinehas and ten clan heads travel from Shiloh across the Jordan into Gilead to confront the builders.",
    whatChanged:
      "The confrontation moves east of the river. The army stays at Shiloh, so nothing is committed yet.",
    geographyExplanation:
      "Gilead is wooded upland east of the Jordan, cut through the middle by the Jabbok gorge, and the text uses the name loosely. A delegation from Shiloh had to descend to the valley, cross, and climb again, which is why the round trip in this chapter is a matter of days rather than hours. The delay is doing real work in the story: the distance that made the eastern tribes anxious about being forgotten is the same distance that gave everyone time to stop.",
    sequenceType: "event",
    viewport: {
      center: [35.7, 32.08],
      zoom: 8,
      bounds: [
        [35.2, 31.8],
        [36.15, 32.45],
      ],
    },
    citations: [
      {
        sourceId: "milgrom-numbers",
        locator: "on Numbers 25",
        supportedClaim:
          "The incident at Peor and the plague on the congregation, which the delegation cites as precedent",
      },
      {
        sourceId: "hess-joshua",
        locator: "on Joshua 22:13-20",
        supportedClaim:
          "The delegation pairs priestly and tribal representation, addressing both the cultic and the political question",
      },
    ],
    evidenceLabels: ["biblical-account"],
  },
  {
    id: "ch22-altar-as-witness",
    chapter: 22,
    order: 5,
    title: "A witness, not a rival altar, and the war is called off",
    scriptureRefs: ["Joshua 22:21-34"],
    narrative: `The eastern tribes answer with an oath and then an explanation. The altar takes no burnt offering, no grain offering and no sacrifice. It is a copy of the pattern of the real altar, built as a witness, and they say exactly what they are afraid of: that one day western children will tell eastern children that the LORD made the Jordan a border between them, so they have no portion in him. The altar exists to answer that sentence before it is said.

Phinehas is satisfied. His reply is startling in its generosity: today we know that the LORD is among us, and you have delivered Israel out of his hand. The congregation blesses God and speaks no more of going up to war. The builders give the altar a name that is really a sentence, a witness between us that the LORD is God.

Nothing has been conquered, nothing allotted, nothing built that anyone will ever find. A war between Israel and Israel simply does not happen, which in this book is a rarer outcome than a victory.`,
    entityIds: [
      "phinehas",
      "tribe-reuben",
      "tribe-gad",
      "tribe-manasseh-east",
      "jordan-river",
      "region-gilead",
      "shiloh",
      "region-jordan-valley",
    ],
    mapFeatureIds: ["site-jordan-river", "site-shiloh", "site-jabbok-river"],
    mapCaption:
      "The altar stands unlocated by the Jordan as a witness, and the muster at Shiloh disperses without crossing.",
    whatChanged:
      "Nothing changes territorially, which is the point. Israel's internal fault line is named out loud and left standing.",
    geographyExplanation:
      "The eastern tribes' fear is geographic before it is theological. They live outside the land west of the river, inside the people, and they have no sanctuary on their side, so every act of worship requires a crossing. The Jordan joins them to Israel by being crossable and divides them from it by being a recognised boundary, and a river cannot be argued with. Their answer is to build something on the line itself, in the one place both halves of Israel would pass.",
    sequenceType: "event",
    viewport: { center: [35.45, 32.03], zoom: 9 },
    citations: [
      {
        sourceId: "havrelock-river-jordan",
        supportedClaim:
          "The significance of the eastern tribes' position, inside Israel and outside the land west of the river",
      },
      {
        sourceId: "hillers-covenant",
        supportedClaim:
          "A monument set up as a witness to an agreement, appealed to by later generations",
      },
      {
        sourceId: "mitchell-together-in-land",
        supportedClaim:
          "Joshua leaves the tension over who belongs to Israel in place rather than resolving it",
      },
    ],
    evidenceLabels: ["biblical-account", "theological-interpretation"],
  },

  /* ---------------------------------------------------------------- */
  /* Chapter 23                                                       */
  /* ---------------------------------------------------------------- */
  {
    id: "ch23-joshua-old-assembles-leaders",
    chapter: 23,
    order: 1,
    title: "Joshua, now old, assembles the leaders",
    scriptureRefs: ["Joshua 23:1-2"],
    narrative: `The chapter opens with time rather than place: after many days, with rest given to Israel from the enemies around them, and Joshua old and well advanced in years. He summons the elders, heads, judges and officers. Not the whole congregation, the leadership.

Where this happens is not stated. Readers commonly supply Shiloh, because the tent of meeting was there, or borrow Shechem from the next chapter. The text gives neither, and this study does not fill the gap. The map for this chapter therefore adds nothing new: it shows the country as the book has left it, with the described inheritance and the unpossessed parts visible together.

Joshua's first words are an appeal to what they have seen with their own eyes. Everything that follows rests on that, which is worth remembering when the chapter turns to what they have not done.`,
    entityIds: [
      "joshua",
      "moses",
      "great-sea",
      "jordan-river",
      "shiloh",
      "shechem",
      "region-hill-country-ephraim",
    ],
    mapFeatureIds: ["site-jordan-river", "site-great-sea", "site-mount-hermon"],
    mapCaption:
      "No place is named for this assembly, so the map holds the whole land in view instead of pointing anywhere.",
    whatChanged:
      "Nothing changes geographically. The chapter adds no place to the map and takes none away.",
    geographyExplanation:
      "This is a summary looking back over years, not a located episode, so the honest view is the whole country at once. The two features the chapter itself names are the Jordan in the east and the Great Sea in the west, and those are the frame Joshua uses for the inheritance. Between them lies everything the book has described and rather less than everything it has claimed.",
    sequenceType: "summary",
    viewport: {
      center: [35.15, 32.3],
      zoom: 7,
      bounds: [
        [34.2, 31.1],
        [36.1, 33.55],
      ],
    },
    citations: [
      {
        sourceId: "hess-joshua",
        locator: "on Joshua 23:1-2",
        supportedClaim:
          "Joshua 23 gives no setting for the assembly, unlike the located assembly in Joshua 24",
      },
    ],
    evidenceLabels: ["biblical-account"],
  },
  {
    id: "ch23-review-of-what-god-has-done",
    chapter: 23,
    order: 2,
    title: "A review of what God has done",
    scriptureRefs: ["Joshua 23:3-11"],
    narrative: `Joshua looks back, and the grammar keeps the credit in one place: you have seen all that the LORD your God has done to all these nations, for it is the LORD your God who has fought for you. Great and strong nations have been driven out and no one has withstood Israel. One man of you shall chase a thousand.

Then the charge. Be very courageous to keep the book of the law of Moses, turning neither right nor left. Do not go among the nations that remain, do not mention the names of their gods, do not swear by them, do not serve them, do not bow to them. Hold fast to the LORD, and love him.

This is a retrospect, not an advance. The map recalls the campaigns and adds no new ground, because the chapter reports no movement and no battle. Every place it could point to is already on the map from earlier chapters.`,
    entityIds: [
      "joshua",
      "moses",
      "canaanites",
      "amorites",
      "jordan-river",
      "great-sea",
      "jericho",
      "gilgal",
      "region-hill-country-ephraim",
    ],
    mapFeatureIds: [
      "site-jordan-river",
      "site-great-sea",
      "site-jericho",
      "site-gilgal",
      "site-hazor",
      "site-gibeon",
      "site-mount-hermon",
    ],
    mapCaption:
      "The campaign places return in memory only: the map recalls them and adds no fresh advance.",
    whatChanged:
      "Nothing. Earlier places are recalled, not re-entered, and no new territory appears.",
    geographyExplanation:
      "Spread across the map, the campaigns are conspicuously a highland story. Jericho at the valley mouth, the Benjamin plateau, the southern ridge, the northern hills: these are the places Joshua can point to. The ground the review does not mention is the ground the next milestone is about, and it is the flat, wealthy, well-connected part of the country.",
    sequenceType: "retrospective",
    viewport: {
      center: [35.25, 32.2],
      zoom: 7,
      bounds: [
        [34.4, 31.2],
        [36.0, 33.4],
      ],
    },
    citations: [
      {
        sourceId: "howard-joshua",
        locator: "on Joshua 23:3-11",
        supportedClaim:
          "The review attributes the victories to divine action and functions as the basis for the charge that follows",
      },
    ],
    evidenceLabels: ["biblical-account", "theological-interpretation"],
  },
  {
    id: "ch23-nations-that-remain",
    chapter: 23,
    order: 3,
    title: "The nations that remain will be a snare",
    scriptureRefs: ["Joshua 23:4-5", "Joshua 23:12-13"],
    narrative: `Here the book states its own accounts plainly. Joshua says he has allotted to Israel the nations that remain, along with the nations already cut off, from the Jordan to the Great Sea. The inheritance on paper includes populations still living on it.

The warning follows from that. If Israel clings to the remnant of these nations and intermarries with them, God will stop driving them out, and they will become a snare and a trap, a scourge in the sides, thorns in the eyes, until Israel perishes from this good land.

This is where the remaining-land layer belongs at its fullest. It is not a new disclosure. Joshua 13 opened with the same list, and the allotment chapters recorded the particulars as they came: Jerusalem, Gezer, the Jezreel valley towns, the Philistine coast, Sidonian territory in the north. Set out together, they cover the plains, the ports and the international road. What Israel held was the hills.`,
    entityIds: [
      "philistines",
      "sidonians",
      "canaanites",
      "egypt-new-kingdom",
      "jerusalem",
      "gezer",
      "megiddo",
      "beth-shan",
      "dor",
      "sidon",
      "region-coastal-plain",
      "region-jezreel-valley",
      "region-lebanon",
      "mount-hermon",
      "great-sea",
      "tribe-asher",
      "tribe-manasseh-west",
      "tribe-ephraim",
      "tribe-judah",
    ],
    mapFeatureIds: [
      "site-gaza",
      "site-ashkelon",
      "site-ashdod",
      "site-ekron",
      "site-gath",
      "site-gezer",
      "site-jerusalem",
      "site-megiddo",
      "site-taanach",
      "site-beth-shan",
      "site-ibleam",
      "site-dor",
      "site-sidon",
      "site-tyre",
      "site-baal-gad",
      "site-mount-hermon",
      "site-great-sea",
    ],
    mapCaption:
      "Everything the book admitted it did not possess, shown at once: the coast, the valley towns, the far north.",
    whatChanged:
      "No new territory. What changes is visibility: the scattered admissions of earlier chapters appear together for the first time.",
    geographyExplanation:
      "The unpossessed land is not a random scatter. It is the coastal plain with the international highway along it, the Jezreel valley and its ring of fortified towns, the Jordan valley mouth at Beth-shan, and the Phoenician coast to the north. All of it is flat or low, all of it good for chariots, all of it valuable, and much of it was under Egyptian oversight through garrisons and vassal rulers. Israel's holdings are the highland spine, where terrain favours villages and hinders armies. The shape of the gap is a straightforward consequence of terrain and power, and it is exactly the gap Joshua 23 says will become a snare.",
    sequenceType: "summary",
    viewport: {
      center: [35.0, 32.3],
      zoom: 7,
      bounds: [
        [34.3, 31.3],
        [35.95, 33.6],
      ],
    },
    citations: [
      {
        sourceId: "kitchen-reliability",
        supportedClaim:
          "The book's summaries must be read against its own admissions of unconquered territory",
      },
      {
        sourceId: "aharoni-land-of-bible",
        supportedClaim:
          "The coastal plain carried the principal international route and the valleys were the most contested ground",
      },
      {
        sourceId: "moran-amarna",
        supportedClaim:
          "Egyptian authority in Late Bronze Canaan operated through lowland city rulers and garrison centres",
      },
    ],
    evidenceLabels: ["biblical-account", "externally-attested"],
  },
  {
    id: "ch23-blessing-and-curse",
    chapter: 23,
    order: 4,
    title: "Blessing and curse set before them",
    scriptureRefs: ["Joshua 23:14-16"],
    narrative: `Joshua ends with a symmetry that is easy to read too quickly. Today I am going the way of all the earth. You know in your hearts that not one thing has failed of all the good the LORD promised; all of it has come to you. And then the hinge: just as all the good has come, so he will bring all the evil, until he has destroyed you from off this good land, if you break the covenant and serve other gods.

The logic is the covenant's own. The same faithfulness that produced the good produces the threat, because a promise and a warning spoken by one God are not two different kinds of word. Deuteronomy had set blessing and curse in front of Israel in the same form, and Joshua 8 had already staged it at Ebal and Gerizim.

The speech stops on the curse. That is how the chapter is built, and the last thing Israel's leaders hear from Joshua here is what they stand to lose.`,
    entityIds: [
      "joshua",
      "moses",
      "mount-ebal",
      "mount-gerizim",
      "great-sea",
      "jordan-river",
      "region-hill-country-ephraim",
    ],
    mapFeatureIds: ["site-jordan-river", "site-great-sea", "site-mount-ebal", "site-mount-gerizim"],
    mapCaption:
      "The whole land in view, held under a conditional promise: the map's extent is what Israel stands to lose.",
    whatChanged:
      "Nothing on the ground. The land's status in the speech changes, from something received to something forfeitable.",
    geographyExplanation:
      "The geography here is the whole described inheritance treated as a single object, which is why the view stays wide. Ebal and Gerizim appear because the blessing and curse Joshua is restating were formally pronounced between those two mountains earlier in the book, in the pass at Shechem. The land is not a stage for this speech; it is the subject of it.",
    sequenceType: "summary",
    viewport: {
      center: [35.2, 32.25],
      zoom: 7,
      bounds: [
        [34.3, 31.1],
        [36.0, 33.55],
      ],
    },
    citations: [
      {
        sourceId: "block-deuteronomy",
        locator: "on Deuteronomy 11 and 27-28",
        supportedClaim:
          "The Deuteronomic form of blessing and curse that Joshua's closing warning restates",
      },
      {
        sourceId: "woudstra-joshua",
        locator: "on Joshua 23:14-16",
        supportedClaim:
          "A Reformed reading of the symmetry between promised good and threatened evil as a single covenant faithfulness",
      },
    ],
    evidenceLabels: ["biblical-account", "theological-interpretation"],
  },

  /* ---------------------------------------------------------------- */
  /* Chapter 24                                                       */
  /* ---------------------------------------------------------------- */
  {
    id: "ch24-assembly-at-shechem",
    chapter: 24,
    order: 1,
    title: "The assembly at Shechem",
    scriptureRefs: ["Joshua 24:1"],
    narrative: `Joshua gathers all the tribes of Israel to Shechem, with the elders, heads, judges and officers, and they present themselves before God. Unlike chapter 23, this assembly has an address, and the address has a history.

Shechem sits in the only easy east-west pass through the central highlands, between Mount Ebal to the north and Mount Gerizim to the south. Abraham built an altar in this area on first entering the land. Jacob bought a field here and later buried his household's foreign gods under a tree nearby. Joshua 8 records a ceremony of blessing and curse on the two flanking mountains. And the book never reports a battle for the city, which is one of its quieter puzzles: Israel assembles at a major Canaanite centre as though it were already theirs to use.

The Greek tradition reads Shiloh here instead. That is worth knowing, because the tent of meeting was at Shiloh, and this chapter will mention a sanctuary at Shechem without explaining it.`,
    entityIds: [
      "joshua",
      "shechem",
      "mount-ebal",
      "mount-gerizim",
      "abraham",
      "jacob",
      "canaanites",
      "region-hill-country-ephraim",
      "tribe-ephraim",
      "tribe-manasseh-west",
    ],
    mapFeatureIds: ["site-shechem", "site-mount-ebal", "site-mount-gerizim"],
    mapCaption:
      "All the tribes gather at Shechem, in the pass between Mount Ebal and Mount Gerizim.",
    whatChanged:
      "Shechem becomes the book's final assembly point. No territory changes hands; a place already known becomes the setting for the close.",
    geographyExplanation:
      "Shechem's importance is entirely about the pass. The central highlands are hard to cross east to west, and this saddle between Ebal and Gerizim is the practical route, which is why the city was substantial, why it appears in Egyptian diplomatic correspondence, and why it kept turning up in Israel's covenant memory. The two mountains rise immediately on either side and make the site a natural amphitheatre. A gathering here is both easy to reach from every tribal area and impossible to mistake for anywhere else.",
    sequenceType: "event",
    viewport: { center: [35.2836, 32.2136], zoom: 11 },
    citations: [
      {
        sourceId: "wright-shechem",
        supportedClaim:
          "Shechem's fortress-temple, its long covenantal associations, and the absence of any reported battle for the city in Joshua",
      },
      {
        sourceId: "rainey-notley-sacred-bridge",
        supportedClaim:
          "Shechem's position controlling the only easy east-west pass through the central highlands",
      },
      {
        sourceId: "butler-joshua",
        locator: "on Joshua 24:1",
        supportedClaim:
          "The Greek tradition reads Shiloh where the Hebrew reads Shechem",
      },
    ],
    evidenceLabels: ["biblical-account", "externally-attested", "disputed"],
  },
  {
    id: "ch24-the-recital",
    chapter: 24,
    order: 2,
    title: "The recital: from beyond the River to this land",
    scriptureRefs: ["Joshua 24:2-13"],
    narrative: `What follows is not Joshua's speech but a first-person recital in God's voice, and it starts further back than anything else in the book. Your fathers lived beyond the River, even Terah, the father of Abraham, and they served other gods. The text does not soften that and neither should a reader: Israel's line begins in idolatry outside the land.

From there: I took Abraham from beyond the River and led him through Canaan, and gave him Isaac; I gave Jacob and Esau to Isaac, and Jacob's family went down to Egypt; I sent Moses and Aaron and plagued Egypt; I brought you to the sea and put darkness between you and the Egyptians; you lived in the wilderness many days; I brought you into the Amorites' land beyond the Jordan; Balak of Moab hired Balaam to curse you and I would not listen to him, so he blessed you; you crossed the Jordan and came to Jericho. It closes on a gift: a land you did not work, cities you did not build, vineyards and olive groves you did not plant.`,
    entityIds: [
      "terah",
      "abraham",
      "isaac",
      "jacob",
      "joseph",
      "moses",
      "aaron",
      "balaam",
      "balak",
      "egypt-new-kingdom",
      "moab",
      "amorites",
      "canaanites",
      "jordan-river",
      "jericho",
      "heshbon",
      "dibon",
      "mount-nebo",
      "beth-peor",
      "salt-sea",
      "arnon-river",
      "region-gilead",
    ],
    mapFeatureIds: [
      "site-jordan-river",
      "site-jericho",
      "site-heshbon",
      "site-dibon",
      "site-mount-nebo",
      "site-beth-peor",
      "site-arnon-river",
      "site-salt-sea",
      "site-shechem",
    ],
    mapCaption:
      "A recital of memory, not a route: the view spans from beyond the Euphrates to Egypt because the speech does, and no movement is drawn and no ground is claimed.",
    whatChanged:
      "Nothing. This milestone is retrospective: it recalls places from Genesis through Numbers and adds no advance, no route and no territory. The far ends of the recital, beyond the River and Egypt, are outside this study's site register and are deliberately not pinned.",
    geographyExplanation:
      "The span is the point. Beyond the River means beyond the Euphrates, the region Genesis associates with Ur and Haran; Egypt lies away to the south-west; between them runs the whole arc of settled country. Israel controlled none of it, and the recital does not claim otherwise. It names this ground to establish that the people were moved through it by someone else, which is the opposite of a territorial claim. The only places here the study can locate are the last stages, the Transjordan plateau and the crossing at Jericho, and even those are recalled rather than entered.",
    sequenceType: "retrospective",
    viewport: {
      center: [38.5, 32.0],
      zoom: 7,
      bounds: [
        [30.5, 26.8],
        [46.8, 37.5],
      ],
    },
    citations: [
      {
        sourceId: "mendenhall-law-covenant",
        supportedClaim:
          "The historical prologue as the opening element of the covenant form the chapter follows",
      },
      {
        sourceId: "hess-joshua",
        locator: "on Joshua 24:2-13",
        supportedClaim:
          "The recital is framed as divine first-person speech reaching back before Abraham",
      },
      {
        sourceId: "goldsworthy-according-to-plan",
        supportedClaim:
          "The shape of the biblical storyline from the patriarchs through Egypt to the land",
      },
    ],
    evidenceLabels: ["biblical-account", "theological-interpretation"],
  },
  {
    id: "ch24-choose-this-day",
    chapter: 24,
    order: 3,
    title: "Choose this day",
    scriptureRefs: ["Joshua 24:14-24"],
    narrative: `The recital turns into a demand. Fear the LORD and serve him in sincerity and truth. Put away the gods your fathers served beyond the River, and in Egypt. If serving the LORD seems bad to you, choose today whom you will serve, the gods from beyond the River or the gods of the Amorites in whose land you now live. As for me and my house, we will serve the LORD.

The phrasing is precise about the alternatives, and both are local: ancestral gods from the old country, or the gods of the people Israel is living among. The people answer confidently, listing what God has done for them.

Joshua refuses the answer. You cannot serve the LORD, he is a holy God, he is a jealous God. They insist. He makes them say it a second time and then names them witnesses against themselves. Only then does he accept it, and he immediately repeats the instruction they have not yet acted on: put away the foreign gods that are among you.`,
    entityIds: [
      "joshua",
      "abraham",
      "terah",
      "amorites",
      "canaanites",
      "egypt-new-kingdom",
      "shechem",
      "mount-ebal",
      "mount-gerizim",
    ],
    mapFeatureIds: ["site-shechem", "site-mount-gerizim", "site-mount-ebal"],
    mapCaption:
      "The choice is put at Shechem, in the middle of a land whose previous gods are named as the live alternative.",
    whatChanged:
      "Nothing territorially. The land's inhabitants reappear as a religious alternative rather than a military one.",
    geographyExplanation:
      "The two options Joshua names are both anchored in real places: gods from beyond the Euphrates, carried in family memory, and the gods of the Amorites in whose land Israel now lives. The second is the nearer danger precisely because of where Israel is standing. Shechem is not an empty site in a cleared country; it is a working Canaanite centre in the middle of a landscape full of established shrines and high places. The choice is being put in the most concrete possible setting.",
    sequenceType: "event",
    viewport: { center: [35.2836, 32.2136], zoom: 11 },
    citations: [
      {
        sourceId: "calvin-joshua",
        locator: "on Joshua 24:19",
        supportedClaim:
          "A Reformed reading of Joshua's refusal as exposing untested self-confidence rather than barring the covenant",
      },
      {
        sourceId: "mcconville-williams-joshua",
        supportedClaim:
          "The exchange read as covenant procedure requiring a witnessed and repeated commitment",
      },
    ],
    evidenceLabels: ["biblical-account", "theological-interpretation"],
  },
  {
    id: "ch24-covenant-and-stone",
    chapter: 24,
    order: 4,
    title: "The covenant and the stone that heard it",
    scriptureRefs: ["Joshua 24:25-28"],
    narrative: `Joshua makes a covenant with the people that day and gives them a statute and an ordinance at Shechem. He writes the words in the book of the law of God, and he takes a great stone and sets it up under the oak that was by the sanctuary of the LORD.

Then he says something odd and memorable. This stone shall be a witness against us, for it has heard all the words the LORD spoke to us. Not a record of the words, a hearer of them. The second altar of chapter 22 was built to answer a future accusation; this stone is set up to make one.

The elements here are the ordinary furniture of ancient agreements: a written text deposited, a physical witness erected, obligations stated, the parties named as witnesses against themselves. What is unusual is that the subject party's own confidence has just been contradicted by the mediator, twice, and the stone is set up anyway. Joshua then sends everyone home, each to his own inheritance.`,
    entityIds: [
      "joshua",
      "shechem",
      "mount-ebal",
      "mount-gerizim",
      "jacob",
      "tribe-ephraim",
      "tribe-levi",
      "region-hill-country-ephraim",
    ],
    mapFeatureIds: ["site-shechem", "site-mount-ebal", "site-mount-gerizim"],
    mapCaption:
      "A written covenant and a standing stone at Shechem, beside a sanctuary the text mentions without explaining.",
    whatChanged:
      "Shechem gains a covenant stone and a written deposit. No boundary moves, and the stone has never been identified on the ground.",
    geographyExplanation:
      "The text places the stone under an oak by the sanctuary of the LORD at Shechem, which is a problem worth keeping in view, because the tent of meeting is at Shiloh. Excavation at Shechem found a massive fortress-temple and standing stones, but nothing that can be tied to this verse, and the study makes no such link. What the geography does supply is the reason a covenant deposited here would be seen: the pass carries the traffic, and the tribes disperse from it in every direction.",
    sequenceType: "event",
    viewport: { center: [35.2836, 32.2136], zoom: 12 },
    citations: [
      {
        sourceId: "hillers-covenant",
        supportedClaim:
          "Written deposit, standing witnesses and stated obligations as standard components of covenant making",
      },
      {
        sourceId: "wright-shechem",
        supportedClaim:
          "Excavation at Tell Balata uncovered a fortress-temple and standing stones, none of which can be tied to a specific biblical verse",
      },
    ],
    evidenceLabels: ["biblical-account", "externally-attested"],
  },
  {
    id: "ch24-three-burials",
    chapter: 24,
    order: 5,
    title: "Three burials close the book",
    scriptureRefs: ["Joshua 24:29-33"],
    narrative: `Joshua dies at a hundred and ten and is buried in his own inheritance at Timnath-serah in the hill country of Ephraim. Israel served the LORD all his days, and all the days of the elders who outlived him, which is a good report with a time limit written into it.

Then the bones of Joseph, carried out of Egypt, are buried at Shechem in the plot of ground Jacob had bought from the sons of Hamor. A promise made in Genesis and kept at the exodus finally lands here, in ground purchased rather than taken. And Eleazar the priest dies and is buried in the hill of Phinehas his son, in the hill country of Ephraim.

A book about receiving land ends with the land receiving its people. Not a coronation, not a monument, three graves. Two of them cannot be located: Timnath-serah is probably Khirbet Tibnah and no more than probably, and the hill of Phinehas is unknown. The one burial place that can be pointed to is a field somebody bought.`,
    entityIds: [
      "joshua",
      "joseph",
      "eleazar",
      "phinehas",
      "jacob",
      "aaron",
      "timnath-serah",
      "shechem",
      "region-hill-country-ephraim",
      "tribe-ephraim",
      "tribe-levi",
      "egypt-new-kingdom",
    ],
    mapFeatureIds: ["site-timnath-serah", "site-shechem", "site-shiloh"],
    mapCaption:
      "Two of the three burials can be placed only approximately, and the third not at all; the map shows what it can.",
    whatChanged:
      "The last places the book adds are graves. Joshua's portion and Joseph's plot appear as burial sites; Eleazar's is left off, because it is unknown.",
    geographyExplanation:
      "Both named burials are in the central hill country, roughly thirty kilometres apart, in the highland belt Israel actually held. That is quietly appropriate: the book closes in the terrain it could occupy rather than on the plains it could not. Timnath-serah's identification with Khirbet Tibnah rests on the surviving name and the general location the text gives, which is reasonable and unproven, and this is Joshua's own grave. Joseph's plot at Shechem is the one piece of ground in the whole book that Israel holds by purchase.",
    sequenceType: "event",
    viewport: { center: [35.16, 32.13], zoom: 10 },
    citations: [
      {
        sourceId: "rainey-notley-sacred-bridge",
        supportedClaim:
          "Timnath-serah is usually but not securely identified with Khirbet Tibnah, and the hill of Phinehas is unlocated",
      },
      {
        sourceId: "wright-shechem",
        supportedClaim:
          "Shechem's association with the patriarchal purchase of ground and with Joseph's burial tradition",
      },
      {
        sourceId: "weinfeld-promise-land",
        supportedClaim:
          "Inheritance and land transfer traditions, including purchase as a mode of holding ground",
      },
    ],
    evidenceLabels: ["biblical-account", "theological-interpretation", "disputed"],
  },
];
