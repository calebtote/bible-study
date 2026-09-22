import type { Chapter, Milestone } from "../types";

/**
 * Joshua 15-16: Judah's inheritance and the lot of Joseph's sons.
 *
 * Four constraints govern this file.
 *
 * 1. Judah's boundary is described, not surveyed. Most of the points named in
 *    Joshua 15 cannot be identified, so every milestone that draws the line says
 *    so, and `sequenceType` is `allotment` throughout the territorial material.
 * 2. Joshua 15:63 and 16:10 are stated in the same breath as the allotments they
 *    belong to. Jerusalem sits inside Judah's described boundary and stayed
 *    Jebusite; Gezer sits on Ephraim's line and stayed Canaanite.
 * 3. The Hebron, Debir and Achsah material is the only narrated episode in either
 *    chapter, and is the only place `sequenceType: "event"` is used.
 * 4. Two places named Debir and two named Socoh appear in Joshua 15, and the
 *    Kanah of Joshua 16:8 is a watercourse rather than the town in Asher's list.
 *    The entity links keep them apart; unidentified names are left unlinked.
 */

export const CHAPTERS: Chapter[] = [
  /* ================================================================== */
  /* Chapter 15                                                         */
  /* ================================================================== */
  {
    id: "ch15",
    number: 15,
    title: "Judah's inheritance, and the city it could not take",
    summary:
      "The longest allotment in the book: a boundary traced round the whole southern quarter of the land, more than a hundred towns sorted into four districts, Caleb at Hebron and Debir with Achsah asking for springs in the middle of it, and a closing admission that Jerusalem stayed Jebusite.",
    phase: "inheritance-and-life",
    scriptureRange: "Joshua 15:1-63",
    milestoneIds: [
      "ch15-judah-boundary-described",
      "ch15-caleb-takes-hebron",
      "ch15-debir-othniel-and-achsah",
      "ch15-town-list-by-district",
      "ch15-jebusites-remain-at-jerusalem",
    ],
    sections: [
      {
        id: "ch15-at-a-glance",
        kind: "at-a-glance",
        title: "At a glance",
        body:
          "Judah draws the book's largest and most minutely described inheritance: a boundary traced from the south end of the [[entity:salt-sea]] round to the [[entity:great-sea]], then more than a hundred towns in four districts. Inside it, [[entity:caleb]] takes [[entity:hebron]] and [[entity:debir]], and his daughter [[entity:achsah]] asks him for springs. The chapter closes by admitting that the [[entity:jebusites]] were never driven out of [[entity:jerusalem]], which stands within that boundary.",
        scriptureRefs: ["Joshua 15:1-12", "Joshua 15:13-19", "Joshua 15:20-62", "Joshua 15:63"],
        citations: [],
        evidenceLabels: ["biblical-account"],
      },
      {
        id: "ch15-walk-through",
        kind: "walk-through",
        title: "Walk through the chapter",
        body:
          "The chapter opens with a perimeter. Judah's southern line starts at the southern end of the [[entity:salt-sea]], runs below the ascent of Akrabbim, passes south of [[entity:kadesh-barnea]], and comes out at the [[entity:brook-of-egypt]]. The eastern border is the Salt Sea itself. The northern line climbs from the Jordan's mouth to a Debir above the [[entity:valley-of-achor]], then up the valley of the son of Hinnom along [[entity:jerusalem]]'s southern shoulder, out to [[entity:kiriath-jearim]], down to [[entity:beth-shemesh]], and past [[entity:timnah]] and [[entity:ekron]] to the [[entity:great-sea]].\n\nThen the narrative interrupts. [[entity:caleb]] is given [[entity:hebron]], which the list also calls Kiriath-arba, and drives out the three sons of Anak. He goes up against [[entity:debir]], offering his daughter [[entity:achsah]] to whoever strikes it, and [[entity:othniel]] son of [[entity:kenaz]] takes it. Achsah gets down from her donkey and asks her father for more than she has: he has set her in the south country, so let him give her springs of water as well. He gives her the upper and the lower springs.\n\nA town list of more than a hundred names follows, under four headings: the [[entity:region-negev]], the lowland or [[entity:region-shephelah]], the hill country, and the wilderness. The last verse matters most. Judah could not drive the [[entity:jebusites]] out of [[entity:jerusalem]], and they were still living there when the list was written down.",
        scriptureRefs: ["Joshua 15:1-12", "Joshua 15:13-19", "Joshua 15:20-62", "Joshua 15:63"],
        citations: [
          {
            sourceId: "hess-joshua",
            locator: "on Joshua 15:1-12",
            supportedClaim:
              "Judah's boundary is described point by point in the longest such description in the book",
          },
        ],
        evidenceLabels: ["biblical-account"],
      },
      {
        id: "ch15-what-brought-us-here",
        kind: "what-brought-us-here",
        title: "What brought us here",
        body:
          "Chapter 14 put [[entity:caleb]] in front of [[entity:joshua]] claiming the hill country he had scouted from [[entity:kadesh-barnea]] forty-five years earlier, and [[entity:hebron]] was granted to him before any tribe was given a boundary. Chapter 15 is the tribal frame that claim now sits inside.\n\nIt is also a second pass over ground the book has already fought across. The southern campaign of chapter 10 ran through [[entity:hebron]], [[entity:debir]], [[entity:lachish]] and [[entity:eglon]], and chapter 11 said the [[entity:anakim]] were cut off from the hill country. The land handed to [[entity:tribe-judah]] here is land the narrative has described taking twice already, which is part of why its admissions at the end carry weight.",
        scriptureRefs: ["Joshua 14:6-15", "Joshua 10:36-39", "Joshua 11:21-22", "Joshua 13:1-7"],
        citations: [
          {
            sourceId: "woudstra-joshua",
            supportedClaim:
              "The allotment chapters are structured to distinguish land assigned from land entered",
          },
        ],
        evidenceLabels: ["biblical-account"],
      },
      {
        id: "ch15-surrounding-world",
        kind: "surrounding-world",
        title: "The surrounding world",
        body:
          "The four headings in the town list are not a clerk's convenience. They are four different environments, and the list is organised the way the land is.\n\nThe [[entity:region-negev]] is the dry south, where rainfall drops below what unirrigated farming can count on, so settlement follows wells and wadi beds and the towns stand far apart. The [[entity:region-shephelah]] is a belt of soft chalk foothills, lower and gentler than the ridge behind it and separated from it by a trough. It is cut by valleys running west to east, and those valleys are the only practical way up from the coast, which is why [[entity:lachish]], [[entity:azekah]], [[entity:socoh]], [[entity:adullam]] and [[entity:beth-shemesh]] all sit where they do. The hill country is the ridge itself, mostly between 600 and 1,000 m, with [[entity:hebron]] near the top of it; farming there means terracing slopes and cutting cisterns, and travel means the road along the watershed. The wilderness district is the eastern slope in the ridge's rain shadow, dropping well over a kilometre to the [[entity:salt-sea]] in under thirty kilometres. It carries six towns in the whole list, and one of them, [[entity:en-gedi]], is a spring.\n\nThat gradient is why [[entity:achsah]]'s request is the sharpest sentence in the chapter. She has a field in the first of those districts and asks for what the third has.",
        scriptureRefs: ["Joshua 15:19", "Joshua 15:21", "Joshua 15:33", "Joshua 15:48", "Joshua 15:61-62"],
        citations: [
          {
            sourceId: "aharoni-land-of-bible",
            supportedClaim:
              "The Negev, Shephelah, hill country and wilderness are physiographic regions, and Judah's town list follows that division",
          },
          {
            sourceId: "beitzel-moody-atlas",
            supportedClaim:
              "Rainfall and terrain across the southern regions, including the rain shadow east of the Judean ridge",
          },
          {
            sourceId: "rainey-notley-sacred-bridge",
            supportedClaim:
              "The west-east valleys of the Shephelah carry the routes from the coastal plain into the Judean hill country",
          },
        ],
        evidenceLabels: ["externally-attested", "biblical-account"],
        collapsedByDefault: true,
      },
      {
        id: "ch15-why-it-matters",
        kind: "why-it-matters",
        title: "Why it matters",
        body:
          "This is the clearest place in the book to learn a distinction the whole book depends on. Judah's boundary is drawn around [[entity:jerusalem]] and its town list reaches [[entity:ekron]], [[entity:ashdod]] and [[entity:gaza]]. Verse 63 says the [[entity:jebusites]] stayed where they were, and Joshua 13:3 has already named the coastal cities as land not taken. Being assigned a place is not the same as living in it, and whoever compiled this chapter knew that and wrote both down.\n\n[[entity:achsah]] is worth slowing over. She is given a field in dry country and says so: the gift as it stands will not keep a household. She asks for water and she gets it. The text records the request and the grant and nothing about what either of them felt, which leaves her argument standing on its own merits.\n\nReformed commentators have read the boundary lists as the promise to Abraham acquiring an address, and verse 63 as the covenant's unfinished demand rather than its defeat. That is a Reformed emphasis and one Christian reading among others; some take the same verse as the book's plain record that the conquest did not go as its summaries suggest.",
        scriptureRefs: ["Joshua 15:19", "Joshua 15:45-47", "Joshua 15:63", "Joshua 13:1-3"],
        citations: [
          {
            sourceId: "woudstra-joshua",
            supportedClaim:
              "A Reformed covenantal reading of the land promise reaching a specific described territory",
          },
          {
            sourceId: "kitchen-reliability",
            supportedClaim:
              "The book's sweeping summaries have to be read against its own admissions of unconquered ground",
          },
          {
            sourceId: "hawk-joshua",
            supportedClaim:
              "Achsah's speech is the decisive exchange in the episode and is granted without narratorial comment",
          },
        ],
        evidenceLabels: ["biblical-account", "theological-interpretation"],
      },
      {
        id: "ch15-details-worth-noticing",
        kind: "details-worth-noticing",
        title: "Details worth noticing",
        body:
          "The Debir in verse 7 is a boundary marker on the desert edge above the [[entity:valley-of-achor]]. It cannot be the [[entity:debir]] Caleb takes in verse 15, which lies in the hill country south-west of [[entity:hebron]]. Same name, two places.\n\nThe list carries old names beside current ones: [[entity:hebron]] is Kiriath-arba, [[entity:debir]] is Kiriath-sepher and then Kiriath-sannah, [[entity:kiriath-jearim]] is Baalah and then Kiriath-baal. A Socoh appears in the lowland group and a second in the hill country group. This is the habit of a document rather than a story.\n\nThe Negev district is totalled at twenty-nine towns and lists thirty-six names. Mismatches like that recur through the chapter and are a recognised text-critical problem, not a rounding convention.\n\n[[entity:othniel]] is called Caleb's brother, but the Hebrew phrase can as easily make him Caleb's nephew, and translations divide.\n\nVerses 13 to 19 appear again almost word for word at Judges 1:10-15, with the Caleb material placed after Joshua's death.",
        scriptureRefs: ["Joshua 15:7", "Joshua 15:15", "Joshua 15:17", "Joshua 15:21-32", "Joshua 15:49", "Judges 1:10-15"],
        citations: [
          {
            sourceId: "butler-joshua",
            locator: "on Joshua 15:21-62",
            supportedClaim:
              "The stated totals in Judah's district lists do not match the names preserved, and this is treated as a text-critical problem",
          },
          {
            sourceId: "rainey-notley-sacred-bridge",
            supportedClaim:
              "The Debir of Joshua 15:7 is a separate place from Debir in the southern hill country",
          },
        ],
        evidenceLabels: ["biblical-account", "disputed"],
        collapsedByDefault: true,
      },
      {
        id: "ch15-difficult-questions",
        kind: "difficult-questions",
        title: "Difficult questions",
        body:
          "How much of this boundary can honestly be drawn? It is the best documented line in the book and still mostly unmappable. Beth-hoglah, Beth-arabah, the stone of Bohan, En-shemesh, En-rogel, Nephtoah, Mount Seir, Chesalon, Shikkeron and Jabneel are all named as points on the line, and most of them cannot be put on the ground. What can be fixed are the ends and a handful of towns, so the shape shown here is interpolation, and other atlases interpolate differently.\n\nWhat kind of document is the town list? Some read it as an early register preserved and reused; others as the administrative districts of the later kingdom of Judah written back into Joshua. The list cannot settle that by itself.\n\nAnd who took [[entity:hebron]]? Joshua 10:36-39 and 11:21 report [[entity:joshua]] taking Hebron and Debir and cutting off the [[entity:anakim]]; this chapter reports [[entity:caleb]] doing it. Readers who treat the earlier summaries as compressed campaign reports that the detailed narratives then attribute to particular men have a coherent answer. Readers who see two accounts joined together have another. The text does not adjudicate.",
        scriptureRefs: ["Joshua 15:5-11", "Joshua 15:20-62", "Joshua 10:36-39", "Joshua 11:21-22"],
        citations: [
          {
            sourceId: "curtis-oxford-bible-atlas",
            supportedClaim:
              "Mainstream atlases draw Judah's boundary with explicit caution about unidentified points",
          },
          {
            sourceId: "boling-wright-joshua",
            supportedClaim:
              "Judah's district list is reconstructed by some scholars as reflecting later administrative reality",
          },
          {
            sourceId: "hess-joshua",
            supportedClaim:
              "The lists are argued by others to preserve second-millennium documentary forms",
          },
          {
            sourceId: "younger-conquest-accounts",
            supportedClaim:
              "Ancient conquest reporting attributes action to a leader and to his subordinates without distinguishing them",
          },
        ],
        evidenceLabels: ["reconstruction", "disputed"],
        collapsedByDefault: true,
      },
    ],
    discussionQuestions: [
      "Judah's described boundary runs around Jerusalem, and verse 63 says the Jebusites were never driven out of it. What work is that last verse doing at the end of a chapter this long?",
      "Achsah says she has been set in the south country and asks for springs. What does her request show about the difference between a boundary on a list and a living made on the ground?",
      "The towns are sorted into the Negev, the lowland, the hill country and the wilderness. Why would a register of towns be organised by environment rather than by clan?",
      "Caleb is identified with the Kenizzites and receives the most storied town on the southern ridge. What does the chapter assume about who counts as Judah?",
      "Chapter 10 says Joshua took Hebron and Debir; chapter 15 says Caleb did. How would you hold those two reports together?",
    ],
    relatedEntityIds: [
      "caleb",
      "achsah",
      "othniel",
      "kenaz",
      "jephunneh",
      "joshua",
      "tribe-judah",
      "tribe-simeon",
      "tribe-benjamin",
      "jebusites",
      "anakim",
      "kenizzites",
      "philistines",
      "hebron",
      "debir",
      "jerusalem",
      "kiriath-jearim",
      "beth-shemesh",
      "timnah",
      "ekron",
      "ashdod",
      "gaza",
      "lachish",
      "eglon",
      "libnah",
      "makkedah",
      "azekah",
      "jarmuth",
      "socoh",
      "adullam",
      "anab",
      "eshtemoa",
      "jattir",
      "beersheba",
      "hormah",
      "en-gedi",
      "salt-sea",
      "great-sea",
      "brook-of-egypt",
      "kadesh-barnea",
      "valley-of-achor",
      "jordan-river",
      "region-negev",
      "region-shephelah",
      "region-hill-country-judah",
      "region-wilderness-judah",
      "region-coastal-plain",
      "region-goshen-judah",
    ],
    themeIds: [
      "land-and-inheritance",
      "promise-and-fulfillment",
      "obedience-and-failure",
      "outsiders-and-belonging",
    ],
    wordCount: 589,
  },

  /* ================================================================== */
  /* Chapter 16                                                         */
  /* ================================================================== */
  {
    id: "ch16",
    number: 16,
    title: "The sons of Joseph, and the Canaanites in Gezer",
    summary:
      "Ten verses for the centre of the country. One line is drawn for both of Joseph's tribes from the Jordan at Jericho over the watershed at Bethel and down past Gezer to the sea, Ephraim's own border is traced inside it through places largely unidentified, and the chapter ends by saying the Canaanites in Gezer were never driven out but put to forced labour.",
    phase: "inheritance-and-life",
    scriptureRange: "Joshua 16:1-10",
    milestoneIds: [
      "ch16-joseph-lot-jordan-to-the-sea",
      "ch16-ephraim-boundary-traced",
      "ch16-gezer-not-driven-out",
    ],
    sections: [
      {
        id: "ch16-at-a-glance",
        kind: "at-a-glance",
        title: "At a glance",
        body:
          "The lot for Joseph's descendants runs from the [[entity:jordan-river]] at [[entity:jericho]] up through the wilderness to [[entity:bethel]], then down past [[entity:lower-beth-horon]] and [[entity:gezer]] to the sea. [[entity:tribe-ephraim]]'s own border is then traced through points, several of which nobody can now place. The chapter ends with [[entity:gezer]] uncleared and its [[entity:canaanites]] put to forced labour. This is the spine of the land, and [[entity:joshua]]'s own tribe.",
        scriptureRefs: ["Joshua 16:1-4", "Joshua 16:5-9", "Joshua 16:10"],
        citations: [],
        evidenceLabels: ["biblical-account"],
      },
      {
        id: "ch16-walk-through",
        kind: "walk-through",
        title: "Walk through the chapter",
        body:
          "The lot comes out for the children of [[entity:joseph]], and one line is drawn for the two tribes together. It starts at the [[entity:jordan-river]] by [[entity:jericho]], at the waters of Jericho on the east, goes up through the wilderness into the hill country to [[entity:bethel]], out from Bethel to Luz, along the border of the Archites to Ataroth, then down westward past the Japhletites to the border of [[entity:lower-beth-horon]] and on to [[entity:gezer]], and ends at the sea. Verse 4 then says, without ceremony, that Manasseh and Ephraim took their inheritance.\n\n[[entity:tribe-ephraim]]'s own border follows. Eastward from Ataroth-addar to [[entity:upper-beth-horon]]; out west at Michmethath; turning back east to Taanath-shiloh and past Janoah; down from Janoah to Ataroth and Naarah, reaching [[entity:jericho]] and going out at the [[entity:jordan-river]]; and from Tappuah west along the brook Kanah to the sea. Ephraim also has towns set apart for it inside [[entity:tribe-manasseh-west]]'s inheritance.\n\nThe last verse is the chapter's sting. They did not drive out the [[entity:canaanites]] living in [[entity:gezer]]. The Canaanites went on living inside Ephraim's territory and became a labour force. That sentence sits at the end of a boundary the chapter has just drawn straight through the town.",
        scriptureRefs: ["Joshua 16:1-4", "Joshua 16:5-9", "Joshua 16:10"],
        citations: [
          {
            sourceId: "hess-joshua",
            locator: "on Joshua 16",
            supportedClaim:
              "A single boundary is given for both Joseph tribes before Ephraim's own border is described",
          },
        ],
        evidenceLabels: ["biblical-account"],
      },
      {
        id: "ch16-what-brought-us-here",
        kind: "what-brought-us-here",
        title: "What brought us here",
        body:
          "Chapter 13 assigned the eastern tribes and said much land remained. Chapter 14 settled [[entity:caleb]]'s claim, and chapter 15 gave [[entity:tribe-judah]] the south. Joseph's house comes next, and it comes with weight behind it. [[entity:joshua]] is of [[entity:tribe-ephraim]]. [[entity:joseph]]'s bones were carried out of Egypt for burial in this hill country. [[entity:jacob]]'s blessing in Genesis 48 had already put Ephraim ahead of Manasseh, which is why the younger tribe is described first here.\n\nThe book has also been along this line before. The rout after [[entity:gibeon]] in chapter 10 went down the Beth-horon descent, and [[entity:horam]] king of [[entity:gezer]] came up from the plain to help Lachish and was beaten in the field. Both ends of this chapter's western boundary are ground the narrative has already crossed.",
        scriptureRefs: ["Joshua 13:1-7", "Joshua 14:6-15", "Joshua 10:10-11", "Joshua 10:33", "Joshua 24:32"],
        citations: [
          {
            sourceId: "woudstra-joshua",
            supportedClaim:
              "Ephraim is described before Manasseh, in keeping with the ordering established in Genesis 48",
          },
        ],
        evidenceLabels: ["biblical-account"],
      },
      {
        id: "ch16-surrounding-world",
        kind: "surrounding-world",
        title: "The surrounding world",
        body:
          "[[entity:gezer]] is the best attested place in this chapter and one of the best attested in the book. The identification is secure, helped by inscribed stones found around the site that read as markers of Gezer's own territory, and the town's ruler is among the Canaanite correspondents writing to Egypt in the Amarna letters. So this is not a name recovered from a list: it is a Late Bronze town with a documented political life, sitting on exactly the junction the text says it sits on.\n\nEphraim's other boundary points are the opposite case. The Archites and the Japhletites are named as though every reader knew where their ground lay, and nobody now does. Michmethath, Janoah, Taanath-shiloh, Naarah, Ataroth, Ataroth-addar and Tappuah are boundary points with no agreed location, and the brook Kanah of verse 8 is a watercourse rather than the [[entity:kanah]] in Asher's list far to the north. That mixture of one immovable fixed point and a string of unplaceable ones is normal for these chapters, and it is why the outline drawn for [[entity:tribe-ephraim]] is coarser than the detail of the description suggests.\n\nThe hill country itself is better known than its boundary markers. Surveys of the [[entity:region-hill-country-ephraim]] have found a dense scatter of small unwalled villages, terraced slopes and cisterns, which is the kind of settlement the allotment chapters assume rather than describe.",
        scriptureRefs: ["Joshua 16:2-3", "Joshua 16:6-8", "Joshua 16:10"],
        citations: [
          {
            sourceId: "rainey-notley-sacred-bridge",
            locator: "on Joshua 16",
            supportedClaim:
              "Gezer is securely identified and sits at the junction of the coastal route with the Beth-horon ascent, while most of Ephraim's boundary points remain unplaced",
          },
          {
            sourceId: "moran-amarna",
            supportedClaim:
              "The ruler of Gezer is among the Canaanite city-state correspondents in the Amarna letters",
          },
          {
            sourceId: "stager-forging-identity",
            supportedClaim:
              "Highland settlement in the central hill country consisted of small agricultural villages with terracing and cisterns",
          },
        ],
        evidenceLabels: ["externally-attested", "biblical-account", "disputed"],
        collapsedByDefault: true,
      },
      {
        id: "ch16-why-it-matters",
        kind: "why-it-matters",
        title: "Why it matters",
        body:
          "[[entity:gezer]] is the point of this chapter, and it is a geographical point before it is a moral one. The town stands at the inner edge of the [[entity:region-coastal-plain]], where the road from the sea begins its climb through the Beth-horon spur to the plateau. Ephraim's described boundary runs to it and past it. Ephraim does not hold it. A tribe that does not hold the bottom of its own staircase does not decide who comes up it, and chapter 10 has already shown an army using that staircase in both directions.\n\nThe chapter also puts a third category in front of the reader. The [[entity:canaanites]] in Gezer are neither driven out nor destroyed; they are set to forced labour. That is an outcome the instructions the book keeps quoting did not offer, and the narrator reports it flatly, as what happened.\n\nReformed readers have generally taken verse 10 as the book's own verdict on partial obedience, an arrangement that was profitable and was not what had been commanded, with Judges 1 and 2 drawing out the consequences. That is a Reformed emphasis, offered as one Christian reading. Others take the same verse as a plain administrative notice recording how highland Israelites and lowland Canaanites in fact lived alongside each other.",
        scriptureRefs: ["Joshua 16:3", "Joshua 16:10", "Joshua 10:10-11", "Judges 1:29"],
        citations: [
          {
            sourceId: "rainey-notley-sacred-bridge",
            supportedClaim:
              "Gezer commands the approach from the coastal plain to the central highlands by way of the Beth-horon ascent",
          },
          {
            sourceId: "davis-joshua",
            supportedClaim:
              "A Reformed expositional reading of Joshua 16:10 as the record of partial obedience",
          },
          {
            sourceId: "mcconville-williams-joshua",
            supportedClaim:
              "The notices of Canaanites remaining can be read as the book's own qualification of its conquest reports",
          },
        ],
        evidenceLabels: ["biblical-account", "theological-interpretation"],
      },
      {
        id: "ch16-details-worth-noticing",
        kind: "details-worth-noticing",
        title: "Details worth noticing",
        body:
          "Verse 2 goes 'from [[entity:bethel]] to Luz' as though they were two places, while Genesis 28:19 and Joshua 18:13 treat Luz as Bethel's older name. It is a recognised difficulty in the verse and not obviously resolvable.\n\nEphraim's southern line is [[entity:tribe-benjamin]]'s northern line, described again from the other side in chapter 18. The two accounts have to be read together, and where they use different landmarks neither is obviously the fuller one.\n\nThe border 'reaches to [[entity:jericho]] and goes out at the [[entity:jordan-river]]', yet Jericho itself appears in Benjamin's town list at 18:21. The line touches the town without taking it in.\n\nEphraim receives towns inside [[entity:tribe-manasseh-west]]'s inheritance, the same arrangement [[entity:tribe-simeon]] has inside [[entity:tribe-judah]] in chapter 19. These allotments interlock rather than tile.\n\nJudges 1:29 repeats verse 10 almost word for word, which is worth noticing given how much else in Judges 1 revisits this material.",
        scriptureRefs: ["Joshua 16:2", "Joshua 16:5", "Joshua 16:7", "Joshua 16:9", "Joshua 18:11-13", "Joshua 18:21", "Judges 1:29"],
        citations: [
          {
            sourceId: "butler-joshua",
            locator: "on Joshua 16:2",
            supportedClaim:
              "The relationship between Bethel and Luz in verse 2 is a known textual difficulty",
          },
          {
            sourceId: "aharoni-land-of-bible",
            supportedClaim:
              "Ephraim's southern boundary and Benjamin's northern boundary describe the same line and are reconstructed together",
          },
        ],
        evidenceLabels: ["biblical-account", "disputed"],
        collapsedByDefault: true,
      },
      {
        id: "ch16-difficult-questions",
        kind: "difficult-questions",
        title: "Difficult questions",
        body:
          "Why so short? [[entity:tribe-judah]] gets sixty-three verses and Joseph gets ten, and no tribe has a stronger claim on this book's sympathies than [[entity:joshua]]'s own. The text gives no reason. Some read the brevity as a sign that Ephraim's borders were too well known to need defending; others as a sign that whoever compiled these chapters had less material for the centre than for the south. Both are inferences.\n\nThe description is genuinely hard to follow. Verses 5 to 8 move east, then west, then east again, and the result cannot be drawn as one continuous line without deciding which clauses to treat as primary. Some commentators propose disorder in the transmission of the passage, and the Greek and Hebrew traditions of Joshua differ enough elsewhere to make that possible, but it stays a proposal rather than a finding.\n\nAnd what became of [[entity:gezer]]? Joshua says the [[entity:canaanites]] stayed. 1 Kings 9:16 reports that an Egyptian pharaoh later took the city, burned it, and gave it to Solomon's wife as a dowry, which is the first notice of it in Israelite hands. That is a long gap, and this book makes no attempt to bridge it.",
        scriptureRefs: ["Joshua 16:5-8", "Joshua 16:10", "1 Kings 9:16"],
        citations: [
          {
            sourceId: "butler-joshua",
            locator: "on Joshua 16:5-8",
            supportedClaim:
              "The sequence of Ephraim's boundary clauses is widely regarded as disturbed in transmission",
          },
          {
            sourceId: "curtis-oxford-bible-atlas",
            supportedClaim:
              "Ephraim's boundary is drawn in atlases with explicit caution because of its unidentified points",
          },
          {
            sourceId: "anchor-bible-dictionary",
            locator: "Gezer",
            supportedClaim:
              "Gezer's later history includes its destruction and transfer to Solomon reported in 1 Kings 9:16",
          },
        ],
        evidenceLabels: ["reconstruction", "disputed", "biblical-account"],
        collapsedByDefault: true,
      },
    ],
    discussionQuestions: [
      "Ephraim's described border runs past Gezer to the sea, and verse 10 says Gezer was never cleared. What does it mean for a tribe to have a boundary that crosses ground it does not hold?",
      "Gezer sits at the foot of the climb into the highlands. If you were responsible for the central hill country, what would leaving that place in other hands cost you?",
      "The Canaanites in Gezer are put to forced labour rather than driven out. How should a reader weigh that outcome against what the book elsewhere says was commanded?",
      "Joseph's southern line is also Benjamin's northern line, described again in chapter 18. Why might the same ground be worth describing twice from opposite sides?",
      "Several of Ephraim's boundary points cannot be located at all. Does that change how much weight the description can carry?",
    ],
    relatedEntityIds: [
      "joshua",
      "joseph",
      "jacob",
      "caleb",
      "horam",
      "tribe-ephraim",
      "tribe-manasseh-west",
      "tribe-benjamin",
      "tribe-judah",
      "tribe-simeon",
      "canaanites",
      "jericho",
      "bethel",
      "gezer",
      "lower-beth-horon",
      "upper-beth-horon",
      "aijalon",
      "gibeon",
      "shiloh",
      "shechem",
      "timnath-serah",
      "kanah",
      "jordan-river",
      "great-sea",
      "region-hill-country-ephraim",
      "region-coastal-plain",
      "region-jordan-valley",
    ],
    themeIds: [
      "land-and-inheritance",
      "obedience-and-failure",
      "covenant-faithfulness",
    ],
    wordCount: 600,
  },
];

export const MILESTONES: Milestone[] = [
  /* ---------------------------- Chapter 15 --------------------------- */
  {
    id: "ch15-judah-boundary-described",
    chapter: 15,
    order: 1,
    title: "Judah's boundary, described and not surveyed",
    scriptureRefs: ["Joshua 15:1-12"],
    narrative:
      "The first lot west of the Jordan gives [[entity:tribe-judah]] the whole southern quarter of the land, and its description is the most detailed in the book. The southern line begins at the bay at the south end of the [[entity:salt-sea]], swings below the ascent of Akrabbim, crosses the wilderness of Zin, runs south of [[entity:kadesh-barnea]], and reaches the [[entity:brook-of-egypt]] and the [[entity:great-sea]]. The east side is the Salt Sea. The northern line starts where the [[entity:jordan-river]] enters that sea, climbs past the [[entity:valley-of-achor]], follows the valley of the son of Hinnom under [[entity:jerusalem]]'s southern shoulder, reaches [[entity:kiriath-jearim]], turns down to [[entity:beth-shemesh]], and runs out past [[entity:timnah]] and [[entity:ekron]] to the sea. The west side is the coast.\n\nDetail is not the same as certainty. Most of the points named on this line cannot be identified today, and the text is describing a border, not asserting that Judah held everything inside it.",
    entityIds: [
      "tribe-judah",
      "salt-sea",
      "great-sea",
      "brook-of-egypt",
      "kadesh-barnea",
      "valley-of-achor",
      "jordan-river",
      "jerusalem",
      "kiriath-jearim",
      "beth-shemesh",
      "timnah",
      "ekron",
      "jebusites",
      "region-negev",
      "region-shephelah",
      "region-hill-country-judah",
      "region-wilderness-judah",
    ],
    mapFeatureIds: [
      "allot-judah",
      "site-salt-sea",
      "site-great-sea",
      "site-brook-of-egypt",
      "site-kadesh-barnea",
      "site-valley-of-achor",
      "site-jordan-river",
      "site-jerusalem",
      "site-kiriath-jearim",
      "site-beth-shemesh",
      "site-timnah",
      "site-ekron",
    ],
    mapCaption:
      "Judah's described boundary: south to the Brook of Egypt, north along Jerusalem's shoulder, west to the Great Sea.",
    whatChanged:
      "The largest allotted area in the book appears, from the desert fringe to the coast. It is an assignment only: Jerusalem stands inside the line and stayed Jebusite, and the coastal towns at its western end are the ones Joshua 13:3 lists as not taken.",
    geographyExplanation:
      "Read east to west, this boundary crosses everything the country has in under a hundred kilometres. It begins on a shore several hundred metres below sea level, climbs to a limestone ridge around 1,000 m, drops through the chalk foothills of the [[entity:region-shephelah]], and ends on a coastal plain at sea level. North to south it runs roughly 130 km from the hills above [[entity:jerusalem]] to the desert edge near [[entity:kadesh-barnea]], crossing on the way the rainfall line that decides whether farming is possible at all. A line that long is pinned at its corners by things nobody could mistake, the Salt Sea, the mouth of the Jordan, the open coast, and held together in between by local landmarks: springs, a single stone, one hill rather than the next. Those are exactly the points now unidentifiable, which tells you the description was written by people who knew the ground and not for people who did not.",
    sequenceType: "allotment",
    viewport: {
      center: [34.7, 31.3],
      zoom: 8,
      bounds: [
        [33.7, 30.5],
        [35.6, 32.0],
      ],
    },
    citations: [
      {
        sourceId: "rainey-notley-sacred-bridge",
        locator: "on Joshua 15",
        supportedClaim:
          "Identification of the boundary points in Judah's description, a majority of which remain unplaced",
      },
      {
        sourceId: "aharoni-land-of-bible",
        supportedClaim:
          "Physiographic framework used to interpolate Judah's boundary between its identified points",
      },
      {
        sourceId: "hess-joshua",
        locator: "on Joshua 15:1-12",
        supportedClaim:
          "The form of Judah's boundary description and the limits of what it establishes",
      },
    ],
    evidenceLabels: ["biblical-account", "reconstruction"],
  },
  {
    id: "ch15-caleb-takes-hebron",
    chapter: 15,
    order: 2,
    title: "Caleb takes Hebron",
    scriptureRefs: ["Joshua 15:13-14"],
    narrative:
      "In the middle of the boundary description the chapter stops and tells a story. [[entity:caleb]] son of [[entity:jephunneh]] receives a portion among [[entity:tribe-judah]] at the LORD's word to [[entity:joshua]]: Kiriath-arba, which the text says is [[entity:hebron]], named after the father of Anak. Caleb then drives out the three sons of Anak who live there, Sheshai, Ahiman and Talmai.\n\nTwo things sit side by side here without being reconciled. Joshua 11:21 has already reported [[entity:joshua]] cutting the [[entity:anakim]] off from the hill country, and this verse reports [[entity:caleb]] doing it at Hebron. And Caleb is the book's outsider: identified with the [[entity:kenizzites]] rather than born into Judah, and given the most storied town on the southern ridge anyway, by name and by command.",
    entityIds: [
      "caleb",
      "jephunneh",
      "joshua",
      "tribe-judah",
      "hebron",
      "debir",
      "anab",
      "anakim",
      "kenizzites",
      "region-hill-country-judah",
    ],
    mapFeatureIds: ["site-hebron", "site-debir", "site-anab"],
    mapCaption:
      "Caleb takes Hebron on the southern ridge and drives out the three sons of Anak.",
    whatChanged:
      "A town changes hands inside the allotment just described. The three towns the book associates with the Anakim, Hebron, Debir and Anab, all sit on this ridge, and the first of them is now Caleb's.",
    geographyExplanation:
      "[[entity:hebron]] stands at roughly 900 m on the watershed of the [[entity:region-hill-country-judah]], about thirty kilometres south of [[entity:jerusalem]] along the ridge road. That road is the only comfortable way to move a column or a herd through this country; on either side the ground breaks into steep valleys that force traffic back onto the crest. Holding Hebron means holding the southern half of the road, together with the springs and terraced slopes around the town, which is why the place keeps reappearing: as Abraham's burial ground, as a target in chapter 10, as Caleb's portion here, and as a city of refuge in chapter 20.",
    sequenceType: "event",
    viewport: { center: [35.0994, 31.5236], zoom: 10 },
    citations: [
      {
        sourceId: "rainey-notley-sacred-bridge",
        supportedClaim:
          "Hebron is identified with Tell er-Rumeida on the southern watershed of the Judean ridge",
      },
      {
        sourceId: "hess-joshua",
        locator: "on Joshua 15:13-14",
        supportedClaim:
          "Caleb's portion at Hebron is granted by command and set inside Judah's inheritance",
      },
    ],
    evidenceLabels: ["biblical-account", "externally-attested"],
  },
  {
    id: "ch15-debir-othniel-and-achsah",
    chapter: 15,
    order: 3,
    title: "Debir, Othniel, and Achsah's springs",
    scriptureRefs: ["Joshua 15:15-19"],
    narrative:
      "[[entity:caleb]] goes up from [[entity:hebron]] against [[entity:debir]], which the chapter says was earlier called Kiriath-sepher, and makes an offer: whoever strikes the town and takes it gets his daughter [[entity:achsah]] as wife. [[entity:othniel]] son of [[entity:kenaz]] takes it, and the marriage follows.\n\nWhat happens next is hers. Achsah comes, gets down from her donkey, and Caleb asks what she wants. She answers: give me a blessing, and since you have set me in the land of the south, give me springs of water as well. He gives her the upper springs and the lower springs.\n\nShe is not asking for a favour she has no claim on. She names the deficiency in what she has been given, dry ground on the edge of the [[entity:region-negev]], and asks for the one thing that would make it work. The text records the request and the grant and says nothing about how either of them felt, which leaves her argument standing on its own merits.",
    entityIds: [
      "caleb",
      "achsah",
      "othniel",
      "kenaz",
      "tribe-judah",
      "hebron",
      "debir",
      "region-negev",
      "region-hill-country-judah",
    ],
    mapFeatureIds: ["site-debir", "site-hebron", "site-eshtemoa"],
    mapCaption:
      "Othniel takes Debir at Caleb's challenge, and Achsah asks for the springs to go with her field.",
    whatChanged:
      "A second hill country town passes into Caleb's family, and a holding in the south is upgraded from dry field to field with water. No boundary moves.",
    geographyExplanation:
      "[[entity:debir]] is most often placed at Khirbet Rabud, about fifteen kilometres south-west of [[entity:hebron]] and lower down, where the ridge starts to break away toward the [[entity:region-negev]]. That position is exactly why springs are the thing worth asking for. South and west of here the rainfall falls off quickly, and the difference between a holding that feeds a household and one that does not is whether it has water of its own rather than whether it has acreage. Judah's southern district is settled along wells and wadi beds for the same reason. The identification of Debir is disputed and Khirbet Rabud only the leading candidate, so the pin should be read loosely; the gradient [[entity:achsah]] is arguing about does not depend on it.",
    sequenceType: "event",
    viewport: { center: [35.0164, 31.4022], zoom: 10 },
    citations: [
      {
        sourceId: "rainey-notley-sacred-bridge",
        supportedClaim:
          "Khirbet Rabud is the leading candidate for Debir, and the identification remains unsettled",
      },
      {
        sourceId: "beitzel-moody-atlas",
        supportedClaim:
          "Rainfall declines sharply south and west of the Judean hill country, so settlement depends on springs and wells",
      },
      {
        sourceId: "hess-joshua",
        locator: "on Joshua 15:15-19",
        supportedClaim:
          "Achsah requests the springs on the grounds that the land she has been given is in the dry south",
      },
    ],
    evidenceLabels: ["biblical-account", "disputed"],
  },
  {
    id: "ch15-town-list-by-district",
    chapter: 15,
    order: 4,
    title: "More than a hundred towns, in four districts",
    scriptureRefs: ["Joshua 15:20-62"],
    narrative:
      "After the boundary come the towns: more than a hundred names, grouped and counted, under four headings that are also four kinds of country. The [[entity:region-negev]] district runs up from the Edomite border through [[entity:beersheba]] and includes [[entity:hormah]] and Ziklag, neither of which can be located. The lowland district, the [[entity:region-shephelah]], comes in four groups holding [[entity:jarmuth]], [[entity:adullam]], [[entity:socoh]], [[entity:azekah]], [[entity:lachish]], [[entity:eglon]], [[entity:makkedah]] and [[entity:libnah]], and then runs on to [[entity:ekron]], [[entity:ashdod]] and [[entity:gaza]] and the coast. The hill country district comes in five groups: Shamir, [[entity:jattir]], a second Socoh, [[entity:debir]], [[entity:anab]], [[entity:eshtemoa]], [[entity:hebron]], Ziph, Carmel, [[entity:kiriath-jearim]]. The wilderness district is six towns, one of them [[entity:en-gedi]].\n\nOnly a minority of these places can be put on a map, and a register of towns is not a claim to hold them. The coastal names closing the lowland group are the ones Joshua 13:3 has already said remained.",
    entityIds: [
      "tribe-judah",
      "tribe-simeon",
      "beersheba",
      "hormah",
      "jarmuth",
      "adullam",
      "socoh",
      "azekah",
      "lachish",
      "eglon",
      "makkedah",
      "libnah",
      "ekron",
      "ashdod",
      "gaza",
      "jattir",
      "debir",
      "anab",
      "eshtemoa",
      "hebron",
      "kiriath-jearim",
      "en-gedi",
      "philistines",
      "region-negev",
      "region-shephelah",
      "region-hill-country-judah",
      "region-wilderness-judah",
      "region-coastal-plain",
    ],
    mapFeatureIds: [
      "allot-judah",
      "site-beersheba",
      "site-jarmuth",
      "site-adullam",
      "site-socoh",
      "site-azekah",
      "site-lachish",
      "site-eglon",
      "site-ekron",
      "site-ashdod",
      "site-gaza",
      "site-jattir",
      "site-debir",
      "site-anab",
      "site-eshtemoa",
      "site-hebron",
      "site-kiriath-jearim",
      "site-beth-shemesh",
      "site-en-gedi",
    ],
    mapCaption:
      "Judah's towns in four district bands: the dry south, the chalk foothills, the limestone ridge, and the wilderness slope.",
    whatChanged:
      "The allotted area fills in with the towns the list actually names, and the gaps become visible. Hormah, Ziklag, Makkedah and Libnah are in the register with no known location, so the bands they belong to are drawn incomplete.",
    geographyExplanation:
      "Set the four districts side by side and you have a cross-section of the southern land, west to east. First the [[entity:region-coastal-plain]], then the [[entity:region-shephelah]]: low chalk hills of softer rock than the ridge, cut by valleys running west to east that carry every practical route inland. Then the ridge itself, limestone between roughly 600 and 1,000 m, farmed in terraces, with the watershed road running along the crest. Then the eastern slope in the rain shadow, losing over a kilometre of height to the [[entity:salt-sea]] in under thirty kilometres and supporting six towns in the entire district. And to the south the [[entity:region-negev]], where a rainfall line rather than a border decides where a town can stand. The list is arranged the way the country is arranged, which is one reason to read it as a working document rather than a flourish.",
    sequenceType: "allotment",
    viewport: {
      center: [35.05, 31.5],
      zoom: 9,
      bounds: [
        [34.55, 31.1],
        [35.6, 31.95],
      ],
    },
    citations: [
      {
        sourceId: "aharoni-land-of-bible",
        supportedClaim:
          "Judah's town list is organised into districts that correspond to the physiographic regions of the south",
      },
      {
        sourceId: "rainey-notley-sacred-bridge",
        supportedClaim:
          "Site identifications for Judah's district lists, many of which remain unplaced",
      },
      {
        sourceId: "hess-joshua",
        locator: "on Joshua 15:20-62",
        supportedClaim:
          "The town list has the form of an administrative register with counted groups",
      },
    ],
    evidenceLabels: ["biblical-account", "reconstruction"],
  },
  {
    id: "ch15-jebusites-remain-at-jerusalem",
    chapter: 15,
    order: 5,
    title: "The Jebusites remain at Jerusalem",
    scriptureRefs: ["Joshua 15:63", "Joshua 15:8"],
    narrative:
      "The chapter's last verse qualifies everything before it. As for the [[entity:jebusites]], the inhabitants of [[entity:jerusalem]], the children of Judah could not drive them out, and the Jebusites lived with the children of Judah at Jerusalem to this day.\n\nThe city stands inside the boundary traced in verses 1 to 12. Its southern shoulder is used as a boundary marker, the valley below it is a line on Judah's northern border, its king [[entity:adoni-zedek]] was the first of the five defeated in chapter 10, and [[entity:jerusalem]] appears again in [[entity:tribe-benjamin]]'s town list in chapter 18. None of that amounted to possession.\n\nThe phrase 'to this day' says something about the document as well as the city. Whoever wrote that sentence wrote it while the arrangement still held.",
    entityIds: [
      "jebusites",
      "jerusalem",
      "adoni-zedek",
      "tribe-judah",
      "tribe-benjamin",
      "region-hill-country-judah",
      "region-jordan-valley",
    ],
    mapFeatureIds: ["remain-jerusalem", "site-jerusalem", "allot-judah"],
    mapCaption:
      "Jerusalem sits inside Judah's described boundary and stays Jebusite.",
    whatChanged:
      "Nothing is gained. A town already inside the allotted area is marked as not taken, which is the sharpest single illustration in the book that an allotment records an assignment and not control.",
    geographyExplanation:
      "The ancient city occupied a narrow spur with a valley on either side, the Kidron to the east and the Hinnom curving round the south and west, and its water came from the Gihon spring in the Kidron below. That is a good piece of ground to defend: steep on three sides, watered, and small enough for a modest population to man a wall. It also sits on the watershed road where the climb up from the [[entity:region-jordan-valley]] by the ascent of Adummim meets it, roughly thirty kilometres north of [[entity:hebron]]. Judah's northern boundary is drawn along the valley beneath the city rather than through it, which is a boundary description quietly conceding a fact on the ground.",
    sequenceType: "summary",
    viewport: { center: [35.236, 31.774], zoom: 11 },
    citations: [
      {
        sourceId: "rainey-notley-sacred-bridge",
        supportedClaim:
          "The Bronze and Iron Age city occupied the narrow ridge beside the Gihon spring, on the watershed route",
      },
      {
        sourceId: "moran-amarna",
        supportedClaim:
          "Jerusalem appears in the Amarna letters as a city-state whose ruler corresponds with Egypt",
      },
      {
        sourceId: "kitchen-reliability",
        supportedClaim:
          "The book's admissions of unconquered towns qualify its own summary statements",
      },
    ],
    evidenceLabels: ["biblical-account", "externally-attested"],
  },

  /* ---------------------------- Chapter 16 --------------------------- */
  {
    id: "ch16-joseph-lot-jordan-to-the-sea",
    chapter: 16,
    order: 1,
    title: "One line for both of Joseph's tribes",
    scriptureRefs: ["Joshua 16:1-4"],
    narrative:
      "A single boundary serves both of [[entity:joseph]]'s tribes before either is described on its own. It begins at the [[entity:jordan-river]] by [[entity:jericho]], at the waters of Jericho on the east, climbs through the wilderness into the hill country to [[entity:bethel]], runs from Bethel to Luz and along the border of the Archites to Ataroth, then goes down westward past the Japhletites to the border of [[entity:lower-beth-horon]] and on to [[entity:gezer]], and ends at the sea. Verse 4 closes it in one sentence: Manasseh and Ephraim took their inheritance.\n\nThis is the spine of the country, and the line is drawn across the grain of it rather than along it. From a river bed below sea level, up the eastern desert slope, over the watershed at [[entity:bethel]], and down the western descent to the plain: the full width of the highlands in a single verse and a half.",
    entityIds: [
      "joseph",
      "tribe-ephraim",
      "tribe-manasseh-west",
      "jordan-river",
      "jericho",
      "bethel",
      "lower-beth-horon",
      "gezer",
      "great-sea",
      "region-hill-country-ephraim",
      "region-coastal-plain",
      "region-jordan-valley",
    ],
    mapFeatureIds: [
      "allot-ephraim",
      "site-jordan-river",
      "site-jericho",
      "site-bethel",
      "site-lower-beth-horon",
      "site-upper-beth-horon",
      "site-gezer",
      "site-great-sea",
    ],
    mapCaption:
      "One boundary for both Joseph tribes, from the Jordan at Jericho over the watershed at Bethel and down past Gezer to the sea.",
    whatChanged:
      "An allotted area appears across the centre of the country, immediately north of Benjamin. Its western end runs onto the coastal plain and through Gezer, and the last verse of the chapter says Gezer stayed Canaanite.",
    geographyExplanation:
      "[[entity:jericho]] sits in the [[entity:region-jordan-valley]] a few hundred metres below sea level. [[entity:bethel]], about twenty kilometres west of it, stands near 900 m on the watershed. So the eastern half of this line is a climb of well over a kilometre in about twenty, up the driest slope in the country, which is why the text simply calls that stretch the wilderness. West of the watershed the fall is longer and staged: the ridge lets down through the Beth-horon spurs to the [[entity:region-coastal-plain]], and that descent is the one chapter 10's rout used. The line is stated to end at the sea, and Israel held no part of the coast, which belongs in the same breath as the description.",
    sequenceType: "allotment",
    viewport: {
      center: [35.05, 31.95],
      zoom: 9,
      bounds: [
        [34.55, 31.75],
        [35.6, 32.25],
      ],
    },
    citations: [
      {
        sourceId: "rainey-notley-sacred-bridge",
        locator: "on Joshua 16:1-4",
        supportedClaim:
          "The Joseph boundary runs from the Jordan at Jericho over the watershed near Bethel and down the Beth-horon descent to Gezer and the coast",
      },
      {
        sourceId: "beitzel-moody-atlas",
        supportedClaim:
          "Elevations and terrain from the Jordan valley up to the central watershed and down to the coastal plain",
      },
      {
        sourceId: "hess-joshua",
        locator: "on Joshua 16:1-4",
        supportedClaim:
          "A single lot is described for both Joseph tribes before their internal division",
      },
    ],
    evidenceLabels: ["biblical-account", "reconstruction"],
  },
  {
    id: "ch16-ephraim-boundary-traced",
    chapter: 16,
    order: 2,
    title: "Ephraim's own border, mostly through places nobody can find",
    scriptureRefs: ["Joshua 16:5-9"],
    narrative:
      "[[entity:tribe-ephraim]]'s own boundary is then traced, and it is the hardest passage in the chapter to hold in the mind. Eastward it runs from Ataroth-addar to [[entity:upper-beth-horon]]. It goes out west at Michmethath, turns back east to Taanath-shiloh and passes east of Janoah, comes down from Janoah to Ataroth and Naarah, reaches [[entity:jericho]] and goes out at the [[entity:jordan-river]]. From Tappuah it runs west along the brook Kanah and ends at the sea. Ephraim also receives towns set apart for it inside [[entity:tribe-manasseh-west]]'s inheritance.\n\nOf the points named here, only the two Beth-horons, [[entity:jericho]] and the [[entity:jordan-river]] can be placed with confidence. The Archites and the Japhletites are populations whose ground nobody can now identify, and the rest are names without locations. Any area drawn for Ephraim is therefore an interpolation between four fixed points and a description that changes direction twice.",
    entityIds: [
      "tribe-ephraim",
      "tribe-manasseh-west",
      "tribe-benjamin",
      "upper-beth-horon",
      "lower-beth-horon",
      "jericho",
      "jordan-river",
      "bethel",
      "shiloh",
      "timnath-serah",
      "shechem",
      "kanah",
      "region-hill-country-ephraim",
    ],
    mapFeatureIds: [
      "allot-ephraim",
      "site-upper-beth-horon",
      "site-lower-beth-horon",
      "site-jericho",
      "site-jordan-river",
      "site-shiloh",
      "site-timnath-serah",
      "site-bethel",
    ],
    mapCaption:
      "Ephraim's border, drawn between four places that can be located and a string of names that cannot.",
    whatChanged:
      "The inner boundary between Ephraim and Manasseh is added inside the Joseph area, and towns held by Ephraim inside Manasseh's territory are noted. The southern edge is the same line chapter 18 will draw as Benjamin's northern edge.",
    geographyExplanation:
      "The [[entity:region-hill-country-ephraim]] is higher, wetter and more open than Judah's ridge, broken into basins and cross-valleys instead of running as a single narrow spine. That is why this area carried the densest early highland settlement, why a place like [[entity:shiloh]] can sit in a farmed basin off the main road and still matter, and why the boundary description keeps changing direction: with no one dominant ridge line to follow, the border has to be stitched together from local features. The brook Kanah carries the north-western edge out toward the coast, in the direction these valleys naturally drain. Note that the Kanah of verse 8 is a watercourse, not the town of that name in Asher's list far to the north.",
    sequenceType: "allotment",
    viewport: {
      center: [35.2, 32.05],
      zoom: 9,
      bounds: [
        [34.8, 31.8],
        [35.65, 32.3],
      ],
    },
    citations: [
      {
        sourceId: "rainey-notley-sacred-bridge",
        locator: "on Joshua 16:5-9",
        supportedClaim:
          "Most of Ephraim's named boundary points, including Michmethath, Janoah, Taanath-shiloh and Tappuah, have no agreed identification",
      },
      {
        sourceId: "aharoni-land-of-bible",
        supportedClaim:
          "The terrain of the Ephraimite hill country and the reconstruction of its tribal boundary from the identifiable points",
      },
      {
        sourceId: "stager-forging-identity",
        supportedClaim:
          "The central hill country supported dense small-village agricultural settlement in the early Iron Age",
      },
      {
        sourceId: "butler-joshua",
        locator: "on Joshua 16:5-8",
        supportedClaim:
          "The order of the boundary clauses in this passage is widely regarded as disturbed",
      },
    ],
    evidenceLabels: ["biblical-account", "reconstruction", "disputed"],
  },
  {
    id: "ch16-gezer-not-driven-out",
    chapter: 16,
    order: 3,
    title: "Gezer is not driven out",
    scriptureRefs: ["Joshua 16:10", "Joshua 10:33", "Judges 1:29"],
    narrative:
      "The chapter ends on a failure stated without drama. They did not drive out the [[entity:canaanites]] who lived in [[entity:gezer]]; the Canaanites went on living inside Ephraim's territory and became a labour force.\n\nThe town's king, [[entity:horam]], had already been beaten in the field in chapter 10 and counted among the thirty-one kings in chapter 12. So the book has defeated Gezer's ruler, drawn Gezer inside a boundary, and admitted Gezer was never taken, and it sees no difficulty in doing all three. Beating a king, being assigned a town, and living in it are three separate things.\n\nWhat the text reports in place of possession is forced labour. The Canaanites stay and they work. That is an arrangement rather than a conquest, and the chapter records it as what happened, not as what was intended.",
    entityIds: [
      "canaanites",
      "gezer",
      "horam",
      "tribe-ephraim",
      "upper-beth-horon",
      "lower-beth-horon",
      "aijalon",
      "gibeon",
      "region-coastal-plain",
    ],
    mapFeatureIds: [
      "remain-gezer",
      "site-gezer",
      "site-lower-beth-horon",
      "site-upper-beth-horon",
      "site-aijalon",
      "allot-ephraim",
    ],
    mapCaption:
      "Gezer, at the foot of the Beth-horon ascent, stays Canaanite inside Ephraim's described territory.",
    whatChanged:
      "A town inside the allotted area is marked as not taken. Ephraim's western gateway, the bottom of the road up from the coast, remains in other hands, and the arrangement recorded is forced labour rather than possession.",
    geographyExplanation:
      "[[entity:gezer]] stands on a low isolated ridge at the inner edge of the [[entity:region-coastal-plain]], at the point where the coastal highway is met by the route that runs up the [[entity:aijalon]] valley and climbs the Beth-horon spur to the plateau. That is the best approach from the sea into the central highlands, and in the other direction it is how highland traffic reaches the international road. [[entity:lower-beth-horon]] lies about sixteen kilometres east and considerably higher, at the foot of the climb proper. Whoever holds Gezer decides who uses that staircase: chapter 10's rout came down it, and Gezer's own king marched out of the plain to fight at Lachish. Ephraim's admission here means the tribe lived above a road it did not control at the bottom.",
    sequenceType: "summary",
    viewport: { center: [34.9186, 31.8597], zoom: 10 },
    citations: [
      {
        sourceId: "rainey-notley-sacred-bridge",
        supportedClaim:
          "Gezer sits where the coastal highway meets the Aijalon valley route and the Beth-horon ascent into the highlands",
      },
      {
        sourceId: "moran-amarna",
        supportedClaim:
          "Gezer is attested as a Canaanite city-state in the Amarna correspondence",
      },
      {
        sourceId: "kitchen-reliability",
        supportedClaim:
          "The book's conquest summaries must be read against its own notices of towns not taken",
      },
    ],
    evidenceLabels: ["biblical-account", "externally-attested"],
  },
];
