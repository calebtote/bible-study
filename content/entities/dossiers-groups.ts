/**
 * Authored dossier material for peoples, polities, alliances, tribes and regions.
 *
 * The seeds in `group-seeds.ts` already carry the plain identification and the
 * mapping note, which is the sentence saying how the map may and may not draw each
 * one. What is added here is the four things a seed cannot hold: where the group
 * appears in the Bible before Joshua, what is known about it historically, what is
 * genuinely unsettled, and what becomes of it later.
 *
 * Three rules govern this file.
 *
 * A group is not a nation. Most of these labels had no border, no capital and no
 * government, and several of them may not name a distinct population at all. Where
 * that is the case, the uncertainties block says so rather than letting the map's
 * shading do the talking.
 *
 * An allotment is not a possession. Every tribal entry has to hold both halves of
 * what the book says: this land was assigned, and the book itself records how much of
 * it was not taken.
 *
 * Attestation does not transfer. Egyptian records naming Canaan, or a destruction
 * layer at a named city, say nothing about whether a particular biblical episode
 * happened. Where a historical block is near that line, it stops at what the evidence
 * shows and leaves the connection unmade.
 */

import type { DossierExtra } from "./dossiers";

export const GROUP_DOSSIERS: DossierExtra[] = [
  /* ================================================================ */
  /* Peoples of the seven-nations formulas                            */
  /* ================================================================ */
  {
    entityId: "canaanites",
    earlier: {
      body: "Canaan is a person before it is a place. Genesis traces the land's population to Canaan son of Ham, and the promise to Abraham is a promise of *the land of Canaan* while Canaanites are living in it. Abraham, Isaac and Jacob move through that land as resident aliens, buying a burial plot and digging wells rather than holding territory. Exodus and Numbers then turn the name into a destination, and Numbers 13 sends scouts into it.",
      scriptureRefs: ["Genesis 10:15-19", "Genesis 12:5-7", "Genesis 23:1-20", "Numbers 13:17-33"],
      evidenceLabels: ["biblical-account"],
    },
    historical: {
      body: "Canaan is well documented as an Egyptian administrative designation for the southern Levant during the Late Bronze Age. The Amarna correspondence, letters between Egyptian pharaohs and local rulers in the fourteenth century, shows the region organised as dozens of small city-states whose rulers addressed the pharaoh as overlord and quarrelled constantly with one another. The population shared a language family, a script tradition and a material culture, and was governed by no single authority. Egyptian topographical lists from Thutmose III onward name many of the same towns Joshua names, which establishes that these were real places with continuous identities, and nothing more than that.",
      citations: [
        {
          sourceId: "moran-amarna",
          supportedClaim:
            "Fourteenth-century correspondence shows Canaan as a patchwork of small city-states under Egyptian oversight, with rulers in frequent conflict",
        },
        {
          sourceId: "rainey-notley-sacred-bridge",
          supportedClaim:
            "Canaan functions in Egyptian and biblical usage as a regional and population designation rather than a polity",
        },
        {
          sourceId: "thutmose-iii-lists",
          supportedClaim:
            "Egyptian topographical lists name numerous towns that also appear in Joshua",
        },
      ],
      evidenceLabels: ["externally-attested", "biblical-account"],
    },
    uncertainties: {
      body: "The term is used two ways in the same book and the study cannot smooth this over. In some verses Canaanite covers every inhabitant of the land; in the seven-nations lists it is one item among several, and in others it is narrowed to people of the coast and the valleys as against hill country groups. Whether the narrower usage reflects a real distinction the writers knew or a literary convention is not settled. Any map shading labelled Canaanite is therefore shading a word, not a jurisdiction.",
      evidenceLabels: ["biblical-account", "disputed"],
    },
  },

  {
    entityId: "amorites",
    earlier: {
      body: "Genesis 15 tells Abraham his descendants will wait because the iniquity of the Amorites is not yet complete, which makes the term part of the promise's own timetable. Numbers 21 then narrates Israel's first military victories against two Amorite kings east of the Jordan, Sihon of Heshbon and Og of Bashan, and Deuteronomy returns to those two repeatedly as the proof that the coming campaign is possible.",
      scriptureRefs: ["Genesis 15:12-21", "Numbers 21:21-35", "Deuteronomy 3:1-11"],
      evidenceLabels: ["biblical-account"],
    },
    historical: {
      body: "Amurru is attested across two thousand years of Mesopotamian and Egyptian records, and its meaning shifts substantially over that span. In early second-millennium Mesopotamian texts it designates westerners in general, sometimes dismissively. By the Late Bronze Age, Amurru is a specific kingdom in what is now Lebanon and western Syria, well north of anywhere Joshua describes, whose rulers appear in the Amarna letters and in Hittite treaties. The biblical use of Amorite for hill country populations in Canaan and for two Transjordanian kingdoms does not line up neatly with either usage.",
      citations: [
        {
          sourceId: "anchor-bible-dictionary",
          supportedClaim:
            "Amurru shifts meaning from a general designation for westerners to a specific Late Bronze kingdom in Syria and Lebanon",
        },
        {
          sourceId: "rainey-notley-sacred-bridge",
          supportedClaim:
            "The Late Bronze kingdom of Amurru lay well north of the areas Joshua describes as Amorite",
        },
      ],
      evidenceLabels: ["externally-attested"],
    },
    uncertainties: {
      body: "Nobody has satisfactorily explained the mismatch. The biblical Amorites are hill country people and two Transjordanian kings; the externally attested Amurru is a Syrian kingdom. Proposals range from an old broad usage surviving in Hebrew alongside the narrower political one, to the biblical writers applying a general term for highland non-Israelites. The study draws no Amorite area on the map, because there is no described area to draw.",
      evidenceLabels: ["disputed"],
    },
  },

  {
    entityId: "hittites",
    earlier: {
      body: "The Hittites of Genesis are neighbours, not enemies. Abraham buys the cave at Machpelah from Ephron the Hittite in a negotiation conducted with considerable courtesy, and Esau marries Hittite women, to his parents' distress. By Numbers 13 the scouts report Hittites living in the hill country alongside Jebusites and Amorites.",
      scriptureRefs: ["Genesis 23:3-20", "Genesis 26:34-35", "Numbers 13:29"],
      evidenceLabels: ["biblical-account"],
    },
    historical: {
      body: "The Hittite empire of Anatolia is one of the best documented powers of the Late Bronze Age, with a capital at Hattusa, a substantial archive, and a treaty history including the famous accommodation with Egypt after Kadesh. It collapsed around the end of the thirteenth century, after which a set of smaller Neo-Hittite states persisted in northern Syria for several centuries. None of this is in Canaan. The Anatolian empire's southern reach stopped well north of the territory Joshua covers.",
      citations: [
        {
          sourceId: "cos",
          supportedClaim:
            "Hittite royal and treaty texts document an Anatolian empire with a capital at Hattusa and a defined southern reach",
        },
        {
          sourceId: "rainey-notley-sacred-bridge",
          supportedClaim:
            "Hittite imperial control did not extend into the southern Levant where Joshua locates Hittites",
        },
      ],
      evidenceLabels: ["externally-attested"],
    },
    uncertainties: {
      body: "Whether the biblical Hittites in Canaan have anything to do with the Anatolian Hittites is an open question and has been for a century. Suggestions include a genuine but small Anatolian presence in the Levant, an unrelated local group whose name happens to resemble the Anatolian one, and a later writer's use of a familiar imperial name for an older local population. The study keeps the two as separate records and asserts no relationship between them.",
      evidenceLabels: ["disputed"],
    },
  },

  {
    entityId: "hivites",
    earlier: {
      body: "Hivites appear in the seven-nations lists of Exodus and Deuteronomy without further description, and in Genesis 34 the men of Shechem are identified as Hivite in the episode involving Dinah. That is close to everything the earlier books provide.",
      scriptureRefs: ["Exodus 3:8", "Deuteronomy 7:1", "Genesis 34:2"],
      evidenceLabels: ["biblical-account"],
    },
    uncertainties: {
      body: "Hivite is not attested outside the Bible, and the name's derivation is unknown. The most widely discussed suggestion connects it to the Hurrians, a well-documented northern Mesopotamian population whose names appear in Late Bronze Levantine records, partly through the similar-looking Horites. The proposal rests on resemblance rather than on any text that equates the two, and it is not generally regarded as established. What the book does say is specific and more useful: the Gibeonites are Hivites, which makes this the one group in the lists whose treaty with Israel the book narrates in detail.",
      scriptureRefs: ["Joshua 9:7", "Joshua 11:19"],
      evidenceLabels: ["disputed"],
    },
  },

  {
    entityId: "perizzites",
    earlier: {
      body: "Perizzites appear only in lists, from the promise to Abraham in Genesis 15 through the seven-nations formulas of Exodus and Deuteronomy. No narrative involves them, no ruler is named, and no town is identified as theirs.",
      scriptureRefs: ["Genesis 15:18-21", "Exodus 3:17", "Deuteronomy 7:1"],
      evidenceLabels: ["biblical-account"],
    },
    uncertainties: {
      body: "There is a serious possibility that Perizzite is not an ethnic label at all. The Hebrew resembles *perazot*, a word for unwalled settlements or open country, which would make the term something closer to rural dwellers or villagers, a description of how people lived rather than of who they were. The suggestion is old and reasonable and remains unproven. Either way the study draws no Perizzite area, because there is no location to draw and inventing one would manufacture a people out of a word.",
      evidenceLabels: ["disputed"],
    },
  },

  {
    entityId: "girgashites",
    uncertainties: {
      body: "The Girgashites appear in the lists and nowhere else. No narrative involves them, no territory is described, no ruler is named, and the name is unattested outside the Bible. We do not know who they were. The study keeps the record because the text keeps the name, and says plainly that nothing further can be responsibly added.",
      scriptureRefs: ["Genesis 15:21", "Joshua 3:10", "Joshua 24:11"],
      evidenceLabels: ["biblical-account"],
    },
  },

  {
    entityId: "jebusites",
    earlier: {
      body: "The Jebusites are consistently tied to one place. The scouts' report in Numbers 13 puts them in the hill country, and Joshua 15 and 18 identify Jebus with Jerusalem when tracing the Judah and Benjamin boundaries. The city sits on the border between the two allotments, which is part of why neither takes it.",
      scriptureRefs: ["Numbers 13:29", "Joshua 15:8", "Joshua 18:16-28"],
      evidenceLabels: ["biblical-account"],
    },
    historical: {
      body: "Jerusalem itself is attested in the Late Bronze Age. Six Amarna letters were sent from Urusalim by its ruler Abdi-Heba, who writes as a vassal appealing to the pharaoh for support against rivals and pressure from *hapiru*. The letters establish that a ruler of a place called Urusalim was corresponding with Egypt in the fourteenth century. They do not mention Jebusites, and the term Jebusite is not attested in any source outside the Bible.",
      citations: [
        {
          sourceId: "moran-amarna",
          supportedClaim:
            "Letters from Abdi-Heba of Urusalim document a fourteenth-century ruler of Jerusalem corresponding with Egypt as a vassal",
        },
      ],
      evidenceLabels: ["externally-attested"],
    },
    uncertainties: {
      body: "Jebus as a name for Jerusalem is known only from the Bible, and whether Jebusite designates a distinct population or is a term for the city's inhabitants generally cannot be determined from the available evidence. The relationship between Abdi-Heba's Urusalim and the Jebusites of Joshua is an inference from the site's continuity, not something either source states.",
      evidenceLabels: ["disputed"],
    },
    later: {
      body: "Jerusalem stays out of Israelite hands for generations. Judges 1 reports that Benjamin did not drive out the Jebusites, and the city is still Jebusite when David takes it and makes it his capital, a moment the book of Samuel treats as the beginning of something new. Araunah the Jebusite then sells David the threshing floor that becomes the temple site, which means a Jebusite landowner appears in the story of the temple's own foundation.",
      scriptureRefs: ["Judges 1:21", "2 Samuel 5:6-10", "2 Samuel 24:18-25"],
      citations: [],
    },
  },

  {
    entityId: "anakim",
    earlier: {
      body: "The Anakim are the reason the first generation refuses to enter. The scouts of Numbers 13 report people of great height, the descendants of Anak, and conclude that Israel looked like grasshoppers beside them. Deuteronomy repeats the reputation and then insists it is not decisive. Caleb's request for Hebron in Joshua 14 is a direct answer to that report, forty-five years later.",
      scriptureRefs: ["Numbers 13:22", "Numbers 13:32-33", "Deuteronomy 9:1-3", "Joshua 14:12"],
      evidenceLabels: ["biblical-account"],
    },
    uncertainties: {
      body: "The Anakim are known only from the Bible. A proposed connection to a name appearing in Egyptian texts has been discussed for a long time and is not regarded as secure. The height described is a narrative characterisation, and the study does not translate it into a physical estimate, because the text gives none and any figure would be invented. What Joshua 11 does state is geographically specific and worth holding onto: the Anakim are associated with Hebron, Debir and Anab in the southern hill country, and the same passage says some remained in the Philistine coastal cities.",
      scriptureRefs: ["Joshua 11:21-22"],
      evidenceLabels: ["biblical-account", "disputed"],
    },
  },

  {
    entityId: "rephaim",
    earlier: {
      body: "Deuteronomy uses Rephaim as a term for earlier populations of the Transjordan, displaced before Israel arrived, and identifies Og of Bashan as the last of them, with a bed frame whose dimensions the text reports as remarkable. Genesis 14 has a coalition defeating Rephaim in the same eastern region generations earlier.",
      scriptureRefs: ["Deuteronomy 2:10-11", "Deuteronomy 2:20-21", "Deuteronomy 3:11", "Genesis 14:5"],
      evidenceLabels: ["biblical-account"],
    },
    historical: {
      body: "A cognate term appears in Ugaritic texts from the northern Levantine coast, where *rpum* denotes venerated dead or ancestral figures rather than a living population. Hebrew poetry uses Rephaim the same way, for the shades of the dead. So the Bible itself carries both senses: a people in the narrative books and the dead in the poetic ones.",
      citations: [
        {
          sourceId: "cos",
          supportedClaim:
            "Ugaritic texts use a cognate of Rephaim for venerated dead or ancestral figures",
        },
      ],
      evidenceLabels: ["externally-attested"],
    },
    uncertainties: {
      body: "Which sense is primary, and how the two are related, is unresolved. Readings include an actual population whose name was later applied to the dead, a term for the dead that narrative tradition turned into a people, and two distinct words that converged in Hebrew. The study records both usages and picks neither, and it maps no Rephaim territory.",
      evidenceLabels: ["disputed"],
    },
  },

  {
    entityId: "avvim",
    uncertainties: {
      body: "Almost nothing is known. Joshua 13 lists the Avvim among the territory still unpossessed in the south, and Deuteronomy 2 says they once lived in villages as far as Gaza and were displaced by the Caphtorim. Both notices are brief and neither is corroborated anywhere else. The connection sometimes drawn between Caphtorim and Crete, and from there to the Philistines, is an inference from the name rather than a documented link. The study places no Avvim area on the map.",
      scriptureRefs: ["Joshua 13:3", "Deuteronomy 2:23"],
      evidenceLabels: ["biblical-account", "disputed"],
    },
  },

  {
    entityId: "kenizzites",
    earlier: {
      body: "Kenaz appears in Genesis 36 in the line of Esau, which places the Kenizzites outside Israel's ancestry. Numbers 13 nevertheless has Caleb representing Judah among the twelve scouts, and Numbers 32 records the promise of land to him for following wholeheartedly.",
      scriptureRefs: ["Genesis 36:11", "Genesis 15:19", "Numbers 13:6", "Numbers 32:12"],
      evidenceLabels: ["biblical-account"],
    },
    uncertainties: {
      body: "The text repeatedly calls Caleb a Kenizzite while treating him as a leader of Judah, and it asserts both without pausing to relate them. Genesis 36:11 sets a Kenaz among Esau's descendants; Numbers 13:6 names Caleb a man of Judah without qualification; 1 Chronicles 4:13-15 carries a Kenaz inside Judah's own genealogies. So his standing in Judah is Scripture's claim, not a scribe's oversight, and the open question is how the line came to stand there. If the name reaches back to an absorbed outsider clan, then the man who receives the most emphatic personal commendation in the whole book carries a grafted-in name, which fits how this book treats outsiders who take Yahweh at his word.",
      scriptureRefs: ["Joshua 14:6", "Joshua 14:14"],
      evidenceLabels: ["biblical-account"],
    },
  },

  /* ================================================================ */
  /* Powers and polities                                              */
  /* ================================================================ */
  {
    entityId: "egypt-new-kingdom",
    earlier: {
      body: "Egypt is where Israel has just come from, and Exodus through Deuteronomy assume its power as the background to everything. Joseph's family arrives during a famine, the population grows, a pharaoh who does not know Joseph enslaves them, and the departure is narrated as a defeat of Egypt's gods as much as of its army. Forty years later Egypt is still the reference point for what Israel has been delivered from.",
      scriptureRefs: ["Genesis 46:1-7", "Exodus 1:8-14", "Exodus 14:26-31", "Deuteronomy 6:20-23"],
      evidenceLabels: ["biblical-account"],
    },
    historical: {
      body: "New Kingdom Egypt held the southern Levant as a sphere of influence for much of the Late Bronze Age, administering it lightly through local rulers rather than by settlement, with garrison and administrative centres at places including Beth-Shan, Gaza and Jaffa. The Amarna letters show that system working in the fourteenth century. Egyptian control weakened through the twelfth century and effectively ended in the region thereafter. The Merneptah stele, from the late thirteenth century, contains the earliest known extra-biblical occurrence of the name Israel, written with the determinative for a people rather than a place.",
      citations: [
        {
          sourceId: "moran-amarna",
          supportedClaim:
            "Amarna correspondence documents Egyptian oversight of Canaan exercised through local vassal rulers",
        },
        {
          sourceId: "merneptah-stele",
          supportedClaim:
            "The Merneptah stele provides the earliest known extra-biblical mention of Israel, marked as a people rather than a place",
        },
        {
          sourceId: "rainey-notley-sacred-bridge",
          supportedClaim:
            "Egyptian administrative and garrison centres in Canaan included Beth-Shan, Gaza and Jaffa",
        },
      ],
      evidenceLabels: ["externally-attested"],
    },
    uncertainties: {
      body: "The book of Joshua never mentions Egypt as a present power in Canaan, which is striking given how thoroughly the Egyptian records show it there. Explanations offered include a date for the events during a period of Egyptian weakness, a narrative focus on local opposition that simply omits the imperial layer, and a composition long after the fact. Which of these is right bears directly on how the book relates to the archaeological record, and it is not settled. Note that the Merneptah stele attests a people called Israel in the region; it says nothing about any event Joshua narrates.",
      evidenceLabels: ["disputed"],
    },
  },

  {
    entityId: "canaanite-city-states",
    historical: {
      body: "The political unit of Late Bronze Canaan was the town and its dependent villages and fields, ruled by a figure the biblical text calls a king and the Egyptian records treat as a vassal. These were small. Most such centres covered a few hectares, and their rulers commanded modest forces and competed with one another for land, labour and Egyptian favour. The Amarna archive preserves that competition in the rulers' own words, including repeated appeals for troops that rarely came. This is the political landscape Joshua's lists of defeated kings assume, and it explains why a campaign could produce a long list of kings without producing a large territory.",
      citations: [
        {
          sourceId: "moran-amarna",
          supportedClaim:
            "Amarna letters preserve Canaanite city rulers competing for land, labour and Egyptian military support",
        },
        {
          sourceId: "mazar-archaeology-land",
          supportedClaim:
            "Late Bronze Canaanite urban centres were typically small, on the order of a few hectares",
        },
      ],
      evidenceLabels: ["externally-attested"],
    },
    uncertainties: {
      body: "Because a king here governed a town rather than a country, the register of thirty-one kings in Joshua 12 cannot be read as a map of conquered territory, and the study does not draw it as one. How much ground any of these rulers actually controlled is estimated from site size and settlement patterns rather than known, and the estimates vary.",
      scriptureRefs: ["Joshua 12:7-24"],
      evidenceLabels: ["reconstruction"],
    },
  },

  {
    entityId: "philistines",
    earlier: {
      body: "Genesis has Abraham and Isaac dealing with a Philistine king named Abimelech at Gerar, and Exodus 13 mentions the way of the land of the Philistines as a route Israel does not take. Joshua 13 then lists the five Philistine rulers among the territory not yet possessed.",
      scriptureRefs: ["Genesis 21:22-34", "Genesis 26:1-11", "Exodus 13:17", "Joshua 13:2-3"],
      evidenceLabels: ["biblical-account"],
    },
    historical: {
      body: "A distinctive material culture appears at Ashdod, Ashkelon, Ekron and Gath early in the twelfth century: locally made pottery in Aegean style, different diet and architecture, and a break with the preceding Canaanite assemblage. This is the archaeological signature conventionally identified as Philistine. Egyptian records of Ramesses III describe fighting against groups arriving from the sea, among them a name usually read as Peleset. The five cities Joshua names are real places with long occupation histories, and several of them had been occupied for centuries before this new material culture appears in them.",
      citations: [
        {
          sourceId: "stager-forging-identity",
          supportedClaim:
            "A distinctive material culture identified as Philistine appears in the southern coastal cities early in the twelfth century",
        },
        {
          sourceId: "mazar-archaeology-land",
          supportedClaim:
            "The southern coastal cities show continuous occupation predating the appearance of Philistine material culture",
        },
      ],
      evidenceLabels: ["externally-attested"],
    },
    uncertainties: {
      body: "This is one of the sharpest chronological tensions in the book and the study does not resolve it. Joshua names Philistine rulers of five cities as a present political fact, while the material culture identified as Philistine appears around the early twelfth century, later than most reconstructions place these events, and later still on a fifteenth-century chronology. The responses on offer include reading Philistine in Joshua and Genesis as a general term for Aegean-connected coastal peoples present earlier, treating the name as an update by a later writer using a term his readers knew, and taking the appearance in Joshua as evidence for a later date of composition. Each has a cost. The study presents the tension rather than choosing.",
      evidenceLabels: ["disputed"],
    },
    later: {
      body: "The Philistines become Israel's defining enemy for the next two centuries. They hold the coastal plain and press inland through the Shephelah, capture the ark, dominate the period of Samson and of Saul, and are only pushed back decisively under David. Joshua 13's list of unconquered cities is, read forward, a list of the problem the next four books are about.",
      scriptureRefs: ["Judges 13:1", "1 Samuel 4:1-11", "1 Samuel 31:1-10", "2 Samuel 5:17-25"],
      citations: [],
    },
  },

  {
    entityId: "sidonians",
    historical: {
      body: "Sidon is one of the principal harbour cities of the Lebanese coast, attested in Egyptian and Mesopotamian records through the Late Bronze and Iron Ages and continuously occupied. Joshua's phrase Great Sidon reflects its standing. The coastal cities of this stretch were maritime and commercial, oriented outward to the sea rather than inland, which is one reason a campaign in the hill country never touched them.",
      citations: [
        {
          sourceId: "rainey-notley-sacred-bridge",
          supportedClaim:
            "Sidon was a major coastal harbour city continuously attested through the Late Bronze and Iron Ages",
        },
      ],
      evidenceLabels: ["externally-attested"],
    },
    uncertainties: {
      body: "Joshua mentions Sidon as a northern limit and as land not taken, and the study draws it as a point on the coast rather than as a territory, because the text describes no Sidonian border and the city's reach was commercial rather than territorial.",
      scriptureRefs: ["Joshua 11:8", "Joshua 13:4-6", "Joshua 19:28"],
      evidenceLabels: ["biblical-account"],
    },
  },

  {
    entityId: "geshurites",
    uncertainties: {
      body: "Geshur appears in Joshua 12 and 13 as a small polity on the northeastern edge of the Transjordanian allotments, and the text says plainly that Israel did not dispossess it. Beyond that the evidence is thin. Its extent is estimated from the boundary notices rather than known, and the study draws no area for it.",
      scriptureRefs: ["Joshua 12:5", "Joshua 13:11", "Joshua 13:13"],
      evidenceLabels: ["biblical-account"],
    },
    later: {
      body: "Geshur turns up unexpectedly in the royal family. David marries Maacah, daughter of Talmai king of Geshur, and their son is Absalom, who takes refuge in Geshur for three years after killing his brother. A polity the book of Joshua mentions twice as unconquered becomes, three centuries later, the place a king's son goes into exile.",
      scriptureRefs: ["2 Samuel 3:3", "2 Samuel 13:37-38"],
      citations: [],
    },
  },

  {
    entityId: "maacathites",
    uncertainties: {
      body: "Maacah appears alongside Geshur in the same notices, on the northeastern margin, and with the same explicit statement that it was not dispossessed. Nothing further about it can be established from the text, and no area is drawn for it here. Two small polities named twice and then dropped is what the evidence supports.",
      scriptureRefs: ["Joshua 12:5", "Joshua 13:11", "Joshua 13:13"],
      evidenceLabels: ["biblical-account"],
    },
  },

  {
    entityId: "moab",
    earlier: {
      body: "Moab is where the book of Joshua's audience is standing. Numbers places Israel on the plains of Moab for the whole final stretch of the wilderness period; Balak king of Moab hires Balaam there; the episode at Baal-peor happens there; Moses delivers Deuteronomy there and is buried in Moabite territory. Deuteronomy 2 is explicit that Israel is not to take Moabite land, because it was given to Lot's descendants.",
      scriptureRefs: ["Numbers 22:1-6", "Numbers 25:1-5", "Deuteronomy 2:9", "Deuteronomy 34:1-8"],
      evidenceLabels: ["biblical-account"],
    },
    historical: {
      body: "Moab is externally attested, though later than the events Joshua describes. The Mesha stele, a ninth-century Moabite royal inscription, records a king of Moab in his own words describing conflict with Israel, and it is one of the most important Iron Age inscriptions from the region. For the Late Bronze period the evidence for Moabite political organisation is much thinner, and the settlement history of the plateau is debated.",
      citations: [
        {
          sourceId: "mesha-stele",
          supportedClaim:
            "A ninth-century Moabite royal inscription attests a kingdom of Moab in conflict with Israel",
        },
      ],
      evidenceLabels: ["externally-attested"],
    },
    uncertainties: {
      body: "The Mesha stele attests Moab several centuries after Joshua, and it cannot be used to confirm anything about the Late Bronze situation. How organised Moab was when Israel camped on its plains is not established, and estimates depend on contested readings of the plateau's settlement record.",
      evidenceLabels: ["disputed"],
    },
  },

  {
    entityId: "ammon",
    earlier: {
      body: "Like Moab, Ammon is explicitly off limits. Deuteronomy 2 tells Israel not to harass the Ammonites because their land was given to Lot's descendants, and Numbers 21 notes that the Amorite border reached the Ammonite frontier, which is how Israel's Transjordanian gains stop where they do.",
      scriptureRefs: ["Deuteronomy 2:19", "Numbers 21:24"],
      evidenceLabels: ["biblical-account"],
    },
    uncertainties: {
      body: "Ammon appears in Joshua only as a boundary, in the notices describing the eastern edge of Gad and Reuben's allotments. The study draws no Ammonite area, because a frontier mentioned in passing is not a described territory, and the Late Bronze political organisation of the region east of the Jordan is poorly documented.",
      scriptureRefs: ["Joshua 12:2", "Joshua 13:10", "Joshua 13:25"],
      evidenceLabels: ["biblical-account"],
    },
  },

  {
    entityId: "edom",
    earlier: {
      body: "Edom is Esau's line, and the relationship is fraught from birth. Numbers 20 has the king of Edom refusing Israel passage, forcing a long detour that shapes the rest of the wilderness itinerary. Deuteronomy 2 again forbids taking their land, and Deuteronomy 23 nevertheless treats Edomites differently from Moabites and Ammonites in the assembly.",
      scriptureRefs: ["Genesis 25:24-26", "Numbers 20:14-21", "Deuteronomy 2:4-6", "Deuteronomy 23:7-8"],
      evidenceLabels: ["biblical-account"],
    },
    uncertainties: {
      body: "In Joshua, Edom functions as the southern reference point for Judah's boundary and nothing more. Whether there was an Edomite state at the time is disputed: the archaeological evidence for centralised organisation in the southern Transjordan is generally later, and some read the biblical king of Edom in Numbers as a retrojection. The study treats Edom as a directional marker on Judah's southern edge, which is how Joshua uses it.",
      scriptureRefs: ["Joshua 15:1", "Joshua 15:21"],
      evidenceLabels: ["disputed"],
    },
  },

  /* ================================================================ */
  /* Alliances                                                        */
  /* ================================================================ */
  {
    entityId: "southern-coalition",
    historical: {
      body: "A coalition of this kind is exactly what the Amarna correspondence would lead one to expect. Canaanite rulers had small forces and every incentive to combine against a shared threat, and the letters record both alliances and betrayals among them. That Jerusalem's ruler takes the initiative fits his position: the letters from Urusalim show a ruler who wrote repeatedly about pressure he could not handle alone.",
      citations: [
        {
          sourceId: "moran-amarna",
          supportedClaim:
            "Amarna letters document Canaanite rulers forming and breaking alliances in response to shared threats",
        },
      ],
      evidenceLabels: ["externally-attested"],
    },
    uncertainties: {
      body: "The coalition existed for one campaign. It had no capital, no territory and no continuing existence, and the study draws it as connectors between five named cities rather than as a shaded area, because a shaded area would assert a country that was never there. Of the five cities, the identifications vary in firmness, and Jarmuth and Eglon in particular are not securely placed.",
      scriptureRefs: ["Joshua 10:1-5"],
      evidenceLabels: ["biblical-account", "disputed"],
    },
  },

  {
    entityId: "northern-coalition",
    historical: {
      body: "Hazor's leadership of a northern grouping is plausible on the ground: it was by a wide margin the largest site in the region, an order of magnitude bigger than the southern towns, and it appears in Mesopotamian and Egyptian records as a place of consequence. Excavation has shown a substantial Late Bronze city with a monumental precinct, and a destruction of that city, which is dated differently by different excavators.",
      citations: [
        {
          sourceId: "ben-tor-hazor",
          supportedClaim:
            "Excavation shows Hazor as by far the largest Late Bronze centre in the northern region, with a monumental precinct",
        },
        {
          sourceId: "ben-tor-zuckerman-hazor",
          supportedClaim:
            "The dating of Hazor's Late Bronze destruction is disputed among its excavators",
        },
      ],
      evidenceLabels: ["externally-attested"],
    },
    uncertainties: {
      body: "As with the southern group, this was a campaign alliance rather than a polity, and it is drawn as connectors, not as territory. The destruction layer at Hazor is real and is genuinely debated as to date and cause; it does not by itself confirm the battle Joshua 11 narrates, and the study does not present it as doing so. Madon, Shimron and Achshaph are not securely identified.",
      scriptureRefs: ["Joshua 11:1-5"],
      evidenceLabels: ["biblical-account", "disputed"],
    },
  },

  {
    entityId: "gibeonite-league",
    historical: {
      body: "Gibeon is generally identified with el-Jib, on the strength of excavation and of jar handles inscribed with the name. The four towns Joshua names sit close together on the central plateau north of Jerusalem, which makes a local grouping entirely credible as geography. The excavated evidence for the Late Bronze period at the site is thinner than the biblical narrative's prominence would suggest, and that discrepancy has been discussed since the excavation was published.",
      citations: [
        {
          sourceId: "pritchard-gibeon",
          supportedClaim:
            "Inscribed jar handles from el-Jib support the identification of the site as Gibeon",
        },
        {
          sourceId: "blenkinsopp-gibeon",
          supportedClaim:
            "The Late Bronze remains at el-Jib are limited relative to Gibeon's prominence in the biblical narrative",
        },
      ],
      evidenceLabels: ["externally-attested"],
    },
    uncertainties: {
      body: "This is the one grouping in the book that is a treaty rather than a war coalition, and it survives the campaign, which makes it different in kind from the other two. The study draws it as a set of four linked towns. Of the four, Beeroth is not securely located, so the drawn set is incomplete and the interface says so where it appears.",
      scriptureRefs: ["Joshua 9:17"],
      evidenceLabels: ["biblical-account", "disputed"],
    },
    later: {
      body: "The treaty holds, and it keeps mattering. Saul's violation of it brings a famine in David's reign and a grim reckoning in 2 Samuel 21, where the text is explicit that the oath sworn in Joshua 9 was still binding generations later. Gibeon also becomes a major worship site before the temple is built, and it is where Solomon asks for wisdom.",
      scriptureRefs: ["2 Samuel 21:1-9", "1 Kings 3:4-15"],
      citations: [],
    },
  },

  /* ================================================================ */
  /* Tribes                                                           */
  /* ================================================================ */
  {
    entityId: "tribe-judah",
    earlier: {
      body: "Judah is the fourth son of Leah, and Genesis 49 gives him the longest and most emphatic of Jacob's blessings, with language about the sceptre not departing. He is also the brother who proposes selling Joseph and later offers himself as surety for Benjamin. Numbers 13 has Caleb representing Judah among the scouts, and Numbers 26 records the tribe as the largest at the second census.",
      scriptureRefs: ["Genesis 29:35", "Genesis 49:8-12", "Numbers 13:6", "Numbers 26:22"],
      evidenceLabels: ["biblical-account"],
    },
    uncertainties: {
      body: "Judah receives by far the most detailed treatment in Joshua: a full boundary description and a town list of more than a hundred names, arranged by district. The detail is why the allotment can be drawn with more confidence than most. It is still an assignment, not a survey. Many of the towns in the list are not securely identified, the boundary points are described rather than surveyed, and the same chapter records that Judah could not dislodge the Jebusites from Jerusalem, inside its own boundary.",
      scriptureRefs: ["Joshua 15:1-63", "Joshua 15:63"],
      evidenceLabels: ["biblical-account", "reconstruction"],
    },
    later: {
      body: "Judah becomes the southern kingdom and outlasts the north by well over a century. David and the dynasty that follows come from it, Jerusalem is its capital, and after the exile the name attaches to the whole returning community, which is where the word Jew comes from. The territorial framework Joshua 15 describes turns out to be the outline of a kingdom.",
      scriptureRefs: ["2 Samuel 2:4", "1 Kings 12:16-20", "2 Kings 17:18"],
      citations: [],
    },
  },

  {
    entityId: "tribe-ephraim",
    earlier: {
      body: "Ephraim is Joseph's younger son, and Genesis 48 makes a point of Jacob crossing his hands to give him the greater blessing over Manasseh. Joshua himself is an Ephraimite, which matters for reading the allotment chapters: the man distributing the land belongs to this tribe, and the text notes that his own inheritance at Timnath-serah is given to him last.",
      scriptureRefs: ["Genesis 48:8-20", "Numbers 13:8", "Joshua 19:49-50"],
      evidenceLabels: ["biblical-account"],
    },
    uncertainties: {
      body: "Ephraim's allotment is the central hill country north of Benjamin, and Joshua 16 describes its edges without closing them precisely. Joshua 17 then records that Ephraim did not drive out the Canaanites of Gezer, which sits inside the described area. The polygon on the map is a reading of a described boundary, not a line anyone walked, and it is an assignment rather than a record of what the tribe held.",
      scriptureRefs: ["Joshua 16:1-10", "Joshua 16:10"],
      evidenceLabels: ["biblical-account", "reconstruction"],
    },
    later: {
      body: "Ephraim becomes the dominant tribe of the northern kingdom, to the point that the prophets use the name for the north as a whole. Shiloh, Bethel and later Samaria all lie in or near its territory. The rivalry with Judah that the books of Kings narrate is visible in outline here, in two large adjacent allotments with the sanctuary in one of them.",
      scriptureRefs: ["1 Kings 12:25", "Hosea 5:3-5", "Isaiah 7:8-9"],
      citations: [],
    },
  },

  {
    entityId: "tribe-manasseh-west",
    uncertainties: {
      body: "Manasseh's western allotment is described loosely, and the chapter is candid about why. Joshua 17 records that Manasseh could not take the valley towns because the Canaanites there had iron chariots, and it names Beth-shan, Ibleam, Dor, Taanach and Megiddo among the places not taken. Those are precisely the towns controlling the Jezreel corridor. So the assigned area and the held area differ by the most strategically valuable ground in it, and the study shows the unpossessed towns on their own layer rather than letting a single polygon imply control.",
      scriptureRefs: ["Joshua 17:7-13", "Joshua 17:16-18"],
      evidenceLabels: ["biblical-account", "reconstruction"],
    },
  },

  {
    entityId: "tribe-manasseh-east",
    earlier: {
      body: "Half of Manasseh settles east of the Jordan before the crossing. Numbers 32 records the request from Reuben and Gad for the Transjordanian pasture and Moses' condition that they fight alongside the others first; Numbers 32 also notes the sons of Machir of Manasseh taking Gilead. Deuteronomy 3 assigns Bashan and the region of Og to this half-tribe.",
      scriptureRefs: ["Numbers 32:1-33", "Numbers 32:39-42", "Deuteronomy 3:13-15"],
      evidenceLabels: ["biblical-account"],
    },
    uncertainties: {
      body: "The eastern half-tribe's territory is described in the widest terms of any allotment, covering Bashan and parts of Gilead, and the same passages state that Geshur and Maacah within it were not dispossessed. The northern and eastern limits are not fixed by the text, and the study draws this as one of its most approximate areas, with the label visible and the edges soft.",
      scriptureRefs: ["Joshua 13:29-31", "Joshua 13:13"],
      evidenceLabels: ["biblical-account", "reconstruction"],
    },
  },

  {
    entityId: "tribe-benjamin",
    earlier: {
      body: "Benjamin is Jacob's youngest, born as Rachel dies, and the son whose safety drives the whole second half of the Joseph narrative. Genesis 49 describes the tribe in unexpectedly fierce terms, as a wolf that divides the spoil. Numbers 26 records it as one of the smaller tribes.",
      scriptureRefs: ["Genesis 35:16-20", "Genesis 44:18-34", "Genesis 49:27", "Numbers 26:41"],
      evidenceLabels: ["biblical-account"],
    },
    uncertainties: {
      body: "Benjamin's allotment is small and sits between Judah and Ephraim, which puts several of the book's most significant places inside it: Jericho, Gilgal, Bethel on its border, Gibeon, and Jerusalem. The boundary description in Joshua 18 is relatively detailed, but Jerusalem's position on the Judah-Benjamin line is described differently in the two chapters, and the city is in neither tribe's hands.",
      scriptureRefs: ["Joshua 18:11-28", "Joshua 15:8", "Judges 1:21"],
      evidenceLabels: ["biblical-account", "reconstruction"],
    },
    later: {
      body: "Saul, Israel's first king, is a Benjaminite, and so is Paul. The tribe is also nearly destroyed in the civil war that closes the book of Judges, which begins at Gibeah in its own territory. After the division of the kingdom Benjamin stays with Judah, which is how a tribe this small survives.",
      scriptureRefs: ["1 Samuel 9:1-2", "Judges 20:12-48", "1 Kings 12:21", "Romans 11:1"],
      citations: [],
    },
  },

  {
    entityId: "tribe-simeon",
    uncertainties: {
      body: "Simeon is the clearest case in the book of an allotment that is not a territory. Joshua 19 gives Simeon a list of towns and states that its inheritance lay within Judah's, because Judah's portion was too large. So there is no Simeonite area to draw, only a scattered set of towns inside another tribe's boundary, and the study draws it that way. Several of the towns are not securely located, so the set is incomplete.",
      scriptureRefs: ["Joshua 19:1-9"],
      evidenceLabels: ["biblical-account"],
    },
    later: {
      body: "Simeon effectively disappears as a distinct territorial tribe, absorbed into Judah. Genesis 49 had already spoken of Simeon and Levi being divided and scattered, in a context of rebuke over the violence at Shechem, and both tribes end up without land of their own, for very different reasons.",
      scriptureRefs: ["Genesis 49:5-7", "1 Chronicles 4:24-33"],
      citations: [],
    },
  },

  {
    entityId: "tribe-dan",
    uncertainties: {
      body: "Dan's allotment is the smallest and the most contested ground in the book: a strip on the coastal plain and the western Shephelah, hemmed in between Judah, Ephraim and the Philistine cities. Joshua 19 gives the town list and then adds, almost in passing, that the territory proved too little for them. The study draws the assigned strip and marks the Philistine cities as unpossessed, because the two facts belong together.",
      scriptureRefs: ["Joshua 19:40-48"],
      evidenceLabels: ["biblical-account", "reconstruction"],
    },
    later: {
      body: "Dan leaves. Judges 18 narrates the tribe sending scouts north, taking the quiet town of Laish at the far top of the country, and renaming it Dan, which is how the phrase from Dan to Beersheba comes to describe the length of the land. The same chapter is unsparing about how the migration was conducted. Samson, Israel's most famous Danite, belongs to the period when the tribe was still pressed against the Philistine border.",
      scriptureRefs: ["Judges 18:1-31", "Judges 13:2", "1 Samuel 3:20"],
      citations: [],
    },
  },

  {
    entityId: "tribe-reuben",
    earlier: {
      body: "Reuben is the firstborn, and Genesis takes the birthright away from him, citing the incident with Bilhah. He is also the brother who tries to save Joseph from the pit. Numbers 32 records Reuben and Gad asking for the Transjordanian grazing land, and Numbers 16 has the Reubenites Dathan and Abiram among those who challenge Moses.",
      scriptureRefs: ["Genesis 35:22", "Genesis 49:3-4", "Genesis 37:21-22", "Numbers 32:1-5"],
      evidenceLabels: ["biblical-account"],
    },
    uncertainties: {
      body: "Reuben's allotment lies east of the Jordan on the Moabite plateau, and its southern edge is described against Moabite territory that Israel was told not to take. The boundary language is less detailed than Judah's and the area is drawn approximately. Being east of the river also makes Reuben part of the problem chapter 22 is about: the tribes whose inheritance lies outside the land the others crossed into.",
      scriptureRefs: ["Joshua 13:15-23", "Joshua 22:1-9"],
      evidenceLabels: ["biblical-account", "reconstruction"],
    },
  },

  {
    entityId: "tribe-gad",
    earlier: {
      body: "Gad is Leah's servant Zilpah's son, and Genesis 49 gives the tribe a terse military blessing. Numbers 32 pairs Gad with Reuben in the request for the eastern pasture, and records the towns they rebuilt there before crossing to fight with the rest.",
      scriptureRefs: ["Genesis 30:10-11", "Genesis 49:19", "Numbers 32:34-36"],
      evidenceLabels: ["biblical-account"],
    },
    uncertainties: {
      body: "Gad's territory is described as lying in Gilead, between Reuben to the south and the eastern half of Manasseh to the north, with the Jordan as its western edge and the Ammonite frontier somewhere to the east. The eastern limit is not fixed, and the study draws the area approximately with the label visible.",
      scriptureRefs: ["Joshua 13:24-28"],
      evidenceLabels: ["biblical-account", "reconstruction"],
    },
    later: {
      body: "The Mesha stele, a ninth-century Moabite inscription, refers to men of Gad having long occupied territory the Moabite king claims to be taking back. It is one of the few extra-biblical references to an individual Israelite tribe, and it attests Gadite presence east of the Jordan centuries after Joshua. It says nothing about how or when that presence began.",
      scriptureRefs: ["Joshua 22:9"],
      citations: [
        {
          sourceId: "mesha-stele",
          supportedClaim:
            "A ninth-century Moabite inscription refers to the presence of men of Gad in Transjordanian territory",
        },
      ],
    },
  },

  {
    entityId: "tribe-levi",
    earlier: {
      body: "Levi's tribe is set apart rather than settled. Genesis 49 rebukes Simeon and Levi together for the violence at Shechem and speaks of them being scattered. Numbers then assigns Levi the care of the tabernacle in place of a land inheritance, and states repeatedly that Yahweh is their portion. Numbers 35 lays out the arrangement Joshua 21 carries out: towns with surrounding pasture, taken from the other tribes.",
      scriptureRefs: ["Genesis 49:5-7", "Numbers 18:20-24", "Numbers 35:1-8"],
      evidenceLabels: ["biblical-account"],
    },
    uncertainties: {
      body: "Levi has no allotment, and this is the tribe that most clearly shows why an allotment map is not a control map: forty-eight towns scattered across every other tribe's territory, deliberately not contiguous. The study draws it as a set of points, never as an area. Of the forty-eight, a number are not securely identified, so the drawn set is short of the full list and the interface says by how many. The historical question of when this arrangement was in force, and whether it describes a functioning system or an ideal, is debated.",
      scriptureRefs: ["Joshua 21:1-42", "Joshua 13:14", "Joshua 13:33"],
      citations: [
        {
          sourceId: "haran-levitical-cities",
          supportedClaim:
            "The historical status of the levitical city system, as functioning arrangement or ideal scheme, is debated",
        },
      ],
      evidenceLabels: ["biblical-account", "disputed"],
    },
  },

  /* ================================================================ */
  /* Regions                                                          */
  /* ================================================================ */
  {
    entityId: "region-shephelah",
    historical: {
      body: "The Shephelah is a belt of low chalk foothills between the coastal plain and the Judean hills, cut by a handful of west-east valleys. Those valleys are the only practical routes from the coast up into the highlands, which is why the towns guarding them, Lachish, Azekah, Beth-shemesh, Gezer, were fortified and repeatedly fought over across many centuries. The military logic of the region is a matter of terrain and has not changed.",
      citations: [
        {
          sourceId: "rainey-notley-sacred-bridge",
          supportedClaim:
            "The Shephelah valleys form the principal access routes from the coastal plain to the Judean highlands",
        },
        {
          sourceId: "aharoni-land-of-bible",
          supportedClaim:
            "Fortified towns in the Shephelah controlled the valley approaches and were contested across long periods",
        },
      ],
      evidenceLabels: ["externally-attested"],
    },
    uncertainties: {
      body: "This is a physiographic region with real physical edges, so it can be drawn more confidently than a people group. Its inland and seaward margins are still gradients rather than lines, and the polygon here is a reading of the terrain rather than a boundary anyone defined.",
      evidenceLabels: ["reconstruction"],
    },
  },

  {
    entityId: "region-jezreel-valley",
    historical: {
      body: "The Jezreel valley is the one broad, flat, well-watered corridor crossing the country, linking the coastal route to the Jordan valley and onward to Damascus. Its towns, Megiddo, Taanach, Beth-shan, Ibleam, sit where roads meet, and Egyptian records show sustained interest in exactly these places: Thutmose III's campaign against Megiddo is among the most fully documented battles of the period, and Beth-shan served as an Egyptian administrative centre. Flat ground also suits chariots, which is the practical fact behind Joshua 17's account of why the valley towns were not taken.",
      citations: [
        {
          sourceId: "thutmose-iii-lists",
          supportedClaim:
            "Egyptian records document sustained campaigning and administrative interest in the Jezreel corridor including Megiddo",
        },
        {
          sourceId: "rainey-notley-sacred-bridge",
          supportedClaim:
            "The Jezreel valley formed the principal east-west corridor linking the coastal route to the Jordan valley",
        },
      ],
      evidenceLabels: ["externally-attested"],
    },
    uncertainties: {
      body: "The valley floor has clear physical limits and is drawn with reasonable confidence. What the map must not do is shade it as Israelite: Joshua 17 lists its principal towns among those not taken, and the study keeps them on the remaining-land layer so the corridor reads as the gap it was.",
      scriptureRefs: ["Joshua 17:11-13", "Joshua 17:16"],
      evidenceLabels: ["biblical-account", "reconstruction"],
    },
    later: {
      body: "The valley keeps being the place battles happen. Deborah and Barak fight Sisera's chariots by the Kishon in it, Gideon musters near its edge, Saul dies on Mount Gilboa above it, and Josiah is killed at Megiddo. The name Armageddon in Revelation is generally understood to derive from the hill of Megiddo, which is to say from this corridor.",
      scriptureRefs: ["Judges 4:12-16", "1 Samuel 31:1-7", "2 Kings 23:29-30", "Revelation 16:16"],
      citations: [],
    },
  },
];
