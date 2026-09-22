/**
 * Peoples, polities, alliances, tribes and regions.
 *
 * The separation matters. Joshua's world contains at least five different kinds of
 * thing that a careless map turns into one: a walled town, the man who ruled it, a
 * temporary military alliance between several such men, an ethnic or cultural label
 * used loosely by the biblical writers, and a physiographic region with no political
 * meaning at all. Collapsing them is how a study map starts implying that Canaan was
 * a set of nation-states with borders.
 *
 * Every entry records how firmly the term can be tied to anything on the ground.
 */

import type { EntityType, LayerId } from "../types";

export type GroupExtent =
  /** A region with real physical edges: a valley floor, a ridge, a coastal plain. */
  | "physiographic"
  /** A settled area whose limits the text describes but does not draw precisely. */
  | "described-area"
  /** A label the biblical text uses without any consistent territory behind it. */
  | "label-without-borders"
  /** A temporary coalition. Exists as a set of cities, not as a territory. */
  | "coalition-of-cities"
  /** A state with real administrative reach, though not modern-style borders. */
  | "political-entity";

export interface GroupSeed {
  id: string;
  name: string;
  alt?: string[];
  type: Extract<EntityType, "people" | "polity" | "alliance" | "tribe" | "region">;
  extent: GroupExtent;
  summary: string;
  /** How the map should and should not draw this. Surfaced in the legend and dossier. */
  mappingNote: string;
  chapters: number[];
  layer: LayerId;
  /** Member city entity ids, for coalitions and city groups. */
  memberSiteIds?: string[];
  cites?: { sourceId: string; claim: string; locator?: string }[];
}

export const GROUP_SEEDS: GroupSeed[] = [
  /* ================================================================ */
  /* Peoples named in the seven-nations formulas                      */
  /* ================================================================ */
  {
    id: "canaanites",
    name: "Canaanites",
    type: "people",
    extent: "label-without-borders",
    summary:
      "The broadest term the text uses for the land's existing inhabitants. In some passages it covers everyone; in others it is narrowed to people of the coast and the valleys, as distinct from hill country groups.",
    mappingNote:
      "Drawn as a diffuse shading over the lowlands where the text associates the term with the coast and the valleys, with no outline. There was no Canaanite state and no Canaanite border. The people the Egyptians and the biblical writers called Canaanite shared language and material culture, not a government.",
    chapters: [3, 5, 7, 9, 11, 12, 13, 16, 17, 24],
    layer: "peoples",
    cites: [
      {
        sourceId: "rainey-notley-sacred-bridge",
        claim:
          "The term Canaan in Egyptian and biblical usage designates a region and its population, not a unified polity",
      },
      {
        sourceId: "hess-joshua",
        claim:
          "Joshua uses 'Canaanite' both as an umbrella term and as one item in a list of distinct groups",
      },
    ],
  },
  {
    id: "amorites",
    name: "Amorites",
    type: "people",
    extent: "label-without-borders",
    summary:
      "A term used in the Old Testament for hill country populations and for the Transjordan kingdoms of Sihon and Og. In Mesopotamian sources a related word describes westerners generally, which is a different usage.",
    mappingNote:
      "Shown as diffuse shading in the hill country and over the Transjordan kingdoms, without a boundary. The biblical and the Mesopotamian uses of the word do not line up, and the study says so rather than merging them.",
    chapters: [2, 3, 5, 7, 9, 10, 11, 12, 13, 24],
    layer: "peoples",
    cites: [
      {
        sourceId: "anchor-bible-dictionary",
        claim:
          "Biblical 'Amorite' and Mesopotamian 'Amurru' are related terms with different ranges of meaning",
        locator: "s.v. Amorites",
      },
    ],
  },
  {
    id: "hittites",
    name: "Hittites (in the biblical lists)",
    type: "people",
    extent: "label-without-borders",
    summary:
      "A group named among the land's inhabitants. These are not the same as the Hittite empire in Anatolia, and treating them as such is a common mistake.",
    mappingNote:
      "No territory is drawn. The relationship between the biblical Hittites of Canaan and the Anatolian empire is unresolved, and inventing a polygon would assert a connection the evidence does not support.",
    chapters: [1, 3, 9, 11, 12, 24],
    layer: "peoples",
    cites: [
      {
        sourceId: "anchor-bible-dictionary",
        claim:
          "The relationship between the biblical Hittites of Canaan and the Anatolian Hittite state is disputed",
        locator: "s.v. Hittites",
      },
    ],
  },
  {
    id: "hivites",
    name: "Hivites",
    type: "people",
    extent: "label-without-borders",
    summary:
      "A group named in the lists, and the label attached to the Gibeonites in Joshua 9 and 11.",
    mappingNote:
      "No territory drawn. The only concrete anchor is the Gibeonite towns, which are mapped as cities rather than as a Hivite region.",
    chapters: [3, 9, 11, 12, 24],
    layer: "peoples",
  },
  {
    id: "perizzites",
    name: "Perizzites",
    type: "people",
    extent: "label-without-borders",
    summary:
      "A group named in the lists, associated loosely with the hill country. The name may relate to a word for unwalled settlements.",
    mappingNote:
      "No territory drawn. No site, inscription or Egyptian record anchors this group to a place.",
    chapters: [3, 9, 11, 12, 17, 24],
    layer: "peoples",
  },
  {
    id: "girgashites",
    name: "Girgashites",
    type: "people",
    extent: "label-without-borders",
    summary: "A group named in the seven-nations lists and nowhere else described.",
    mappingNote:
      "No territory drawn, and no location proposed. This group appears only in list form.",
    chapters: [3, 24],
    layer: "peoples",
  },
  {
    id: "jebusites",
    name: "Jebusites",
    type: "people",
    extent: "described-area",
    summary:
      "The people of Jerusalem before David takes the city. Joshua states plainly that Judah and Benjamin did not dislodge them.",
    mappingNote:
      "Anchored to Jerusalem and its immediate surroundings only, because that is the extent the text gives. Shown on the remaining-land layer, since the book itself lists them among those not driven out.",
    chapters: [3, 9, 11, 12, 15, 18, 24],
    layer: "peoples",
    memberSiteIds: ["jerusalem"],
  },
  {
    id: "anakim",
    name: "Anakim",
    alt: ["sons of Anak"],
    type: "people",
    extent: "described-area",
    summary:
      "A group associated with Hebron, Debir and Anab, remembered as unusually large and the reason the scouts' report frightened Israel. Joshua 11 says they were cut off from the hill country but remained in the Philistine cities.",
    mappingNote:
      "Anchored only to the towns the text names. The study does not treat the descriptions of their size as measurements, and does not attempt to explain them away either.",
    chapters: [11, 14, 15],
    layer: "peoples",
    memberSiteIds: ["hebron", "debir", "anab", "gaza", "gath", "ashdod"],
    cites: [
      {
        sourceId: "hess-joshua",
        claim:
          "Joshua 11:21-22 restricts the Anakim to named towns and notes their survival in the Philistine cities",
        locator: "on Joshua 11:21-22",
      },
    ],
  },
  {
    id: "rephaim",
    name: "Rephaim",
    type: "people",
    extent: "label-without-borders",
    summary:
      "A term for pre-Israelite populations east and west of the Jordan, and the group Og of Bashan is said to survive from. The word is used elsewhere in the Old Testament for the dead.",
    mappingNote:
      "No territory drawn. The Valley of Rephaim near Jerusalem is a separate place name and is not evidence for a Rephaim territory.",
    chapters: [12, 13, 15, 17, 18],
    layer: "peoples",
  },
  {
    id: "avvim",
    name: "Avvim",
    type: "people",
    extent: "label-without-borders",
    summary:
      "A group mentioned briefly in Joshua 13 in connection with the southern coastal area.",
    mappingNote: "No territory drawn; the reference is too brief to support one.",
    chapters: [13, 18],
    layer: "peoples",
  },
  {
    id: "kenizzites",
    name: "Kenizzites",
    type: "people",
    extent: "label-without-borders",
    summary:
      "The group Caleb is identified with, apparently of non-Israelite origin yet fully reckoned within Judah. One of the clearest cases in the book of an outsider belonging.",
    mappingNote:
      "No territory drawn. The interest here is not geographic but the question of who counts as Israel.",
    chapters: [14, 15],
    layer: "peoples",
    cites: [
      {
        sourceId: "hess-joshua",
        claim:
          "Caleb is called a Kenizzite while being counted within Judah, without the text explaining the assimilation",
        locator: "on Joshua 14:6",
      },
    ],
  },

  /* ================================================================ */
  /* Neighbouring and regional powers                                 */
  /* ================================================================ */
  {
    id: "egypt-new-kingdom",
    name: "Egypt",
    alt: ["New Kingdom Egypt"],
    type: "polity",
    extent: "political-entity",
    summary:
      "The dominant power in the region during the Late Bronze Age, holding Canaan through garrisons, vassal rulers and tribute rather than through settlement. Egypt is almost absent from Joshua's narrative, which is one of the book's most striking silences.",
    mappingNote:
      "Shown as a zone of influence with garrison and administrative centres marked, not as a bordered empire. Egyptian control in Canaan worked through local rulers who wrote to Pharaoh; it did not look like a coloured country on a map.",
    chapters: [1, 5, 9, 13, 24],
    layer: "peoples",
    memberSiteIds: ["beth-shan", "joppa", "gaza", "megiddo", "lachish"],
    cites: [
      {
        sourceId: "moran-amarna",
        claim:
          "The Amarna letters show Egyptian oversight of Canaan exercised through correspondence with local city rulers",
      },
      {
        sourceId: "rainey-notley-sacred-bridge",
        claim: "Egyptian administrative and garrison centres in Late Bronze Canaan",
      },
      {
        sourceId: "merneptah-stele",
        claim:
          "An Egyptian royal inscription names a people called Israel in Canaan, the earliest external mention",
      },
    ],
  },
  {
    id: "canaanite-city-states",
    name: "The Canaanite city-state system",
    type: "polity",
    extent: "political-entity",
    summary:
      "How the land was actually organised: dozens of small towns, each with its own ruler, controlling the fields and villages within a short distance. The 'kings' Joshua lists are rulers of this kind, not monarchs of nations.",
    mappingNote:
      "Drawn as points with small influence halos rather than as filled territories. A typical Late Bronze Canaanite town held a few hundred to a few thousand people. Reading 'king of Jericho' as a national monarch inflates the scale of the whole book.",
    chapters: [9, 10, 11, 12],
    layer: "peoples",
    cites: [
      {
        sourceId: "moran-amarna",
        claim:
          "The Amarna correspondence reveals a landscape of small competing city-states under Egyptian oversight",
      },
      {
        sourceId: "mazar-archaeology-land",
        claim:
          "Settlement sizes in Late Bronze Canaan were modest compared with contemporary Mesopotamian or Egyptian centres",
      },
    ],
  },
  {
    id: "philistines",
    name: "Philistines",
    type: "people",
    extent: "described-area",
    summary:
      "A population of the southern coastal plain organised around five cities, named in Joshua 13 among the territory that remained. Their arrival in force is generally dated to the very end of the Late Bronze Age, which raises a chronological question the study does not paper over.",
    mappingNote:
      "Shown as the five cities plus the coastal plain they dominate, on the remaining-land layer. The dating question is flagged: if the conquest is placed early, the Philistine presence in Joshua 13 sits awkwardly with the archaeological picture of their settlement.",
    chapters: [13, 15],
    layer: "remaining",
    memberSiteIds: ["gaza", "ashkelon", "ashdod", "ekron", "gath"],
    cites: [
      {
        sourceId: "stager-forging-identity",
        claim:
          "Philistine settlement on the southern coast is dated to the transition from the Late Bronze to Iron Age",
      },
      {
        sourceId: "mazar-archaeology-land",
        claim: "Material evidence for Philistine settlement in the five-city area",
      },
    ],
  },
  {
    id: "sidonians",
    name: "Sidonians",
    type: "people",
    extent: "described-area",
    summary:
      "The population of the Phoenician coast north of Carmel, named among those Israel did not drive out.",
    mappingNote:
      "Anchored to the coastal cities of Sidon and Tyre and the narrow plain behind them. Shown on the remaining-land layer.",
    chapters: [11, 13, 19],
    layer: "remaining",
    memberSiteIds: ["sidon", "tyre"],
  },
  {
    id: "geshurites",
    name: "Geshurites",
    type: "people",
    extent: "described-area",
    summary:
      "A group east and north-east of the Sea of Chinnereth, named among those whose land Israel did not take.",
    mappingNote:
      "Shown as an approximate area east of the lake, on the remaining-land layer, with the label marked approximate.",
    chapters: [12, 13],
    layer: "remaining",
  },
  {
    id: "maacathites",
    name: "Maacathites",
    type: "people",
    extent: "described-area",
    summary:
      "A group in the far north near Hermon, named alongside the Geshurites among the unconquered.",
    mappingNote: "Approximate area near the Hermon foothills, marked as approximate.",
    chapters: [12, 13],
    layer: "remaining",
  },
  {
    id: "moab",
    name: "Moab",
    type: "polity",
    extent: "political-entity",
    summary:
      "The kingdom on the plateau east of the Dead Sea, south of the Arnon. Israel camps in its plains and is explicitly told not to take its land.",
    mappingNote:
      "Drawn with the Arnon gorge as its northern limit, which the text uses as a boundary, and open edges elsewhere. The southern and eastern limits are not described.",
    chapters: [13, 24],
    layer: "peoples",
    memberSiteIds: ["dibon"],
    cites: [
      {
        sourceId: "mesha-stele",
        claim:
          "A ninth-century Moabite royal inscription attests the kingdom and its conflicts with Israel, several centuries after Joshua",
      },
    ],
  },
  {
    id: "ammon",
    name: "Ammon",
    type: "polity",
    extent: "political-entity",
    summary:
      "The kingdom around Rabbah on the eastern plateau, treated in the allotment texts as a neighbour whose border Gad reaches but does not cross.",
    mappingNote:
      "Anchored to Rabbah with an open, unbordered extent. The text describes Gad's territory as reaching to the Ammonite border without defining it.",
    chapters: [12, 13],
    layer: "peoples",
    memberSiteIds: ["rabbah-ammon"],
  },
  {
    id: "edom",
    name: "Edom",
    alt: ["Seir"],
    type: "polity",
    extent: "political-entity",
    summary:
      "The territory south and south-east of the Dead Sea, referenced in Joshua as a directional and boundary marker rather than as an opponent.",
    mappingNote:
      "Shown as an approximate highland area south-east of the Salt Sea, used in the text for orientation. Edom's development as a state is generally placed later than the Joshua narrative.",
    chapters: [11, 12, 15, 24],
    layer: "peoples",
  },

  /* ================================================================ */
  /* Alliances: sets of cities, never territories                     */
  /* ================================================================ */
  {
    id: "southern-coalition",
    name: "The coalition of five kings",
    type: "alliance",
    extent: "coalition-of-cities",
    summary:
      "Five city rulers, led by Adoni-zedek of Jerusalem, who join to attack Gibeon for making peace with Israel. They are defeated in the field and captured at Makkedah.",
    mappingNote:
      "Drawn only as five city points joined by thin connector lines, never as a shaded country. The alliance existed for one campaign. Filling the area between the five cities would invent a southern kingdom that did not exist.",
    chapters: [10],
    layer: "peoples",
    memberSiteIds: ["jerusalem", "hebron", "jarmuth", "lachish", "eglon"],
    cites: [
      {
        sourceId: "hess-joshua",
        claim:
          "The coalition is formed in response to Gibeon's treaty with Israel and is a temporary military arrangement",
        locator: "on Joshua 10:1-5",
      },
    ],
  },
  {
    id: "northern-coalition",
    name: "The northern coalition",
    type: "alliance",
    extent: "coalition-of-cities",
    summary:
      "A larger assembly of northern rulers gathered by Jabin of Hazor at the waters of Merom, described as fielding horses and chariots.",
    mappingNote:
      "Drawn as city points converging on the muster site. Several member cities are unlocated or disputed, and the connector lines are dashed to say so.",
    chapters: [11],
    layer: "peoples",
    memberSiteIds: ["hazor", "madon", "shimron", "achshaph", "chinnereth", "dor"],
    cites: [
      {
        sourceId: "hess-joshua",
        claim:
          "Jabin of Hazor assembles a coalition described as including chariotry, mustering at the waters of Merom",
        locator: "on Joshua 11:1-5",
      },
    ],
  },
  {
    id: "gibeonite-league",
    name: "The Gibeonite towns",
    type: "alliance",
    extent: "coalition-of-cities",
    summary:
      "Gibeon with Chephirah, Beeroth and Kiriath-jearim, treated in Joshua 9 as acting together. Their treaty with Israel is honoured, and it triggers the southern campaign.",
    mappingNote:
      "Four city points on the Benjamin plateau, connected. Their status inside Israel afterwards is a matter of text and treaty, not of territory, so no polygon is drawn.",
    chapters: [9, 10, 18],
    layer: "peoples",
    memberSiteIds: ["gibeon", "chephirah", "beeroth", "kiriath-jearim"],
    cites: [
      {
        sourceId: "blenkinsopp-gibeon",
        claim:
          "The four towns act as a group and retain a distinct status within Israel after the treaty",
      },
    ],
  },

  /* ================================================================ */
  /* Tribes                                                           */
  /* ================================================================ */
  {
    id: "tribe-judah",
    name: "Judah",
    type: "tribe",
    extent: "described-area",
    summary:
      "The first tribe to receive its allotment, taking the southern hill country, the Shephelah and the Negev. Its boundary description is the longest and most detailed in the book.",
    mappingNote:
      "Judah's boundaries are described point by point in Joshua 15, so the polygon here is better grounded than most, but it is still a reconstruction: many of the named boundary points are unidentified. Allotment is not the same as control. Joshua 15:63 says Judah could not take Jerusalem.",
    chapters: [14, 15, 18, 19, 20, 21],
    layer: "allotments",
  },
  {
    id: "tribe-ephraim",
    name: "Ephraim",
    type: "tribe",
    extent: "described-area",
    summary:
      "Joshua's own tribe, receiving the central hill country north of Benjamin. Its territory includes Shiloh and Shechem's approaches.",
    mappingNote:
      "Boundaries are described in Joshua 16 with fewer fixed points than Judah's. Ephraim is also named as failing to clear Gezer, which the map shows on the remaining-land layer.",
    chapters: [16, 17, 18, 19, 20, 21, 24],
    layer: "allotments",
  },
  {
    id: "tribe-manasseh-west",
    name: "Manasseh (west of the Jordan)",
    type: "tribe",
    extent: "described-area",
    summary:
      "The half of Manasseh settled west of the river, north of Ephraim, reaching toward the Jezreel valley.",
    mappingNote:
      "A reconstruction. Manasseh's western allotment includes towns the text says were not taken, including Beth-shan, Megiddo, Taanach, Dor and Ibleam, which is a large fraction of its best land.",
    chapters: [16, 17, 21],
    layer: "allotments",
  },
  {
    id: "tribe-manasseh-east",
    name: "Manasseh (east of the Jordan)",
    type: "tribe",
    extent: "described-area",
    summary:
      "The half of Manasseh settled in Bashan and northern Gilead, assigned by Moses before Joshua begins.",
    mappingNote:
      "Assigned under Moses, not in the lot at Shiloh. Its extent is described loosely by region names rather than boundary points, so the polygon is deliberately coarse.",
    chapters: [1, 12, 13, 17, 22],
    layer: "allotments",
  },
  {
    id: "tribe-benjamin",
    name: "Benjamin",
    type: "tribe",
    extent: "described-area",
    summary:
      "A small territory on the plateau between Judah and Ephraim, containing Jericho, Gibeon, Bethel's approaches and Jerusalem's site.",
    mappingNote:
      "Benjamin's boundaries are described in unusual detail in Joshua 18 because it is squeezed between two large tribes. The territory is small and strategically dense: several of the book's key events happen inside it.",
    chapters: [18, 20, 21],
    layer: "allotments",
  },
  {
    id: "tribe-simeon",
    name: "Simeon",
    type: "tribe",
    extent: "described-area",
    summary:
      "A tribe whose towns lie inside Judah's southern area rather than in a separate block of land.",
    mappingNote:
      "Drawn as a set of towns within Judah's area, not as a bounded territory, because that is what Joshua 19 describes. Giving Simeon its own solid block would misrepresent the text.",
    chapters: [19, 21],
    layer: "allotments",
  },
  {
    id: "tribe-zebulun",
    name: "Zebulun",
    type: "tribe",
    extent: "described-area",
    summary: "A tribe in lower Galilee, between the Jezreel valley and the Galilean hills.",
    mappingNote:
      "Reconstructed from a boundary list with several unidentified points. Coarse by necessity.",
    chapters: [19, 21],
    layer: "allotments",
  },
  {
    id: "tribe-issachar",
    name: "Issachar",
    type: "tribe",
    extent: "described-area",
    summary:
      "A tribe whose territory covers much of the Jezreel valley and its eastern approaches.",
    mappingNote:
      "Reconstructed from a town list rather than a continuous boundary. Much of the valley floor it is assigned contains towns the text says remained Canaanite.",
    chapters: [17, 19, 21],
    layer: "allotments",
  },
  {
    id: "tribe-asher",
    name: "Asher",
    type: "tribe",
    extent: "described-area",
    summary:
      "A tribe along the northern coastal plain and the hills behind it, reaching toward Tyre and Sidon.",
    mappingNote:
      "Its described area overlaps substantially with territory the text admits was Sidonian. Shown with the remaining-land layer active, this is one of the clearest cases of allotment on paper without possession on the ground.",
    chapters: [19, 21],
    layer: "allotments",
  },
  {
    id: "tribe-naphtali",
    name: "Naphtali",
    type: "tribe",
    extent: "described-area",
    summary:
      "A tribe in upper Galilee and along the western side of the Jordan's upper valley, including Hazor's area.",
    mappingNote:
      "Reconstructed from a boundary and town list. Includes Kedesh, one of the cities of refuge.",
    chapters: [19, 20, 21],
    layer: "allotments",
  },
  {
    id: "tribe-dan",
    name: "Dan",
    type: "tribe",
    extent: "described-area",
    summary:
      "A tribe allotted a small area west of Benjamin toward the coast, which it does not hold. The account of its migration north belongs to Judges 18.",
    mappingNote:
      "Two things must not be merged: the allotted area near the coastal plain, and the later northern settlement at Laish. The original allotment is drawn; the migration is shown only as a note, because it is outside Joshua.",
    chapters: [19, 21],
    layer: "allotments",
  },
  {
    id: "tribe-reuben",
    name: "Reuben",
    type: "tribe",
    extent: "described-area",
    summary:
      "A tribe settled east of the Jordan on the plateau north of the Arnon, in territory taken from Sihon.",
    mappingNote:
      "Assigned by Moses before Joshua opens. The Arnon gives a firm southern edge; other limits are loose.",
    chapters: [1, 12, 13, 18, 20, 21, 22],
    layer: "allotments",
  },
  {
    id: "tribe-gad",
    name: "Gad",
    type: "tribe",
    extent: "described-area",
    summary:
      "A tribe settled east of the Jordan in Gilead and the valley, between Reuben and eastern Manasseh.",
    mappingNote:
      "Described partly by towns and partly by region names. Gad's area interlocks with Reuben's in ways the text does not fully resolve, so the boundary between them is drawn as indicative.",
    chapters: [1, 12, 13, 18, 20, 21, 22],
    layer: "allotments",
  },
  {
    id: "tribe-levi",
    name: "Levi",
    type: "tribe",
    extent: "described-area",
    summary:
      "The tribe that receives no territorial block, only towns with their pasture, distributed among the others. Joshua 21 lists forty-eight of them.",
    mappingNote:
      "Never drawn as a polygon, because the text is explicit that Levi has no such inheritance. Shown only as a distributed set of town markers across the other allotments, which is itself the point.",
    chapters: [13, 14, 18, 21],
    layer: "allotments",
    cites: [
      {
        sourceId: "haran-levitical-cities",
        claim:
          "The Levitical city lists describe towns with pasture rather than a contiguous tribal territory",
      },
    ],
  },

  /* ================================================================ */
  /* Physiographic regions: the land itself                           */
  /* ================================================================ */
  {
    id: "region-hill-country-judah",
    name: "The hill country of Judah",
    type: "region",
    extent: "physiographic",
    summary:
      "The limestone highland ridge running south from Jerusalem through Hebron, mostly between 600 and 1,000 m, with steep valleys on both sides.",
    mappingNote:
      "A real physical region with genuine edges. Its terrain explains the book's military geography: armies move along the ridge road, and the side valleys are difficult.",
    chapters: [10, 11, 14, 15, 20, 21],
    layer: "places",
  },
  {
    id: "region-hill-country-ephraim",
    name: "The hill country of Ephraim",
    type: "region",
    extent: "physiographic",
    summary:
      "The central highlands north of Benjamin, broken by the Shechem pass, holding Shiloh, Bethel and Timnath-serah.",
    mappingNote:
      "Physically defined. Its relative openness compared with Judah's ridge is part of why the central hill country becomes Israel's early heartland.",
    chapters: [16, 17, 19, 20, 21, 24],
    layer: "places",
  },
  {
    id: "region-shephelah",
    name: "The Shephelah",
    alt: ["the lowland", "the foothills"],
    type: "region",
    extent: "physiographic",
    summary:
      "The belt of low chalk hills between the coastal plain and the Judean highlands, cut by west-east valleys. It is the contested ground in the southern campaign and for centuries afterwards.",
    mappingNote:
      "A real region, and the single most useful piece of terrain to understand in the book. Every route from the coast into the highlands runs through one of its valleys, which is why Lachish, Azekah, Jarmuth and Beth-shemesh all sit where they do.",
    chapters: [10, 11, 12, 15],
    layer: "places",
    cites: [
      {
        sourceId: "aharoni-land-of-bible",
        claim:
          "The Shephelah's valley system controls access between the coastal plain and the Judean hill country",
      },
    ],
  },
  {
    id: "region-negev",
    name: "The Negev",
    type: "region",
    extent: "physiographic",
    summary:
      "The dry south, where rainfall drops below what reliable farming needs. In the allotment texts it is a district of Judah and the area of Simeon's towns.",
    mappingNote:
      "A climatic region rather than a bordered one. Its northern limit is a rainfall line that shifts, which is exactly why Achsah asks her father for springs.",
    chapters: [10, 11, 15, 19],
    layer: "places",
  },
  {
    id: "region-arabah",
    name: "The Arabah",
    type: "region",
    extent: "physiographic",
    summary:
      "The rift valley floor, used in the text for the Jordan valley and the depression continuing south of the Salt Sea.",
    mappingNote:
      "A real trench, and the deepest on any land surface. The term's range in the text is wider than the modern usage, which the label notes.",
    chapters: [3, 8, 11, 12, 13, 18],
    layer: "places",
  },
  {
    id: "region-jordan-valley",
    name: "The Jordan valley",
    type: "region",
    extent: "physiographic",
    summary:
      "The floor of the rift between the Sea of Chinnereth and the Salt Sea, hot, below sea level for its whole length, and crossed at a limited number of fords.",
    mappingNote:
      "Physically defined by the valley walls. The limited number of practical crossings is what makes Joshua 3 and Joshua 22 geographically meaningful.",
    chapters: [2, 3, 4, 13, 22],
    layer: "places",
  },
  {
    id: "region-coastal-plain",
    name: "The coastal plain",
    alt: ["the plain of Sharon (northern part)"],
    type: "region",
    extent: "physiographic",
    summary:
      "The flat corridor along the Mediterranean carrying the main international route between Egypt and the north. Israel does not control it in Joshua.",
    mappingNote:
      "A real region. That the book's boundary descriptions reach the sea while its own admissions leave the plain unpossessed is one of the clearest tensions in Joshua, and the layers are built to show it.",
    chapters: [13, 15, 16, 17, 19],
    layer: "places",
    cites: [
      {
        sourceId: "aharoni-land-of-bible",
        claim:
          "The coastal route was the principal international highway through the region",
      },
    ],
  },
  {
    id: "region-jezreel-valley",
    name: "The Jezreel valley",
    type: "region",
    extent: "physiographic",
    summary:
      "The broad flat valley cutting across the country from the coastal plain to the Jordan, ringed by fortified towns. Good chariot country, which is precisely the problem.",
    mappingNote:
      "Physically defined. The text's admission that Manasseh and Issachar could not take the valley towns makes sense here: flat open ground favours chariots, and the towns around its rim were strong.",
    chapters: [11, 17, 19],
    layer: "places",
  },
  {
    id: "region-galilee",
    name: "Galilee",
    type: "region",
    extent: "physiographic",
    summary:
      "The northern highlands, higher and wetter in the upper part, lower and more open in the south, containing Hazor's approaches and the territories of Naphtali, Zebulun and Asher.",
    mappingNote:
      "A physical region, drawn with upper and lower zones distinguished by elevation rather than by any political line.",
    chapters: [11, 12, 19, 20, 21],
    layer: "places",
  },
  {
    id: "region-huleh-basin",
    name: "The Huleh basin",
    type: "region",
    extent: "physiographic",
    summary:
      "The marshy upper Jordan basin below Hermon, beside Hazor, through which the route from the north enters the country.",
    mappingNote:
      "Physically defined, though the marshes were drained in the twentieth century, so the modern landscape differs sharply from the ancient one. The label says so.",
    chapters: [11],
    layer: "places",
  },
  {
    id: "region-gilead",
    name: "Gilead",
    type: "region",
    extent: "physiographic",
    summary:
      "The wooded highland east of the Jordan, divided by the Jabbok, assigned to Gad and eastern Manasseh.",
    mappingNote:
      "A real upland region, though the text uses the name with varying extent. Drawn coarsely with the Jabbok marked, since the text uses that as its internal divider.",
    chapters: [12, 13, 17, 20, 21, 22],
    layer: "places",
  },
  {
    id: "region-bashan",
    name: "Bashan",
    type: "region",
    extent: "physiographic",
    summary:
      "The fertile basalt plateau north-east of the Sea of Chinnereth, Og's kingdom, given to eastern Manasseh.",
    mappingNote:
      "A real region with good soil and few natural boundaries, so the polygon's edges are indicative only.",
    chapters: [12, 13, 17, 20, 21],
    layer: "places",
  },
  {
    id: "region-moab-plateau",
    name: "The plains of Moab",
    type: "region",
    extent: "physiographic",
    summary:
      "The stretch of valley floor east of the Jordan opposite Jericho, where Israel camps before crossing.",
    mappingNote:
      "A defined piece of valley floor. This is where the book of Joshua opens, and where Deuteronomy was delivered.",
    chapters: [1, 2, 3, 13],
    layer: "places",
  },
  {
    id: "region-lebanon",
    name: "Lebanon",
    type: "region",
    extent: "physiographic",
    summary:
      "The mountain range north of the country, named repeatedly as the northern limit of the land described and listed among what remained.",
    mappingNote:
      "Drawn as a physical range on the places layer and as unpossessed territory on the remaining-land layer at the same time. Both are true, and that is the point.",
    chapters: [1, 9, 11, 12, 13],
    layer: "places",
  },
  {
    id: "region-wilderness-judah",
    name: "The wilderness of Judah",
    type: "region",
    extent: "physiographic",
    summary:
      "The steep rain-shadow slope east of the Judean ridge dropping to the Salt Sea, listed as one of Judah's districts.",
    mappingNote:
      "Physically defined by the rain shadow. Almost unusable for farming, which is why its district list is short.",
    chapters: [15],
    layer: "places",
  },
  {
    id: "region-goshen-judah",
    name: "The land of Goshen (in Judah)",
    type: "region",
    extent: "described-area",
    summary:
      "A district named in Joshua 10 and 11 in the southern hill country. It is not the Goshen of Egypt, despite the identical name.",
    mappingNote:
      "Placed approximately in the southern hill country, and labelled explicitly to prevent the confusion with Egyptian Goshen, which is a common error.",
    chapters: [10, 11, 15],
    layer: "places",
  },
];

export const GROUP_SEED_BY_ID: Record<string, GroupSeed> = Object.fromEntries(
  GROUP_SEEDS.map((g) => [g.id, g])
);

export const TRIBE_IDS = GROUP_SEEDS.filter((g) => g.type === "tribe").map((g) => g.id);
export const PEOPLE_IDS = GROUP_SEEDS.filter((g) => g.type === "people").map((g) => g.id);
export const ALLIANCE_IDS = GROUP_SEEDS.filter((g) => g.type === "alliance").map((g) => g.id);
export const REGION_IDS = GROUP_SEEDS.filter((g) => g.type === "region").map((g) => g.id);
export const POLITY_IDS = GROUP_SEEDS.filter((g) => g.type === "polity").map((g) => g.id);
