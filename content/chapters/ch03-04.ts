/**
 * Joshua 3 and 4: the crossing and the stones.
 *
 * Editorial commitments specific to these two chapters.
 *
 * 1. The flood is load-bearing. Joshua 3:15 volunteers that the Jordan was over
 *    its banks in harvest season, and that clause rules out the reading in which
 *    Israel simply picked a shallow ford. It is treated as evidence, not colour.
 *
 * 2. The landslide proposal is reported honestly and no further. Collapses of the
 *    marl terraces near the Damiyeh crossing have blocked the river on record, so
 *    the river demonstrably can be dammed by a local collapse. That is not the
 *    same as showing that it was, here. The chapter names no mechanism and ties
 *    the stopping to the priests' feet and to God, and the text is left saying
 *    what it says.
 *
 * 3. Adam and Zarethan are named by the text and are not securely located.
 *    Gilgal is worse: no site has been established, and the pin on the map stands
 *    for an area near the eastern edge of the Jericho plain, not a location.
 *    Chapter 4's monument therefore has no findable address, and the writing does
 *    not give it one.
 *
 * 4. Standing stones are well attested as a Levantine practice. A general
 *    practice does not attest this particular monument, and the two are kept
 *    apart.
 */

import type { Chapter, Milestone } from "../types";

export const CHAPTERS: Chapter[] = [
  /* ---------------------------------------------------------------- */
  /* Chapter 3                                                        */
  /* ---------------------------------------------------------------- */
  {
    id: "ch3",
    number: 3,
    title: "A river in flood, and a box carried into it",
    summary:
      "Israel comes down to the Jordan, waits three days, and is told to follow the ark at a distance because it does not know the way. The priests carry it into a river at its spring height, the water is cut off far upstream, and the nation crosses on the riverbed opposite Jericho.",
    phase: "preparation-and-entry",
    scriptureRange: "Joshua 3:1-17",
    milestoneIds: [
      "ch3-down-to-the-water",
      "ch3-two-thousand-cubits",
      "ch3-feet-in-the-flood",
      "ch3-cut-off-at-adam",
    ],
    sections: [
      {
        id: "ch3-at-a-glance",
        kind: "at-a-glance",
        title: "At a glance",
        body:
          "Israel moves down to the riverbank and waits three days. The officers give one instruction: when the ark moves, follow it, but keep a gap of two thousand cubits, because you have not been this way before. The priests carry it into a river in flood. The water stops far upstream, and the nation crosses on the riverbed opposite Jericho.",
        scriptureRefs: ["Joshua 3:1-17"],
        citations: [],
        evidenceLabels: ["biblical-account"],
      },
      {
        id: "ch3-walk-through",
        kind: "walk-through",
        title: "Walk through the chapter",
        body:
          "[[entity:joshua]] rises early and the camp moves from [[entity:shittim]] to the edge of the [[entity:jordan-river]], where it waits three days. Then the officers pass through with one order. When you see the ark of the covenant carried by the Levitical priests, leave your place and go after it, but keep about two thousand cubits between yourselves and it. The reason given is not reverence in the abstract. It is that you have not passed this way before." +
          "\n\n" +
          "Joshua tells the people to consecrate themselves, [[ref:Leviticus 20:7-8|a charge with Levitical roots]], because God will do wonders among them, and he tells them in advance what to watch for: when the priests' feet rest in the water, the river will be cut off. Twelve men, one from each tribe, are to be appointed. The chapter does not say what they are for." +
          "\n\n" +
          "The priests reach the bank. Verse 15 states the condition without comment: the Jordan overflows its banks all through the harvest. Their feet dip in, the flow coming down from above stands and rises in one heap far upstream near [[entity:adam-city]] beside [[entity:zarethan]], and the water running down toward the [[entity:salt-sea]] is cut off. The priests stand still in the riverbed while the nation passes over opposite [[entity:jericho]].",
        scriptureRefs: ["Joshua 3:1-6", "Joshua 3:7-13", "Joshua 3:14-17"],
        citations: [
          {
            sourceId: "woudstra-joshua",
            locator: "on Joshua 3",
            supportedClaim:
              "The chapter withholds the purpose of the twelve men until chapter 4, and front-loads Joshua's prediction so the event confirms a word already spoken",
          },
        ],
        evidenceLabels: ["biblical-account"],
      },
      {
        id: "ch3-what-brought-us-here",
        kind: "what-brought-us-here",
        title: "What brought us here",
        body:
          "Joshua 1:11 started a clock: pass through the camp, prepare provisions, because within three days you cross this Jordan. Chapter 2 spent those days somewhere else, on a roof inside [[entity:jericho]] and then in the hills west of the river, and the two men came back with a report about the fear inside the city rather than a report about the water." +
          "\n\n" +
          "Chapter 3 returns to the clock and to the obstacle. The camp has been at [[entity:shittim]] on the plains east of the river since the closing chapters of Numbers, close enough to see the far bank for years. What has never been solved is how a nation on foot gets across a river at the wrong time of year.",
        scriptureRefs: ["Joshua 1:10-11", "Joshua 2:22-24", "Numbers 25:1"],
        citations: [],
        evidenceLabels: ["biblical-account"],
      },
      {
        id: "ch3-surrounding-world",
        kind: "surrounding-world",
        title: "The surrounding world",
        body:
          "The Jordan is not a river in a plain. It runs down the floor of a tectonic rift, dropping below sea level soon after the [[entity:sea-of-chinnereth]] and continuing down to the [[entity:salt-sea]], the lowest exposed land on earth. Inside the broad valley floor the river has cut a second, narrower trench, the Zor, walled by soft marl banks that undercut and collapse." +
          "\n\n" +
          "Its flood is seasonal. Winter rain and snowmelt off [[entity:mount-hermon]] and the northern highlands reach the lower valley in spring, when the grain harvest falls in the valley, the season Joshua 3:15 names. Before modern damming and extraction the spring river spread well out of its channel across the Zor." +
          "\n\n" +
          "The marl terraces near the ed-Damiyeh crossing, the area usually proposed for [[entity:adam-city]], have collapsed into the river within recorded memory and dammed it for a time. That is why a landslide keeps being proposed as the mechanism behind Joshua 3: it shows the river can be dammed this way, though not that it was.",
        scriptureRefs: ["Joshua 3:15", "Joshua 3:16"],
        citations: [
          {
            sourceId: "rasmussen-zondervan-atlas",
            supportedClaim:
              "The Jordan runs below sea level through a rift valley and floods seasonally from winter rain and northern snowmelt, spreading across the Zor",
          },
          {
            sourceId: "beitzel-moody-atlas",
            supportedClaim:
              "The structure of the lower Jordan valley, its terraces and the inner floodplain of the Zor",
          },
          {
            sourceId: "hess-joshua",
            locator: "on Joshua 3:16",
            supportedClaim:
              "An upstream location near Adam fits a landslide-style damming of the river, which has been observed in this stretch of the valley",
          },
        ],
        evidenceLabels: ["externally-attested", "reconstruction"],
        collapsedByDefault: true,
      },
      {
        id: "ch3-why-it-matters",
        kind: "why-it-matters",
        title: "Why it matters",
        body:
          "What goes at the head of the column is not a commander and not a standard. It is a box carried by priests, and the nation is told to stay the better part of a kilometre behind it. The chapter repeats the phrase ark of the covenant to the point of insistence. Whatever else is happening on this day, the claim being made is that the presence of God is going first and the army is following, an order of march with [[ref:Numbers 10:33-36|a precedent from the wilderness years]]." +
          "\n\n" +
          "The second claim is about continuity. The generation that saw the sea opened at the exodus has died in the wilderness; this generation is given the same act in its own river, and Joshua 4:23 will say so outright. Reformed writers read that as a seal on the succession from [[entity:moses]] to [[entity:joshua]] and on a covenant that holds unchanged across a change of leader. That is one Christian reading among several rather than the only one, but the chapter itself does connect the water to Joshua's standing: God tells him this is the day he will be magnified in Israel's sight.",
        scriptureRefs: ["Joshua 3:3-4", "Joshua 3:7", "Joshua 3:11", "Joshua 4:23"],
        citations: [
          {
            sourceId: "calvin-joshua",
            locator: "on Joshua 3:7",
            supportedClaim:
              "The crossing is read as God publicly establishing Joshua's authority in continuity with Moses",
          },
          {
            sourceId: "davis-joshua",
            supportedClaim:
              "The repeated naming of the ark of the covenant puts God's presence, not military initiative, at the head of the march",
          },
        ],
        evidenceLabels: ["biblical-account", "theological-interpretation"],
      },
      {
        id: "ch3-details-worth-noticing",
        kind: "details-worth-noticing",
        title: "Details worth noticing",
        body:
          "Certain words and phrases insist on themselves across 3:1-4:24, and a list kept while reading pays off. The ark's mentions in 3:1-13 alone are worth counting." +
          "\n\n" +
          "The reason attached to the two thousand cubits is unusual: you have not passed this way before. The gap is what makes a marker at the front of a long column visible from the back." +
          "\n\n" +
          "God's names shift: the living God is among you in verse 10, while verses 11 and 13 give the ark's owner a longer title, in verse 13 stacked onto the divine name itself, beside the promise about the water. What each claims repays a slow look." +
          "\n\n" +
          "The twelve men of verse 12 are appointed, then dropped until chapter 4, a loose thread. It is the third gap in a row: verse 7 makes a promise without the how, verse 8 orders the priests without the why." +
          "\n\n" +
          "Verse 17's stood firm has a history: at the sea, Moses told Israel to [[ref:Exodus 14:13|stand firm and see]]. The chapter's other contacts with [[ref:Exodus 14:21-31|Exodus 14]] reward verse-by-verse comparison." +
          "\n\n" +
          "The priests do two opposite things, going first and then stopping. They stand in the middle of the channel until the whole nation is across, keeping the ark in the riverbed for the entire crossing rather than at the head of a procession." +
          "\n\n" +
          "Verse 16 looks both ways along the river in one sentence, heaped up far to the north, failed away to the south, more than anyone standing on the bank could see.",
        scriptureRefs: [
          "Joshua 3:4",
          "Joshua 3:7",
          "Joshua 3:8",
          "Joshua 3:10",
          "Joshua 3:11",
          "Joshua 3:12",
          "Joshua 3:13",
          "Joshua 3:16",
          "Joshua 3:17",
        ],
        citations: [
          {
            sourceId: "butler-joshua",
            locator: "on Joshua 3:12",
            supportedClaim:
              "The appointment of the twelve men is left unexplained in chapter 3 and resolved only in chapter 4",
          },
          {
            sourceId: "woudstra-joshua",
            locator: "on Joshua 3:4",
            supportedClaim:
              "The stated reason for the prescribed distance is the people's ignorance of the route",
          },
        ],
        evidenceLabels: ["biblical-account"],
        collapsedByDefault: true,
      },
      {
        id: "ch3-difficult-questions",
        kind: "difficult-questions",
        title: "Difficult questions",
        body:
          "*Did they simply wade across at a low point?* The text closes that off: verse 15 volunteers that the river was over its banks throughout harvest. A narrator inventing an easy ford has no reason to put the flood on the record." +
          "\n\n" +
          "*Was it a landslide?* Collapses of the marl terraces near the Damiyeh area have blocked the Jordan on record, so a local collapse can stop this river; whether one did here is another matter. The chapter names no mechanism of any kind; it times the cut-off to the moment the priests' feet touch the water and attributes it to God. Saying a landslide explains Joshua 3 adds something to the chapter; so does saying it would make this less an act of God. Both go past what is written." +
          "\n\n" +
          "*Where are Adam and Zarethan?* [[entity:adam-city]] is usually placed at Tell ed-Damiyeh. [[entity:zarethan]] is disputed, with Tell es-Sa'idiyeh and Tell Umm Hamad proposed. The general shape of the account, a blockage well upstream of the crossing, survives that uncertainty; precise distances do not, and we do not give them.",
        scriptureRefs: ["Joshua 3:13", "Joshua 3:15", "Joshua 3:16"],
        citations: [
          {
            sourceId: "howard-joshua",
            locator: "on Joshua 3:14-17",
            supportedClaim:
              "Survey of the readings of the stopped water, including the proposal of an upstream landslide and its limits",
          },
          {
            sourceId: "rainey-notley-sacred-bridge",
            supportedClaim:
              "Adam is generally identified with Tell ed-Damiyeh, while the identification of Zarethan remains unsettled",
          },
        ],
        evidenceLabels: ["biblical-account", "disputed", "reconstruction"],
        collapsedByDefault: true,
      },
    ],
    discussionQuestions: [
      "The officers explain the two thousand cubit gap by saying that the people have not passed this way before. What does that reason imply the ark was for on this day, as against what a guide or a map would have been for?",
      "Joshua states in advance exactly what will happen when the priests' feet touch the water. Why might the narrator want the prediction on record before the event rather than the explanation afterwards?",
      "Verse 15 volunteers that the Jordan was in flood all through harvest. What would be lost from the chapter if that clause were deleted?",
      "Twelve men are appointed in verse 12 and given nothing to do. How does that unfinished detail shape the way you read the crossing itself?",
      "Between verses 10 and 13 God is named three ways, and the longest title appears twice. What does each name claim about his power and authority, and why might the fullest one sit beside the promise about the water?",
    ],
    relatedEntityIds: [
      "joshua",
      "moses",
      "jordan-river",
      "jordan-crossing-region",
      "shittim",
      "adam-city",
      "zarethan",
      "salt-sea",
      "jericho",
      "sea-of-chinnereth",
      "mount-hermon",
      "tribe-levi",
      "region-jordan-valley",
      "canaanites",
      "amorites",
      "hittites",
      "hivites",
      "perizzites",
      "girgashites",
      "jebusites",
    ],
    themeIds: [
      "holiness-and-presence",
      "promise-and-fulfillment",
      "covenant-faithfulness",
      "leadership-and-succession",
    ],
  },

  /* ---------------------------------------------------------------- */
  /* Chapter 4                                                        */
  /* ---------------------------------------------------------------- */
  {
    id: "ch4",
    number: 4,
    title: "Twelve stones, and a question children will ask",
    summary:
      "Twelve men carry twelve stones out of the riverbed, the eastern tribes cross armed ahead of everyone else, the river returns to flood behind them, and the stones are set up at the first camp west of the Jordan so that a later generation has something to ask about.",
    phase: "preparation-and-entry",
    scriptureRange: "Joshua 4:1-24",
    milestoneIds: [
      "ch4-twelve-stones-from-the-riverbed",
      "ch4-the-eastern-tribes-cross-armed",
      "ch4-the-river-comes-back",
      "ch4-the-camp-at-gilgal",
      "ch4-what-do-these-stones-mean",
    ],
    sections: [
      {
        id: "ch4-at-a-glance",
        kind: "at-a-glance",
        title: "At a glance",
        body:
          "Twelve men, one for each tribe, carry twelve stones out of the riverbed. About forty thousand armed men from the eastern tribes cross ahead of everyone else. The priests come up, the river goes back to flood, and the stones are set up at Gilgal so that children who ask what they mean can be told.",
        scriptureRefs: ["Joshua 4:1-24"],
        citations: [],
        evidenceLabels: ["biblical-account"],
      },
      {
        id: "ch4-walk-through",
        kind: "walk-through",
        title: "Walk through the chapter",
        body:
          "The twelve men appointed in the previous chapter finally get their task. Each takes a stone from the place where the priests' feet stood, to carry over and set down. [[entity:joshua]] also sets up twelve stones in the middle of the Jordan where the priests had stood, and verse 9 says they are there to this day. How that set relates to the stones carried out is not explained." +
          "\n\n" +
          "About forty thousand armed men of [[entity:tribe-reuben]], [[entity:tribe-gad]] and [[entity:tribe-manasseh-east]] pass over in front of the others, which is the Numbers 32 agreement being kept where everyone can see it. On that day God magnifies Joshua in the sight of all Israel, and they hold him in the awe they held [[entity:moses]] in." +
          "\n\n" +
          "When the nation is over, the priests carry the ark up out of the channel, and the moment their feet reach dry ground the Jordan returns and runs over its banks as before. The people come up on the tenth day of the first month and camp at [[entity:gilgal]], and there Joshua sets up the twelve stones. Then he says what they are for: when your children ask what these stones mean, tell them Israel crossed this Jordan on dry ground, because God dried it as he dried the sea at the exodus.",
        scriptureRefs: ["Joshua 4:1-9", "Joshua 4:10-14", "Joshua 4:15-24"],
        citations: [
          {
            sourceId: "butler-joshua",
            locator: "on Joshua 4:9",
            supportedClaim:
              "The relation between the stones set up in the river in verse 9 and those carried out and set up at Gilgal is a recognised difficulty in the chapter",
          },
        ],
        evidenceLabels: ["biblical-account"],
      },
      {
        id: "ch4-what-brought-us-here",
        kind: "what-brought-us-here",
        title: "What brought us here",
        body:
          "Chapter 3 left two things unfinished. Twelve men had been appointed with nothing to do, and the priests were standing in the middle of a riverbed with a nation filing past them. Chapter 4 closes both." +
          "\n\n" +
          "Behind it stands an older arrangement. In Numbers 32 [[entity:tribe-reuben]] and [[entity:tribe-gad]] asked for the land east of the Jordan and were granted it on one condition: their fighting men would cross over armed and go ahead of their brothers until Israel held its inheritance. Joshua 1:12-15 restated the terms to them, and they agreed. This chapter is where that promise comes due, in public, at the one moment when going back would still be easy.",
        scriptureRefs: ["Joshua 3:12", "Joshua 3:17", "Numbers 32:20-32", "Joshua 1:12-15"],
        citations: [
          {
            sourceId: "milgrom-numbers",
            locator: "on Numbers 32",
            supportedClaim:
              "The eastern tribes' inheritance was granted on the condition that their fighting men cross over armed ahead of the other tribes",
          },
        ],
        evidenceLabels: ["biblical-account"],
      },
      {
        id: "ch4-surrounding-world",
        kind: "surrounding-world",
        title: "The surrounding world",
        body:
          "Setting up unworked standing stones was an ordinary thing to do in this world. Upright stones turn up at sanctuaries and open-air installations across the Bronze and Iron Age southern Levant, and the Hebrew Bible knows the practice well enough to legislate against some uses of it while narrating others without objection." +
          "\n\n" +
          "The functions vary: witness to an agreement, boundary marker, grave, memorial of an event, or representation of a deity. What the archaeology supplies is the vocabulary, not this monument. Nothing excavated can be attached to Joshua 4, and since [[entity:gilgal]] has no established location there is nowhere in particular to look." +
          "\n\n" +
          "The camp matters as much as the stones. Gilgal becomes Israel's base through chapters 5 to 10, the place the army returns to after each campaign, on the valley floor where the boundary between outside and inside gets marked and crossed, over and over.",
        scriptureRefs: ["Joshua 4:8", "Joshua 4:20", "Deuteronomy 16:22"],
        citations: [
          {
            sourceId: "mazar-archaeology-land",
            supportedClaim:
              "Unworked standing stones are a widespread feature of cultic and commemorative installations in the Bronze and Iron Age southern Levant",
          },
          {
            sourceId: "block-deuteronomy",
            locator: "on Deuteronomy 16:22",
            supportedClaim:
              "Deuteronomic law prohibits certain uses of standing pillars while the narrative books record memorial stones without censure",
          },
          {
            sourceId: "rainey-notley-sacred-bridge",
            supportedClaim:
              "Gilgal has not been securely identified with any excavated site on the Jericho plain",
          },
        ],
        evidenceLabels: ["externally-attested", "reconstruction"],
        collapsedByDefault: true,
      },
      {
        id: "ch4-why-it-matters",
        kind: "why-it-matters",
        title: "Why it matters",
        body:
          "This is where the book says why it bothers with geography. The stones are set up so that a question can be asked. When your children ask their fathers what these stones mean, you tell them. The monument is not aimed at God and not at the inhabitants of the land; it is a prompt placed in a landscape so that a generation which crossed nothing has something to point at and a reason to want the story." +
          "\n\n" +
          "That makes remembering a physical arrangement rather than an effort of will. Deuteronomy 6 and Exodus 12 use the same form, a child's question answered with an account of rescue, [[ref:Psalm 145:4|the Psalms treat the handover between generations as praise]], and here the answer is anchored to a spot on the ground. Reformed writers have drawn from this the principle that covenant signs are given to be explained to children and point away from themselves to what God did, which is one Christian reading rather than the only one. The chapter's own claim is narrower and harder to argue with: without something standing where it can be tripped over, the question does not get asked at all.",
        scriptureRefs: ["Joshua 4:6-7", "Joshua 4:21-24", "Deuteronomy 6:20-25", "Exodus 12:26-27"],
        citations: [
          {
            sourceId: "creach-joshua",
            supportedClaim:
              "The stones are given a catechetical function: they exist to prompt a question from a later generation and to be answered with the story",
          },
          {
            sourceId: "block-deuteronomy",
            locator: "on Deuteronomy 6:20-25",
            supportedClaim:
              "The child's question answered by a narrative of rescue is a set instructional form in Deuteronomy",
          },
          {
            sourceId: "robertson-christ-of-covenants",
            supportedClaim:
              "Reformed covenant theology reads memorial signs as instructional and as pointing beyond themselves to God's redemptive acts",
          },
        ],
        evidenceLabels: ["biblical-account", "theological-interpretation"],
      },
      {
        id: "ch4-details-worth-noticing",
        kind: "details-worth-noticing",
        title: "Details worth noticing",
        body:
          "The date given is not neutral. Israel comes up on the tenth day of the first month, the day Exodus 12 sets for [[ref:Exodus 12:1-6|taking the Passover lamb]]. Chapter 5 will hold a Passover at this camp." +
          "\n\n" +
          "Verse 1 calls Israel by a word the Hebrew Bible mostly keeps for other peoples. Why here is worth asking with [[ref:Genesis 12:1-3|the promise to Abram]] and [[ref:Genesis 15:18-20|the borders sworn to him]] open alongside." +
          "\n\n" +
          "Water standing in a heap is an image the Psalms know: [[ref:Psalm 33:7|Psalm 33 uses it of the sea]], and Psalm 29 sets the LORD's voice [[ref:Psalm 29:3|over the waters]], his throne [[ref:Psalm 29:10|over the flood]]." +
          "\n\n" +
          "The scripted answer of verses 21 to 23 is longer than the question needs; count the events a father must relate. Verse 24 names two audiences without giving them the same verb, and stacks more than one purpose clause. What [[ref:Deuteronomy 6:1-5|fearing the LORD]] involves, [[ref:Deuteronomy 6:13-14|whom it excludes]] and [[ref:Deuteronomy 5:29|why he wants it]] is Deuteronomy's territory." +
          "\n\n" +
          "About forty thousand is smaller than the Numbers 26 muster of these tribes, and the chapter offers no reconciliation. One reading takes it as the contingent sent rather than the whole militia." +
          "\n\n" +
          "The stones come from one precise spot, where the priests' feet stood. Their value as a sign depends on where they were lifted from." +
          "\n\n" +
          "Joshua 3:7 promised that God would begin to magnify Joshua on this day. Joshua 4:14 reports it done, in the same breath as the eastern tribes keeping their word. Both halves of the day are about credit being established in public, and [[ref:Exodus 14:31|the sea crossing ends on a comparable note about Moses]].",
        scriptureRefs: [
          "Joshua 4:1",
          "Joshua 4:3",
          "Joshua 4:13",
          "Joshua 4:14",
          "Joshua 4:19",
          "Joshua 4:21-24",
          "Numbers 26:7",
          "Exodus 12:3",
        ],
        citations: [
          {
            sourceId: "howard-joshua",
            locator: "on Joshua 4:13",
            supportedClaim:
              "The figure of about forty thousand is smaller than the Numbers 26 muster of the eastern tribes and is explained in more than one way",
          },
          {
            sourceId: "hess-joshua",
            locator: "on Joshua 4:19",
            supportedClaim:
              "The tenth day of the first month is the day Exodus 12 appoints for setting apart the Passover lamb",
          },
        ],
        evidenceLabels: ["biblical-account"],
        collapsedByDefault: true,
      },
      {
        id: "ch4-difficult-questions",
        kind: "difficult-questions",
        title: "Difficult questions",
        body:
          "*One set of stones or two?* Verses 8 and 20 have stones lifted out of the channel and set up at the camp. Verse 9 has Joshua set up twelve stones in the middle of the river. Readers have taken it three ways: two monuments, one visible and one submerged; a back-reference in verse 9 to the same stones; or a difficulty in the text itself. The Hebrew allows argument, and to this day in verse 9 is a claim by someone who could not have been looking at them. The chapter does not settle it." +
          "\n\n" +
          "*Where is Gilgal?* Nowhere we can name. Proposals include Khirbet el-Mafjir and Khirbet en-Nitla; none has carried. The map pin stands for the area the text describes. So the one object in Joshua whose whole purpose is to be stood in front of and asked about cannot be visited." +
          "\n\n" +
          "*Does the Levantine practice support the account?* It shows the act described would have been legible in that world; it does not attest this monument, and nothing found can be tied to it.",
        scriptureRefs: ["Joshua 4:8", "Joshua 4:9", "Joshua 4:19-20"],
        citations: [
          {
            sourceId: "butler-joshua",
            locator: "on Joshua 4:9",
            supportedClaim:
              "The verse 9 stones have been read as a second monument, as a back-reference to the same stones, and as a textual difficulty",
          },
          {
            sourceId: "rainey-notley-sacred-bridge",
            supportedClaim:
              "Candidates proposed for Gilgal include Khirbet el-Mafjir and Khirbet en-Nitla, with no identification established",
          },
        ],
        evidenceLabels: ["biblical-account", "disputed", "reconstruction"],
        collapsedByDefault: true,
      },
    ],
    discussionQuestions: [
      "Joshua says the stones exist so that a child's question has an answer. What does it change about the way you read the rest of the book to know that its geography was recorded for that purpose?",
      "One set of stones stands at the camp and, in verse 9, one set stands in the middle of the river where nobody can see it. What would each set be for?",
      "The eastern tribes cross armed and at the front, and the text makes a point of it happening in front of everyone. Why report it that way rather than simply record that they kept the agreement?",
      "Gilgal cannot be located. How much does losing the place cost a chapter whose whole concern is a monument standing in one particular spot?",
      "The river goes back to flood the moment the priests step out of it. What does that detail do that the crossing on its own would not?",
    ],
    relatedEntityIds: [
      "joshua",
      "moses",
      "gilgal",
      "jordan-river",
      "jordan-crossing-region",
      "jericho",
      "tribe-reuben",
      "tribe-gad",
      "tribe-manasseh-east",
      "tribe-levi",
      "region-jordan-valley",
      "region-gilead",
      "region-moab-plateau",
    ],
    themeIds: [
      "memory-and-memorials",
      "promise-and-fulfillment",
      "unity-among-tribes",
      "leadership-and-succession",
    ],
  },
];

export const MILESTONES: Milestone[] = [
  /* ---------------------------------------------------------------- */
  /* Chapter 3                                                        */
  /* ---------------------------------------------------------------- */
  {
    id: "ch3-down-to-the-water",
    chapter: 3,
    order: 1,
    title: "Down from Shittim to the water's edge",
    scriptureRefs: ["Joshua 3:1-2"],
    narrative:
      "Joshua rises early and the whole camp moves. From [[entity:shittim]] on the plains east of the river the column comes down to the [[entity:jordan-river]] and stops there, and for three days nothing else happens. The waiting is not dead space in the account. It is the last interval in which Israel is an encamped people rather than a people in the land, and it is spent in sight of the thing in the way." +
      "\n\n" +
      "Neither verse says what the three days are for. Chapter 1 had already announced a three day clock and chapter 2 had used those days on the far bank, so a reader arrives at the water with the sense of a schedule being kept rather than a delay being suffered. At the end of the three days the officers go through the camp with instructions, and the chapter starts moving again.",
    entityIds: ["joshua", "shittim", "jordan-river", "jordan-crossing-region", "region-jordan-valley"],
    mapFeatureIds: [
      "route-shittim-to-jordan",
      "site-shittim",
      "site-jordan-river",
      "site-jordan-crossing-region",
    ],
    mapCaption:
      "About ten kilometres of valley floor, from the camp at Shittim down to the eastern bank of the Jordan.",
    whatChanged:
      "The camp stops being a camp on the plains of Moab and becomes a column drawn up on a riverbank, with nothing between it and the land but water.",
    geographyExplanation:
      "Shittim sits on the plains of Moab roughly two hundred and fifty metres below sea level, and the walk west to the river is around ten kilometres of flat, hot valley floor with no climb in it. Jericho lies a further eight kilometres or so beyond the river, so the whole distance from camp to city is only about twenty kilometres. The distances are short, but the valley floor offers no cover and the river offers no choice of line: a nation on foot with livestock and baggage crosses where the ground lets it cross, and in spring the ground that would let it is underwater.",
    sequenceType: "event",
    viewport: {
      center: [35.58, 31.855],
      zoom: 11,
    },
    citations: [
      {
        sourceId: "rainey-notley-sacred-bridge",
        supportedClaim:
          "The distance and terrain between the plains of Moab, the eastern bank of the Jordan, and Jericho on the western side",
      },
      {
        sourceId: "hess-joshua",
        locator: "on Joshua 3:1-2",
        supportedClaim:
          "The three day interval at the bank continues the schedule announced in Joshua 1:11",
      },
    ],
    evidenceLabels: ["biblical-account", "reconstruction"],
  },
  {
    id: "ch3-two-thousand-cubits",
    chapter: 3,
    order: 2,
    title: "Follow the ark, and keep your distance",
    scriptureRefs: ["Joshua 3:3-13"],
    narrative:
      "The officers give one instruction and one reason. Watch for the ark of the covenant carried by the Levitical priests; when it moves, leave your place and go after it; and keep about two thousand cubits between yourselves and it, because you have not passed this way before. The gap is wide enough that the ark works as a visible marker for a column strung out along the valley floor, and the reason offered is ignorance of the route." +
      "\n\n" +
      "[[entity:joshua]] then tells the people what to expect before it happens. Consecrate yourselves. The living God is among you. When the feet of the priests carrying the ark rest in the water, the Jordan will be cut off. Twelve men, one from each tribe, are to be appointed, with no task attached. The peoples of the land are named as those who will be driven out, which ties this river crossing to the whole of what follows rather than leaving it a local wonder.",
    entityIds: [
      "joshua",
      "tribe-levi",
      "jordan-river",
      "jordan-crossing-region",
      "canaanites",
      "hittites",
      "hivites",
      "perizzites",
      "girgashites",
      "amorites",
      "jebusites",
    ],
    mapFeatureIds: ["site-jordan-crossing-region", "site-jordan-river", "site-shittim"],
    mapCaption:
      "The instruction is given on the eastern bank, at the crossing place opposite Jericho.",
    whatChanged:
      "The order of march changes. What leads the nation is the ark carried by priests, and everyone else is ordered to hold a wide gap behind it.",
    geographyExplanation:
      "Two thousand cubits is somewhere near nine hundred metres, depending on which cubit is assumed. On this ground that distance is legible rather than arbitrary. The valley floor is open and close to level, so an object carried at the front of a column can be seen from a long way back, while the crossing itself is only a few hundred metres of riverbed. A gap that size means the ark has been standing in the water for some time before the first people reach it, and the tail of the column is still up on the terrace above the Zor when the head is already across.",
    sequenceType: "event",
    viewport: {
      center: [35.545, 31.858],
      zoom: 11,
    },
    citations: [
      {
        sourceId: "woudstra-joshua",
        locator: "on Joshua 3:3-4",
        supportedClaim:
          "The prescribed distance keeps the ark visible to a long column while marking it off as holy",
      },
      {
        sourceId: "anchor-bible-dictionary",
        locator: "s.v. Weights and Measures",
        supportedClaim:
          "The common cubit is reckoned at roughly forty-five centimetres, putting two thousand cubits near nine hundred metres",
      },
    ],
    evidenceLabels: ["biblical-account", "reconstruction"],
  },
  {
    id: "ch3-feet-in-the-flood",
    chapter: 3,
    order: 3,
    title: "The priests' feet touch a river in flood",
    scriptureRefs: ["Joshua 3:14-15"],
    narrative:
      "The camp breaks and moves off with the priests carrying the ark at the front, and then the narrator stops the action for one clause. The Jordan overflows its banks throughout the time of harvest. It is volunteered information. Nothing in the plot demands it, and it makes the crossing harder rather than easier, which is exactly why it is there: this is not a nation picking its way across a shrunken summer stream." +
      "\n\n" +
      "The priests reach the edge and their feet dip in the water. The timing in the account is precise. The river is not cut off when [[entity:joshua]] speaks, or when the people set out, but at the moment the men carrying the ark put their feet into water that is running high. The ark goes into the flood first, and the nearest of the people are still a long way back up the bank when it does.",
    entityIds: ["joshua", "tribe-levi", "jordan-river", "jordan-crossing-region"],
    mapFeatureIds: ["site-jordan-river", "site-jordan-crossing-region", "route-jordan-crossing"],
    mapCaption:
      "The bank opposite Jericho, in the season when the Jordan is out of its channel and spread across the Zor.",
    whatChanged:
      "The ark is in the water. The crossing has begun, and it has begun at the worst time of year to attempt it.",
    geographyExplanation:
      "In spring the Jordan does not stay in the narrow channel it keeps in late summer. Rain and snowmelt from the north push the flow out across the Zor, the sunken, thicketed floodplain that sits inside the wider valley terrace, so the water a crossing party faces is wider, faster and deeper than the same crossing in autumn, over banks that are being undercut as it rises. The grain harvest in the Jordan valley falls in this same season. The two facts in verse 15, harvest and flood, are one fact stated twice.",
    sequenceType: "event",
    viewport: {
      center: [35.534, 31.861],
      zoom: 11,
    },
    citations: [
      {
        sourceId: "rasmussen-zondervan-atlas",
        supportedClaim:
          "The Jordan's spring flood is fed by winter rain and northern snowmelt and spreads the river out across the Zor floodplain",
      },
      {
        sourceId: "hess-joshua",
        locator: "on Joshua 3:15",
        supportedClaim:
          "The flood stage note is supplied by the narrator to establish the difficulty of the crossing rather than to explain it away",
      },
    ],
    evidenceLabels: ["biblical-account", "externally-attested"],
  },
  {
    id: "ch3-cut-off-at-adam",
    chapter: 3,
    order: 4,
    title: "Heaped up at Adam, cut off toward the Salt Sea",
    scriptureRefs: ["Joshua 3:16-17"],
    narrative:
      "The water coming down from above stands and rises in one heap a long way upstream, near [[entity:adam-city]] beside [[entity:zarethan]], and the water running down toward the [[entity:salt-sea]] fails and is cut off. In a single sentence the narrator looks far up the valley and far down it. Whatever the reader is being shown, it is not a local event at the water's edge." +
      "\n\n" +
      "The people pass over opposite [[entity:jericho]]. The priests carrying the ark do not cross with them. They stand still in the middle of the riverbed until the whole nation is over, so the image the chapter ends on is the ark standing in a dry channel with a nation walking past it, and a mass of held water somewhere out of sight to the north.",
    entityIds: [
      "adam-city",
      "zarethan",
      "jordan-river",
      "jordan-crossing-region",
      "salt-sea",
      "jericho",
      "tribe-levi",
      "region-jordan-valley",
    ],
    mapFeatureIds: [
      "site-adam-city",
      "site-zarethan",
      "site-jordan-river",
      "site-salt-sea",
      "site-jordan-crossing-region",
      "route-jordan-crossing",
      "site-jericho",
    ],
    mapCaption:
      "The blockage is placed far upstream near Adam and Zarethan, the crossing itself opposite Jericho, and the cut-off reaches down toward the Salt Sea.",
    whatChanged:
      "Israel is on the western bank. The river that marked the edge of the promise has been crossed on foot, and the ark is still standing in it.",
    geographyExplanation:
      "Adam is usually placed at Tell ed-Damiyeh, roughly twenty-five kilometres up the valley from the crossing, and the sites proposed for Zarethan lie further north again, so the geography of verse 16 is worth reading on a map rather than imagining as a parted pool. Downstream the channel runs only about another ten kilometres to where the Jordan enters the Salt Sea, which sits at the lowest point on the earth's land surface. The drained stretch the people walked over was a short section near the bottom of a long, steeply falling river, held back from a point they could not see.",
    sequenceType: "event",
    viewport: {
      center: [35.55, 31.99],
      zoom: 9,
      bounds: [
        [35.4, 31.78],
        [35.7, 32.32],
      ],
    },
    citations: [
      {
        sourceId: "hess-joshua",
        locator: "on Joshua 3:16",
        supportedClaim:
          "The upstream location named in the verse places the blockage well north of the crossing point",
      },
      {
        sourceId: "rainey-notley-sacred-bridge",
        supportedClaim:
          "Adam is generally identified with Tell ed-Damiyeh, while Zarethan is placed variously at Tell es-Sa'idiyeh or Tell Umm Hamad",
      },
    ],
    evidenceLabels: ["biblical-account", "disputed"],
  },

  /* ---------------------------------------------------------------- */
  /* Chapter 4                                                        */
  /* ---------------------------------------------------------------- */
  {
    id: "ch4-twelve-stones-from-the-riverbed",
    chapter: 4,
    order: 1,
    title: "Twelve stones lifted out of the channel",
    scriptureRefs: ["Joshua 4:1-9"],
    narrative:
      "The task held back in chapter 3 arrives. One man from each tribe goes to the place where the priests' feet stood and lifts a stone out of the channel, to carry over on his shoulder and set down where the nation camps. [[entity:joshua]] states the purpose on the spot: this is to be a sign, so that when your children ask what these stones mean there is something to answer with." +
      "\n\n" +
      "Verse 9 then records a second act. Joshua sets up twelve stones in the middle of the Jordan, in the place where the priests carrying the ark had stood, and they are there to this day. How that set relates to the stones carried out and set up at the camp is a genuine question the chapter does not resolve. What both acts share is a location: the stones either come from, or stay in, the exact patch of riverbed where the ark stood in the water.",
    entityIds: ["joshua", "jordan-river", "jordan-crossing-region", "gilgal", "tribe-levi"],
    mapFeatureIds: [
      "site-jordan-crossing-region",
      "route-jordan-crossing",
      "site-jordan-river",
      "site-gilgal",
    ],
    mapCaption:
      "Stones lifted from the channel opposite Jericho, to be carried west to the first camp in the land.",
    whatChanged:
      "A piece of the riverbed leaves the river. The crossing acquires a physical record that will outlast everyone who walked through it.",
    geographyExplanation:
      "The stones come from one spot, the patch of channel bed where the priests stood, a few hundred metres of riverbed opposite Jericho. That is what makes them evidence rather than ornament: river cobbles standing on the dry terrace above the Zor are out of place, and anyone who knows this valley can see that they are. The carry itself is short, though since Gilgal's location is not established we cannot say how short, only that it is somewhere within a few kilometres west onto the plain. What it crosses is the boundary that counts, from ground the flood covers to ground it never reaches.",
    sequenceType: "event",
    viewport: {
      center: [35.528, 31.864],
      zoom: 11,
    },
    citations: [
      {
        sourceId: "hess-joshua",
        locator: "on Joshua 4:1-9",
        supportedClaim:
          "The stones are taken specifically from the place where the priests stood, which is what ties the monument to the event",
      },
      {
        sourceId: "butler-joshua",
        locator: "on Joshua 4:9",
        supportedClaim:
          "The second set of stones in verse 9 is left unreconciled with the stones carried out of the river",
      },
    ],
    evidenceLabels: ["biblical-account"],
  },
  {
    id: "ch4-the-eastern-tribes-cross-armed",
    chapter: 4,
    order: 2,
    title: "The eastern tribes cross armed, in front",
    scriptureRefs: ["Joshua 4:10-14"],
    narrative:
      "About forty thousand armed men of [[entity:tribe-reuben]], [[entity:tribe-gad]] and [[entity:tribe-manasseh-east]] pass over ahead of the rest of Israel, ready for war. This is the Numbers 32 arrangement being honoured where it can be seen. Their land is already behind them, on the far side of the river they have just crossed away from, and they are walking into a campaign for territory none of them will farm." +
      "\n\n" +
      "The narrator puts something else in the same breath. On that day God magnified [[entity:joshua]] in the sight of all Israel, and they held him in the awe they had held [[entity:moses]] in all his life. The promise of Joshua 3:7 is reported fulfilled, and it is reported at the point where the tribes with the least to gain are seen keeping their word.",
    entityIds: [
      "tribe-reuben",
      "tribe-gad",
      "tribe-manasseh-east",
      "joshua",
      "moses",
      "jordan-river",
      "jordan-crossing-region",
      "region-gilead",
      "region-moab-plateau",
      "region-bashan",
    ],
    mapFeatureIds: [
      "route-jordan-crossing",
      "site-jordan-crossing-region",
      "site-jordan-river",
      "region-gilead",
      "region-bashan",
      "region-moab-plateau",
    ],
    mapCaption:
      "The eastern tribes cross westward, away from the land already allotted to them east of the Jordan.",
    whatChanged:
      "The tribes whose inheritance is already secured put themselves at the head of a war for everyone else's. Israel is now split across the river, held together by one sworn obligation.",
    geographyExplanation:
      "The river these men cross is the seam the rest of the book keeps worrying at. Reuben, Gad and eastern Manasseh hold the plateau and hills east of the Jordan, from the Moab tableland north through Gilead toward Bashan, grazing country cut off from the western hill country by a rift that lies below sea level and can be crossed only where the ground allows. Going over armed means leaving families and herds on the far side of a barrier that cannot be recrossed quickly, which is why the arrangement had to be sworn in the first place and why Joshua 22 comes back to it.",
    sequenceType: "event",
    viewport: {
      center: [35.6, 31.89],
      zoom: 10,
      bounds: [
        [35.35, 31.7],
        [36.0, 32.2],
      ],
    },
    citations: [
      {
        sourceId: "milgrom-numbers",
        locator: "on Numbers 32:20-32",
        supportedClaim:
          "The terms agreed east of the Jordan required the eastern tribes' fighting men to cross over armed in advance of their brothers",
      },
      {
        sourceId: "havrelock-river-jordan",
        supportedClaim:
          "The Jordan functions in the biblical literature as a boundary that divides Israel from itself as well as from its neighbours",
      },
    ],
    evidenceLabels: ["biblical-account", "reconstruction"],
  },
  {
    id: "ch4-the-river-comes-back",
    chapter: 4,
    order: 3,
    title: "The ark comes up and the river returns",
    scriptureRefs: ["Joshua 4:15-18"],
    narrative:
      "The last instruction of the crossing goes to the priests: come up out of the Jordan. They carry the ark up, and the account is exact about the moment. As soon as the soles of their feet lift onto dry ground, the waters of the Jordan return to their place and run over all its banks as they did before." +
      "\n\n" +
      "The detail closes the door behind the nation. The river is not left conveniently low. It goes back to the flood the previous chapter took the trouble to describe, so anyone standing on the western bank an hour later is looking at a river in spring spate and no way back over it. The ark, which went into the water first and stayed in it longest, comes out last.",
    entityIds: ["tribe-levi", "jordan-river", "jordan-crossing-region", "shittim"],
    mapFeatureIds: ["site-jordan-river", "site-jordan-crossing-region", "route-jordan-crossing"],
    mapCaption:
      "The channel opposite Jericho refills the moment the ark is clear of it.",
    whatChanged:
      "The way back closes. Israel is west of the Jordan with a river in flood between it and the plains of Moab.",
    geographyExplanation:
      "A lower Jordan in flood is not an obstacle that can be negotiated with. The water spreads across the Zor between undercut marl banks, and the fords that serve in late summer are unusable. The alternatives lie far up or far down the valley, and downstream the valley floor runs out at the Salt Sea within about ten kilometres. Practically, the return of the water means the next move has to be west and uphill into the hill country, which is the direction the rest of the book takes.",
    sequenceType: "event",
    viewport: {
      center: [35.535, 31.865],
      zoom: 11,
    },
    citations: [
      {
        sourceId: "rasmussen-zondervan-atlas",
        supportedClaim:
          "The lower Jordan's usable fords are unavailable at spring flood, when the river spreads across its inner floodplain",
      },
      {
        sourceId: "woudstra-joshua",
        locator: "on Joshua 4:18",
        supportedClaim:
          "The return of the water is timed to the priests' feet leaving the channel, matching the timing of the cut-off",
      },
    ],
    evidenceLabels: ["biblical-account", "externally-attested"],
  },
  {
    id: "ch4-the-camp-at-gilgal",
    chapter: 4,
    order: 4,
    title: "The first camp in the land",
    scriptureRefs: ["Joshua 4:19-20"],
    narrative:
      "The people come up out of the Jordan on the tenth day of the first month and camp at [[entity:gilgal]], on the eastern side of [[entity:jericho]], and there [[entity:joshua]] sets up the twelve stones they had taken from the river." +
      "\n\n" +
      "This is the first Israelite camp west of the Jordan, and it becomes the base for everything that follows, the place the army returns to after Jericho, after Ai, after Gibeon and after the southern campaign. It is also a place we cannot find. No site has been securely identified with Gilgal, proposals have been made and none has carried, and the pin on the map marks the area the text describes rather than a location. The chapter's monument therefore stands somewhere in a few square kilometres of valley floor that we can point at only in general terms.",
    entityIds: ["gilgal", "jericho", "joshua", "jordan-crossing-region", "region-jordan-valley"],
    mapFeatureIds: [
      "site-gilgal",
      "site-jericho",
      "site-jordan-crossing-region",
      "route-jordan-crossing",
    ],
    mapCaption:
      "Gilgal, shown as an area rather than a point, on the plain between the river and Jericho.",
    whatChanged:
      "Israel has a camp inside the land. The stones out of the riverbed are standing on dry ground, and the base for the next several chapters is established.",
    geographyExplanation:
      "Wherever it stood exactly, Gilgal belongs to the Jericho plain between the river and the city, a stretch of valley floor roughly two hundred and fifty metres below sea level, spring-fed and warm enough to ripen grain early. That position explains the use it gets. It is close enough to the river to be reached on the day of the crossing, clear of the flooded Zor, and at the foot of the routes climbing west into the hill country, so a force can camp on flat ground and still be at Ai or Gibeon after a day or two of marching.",
    sequenceType: "event",
    viewport: {
      center: [35.508, 31.868],
      zoom: 11,
    },
    citations: [
      {
        sourceId: "rainey-notley-sacred-bridge",
        supportedClaim:
          "Gilgal is placed on the Jericho plain east of the city but has not been identified with any excavated site",
      },
      {
        sourceId: "hess-joshua",
        locator: "on Joshua 4:19",
        supportedClaim:
          "Gilgal serves as Israel's operational base for the campaigns narrated in the following chapters",
      },
    ],
    evidenceLabels: ["biblical-account", "disputed"],
  },
  {
    id: "ch4-what-do-these-stones-mean",
    chapter: 4,
    order: 5,
    title: "What do these stones mean?",
    scriptureRefs: ["Joshua 4:21-24"],
    narrative:
      "[[entity:joshua]] says what the stones are for, and the instruction is addressed to people who are not there. When your children ask their fathers what these stones mean, you tell them Israel came over this Jordan on dry ground. Then the reason widens twice. God dried the Jordan as he dried the sea at the exodus, so the two are one act rather than two wonders; and the purpose reaches past Israel, so that all the peoples of the earth may know his hand, and so that Israel may hold him in awe always." +
      "\n\n" +
      "Nothing moves in these verses. They are the chapter explaining its own method. An object is put in the ground because a question will one day be asked in front of it, and the answer to that question is the story. It is the clearest statement in the book of why it records where things happened at all.",
    entityIds: ["joshua", "gilgal", "jordan-river", "jordan-crossing-region", "salt-sea"],
    mapFeatureIds: ["site-gilgal", "site-jordan-crossing-region", "site-jordan-river"],
    mapCaption:
      "No movement here. The map holds on the stones at the camp and the crossing place they came out of.",
    whatChanged:
      "Nothing on the ground. What changes is the stated reason: the monument exists to provoke a question and to be answered with a narrative.",
    geographyExplanation:
      "This is the one place the book explains why it is so particular about places. The stones work only because they are somewhere, standing on ground a child walks past, within sight of a river that child can watch running full every spring. Take away the location and the object becomes an argument instead of a prompt. Every route, ford and named hill the map carries for the rest of Joshua is being recorded on the logic set out in these four verses.",
    sequenceType: "retrospective",
    viewport: {
      center: [35.52, 31.866],
      zoom: 11,
    },
    citations: [
      {
        sourceId: "creach-joshua",
        supportedClaim:
          "The purpose given for the stones is instructional: they exist so that a later generation asks and is told",
      },
      {
        sourceId: "block-deuteronomy",
        locator: "on Deuteronomy 6:20-25",
        supportedClaim:
          "The child's question answered with an account of rescue is a recurring instructional form in Deuteronomy",
      },
    ],
    evidenceLabels: ["biblical-account", "theological-interpretation"],
  },
];
