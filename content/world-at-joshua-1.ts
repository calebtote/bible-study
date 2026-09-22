/**
 * The world at Joshua 1: Israel's situation, Canaan's political landscape, and
 * the regional powers, plus the study's chronology anchors.
 *
 * The division of labour in this file is deliberate. `WORLD_AT_JOSHUA_1`
 * describes the setting without putting a single absolute date in it, using
 * archaeological period names ("Late Bronze Age") where a period is meant.
 * `HISTORICAL_ANCHORS` is the only place in the study where years appear, and
 * every anchor has to declare the reconstruction its figure belongs to. Two
 * anchors give competing dates for the same events, three give external or
 * conventional fixed points, and three exist to say that the evidence does not
 * support a date at all. Nothing in the chapter, milestone or Before Joshua data
 * depends on any of them.
 */

import type { HistoricalAnchor, StudySection } from "./types";

export const WORLD_AT_JOSHUA_1: StudySection[] = [
  /* ---------------------------------------------------------------- */
  /* Israel's situation                                               */
  /* ---------------------------------------------------------------- */
  {
    id: "world-israels-situation",
    title: "Israel's situation",
    body: `When Joshua 1 begins, Israel is not in the land. The camp is on the eastern side of the river, on the stretch of valley floor the text calls the plains of Moab, at [[entity:shittim]] opposite [[entity:jericho]]. The oasis and the hills behind it are in plain sight. Nothing on that side of the water belongs to them.

What they do have is worth setting out. They have people, organised as households inside clans inside tribes, and that is the only administrative structure in evidence: no capital, no palace, no bureaucracy, no scribal school, no coinage. They have livestock and portable goods. They have a tent sanctuary with the ark in it, carried by Levites, which is the nearest thing to a national institution they possess. They have a written law and a priesthood under [[entity:eleazar]] to keep and read it. They have territory, but it is on the wrong side of the river: the land taken from Sihon and Og, assigned by Moses to [[entity:tribe-reuben]], [[entity:tribe-gad]] and [[entity:tribe-manasseh-east]], together with an agreement that their fighting men cross first. And they have a leader who has never held independent command.

What they do not have matters as much. Not one walled town. No king, and no mechanism for producing one. No chariots: in this book the chariotry belongs to the other side. No siege equipment is ever mentioned. No treaty with Egypt, which is the power that actually supervises the country they are about to enter. No secure water supply once they leave the valley floor.

On size, Numbers reports 601,730 men of fighting age at the second census. That figure is a long-standing problem, partly because the Hebrew word usually rendered "thousand" can also denote a unit or a clan grouping, so the real scale of the group is genuinely uncertain and this study does not pretend otherwise. What the text is clear about is the shape of the thing: a large kinship body, mobile, armed, landless west of the river, and camped a few kilometres from a crossing it has not made.`,
    scriptureRefs: [
      "Joshua 1:1-2",
      "Joshua 1:10-15",
      "Joshua 3:1",
      "Numbers 26:1-4",
      "Numbers 32:16-27",
      "Deuteronomy 34:8-9",
      "Exodus 40:34-38",
    ],
    citations: [
      {
        sourceId: "stager-forging-identity",
        supportedClaim:
          "Israelite society in this period is organised as households within clans within tribes, without central institutions",
      },
      {
        sourceId: "kitchen-reliability",
        supportedClaim:
          "The census figures present a well-known difficulty, and the term rendered 'thousand' may denote a unit or clan rather than a numeral",
      },
      {
        sourceId: "rainey-notley-sacred-bridge",
        supportedClaim:
          "The plains of Moab opposite Jericho are the staging area for the crossing, a defined stretch of the valley floor",
      },
      {
        sourceId: "havrelock-river-jordan",
        supportedClaim:
          "The Jordan functions as a threshold, which leaves the eastern tribes in an ambiguous position from the outset",
      },
    ],
    evidenceLabels: ["biblical-account", "disputed"],
  },

  /* ---------------------------------------------------------------- */
  /* Canaan's political landscape                                     */
  /* ---------------------------------------------------------------- */
  {
    id: "world-canaan-political-landscape",
    title: "Canaan's political landscape",
    body: `There was no country called Canaan in the sense of a state. There was a regional name, used by Egyptian scribes and by the biblical writers, and under that name a mosaic of small independent towns. Each controlled the fields and villages within a short walk of its wall. Each had a ruler who was addressed as king locally and treated by Egypt as a subordinate.

The best evidence for this is a cache of diplomatic letters recovered from an Egyptian capital, written in Akkadian by rulers across Canaan and Syria to the pharaoh. Their contents are mundane and revealing: requests for grain, appeals for a few dozen archers, accusations that the ruler of the next town is disloyal, protests of loyalty, complaints about people called apiru who live outside the system. Read them and the landscape of [[entity:canaanite-city-states]] is unmistakable. The date of that archive is given in the anchors below, because where it falls relative to Joshua depends on which chronology you adopt.

The towns were small. Most Late Bronze settlements in the hill country and the lowlands held a few hundred to a couple of thousand people. [[entity:hazor]], at roughly 80 hectares including its lower city, is the conspicuous exception, and Joshua says as much when it calls Hazor the head of those kingdoms.

This single point changes how the whole book reads. The thirty-one kings listed in Joshua 12 are not thirty-one nations. They are town rulers, each with a garrison rather than an army, each able to field a few hundred men, and each capable of serious resistance only in combination with others, which is exactly what chapters 10 and 11 describe. "King of Jericho" means something closer to a mayor with a wall, a retinue, and the authority to make or refuse a treaty. Read the word as monarch of a nation and the campaigns inflate into a war between states. Read it correctly and Joshua reports a series of engagements against small polities in a fragmented country under distant supervision.

Egyptian oversight was real but thin: correspondence, tribute, occasional punitive marches, and garrisons or administrative centres at a handful of places such as [[entity:beth-shan]], [[entity:joppa]] and [[entity:gaza]]. Egypt goes almost entirely unmentioned in Joshua, which is one of the book's genuine puzzles rather than a detail to smooth over.`,
    scriptureRefs: [
      "Joshua 9:1-2",
      "Joshua 10:1-5",
      "Joshua 11:1-5",
      "Joshua 12:7-24",
      "Joshua 17:16-18",
    ],
    citations: [
      {
        sourceId: "moran-amarna",
        supportedClaim:
          "The Amarna correspondence shows Canaan as a set of small competing city-states whose rulers write to the pharaoh, and records complaints about apiru",
      },
      {
        sourceId: "rainey-notley-sacred-bridge",
        supportedClaim:
          "Canaan in Egyptian and biblical usage is a region and its population, administered through local rulers, tribute and a few garrison centres",
      },
      {
        sourceId: "mazar-archaeology-land",
        supportedClaim:
          "Late Bronze Canaanite towns were modest in size, typically housing a few hundred to a few thousand people",
      },
      {
        sourceId: "naaman-conquest",
        supportedClaim:
          "The political landscape known from the Amarna letters corresponds closely to the picture of many small kingdoms in Joshua",
      },
      {
        sourceId: "hess-joshua",
        supportedClaim:
          "The Hebrew term rendered 'king' in Joshua designates the ruler of a town and its immediate territory",
      },
      {
        sourceId: "yadin-hazor",
        supportedClaim:
          "Hazor's upper and lower city together cover an area far larger than any other settlement in the land",
      },
    ],
    evidenceLabels: ["biblical-account", "externally-attested"],
  },

  /* ---------------------------------------------------------------- */
  /* Regional powers                                                  */
  /* ---------------------------------------------------------------- */
  {
    id: "world-regional-powers",
    title: "The regional powers",
    body: `Two states mattered in this world and neither of them was in Canaan.

[[entity:egypt-new-kingdom]] held the south. It treated the corridor from the Sinai to the Lebanon as its sphere and ran it without settling it: local rulers kept their positions and sent tribute, Egyptian officials and small garrisons sat at points along the coastal highway and at valley junctions, and armies came through when a vassal stopped paying or a rival pressed south. The Hittite state held the north, based in Anatolia and reaching into northern Syria. The two fought over the Syrian middle ground and eventually fixed the boundary between them by treaty. Canaan sat inside Egypt's half of that settlement, which is why a ruler in the hill country wrote to a pharaoh rather than to anyone nearer. The [[entity:hittites]] named among the peoples of Canaan in the biblical lists are a separate question: the relationship between the two uses of the name is unresolved, and this study does not treat those groups as agents of the northern state.

What is known is that the system came apart at the end of the Late Bronze Age. Across the eastern Mediterranean, city after city was destroyed or abandoned within a few generations. The Hittite state ended. Egypt's grip on Canaan loosened and then lapsed. Long-distance trade in metals and luxury goods collapsed. New populations, including the groups the Bible calls [[entity:philistines]], established themselves on the southern coast. In the highlands, small unfortified villages multiplied in country that had been thinly occupied before.

What is inferred is why. Drought, earthquake, migration, internal revolt, the failure of trade networks, and combinations of all of these have been argued, and no single explanation has won. It is worth being blunt about the limits here: destruction layers are physical facts, but they carry no signature. A burnt town tells you it burned, not who burned it or why.

For this study the consequence is practical. Joshua's setting has to be placed somewhere in that long decline, and exactly where is what the chronologies below disagree about.`,
    scriptureRefs: [
      "Joshua 1:4",
      "Joshua 11:1-4",
      "Joshua 13:1-6",
      "Joshua 17:16-18",
      "Joshua 24:11-13",
    ],
    citations: [
      {
        sourceId: "rainey-notley-sacred-bridge",
        supportedClaim:
          "Egyptian administration of Canaan worked through vassal rulers, tribute and garrison centres on the main routes",
      },
      {
        sourceId: "moran-amarna",
        supportedClaim:
          "Correspondence between Canaanite rulers and the Egyptian court was the working mechanism of Egyptian oversight",
      },
      {
        sourceId: "anchor-bible-dictionary",
        locator: "s.v. Hittites",
        supportedClaim:
          "The relationship between the Hittites of the biblical lists and the Anatolian Hittite state is disputed",
      },
      {
        sourceId: "mazar-archaeology-land",
        supportedClaim:
          "Widespread destruction and abandonment of Canaanite sites marks the end of the Late Bronze Age, with no agreed single cause",
      },
      {
        sourceId: "stager-forging-identity",
        supportedClaim:
          "New coastal populations and an expansion of small highland villages follow the collapse of the Late Bronze system",
      },
      {
        sourceId: "kitchen-reliability",
        supportedClaim:
          "Joshua never mentions Egyptian forces in Canaan, which any historical reconstruction of the book has to account for",
      },
    ],
    evidenceLabels: ["externally-attested", "reconstruction", "disputed"],
  },
];

/* ------------------------------------------------------------------ */
/* Chronology anchors: the only place absolute dates appear           */
/* ------------------------------------------------------------------ */

export const HISTORICAL_ANCHORS: HistoricalAnchor[] = [
  {
    id: "early-date-exodus-and-conquest",
    label: "The early date: a fifteenth-century exodus and conquest",
    approximateDate: "exodus c. 1446 BC; crossing of the Jordan c. 1406 BC",
    chronology: "early-date-15th-century",
    description:
      "Built on 1 Kings 6:1, which places the start of Solomon's temple 480 years after the exodus. Taken as a plain total and counted back from the middle of the tenth century BC, that puts the exodus in the mid-fifteenth century and the entry into Canaan forty years later; Judges 11:26's figure of 300 years is read as support. The position has to redate Jericho's fallen fortifications from the Middle Bronze Age to the end of Late Bronze I, which most excavators reject, and has to explain why Egyptian records show pharaohs campaigning freely through a Canaan that Israel was supposedly holding. Its defenders read 480 as a sum; its critics read it as a schematic figure, twelve generations of forty years.",
    citations: [
      {
        sourceId: "kitchen-reliability",
        supportedClaim:
          "The Egyptological objections to a fifteenth-century exodus, set out by a scholar who nonetheless defends the narratives' substantial reliability",
      },
      {
        sourceId: "provan-long-longman",
        supportedClaim:
          "How the 480 years of 1 Kings 6:1 functions in the chronological argument, and the methodological questions facing both positions",
      },
      {
        sourceId: "wood-jericho-bar",
        supportedClaim:
          "A proposed redating of Jericho's destruction to the end of Late Bronze I, offered in support of the early date",
      },
      {
        sourceId: "bienkowski-bar-reply",
        supportedClaim:
          "The published objection to that redating, defending a Middle Bronze Age destruction",
      },
    ],
  },
  {
    id: "late-date-exodus-and-conquest",
    label: "The late date: a thirteenth-century exodus and conquest",
    approximateDate:
      "exodus c. 1260-1250 BC; entry into Canaan late in the thirteenth century BC",
    chronology: "late-date-13th-century",
    description:
      "Built on the Egyptian material rather than on 1 Kings 6:1. Exodus 1:11 has Israelites labouring on store cities including Raamses, a name pointing to the Ramesside delta capital founded under Ramesses II; destruction layers at Canaanite sites cluster at the end of the Late Bronze Age; and the Merneptah stele supplies a point by which a people called Israel is already in Canaan. On this reading the 480 years is schematic rather than arithmetical. The cost of the position is that it sits loosely with the internal chronology the books of Judges and Kings imply, and it still cannot match any particular destruction layer to any particular campaign.",
    citations: [
      {
        sourceId: "kitchen-reliability",
        supportedClaim:
          "The Egyptological case for placing the exodus in the Ramesside period, including the significance of the name Raamses",
      },
      {
        sourceId: "merneptah-stele",
        supportedClaim:
          "An Egyptian royal inscription provides a terminus by which a people called Israel was in Canaan",
      },
      {
        sourceId: "mazar-archaeology-land",
        supportedClaim:
          "Destructions at Canaanite sites cluster at the end of the Late Bronze Age",
      },
      {
        sourceId: "provan-long-longman",
        supportedClaim:
          "The methodological debate between the early and late chronologies, and what each has to concede",
      },
    ],
  },
  {
    id: "merneptah-stele-names-israel",
    label: "The Merneptah stele: Israel named in Canaan",
    approximateDate: "c. 1208 BC",
    chronology: "external-fixed-point",
    description:
      "An Egyptian victory inscription from the reign of Merneptah lists Israel among the entities the pharaoh claims to have defeated in Canaan, and writes the name with a determinative usually read as marking a people rather than a city-state or a territory. This is the earliest mention of Israel outside the Bible and the firmest fixed point anywhere near the events of Joshua. It establishes that by this reign a group called Israel existed in Canaan and was prominent enough for a pharaoh to name. It says nothing about how that group got there, where it lived, how it was organised, or what it believed, and nothing at all about Joshua.",
    citations: [
      {
        sourceId: "merneptah-stele",
        supportedClaim:
          "The inscription names Israel in Canaan, written with a determinative usually taken to designate a people",
      },
      {
        sourceId: "rainey-notley-sacred-bridge",
        supportedClaim:
          "The reading of the Israel name in the stele and its place among Egyptian campaign records",
      },
    ],
  },
  {
    id: "amarna-archive",
    label: "The Amarna letters: Canaan described by its own rulers",
    approximateDate: "c. 1360-1330 BC",
    chronology: "external-fixed-point",
    description:
      "Several hundred clay tablets from the short-lived Egyptian capital at Akhetaten, mostly letters in Akkadian from rulers in Canaan and Syria to the pharaoh. They are dated by the reigns involved rather than by inference, which makes them unusually solid. Their value here is descriptive: they show dozens of small towns, mutually suspicious rulers, thin Egyptian supervision, and a class of displaced people called apiru. Where they sit relative to Joshua depends on the chronology adopted. On the early date they fall after Israel's entry, which raises the question of why they never mention it. On the late date they describe the world Israel is about to enter.",
    citations: [
      {
        sourceId: "moran-amarna",
        supportedClaim:
          "The archive's contents, language, and the political picture of Canaan it preserves",
      },
      {
        sourceId: "naaman-conquest",
        supportedClaim:
          "The correspondence between the Amarna-period political landscape and the picture of Canaan in Joshua",
      },
      {
        sourceId: "rainey-notley-sacred-bridge",
        supportedClaim:
          "The place of the Amarna letters among the Egyptian sources for Late Bronze Canaan",
      },
    ],
  },
  {
    id: "late-bronze-to-iron-age-transition",
    label: "The Late Bronze to Iron Age transition and the highland villages",
    approximateDate:
      "conventionally c. 1200 BC, with the settlement increase spread over the following two centuries",
    chronology: "external-fixed-point",
    description:
      "Archaeologists divide these periods at roughly 1200 BC, a convention resting on pottery sequences and on Egyptian and Aegean synchronisms rather than on any single event. In the century or two that follow, surveys record a marked increase in small unfortified villages in the central highlands, in country that had been thinly settled before. The pattern itself is not disputed. Its meaning is: Finkelstein reads it as populations from inside Canaan settling down, Dever as largely local with an outside element, Stager as the emergence of a distinctive highland village society. Whether these villages are the people Joshua describes is the live question, and it is a different question from the date.",
    citations: [
      {
        sourceId: "finkelstein-settlement",
        supportedClaim:
          "Survey evidence for a sharp increase in small highland settlements in Iron Age I, read as emergence from within Canaan",
      },
      {
        sourceId: "dever-early-israelites",
        supportedClaim:
          "A reading of the same settlement evidence as largely indigenous with some element from outside",
      },
      {
        sourceId: "stager-forging-identity",
        supportedClaim:
          "The character of highland village society, its households and its agriculture, in the settlement period",
      },
      {
        sourceId: "mazar-archaeology-land",
        supportedClaim:
          "The conventional division between the Late Bronze and Iron Ages and the material basis for it",
      },
    ],
  },
  {
    id: "patriarchal-period-undated",
    label: "The patriarchal period: no date can be given",
    chronology: "no-consensus",
    description:
      "Nothing in Genesis fixes Abraham, Isaac or Jacob in absolute time, and no text or object outside the Bible identifies any of them. Arguments have been made from personal names, marriage and inheritance customs, treaty forms and patterns of movement that these narratives are at home in the second millennium BC, and arguments have been made that the same details fit a much later period of composition. Neither line produces a date, and the two are not evenly matched across every detail. This study therefore offers no figure for the patriarchs and describes everything before the exodus in relative sequence only. No approximate date is recorded on this anchor, deliberately.",
    citations: [
      {
        sourceId: "provan-long-longman",
        supportedClaim:
          "Why the patriarchal narratives cannot be assigned an absolute date, and how historians handle testimony of this kind",
      },
      {
        sourceId: "kitchen-reliability",
        supportedClaim:
          "The argument that features of the patriarchal narratives are at home in a second-millennium setting",
      },
      {
        sourceId: "finkelstein-silberman-unearthed",
        supportedClaim:
          "The argument that the patriarchal narratives reflect a much later period of composition",
      },
    ],
  },
  {
    id: "jericho-destruction-undated",
    label: "Jericho's destruction: no agreed date",
    chronology: "no-consensus",
    description:
      "Kenyon's excavation dated the great collapsed fortifications at Tell es-Sultan to the end of the Middle Bronze Age and found Late Bronze occupation slight. Wood argued for moving that destruction to the end of Late Bronze I, which would suit a fifteenth-century conquest; Bienkowski replied in defence of the earlier date, and most specialists have stayed with it. The site as currently understood cannot be made to carry either chronology comfortably, and a destruction layer would not identify its author even if the dating were agreed. No date is offered here, and the chapter on Jericho says the same thing in its own place.",
    citations: [
      {
        sourceId: "kenyon-digging-up-jericho",
        supportedClaim:
          "The stratigraphy of Tell es-Sultan and the dating of its major fortifications to the Middle Bronze Age",
      },
      {
        sourceId: "wood-jericho-bar",
        supportedClaim:
          "The case for redating the destruction to the end of Late Bronze I",
      },
      {
        sourceId: "bienkowski-jericho-lb",
        supportedClaim:
          "The technical statement that Late Bronze occupation at the site was slight",
      },
      {
        sourceId: "bienkowski-bar-reply",
        supportedClaim: "The published reply rejecting the proposed redating",
      },
    ],
  },
  {
    id: "hazor-destruction-unresolved",
    label: "Who burned Hazor, and when",
    chronology: "no-consensus",
    description:
      "The Late Bronze city at Hazor was violently destroyed and its palace burned. That much is documented. Ben-Tor reads the destruction as Israelite; Zuckerman, excavating the same site, read it as internal collapse, and others have proposed Egyptians or incoming groups from the sea. Two excavators of one site publishing opposing conclusions is the plainest available demonstration that ash layers do not sign their own names. The date of the burning is argued within the Late Bronze to Iron Age transition and is not settled, so no figure is given here, and the destruction is not used in this study as evidence for either chronology.",
    citations: [
      {
        sourceId: "yadin-hazor",
        supportedClaim:
          "The identification of a violent destruction of the Late Bronze city at Hazor",
      },
      {
        sourceId: "ben-tor-hazor",
        supportedClaim:
          "The burning of the Late Bronze palace in the renewed excavations, read by the excavator as Israelite",
      },
      {
        sourceId: "ben-tor-zuckerman-hazor",
        supportedClaim:
          "Two excavators of the same site reaching different conclusions about who destroyed Hazor",
      },
    ],
  },
];

export const ANCHOR_BY_ID: Record<string, HistoricalAnchor> =
  Object.fromEntries(HISTORICAL_ANCHORS.map((a) => [a.id, a]));

/** Anchors grouped by the reconstruction they belong to, for the UI. */
export const ANCHORS_BY_CHRONOLOGY: Record<
  HistoricalAnchor["chronology"],
  HistoricalAnchor[]
> = {
  "early-date-15th-century": HISTORICAL_ANCHORS.filter(
    (a) => a.chronology === "early-date-15th-century"
  ),
  "late-date-13th-century": HISTORICAL_ANCHORS.filter(
    (a) => a.chronology === "late-date-13th-century"
  ),
  "external-fixed-point": HISTORICAL_ANCHORS.filter(
    (a) => a.chronology === "external-fixed-point"
  ),
  "no-consensus": HISTORICAL_ANCHORS.filter(
    (a) => a.chronology === "no-consensus"
  ),
};
