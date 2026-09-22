/**
 * "Before Joshua": the eight stages of background a reader needs in order for
 * Joshua 1 to make sense.
 *
 * Two constraints shape this file. First, no absolute dates appear anywhere in
 * it. Genesis through Deuteronomy cannot be placed on a calendar without
 * adopting a chronology, so the stages use relative sequence only ("generations
 * earlier", "before the family went down to Egypt") and the dating question is
 * handled in `HISTORICAL_ANCHORS`, where each figure has to name the
 * reconstruction it belongs to. Second, only places that the site register
 * actually locates are referenced as map features. Egypt, the wilderness route
 * and the mountain of the covenant are not in the register, because their
 * locations are not known, and the stages say so rather than inventing pins.
 */

import type { BeforeStage } from "./types";

export const BEFORE_STAGES: BeforeStage[] = [
  /* ---------------------------------------------------------------- */
  /* 1. Abraham and the promises                                      */
  /* ---------------------------------------------------------------- */
  {
    id: "abraham-and-the-promises",
    order: 1,
    title: "Abraham and the promises",
    body: `Joshua 1 tells Joshua to take possession of a land and never pauses to explain why that land. The answer sits generations earlier, with one family and one promise.

[[entity:abraham]] does not come from Canaan. Joshua's own closing speech reaches back past him to [[entity:terah]], who lived beyond the Euphrates and served other gods. Abraham is called out of that world and sent toward a land he is not shown in advance. Once there he moves through it instead of settling: [[entity:shechem]] in the central pass, the high ground beside [[entity:bethel]], south into the Negev, the oaks of Mamre at [[entity:hebron]], then [[entity:beersheba]] at the desert edge. He walks the length of the country and owns none of it.

Three things are promised, and Joshua leans on all three: descendants, blessing that reaches other nations, and this particular land. The land promise is restated with rising formality until Genesis 15 puts it in the form of a covenant, a sworn grant rather than a hope, and Genesis 17 attaches circumcision to it as a sign. That is why Joshua 5 has to deal with an uncircumcised generation before a single battle is fought.

One piece of ground does change hands. Abraham buys the cave at Machpelah beside Hebron as a burial plot, for a named price, in front of witnesses. It is a grave, not an estate, and it is the family's entire legal holding in the land. It is also why Hebron carries such weight when [[entity:caleb]] asks for it later.

So when Joshua 1 speaks of land God is giving, it is not making a new offer. It is executing an old one, and the book keeps saying so.

When Abraham lived cannot be stated. Nothing in the text fixes him in absolute time, and no evidence outside it identifies him, so this study gives no figure and keeps to relative sequence for everything before the exodus.`,
    scriptureRefs: [
      "Genesis 12:1-9",
      "Genesis 13:14-18",
      "Genesis 15:7-21",
      "Genesis 17:1-14",
      "Genesis 23:17-20",
      "Joshua 24:2-3",
    ],
    entityIds: [
      "abraham",
      "terah",
      "isaac",
      "caleb",
      "shechem",
      "bethel",
      "hebron",
      "beersheba",
      "canaanites",
      "region-negev",
    ],
    mapFeatureIds: [
      "site-shechem",
      "site-bethel",
      "site-hebron",
      "site-beersheba",
    ],
    viewport: {
      center: [35.15, 31.75],
      zoom: 8,
      bounds: [
        [34.6, 31.1],
        [35.7, 32.4],
      ],
    },
    geographicOrientation:
      "Everything here happens along one line of high ground: the central ridge of Canaan, running north to south with steep valleys falling away on both sides. Shechem sits in the only easy east-west pass through those highlands. Bethel stands on the watershed further south, where the ridge road runs. Hebron, at roughly 900 m, commands the southern end of the same ridge. Beersheba marks the point where rainfall stops supporting reliable farming and the Negev begins. Abraham's movements are not wandering in the abstract; they trace the spine of the country, on the road that Israel's later campaigns will use and that the allotment lists will describe.",
    citations: [
      {
        sourceId: "rainey-notley-sacred-bridge",
        supportedClaim:
          "Shechem, Bethel, Hebron and Beersheba lie along the central ridge route, which is the country's main north-south road",
      },
      {
        sourceId: "weinfeld-promise-land",
        supportedClaim:
          "The land promise is framed as a grant and an inheritance, in terms comparable with ancient Near Eastern land-transfer traditions",
      },
      {
        sourceId: "hillers-covenant",
        supportedClaim:
          "Genesis 15 presents the promise as a sworn covenant rather than an informal undertaking",
      },
      {
        sourceId: "provan-long-longman",
        supportedClaim:
          "No absolute date for the patriarchal narratives commands agreement, which is why none is offered here",
      },
    ],
    evidenceLabels: ["biblical-account", "theological-interpretation"],
  },

  /* ---------------------------------------------------------------- */
  /* 2. Isaac, Jacob and the land                                     */
  /* ---------------------------------------------------------------- */
  {
    id: "isaac-jacob-and-the-land",
    order: 2,
    title: "Isaac, Jacob and the land",
    body: `The promise does not stay with one man. It is restated to [[entity:isaac]] in the south, near Beersheba, with an explicit instruction not to go down to Egypt during a famine. It is restated again to [[entity:jacob]], and after that the family's story is tied to two places in the hill country that Joshua will return to.

The first is [[entity:bethel]]. Jacob, running from his brother, sleeps on the ridge, dreams of a stairway between earth and heaven, wakes and says God was in this place and he had not known it. He sets up the stone he slept on, names the site Bethel, and makes a vow. Years later he comes back and builds an altar there. Bethel is a sanctuary in this family's memory long before it is a town in a conquest list.

The second is [[entity:shechem]]. Returning from the east, Jacob camps in the pass, and then buys a plot of ground from the sons of Hamor and builds an altar on it. That purchase is small, legal and specific, and it is load-bearing. Joshua 24 ends the book at Shechem, where [[entity:joseph]]'s bones are buried in exactly that plot. Israel's covenant renewal and its oldest deed to land in Canaan are at the same address.

Shechem is not only a family memory. Excavation at Tell Balata shows a substantial fortified centre with a temple, and the city appears by name in Egyptian diplomatic correspondence as a political power in the highlands. Its position explains both: whoever holds the pass controls movement across the central hills.

Jacob's own name changes to Israel after a night of wrestling at the [[entity:jabbok-river]]. The people Joshua leads are named after a man, and the text never lets that be forgotten.`,
    scriptureRefs: [
      "Genesis 26:1-5",
      "Genesis 28:10-22",
      "Genesis 32:22-32",
      "Genesis 33:18-20",
      "Genesis 35:9-15",
      "Genesis 48:21-22",
      "Joshua 24:32",
    ],
    entityIds: [
      "isaac",
      "jacob",
      "joseph",
      "abraham",
      "bethel",
      "shechem",
      "jabbok-river",
      "beersheba",
      "mount-ebal",
      "mount-gerizim",
    ],
    mapFeatureIds: [
      "site-bethel",
      "site-shechem",
      "site-mount-ebal",
      "site-mount-gerizim",
      "site-jabbok-river",
      "site-beersheba",
    ],
    viewport: {
      center: [35.28, 32.0],
      zoom: 8,
      bounds: [
        [34.8, 31.2],
        [35.9, 32.4],
      ],
    },
    geographicOrientation:
      "Shechem sits in a saddle between two mountains, Ebal to the north and Gerizim to the south, in the one place where a road can cross the central highlands from east to west without a serious climb. Everything that happens at Shechem in the Bible happens because of that pass. Bethel stands about 30 km south, on the watershed where the north-south ridge road runs at its highest and driest. The Jabbok enters the Jordan from the east and cuts the Gilead highlands in two, which is why it works later as an allotment boundary. Jacob's movements between these points follow the practical routes of the country rather than a straight line.",
    citations: [
      {
        sourceId: "wright-shechem",
        supportedClaim:
          "Excavation at Tell Balata revealed a fortified centre with a temple and a long association with covenant-making",
      },
      {
        sourceId: "moran-amarna",
        supportedClaim:
          "Shechem appears in Egyptian diplomatic correspondence as a significant political centre in the highlands",
      },
      {
        sourceId: "rainey-notley-sacred-bridge",
        supportedClaim:
          "Shechem controls the only easy east-west pass through the central hill country, between Ebal and Gerizim",
      },
      {
        sourceId: "hess-joshua",
        locator: "on Joshua 24:32",
        supportedClaim:
          "Joseph's burial at Shechem is tied specifically to the plot of ground Jacob bought from the sons of Hamor",
      },
    ],
    evidenceLabels: [
      "biblical-account",
      "externally-attested",
      "theological-interpretation",
    ],
  },

  /* ---------------------------------------------------------------- */
  /* 3. Joseph and the move to Egypt                                  */
  /* ---------------------------------------------------------------- */
  {
    id: "joseph-and-the-move-to-egypt",
    order: 3,
    title: "Joseph and the move to Egypt",
    body: `A promise about a land is followed by generations spent outside it. The mechanism is a family quarrel and a famine.

[[entity:joseph]], one of [[entity:jacob]]'s twelve sons, is sold by his brothers to traders heading for Egypt. He ends up managing Egyptian grain reserves, and when the famine reaches Canaan his own family comes to buy food and the two halves of the story meet. Jacob's household, counted at seventy persons, goes down through [[entity:beersheba]] to Egypt and is settled in the delta district the text calls Goshen. This is not the district of the same name in the southern hill country that Joshua 10 and 11 mention; the shared name is a genuine trap.

They are shepherds in good grazing country on the eastern edge of the Nile delta, and they multiply. Movement of this kind is ordinary for the period: Egyptian records document Asiatic groups entering the delta in times of drought and famine, sometimes by permission, and Semitic names turn up in Egyptian households. What is not ordinary is the family's insistence that it does not belong there.

That insistence is Joseph's last act. Dying in Egypt, he makes the family swear an oath: God will visit you, and when he does, carry my bones up from here. Exodus records Moses taking the bones out at the departure. Joshua 24 records their burial at [[entity:shechem]], in Jacob's plot, in the book's closing verses.

So the entire span from Genesis 50 to Joshua 24 is held together by an unburied body. Joshua 1 opens with a people outside the land looking in, and the reason they are outside it at all is here, along with the reason they are carrying a coffin.`,
    scriptureRefs: [
      "Genesis 37:12-36",
      "Genesis 45:4-11",
      "Genesis 46:1-7",
      "Genesis 50:22-26",
      "Exodus 1:1-7",
      "Exodus 13:19",
      "Joshua 24:32",
    ],
    entityIds: [
      "joseph",
      "jacob",
      "moses",
      "shechem",
      "beersheba",
      "hebron",
      "egypt-new-kingdom",
      "region-goshen-judah",
    ],
    mapFeatureIds: ["site-beersheba", "site-hebron", "site-shechem"],
    viewport: {
      center: [34.2, 31.3],
      zoom: 7,
      bounds: [
        [31.0, 29.4],
        [35.7, 32.4],
      ],
    },
    geographicOrientation:
      "The route from southern Canaan to Egypt leaves the hill country at Beersheba, drops to the coastal plain, and follows the shore road across the northern Sinai to the eastern edge of the Nile delta, a journey of several hundred kilometres with water at intervals. It is the busiest road in the region and carries armies in both directions for the whole of the period covered by this study. The map cannot show the Egyptian end of it, because this study's register contains no located sites in Egypt or the Sinai. Goshen is placed in the eastern delta by most reconstructions, but no coordinate is asserted here.",
    citations: [
      {
        sourceId: "rainey-notley-sacred-bridge",
        supportedClaim:
          "The coastal road across the northern Sinai is the standard route between southern Canaan and the eastern Nile delta",
      },
      {
        sourceId: "kitchen-reliability",
        supportedClaim:
          "Egyptian sources document Asiatic groups entering the delta during famine, and Semitic names appear in Egyptian household records",
      },
      {
        sourceId: "hess-joshua",
        locator: "on Joshua 24:32",
        supportedClaim:
          "The burial of Joseph's bones at Shechem closes an oath sworn generations earlier in Egypt",
      },
      {
        sourceId: "woudstra-joshua",
        supportedClaim:
          "The land promise is presented as continuous across the generations in Egypt, unbroken by the family's absence from Canaan",
      },
    ],
    evidenceLabels: ["biblical-account", "externally-attested"],
  },

  /* ---------------------------------------------------------------- */
  /* 4. Oppression and exodus                                         */
  /* ---------------------------------------------------------------- */
  {
    id: "oppression-and-exodus",
    order: 4,
    title: "Oppression and exodus",
    body: `A new king comes to power who, in the text's phrase, did not know Joseph. The family that was welcomed becomes a labour force: brickmaking, building work on store cities, quotas, and then a policy against its male children. The change is political rather than personal. A large foreign population in the delta looks like a security problem, and the response is forced labour.

[[entity:moses]], an Israelite raised in an Egyptian household, kills an overseer, flees, and is sent back with a demand rather than a petition: let the people go. What follows is a contest, and the text presents it as a contest about who actually controls Egypt. The plagues strike the Nile, the weather, the crops, the livestock, the light, and finally the firstborn, and each of those was the business of an Egyptian god. On the last night Israel eats a meal standing up, marks its doorframes with blood, and leaves.

Then the sea. Pharaoh's chariotry pursues, the water is driven back, Israel crosses on dry ground, and the pursuing force is lost when it returns. The song in Exodus 15 is one of the oldest-sounding pieces of Hebrew in the Bible.

What we do not know is where this happened. No Egyptian record of the departure survives, which is unsurprising given that Egyptian royal texts do not commemorate losses, though an absence of evidence is not the same thing as evidence against. The Hebrew names a sea of reeds, not the Red Sea of later translation, and the location is not established; the proposed routes are reconstructions.

Joshua assumes all of it. [[entity:rahab]] cites the drying of the sea as the reason her city is afraid, and Joshua 3 and 4 stage the Jordan crossing as a deliberate repetition, saying so in as many words.`,
    scriptureRefs: [
      "Exodus 1:8-14",
      "Exodus 2:23-25",
      "Exodus 3:7-10",
      "Exodus 12:29-42",
      "Exodus 13:17-22",
      "Exodus 14:21-31",
      "Exodus 15:1-13",
      "Joshua 2:9-11",
      "Joshua 4:21-24",
    ],
    entityIds: [
      "moses",
      "aaron",
      "joshua",
      "rahab",
      "egypt-new-kingdom",
      "jordan-river",
      "jericho",
    ],
    mapFeatureIds: ["site-brook-of-egypt"],
    viewport: {
      center: [33.4, 30.3],
      zoom: 7,
      bounds: [
        [31.5, 28.6],
        [35.2, 31.6],
      ],
    },
    geographicOrientation:
      "This is the one stage of the story the map cannot follow. Israel's departure point in the eastern delta, the sea it crossed, and the wilderness stages that follow are all unlocated in this study, because none of them can be identified with confidence. The single register point shown, the Brook of Egypt, is the seasonal watercourse later used as the land's south-western boundary marker; it stands here only to orient the reader between the delta and Canaan. The text is explicit that Israel did not take the short northern road along the coast, which would have reached Canaan within days and run straight into a chain of Egyptian fortresses, and turned south into the wilderness instead.",
    citations: [
      {
        sourceId: "kitchen-reliability",
        supportedClaim:
          "No Egyptian record of the exodus survives, and Egyptian royal inscriptions do not as a rule commemorate reverses",
      },
      {
        sourceId: "provan-long-longman",
        supportedClaim:
          "An absence of external evidence for a reported event is a different claim from evidence against it",
      },
      {
        sourceId: "rainey-notley-sacred-bridge",
        supportedClaim:
          "The crossing place of the sea is not established and the proposed exodus routes are modern reconstructions",
      },
      {
        sourceId: "howard-joshua",
        locator: "on Joshua 3-4",
        supportedClaim:
          "The Jordan crossing is narrated as a deliberate counterpart to the crossing of the sea",
      },
    ],
    evidenceLabels: ["biblical-account", "disputed"],
  },

  /* ---------------------------------------------------------------- */
  /* 5. Sinai and covenant identity                                   */
  /* ---------------------------------------------------------------- */
  {
    id: "sinai-and-covenant-identity",
    order: 5,
    title: "Sinai and covenant identity",
    body: `Three months out of Egypt, Israel camps at a mountain in the wilderness, and stays there for about a year. What happens there is the difference between a crowd and a people.

They are given law. Ten commandments spoken to the whole assembly, then a much larger body of case law covering debt, slavery, injury, property, festivals and the treatment of foreigners. They are given a covenant: the terms are read aloud, the people answer, and the agreement is sealed with blood and a shared meal on the mountain. They are given a sanctuary, and its design is the point of it. The tabernacle is a tent. It is built to be dismantled, carried and re-erected, with an ark at its centre and a cloud over it that signals when to move and when to stay. A portable holy place is what a people without territory can have.

The shape of the covenant is worth noticing. Preamble, historical review, stipulations, witnesses, blessings and curses: the same sequence appears in treaty documents used between an overlord and a subordinate ruler elsewhere in the ancient Near East. The comparison was pressed hard by Mendenhall and has been argued over in its details ever since, but it explains why Joshua 24 looks the way it does. Israel's final scene is a treaty ceremony, not a victory parade, because that is the form this relationship has always taken.

Where the mountain stood is not known. The traditional site in the southern Sinai rests on much later Christian tradition, and other candidates have been argued; this study asserts no location.

Joshua 1 assumes the whole of it. The book of the law that Joshua must not turn from, the priests, the ark he sends ahead into the river: all of that arrives here.`,
    scriptureRefs: [
      "Exodus 19:1-6",
      "Exodus 20:1-17",
      "Exodus 24:3-8",
      "Exodus 40:34-38",
      "Deuteronomy 4:9-14",
      "Joshua 1:7-8",
    ],
    entityIds: ["moses", "aaron", "joshua", "eleazar", "tribe-levi"],
    mapFeatureIds: [],
    viewport: {
      center: [33.9, 29.5],
      zoom: 7,
      bounds: [
        [32.4, 27.8],
        [35.2, 31.2],
      ],
    },
    geographicOrientation:
      "No place in this stage can be put on the map. The mountain of the covenant is unidentified: the traditional location at Jebel Musa in the southern Sinai comes from Christian monastic tradition many centuries later, and proposals in the northern Sinai, in Midian east of the Gulf of Aqaba, and elsewhere have all been defended. The viewport therefore shows the Sinai peninsula as a region only, with no pin, which is an accurate picture of what is known. What the geography does tell us is scale: the peninsula is large, dry, and crossed by a small number of routes defined by water, and a group moving through it with livestock is tied to those routes.",
    citations: [
      {
        sourceId: "mendenhall-law-covenant",
        supportedClaim:
          "Israel's covenant form has been compared in detail with the suzerain-vassal treaty structure known from Hittite documents",
      },
      {
        sourceId: "hillers-covenant",
        supportedClaim:
          "Covenant in Israel involves sworn obligation with witnesses, blessings and curses, on a pattern shared with regional treaty practice",
      },
      {
        sourceId: "block-deuteronomy",
        locator: "on Deuteronomy 4-5",
        supportedClaim:
          "The written law and covenant framework that Joshua presupposes is established at Sinai and restated in Deuteronomy",
      },
      {
        sourceId: "rainey-notley-sacred-bridge",
        supportedClaim:
          "The mountain of the covenant is not securely located and the traditional southern Sinai identification rests on later tradition",
      },
    ],
    evidenceLabels: [
      "biblical-account",
      "externally-attested",
      "theological-interpretation",
    ],
  },

  /* ---------------------------------------------------------------- */
  /* 6. Scouting Canaan and the wilderness generation                 */
  /* ---------------------------------------------------------------- */
  {
    id: "scouting-canaan-and-the-wilderness-generation",
    order: 6,
    title: "Scouting Canaan and the wilderness generation",
    body: `This is the hinge, and Joshua 14 is unreadable without it.

From [[entity:kadesh-barnea]], an oasis at the edge of the Sinai, twelve men are sent north to look at the land, one from each tribe. Their brief is practical: is the soil good, are the towns walled, are the people strong. They go up through the Negev as far as [[entity:hebron]], where the [[entity:anakim]] live, and come back after forty days carrying fruit.

All twelve agree the land is good. Ten conclude it cannot be taken: the towns are fortified, the people are large, and in their own phrase they felt like grasshoppers. Two disagree. [[entity:caleb]] and [[entity:joshua]] tell the assembly to go up at once. Israel sides with the ten, talks about stoning the two, and proposes going back to Egypt.

The sentence that follows frames everything afterwards. That generation will not enter the land. They will die in the wilderness over forty years, a year for each day the scouts were away, and of those counted only Caleb and Joshua will cross. Then, having refused to go, they try it anyway without sanction and are beaten back as far as Hormah, a town this study cannot locate.

Now read Joshua 14. Caleb comes forward at Gilgal and says he was forty when [[entity:moses]] sent him out, that his fellow scouts made the people's heart melt while he followed wholly, that Moses swore him a portion that day, and that he is now eighty-five and wants the hill country with the fortified Anakim towns in it. Every clause points back here. Without this stage, that is an old man asking a favour. With it, he is collecting on a promise and asking for the exact ground the majority said was impossible.

Joshua's authority in chapter 1 has the same root. He is not merely Moses' aide; he is one of two survivors of a generation that said no.`,
    scriptureRefs: [
      "Numbers 13:1-33",
      "Numbers 14:1-45",
      "Numbers 26:63-65",
      "Deuteronomy 1:19-46",
      "Joshua 5:4-7",
      "Joshua 14:6-12",
    ],
    entityIds: [
      "joshua",
      "caleb",
      "moses",
      "kadesh-barnea",
      "hebron",
      "anakim",
      "kenizzites",
      "amorites",
      "region-negev",
    ],
    mapFeatureIds: [
      "site-kadesh-barnea",
      "site-beersheba",
      "site-hebron",
      "site-arad",
    ],
    viewport: {
      center: [34.8, 31.1],
      zoom: 8,
      bounds: [
        [34.2, 30.4],
        [35.5, 32.0],
      ],
    },
    geographicOrientation:
      "Kadesh-barnea is usually identified with Tell el-Qudeirat in the north-eastern Sinai, chosen among the candidates because of the strength of its spring; the fortress excavated there is later than the wilderness period, so the identification rests on geography rather than on matching remains. From there the way into Canaan runs north-east through the Negev, past the future site of Beersheba, and climbs the southern ridge to Hebron, about 900 m up. That climb is the point of the scouts' report. An army coming from the desert has to arrive uphill, in front of walls, in country where every approach is a valley that can be watched. Forty years later Israel does not attempt this route at all, and enters instead from the east.",
    citations: [
      {
        sourceId: "hess-joshua",
        locator: "on Joshua 14:6-12",
        supportedClaim:
          "Caleb's claim in Joshua 14 refers back point by point to the scouting mission sent from Kadesh-barnea",
      },
      {
        sourceId: "milgrom-numbers",
        locator: "on Numbers 13-14",
        supportedClaim:
          "The structure of the scouting narrative and the sentence passed on the wilderness generation",
      },
      {
        sourceId: "rainey-notley-sacred-bridge",
        supportedClaim:
          "Kadesh-barnea is usually identified with Tell el-Qudeirat, and the route from it into Canaan climbs through the Negev to the southern ridge",
      },
      {
        sourceId: "howard-joshua",
        supportedClaim:
          "The refusal at Kadesh is the background against which Joshua's commission and Caleb's later claim are told",
      },
    ],
    evidenceLabels: ["biblical-account", "theological-interpretation"],
  },

  /* ---------------------------------------------------------------- */
  /* 7. Approach from the east                                        */
  /* ---------------------------------------------------------------- */
  {
    id: "approach-from-the-east",
    order: 7,
    title: "Approach from the east",
    body: `Israel reaches Canaan the long way, and the long way is why the book opens where it does.

Instead of going north from Kadesh, the route swings east and then north around the settled kingdoms of the plateau. [[entity:edom]] refuses passage along the highway that runs down its spine, so Israel goes around it. [[entity:moab]] is passed by too, under explicit instruction not to take its land. That detour means dropping into and climbing out of the rift and the deep wadis, including the [[entity:arnon-river]] gorge, which works as a border precisely because crossing it is hard.

North of the Arnon are two Amorite kingdoms. [[entity:sihon]] of [[entity:heshbon]] refuses passage and is defeated; [[entity:og]] of Bashan is defeated at [[entity:edrei]]. This is territory taken before Joshua begins, and [[entity:moses]] assigns it to [[entity:tribe-reuben]], [[entity:tribe-gad]] and half of Manasseh on one condition: their fighting men cross the Jordan with everyone else and stay until the rest have their inheritance. That condition is the whole plot of Joshua 22. Note what the text does not claim. Beating Sihon and Og in the field is not the same as occupying Bashan, and the eastern allotments are assignments, not a survey of settled ground.

Two episodes in the plains of Moab shape Israel's memory. [[entity:balak]] hires [[entity:balaam]] to curse Israel and receives blessings instead. Then at Peor, Israel joins in the worship of a local god and a plague follows. Joshua 22 cites Peor as a live warning, not ancient history.

An honesty note on the ground itself. Excavation at Tell Hisban, the site identified with Heshbon, has produced little Late Bronze material, which is one of the standard difficulties raised against the Transjordan narratives. Separately, a plaster inscription found at Tell Deir Alla in the Jordan valley names a Balaam son of Beor. It is centuries later and corroborates no episode, but the name was known in this region.`,
    scriptureRefs: [
      "Numbers 20:14-21",
      "Numbers 21:21-35",
      "Numbers 22:1-6",
      "Numbers 25:1-9",
      "Numbers 32:1-32",
      "Deuteronomy 2:1-37",
      "Deuteronomy 3:1-17",
      "Joshua 13:8-13",
      "Joshua 22:1-9",
    ],
    entityIds: [
      "moses",
      "sihon",
      "og",
      "balaam",
      "balak",
      "phinehas",
      "edom",
      "moab",
      "ammon",
      "amorites",
      "tribe-reuben",
      "tribe-gad",
      "tribe-manasseh-east",
      "heshbon",
      "edrei",
      "arnon-river",
    ],
    mapFeatureIds: [
      "site-arnon-river",
      "site-heshbon",
      "site-ashtaroth",
      "site-edrei",
      "site-jabbok-river",
      "site-rabbah-ammon",
      "site-shittim",
    ],
    viewport: {
      center: [35.8, 32.0],
      zoom: 8,
      bounds: [
        [35.3, 31.2],
        [36.4, 33.0],
      ],
    },
    geographicOrientation:
      "East of the Jordan the land is a high plateau, better watered in the north and drying out southward, cut across by gorges that run west into the rift: the Arnon, the Jabbok and others. A single north-south route, later called the King's Highway, runs along the plateau and has to cross every one of those gorges. That is why permission to use it matters so much, and why being refused it costs Israel months. The campaign against Sihon and Og opens the northern half of the plateau, from the Arnon up into Bashan, and brings Israel down into the valley floor opposite Jericho, at Shittim in the plains of Moab. From that camp the Jordan is a few kilometres away and Jericho is visible across it.",
    citations: [
      {
        sourceId: "rainey-notley-sacred-bridge",
        supportedClaim:
          "The plateau route east of the Jordan must cross the Arnon and Jabbok gorges, which is why the detour around Edom and Moab is costly",
      },
      {
        sourceId: "mazar-archaeology-land",
        supportedClaim:
          "Excavation at Tell Hisban, identified with Heshbon, produced limited Late Bronze Age evidence",
      },
      {
        sourceId: "kitchen-reliability",
        supportedClaim:
          "Defeating a king in the field is a different claim from occupying his territory, and the texts distinguish the two",
      },
      {
        sourceId: "cos",
        locator: "2.27, the Deir Alla plaster texts",
        supportedClaim:
          "A plaster inscription from Tell Deir Alla names a Balaam son of Beor, centuries later than the narrative",
      },
      {
        sourceId: "milgrom-numbers",
        locator: "on Numbers 25 and 32",
        supportedClaim:
          "The incident at Peor and the conditional settlement of the Transjordan tribes in the Numbers account",
      },
    ],
    evidenceLabels: [
      "biblical-account",
      "externally-attested",
      "disputed",
    ],
  },

  /* ---------------------------------------------------------------- */
  /* 8. Moses' final instructions                                     */
  /* ---------------------------------------------------------------- */
  {
    id: "moses-final-instructions",
    order: 8,
    title: "Moses' final instructions",
    body: `Everything in Deuteronomy happens in one place and takes very little time. Israel is camped on the valley floor east of the Jordan, in the plains of Moab near [[entity:beth-peor]], within sight of [[entity:jericho]]. [[entity:moses]] is at the end of his life and will not cross. The book is what he says before he stops.

He retells the journey, including the refusal at Kadesh, and he restates the law, adjusted for people who are about to stop camping and start farming: land tenure, courts, debt release, warfare, kingship, the treatment of the poor and the resident foreigner. He sets out blessing and curse as the two live possibilities, and instructs that they be recited at [[entity:mount-ebal]] and [[entity:mount-gerizim]] once Israel is across, which Joshua 8 then carries out. The law is written down and given to the priests, to be read publicly at intervals so that it is not the property of a trained class.

He commissions [[entity:joshua]] in front of everyone. The words are the ones God repeats in Joshua 1: be strong and courageous, you will bring this people in, I will not leave you. [[entity:eleazar]] is beside him, because civil and priestly authority are being handed over together. Then a blessing on the tribes, tribe by tribe, in poetry.

Then Nebo. Moses climbs the ridge, sees the land laid out from the northern hills round to the Negev, and dies there. The text states that no one knows where he is buried, and this study does not try to improve on that. Israel mourns thirty days.

Joshua 1:1 begins in the middle of that sentence: after the death of Moses. Read on its own, Joshua's opening is an unexplained commission. Read after Deuteronomy, it is a succession, and the terms of the succession are already fixed. Joshua gives no new law. He applies one he received.`,
    scriptureRefs: [
      "Deuteronomy 1:1-5",
      "Deuteronomy 31:1-13",
      "Deuteronomy 32:48-52",
      "Deuteronomy 33:1-5",
      "Deuteronomy 34:1-12",
      "Joshua 1:1-9",
    ],
    entityIds: [
      "moses",
      "joshua",
      "eleazar",
      "mount-nebo",
      "beth-peor",
      "shittim",
      "jericho",
      "jordan-river",
      "mount-ebal",
      "mount-gerizim",
      "region-moab-plateau",
    ],
    mapFeatureIds: [
      "site-mount-nebo",
      "site-beth-peor",
      "site-shittim",
      "site-jordan-river",
      "site-jericho",
    ],
    viewport: {
      center: [35.62, 31.81],
      zoom: 9,
    },
    geographicOrientation:
      "The Nebo ridge, identified with Jebel Niba, rises steeply from the eastern side of the rift and looks west across the Jordan valley toward Jericho and the hill country behind it, with the Dead Sea to the south. The view is real: from the ridge the whole entry corridor is laid out below, which is what makes the scene in Deuteronomy 34 geographically coherent rather than merely symbolic. The camp itself is down on the valley floor at Shittim in the plains of Moab, a few kilometres from the river. The drop from the ridge to the camp is around 1,000 m, and the drop from the camp to the river is slight, which is why the crossing, not the descent, is the obstacle.",
    citations: [
      {
        sourceId: "block-deuteronomy",
        locator: "on Deuteronomy 31-34",
        supportedClaim:
          "The public commissioning of Joshua, the deposit of the written law with the priests, and the statement that Moses' burial place is unknown",
      },
      {
        sourceId: "rainey-notley-sacred-bridge",
        supportedClaim:
          "Mount Nebo is identified with Jebel Niba, which commands a westward view across the Jordan valley toward Jericho",
      },
      {
        sourceId: "howard-joshua",
        locator: "on Joshua 1:1-9",
        supportedClaim:
          "Joshua 1 continues directly from the close of Deuteronomy and presents Joshua as a successor administering a law already given",
      },
      {
        sourceId: "mcconville-williams-joshua",
        supportedClaim:
          "Joshua's authority in the book is framed as derived from Moses rather than independent of him",
      },
    ],
    evidenceLabels: ["biblical-account", "theological-interpretation"],
  },
];

export const BEFORE_STAGE_BY_ID: Record<string, BeforeStage> =
  Object.fromEntries(BEFORE_STAGES.map((s) => [s.id, s]));
