/**
 * Curated site register.
 *
 * Each seed carries a coordinate only when a location is actually proposed.
 * `certainty: "unknown"` means no coordinate is asserted, the site is deliberately
 * absent from the map, and the interface says so rather than inventing a pin.
 *
 * Coordinates are decimal degrees in GeoJSON order, [longitude, latitude], and
 * point at the archaeological mound or the geographic feature itself, not at a
 * nearby modern town centre. They are given to four decimal places, which is
 * about 10 m, but that precision describes the tell, not confidence that the
 * biblical place was there. Read `certainty` for that.
 *
 * Identification and placement follow Rainey and Notley, The Sacred Bridge, and
 * Aharoni, The Land of the Bible, checked against Hess and the Anchor Bible
 * Dictionary. Where those disagree, the site is marked disputed and the
 * alternatives are listed.
 */

import type {
  EntityType,
  EventIcon,
  FeatureCertainty,
  LayerId,
} from "../types";

export interface CiteSeed {
  sourceId: string;
  claim: string;
  locator?: string;
}

export interface SiteSeed {
  /** Entity id. The generated map feature id is `site-<id>`. */
  id: string;
  name: string;
  alt?: string[];
  type: Extract<EntityType, "city" | "geographic-feature" | "region">;
  /** [longitude, latitude]. Omit when `certainty` is "unknown". */
  coords?: [number, number];
  certainty: FeatureCertainty;
  /** Modern site name, where an identification is proposed. */
  modern?: string;
  /** Plain-language identification for the dossier header. */
  summary: string;
  /** Why the pin sits here, and how firmly. Shown on the map and in the dossier. */
  why: string;
  chapters: number[];
  layer?: LayerId;
  eventIcon?: EventIcon;
  alternatives?: { name: string; coordinates?: [number, number]; note: string }[];
  cites?: CiteSeed[];
}

const SB = (claim: string, locator?: string): CiteSeed => ({
  sourceId: "rainey-notley-sacred-bridge",
  claim,
  locator,
});

export const SITE_SEEDS: SiteSeed[] = [
  /* ================================================================ */
  /* The Jordan valley and the entry corridor                         */
  /* ================================================================ */
  {
    id: "jericho",
    name: "Jericho",
    alt: ["Tell es-Sultan", "City of Palms"],
    type: "city",
    coords: [35.4442, 31.8715],
    certainty: "well-supported",
    modern: "Tell es-Sultan, near modern Ariha (Jericho), West Bank",
    summary:
      "An oasis town guarding the western approach from the Jordan fords, and the first city the book deals with. Small in area but strategically placed: whoever held it controlled the road up into the hill country.",
    why: "The mound of Tell es-Sultan is identified with ancient Jericho with effective unanimity. It sits beside the perennial spring ('Ain es-Sultan) that makes the oasis possible, and the name survived continuously in the area. What is disputed is not where Jericho was but what its Late Bronze Age occupation looked like.",
    chapters: [2, 3, 4, 5, 6, 7, 16, 18, 24],
    cites: [
      SB("Identification of Tell es-Sultan with biblical Jericho"),
      {
        sourceId: "kenyon-digging-up-jericho",
        claim:
          "Excavation established the site's stratigraphy and the dating of its major fortifications",
      },
      {
        sourceId: "bienkowski-jericho-lb",
        claim:
          "Late Bronze Age occupation at the site was slight, on the standard reading",
      },
    ],
  },
  {
    id: "jordan-river",
    name: "The Jordan River",
    alt: ["the Jordan"],
    type: "geographic-feature",
    coords: [35.5525, 31.9372],
    certainty: "well-supported",
    summary:
      "The river running from the Sea of Chinnereth south to the Salt Sea, dropping through a deep rift valley. In Joshua it functions as the threshold: the boundary between wandering and inheritance.",
    why: "The river's course is known, though its exact channel has shifted within the floodplain (the Zor) over three thousand years, and modern water extraction has reduced its flow drastically. The line drawn here follows the present channel and should be read as the valley's axis rather than as the Bronze Age bank.",
    chapters: [1, 2, 3, 4, 5, 12, 13, 22],
    cites: [
      SB("Course of the Jordan and the structure of the rift valley"),
      {
        sourceId: "havrelock-river-jordan",
        claim: "The Jordan functions in the text as both a border and a link",
      },
    ],
  },
  {
    id: "jordan-crossing-region",
    name: "The crossing place opposite Jericho",
    type: "geographic-feature",
    coords: [35.5347, 31.8608],
    certainty: "approximate",
    summary:
      "The stretch of the Jordan where the text places Israel's crossing, opposite Jericho and within reach of the plains of Moab.",
    why: "The text locates the crossing opposite Jericho, which narrows it to a few kilometres of river, but it names no ford and no modern feature marks it. The point here represents that reach of the river, not a located spot. Traditional Christian pilgrimage sites downstream are later identifications tied to Jesus' baptism, not to Joshua 3.",
    chapters: [3, 4],
    layer: "events",
    eventIcon: "crossing",
    cites: [
      SB("The fords of the Jordan in the Jericho reach"),
      {
        sourceId: "hess-joshua",
        claim:
          "The narrative locates the crossing opposite Jericho without specifying a ford",
        locator: "on Joshua 3",
      },
    ],
  },
  {
    id: "adam-city",
    name: "Adam",
    alt: ["Tell ed-Damiyeh"],
    type: "city",
    coords: [35.5539, 32.1097],
    certainty: "approximate",
    modern: "Tell ed-Damiyeh, Jordan",
    summary:
      "A place upstream of the crossing, named in Joshua 3:16 as the point where the water stopped and piled up.",
    why: "Usually identified with Tell ed-Damiyeh near the Damiyeh bridge, roughly 25 km upstream of Jericho. The identification rests on the position matching the text's description rather than on an inscription, so it is held loosely. The detail matters because it is the kind of specific, checkable geography that a purely symbolic account would not need.",
    chapters: [3],
    cites: [
      SB("Adam identified with Tell ed-Damiyeh, upstream of the Jericho fords"),
      {
        sourceId: "hess-joshua",
        claim: "The upstream location fits a landslide-style damming of the river",
        locator: "on Joshua 3:16",
      },
    ],
  },
  {
    id: "zarethan",
    name: "Zarethan",
    type: "city",
    coords: [35.575, 32.265],
    certainty: "disputed",
    modern: "Possibly Tell es-Sa'idiyeh, Jordan",
    summary:
      "A town named alongside Adam in the description of where the Jordan's waters were cut off.",
    why: "Several candidates have been proposed, Tell es-Sa'idiyeh and Tell Umm Hamad among them, and no identification commands agreement. The pin marks the general upstream reach rather than a settled location.",
    chapters: [3],
    alternatives: [
      {
        name: "Tell es-Sa'idiyeh",
        coordinates: [35.575, 32.265],
        note: "A substantial mound in the eastern Jordan valley, the most commonly cited candidate.",
      },
      {
        name: "Tell Umm Hamad",
        note: "An alternative proposal further south, closer to the Jabbok confluence.",
      },
    ],
    cites: [
      SB("Candidates proposed for Zarethan in the eastern Jordan valley"),
    ],
  },
  {
    id: "gilgal",
    name: "Gilgal",
    type: "city",
    coords: [35.5083, 31.8686],
    certainty: "disputed",
    summary:
      "Israel's first camp inside the land, east of Jericho, and the base from which the early campaigns are launched. The name means something like 'circle', probably referring to the ring of memorial stones.",
    why: "No site has been securely identified, and this is one of the more striking gaps in the book's geography. The text places it between the Jordan and Jericho, on Jericho's eastern side. Khirbet el-Mafjir and Khirbet en-Nitla have both been proposed without settling the matter. The pin represents the area the text describes, and should be read as an area, not a location.",
    chapters: [4, 5, 9, 10, 14],
    alternatives: [
      {
        name: "Khirbet el-Mafjir",
        note: "Proposed on the basis of position; the surface evidence has not settled the question.",
      },
      {
        name: "Khirbet en-Nitla",
        note: "An older proposal, now generally thought unpersuasive.",
      },
    ],
    cites: [
      SB("Gilgal's location remains unidentified despite several proposals"),
      {
        sourceId: "anchor-bible-dictionary",
        claim: "No candidate site for Gilgal has achieved consensus",
        locator: "s.v. Gilgal",
      },
    ],
  },
  {
    id: "shittim",
    name: "Shittim",
    alt: ["Abel-shittim"],
    type: "city",
    coords: [35.6278, 31.8408],
    certainty: "approximate",
    modern: "Probably in the vicinity of Tell el-Hammam / Tell el-Kefrein, Jordan",
    summary:
      "Israel's camp on the eastern side of the Jordan, in the plains of Moab, from which the spies are sent and the crossing begins.",
    why: "The general area is fixed by the text and by the terrain, since the plains of Moab are a defined stretch of the valley floor opposite Jericho. Which mound represents the camp is not established, and Israel encamped in this area rather than in a single walled town, so precision here would misrepresent the text.",
    chapters: [2, 3],
    cites: [
      SB("The plains of Moab opposite Jericho as the staging area"),
    ],
  },
  {
    id: "valley-of-achor",
    name: "The Valley of Achor",
    type: "geographic-feature",
    coords: [35.3903, 31.7461],
    certainty: "disputed",
    summary:
      "The place where Achan and his household were dealt with after the defeat at Ai. The name is connected in the text with a word for trouble or disaster.",
    why: "Often located in the Buqei'ah depression west of the Dead Sea, but the identification is inferred from later prophetic references rather than demonstrated, and other locations nearer Jericho have been suggested. Marked disputed.",
    chapters: [7],
    layer: "events",
    eventIcon: "failure",
    alternatives: [
      {
        name: "El-Buqei'ah",
        coordinates: [35.3903, 31.7461],
        note: "A basin west of the Dead Sea, the most frequently proposed location.",
      },
      {
        name: "A wadi nearer Jericho",
        note: "Preferred by some on the grounds that the narrative implies proximity to the camp at Gilgal.",
      },
    ],
    cites: [
      SB("Proposed locations for the Valley of Achor"),
    ],
  },

  /* ================================================================ */
  /* The central hill country                                         */
  /* ================================================================ */
  {
    id: "ai",
    name: "Ai",
    alt: ["et-Tell (proposed)", "Khirbet el-Maqatir (proposed)"],
    type: "city",
    coords: [35.2606, 31.9169],
    certainty: "disputed",
    modern: "Traditionally et-Tell; Khirbet el-Maqatir proposed as an alternative",
    summary:
      "A town near Bethel where Israel is defeated after Jericho, and then takes on a second attempt. The name means 'the ruin', which has itself fed the debate about the site.",
    why: "This is the sharpest site problem in the book. Et-Tell fits the text's geography well, but excavation found no Late Bronze Age occupation there, so on either conquest date there was no city to capture. Khirbet el-Maqatir has been proposed to solve that, by excavators who hold an early date; the proposal has not been widely accepted. A third option is that 'Ai' was a fortified outpost of Bethel rather than a town in its own right. Shown disputed, with the alternatives named.",
    chapters: [7, 8, 9, 10, 12],
    alternatives: [
      {
        name: "Et-Tell",
        coordinates: [35.2606, 31.9169],
        note: "The traditional identification, supported by position relative to Bethel, but excavation found the site unoccupied in the Late Bronze Age.",
      },
      {
        name: "Khirbet el-Maqatir",
        coordinates: [35.2469, 31.9236],
        note: "Proposed by excavators arguing for a fifteenth-century conquest. A smaller site with Late Bronze I material; the identification remains a minority view.",
      },
    ],
    cites: [
      {
        sourceId: "callaway-ai",
        claim:
          "Excavation at et-Tell found no Late Bronze Age occupation, creating the identification problem",
      },
      {
        sourceId: "stripling-maqatir",
        claim: "Khirbet el-Maqatir advanced as an alternative location for Ai",
      },
      {
        sourceId: "hess-joshua",
        claim:
          "The possibility that Ai functioned as a military outpost rather than a populated town",
        locator: "on Joshua 7-8",
      },
    ],
  },
  {
    id: "bethel",
    name: "Bethel",
    alt: ["Luz", "Beitin"],
    type: "city",
    coords: [35.2325, 31.9275],
    certainty: "well-supported",
    modern: "Beitin, West Bank",
    summary:
      "A hill country town on the watershed road with deep patriarchal associations: the place of Jacob's dream and of Abraham's earlier altar. It sits beside Ai in the Joshua narrative.",
    why: "Beitin is the standard identification, resting on the preserved name and on position along the central ridge route. A minority proposal locates Bethel at el-Bireh instead, largely in order to relieve the Ai problem; it has not been widely adopted.",
    chapters: [7, 8, 12, 16, 18],
    alternatives: [
      {
        name: "El-Bireh",
        coordinates: [35.2144, 31.9089],
        note: "A minority proposal, argued partly to allow a different solution to the location of Ai.",
      },
    ],
    cites: [
      SB("Bethel identified with Beitin on the central watershed"),
      {
        sourceId: "anchor-bible-dictionary",
        claim: "Beitin is the majority identification for Bethel",
        locator: "s.v. Bethel",
      },
    ],
  },
  {
    id: "shechem",
    name: "Shechem",
    alt: ["Tell Balata"],
    type: "city",
    coords: [35.2836, 32.2136],
    certainty: "well-supported",
    modern: "Tell Balata, beside modern Nablus, West Bank",
    summary:
      "A major hill country centre in the pass between Mount Ebal and Mount Gerizim. Joshua's covenant assemblies happen here, and the book ends here.",
    why: "Tell Balata is securely identified as Shechem, excavated extensively and known from Egyptian sources. Its position in the only easy east-west pass through the central highlands explains its importance. Notably, Joshua never reports a battle for Shechem, which is one of the book's quieter puzzles.",
    chapters: [8, 17, 20, 21, 24],
    cites: [
      {
        sourceId: "wright-shechem",
        claim:
          "Excavation of Tell Balata, its fortress-temple, and its long covenantal associations",
      },
      SB("Shechem's position controlling the central pass"),
      {
        sourceId: "moran-amarna",
        claim:
          "Shechem appears in the Amarna correspondence as a significant political centre under Labayu",
      },
    ],
  },
  {
    id: "mount-ebal",
    name: "Mount Ebal",
    type: "geographic-feature",
    coords: [35.275, 32.2286],
    certainty: "well-supported",
    summary:
      "The northern of the two mountains flanking Shechem, associated in Deuteronomy and Joshua with the curses of the covenant.",
    why: "The mountain is unmistakable. A separate and contested matter is a stone structure excavated on its slope, which its excavator identified as Joshua's altar and others read as a watchtower or farmstead installation.",
    chapters: [8, 24],
    cites: [
      {
        sourceId: "zertal-ebal",
        claim: "A stone structure on Mount Ebal identified by its excavator as an Israelite altar",
      },
      {
        sourceId: "kempinski-ebal",
        claim: "The same structure interpreted instead as an Iron Age watchtower",
      },
    ],
  },
  {
    id: "mount-gerizim",
    name: "Mount Gerizim",
    type: "geographic-feature",
    coords: [35.2725, 32.2],
    certainty: "well-supported",
    summary:
      "The southern mountain at Shechem, associated with the blessings of the covenant, and later the central holy site of the Samaritans.",
    why: "Securely located. Its later Samaritan significance belongs to a much later period and should not be read back into Joshua.",
    chapters: [8],
    cites: [SB("Mount Gerizim and Mount Ebal flanking the Shechem pass")],
  },
  {
    id: "shiloh",
    name: "Shiloh",
    alt: ["Khirbet Seilun"],
    type: "city",
    coords: [35.2894, 32.0561],
    certainty: "well-supported",
    modern: "Khirbet Seilun, West Bank",
    summary:
      "The site in Ephraim's hill country where the tent of meeting is set up and the remaining allotments are assigned. It becomes Israel's central sanctuary before Jerusalem.",
    why: "Identification is secure, helped by the surviving name. Excavation shows significant occupation in the Iron Age I period, which fits the picture of Shiloh as an early central sanctuary, and a destruction that is usually connected with the events behind 1 Samuel 4.",
    chapters: [18, 19, 21, 22],
    cites: [
      {
        sourceId: "finkelstein-shiloh",
        claim: "Shiloh's occupation history and its prominence in Iron Age I",
      },
      SB("Shiloh identified with Khirbet Seilun"),
    ],
  },
  {
    id: "timnath-serah",
    name: "Timnath-serah",
    alt: ["Timnath-heres"],
    type: "city",
    coords: [35.0281, 32.0372],
    certainty: "approximate",
    modern: "Probably Khirbet Tibnah, West Bank",
    summary:
      "The town in the hill country of Ephraim given to Joshua as his own inheritance, and where he is buried.",
    why: "Khirbet Tibnah is the usual identification, based on the name and on the general location the text gives. It is a reasonable but not demonstrated placement, which is worth noting given that this is Joshua's own portion and burial place.",
    chapters: [19, 24],
    cites: [SB("Timnath-serah usually identified with Khirbet Tibnah")],
  },
  {
    id: "tirzah",
    name: "Tirzah",
    type: "city",
    coords: [35.3389, 32.2775],
    certainty: "well-supported",
    modern: "Tell el-Far'ah (North), West Bank",
    summary:
      "A hill country town named in the register of defeated kings, later briefly a capital of the northern kingdom.",
    why: "Identified with Tell el-Far'ah (North) on the basis of excavation and position. Its later role as a royal city belongs to a period long after Joshua.",
    chapters: [12],
    cites: [SB("Tirzah identified with Tell el-Far'ah North")],
  },

  /* ================================================================ */
  /* Gibeon and the Benjamin plateau                                  */
  /* ================================================================ */
  {
    id: "gibeon",
    name: "Gibeon",
    alt: ["el-Jib"],
    type: "city",
    coords: [35.1847, 31.8463],
    certainty: "well-supported",
    modern: "El-Jib, West Bank",
    summary:
      "A substantial town on the plateau north-west of Jerusalem whose people obtain a treaty from Israel by disguising themselves as distant travellers.",
    why: "The identification is unusually well grounded: excavation at el-Jib recovered jar handles inscribed with the name gb'n, which is about as close to a signature as a site gets. The excavator also found the Late Bronze evidence thinner than the biblical picture of a large city might suggest, which the study reports rather than smooths over.",
    chapters: [9, 10, 11, 18, 21],
    cites: [
      {
        sourceId: "pritchard-gibeon",
        claim:
          "Inscribed jar handles reading gb'n secure the identification of el-Jib as Gibeon",
      },
      {
        sourceId: "blenkinsopp-gibeon",
        claim: "The Gibeonites' continuing status in Israel after the treaty",
      },
    ],
  },
  {
    id: "chephirah",
    name: "Chephirah",
    type: "city",
    coords: [35.1197, 31.8464],
    certainty: "approximate",
    modern: "Khirbet el-Kefira, West Bank",
    summary: "One of the four towns in the Gibeonite group.",
    why: "Identified with Khirbet el-Kefira largely through the preserved name and a fitting position west of Gibeon.",
    chapters: [9, 18],
    cites: [SB("Chephirah identified with Khirbet el-Kefira")],
  },
  {
    id: "kiriath-jearim",
    name: "Kiriath-jearim",
    alt: ["Baalah", "Kiriath-baal"],
    type: "city",
    coords: [35.095, 31.81],
    certainty: "approximate",
    modern: "Usually Deir el-Azar, near Abu Ghosh",
    summary:
      "A town in the Gibeonite group, on the border between Judah and Benjamin. Later the ark rests here for a long period.",
    why: "Deir el-Azar above Abu Ghosh is the common identification; recent excavation in the area has renewed discussion without settling it. Placed approximately.",
    chapters: [9, 15, 18],
    cites: [SB("Kiriath-jearim placed in the Abu Ghosh area")],
  },
  {
    id: "beeroth",
    name: "Beeroth",
    type: "city",
    coords: [35.2144, 31.9089],
    certainty: "disputed",
    summary: "The fourth town of the Gibeonite group.",
    why: "Candidates include el-Bireh and Khirbet el-Burj, neither established. The pin reflects the most commonly cited option and should be treated as provisional.",
    chapters: [9, 18],
    alternatives: [
      { name: "El-Bireh", coordinates: [35.2144, 31.9089], note: "Frequently proposed on the basis of the name." },
      { name: "Khirbet el-Burj", note: "An alternative candidate nearer Gibeon." },
    ],
    cites: [SB("Candidates for Beeroth among the Gibeonite towns")],
  },
  {
    id: "upper-beth-horon",
    name: "Upper Beth-horon",
    type: "city",
    coords: [35.115, 31.888],
    certainty: "well-supported",
    modern: "Beit Ur el-Fauqa, West Bank",
    summary:
      "The upper of two towns guarding the descent from the Benjamin plateau to the coastal plain.",
    why: "Both Beth-horons preserve the ancient name in Arabic form and their positions on the ridge are clear. This pass is the key to Joshua 10: it is the natural escape route from Gibeon toward the lowlands, and the pursuit follows it.",
    chapters: [10, 16, 18, 21],
    cites: [
      SB("The Beth-horon ridge road as the principal route from the plateau to the coastal plain"),
    ],
  },
  {
    id: "lower-beth-horon",
    name: "Lower Beth-horon",
    type: "city",
    coords: [35.08, 31.895],
    certainty: "well-supported",
    modern: "Beit Ur et-Tahta, West Bank",
    summary: "The lower town on the Beth-horon descent, at the foot of the pass.",
    why: "Name and position are both secure. The descent between the two towns is steep and broken, which is why a fleeing army strung out along it is so vulnerable.",
    chapters: [10, 16, 18],
    cites: [SB("Position of Lower Beth-horon at the foot of the descent")],
  },
  {
    id: "aijalon",
    name: "Aijalon",
    type: "city",
    coords: [35.0231, 31.8481],
    certainty: "approximate",
    modern: "Yalo, in the Aijalon valley",
    summary:
      "A town and the broad valley it names, at the western end of the Beth-horon descent. Named in Joshua 10 alongside Gibeon in the poetic fragment about sun and moon.",
    why: "The valley is a clear geographic feature and its identification is not in doubt; the town site is placed approximately at Yalo. The pairing of Gibeon and the valley of Aijalon in the poem matches the geography of the pursuit exactly, one at the top of the pass and one at the bottom.",
    chapters: [10, 19, 21],
    cites: [SB("The Aijalon valley at the western outlet of the Beth-horon pass")],
  },
  {
    id: "mizpah-benjamin",
    name: "Mizpah",
    type: "city",
    coords: [35.2167, 31.8847],
    certainty: "approximate",
    modern: "Commonly Tell en-Nasbeh",
    summary: "A Benjamin plateau town listed in Benjamin's allotment.",
    why: "Tell en-Nasbeh is the usual identification, though the name is common in the Old Testament and more than one Mizpah exists. Placed approximately.",
    chapters: [18],
    cites: [SB("Mizpah of Benjamin commonly identified with Tell en-Nasbeh")],
  },
  {
    id: "gibeah",
    name: "Gibeah",
    type: "city",
    coords: [35.2317, 31.8239],
    certainty: "approximate",
    modern: "Often Tell el-Ful",
    summary: "A Benjamin town in the allotment list.",
    why: "Tell el-Ful is the traditional identification and remains the most cited, though it is not secure and several 'Gibeah' names occur in the region.",
    chapters: [18],
    cites: [SB("Gibeah of Benjamin and the Tell el-Ful identification")],
  },
  {
    id: "jerusalem",
    name: "Jerusalem",
    alt: ["Jebus", "City of David"],
    type: "city",
    coords: [35.236, 31.774],
    certainty: "well-supported",
    modern: "The City of David ridge, Jerusalem",
    summary:
      "A fortified hill town whose king leads the southern coalition against Gibeon. Joshua explicitly reports that it was not taken.",
    why: "The Bronze and Iron Age city occupied the narrow ridge south of the later Temple Mount, beside the Gihon spring. The site is certain; the size of the Late Bronze town is debated. Joshua 15:63 states plainly that Judah could not drive out its inhabitants, which makes it one of the book's own admissions of incomplete possession.",
    chapters: [10, 12, 15, 18],
    cites: [
      {
        sourceId: "moran-amarna",
        claim:
          "Jerusalem appears in the Amarna letters as a city-state whose ruler writes to Egypt",
      },
      SB("Location of the Bronze and Iron Age city on the City of David ridge"),
    ],
  },

  /* ================================================================ */
  /* The southern campaign: Shephelah and Judean hills                */
  /* ================================================================ */
  {
    id: "lachish",
    name: "Lachish",
    alt: ["Tell ed-Duweir"],
    type: "city",
    coords: [34.8489, 31.565],
    certainty: "well-supported",
    modern: "Tel Lachish (Tell ed-Duweir), Israel",
    summary:
      "A major fortified centre in the Shephelah and one of the strongest cities in the southern list.",
    why: "Identification is secure and the site is among the best excavated in the region. It had a substantial Late Bronze city with Egyptian connections and was destroyed more than once; assigning any one destruction to Joshua's campaign is not something the archaeology can do on its own.",
    chapters: [10, 12, 15],
    cites: [
      {
        sourceId: "ussishkin-lachish",
        claim:
          "Lachish's Late Bronze occupation and destruction sequence from the renewed excavations",
      },
      {
        sourceId: "moran-amarna",
        claim: "Lachish appears in the Amarna correspondence",
      },
    ],
  },
  {
    id: "azekah",
    name: "Azekah",
    type: "city",
    coords: [34.9358, 31.7],
    certainty: "well-supported",
    modern: "Tel Azekah, Israel",
    summary:
      "A Shephelah town named as the limit of the pursuit after the battle at Gibeon.",
    why: "Securely identified and excavated. It sits at the edge of the Elah valley, which fits its role in the text as a marker of how far the rout extended.",
    chapters: [10, 15],
    cites: [SB("Azekah identified with Tel Azekah in the Elah valley")],
  },
  {
    id: "jarmuth",
    name: "Jarmuth",
    type: "city",
    coords: [34.9694, 31.7069],
    certainty: "well-supported",
    modern: "Tel Yarmut (Khirbet Yarmuk), Israel",
    summary: "A Shephelah town whose king joins the coalition against Gibeon.",
    why: "Identified with Tel Yarmut, which preserves the name and has Bronze Age fortifications of substantial size.",
    chapters: [10, 12, 15],
    cites: [SB("Jarmuth identified with Tel Yarmut")],
  },
  {
    id: "eglon",
    name: "Eglon",
    type: "city",
    coords: [34.9903, 31.4906],
    certainty: "disputed",
    modern: "Possibly Tel 'Eton; Tell el-Hesi also proposed",
    summary: "A southern town whose king joins the coalition and whose city is then taken.",
    why: "The location is genuinely unsettled. Tel 'Eton and Tell el-Hesi have both been argued, and the choice affects how one reconstructs the campaign's route through the Shephelah. Shown disputed.",
    chapters: [10, 12, 15],
    alternatives: [
      { name: "Tel 'Eton", coordinates: [34.9903, 31.4906], note: "A commonly favoured candidate in the southern Shephelah." },
      { name: "Tell el-Hesi", note: "An older proposal, further west." },
    ],
    cites: [SB("Competing identifications for Eglon")],
  },
  {
    id: "debir",
    name: "Debir",
    alt: ["Kiriath-sepher"],
    type: "city",
    coords: [35.0164, 31.4022],
    certainty: "disputed",
    modern: "Most often Khirbet Rabud",
    summary:
      "A town in the Judean hill country, taken in the southern campaign and later connected with Caleb's family and Othniel.",
    why: "Khirbet Rabud is the leading candidate and fits the hill country setting; earlier proposals such as Tell Beit Mirsim are now generally set aside. Not secure, so shown disputed.",
    chapters: [10, 11, 12, 15, 21],
    alternatives: [
      { name: "Khirbet Rabud", coordinates: [35.0164, 31.4022], note: "The leading identification, south-west of Hebron." },
      { name: "Tell Beit Mirsim", note: "An earlier proposal, now largely abandoned." },
    ],
    cites: [SB("Debir and the Khirbet Rabud identification")],
  },
  {
    id: "makkedah",
    name: "Makkedah",
    type: "city",
    certainty: "unknown",
    summary:
      "The town near the cave where five coalition kings hide and are captured after the battle at Gibeon.",
    why: "No location is asserted here, because none is known. Khirbet el-Qom has been suggested among others, but nothing approaching agreement exists. Makkedah is therefore present in the register and in the narrative but deliberately absent from the map.",
    chapters: [10, 12, 15],
    cites: [SB("Makkedah remains unlocated")],
  },
  {
    id: "libnah",
    name: "Libnah",
    type: "city",
    certainty: "unknown",
    summary: "A town taken during the southern campaign.",
    why: "Proposals exist, including Tell Bornat, but the identification is not established and no coordinate is asserted.",
    chapters: [10, 12, 15, 21],
    cites: [SB("Libnah is not securely located")],
  },
  {
    id: "hebron",
    name: "Hebron",
    alt: ["Kiriath-arba", "Mamre (nearby)"],
    type: "city",
    coords: [35.0994, 31.5236],
    certainty: "well-supported",
    modern: "Tell er-Rumeida (Tel Hebron), within modern Hebron",
    summary:
      "A hill country town of deep patriarchal significance, the burial place of Abraham and Sarah, later given to Caleb and made a city of refuge.",
    why: "The ancient mound is Tell er-Rumeida within the modern city. The continuity of the name and the excavated Bronze Age settlement make the identification solid. Its altitude, roughly 900 m, and its position on the southern ridge road explain its importance.",
    chapters: [10, 11, 12, 14, 15, 20, 21],
    cites: [
      SB("Hebron identified with Tell er-Rumeida on the southern ridge"),
      {
        sourceId: "hess-joshua",
        claim: "Hebron's role in the allotment to Caleb and its designation as a city of refuge",
        locator: "on Joshua 14 and 20",
      },
    ],
  },
  {
    id: "anab",
    name: "Anab",
    type: "city",
    coords: [34.9506, 31.4267],
    certainty: "approximate",
    summary: "A hill country town named in the summary of the southern campaign.",
    why: "Placed on the basis of the surviving name at Khirbet Anab es-Saghir. Approximate.",
    chapters: [11, 15],
    cites: [SB("Anab placed from the surviving name in the southern hill country")],
  },
  {
    id: "eshtemoa",
    name: "Eshtemoa",
    type: "city",
    coords: [35.0669, 31.4006],
    certainty: "approximate",
    modern: "Es-Samu",
    summary: "A Judean hill country town, later a Levitical city.",
    why: "Identified from the preserved name at es-Samu. Approximate.",
    chapters: [15, 21],
    cites: [SB("Eshtemoa identified with es-Samu")],
  },
  {
    id: "jattir",
    name: "Jattir",
    type: "city",
    coords: [35.0231, 31.3428],
    certainty: "approximate",
    summary: "A southern Judean town, later a Levitical city.",
    why: "Placed at Khirbet Attir on the basis of the name. Approximate.",
    chapters: [15, 21],
    cites: [SB("Jattir placed at Khirbet Attir")],
  },
  {
    id: "socoh",
    name: "Socoh",
    type: "city",
    coords: [34.9769, 31.6811],
    certainty: "approximate",
    summary: "A Shephelah town in Judah's city list.",
    why: "Placed at Khirbet Abbad in the Elah valley. More than one Socoh exists in the lists, so the identification is held loosely.",
    chapters: [15],
    cites: [SB("Socoh of the Elah valley")],
  },
  {
    id: "adullam",
    name: "Adullam",
    type: "city",
    coords: [34.9856, 31.6497],
    certainty: "approximate",
    summary: "A Shephelah town in Judah's list.",
    why: "Placed at Khirbet esh-Sheikh Madhkur. Approximate.",
    chapters: [12, 15],
    cites: [SB("Adullam in the Shephelah")],
  },
  {
    id: "beth-shemesh",
    name: "Beth-shemesh",
    type: "city",
    coords: [34.9769, 31.7514],
    certainty: "well-supported",
    modern: "Tel Beth Shemesh, Israel",
    summary:
      "A town on Judah's northern border in the Sorek valley, later a Levitical city.",
    why: "Securely identified and well excavated, sitting at the junction of the Shephelah and the coastal plain where the Sorek valley opens westward.",
    chapters: [15, 21],
    cites: [SB("Beth-shemesh identified with Tel Beth Shemesh in the Sorek valley")],
  },
  {
    id: "beersheba",
    name: "Beersheba",
    type: "city",
    coords: [34.8408, 31.2456],
    certainty: "well-supported",
    modern: "Tel Be'er Sheva, Israel",
    summary:
      "A southern town at the edge of the Negev, associated with Abraham and Isaac, and part of Simeon's allotment area.",
    why: "Tel Be'er Sheva is identified with the biblical town; the main excavated remains are Iron Age, later than Joshua. The site marks the practical southern limit of settled agriculture.",
    chapters: [15, 19],
    cites: [SB("Beersheba at the northern edge of the Negev")],
  },
  {
    id: "arad",
    name: "Arad",
    type: "city",
    coords: [35.1264, 31.2797],
    certainty: "well-supported",
    modern: "Tel Arad, Israel",
    summary: "A Negev site named in the register of kings.",
    why: "Tel Arad is securely located. Its occupation history complicates the picture, since the excavated Bronze Age city and the later Iron Age fortress are separated by a long gap, which is one of the standard difficulties raised against a straightforward reading of the conquest lists.",
    chapters: [12],
    cites: [
      SB("Tel Arad and its occupation gap between the Early Bronze city and the Iron Age fortress"),
      {
        sourceId: "mazar-archaeology-land",
        claim: "Occupation sequence at Tel Arad",
      },
    ],
  },
  {
    id: "hormah",
    name: "Hormah",
    type: "city",
    certainty: "unknown",
    summary: "A southern town named in the register of kings.",
    why: "Not securely located. Several Negev candidates have been proposed; no coordinate is asserted.",
    chapters: [12, 15, 19],
    cites: [SB("Hormah is not securely identified")],
  },

  /* ================================================================ */
  /* The coastal plain and Philistine cities                          */
  /* ================================================================ */
  {
    id: "gaza",
    name: "Gaza",
    type: "city",
    coords: [34.4668, 31.5017],
    certainty: "well-supported",
    modern: "Gaza City",
    summary:
      "The southernmost of the five Philistine cities, on the coastal highway. Named among the territory that remained unpossessed.",
    why: "Continuous occupation and the surviving name make the general location certain, though the ancient mound lies beneath a dense modern city, which limits excavation.",
    chapters: [10, 11, 13, 15],
    cites: [SB("Gaza on the coastal route, one of the five Philistine centres")],
  },
  {
    id: "ashkelon",
    name: "Ashkelon",
    type: "city",
    coords: [34.547, 31.667],
    certainty: "well-supported",
    modern: "Tel Ashkelon, Israel",
    summary: "A Philistine coastal city, named among the land not yet taken.",
    why: "Securely identified and extensively excavated, with a long history as a port predating the Philistine settlement.",
    chapters: [13],
    cites: [SB("Ashkelon as a long-established coastal city")],
  },
  {
    id: "ashdod",
    name: "Ashdod",
    type: "city",
    coords: [34.6533, 31.7581],
    certainty: "well-supported",
    modern: "Tel Ashdod, Israel",
    summary: "A Philistine city on the coastal plain, named among the remaining land.",
    why: "Identification secure. Excavation shows a significant Late Bronze city preceding the Philistine phase.",
    chapters: [13, 15],
    cites: [SB("Ashdod's Late Bronze and Iron Age sequence")],
  },
  {
    id: "ekron",
    name: "Ekron",
    type: "city",
    coords: [34.8519, 31.7786],
    certainty: "well-supported",
    modern: "Tel Miqne, Israel",
    summary: "The northernmost Philistine city, named among the land remaining.",
    why: "The identification with Tel Miqne is confirmed by a royal dedicatory inscription found at the site naming Ekron, which is unusually strong evidence.",
    chapters: [13, 15, 19],
    cites: [
      SB("Ekron identified with Tel Miqne, confirmed by an inscription naming the city"),
    ],
  },
  {
    id: "gath",
    name: "Gath",
    type: "city",
    coords: [34.8472, 31.6997],
    certainty: "well-supported",
    modern: "Tell es-Safi / Tel Zafit, Israel",
    summary: "A Philistine city named among the remaining land.",
    why: "Tell es-Safi is now widely accepted as Gath on the basis of size, position and excavation, though the name 'Gath' is used of more than one place in the Old Testament.",
    chapters: [11, 13],
    cites: [SB("Gath identified with Tell es-Safi")],
  },
  {
    id: "gezer",
    name: "Gezer",
    type: "city",
    coords: [34.9186, 31.8597],
    certainty: "well-supported",
    modern: "Tel Gezer, Israel",
    summary:
      "A fortified city commanding the junction of the coastal highway and the Aijalon approach. Its king is defeated, but Joshua 16:10 says the city itself was not cleared.",
    why: "Securely identified, partly through boundary inscriptions found around the site. Gezer is a clean example of the book's own distinction between beating a king in the field and taking possession of his city.",
    chapters: [10, 12, 16, 21],
    cites: [
      SB("Gezer's position controlling the Aijalon approach to the coastal highway"),
      {
        sourceId: "moran-amarna",
        claim: "Gezer's ruler is among the correspondents in the Amarna letters",
      },
    ],
  },
  {
    id: "timnah",
    name: "Timnah",
    type: "city",
    coords: [34.8547, 31.7975],
    certainty: "well-supported",
    modern: "Tel Batash, Israel",
    summary: "A Sorek valley town on Judah's border.",
    why: "Identified with Tel Batash through excavation and position in the Sorek valley.",
    chapters: [15, 19],
    cites: [SB("Timnah identified with Tel Batash")],
  },
  {
    id: "joppa",
    name: "Joppa",
    type: "city",
    coords: [34.7522, 32.0536],
    certainty: "well-supported",
    modern: "Jaffa, Tel Aviv-Yafo, Israel",
    summary:
      "A natural harbour on the coast, mentioned as a boundary marker for Dan's allotment.",
    why: "Continuous occupation and the surviving name make the identification secure. It was an Egyptian administrative centre in the Late Bronze Age.",
    chapters: [19],
    cites: [SB("Joppa as a harbour and Egyptian administrative centre")],
  },
  {
    id: "aphek",
    name: "Aphek",
    type: "city",
    coords: [34.9333, 32.1042],
    certainty: "well-supported",
    modern: "Tel Afek (Antipatris), Israel",
    summary: "A town at the sources of the Yarkon, named in the register of kings.",
    why: "Securely identified. Its position at the Yarkon springs makes it a choke point on the coastal highway, where the route is squeezed between the river sources and the hills.",
    chapters: [12],
    cites: [SB("Aphek at the Yarkon sources, controlling the coastal highway")],
  },
  {
    id: "dor",
    name: "Dor",
    type: "city",
    coords: [34.9175, 32.6186],
    certainty: "well-supported",
    modern: "Tel Dor, Israel",
    summary:
      "A coastal town south of the Carmel headland, named in the register of kings and among places not possessed.",
    why: "Securely identified and excavated, with a good natural anchorage.",
    chapters: [11, 12, 17],
    cites: [SB("Dor as a coastal anchorage south of Carmel")],
  },

  /* ================================================================ */
  /* The Jezreel valley and the north                                 */
  /* ================================================================ */
  {
    id: "megiddo",
    name: "Megiddo",
    type: "city",
    coords: [35.1836, 32.5844],
    certainty: "well-supported",
    modern: "Tel Megiddo, Israel",
    summary:
      "A major fortified city guarding the pass from the coastal plain into the Jezreel valley. Its king is listed as defeated, but the city is named among those not taken.",
    why: "One of the most thoroughly excavated sites in the region, with a long Bronze and Iron Age sequence. It guards the Aruna pass, the route Thutmose III used, which is why it is contested throughout ancient history.",
    chapters: [12, 17],
    cites: [
      SB("Megiddo controlling the Aruna pass into the Jezreel valley"),
      {
        sourceId: "thutmose-iii-lists",
        claim:
          "Megiddo features in Egyptian campaign records as a strategic objective",
      },
    ],
  },
  {
    id: "taanach",
    name: "Taanach",
    type: "city",
    coords: [35.2178, 32.5289],
    certainty: "well-supported",
    modern: "Tell Ti'innik, West Bank",
    summary: "A town on the southern edge of the Jezreel valley, named in the register of kings.",
    why: "Identification secure through the preserved name and excavation. Paired with Megiddo in several biblical and Egyptian texts.",
    chapters: [12, 17, 21],
    cites: [SB("Taanach paired with Megiddo on the Jezreel valley's southern rim")],
  },
  {
    id: "beth-shan",
    name: "Beth-shan",
    alt: ["Beth-shean"],
    type: "city",
    coords: [35.5019, 32.5028],
    certainty: "well-supported",
    modern: "Tel Beth She'an, Israel",
    summary:
      "A town at the eastern end of the Jezreel valley where it meets the Jordan valley. Named among the places Manasseh could not take.",
    why: "Securely identified. It housed an Egyptian garrison in the Late Bronze Age, which is directly relevant: the text says Manasseh could not drive out the inhabitants of the valley towns, and Egyptian military presence is a concrete reason why.",
    chapters: [17],
    cites: [
      SB("Beth-shan as an Egyptian garrison centre in the Late Bronze Age"),
      {
        sourceId: "mazar-archaeology-land",
        claim: "Egyptian administrative and military presence at Beth-shan",
      },
    ],
  },
  {
    id: "ibleam",
    name: "Ibleam",
    type: "city",
    coords: [35.2472, 32.4544],
    certainty: "approximate",
    modern: "Probably Tell Bel'ameh",
    summary: "A town on the approach between the hill country and the Jezreel valley.",
    why: "Placed at Tell Bel'ameh on the basis of name and position. Approximate.",
    chapters: [17],
    cites: [SB("Ibleam placed at Tell Bel'ameh")],
  },
  {
    id: "hazor",
    name: "Hazor",
    type: "city",
    coords: [35.5686, 33.0175],
    certainty: "well-supported",
    modern: "Tel Hazor (Tell el-Qedah), Israel",
    summary:
      "By far the largest city in the land, described in Joshua 11 as 'the head of all those kingdoms'. Its king leads the northern coalition, and the city is burned.",
    why: "Identification is secure. Excavation confirms the text's description of scale: the upper and lower city together cover roughly 80 hectares, many times the size of Jericho or Ai, and Hazor appears in Egyptian and Mesopotamian records as a major power. A violent destruction of the Late Bronze city, including the burning of the palace, is well documented. Who caused it is disputed, and two of the site's own excavators have published opposing answers.",
    chapters: [11, 12, 19],
    cites: [
      {
        sourceId: "yadin-hazor",
        claim:
          "Hazor's exceptional size and the identification of a violent destruction of the Late Bronze city",
      },
      {
        sourceId: "ben-tor-hazor",
        claim: "The burning of the Late Bronze palace in the renewed excavations",
      },
      {
        sourceId: "ben-tor-zuckerman-hazor",
        claim:
          "Excavators of the same site reach different conclusions about who destroyed Hazor",
      },
    ],
  },
  {
    id: "waters-of-merom",
    name: "The waters of Merom",
    type: "geographic-feature",
    coords: [35.4372, 32.9878],
    certainty: "disputed",
    summary:
      "The place where the northern coalition assembles and is defeated. The text gives a water source, not a city.",
    why: "The location is genuinely uncertain. A connection with Meiron in Upper Galilee is often proposed on the basis of the name, and other candidates have been argued. The pin represents the most cited option and is shown as disputed, because a battle site named only by its water source is hard to pin down.",
    chapters: [11],
    layer: "events",
    eventIcon: "battle",
    alternatives: [
      { name: "Near Meiron, Upper Galilee", coordinates: [35.4372, 32.9878], note: "Proposed from the similarity of the name." },
      { name: "A site nearer Hazor in the Huleh basin", note: "Preferred by those who read the muster as close to Hazor itself." },
    ],
    cites: [SB("Proposed locations for the waters of Merom")],
  },
  {
    id: "madon",
    name: "Madon",
    type: "city",
    certainty: "unknown",
    summary: "A northern town whose king joins the coalition with Hazor.",
    why: "Not located. The name may be a textual variant, since the Greek tradition differs here, and no site is asserted.",
    chapters: [11, 12],
    cites: [
      {
        sourceId: "butler-joshua",
        claim:
          "The name Madon differs between the Hebrew and Greek textual traditions",
      },
    ],
  },
  {
    id: "shimron",
    name: "Shimron",
    type: "city",
    coords: [35.2136, 32.7025],
    certainty: "approximate",
    modern: "Probably Tel Shimron, Israel",
    summary: "A town in the north named among the coalition cities.",
    why: "Tel Shimron in the Jezreel region is the usual identification, supported by recent excavation. Placed approximately.",
    chapters: [11, 12, 19],
    cites: [SB("Shimron placed at Tel Shimron")],
  },
  {
    id: "achshaph",
    name: "Achshaph",
    type: "city",
    coords: [35.1636, 32.8153],
    certainty: "disputed",
    modern: "Possibly Tell Keisan",
    summary: "A town named among the northern coalition.",
    why: "Tell Keisan is the most frequently proposed site, without consensus. Shown as disputed.",
    chapters: [11, 12, 19],
    cites: [SB("Achshaph and the Tell Keisan proposal")],
  },
  {
    id: "kedesh-naphtali",
    name: "Kedesh in Galilee",
    type: "city",
    coords: [35.5311, 33.1136],
    certainty: "well-supported",
    modern: "Tel Kedesh, Upper Galilee, Israel",
    summary:
      "A town in the hill country of Naphtali, designated a city of refuge and a Levitical city.",
    why: "Identified with Tel Kedesh in Upper Galilee. The name means 'holy place', and several Kedesh names exist, so the qualifier 'in Galilee' in the text is doing real work.",
    chapters: [12, 19, 20, 21],
    cites: [SB("Kedesh in Galilee identified with Tel Kedesh")],
  },
  {
    id: "chinnereth",
    name: "Chinnereth",
    type: "city",
    coords: [35.5453, 32.8917],
    certainty: "well-supported",
    modern: "Tel Kinrot, Israel",
    summary:
      "A town on the north-western shore of the lake that takes its name, in Naphtali's territory.",
    why: "Identified with Tel Kinrot on the lake shore. The town gives the Sea of Chinnereth its name.",
    chapters: [11, 12, 19],
    cites: [SB("Chinnereth identified with Tel Kinrot on the lake shore")],
  },
  {
    id: "sea-of-chinnereth",
    name: "The Sea of Chinnereth",
    alt: ["Lake of Galilee", "Kinneret"],
    type: "geographic-feature",
    coords: [35.5906, 32.8225],
    certainty: "well-supported",
    summary:
      "The freshwater lake at the head of the Jordan valley, used repeatedly as a boundary marker.",
    why: "The lake is a fixed feature, though its shoreline has shifted with water levels. Used in the allotment chapters as a natural limit.",
    chapters: [11, 12, 13, 19],
    cites: [SB("The Sea of Chinnereth as a boundary marker in the allotment texts")],
  },
  {
    id: "mount-hermon",
    name: "Mount Hermon",
    alt: ["Baal-hermon", "Sirion"],
    type: "geographic-feature",
    coords: [35.8572, 33.4164],
    certainty: "well-supported",
    summary:
      "The high snow-capped massif at the northern limit of the land described in Joshua, rising above 2,800 m.",
    why: "Unmistakable and repeatedly used to mark the northern boundary of the conquest summaries.",
    chapters: [11, 12, 13],
    cites: [SB("Mount Hermon as the northern limit in the summary statements")],
  },
  {
    id: "baal-gad",
    name: "Baal-gad",
    alt: ["Baal-gad in the Valley of Lebanon"],
    type: "city",
    coords: [35.78, 33.28],
    certainty: "approximate",
    summary:
      "A place named as the northern extent of Joshua's campaigns, below Mount Hermon.",
    why: "Not securely located. The text places it in the Valley of Lebanon below Hermon, which gives a region rather than a site; the pin reflects that region. Later tradition connected the area with Baal-gad or Banias, but that is an inference.",
    chapters: [11, 12, 13],
    cites: [SB("Baal-gad located only generally, below Hermon in the Lebanon valley")],
  },
  {
    id: "mount-halak",
    name: "Mount Halak",
    type: "geographic-feature",
    certainty: "unknown",
    summary:
      "The southern limit named in the summary of Joshua's campaigns, 'that rises toward Seir'.",
    why: "No accepted identification. Suggestions have been made in the Negev highlands or approaching the Edomite hills, but none is established, so no coordinate is asserted.",
    chapters: [11, 12],
    cites: [SB("Mount Halak has no accepted identification")],
  },
  {
    id: "misrephoth-maim",
    name: "Misrephoth-maim",
    type: "city",
    certainty: "unknown",
    summary:
      "A place named as the limit of the pursuit after the northern battle, and among the land remaining.",
    why: "Not located. Proposals in the Acco plain or near the Litani exist without agreement, so no coordinate is asserted.",
    chapters: [11, 13],
    cites: [SB("Misrephoth-maim is not securely located")],
  },
  {
    id: "sidon",
    name: "Sidon",
    alt: ["Great Sidon"],
    type: "city",
    coords: [35.3756, 33.5606],
    certainty: "well-supported",
    modern: "Saida, Lebanon",
    summary:
      "A major Phoenician coastal city, named as a boundary point and among the peoples not driven out.",
    why: "Continuous occupation and the surviving name make the location certain. Sidon's inclusion in the boundary descriptions, alongside the admission that the Sidonians remained, shows the gap between the described extent of the land and actual control.",
    chapters: [11, 13, 19],
    cites: [SB("Sidon as a major Phoenician centre and a boundary reference")],
  },
  {
    id: "tyre",
    name: "Tyre",
    type: "city",
    coords: [35.196, 33.2705],
    certainty: "well-supported",
    modern: "Sur, Lebanon",
    summary: "A Phoenician harbour city used as a boundary marker for Asher.",
    why: "Securely located. Originally an island fortress with a mainland settlement, which is why ancient descriptions of it can seem inconsistent.",
    chapters: [19],
    cites: [SB("Tyre as an island and mainland settlement used as a boundary marker")],
  },
  {
    id: "kanah",
    name: "Kanah",
    type: "city",
    coords: [35.3031, 33.2072],
    certainty: "approximate",
    summary: "A town named in Asher's boundary description.",
    why: "Often connected with Qana in southern Lebanon on the basis of the name. Approximate, and complicated by other places sharing the name.",
    chapters: [19],
    cites: [SB("Kanah in Asher's boundary list")],
  },
  {
    id: "mount-carmel",
    name: "Mount Carmel",
    type: "geographic-feature",
    coords: [35.0464, 32.7297],
    certainty: "well-supported",
    summary:
      "The ridge running north-west to the sea, forming a barrier between the coastal plain and the Jezreel valley, and a boundary for Asher and Manasseh.",
    why: "The ridge is a fixed feature. Its headland forces the coastal route inland through the passes, which is why Megiddo matters so much.",
    chapters: [12, 19],
    cites: [SB("The Carmel ridge as a barrier forcing the coastal route inland")],
  },

  /* ================================================================ */
  /* East of the Jordan                                               */
  /* ================================================================ */
  {
    id: "heshbon",
    name: "Heshbon",
    type: "city",
    coords: [35.8078, 31.7994],
    certainty: "well-supported",
    modern: "Tell Hisban, Jordan",
    summary:
      "The city of Sihon king of the Amorites, taken before Joshua's campaigns and assigned to Reuben.",
    why: "Tell Hisban is the standard identification. Excavation found limited Late Bronze material, which is one of the difficulties raised about the Transjordan conquest narratives, and is reported here rather than passed over.",
    chapters: [12, 13, 21],
    cites: [
      SB("Heshbon identified with Tell Hisban"),
      {
        sourceId: "mazar-archaeology-land",
        claim: "Limited Late Bronze evidence at Tell Hisban",
      },
    ],
  },
  {
    id: "dibon",
    name: "Dibon",
    type: "city",
    coords: [35.7794, 31.5008],
    certainty: "well-supported",
    modern: "Dhiban, Jordan",
    summary: "A town on the Moabite plateau assigned to Reuben.",
    why: "Securely identified, and the findspot of the Mesha Stele, which is a ninth-century Moabite inscription and therefore much later than Joshua, but directly relevant to how conquest was described in the region.",
    chapters: [13],
    cites: [
      SB("Dibon identified with Dhiban"),
      {
        sourceId: "mesha-stele",
        claim:
          "The Mesha Stele was found at Dhiban and uses conquest language comparable to Joshua's",
      },
    ],
  },
  {
    id: "ashtaroth",
    name: "Ashtaroth",
    type: "city",
    coords: [36.0206, 32.8386],
    certainty: "approximate",
    modern: "Probably Tell Ashtara, Syria",
    summary: "A royal city of Og king of Bashan, assigned to Manasseh.",
    why: "Tell Ashtara is the usual identification and the name appears in Egyptian records, but the placement is held approximately.",
    chapters: [12, 13, 21],
    cites: [SB("Ashtaroth placed at Tell Ashtara in the Bashan region")],
  },
  {
    id: "edrei",
    name: "Edrei",
    type: "city",
    coords: [36.1022, 32.6186],
    certainty: "well-supported",
    modern: "Dera'a, Syria",
    summary: "The second royal city of Og, where the battle against him is fought.",
    why: "Identified with Dera'a on the basis of continuity of the name and position on the Bashan plateau.",
    chapters: [12, 13],
    cites: [SB("Edrei identified with Dera'a")],
  },
  {
    id: "succoth",
    name: "Succoth",
    type: "city",
    coords: [35.6167, 32.1947],
    certainty: "approximate",
    modern: "Commonly Tell Deir Alla, Jordan",
    summary: "A town in the Jordan valley east of the river, in Gad's territory.",
    why: "Tell Deir Alla is the common identification, based on position near the Jabbok confluence. Approximate.",
    chapters: [13],
    cites: [SB("Succoth placed at Tell Deir Alla")],
  },
  {
    id: "jazer",
    name: "Jazer",
    type: "city",
    certainty: "unknown",
    summary: "A town in Gilead assigned to Gad and later a Levitical city.",
    why: "Several candidates have been proposed in the hills north-west of Amman, none established. No coordinate asserted.",
    chapters: [13, 21],
    cites: [SB("Jazer is not securely located")],
  },
  {
    id: "ramoth-gilead",
    name: "Ramoth in Gilead",
    type: "city",
    coords: [36.0058, 32.5581],
    certainty: "disputed",
    modern: "Possibly Tell er-Ramith, Jordan",
    summary:
      "A city of refuge and Levitical city east of the Jordan, in Gad's territory.",
    why: "Tell er-Ramith is a frequently cited candidate, with others proposed. The identification is not settled, which matters because this is one of the six cities of refuge.",
    chapters: [20, 21],
    alternatives: [
      { name: "Tell er-Ramith", coordinates: [36.0058, 32.5581], note: "A commonly cited candidate in northern Gilead." },
      { name: "Other Gilead sites", note: "Alternative proposals exist; none has achieved agreement." },
    ],
    cites: [SB("Ramoth in Gilead and the Tell er-Ramith proposal")],
  },
  {
    id: "bezer",
    name: "Bezer",
    type: "city",
    certainty: "unknown",
    summary:
      "A city of refuge in Reuben's territory on the eastern plateau, also a Levitical city.",
    why: "Not securely located. Because Bezer's position is unknown, the study shows five of the six cities of refuge on the map and says plainly that the sixth cannot be placed.",
    chapters: [20, 21],
    cites: [SB("Bezer has no secure identification")],
  },
  {
    id: "golan-city",
    name: "Golan in Bashan",
    type: "city",
    certainty: "unknown",
    summary:
      "A city of refuge and Levitical city in Bashan, east of the Jordan, in Manasseh's eastern territory.",
    why: "The region name Golan survives, but the city itself is not securely located. Proposals exist in the Golan plateau without agreement, so no coordinate is asserted.",
    chapters: [20, 21],
    cites: [SB("The city of Golan is not securely identified despite the surviving regional name")],
  },
  {
    id: "rabbah-ammon",
    name: "Rabbah of the Ammonites",
    type: "city",
    coords: [35.9339, 31.9539],
    certainty: "well-supported",
    modern: "The citadel of Amman, Jordan",
    summary:
      "The chief Ammonite city, named as a boundary reference for Gad's territory.",
    why: "The Amman citadel is securely identified as ancient Rabbah. Ammon is treated in the text as a neighbour whose land Israel is not to take.",
    chapters: [13],
    cites: [SB("Rabbah of Ammon identified with the Amman citadel")],
  },
  {
    id: "mount-nebo",
    name: "Mount Nebo",
    type: "geographic-feature",
    coords: [35.7256, 31.7681],
    certainty: "well-supported",
    summary:
      "The height east of the Jordan from which Moses views the land before his death. Joshua begins immediately after that death.",
    why: "The ridge of Jebel Nibā is the traditional and widely accepted location, with a commanding westward view over the Jordan valley toward Jericho and the hill country. The exact spot of Moses' death is explicitly unknown in the text itself, which says no one knows his burial place.",
    chapters: [1, 13],
    cites: [
      SB("Mount Nebo identified with Jebel Nibā overlooking the Jordan valley"),
      {
        sourceId: "block-deuteronomy",
        claim:
          "Deuteronomy states that Moses' burial place is unknown, which the study does not attempt to locate",
        locator: "on Deuteronomy 34",
      },
    ],
  },
  {
    id: "beth-peor",
    name: "Beth-peor",
    type: "city",
    coords: [35.7, 31.79],
    certainty: "approximate",
    summary:
      "A place in the valley opposite which Israel camped, associated with the incident at Peor and with Moses' final address.",
    why: "Placed approximately in the valley system below Nebo. Not securely identified.",
    chapters: [13],
    cites: [SB("Beth-peor placed approximately below the Nebo ridge")],
  },
  {
    id: "arnon-river",
    name: "The Arnon",
    type: "geographic-feature",
    coords: [35.5719, 31.4636],
    certainty: "well-supported",
    summary:
      "The deep gorge entering the Dead Sea from the east, used as the boundary between Moab and the territory taken from Sihon.",
    why: "The Wadi Mujib canyon is unmistakable and is a genuine barrier, dropping hundreds of metres. It works as a border precisely because crossing it is difficult.",
    chapters: [12, 13],
    cites: [SB("The Arnon (Wadi Mujib) as a boundary and a physical barrier")],
  },
  {
    id: "jabbok-river",
    name: "The Jabbok",
    type: "geographic-feature",
    coords: [35.5497, 32.1908],
    certainty: "well-supported",
    summary:
      "A tributary entering the Jordan from the east, used as a boundary in the Transjordan allotments.",
    why: "The Zarqa river is securely identified with the Jabbok. It divides the Gilead highlands and forms a natural line in the allotment descriptions.",
    chapters: [12, 13],
    cites: [SB("The Jabbok identified with the Zarqa and used as an allotment boundary")],
  },

  /* ================================================================ */
  /* Southern approaches and the wilderness                           */
  /* ================================================================ */
  {
    id: "kadesh-barnea",
    name: "Kadesh-barnea",
    type: "city",
    coords: [34.4406, 30.6597],
    certainty: "approximate",
    modern: "Usually Tell el-Qudeirat, in the north-eastern Sinai",
    summary:
      "The oasis where Israel spent much of the wilderness period, and from which the twelve scouts were sent into Canaan. Caleb refers back to it in Joshua 14.",
    why: "Tell el-Qudeirat beside 'Ain el-Qudeirat is the usual identification, chosen for the strength of its spring. The excavated fortress there is Iron Age, later than the wilderness period, so the identification rests on geography rather than on matching remains.",
    chapters: [14, 15],
    cites: [
      SB("Kadesh-barnea usually identified with Tell el-Qudeirat"),
      {
        sourceId: "hess-joshua",
        claim: "Caleb's speech in Joshua 14 refers back to the mission from Kadesh-barnea",
        locator: "on Joshua 14:6-12",
      },
    ],
  },
  {
    id: "salt-sea",
    name: "The Salt Sea",
    alt: ["the Dead Sea", "Sea of the Arabah"],
    type: "geographic-feature",
    coords: [35.4747, 31.4686],
    certainty: "well-supported",
    summary:
      "The hypersaline lake at the lowest point on the earth's land surface, used constantly as a boundary marker.",
    why: "A fixed feature, though its surface has dropped sharply in modern times and its southern basin has largely dried, so ancient shorelines were not identical to today's.",
    chapters: [3, 12, 13, 15, 18],
    cites: [SB("The Salt Sea as a boundary reference and its changing shoreline")],
  },
  {
    id: "en-gedi",
    name: "En-gedi",
    type: "city",
    coords: [35.3903, 31.4617],
    certainty: "well-supported",
    summary: "An oasis on the western shore of the Salt Sea, in Judah's wilderness district.",
    why: "The spring and oasis are unmistakable and the name survives.",
    chapters: [15],
    cites: [SB("En-gedi as an oasis in the Judean wilderness district")],
  },
  {
    id: "great-sea",
    name: "The Great Sea",
    alt: ["the Mediterranean"],
    type: "geographic-feature",
    coords: [34.3, 32.2],
    certainty: "well-supported",
    summary:
      "The western limit of the land in every boundary description, called simply the Great Sea.",
    why: "Fixed. The consistent use of the sea as the western border is one reason the coastal plain's non-possession is so conspicuous: the described boundary reaches water that Israel did not control.",
    chapters: [1, 9, 13, 15, 23],
    cites: [SB("The Great Sea as the western boundary in the land descriptions")],
  },
  {
    id: "brook-of-egypt",
    name: "The Brook of Egypt",
    type: "geographic-feature",
    coords: [33.8, 31.13],
    certainty: "approximate",
    summary:
      "The south-western boundary marker of the land, usually understood as a seasonal watercourse rather than the Nile.",
    why: "Commonly identified with the Wadi el-Arish, though this is an inference from the boundary's logic rather than a demonstrated identification. Placed approximately at its outlet.",
    chapters: [13, 15],
    cites: [SB("The Brook of Egypt commonly identified with the Wadi el-Arish")],
  },
];

export const SITE_SEED_BY_ID: Record<string, SiteSeed> = Object.fromEntries(
  SITE_SEEDS.map((s) => [s.id, s])
);

/** Sites the study deliberately refuses to place on the map. */
export const UNLOCATED_SITE_IDS = SITE_SEEDS.filter(
  (s) => s.certainty === "unknown"
).map((s) => s.id);
