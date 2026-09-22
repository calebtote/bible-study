/**
 * People timeline.
 *
 * This file carries narrative position only. `narrativeOrder` is a sort key for
 * the story's sequence and is deliberately not a date: no absolute year appears
 * anywhere in this file, and none may be added. Absolute dates belong only to
 * `HistoricalAnchor` records, which must name the chronology they assume.
 *
 * `sequenceCertainty` is the honest part, and the rendered timeline is built to
 * show the difference:
 *  - "explicit-sequence" means the text states or plainly implies the order
 *    ("after the death of Moses", "then Joshua built an altar").
 *  - "inferred-sequence" means the order is a reasonable reading but the text
 *    does not assert it, usually because a passage says only "at that time".
 *  - "undated" means the text gives no position at all. Summary statements,
 *    "to this day" notes, registers of names, and later cross-references sit here.
 *
 * Anything from Judges onward, and anything in the New Testament, carries
 * `spoiler: true` and is hidden in spoiler-free mode.
 *
 * Links point only at targets that certainly exist: whole chapters for events
 * inside Joshua, and `BEFORE_STAGE_IDS` for everything before it. Chapter
 * milestones are authored elsewhere and their slugs are not guessed here.
 */

import type { TimelineEvent } from "../types";

export const TIMELINE_EVENTS: TimelineEvent[] = [
  /* ================================================================ */
  /* Patriarchs                                                       */
  /* ================================================================ */
  {
    id: "abraham-leaves-the-household-beyond-the-river",
    label: "Abraham is taken from beyond the River",
    description:
      "Joshua's closing speech begins further back than Egypt. It says that Israel's fathers, Terah among them, lived beyond the Euphrates and served other gods, and that God took Abraham from there and led him through Canaan.",
    scriptureRefs: ["Joshua 24:2-3", "Genesis 12:1-5"],
    sequenceCertainty: "explicit-sequence",
    narrativeOrder: 10,
    entityIds: ["abraham", "terah", "joshua"],
    link: { kind: "before-stage", stageId: "abraham-and-the-promises" },
    era: "patriarchs",
  },
  {
    id: "abraham-promised-the-land-of-canaan",
    label: "The land is promised to Abraham's offspring",
    description:
      "At Shechem, and again after Lot separates from him, Abraham is told that the land he is walking through will belong to his offspring. He owns none of it at the time; the promise is the only title he holds.",
    scriptureRefs: ["Genesis 12:6-7", "Genesis 13:14-17", "Genesis 15:18"],
    sequenceCertainty: "explicit-sequence",
    narrativeOrder: 20,
    entityIds: ["abraham", "shechem"],
    link: { kind: "before-stage", stageId: "abraham-and-the-promises" },
    era: "patriarchs",
  },
  {
    id: "abraham-buys-the-burial-field-at-hebron",
    label: "Abraham buys a burial field at Hebron",
    description:
      "The one piece of Canaan Abraham holds outright is a grave. The field and cave at Machpelah near Mamre are purchased, and Abraham, Sarah, Isaac, Rebekah and Leah are buried there. Joshua knows the town as Kiriath-arba.",
    scriptureRefs: ["Genesis 23:17-20", "Genesis 49:29-32", "Joshua 14:15"],
    sequenceCertainty: "explicit-sequence",
    narrativeOrder: 30,
    entityIds: ["abraham", "isaac", "jacob", "hebron"],
    link: { kind: "before-stage", stageId: "abraham-and-the-promises" },
    era: "patriarchs",
  },
  {
    id: "the-promise-passes-to-isaac-and-jacob",
    label: "The promise passes to Isaac, then to Jacob",
    description:
      "Joshua 24:3-4 compresses two generations into a sentence: God gave Abraham Isaac, and gave Isaac Jacob and Esau. Esau receives Mount Seir; Jacob's line is the one that goes down to Egypt.",
    scriptureRefs: ["Joshua 24:3-4", "Genesis 26:2-5", "Genesis 28:13-15"],
    sequenceCertainty: "explicit-sequence",
    narrativeOrder: 40,
    entityIds: ["abraham", "isaac", "jacob", "edom"],
    link: { kind: "before-stage", stageId: "isaac-jacob-and-the-land" },
    era: "patriarchs",
  },
  {
    id: "jacob-buys-ground-at-shechem",
    label: "Jacob buys ground at Shechem",
    description:
      "Returning from Paddan-aram, Jacob camps before Shechem and buys the parcel of land he is pitched on from the sons of Hamor. That purchase is the reason the last verses of Joshua can bury Joseph where they do.",
    scriptureRefs: ["Genesis 33:18-20", "Joshua 24:32"],
    sequenceCertainty: "explicit-sequence",
    narrativeOrder: 50,
    entityIds: ["jacob", "joseph", "shechem"],
    link: { kind: "before-stage", stageId: "isaac-jacob-and-the-land" },
    era: "patriarchs",
  },

  /* ================================================================ */
  /* Egypt                                                            */
  /* ================================================================ */
  {
    id: "jacob-and-his-household-go-down-to-egypt",
    label: "Jacob and his children go down to Egypt",
    description:
      "Joshua's retelling puts it in six words: Jacob and his children went down into Egypt. Genesis gives the reason, a famine and a son already there, and records that Jacob was told God would bring his offspring back.",
    scriptureRefs: ["Joshua 24:4", "Genesis 46:1-7", "Genesis 48:21"],
    sequenceCertainty: "explicit-sequence",
    narrativeOrder: 60,
    entityIds: ["jacob", "joseph", "egypt-new-kingdom"],
    link: { kind: "before-stage", stageId: "joseph-and-the-move-to-egypt" },
    era: "egypt",
  },
  {
    id: "jacob-claims-ephraim-and-manasseh-as-his-own",
    label: "Jacob claims Ephraim and Manasseh as his own",
    description:
      "Dying in Egypt, Jacob takes Joseph's two Egyptian-born sons as his, on the same footing as Reuben and Simeon. This is why Joshua's allotment lists have no tribe of Joseph but two tribes descended from him.",
    scriptureRefs: ["Genesis 48:3-6", "Joshua 14:4", "Joshua 17:14-18"],
    sequenceCertainty: "explicit-sequence",
    narrativeOrder: 70,
    entityIds: ["jacob", "joseph", "tribe-ephraim", "tribe-manasseh-west"],
    link: { kind: "before-stage", stageId: "joseph-and-the-move-to-egypt" },
    era: "egypt",
  },
  {
    id: "jacob-asks-to-be-buried-with-his-fathers",
    label: "Jacob asks to be buried with his fathers",
    description:
      "Jacob's last instruction is about a location. He asks to be carried back to the cave at Machpelah rather than buried in Egypt, which makes the family's claim on Canaan a matter of practice and not only of promise.",
    scriptureRefs: ["Genesis 49:29-32", "Genesis 50:12-13"],
    sequenceCertainty: "explicit-sequence",
    narrativeOrder: 80,
    entityIds: ["jacob", "joseph", "hebron"],
    link: { kind: "before-stage", stageId: "joseph-and-the-move-to-egypt" },
    era: "egypt",
  },
  {
    id: "joseph-binds-israel-by-oath-about-his-bones",
    label: "Joseph binds Israel by oath about his bones",
    description:
      "Joseph does not ask to be taken home immediately. He takes an oath that when God visits Israel and brings them out, they will carry his bones with them. He is embalmed and put in a coffin in Egypt, and there he stays.",
    scriptureRefs: ["Genesis 50:24-26"],
    sequenceCertainty: "explicit-sequence",
    narrativeOrder: 90,
    entityIds: ["joseph"],
    link: { kind: "before-stage", stageId: "joseph-and-the-move-to-egypt" },
    era: "egypt",
  },
  {
    id: "a-king-who-did-not-know-joseph",
    label: "A king arises who does not know Joseph",
    description:
      "Joseph and his brothers die, Israel multiplies, and a new Egyptian king who has no memory of Joseph puts them to forced labour. The coffin waits through the whole of it.",
    scriptureRefs: ["Exodus 1:6-14"],
    sequenceCertainty: "explicit-sequence",
    narrativeOrder: 100,
    entityIds: ["joseph", "egypt-new-kingdom"],
    link: { kind: "before-stage", stageId: "oppression-and-exodus" },
    era: "egypt",
  },

  /* ================================================================ */
  /* Exodus                                                           */
  /* ================================================================ */
  {
    id: "moses-brings-israel-out-of-egypt",
    label: "Moses brings Israel out of Egypt",
    description:
      "Joshua 24:5-7 summarises the exodus as God's act through Moses and Aaron: plagues, departure, pursuit by chariots, darkness between Israel and the Egyptians, and the sea. Everything Joshua later assumes about Israel's God starts here.",
    scriptureRefs: ["Joshua 24:5-7", "Exodus 12:31-42", "Exodus 14:21-31"],
    sequenceCertainty: "explicit-sequence",
    narrativeOrder: 110,
    entityIds: ["moses", "aaron", "egypt-new-kingdom"],
    link: { kind: "before-stage", stageId: "oppression-and-exodus" },
    era: "exodus",
  },
  {
    id: "josephs-bones-carried-out-of-egypt",
    label: "Joseph's bones are carried out of Egypt",
    description:
      "Exodus records in a single verse that Moses took Joseph's bones with him, because of the oath. From this point the coffin travels with Israel through everything that follows, unburied and unmentioned for the whole wilderness period.",
    scriptureRefs: ["Exodus 13:19", "Joshua 24:32"],
    sequenceCertainty: "explicit-sequence",
    narrativeOrder: 120,
    entityIds: ["joseph", "moses"],
    link: { kind: "before-stage", stageId: "oppression-and-exodus" },
    era: "exodus",
  },
  {
    id: "joshua-fights-amalek-at-rephidim",
    label: "Joshua fights Amalek at Rephidim",
    description:
      "The first time Joshua is named he is given a military command. Moses tells him to choose men and fight Amalek, and Joshua does. Nothing is said about his age, his training, or why he was chosen.",
    scriptureRefs: ["Exodus 17:8-14"],
    sequenceCertainty: "explicit-sequence",
    narrativeOrder: 130,
    entityIds: ["joshua", "moses"],
    link: { kind: "before-stage", stageId: "oppression-and-exodus" },
    era: "exodus",
  },
  {
    id: "joshua-goes-up-the-mountain-with-moses",
    label: "Joshua goes up the mountain with Moses",
    description:
      "At Sinai, Moses rises with Joshua his servant and goes up the mountain while the elders wait below. Joshua is present for the covenant-making without being a party to negotiating it.",
    scriptureRefs: ["Exodus 24:12-14", "Exodus 32:17"],
    sequenceCertainty: "explicit-sequence",
    narrativeOrder: 140,
    entityIds: ["joshua", "moses"],
    link: { kind: "before-stage", stageId: "sinai-and-covenant-identity" },
    era: "exodus",
  },
  {
    id: "joshua-stays-at-the-tent-of-meeting",
    label: "Joshua stays at the tent of meeting",
    description:
      "Exodus notes that when Moses returned to the camp, his servant Joshua did not leave the tent. It is a habitual description rather than a dated episode, which is why it sits here as an inference about when rather than a statement of it.",
    scriptureRefs: ["Exodus 33:7-11"],
    sequenceCertainty: "inferred-sequence",
    narrativeOrder: 150,
    entityIds: ["joshua", "moses"],
    link: { kind: "before-stage", stageId: "sinai-and-covenant-identity" },
    era: "exodus",
  },
  {
    id: "aarons-line-set-apart-for-the-priesthood",
    label: "Aaron's line is set apart for the priesthood",
    description:
      "Eleazar is named among Aaron's sons when the priesthood is established at Sinai. His standing in the book of Joshua rests entirely on this: he holds an office, and the office is hereditary.",
    scriptureRefs: ["Exodus 28:1", "Numbers 3:1-4"],
    sequenceCertainty: "explicit-sequence",
    narrativeOrder: 160,
    entityIds: ["eleazar", "aaron", "moses", "tribe-levi"],
    link: { kind: "before-stage", stageId: "sinai-and-covenant-identity" },
    era: "exodus",
  },

  /* ================================================================ */
  /* Wilderness                                                       */
  /* ================================================================ */
  {
    id: "twelve-scouts-sent-from-kadesh-barnea",
    label: "Twelve scouts are sent from Kadesh-barnea",
    description:
      "One man from each tribe is sent to look at the land: Joshua for Ephraim, Caleb for Judah. It is in this passage that Moses renames Hoshea son of Nun as Joshua. Caleb refers back to this mission when he makes his claim in Joshua 14.",
    scriptureRefs: ["Numbers 13:1-25", "Joshua 14:6-7"],
    sequenceCertainty: "explicit-sequence",
    narrativeOrder: 170,
    entityIds: ["joshua", "caleb", "moses", "kadesh-barnea"],
    link: {
      kind: "before-stage",
      stageId: "scouting-canaan-and-the-wilderness-generation",
    },
    era: "wilderness",
  },
  {
    id: "caleb-and-joshua-against-the-majority-report",
    label: "Caleb and Joshua against the majority report",
    description:
      "Caleb quiets the people and says Israel is well able to go up. When the congregation turns, Joshua and Caleb tear their clothes and argue for the land together, and the assembly threatens to stone them.",
    scriptureRefs: ["Numbers 13:30-33", "Numbers 14:6-10"],
    sequenceCertainty: "explicit-sequence",
    narrativeOrder: 180,
    entityIds: ["caleb", "joshua", "anakim"],
    link: {
      kind: "before-stage",
      stageId: "scouting-canaan-and-the-wilderness-generation",
    },
    era: "wilderness",
  },
  {
    id: "the-wilderness-generation-refuses-the-land",
    label: "The wilderness generation refuses the land",
    description:
      "The generation that came out of Egypt is told it will not enter, with Caleb and Joshua named as the two exceptions. Caleb is singled out for having followed fully, and the land he walked on is sworn to him and to his children.",
    scriptureRefs: ["Numbers 14:20-38", "Numbers 32:11-12", "Joshua 14:8-9"],
    sequenceCertainty: "explicit-sequence",
    narrativeOrder: 190,
    entityIds: ["caleb", "joshua", "moses"],
    link: {
      kind: "before-stage",
      stageId: "scouting-canaan-and-the-wilderness-generation",
    },
    era: "wilderness",
  },
  {
    id: "moses-strikes-the-rock-at-meribah",
    label: "Moses strikes the rock at Meribah",
    description:
      "Moses and Aaron are told they will not bring the assembly into the land. Deuteronomy adds that Moses asked to cross and was refused, and was told instead to commission Joshua. The refusal is what makes Joshua 1 possible.",
    scriptureRefs: ["Numbers 20:1-13", "Deuteronomy 3:23-28"],
    sequenceCertainty: "explicit-sequence",
    narrativeOrder: 200,
    entityIds: ["moses", "aaron", "joshua"],
    link: {
      kind: "before-stage",
      stageId: "scouting-canaan-and-the-wilderness-generation",
    },
    era: "wilderness",
  },
  {
    id: "aaron-dies-and-eleazar-takes-his-place",
    label: "Aaron dies and Eleazar takes his place",
    description:
      "Aaron dies on Mount Hor and his garments pass to Eleazar. By the time Joshua opens, the high priest Israel has is Aaron's son, and every allotment formula in the book names him first.",
    scriptureRefs: ["Numbers 20:22-29", "Joshua 14:1"],
    sequenceCertainty: "explicit-sequence",
    narrativeOrder: 210,
    entityIds: ["eleazar", "aaron", "moses"],
    link: {
      kind: "before-stage",
      stageId: "scouting-canaan-and-the-wilderness-generation",
    },
    era: "wilderness",
  },

  /* ================================================================ */
  /* Transjordan                                                      */
  /* ================================================================ */
  {
    id: "sihon-of-heshbon-defeated",
    label: "Sihon of Heshbon is defeated",
    description:
      "Sihon, king of the Amorites at Heshbon, refuses Israel passage and fights. His territory from the Arnon to the Jabbok is taken. Rahab names this defeat as one of the two things Jericho has heard about.",
    scriptureRefs: ["Numbers 21:21-31", "Joshua 12:2", "Joshua 24:8"],
    sequenceCertainty: "explicit-sequence",
    narrativeOrder: 220,
    entityIds: ["sihon", "moses", "heshbon", "arnon-river", "amorites"],
    link: { kind: "before-stage", stageId: "approach-from-the-east" },
    era: "transjordan",
  },
  {
    id: "og-of-bashan-defeated-at-edrei",
    label: "Og of Bashan is defeated at Edrei",
    description:
      "Og, who ruled from Ashtaroth and Edrei and is described as remaining of the Rephaim, comes out against Israel and is defeated. Bashan becomes the eastern half of Manasseh's inheritance.",
    scriptureRefs: ["Numbers 21:33-35", "Joshua 12:4-5", "Joshua 13:12"],
    sequenceCertainty: "explicit-sequence",
    narrativeOrder: 230,
    entityIds: ["og", "moses", "edrei", "ashtaroth", "region-bashan", "rephaim"],
    link: { kind: "before-stage", stageId: "approach-from-the-east" },
    era: "transjordan",
  },
  {
    id: "balak-hires-balaam-and-is-answered-with-blessing",
    label: "Balak hires Balaam and is answered with blessing",
    description:
      "Balak king of Moab sends for Balaam to curse Israel. Joshua 24:9-10 recalls the episode as God refusing to listen, so that Balaam blessed instead. Joshua 13:22 notes, without explanation, that Israel later killed him.",
    scriptureRefs: ["Numbers 22:1-6", "Joshua 24:9-10", "Joshua 13:22"],
    sequenceCertainty: "explicit-sequence",
    narrativeOrder: 240,
    entityIds: ["balaam", "balak", "moab"],
    link: { kind: "before-stage", stageId: "approach-from-the-east" },
    era: "transjordan",
  },
  {
    id: "phinehas-acts-at-peor",
    label: "Phinehas acts at Peor",
    description:
      "During the crisis at Peor, Phinehas kills an Israelite man and a Midianite woman with a spear, and the plague stops. He is given a covenant of peace and a lasting priesthood. Joshua 22 has the eastern tribes reminded of Peor by name.",
    scriptureRefs: ["Numbers 25:6-13", "Joshua 22:17"],
    sequenceCertainty: "explicit-sequence",
    narrativeOrder: 250,
    entityIds: ["phinehas", "eleazar", "moses", "beth-peor"],
    link: { kind: "before-stage", stageId: "approach-from-the-east" },
    era: "transjordan",
  },
  {
    id: "zelophehads-daughters-petition-moses",
    label: "Zelophehad's daughters petition Moses",
    description:
      "Five sisters from Manasseh stand before Moses, Eleazar and the whole congregation and argue that their father's name should not be lost because he had no son. The ruling goes in their favour and becomes general law.",
    scriptureRefs: ["Numbers 27:1-11", "Numbers 36:1-12"],
    sequenceCertainty: "explicit-sequence",
    narrativeOrder: 260,
    entityIds: [
      "zelophehads-daughters",
      "zelophehad",
      "hepher",
      "moses",
      "eleazar",
      "tribe-manasseh-west",
    ],
    link: { kind: "before-stage", stageId: "moses-final-instructions" },
    era: "transjordan",
  },
  {
    id: "moses-assigns-the-land-east-of-the-jordan",
    label: "Moses assigns the land east of the Jordan",
    description:
      "Reuben, Gad and half of Manasseh are given the territory taken from Sihon and Og, on condition that they cross over and fight with the rest. Joshua 13 restates the grant, and Joshua 22 is the sequel to the condition.",
    scriptureRefs: ["Numbers 32:1-33", "Joshua 13:8-33", "Joshua 22:1-6"],
    sequenceCertainty: "explicit-sequence",
    narrativeOrder: 270,
    entityIds: [
      "moses",
      "tribe-reuben",
      "tribe-gad",
      "tribe-manasseh-east",
      "region-gilead",
    ],
    link: { kind: "before-stage", stageId: "approach-from-the-east" },
    era: "transjordan",
  },
  {
    id: "joshua-commissioned-before-eleazar-and-the-congregation",
    label: "Joshua is commissioned before Eleazar and the congregation",
    description:
      "Moses lays hands on Joshua and sets him before Eleazar the priest and all Israel. The commission comes with a limit: Joshua is to stand before Eleazar, who inquires by the Urim. Deuteronomy repeats the charge to be strong and courageous.",
    scriptureRefs: [
      "Numbers 27:15-23",
      "Deuteronomy 31:7-8",
      "Deuteronomy 31:14-23",
      "Deuteronomy 34:9",
    ],
    sequenceCertainty: "explicit-sequence",
    narrativeOrder: 280,
    entityIds: ["joshua", "eleazar", "moses"],
    link: { kind: "before-stage", stageId: "moses-final-instructions" },
    era: "transjordan",
  },
  {
    id: "moses-sees-the-land-from-nebo-and-dies",
    label: "Moses sees the land from Nebo and dies",
    description:
      "Moses goes up Nebo, is shown the land he will not enter, and dies in Moab. The text says plainly that no one knows where his grave is. Joshua 1:1 begins from this death and quotes it: Moses my servant is dead.",
    scriptureRefs: ["Deuteronomy 34:1-8", "Joshua 1:1-2"],
    sequenceCertainty: "explicit-sequence",
    narrativeOrder: 290,
    entityIds: ["moses", "mount-nebo", "beth-peor", "region-moab-plateau"],
    link: { kind: "before-stage", stageId: "moses-final-instructions" },
    era: "transjordan",
  },

  /* ================================================================ */
  /* The book of Joshua                                               */
  /* ================================================================ */
  {
    id: "joshua-told-to-cross-the-jordan",
    label: "Joshua is told to cross the Jordan",
    description:
      "God speaks to Joshua after Moses' death: arise, cross, no one will stand before you, be strong and courageous. The commission is tied to keeping the law Moses commanded, not turning from it to the right or the left.",
    scriptureRefs: ["Joshua 1:1-9"],
    sequenceCertainty: "explicit-sequence",
    narrativeOrder: 300,
    entityIds: ["joshua", "moses", "jordan-river"],
    link: { kind: "chapter", chapter: 1 },
    era: "joshua",
  },
  {
    id: "moses-instructions-treated-as-binding",
    label: "Moses' instructions are treated as binding throughout",
    description:
      "Moses is dead in verse one and quoted for the rest of the book. The law of Moses governs the commission, the altar at Ebal, the summary of the campaigns, the allotments, the cities of refuge and the farewell. The text gives no schedule for this; it is a running feature rather than an episode.",
    scriptureRefs: ["Joshua 1:7-8", "Joshua 8:31-35", "Joshua 11:15", "Joshua 23:6"],
    sequenceCertainty: "undated",
    narrativeOrder: 305,
    entityIds: ["moses", "joshua"],
    era: "joshua",
  },
  {
    id: "israel-pledges-to-follow-joshua",
    label: "Israel pledges to follow Joshua",
    description:
      "The people answer that they will do whatever Joshua commands and go wherever he sends them, as they listened to Moses. Their one qualification is a wish rather than a demand: may the LORD be with you, as he was with Moses.",
    scriptureRefs: ["Joshua 1:16-18"],
    sequenceCertainty: "explicit-sequence",
    narrativeOrder: 310,
    entityIds: ["joshua", "moses"],
    link: { kind: "chapter", chapter: 1 },
    era: "joshua",
  },
  {
    id: "two-scouts-sent-to-jericho",
    label: "Two scouts are sent to Jericho",
    description:
      "Joshua secretly sends two men from Shittim to view the land, Jericho included. The man who was once one of twelve scouts now sends two, and the text does not comment on the echo.",
    scriptureRefs: ["Joshua 2:1"],
    sequenceCertainty: "explicit-sequence",
    narrativeOrder: 320,
    entityIds: ["joshua", "shittim", "jericho"],
    link: { kind: "chapter", chapter: 2 },
    era: "joshua",
  },
  {
    id: "rahab-hides-the-scouts",
    label: "Rahab hides the scouts",
    description:
      "The scouts enter the house of Rahab, a prostitute in Jericho. When the king sends for them she hides them under flax on the roof, tells the messengers the men have left, and sends the pursuit toward the Jordan fords.",
    scriptureRefs: ["Joshua 2:2-7"],
    sequenceCertainty: "explicit-sequence",
    narrativeOrder: 330,
    entityIds: ["rahab", "jericho", "jordan-river"],
    link: { kind: "chapter", chapter: 2 },
    era: "joshua",
  },
  {
    id: "rahab-negotiates-for-her-household",
    label: "Rahab negotiates for her household",
    description:
      "On the roof Rahab states what Jericho has heard, about the sea and about Sihon and Og, and draws a conclusion about who God is. She then asks for a sworn undertaking covering her father, mother, brothers and sisters, and gets it.",
    scriptureRefs: ["Joshua 2:8-21"],
    sequenceCertainty: "explicit-sequence",
    narrativeOrder: 340,
    entityIds: ["rahab", "jericho", "sihon", "og"],
    link: { kind: "chapter", chapter: 2 },
    era: "joshua",
  },
  {
    id: "israel-crosses-the-jordan",
    label: "Israel crosses the Jordan",
    description:
      "The priests carrying the ark step into the water at flood stage, the flow stops upstream at Adam beside Zarethan, and the nation crosses opposite Jericho. Twelve stones are set up at Gilgal as a memorial.",
    scriptureRefs: ["Joshua 3:14-17", "Joshua 4:19-20"],
    sequenceCertainty: "explicit-sequence",
    narrativeOrder: 350,
    entityIds: [
      "joshua",
      "jordan-river",
      "jordan-crossing-region",
      "adam-city",
      "zarethan",
      "gilgal",
    ],
    link: { kind: "chapter", chapter: 3 },
    era: "joshua",
  },
  {
    id: "joshua-magnified-in-israels-sight",
    label: "Joshua is magnified in Israel's sight",
    description:
      "God had said the crossing would begin to magnify Joshua so that Israel would know he was with him as he had been with Moses. Joshua 4:14 reports the result: they feared him as they had feared Moses, all his life.",
    scriptureRefs: ["Joshua 3:7", "Joshua 4:14"],
    sequenceCertainty: "explicit-sequence",
    narrativeOrder: 360,
    entityIds: ["joshua", "moses"],
    link: { kind: "chapter", chapter: 4 },
    era: "joshua",
  },
  {
    id: "circumcision-and-passover-at-gilgal",
    label: "Circumcision and Passover at Gilgal",
    description:
      "Before any fighting, Joshua circumcises the generation born in the wilderness and Israel keeps the Passover on the plains of Jericho. The manna stops. The first acts inside the land are acts of identity, not war.",
    scriptureRefs: ["Joshua 5:2-12"],
    sequenceCertainty: "explicit-sequence",
    narrativeOrder: 370,
    entityIds: ["joshua", "gilgal", "jericho"],
    link: { kind: "chapter", chapter: 5 },
    era: "joshua",
  },
  {
    id: "joshua-meets-the-commander-of-yahwehs-army",
    label: "Joshua meets the commander of the LORD's army",
    description:
      "Near Jericho a man with a drawn sword answers Joshua's question, are you for us or for our enemies, with a refusal: no, but as commander of the LORD's army I have come. Joshua is told to take off his shoes, as Moses once was.",
    scriptureRefs: ["Joshua 5:13-15", "Exodus 3:5"],
    sequenceCertainty: "explicit-sequence",
    narrativeOrder: 380,
    entityIds: ["joshua", "jericho"],
    link: { kind: "chapter", chapter: 5 },
    era: "joshua",
  },
  {
    id: "jericho-falls",
    label: "Jericho falls",
    description:
      "After the marches and the trumpets the wall falls and the city is taken and burned. Everything in it is devoted; the metal goes to the treasury. Joshua puts the city under an oath against anyone who rebuilds it.",
    scriptureRefs: ["Joshua 6:1-21", "Joshua 6:24-26"],
    sequenceCertainty: "explicit-sequence",
    narrativeOrder: 390,
    entityIds: ["joshua", "jericho"],
    link: { kind: "chapter", chapter: 6 },
    era: "joshua",
  },
  {
    id: "rahabs-household-brought-out-of-jericho",
    label: "Rahab's household is brought out of Jericho",
    description:
      "Joshua sends the same two scouts to fetch Rahab and everyone in her house, as they had sworn. Her relatives are brought out and set outside the camp of Israel. The exemption is honoured in the middle of a total destruction.",
    scriptureRefs: ["Joshua 6:17", "Joshua 6:22-23"],
    sequenceCertainty: "explicit-sequence",
    narrativeOrder: 400,
    entityIds: ["rahab", "joshua", "jericho"],
    link: { kind: "chapter", chapter: 6 },
    era: "joshua",
  },
  {
    id: "rahabs-family-remains-in-israel",
    label: "Rahab's family remains in Israel",
    description:
      "Joshua 6:25 says that Rahab lives in the middle of Israel to this day. That is a statement about outcome, not about a moment: the text fixes no point for it, and says nothing further about her life.",
    scriptureRefs: ["Joshua 6:25"],
    sequenceCertainty: "undated",
    narrativeOrder: 410,
    entityIds: ["rahab"],
    link: { kind: "chapter", chapter: 6 },
    era: "joshua",
  },
  {
    id: "achan-takes-from-the-devoted-goods",
    label: "Achan takes from the devoted goods",
    description:
      "Achan of Judah takes from what was devoted at Jericho and hides it under his tent. By his own later account it was a robe, silver and gold, and he says he saw them, coveted them and took them. The narrative reports the act before anyone in the story knows of it.",
    scriptureRefs: ["Joshua 7:1", "Joshua 7:20-21"],
    sequenceCertainty: "explicit-sequence",
    narrativeOrder: 420,
    entityIds: ["achan", "jericho", "tribe-judah"],
    link: { kind: "chapter", chapter: 7 },
    era: "joshua",
  },
  {
    id: "the-defeat-at-ai",
    label: "The defeat at Ai",
    description:
      "On a scouting report that Ai is lightly held, a small force goes up and is routed at the descent. The text gives the casualties and then the effect: the hearts of the people melted and became like water.",
    scriptureRefs: ["Joshua 7:2-5"],
    sequenceCertainty: "explicit-sequence",
    narrativeOrder: 430,
    entityIds: ["joshua", "ai", "bethel"],
    link: { kind: "chapter", chapter: 7 },
    era: "joshua",
  },
  {
    id: "the-lot-narrows-to-achan",
    label: "The lot narrows to Achan",
    description:
      "The search moves by stages: tribe, then clan, then household, then man. Judah, the Zerahites, Zabdi, Achan. Joshua asks him to make confession, and he does, describing what he took and where it is buried.",
    scriptureRefs: ["Joshua 7:14-21"],
    sequenceCertainty: "explicit-sequence",
    narrativeOrder: 440,
    entityIds: ["achan", "joshua", "zerah", "zabdi", "carmi", "tribe-judah"],
    link: { kind: "chapter", chapter: 7 },
    era: "joshua",
  },
  {
    id: "achan-and-his-household-in-the-valley-of-achor",
    label: "Achan and his household in the Valley of Achor",
    description:
      "Achan, the goods, his sons and daughters, his animals and his tent are taken to the valley. He is stoned and burned, a heap of stones is raised, and the place takes a name connected with trouble. The text never says whether his family knew.",
    scriptureRefs: ["Joshua 7:22-26"],
    sequenceCertainty: "explicit-sequence",
    narrativeOrder: 450,
    entityIds: ["achan", "joshua", "valley-of-achor"],
    link: { kind: "chapter", chapter: 7 },
    era: "joshua",
  },
  {
    id: "ai-taken-on-the-second-attempt",
    label: "Ai is taken on the second attempt",
    description:
      "Joshua goes up again with the whole force, uses an ambush behind the town, and holds out a javelin until the work is done. Ai is burned, its king hanged and then buried under a heap of stones at the town gate.",
    scriptureRefs: ["Joshua 8:1-29"],
    sequenceCertainty: "explicit-sequence",
    narrativeOrder: 460,
    entityIds: ["joshua", "ai", "bethel"],
    link: { kind: "chapter", chapter: 8 },
    era: "joshua",
  },
  {
    id: "the-law-read-at-ebal-and-gerizim",
    label: "The law is read at Ebal and Gerizim",
    description:
      "Joshua builds an altar of uncut stones on Ebal, writes a copy of the law on stones, and reads the blessing and the curse to all Israel, with resident foreigners present. Where this belongs in the sequence is genuinely open: the Hebrew text puts it after Ai, the Greek tradition places the passage elsewhere, and Ebal is a long way north of any fighting reported so far.",
    scriptureRefs: ["Joshua 8:30-35", "Deuteronomy 27:1-8"],
    sequenceCertainty: "inferred-sequence",
    narrativeOrder: 470,
    entityIds: ["joshua", "moses", "mount-ebal", "mount-gerizim", "shechem"],
    link: { kind: "chapter", chapter: 8 },
    era: "joshua",
  },
  {
    id: "the-gibeonites-obtain-a-treaty",
    label: "The Gibeonites obtain a treaty",
    description:
      "Gibeon and three neighbouring towns come with worn sacks and mouldy bread, claiming to be from a far country. Israel samples the provisions, does not inquire of the LORD, and the leaders swear a covenant with them.",
    scriptureRefs: ["Joshua 9:3-15"],
    sequenceCertainty: "explicit-sequence",
    narrativeOrder: 480,
    entityIds: [
      "joshua",
      "gibeonite-league",
      "gibeon",
      "chephirah",
      "beeroth",
      "kiriath-jearim",
    ],
    link: { kind: "chapter", chapter: 9 },
    era: "joshua",
  },
  {
    id: "the-deception-found-out-and-the-oath-kept",
    label: "The deception is found out and the oath kept",
    description:
      "Three days later Israel learns the Gibeonites are neighbours. The congregation grumbles; the leaders answer that they swore by the LORD and may not touch them. The Gibeonites become woodcutters and water carriers, and are not killed.",
    scriptureRefs: ["Joshua 9:16-27"],
    sequenceCertainty: "explicit-sequence",
    narrativeOrder: 490,
    entityIds: ["joshua", "gibeonite-league", "gibeon"],
    link: { kind: "chapter", chapter: 9 },
    era: "joshua",
  },
  {
    id: "adoni-zedek-assembles-five-kings-against-gibeon",
    label: "Adoni-zedek assembles five kings against Gibeon",
    description:
      "Adoni-zedek of Jerusalem, hearing that Gibeon has made peace with Israel, calls on the kings of Hebron, Jarmuth, Lachish and Eglon. The target is Gibeon, not Israel: the coalition forms to punish a defection.",
    scriptureRefs: ["Joshua 10:1-5"],
    sequenceCertainty: "explicit-sequence",
    narrativeOrder: 500,
    entityIds: [
      "adoni-zedek",
      "hoham",
      "piram",
      "japhia",
      "debir-king",
      "southern-coalition",
      "jerusalem",
      "gibeon",
    ],
    link: { kind: "chapter", chapter: 10 },
    era: "joshua",
  },
  {
    id: "the-battle-at-gibeon-and-the-beth-horon-descent",
    label: "The battle at Gibeon and the Beth-horon descent",
    description:
      "Gibeon sends to Gilgal for help and Joshua marches up overnight. The coalition breaks and is pursued down the Beth-horon pass as far as Azekah. The poem about sun and moon names Gibeon and the valley of Aijalon, the top and the bottom of that same route.",
    scriptureRefs: ["Joshua 10:6-14"],
    sequenceCertainty: "explicit-sequence",
    narrativeOrder: 510,
    entityIds: [
      "joshua",
      "gibeon",
      "upper-beth-horon",
      "lower-beth-horon",
      "aijalon",
      "azekah",
      "southern-coalition",
    ],
    link: { kind: "chapter", chapter: 10 },
    era: "joshua",
  },
  {
    id: "the-five-kings-taken-at-makkedah",
    label: "The five kings are taken at Makkedah",
    description:
      "The kings hide in a cave and are sealed in while the pursuit continues, then brought out. Joshua has the commanders put their feet on the kings' necks and repeats to them the charge he was given: do not be afraid, be strong and courageous.",
    scriptureRefs: ["Joshua 10:16-27"],
    sequenceCertainty: "explicit-sequence",
    narrativeOrder: 520,
    entityIds: [
      "joshua",
      "adoni-zedek",
      "hoham",
      "piram",
      "japhia",
      "debir-king",
      "makkedah",
      "southern-coalition",
    ],
    link: { kind: "chapter", chapter: 10 },
    era: "joshua",
  },
  {
    id: "the-southern-towns-struck",
    label: "The southern towns are struck",
    description:
      "A compressed itinerary runs from Makkedah through Libnah, Lachish, Eglon, Hebron and Debir. Horam of Gezer comes to help Lachish and is beaten in the field, and his city is not said to be taken, which is the distinction the whole book turns on.",
    scriptureRefs: ["Joshua 10:28-39"],
    sequenceCertainty: "explicit-sequence",
    narrativeOrder: 530,
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
      "region-shephelah",
    ],
    link: { kind: "chapter", chapter: 10 },
    era: "joshua",
  },
  {
    id: "jabin-of-hazor-assembles-the-northern-coalition",
    label: "Jabin of Hazor assembles the northern coalition",
    description:
      "Jabin of Hazor gathers a larger alliance, described as fielding horses and chariots, at the waters of Merom. Hazor is called the head of all those kingdoms, and excavation confirms it was by far the largest city in the land.",
    scriptureRefs: ["Joshua 11:1-9"],
    sequenceCertainty: "explicit-sequence",
    narrativeOrder: 540,
    entityIds: [
      "jabin",
      "jobab",
      "joshua",
      "hazor",
      "waters-of-merom",
      "northern-coalition",
    ],
    link: { kind: "chapter", chapter: 11 },
    era: "joshua",
  },
  {
    id: "hazor-burned",
    label: "Hazor is burned",
    description:
      "Hazor alone among the northern towns is said to be burned; the others are taken but left standing on their mounds. The city's Late Bronze destruction is well documented archaeologically, and who caused it is disputed by its own excavators.",
    scriptureRefs: ["Joshua 11:10-15"],
    sequenceCertainty: "explicit-sequence",
    narrativeOrder: 550,
    entityIds: ["joshua", "jabin", "hazor"],
    link: { kind: "chapter", chapter: 11 },
    era: "joshua",
  },
  {
    id: "the-anakim-cut-off-from-the-hill-country",
    label: "The Anakim are cut off from the hill country",
    description:
      "Joshua 11:21 says that at that time Joshua cut off the Anakim from Hebron, Debir, Anab and the hill country, and that some remained in Gaza, Gath and Ashdod. The phrase at that time fixes no point, and Joshua 14 and 15 credit the same work at Hebron and Debir to Caleb. The order here is an inference, not a statement.",
    scriptureRefs: ["Joshua 11:21-22", "Joshua 14:12", "Joshua 15:13-14"],
    sequenceCertainty: "inferred-sequence",
    narrativeOrder: 560,
    entityIds: [
      "joshua",
      "caleb",
      "anakim",
      "hebron",
      "debir",
      "anab",
      "gaza",
      "gath",
      "ashdod",
    ],
    link: { kind: "chapter", chapter: 11 },
    era: "joshua",
  },
  {
    id: "a-long-war-and-a-register-of-kings",
    label: "A long war and a register of kings",
    description:
      "Joshua 11:18 says only that Joshua made war a long time with all those kings, and Joshua 12 lists the defeated rulers east and west of the Jordan without dating any of them. The register is a summary, so no position in the sequence is claimed for its individual entries.",
    scriptureRefs: ["Joshua 11:16-23", "Joshua 12:1-24"],
    sequenceCertainty: "undated",
    narrativeOrder: 570,
    entityIds: ["joshua", "moses", "sihon", "og", "canaanite-city-states"],
    link: { kind: "chapter", chapter: 12 },
    era: "joshua",
  },
  {
    id: "eleazar-and-joshua-preside-over-the-allotment",
    label: "Eleazar and Joshua preside over the allotment",
    description:
      "The allotment formula names Eleazar the priest first, then Joshua, then the heads of the tribal houses. It frames chapters 14 to 21 without fixing when any single assignment happened, so it carries no position of its own.",
    scriptureRefs: ["Joshua 14:1-5", "Joshua 19:51", "Joshua 21:1-3"],
    sequenceCertainty: "undated",
    narrativeOrder: 575,
    entityIds: ["eleazar", "joshua", "shiloh", "tribe-levi"],
    link: { kind: "chapter", chapter: 14 },
    era: "joshua",
  },
  {
    id: "caleb-claims-hebron-at-gilgal",
    label: "Caleb claims Hebron at Gilgal",
    description:
      "Caleb comes to Joshua at Gilgal, recalls what was sworn to him at Kadesh-barnea, counts forty-five years since, and asks for the hill country where the Anakim and the fortified towns are. Joshua blesses him and gives him Hebron.",
    scriptureRefs: ["Joshua 14:6-15"],
    sequenceCertainty: "explicit-sequence",
    narrativeOrder: 580,
    entityIds: [
      "caleb",
      "joshua",
      "jephunneh",
      "gilgal",
      "hebron",
      "kadesh-barnea",
      "anakim",
      "region-hill-country-judah",
    ],
    link: { kind: "chapter", chapter: 14 },
    era: "joshua",
  },
  {
    id: "caleb-is-reckoned-within-judah",
    label: "Caleb the Kenizzite is reckoned within Judah",
    description:
      "Caleb is called a Kenizzite and is also Judah's representative among the scouts and a recipient of land inside Judah's allotment. Numbers 13:6 and 1 Chronicles 4:13-15 place him and his line within Judah; how and when the foreign-sounding name came to sit there is left unstated.",
    scriptureRefs: ["Numbers 13:6", "Numbers 32:12", "Joshua 14:6", "Joshua 15:13"],
    sequenceCertainty: "undated",
    narrativeOrder: 585,
    entityIds: ["caleb", "kenizzites", "tribe-judah"],
    link: { kind: "chapter", chapter: 14 },
    era: "joshua",
  },
  {
    id: "caleb-offers-achsah-to-whoever-takes-debir",
    label: "Caleb offers Achsah to whoever takes Debir",
    description:
      "Having driven the sons of Anak from Hebron, Caleb goes up against Debir and offers his daughter Achsah in marriage to the man who strikes and takes the town. The offer treats a hill country fortress as still needing to be taken.",
    scriptureRefs: ["Joshua 15:13-16"],
    sequenceCertainty: "explicit-sequence",
    narrativeOrder: 590,
    entityIds: ["caleb", "achsah", "debir", "hebron", "anakim"],
    link: { kind: "chapter", chapter: 15 },
    era: "joshua",
  },
  {
    id: "othniel-takes-debir-and-marries-achsah",
    label: "Othniel takes Debir and marries Achsah",
    description:
      "Othniel son of Kenaz takes the town and receives Achsah. The Hebrew phrase attaching him to Caleb can be read as making him Caleb's brother or Caleb's nephew, and translations differ; the text does not settle it.",
    scriptureRefs: ["Joshua 15:17"],
    sequenceCertainty: "explicit-sequence",
    narrativeOrder: 600,
    entityIds: ["othniel", "achsah", "caleb", "kenaz", "debir"],
    link: { kind: "chapter", chapter: 15 },
    era: "joshua",
  },
  {
    id: "achsah-asks-her-father-for-springs",
    label: "Achsah asks her father for springs",
    description:
      "Achsah gets down from her donkey and asks Caleb for a blessing: since he has set her in the dry south, she wants springs of water as well as a field. He gives her the upper and the lower springs. She asks and the narrative simply records that she received.",
    scriptureRefs: ["Joshua 15:18-19"],
    sequenceCertainty: "explicit-sequence",
    narrativeOrder: 610,
    entityIds: ["achsah", "caleb", "othniel", "region-negev", "debir"],
    link: { kind: "chapter", chapter: 15 },
    era: "joshua",
  },
  {
    id: "zelophehads-daughters-receive-their-portion",
    label: "Zelophehad's daughters receive their portion",
    description:
      "The five sisters come to Eleazar, Joshua and the princes, cite the ruling given through Moses, and are given an inheritance among their father's brothers. Manasseh's ten portions are counted as they are because of this. Where the episode falls relative to the other allotments is not stated.",
    scriptureRefs: ["Joshua 17:3-6"],
    sequenceCertainty: "inferred-sequence",
    narrativeOrder: 620,
    entityIds: [
      "zelophehads-daughters",
      "zelophehad",
      "hepher",
      "machir",
      "eleazar",
      "joshua",
      "tribe-manasseh-west",
    ],
    link: { kind: "chapter", chapter: 17 },
    era: "joshua",
  },
  {
    id: "the-tent-of-meeting-set-up-at-shiloh",
    label: "The tent of meeting is set up at Shiloh",
    description:
      "The assembly moves from Gilgal to Shiloh and the tent of meeting is pitched there. From this point the lot is cast at Shiloh, which is where the remaining allotments and the Levitical towns are settled.",
    scriptureRefs: ["Joshua 18:1", "Joshua 18:10"],
    sequenceCertainty: "explicit-sequence",
    narrativeOrder: 630,
    entityIds: ["joshua", "eleazar", "shiloh", "gilgal"],
    link: { kind: "chapter", chapter: 18 },
    era: "joshua",
  },
  {
    id: "the-last-seven-tribes-surveyed-and-allotted",
    label: "The last seven tribes are surveyed and allotted",
    description:
      "Joshua asks how long the seven remaining tribes will put off taking possession, sends men to walk through the land and write it up, and casts lots for them at Shiloh. Surveying and possessing are kept distinct throughout.",
    scriptureRefs: ["Joshua 18:2-10"],
    sequenceCertainty: "explicit-sequence",
    narrativeOrder: 640,
    entityIds: ["joshua", "shiloh"],
    link: { kind: "chapter", chapter: 18 },
    era: "joshua",
  },
  {
    id: "joshua-receives-timnath-serah",
    label: "Joshua receives Timnath-serah",
    description:
      "When the distribution is finished Israel gives Joshua the town he asked for, Timnath-serah in the hill country of Ephraim. He is the last to be provided for, and he builds the place up and lives there.",
    scriptureRefs: ["Joshua 19:49-51"],
    sequenceCertainty: "explicit-sequence",
    narrativeOrder: 650,
    entityIds: [
      "joshua",
      "timnath-serah",
      "region-hill-country-ephraim",
      "tribe-ephraim",
    ],
    link: { kind: "chapter", chapter: 19 },
    era: "joshua",
  },
  {
    id: "cities-of-refuge-designated",
    label: "Cities of refuge are designated",
    description:
      "Six towns are set apart so that someone who kills without intent can flee and stand trial rather than face immediate vengeance. Hebron, Caleb's town, is one of them. The chapter gives no timing for the designation.",
    scriptureRefs: ["Joshua 20:1-9", "Numbers 35:9-34"],
    sequenceCertainty: "inferred-sequence",
    narrativeOrder: 660,
    entityIds: [
      "joshua",
      "eleazar",
      "hebron",
      "shechem",
      "kedesh-naphtali",
      "bezer",
      "ramoth-gilead",
      "golan-city",
    ],
    link: { kind: "chapter", chapter: 20 },
    era: "joshua",
  },
  {
    id: "the-levitical-towns-assigned",
    label: "The Levitical towns are assigned",
    description:
      "The heads of the Levites come to Eleazar and Joshua at Shiloh and are given towns with pasture inside the other tribes' territories rather than a block of land. The list runs to forty-eight towns.",
    scriptureRefs: ["Joshua 21:1-42"],
    sequenceCertainty: "explicit-sequence",
    narrativeOrder: 670,
    entityIds: ["eleazar", "joshua", "tribe-levi", "shiloh", "hebron", "debir"],
    link: { kind: "chapter", chapter: 21 },
    era: "joshua",
  },
  {
    id: "joshua-sends-the-eastern-tribes-home",
    label: "Joshua sends the eastern tribes home",
    description:
      "Reuben, Gad and half of Manasseh have fought west of the river as Moses required. Joshua blesses them, tells them to hold to the law of Moses, and sends them back across the Jordan to their own possession.",
    scriptureRefs: ["Joshua 22:1-8"],
    sequenceCertainty: "explicit-sequence",
    narrativeOrder: 680,
    entityIds: [
      "joshua",
      "moses",
      "tribe-reuben",
      "tribe-gad",
      "tribe-manasseh-east",
      "jordan-river",
    ],
    link: { kind: "chapter", chapter: 22 },
    era: "joshua",
  },
  {
    id: "the-altar-by-the-jordan-and-the-muster-at-shiloh",
    label: "The altar by the Jordan and the muster at Shiloh",
    description:
      "On reaching the Jordan the eastern tribes build a large altar. The rest of Israel hears of it, reads it as rebellion, and gathers at Shiloh to go up against them in war. The book comes closer to civil war here than at any point in the campaigns.",
    scriptureRefs: ["Joshua 22:9-12"],
    sequenceCertainty: "explicit-sequence",
    narrativeOrder: 690,
    entityIds: [
      "tribe-reuben",
      "tribe-gad",
      "tribe-manasseh-east",
      "jordan-river",
      "shiloh",
    ],
    link: { kind: "chapter", chapter: 22 },
    era: "joshua",
  },
  {
    id: "achan-recalled-in-the-altar-dispute",
    label: "Achan is recalled in the altar dispute",
    description:
      "The delegation's argument reaches back to two precedents: the iniquity of Peor and Achan. Achan, they say, did not perish alone in his iniquity, and wrath fell on the whole congregation. His name has become an argument about corporate risk.",
    scriptureRefs: ["Joshua 22:17-20"],
    sequenceCertainty: "explicit-sequence",
    narrativeOrder: 700,
    entityIds: ["achan", "phinehas", "zerah"],
    link: { kind: "chapter", chapter: 22 },
    era: "joshua",
  },
  {
    id: "phinehas-leads-the-delegation-to-gilead",
    label: "Phinehas leads the delegation to Gilead",
    description:
      "Instead of an attack, Israel sends Phinehas son of Eleazar with ten tribal princes. The eastern tribes explain that the altar is a witness, not a place of sacrifice. Phinehas accepts the answer, reports back, and the war is called off.",
    scriptureRefs: ["Joshua 22:13-34"],
    sequenceCertainty: "explicit-sequence",
    narrativeOrder: 710,
    entityIds: [
      "phinehas",
      "eleazar",
      "tribe-reuben",
      "tribe-gad",
      "tribe-manasseh-east",
      "region-gilead",
    ],
    link: { kind: "chapter", chapter: 22 },
    era: "joshua",
  },
  {
    id: "joshuas-farewell-warning",
    label: "Joshua's farewell warning",
    description:
      "Old and near death, Joshua tells Israel that not one good thing God promised has failed, and in the same speech that nations remain among them and will become a snare if Israel joins itself to them. Both halves stand together.",
    scriptureRefs: ["Joshua 23:1-16"],
    sequenceCertainty: "explicit-sequence",
    narrativeOrder: 720,
    entityIds: ["joshua", "moses"],
    link: { kind: "chapter", chapter: 23 },
    era: "joshua",
  },
  {
    id: "covenant-renewal-at-shechem",
    label: "Covenant renewal at Shechem",
    description:
      "At Shechem Joshua rehearses the story from Terah to the present, tells Israel to put away the gods their fathers served, and refuses their first easy yes. A stone is set up as a witness, and the covenant is written down. No temporal link joins this to chapter 23, and readers differ over whether it follows that speech or retells the same farewell, so its position here is an inference.",
    scriptureRefs: ["Joshua 24:1-28"],
    sequenceCertainty: "inferred-sequence",
    narrativeOrder: 730,
    entityIds: ["joshua", "abraham", "isaac", "jacob", "terah", "moses", "shechem"],
    link: { kind: "chapter", chapter: 24 },
    era: "joshua",
  },
  {
    id: "joshua-dies-at-one-hundred-and-ten",
    label: "Joshua dies at one hundred and ten",
    description:
      "Joshua dies and is buried in his own inheritance at Timnath-serah. The text gives his age as one hundred and ten, calls him the servant of the LORD, and notes that Israel served the LORD all his days and all the days of the elders who outlived him.",
    scriptureRefs: ["Joshua 24:29-31"],
    sequenceCertainty: "explicit-sequence",
    narrativeOrder: 740,
    entityIds: ["joshua", "nun", "timnath-serah"],
    link: { kind: "chapter", chapter: 24 },
    era: "joshua",
  },
  {
    id: "josephs-bones-buried-at-shechem",
    label: "Joseph's bones are buried at Shechem",
    description:
      "The bones carried out of Egypt are buried in the ground Jacob bought from the sons of Hamor, and the plot becomes the inheritance of Joseph's descendants. An oath taken in Egypt is discharged in the book's last three verses.",
    scriptureRefs: ["Joshua 24:32", "Genesis 50:25", "Exodus 13:19"],
    sequenceCertainty: "explicit-sequence",
    narrativeOrder: 750,
    entityIds: ["joseph", "jacob", "shechem", "tribe-ephraim", "tribe-manasseh-west"],
    link: { kind: "chapter", chapter: 24 },
    era: "joshua",
  },
  {
    id: "eleazar-dies-and-is-buried-in-ephraim",
    label: "Eleazar dies and is buried in Ephraim",
    description:
      "The final verse records Eleazar's death and his burial at a place identified by his son's name, in the hill country of Ephraim. Priest and commander end the book buried in the same hills, and the office passes on without incident.",
    scriptureRefs: ["Joshua 24:33"],
    sequenceCertainty: "explicit-sequence",
    narrativeOrder: 760,
    entityIds: [
      "eleazar",
      "phinehas",
      "aaron",
      "region-hill-country-ephraim",
      "tribe-ephraim",
    ],
    link: { kind: "chapter", chapter: 24 },
    era: "joshua",
  },

  /* ================================================================ */
  /* After Joshua. Hidden in spoiler-free mode.                       */
  /* ================================================================ */
  {
    id: "the-generation-that-did-not-know-yahweh",
    label: "A generation arises that does not know the LORD",
    description:
      "Judges opens by repeating Joshua's death notice and then adds what Joshua does not: after that whole generation had died, another arose that did not know the LORD or the work he had done for Israel.",
    scriptureRefs: ["Judges 2:6-10"],
    sequenceCertainty: "explicit-sequence",
    narrativeOrder: 800,
    entityIds: ["joshua"],
    era: "after-joshua",
    spoiler: true,
  },
  {
    id: "the-debir-episode-retold-in-judges",
    label: "The Debir episode retold in Judges",
    description:
      "Judges 1 tells the Hebron and Debir story again, with Achsah's request for springs almost word for word. It also calls Othniel Caleb's younger brother outright, which is one way of resolving the ambiguity Joshua 15:17 leaves open. Where this retelling sits in time is not stated.",
    scriptureRefs: ["Judges 1:10-15", "Judges 1:20"],
    sequenceCertainty: "undated",
    narrativeOrder: 810,
    entityIds: ["caleb", "achsah", "othniel", "hebron", "debir"],
    era: "after-joshua",
    spoiler: true,
  },
  {
    id: "othniel-raised-up-as-the-first-deliverer",
    label: "Othniel is raised up as the first deliverer",
    description:
      "The man who took Debir becomes the first of the judges. The Spirit of the LORD comes on him, he goes out to war against Cushan-rishathaim, and the land has rest until he dies. Nothing in Joshua anticipates this.",
    scriptureRefs: ["Judges 3:7-11"],
    sequenceCertainty: "explicit-sequence",
    narrativeOrder: 820,
    entityIds: ["othniel", "kenaz", "caleb"],
    era: "after-joshua",
    spoiler: true,
  },
  {
    id: "phinehas-before-the-ark-at-bethel",
    label: "Phinehas before the ark at Bethel",
    description:
      "Phinehas son of Eleazar appears again as the priest standing before the ark when Israel inquires during the war against Benjamin. The internal chronology of Judges 19 to 21 is much debated, so no position is claimed for it here.",
    scriptureRefs: ["Judges 20:27-28"],
    sequenceCertainty: "undated",
    narrativeOrder: 830,
    entityIds: ["phinehas", "eleazar", "bethel", "tribe-benjamin"],
    era: "after-joshua",
    spoiler: true,
  },
  {
    id: "a-second-jabin-at-hazor",
    label: "A second Jabin at Hazor",
    description:
      "Judges 4 has Israel oppressed by Jabin, king of Hazor. Joshua 11 has a Jabin of Hazor defeated and his city burned. The relationship between the two is not explained; the name may be dynastic, or the traditions may overlap.",
    scriptureRefs: ["Judges 4:1-3", "Joshua 11:10-11"],
    sequenceCertainty: "undated",
    narrativeOrder: 840,
    entityIds: ["jabin", "hazor"],
    era: "after-joshua",
    spoiler: true,
  },
  {
    id: "achan-called-achar-in-chronicles",
    label: "Achan appears in Chronicles as Achar",
    description:
      "The genealogies of Judah list him with a different spelling and a label rather than a story: Achar, the troubler of Israel. His name has become shorthand for what he did to everyone else.",
    scriptureRefs: ["1 Chronicles 2:7"],
    sequenceCertainty: "undated",
    narrativeOrder: 850,
    entityIds: ["achan", "zerah", "tribe-judah"],
    era: "after-joshua",
    spoiler: true,
  },
  {
    id: "the-gibeonites-and-the-house-of-saul",
    label: "The Gibeonites and the house of Saul",
    description:
      "Generations later a famine is traced to Saul having put Gibeonites to death, and 2 Samuel explains that Israel had sworn to them. The oath sworn by deception in Joshua 9 is still binding, and breaking it still has consequences.",
    scriptureRefs: ["2 Samuel 21:1-6", "Joshua 9:19-20"],
    sequenceCertainty: "explicit-sequence",
    narrativeOrder: 860,
    entityIds: ["gibeonite-league", "gibeon"],
    era: "after-joshua",
    spoiler: true,
  },
  {
    id: "rahab-in-matthews-genealogy",
    label: "Rahab in Matthew's genealogy",
    description:
      "Matthew's opening genealogy names Rahab as the mother of Boaz, which places her in the line of David and of Jesus. Joshua says only that her descendants remained in Israel; the identification is the New Testament's, not Joshua's.",
    scriptureRefs: ["Matthew 1:5"],
    sequenceCertainty: "undated",
    narrativeOrder: 870,
    entityIds: ["rahab"],
    era: "after-joshua",
    spoiler: true,
  },
  {
    id: "rahab-and-jericho-in-hebrews-and-james",
    label: "Rahab and Jericho in Hebrews and James",
    description:
      "Hebrews lists the fall of Jericho and Rahab's reception of the scouts among the acts of faith. James cites the same episode as an example of being justified by works. Two New Testament writers use her for different arguments.",
    scriptureRefs: ["Hebrews 11:30-31", "James 2:25"],
    sequenceCertainty: "undated",
    narrativeOrder: 880,
    entityIds: ["rahab", "jericho"],
    era: "after-joshua",
    spoiler: true,
  },
  {
    id: "joshua-and-the-rest-that-remains",
    label: "Joshua and the rest that remains",
    description:
      "Acts remembers Joshua as the one under whom the tent came into the land. Hebrews argues that because Scripture later still speaks of entering rest, the rest Joshua gave was not the final one. This is a reading of Joshua 21:44, not a claim Joshua makes.",
    scriptureRefs: ["Acts 7:45", "Hebrews 4:8-9", "Joshua 21:43-45"],
    sequenceCertainty: "undated",
    narrativeOrder: 890,
    entityIds: ["joshua"],
    era: "after-joshua",
    spoiler: true,
  },
  {
    id: "abraham-as-heir-of-the-promise-in-the-new-testament",
    label: "Abraham as heir of the promise in the New Testament",
    description:
      "Paul reads the promise to Abraham as reaching beyond a territory, and Hebrews says he lived as an alien in the land of promise and looked for a city. Both are interpretations of the Genesis promise Joshua takes as its charter.",
    scriptureRefs: ["Romans 4:13-17", "Hebrews 11:8-10", "Acts 7:5"],
    sequenceCertainty: "undated",
    narrativeOrder: 900,
    entityIds: ["abraham", "isaac", "jacob"],
    era: "after-joshua",
    spoiler: true,
  },
  {
    id: "jacob-and-joseph-among-the-faithful-in-hebrews",
    label: "Jacob and Joseph among the faithful in Hebrews",
    description:
      "Hebrews 11 singles out Jacob blessing Joseph's sons and Joseph giving instructions about his bones, treating both as acts of faith in a promise neither man saw kept. Joshua 24:32 is where the second of them is discharged.",
    scriptureRefs: ["Hebrews 11:21-22", "Joshua 24:32"],
    sequenceCertainty: "undated",
    narrativeOrder: 910,
    entityIds: ["jacob", "joseph"],
    era: "after-joshua",
    spoiler: true,
  },
];

/* ------------------------------------------------------------------ */
/* Lookup helpers                                                     */
/* ------------------------------------------------------------------ */

export const TIMELINE_EVENT_BY_ID: Record<string, TimelineEvent> =
  Object.fromEntries(TIMELINE_EVENTS.map((e) => [e.id, e]));

export const TIMELINE_EVENT_IDS: string[] = TIMELINE_EVENTS.map((e) => e.id);

/** Events safe to render before the reader has turned spoilers on. */
export const SPOILER_FREE_TIMELINE_EVENTS: TimelineEvent[] =
  TIMELINE_EVENTS.filter((e) => !e.spoiler);

export function timelineEventsForEntity(entityId: string): TimelineEvent[] {
  return TIMELINE_EVENTS.filter((e) => e.entityIds.includes(entityId)).sort(
    (a, b) => a.narrativeOrder - b.narrativeOrder
  );
}
