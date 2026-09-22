/**
 * Curated profiles for the people the character explorer treats at length.
 *
 * One entry for every person seed marked `profile: "full"` in
 * `content/entities/person-seeds.ts`.
 *
 * Rules applied throughout, in addition to `content/AUTHORING.md`:
 *
 *  - No motive, age, date or family detail that the text does not give. The only
 *    numbers about a person anywhere in this file are the forty-five years Caleb
 *    counts in Joshua 14:10 and Joshua's age of 110 in Joshua 24:29, both of
 *    which are the text's own statements about themselves.
 *  - `relationships` carries ties the text states. Where the Hebrew is genuinely
 *    open, as with Othniel and Caleb, the relationship is marked `inferred: true`
 *    and the note says what is ambiguous rather than picking a side.
 *  - Everything from Judges onward, and everything in the New Testament, sits in
 *    `later`, which is hidden until the reader turns spoilers on. A profile read
 *    in spoiler-free mode should not reveal that Othniel becomes a judge, that
 *    Rahab appears in Matthew and Hebrews, that Phinehas turns up in Judges 20,
 *    or that the Gibeonite oath matters again under David.
 *  - `whatWeAreNotTold` expands the seed's gap lists. Nothing here contradicts
 *    them.
 *
 * `timelineEventIds` reference `content/people/timeline.ts`.
 */

import type { PersonProfile } from "../types";

export const PROFILES: PersonProfile[] = [
  /* ================================================================ */
  /* Joshua                                                           */
  /* ================================================================ */
  {
    entityId: "joshua",
    identity:
      "Son of Nun, of the tribe of Ephraim; Moses' assistant, and the leader under whom Israel crosses the Jordan and divides the land.",
    relationships: [
      {
        kind: "son of",
        targetEntityId: "nun",
        scriptureRefs: ["Joshua 1:1", "Numbers 13:8"],
      },
      {
        kind: "member of",
        targetEntityId: "tribe-ephraim",
        scriptureRefs: ["Numbers 13:8", "Joshua 19:49-50"],
      },
      {
        kind: "assistant to",
        targetEntityId: "moses",
        note: "Called Moses' servant or minister in Exodus, before any command of his own.",
        scriptureRefs: ["Exodus 24:13", "Exodus 33:11"],
      },
      {
        kind: "successor to",
        targetEntityId: "moses",
        scriptureRefs: ["Numbers 27:18-23", "Deuteronomy 34:9", "Joshua 1:1-2"],
      },
      {
        kind: "serves alongside",
        targetEntityId: "eleazar",
        note: "Commissioned to stand before Eleazar, who inquires by the Urim; Eleazar's name comes first in the allotment formula.",
        scriptureRefs: ["Numbers 27:21", "Joshua 14:1", "Joshua 19:51"],
      },
      {
        kind: "fellow scout with",
        targetEntityId: "caleb",
        note: "The two who urged Israel to go up, and the two exempted from the sentence on that generation.",
        scriptureRefs: ["Numbers 14:6-9", "Numbers 14:30", "Joshua 14:6-9"],
      },
    ],
    background:
      "Joshua appears first as a commander. Moses tells him to choose men and fight Amalek at Rephidim, and the text says nothing about who he was before that. At Sinai he goes up the mountain with Moses and stays at the tent of meeting. Numbers records that Moses renamed him: he had been Hoshea son of Nun. Sent with eleven others to look at Canaan, he and [[entity:caleb]] argue that Israel should go up, and the two of them alone are exempted from the sentence on that generation. Before Moses dies, hands are laid on Joshua and he is set before [[entity:eleazar]] the priest and the whole congregation.",
    actionsAndConsequences:
      "Joshua's first act in the book is to send two men to [[entity:jericho]], and his first crossing is made by priests stepping into flood water. He circumcises the wilderness generation and keeps the Passover before fighting anything. Jericho falls. [[entity:ai]] defeats Israel until [[entity:achan]] is dealt with, and then falls to an ambush. At [[entity:mount-ebal]] he writes out the law and reads the blessing and the curse. He is drawn into a treaty with [[entity:gibeon]] because, as the text says plainly, Israel did not ask counsel of the LORD, and he keeps it anyway. The southern and northern coalitions break before him in the field. He then presides over an allotment he does not benefit from until the end, taking [[entity:timnath-serah]] last.",
    significance:
      "Joshua is the book's test case for succession. The commission given to him, be strong and courageous, do not turn from the law to the right or the left, is spoken to him by God, by Moses and by the people, and finally by Joshua himself to his commanders at Makkedah. The book measures him by the written instruction he inherited rather than by any fresh revelation, and credits the victories to God rather than to his generalship. Reformed commentary reads his career as proof that God keeps promises through appointed leaders rather than irreplaceable individuals, which is one Christian reading among several. The text calls him the servant of the LORD only in his death notice.",
    timelineEventIds: [
      "joshua-fights-amalek-at-rephidim",
      "joshua-goes-up-the-mountain-with-moses",
      "joshua-stays-at-the-tent-of-meeting",
      "twelve-scouts-sent-from-kadesh-barnea",
      "caleb-and-joshua-against-the-majority-report",
      "the-wilderness-generation-refuses-the-land",
      "joshua-commissioned-before-eleazar-and-the-congregation",
      "joshua-told-to-cross-the-jordan",
      "israel-pledges-to-follow-joshua",
      "two-scouts-sent-to-jericho",
      "israel-crosses-the-jordan",
      "joshua-magnified-in-israels-sight",
      "circumcision-and-passover-at-gilgal",
      "joshua-meets-the-commander-of-yahwehs-army",
      "jericho-falls",
      "the-defeat-at-ai",
      "ai-taken-on-the-second-attempt",
      "the-law-read-at-ebal-and-gerizim",
      "the-gibeonites-obtain-a-treaty",
      "the-deception-found-out-and-the-oath-kept",
      "the-battle-at-gibeon-and-the-beth-horon-descent",
      "the-five-kings-taken-at-makkedah",
      "jabin-of-hazor-assembles-the-northern-coalition",
      "a-long-war-and-a-register-of-kings",
      "eleazar-and-joshua-preside-over-the-allotment",
      "the-tent-of-meeting-set-up-at-shiloh",
      "the-last-seven-tribes-surveyed-and-allotted",
      "joshua-receives-timnath-serah",
      "joshua-sends-the-eastern-tribes-home",
      "joshuas-farewell-warning",
      "covenant-renewal-at-shechem",
      "joshua-dies-at-one-hundred-and-ten",
      "the-generation-that-did-not-know-yahweh",
      "joshua-and-the-rest-that-remains",
    ],
    placeEntityIds: [
      "jordan-river",
      "gilgal",
      "jericho",
      "ai",
      "mount-ebal",
      "gibeon",
      "makkedah",
      "hazor",
      "shiloh",
      "shechem",
      "timnath-serah",
    ],
    themeIds: [
      "leadership-and-succession",
      "covenant-faithfulness",
      "promise-and-fulfillment",
      "obedience-and-failure",
    ],
    scriptureRefs: [
      "Exodus 17:8-14",
      "Exodus 24:13",
      "Exodus 33:11",
      "Numbers 13:16",
      "Numbers 14:6-9",
      "Numbers 27:18-23",
      "Deuteronomy 34:9",
      "Joshua 1:1-9",
      "Joshua 4:14",
      "Joshua 10:24-25",
      "Joshua 19:49-50",
      "Joshua 23:1-16",
      "Joshua 24:29-31",
    ],
    citations: [
      {
        sourceId: "web-bible",
        locator: "Joshua 1:1-9",
        supportedClaim:
          "The wording of the commission and its explicit tie to the law Moses commanded.",
      },
      {
        sourceId: "hess-joshua",
        supportedClaim:
          "Joshua's installation read against ancient Near Eastern succession and commissioning language.",
      },
      {
        sourceId: "woudstra-joshua",
        supportedClaim:
          "A Reformed reading of Joshua's leadership as administration of a covenant already given rather than a new revelation.",
      },
      {
        sourceId: "howard-joshua",
        supportedClaim:
          "The book's own distinction between beating kings in the field, being allotted land, and living on it.",
      },
    ],
    later: {
      body: "Judges repeats Joshua's death notice and then adds what Joshua itself does not: after that whole generation had died, another arose that did not know the LORD or his work for Israel. Acts remembers him as the leader under whom the tent came into the land. Hebrews argues from the fact that Scripture still speaks of entering rest that the rest Joshua gave was not the final one.",
      scriptureRefs: ["Judges 2:6-10", "Acts 7:45", "Hebrews 4:8-9"],
    },
    whatWeAreNotTold: [
      "His age at any point except the note that he was 110 when he died",
      "Anything about his family beyond his father's name: no wife and no children are mentioned",
      "How he was trained, or what he did during the years in Egypt",
      "How long the campaigns took, beyond the phrase a long time in Joshua 11:18",
    ],
  },

  /* ================================================================ */
  /* Caleb                                                            */
  /* ================================================================ */
  {
    entityId: "caleb",
    identity:
      "Son of Jephunneh, called the Kenizzite, reckoned with the tribe of Judah; father of Achsah.",
    relationships: [
      {
        kind: "son of",
        targetEntityId: "jephunneh",
        scriptureRefs: ["Numbers 13:6", "Joshua 14:6"],
      },
      {
        kind: "described as belonging to",
        targetEntityId: "kenizzites",
        note: "Called the Kenizzite, a designation pointing outside Israel. The text never explains how it sits with his standing in Judah.",
        scriptureRefs: ["Numbers 32:12", "Joshua 14:6", "Joshua 14:14"],
      },
      {
        kind: "reckoned with",
        targetEntityId: "tribe-judah",
        note: "Judah's representative among the scouts, and a landholder inside Judah's allotment.",
        scriptureRefs: ["Numbers 13:6", "Joshua 15:13"],
      },
      {
        kind: "father of",
        targetEntityId: "achsah",
        scriptureRefs: ["Joshua 15:16-17"],
      },
      {
        kind: "kinsman of",
        targetEntityId: "othniel",
        note: "Joshua 15:17 attaches Othniel to Caleb with a phrase the Hebrew leaves open: either Othniel is Caleb's brother, or Kenaz is, which would make Othniel his nephew. The relationship is real; its degree is not stated.",
        scriptureRefs: ["Joshua 15:17"],
        inferred: true,
      },
      {
        kind: "fellow scout with",
        targetEntityId: "joshua",
        scriptureRefs: ["Numbers 14:6-9", "Numbers 14:30"],
      },
    ],
    background:
      "Caleb represents Judah among the twelve men sent to look at Canaan. He quiets the people and says Israel is well able to go up; when the assembly turns and talks of stoning, he and [[entity:joshua]] tear their clothes and argue for the land together. Numbers says he followed the LORD fully, and the ground he had walked on is sworn to him and to his children. He is also called a Kenizzite, a label pointing outside Israel, and in the same breath he is Judah's man among the scouts and the holder of land inside Judah's allotment. The text states both and explains neither.",
    actionsAndConsequences:
      "At [[entity:gilgal]] Caleb comes to Joshua, repeats what Moses swore to him at [[entity:kadesh-barnea]], counts forty-five years since that day, and asks for the hill country. His stated ground is the promise, and he names the difficulty rather than avoiding it: the [[entity:anakim]] are there and the towns are fortified. Joshua blesses him and gives him [[entity:hebron]], and the narrative reports that he drove out the sons of Anak. He then goes up against [[entity:debir]] and offers his daughter [[entity:achsah]] to whoever takes it. When she asks him for springs to go with dry land in the south, he gives her the upper and the lower springs. Hebron is later designated a city of refuge and a Levitical town, with its open fields left to Caleb.",
    significance:
      "Caleb is the book's counterexample to a generation that would not go up, and the only individual in Joshua who claims a specific promise by name and receives exactly what was promised. His case also complicates any tidy account of who Israel is: a man labelled Kenizzite ends up holding one of Judah's most important towns, and the book reports this without embarrassment. The allotment chapters need a person in them to keep the boundary lists from becoming abstract, and Caleb is the one the text supplies, which is why his claim stands at the head of the western distribution rather than inside a register.",
    timelineEventIds: [
      "twelve-scouts-sent-from-kadesh-barnea",
      "caleb-and-joshua-against-the-majority-report",
      "the-wilderness-generation-refuses-the-land",
      "the-anakim-cut-off-from-the-hill-country",
      "caleb-claims-hebron-at-gilgal",
      "caleb-is-reckoned-within-judah",
      "caleb-offers-achsah-to-whoever-takes-debir",
      "othniel-takes-debir-and-marries-achsah",
      "achsah-asks-her-father-for-springs",
      "the-debir-episode-retold-in-judges",
    ],
    placeEntityIds: [
      "kadesh-barnea",
      "gilgal",
      "hebron",
      "debir",
      "region-hill-country-judah",
      "region-negev",
    ],
    themeIds: [
      "promise-and-fulfillment",
      "land-and-inheritance",
      "outsiders-and-belonging",
      "covenant-faithfulness",
    ],
    scriptureRefs: [
      "Numbers 13:6",
      "Numbers 13:30",
      "Numbers 14:24",
      "Numbers 32:12",
      "Joshua 14:6-15",
      "Joshua 15:13-19",
      "Joshua 21:11-12",
    ],
    citations: [
      {
        sourceId: "web-bible",
        locator: "Joshua 14:7-12",
        supportedClaim:
          "Caleb's own account of the forty-five years and his request for the hill country with its fortified towns.",
      },
      {
        sourceId: "hess-joshua",
        supportedClaim:
          "The Kenizzite designation and the question of Caleb's assimilation into Judah.",
      },
      {
        sourceId: "davis-joshua",
        supportedClaim:
          "A Reformed reading of Caleb's claim as the book's model of holding God to a stated promise.",
      },
      {
        sourceId: "rainey-notley-sacred-bridge",
        supportedClaim:
          "The position of Hebron and Debir in the Judean hill country and the value of springs in the southern approaches.",
      },
    ],
    later: {
      body: "Judges retells the Hebron and Debir episode, notes that Hebron was given to Caleb as Moses had said, and states outright that Othniel was Caleb's younger brother, which settles in one direction an ambiguity Joshua leaves open. Chronicles attaches a long Judahite genealogy to a Caleb, and the relation of those lists to the scout is itself debated.",
      scriptureRefs: ["Judges 1:10-15", "Judges 1:20", "1 Chronicles 2:18-24"],
    },
    whatWeAreNotTold: [
      "How a Kenizzite comes to be counted in Judah, which the text states without explaining",
      "The exact family relationship between Caleb and Othniel, which the Hebrew leaves ambiguous",
      "Anything about his wife, or about children other than Achsah, within the book of Joshua",
      "What he did in the years between the scouting mission and his arrival at Gilgal",
      "How his hold on Hebron worked alongside its designation as a Levitical town and city of refuge, which Joshua 21 records without comment",
    ],
  },

  /* ================================================================ */
  /* Rahab                                                            */
  /* ================================================================ */
  {
    entityId: "rahab",
    identity:
      "A woman of Jericho, described as a prostitute, whose household is spared when the city falls.",
    relationships: [
      {
        kind: "protector of",
        targetEntityId: "joshua",
        note: "She shelters the two men Joshua sent, and Joshua later orders that she and her household be brought out.",
        scriptureRefs: ["Joshua 2:1-6", "Joshua 6:22-23"],
      },
      {
        kind: "resident of",
        targetEntityId: "jericho",
        note: "Her house is described as being in the city wall, which is how the scouts leave through her window.",
        scriptureRefs: ["Joshua 2:15"],
      },
      {
        kind: "negotiates for",
        targetEntityId: "canaanites",
        note: "Her terms cover her father, mother, brothers, sisters and all who belong to them, not herself alone.",
        scriptureRefs: ["Joshua 2:12-13", "Joshua 6:23"],
      },
    ],
    background:
      "Nothing is said of Rahab before the scouts reach her door. She is given an occupation, a city and no family details beyond the relatives she later asks for. Her house stands in the city wall, which is how the two men leave by a rope through her window. What she knows, she says she heard: the drying up of the sea when Israel came out of Egypt, and what Israel did to [[entity:sihon]] and [[entity:og]] east of the Jordan. The text gives her a source of information and no account of how she reasoned from it to the conclusion she draws.",
    actionsAndConsequences:
      "Rahab hides the two men under stalks of flax on her roof, tells the king's messengers they have already gone, and sends the pursuit toward the [[entity:jordan-river]] fords. She then states her conclusion, that the LORD is God in heaven above and on earth beneath, and negotiates: kindness for kindness, an oath, and her whole family gathered into the house. A scarlet cord in the window marks it. When [[entity:jericho]] falls under a total ban, the same two men are sent in to bring her relatives out, and they are set outside the camp of Israel. Joshua 6:25 says she lived in the middle of Israel from then on. Her deception of the king's men is reported without a word of approval or censure.",
    significance:
      "Rahab is the clearest case in the book of an outsider brought in, and the exemption is granted at exactly the point where the narrative is least sentimental about Canaanite cities. The oath sworn to her binds Israel in the middle of a devoted destruction, which is the same logic that later holds Israel to the Gibeonite treaty. Calvin, reading her lie, argued that the falsehood itself was not to be defended while the faith behind it was, and Reformed commentary has generally kept that distinction. The narrative makes neither move. It records what she did, what she said about the LORD, and that she lived.",
    timelineEventIds: [
      "rahab-hides-the-scouts",
      "rahab-negotiates-for-her-household",
      "jericho-falls",
      "rahabs-household-brought-out-of-jericho",
      "rahabs-family-remains-in-israel",
      "rahab-in-matthews-genealogy",
      "rahab-and-jericho-in-hebrews-and-james",
    ],
    placeEntityIds: ["jericho", "jordan-river", "shittim", "gilgal"],
    themeIds: [
      "outsiders-and-belonging",
      "judgment-and-mercy",
      "covenant-faithfulness",
    ],
    scriptureRefs: [
      "Joshua 2:1-21",
      "Joshua 6:17",
      "Joshua 6:22-25",
    ],
    citations: [
      {
        sourceId: "web-bible",
        locator: "Joshua 2:9-13",
        supportedClaim:
          "What Rahab says she has heard, and the terms she asks for on behalf of her household.",
      },
      {
        sourceId: "bird-harlot-heroine",
        supportedClaim:
          "Rahab's occupation and social position, and how an innkeeping or prostitute's house on a city wall would function.",
      },
      {
        sourceId: "calvin-joshua",
        locator: "on Joshua 2",
        supportedClaim:
          "The Reformed distinction between commending Rahab's faith and declining to defend her lie.",
      },
      {
        sourceId: "hawk-joshua",
        supportedClaim:
          "The placing of Rahab's exemption inside a narrative of total destruction, and what the juxtaposition does to the reader.",
      },
    ],
    later: {
      body: "Matthew's genealogy names Rahab as the mother of Boaz, which places her in the line of David and of Jesus. Hebrews lists her reception of the scouts among the acts of faith, alongside the fall of Jericho itself, and James cites the same episode as an instance of being justified by works. None of these identifications is made in Joshua, which says only that her descendants remained in Israel.",
      scriptureRefs: ["Matthew 1:5", "Hebrews 11:30-31", "James 2:25"],
    },
    whatWeAreNotTold: [
      "Her age, her history, or how she came to know what she reports about Israel",
      "Whether the scouts' visit to her house involved anything beyond shelter, which the text does not say",
      "Whether any of her descendants are named; Joshua says only that her family remained in Israel",
      "Whether her family was ever brought inside the camp, since Joshua 6:23 leaves them outside it",
      "What happened to her afterwards, or when and where she died",
    ],
  },

  /* ================================================================ */
  /* Achan                                                            */
  /* ================================================================ */
  {
    entityId: "achan",
    identity:
      "Son of Carmi, of the household of Zabdi, of the clan of Zerah, of the tribe of Judah.",
    relationships: [
      {
        kind: "son of",
        targetEntityId: "carmi",
        scriptureRefs: ["Joshua 7:1", "Joshua 7:18"],
      },
      {
        kind: "grandson of",
        targetEntityId: "zabdi",
        scriptureRefs: ["Joshua 7:1", "Joshua 7:17-18"],
      },
      {
        kind: "of the clan of",
        targetEntityId: "zerah",
        scriptureRefs: ["Joshua 7:1", "Joshua 7:17"],
      },
      {
        kind: "member of",
        targetEntityId: "tribe-judah",
        scriptureRefs: ["Joshua 7:1", "Joshua 7:16"],
      },
      {
        kind: "brought before",
        targetEntityId: "joshua",
        note: "Joshua puts the question and Achan answers it; the confession is quoted in full.",
        scriptureRefs: ["Joshua 7:19-21"],
      },
    ],
    background:
      "Achan is introduced by a genealogy rather than a biography. Four levels are given, tribe, clan, household and father, and they matter because the search that finds him runs through exactly those levels in order. Nothing else about his life appears anywhere in the book. He belongs to [[entity:tribe-judah]], the tribe [[entity:caleb]] represented among the scouts and the tribe whose allotment the book handles first, and he belongs to the generation that crossed the [[entity:jordan-river]] and was circumcised at [[entity:gilgal]].",
    actionsAndConsequences:
      "At [[entity:jericho]] everything was devoted and the metal was to go to the treasury. Achan took from it and hid what he took in the ground inside his tent. The narrative reports the act at the head of chapter 7, before anyone in the story knows of it, and then shows the effect: a small force sent up to [[entity:ai]] is routed on the descent, and the hearts of the people melt and become like water. Joshua tears his clothes and asks what has happened, and is told Israel has sinned. The lot narrows to Judah, then the Zerahites, then Zabdi, then Achan. Asked to make confession, he says he saw, coveted and took, and tells them where the things are buried. He, the goods, his sons and daughters, his animals and his tent are taken to a valley; he is stoned and burned, and a heap of stones is raised over the place.",
    significance:
      "Achan is the book's demonstration that Israel is not automatically on the safe side of the ban. The same devotion that destroyed Jericho operates inside the camp, and one household's act is treated as the nation's defeat, which is why Joshua 7 opens with the words the children of Israel committed a trespass rather than with Achan's name. Chapter 22 later uses him as a precedent in an argument about corporate risk: he did not perish alone in his iniquity. The episode is among the hardest in the book, and the difficulty is not the theology but the sons and daughters and animals, which the text lists without saying what they had done.",
    timelineEventIds: [
      "achan-takes-from-the-devoted-goods",
      "the-defeat-at-ai",
      "the-lot-narrows-to-achan",
      "achan-and-his-household-in-the-valley-of-achor",
      "achan-recalled-in-the-altar-dispute",
      "achan-called-achar-in-chronicles",
    ],
    placeEntityIds: ["jericho", "ai", "valley-of-achor", "gilgal"],
    themeIds: [
      "holiness-and-presence",
      "judgment-and-mercy",
      "obedience-and-failure",
      "unity-among-tribes",
    ],
    scriptureRefs: [
      "Joshua 6:18-19",
      "Joshua 7:1-26",
      "Joshua 22:20",
    ],
    citations: [
      {
        sourceId: "web-bible",
        locator: "Joshua 7:19-21",
        supportedClaim: "The wording of Achan's confession and what he says he took.",
      },
      {
        sourceId: "hess-joshua",
        supportedClaim:
          "The narrowing procedure from tribe to individual, and what the chapter's opening plural implies about corporate responsibility.",
      },
      {
        sourceId: "davis-joshua",
        supportedClaim:
          "A Reformed treatment of Joshua 7 as an argument about holiness inside the covenant community rather than about Canaanites.",
      },
      {
        sourceId: "trimm-destruction-canaanites",
        supportedClaim:
          "How the devotion or ban language functions, and the problem of its application to a household.",
      },
    ],
    later: {
      body: "The genealogies of Judah in Chronicles list him with a variant spelling and a label rather than a story: Achar, the troubler of Israel. His name has become the summary of what he cost other people, and the prophets later reuse the Valley of Achor as an image of trouble turned into hope.",
      scriptureRefs: ["1 Chronicles 2:7", "Hosea 2:15", "Isaiah 65:10"],
    },
    whatWeAreNotTold: [
      "Whether his household knew of the theft, which the narrative never states",
      "How many people died with him, or their names",
      "What he intended to do with the goods beyond his own statement that he coveted them",
      "Whether his sons and daughters were put to death or only brought out, since the Hebrew of Joshua 7:25 moves between singular and plural",
      "Where the Valley of Achor was; the name survives but the location is disputed",
    ],
  },

  /* ================================================================ */
  /* Moses                                                            */
  /* ================================================================ */
  {
    entityId: "moses",
    identity:
      "The servant of the LORD, brother of Aaron; dead before the book's first sentence ends, and cited in it from beginning to end.",
    relationships: [
      {
        kind: "brother of",
        targetEntityId: "aaron",
        scriptureRefs: ["Exodus 4:14", "Joshua 24:5"],
      },
      {
        kind: "predecessor of",
        targetEntityId: "joshua",
        note: "Joshua is his assistant, then the man he commissions, then his successor.",
        scriptureRefs: ["Numbers 27:18-23", "Joshua 1:1-2", "Joshua 4:14"],
      },
      {
        kind: "commissions",
        targetEntityId: "eleazar",
        note: "Sets Joshua before Eleazar, who is to inquire by the Urim on his behalf.",
        scriptureRefs: ["Numbers 27:19-21"],
      },
      {
        kind: "grants territory to",
        targetEntityId: "tribe-reuben",
        scriptureRefs: ["Numbers 32:33", "Joshua 13:15-23"],
      },
      {
        kind: "grants territory to",
        targetEntityId: "tribe-gad",
        scriptureRefs: ["Numbers 32:33", "Joshua 13:24-28"],
      },
      {
        kind: "grants territory to",
        targetEntityId: "tribe-manasseh-east",
        scriptureRefs: ["Numbers 32:33", "Joshua 13:29-31"],
      },
    ],
    background:
      "Moses is the only major figure in Joshua who never appears alive in it. He brought Israel out of Egypt, received the covenant at Sinai, carried [[entity:joseph]]'s bones out with him, and sent the twelve scouts. At Meribah he was told he would not bring the assembly into the land, and Deuteronomy adds that he asked to cross, was refused, and was told to commission [[entity:joshua]] instead. Before he died he assigned the territory east of the [[entity:jordan-river]] to Reuben, Gad and half of Manasseh on condition that they fight west of it, ruled on the case of [[entity:zelophehads-daughters]], laid hands on Joshua, and went up [[entity:mount-nebo]].",
    actionsAndConsequences:
      "Everything Moses did before the book still governs it. The commission in chapter 1 is a command to keep the law he commanded. The altar on [[entity:mount-ebal]] is built as he wrote. The summary of the campaigns says Joshua left nothing undone of all that the LORD commanded Moses. The eastern tribes are sent home with a charge to hold to what he gave them, and the Transjordan boundaries, the cities of refuge and the Levitical towns are all settled by his prior instruction. Joshua's two farewell speeches cite him by name. The practical effect is that Joshua leads by administering something already written, and that the book's measure of obedience is a document rather than a fresh word.",
    significance:
      "Moses' absence is load-bearing. The book begins from a death and shows that the promise does not depend on the man who carried it, which is why the crossing is said to begin magnifying Joshua so that Israel would know God was with him as he had been with Moses. Reformed theology has read this as covenant continuity, with the written word outlasting the mediator, and that reading is one option rather than the only Christian one. The text makes a narrower point: Israel feared Joshua as they had feared Moses, all the days of his life. It also says, without elaborating, that no one knows where Moses was buried.",
    timelineEventIds: [
      "moses-brings-israel-out-of-egypt",
      "josephs-bones-carried-out-of-egypt",
      "joshua-fights-amalek-at-rephidim",
      "aarons-line-set-apart-for-the-priesthood",
      "twelve-scouts-sent-from-kadesh-barnea",
      "the-wilderness-generation-refuses-the-land",
      "moses-strikes-the-rock-at-meribah",
      "aaron-dies-and-eleazar-takes-his-place",
      "sihon-of-heshbon-defeated",
      "og-of-bashan-defeated-at-edrei",
      "zelophehads-daughters-petition-moses",
      "moses-assigns-the-land-east-of-the-jordan",
      "joshua-commissioned-before-eleazar-and-the-congregation",
      "moses-sees-the-land-from-nebo-and-dies",
      "joshua-told-to-cross-the-jordan",
      "moses-instructions-treated-as-binding",
      "the-law-read-at-ebal-and-gerizim",
      "joshua-sends-the-eastern-tribes-home",
    ],
    placeEntityIds: [
      "mount-nebo",
      "beth-peor",
      "heshbon",
      "kadesh-barnea",
      "jordan-river",
      "mount-ebal",
      "region-moab-plateau",
    ],
    themeIds: [
      "leadership-and-succession",
      "covenant-faithfulness",
      "promise-and-fulfillment",
      "land-and-inheritance",
    ],
    scriptureRefs: [
      "Numbers 20:1-13",
      "Numbers 27:12-23",
      "Numbers 32:33",
      "Deuteronomy 3:23-28",
      "Deuteronomy 34:1-9",
      "Joshua 1:1-8",
      "Joshua 8:31-35",
      "Joshua 11:15",
      "Joshua 22:1-6",
      "Joshua 23:6",
    ],
    citations: [
      {
        sourceId: "web-bible",
        locator: "Joshua 1:1-2",
        supportedClaim:
          "The book's opening from Moses' death, and its quotation of that death as the ground of the command to cross.",
      },
      {
        sourceId: "block-deuteronomy",
        supportedClaim:
          "How Deuteronomy sets up the transfer of leadership and the continuing authority of the written instruction.",
      },
      {
        sourceId: "woudstra-joshua",
        supportedClaim:
          "A Reformed account of covenant continuity across the change of leader in Joshua 1.",
      },
      {
        sourceId: "mcconville-williams-joshua",
        supportedClaim:
          "The function of repeated appeals to the law of Moses as the book's measure of obedience.",
      },
    ],
    later: {
      body: "Later Scripture keeps the pairing rather than dropping it. Hebrews contrasts Moses as a servant in God's house with a son set over it, and Luke has the risen Jesus read against the law of Moses, the prophets and the psalms together. Joshua itself looks back to Moses constantly and forward to nothing.",
      scriptureRefs: ["Hebrews 3:1-6", "Luke 24:44"],
    },
    whatWeAreNotTold: [
      "Where he is buried, which Deuteronomy 34:6 says plainly that no one knows",
      "Anything about him in Joshua that is not already in Exodus through Deuteronomy; the book cites him rather than narrating him",
      "How the book of the law that Joshua reads and copies relates physically to what Moses wrote, which is never described",
      "Whether the Transjordan grant he made counts as part of the promised land, a question Joshua 22 raises and does not answer",
    ],
  },

  /* ================================================================ */
  /* Eleazar                                                          */
  /* ================================================================ */
  {
    entityId: "eleazar",
    identity:
      "Son of Aaron, father of Phinehas; the high priest through the whole of the book, named first in the allotment formula.",
    relationships: [
      {
        kind: "son of",
        targetEntityId: "aaron",
        scriptureRefs: ["Exodus 28:1", "Numbers 20:25-28", "Joshua 14:1"],
      },
      {
        kind: "father of",
        targetEntityId: "phinehas",
        scriptureRefs: ["Numbers 25:7", "Joshua 22:13"],
      },
      {
        kind: "head of",
        targetEntityId: "tribe-levi",
        note: "Receives the Levites' petition for towns and allots them with Joshua and the tribal heads.",
        scriptureRefs: ["Joshua 21:1-3"],
      },
      {
        kind: "acts jointly with",
        targetEntityId: "joshua",
        note: "Eleazar's name precedes Joshua's every time the allotment formula appears.",
        scriptureRefs: ["Joshua 14:1", "Joshua 17:4", "Joshua 19:51", "Joshua 21:1"],
      },
      {
        kind: "successor to",
        targetEntityId: "aaron",
        note: "Aaron's garments are transferred to him on Mount Hor.",
        scriptureRefs: ["Numbers 20:26-28"],
      },
    ],
    background:
      "Eleazar is named among Aaron's sons when the priesthood is established at Sinai. He inherits the office on Mount Hor, where Aaron dies and his garments are transferred. At Peor his son [[entity:phinehas]] acts and is given a lasting priesthood in Eleazar's line. He is standing beside Moses when [[entity:zelophehads-daughters]] bring their case, and he is the man [[entity:joshua]] is commissioned to stand before, since it is Eleazar who inquires by the Urim on Joshua's behalf. Joshua's authority is therefore bounded by another office from the moment it is granted.",
    actionsAndConsequences:
      "In the book itself Eleazar's work is the allotment. The formula naming him comes first, before Joshua and before the heads of the tribal houses, and it recurs at the opening of the western distribution, at its close, and again when the Levites come forward. He is present when Zelophehad's daughters receive their portion, when the lot is cast at [[entity:shiloh]] for the last seven tribes, when the cities of refuge are designated, and when the forty-eight Levitical towns are assigned, including towns inside Judah taken out of [[entity:caleb]]'s territory. He never makes a speech; not one word of his is quoted. The final verse of the book records his death and his burial in the hill country of Ephraim, at a place identified only by his son's name.",
    significance:
      "Eleazar is the reason the land can be described as given rather than won. Casting lots in front of a priest makes the distribution an act of inquiry rather than a settlement between competing tribes, and it removes the strongest motive any tribe would have to dispute its share. Putting his name ahead of Joshua's in the formula is a deliberate ordering: the campaign chapters are led by a commander, the allotment chapters by a priest. His burial in the same hills as Joshua closes the book with both offices intact and both successions already provided for.",
    timelineEventIds: [
      "aarons-line-set-apart-for-the-priesthood",
      "aaron-dies-and-eleazar-takes-his-place",
      "phinehas-acts-at-peor",
      "zelophehads-daughters-petition-moses",
      "joshua-commissioned-before-eleazar-and-the-congregation",
      "eleazar-and-joshua-preside-over-the-allotment",
      "zelophehads-daughters-receive-their-portion",
      "the-tent-of-meeting-set-up-at-shiloh",
      "cities-of-refuge-designated",
      "the-levitical-towns-assigned",
      "phinehas-leads-the-delegation-to-gilead",
      "eleazar-dies-and-is-buried-in-ephraim",
      "phinehas-before-the-ark-at-bethel",
    ],
    placeEntityIds: [
      "shiloh",
      "gilgal",
      "hebron",
      "region-hill-country-ephraim",
      "shechem",
    ],
    themeIds: [
      "land-and-inheritance",
      "holiness-and-presence",
      "leadership-and-succession",
      "unity-among-tribes",
    ],
    scriptureRefs: [
      "Exodus 28:1",
      "Numbers 20:22-29",
      "Numbers 27:19-22",
      "Joshua 14:1",
      "Joshua 17:4",
      "Joshua 19:51",
      "Joshua 21:1-3",
      "Joshua 24:33",
    ],
    citations: [
      {
        sourceId: "web-bible",
        locator: "Joshua 14:1",
        supportedClaim:
          "The order of names in the allotment formula, with Eleazar before Joshua and the tribal heads.",
      },
      {
        sourceId: "milgrom-numbers",
        supportedClaim:
          "The priestly role in inquiry by lot and Urim, and the framework behind the Levitical towns.",
      },
      {
        sourceId: "haran-levitical-cities",
        supportedClaim:
          "How towns with pasture inside other tribes' territory functioned as a Levitical provision.",
      },
      {
        sourceId: "hess-joshua",
        supportedClaim:
          "The distribution by lot as an act of inquiry that forecloses intertribal dispute.",
      },
    ],
    later: {
      body: "Judges shows the priesthood continuing in his line, with his son Phinehas standing before the ark when Israel inquires during the war against Benjamin. Chronicles traces the high priestly genealogy through Eleazar, and Ezra's own descent is reckoned from him, which makes this book's last verse the start of a very long list.",
      scriptureRefs: ["Judges 20:27-28", "1 Chronicles 6:3-15", "Ezra 7:1-5"],
    },
    whatWeAreNotTold: [
      "His age, or the length of his service alongside Joshua",
      "Anything he said; he acts throughout the book without a single quoted word",
      "How the lot was physically cast, or how the Urim was used, neither of which Joshua describes",
      "Where the place named after Phinehas in Joshua 24:33 was; it is not identified with any known site",
      "Whether he outlived Joshua by long, since the book reports both deaths without spacing them",
    ],
  },

  /* ================================================================ */
  /* Phinehas                                                         */
  /* ================================================================ */
  {
    entityId: "phinehas",
    identity:
      "Son of Eleazar, grandson of Aaron; the priest who heads the delegation to the eastern tribes.",
    relationships: [
      {
        kind: "son of",
        targetEntityId: "eleazar",
        scriptureRefs: ["Numbers 25:7", "Joshua 22:13"],
      },
      {
        kind: "grandson of",
        targetEntityId: "aaron",
        scriptureRefs: ["Numbers 25:7", "Numbers 25:11"],
      },
      {
        kind: "sent to",
        targetEntityId: "tribe-reuben",
        note: "Heads the delegation of ten princes sent to the eastern tribes in Gilead.",
        scriptureRefs: ["Joshua 22:13-15"],
      },
      {
        kind: "sent to",
        targetEntityId: "tribe-gad",
        scriptureRefs: ["Joshua 22:13-15"],
      },
      {
        kind: "sent to",
        targetEntityId: "tribe-manasseh-east",
        scriptureRefs: ["Joshua 22:13-15"],
      },
    ],
    background:
      "Phinehas enters the record at Peor, before the book of Joshua begins. During the crisis there he killed an Israelite man and a Midianite woman with a spear, the plague stopped, and he was given a covenant of peace and a lasting priesthood for his descendants. That is the whole of his prior history in the text, and it is a violent one. By Joshua 22 he is a priest acting in his father's lifetime, sent out on behalf of the whole congregation while [[entity:eleazar]] stays at [[entity:shiloh]]. The text does not say why he goes rather than his father.",
    actionsAndConsequences:
      "When the eastern tribes build a large altar by the [[entity:jordan-river]], Israel gathers at Shiloh to go to war against them. Instead of attacking, they send Phinehas with ten tribal princes. His speech is an accusation and a warning, and the two precedents he cites are Peor, which he had seen, and [[entity:achan]], who did not perish alone in his iniquity. He also offers the eastern tribes land on the western side if the problem is their own territory. When they answer that the altar is a witness and not a place of sacrifice, he accepts the explanation, and the text says it pleased him. He reports back, Israel drops the plan to fight, and the chapter ends without a casualty. A man remembered for a spear at Peor ends the book by talking a war down.",
    significance:
      "Phinehas is the test of whether Israel can hold together without an external campaign to keep it aligned. The threat in Joshua 22 is not Canaanite; it is ten tribes against two and a half, over a question about worship and about who counts as inside. A priest rather than a commander is sent, and the crisis is resolved by asking and listening. The chapter also shows how communal memory works in this book: Peor and Achan are not history to these men but live arguments about what one group's act can cost everyone else.",
    timelineEventIds: [
      "phinehas-acts-at-peor",
      "the-altar-by-the-jordan-and-the-muster-at-shiloh",
      "achan-recalled-in-the-altar-dispute",
      "phinehas-leads-the-delegation-to-gilead",
      "eleazar-dies-and-is-buried-in-ephraim",
      "phinehas-before-the-ark-at-bethel",
    ],
    placeEntityIds: [
      "shiloh",
      "jordan-river",
      "beth-peor",
      "region-gilead",
      "region-hill-country-ephraim",
    ],
    themeIds: [
      "unity-among-tribes",
      "holiness-and-presence",
      "covenant-faithfulness",
      "memory-and-memorials",
    ],
    scriptureRefs: [
      "Numbers 25:6-13",
      "Joshua 22:13-20",
      "Joshua 22:30-34",
      "Joshua 24:33",
    ],
    citations: [
      {
        sourceId: "web-bible",
        locator: "Joshua 22:17-20",
        supportedClaim:
          "The precedents Phinehas cites, Peor and Achan, and the corporate argument he builds from them.",
      },
      {
        sourceId: "milgrom-numbers",
        supportedClaim:
          "The Peor episode and the terms of the priestly covenant given to Phinehas.",
      },
      {
        sourceId: "mitchell-together-in-land",
        supportedClaim:
          "Joshua 22 as the book's treatment of intertribal unity and the limits of who counts as inside Israel.",
      },
      {
        sourceId: "butler-joshua",
        supportedClaim:
          "The structure of the altar dispute and the function of the delegation's speech within it.",
      },
    ],
    later: {
      body: "Judges has Phinehas son of Eleazar standing before the ark at Bethel when Israel inquires during the war against Benjamin, which is another intertribal war. Psalm 106 recalls Peor and says that what he did was counted to him as righteousness, and Chronicles keeps the high priestly line running through him.",
      scriptureRefs: ["Judges 20:27-28", "Psalm 106:28-31", "1 Chronicles 6:4-15"],
    },
    whatWeAreNotTold: [
      "Why Phinehas rather than Eleazar leads the delegation, which the text does not explain",
      "His age at any point, or when he succeeded his father as high priest",
      "Whether he was present at Jericho, Ai or any of the campaigns; the book places him only in chapter 22",
      "How the covenant of peace granted at Peor was understood to work in practice",
      "Where the place in Joshua 24:33 that carries his name was located",
    ],
  },

  /* ================================================================ */
  /* Othniel                                                          */
  /* ================================================================ */
  {
    entityId: "othniel",
    identity:
      "Son of Kenaz, related to Caleb in terms the Hebrew leaves open; the man who takes Debir, and Achsah's husband.",
    relationships: [
      {
        kind: "son of",
        targetEntityId: "kenaz",
        scriptureRefs: ["Joshua 15:17"],
      },
      {
        kind: "kinsman of",
        targetEntityId: "caleb",
        note: "The Hebrew of Joshua 15:17 can attach the phrase brother of Caleb either to Othniel or to Kenaz. On the first reading Othniel is Caleb's brother; on the second he is Caleb's nephew. Translations differ and the verse does not decide.",
        scriptureRefs: ["Joshua 15:17"],
        inferred: true,
      },
      {
        kind: "husband of",
        targetEntityId: "achsah",
        scriptureRefs: ["Joshua 15:16-17"],
      },
      {
        kind: "possibly connected with",
        targetEntityId: "kenizzites",
        note: "His father's name is Kenaz and Caleb is called the Kenizzite, but the text never says the two designations refer to the same ancestry.",
        scriptureRefs: ["Joshua 14:6", "Joshua 15:17"],
        inferred: true,
      },
    ],
    background:
      "Othniel has no history before the sentence that introduces him. He is son of Kenaz, which is also the name lying behind the term Kenizzite applied to [[entity:caleb]], and Joshua 15:17 attaches him to Caleb with a phrase that can be read two ways. The Hebrew allows either that Othniel was Caleb's brother or that Kenaz was, which would make Othniel a nephew. Translations divide on it. Joshua does not settle the question and neither does this profile.",
    actionsAndConsequences:
      "Caleb, having taken [[entity:hebron]], goes up against [[entity:debir]] and offers [[entity:achsah]] in marriage to whoever strikes the town and takes it. Othniel takes it and receives her. That is his entire part in the book: one town and one marriage, in two verses. What follows belongs to Achsah, who asks her father for springs and gets them, so the household Othniel marries into ends up holding both a hill country fortress and water in the dry south. Joshua treats Debir as still needing to be taken here, after the southern campaign in chapter 10 has already reported striking it, which is one of the tensions the book leaves standing rather than resolving.",
    significance:
      "Othniel matters in Joshua for what his two verses reveal about how land was actually held. A named fortress inside Judah's allotment is taken by a family, at a family's initiative, with a family's incentive attached to it. The campaign chapters report kings beaten and towns struck; chapter 15 shows some of the same towns being taken again by individuals. Holding both accounts in view is the difference between reading Joshua as a finished conquest and reading it as the book actually presents itself, which is what makes an otherwise minor figure worth a profile.",
    timelineEventIds: [
      "caleb-offers-achsah-to-whoever-takes-debir",
      "othniel-takes-debir-and-marries-achsah",
      "achsah-asks-her-father-for-springs",
      "the-debir-episode-retold-in-judges",
      "othniel-raised-up-as-the-first-deliverer",
    ],
    placeEntityIds: [
      "debir",
      "hebron",
      "region-hill-country-judah",
      "region-negev",
    ],
    themeIds: [
      "land-and-inheritance",
      "outsiders-and-belonging",
      "obedience-and-failure",
    ],
    scriptureRefs: ["Joshua 10:38-39", "Joshua 15:15-19"],
    citations: [
      {
        sourceId: "web-bible",
        locator: "Joshua 15:17",
        supportedClaim:
          "The wording that attaches Othniel to Caleb, which is the source of the ambiguity.",
      },
      {
        sourceId: "hess-joshua",
        supportedClaim:
          "The grammatical options for Othniel's relation to Caleb and the way translations divide on them.",
      },
      {
        sourceId: "howard-joshua",
        supportedClaim:
          "The tension between the summary capture of Debir in Joshua 10 and its capture by Othniel in Joshua 15.",
      },
    ],
    later: {
      body: "Judges names him twice as Caleb's younger brother, resolving in one direction the ambiguity Joshua leaves open, and then makes him the first of the deliverers. The Spirit of the LORD comes on him, he goes out to war against Cushan-rishathaim, and the land has rest until he dies. Nothing in Joshua anticipates any of that.",
      scriptureRefs: ["Judges 1:13", "Judges 3:7-11"],
    },
    whatWeAreNotTold: [
      "Whether he is Caleb's younger brother or his nephew: the Hebrew phrase can support either, and translations differ",
      "Whether the Kenaz who is his father and the Kenizzite designation of Caleb point to the same ancestry",
      "How he took Debir, since no account of the action is given",
      "Anything about him in Joshua beyond the two verses at 15:16-17",
      "Where Debir was; the identification is disputed and the site register marks it so",
    ],
  },

  /* ================================================================ */
  /* Achsah                                                           */
  /* ================================================================ */
  {
    entityId: "achsah",
    identity: "Caleb's daughter, Othniel's wife, and a landholder in the Negev.",
    relationships: [
      {
        kind: "daughter of",
        targetEntityId: "caleb",
        scriptureRefs: ["Joshua 15:16-18"],
      },
      {
        kind: "wife of",
        targetEntityId: "othniel",
        scriptureRefs: ["Joshua 15:17"],
      },
      {
        kind: "holds land in",
        targetEntityId: "region-negev",
        note: "Her own words: you have set me in the land of the south.",
        scriptureRefs: ["Joshua 15:19"],
      },
    ],
    background:
      "Achsah appears only in the Debir episode. Her father, having taken [[entity:hebron]], offers her in marriage to whoever takes the next fortified town, and [[entity:othniel]] does. The text records the offer and the outcome without her voice. Then, as soon as land is settled on her, it gives her the only words she speaks anywhere in Scripture apart from the parallel account. She is first a woman placed by an arrangement she did not make, and then a landholder making a case.",
    actionsAndConsequences:
      "Achsah gets down from her donkey. [[entity:caleb]] asks what she wants, and she asks for a blessing on stated grounds: since he has set her in the land of the south, he should give her springs of water as well. She asks for a specific thing and gives a reason drawn from the ground itself, and the reason is sound, because a field in the [[entity:region-negev]] without water is not much of an inheritance. Caleb gives her the upper and the lower springs. The narrative reports the request and the grant and says nothing about how either of them felt. What she gains is not an extra on top of her portion; it is the thing that makes the portion work at all.",
    significance:
      "Achsah's three verses do work out of all proportion to their length. They give a concrete picture of inheritance at household level, where a woman could hold land and argue for what that land needed. Placed just after her father's claim on Hebron, the episode repeats the same pattern in miniature: someone names what has been granted, states plainly what is missing, and receives it. The allotment chapters are mostly boundary lists, and this is one of the few places where a list opens out into a conversation. The subject is water rather than territory, which is an accurate reading of that country.",
    timelineEventIds: [
      "caleb-offers-achsah-to-whoever-takes-debir",
      "othniel-takes-debir-and-marries-achsah",
      "achsah-asks-her-father-for-springs",
      "the-debir-episode-retold-in-judges",
    ],
    placeEntityIds: [
      "debir",
      "hebron",
      "region-negev",
      "region-hill-country-judah",
    ],
    themeIds: ["land-and-inheritance", "promise-and-fulfillment"],
    scriptureRefs: ["Joshua 15:16-19"],
    citations: [
      {
        sourceId: "web-bible",
        locator: "Joshua 15:18-19",
        supportedClaim:
          "Achsah's request, the reason she gives for it, and Caleb's grant of the upper and lower springs.",
      },
      {
        sourceId: "rainey-notley-sacred-bridge",
        supportedClaim:
          "Why springs rather than acreage are the decisive asset in the dry country south of the Judean hills.",
      },
      {
        sourceId: "creach-joshua",
        supportedClaim:
          "The Achsah exchange as one of the few narrative openings inside the allotment lists.",
      },
    ],
    later: {
      body: "Judges 1 retells the exchange almost word for word, inside a chapter that is otherwise a catalogue of what Israel failed to take, which gives the same scene a noticeably different setting. Nothing further is said about her anywhere in Scripture.",
      scriptureRefs: ["Judges 1:12-15"],
    },
    whatWeAreNotTold: [
      "Anything of her life after this exchange; the allotment narrative gives her three verses and nothing else in the book touches her",
      "Whether she had children, and whether the springs passed to them",
      "Her own view of the marriage arrangement, which the text does not record",
      "Which springs these were; the upper and lower springs are not identified with any known site",
    ],
  },

  /* ================================================================ */
  /* The daughters of Zelophehad                                      */
  /* ================================================================ */
  {
    entityId: "zelophehads-daughters",
    identity:
      "Mahlah, Noah, Hoglah, Milcah and Tirzah, daughters of Zelophehad son of Hepher, of the clan of Manasseh.",
    relationships: [
      {
        kind: "daughters of",
        targetEntityId: "zelophehad",
        scriptureRefs: ["Numbers 27:1", "Joshua 17:3"],
      },
      {
        kind: "granddaughters of",
        targetEntityId: "hepher",
        scriptureRefs: ["Numbers 27:1", "Joshua 17:2-3"],
      },
      {
        kind: "of the clan of",
        targetEntityId: "machir",
        note: "Their line runs through Machir, Manasseh's firstborn clan, in the Joshua genealogy.",
        scriptureRefs: ["Joshua 17:1-3"],
      },
      {
        kind: "receive inheritance within",
        targetEntityId: "tribe-manasseh-west",
        scriptureRefs: ["Joshua 17:3-6"],
      },
      {
        kind: "petitioners before",
        targetEntityId: "moses",
        scriptureRefs: ["Numbers 27:1-11"],
      },
      {
        kind: "petitioners before",
        targetEntityId: "eleazar",
        scriptureRefs: ["Numbers 27:2", "Joshua 17:4"],
      },
    ],
    background:
      "The five sisters are named together every time they appear, and always in a legal setting. Their father died in the wilderness leaving no son. Under the rules as they stood, his portion, and with it his name in the tribal registers, would have disappeared. They stood before [[entity:moses]], [[entity:eleazar]] the priest, the leaders and the whole congregation at the entrance of the tent of meeting, and argued that this was wrong. The ruling went in their favour, was then made general law for any man who dies without a son, and was later qualified by a requirement that they marry within their father's tribe so that the portion stays in Manasseh.",
    actionsAndConsequences:
      "In Joshua they come forward again, this time to Eleazar, [[entity:joshua]] and the princes, and cite the ruling: the LORD commanded Moses to give us an inheritance among our brothers. They receive it. The consequence is visible in the boundary lists, where Manasseh is counted with ten portions rather than the number the clan names alone would produce, because five of those portions belong to these women. The book does not present this as an exception being tolerated. It records the claim, the precedent and the grant in the same flat administrative voice it uses for every other allotment, which is itself the point worth noticing.",
    significance:
      "Their case is the clearest instance in Joshua of a law made by petition being carried out on the ground. It also shows what the allotment was for. Land in these chapters is not primarily wealth; it is what keeps a name attached to a place, which is exactly the argument the sisters made and won. Set in the middle of Manasseh's territory description, their portion is a permanent record that the tribal map was shaped in part by five women who asked. Nothing in the chapter suggests their inheritance was smaller, or held on weaker terms, than anyone else's.",
    timelineEventIds: [
      "zelophehads-daughters-petition-moses",
      "zelophehads-daughters-receive-their-portion",
      "eleazar-and-joshua-preside-over-the-allotment",
    ],
    placeEntityIds: [
      "shiloh",
      "region-hill-country-ephraim",
      "region-jezreel-valley",
      "shechem",
    ],
    themeIds: [
      "land-and-inheritance",
      "memory-and-memorials",
      "promise-and-fulfillment",
      "outsiders-and-belonging",
    ],
    scriptureRefs: [
      "Numbers 26:33",
      "Numbers 27:1-11",
      "Numbers 36:1-12",
      "Joshua 17:1-6",
    ],
    citations: [
      {
        sourceId: "web-bible",
        locator: "Joshua 17:3-6",
        supportedClaim:
          "Their appeal to the ruling given through Moses and the counting of Manasseh's ten portions.",
      },
      {
        sourceId: "milgrom-numbers",
        supportedClaim:
          "The Numbers 27 and 36 rulings on daughters' inheritance and the qualification about marrying within the tribe.",
      },
      {
        sourceId: "weinfeld-promise-land",
        supportedClaim:
          "Why holding land is treated as the mechanism that preserves a family name in the tribal registers.",
      },
    ],
    later: {
      body: "Chronicles keeps the Manasseh clan lists that include Hepher and Zelophehad. Later Jewish legal discussion treated the Numbers ruling as a founding case in inheritance law, argued over at length precisely because it was decided by petition. Joshua itself says nothing beyond the grant.",
      scriptureRefs: ["1 Chronicles 7:14-19"],
    },
    whatWeAreNotTold: [
      "Their ages, or whether all five were still living at the allotment",
      "Whether they married, and whom, since Numbers 36 sets a condition without reporting an outcome",
      "Where their portion lay within Manasseh; the text grants them a share without giving its boundaries",
      "Anything about their mother, or about Zelophehad beyond his death without sons",
      "Which of the five spoke, since the petition is reported in the plural throughout",
    ],
  },

  /* ================================================================ */
  /* Joseph                                                           */
  /* ================================================================ */
  {
    entityId: "joseph",
    identity:
      "Son of Jacob, father of Ephraim and Manasseh; the man whose bones Israel carries out of Egypt and buries at Shechem.",
    relationships: [
      {
        kind: "son of",
        targetEntityId: "jacob",
        scriptureRefs: ["Genesis 48:3-5", "Joshua 24:32"],
      },
      {
        kind: "father of",
        targetEntityId: "tribe-ephraim",
        scriptureRefs: ["Genesis 48:5", "Joshua 16:4"],
      },
      {
        kind: "father of",
        targetEntityId: "tribe-manasseh-west",
        scriptureRefs: ["Genesis 48:5", "Joshua 17:1-2"],
      },
      {
        kind: "buried in ground bought by",
        targetEntityId: "jacob",
        note: "The plot at Shechem that Jacob bought from the sons of Hamor.",
        scriptureRefs: ["Genesis 33:19", "Joshua 24:32"],
      },
      {
        kind: "binds by oath",
        targetEntityId: "moses",
        note: "The oath taken from Israel about his bones is discharged first by Moses, who carries them, and finally at Shechem.",
        scriptureRefs: ["Genesis 50:25", "Exodus 13:19"],
      },
    ],
    background:
      "Joseph is in Egypt before the story Joshua tells begins. [[entity:jacob]]'s household went down there, Joseph's two sons were born there, and Jacob claimed those two boys as his own, on the same footing as Reuben and Simeon. That single act is why the allotment lists in Joshua contain no tribe of Joseph but two tribes descended from him, holding the central hill country between them. Before he died Joseph made Israel swear that when God visited them and brought them up, they would carry his bones with them. He was embalmed and put in a coffin, and there the matter rested through the whole of the oppression.",
    actionsAndConsequences:
      "Exodus records in a single verse that Moses took Joseph's bones, because of the oath. The coffin then travels with Israel through the sea, Sinai, the wilderness years and the Transjordan campaigns, unmentioned for the whole of it. Joshua 24:32 disposes of it: the bones are buried in the parcel of ground at [[entity:shechem]] that Jacob had bought from the sons of Hamor, and the plot becomes the inheritance of Joseph's descendants. The land he is buried in is land his father paid for, and it lies inside the territory his own sons were allotted. Two of the book's last three verses are the discharge of a promise made in a foreign country generations earlier.",
    significance:
      "Joseph is how the book measures the distance it has covered. The whole of Joshua sits inside the gap between an oath sworn beside a coffin and a burial, and closing that gap is one of the last things the narrative does, in the same three verses that bury [[entity:joshua]] and [[entity:eleazar]]. Two tribes carry his name into the hill country while he himself goes into the ground in a field with a purchase price attached to it. The promise and the deed of sale end up in the same place, which is the book's habit: it keeps putting theological claims on specific pieces of dirt.",
    timelineEventIds: [
      "jacob-buys-ground-at-shechem",
      "jacob-and-his-household-go-down-to-egypt",
      "jacob-claims-ephraim-and-manasseh-as-his-own",
      "joseph-binds-israel-by-oath-about-his-bones",
      "a-king-who-did-not-know-joseph",
      "josephs-bones-carried-out-of-egypt",
      "josephs-bones-buried-at-shechem",
      "jacob-and-joseph-among-the-faithful-in-hebrews",
    ],
    placeEntityIds: [
      "shechem",
      "mount-ebal",
      "mount-gerizim",
      "region-hill-country-ephraim",
    ],
    themeIds: [
      "promise-and-fulfillment",
      "memory-and-memorials",
      "land-and-inheritance",
      "covenant-faithfulness",
    ],
    scriptureRefs: [
      "Genesis 48:3-6",
      "Genesis 50:24-26",
      "Exodus 13:19",
      "Joshua 16:1-4",
      "Joshua 17:14-18",
      "Joshua 24:32",
    ],
    citations: [
      {
        sourceId: "web-bible",
        locator: "Joshua 24:32",
        supportedClaim:
          "The burial of Joseph's bones in the ground Jacob bought, and the plot passing to his descendants.",
      },
      {
        sourceId: "wright-shechem",
        supportedClaim:
          "Shechem's setting in the pass between Ebal and Gerizim and its long occupation history.",
      },
      {
        sourceId: "goldsworthy-according-to-plan",
        supportedClaim:
          "The oath about Joseph's bones read as a thread tying the patriarchal promises to the settlement narrative.",
      },
    ],
    later: {
      body: "Hebrews lists Joseph's instruction about his bones among the acts of faith, treating it as confidence in a promise he did not live to see kept. Stephen's speech in Acts retells the burial at Shechem with details that do not line up exactly with Genesis and Joshua, and John's Gospel still identifies a plot near Sychar as ground Jacob gave to Joseph.",
      scriptureRefs: ["Hebrews 11:22", "Acts 7:15-16", "John 4:5"],
    },
    whatWeAreNotTold: [
      "Anything of his life in Egypt; Joshua names him only as an ancestor and as a set of bones",
      "Where the coffin was kept during the wilderness years, which no text records",
      "Why the burial waits until the allotment is complete, which the text does not explain",
      "Where exactly at Shechem the plot lay, which the text does not fix",
      "Whether the Joseph tribes knew the Genesis narratives in the form we have them when they received that land",
    ],
  },

  /* ================================================================ */
  /* Abraham                                                          */
  /* ================================================================ */
  {
    entityId: "abraham",
    identity:
      "The man to whom the land promise is first made; father of Isaac, buried in the field he bought at Hebron.",
    relationships: [
      {
        kind: "son of",
        targetEntityId: "terah",
        note: "Joshua 24:2 names Terah and says the fathers beyond the River served other gods.",
        scriptureRefs: ["Joshua 24:2"],
      },
      {
        kind: "father of",
        targetEntityId: "isaac",
        scriptureRefs: ["Joshua 24:3", "Genesis 21:1-3"],
      },
      {
        kind: "grandfather of",
        targetEntityId: "jacob",
        scriptureRefs: ["Joshua 24:3-4"],
      },
      {
        kind: "buried at",
        targetEntityId: "hebron",
        note: "In the field at Machpelah, which Joshua knows as Kiriath-arba.",
        scriptureRefs: ["Genesis 23:17-20", "Genesis 25:9-10", "Joshua 14:15"],
      },
      {
        kind: "recipient of the promise realised for",
        targetEntityId: "tribe-judah",
        note: "The oath to the fathers is the stated ground of every grant in the allotment chapters, Caleb's included.",
        scriptureRefs: ["Joshua 21:43-45", "Joshua 14:9"],
      },
    ],
    background:
      "Joshua's closing speech starts further back than Egypt. It says Israel's fathers lived beyond the Euphrates, names [[entity:terah]], and states that they served other gods. Abraham was taken from there and led through Canaan. Genesis has him told at [[entity:shechem]], and again after Lot separated from him, that the land he was walking through would belong to his offspring. He owned none of it. The one piece of Canaan he held outright was a burial field at Machpelah near Mamre, bought for a stated price, where he, Sarah, Isaac, Rebekah, Jacob and Leah were laid. Joshua knows the town there as Kiriath-arba, and calls it [[entity:hebron]].",
    actionsAndConsequences:
      "Abraham does nothing in the book of Joshua. What he did earlier is the book's charter. Every statement that the LORD gave Israel the land he swore to their fathers points back to him, and the summary in Joshua 21:43-45 is written in the vocabulary of that oath. The geography follows him as well: Shechem, where he was first told the land would be his offspring's, is where Joshua reads out the law and renews the covenant, and Hebron, where he bought a grave, is the town [[entity:caleb]] asks for and receives. Joshua 24 does not hold him up as an example to copy. It presents him as a man God took out of an idolatrous household, which is the sentence that sets up the demand to put away foreign gods.",
    significance:
      "Abraham supplies both the book's measure of success and its limit. Success, because Joshua can say that not one good thing the LORD had promised had failed. A limit, because the promise was of offspring and a land, and the book closes with nations still in that land and tribes that have not taken possession. Reformed theology has read Joshua as a real but partial fulfilment of the Abrahamic covenant, with the shortfall pointing forward rather than cancelling anything. That is one Christian reading among several, and the text does not argue for it; it simply keeps both halves in view in the same chapters.",
    timelineEventIds: [
      "abraham-leaves-the-household-beyond-the-river",
      "abraham-promised-the-land-of-canaan",
      "abraham-buys-the-burial-field-at-hebron",
      "the-promise-passes-to-isaac-and-jacob",
      "covenant-renewal-at-shechem",
      "abraham-as-heir-of-the-promise-in-the-new-testament",
    ],
    placeEntityIds: ["hebron", "shechem", "region-hill-country-judah"],
    themeIds: [
      "promise-and-fulfillment",
      "land-and-inheritance",
      "covenant-faithfulness",
      "outsiders-and-belonging",
    ],
    scriptureRefs: [
      "Genesis 12:1-7",
      "Genesis 13:14-17",
      "Genesis 15:18",
      "Genesis 23:17-20",
      "Joshua 14:9",
      "Joshua 21:43-45",
      "Joshua 24:2-3",
    ],
    citations: [
      {
        sourceId: "web-bible",
        locator: "Joshua 24:2-3",
        supportedClaim:
          "That Joshua's own retelling begins with the fathers beyond the River serving other gods.",
      },
      {
        sourceId: "weinfeld-promise-land",
        supportedClaim:
          "The land promise to the patriarchs and the legal vocabulary in which grants of territory are expressed.",
      },
      {
        sourceId: "robertson-christ-of-covenants",
        supportedClaim:
          "A Reformed account of Joshua as partial fulfilment of the Abrahamic covenant rather than its completion.",
      },
      {
        sourceId: "howard-joshua",
        supportedClaim:
          "How Joshua 21:43-45 and Joshua 23 hold a claim of complete fulfilment alongside admitted unfinished possession.",
      },
    ],
    later: {
      body: "Paul reads the promise to Abraham as reaching beyond a territory to an inheritance received by faith. Hebrews says he lived as a stranger in the land of promise and looked for a city with foundations, and Stephen notes that God gave him no inheritance in it, not even enough to set a foot on. All three are readings of Genesis, not claims Joshua makes.",
      scriptureRefs: ["Romans 4:13-17", "Hebrews 11:8-10", "Acts 7:5"],
    },
    whatWeAreNotTold: [
      "Anything about him in Joshua beyond the two verses of chapter 24 and the recurring appeal to the oath to the fathers",
      "Which gods his father's household served, which Joshua 24:2 asserts without naming them",
      "How the boundaries promised in Genesis 15:18 relate to the territory actually allotted in Joshua, which neither book reconciles",
      "Any interval at all between Abraham and the crossing, which Joshua never estimates",
    ],
  },

  /* ================================================================ */
  /* Jacob                                                            */
  /* ================================================================ */
  {
    entityId: "jacob",
    identity:
      "Son of Isaac, father of the twelve tribal ancestors, and the buyer of the ground at Shechem where Joseph is finally buried.",
    relationships: [
      {
        kind: "son of",
        targetEntityId: "isaac",
        scriptureRefs: ["Joshua 24:3-4", "Genesis 25:26"],
      },
      {
        kind: "grandson of",
        targetEntityId: "abraham",
        scriptureRefs: ["Joshua 24:3-4"],
      },
      {
        kind: "father of",
        targetEntityId: "joseph",
        scriptureRefs: ["Genesis 48:3-5", "Joshua 24:32"],
      },
      {
        kind: "adoptive father of",
        targetEntityId: "tribe-ephraim",
        note: "Claims Joseph's Egyptian-born sons as his own, on the footing of Reuben and Simeon.",
        scriptureRefs: ["Genesis 48:5-6", "Joshua 14:4"],
      },
      {
        kind: "adoptive father of",
        targetEntityId: "tribe-manasseh-west",
        scriptureRefs: ["Genesis 48:5-6", "Joshua 14:4"],
      },
      {
        kind: "buyer of ground at",
        targetEntityId: "shechem",
        scriptureRefs: ["Genesis 33:18-20", "Joshua 24:32"],
      },
    ],
    background:
      "Jacob is the generation through which the promise reaches a family large enough to become tribes. Joshua 24 compresses him into a clause: God gave Isaac Jacob and Esau, Esau received Mount Seir, and Jacob and his children went down into Egypt. Genesis fills in the two things Joshua needs. Returning from Paddan-aram, Jacob camped before [[entity:shechem]] and bought the parcel of land he was pitched on from the sons of Hamor. Dying in Egypt, he took [[entity:joseph]]'s two Egyptian-born sons as his own, and asked to be carried back and buried with his fathers at [[entity:hebron]] rather than left where he died.",
    actionsAndConsequences:
      "Both of those acts show up in Joshua's land arrangements. Because Ephraim and Manasseh were claimed as Jacob's sons, the allotment lists count two tribes from Joseph and none bearing his name, while Levi receives towns rather than a territory, which keeps the count where it needs to be. Because Jacob bought ground at Shechem, the last chapter has somewhere legally his in which to bury Joseph's bones, and the plot passes to Joseph's descendants as an inheritance. His refusal to be buried in Egypt is the same instinct Joseph's oath repeats a generation later. Neither man is described as owning Canaan, and both of them arrange to be put into it.",
    significance:
      "Jacob's part in Joshua is structural rather than narrative. He is the reason the tribal map has the shape it has, and the reason the book's closing verses can name a legal owner for a field. Shechem, the town he bought into, is where Joshua reads the blessing and the curse and where the covenant is renewed at the end, which puts Israel's first recorded purchase in the land and its last covenant assembly on the same ground. The book never comments on that, but it does keep returning to that one valley between [[entity:mount-ebal]] and [[entity:mount-gerizim]].",
    timelineEventIds: [
      "abraham-buys-the-burial-field-at-hebron",
      "the-promise-passes-to-isaac-and-jacob",
      "jacob-buys-ground-at-shechem",
      "jacob-and-his-household-go-down-to-egypt",
      "jacob-claims-ephraim-and-manasseh-as-his-own",
      "jacob-asks-to-be-buried-with-his-fathers",
      "covenant-renewal-at-shechem",
      "josephs-bones-buried-at-shechem",
      "jacob-and-joseph-among-the-faithful-in-hebrews",
    ],
    placeEntityIds: [
      "shechem",
      "mount-ebal",
      "mount-gerizim",
      "hebron",
      "region-hill-country-ephraim",
    ],
    themeIds: [
      "promise-and-fulfillment",
      "land-and-inheritance",
      "memory-and-memorials",
      "unity-among-tribes",
    ],
    scriptureRefs: [
      "Genesis 33:18-20",
      "Genesis 48:3-6",
      "Genesis 49:29-32",
      "Joshua 14:4",
      "Joshua 24:3-4",
      "Joshua 24:32",
    ],
    citations: [
      {
        sourceId: "web-bible",
        locator: "Joshua 24:32",
        supportedClaim:
          "That the burial plot at Shechem is identified as ground Jacob bought from the sons of Hamor.",
      },
      {
        sourceId: "wright-shechem",
        supportedClaim:
          "Shechem's position in the pass between Ebal and Gerizim, and why that valley recurs in Israel's traditions.",
      },
      {
        sourceId: "vos-biblical-theology",
        supportedClaim:
          "A Reformed reading of the patriarchal blessings as the structure the later tribal arrangements assume.",
      },
    ],
    later: {
      body: "Hebrews singles out Jacob blessing Joseph's sons as an act of faith in a promise he never saw kept. John's Gospel refers to a well near Sychar as the plot Jacob gave to his son Joseph, which shows how long that piece of ground kept its identification.",
      scriptureRefs: ["Hebrews 11:21", "John 4:5-6"],
    },
    whatWeAreNotTold: [
      "Anything about him in Joshua beyond the clause in chapter 24 and the two references to the ground at Shechem",
      "Why Joshua's summary omits everything between his birth and the descent to Egypt",
      "How the tribal lists in Joshua relate to the blessings of Genesis 49, which the book never cites",
      "Where the ground he bought lay in relation to the town of Shechem, which the text does not fix",
      "Any dates or intervals; Joshua places him in a sequence and never in a chronology",
    ],
  },
];

/* ------------------------------------------------------------------ */
/* Lookup helpers                                                     */
/* ------------------------------------------------------------------ */

export const PROFILE_BY_ENTITY_ID: Record<string, PersonProfile> =
  Object.fromEntries(PROFILES.map((p) => [p.entityId, p]));

export const PROFILED_ENTITY_IDS: string[] = PROFILES.map((p) => p.entityId);
