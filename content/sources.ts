/**
 * Source registry.
 *
 * This is a closed list. Content files may only cite `sourceId`s that appear
 * here, and `scripts/validate-content.mjs` fails the build if they do not.
 * The purpose is blunt: it makes inventing a citation impossible to do quietly.
 *
 * Entries describe real, locatable publications. Where a work is part of a
 * long-running scholarly disagreement, the opposing entry is included too, so
 * the study can show the disagreement rather than pick a winner silently.
 *
 * URLs are included only where the resource is freely and stably available
 * (public-domain texts, publisher landing pages, digital object identifiers).
 * Their absence is not a comment on the source.
 */

import type { Source } from "./types";

export const SOURCES: Source[] = [
  /* ---------------------------------------------------------------- */
  /* Scripture                                                        */
  /* ---------------------------------------------------------------- */
  {
    id: "web-bible",
    kind: "scripture",
    author: "Michael Paul Johnson (editor)",
    title: "World English Bible",
    publication: "eBible.org (public domain revision of the American Standard Version, 1901)",
    year: "2020 update",
    url: "https://ebible.org/web/",
    note: "The bundled translation. Public domain, so the full text of Joshua and the cross-reference chapters ship with this study and work offline. Its renderings of the divine name ('Yahweh') and of archaic idiom differ from most modern translations; where wording matters for a point, the study says so.",
  },
  {
    id: "esv",
    kind: "scripture",
    author: "Translation Oversight Committee",
    title: "English Standard Version",
    publication: "Crossway, accessed through the api.esv.org passage service",
    year: "2016 text edition",
    url: "https://www.esv.org/",
    note: "The preferred reading translation in this study when an api.esv.org key is configured. The ESV text is copyrighted and is fetched on demand rather than bundled: Crossway's permissions do not extend to reproducing a complete book of the Bible, and the API is not a licence to build a local copy of the text.",
    standpoint: "Broadly Reformed evangelical translation committee; essentially literal translation philosophy",
  },

  /* ---------------------------------------------------------------- */
  /* Commentaries on Joshua                                           */
  /* ---------------------------------------------------------------- */
  {
    id: "hess-joshua",
    kind: "commentary",
    author: "Richard S. Hess",
    title: "Joshua: An Introduction and Commentary",
    publication: "Tyndale Old Testament Commentaries 6, Inter-Varsity Press",
    year: "1996",
    note: "Used throughout for philology, site identification, and the argument that the city lists and boundary descriptions reflect genuine second-millennium administrative forms.",
    standpoint: "Evangelical; attentive to Late Bronze Age comparative evidence",
  },
  {
    id: "woudstra-joshua",
    kind: "commentary",
    author: "Marten H. Woudstra",
    title: "The Book of Joshua",
    publication: "New International Commentary on the Old Testament, Eerdmans",
    year: "1981",
    note: "A Reformed exegetical commentary, cited for covenantal reading of the land promise and for the structure of the allotment chapters.",
    standpoint: "Reformed",
  },
  {
    id: "butler-joshua",
    kind: "commentary",
    author: "Trent C. Butler",
    title: "Joshua",
    publication: "Word Biblical Commentary 7, Word Books (revised two-volume edition, Zondervan, 2014)",
    year: "1983",
    note: "Cited for text-critical notes, the relationship between the Hebrew and Greek textual traditions of Joshua, and form-critical analysis of the lists.",
  },
  {
    id: "howard-joshua",
    kind: "commentary",
    author: "David M. Howard Jr.",
    title: "Joshua",
    publication: "New American Commentary 5, Broadman & Holman",
    year: "1998",
    note: "Cited for narrative structure, the theology of rest and land, and summaries of the conquest-model debate.",
    standpoint: "Evangelical",
  },
  {
    id: "hawk-joshua",
    kind: "commentary",
    author: "L. Daniel Hawk",
    title: "Joshua",
    publication: "Berit Olam: Studies in Hebrew Narrative and Poetry, Liturgical Press",
    year: "2000",
    note: "A literary reading, cited for characterisation, the framing of Rahab and the Gibeonites as outsiders who are brought inside, and the tensions the book leaves open.",
  },
  {
    id: "boling-wright-joshua",
    kind: "commentary",
    author: "Robert G. Boling and G. Ernest Wright",
    title: "Joshua: A New Translation with Notes and Commentary",
    publication: "Anchor Bible 6, Doubleday",
    year: "1982",
    note: "Cited for historical geography and for a reconstruction of the book's compositional history that differs from the evangelical commentaries used alongside it.",
  },
  {
    id: "calvin-joshua",
    kind: "commentary",
    author: "John Calvin",
    title: "Commentaries on the Book of Joshua",
    publication: "Translated by Henry Beveridge, Calvin Translation Society; public domain",
    year: "1854 translation of Calvin's final (1564) work",
    url: "https://ccel.org/ccel/calvin/calcom07",
    note: "Calvin's last commentary, written as he was dying. Cited where the study labels a specifically Reformed reading, including his treatment of Rahab's lie and of the Gibeonite oath.",
    standpoint: "Reformed, sixteenth century",
  },
  {
    id: "davis-joshua",
    kind: "commentary",
    author: "Dale Ralph Davis",
    title: "Joshua: No Falling Words",
    publication: "Focus on the Bible, Christian Focus Publications",
    year: "2000",
    note: "An expositional Reformed treatment, cited for pastoral and preaching-level application in the 'Why it matters' sections.",
    standpoint: "Reformed",
  },
  {
    id: "mcconville-williams-joshua",
    kind: "commentary",
    author: "J. Gordon McConville and Stephen N. Williams",
    title: "Joshua",
    publication: "Two Horizons Old Testament Commentary, Eerdmans",
    year: "2010",
    note: "Pairs an Old Testament scholar with a systematic theologian. Cited where the study distinguishes what the text claims from how Christian theology has handled the claim, particularly on warfare.",
  },
  {
    id: "pitkanen-joshua",
    kind: "commentary",
    author: "Pekka M. A. Pitkänen",
    title: "Joshua",
    publication: "Apollos Old Testament Commentary 6, Inter-Varsity Press",
    year: "2010",
    note: "Cited for comparison of Joshua's land-distribution material with ancient Near Eastern settlement and land-grant practice.",
  },
  {
    id: "creach-joshua",
    kind: "commentary",
    author: "Jerome F. D. Creach",
    title: "Joshua",
    publication: "Interpretation: A Bible Commentary for Teaching and Preaching, Westminster John Knox",
    year: "2003",
    note: "Cited for theological interpretation in a mainline Protestant register, and for its treatment of divine warfare as a problem for preaching.",
  },
  {
    id: "block-deuteronomy",
    kind: "commentary",
    author: "Daniel I. Block",
    title: "Deuteronomy",
    publication: "NIV Application Commentary, Zondervan",
    year: "2012",
    note: "Cited for the Deuteronomic background that Joshua presupposes: the blessing and curse ceremony, the law of the king, and the treatment of the nations.",
  },
  {
    id: "milgrom-numbers",
    kind: "commentary",
    author: "Jacob Milgrom",
    title: "Numbers",
    publication: "JPS Torah Commentary, Jewish Publication Society",
    year: "1990",
    note: "Cited for the Torah background to the cities of refuge, the Levitical cities, and the daughters of Zelophehad.",
    standpoint: "Jewish scholarship; comparative ancient Near Eastern law",
  },

  /* ---------------------------------------------------------------- */
  /* Historical geography and atlases                                 */
  /* ---------------------------------------------------------------- */
  {
    id: "rainey-notley-sacred-bridge",
    kind: "atlas",
    author: "Anson F. Rainey and R. Steven Notley",
    title: "The Sacred Bridge: Carta's Atlas of the Biblical World",
    publication: "Carta Jerusalem",
    year: "2006",
    note: "The primary geographical authority for this study. Cited for site identifications, Egyptian topographical lists, and the road network that explains why campaigns follow the routes they do.",
  },
  {
    id: "aharoni-land-of-bible",
    kind: "atlas",
    author: "Yohanan Aharoni",
    title: "The Land of the Bible: A Historical Geography",
    publication: "Revised and enlarged edition, translated by A. F. Rainey, Westminster Press",
    year: "1979",
    note: "Cited for regional terminology (Shephelah, Negev, Arabah), boundary reconstruction, and the administrative logic of the tribal lists.",
  },
  {
    id: "beitzel-moody-atlas",
    kind: "atlas",
    author: "Barry J. Beitzel",
    title: "The New Moody Atlas of the Bible",
    publication: "Moody Publishers",
    year: "2009",
    note: "Cited for terrain, rainfall, and route geography, and for cartographic conventions in depicting uncertain locations.",
    standpoint: "Evangelical",
  },
  {
    id: "rasmussen-zondervan-atlas",
    kind: "atlas",
    author: "Carl G. Rasmussen",
    title: "Zondervan Atlas of the Bible",
    publication: "Revised edition, Zondervan",
    year: "2010",
    note: "Cited for regional descriptions and for photographs of the landscape referenced in the geography panels.",
  },
  {
    id: "curtis-oxford-bible-atlas",
    kind: "atlas",
    author: "Adrian Curtis (editor)",
    title: "Oxford Bible Atlas",
    publication: "Fourth edition, Oxford University Press",
    year: "2007",
    note: "Cited as a mainstream reference point where it depicts a site or boundary more cautiously than the evangelical atlases.",
  },

  /* ---------------------------------------------------------------- */
  /* Archaeology: sites                                               */
  /* ---------------------------------------------------------------- */
  {
    id: "kenyon-digging-up-jericho",
    kind: "archaeology",
    author: "Kathleen M. Kenyon",
    title: "Digging Up Jericho",
    publication: "Ernest Benn, London",
    year: "1957",
    note: "Kenyon's excavation of Tell es-Sultan established the stratigraphy still under discussion. She concluded that the great fortifications belong to the Middle Bronze Age and that Late Bronze occupation was slight, which is the crux of the Jericho debate.",
  },
  {
    id: "bienkowski-jericho-lb",
    kind: "archaeology",
    author: "Piotr Bienkowski",
    title: "Jericho in the Late Bronze Age",
    publication: "Aris & Phillips, Warminster",
    year: "1986",
    note: "The standard technical statement of the case that Jericho was largely unoccupied in the Late Bronze Age. Cited as the counterweight to Wood.",
  },
  {
    id: "wood-jericho-bar",
    kind: "journal-article",
    author: "Bryant G. Wood",
    title: "Did the Israelites Conquer Jericho? A New Look at the Archaeological Evidence",
    publication: "Biblical Archaeology Review 16, no. 2, pages 44-58",
    year: "1990",
    note: "Argues that Kenyon's 'Middle Bronze' destruction should be redated to the end of the Late Bronze I period, which would align it with a fifteenth-century conquest. Cited as one side of an unresolved dispute, not as the consensus.",
    standpoint: "Evangelical; argues for an early (fifteenth-century) conquest date",
  },
  {
    id: "bienkowski-bar-reply",
    kind: "journal-article",
    author: "Piotr Bienkowski",
    title: "Jericho Was Destroyed in the Middle Bronze Age, Not the Late Bronze Age",
    publication: "Biblical Archaeology Review 16, no. 5",
    year: "1990",
    note: "The published reply to Wood in the same magazine. Cited alongside Wood so the reader sees the exchange rather than one half of it.",
  },
  {
    id: "nigro-tell-es-sultan",
    kind: "archaeology",
    author: "Lorenzo Nigro and the Rome 'La Sapienza' – MOTA-DACH Expedition",
    title: "Excavation and restoration reports, Tell es-Sultan / ancient Jericho",
    publication: "Rome 'La Sapienza' University with the Palestinian Ministry of Tourism and Antiquities",
    year: "1997 onward",
    note: "The current long-running excavation at the site. Cited for the continuing work and for the site's Neolithic and Bronze Age significance independent of the conquest question.",
  },
  {
    id: "callaway-ai",
    kind: "archaeology",
    author: "Joseph A. Callaway",
    title: "Excavation reports on et-Tell (proposed site of Ai)",
    publication: "Bulletin of the American Schools of Oriental Research and related site reports",
    year: "1964-1976 seasons",
    note: "Callaway excavated et-Tell and concluded it had no Late Bronze Age occupation, creating the central difficulty for identifying it with the Ai of Joshua 7-8.",
  },
  {
    id: "stripling-maqatir",
    kind: "archaeology",
    author: "Scott Stripling, Bryant G. Wood and the Associates for Biblical Research excavation team",
    title: "Excavations at Khirbet el-Maqatir, proposed as an alternative site for Ai",
    publication: "Associates for Biblical Research; site reports and interim publications",
    year: "1995-2016 seasons",
    note: "Proposes a different location for Ai in order to resolve the et-Tell problem. Cited as a minority proposal advanced by researchers committed to an early conquest date, and labelled disputed.",
    standpoint: "Evangelical; argues for an early conquest date",
  },
  {
    id: "pritchard-gibeon",
    kind: "archaeology",
    author: "James B. Pritchard",
    title: "Gibeon: Where the Sun Stood Still. The Discovery of the Biblical City",
    publication: "Princeton University Press",
    year: "1962",
    note: "Excavation of el-Jib, including the jar handles inscribed gb'n that secure the identification of Gibeon. Pritchard also found the Late Bronze evidence thinner than expected, which the study reports.",
  },
  {
    id: "blenkinsopp-gibeon",
    kind: "reference-work",
    author: "Joseph Blenkinsopp",
    title: "Gibeon and Israel: The Role of Gibeon and the Gibeonites in the Political and Religious History of Early Israel",
    publication: "Society for Old Testament Study Monograph Series, Cambridge University Press",
    year: "1972",
    note: "Cited for the long afterlife of the Gibeonites in Israel's history and for the legal standing of their treaty.",
  },
  {
    id: "yadin-hazor",
    kind: "archaeology",
    author: "Yigael Yadin",
    title: "Hazor: The Rediscovery of a Great Citadel of the Bible",
    publication: "Random House",
    year: "1975",
    note: "Yadin's excavations established Hazor's exceptional size (roughly 200 acres including the lower city) and identified a violent destruction of the Late Bronze city.",
  },
  {
    id: "ben-tor-hazor",
    kind: "archaeology",
    author: "Amnon Ben-Tor",
    title: "Hazor: Canaanite Metropolis, Israelite City",
    publication: "Israel Exploration Society and Biblical Archaeology Society",
    year: "2016",
    note: "The renewed excavations. Cited for the scale of Hazor, the burning of the Late Bronze palace, and Ben-Tor's argument about who was responsible, which remains debated.",
    standpoint: "Israeli archaeology; accepts an Israelite agency for the destruction, against other reconstructions",
  },
  {
    id: "ben-tor-zuckerman-hazor",
    kind: "journal-article",
    author: "Amnon Ben-Tor and Sharon Zuckerman",
    title: "Hazor at the End of the Late Bronze Age: Back to Basics",
    publication: "Bulletin of the American Schools of Oriental Research 364",
    year: "2011",
    note: "Two excavators of the same site reaching different conclusions about who destroyed Hazor. Cited precisely because it shows that destruction layers do not identify their authors.",
  },
  {
    id: "ussishkin-lachish",
    kind: "archaeology",
    author: "David Ussishkin",
    title: "The Renewed Archaeological Excavations at Lachish (1973-1994)",
    publication: "Institute of Archaeology, Tel Aviv University",
    year: "2004",
    note: "Cited for Lachish's importance as a southern Shephelah centre and for its Late Bronze destruction sequence.",
  },
  {
    id: "wright-shechem",
    kind: "archaeology",
    author: "G. Ernest Wright",
    title: "Shechem: The Biography of a Biblical City",
    publication: "McGraw-Hill",
    year: "1965",
    note: "Excavation of Tell Balata. Cited for Shechem's fortress-temple, its long covenantal associations, and the absence of any reported battle for the city in Joshua.",
  },
  {
    id: "finkelstein-shiloh",
    kind: "archaeology",
    author: "Israel Finkelstein (editor)",
    title: "Shiloh: The Archaeology of a Biblical Site",
    publication: "Institute of Archaeology, Tel Aviv University",
    year: "1993",
    note: "Cited for Shiloh's occupation history and its emergence as a central cult site in the Iron Age I period.",
  },
  {
    id: "zertal-ebal",
    kind: "journal-article",
    author: "Adam Zertal",
    title: "Has Joshua's Altar Been Found on Mt. Ebal?",
    publication: "Biblical Archaeology Review 11, no. 1",
    year: "1985",
    note: "Zertal identified a large stone structure on Mount Ebal as an Israelite altar connected with Joshua 8. Cited as a disputed proposal.",
  },
  {
    id: "kempinski-ebal",
    kind: "journal-article",
    author: "Aharon Kempinski",
    title: "Joshua's Altar: An Iron Age I Watchtower",
    publication: "Biblical Archaeology Review 12, no. 1",
    year: "1986",
    note: "The published rebuttal to Zertal, reading the same structure as a watchtower. Cited so the Mount Ebal structure is presented as contested rather than settled.",
  },

  /* ---------------------------------------------------------------- */
  /* Archaeology and history: the settlement of Israel                */
  /* ---------------------------------------------------------------- */
  {
    id: "finkelstein-settlement",
    kind: "archaeology",
    author: "Israel Finkelstein",
    title: "The Archaeology of the Israelite Settlement",
    publication: "Israel Exploration Society",
    year: "1988",
    note: "The influential survey-based argument that early Israel emerged largely from within Canaan, with highland settlement expanding in Iron Age I. Cited as a leading alternative to a military-conquest reconstruction.",
    standpoint: "Tel Aviv school; sceptical of the conquest as a historical event",
  },
  {
    id: "dever-early-israelites",
    kind: "archaeology",
    author: "William G. Dever",
    title: "Who Were the Early Israelites and Where Did They Come From?",
    publication: "Eerdmans",
    year: "2003",
    note: "Argues for indigenous origins with some outside element, and against both a large-scale conquest and a purely literary Israel. Cited for the middle ground in the settlement debate.",
  },
  {
    id: "mazar-archaeology-land",
    kind: "archaeology",
    author: "Amihai Mazar",
    title: "Archaeology of the Land of the Bible, 10,000-586 BCE",
    publication: "Anchor Bible Reference Library, Doubleday",
    year: "1990",
    note: "Standard handbook, cited for Late Bronze and Iron Age I material culture, settlement patterns, and city scale.",
  },
  {
    id: "stager-forging-identity",
    kind: "journal-article",
    author: "Lawrence E. Stager",
    title: "Forging an Identity: The Emergence of Ancient Israel",
    publication: "In The Oxford History of the Biblical World, edited by Michael D. Coogan, Oxford University Press",
    year: "1998",
    note: "Cited for highland village society, family and clan structure, and the agricultural realities behind the allotment chapters.",
  },
  {
    id: "naaman-conquest",
    kind: "journal-article",
    author: "Nadav Na'aman",
    title: "The Conquest of Canaan in the Book of Joshua and in History",
    publication: "In From Nomadism to Monarchy, edited by Israel Finkelstein and Nadav Na'aman, Israel Exploration Society",
    year: "1994",
    note: "Cited for the relationship between the Amarna-period political landscape and the picture of Canaan in Joshua.",
  },
  {
    id: "provan-long-longman",
    kind: "reference-work",
    author: "Iain W. Provan, V. Philips Long and Tremper Longman III",
    title: "A Biblical History of Israel",
    publication: "Westminster John Knox Press",
    year: "2003",
    note: "Cited for methodology: how historians weigh biblical testimony alongside material evidence, and why 'no evidence' and 'evidence against' are different claims.",
  },
  {
    id: "finkelstein-silberman-unearthed",
    kind: "archaeology",
    author: "Israel Finkelstein and Neil Asher Silberman",
    title: "The Bible Unearthed: Archaeology's New Vision of Ancient Israel and the Origin of Its Sacred Texts",
    publication: "Free Press",
    year: "2001",
    note: "A popular statement of the sceptical position, cited where the study represents that view in its own words.",
    standpoint: "Sceptical of the historicity of the conquest narratives",
  },

  /* ---------------------------------------------------------------- */
  /* Primary ancient texts                                            */
  /* ---------------------------------------------------------------- */
  {
    id: "moran-amarna",
    kind: "primary-ancient-text",
    author: "William L. Moran (translator and editor)",
    title: "The Amarna Letters",
    publication: "Johns Hopkins University Press",
    year: "1992",
    note: "Diplomatic correspondence between Egypt and Canaanite rulers in the fourteenth century BC. The standard English edition. Cited for the city-state political structure of Canaan, the language rulers used of each other, and the 'apiru problem.",
  },
  {
    id: "merneptah-stele",
    kind: "primary-ancient-text",
    author: "Egyptian royal inscription, reign of Merneptah",
    title: "The Merneptah Stele (Israel Stela), Egyptian Museum, Cairo, JE 31408",
    publication: "Translation in The Context of Scripture 2.6; also Ancient Near Eastern Texts, pages 376-378",
    year: "late thirteenth century BC",
    note: "The earliest known extra-biblical mention of Israel, written with a determinative usually read as designating a people rather than a settled city-state. Cited as evidence that a group called Israel was in Canaan by this point, and for nothing more specific than that.",
  },
  {
    id: "cos",
    kind: "primary-ancient-text",
    author: "William W. Hallo and K. Lawson Younger Jr. (editors)",
    title: "The Context of Scripture: Canonical Compositions, Monumental Inscriptions and Archival Documents from the Biblical World",
    publication: "Three volumes, Brill",
    year: "1997-2002",
    note: "The standard modern collection of ancient Near Eastern texts in translation. Used to locate the primary sources cited in this study.",
  },
  {
    id: "anet",
    kind: "primary-ancient-text",
    author: "James B. Pritchard (editor)",
    title: "Ancient Near Eastern Texts Relating to the Old Testament",
    publication: "Third edition with supplement, Princeton University Press",
    year: "1969",
    note: "Older standard collection, still the most widely available reference for many Egyptian and Mesopotamian texts referred to here.",
  },
  {
    id: "mesha-stele",
    kind: "primary-ancient-text",
    author: "Moabite royal inscription of King Mesha",
    title: "The Mesha Stele (Moabite Stone), Musée du Louvre, AO 5066",
    publication: "Translation in The Context of Scripture 2.23",
    year: "ninth century BC",
    note: "A non-Israelite king describing his own campaigns in the same idiom of total devastation used in Joshua, including the term usually rendered 'devote to destruction'. Cited to show that this language is a regional convention of war reporting, not a uniquely biblical one.",
  },
  {
    id: "thutmose-iii-lists",
    kind: "primary-ancient-text",
    author: "Egyptian royal inscriptions, reign of Thutmose III",
    title: "Topographical lists of Canaanite and Syrian towns, Karnak",
    publication: "Discussed in Rainey and Notley, The Sacred Bridge; translations in Ancient Near Eastern Texts",
    year: "fifteenth century BC",
    note: "Egyptian lists naming towns in Canaan, several of which appear in Joshua. Cited for the independent existence of places and for Egypt's administrative reach.",
  },

  /* ---------------------------------------------------------------- */
  /* Conquest, warfare, and historiography                            */
  /* ---------------------------------------------------------------- */
  {
    id: "younger-conquest-accounts",
    kind: "reference-work",
    author: "K. Lawson Younger Jr.",
    title: "Ancient Conquest Accounts: A Study in Ancient Near Eastern and Biblical History Writing",
    publication: "Journal for the Study of the Old Testament Supplement Series 98, Sheffield Academic Press",
    year: "1990",
    note: "Central to this study's handling of destruction language. Younger shows that Assyrian, Egyptian, Hittite and Hebrew conquest reports share a common rhetorical repertoire, including hyperbolic totality, so 'all' and 'left none remaining' are conventional and must be read accordingly.",
  },
  {
    id: "kitchen-reliability",
    kind: "reference-work",
    author: "Kenneth A. Kitchen",
    title: "On the Reliability of the Old Testament",
    publication: "Eerdmans",
    year: "2003",
    note: "An Egyptologist's argument that Joshua describes raids and disabling strikes rather than occupation, and that the book's own summaries must be read against its admissions of unconquered territory.",
    standpoint: "Evangelical; argues for substantial historical reliability",
  },
  {
    id: "weinfeld-promise-land",
    kind: "reference-work",
    author: "Moshe Weinfeld",
    title: "The Promise of the Land: The Inheritance of the Land of Canaan by the Israelites",
    publication: "University of California Press",
    year: "1993",
    note: "Cited for the ideology of land grant and inheritance, and for comparison with ancient Near Eastern land-transfer traditions.",
  },
  {
    id: "hillers-covenant",
    kind: "reference-work",
    author: "Delbert R. Hillers",
    title: "Covenant: The History of a Biblical Idea",
    publication: "Johns Hopkins University Press",
    year: "1969",
    note: "Cited for treaty form, oath-taking, and why a sworn agreement bound Israel to the Gibeonites even when obtained dishonestly.",
  },
  {
    id: "mendenhall-law-covenant",
    kind: "reference-work",
    author: "George E. Mendenhall",
    title: "Law and Covenant in Israel and the Ancient Near East",
    publication: "Biblical Colloquium, Pittsburgh",
    year: "1955",
    note: "The classic comparison of Israelite covenant with Hittite suzerain-vassal treaty structure. Cited for the covenant form behind Joshua 24.",
  },
  {
    id: "haran-levitical-cities",
    kind: "journal-article",
    author: "Menahem Haran",
    title: "Studies in the Account of the Levitical Cities",
    publication: "Journal of Biblical Literature 80",
    year: "1961",
    note: "Cited for the character of the Levitical city lists and the scholarly question of whether they describe a functioning system, an ideal, or a later arrangement.",
  },
  {
    id: "havrelock-river-jordan",
    kind: "reference-work",
    author: "Rachel Havrelock",
    title: "River Jordan: The Mythology of a Dividing Line",
    publication: "University of Chicago Press",
    year: "2011",
    note: "Cited for the Jordan as a boundary that both joins and separates, and for the significance of the eastern tribes' position in Joshua 22.",
  },
  {
    id: "mitchell-together-in-land",
    kind: "reference-work",
    author: "Gordon Mitchell",
    title: "Together in the Land: A Reading of the Book of Joshua",
    publication: "Journal for the Study of the Old Testament Supplement Series 134, Sheffield Academic Press",
    year: "1993",
    note: "Cited for the observation that Joshua holds together commands to destroy and narratives of coexistence, and declines to resolve the tension.",
  },
  {
    id: "bird-harlot-heroine",
    kind: "journal-article",
    author: "Phyllis A. Bird",
    title: "The Harlot as Heroine: Narrative Art and Social Presupposition in Three Old Testament Texts",
    publication: "Semeia 46",
    year: "1989",
    note: "Cited for how Rahab's occupation functions in the narrative and for the social position of such a woman in her city.",
  },

  /* ---------------------------------------------------------------- */
  /* The long day                                                     */
  /* ---------------------------------------------------------------- */
  {
    id: "walton-celestial-omens",
    kind: "journal-article",
    author: "John H. Walton",
    title: "Joshua 10:12-15 and Mesopotamian Celestial Omen Texts",
    publication: "In Faith, Tradition and History: Old Testament Historiography in Its Near Eastern Context, edited by A. R. Millard, J. K. Hoffmeier and D. W. Baker, Eisenbrauns",
    year: "1994",
    note: "Proposes that the language of sun and moon in Joshua 10 draws on the vocabulary of celestial omens, so the request concerns a sign of victory rather than the mechanics of the solar system.",
  },
  {
    id: "humphreys-waddington-eclipse",
    kind: "journal-article",
    author: "Colin J. Humphreys and W. Graeme Waddington",
    title: "Solar eclipse of 1207 BC helps to date pharaohs",
    publication: "Astronomy & Geophysics 58, issue 5, pages 5.39-5.42",
    year: "2017",
    note: "Proposes that Joshua 10 records an annular solar eclipse. Cited as a specific scientific proposal that depends on a particular translation of two Hebrew verbs and on a late chronology; presented as one option among several, not as demonstration.",
  },

  /* ---------------------------------------------------------------- */
  /* Ethics of the conquest                                           */
  /* ---------------------------------------------------------------- */
  {
    id: "copan-moral-monster",
    kind: "theology",
    author: "Paul Copan",
    title: "Is God a Moral Monster? Making Sense of the Old Testament God",
    publication: "Baker Books",
    year: "2011",
    note: "A defence that reads the conquest commands as limited, hyperbolically expressed, and directed at cultic structures rather than at exhaustive killing. Cited as a major conservative apologetic option, with its difficulties noted.",
    standpoint: "Evangelical apologetics",
  },
  {
    id: "wright-god-i-dont-understand",
    kind: "theology",
    author: "Christopher J. H. Wright",
    title: "The God I Don't Understand: Reflections on Tough Questions of Faith",
    publication: "Zondervan",
    year: "2008",
    note: "Cited for the argument that the conquest is presented as a unique and bounded act of judgement within the biblical storyline, and for Wright's refusal to make it comfortable.",
    standpoint: "Evangelical",
  },
  {
    id: "wright-ot-ethics",
    kind: "theology",
    author: "Christopher J. H. Wright",
    title: "Old Testament Ethics for the People of God",
    publication: "Inter-Varsity Press",
    year: "2004",
    note: "Cited for land ethics, the economics of inheritance, and why the land laws resist being turned into a template for modern territorial claims.",
  },
  {
    id: "wolterstorff-reading-joshua",
    kind: "theology",
    author: "Nicholas Wolterstorff",
    title: "Reading Joshua",
    publication: "In Divine Evil? The Moral Character of the God of Abraham, edited by Michael Bergmann, Michael J. Murray and Michael C. Rea, Oxford University Press",
    year: "2011",
    note: "Argues on literary grounds that Joshua's totalising battle reports are a stylised genre set within a book that elsewhere assumes the Canaanites remain. Cited by a Reformed philosopher, which the study notes.",
    standpoint: "Reformed philosophical theology",
  },
  {
    id: "earl-joshua-delusion",
    kind: "theology",
    author: "Douglas S. Earl",
    title: "The Joshua Delusion? Rethinking Genocide in the Bible",
    publication: "Cascade Books",
    year: "2010",
    note: "Reads Joshua primarily as figurative and identity-forming literature rather than as military reportage. Cited as a distinct option, with the objection that it may concede too much of the text's historical claim.",
  },
  {
    id: "seibert-disturbing",
    kind: "theology",
    author: "Eric A. Seibert",
    title: "Disturbing Divine Behavior: Troubling Old Testament Images of God",
    publication: "Fortress Press",
    year: "2009",
    note: "Argues that some Old Testament portrayals of God should be critiqued rather than defended. Cited so the study represents a position it does not adopt, rather than describing it second-hand.",
    standpoint: "Critical of traditional harmonising approaches",
  },
  {
    id: "walton-lost-world-conquest",
    kind: "theology",
    author: "John H. Walton and J. Harvey Walton",
    title: "The Lost World of the Israelite Conquest: Covenant, Retribution, and the Fate of the Canaanites",
    publication: "IVP Academic",
    year: "2017",
    note: "Argues the conquest is about removing identity and cultic order from the land rather than punishing individual moral guilt. Cited for its reframing of the herem and for its disagreements with Copan.",
  },
  {
    id: "trimm-destruction-canaanites",
    kind: "theology",
    author: "Charlie Trimm",
    title: "The Destruction of the Canaanites: God, Genocide, and Biblical Interpretation",
    publication: "Eerdmans",
    year: "2022",
    note: "A recent survey that lays out the main Christian approaches without advocating one. The study's 'Difficult questions' pages follow its practice of stating each option's strengths and costs.",
  },

  /* ---------------------------------------------------------------- */
  /* Biblical and systematic theology                                 */
  /* ---------------------------------------------------------------- */
  {
    id: "vos-biblical-theology",
    kind: "theology",
    author: "Geerhardus Vos",
    title: "Biblical Theology: Old and New Testaments",
    publication: "Eerdmans",
    year: "1948",
    note: "Cited for the progressive unfolding of revelation and for the land as a stage in redemptive history. A foundational Reformed biblical-theological source.",
    standpoint: "Reformed",
  },
  {
    id: "robertson-christ-of-covenants",
    kind: "theology",
    author: "O. Palmer Robertson",
    title: "The Christ of the Covenants",
    publication: "Presbyterian and Reformed",
    year: "1980",
    note: "Cited for covenant structure and continuity, particularly where the study labels a Reformed covenantal reading of the land promise.",
    standpoint: "Reformed",
  },
  {
    id: "bavinck-dogmatics",
    kind: "theology",
    author: "Herman Bavinck",
    title: "Reformed Dogmatics",
    publication: "Four volumes, edited by John Bolt, translated by John Vriend, Baker Academic",
    year: "2003-2008 English edition",
    note: "Cited for the doctrine of providence and for divine accommodation in revelation, where the study discusses how God is depicted acting in warfare.",
    standpoint: "Reformed (Dutch)",
  },
  {
    id: "westminster-confession",
    kind: "theology",
    author: "Westminster Assembly",
    title: "The Westminster Confession of Faith",
    publication: "Public domain",
    year: "1646",
    note: "Cited where the study names a confessional Reformed position, for instance on oaths and vows, which bears directly on the Gibeonite treaty.",
    standpoint: "Reformed confessional standard",
  },
  {
    id: "goldsworthy-according-to-plan",
    kind: "theology",
    author: "Graeme Goldsworthy",
    title: "According to Plan: The Unfolding Revelation of God in the Bible",
    publication: "Inter-Varsity Press",
    year: "1991",
    note: "Cited for the shape of the biblical storyline and for distinguishing typological fulfilment from direct prediction.",
    standpoint: "Evangelical biblical theology",
  },

  /* ---------------------------------------------------------------- */
  /* Reference works                                                  */
  /* ---------------------------------------------------------------- */
  {
    id: "anchor-bible-dictionary",
    kind: "encyclopedia",
    author: "David Noel Freedman (editor)",
    title: "The Anchor Bible Dictionary",
    publication: "Six volumes, Doubleday",
    year: "1992",
    note: "General reference for site entries, personal names, and people groups, used to check identifications against a standard non-confessional work.",
  },
  {
    id: "eerdmans-dictionary",
    kind: "encyclopedia",
    author: "David Noel Freedman (editor)",
    title: "Eerdmans Dictionary of the Bible",
    publication: "Eerdmans",
    year: "2000",
    note: "One-volume reference used for concise entries on places and terms.",
  },
  {
    id: "dotp-historical-books",
    kind: "encyclopedia",
    author: "Bill T. Arnold and H. G. M. Williamson (editors)",
    title: "Dictionary of the Old Testament: Historical Books",
    publication: "Inter-Varsity Press",
    year: "2005",
    note: "Cited for article-length treatments of conquest, herem, land, and the composition of Joshua.",
  },
  {
    id: "new-bible-dictionary",
    kind: "encyclopedia",
    author: "I. Howard Marshall, A. R. Millard, J. I. Packer and D. J. Wiseman (editors)",
    title: "New Bible Dictionary",
    publication: "Third edition, Inter-Varsity Press",
    year: "1996",
    note: "Standard evangelical one-volume reference, used for cross-checking names and places.",
  },
];

/* ------------------------------------------------------------------ */
/* Lookup helpers                                                     */
/* ------------------------------------------------------------------ */

export const SOURCE_BY_ID: Record<string, Source> = Object.fromEntries(
  SOURCES.map((s) => [s.id, s])
);

export const SOURCE_IDS: string[] = SOURCES.map((s) => s.id);

export function getSource(id: string): Source | undefined {
  return SOURCE_BY_ID[id];
}

/** Human-readable short form for inline citation chips. */
export function shortCitation(id: string): string {
  const s = SOURCE_BY_ID[id];
  if (!s) return id;
  const surname = s.author.split(/,| and |\(/)[0].trim().split(/\s+/).slice(-1)[0];
  return s.year ? `${surname} ${s.year.replace(/[^0-9].*$/, "")}` : surname;
}

/**
 * How this study describes its own limits. Surfaced on /sources so the
 * methodology is visible rather than implied.
 */
export const METHODOLOGY_NOTES: {
  id: string;
  title: string;
  body: string;
}[] = [
  {
    id: "what-this-is",
    title: "What this study is, and is not",
    body:
      "This is a curated study companion written to help a reader work through Joshua carefully. It is not a critical commentary, and it is not a substitute for one. Where a question is genuinely open, the aim is to show you the shape of the disagreement and point you to where it is argued properly, rather than to settle it for you.",
  },
  {
    id: "citation-discipline",
    title: "How citations work here",
    body:
      "Every citation points to an entry in a fixed source registry, and each one names the specific claim it supports. A build-time check refuses to accept a citation that does not resolve to a real registry entry. Scripture references are the foundation; scholarly sources are used for anything the text itself does not say. Where a statement is my own synthesis or judgement, it is not dressed up with a citation it does not have.",
  },
  {
    id: "evidence-labels-note",
    title: "Why claims carry labels",
    body:
      "Labels can and do coexist. A city may be externally attested while a particular event narrated there is known only from the biblical account. Identifying a site does not confirm what happened at it, and a destruction layer does not carry a signature identifying who caused it. The labels exist to keep those distinctions visible instead of letting them blur.",
  },
  {
    id: "dates-note",
    title: "Dates and chronology",
    body:
      "The study keeps biblical sequence separate from proposed historical dates. Joshua's own order of events is reported as the book gives it. Absolute dates appear only where a reconstruction is named, because the date of the events in Joshua depends on which chronology you adopt, and that remains disputed. Where the evidence does not justify a figure, none is offered.",
  },
  {
    id: "translation-note",
    title: "Translations used",
    body:
      "The English Standard Version is the preferred reading text and is fetched on demand from Crossway's passage service. It is not stored with the study, because permission to quote the ESV does not extend to reproducing a complete book of the Bible. The World English Bible, which is public domain, is bundled in full and is what you read offline or without an API key. The two differ in places, and where the difference matters to a point being made, the study says which reading it is following.",
  },
  {
    id: "theological-standpoint",
    title: "Theological standpoint",
    body:
      "The orientation is Christian and broadly Reformed. Other Christian readings are represented in their own terms, and on the hardest questions the study includes positions it does not hold. Jewish interpretation of these chapters has its own long history, which this study touches only occasionally and does not attempt to represent adequately.",
  },
];
