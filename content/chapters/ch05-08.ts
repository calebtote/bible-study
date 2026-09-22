/**
 * Joshua 5-8: a pause for covenant identity, the fall of Jericho, the theft that
 * cost a battle, and the second attempt at Ai followed by an assembly at Ebal.
 *
 * Three editorial commitments shape this file.
 *
 * First, the archaeology of Jericho and Ai is reported in a register kept
 * deliberately separate from the narrative. What the text claims and what
 * excavation has established are stated as two different kinds of sentence, and
 * neither is allowed to stand in for the other. The Jericho dispute and the Ai
 * identification are both left unresolved here, because they are unresolved.
 *
 * Second, the violence is the subject where the text makes it the subject. The
 * herem of chapter 6 and the execution of chapter 7 are described in the prose
 * rather than managed by a hedge, and the study's difficult questions on the
 * command to destroy the Canaanites and on Achan's household carry the argument
 * further than a chapter page can.
 *
 * Third, chapter 5's notice that the manna ceased and chapter 6's closing note
 * about Joshua's fame are marked "summary" rather than "event". Neither is a
 * located episode in sequence, and only event milestones may animate movement,
 * so labelling them otherwise would make the map assert a march the text does
 * not describe.
 */

import type { Chapter, Milestone } from "../types";

export const CHAPTERS: Chapter[] = [
  /* ================================================================ */
  /* Chapter 5                                                        */
  /* ================================================================ */
  {
    id: "ch5",
    number: 5,
    title: "Flint knives, Passover, and a drawn sword",
    summary:
      "Between the river and the first battle the book stops for a chapter. Israel is circumcised, keeps Passover, stops receiving manna, and meets an armed figure who refuses to say whose side he is on.",
    phase: "preparation-and-entry",
    scriptureRange: "Joshua 5:1-15",
    milestoneIds: [
      "ch5-flint-knives-at-gilgal",
      "ch5-passover-in-the-plains",
      "ch5-the-manna-stops",
      "ch5-commander-with-drawn-sword",
    ],
    sections: [
      {
        id: "ch5-at-a-glance",
        kind: "at-a-glance",
        title: "At a glance",
        body:
          "Between the river and the first battle the book stops. A whole generation born in the wilderness is circumcised at Gilgal, the reproach of Egypt is rolled away, and Passover is kept in the plains of Jericho. The next day the manna stops and Israel eats Canaan's own grain. Then Joshua meets an armed stranger who refuses to say which side he is on.",
        scriptureRefs: ["Joshua 5:1-15"],
        citations: [],
        evidenceLabels: ["biblical-account"],
      },
      {
        id: "ch5-walk-through",
        kind: "walk-through",
        title: "Walk through the chapter",
        body:
          "News of the crossing reaches the kings of the [[entity:amorites]] beyond the Jordan and the kings of the [[entity:canaanites]] by the sea, and their courage drains away. That is the situation in which God tells [[entity:joshua]] to make flint knives.\n\n" +
          "Every male born on the desert march is circumcised at a place the text calls Gibeath-haaraloth, the hill of the foreskins. The generation that left Egypt had been circumcised; the generation that replaced it had not. The camp then waits while the men heal, which is a long pause for a fighting force inside hostile territory. God says the reproach of Egypt has been rolled away, and the site is named [[entity:gilgal]], a word the text ties to that rolling.\n\n" +
          "On the fourteenth day of the month they keep Passover in the plains of [[entity:jericho]]. The next day they eat unleavened bread and parched grain from the produce of the land, and the manna stops.\n\n" +
          "Then [[entity:joshua]] is near Jericho and sees a man standing with a drawn sword. He asks the soldier's question: are you for us or for our adversaries? The answer refuses both. The figure names himself commander of Yahweh's army, and [[entity:joshua]] falls on his face and is told to take off his sandals, because the ground is holy.",
        scriptureRefs: ["Joshua 5:1-15"],
        citations: [
          {
            sourceId: "hess-joshua",
            locator: "on Joshua 5:13-15",
            supportedClaim:
              "The figure's reply declines both sides of Joshua's question rather than claiming allegiance to Israel",
          },
        ],
        evidenceLabels: ["biblical-account"],
      },
      {
        id: "ch5-what-brought-us-here",
        kind: "what-brought-us-here",
        title: "What brought us here",
        body:
          "Israel crossed the [[entity:jordan-river]] on the tenth day of the first month and camped at [[entity:gilgal]], where twelve stones from the riverbed were set up. Behind that lies forty years in which the generation that refused to enter died out. Numbers and Deuteronomy both record that failure; Joshua 5 adds that the sons born on the way had not been circumcised. The text states this and does not explain it.\n\n" +
          "Two of the three pieces here reach back to Egypt. Passover was instituted the night Israel left, and the law ties eating it to being circumcised, which makes the order of this chapter a legal requirement rather than a mood. The manna began a month after the sea crossing, with the notice that Israel ate it until they came to the border of Canaan. Chapter 5 is where that clause runs out.",
        scriptureRefs: [
          "Joshua 4:19",
          "Exodus 12:43-49",
          "Exodus 16:35",
          "Numbers 14:26-35",
          "Deuteronomy 2:14-16",
        ],
        citations: [
          {
            sourceId: "block-deuteronomy",
            locator: "on Deuteronomy 2:14-16",
            supportedClaim:
              "Deuteronomy records the death of the wilderness generation as the reason a new generation stands at the edge of the land",
          },
          {
            sourceId: "hess-joshua",
            locator: "on Joshua 5:2-10",
            supportedClaim:
              "The chapter's order, circumcision before Passover, follows the law's restriction of the meal to the circumcised",
          },
        ],
        evidenceLabels: ["biblical-account"],
      },
      {
        id: "ch5-surrounding-world",
        kind: "surrounding-world",
        title: "The surrounding world",
        body:
          "Circumcision was not unique to Israel. Egyptians practised it, and so did several of Israel's neighbours; Jeremiah later lists Egypt, Edom, Ammon and Moab among the circumcised. So the rite did not mark Israel off from Egypt by being unusual. What the text makes of it is covenantal: this is the sign given to [[entity:abraham]], and the point is whose people these are.\n\n" +
          "The phrase *the reproach of Egypt* is not explained. Readings differ over whether it means the shame of slavery, the taunt that Yahweh brought them out to die in the desert, or the uncircumcised state of the wilderness generation itself. We do not know which the author intended.\n\n" +
          "The setting is agriculturally specific. The plains of [[entity:jericho]] sit around 250 metres below sea level, warm enough that barley there ripens earlier than anywhere in the hill country. An army arriving in the first month arrives when that grain is standing. [[entity:gilgal]] itself has never been securely identified; the site register marks it disputed, with Khirbet el-Mafjir and Khirbet en-Nitla among the candidates.",
        scriptureRefs: ["Genesis 17:9-14", "Joshua 5:9", "Jeremiah 9:25-26"],
        citations: [
          {
            sourceId: "anchor-bible-dictionary",
            locator: "s.v. circumcision",
            supportedClaim:
              "Circumcision was practised in Egypt and among several of Israel's neighbours, so the rite itself was not what distinguished Israel",
          },
          {
            sourceId: "butler-joshua",
            locator: "on Joshua 5:9",
            supportedClaim:
              "The meaning of the phrase rendered 'the reproach of Egypt' is disputed and the text does not explain it",
          },
          {
            sourceId: "rainey-notley-sacred-bridge",
            supportedClaim:
              "The Jericho plain lies far below sea level and is hot enough that its grain ripens well ahead of the hill country's",
          },
        ],
        evidenceLabels: ["biblical-account", "externally-attested"],
        collapsedByDefault: true,
      },
      {
        id: "ch5-why-it-matters",
        kind: "why-it-matters",
        title: "Why it matters",
        body:
          "The first thing Israel does inside Canaan is not military. It submits to a knife and eats a meal about being brought out of Egypt. Reformed theology reads circumcision and Passover as signs and seals of the covenant, visible marks that attach a promise to a particular people, and Calvin treats the delay before battle as evidence that the promise rather than Israel's readiness carries the campaign. That is a Reformed reading, and other Christian traditions weight the two rites differently.\n\n" +
          "The last scene resists being used. [[entity:joshua]] asks a question with two options and is given neither. The commander does not enlist in Israel's army; Joshua is told to worship. Whatever this chapter authorises, it is not the assumption that God stands with whoever is holding the sword, and nothing in it transfers to any later war.",
        scriptureRefs: ["Joshua 5:9", "Joshua 5:13-15"],
        citations: [
          {
            sourceId: "westminster-confession",
            locator: "ch. 27",
            supportedClaim:
              "The Reformed confessional tradition treats circumcision and Passover as signs and seals of the covenant of grace",
          },
          {
            sourceId: "calvin-joshua",
            locator: "on Joshua 5",
            supportedClaim:
              "Calvin reads the pause for circumcision and Passover as showing that Israel's security rested on the promise rather than on military readiness",
          },
        ],
        evidenceLabels: ["theological-interpretation", "biblical-account"],
      },
      {
        id: "ch5-details-worth-noticing",
        kind: "details-worth-noticing",
        title: "Details worth noticing",
        body:
          "The knives are flint. Israel had metal, and the text neither explains the choice nor treats it as remarkable; the same stone tools appear in Exodus 4.\n\n" +
          "Joshua 5:2 says to circumcise Israel *a second time*, which has puzzled readers since antiquity and reads differently in the Greek tradition. Commentators offer solutions; none has settled the matter.\n\n" +
          "Gibeath-haaraloth is named once and never again. [[entity:gilgal]] is explained by a play on a verb meaning to roll, which is how the text links the place to the rolled-away reproach. The text is punning, and knows it.\n\n" +
          "Exodus 16 already reports that the manna lasted until Israel reached the edge of Canaan. Joshua 5:12 supplies the date, and pairs the last of the manna with the first of the local grain inside a single verse.\n\n" +
          "Two details tie the closing scene to earlier ones. A messenger with a drawn sword had stood in [[entity:balaam]]'s road, and the instruction to remove sandals repeats what [[entity:moses]] heard at the bush.",
        scriptureRefs: [
          "Joshua 5:2",
          "Joshua 5:12",
          "Exodus 16:35",
          "Numbers 22:22-31",
          "Exodus 3:1-6",
        ],
        citations: [
          {
            sourceId: "butler-joshua",
            locator: "on Joshua 5:2",
            supportedClaim:
              "The phrase rendered 'a second time' is a long-standing interpretive difficulty and the Greek tradition differs from the Hebrew here",
          },
          {
            sourceId: "boling-wright-joshua",
            locator: "on Joshua 5:9",
            supportedClaim:
              "The name Gilgal is connected to a verb meaning to roll as a wordplay rather than as an etymology",
          },
        ],
        evidenceLabels: ["biblical-account"],
        collapsedByDefault: true,
      },
      {
        id: "ch5-difficult-questions",
        kind: "difficult-questions",
        title: "Difficult questions",
        body:
          "Circumcising every fighting man within sight of a walled city is, on any military reading, indefensible. The text shows no awareness of the problem and offers no protective detail: no watch posted, no diversion, nothing. Readers respond differently. Some take the silence as the point, the narrative refusing to let Israel's competence matter. Others read chapter 5 as liturgical shaping, a later community's ordering of memory rather than a field report. The book gives no basis for deciding between them.\n\n" +
          "The figure with the sword is not identified. He accepts [[entity:joshua]]'s prostration and speaks of holy ground, and the account gives him no name, no departure and no further appearance. A long Christian tradition reads him as the pre-incarnate Son; others read an angel of Yahweh; the text itself declines to say. Taking him as divine endorsement of Israel's warfare has to get past his answer, which was no. The study's question on the command to destroy the Canaanites takes that problem up directly.",
        scriptureRefs: ["Joshua 5:2-9", "Joshua 5:13-15"],
        citations: [
          {
            sourceId: "hess-joshua",
            locator: "on Joshua 5:2-9",
            supportedClaim:
              "The narrative gives no military explanation for incapacitating the army beside a fortified city",
          },
          {
            sourceId: "davis-joshua",
            locator: "on Joshua 5:13-15",
            supportedClaim:
              "Readers in the Reformed expositional tradition identify the commander of Yahweh's army with the pre-incarnate Christ, a reading the text does not itself state",
          },
          {
            sourceId: "wolterstorff-reading-joshua",
            supportedClaim:
              "The book's warfare language has been read in more than one register, which bears on whether a scene like this can be taken as endorsement of later violence",
          },
        ],
        evidenceLabels: [
          "biblical-account",
          "theological-interpretation",
          "reconstruction",
        ],
        collapsedByDefault: true,
      },
    ],
    discussionQuestions: [
      "The camp spends days recovering from circumcision within sight of Jericho's walls. What does the narrative gain by refusing to explain how Israel got away with that?",
      "The manna stops the day after Israel eats Canaan's grain. What changes for a people who now depend on a harvest they did not plant?",
      "The reproach of Egypt is declared rolled away forty years after Israel left Egypt. Why might the text place that announcement here rather than at the sea?",
      "Joshua offers the commander two options and is told neither. Where do you hear the question 'are you for us or for them' asked in a way this answer would unsettle?",
      "Gilgal's location has never been securely identified, and the camp there anchors the next five chapters. How much does not knowing where it stood change the way you read the campaigns run out of it?",
    ],
    relatedEntityIds: [
      "joshua",
      "moses",
      "abraham",
      "balaam",
      "gilgal",
      "jericho",
      "jordan-river",
      "amorites",
      "canaanites",
      "egypt-new-kingdom",
    ],
    themeIds: [
      "covenant-faithfulness",
      "holiness-and-presence",
      "memory-and-memorials",
      "land-and-inheritance",
    ],
    wordCount: 557,
  },

  /* ================================================================ */
  /* Chapter 6                                                        */
  /* ================================================================ */
  {
    id: "ch6",
    number: 6,
    title: "Seven days around Jericho",
    summary:
      "Israel takes its first city by walking around it, and then destroys everything in it except one household and the metal. The chapter is also where this study's honesty about archaeology is most tested.",
    phase: "campaigns-and-consequences",
    scriptureRange: "Joshua 6:1-27",
    milestoneIds: [
      "ch6-a-city-shut-up",
      "ch6-six-days-one-circuit",
      "ch6-the-seventh-day-shout",
      "ch6-rahabs-household-spared",
      "ch6-the-curse-on-rebuilding",
    ],
    sections: [
      {
        id: "ch6-at-a-glance",
        kind: "at-a-glance",
        title: "At a glance",
        body:
          "Jericho is shut tight. For six days Israel walks around it once a day with the ark and seven rams' horns, saying nothing. On the seventh they go round seven times, shout, and the wall falls. Everything in the city is destroyed except Rahab's household and the metal, and Joshua curses whoever rebuilds the place.",
        scriptureRefs: ["Joshua 6:1-27"],
        citations: [],
        evidenceLabels: ["biblical-account"],
      },
      {
        id: "ch6-walk-through",
        kind: "walk-through",
        title: "Walk through the chapter",
        body:
          "[[entity:jericho]] is shut up tight because of Israel; nobody goes out and nobody comes in. God's first word to [[entity:joshua]] is in the past tense: I have given Jericho into your hand.\n\n" +
          "The instructions are a liturgy, not a plan of attack. Armed men go in front, then seven priests carrying seven rams' horns, then the ark, then a rear guard. The people are ordered not to shout or let a word out of their mouths. For six days they walk around the city once and go back to camp.\n\n" +
          "On the seventh they rise at dawn and go round seven times. At the seventh circuit the priests blow, [[entity:joshua]] tells the people to shout, and the wall falls flat. Israel goes up into the city, each man straight in front of him.\n\n" +
          "Then the chapter reports what *herem* means in practice. Men and women, young and old, cattle, sheep and donkeys are put to the sword. The two men who had lodged with [[entity:rahab]] bring her out with her father, mother, brothers and all who belonged to her, and they are settled outside the camp. The city is burned. Silver, gold, bronze and iron go into the treasury of Yahweh's house. [[entity:joshua]] swears a curse on anyone who rebuilds the place.",
        scriptureRefs: ["Joshua 6:1-27"],
        citations: [
          {
            sourceId: "trimm-destruction-canaanites",
            supportedClaim:
              "Herem designates what is given over to a deity and so withheld from ordinary human use, which is why the metal is consigned rather than destroyed",
          },
        ],
        evidenceLabels: ["biblical-account"],
      },
      {
        id: "ch6-what-brought-us-here",
        kind: "what-brought-us-here",
        title: "What brought us here",
        body:
          "Two chapters ago [[entity:joshua]] sent two men into [[entity:jericho]] and they were hidden by [[entity:rahab]], who bargained for her family's lives and was told to gather them into her house and hang a scarlet cord in the window. That arrangement is still outstanding when the walls come down.\n\n" +
          "Since then Israel has crossed the [[entity:jordan-river]], camped at [[entity:gilgal]], been circumcised, kept Passover, and stopped receiving manna. The armed figure of chapter 5 has just told [[entity:joshua]] that the ground is holy and declined to take a side.\n\n" +
          "The instruction behind the destruction is older. Deuteronomy sets the nearby nations apart from distant cities, which may be offered terms, and puts the peoples of Canaan under *herem*, a word meaning devoted or given over irrevocably. Jericho is where that command first meets a real city, and the first thing the chapter does with it is make an exception.",
        scriptureRefs: [
          "Joshua 2:1-21",
          "Joshua 5:13-15",
          "Deuteronomy 7:1-6",
          "Deuteronomy 20:10-18",
        ],
        citations: [
          {
            sourceId: "block-deuteronomy",
            locator: "on Deuteronomy 20:10-18",
            supportedClaim:
              "Deuteronomy's rules of war separate distant cities, which may be offered terms, from the nations of Canaan, which are placed under herem",
          },
        ],
        evidenceLabels: ["biblical-account"],
      },
      {
        id: "ch6-surrounding-world",
        kind: "surrounding-world",
        title: "The surrounding world",
        body:
          "Tell es-Sultan, the mound identified as Jericho, is one of the most-dug sites in the Levant, and the two registers here have to be kept apart.\n\n" +
          "What excavation established: the mound has an extraordinarily long occupation, with Neolithic architecture and massive Middle Bronze Age fortifications. Kathleen Kenyon concluded that those great walls belong to the Middle Bronze Age and that Late Bronze occupation at the site was slight. Piotr Bienkowski's technical study is the standard statement of that case. Bryant Wood argued that Kenyon's Middle Bronze destruction should be redated to the end of Late Bronze I, which would place a destroyed city in the fifteenth century; Bienkowski replied in print, and the exchange has not been resolved. Current excavation under Lorenzo Nigro continues, mostly on the earlier periods.\n\n" +
          "What the text claims is a walled city with a king, taken in a single action and burned.\n\n" +
          "Those two things do not add up to a confirmation. On the mainstream reading there is little at the site to correspond to a Late Bronze city at all, and that absence is itself contested. It is worth distinguishing *no evidence* from *evidence against*; neither phrase settles this, and excavation has not confirmed the narrative.",
        scriptureRefs: ["Joshua 6:1", "Joshua 6:20-24"],
        citations: [
          {
            sourceId: "kenyon-digging-up-jericho",
            supportedClaim:
              "Kenyon's excavation dated the great fortifications to the Middle Bronze Age and found Late Bronze occupation slight",
          },
          {
            sourceId: "bienkowski-jericho-lb",
            supportedClaim:
              "The standard technical case is that Jericho was largely unoccupied in the Late Bronze Age",
          },
          {
            sourceId: "wood-jericho-bar",
            supportedClaim:
              "Wood argues for redating Kenyon's Middle Bronze destruction to the end of Late Bronze I, which is one side of an unresolved dispute",
          },
          {
            sourceId: "bienkowski-bar-reply",
            supportedClaim:
              "Bienkowski published a direct reply rejecting the redating, so the reader sees the exchange rather than half of it",
          },
          {
            sourceId: "nigro-tell-es-sultan",
            supportedClaim:
              "Excavation at Tell es-Sultan continues, and the site's significance runs well beyond the conquest question",
          },
          {
            sourceId: "provan-long-longman",
            supportedClaim:
              "No evidence and evidence against are different claims, and conflating them distorts what excavation can settle",
          },
        ],
        evidenceLabels: ["externally-attested", "disputed", "biblical-account"],
        collapsedByDefault: true,
      },
      {
        id: "ch6-why-it-matters",
        kind: "why-it-matters",
        title: "Why it matters",
        body:
          "Nothing Israel does in this chapter would take a city. It walks, carries a box, blows horns, and shouts. The narrative is arranged so that the only agent who could account for the result is God, and the claim is stated before the event rather than after it: I have given Jericho into your hand.\n\n" +
          "Reformed readers have taken Jericho as the pattern case of what they call holy war, in which the battle is Yahweh's and the human contribution is obedience and worship, and Calvin presses the point that the procession was designed to make Israel's strength irrelevant. That is one Christian reading. Others place the weight on [[entity:rahab]], taking the chapter's real hinge to be the survival of a Canaanite household inside a story of total destruction, so that the exception rather than the rule tells you where the book is going.",
        scriptureRefs: ["Joshua 6:2", "Joshua 6:25"],
        citations: [
          {
            sourceId: "calvin-joshua",
            locator: "on Joshua 6",
            supportedClaim:
              "Calvin reads the procession as arranged so that Israel's own strength could not account for the outcome",
          },
          {
            sourceId: "mitchell-together-in-land",
            supportedClaim:
              "Rahab's survival inside a destruction account is read by some interpreters as the passage's governing detail rather than an anomaly",
          },
        ],
        evidenceLabels: ["theological-interpretation", "biblical-account"],
      },
      {
        id: "ch6-details-worth-noticing",
        kind: "details-worth-noticing",
        title: "Details worth noticing",
        body:
          "Seven organises the chapter: seven priests, seven horns, seven circuits on the seventh of seven days. The instrument is the ram's horn that announces the jubilee, an instrument of proclamation.\n\n" +
          "The ark travels in the middle of the formation, with armed men before and behind. They are an escort, and they assault nothing.\n\n" +
          "The Hebrew of 6:20 says the wall fell in its place, under itself. It does not describe a breach or a section coming down, which is part of why the verse has drawn so much attention.\n\n" +
          "The metal is consigned to the treasury of Yahweh's house. Chapter 7 turns on exactly that clause, so the inventory here is not housekeeping.\n\n" +
          "[[entity:rahab]]'s family is put *outside* the camp, and the chapter then says she lived in the midst of Israel to this day, which is a later writer's note about a Canaanite household that was still there.\n\n" +
          "The curse gets picked up centuries later: 1 Kings reports Hiel of [[entity:bethel]] rebuilding Jericho and losing two sons.",
        scriptureRefs: [
          "Joshua 6:4",
          "Joshua 6:20",
          "Joshua 6:19",
          "Joshua 6:25",
          "1 Kings 16:34",
        ],
        citations: [
          {
            sourceId: "butler-joshua",
            locator: "on Joshua 6:20",
            supportedClaim:
              "The Hebrew of the verse describes the wall falling in place rather than being breached",
          },
          {
            sourceId: "hess-joshua",
            locator: "on Joshua 6:25",
            supportedClaim:
              "The notice that Rahab lived in Israel to this day reads as a later comment on a household still present",
          },
        ],
        evidenceLabels: ["biblical-account"],
        collapsedByDefault: true,
      },
      {
        id: "ch6-difficult-questions",
        kind: "difficult-questions",
        title: "Difficult questions",
        body:
          "The chapter says that everything breathing in [[entity:jericho]] was killed, children included, at God's command and as an act of worship. That is what the text says, and no amount of context makes it comfortable.\n\n" +
          "The responses in print do not converge. Some argue that the language is the conventional hyperbole of ancient conquest accounts, which routinely claim total destruction of populations that demonstrably survived. Some read Jericho as a garrison rather than a town full of families. Some hold that the command was genuine, limited to one people at one moment, and not repeatable. Some conclude that the portrait of God here cannot be reconciled with the portrait in the Gospels, and say so. The study's question on the command to destroy the Canaanites sets these out at length, alongside the separate question of how destruction language works.\n\n" +
          "Two things can be said without choosing. The chapter itself immediately exempts a Canaanite family, which is hard to square with a straightforward ethnic programme. And the book's own claim is that Yahweh gave the city, not that Israel earned or deserved it, which removes any ground for a later people reading their own wars into this one.",
        scriptureRefs: ["Joshua 6:17-21", "Joshua 6:25"],
        citations: [
          {
            sourceId: "younger-conquest-accounts",
            supportedClaim:
              "Ancient Near Eastern conquest accounts routinely claim total destruction of populations known to have survived",
          },
          {
            sourceId: "hess-joshua",
            locator: "on Joshua 6",
            supportedClaim:
              "One proposal reads Jericho as a fortified military post rather than a settlement full of families",
          },
          {
            sourceId: "copan-moral-monster",
            supportedClaim:
              "One line of defence treats the command as genuine but bounded to a single people and moment, and so not repeatable",
          },
          {
            sourceId: "seibert-disturbing",
            supportedClaim:
              "Some readers conclude that this portrait of God cannot be harmonised with the Gospels and decline to harmonise it",
          },
          {
            sourceId: "trimm-destruction-canaanites",
            supportedClaim:
              "The range of scholarly responses to the destruction of the Canaanites is surveyed without a consensus emerging",
          },
        ],
        evidenceLabels: [
          "biblical-account",
          "theological-interpretation",
          "reconstruction",
        ],
        collapsedByDefault: true,
      },
    ],
    discussionQuestions: [
      "Israel is ordered to keep silent for six days and then shout on command. What does a week of saying nothing do to the people doing it?",
      "The metal from Jericho is consigned to the treasury rather than destroyed. Why does that exception matter for what happens in the next chapter?",
      "Excavation at Tell es-Sultan has not produced a Late Bronze city to match this account, and the redating that would fix that is disputed. How do you hold the chapter's claim and that state of the evidence at the same time?",
      "Rahab's household is brought out of a city under total destruction and then settled outside the camp. What does 'outside the camp' say about where she stands at the end of the chapter?",
      "Nothing in the chapter softens what was done to Jericho's children. What is lost if a reader moves straight to the theology without staying with that verse?",
    ],
    relatedEntityIds: [
      "joshua",
      "rahab",
      "jericho",
      "gilgal",
      "bethel",
      "jordan-river",
      "canaanites",
    ],
    themeIds: [
      "promise-and-fulfillment",
      "judgment-and-mercy",
      "outsiders-and-belonging",
    ],
    wordCount: 558,
  },

  /* ================================================================ */
  /* Chapter 7                                                        */
  /* ================================================================ */
  {
    id: "ch7",
    number: 7,
    title: "Devoted things and a rout downhill",
    summary:
      "One man takes what was set apart, and a small force sent up to Ai is chased back down the slope with thirty-six dead. A lot narrows the nation to a single household, which is executed in the Valley of Achor.",
    phase: "campaigns-and-consequences",
    scriptureRange: "Joshua 7:1-26",
    milestoneIds: [
      "ch7-the-hidden-theft",
      "ch7-routed-at-the-descent",
      "ch7-joshua-on-his-face",
      "ch7-the-lot-narrows",
      "ch7-the-valley-of-achor",
    ],
    sections: [
      {
        id: "ch7-at-a-glance",
        kind: "at-a-glance",
        title: "At a glance",
        body:
          "Someone has taken what was devoted. Israel does not know it, sends a small force up to Ai, and is chased back down the slope with thirty-six dead. Joshua is told the problem is inside the camp. A lot narrows from tribe to clan to household to one man, Achan, who confesses. He and his family are taken to the Valley of Achor and stoned.",
        scriptureRefs: ["Joshua 7:1-26"],
        citations: [],
        evidenceLabels: ["biblical-account"],
      },
      {
        id: "ch7-walk-through",
        kind: "walk-through",
        title: "Walk through the chapter",
        body:
          "The chapter opens by telling the reader something Israel does not know. [[entity:achan]], of the tribe of [[entity:tribe-judah]], has taken from the devoted things, and Yahweh's anger is already burning.\n\n" +
          "[[entity:joshua]] sends men to look at [[entity:ai]]. They report that it is small: do not tire the whole army, two or three thousand will do. About three thousand go up. The men of Ai come out, chase them from in front of the gate as far as Shebarim, and strike them on the descent. Thirty-six die, and the people's hearts melt.\n\n" +
          "[[entity:joshua]] tears his clothes and lies before the ark until evening. His complaint is blunt: why did you bring this people over the [[entity:jordan-river]] at all? God's answer is to tell him to stand up. Israel has sinned; devoted things are in the camp; I will not go with you again until they are gone.\n\n" +
          "The next morning a lot narrows the nation to a tribe, a clan, a household, a man. [[entity:achan]] admits it: a fine cloak from Shinar, two hundred shekels of silver, a bar of gold, buried under his tent. He says he saw, coveted, and took. He, his sons and daughters, his livestock, his tent and the goods are taken to a valley and stoned, then burned under a heap of stones.",
        scriptureRefs: ["Joshua 7:1-26"],
        citations: [
          {
            sourceId: "hess-joshua",
            locator: "on Joshua 7:5",
            supportedClaim:
              "The chapter places the defeat on the slope back down toward the valley rather than at the town",
          },
        ],
        evidenceLabels: ["biblical-account"],
      },
      {
        id: "ch7-what-brought-us-here",
        kind: "what-brought-us-here",
        title: "What brought us here",
        body:
          "Chapter 6 put the warning on the record before the wall came down. [[entity:joshua]] told the people that everything in [[entity:jericho]] was devoted, that the metal was to go to the treasury, and that anyone who took devoted things would bring trouble on the camp. Chapter 7 is that sentence coming true, and its Hebrew keeps playing on the word for trouble.\n\n" +
          "The category itself is not reserved for foreigners. Deuteronomy applies the same sanction to an Israelite town that turns to other gods: it too is to be devoted and destroyed. So the logic that levelled Jericho was always capable of turning inward, and here it does, on one household of [[entity:tribe-judah]].\n\n" +
          "Geographically, Israel is still camped at [[entity:gilgal]] on the valley floor, and everything west of it is uphill. [[entity:ai]] sits in the hill country above, near [[entity:bethel]]. This is the first time in the book that Israel tries to leave the plain.",
        scriptureRefs: ["Joshua 6:18-19", "Deuteronomy 13:12-18"],
        citations: [
          {
            sourceId: "block-deuteronomy",
            locator: "on Deuteronomy 13:12-18",
            supportedClaim:
              "Deuteronomy places an Israelite town that turns to other gods under the same herem sanction as the Canaanite cities",
          },
        ],
        evidenceLabels: ["biblical-account"],
      },
      {
        id: "ch7-surrounding-world",
        kind: "surrounding-world",
        title: "The surrounding world",
        body:
          "Where [[entity:ai]] stood is not settled. The site register marks it disputed. Et-Tell fits the geography the chapter needs and has been excavated, and Joseph Callaway concluded that it had no Late Bronze occupation, which is the central difficulty for identifying it with the Ai of Joshua 7 and 8. A team at Khirbet el-Maqatir, roughly a kilometre and a half west, has proposed that site instead; that is a minority view advanced by researchers arguing for an early conquest date. A third suggestion treats Ai as a fortified outpost of [[entity:bethel]] rather than a town in its own right. We do not know which, if any, is correct.\n\n" +
          "The cloak [[entity:achan]] took is described as coming from Shinar, that is, from Babylonia. Long-distance movement of textiles and metals through Canaan is documented in the period's own correspondence, so a foreign luxury garment in a walled town is unremarkable; the detail establishes value rather than exoticism.\n\n" +
          "Casting lots to identify a guilty party appears elsewhere in Israel's practice. The chapter describes no mechanism.",
        scriptureRefs: ["Joshua 7:2", "Joshua 7:21", "Joshua 7:16-18"],
        citations: [
          {
            sourceId: "callaway-ai",
            supportedClaim:
              "Excavation at et-Tell found no Late Bronze Age occupation, which is the central problem for identifying it with Ai",
          },
          {
            sourceId: "stripling-maqatir",
            supportedClaim:
              "Khirbet el-Maqatir has been proposed as an alternative location for Ai, a minority position tied to an early conquest date",
          },
          {
            sourceId: "hess-joshua",
            locator: "on Joshua 7:2",
            supportedClaim:
              "A further proposal treats Ai as a military outpost of Bethel rather than a separate town",
          },
          {
            sourceId: "moran-amarna",
            supportedClaim:
              "Correspondence from the period documents long-distance movement of luxury textiles and metals through Canaan",
          },
        ],
        evidenceLabels: ["disputed", "externally-attested", "biblical-account"],
        collapsedByDefault: true,
      },
      {
        id: "ch7-why-it-matters",
        kind: "why-it-matters",
        title: "Why it matters",
        body:
          "Israel loses a battle it should have won, against a town its own scouts called small, and the chapter locates the cause inside the camp rather than on the field. Victory turns out not to be something Israel possesses. The divine sentence is conditional in a way chapter 1's promise was not: I will not be with you any more unless you remove the devoted thing.\n\n" +
          "Reformed theology has read this as covenant solidarity, the community treated as one body whose members are answerable for each other, and Calvin uses the chapter to argue that hidden sin is a public matter. That is one Christian reading among several. It does not dissolve the difficulty, which is that thirty-six men die for a theft they did not commit and a family is executed alongside the man who confessed. The study's question on Achan's household stays with that rather than explaining it away.",
        scriptureRefs: ["Joshua 7:12", "Joshua 7:11"],
        citations: [
          {
            sourceId: "calvin-joshua",
            locator: "on Joshua 7",
            supportedClaim:
              "Calvin treats the chapter as showing that concealed sin in the covenant community is a public matter",
          },
          {
            sourceId: "creach-joshua",
            supportedClaim:
              "The chapter's corporate logic is a genuine interpretive difficulty rather than a problem the text resolves",
          },
        ],
        evidenceLabels: ["theological-interpretation", "biblical-account"],
      },
      {
        id: "ch7-details-worth-noticing",
        kind: "details-worth-noticing",
        title: "Details worth noticing",
        body:
          "[[entity:achan]] gets four generations: son of [[entity:carmi]], son of [[entity:zabdi]], son of [[entity:zerah]], of [[entity:tribe-judah]]. The book rarely bothers. It wants him placed exactly.\n\n" +
          "Shebarim is left untranslated in most English versions because nobody knows what it is. It may be a place name or a common noun, and its location is unknown.\n\n" +
          "The word for the slope the men were struck on is the same one chapter 10 uses for the descent of Beth-horon. There the enemy is caught on the slope. Here it is Israel.\n\n" +
          "[[entity:joshua]]'s complaint borrows the wilderness generation's line about being content to stay on the far side of the river, which is exactly the attitude Deuteronomy condemns.\n\n" +
          "[[entity:achan]] says he saw, coveted, took and hid. Commentators note that sequence elsewhere in the Hebrew Bible, and the chapter plays throughout on the root for trouble: 1 Chronicles calls him Achar, the troubler of Israel, and the valley takes the same root.",
        scriptureRefs: [
          "Joshua 7:1",
          "Joshua 7:5",
          "Joshua 7:7",
          "Joshua 7:21",
          "Joshua 7:26",
          "1 Chronicles 2:7",
        ],
        citations: [
          {
            sourceId: "butler-joshua",
            locator: "on Joshua 7:5",
            supportedClaim:
              "Shebarim is of uncertain meaning and unknown location, and may be a common noun rather than a place name",
          },
          {
            sourceId: "boling-wright-joshua",
            locator: "on Joshua 7:24-26",
            supportedClaim:
              "The chapter works a sustained wordplay on the root meaning to trouble, which links Achan's name, his act and the valley",
          },
        ],
        evidenceLabels: ["biblical-account"],
        collapsedByDefault: true,
      },
      {
        id: "ch7-difficult-questions",
        kind: "difficult-questions",
        title: "Difficult questions",
        body:
          "Thirty-six men die because of something one man did without their knowledge, and then that man's sons and daughters are brought out to the valley with him. Whether they were stoned with him the Hebrew does not make clear; the verbs shift between singular and plural, and English translations differ. Whether they knew about the theft the chapter never says, and how many people died there, or their names, it also never says. We do not know.\n\n" +
          "The tension is not only a modern one. Deuteronomy states that fathers shall not be put to death for their children nor children for their fathers, and readers have noticed the collision for a long time. Proposals include reading the household as complicit because the goods were buried under a shared tent floor, reading the execution as a legal act in a category the later law revises, and reading the passage as narrative that reports rather than commends. None of these is obviously right, and the study's question on Achan's household works through them.\n\n" +
          "What should not happen is for the difficulty to be smoothed over by the surrounding theology. The chapter's own claim is that God's presence with Israel was at stake, and it collects that cost from people the text does not accuse.",
        scriptureRefs: ["Joshua 7:5", "Joshua 7:24-25", "Deuteronomy 24:16"],
        citations: [
          {
            sourceId: "butler-joshua",
            locator: "on Joshua 7:25",
            supportedClaim:
              "The number of verbs shifts between singular and plural, leaving it unclear whether the household was stoned with Achan",
          },
          {
            sourceId: "block-deuteronomy",
            locator: "on Deuteronomy 24:16",
            supportedClaim:
              "Deuteronomy forbids executing children for their fathers' offences, which stands in tension with this chapter",
          },
          {
            sourceId: "hawk-joshua",
            supportedClaim:
              "The corporate punishment in Joshua 7 has drawn a range of proposed explanations, none of which has become standard",
          },
        ],
        evidenceLabels: [
          "biblical-account",
          "theological-interpretation",
          "reconstruction",
        ],
        collapsedByDefault: true,
      },
    ],
    discussionQuestions: [
      "The scouts look at Ai and report that a few thousand men will do. What does the chapter do with the idea that a defeat can have a competent-sounding explanation?",
      "The men of Ai chase Israel from the gate down the slope. How does knowing that the retreat ran downhill, back toward the valley floor, change your picture of the rout?",
      "Joshua's first response is to complain that Israel should have stayed east of the Jordan. What does it mean that God answers with 'get up' rather than with an argument?",
      "The lot narrows from tribe to clan to household to one man while the whole nation stands and watches. What is that process doing to everyone who is not taken?",
      "The Valley of Achor has never been securely located, and the heap of stones is said to have still been standing when the chapter was written. What does a memorial nobody can find do for a reader?",
    ],
    relatedEntityIds: [
      "joshua",
      "achan",
      "carmi",
      "zabdi",
      "zerah",
      "tribe-judah",
      "ai",
      "bethel",
      "gilgal",
      "jericho",
      "valley-of-achor",
    ],
    themeIds: [
      "obedience-and-failure",
      "judgment-and-mercy",
      "unity-among-tribes",
    ],
    wordCount: 588,
  },

  /* ================================================================ */
  /* Chapter 8                                                        */
  /* ================================================================ */
  {
    id: "ch8",
    number: 8,
    title: "The ambush at Ai and the assembly at Ebal",
    summary:
      "Israel takes Ai on a second attempt by drawing its garrison out and burning the empty town. The chapter then moves without warning to Mount Ebal, an altar of unworked stones, and the whole law read to everyone present.",
    phase: "campaigns-and-consequences",
    scriptureRange: "Joshua 8:1-35",
    milestoneIds: [
      "ch8-the-ambush-set",
      "ch8-the-feint-and-the-fire",
      "ch8-the-city-and-the-king",
      "ch8-altar-on-mount-ebal",
      "ch8-blessings-and-curses-read",
    ],
    sections: [
      {
        id: "ch8-at-a-glance",
        kind: "at-a-glance",
        title: "At a glance",
        body:
          "The second attempt on Ai works. Israel sets an ambush west of the city, draws the garrison out with a feint toward the wilderness, and takes the emptied town from behind. The city is burned and its king hanged. The chapter then moves thirty-five kilometres north to Mount Ebal, an altar of uncut stones, and the whole law read aloud.",
        scriptureRefs: ["Joshua 8:1-35"],
        citations: [],
        evidenceLabels: ["biblical-account"],
      },
      {
        id: "ch8-walk-through",
        kind: "walk-through",
        title: "Walk through the chapter",
        body:
          "God's word to [[entity:joshua]] repeats the reassurance and changes one term: take all the people, [[entity:ai]] is given into your hand, and this time the livestock and the spoil may be taken as plunder.\n\n" +
          "Men are sent out by night to lie in ambush west of the city, between it and [[entity:bethel]]. [[entity:joshua]] takes the main force up and camps north of Ai with a valley between.\n\n" +
          "At dawn the king of Ai sees Israel and hurries out to meet it at an appointed place facing the Arabah, not knowing anyone is behind him. Israel breaks and runs toward the wilderness. Every man in Ai is called out to the chase. Then [[entity:joshua]] stretches out his javelin, the ambush rises, enters the undefended city and sets it alight. The men of Ai turn, see the smoke, and find Israel on both sides.\n\n" +
          "Twelve thousand are killed, the town is made a ruin, and the king is hanged on a tree until sunset and then buried under stones at the gate. The chapter then shifts entirely. [[entity:joshua]] builds an altar on [[entity:mount-ebal]] of stones no iron tool has touched, writes a copy of the law on them, and reads every word of blessing and curse to the whole assembly, women, children and resident foreigners included.",
        scriptureRefs: ["Joshua 8:1-35"],
        citations: [
          {
            sourceId: "hess-joshua",
            locator: "on Joshua 8:14-20",
            supportedClaim:
              "The feigned flight runs along the line of the earlier defeat, which is what makes the pursuit plausible",
          },
        ],
        evidenceLabels: ["biblical-account"],
      },
      {
        id: "ch8-what-brought-us-here",
        kind: "what-brought-us-here",
        title: "What brought us here",
        body:
          "The last chapter ended with a family under a heap of stones and Yahweh's anger turned away. Chapter 8 begins with the words Israel needed after the rout: do not fear and do not be dismayed. The order to take all the people answers the scouts' advice in chapter 7 that a detachment would do.\n\n" +
          "One clause is new. At [[entity:jericho]] everything was devoted and the metal went to the treasury; that is what [[entity:achan]] died over. Here God explicitly grants Israel the livestock and the spoil, which matches the allowance Deuteronomy makes elsewhere. That difference is the line the previous chapter was drawn over.\n\n" +
          "The second half of the chapter carries out an older instruction. Deuteronomy told Israel that when it crossed the Jordan it was to set the blessing on [[entity:mount-gerizim]] and the curse on [[entity:mount-ebal]], build an altar of unworked stones, and write the law on them. Joshua 8:30-35 reports that being done.",
        scriptureRefs: [
          "Joshua 7:26",
          "Joshua 8:2",
          "Deuteronomy 20:14",
          "Deuteronomy 11:26-32",
          "Deuteronomy 27:1-8",
        ],
        citations: [
          {
            sourceId: "block-deuteronomy",
            locator: "on Deuteronomy 27:1-8",
            supportedClaim:
              "Deuteronomy instructs Israel to set blessing and curse on Gerizim and Ebal and to build an altar of unworked stones inscribed with the law",
          },
        ],
        evidenceLabels: ["biblical-account"],
      },
      {
        id: "ch8-surrounding-world",
        kind: "surrounding-world",
        title: "The surrounding world",
        body:
          "Two site questions sit under this chapter, and neither is settled.\n\n" +
          "[[entity:ai]] is disputed. Et-Tell matches the geography the ambush needs, a town east of [[entity:bethel]] with a valley to the north and broken ground to the west to hide in, but excavation there found no Late Bronze occupation. Khirbet el-Maqatir has been proposed instead by researchers arguing for an early conquest date, and a third reading makes Ai an outpost of Bethel. The site is disputed, and this study says so rather than choosing.\n\n" +
          "On [[entity:mount-ebal]], Adam Zertal excavated a large stone structure and identified it as an Israelite altar connected with this passage. Aharon Kempinski published a rebuttal reading the same remains as an Iron Age watchtower. The structure exists; what it was is contested.\n\n" +
          "The geography around it is not in doubt. Ebal and [[entity:mount-gerizim]] face each other across a narrow pass with [[entity:shechem]] in it, and Shechem was a long-occupied centre commanding that route.",
        scriptureRefs: ["Joshua 8:9", "Joshua 8:30"],
        citations: [
          {
            sourceId: "callaway-ai",
            supportedClaim:
              "Excavation at et-Tell found no Late Bronze Age occupation, which is the central problem for identifying it with Ai",
          },
          {
            sourceId: "stripling-maqatir",
            supportedClaim:
              "Khirbet el-Maqatir has been proposed as an alternative site for Ai, a minority position tied to an early conquest date",
          },
          {
            sourceId: "zertal-ebal",
            supportedClaim:
              "Zertal identified a large stone structure on Mount Ebal as an Israelite altar connected with Joshua 8",
          },
          {
            sourceId: "kempinski-ebal",
            supportedClaim:
              "Kempinski published a rebuttal reading the same Mount Ebal structure as an Iron Age watchtower",
          },
          {
            sourceId: "wright-shechem",
            supportedClaim:
              "Shechem was a long-occupied centre commanding the pass between Ebal and Gerizim",
          },
        ],
        evidenceLabels: ["disputed", "externally-attested", "biblical-account"],
        collapsedByDefault: true,
      },
      {
        id: "ch8-why-it-matters",
        kind: "why-it-matters",
        title: "Why it matters",
        body:
          "The two halves of this chapter are doing different work, and the second is not a postscript. The first half is ordinary warfare. Israel wins by a feint and an ambush, using ground and timing, and the account is frank about the mechanics. Whatever chapter 6 claimed about the city being given, it has to sit beside a chapter where the method is a military trick available to anyone.\n\n" +
          "The second half puts the whole community in front of the law, and the detail that matters is who is standing there: women, children, and the sojourners who live among them. Reformed readers have taken the public reading at [[entity:mount-ebal]] as the pattern for a congregation hearing the covenant together, which is one Christian reading among others. What no reading should pass over is the juxtaposition. The chapter that reports twelve thousand dead at [[entity:ai]] also reports resident foreigners inside the assembly, and it makes no attempt to explain how both are true.",
        scriptureRefs: ["Joshua 8:18-22", "Joshua 8:33-35"],
        citations: [
          {
            sourceId: "mcconville-williams-joshua",
            supportedClaim:
              "The assembly at Ebal is described as including resident foreigners, which sits awkwardly beside the chapter's destruction account",
          },
          {
            sourceId: "woudstra-joshua",
            locator: "on Joshua 8:30-35",
            supportedClaim:
              "Reformed commentary treats the public reading of the law to the whole assembly as a pattern for congregational covenant renewal",
          },
        ],
        evidenceLabels: ["theological-interpretation", "biblical-account"],
      },
      {
        id: "ch8-details-worth-noticing",
        kind: "details-worth-noticing",
        title: "Details worth noticing",
        body:
          "The ambush party is thirty thousand in one verse and five thousand in another. The chapter does not reconcile the figures and neither will this study.\n\n" +
          "What [[entity:joshua]] holds out is a *kidon*, the word used later for Goliath's weapon. He keeps it extended until the destruction is complete, which readers have long compared with [[entity:moses]]'s raised hand at the sea and against Amalek.\n\n" +
          "The king is hanged and then taken down at sunset. Deuteronomy requires exactly that, so the narrative is observing a rule even here.\n\n" +
          "Two chapters, two heaps of stones: one over [[entity:achan]], one over the king of [[entity:ai]] at his own gate. The phrasing is the same.\n\n" +
          "The altar's stones are unworked, with no iron used on them, which follows both Exodus and Deuteronomy. The text does not say why.\n\n" +
          "The assembly is described as including the sojourner along with the native born, the same pairing the law uses about who may keep Passover.",
        scriptureRefs: [
          "Joshua 8:3",
          "Joshua 8:12",
          "Joshua 8:18",
          "Joshua 8:29",
          "Deuteronomy 21:22-23",
          "Exodus 20:25",
          "Exodus 12:48-49",
        ],
        citations: [
          {
            sourceId: "butler-joshua",
            locator: "on Joshua 8:3-12",
            supportedClaim:
              "The chapter gives two different figures for the ambush party without reconciling them",
          },
          {
            sourceId: "hess-joshua",
            locator: "on Joshua 8:18",
            supportedClaim:
              "Joshua's outstretched weapon has long been compared with Moses' raised hand at the sea and against Amalek",
          },
        ],
        evidenceLabels: ["biblical-account"],
        collapsedByDefault: true,
      },
      {
        id: "ch8-difficult-questions",
        kind: "difficult-questions",
        title: "Difficult questions",
        body:
          "The chapter reports twelve thousand dead, described as all the people of [[entity:ai]], men and women. That is the same ethical problem chapter 6 raised, and it is treated at length in the study's questions on the command to destroy the Canaanites and on how destruction language works. Nothing here softens it.\n\n" +
          "A separate problem is historical, and the two should not be mixed. If et-Tell is Ai, excavation found no Late Bronze town there for this account to be about. The options on the table are that the identification is wrong, that the narrative preserves a memory attached to the wrong period, that its numbers and totality follow a genre convention rather than a body count, or that the event is simply not recoverable. This study does not choose among them, and no reader should be left thinking the spade has settled it either way.\n\n" +
          "There is also a smaller difficulty worth naming. The ambush is God's own instruction, so the deception is not Israel's improvisation. Readers troubled by [[entity:rahab]]'s lie in chapter 2 have to reckon with a divine command to feint here.",
        scriptureRefs: ["Joshua 8:25-26", "Joshua 8:2", "Joshua 8:5-7"],
        citations: [
          {
            sourceId: "callaway-ai",
            supportedClaim:
              "No Late Bronze Age occupation was found at et-Tell, leaving the chapter's town unlocated on the standard identification",
          },
          {
            sourceId: "younger-conquest-accounts",
            supportedClaim:
              "Totalising numbers and claims of complete destruction are a convention of the genre these accounts belong to",
          },
          {
            sourceId: "provan-long-longman",
            supportedClaim:
              "Absence of evidence at a proposed site is not the same as evidence that an event did not occur, and neither settles the question here",
          },
          {
            sourceId: "trimm-destruction-canaanites",
            supportedClaim:
              "The ethical problem of the destruction accounts has attracted a range of responses without a consensus",
          },
        ],
        evidenceLabels: [
          "biblical-account",
          "disputed",
          "theological-interpretation",
        ],
        collapsedByDefault: true,
      },
    ],
    discussionQuestions: [
      "Israel wins this time with a feint and an ambush rather than with horns and a shout. What changes when the two accounts sit side by side?",
      "God explicitly permits at Ai the spoil that was forbidden at Jericho, and Achan died over that difference. How does the permission read after chapter 7?",
      "The chapter moves from a burning town to a covenant assembly thirty-five kilometres north without describing the journey. What does that silence tell you about what the chapter is organised around?",
      "The altar on Ebal is built of stones no iron has touched, in a chapter that has just listed iron among the plunder of a burned city. What do you make of the restriction?",
      "The reading of the law includes the sojourners living among Israel. What does their presence in the assembly do to the chapter's earlier verses?",
    ],
    relatedEntityIds: [
      "joshua",
      "moses",
      "achan",
      "rahab",
      "ai",
      "bethel",
      "gibeon",
      "mount-ebal",
      "mount-gerizim",
      "shechem",
      "gilgal",
      "jericho",
      "tribe-levi",
    ],
    themeIds: [
      "covenant-faithfulness",
      "outsiders-and-belonging",
      "unity-among-tribes",
    ],
    wordCount: 592,
  },
];

export const MILESTONES: Milestone[] = [
  /* ---------------- Chapter 5 ---------------- */
  {
    id: "ch5-flint-knives-at-gilgal",
    chapter: 5,
    order: 1,
    title: "Flint knives at Gilgal",
    scriptureRefs: ["Joshua 5:1-9", "Genesis 34:24-25"],
    narrative:
      "The kings west of the river hear what happened at the [[entity:jordan-river]] and lose their nerve. Israel does not exploit it. Instead God orders flint knives, and every male born during the forty years is circumcised at a rise the text calls Gibeath-haaraloth.\n\n" +
      "The men then stay in camp until they are healed. How long is not said, though Genesis 34 assumes several days of incapacity after the same operation. For that stretch Israel's entire fighting strength is out of action a short walk from a walled city, wherever exactly the camp stood. Nothing in the account explains why no one attacked.\n\n" +
      "When it is done God says the reproach of Egypt has been rolled away, and the place is called [[entity:gilgal]]. The camp there becomes Israel's base for everything in chapters 6 to 10, though its exact site has never been securely identified.",
    entityIds: ["joshua", "gilgal", "jericho", "jordan-river", "amorites", "canaanites"],
    mapFeatureIds: ["site-gilgal", "site-jericho", "site-jordan-river", "region-jordan-valley"],
    mapCaption:
      "Israel camps at Gilgal on the plain below Jericho while every man in the army recovers from circumcision.",
    whatChanged:
      "Nothing moves. The camp pitched at the end of chapter 4 stays where it is. The only change on the map is that it now has a name, Gilgal, and the pin marks an area rather than a known spot, because the identification is disputed.",
    geographyExplanation:
      "The plain between the [[entity:jordan-river]] and [[entity:jericho]] is a floor roughly 250 metres below sea level, ten to fifteen kilometres across, hot for most of the year, with the Judean escarpment rising steeply to the west. Springs, above all the one at Jericho, make the oasis liveable; away from them the plain is dry scrub. A camp here has water from the river a few kilometres east, flat ground enough for a large group, and no defensive advantage whatever. It also sits at the foot of every route climbing into the hill country, which makes it the natural staging point for anything going west and the natural place to be caught by anything coming down. Gilgal's position is known only approximately, so the map shows the neighbourhood of the camp, not its edge.",
    sequenceType: "event",
    viewport: { center: [35.48, 31.87], zoom: 11 },
    citations: [
      {
        sourceId: "rainey-notley-sacred-bridge",
        supportedClaim:
          "The Jericho plain lies far below sea level and is farmed from springs rather than rainfall",
      },
      {
        sourceId: "hess-joshua",
        locator: "on Joshua 5:2-9",
        supportedClaim:
          "The narrative offers no explanation for why Israel was not attacked while the army was incapacitated",
      },
    ],
    evidenceLabels: ["biblical-account"],
  },
  {
    id: "ch5-passover-in-the-plains",
    chapter: 5,
    order: 2,
    title: "Passover in the plains of Jericho",
    scriptureRefs: ["Joshua 5:10", "Exodus 12:43-49"],
    narrative:
      "On the fourteenth day of the first month, at evening, Israel keeps Passover on the plain east of [[entity:jericho]]. The date matters: they crossed the [[entity:jordan-river]] on the tenth, which is the day the law sets for selecting the lamb.\n\n" +
      "This is only the third Passover the Pentateuch records. The first was kept in Egypt on the night of departure, the second at Sinai a year later. Nothing is said about the forty years between. Exodus 12 restricts the meal to the circumcised, which is why the knives came first.\n\n" +
      "The scene is a memorial kept by people who were not there. Almost everyone eating had been born after the exodus. They are being told, by a meal, that the deliverance belongs to them.",
    entityIds: ["joshua", "gilgal", "jericho", "jordan-river", "egypt-new-kingdom"],
    mapFeatureIds: ["site-gilgal", "site-jericho", "region-jordan-valley"],
    mapCaption:
      "Israel keeps Passover on the plain east of Jericho, four days after crossing the river.",
    whatChanged:
      "Nothing moves. The map is the same plain as the previous beat. What has changed is the calendar, which is now being kept on Canaan's side of the river.",
    geographyExplanation:
      "Passover falls in the first month, at the start of the barley harvest. In the Jordan Valley that timing runs ahead of the rest of the country, because the valley floor around [[entity:jericho]] sits some 250 metres below sea level and warms weeks before the hill country a thousand metres above it. So the festival lands at the moment the fields of the oasis are ripe and the people camped beside them have no crop of their own. The river behind them is also at its yearly height from the winter rains and the melt, which is why the crossing was a problem in chapter 3 and why going back east is no longer casual. Geographically this is the best-provisioned and least defensible ground in the region, and Israel spends the festival standing in it.",
    sequenceType: "event",
    viewport: { center: [35.47, 31.86], zoom: 11 },
    citations: [
      {
        sourceId: "hess-joshua",
        locator: "on Joshua 5:10-12",
        supportedClaim:
          "The crossing on the tenth and the Passover on the fourteenth match the calendar the law sets for the festival",
      },
      {
        sourceId: "beitzel-moody-atlas",
        supportedClaim:
          "Grain in the Jordan Valley ripens earlier than in the hill country because of the valley's depth and heat",
      },
    ],
    evidenceLabels: ["biblical-account"],
  },
  {
    id: "ch5-the-manna-stops",
    chapter: 5,
    order: 3,
    title: "The manna stops",
    scriptureRefs: ["Joshua 5:11-12", "Exodus 16:35"],
    narrative:
      "The day after Passover Israel eats unleavened cakes and parched grain from the produce of the land. The manna stops, and does not come again.\n\n" +
      "This is a one-sentence notice. It closes a forty-year arrangement and fixes no place, which is why the map here shows a region and no march. Nothing advances.\n\n" +
      "What it changes is how Israel is fed. Until now food arrived daily and required no ground. From this verse on the people live on Canaan's harvests, which means depending on rainfall in the hills, on springs like Jericho's, and on holding or sharing the fields that produce the grain. Provision becomes agricultural, and therefore territorial. A good deal of what follows in the book, including the long complaints about land not yet possessed, is an argument about who works which fields.",
    entityIds: ["jericho", "gilgal", "region-jordan-valley", "region-hill-country-ephraim"],
    mapFeatureIds: ["region-jordan-valley", "site-jericho", "site-gilgal"],
    mapCaption:
      "The manna ends and Israel begins eating grain grown in Canaan; the map shows the region the notice covers, and nothing travels.",
    whatChanged:
      "Nothing moves, and that is the point. What changes is the economy behind the camp: Israel's food now comes from ground inside Canaan rather than from the wilderness.",
    geographyExplanation:
      "Grain in this region is not evenly distributed. The Jordan Valley floor takes very little rain, on the order of 150 millimetres a year near [[entity:jericho]], and farms only where springs allow it, which is why the oasis is a green patch in a dry plain. The hill country to the west takes three or four times as much and grows the bulk of the grain, but its fields are small, terraced, worked, and already held by somebody. So a sentence about manna ceasing quietly commits Israel to competing for particular fields in particular valleys. It also starts a seasonal clock: harvest on the valley floor in spring, later and higher as you climb, and a dry summer that is no time to move a body of people who now have to eat what the ground gives.",
    sequenceType: "summary",
    viewport: {
      center: [35.46, 31.86],
      zoom: 10,
      bounds: [
        [35.28, 31.68],
        [35.62, 32.02],
      ],
    },
    citations: [
      {
        sourceId: "rainey-notley-sacred-bridge",
        supportedClaim:
          "Rainfall on the Jordan Valley floor is a fraction of the hill country's, so farming there depends on springs",
      },
      {
        sourceId: "aharoni-land-of-bible",
        supportedClaim:
          "The hill country receives far more rainfall than the Jordan Valley and carried most of the region's grain farming",
      },
    ],
    evidenceLabels: ["biblical-account", "reconstruction"],
  },
  {
    id: "ch5-commander-with-drawn-sword",
    chapter: 5,
    order: 4,
    title: "The commander with the drawn sword",
    scriptureRefs: ["Joshua 5:13-15", "Exodus 3:1-6"],
    narrative:
      "[[entity:joshua]] is near [[entity:jericho]] when he looks up and sees a man in front of him with a sword already drawn. There is no vision language in the sentence; he lifts his eyes and there the man is.\n\n" +
      "Joshua asks the only question a commander would ask: are you for us or for our adversaries? The reply refuses both options. In Hebrew it is a flat no, followed by a title, commander of Yahweh's army, and the words now I have come. Joshua falls face down and asks what his lord commands. He is told to take off his sandals, because the place is holy. He does, and the chapter ends there. The figure issues no orders, and the account never mentions him again.\n\n" +
      "The siege instructions in chapter 6 open as a fresh speech, so whether the two scenes are one conversation is left open.",
    entityIds: ["joshua", "jericho", "gilgal", "moses"],
    mapFeatureIds: ["site-jericho", "site-gilgal"],
    mapCaption:
      "Joshua walks up to Jericho alone and is told that the ground he is standing on is holy.",
    whatChanged:
      "Joshua has covered the short distance from the camp to the edge of Jericho. That is the only change, and no force moves with him; the text has him there by himself.",
    geographyExplanation:
      "Jericho stands on a low mound beside a strong spring where the Wadi Qelt comes down out of the hills onto the valley floor. Anyone approaching from the plain is in the open and visible from the walls for the last few kilometres, because the ground is flat and there is no cover worth the name. That is worth holding in mind here, since [[entity:joshua]] is described walking up to a fortified town alone across terrain that offers him nothing. The mound itself is small by modern expectation, a few hectares, and what brought people back to it again and again is the water rather than the height. The spring is also why this is the gateway site: the routes climbing west toward [[entity:bethel]] and [[entity:ai]] start from the last reliable water before the wilderness.",
    sequenceType: "event",
    viewport: { center: [35.4442, 31.8715], zoom: 12 },
    citations: [
      {
        sourceId: "hess-joshua",
        locator: "on Joshua 5:13-15",
        supportedClaim:
          "The figure's reply declines both sides of Joshua's question rather than claiming allegiance to Israel",
      },
      {
        sourceId: "nigro-tell-es-sultan",
        supportedClaim:
          "Tell es-Sultan is a small mound whose repeated occupation across millennia is explained by its perennial spring",
      },
    ],
    evidenceLabels: ["biblical-account", "theological-interpretation"],
  },

  /* ---------------- Chapter 6 ---------------- */
  {
    id: "ch6-a-city-shut-up",
    chapter: 6,
    order: 1,
    title: "A city shut up",
    scriptureRefs: ["Joshua 6:1-7"],
    narrative:
      "[[entity:jericho]] is closed. The verse uses a doubled construction, shut up and shut in, and says nobody went out and nobody came in. A city that has heard what happened at the [[entity:jordan-river]] has decided to sit behind its walls.\n\n" +
      "God's instruction to [[entity:joshua]] describes a week, not an assault. Every fighting man is to march around the city once a day for six days. Seven priests carry seven rams' horns in front of the ark. On the seventh day they go round seven times with the horns blowing, and when the people hear a long blast they shout.\n\n" +
      "What is missing from the instruction is everything a besieger would want: no ramp, no ladders, no attempt on the gate, no move against the water. [[entity:joshua]] passes the orders to the priests and the people, and the column forms up.",
    entityIds: ["joshua", "jericho", "gilgal", "jordan-river"],
    mapFeatureIds: ["site-jericho", "site-gilgal"],
    mapCaption:
      "Jericho shuts its gates while Israel forms up at Gilgal with the ark and seven rams' horns.",
    whatChanged:
      "Nothing has moved yet. The map holds the camp and the closed city a few kilometres apart, which is the whole geography of the next two beats.",
    geographyExplanation:
      "Jericho's defensive problem is that it cannot be starved out quickly and cannot be outflanked. The perennial spring rises immediately beside the mound, so shutting the gates does not cut the water, and the mound is compact enough that a walk around its base takes minutes rather than hours. The plain is flat, which lets the city see everything coming and denies an attacker cover, but it also means the defenders have no high ground to fall back on beyond the wall itself. Israel is camped out on that same plain with the river behind it, roughly 250 metres below sea level, in an oasis that feeds both sides of this standoff. Neither party has terrain to work with. Both are looking at a wall.",
    sequenceType: "event",
    viewport: { center: [35.46, 31.872], zoom: 12 },
    citations: [
      {
        sourceId: "hess-joshua",
        locator: "on Joshua 6:1-5",
        supportedClaim:
          "The instructions given to Joshua contain no siege measures of any kind",
      },
      {
        sourceId: "nigro-tell-es-sultan",
        supportedClaim:
          "A perennial spring beside Tell es-Sultan supplies the site with water year round",
      },
    ],
    evidenceLabels: ["biblical-account"],
  },
  {
    id: "ch6-six-days-one-circuit",
    chapter: 6,
    order: 2,
    title: "Six days, one circuit a day",
    scriptureRefs: ["Joshua 6:8-14"],
    narrative:
      "The column goes out. Armed men lead, then seven priests blowing the rams' horns, then the ark of the covenant, then a rear guard, with the horns sounding continuously and every other mouth shut. They walk once around [[entity:jericho]] and return to camp. They do this for six days.\n\n" +
      "The text gives no reaction from inside the city, which is a striking silence in a chapter this attentive to sound. Nobody on the wall speaks. Nobody shoots.\n\n" +
      "What the six days accomplish, as the chapter tells it, is nothing in military terms and everything in liturgical ones. An army that walks in a circle for a week is not conducting a siege. It is keeping time to an instrument that in the law announces a jubilee, and it is moving at the pace set by priests rather than by officers.",
    entityIds: ["joshua", "jericho", "gilgal"],
    mapFeatureIds: ["site-jericho", "site-gilgal"],
    mapCaption:
      "Once a day for six days the column circles Jericho and goes back to camp; the inset shows the order of march rather than real ground.",
    whatChanged:
      "The map registers a repeated loop. At the end of six days Israel is exactly where it was at the start and Jericho is untouched.",
    geographyExplanation:
      "The circuit is short. Tell es-Sultan covers only a few hectares, so a walk around its base is a matter of several hundred metres, and the whole formation stays in view of the walls the entire time. Going out from [[entity:gilgal]] and back each day adds a few kilometres in each direction across flat, open plain some 250 metres below sea level, in heat that makes a midday march unpleasant even in spring. None of this is difficult ground, and that is the point worth taking from the map: the terrain neither helps nor hinders. The schematic inset is honest about the fact that what the text describes is the arrangement of the column, not the shape of the landscape.",
    sequenceType: "event",
    viewport: {
      center: [35.4442, 31.8715],
      zoom: 12,
      inset: "jericho-procession",
    },
    citations: [
      {
        sourceId: "kenyon-digging-up-jericho",
        supportedClaim:
          "Tell es-Sultan is a small mound of a few hectares, so a circuit of its base is a short walk",
      },
      {
        sourceId: "hess-joshua",
        locator: "on Joshua 6:8-14",
        supportedClaim:
          "The six days of circuits achieve nothing militarily and are presented as a liturgical sequence",
      },
    ],
    evidenceLabels: ["biblical-account"],
  },
  {
    id: "ch6-the-seventh-day-shout",
    chapter: 6,
    order: 3,
    title: "The seventh day and the shout",
    scriptureRefs: ["Joshua 6:15-21"],
    narrative:
      "They rise at dawn and go round seven times. At the seventh the priests blow, [[entity:joshua]] gives the order to shout, and the wall falls. The Hebrew says it fell in its place, under itself. Israel goes up into the city, each man straight in front of him.\n\n" +
      "Before the shout [[entity:joshua]] states the terms. The city and everything in it are *herem*, devoted, given over to Yahweh and so withheld from human use. Only [[entity:rahab]] and everyone in her house are exempt, because she hid the messengers. Silver, gold, bronze and iron are to go to the treasury, and anyone who takes devoted things brings trouble on the camp.\n\n" +
      "Then the chapter reports the carrying out of that order in a single verse: men and women, young and old, oxen, sheep and donkeys, put to the sword. Children are inside that sentence. The account neither flinches nor explains, and a reader who moves past the verse quickly has skipped the thing the chapter did.",
    entityIds: ["joshua", "rahab", "jericho", "canaanites"],
    mapFeatureIds: ["site-jericho", "site-gilgal"],
    mapCaption:
      "On the seventh day the circuit is run seven times, the wall falls, and the city is destroyed.",
    whatChanged:
      "Jericho stops being a functioning city. The site stays on the map, and it is the first place in the book Israel has been inside; but nothing is garrisoned and nobody stays, so no territory changes hands here.",
    geographyExplanation:
      "Taking a walled town in this period normally meant time: a blockade, a ramp, or treachery at a gate. Jericho's setting made the first of those slow, because the spring is at the foot of the mound and the oasis fields are close in. What the chapter describes instead is a wall failing where it stood, and the plain offers nothing to explain that. The ground is flat, and the mound rises roughly twenty metres above it, the accumulated debris of several thousand years of building rather than a natural hill. Israel's way into the city is therefore straight up the slope of the tell from wherever each man happened to be standing, which is what *each man straight in front of him* describes: not a converging attack on a breach but an ascent all round the perimeter.",
    sequenceType: "event",
    viewport: {
      center: [35.4442, 31.8715],
      zoom: 12,
      inset: "jericho-procession",
    },
    citations: [
      {
        sourceId: "kenyon-digging-up-jericho",
        supportedClaim:
          "Tell es-Sultan is an artificial mound of accumulated occupation standing about twenty metres above the plain",
      },
      {
        sourceId: "trimm-destruction-canaanites",
        supportedClaim:
          "Herem marks what is given over to a deity and withheld from ordinary use, and its application to a population is the central ethical problem of these accounts",
      },
    ],
    evidenceLabels: ["biblical-account"],
  },
  {
    id: "ch6-rahabs-household-spared",
    chapter: 6,
    order: 4,
    title: "Rahab's household comes out",
    scriptureRefs: ["Joshua 6:22-25", "Hebrews 11:31"],
    narrative:
      "[[entity:joshua]] sends the two men who had gone in as spies back into the ruined city to fetch [[entity:rahab]]. They bring out her father, her mother, her brothers and everyone who belonged to her, and set them down outside the camp of Israel. Then the city is burned, and the metal goes to the treasury of Yahweh's house.\n\n" +
      "The chapter does not tidy this up. A Canaanite family walks out of a town under total destruction because of a bargain struck with two foreigners on a roof, and the reason given is that she hid the messengers. Her placement outside the camp is left unexplained; the text records it and then says she lived in the midst of Israel, which is a different location and a later moment.\n\n" +
      "The verse reporting her survival sits immediately beside the verse reporting everyone else's death.",
    entityIds: ["joshua", "rahab", "jericho", "gilgal", "canaanites"],
    mapFeatureIds: ["site-jericho", "site-gilgal", "site-salt-sea"],
    mapCaption:
      "Rahab's household is brought out of Jericho and settled outside Israel's camp while the city burns.",
    whatChanged:
      "A Canaanite household has moved from inside Jericho to the edge of Israel's camp. It is a short walk and a large change in status, and it is the only transfer of people the chapter records.",
    geographyExplanation:
      "The distance is trivial, a few kilometres of flat plain between the mound and the camp, and that is what makes the detail worth marking. Rahab's family has not been resettled in another district; they are placed just outside a camp whose own position is not securely known, on ground that belongs to nobody in the book's terms. The oasis they have left is the one dependably watered spot for many kilometres, since the [[entity:salt-sea]] to the south is no use for drinking and the hills to the west hold no permanent streams. A household evicted from [[entity:jericho]] and camped on the plain is living off Israel's supply rather than its own fields, a position of total dependence that the map shows as a very short line.",
    sequenceType: "event",
    viewport: { center: [35.47, 31.871], zoom: 11 },
    citations: [
      {
        sourceId: "bird-harlot-heroine",
        supportedClaim:
          "Rahab's story is told with the tension between her Canaanite identity and her incorporation into Israel left unresolved",
      },
      {
        sourceId: "mitchell-together-in-land",
        supportedClaim:
          "The book preserves notices of Canaanites living among Israel alongside its statements of total destruction",
      },
    ],
    evidenceLabels: ["biblical-account"],
  },
  {
    id: "ch6-the-curse-on-rebuilding",
    chapter: 6,
    order: 5,
    title: "The curse on rebuilding",
    scriptureRefs: ["Joshua 6:26-27", "1 Kings 16:34"],
    narrative:
      "The chapter ends with two notices rather than a scene. [[entity:joshua]] puts the people under oath: cursed be the man who rises up and rebuilds this city, at the cost of his firstborn and his youngest. Then a summary sentence says Yahweh was with [[entity:joshua]] and his fame was in all the land.\n\n" +
      "Neither of these is a located episode, which is why the map here shows scope and not movement. The fame notice in particular compresses an unspecified stretch of time and covers a region rather than a route; reading it as an advance would put Israel in places the text has not sent it.\n\n" +
      "The curse is picked up much later. 1 Kings reports that Hiel of [[entity:bethel]] rebuilt Jericho and lost two sons, which is the Bible's own way of saying the oath was remembered.",
    entityIds: ["joshua", "jericho", "bethel", "ai", "region-jordan-valley"],
    mapFeatureIds: [
      "site-jericho",
      "site-gilgal",
      "site-bethel",
      "site-ai",
      "region-jordan-valley",
    ],
    mapCaption:
      "Jericho is left a ruin under an oath against rebuilding while word of Joshua spreads; the wide view shows how far the report travels.",
    whatChanged:
      "Nothing moves. Jericho is now a ruin under a curse, and the wide frame stands for a reputation travelling.",
    geographyExplanation:
      "The oasis is too valuable to stay empty for long, which is what gives the curse its force. A perennial spring at the foot of the western hills, on the natural crossing between the Transjordan plateau and the central highlands, is the sort of place people rebuild whether or not anyone has sworn an oath about it, and the later notice about Hiel of [[entity:bethel]] shows exactly that happening. The wider frame also shows why a reputation would travel here: the valley is a corridor, and the routes leaving it climb west toward [[entity:bethel]] and [[entity:ai]] or run north and south along the river. News moves along those lines faster than armies do, and the next two chapters turn on what the hill-country towns had heard.",
    sequenceType: "summary",
    viewport: {
      center: [35.38, 31.88],
      zoom: 9,
      bounds: [
        [35.15, 31.7],
        [35.6, 32.05],
      ],
    },
    citations: [
      {
        sourceId: "rainey-notley-sacred-bridge",
        supportedClaim:
          "The Jericho oasis sits on the natural route between the Transjordan plateau and the central hill country",
      },
      {
        sourceId: "hess-joshua",
        locator: "on Joshua 6:26-27",
        supportedClaim:
          "The closing verses of the chapter are summary notices rather than narrated episodes",
      },
    ],
    evidenceLabels: ["biblical-account"],
  },

  /* ---------------- Chapter 7 ---------------- */
  {
    id: "ch7-the-hidden-theft",
    chapter: 7,
    order: 1,
    title: "What one man took",
    scriptureRefs: ["Joshua 7:1", "Joshua 6:18-19"],
    narrative:
      "Chapter 7 opens by looking back into chapter 6. While [[entity:jericho]] was being destroyed, [[entity:achan]] took some of what had been devoted, and the reader is told so before anyone in the camp knows.\n\n" +
      "The verse is a narrator's aside. It gives no time of day, no location inside the city and no witnesses; the burying under the tent floor is reported later, in Achan's own words. Nothing in Israel moves because of this verse, which is why the map here recalls [[entity:jericho]] and the camp rather than drawing an advance.\n\n" +
      "What it does establish is the chapter's structure. Israel is about to act on information it does not have, and the reader will watch it do so. The defeat at [[entity:ai]] arrives as a mystery to everyone in the story and to nobody reading it.",
    entityIds: ["achan", "joshua", "jericho", "gilgal", "ai", "tribe-judah"],
    mapFeatureIds: ["site-jericho", "site-gilgal"],
    mapCaption:
      "The narrator looks back at the sack of Jericho to report a theft nobody in Israel yet knows about.",
    whatChanged:
      "Nothing changes on the ground. The map looks back at Jericho and at the camp on the plain, and the only new fact is one the characters do not have.",
    geographyExplanation:
      "The relevant geography is the short distance between a ruined city and a tent. [[entity:jericho]] and the camp sit a few kilometres apart on the same flat plain, so anything carried out of the city could be under a tent floor the same afternoon without passing a checkpoint or crossing difficult ground. That proximity is what makes concealment easy: no journey during which goods might be noticed, no river to cross, no pass to climb. It also means the collection point for the devoted metal and the tent that took a share of it instead stood within sight of one another. When the goods are dug up later in the chapter, the search covers ground that can be walked in an hour.",
    sequenceType: "retrospective",
    viewport: { center: [35.47, 31.871], zoom: 11 },
    citations: [
      {
        sourceId: "hess-joshua",
        locator: "on Joshua 7:1",
        supportedClaim:
          "The opening verse is a narrator's aside that tells the reader what Israel does not yet know",
      },
    ],
    evidenceLabels: ["biblical-account"],
  },
  {
    id: "ch7-routed-at-the-descent",
    chapter: 7,
    order: 2,
    title: "Routed on the descent",
    scriptureRefs: ["Joshua 7:2-5"],
    narrative:
      "[[entity:joshua]] sends men up from [[entity:gilgal]] to look at [[entity:ai]], east of [[entity:bethel]]. They come back confident: the place is small, do not make the whole army climb, two or three thousand will do. About three thousand go.\n\n" +
      "The men of Ai come out and beat them. The account is specific about direction. Israel is chased from in front of the gate as far as a place called Shebarim, which nobody can now locate, and struck *on the descent*. That is not a detail about distance; it is a detail about slope. A force that has climbed more than a kilometre out of the valley is running back down it with pursuit behind.\n\n" +
      "Thirty-six men die, and the hearts of the people melt and become like water. The number is small against the force sent and smaller still against Israel's strength. For the chapter, the disaster is the collapse of confidence; the casualty count barely registers.",
    entityIds: [
      "joshua",
      "ai",
      "bethel",
      "gilgal",
      "region-hill-country-ephraim",
    ],
    mapFeatureIds: [
      "site-gilgal",
      "site-ai",
      "site-bethel",
      "route-gilgal-to-ai",
      "region-hill-country-ephraim",
    ],
    mapCaption:
      "Three thousand men climb from the camp to Ai, are driven back from the gate, and are cut down on the descent.",
    whatChanged:
      "Israel has tried to move off the valley floor into the hill country for the first time and failed. Nothing is gained, the force is back where it started, and the camp's confidence is gone.",
    geographyExplanation:
      "This is the climb the book's geography has been building toward. [[entity:gilgal]] sits about 250 metres below sea level; [[entity:ai]] and [[entity:bethel]] stand around 850 metres above it, so the ascent gains well over a kilometre of height across roughly twenty-five kilometres of ground. The route runs up a wadi system through bare, broken limestone with almost no water on the way, and it narrows as it climbs. Going up, an army is strung out along a defile for long stretches, visible from above and unable to deploy. Coming down under pursuit the same ground is worse: loose footing, a gradient that makes stopping hard, and nowhere to form a line. The phrase about being struck on the descent names the specific terrain in which a retreat turns into a rout.",
    sequenceType: "event",
    viewport: {
      center: [35.38, 31.89],
      zoom: 10,
      bounds: [
        [35.2, 31.8],
        [35.56, 31.97],
      ],
    },
    citations: [
      {
        sourceId: "rainey-notley-sacred-bridge",
        supportedClaim:
          "The climb from the Jordan Valley to the Bethel plateau gains well over a kilometre of height through dry, broken limestone country",
      },
      {
        sourceId: "hess-joshua",
        locator: "on Joshua 7:5",
        supportedClaim:
          "The text places the killing on the slope running back down toward the valley rather than at the town",
      },
    ],
    evidenceLabels: ["biblical-account", "reconstruction"],
  },
  {
    id: "ch7-joshua-on-his-face",
    chapter: 7,
    order: 3,
    title: "Joshua on his face before the ark",
    scriptureRefs: ["Joshua 7:6-15"],
    narrative:
      "[[entity:joshua]] tears his clothes, puts dust on his head, and lies before the ark until evening with the elders of Israel beside him. His prayer is a complaint, and its central line is the wilderness generation's: why did you bring this people over the [[entity:jordan-river]] at all, only to hand us to the Amorites? He raises the reputational point too. When the Canaanites hear of this, what will become of your great name?\n\n" +
      "God's reply opens with an instruction to stop. Get up. Why have you fallen on your face? Israel has sinned; they have taken from the devoted things and put them among their own goods. That is why they could not stand.\n\n" +
      "Then a procedure: consecrate the people tonight and present them by tribes in the morning. The one taken will be burned with all he has. No name is given. Israel is sent to bed knowing only that the problem is one of them.",
    entityIds: [
      "joshua",
      "gilgal",
      "jordan-river",
      "salt-sea",
      "amorites",
      "canaanites",
    ],
    mapFeatureIds: [
      "site-gilgal",
      "site-jericho",
      "site-jordan-river",
      "site-salt-sea",
      "region-jordan-valley",
    ],
    mapCaption:
      "Joshua lies before the ark in the camp until evening and is told the reason for the defeat is inside it.",
    whatChanged:
      "Nothing moves. The scene sits in the camp on the plain, and what changes is what Israel knows: the obstacle is not Ai.",
    geographyExplanation:
      "The camp on the plain is the wrong place to be if the hill country is closed. Israel is sitting about 250 metres below sea level between a river it has ceremonially crossed and an escarpment it has just failed to climb, on ground with no defensive value and a food supply that now depends on the local harvest. If the hill-country towns combine, which chapter 9 says they were preparing to do, every approach runs downhill toward this camp. Joshua's complaint about being handed over to the Amorites is geographically reasonable rather than merely despairing: the people are in the open, at the bottom, with the [[entity:salt-sea]] closing the south and the [[entity:jordan-river]] behind them. The ark he is lying in front of is the only thing the text says is holding the position.",
    sequenceType: "event",
    viewport: { center: [35.5, 31.869], zoom: 11 },
    citations: [
      {
        sourceId: "hess-joshua",
        locator: "on Joshua 7:7-9",
        supportedClaim:
          "Joshua's complaint reuses the wilderness generation's objection to having crossed the river at all",
      },
      {
        sourceId: "rainey-notley-sacred-bridge",
        supportedClaim:
          "The Jericho plain is low, open ground whose approaches from the hill country all descend toward it",
      },
    ],
    evidenceLabels: ["biblical-account"],
  },
  {
    id: "ch7-the-lot-narrows",
    chapter: 7,
    order: 4,
    title: "The lot narrows to one man",
    scriptureRefs: ["Joshua 7:16-21"],
    narrative:
      "In the morning Israel is brought forward by tribes. [[entity:tribe-judah]] is taken, then the clan of [[entity:zerah]], then the household of [[entity:zabdi]], then [[entity:achan]] son of [[entity:carmi]]. The chapter describes no mechanism. It says only that the lot took each stage in turn while everyone stood and watched.\n\n" +
      "[[entity:joshua]] tells him to give glory to God and confess. [[entity:achan]] does, in order: I saw a fine cloak from Shinar, two hundred shekels of silver and a bar of gold; I coveted them and took them; they are hidden in the ground inside my tent, the silver underneath. Messengers run to the tent and find them exactly there.\n\n" +
      "The confession supplies a motive and no excuse. Whether anyone else in the household knew is not stated, here or later.",
    entityIds: [
      "joshua",
      "achan",
      "carmi",
      "zabdi",
      "zerah",
      "tribe-judah",
      "gilgal",
      "jericho",
    ],
    mapFeatureIds: ["site-gilgal", "site-jericho"],
    mapCaption:
      "In the camp, the lot narrows Israel to a tribe, a clan, a household and finally one man.",
    whatChanged:
      "Nothing moves. The map's scale is wrong for this beat, and that is worth saying: what narrows here is a population, not a frontier.",
    geographyExplanation:
      "This beat has almost no geography and pretending otherwise would be dishonest. It happens inside a camp whose location is not securely identified, and its movement is social rather than spatial: the nation in ranks, then one tribe, then one clan, then one tent. The one spatial fact that matters is the tent. Numbers describes Israel encamped by tribes and households, so goods buried under one floor lay surrounded by relatives and neighbours, and messengers could run from the assembly to the tent and back within a single scene. The map therefore shows the camp area and [[entity:jericho]] a few kilometres off, because that is where the goods came from, and shows nothing else, because nothing else is in the text.",
    sequenceType: "event",
    viewport: { center: [35.5083, 31.8686], zoom: 12 },
    citations: [
      {
        sourceId: "milgrom-numbers",
        supportedClaim:
          "Numbers describes Israel's camp arranged by tribes and households, so a tent stood among its own kin",
      },
      {
        sourceId: "moran-amarna",
        supportedClaim:
          "Movement of luxury textiles and metals across long distances through Canaan is documented in the period's correspondence",
      },
    ],
    evidenceLabels: ["biblical-account"],
  },
  {
    id: "ch7-the-valley-of-achor",
    chapter: 7,
    order: 5,
    title: "The Valley of Achor",
    scriptureRefs: ["Joshua 7:22-26"],
    narrative:
      "[[entity:achan]] is taken out with the silver, the cloak and the gold, and with his sons and daughters, his oxen, donkeys, sheep and tent, and everything he had. All Israel goes with him to a valley. The stones are thrown, the things are burned, and a great heap is raised over the place, which the text says was still there when it was written.\n\n" +
      "The valley is named for the event, from a Hebrew root meaning to trouble. [[entity:joshua]]'s line before the stoning uses the same root: why have you troubled us? Yahweh troubles you today.\n\n" +
      "Where this valley was is not securely known. Proposals include El-Buqei'ah in the wilderness south-west of [[entity:jericho]] and a wadi closer to the city, and the identification rests mainly on later prophetic references rather than on anything in Joshua. The map marks the area as disputed, because it is.",
    entityIds: [
      "joshua",
      "achan",
      "valley-of-achor",
      "jericho",
      "salt-sea",
      "region-wilderness-judah",
    ],
    mapFeatureIds: [
      "site-valley-of-achor",
      "site-jericho",
      "site-gilgal",
      "site-salt-sea",
      "region-wilderness-judah",
    ],
    mapCaption:
      "Achan, his household and his goods are taken to the Valley of Achor, whose location is disputed, and a heap of stones is raised over the place.",
    whatChanged:
      "A new place enters the map, and it is a grave rather than a conquest. The pin is approximate, because the valley has never been securely identified.",
    geographyExplanation:
      "The wilderness west and south of [[entity:jericho]] is cut by steep, dry wadis draining east toward the [[entity:salt-sea]]. They are hot, bare and empty, out of sight of the camp but within a few hours' walk of it, so a body of people could be taken into one and out again in a day. If El-Buqei'ah is the right identification, the site is a small enclosed basin up in the [[entity:region-wilderness-judah]] behind the escarpment, which would make the execution deliberately remote: not at the camp, not at the ruined city, but in dead ground nobody farms. If the valley lay closer to Jericho the point about removal still holds, because even the nearer wadis are outside the cultivated oasis. Either way the ground carries the passage's logic. What is devoted has to be put outside where people live.",
    sequenceType: "event",
    viewport: { center: [35.4, 31.77], zoom: 11 },
    citations: [
      {
        sourceId: "rainey-notley-sacred-bridge",
        supportedClaim:
          "The Valley of Achor is not securely identified, with El-Buqei'ah and wadis nearer Jericho both proposed",
      },
      {
        sourceId: "aharoni-land-of-bible",
        supportedClaim:
          "The wilderness between Jericho and the Judean escarpment is cut by dry wadis draining east to the Salt Sea",
      },
    ],
    evidenceLabels: ["biblical-account", "disputed"],
  },

  /* ---------------------------------------------------------------- */
  /* Chapter 8                                                        */
  /* ---------------------------------------------------------------- */
  {
    id: "ch8-the-ambush-set",
    chapter: 8,
    order: 1,
    title: "The ambush set west of the city",
    scriptureRefs: ["Joshua 8:1-13"],
    narrative:
      "God tells [[entity:joshua]] not to fear, to take all the fighting men, and to do to [[entity:ai]] and its king what was done to [[entity:jericho]] and its king, with one change: the spoil and the livestock are Israel's to take.\n\n" +
      "The plan is set out in detail. A force goes by night to lie up west of the city, between Ai and [[entity:bethel]], close enough to move fast. [[entity:joshua]] takes the rest up and camps on the north side with a ravine between the camp and the town, in plain view. A smaller party is posted between the city and Bethel.\n\n" +
      "The two halves of the force are now on opposite sides of a town that can see only one of them. Nothing has been fought yet. What the chapter has established is that Israel this time went up with everybody and used the ground.",
    entityIds: [
      "joshua",
      "ai",
      "bethel",
      "jericho",
      "region-hill-country-ephraim",
    ],
    mapFeatureIds: [
      "site-ai",
      "site-bethel",
      "site-gilgal",
      "route-gilgal-to-ai",
      "region-hill-country-ephraim",
    ],
    mapCaption:
      "Israel divides: an ambush west of Ai between the town and Bethel, the main camp north of it across a ravine.",
    whatChanged:
      "Israel is back in the hill country, this time in strength and in two bodies. No ground is held yet; the change on the map is a division of the force around a single town.",
    geographyExplanation:
      "The ambush only works because of how this ground is shaped. [[entity:ai]] sits on the eastern edge of the [[entity:region-hill-country-ephraim]] plateau at roughly 850 metres, where the tableland breaks into the wadis that drop east toward the Jordan Valley. To its north is a valley, which is where the text puts [[entity:joshua]]'s camp: visible from the town and separated from it. To its west, between Ai and [[entity:bethel]] under three kilometres off, the ground is rolling and cut with hollows, so a force can lie out of sight within a short run of the walls. To its east the slope falls away toward the wilderness, which is the direction a beaten army would naturally flee and the direction Israel had genuinely fled in chapter 7. Every element of the plan uses a feature of the terrain that was already there.",
    sequenceType: "event",
    viewport: { center: [35.25, 31.92], zoom: 12 },
    citations: [
      {
        sourceId: "rainey-notley-sacred-bridge",
        supportedClaim:
          "The proposed sites for Ai lie on the eastern edge of the Ephraim plateau where the tableland breaks into wadis falling toward the Jordan Valley",
      },
      {
        sourceId: "hess-joshua",
        locator: "on Joshua 8:1-13",
        supportedClaim:
          "The chapter's plan divides Israel's force and uses the ground west and north of the town",
      },
    ],
    evidenceLabels: ["biblical-account", "reconstruction"],
  },
  {
    id: "ch8-the-feint-and-the-fire",
    chapter: 8,
    order: 2,
    title: "The feint, and the smoke behind them",
    scriptureRefs: ["Joshua 8:14-23"],
    narrative:
      "At first light the king of Ai sees Israel and hurries out with all his people to a fixed meeting place facing the Arabah. He does not know there is anyone behind him.\n\n" +
      "[[entity:joshua]] and the main force let themselves be beaten and run east toward the wilderness, along the line of the previous defeat. The town empties. Not a man is left in Ai or in [[entity:bethel]], the text says, because they have all gone after Israel and left the gate open.\n\n" +
      "Then [[entity:joshua]] stretches out the javelin in his hand. The ambush rises from its position, runs into the city and sets it on fire. When the men of Ai look back, the smoke is going up from their own town and Israel has stopped running. They are caught in the open between two forces with nowhere to go, and the king is taken alive and brought to [[entity:joshua]].",
    entityIds: ["joshua", "ai", "bethel", "gilgal", "jordan-river"],
    mapFeatureIds: [
      "site-ai",
      "site-bethel",
      "route-gilgal-to-ai",
      "region-hill-country-ephraim",
      "region-jordan-valley",
    ],
    mapCaption:
      "Israel feigns flight east toward the wilderness, the garrison follows, and the ambush burns the empty town.",
    whatChanged:
      "Ai is on fire and its fighting force is out in the open ground east of it, cut off from the walls. Israel now controls the approach it failed on in chapter 7.",
    geographyExplanation:
      "The feint works because the wilderness is the honest direction to flee in. East of [[entity:ai]] the plateau breaks into a maze of dry wadis dropping more than a kilometre toward [[entity:gilgal]] and the valley floor, and that is where a defeated force that had come up from the [[entity:jordan-river]] side would go, because it is the way home. The men of Ai had watched Israel run down that exact slope once already. Pursuit downhill is also the fastest way to lose contact with your own walls: a couple of kilometres into the wadis and the town is out of sight behind the shoulder of the ridge, which is why the smoke is a shock rather than a warning. The ground that beat Israel in chapter 7 is the ground Israel uses here.",
    sequenceType: "event",
    viewport: { center: [35.29, 31.915], zoom: 11 },
    citations: [
      {
        sourceId: "rainey-notley-sacred-bridge",
        supportedClaim:
          "East of the Ephraim plateau the ground falls through dry wadis more than a kilometre to the Jordan Valley",
      },
      {
        sourceId: "hess-joshua",
        locator: "on Joshua 8:14-20",
        supportedClaim:
          "The feigned flight follows the line of the earlier defeat, which is what makes the pursuit plausible",
      },
    ],
    evidenceLabels: ["biblical-account", "reconstruction"],
  },
  {
    id: "ch8-the-city-and-the-king",
    chapter: 8,
    order: 3,
    title: "A ruin and a grave at the gate",
    scriptureRefs: ["Joshua 8:24-29"],
    narrative:
      "The killing is finished in the open and then in the town. The chapter gives a figure, twelve thousand, and calls it all the people of [[entity:ai]], men and women. Only the livestock and the goods are kept, as permitted.\n\n" +
      "The town is burned and made a permanent ruin, a heap the text says was still there when it wrote. The king is hanged on a tree and left until evening, then taken down at sunset and thrown down at the entrance of the gate under a great heap of stones. Deuteronomy requires a body to be taken down before nightfall, and the narrative follows the rule.\n\n" +
      "Nothing is garrisoned. Israel does not move in. The chapter's outcome here is a ruin, a grave at the gate, and an open road west onto the plateau.",
    entityIds: [
      "joshua",
      "ai",
      "bethel",
      "gibeon",
      "gilgal",
      "region-hill-country-ephraim",
    ],
    mapFeatureIds: [
      "site-ai",
      "site-bethel",
      "site-gibeon",
      "region-hill-country-ephraim",
      "route-gilgal-to-ai",
    ],
    mapCaption:
      "Ai is burned and left a ruin, and its king is buried under stones at the town gate.",
    whatChanged:
      "A town has been destroyed and nobody occupies the site. Israel has beaten a king and burned a city, which is not the same as holding the plateau, and the text claims no settlement here.",
    geographyExplanation:
      "What Israel actually gains from this is access rather than territory. [[entity:ai]] and [[entity:bethel]] sit astride the eastern approach onto the [[entity:region-hill-country-ephraim]] plateau, at the head of the climb from the valley, and a hostile town there can close that route to anyone coming up from [[entity:gilgal]]. With Ai destroyed, the road onto the plateau and the north to south ridge route running along it are open, which is what makes the next chapter possible: [[entity:gibeon]], about eleven kilometres south-west along that high ground, is now reachable without descending again. The ruin itself is worth nothing. The plateau is a watershed, and whoever can move along it can reach the whole central hill country.",
    sequenceType: "event",
    viewport: { center: [35.26, 31.905], zoom: 11 },
    citations: [
      {
        sourceId: "aharoni-land-of-bible",
        supportedClaim:
          "The Bethel and Ai area commands the eastern approach onto the central plateau and the north-south ridge route along it",
      },
      {
        sourceId: "block-deuteronomy",
        locator: "on Deuteronomy 21:22-23",
        supportedClaim:
          "Deuteronomy requires a hanged body to be taken down before nightfall, which this account observes",
      },
    ],
    evidenceLabels: ["biblical-account"],
  },
  {
    id: "ch8-altar-on-mount-ebal",
    chapter: 8,
    order: 4,
    title: "An altar of unworked stones on Mount Ebal",
    scriptureRefs: ["Joshua 8:30-31", "Deuteronomy 27:1-8"],
    narrative:
      "The chapter changes subject without a transition. [[entity:joshua]] builds an altar to Yahweh on [[entity:mount-ebal]]. No march is described, no route, no days on the road; the text simply places him there, about thirty-five kilometres north of [[entity:ai]].\n\n" +
      "The altar follows Moses' specification exactly: whole stones, unworked, with no iron tool used on them. Burnt offerings and peace offerings are made on it, and a copy of the law is written on the stones.\n\n" +
      "This is the first altar Israel builds in the land in this book. It is not built at a captured city, not at [[entity:gilgal]], and not where the fighting has been. It is built at the place Deuteronomy named before Israel crossed the river, which means the site was chosen by an instruction rather than by the campaign.",
    entityIds: ["joshua", "moses", "mount-ebal", "mount-gerizim", "shechem"],
    mapFeatureIds: ["site-mount-ebal", "site-mount-gerizim", "site-shechem"],
    mapCaption:
      "Joshua builds an altar of unworked stones on Mount Ebal, far north of anywhere Israel has fought.",
    whatChanged:
      "Israel is suddenly in the central hill country well north of the campaign, and the map has to jump with it. No town along the way is said to have been taken and no territory changes hands.",
    geographyExplanation:
      "[[entity:mount-ebal]] and [[entity:mount-gerizim]] stand on either side of a narrow pass running east to west through the hill country, with [[entity:shechem]] in the saddle between them. Ebal is the northern and higher of the two at about 940 metres, Gerizim opposite reaches around 880, and the valley floor between them sits near 550, so the slopes rise three to four hundred metres on each side. That pass is the main crossing of the highlands at this latitude, which is why Shechem mattered for centuries. Getting there from [[entity:ai]] means roughly thirty-five kilometres along the plateau ridge, through country the book has not claimed Israel controls. The inset is schematic on purpose: the arrangement it shows is what the text describes, and the real slopes are steeper and rockier than a diagram suggests.",
    sequenceType: "event",
    viewport: { center: [35.275, 32.2286], zoom: 12, inset: "ebal-gerizim" },
    citations: [
      {
        sourceId: "rainey-notley-sacred-bridge",
        supportedClaim:
          "Ebal and Gerizim flank a narrow east-west pass through the hill country with Shechem in the saddle between them",
      },
      {
        sourceId: "wright-shechem",
        supportedClaim:
          "Shechem was a long-occupied centre commanding the pass between the two mountains",
      },
      {
        sourceId: "block-deuteronomy",
        locator: "on Deuteronomy 27:5-6",
        supportedClaim:
          "The altar's unworked stones and the prohibition on iron tools follow Deuteronomy's instruction",
      },
    ],
    evidenceLabels: ["biblical-account", "externally-attested"],
  },
  {
    id: "ch8-blessings-and-curses-read",
    chapter: 8,
    order: 5,
    title: "Blessing and curse read to the whole assembly",
    scriptureRefs: ["Joshua 8:32-35", "Deuteronomy 11:26-32"],
    narrative:
      "Israel is drawn up in two halves, one facing [[entity:mount-gerizim]] and one facing [[entity:mount-ebal]], with the ark of the covenant and the Levites carrying it standing between them, and the elders, officers and judges on both sides.\n\n" +
      "Then [[entity:joshua]] reads. Not a summary, and not the parts that suit the moment: all the words of the law, the blessing and the curse, exactly as written. The audience is spelled out in a way the book rarely bothers with. All the assembly of Israel, the women, the little ones, and the sojourners who were living among them.\n\n" +
      "That last group is the one to notice. The same chapter that reports the destruction of a town's whole population records resident foreigners standing inside the covenant assembly, hearing the law read to them as well. The text sets the two facts side by side and does not explain them.",
    entityIds: [
      "joshua",
      "mount-ebal",
      "mount-gerizim",
      "shechem",
      "tribe-levi",
    ],
    mapFeatureIds: ["site-mount-ebal", "site-mount-gerizim", "site-shechem"],
    mapCaption:
      "Half of Israel faces Gerizim and half faces Ebal, with the ark between, while the whole law is read aloud.",
    whatChanged:
      "Nothing is captured and nobody moves afterwards. What changes is the standing of the assembly: the covenant has now been read aloud in the land, to everyone in it including resident foreigners.",
    geographyExplanation:
      "The pass between the two mountains is the reason this scene is set here rather than anywhere else. The gap at [[entity:shechem]] is narrow, a few hundred metres across at its tightest, with steep rocky slopes rising on both sides, so a gathering on the lower flanks of [[entity:mount-ebal]] and [[entity:mount-gerizim]] would face itself across the valley with the centre in view from both sides. Whether a voice actually carried across the gap is a separate question the text does not raise, and this study does not claim the acoustics as a fact. What the ground does supply is a natural amphitheatre astride the main east to west route through the highlands, beside a long-established centre, which is a workable place to assemble people and a conspicuous place for the law to be read where travellers would pass.",
    sequenceType: "event",
    viewport: { center: [35.2736, 32.2136], zoom: 12, inset: "ebal-gerizim" },
    citations: [
      {
        sourceId: "rainey-notley-sacred-bridge",
        supportedClaim:
          "The Shechem pass between Ebal and Gerizim is narrow with steep slopes on both sides and carries the main east-west route through the highlands",
      },
      {
        sourceId: "mcconville-williams-joshua",
        locator: "on Joshua 8:33-35",
        supportedClaim:
          "The assembly hearing the law is described as including women, children and the sojourners living among Israel",
      },
    ],
    evidenceLabels: ["biblical-account"],
  },
];
