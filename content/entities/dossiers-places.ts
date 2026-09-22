/**
 * Authored dossier additions for places.
 *
 * Each site already carries an identification and a statement of how firmly it
 * is placed in `content/map/site-seeds.ts`. Nothing here repeats that. These
 * entries add the four things the register cannot hold: where a place stood in
 * the story before Joshua opens, what excavation and outside records do and do
 * not show, what remains genuinely unsettled, and where the place turns up
 * later in Scripture.
 *
 * Two disciplines govern the file.
 *
 * `historical` blocks describe sites, not events. That a mound is securely
 * identified as Hazor or Lachish says nothing about whether what Joshua
 * narrates happened there, and where excavation has found a destruction, the
 * block says what the layer is, how it is dated, and who dates it otherwise,
 * and then stops. A burnt layer does not name the army that made it.
 *
 * `later` is spoiler-gated and may name outcomes freely. No other block looks
 * past the end of Joshua.
 */

import type { DossierExtra } from "./dossiers";

export const PLACE_DOSSIERS: DossierExtra[] = [
  /* ================================================================ */
  /* The entry corridor                                               */
  /* ================================================================ */
  {
    entityId: "jericho",
    earlier: {
      body:
        "Before Israel crosses, Jericho is something seen rather than entered. Numbers fixes the camp \"in the plains of Moab by the Jordan at Jericho\", and the phrase returns through the second census, the Midianite campaign and the closing legal material, so the town serves as the survey point from which the last third of the Torah is located. Moses looks west from Nebo across \"the plain of Jericho, the city of palm trees\" and dies without going down to it. No text before Joshua puts an Israelite inside its walls.",
      scriptureRefs: [
        "Numbers 22:1",
        "Numbers 26:3",
        "Numbers 33:48-50",
        "Numbers 36:13",
        "Deuteronomy 34:1-3",
      ],
      evidenceLabels: ["biblical-account"],
    },
    historical: {
      body:
        "Tell es-Sultan sits on the spring that makes the oasis possible, and its interest to archaeology has never depended on Joshua: the Neolithic tower and enclosure wall found there are among the oldest monumental constructions known anywhere, and an Italian and Palestinian expedition has worked the mound and its conservation for decades.\n\n" +
        "Kenyon's stratigraphy is still the frame everyone argues inside. She assigned the great mudbrick fortifications and the collapsed revetment to the Middle Bronze Age, and judged Late Bronze occupation slight and brief. Bienkowski's technical study defends that reading. Wood argues in print that the destruction belongs instead at the end of Late Bronze I, and Bienkowski replied in the same magazine. What the mound does not contain, on any reading of the pottery, is anything that identifies who caused a destruction in it.",
      citations: [
        {
          sourceId: "nigro-tell-es-sultan",
          supportedClaim:
            "The current long-running excavation at Tell es-Sultan, and the site's Neolithic and Bronze Age importance independent of the conquest question",
        },
        {
          sourceId: "kenyon-digging-up-jericho",
          supportedClaim:
            "Kenyon assigned the major mudbrick fortifications to the Middle Bronze Age and found Late Bronze occupation slight",
        },
        {
          sourceId: "bienkowski-jericho-lb",
          supportedClaim:
            "The technical case that Jericho was largely unoccupied in the Late Bronze Age",
        },
        {
          sourceId: "wood-jericho-bar",
          supportedClaim:
            "The argument that Kenyon's Middle Bronze destruction should be redated to the end of Late Bronze I",
        },
        {
          sourceId: "bienkowski-bar-reply",
          supportedClaim: "The published reply rejecting that redating",
        },
      ],
      evidenceLabels: ["externally-attested", "disputed"],
    },
    uncertainties: {
      body:
        "The disagreement is narrower than it looks, and it turns on pottery. Wood reads the local ware, and the absence of imported Cypriot bichrome vessels, differently from Kenyon; Bienkowski holds that the same material keeps the destruction in the Middle Bronze Age, centuries before either proposed conquest date. Both sides accept that the summit has been eroded and quarried and that the excavated trenches were narrow, so Late Bronze levels on a mound this exposed could simply be gone. That makes the argument from absence weak in both directions, which is why more digging has not closed the question. Absence of evidence and evidence of absence are not the same claim.",
      citations: [
        {
          sourceId: "wood-jericho-bar",
          supportedClaim:
            "The redating argument rests on a different reading of the ceramic evidence, including imported wares",
        },
        {
          sourceId: "bienkowski-bar-reply",
          supportedClaim:
            "The counter-argument that the same ceramic material places the destruction in the Middle Bronze Age",
        },
        {
          sourceId: "provan-long-longman",
          supportedClaim:
            "Methodologically, no evidence and evidence against are different claims and should not be treated alike",
        },
      ],
      evidenceLabels: ["disputed"],
    },
    later: {
      body:
        "Jericho does not drop out of the story. Judges has a Moabite king holding the city of palms and oppressing Israel from it. The curse pronounced in Joshua 6:26 is picked up in 1 Kings, where Hiel of Bethel rebuilds the town at the cost of his sons. Elisha's first recorded act after Elijah is taken from him is healing the town's spring. Households from Jericho appear in the returning lists of Ezra and Nehemiah. In the Gospels it is where Jesus heals a blind beggar and dines with Zacchaeus, and the climb from Jericho up to Jerusalem is the road in the parable of the good Samaritan.",
      scriptureRefs: [
        "Judges 3:12-14",
        "1 Kings 16:34",
        "2 Kings 2:19-22",
        "Nehemiah 7:36",
        "Luke 10:30-37",
        "Luke 19:1-10",
        "Hebrews 11:30",
      ],
      evidenceLabels: ["biblical-account"],
    },
  },

  {
    entityId: "ai",
    earlier: {
      body:
        "Ai enters the Bible as a landmark rather than a subject. Abram, moving south along the central ridge, pitches his tent with [[entity:bethel]] to the west and Ai to the east, builds an altar between them, and comes back to the same spot after his detour into Egypt. Genesis records nothing else: no king, no dealings, no indication of size. The name itself means something close to \"the ruin\", which reads more like a description of a place than the name of a living city, and readers have been arguing about that ever since.",
      scriptureRefs: ["Genesis 12:8", "Genesis 13:3", "Joshua 7:2"],
      citations: [
        {
          sourceId: "hess-joshua",
          locator: "on Joshua 7:2",
          supportedClaim:
            "The name Ai carries the sense of a ruin, which bears on how the site problem is framed",
        },
      ],
      evidenceLabels: ["biblical-account"],
    },
    historical: {
      body:
        "Et-Tell, the traditional identification, was a substantial walled town in the Early Bronze Age. It was destroyed, then left empty for something close to a millennium, before a small unwalled village appeared on the ruins in Iron Age I. Callaway's seasons established that sequence, and with it the difficulty: on his reading there was no Late Bronze town at et-Tell for anyone to capture, whichever conquest date is assumed.\n\n" +
        "Khirbet el-Maqatir, roughly two kilometres west, has yielded Late Bronze I pottery, a gate and burnt debris, published by its excavators as an alternative Ai. The site is small, the excavators argue for a fifteenth-century campaign on other grounds, and the identification has not been taken up in the wider field.",
      citations: [
        {
          sourceId: "callaway-ai",
          supportedClaim:
            "Excavation at et-Tell established an Early Bronze town, a long abandonment, and an Iron Age I village, with no Late Bronze occupation",
        },
        {
          sourceId: "stripling-maqatir",
          supportedClaim:
            "Khirbet el-Maqatir excavated and published as an alternative location for Ai by researchers arguing for an early conquest date",
        },
        {
          sourceId: "mazar-archaeology-land",
          supportedClaim:
            "The occupation pattern of the central highlands in the Late Bronze and Iron Age I periods, against which the et-Tell sequence is read",
        },
      ],
      evidenceLabels: ["externally-attested", "disputed"],
    },
    uncertainties: {
      body:
        "Three reconstructions are live and none of them is comfortable. Hess allows that Ai may name a fortified outpost held from [[entity:bethel]] rather than a town with a settled population, which would change what the excavation of et-Tell is able to rule out. The Maqatir case asks a very small site to carry a narrative about a king and a gate, and it asks the reader to accept an early conquest date before the pottery is weighed. A third reading takes the episode as a story that grew around a conspicuous ruin. The awkward feature of the whole debate is that the site and the date tend to be chosen together, each supporting the other.",
      citations: [
        {
          sourceId: "hess-joshua",
          locator: "on Joshua 7-8",
          supportedClaim:
            "Ai may have functioned as a military outpost rather than a populated town",
        },
        {
          sourceId: "stripling-maqatir",
          supportedClaim:
            "The alternative identification is advanced by excavators committed to an early conquest date",
        },
        {
          sourceId: "callaway-ai",
          supportedClaim:
            "The absence of Late Bronze material at et-Tell is what any alternative proposal is trying to answer",
        },
      ],
      evidenceLabels: ["disputed"],
    },
    later: {
      body:
        "The name survives long after the events of Joshua. Isaiah's account of an Assyrian army coming down the ridge toward Jerusalem names Aiath among the towns it passes. Ezra and Nehemiah count \"the men of Bethel and Ai\" together among the households returning from exile, and Nehemiah's settlement list puts Benjaminites at Aija beside Bethel. Whatever stood on the ground in Joshua's day, a community carrying the name was there centuries later, still paired with Bethel in exactly the way Genesis and Joshua pair them.",
      scriptureRefs: [
        "Isaiah 10:28",
        "Ezra 2:28",
        "Nehemiah 7:32",
        "Nehemiah 11:31",
      ],
      evidenceLabels: ["biblical-account"],
    },
  },

  {
    entityId: "hazor",
    historical: {
      body:
        "Hazor is the one city where the book's language of scale is matched by the ground. Upper and lower city together cover about eighty hectares, an order of magnitude beyond Jericho or et-Tell, and the town is named in second-millennium Egyptian and Mesopotamian records as a place whose ruler mattered. The Amarna correspondence includes letters from its king to the Egyptian court.\n\n" +
        "Yadin's excavations, and Ben-Tor's renewed work on the site, document a violent destruction of the Late Bronze city: the palace burned at a temperature high enough to vitrify mudbrick, and statuary was deliberately mutilated. That is what the layer shows. It shows that a very large city was destroyed by fire and that someone took trouble over the images in it. It does not carry a signature, and the two things should not be run together.",
      citations: [
        {
          sourceId: "yadin-hazor",
          supportedClaim:
            "Hazor's exceptional size and the identification of a violent destruction of the Late Bronze city",
        },
        {
          sourceId: "ben-tor-hazor",
          supportedClaim:
            "The burning of the Late Bronze palace and the deliberate mutilation of statuary in the renewed excavations",
        },
        {
          sourceId: "moran-amarna",
          supportedClaim:
            "Hazor's ruler is among the Canaanite kings corresponding with the Egyptian court",
        },
        {
          sourceId: "rainey-notley-sacred-bridge",
          supportedClaim:
            "Hazor appears in second-millennium records outside the Bible as a major regional centre",
        },
      ],
      evidenceLabels: ["externally-attested"],
    },
    uncertainties: {
      body:
        "Who burned Hazor cannot be read off the burning. Ben-Tor argues for Israelites, largely because Egyptians, Sea Peoples and rival Canaanite cities each fit the evidence badly. Zuckerman, excavating the same site, read the destruction as the end of a long internal decline, with the ruling quarter attacked from inside its own society. The two published that disagreement jointly, which is the most useful thing about it: two excavators, one stratigraphy, opposite conclusions. Chronology is a second open question. The destruction is dated to the end of the Late Bronze Age on the excavators' own reckoning, and whether that suits a given conquest reconstruction depends entirely on which chronology the reconstruction assumes.",
      citations: [
        {
          sourceId: "ben-tor-hazor",
          supportedClaim:
            "Ben-Tor's argument that Israelites were responsible for the destruction",
        },
        {
          sourceId: "ben-tor-zuckerman-hazor",
          supportedClaim:
            "Two excavators of the same site reach opposing conclusions about the agent of the destruction",
        },
      ],
      evidenceLabels: ["disputed"],
    },
    later: {
      body:
        "Judges opens a second Hazor problem: Deborah and Barak fight a king of Hazor also called Jabin, whose commander Sisera is defeated in the Jezreel valley. Whether that indicates a recovered city, a throne name used by a line of rulers, or two tellings of one conflict is disputed. Solomon later rebuilds Hazor alongside [[entity:megiddo]] and [[entity:gezer]], the three sites that control the northern routes. The city's political life ends when Tiglath-pileser III takes Naphtali and deports its population.",
      scriptureRefs: [
        "Judges 4:1-24",
        "Judges 5:19-21",
        "1 Kings 9:15",
        "2 Kings 15:29",
      ],
      evidenceLabels: ["biblical-account"],
    },
  },

  {
    entityId: "jerusalem",
    earlier: {
      body:
        "Genesis brings a king of Salem, Melchizedek, out to meet Abram with bread and wine, and Salem has traditionally been read as Jerusalem, though Genesis does not say so. Abraham's near sacrifice of Isaac happens in \"the land of Moriah\", a name later biblical tradition attaches to the temple hill rather than one Genesis locates. More striking for a reader of Joshua is what Deuteronomy does: it speaks repeatedly of the place Yahweh will choose to put his name, and never once names it. Joshua inherits a fortified town in Jebusite hands and a promise with a blank in it.",
      scriptureRefs: [
        "Genesis 14:17-20",
        "Genesis 22:2",
        "Deuteronomy 12:5",
        "Deuteronomy 12:11",
      ],
      citations: [
        {
          sourceId: "anchor-bible-dictionary",
          locator: "s.v. Jerusalem",
          supportedClaim:
            "The identification of Genesis 14's Salem with Jerusalem is traditional rather than stated in the text",
        },
      ],
      evidenceLabels: ["biblical-account"],
    },
    historical: {
      body:
        "The Bronze and Iron Age town occupied the narrow spur running south from the later Temple Mount, and the Gihon spring on its eastern slope dictated that position. Heavy Middle Bronze fortification work was built around the spring and the shaft that reached it. The Late Bronze town was small, a few hectares at most, and population estimates for it are correspondingly low.\n\n" +
        "Its political weight was another matter. Six letters in the Amarna corpus come from Abdi-Heba, who ruled the city and wrote to the Egyptian court about pressure from his neighbours and from the people the letters call 'apiru. That is the one contemporary voice surviving from the place. Three thousand years of continuous building on the ridge has removed much of what earlier periods left behind.",
      citations: [
        {
          sourceId: "moran-amarna",
          supportedClaim:
            "Six letters from Abdi-Heba of Jerusalem survive in the Amarna corpus, describing pressure from neighbouring rulers and from 'apiru",
        },
        {
          sourceId: "mazar-archaeology-land",
          supportedClaim:
            "The scale of Late Bronze Jerusalem and the Middle Bronze fortification of the Gihon spring",
        },
        {
          sourceId: "rainey-notley-sacred-bridge",
          supportedClaim:
            "The city's position on the City of David ridge is governed by the spring on its eastern slope",
        },
      ],
      evidenceLabels: ["externally-attested"],
    },
    uncertainties: {
      body:
        "How a town of that size produced the king who heads a five-city coalition is a real question, and answers split along the lines of the wider settlement debate: either a modest hill fort whose strategic position outran its population, or a narrative that has given Jerusalem a prominence it acquired much later, when it mattered to the people writing. The material record cannot referee this, because the relevant strata are thin and badly disturbed. Worth noting is what nobody disputes: no destruction layer is claimed here for this period, and the book does not ask for one. Joshua 15:63 says flatly that Judah could not drive the city's inhabitants out.",
      scriptureRefs: ["Joshua 10:1-5", "Joshua 15:63"],
      citations: [
        {
          sourceId: "naaman-conquest",
          supportedClaim:
            "The Amarna-period political landscape of Canaan and how it compares with the picture of the land in Joshua",
        },
        {
          sourceId: "finkelstein-silberman-unearthed",
          supportedClaim:
            "The view that Jerusalem's prominence in these narratives reflects the concerns of a later period",
        },
      ],
      evidenceLabels: ["disputed"],
    },
    later: {
      body:
        "Judges reports both that Judah struck Jerusalem and that the Jebusites went on living there alongside Benjamin, which is the tension Joshua had already flagged. David takes the stronghold, makes it his capital, and brings the ark up to it; Solomon builds the temple on the hill above the old town. The city is besieged, spared, and finally burned by Babylon, then rebuilt after the exile. In the Gospels it is where Jesus is tried, crucified and raised. Almost everything Jerusalem comes to mean in Scripture is later than Joshua, where it is simply a city that was not taken.",
      scriptureRefs: [
        "Judges 1:8",
        "Judges 1:21",
        "2 Samuel 5:6-9",
        "1 Kings 6:1-2",
        "2 Kings 25:8-10",
      ],
      evidenceLabels: ["biblical-account"],
    },
  },

  {
    entityId: "shechem",
    earlier: {
      body:
        "No place in Canaan carries more patriarchal history. Abram's first recorded altar in the land stands at the oak of Moreh at Shechem. Jacob buys a field here, builds an altar, and buries the household gods of his company under the oak; here too Dinah is violated and her brothers answer with a massacre that Jacob is still condemning on his deathbed. Joseph's bones leave Egypt under oath to be buried in this ground. Deuteronomy then sets the blessing and curse ceremony at the two mountains \"beside the oak of Moreh\", which is to say at Shechem, before Joshua has gone anywhere near it.",
      scriptureRefs: [
        "Genesis 12:6-7",
        "Genesis 33:18-20",
        "Genesis 34:1-31",
        "Genesis 35:2-4",
        "Genesis 49:5-7",
        "Genesis 50:24-25",
        "Deuteronomy 11:29-30",
      ],
      citations: [
        {
          sourceId: "block-deuteronomy",
          locator: "on Deuteronomy 11:29-30",
          supportedClaim:
            "Deuteronomy locates the blessing and curse ceremony at the mountains by the oak of Moreh, in the Shechem pass",
        },
      ],
      evidenceLabels: ["biblical-account"],
    },
    historical: {
      body:
        "Tell Balata lies in the saddle between the two mountains, on the only easy east-west passage through the central highlands, and it was fortified on a scale that matches the position. Wright's excavations traced Middle Bronze cyclopean walls, a monumental gate, and the large building usually called the fortress-temple, which stood in some form into the Late Bronze period.\n\n" +
        "Shechem is also one of the few Canaanite towns whose politics can be read from outside the Bible. Amarna letters from neighbouring rulers accuse Labayu of Shechem of arming 'apiru and working against Egyptian interests in the hill country. Two silences sit beside each other here and should not be mistaken for confirmation of one another: the excavators report no destruction of the Late Bronze town, and Joshua never says Israel fought for it.",
      citations: [
        {
          sourceId: "wright-shechem",
          supportedClaim:
            "Excavation at Tell Balata documented the Middle Bronze fortifications and the fortress-temple, and reported no Late Bronze destruction of the town",
        },
        {
          sourceId: "moran-amarna",
          supportedClaim:
            "Amarna letters accuse Labayu of Shechem of employing 'apiru forces against Egyptian interests in the highlands",
        },
        {
          sourceId: "rainey-notley-sacred-bridge",
          supportedClaim:
            "Shechem commands the only easy east-west pass through the central hill country",
        },
      ],
      evidenceLabels: ["externally-attested"],
    },
    uncertainties: {
      body:
        "This is where Joshua's geography goes quietest. Israel holds two assemblies in the pass, one with an altar on [[entity:mount-ebal]] and one at the close of the book, and the chapters in between never explain how the country between [[entity:ai]] and Shechem came into Israelite hands. Proposals include an existing relationship with a highland population already hostile to Egyptian authority, which the Amarna material at least makes thinkable; a treaty the book does not narrate; and covenant material placed editorially at the site that already held the tradition. We do not know which, if any, is right. The book shows no interest in telling us.",
      citations: [
        {
          sourceId: "naaman-conquest",
          supportedClaim:
            "Highland political conditions in the Amarna period as background to Israel's presence at Shechem",
        },
        {
          sourceId: "butler-joshua",
          supportedClaim:
            "Form-critical treatment of Joshua's covenant material and its attachment to Shechem",
        },
      ],
      evidenceLabels: ["disputed"],
    },
    later: {
      body:
        "Shechem becomes the stage for one of the bleakest episodes in Judges: Abimelech, financed from the temple of Baal-berith, is made king here, and ends by destroying the city and burning its tower with a thousand people inside. Rehoboam comes to Shechem to be confirmed as king and loses the northern tribes instead, after which Jeroboam makes it his first capital. Much later the mountain above the town becomes the centre of Samaritan worship, and John sets Jesus' conversation with a Samaritan woman at Jacob's well nearby, within sight of both peaks.",
      scriptureRefs: [
        "Joshua 24:32",
        "Judges 9:1-49",
        "1 Kings 12:1",
        "1 Kings 12:25",
        "John 4:5-6",
      ],
      evidenceLabels: ["biblical-account"],
    },
  },

  {
    entityId: "gibeon",
    earlier: {
      body:
        "Gibeon itself is named nowhere before Joshua 9. What precedes it is a category rather than a town. The [[entity:hivites]] appear in the lists of peoples Israel is told to dispossess, and Deuteronomy's rules of war divide cities in two: one far away may be offered terms, while the nearby nations may not be. Distance is the whole of the test, and distance is the single thing four towns thirty kilometres from Israel's camp could plausibly fake.",
      scriptureRefs: [
        "Deuteronomy 7:1-2",
        "Deuteronomy 20:10-18",
        "Exodus 23:23-33",
      ],
      citations: [
        {
          sourceId: "block-deuteronomy",
          locator: "on Deuteronomy 20:10-18",
          supportedClaim:
            "Deuteronomy's law of war makes distance the criterion separating cities that may be offered terms from those that may not",
        },
      ],
      evidenceLabels: ["biblical-account"],
    },
    historical: {
      body:
        "El-Jib produced something archaeology rarely supplies: jar handles stamped with the town's own name, gb'n, recovered from a large rock-cut water system on the site. They come from the Iron Age wine industry rather than from the period Joshua describes, so what they secure is that the place called Gibeon in the Israelite monarchy stood on this hill. The identification of the earlier town follows from that, together with the surviving name and the position.\n\n" +
        "Pritchard's excavation also found the Late Bronze material thinner than expected for a town Joshua 10 calls great, and larger than Ai. He published that result rather than reconciling it, and the study reports it the same way.",
      citations: [
        {
          sourceId: "pritchard-gibeon",
          supportedClaim:
            "Inscribed jar handles reading gb'n from the water system secure the site's identification, and the Late Bronze remains proved thinner than expected",
        },
        {
          sourceId: "rainey-notley-sacred-bridge",
          supportedClaim:
            "Gibeon's position on the plateau north-west of Jerusalem, on the approach to the Beth-horon descent",
        },
      ],
      evidenceLabels: ["externally-attested"],
    },
    uncertainties: {
      body:
        "The gap here is between a text that calls Gibeon a great city, like one of the royal cities, and a mound that has yielded little from the relevant period. Three responses are on offer. The excavation was early, limited in area, and the Late Bronze levels may lie under the modern village rather than under the trenches. Or the description reflects the town's standing in the Israelite period, when Gibeon was demonstrably substantial. Or the four-town league is an arrangement of a later century read back into the conquest narrative. The evidence available does not decide between them.",
      scriptureRefs: ["Joshua 9:17", "Joshua 10:2"],
      citations: [
        {
          sourceId: "pritchard-gibeon",
          supportedClaim:
            "The excavated Late Bronze evidence at el-Jib is slighter than the biblical description of a large city",
        },
        {
          sourceId: "blenkinsopp-gibeon",
          supportedClaim:
            "The standing of Gibeon and the Gibeonites in the political and religious history of Israel after the treaty",
        },
      ],
      evidenceLabels: ["disputed"],
    },
    later: {
      body:
        "The treaty keeps working long after Joshua. Abner and Joab hold their murderous contest at the pool of Gibeon. A famine in David's reign is traced to Saul's killing of Gibeonites, and David hands over seven of Saul's descendants because the oath sworn in Joshua 9 is still held to bind Israel generations later. Solomon sacrifices at the great high place at Gibeon and receives his dream of wisdom there. Men of Gibeon appear among the returning exiles and among those who rebuild the wall of Jerusalem.",
      scriptureRefs: [
        "2 Samuel 2:12-17",
        "2 Samuel 21:1-14",
        "1 Kings 3:4-15",
        "Nehemiah 3:7",
        "Nehemiah 7:25",
      ],
      citations: [
        {
          sourceId: "blenkinsopp-gibeon",
          supportedClaim:
            "The Gibeonites retain a distinct standing in Israel, and the treaty is still treated as binding in the David narratives",
        },
      ],
      evidenceLabels: ["biblical-account"],
    },
  },

  {
    entityId: "hebron",
    earlier: {
      body:
        "Hebron is where the promise first touches legal reality. Abraham settles by the oaks of Mamre, and when Sarah dies he buys the cave of Machpelah and the field around it from Ephron the Hittite, weighing out silver before witnesses at the gate. That purchase is the only ground in Canaan any patriarch owns. Abraham, Sarah, Isaac, Rebekah, Leah and eventually Jacob are all buried there. Numbers adds the other half of the town's reputation: the scouts go up to Hebron and find the descendants of Anak, and cut grapes in the valley of Eshcol nearby.",
      scriptureRefs: [
        "Genesis 13:18",
        "Genesis 23:1-20",
        "Genesis 49:29-32",
        "Genesis 50:13",
        "Numbers 13:22-24",
      ],
      evidenceLabels: ["biblical-account"],
    },
    historical: {
      body:
        "Tell er-Rumeida stands at roughly nine hundred metres on the southern ridge road, one of the highest towns in the land, with terraced slopes and good springs below it. Middle Bronze fortification walls of considerable size have been exposed there, and the site was occupied again in the Iron Age. What can be said about the Late Bronze town is much less, for a straightforward reason: the mound lies inside a densely built and politically sensitive modern city, and excavation has been intermittent and small in scale. The cave of Machpelah lies under a Herodian enclosure that has never been excavated and is not going to be.",
      citations: [
        {
          sourceId: "rainey-notley-sacred-bridge",
          supportedClaim:
            "Hebron's elevation and position on the southern ridge route through the Judean hill country",
        },
        {
          sourceId: "mazar-archaeology-land",
          supportedClaim:
            "Middle Bronze fortification at Hebron and the limited exposure of later levels at the site",
        },
      ],
      evidenceLabels: ["externally-attested"],
    },
    uncertainties: {
      body:
        "Joshua tells the capture of Hebron more than once and not identically. Chapter 10 has Joshua take it and leave no survivor. Chapter 11 has him cut off the Anakim from Hebron among other places. Chapter 15 credits [[entity:caleb]] with driving out three named sons of Anak, as an allotment granted and then made good. Read as a sequence these fit together loosely; read as parallel reports of one action they do not, and commentators differ on which reading the book intends. Nothing in the excavated material bears on the question, and the Anakim leave no trace that archaeology could recognise as theirs.",
      scriptureRefs: ["Joshua 10:36-37", "Joshua 11:21", "Joshua 15:13-14"],
      citations: [
        {
          sourceId: "hess-joshua",
          locator: "on Joshua 14 and 15",
          supportedClaim:
            "The relationship between the Hebron notices in chapters 10, 11 and 15 and Caleb's allotment",
        },
        {
          sourceId: "kitchen-reliability",
          supportedClaim:
            "Joshua's summary reports of capture should be read against its own admissions and repetitions rather than as a single sequential record",
        },
      ],
      evidenceLabels: ["disputed"],
    },
    later: {
      body:
        "Hebron becomes David's first capital, where the men of Judah anoint him and where he reigns for seven and a half years before moving to Jerusalem. Absalom chooses the same city to launch his revolt, which suggests it never entirely accepted the move north. It remains a priestly city and a city of refuge, and Judeans returning from exile settle at Kiriath-arba again. In Jewish, Christian and Muslim tradition the tombs of the patriarchs have kept the town continuously contested ever since.",
      scriptureRefs: [
        "2 Samuel 2:1-4",
        "2 Samuel 5:5",
        "2 Samuel 15:7-12",
        "Nehemiah 11:25",
      ],
      evidenceLabels: ["biblical-account"],
    },
  },

  {
    entityId: "lachish",
    historical: {
      body:
        "Tell ed-Duweir is among the most thoroughly dug mounds in the country, and its Late Bronze sequence is unusually legible. The town of that period had strong Egyptian connections: Egyptian-style pottery, a temple in the old fosse outside the wall, and administrative finds written in Egyptian hands. Lachish also appears in the Amarna correspondence, its ruler writing like any other Canaanite client of the pharaoh.\n\n" +
        "Ussishkin's renewed excavations traced two successive destructions of the Late Bronze town. The later of the two is dated by objects naming a twentieth-dynasty pharaoh found in the debris, which places its end after the point where most conquest reconstructions have Joshua's campaigns already finished. The earlier destruction is dated less precisely. Which layer, if either, a reader connects to Joshua 10 is a decision the stratigraphy does not make.",
      citations: [
        {
          sourceId: "ussishkin-lachish",
          supportedClaim:
            "Two successive destructions of the Late Bronze town, with the later dated by Egyptian objects of the twentieth dynasty found in the destruction debris",
        },
        {
          sourceId: "moran-amarna",
          supportedClaim:
            "Lachish appears in the Amarna correspondence as an Egyptian client city",
        },
        {
          sourceId: "mazar-archaeology-land",
          supportedClaim:
            "Egyptian material culture and administrative presence in the Late Bronze Shephelah",
        },
      ],
      evidenceLabels: ["externally-attested"],
    },
    uncertainties: {
      body:
        "Lachish is the clearest case of a site with plenty of evidence and no way to attach it. The book says Israel took Lachish and struck it with the sword; it does not say Lachish was burned. Joshua reserves burning for three cities, and this is not one of them, so the most visible kind of archaeological trace is one the text never claims here. Against that, the dating of the better-documented destruction sits later than most reconstructions allow for the campaign. Some read the sequence as evidence against the narrative, others as evidence that the narrative was never describing a city-levelling occupation.",
      scriptureRefs: ["Joshua 10:31-32"],
      citations: [
        {
          sourceId: "ussishkin-lachish",
          supportedClaim:
            "The dating of the Late Bronze destructions at Lachish relative to proposed conquest chronologies",
        },
        {
          sourceId: "kitchen-reliability",
          supportedClaim:
            "The argument that Joshua describes disabling raids rather than the destruction and occupation of cities",
        },
      ],
      evidenceLabels: ["disputed"],
    },
    later: {
      body:
        "Lachish stays the second city of Judah for centuries. Rehoboam fortifies it. Amaziah flees Jerusalem for Lachish and is assassinated there. Sennacherib besieges and takes it, and the palace reliefs at Nineveh show the ramp, the siege engines and the deportation in detail; the excavated ramp on the south-west corner is the earliest known Assyrian siege ramp. Jeremiah, describing the last Babylonian advance, names Lachish and [[entity:azekah]] as the only fortified cities of Judah still holding out.",
      scriptureRefs: [
        "2 Kings 14:19",
        "2 Kings 18:13-17",
        "2 Chronicles 11:5-9",
        "Jeremiah 34:7",
      ],
      citations: [
        {
          sourceId: "ussishkin-lachish",
          supportedClaim:
            "The Assyrian siege ramp excavated at Lachish and its correspondence with the Nineveh reliefs",
        },
      ],
      evidenceLabels: ["biblical-account", "externally-attested"],
    },
  },

  {
    entityId: "shiloh",
    earlier: {
      body:
        "Shiloh is not named before Joshua, but the thing that makes it matter has been travelling since Sinai. The tent of meeting is built to be carried, pitched at the centre of the camp and struck again whenever the cloud lifts, and Numbers describes the march order around it in detail. Deuteronomy then speaks of a place Yahweh will choose to put his name, where the tribes are to bring what they owe, and withholds the name of that place. Shiloh is where that mobile arrangement first stops moving.",
      scriptureRefs: [
        "Exodus 40:34-38",
        "Numbers 2:1-2",
        "Numbers 9:15-23",
        "Deuteronomy 12:5-14",
      ],
      evidenceLabels: ["biblical-account"],
    },
    historical: {
      body:
        "Khirbet Seilun lies off the ridge road in a small basin, which is an odd place for a national sanctuary and a safe one. Danish excavators worked there early in the twentieth century, and Finkelstein's expedition later established the sequence. A Middle Bronze fortification and earthen rampart enclosed the hill, and the Iron Age I settlement reused that older line rather than building its own. That Iron I village is substantial for the period: pillared buildings full of large storage jars, which fit a place receiving goods from elsewhere.\n\n" +
        "No structure has been identified as the sanctuary. The Iron I settlement ended in a destruction, dated by its pottery, and the site was thinly occupied afterwards.",
      citations: [
        {
          sourceId: "finkelstein-shiloh",
          supportedClaim:
            "Shiloh's occupation sequence, the reuse of the Middle Bronze rampart, the Iron Age I storage buildings, and the destruction that ended that phase",
        },
        {
          sourceId: "finkelstein-settlement",
          supportedClaim:
            "Shiloh's prominence within the pattern of Iron Age I highland settlement",
        },
      ],
      evidenceLabels: ["externally-attested"],
    },
    uncertainties: {
      body:
        "Two things are commonly said about Shiloh that the excavation does not support. The first is that the tabernacle has been found: no building at the site has been identified as a sanctuary, and the storage complexes are read as storage. The second is that the destruction layer confirms a particular episode. The layer shows that the Iron I settlement burned; its date rests on pottery, which carries a margin, and the identity of the destroyers is not recoverable from it. What the excavation does show is a site importing and storing more than a village of that size would consume, which is at least consistent with a central function.",
      citations: [
        {
          sourceId: "finkelstein-shiloh",
          supportedClaim:
            "No structure at Shiloh has been identified as the sanctuary, and the Iron Age I destruction is dated by ceramic evidence",
        },
        {
          sourceId: "provan-long-longman",
          supportedClaim:
            "The methodological distinction between a layer that is consistent with a narrative and one that confirms it",
        },
      ],
      evidenceLabels: ["disputed"],
    },
    later: {
      body:
        "Shiloh carries Israel's worship through the period of the judges: the house of God is there when the Danites take Micah's idol, and the yearly festival where Benjamin's men seize wives is held in its vineyards. Hannah prays there, Samuel grows up there under Eli, and the word of Yahweh comes to him there. Then the ark is carried out to battle at Aphek and lost, Eli's sons die, and Shiloh's story effectively ends. Psalm 78 says God abandoned the dwelling at Shiloh, and Jeremiah stands in the temple court and tells Jerusalem to go and look at what became of it.",
      scriptureRefs: [
        "Judges 18:31",
        "Judges 21:19-21",
        "1 Samuel 1:3-28",
        "1 Samuel 4:1-22",
        "Psalms 78:60",
        "Jeremiah 7:12-14",
      ],
      evidenceLabels: ["biblical-account"],
    },
  },

  {
    entityId: "bethel",
    earlier: {
      body:
        "Bethel is the place a name was given to. Jacob, running from his brother, sleeps at Luz, dreams of the stairway with messengers on it, wakes and says that this is none other than the house of God and the gate of heaven, sets up his stone and calls the place Bethel. He returns decades later, under instruction, builds an altar and is given the covenant promise again on the same ground. Abram had already built an altar between Bethel and [[entity:ai]] and called on Yahweh's name there.",
      scriptureRefs: [
        "Genesis 12:8",
        "Genesis 13:3-4",
        "Genesis 28:10-22",
        "Genesis 35:1-15",
      ],
      evidenceLabels: ["biblical-account"],
    },
    historical: {
      body:
        "Beitin preserves the ancient name and sits where the central watershed road crosses the boundary between the Ephraimite and Benjaminite hills, which is enough to carry the identification on its own. Excavation there in the middle of the twentieth century reported Middle and Late Bronze occupation and a destruction near the end of the Late Bronze period, followed by a poorer settlement. That work is old, its records are thin by current standards, and the published sequence is not as firm as its long citation history suggests. The village now covers most of the site, so the sequence is unlikely to be tested again.",
      citations: [
        {
          sourceId: "anchor-bible-dictionary",
          locator: "s.v. Bethel",
          supportedClaim:
            "The excavation history at Beitin, the reported Bronze Age sequence, and the limitations of that early work",
        },
        {
          sourceId: "rainey-notley-sacred-bridge",
          supportedClaim:
            "Bethel's position on the central watershed route and the strength of the name evidence for Beitin",
        },
      ],
      evidenceLabels: ["externally-attested"],
    },
    uncertainties: {
      body:
        "The minority case for el-Bireh exists mainly to relieve the problem at [[entity:ai]]: move Bethel, and a different hill becomes available for the town Joshua 7 and 8 describe. That is an argument running backwards from a desired result, which does not make it wrong but does explain why it has not travelled. A second point is easy to miss. Joshua never narrates the capture of Bethel. Its king appears in the register of defeated rulers in chapter 12, and the men of Bethel are drawn into the ambush at Ai in chapter 8, but no assault on the town is described.",
      scriptureRefs: ["Joshua 8:17", "Joshua 12:16"],
      citations: [
        {
          sourceId: "anchor-bible-dictionary",
          locator: "s.v. Bethel",
          supportedClaim:
            "El-Bireh is a minority proposal for Bethel, tied to the difficulty of locating Ai",
        },
      ],
      evidenceLabels: ["disputed"],
    },
    later: {
      body:
        "Judges reports the house of Joseph taking Bethel with help from a man who showed them the way in. Israel enquires of God there during the war with Benjamin, and Samuel includes it in his judging circuit. Then Jeroboam puts one of his two golden calves at Bethel and makes it a royal sanctuary, and from that point the prophets treat the name as an accusation. Amos is expelled from Bethel for preaching against it. Josiah finally pulls down the altar there and burns the bones from its tombs on it.",
      scriptureRefs: [
        "Judges 1:22-26",
        "Judges 20:26-28",
        "1 Samuel 7:16",
        "1 Kings 12:28-33",
        "Amos 7:10-13",
        "2 Kings 23:15-18",
      ],
      evidenceLabels: ["biblical-account"],
    },
  },

  /* ================================================================ */
  /* The plains, the valley routes and the coast                      */
  /* ================================================================ */
  {
    entityId: "gezer",
    historical: {
      body:
        "Few towns in Canaan are named so often by outsiders. Gezer appears in Egyptian topographical lists from the fifteenth century onward, its ruler Milkilu writes to the pharaoh in the Amarna archive, and Merneptah's stela lists Gezer among the places the king claims to have seized in a campaign that also mentions Israel. The mound carries a massive Middle Bronze wall and tower system and the row of standing stones usually called the high place.\n\n" +
        "Its identification was clinched from the other end of history, by boundary stones inscribed \"of Gezer\" found around the site, which are Hellenistic or Roman. They fix the name to the hill; they say nothing about the second millennium, which the position and the Egyptian references have to carry.",
      citations: [
        {
          sourceId: "thutmose-iii-lists",
          supportedClaim:
            "Gezer appears among the Canaanite towns named in Egyptian topographical lists",
        },
        {
          sourceId: "moran-amarna",
          supportedClaim:
            "Gezer's ruler is one of the correspondents writing to the Egyptian court in the Amarna archive",
        },
        {
          sourceId: "merneptah-stele",
          supportedClaim:
            "The stela names Gezer among the places the pharaoh claims to have taken, in the same text that mentions Israel",
        },
        {
          sourceId: "rainey-notley-sacred-bridge",
          supportedClaim:
            "Gezer commands the junction of the coastal highway with the Aijalon approach to the hill country",
        },
      ],
      evidenceLabels: ["externally-attested"],
    },
    uncertainties: {
      body:
        "A town fought over this often accumulates burnt layers, and Gezer has several. Egyptian kings claim it, Canaanite rulers appeal for help from it, and later powers take it again; separating those events in the debris is difficult and assigning any of them to Israel is not something the mound permits. The book is unusually careful here in a way worth holding onto. Joshua 10:33 has the king of Gezer come up to help Lachish and lose; Joshua 16:10 says the Canaanites went on living in Gezer as forced labour. A defeated king and an unpossessed city, stated in the same book, about the same place.",
      scriptureRefs: ["Joshua 10:33", "Joshua 12:12", "Joshua 16:10"],
      citations: [
        {
          sourceId: "mazar-archaeology-land",
          supportedClaim:
            "Gezer's repeated destruction and rebuilding through the Late Bronze and Iron Age sequence",
        },
        {
          sourceId: "kitchen-reliability",
          supportedClaim:
            "The book's own distinction between defeating a ruler and taking possession of his city",
        },
      ],
      evidenceLabels: ["disputed"],
    },
    later: {
      body:
        "David pursues Philistine forces as far as Gezer after breaking their attack in the Rephaim valley. The city passes to Israel only through Egyptian hands: Kings reports that a pharaoh took Gezer, burned it, killed its Canaanite population and gave it to his daughter as a marriage gift to Solomon, who then rebuilt it alongside [[entity:hazor]] and [[entity:megiddo]]. So the site Joshua 16 records as unpossessed enters Israelite control generations later, and by diplomacy rather than conquest.",
      scriptureRefs: ["2 Samuel 5:25", "1 Kings 9:15-17"],
      evidenceLabels: ["biblical-account"],
    },
  },

  {
    entityId: "megiddo",
    historical: {
      body:
        "Megiddo is where Egyptian and Canaanite records are thickest. Thutmose III's annals describe his army filing through the narrow Aruna pass to reach it and say that taking Megiddo is worth taking a thousand towns; its ruler Biridiya writes to the Egyptian court in the Amarna archive about local rivals and about supplying corvée labour. The Late Bronze palace on the mound produced a hoard of carved ivories and gold work of a quality that matches that diplomatic weight.\n\n" +
        "The Late Bronze city ends in destruction, and the mound has over twenty superimposed occupation levels, which is what makes Megiddo both the best sequence in the region and a notoriously contested one, since successive excavators have assigned the same walls to different centuries.",
      citations: [
        {
          sourceId: "thutmose-iii-lists",
          supportedClaim:
            "Egyptian royal records describe the campaign through the Aruna pass against Megiddo and treat the city as a principal objective",
        },
        {
          sourceId: "moran-amarna",
          supportedClaim:
            "Megiddo's ruler corresponds with the Egyptian court in the Amarna archive",
        },
        {
          sourceId: "mazar-archaeology-land",
          supportedClaim:
            "The depth of the occupation sequence at Megiddo, the Late Bronze palace finds, and the disputed dating of its strata",
        },
      ],
      evidenceLabels: ["externally-attested"],
    },
    uncertainties: {
      body:
        "The interesting question at Megiddo is not whether the site is right but what the text is claiming about it. Chapter 12 puts the king of Megiddo in the register of defeated rulers. Chapter 17 says Manasseh could not dispossess the towns of the valley, Megiddo among them, and that the Canaanites were determined to stay there. Those are not contradictory statements unless one assumes that beating a king means holding his city, which is exactly the assumption the book keeps refusing. The excavated city carries on, and nothing in it registers an Israelite presence at this period.",
      scriptureRefs: ["Joshua 12:21", "Joshua 17:11-13"],
      citations: [
        {
          sourceId: "kitchen-reliability",
          supportedClaim:
            "Joshua reports disabling defeats of rulers rather than occupation of their cities, and its summaries must be read against its admissions",
        },
        {
          sourceId: "younger-conquest-accounts",
          supportedClaim:
            "Conquest reports in the region share a rhetorical convention of totality that coexists with admissions of unfinished control",
        },
      ],
      evidenceLabels: ["disputed"],
    },
    later: {
      body:
        "Deborah's song places the battle against Sisera \"at Taanach, by the waters of Megiddo\", which is the first time Israel fights in this valley rather than around it. Solomon lists Megiddo in an administrative district and rebuilds it. Ahaziah, wounded fleeing Jehu, dies there. Josiah goes out to meet Pharaoh Neco at Megiddo and is killed, which ends Judah's last independent reign. Zechariah speaks of mourning in the plain of Megiddo, and Revelation turns the name of the hill of Megiddo into Armageddon.",
      scriptureRefs: [
        "Judges 5:19",
        "1 Kings 4:12",
        "2 Kings 9:27",
        "2 Kings 23:29-30",
        "Zechariah 12:11",
        "Revelation 16:16",
      ],
      evidenceLabels: ["biblical-account"],
    },
  },

  {
    entityId: "beth-shan",
    historical: {
      body:
        "Beth-shan guards the junction where the Jezreel valley meets the Jordan valley, which made it worth garrisoning to whoever held the region. In the Late Bronze and early Iron Age that was Egypt. Excavation on the mound has exposed a sequence of Egyptian administrative and residential buildings, and the site produced royal stelae of Seti I and Ramesses II and a statue of Ramesses III, the fullest Egyptian assemblage from any town in the country. Translations of those inscriptions are in the standard collections. Egyptian control here outlasted Egyptian control of most of Canaan, and its withdrawal was gradual rather than sudden.",
      citations: [
        {
          sourceId: "mazar-archaeology-land",
          supportedClaim:
            "The sequence of Egyptian administrative buildings at Beth-shan and the duration of Egyptian presence there",
        },
        {
          sourceId: "anet",
          supportedClaim:
            "Royal Egyptian stelae recovered at Beth-shan are published in translation in the standard collections",
        },
        {
          sourceId: "rainey-notley-sacred-bridge",
          supportedClaim:
            "Beth-shan's position at the meeting of the Jezreel and Jordan valleys",
        },
      ],
      evidenceLabels: ["externally-attested"],
    },
    uncertainties: {
      body:
        "Joshua assigns Beth-shan to Manasseh and says in the same breath that Manasseh could not take it, because the valley people had chariots of iron and meant to stay. An Egyptian garrison town is a concrete reason why a hill-country tribe would fail there, and that is a plausible fit rather than a confirmation: nothing excavated at Beth-shan records an Israelite attempt on it. The fit also carries a chronological cost. If Egyptian control here persisted as late as the material suggests, the non-possession notices describe a situation lasting well past the point where several reconstructions place Joshua's campaigns.",
      scriptureRefs: ["Joshua 17:11-18"],
      citations: [
        {
          sourceId: "mazar-archaeology-land",
          supportedClaim:
            "The duration of Egyptian military and administrative presence at Beth-shan into the early Iron Age",
        },
        {
          sourceId: "naaman-conquest",
          supportedClaim:
            "The bearing of Egyptian imperial presence in Canaan on reconstructions of Israel's settlement",
        },
      ],
      evidenceLabels: ["disputed"],
    },
    later: {
      body:
        "The town reappears at Israel's lowest moment. After Saul and his sons die on Mount Gilboa, the Philistines fasten his body to the wall of Beth-shan, and the men of Jabesh-gilead cross the Jordan by night to take it down and burn it honourably. By Solomon's reign the town sits inside an administrative district, so the place Manasseh could not take is eventually administered from Jerusalem. In the Hellenistic and Roman periods it is Scythopolis, the largest city of the Decapolis.",
      scriptureRefs: ["1 Samuel 31:8-13", "2 Samuel 21:12", "1 Kings 4:12"],
      evidenceLabels: ["biblical-account"],
    },
  },

  {
    entityId: "gaza",
    earlier: {
      body:
        "Gaza marks the edge of things in the Torah. Genesis draws the Canaanite border running \"toward Gerar, as far as Gaza\". Deuteronomy, reviewing who displaced whom before Israel arrived, notes that the Avvim lived in villages as far as Gaza until the Caphtorim came out and destroyed them and settled in their place. That is the Bible's own account of population movement on this coast, and it puts a people from overseas in the Gaza area before Israel enters the land, which is the beginning of a chronological knot rather than the end of one.",
      scriptureRefs: ["Genesis 10:19", "Deuteronomy 2:23"],
      evidenceLabels: ["biblical-account"],
    },
    historical: {
      body:
        "Gaza was the first major stop on the coastal road out of Egypt, the Ways of Horus, and it served as an Egyptian administrative base for campaigns into Canaan. It is named in Egyptian topographical lists and in the Amarna correspondence as a place where the pharaoh's officials sat. Archaeologically it is among the least accessible important sites in the region: the ancient mound lies beneath a dense and long-inhabited modern city, so the Late Bronze and early Iron Age town is known mainly from texts and from neighbouring sites rather than from its own stratigraphy.",
      citations: [
        {
          sourceId: "thutmose-iii-lists",
          supportedClaim:
            "Gaza appears in Egyptian records as a station on the coastal route and a base for campaigns into Canaan",
        },
        {
          sourceId: "moran-amarna",
          supportedClaim:
            "Gaza functions in the Amarna correspondence as a seat of Egyptian administration in Canaan",
        },
        {
          sourceId: "rainey-notley-sacred-bridge",
          supportedClaim:
            "Gaza's position on the Ways of Horus and the limits on excavation beneath the modern city",
        },
      ],
      evidenceLabels: ["externally-attested"],
    },
    uncertainties: {
      body:
        "Joshua names Gaza among the land still to be taken and calls the people there [[entity:philistines]]. The difficulty is that Philistine material culture, the Aegean-derived pottery and the cooking, building and cult practices that go with it, appears on this coast in the early twelfth century, later than most reconstructions place the events of Joshua. Three responses circulate: the term is used by later writers for whoever occupied the coast, as we might say Britain of the Roman period; some Aegean presence preceded the main settlement, which Deuteronomy's note about the Caphtorim might support; or the events belong later than usually assumed. The study does not pick one. The tension is real and it should be visible.",
      scriptureRefs: ["Joshua 11:22", "Joshua 13:2-3", "Joshua 15:47"],
      citations: [
        {
          sourceId: "mazar-archaeology-land",
          supportedClaim:
            "Philistine material culture appears in the southern coastal plain in the early twelfth century",
        },
        {
          sourceId: "hess-joshua",
          locator: "on Joshua 13",
          supportedClaim:
            "The use of the term Philistine in Joshua and the question of anachronism in the coastal city lists",
        },
      ],
      evidenceLabels: ["disputed"],
    },
    later: {
      body:
        "Gaza becomes Samson's undoing and his stage. He carries off the city gates, and after his betrayal he is brought there blinded to grind at a mill, and dies pulling down the temple of Dagon on its worshippers. The city is one of the five Philistine centres that send golden offerings with the returned ark. Amos, Jeremiah and Zephaniah all name Gaza in judgement oracles. In Acts, the road that runs down from Jerusalem toward Gaza is where Philip meets the Ethiopian official and baptises him.",
      scriptureRefs: [
        "Judges 16:1-3",
        "Judges 16:21-30",
        "1 Samuel 6:17",
        "Amos 1:6-7",
        "Jeremiah 47:1-5",
        "Acts 8:26-27",
      ],
      evidenceLabels: ["biblical-account"],
    },
  },

  {
    entityId: "ashdod",
    historical: {
      body:
        "Tel Ashdod gives the clearest excavated sequence for the change on this coast. A Canaanite town of the Late Bronze Age, in contact with Ugarit and named in its texts as a source of textiles, was destroyed. Above that destruction comes a new settlement with Aegean-derived monochrome pottery of the Mycenaean IIIC type, made locally, followed by the decorated bichrome ware conventionally called Philistine, together with hearths, loom weights, pig consumption and a seated female figurine unlike anything in the Canaanite repertoire. The town then grows into one of the largest cities in the country. Nothing in that sequence identifies who destroyed the Canaanite town.",
      citations: [
        {
          sourceId: "mazar-archaeology-land",
          supportedClaim:
            "The Late Bronze Canaanite town at Ashdod, its destruction, and the succeeding settlement with locally made Aegean-derived pottery and associated material culture",
        },
        {
          sourceId: "rainey-notley-sacred-bridge",
          supportedClaim:
            "Ashdod's place among the coastal cities and its appearance in second-millennium records",
        },
      ],
      evidenceLabels: ["externally-attested"],
    },
    uncertainties: {
      body:
        "Ashdod is where the Philistine chronology problem is hardest to talk around, because the break in material culture is visible in the ground and it comes after the Late Bronze Age, later than most reconstructions of Joshua. Joshua nonetheless lists Ashdod among the land remaining in Philistine hands. Worth noticing is that Joshua does not use only that label: chapter 11 says the [[entity:anakim]] remained in Gaza, Gath and Ashdod, a quite different description of the same three towns. Whether the book preserves two layers of knowledge about the coast, or uses ethnic terms loosely, or was written when Philistine simply meant the people of these cities, is not settled.",
      scriptureRefs: ["Joshua 11:22", "Joshua 13:3", "Joshua 15:46-47"],
      citations: [
        {
          sourceId: "mazar-archaeology-land",
          supportedClaim:
            "The stratigraphic break between the Canaanite and Philistine phases at Ashdod postdates the Late Bronze Age",
        },
        {
          sourceId: "hess-joshua",
          locator: "on Joshua 11:21-22 and 13:2-3",
          supportedClaim:
            "Joshua describes the population of the southern coastal cities with more than one ethnic term",
        },
      ],
      evidenceLabels: ["disputed"],
    },
    later: {
      body:
        "Ashdod is where the captured ark is taken, and where Dagon is found fallen on his face before it twice, the second time broken; the city sends the ark on and later contributes a golden offering. Isaiah dates an oracle by the year an Assyrian commander took Ashdod. Amos and Zechariah name it in judgement. Nehemiah is angry that Judeans have married women of Ashdod and that their children speak its language. In Acts, Philip turns up at Azotus, the Greek name for the same city.",
      scriptureRefs: [
        "1 Samuel 5:1-12",
        "1 Samuel 6:17",
        "Isaiah 20:1",
        "Amos 1:8",
        "Nehemiah 13:23-24",
        "Acts 8:40",
      ],
      evidenceLabels: ["biblical-account"],
    },
  },

  /* ================================================================ */
  /* The covenant ground, and the places that cannot be pinned         */
  /* ================================================================ */
  {
    entityId: "mount-ebal",
    earlier: {
      body:
        "Deuteronomy sets this up twice. In chapter 11 Moses assigns the blessing to [[entity:mount-gerizim]] and the curse to Mount Ebal, placing both beyond the Jordan near the oaks of Moreh. Chapter 27 is more specific and more demanding: on the day Israel crosses it is to set up large stones on Ebal, coat them with plaster, write the law on them, and build an altar of uncut stones on which no iron tool has been used, then sacrifice and eat there. Twelve curses follow, with the whole people answering amen to each.",
      scriptureRefs: ["Deuteronomy 11:26-30", "Deuteronomy 27:1-26"],
      citations: [
        {
          sourceId: "block-deuteronomy",
          locator: "on Deuteronomy 27",
          supportedClaim:
            "Deuteronomy commands inscribed stones and an altar of unhewn stones on Mount Ebal, followed by the recital of curses",
        },
      ],
      evidenceLabels: ["biblical-account"],
    },
    historical: {
      body:
        "Ebal is the northern and barer of the two mountains, rising above nine hundred metres over the pass, with thin soil on its southern face. What is contested is not the mountain but a structure on its north-eastern slope: a large rectangular installation of unworked stones, filled rather than floored, approached by a ramp, inside an enclosure wall.\n\n" +
        "Zertal's excavation recovered Iron Age I pottery, Egyptian scarabs, and a quantity of burnt animal bone from species the Torah permits, mostly young males, and he published the structure as an Israelite altar to be connected with Joshua 8. Kempinski published a rebuttal in the same magazine, reading the same remains as the base of a watchtower with a farmstead attached.",
      citations: [
        {
          sourceId: "zertal-ebal",
          supportedClaim:
            "The excavated structure on Mount Ebal, its construction and finds, published by its excavator as an Israelite altar",
        },
        {
          sourceId: "kempinski-ebal",
          supportedClaim:
            "The published rebuttal reading the same structure as an Iron Age watchtower",
        },
        {
          sourceId: "rainey-notley-sacred-bridge",
          supportedClaim:
            "The topography of Ebal and Gerizim flanking the Shechem pass",
        },
      ],
      evidenceLabels: ["externally-attested", "disputed"],
    },
    uncertainties: {
      body:
        "Two archaeologists read one building in opposite ways and no close parallel exists to settle it. Zertal's case rests on the fill construction, the ramp, the bone assemblage and the lack of ordinary domestic debris. Kempinski's rests on the plan, which he took for a tower base, and on the unremarkable Iron I pottery. Underneath the archaeological argument sits a textual one. The Masoretic text of Deuteronomy 27:4 puts the altar on Ebal; the Samaritan Pentateuch reads Gerizim, and that reading is not obviously the later of the two. Which mountain the command names has a manuscript history of its own.",
      scriptureRefs: ["Deuteronomy 27:4", "Joshua 8:30-35"],
      citations: [
        {
          sourceId: "zertal-ebal",
          supportedClaim:
            "The features on which the altar interpretation rests",
        },
        {
          sourceId: "kempinski-ebal",
          supportedClaim:
            "The features on which the watchtower interpretation rests",
        },
        {
          sourceId: "block-deuteronomy",
          locator: "on Deuteronomy 27:4",
          supportedClaim:
            "The Masoretic and Samaritan traditions differ over whether the altar is commanded on Ebal or on Gerizim",
        },
      ],
      evidenceLabels: ["disputed"],
    },
  },

  {
    entityId: "mount-gerizim",
    earlier: {
      body:
        "Deuteronomy gives the two mountains opposite jobs. Gerizim takes the blessing, and in the ceremony of chapter 27 six tribes stand on it, Simeon, Levi, Judah, Issachar, Joseph and Benjamin, while the remaining six stand across the pass on Ebal for the curse. Nothing in the Torah suggests the southern mountain is holier than the northern one. The pairing is what carries the meaning: two facing hillsides with the people divided between them and the words travelling across the gap.",
      scriptureRefs: ["Deuteronomy 11:29", "Deuteronomy 27:11-13"],
      citations: [
        {
          sourceId: "block-deuteronomy",
          locator: "on Deuteronomy 27:11-13",
          supportedClaim:
            "The division of the tribes between the two mountains for blessing and curse",
        },
      ],
      evidenceLabels: ["biblical-account"],
    },
    uncertainties: {
      body:
        "A manuscript disagreement runs through this mountain's history. Where the Masoretic text of Deuteronomy 27:4 commands the inscribed stones and the altar on Ebal, the Samaritan Pentateuch reads Gerizim. Whether the Samaritan text preserves an older reading or presses the Samaritan community's own claim to the mountain is disputed, and the question cannot be separated from later polemic between Jews and Samaritans. Joshua's Hebrew text follows the Ebal reading. The Greek tradition of Joshua adds a further wrinkle by placing the whole ceremony at a different point in the book, after the alliance of chapter 9 has formed.",
      scriptureRefs: ["Deuteronomy 27:4", "Joshua 8:30-35"],
      citations: [
        {
          sourceId: "block-deuteronomy",
          locator: "on Deuteronomy 27:4",
          supportedClaim:
            "The Masoretic and Samaritan readings of the mountain named in Deuteronomy 27:4 differ",
        },
        {
          sourceId: "butler-joshua",
          supportedClaim:
            "The Greek textual tradition of Joshua positions the Ebal ceremony differently from the Hebrew",
        },
      ],
      evidenceLabels: ["disputed"],
    },
    later: {
      body:
        "Jotham climbs Gerizim to shout his fable of the trees down at the men of Shechem, which is the mountain's only substantial appearance in the historical books. Its later weight is post-biblical in origin: the Samaritan community, once separated from Judean worship, built its sanctuary on the summit, and the Hasmoneans destroyed it. In John 4 the Samaritan woman raises precisely that dispute, our fathers worshipped on this mountain and you say Jerusalem, and the answer she gets is that the question is about to stop mattering.",
      scriptureRefs: ["Judges 9:7", "John 4:19-24"],
      citations: [
        {
          sourceId: "anchor-bible-dictionary",
          locator: "s.v. Samaritans",
          supportedClaim:
            "The Samaritan sanctuary on Gerizim and its destruction in the Hasmonean period",
        },
      ],
      evidenceLabels: ["biblical-account"],
    },
  },

  {
    entityId: "gilgal",
    earlier: {
      body:
        "What happens at Gilgal in Joshua 5 reaches back a long way. Circumcision is given to Abraham in Genesis as the sign of the covenant; Passover is instituted in Egypt on the night of the departure; and Numbers records the sentence on the generation that refused to go up, that their bodies would fall in the wilderness. Israel arrives having kept neither rite for a generation. Deuteronomy also mentions a Gilgal, but a northern one near the oaks of Moreh, which is an early warning that the name is not unique.",
      scriptureRefs: [
        "Genesis 17:9-14",
        "Exodus 12:1-28",
        "Numbers 14:29-33",
        "Deuteronomy 11:30",
      ],
      evidenceLabels: ["biblical-account"],
    },
    historical: {
      body:
        "There is very little to report, and the reasons for that are worth knowing. No site in the plain between the Jordan and Jericho has produced remains that match a base camp of this period, and survey work in the area has not resolved the question. Two things make the search hard. The valley floor has been ploughed, irrigated, eroded and re-cut for thousands of years, and a camp with a ring of standing stones, as distinct from a walled town, leaves next to nothing for a stratigraphic excavation to find. The text's own locating phrase is relative, not absolute: on the eastern border of Jericho.",
      scriptureRefs: ["Joshua 4:19-20"],
      citations: [
        {
          sourceId: "anchor-bible-dictionary",
          locator: "s.v. Gilgal",
          supportedClaim:
            "No candidate site for Gilgal has achieved consensus, and survey work in the Jericho plain has not settled it",
        },
        {
          sourceId: "rainey-notley-sacred-bridge",
          supportedClaim:
            "The condition of the Jordan valley floor in the Jericho reach and the limits it places on identification",
        },
      ],
      evidenceLabels: ["disputed"],
    },
    uncertainties: {
      body:
        "Two questions here are worth keeping apart. The first is where the camp stood, and the answer is that nobody knows: Khirbet el-Mafjir and Khirbet en-Nitla have both been argued and neither has held. The second is whether Gilgal is a place name in the ordinary sense at all. The word means something like circle, and the Bible attaches it to more than one location, including a Gilgal near the mountains at Shechem and a king of Goiim in Gilgal listed among northern rulers. If the term names a kind of site rather than one site, looking for a single Gilgal may be the wrong search.",
      scriptureRefs: ["Deuteronomy 11:30", "Joshua 12:23"],
      citations: [
        {
          sourceId: "hess-joshua",
          locator: "on Joshua 4-5",
          supportedClaim:
            "The name Gilgal describes a circle of stones and is attached to more than one location in the Old Testament",
        },
        {
          sourceId: "anchor-bible-dictionary",
          locator: "s.v. Gilgal",
          supportedClaim:
            "The candidate sites proposed for Gilgal and the absence of agreement among them",
        },
      ],
      evidenceLabels: ["disputed"],
    },
    later: {
      body:
        "Gilgal keeps its standing for centuries. Samuel includes it in his annual circuit; Saul is confirmed as king there; and it is at Gilgal that Saul offers the sacrifice he had been told to wait for and hears that his kingship will not last. Samuel executes Agag on the same ground. Judah gathers at Gilgal to bring David back across the Jordan after Absalom's revolt. By the time of the eighth-century prophets it is a sanctuary under judgement: Amos tells Israel not to go there, and Hosea names it repeatedly beside Bethel.",
      scriptureRefs: [
        "1 Samuel 7:16",
        "1 Samuel 11:14-15",
        "1 Samuel 13:7-14",
        "1 Samuel 15:33",
        "2 Samuel 19:15",
        "Hosea 4:15",
        "Amos 5:5",
      ],
      evidenceLabels: ["biblical-account"],
    },
  },

  {
    entityId: "debir",
    historical: {
      body:
        "Debir's identification has moved once already. Albright's excavation of Tell Beit Mirsim between the wars was published as Debir, and that reading held in reference works for decades. What undid it was the city lists themselves: Joshua 15 places Debir in Judah's hill country district, and Tell Beit Mirsim sits below and west of that, in the Shephelah. Khirbet Rabud, higher and south-west of [[entity:hebron]], fits the district and has produced Late Bronze and Iron Age material, though it has been only partly investigated. The town's second name, Kiriath-sepher, points to some documentary or scribal association that nothing excavated has illuminated.",
      citations: [
        {
          sourceId: "aharoni-land-of-bible",
          supportedClaim:
            "Judah's city lists are organised by district, and Debir belongs to a hill country group rather than a Shephelah one",
        },
        {
          sourceId: "rainey-notley-sacred-bridge",
          supportedClaim:
            "Khirbet Rabud is the leading identification for Debir in the southern Judean hill country",
        },
        {
          sourceId: "anchor-bible-dictionary",
          locator: "s.v. Debir",
          supportedClaim:
            "The excavation history behind the Tell Beit Mirsim identification and its abandonment",
        },
      ],
      evidenceLabels: ["externally-attested", "disputed"],
    },
    uncertainties: {
      body:
        "Khirbet Rabud leads, but leading is not settled, and the difference affects more than a pin. Debir closes the southern sweep in chapter 10, and it is also the town [[entity:caleb]] offers his daughter for. Where it stood governs how far that sweep reached and how Caleb's holding around Hebron relates to it. There is also the problem that Debir is not a unique name: Joshua 15:7 has a Debir on Judah's northern boundary above the [[entity:valley-of-achor]], which cannot be this town. Rabud has seen limited excavation, so the candidate that fits the lists best is also the least tested.",
      scriptureRefs: ["Joshua 10:38-39", "Joshua 15:7", "Joshua 15:15-19"],
      citations: [
        {
          sourceId: "aharoni-land-of-bible",
          supportedClaim:
            "Boundary and district reconstruction is what constrains the candidates for Debir",
        },
        {
          sourceId: "hess-joshua",
          locator: "on Joshua 15:15-19",
          supportedClaim:
            "Debir's role in Caleb's allotment and the relationship between the Joshua 10 and Joshua 15 notices",
        },
      ],
      evidenceLabels: ["disputed"],
    },
    later: {
      body:
        "The capture of Debir is told a second time at the start of Judges, where [[entity:othniel]] takes the town and marries [[entity:achsah]]. Othniel then becomes the first of the judges, raised up against a Mesopotamian king, so the earliest figure in that book emerges from a household formed at this site. Debir also stands among the towns assigned to the priests, and the list is repeated in Chronicles.",
      scriptureRefs: [
        "Joshua 21:15",
        "Judges 1:11-15",
        "Judges 3:9-11",
        "1 Chronicles 6:58",
      ],
      evidenceLabels: ["biblical-account"],
    },
  },

  {
    entityId: "eglon",
    historical: {
      body:
        "Both candidates for Eglon have long excavation histories and neither has produced its name. Tell el-Hesi, dug at the end of the nineteenth century in what is usually called the first stratigraphic excavation in the region, was identified by its excavator as Lachish; when that identification transferred to Tell ed-Duweir, Eglon was proposed for el-Hesi to fill the vacancy. Tel 'Eton, on the eastern edge of the Shephelah where it rises into the Judean hills, is the alternative, argued chiefly from the logic of Judah's district lists. Both sites were occupied in the Late Bronze and Iron Ages, and neither has yielded an inscription that decides anything.",
      citations: [
        {
          sourceId: "anchor-bible-dictionary",
          locator: "s.v. Eglon",
          supportedClaim:
            "The identification history of Tell el-Hesi and the competing proposal of Tel 'Eton for Eglon",
        },
        {
          sourceId: "aharoni-land-of-bible",
          supportedClaim:
            "The argument for Eglon's location from the organisation of Judah's district lists",
        },
        {
          sourceId: "rainey-notley-sacred-bridge",
          supportedClaim:
            "Competing identifications for Eglon in the southern Shephelah",
        },
      ],
      evidenceLabels: ["externally-attested", "disputed"],
    },
    uncertainties: {
      body:
        "Choosing between the candidates redraws the southern campaign. The sequence in chapter 10 runs [[entity:makkedah]], [[entity:libnah]], [[entity:lachish]], Eglon, [[entity:hebron]], [[entity:debir]], which reads as a line moving south along the lowlands and then climbing into the hills. Tel 'Eton keeps that line coherent. Tell el-Hesi pulls it well west toward the coastal plain and then back again. Since Makkedah and Libnah are not located either, three of the six names in the sequence are uncertain or wholly unknown, and any route drawn through them is a proposal rather than a recovered march.",
      scriptureRefs: ["Joshua 10:31-39"],
      citations: [
        {
          sourceId: "rainey-notley-sacred-bridge",
          supportedClaim:
            "Reconstructions of the southern campaign route depend on which identifications are adopted for its unlocated towns",
        },
      ],
      evidenceLabels: ["disputed"],
    },
    later: {
      body:
        "The town does not appear again. It is absent from the monarchy narratives, from the prophets, and from the lists of returning exiles, which is part of why its position is so hard to recover: there is no later reference to triangulate from. The Eglon most readers remember, the Moabite king killed by Ehud in Judges 3, is a person rather than this place, and the shared name is coincidence.",
      scriptureRefs: ["Judges 3:12-30"],
      evidenceLabels: ["biblical-account"],
    },
  },

  {
    entityId: "makkedah",
    historical: {
      body:
        "With no site to excavate, what exists for Makkedah is a paper trail. Eusebius, compiling place names for Christian pilgrims in the fourth century, put it a short distance east of Eleutheropolis, the Roman town at Beit Guvrin, which is the earliest attempt at a location anyone made. Modern proposals have worked from that note and from name echoes in the area, Khirbet el-Qom and Khirbet Beit Maqdum among them, without producing agreement.\n\n" +
        "The narrative's own detail does not help as much as it looks. A cave whose mouth can be blocked with large stones describes ordinary karst in the soft chalk of the Shephelah, where such caves are numerous. It narrows nothing.",
      citations: [
        {
          sourceId: "anchor-bible-dictionary",
          locator: "s.v. Makkedah",
          supportedClaim:
            "The Onomasticon's placement of Makkedah near Eleutheropolis and the modern candidates proposed from it",
        },
        {
          sourceId: "rainey-notley-sacred-bridge",
          supportedClaim:
            "Makkedah remains unlocated, and the cave terrain of the Shephelah chalk is widespread rather than distinctive",
        },
      ],
      evidenceLabels: ["disputed"],
    },
    uncertainties: {
      body:
        "Makkedah is the hinge of the southern campaign and the study cannot place it. The cave, the five captured kings, the return of the army to camp, and the first city taken in the sweep all happen here. Judah's district list puts it in a Shephelah group, which narrows it to a region and no further. The deeper problem is that Makkedah appears nowhere in the Bible outside Joshua, so there is no later reference to triangulate from, and nothing excavated anywhere carries the name. Rather than pin it plausibly, the map leaves a gap where it belongs.",
      scriptureRefs: ["Joshua 10:16-28", "Joshua 12:16", "Joshua 15:41"],
      citations: [
        {
          sourceId: "rainey-notley-sacred-bridge",
          supportedClaim:
            "No proposed identification for Makkedah has achieved agreement",
        },
      ],
      evidenceLabels: ["disputed"],
    },
  },

  {
    entityId: "aijalon",
    historical: {
      body:
        "The valley matters more than the town. Aijalon is a broad basin at the point where the ridge routes off the Benjamin plateau, the Beth-horon descent chief among them, spill out onto the coastal plain. Anyone holding the plateau needs it; anyone on the plain who wants the highlands has to come up through it. That makes it a permanent friction point, and the Amarna correspondence already shows it changing hands, named among places lost to hostile forces in a letter to the Egyptian court. The town site at Yalo carries the name into modern times but has seen no substantial excavation.",
      citations: [
        {
          sourceId: "rainey-notley-sacred-bridge",
          supportedClaim:
            "The Aijalon valley is the western outlet of the Beth-horon route between the plateau and the coastal plain",
        },
        {
          sourceId: "moran-amarna",
          supportedClaim:
            "Aijalon is named in the Amarna correspondence among places reported lost to hostile forces",
        },
      ],
      evidenceLabels: ["externally-attested"],
    },
    uncertainties: {
      body:
        "The basin is not in doubt and the town is. Yalo is placed from its name rather than from excavation, and it is worth being clear about which of the two the text actually needs: the poem in chapter 10 pairs [[entity:gibeon]] with the valley of Aijalon, not with a town, so the geography that matters there is the basin at the foot of the pass. The allotment material is less tidy. Aijalon goes to Dan in chapter 19 and reappears in chapter 21 as a Levitical town taken from Ephraim's holding, which is one of several places where the tribal lists and the Levitical list do not line up.",
      scriptureRefs: ["Joshua 10:12", "Joshua 19:42", "Joshua 21:24"],
      citations: [
        {
          sourceId: "haran-levitical-cities",
          supportedClaim:
            "The Levitical city lists do not always agree with the tribal allotments they draw on, which raises the question of what kind of document they are",
        },
      ],
      evidenceLabels: ["disputed"],
    },
    later: {
      body:
        "Judges reports that the Amorites kept their footing in this area, at Aijalon and its neighbours, until they were put to forced labour. Jonathan's raid at Michmash turns into a rout that runs the Philistines back down through the pass as far as Aijalon. Rehoboam fortifies the town as part of Judah's western defences, and later Chronicles records Philistines taking it back during Ahaz's reign. The corridor stays contested for as long as there is anyone to contest it.",
      scriptureRefs: [
        "Judges 1:35",
        "1 Samuel 14:31",
        "2 Chronicles 11:10",
        "2 Chronicles 28:18",
      ],
      evidenceLabels: ["biblical-account"],
    },
  },

  {
    entityId: "beth-shemesh",
    historical: {
      body:
        "Beth-shemesh sits where the Sorek valley opens west, looking straight at [[entity:timnah]] and [[entity:ekron]] a few kilometres downstream. It has been excavated across three campaigns since the early twentieth century, and the Late Bronze Canaanite town and the Iron Age settlement above it are both well documented.\n\n" +
        "One result has shaped how the site is discussed. The Iron Age I occupation produced almost no pig bones and very little of the decorated pottery characteristic of its western neighbours, in contrast to those neighbours' assemblages. The recent excavators read that as a community deliberately marking itself off across a short distance. Whether diet and pottery can carry ethnic identity that directly is argued over, and it is an inference about the people, not a datum from the ground.",
      citations: [
        {
          sourceId: "mazar-archaeology-land",
          supportedClaim:
            "The excavation history of Beth-shemesh and the character of its Late Bronze and Iron Age I occupation",
        },
        {
          sourceId: "dever-early-israelites",
          supportedClaim:
            "Faunal remains and pottery are used as markers of group identity in the Iron Age I highlands and border zones, and the inference is contested",
        },
        {
          sourceId: "rainey-notley-sacred-bridge",
          supportedClaim:
            "Beth-shemesh guards the Sorek valley where it leaves the Shephelah for the coastal plain",
        },
      ],
      evidenceLabels: ["externally-attested"],
    },
    uncertainties: {
      body:
        "This is a case where the site is rich and the book asks nothing of it. Joshua uses Beth-shemesh as a point on Judah's northern boundary and lists it among the Levitical towns; no capture, no king, no destruction is claimed here. So the material that makes the tell interesting, the border behaviour of its Iron Age I villagers, belongs to a period after the events Joshua narrates and cannot be used to support or undercut them. Reading the two together requires deciding first which century Joshua's campaigns belong to, and that is the question the site cannot answer.",
      scriptureRefs: ["Joshua 15:10", "Joshua 21:16"],
      citations: [
        {
          sourceId: "provan-long-longman",
          supportedClaim:
            "Material from a period cannot bear on a narrative until the narrative has been dated, and the two questions must be kept separate",
        },
      ],
      evidenceLabels: ["disputed"],
    },
    later: {
      body:
        "The ark comes home here. Philistine drivers send the cart up the Sorek valley, the people of Beth-shemesh are harvesting wheat when they see it, and the episode ends badly when some of them look into the ark and die. Centuries later Amaziah of Judah challenges Joash of Israel and is defeated at Beth-shemesh, captured, and taken to Jerusalem while its wall is broken down. The town changes hands again to the Philistines under Ahaz.",
      scriptureRefs: [
        "1 Samuel 6:9-21",
        "2 Kings 14:11-14",
        "2 Chronicles 28:18",
      ],
      evidenceLabels: ["biblical-account"],
    },
  },

  {
    entityId: "beersheba",
    earlier: {
      body:
        "Beersheba is patriarchal ground before it is anything else. Abraham makes a treaty with Abimelech over a disputed well and names the place for the oath sworn and the seven lambs set apart, then plants a tamarisk and settles there. Isaac digs at the same spot, has the same argument with the same king, and names his well in the same way. Jacob leaves from Beersheba when he flees to Haran, and stops there again on the road down to Egypt to sacrifice, where God speaks to him about going.",
      scriptureRefs: [
        "Genesis 21:22-34",
        "Genesis 26:23-33",
        "Genesis 28:10",
        "Genesis 46:1-5",
      ],
      evidenceLabels: ["biblical-account"],
    },
    historical: {
      body:
        "Tel Be'er Sheva stands where two wadis meet at the northern edge of the Negev, on the practical boundary between land that can be farmed and land that can only be grazed. The excavated town is Iron Age: a planned oval settlement with a perimeter street, storehouses, a deep shaft well cut near the gate, and a dismantled horned altar whose blocks were found reused in later walls. Nothing on the mound corresponds to the patriarchal period. The wells and springs of the oasis lie across a wider area than the tell, and the modern city covers much of it.",
      citations: [
        {
          sourceId: "mazar-archaeology-land",
          supportedClaim:
            "The excavated town at Tel Be'er Sheva is an Iron Age planned settlement, including the well by the gate and the reused horned altar blocks",
        },
        {
          sourceId: "aharoni-land-of-bible",
          supportedClaim:
            "Beersheba marks the transition between settled agriculture and the Negev",
        },
      ],
      evidenceLabels: ["externally-attested"],
    },
    uncertainties: {
      body:
        "Genesis puts three generations of patriarchs at Beersheba; the mound's remains start considerably later. Three explanations are usually offered, and they are not mutually exclusive. Pastoral camps at a well leave nothing a stratigraphic excavation can recover. The oasis is larger than the tell, so the older settlement may simply be somewhere else in it. Or the Genesis stories were attached to a place already famous when they were written down. Joshua adds a smaller puzzle of its own by listing Beersheba both in Judah's Negev district and in Simeon's allotment, which sits inside Judah's.",
      scriptureRefs: ["Joshua 15:28", "Joshua 19:2"],
      citations: [
        {
          sourceId: "mazar-archaeology-land",
          supportedClaim:
            "The excavated sequence at Tel Be'er Sheva does not reach back to the period Genesis describes",
        },
        {
          sourceId: "aharoni-land-of-bible",
          supportedClaim:
            "Simeon's towns are listed within Judah's territory, which the district lists handle inconsistently",
        },
      ],
      evidenceLabels: ["disputed"],
    },
    later: {
      body:
        "Beersheba becomes shorthand for the southern end of everything: from Dan to Beersheba is how the Bible says the whole country. Samuel's sons take bribes judging there. Elijah, running from Jezebel, gets as far as Beersheba before going on into the wilderness to ask to die. A king's mother is named as being from the town. And Amos, listing the shrines people travel to, names Beersheba alongside Bethel and Gilgal as places whose pilgrims are not thereby safe.",
      scriptureRefs: [
        "1 Samuel 3:20",
        "1 Samuel 8:1-3",
        "1 Kings 19:3",
        "2 Kings 12:1",
        "Amos 5:5",
        "Amos 8:14",
      ],
      evidenceLabels: ["biblical-account"],
    },
  },

  {
    entityId: "arad",
    earlier: {
      body:
        "Arad's king is one of the few rulers who attacks Israel before Joshua rather than waiting to be attacked. Numbers reports that the Canaanite king of Arad, living in the Negev, fought Israel and took captives; Israel vowed to devote his towns to destruction and afterwards called the place [[entity:hormah]]. The itinerary in Numbers 33 mentions him again. This is the one episode in the Torah where the language later used throughout Joshua is applied to a southern Canaanite town.",
      scriptureRefs: ["Numbers 21:1-3", "Numbers 33:40"],
      evidenceLabels: ["biblical-account"],
    },
    historical: {
      body:
        "Tel Arad holds two towns and a long silence between them. The lower mound carried a large fortified settlement in the Early Bronze Age, one of the biggest in the south, which was abandoned. The upper mound carries an Iron Age Judean fortress, rebuilt repeatedly, containing a sanctuary with a small inner room, two incense altars and a standing stone, and it produced a substantial group of Hebrew ostraca including military correspondence. Between the Early Bronze town and the Iron Age fortress the site has no significant occupation. There is nothing from the Late Bronze Age for a Canaanite king to rule from.",
      citations: [
        {
          sourceId: "mazar-archaeology-land",
          supportedClaim:
            "The occupation sequence at Tel Arad, the Early Bronze lower city, the long gap, and the Iron Age fortress with its sanctuary and ostraca",
        },
        {
          sourceId: "rainey-notley-sacred-bridge",
          supportedClaim:
            "Tel Arad's position in the eastern Negev and its role in the southern route network",
        },
      ],
      evidenceLabels: ["externally-attested"],
    },
    uncertainties: {
      body:
        "The gap at Tel Arad is one of the standard objections to reading the conquest lists as a straightforward record, and it is a serious one. Three responses are current. The name may have belonged to a district rather than a single town, and Egyptian records of a later campaign appear to distinguish more than one Arad in the Negev. The town of Numbers 21 may be a neighbouring site, with candidates proposed among the tells of the Beersheba basin. Or the notice reflects the geography of a later period. Joshua does not describe taking Arad; it only lists its king among the defeated.",
      scriptureRefs: ["Joshua 12:14"],
      citations: [
        {
          sourceId: "rainey-notley-sacred-bridge",
          supportedClaim:
            "Egyptian topographical material appears to name more than one Arad in the Negev, which bears on whether the name denoted a district",
        },
        {
          sourceId: "mazar-archaeology-land",
          supportedClaim:
            "No significant Late Bronze occupation has been found at Tel Arad",
        },
      ],
      evidenceLabels: ["disputed"],
    },
    later: {
      body:
        "Judges records Kenites, the family of Moses' father-in-law, settling with Judah in the Negev of Arad, so the district becomes the edge where Israel and a friendly non-Israelite people share ground. The Iron Age fortress on the mound belongs to Judah's southern defence line, and its ostraca include instructions about grain and troop movements and a reference to the house of Yahweh, which puts the site inside the administrative and religious life of the later kingdom the prophets addressed.",
      scriptureRefs: ["Judges 1:16"],
      citations: [
        {
          sourceId: "mazar-archaeology-land",
          supportedClaim:
            "The Arad ostraca record military and administrative correspondence and mention the house of Yahweh",
        },
      ],
      evidenceLabels: ["biblical-account", "externally-attested"],
    },
  },

  {
    entityId: "dor",
    historical: {
      body:
        "Dor had the best shelter on a coast with almost none: a low headland with bays on either side and a reef line breaking the swell, which on this shore counts as a harbour. The Late Bronze town was Canaanite. What happens next is documented from an unexpected direction. The Egyptian account of Wenamun's voyage, written in the early Iron Age and preserved in translation in the standard collections, describes Dor as a town of a sea people with a ruler of its own, who receives an Egyptian envoy and disputes with him over stolen silver. So the early Iron Age town on this bay was neither Egyptian nor Israelite, and it was functioning as an independent port.",
      citations: [
        {
          sourceId: "anet",
          supportedClaim:
            "The Report of Wenamun describes Dor in the early Iron Age as a port town of a sea people under its own ruler",
        },
        {
          sourceId: "mazar-archaeology-land",
          supportedClaim:
            "The Late Bronze Canaanite town at Dor and the character of its early Iron Age occupation",
        },
        {
          sourceId: "rainey-notley-sacred-bridge",
          supportedClaim:
            "Dor's anchorage south of the Carmel headland and its position on the coastal route",
        },
      ],
      evidenceLabels: ["externally-attested"],
    },
    uncertainties: {
      body:
        "Joshua's phrase for this place, Naphath-dor, is not well understood; it is usually taken as the heights or the district of Dor, which would make the entry a region rather than a town. That matters, because Dor appears twice in the book with different force: its king is in the register of defeated rulers, and the town is among the coastal places Manasseh did not take. Who exactly held it is also unclear. If a sea people polity was established on this bay in the early Iron Age, the population Joshua's allotment assigns to Manasseh may not have been Canaanite at all.",
      scriptureRefs: ["Joshua 11:2", "Joshua 12:23", "Joshua 17:11"],
      citations: [
        {
          sourceId: "aharoni-land-of-bible",
          supportedClaim:
            "Naphath-dor is a regional term of uncertain meaning in the allotment and king-list material",
        },
        {
          sourceId: "anet",
          supportedClaim:
            "A non-Israelite sea people polity is attested at Dor in the early Iron Age",
        },
      ],
      evidenceLabels: ["disputed"],
    },
    later: {
      body:
        "Dor surfaces once more in a way that shows the situation changing quietly. Solomon's list of administrative districts includes the region of Dor, governed by a son-in-law of the king, so the coastal town Joshua 17 records as unpossessed is being taxed from Jerusalem a few generations later without any conquest being reported. After that the Old Testament loses interest in it, and Dor's later prominence as a Phoenician and then Hellenistic port lies outside the biblical narrative.",
      scriptureRefs: ["Joshua 17:11", "1 Kings 4:11"],
      evidenceLabels: ["biblical-account"],
    },
  },

  {
    entityId: "joppa",
    historical: {
      body:
        "Joppa's harbour is poor by any modern measure, a gap in a reef line that small ships could work and larger ones feared, but it was the only natural shelter on the long open coast between the Carmel headland and Egypt, which made it valuable out of proportion to its size. Egyptian records treat it as an administrative and supply centre: it appears in New Kingdom topographical lists, an Egyptian literary tale turns on its capture, and monumental fragments bearing a pharaoh's name have been recovered from the mound. The tell lies under the old town of Jaffa, so excavation has been piecemeal.",
      citations: [
        {
          sourceId: "thutmose-iii-lists",
          supportedClaim:
            "Joppa appears among the Canaanite towns in Egyptian topographical records of the New Kingdom",
        },
        {
          sourceId: "mazar-archaeology-land",
          supportedClaim:
            "Egyptian administrative presence at Joppa and the constraints on excavating beneath the old town",
        },
        {
          sourceId: "rainey-notley-sacred-bridge",
          supportedClaim:
            "Joppa is the only natural anchorage on the coast between Carmel and Egypt",
        },
      ],
      evidenceLabels: ["externally-attested"],
    },
    uncertainties: {
      body:
        "Joppa enters Joshua in one line, as the point the border of Dan runs out to, and the Hebrew phrase means something like facing Joppa or in front of Joppa rather than including it. That is a careful piece of wording, and it is worth noticing what the book is and is not saying: the allotment reaches the sea beside a port, and nothing suggests Dan held the port. The coastal plain is the clearest instance in the book of territory described in full and possessed hardly at all.",
      scriptureRefs: ["Joshua 19:46-47"],
      citations: [
        {
          sourceId: "hess-joshua",
          locator: "on Joshua 19:46",
          supportedClaim:
            "The boundary phrase places Dan's border opposite Joppa rather than claiming the town itself",
        },
      ],
      evidenceLabels: ["disputed"],
    },
    later: {
      body:
        "Joppa becomes Israel's door to the sea without ever quite becoming Israelite. Cedar from Lebanon is floated down the coast to Joppa for Solomon's temple, and the same arrangement is used again for the second temple after the exile. Jonah goes down to Joppa to find a ship going the opposite way from Nineveh. In Acts it is where Peter raises Tabitha, and where, staying in a tanner's house by the sea, he sees the vision of the sheet and is sent to a Roman officer's household in Caesarea.",
      scriptureRefs: [
        "2 Chronicles 2:16",
        "Ezra 3:7",
        "Jonah 1:3",
        "Acts 9:36-43",
        "Acts 10:5-23",
      ],
      evidenceLabels: ["biblical-account"],
    },
  },

  {
    entityId: "sidon",
    earlier: {
      body:
        "Genesis puts Sidon at the head of the Canaanite genealogy, naming Sidon as Canaan's firstborn, and then uses the city as the northern peg of the Canaanite territory, which runs from Sidon toward Gerar and Gaza. Jacob's blessing on Zebulun reaches in the same direction, toward Sidon. So before Israel enters the land, Sidon is already fixed in the Torah's mental map as the far edge of Canaan rather than as a foreign country beyond it.",
      scriptureRefs: ["Genesis 10:15-19", "Genesis 49:13"],
      evidenceLabels: ["biblical-account"],
    },
    historical: {
      body:
        "Sidon has been lived in continuously for several thousand years, which secures the identification and blocks the excavation; the ancient city lies under the modern one and under the harbour. Its Late Bronze rulers are in the Amarna archive, and the letters show the pattern that shapes this coast for centuries: Sidon and Tyre in competition, each accusing the other before the Egyptian court, each claiming to be the pharaoh's loyal servant. Phoenician maritime expansion, the thing Sidon is remembered for, belongs to the Iron Age and is later than the events of Joshua.",
      citations: [
        {
          sourceId: "moran-amarna",
          supportedClaim:
            "Sidon's ruler corresponds with the Egyptian court, in rivalry with Tyre, in the Amarna archive",
        },
        {
          sourceId: "rainey-notley-sacred-bridge",
          supportedClaim:
            "Sidon's position on the Phoenician coast and its relationship with Tyre",
        },
        {
          sourceId: "mazar-archaeology-land",
          supportedClaim:
            "Phoenician maritime expansion belongs to the Iron Age rather than the Late Bronze period",
        },
      ],
      evidenceLabels: ["externally-attested"],
    },
    uncertainties: {
      body:
        "Sidon is a test case for reading Joshua's boundaries honestly. The book takes the border of Asher up to Great Sidon and in the same chapters admits that the [[entity:sidonians]] were not driven out; the pursuit after the northern battle runs toward Sidon rather than to it. A described limit and an actual frontier are two different things, and Joshua keeps them both without reconciling them. There is also a question of reference: Sidonian in these texts may mean the people of one city or serve as a general term for the coastal Phoenicians, and the usage is not consistent enough to settle.",
      scriptureRefs: ["Joshua 11:8", "Joshua 13:4-6", "Joshua 19:28"],
      citations: [
        {
          sourceId: "weinfeld-promise-land",
          supportedClaim:
            "Boundary descriptions in the land-grant tradition state an extent claimed rather than territory held",
        },
        {
          sourceId: "hess-joshua",
          locator: "on Joshua 13:4-6",
          supportedClaim:
            "The term Sidonian is used in the boundary material with more than one range of reference",
        },
      ],
      evidenceLabels: ["disputed"],
    },
    later: {
      body:
        "The Sidonians are listed in Judges among the peoples left in the land to test Israel, and the testing works: Israel serves their gods. Sidonian craftsmen help build Solomon's temple, and Sidonian wives turn him to Ashtoreth. Ahab marries Jezebel, daughter of the king of the Sidonians, which brings Baal worship into the northern kingdom as state policy. Elijah, hiding from her, is sent to a widow at Zarephath in Sidon's own territory. Jesus visits the region and speaks of Tyre and Sidon as cities that would have repented.",
      scriptureRefs: [
        "Judges 3:3",
        "Judges 10:6",
        "1 Kings 11:1-5",
        "1 Kings 16:31",
        "1 Kings 17:9",
        "Matthew 11:21-22",
        "Mark 7:24-31",
      ],
      evidenceLabels: ["biblical-account"],
    },
  },

  {
    entityId: "mount-hermon",
    earlier: {
      body:
        "Deuteronomy uses Hermon to state how much had already been taken east of the Jordan: the land from the valley of the Arnon to Mount Hermon, out of the hands of two Amorite kings. It also does something unusual and records the mountain's other names, noting that the Sidonians call Hermon Sirion and the Amorites call it Senir. A mountain with three names in three languages is a mountain that several peoples look at, which is a fair description of where it stands.",
      scriptureRefs: ["Deuteronomy 3:8-9", "Deuteronomy 4:48"],
      evidenceLabels: ["biblical-account"],
    },
    historical: {
      body:
        "Hermon is not a peak but a massif, running some forty kilometres, with its highest point above two thousand eight hundred metres. Snow lies on it into summer, and the meltwater feeds the springs at its foot that become the headwaters of the Jordan, which is why a mountain on the northern horizon matters to a valley two hundred kilometres south. Its slopes carried sanctuaries in later antiquity, and the biblical name Baal-hermon indicates that a deity was associated with the mountain well before that. Nothing about Joshua's campaigns is recoverable from the massif itself; it functions in the book as a limit, not a site.",
      citations: [
        {
          sourceId: "rainey-notley-sacred-bridge",
          supportedClaim:
            "Hermon's extent and elevation, and the role of its snowmelt in feeding the Jordan headwaters",
        },
        {
          sourceId: "beitzel-moody-atlas",
          supportedClaim:
            "The mountain's precipitation and its function as the water source for the northern valleys",
        },
        {
          sourceId: "anchor-bible-dictionary",
          locator: "s.v. Hermon",
          supportedClaim:
            "Hermon carried cult associations, reflected in the name Baal-hermon and in later sanctuaries on its slopes",
        },
      ],
      evidenceLabels: ["externally-attested"],
    },
    uncertainties: {
      body:
        "Hermon's position is certain and its role in the text is not. The summary statements have Joshua taking the land up to Mount Hermon and to [[entity:baal-gad]] below it, and no narrative in the book describes fighting that far north; the northern campaign is fought around the waters of Merom and Hazor, well to the south. So what does the summary claim? Readings range from the extent of raiding, through the extent of a claim in the idiom of land grants, to an ideal boundary set out for later generations. Baal-gad is not located either, so the northern limit is fixed by a mountain and an unplaced town.",
      scriptureRefs: ["Joshua 11:17", "Joshua 12:1", "Joshua 13:5"],
      citations: [
        {
          sourceId: "kitchen-reliability",
          supportedClaim:
            "Joshua's summary statements of extent should be read against the campaigns the book actually narrates",
        },
        {
          sourceId: "weinfeld-promise-land",
          supportedClaim:
            "Boundary statements of this kind belong to a tradition of land grant and describe an extent claimed",
        },
      ],
      evidenceLabels: ["disputed"],
    },
    later: {
      body:
        "Hermon keeps its place as a marker of the far north: the Hivites live in the Lebanon range from Baal-hermon, and eastern Manasseh's territory is described as reaching Senir and Hermon. The psalms use it for scale and for blessing, the dew of Hermon falling on Zion. In the Gospels, Caesarea Philippi at the mountain's foot is where Peter names Jesus as the Christ, and the transfiguration six days later is often located on Hermon rather than Tabor, on grounds of proximity rather than anything the text says.",
      scriptureRefs: [
        "Judges 3:3",
        "1 Chronicles 5:23",
        "Psalms 89:12",
        "Psalms 133:3",
        "Matthew 16:13",
        "Matthew 17:1-2",
      ],
      evidenceLabels: ["biblical-account"],
    },
  },

  {
    entityId: "valley-of-achor",
    historical: {
      body:
        "The Buqei'ah, the basin usually proposed for the valley of Achor, is a small closed depression in the wilderness between the Judean hills and the Dead Sea, dry and marginal. Survey work there found a handful of small fortified farmsteads with dams and field systems, built to trap the runoff that makes cultivation possible in a place with almost no rain; they are Iron Age, and they are commonly connected with the wilderness towns in Judah's city list. Nothing has been found in the basin from the period Joshua 7 describes, which is unsurprising for a place the narrative treats as an execution ground rather than a settlement.",
      citations: [
        {
          sourceId: "anchor-bible-dictionary",
          locator: "s.v. Achor, Valley of",
          supportedClaim:
            "The Buqei'ah basin and the Iron Age farmsteads surveyed in it, and their proposed connection with Judah's wilderness towns",
        },
        {
          sourceId: "aharoni-land-of-bible",
          supportedClaim:
            "The wilderness district of Judah's city list and the terrain it covers",
        },
      ],
      evidenceLabels: ["externally-attested", "disputed"],
    },
    uncertainties: {
      body:
        "Two criteria pull against each other, which is why this stays open. Judah's northern boundary description runs from the Jordan up through the valley of Achor, which points to the wilderness fringe and suits the Buqei'ah. The narrative of chapter 7, on the other hand, implies somewhere the whole assembly could reach and return from while camped near Jericho, which suits a wadi much closer to the valley floor. The Buqei'ah proposal also leans on prophetic passages that use the name, which tell us the name was still current later without telling us where the place was.",
      scriptureRefs: ["Joshua 7:24-26", "Joshua 15:7"],
      citations: [
        {
          sourceId: "aharoni-land-of-bible",
          supportedClaim:
            "The boundary description in Joshua 15:7 places the valley of Achor on the line running up from the Jordan into the Judean wilderness",
        },
        {
          sourceId: "anchor-bible-dictionary",
          locator: "s.v. Achor, Valley of",
          supportedClaim:
            "The identification with the Buqei'ah is inferred rather than demonstrated, and alternatives nearer Jericho are argued",
        },
      ],
      evidenceLabels: ["disputed"],
    },
    later: {
      body:
        "The name becomes a promise. Hosea, describing a restored marriage between God and Israel, says he will give her the valley of Achor as a door of hope, and that she will answer there as she did in her youth. Isaiah's vision of a renewed land makes the valley of Achor a resting place for herds. The place whose name means trouble, named for the worst day of Israel's first campaign, is the one the prophets choose when they want an image of disaster turned around.",
      scriptureRefs: ["Hosea 2:15", "Isaiah 65:10"],
      evidenceLabels: ["biblical-account"],
    },
  },
];
