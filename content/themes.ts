/**
 * The eleven study themes.
 *
 * Three disciplines govern this file.
 *
 *  1. Each theme is traced through Joshua itself, chapter and verse, before any
 *     wider theology is attempted. A theme that could be written from a topical
 *     concordance without opening the book has failed.
 *  2. `reformedPerspective` is labelled Reformed in its own words, every time,
 *     and names at least one other Christian tradition that reads the same
 *     material differently. The Reformed reading is never the default voice.
 *  3. `newTestament.explicitReferences` contains only passages where the New
 *     Testament itself quotes or names Joshua material. Everything the church
 *     developed afterwards, including the Joshua/Jesus name typology, the
 *     crossing as baptism, and Canaan as heaven, is confined to
 *     `laterTypology` and introduced there as later Christian interpretation.
 *
 * Ids and their order come from `THEME_IDS` in `content/manifest.ts`. Every
 * `sourceId` resolves to `content/sources.ts`, which is a closed registry.
 */

import type { Theme } from "./types";

export const THEMES: Theme[] = [
  /* ================================================================ */
  /* 1. Promise and fulfilment                                        */
  /* ================================================================ */
  {
    id: "promise-and-fulfillment",
    title: "Promise and fulfilment",
    hook:
      "Joshua says not one word failed, and in the same book says much land remains, and then says the land that remains will become a snare. All three sentences are its own.",
    body: `Joshua opens by restating a promise rather than making one. The LORD tells [[entity:joshua]] to cross into "the land which I am giving to them", and describes its reach from the wilderness and Lebanon to the Euphrates. [[entity:great-sea]] marks the western limit (Joshua 1:2-4). No period of Israel's history ever held that much ground. The promise is older than the book and the book knows it: the commission rests on what the LORD swore to the fathers (Joshua 1:6), and the closing speech traces the whole sequence back past [[entity:abraham]] to [[entity:terah]] beyond the river (Joshua 24:2-3).

Two thirds of the way through, Joshua renders a verdict. The LORD gave Israel all the land he had sworn; they possessed it and lived in it; he gave them rest on every side; and "nothing failed of any good thing which Yahweh had spoken to the house of Israel. All came to pass" (Joshua 21:43-45). Joshua repeats it himself at the end: "not one thing has failed of all the good things" (Joshua 23:14). This is the strongest statement of promise kept in the Old Testament narrative.

The same book says something else about the ground. Joshua 13:1 has the LORD tell an aged Joshua that "there remains yet very much land to be possessed", and then inventories it: the whole Philistine coast, the [[entity:geshurites]], the territory belonging to the [[entity:sidonians]], all Lebanon as far as the approach to Hamath (Joshua 13:2-6). The allotment chapters keep conceding particular cases. [[entity:tribe-judah]] could not dislodge the [[entity:jebusites]] from [[entity:jerusalem]] (15:63). [[entity:tribe-ephraim]] did not clear [[entity:gezer]] (16:10). [[entity:tribe-manasseh-west]] could not take the valley towns and imposed forced labour instead (17:12-13). The [[entity:geshurites]] and [[entity:maacathites]] live "within Israel to this day" (13:13).

Then Joshua 23:12-13 turns the remainder into a threat. If Israel holds fast to the nations that remain and intermarries with them, the LORD will stop driving them out, and they will become "a snare and a trap... a scourge in your sides, and thorns in your eyes, until you perish from off this good land". The unconquered remnant catalogued in chapter 13 becomes the instrument of the warning in chapter 23.

Several readings ease the strain without dissolving it. Conquest reports across the ancient Near East use totality as a convention, so "all" and "left no one remaining" describe a decisive outcome rather than an exhaustive tally. Militarily the campaigns read as raids and disabling strikes against coalitions, which is a different achievement from settlement: beating a king in the field is not holding his city. And Joshua 13:6 and 23:5 both place the driving out in the future while telling Israel to allocate the land now, which makes the grant a title to be worked out rather than a fact on the ground.

What finally holds the three passages together is that they answer different questions. Joshua 21:45 is a claim about God, and it is unqualified. Joshua 13:1 is a claim about Israel's possession, and it is frankly incomplete. Joshua 23:12-13 adds that incomplete possession is not stable and can be lost. Fulfilment in this book is real, partial, and held on terms. Anyone who makes it tidier than that has stopped reading one of the three verses.`,
    chapterNumbers: [1, 11, 13, 15, 16, 17, 18, 21, 23, 24],
    entityIds: [
      "joshua",
      "abraham",
      "terah",
      "moses",
      "great-sea",
      "geshurites",
      "maacathites",
      "sidonians",
      "philistines",
      "jebusites",
      "jerusalem",
      "gezer",
      "tribe-judah",
      "tribe-ephraim",
      "tribe-manasseh-west",
      "region-lebanon",
    ],
    scriptureRefs: [
      "Joshua 1:2-6",
      "Joshua 11:23",
      "Joshua 13:1-7",
      "Joshua 13:13",
      "Joshua 15:63",
      "Joshua 16:10",
      "Joshua 17:12-13",
      "Joshua 21:43-45",
      "Joshua 23:5",
      "Joshua 23:12-16",
      "Joshua 24:2-13",
      "Genesis 15:18-21",
      "Deuteronomy 7:1-6",
    ],
    citations: [
      {
        sourceId: "younger-conquest-accounts",
        supportedClaim:
          "Totalising language is a shared convention of ancient Near Eastern conquest reporting, so 'all' and 'left none remaining' describe a decisive outcome rather than an exhaustive tally",
      },
      {
        sourceId: "kitchen-reliability",
        supportedClaim:
          "Joshua's campaigns are better described as raids and disabling strikes than as occupation, and the book's summaries must be read against its own admissions of unconquered territory",
      },
      {
        sourceId: "hess-joshua",
        locator: "on Joshua 13-19",
        supportedClaim:
          "The boundary and town lists follow recognisable second-millennium administrative forms, describing assigned territory rather than surveyed control",
      },
      {
        sourceId: "howard-joshua",
        supportedClaim:
          "The summaries of completed conquest and the admissions of remaining land are both structural features of the book rather than editorial accidents",
      },
      {
        sourceId: "mitchell-together-in-land",
        supportedClaim:
          "Joshua sets commands to dispossess alongside narratives of coexistence and declines to resolve the tension",
      },
      {
        sourceId: "mcconville-williams-joshua",
        supportedClaim:
          "The gap between the book's claims of completion and its admissions of failure is a theological problem the text poses deliberately",
      },
    ],
    reformedPerspective: {
      body: `The Reformed tradition has generally read this tension as the intended signal of an unfinished redemptive history. On that reading, Joshua 21:45 secures the character of God, Joshua 13:1 and 23:13 expose the inadequacy of the arrangement to its own promise, and the two together push the reader forward rather than backward. Calvin took the "no falling words" verdict as a statement about divine veracity that Israel's failure cannot touch, and Reformed biblical theology has treated the land as a real but provisional stage in progressively unfolding revelation. Dale Ralph Davis built an entire Reformed exposition of the book around the phrase.

This is how the Reformed tradition has read it. Other Christian traditions read it differently, and one difference is sharp. Dispensationalist readings agree that Joshua leaves the territorial promise unexhausted, and conclude from that the opposite thing: that a literal national fulfilment for Israel remains outstanding rather than being absorbed into a wider spiritual inheritance. Both readings take Joshua 13:1 seriously; they disagree entirely about what completes it, and the disagreement cannot be settled from Joshua alone.`,
      citations: [
        {
          sourceId: "calvin-joshua",
          locator: "on Joshua 21 and 23",
          supportedClaim:
            "Calvin reads the 'nothing failed' verdict as a statement about God's veracity that Israel's subsequent failure does not qualify",
        },
        {
          sourceId: "vos-biblical-theology",
          supportedClaim:
            "A Reformed biblical-theological reading treats the land as a real but provisional stage within progressively unfolding revelation",
        },
        {
          sourceId: "robertson-christ-of-covenants",
          supportedClaim:
            "Reformed covenant theology reads the land promise as one administration within a single continuing covenant purpose",
        },
        {
          sourceId: "davis-joshua",
          supportedClaim:
            "A Reformed exposition organised around Joshua 21:45 and 23:14, taking the 'no falling words' verdict as the book's controlling claim",
        },
        {
          sourceId: "woudstra-joshua",
          supportedClaim:
            "A Reformed exegetical treatment of the land promise as covenantal in structure and conditional in enjoyment",
        },
      ],
    },
    newTestament: {
      explicitReferences: [
        {
          ref: "Acts 13:19",
          note:
            "Paul, preaching at Antioch, says God destroyed seven nations in Canaan and 'gave them their land for an inheritance'. This names Joshua's material directly and treats the allotment as accomplished, without addressing the book's admissions of remaining land.",
        },
        {
          ref: "Acts 7:45",
          note:
            "Stephen names Joshua, and says the fathers brought the tabernacle in with him when they took possession of the nations. Again an explicit reference, and again a compressed summary rather than an argument about completeness.",
        },
        {
          ref: "Hebrews 4:8",
          note:
            "Hebrews names Joshua and argues that if he had given them rest, Scripture would not afterwards speak of another day. This is the one New Testament passage that reasons explicitly from Joshua's incompleteness.",
        },
        {
          ref: "Hebrews 11:30",
          note:
            "Jericho's walls are cited as an instance of faith. The verse says nothing about the extent of the land or the completeness of the conquest.",
        },
      ],
      laterTypology: [
        {
          claim: "The land as a figure of the inheritance promised to the church",
          note:
            "Developed by later Christian writers rather than stated in Joshua or drawn from it in the New Testament. It is a theological move, and readers should know it is being made.",
        },
        {
          claim:
            "The gap between Joshua 21:45 and Joshua 13:1 as a pattern of 'already and not yet'",
          note:
            "A modern theological category, useful for describing the tension, but not language the book or the New Testament uses of it.",
        },
      ],
    },
    relatedQuestionIds: [
      "incomplete-possession",
      "destruction-language",
      "conquest-violence",
    ],
  },

  /* ================================================================ */
  /* 2. Land and inheritance                                          */
  /* ================================================================ */
  {
    id: "land-and-inheritance",
    title: "Land and inheritance",
    hook:
      "The land in Joshua is never something Israel acquires. It is the LORD's possession, handed over as a family portion, on terms, with boundaries drawn wider than anything Israel ever held.",
    body: `Joshua's land language is proprietary, and the proprietor is not Israel. The book's first speech calls it "the land which I am giving to them" (1:2). The last speech says: "I gave you a land whereon you had not labored, and cities which you didn't build, and you live in them. You eat of vineyards and olive groves which you didn't plant" (24:13). In the crisis of chapter 22 the western side is called "the land of the possession of Yahweh, in which Yahweh's tabernacle dwells" (22:19). Israel is a tenant on ground that belongs to someone else.

The vocabulary of transfer is family law, not military accounting. The recurring word is inheritance: the portion a household receives and passes on. That is why the allotment is cast by lot before the LORD at [[entity:shiloh]] (18:6-10), administered jointly by [[entity:eleazar]], Joshua and the tribal heads (14:1; 19:51), and never once described as a share of spoils. No tribe is paid for its fighting. [[entity:caleb]] receives [[entity:hebron]] on the strength of an oath made forty-five years earlier, not a battle just won (14:9-13). [[entity:zelophehads-daughters]] receive a portion because a household without sons still needs one (17:3-6). [[entity:region-negev]] is dry, which is why [[entity:achsah]] asks her father for springs as well as land (15:18-19). [[entity:tribe-levi]] receives no block at all: "Yahweh, the God of Israel, is their inheritance" (13:33), and in place of territory it gets forty-eight towns with pasture scattered through everyone else's ground (21:1-42). The cities of refuge belong to the same logic: land carrying obligations, including shelter for a person who has killed unintentionally (20:1-6).

The described boundaries exceed what was ever held, and the book states both halves. Joshua 1:4 runs the border to the Euphrates. Tribal descriptions repeatedly reach the sea, while Joshua 13:2-3 concedes that the whole Philistine coast from the Shihor to [[entity:ekron]] remained. [[entity:tribe-asher]]'s described area overlaps territory the text assigns to the [[entity:sidonians]] and admits was not taken. [[entity:tribe-dan]] is allotted ground it does not hold. An allotment is an assignment. It is not a record of control, and Joshua does not pretend otherwise: the same chapters that draw the lines record who was still living inside them.

Tenure is conditional throughout. The land is given, and Joshua 23:15-16 says plainly that the giver can bring Israel to "perish quickly from off the good land which he has given to you". Possession is a gift with terms attached, which is precisely why the book can insist the promise held while conceding that the holding did not.

Two implications follow that are easy to miss. First, inheritance language resists being read as conquest reward; a portion is what a family is owed within a household, not what an army takes. Second, the land laws of this tradition, with their lots, family portions, Levitical dependence and refuge provisions, are organised around limiting accumulation and protecting households. They do not translate into a template for modern territorial claims by anyone, and reading them that way inverts the arrangement the text describes.`,
    chapterNumbers: [1, 13, 14, 15, 16, 17, 18, 19, 20, 21, 22, 23, 24],
    entityIds: [
      "joshua",
      "eleazar",
      "caleb",
      "achsah",
      "zelophehads-daughters",
      "moses",
      "shiloh",
      "hebron",
      "great-sea",
      "ekron",
      "tribe-levi",
      "tribe-asher",
      "tribe-dan",
      "tribe-judah",
      "sidonians",
      "philistines",
      "region-negev",
    ],
    scriptureRefs: [
      "Joshua 1:2-4",
      "Joshua 13:2-3",
      "Joshua 13:33",
      "Joshua 14:1-5",
      "Joshua 14:9-13",
      "Joshua 15:18-19",
      "Joshua 17:3-6",
      "Joshua 18:6-10",
      "Joshua 19:51",
      "Joshua 20:1-6",
      "Joshua 21:41-42",
      "Joshua 22:19",
      "Joshua 23:15-16",
      "Joshua 24:13",
      "Leviticus 25:23-28",
      "Numbers 26:52-56",
      "Numbers 27:1-11",
      "Numbers 35:1-8",
    ],
    citations: [
      {
        sourceId: "weinfeld-promise-land",
        supportedClaim:
          "Israel's land traditions use the idioms of grant and inheritance, comparable with ancient Near Eastern land-transfer practice",
      },
      {
        sourceId: "pitkanen-joshua",
        supportedClaim:
          "Joshua's distribution material can be compared with ancient Near Eastern settlement and land-grant procedure",
      },
      {
        sourceId: "wright-ot-ethics",
        supportedClaim:
          "The economics of inheritance in Israel's land laws are oriented to household viability and resist being turned into a template for modern territorial claims",
      },
      {
        sourceId: "haran-levitical-cities",
        supportedClaim:
          "The Levitical lists describe towns with pasture rather than a contiguous tribal territory",
      },
      {
        sourceId: "milgrom-numbers",
        supportedClaim:
          "Torah background to the cities of refuge, the Levitical towns, and the case of Zelophehad's daughters",
      },
      {
        sourceId: "aharoni-land-of-bible",
        supportedClaim:
          "The administrative logic of the tribal boundary and town lists, and the difficulty of reconstructing them on the ground",
      },
      {
        sourceId: "hess-joshua",
        locator: "on Joshua 15-19",
        supportedClaim:
          "Allotment descriptions record assignment rather than possession, and the book's own notes of failure stand inside them",
      },
    ],
    reformedPerspective: {
      body: `Reformed readers have characteristically handled the land as a covenant grant: given freely, administered under stipulations, and typical of a wider inheritance not confined to one territory. Woudstra's Reformed commentary works the conditionality into the exegesis rather than treating it as an afterthought, and Robertson reads the grant as one administration of a single covenant purpose. Vos treats the land as a stage that carries genuine theological weight while pointing beyond its own borders. The attraction of the reading is that it takes Joshua 23:15-16 at face value without making God's promise contingent.

That is the Reformed handling, and it is one Christian reading among several. Roman Catholic social teaching has drawn on the same material to different effect, reading the lot, the family portion and the jubilee restrictions primarily as grounding obligations about property and the poor rather than as typology. Dispensationalist readings, by contrast, hold the territorial grant to be an outstanding literal entitlement for national Israel, which the partial possession in Joshua leaves standing rather than superseded. All three can quote Joshua 24:13; they differ on what kind of promise is being quoted.`,
      citations: [
        {
          sourceId: "woudstra-joshua",
          supportedClaim:
            "A Reformed commentary that treats the conditionality of land tenure as integral to the covenantal structure of the allotment chapters",
        },
        {
          sourceId: "robertson-christ-of-covenants",
          supportedClaim:
            "Reformed covenant theology reads the land grant as one administration within a single covenant purpose",
        },
        {
          sourceId: "vos-biblical-theology",
          supportedClaim:
            "The land treated in Reformed biblical theology as a genuine but provisional stage in redemptive history",
        },
        {
          sourceId: "calvin-joshua",
          locator: "on Joshua 24:13",
          supportedClaim:
            "Calvin presses the gratuity of the gift: Israel receives fields, cities and vineyards it did not make",
        },
      ],
    },
    newTestament: {
      explicitReferences: [
        {
          ref: "Acts 13:19",
          note:
            "The clearest explicit New Testament reference to Joshua's land material: God 'gave them their land for an inheritance'. The inheritance vocabulary is carried over intact.",
        },
        {
          ref: "Acts 7:45",
          note:
            "Stephen names Joshua and the entry into possession. The reference is to the taking of the land, not to its division among tribes.",
        },
      ],
      laterTypology: [
        {
          claim: "Canaan as a figure of heaven",
          note:
            "A later Christian reading with a long history in hymnody and devotional writing. Joshua does not make it, and no New Testament passage applies Canaan to heaven. Where it appears in later use, the crossing of the Jordan tends to stand for death, which is a reversal of the book's own sense of the crossing as entry into life in the land.",
        },
        {
          claim: "The tribal allotment as a figure of the church's varied gifts or stations",
          note:
            "A later homiletical use of the allotment chapters, developed by Christian interpreters and not derived from any New Testament citation of them.",
        },
      ],
    },
    relatedQuestionIds: ["incomplete-possession", "conquest-violence"],
  },

  /* ================================================================ */
  /* 3. Covenant faithfulness                                         */
  /* ================================================================ */
  {
    id: "covenant-faithfulness",
    title: "Covenant faithfulness",
    hook:
      "Joshua is structured by covenant acts: circumcision before a battle, a law read on a mountainside, an oath kept to people who lied to obtain it, and a stone set up to testify against the people who agreed to it.",
    body: `Joshua treats covenant as a working legal reality rather than a mood. The commission in chapter 1 binds the new leader to a document: meditate on the book of the law, do not turn from it to the right or the left (1:7-8). Before any fighting, the generation born in the wilderness is circumcised at [[entity:gilgal]] (5:2-9) and keeps Passover (5:10-12), and the manna stops. The ark carried ahead of the people is "the ark of the covenant of the Lord of all the earth" (3:11), which makes the crossing itself a covenantal procession.

The clearest set piece comes at [[entity:shechem]], between [[entity:mount-ebal]] and [[entity:mount-gerizim]]. Joshua builds an altar of uncut stones, writes a copy of the law on stones, and reads the blessing and the curse to the whole assembly, "the foreigner as well as the native", with the women and children present (8:30-35). This follows the Deuteronomic instruction closely, and the detail that nothing was omitted from the reading matters: covenant here is public, textual and audible.

Then the book tests the idea. [[entity:gibeonite-league]] obtain a treaty by disguise in chapter 9. Israel's leaders "didn't ask counsel from Yahweh's mouth" (9:14) and swear. Three days later the fraud is exposed and the congregation wants blood. The princes refuse: "We have sworn to them by Yahweh, the God of Israel. Now therefore we may not touch them" (9:19). A sworn oath in the LORD's name holds even when procured dishonestly, even against a standing command. That is one of the most consequential rulings in the book, and it is a ruling about the binding force of covenant, not about Gibeonite merit.

Chapter 22 tests it from the other side. An altar built by the Jordan looks like apostasy, and the congregation musters for war at [[entity:shiloh]]. [[entity:phinehas]] leads a delegation, the eastern tribes explain that the structure is a witness and not a place of sacrifice (22:26-28), and the crisis ends. The threat that mobilised Israel was covenant breach, and the resolution was covenant clarification.

The book closes with a full covenant ceremony at Shechem (24:1-28) whose shape resembles the suzerain-vassal treaties of the second millennium: historical prologue, stipulation, witnesses. Joshua's move is to make acceptance hard. "You can't serve Yahweh, for he is a holy God" (24:19). The people insist; he makes them witnesses against themselves; he sets up a stone that "has heard all Yahweh's words" and will testify against them (24:27).

Faithfulness in Joshua therefore runs in two directions and is not symmetrical. God's side is stated as kept: "not one thing has failed of all the good things" (23:14). Israel's side is stated as fragile, and the same speech warns that the words of judgment will come true on the same terms as the words of blessing (23:15-16). The book's confidence is entirely about the first party.`,
    chapterNumbers: [1, 3, 5, 8, 9, 22, 23, 24],
    entityIds: [
      "joshua",
      "moses",
      "phinehas",
      "eleazar",
      "gilgal",
      "shechem",
      "mount-ebal",
      "mount-gerizim",
      "shiloh",
      "gibeonite-league",
      "gibeon",
      "tribe-reuben",
      "tribe-gad",
      "tribe-manasseh-east",
      "jordan-river",
    ],
    scriptureRefs: [
      "Joshua 1:7-8",
      "Joshua 3:11",
      "Joshua 5:2-12",
      "Joshua 8:30-35",
      "Joshua 9:14-21",
      "Joshua 22:10-34",
      "Joshua 23:14-16",
      "Joshua 24:1-28",
      "Deuteronomy 11:26-32",
      "Deuteronomy 27:1-26",
      "Deuteronomy 29:10-15",
      "Deuteronomy 31:9-13",
    ],
    citations: [
      {
        sourceId: "mendenhall-law-covenant",
        supportedClaim:
          "The ceremony in Joshua 24 follows the structure of Hittite suzerain-vassal treaties, including historical prologue, stipulations and witnesses",
      },
      {
        sourceId: "hillers-covenant",
        supportedClaim:
          "Ancient oath-taking bound the swearer regardless of how the agreement was obtained, which is why Israel could not repudiate the Gibeonite treaty",
      },
      {
        sourceId: "block-deuteronomy",
        locator: "on Deuteronomy 27 and 31",
        supportedClaim:
          "The Deuteronomic background to the blessing and curse ceremony and to the public reading of the law before the whole assembly, foreigners included",
      },
      {
        sourceId: "hess-joshua",
        locator: "on Joshua 8:30-35 and 24",
        supportedClaim:
          "The Ebal ceremony and the Shechem assembly are presented as formal covenant acts rather than as general religious occasions",
      },
      {
        sourceId: "mcconville-williams-joshua",
        supportedClaim:
          "The book's covenant framework is what makes Israel's own vulnerability to judgment intelligible",
      },
      {
        sourceId: "wright-shechem",
        supportedClaim:
          "Shechem's long association with covenant-making, and the absence of any reported battle for the city in Joshua",
      },
    ],
    reformedPerspective: {
      body: `Covenant is the organising category of Reformed theology, and Joshua is one of its favourite proving grounds. On the Reformed reading, the successive covenant administrations in Scripture express one continuing gracious purpose, so the Ebal ceremony and the Shechem renewal are not new arrangements but renewals of a standing bond. The Westminster Confession's treatment of lawful oaths and vows is directly relevant to Joshua 9: an oath sworn in God's name binds the swearer, which is why Reformed writers have treated the Gibeonite treaty as valid rather than void. Calvin's handling is characteristic: he faults the leaders sharply for not consulting the LORD, and still holds the oath binding.

That is the Reformed account, offered as one Christian reading rather than the only one. Anabaptist traditions have historically refused to swear oaths at all, on the strength of Jesus' words in Matthew 5, and from that standpoint Joshua 9 reads less as a lesson in oath-keeping than as a case study in why sworn commitments entangle the people of God. Wesleyan and Methodist theology, while affirming covenant, places more weight than Reformed theology does on the reality and resistibility of human response, and so hears Joshua 24:19-24 as a genuinely open transaction rather than as a solemn exposure of inability. None of these readings can claim Joshua settles the question.`,
      citations: [
        {
          sourceId: "westminster-confession",
          locator: "chapter 22, of lawful oaths and vows",
          supportedClaim:
            "A confessional Reformed position that an oath lawfully sworn binds the swearer, which bears directly on the Gibeonite treaty",
        },
        {
          sourceId: "calvin-joshua",
          locator: "on Joshua 9",
          supportedClaim:
            "Calvin criticises Israel's leaders for failing to consult the LORD while maintaining that the oath they swore remained binding",
        },
        {
          sourceId: "robertson-christ-of-covenants",
          supportedClaim:
            "The Reformed reading of successive covenant administrations as expressions of one continuing purpose",
        },
        {
          sourceId: "bavinck-dogmatics",
          supportedClaim:
            "Reformed dogmatic treatment of covenant as the form in which God accommodates himself to human beings in revelation",
        },
      ],
    },
    newTestament: {
      explicitReferences: [
        {
          ref: "Hebrews 13:5",
          note:
            "Quotes the promise 'I will in no way leave you, neither will I in any way forsake you'. The wording matches Deuteronomy 31:6 most closely, and Joshua 1:5 carries the same promise, so whether Joshua is directly in view is uncertain. Listed here with that uncertainty stated rather than resolved.",
        },
        {
          ref: "Acts 7:45",
          note:
            "Stephen's speech names Joshua and the tabernacle of the testimony, tying the entry into the land to the covenant institution carried with it.",
        },
      ],
      laterTypology: [
        {
          claim: "The Shechem renewal as a pattern for Christian covenant or membership services",
          note:
            "A later Christian practice, developed in several traditions including Reformed and Methodist, that draws on Joshua 24 without any New Testament warrant tying the two together.",
        },
        {
          claim: "Circumcision at Gilgal as a figure of Christian baptism",
          note:
            "Later Christian interpretation. The New Testament does connect circumcision and baptism in Colossians 2, but it does so without reference to Joshua 5, and the connection to this passage is the church's inference rather than the text's.",
        },
      ],
    },
    relatedQuestionIds: ["gibeonite-oath", "achans-punishment", "rahabs-deception"],
  },

  /* ================================================================ */
  /* 4. Leadership and succession                                     */
  /* ================================================================ */
  {
    id: "leadership-and-succession",
    title: "Leadership and succession",
    hook:
      "The book opens with a funeral and a handover, spends twenty-four chapters showing what one leader's authority rests on, and ends without naming a successor.",
    body: `Joshua begins with a death: "Now after the death of Moses the servant of Yahweh" (1:1). The handover is immediate and explicitly derivative. [[entity:joshua]] is commissioned with the promise given to [[entity:moses]], "As I was with Moses, so I will be with you" (1:5), and bound to the same document, the book of the law, which he is to keep in his mouth day and night (1:8). The people's pledge is equally comparative: "Just as we listened to Moses in all things, so will we listen to you" (1:16-17).

The book then validates the succession by event rather than by ceremony. At the crossing, "Yahweh magnified Joshua in the sight of all Israel; and they feared him, as they feared Moses, all the days of his life" (4:14; compare 3:7). The validation is public and it is dated: all the days of his life, and no longer.

Two passages keep the office in its place. In 5:13-15, on the eve of the first campaign, Joshua meets a figure with a drawn sword and asks the natural commander's question, "Are you for us, or for our enemies?" The answer is "No", followed by a self-identification as commander of the LORD's army and an instruction to remove his sandals. The leader of Israel is told that he is not the principal. And in 11:15 the book's highest praise for him is entirely secondary: "He left nothing undone of all that Yahweh commanded Moses."

Authority in Joshua is also shared and audited. The allotment is administered by [[entity:eleazar]] the priest, Joshua, and the heads of the tribes, with Eleazar's name first (14:1; 19:51). The lot itself, cast before the LORD at [[entity:shiloh]], removes the distribution from Joshua's discretion (18:6-10). He reads the law rather than expounding his own instructions (8:34-35). He receives his own inheritance, [[entity:timnath-serah]], last of all and by request (19:49-50). He is rebuked by no one, but he is corrected by God, told in 13:1 that he is old and the work is unfinished, and he in turn rebukes the tribes for their inertia: "How long will you neglect to go in to possess the land?" (18:3).

Then the succession simply stops. Joshua dies at a hundred and ten and is buried at Timnath-serah (24:29-30). No successor is appointed, no charge is given to a named individual, and the only continuity the book offers is generational: "Israel served Yahweh all the days of Joshua, and all the days of the elders who outlived Joshua, and had known all the work of Yahweh" (24:31). The safeguard is memory held by people who saw the events, which is a safeguard with a fixed expiry. The book does not say what happens when they die. Judges 2:7-10 says.

That silence is the theme's sharpest point. Joshua is a study in a succession that works, followed by an author's refusal to arrange the next one. Whatever held Israel together in chapter 24 was not an institution of leadership, because the book names none.`,
    chapterNumbers: [1, 3, 4, 5, 8, 11, 13, 14, 18, 19, 23, 24],
    entityIds: [
      "joshua",
      "moses",
      "eleazar",
      "nun",
      "caleb",
      "phinehas",
      "shiloh",
      "timnath-serah",
      "gilgal",
      "jericho",
      "region-hill-country-ephraim",
    ],
    scriptureRefs: [
      "Joshua 1:1-9",
      "Joshua 1:16-18",
      "Joshua 3:7",
      "Joshua 4:14",
      "Joshua 5:13-15",
      "Joshua 8:30-35",
      "Joshua 11:15",
      "Joshua 13:1",
      "Joshua 14:1",
      "Joshua 18:3-10",
      "Joshua 19:49-51",
      "Joshua 23:1-3",
      "Joshua 24:29-31",
      "Numbers 27:15-23",
      "Deuteronomy 31:1-8",
      "Judges 2:7-10",
    ],
    citations: [
      {
        sourceId: "hess-joshua",
        locator: "on Joshua 1 and 5:13-15",
        supportedClaim:
          "The commission is framed as continuity with Moses, and the encounter before Jericho subordinates Joshua's command to the LORD's",
      },
      {
        sourceId: "howard-joshua",
        supportedClaim:
          "The narrative structure repeatedly measures Joshua against Moses, and the validation formulae are tied to the span of his life",
      },
      {
        sourceId: "hawk-joshua",
        supportedClaim:
          "A literary reading of Joshua's characterisation, including how little interiority the book gives him",
      },
      {
        sourceId: "creach-joshua",
        supportedClaim:
          "Theological reflection on leadership in Joshua in a mainline Protestant register, including the problem of the book's ending",
      },
      {
        sourceId: "milgrom-numbers",
        locator: "on Numbers 27:15-23",
        supportedClaim:
          "The Torah background to Joshua's commissioning alongside Eleazar the priest, which distributes authority between the two offices",
      },
      {
        sourceId: "mcconville-williams-joshua",
        supportedClaim:
          "The absence of any appointed successor at the end of Joshua is a deliberate feature with theological consequences",
      },
    ],
    reformedPerspective: {
      body: `Reformed writers have consistently read Joshua's authority as ministerial rather than personal: he is an officer under a written word, and the book's praise of him is that he omitted nothing Moses commanded (11:15). Calvin presses the point that the leader is bound by the law he carries, and Reformed polity has drawn from material like this a preference for shared, accountable office over concentrated charismatic authority, noting that Joshua acts jointly with [[entity:eleazar]] and the tribal heads and casts lots rather than allocating by fiat. The encounter in 5:13-15, where Joshua is told he is not the one being asked to take sides, is a favourite Reformed text for the limits of office.

This is the Reformed emphasis, and it is one Christian reading among others. Roman Catholic and Eastern Orthodox theology read handovers of this kind with much more institutional weight, as the transmission of an office with continuing authority, and both traditions locate Christian ministry within a succession that Joshua's own ending conspicuously lacks. Anglican theology, holding an episcopal order alongside a strong doctrine of Scripture, sits between the two. All three traditions have to reckon with the same awkward fact: the book that narrates one successful succession appoints nobody at its close.`,
      citations: [
        {
          sourceId: "calvin-joshua",
          locator: "on Joshua 1 and 11:15",
          supportedClaim:
            "Calvin reads Joshua's authority as bounded by the law of Moses, and his commendation as consisting in obedience rather than initiative",
        },
        {
          sourceId: "davis-joshua",
          supportedClaim:
            "A Reformed exposition that treats 5:13-15 as a correction of the leader's assumption about whose side is in question",
        },
        {
          sourceId: "vos-biblical-theology",
          supportedClaim:
            "Reformed biblical theology reads Joshua's office as a mediatorial function within redemptive history rather than as a personal distinction",
        },
      ],
    },
    newTestament: {
      explicitReferences: [
        {
          ref: "Acts 7:45",
          note:
            "Stephen names Joshua by name in his survey of Israel's history, in connection with the tabernacle and the entry into the land. It is a historical reference and makes no claim about his office.",
        },
        {
          ref: "Hebrews 4:8",
          note:
            "Names Joshua and states a limit to what he accomplished: he did not give the people the rest that Scripture still holds out. The New Testament's one explicit assessment of his leadership is a qualification of it.",
        },
      ],
      laterTypology: [
        {
          claim: "Joshua as a type of Christ, largely on the strength of the shared name",
          note:
            "The Greek form of Joshua and the name Jesus are the same word, and later Christian writers made much of it. Joshua does not make the connection, and no New Testament passage argues from the shared name. This is later Christian interpretation and should be identified as such rather than presented as the text's own claim.",
        },
        {
          claim: "Joshua's commissioning as a model for ordination or ministerial succession",
          note:
            "A later ecclesial application, developed in various traditions. Its difficulty is that the book itself records no succession after Joshua.",
        },
      ],
    },
    relatedQuestionIds: ["achans-punishment", "the-long-day", "incomplete-possession"],
  },

  /* ================================================================ */
  /* 5. Holiness and God's presence                                   */
  /* ================================================================ */
  {
    id: "holiness-and-presence",
    title: "Holiness and God's presence",
    hook:
      "In Joshua the presence of God is portable, located, and dangerous. It travels in a box at the head of the column, and the ground it stands on has to be treated accordingly.",
    body: `Joshua's account of divine presence is concrete. Before the crossing the people are told to consecrate themselves (3:5), and the thing that goes first into the river is "the ark of the covenant of the Lord of all the earth" (3:11). The water stops when the priests' feet touch it and resumes when they come up (3:15-17; 4:18). Presence is not diffuse in this book; it has a location, a carrying party, and a protocol.

Chapter 5 reorders the camp before it fights. The wilderness generation's sons are circumcised (5:2-9), Passover is kept in the plains of [[entity:jericho]], and the manna stops the day after they eat the produce of the land (5:10-12). Then Joshua meets a figure with a drawn sword who declines the question of sides and says: "Take off your shoes; for the place on which you stand is holy" (5:15). The holiness is attached to the spot because of who is standing there, not to Canaan as such. The ground outside [[entity:jericho]] is holy for the same reason the bush was.

The Jericho narrative is built as liturgy rather than as siege engineering: priests, trumpets, the ark, a seven-day circuit, and a city "devoted" to the LORD with its metals going into his treasury (6:4-19). What follows in chapter 7 is the dark side of the same theology. Because devoted goods are inside the camp, "the children of Israel can't stand before their enemies... because they have become devoted for destruction" (7:11-12). Israel's own status flips. The holiness that makes the ark a war standard also makes proximity to it hazardous, and the danger is internal before it is external.

Location matters throughout. The altar on [[entity:mount-ebal]] is of uncut stones, following the Deuteronomic requirement, and the law is written and read there (8:30-35). A large stone installation excavated on the mountain has been identified by its excavator as this altar and read by others as an Iron Age watchtower; the structure is genuinely contested, and this study does not settle it. The tent of meeting is pitched at [[entity:shiloh]] (18:1) and the remaining lots are cast "before Yahweh" there (18:6-10). When an altar appears by the Jordan, the congregation treats it as a rival sanctuary and musters for war (22:10-12); the resolution turns on the distinction between an altar for sacrifice and a structure that is only a witness (22:26-28).

The last word on holiness in the book is a deterrent. At [[entity:shechem]] Joshua tells the people they cannot serve the LORD, "for he is a holy God. He is a jealous God" (24:19), and then tells them to put away the foreign gods that are among them (24:23). The gods are present at the covenant renewal. Holiness in Joshua is therefore not an atmosphere the land supplies; it is a presence that has arrived, that can be approached only on terms, and that the book says was being shared with rivals even at its moment of highest commitment.`,
    chapterNumbers: [3, 4, 5, 6, 7, 8, 18, 22, 24],
    entityIds: [
      "joshua",
      "achan",
      "eleazar",
      "phinehas",
      "jericho",
      "jordan-river",
      "jordan-crossing-region",
      "gilgal",
      "mount-ebal",
      "mount-gerizim",
      "shechem",
      "shiloh",
      "valley-of-achor",
    ],
    scriptureRefs: [
      "Joshua 3:5-17",
      "Joshua 4:15-18",
      "Joshua 5:2-15",
      "Joshua 6:4-21",
      "Joshua 7:10-15",
      "Joshua 8:30-35",
      "Joshua 18:1-10",
      "Joshua 22:10-29",
      "Joshua 24:19-24",
      "Exodus 3:1-6",
      "Exodus 40:34-38",
      "Deuteronomy 27:5-8",
      "Leviticus 26:11-12",
    ],
    citations: [
      {
        sourceId: "hess-joshua",
        locator: "on Joshua 3, 5 and 6",
        supportedClaim:
          "The crossing and the Jericho circuit are presented in cultic terms, with the ark and the priests at the centre of the action",
      },
      {
        sourceId: "creach-joshua",
        supportedClaim:
          "Theological reading of divine presence and divine warfare in Joshua as a difficulty for Christian preaching rather than a resource to be used straightforwardly",
      },
      {
        sourceId: "block-deuteronomy",
        locator: "on Deuteronomy 27",
        supportedClaim:
          "The requirement for an altar of uncut stones and the ceremony Joshua 8 is presented as carrying out",
      },
      {
        sourceId: "zertal-ebal",
        supportedClaim:
          "A stone structure on Mount Ebal identified by its excavator as the altar of Joshua 8",
      },
      {
        sourceId: "kempinski-ebal",
        supportedClaim:
          "The same Mount Ebal structure interpreted instead as an Iron Age watchtower, which is why the study treats the identification as unsettled",
      },
      {
        sourceId: "finkelstein-shiloh",
        supportedClaim:
          "Shiloh's occupation history and its prominence as a central sanctuary site in Iron Age I",
      },
      {
        sourceId: "dotp-historical-books",
        locator: "s.v. herem",
        supportedClaim:
          "The vocabulary of devoting to destruction belongs to the sphere of what is consecrated and withdrawn from ordinary use, which is why Achan's theft is treated as sacrilege",
      },
    ],
    reformedPerspective: {
      body: `Reformed theology has read this material with two instincts. The first is that God's self-disclosure is always accommodated: Bavinck's treatment of revelation holds that God stoops to creaturely forms, so the ark, the trumpets and the holy ground are genuine revelation given in a form suited to the people receiving it, without being descriptions of what God is like in himself. The second is a strong doctrine of regulated worship, which the Westminster Confession states in terms of God prescribing the manner in which he may be approached. Calvin reads Joshua 5:15 as a lesson in reverence rather than in the sanctity of particular real estate, and Reformed commentators generally resist locating holiness in Canaanite geography.

That is the Reformed handling, presented as one Christian reading of the same texts. Eastern Orthodox theology takes the opposite emphasis and takes it seriously: holy places, holy objects and the transfiguration of matter are integral rather than concessive, and on that reading Joshua 5:15 is a datum about sanctified space, not merely about attitude. Anglican sacramental theology, and Roman Catholic theology of pilgrimage and shrine, stand nearer the Orthodox instinct than the Reformed one. The passage does not adjudicate between them, and readers should know which instinct they are bringing to it.`,
      citations: [
        {
          sourceId: "bavinck-dogmatics",
          supportedClaim:
            "A Reformed account of divine accommodation in revelation, applied to the anthropomorphic and cultic forms in which God is depicted acting",
        },
        {
          sourceId: "westminster-confession",
          locator: "chapter 21, of religious worship",
          supportedClaim:
            "The confessional Reformed position that the manner of approaching God is prescribed rather than left to human invention",
        },
        {
          sourceId: "calvin-joshua",
          locator: "on Joshua 5:13-15",
          supportedClaim:
            "Calvin treats the command to remove the sandals as directed at reverence rather than at the inherent sanctity of the location",
        },
        {
          sourceId: "vos-biblical-theology",
          supportedClaim:
            "Reformed biblical theology treats the tabernacle and ark as stages in the progressive disclosure of God's dwelling with his people",
        },
      ],
    },
    newTestament: {
      explicitReferences: [
        {
          ref: "Acts 7:45",
          note:
            "Stephen names Joshua and the tabernacle of the testimony together, and his whole argument concerns where God may be said to dwell. This is the New Testament's one explicit link between Joshua and the question of divine presence.",
        },
        {
          ref: "Hebrews 11:30",
          note:
            "Cites the fall of Jericho's walls after the seven-day encirclement. The verse credits faith and does not comment on the ark or the priests.",
        },
      ],
      laterTypology: [
        {
          claim: "The commander of the LORD's army in Joshua 5:13-15 identified as the pre-incarnate Christ",
          note:
            "A reading with a long history in Christian interpretation, encouraged by the acceptance of worship in 5:14. The text says only that he came as commander of the LORD's army. The identification is the church's inference and is contested among Christian interpreters.",
        },
        {
          claim: "The ark as a figure of Christ, or of the church carrying the gospel",
          note:
            "Later Christian interpretation. No New Testament passage applies the ark of Joshua 3-6 in this way.",
        },
      ],
    },
    relatedQuestionIds: ["achans-punishment", "destruction-language", "the-long-day"],
  },

  /* ================================================================ */
  /* 6. Judgment and mercy                                            */
  /* ================================================================ */
  {
    id: "judgment-and-mercy",
    title: "Judgment and mercy",
    hook:
      "The hardest theme in the book, and the one this study refuses to close. Joshua reports total destruction and individual rescue in the same chapters, and Christians have never agreed on what to do with it.",
    body: `Joshua states the judgment without softening. [[entity:jericho]] is devoted, and "they utterly destroyed all that was in the city, both man and woman, both young and old" (6:21). The southern summary says Joshua "left no one remaining, but he utterly destroyed all that breathed, as Yahweh, the God of Israel, commanded" (10:40). The northern summary adds a theological cause: "it was of Yahweh to harden their hearts, to come against Israel in battle, that he might utterly destroy them" (11:20). Five captured kings are executed and buried under stones (10:26-27). The judgment falls inside Israel too: [[entity:achan]] and his household are destroyed in the Valley of Achor (7:24-26), and Joshua 23:15-16 and 24:20 warn Israel that it stands under the same threat.

Mercy is in the same chapters, and not as an exception grudgingly noted. [[entity:rahab]] and her whole household are brought out of Jericho alive, and "she lives in the middle of Israel to this day" (6:22-25). [[entity:gibeonite-league]] survive by deception and then by oath, and are given a permanent function at the LORD's altar (9:26-27). [[entity:caleb]], who is called a Kenizzite, receives [[entity:hebron]]. And the destruction reports sit beside blunt admissions that the [[entity:canaanites]] remained: at [[entity:jerusalem]] (15:63), at [[entity:gezer]] (16:10), throughout the valley towns (17:12-13). The book that says "all that breathed" also says, repeatedly, that they are still there.

Reading this honestly means naming the options rather than choosing one quietly. Ancient conquest reports from Assyria, Egypt and Moab use the same hyperbolic totality; the Mesha Stele describes annihilation in the same idiom, so "left none remaining" is a genre convention. Some argue the commands targeted cultic and political structures and rulers rather than exhaustive killing. Some argue the point was removing an identity and its religious order from the land rather than punishing individual moral guilt. Some read the book primarily as figurative literature shaping Israel's identity. Some hold that the totalising battle reports are a stylised form within a book that elsewhere assumes the [[entity:canaanites]] are still present. Some argue the portrayal should be criticised rather than defended, and that Christians do the text no honour by explaining it into comfort. A recent survey lays the options side by side without declaring a winner, and that is the posture this study takes. Every one of these readings costs something: either some of the text's plain sense, or some of its historical claim, or some of the moral intuition it offends.

One thing is not open. Nothing in this book authorises anyone's violence now. Joshua has been used to justify conquest, dispossession and massacre, against indigenous peoples and in modern territorial conflicts, and those uses are misuses. Whatever the campaigns were, the text presents them as a bounded episode under a specific command to a specific people at a specific moment, and it offers no mechanism by which anyone later inherits that warrant. The book's own ethical trajectory runs the other way: it ends by warning Israel that it is liable to the same judgment it has just administered.`,
    chapterNumbers: [6, 7, 8, 9, 10, 11, 15, 16, 17, 23, 24],
    entityIds: [
      "joshua",
      "rahab",
      "achan",
      "caleb",
      "adoni-zedek",
      "jabin",
      "jericho",
      "ai",
      "hazor",
      "makkedah",
      "valley-of-achor",
      "gibeon",
      "gibeonite-league",
      "canaanites",
      "amorites",
      "anakim",
      "kenizzites",
      "hebron",
      "jerusalem",
      "gezer",
      "southern-coalition",
      "northern-coalition",
    ],
    scriptureRefs: [
      "Joshua 6:17-25",
      "Joshua 7:10-26",
      "Joshua 8:24-29",
      "Joshua 9:18-27",
      "Joshua 10:26-42",
      "Joshua 11:11-20",
      "Joshua 15:63",
      "Joshua 16:10",
      "Joshua 17:12-13",
      "Joshua 23:12-16",
      "Joshua 24:19-20",
      "Genesis 15:16",
      "Deuteronomy 7:1-6",
      "Deuteronomy 9:4-6",
      "Deuteronomy 20:10-18",
    ],
    citations: [
      {
        sourceId: "copan-moral-monster",
        supportedClaim:
          "A conservative defence reading the conquest commands as limited in scope, hyperbolically expressed, and directed at cultic and political structures rather than at exhaustive killing",
      },
      {
        sourceId: "wright-god-i-dont-understand",
        supportedClaim:
          "The conquest presented as a unique and bounded act of judgement within the biblical storyline, with an explicit refusal to make it comfortable",
      },
      {
        sourceId: "walton-lost-world-conquest",
        supportedClaim:
          "An argument that the herem concerns removing an identity and its cultic order from the land rather than punishing individual moral guilt, and that this differs from the hyperbole defence",
      },
      {
        sourceId: "trimm-destruction-canaanites",
        supportedClaim:
          "A survey of the main Christian approaches that states each option's strengths and costs without advocating one, which is the practice this study follows",
      },
      {
        sourceId: "earl-joshua-delusion",
        supportedClaim:
          "A reading of Joshua as primarily figurative, identity-forming literature rather than military reportage",
      },
      {
        sourceId: "seibert-disturbing",
        supportedClaim:
          "The position that some Old Testament portrayals of God should be criticised rather than defended, represented here in its own terms",
      },
      {
        sourceId: "wolterstorff-reading-joshua",
        supportedClaim:
          "A literary argument that the totalising battle reports are a stylised genre set within a book that elsewhere assumes the Canaanites remain",
      },
      {
        sourceId: "creach-joshua",
        supportedClaim:
          "Divine warfare in Joshua treated as an unresolved problem for Christian teaching and preaching",
      },
      {
        sourceId: "hawk-joshua",
        supportedClaim:
          "A literary reading that keeps the book's commands to destroy and its narratives of survival in the same field of view",
      },
      {
        sourceId: "younger-conquest-accounts",
        supportedClaim:
          "Assyrian, Egyptian, Hittite and Hebrew conquest reports share a rhetorical repertoire that includes hyperbolic totality",
      },
      {
        sourceId: "mesha-stele",
        supportedClaim:
          "A non-Israelite king describes his own campaigns in the same idiom of total devastation, including the term usually rendered 'devote to destruction'",
      },
      {
        sourceId: "mcconville-williams-joshua",
        supportedClaim:
          "A joint exegetical and systematic treatment that distinguishes what the text claims about warfare from how Christian theology has handled the claim",
      },
    ],
    reformedPerspective: {
      body: `Reformed treatments have generally approached the conquest through the doctrines of providence and judgment: God is the judge of nations, the Canaanite polities are presented as under a long-deferred sentence, and Israel is the instrument rather than the author of it. Calvin argues this way and does not flinch from its severity. Bavinck's account of accommodation offers a further move, distinguishing the form in which God is depicted acting from the fullness of what God is. Among recent Reformed voices, Nicholas Wolterstorff's literary argument is notable precisely because it comes from that tradition rather than from outside it.

This is one Christian reading, and it is not the only one. Anabaptist traditions read the conquest through a consistently Christocentric hermeneutic in which Jesus' teaching and example govern how earlier texts about violence may be used, and conclude that no Christian may draw a warrant for coercive force from Joshua under any circumstances. That tradition also tends to suspect that providential accounts of the conquest make God's justice too easy to invoke. Some Christian readers, further out, hold that the portrayal should be criticised rather than harmonised at all. This study represents these positions because the disagreement is real and because pretending Christians agree here would be false.`,
      citations: [
        {
          sourceId: "calvin-joshua",
          locator: "on Joshua 6 and 10",
          supportedClaim:
            "Calvin argues the destruction as an act of divine judgement executed through Israel, and does not soften its severity",
        },
        {
          sourceId: "bavinck-dogmatics",
          supportedClaim:
            "Reformed dogmatics on providence and on accommodation in revelation, applied to how God is depicted acting in warfare",
        },
        {
          sourceId: "wolterstorff-reading-joshua",
          supportedClaim:
            "A Reformed philosophical theologian arguing on literary grounds against reading the battle reports as exhaustive reportage",
        },
        {
          sourceId: "westminster-confession",
          locator: "chapter 5, of providence",
          supportedClaim:
            "The confessional Reformed statement of providence that underlies the tradition's handling of God's use of human agents in judgement",
        },
      ],
    },
    newTestament: {
      explicitReferences: [
        {
          ref: "Hebrews 11:30-31",
          note:
            "Jericho's walls and Rahab's survival appear together in the roll call of faith. The passage commends both the fall of the city and the woman who was spared, and passes no comment on the destruction of everyone else.",
        },
        {
          ref: "James 2:25",
          note:
            "Rahab is named as justified by works, for receiving the messengers. Again a rescue is cited from within a narrative of destruction, with no evaluation of the destruction itself.",
        },
        {
          ref: "Acts 13:19",
          note:
            "Paul says God 'destroyed seven nations in the land of Canaan' and gave Israel their land. This is the New Testament stating the conquest as judgement, in a sentence, without argument.",
        },
        {
          ref: "Matthew 1:5",
          note:
            "Rahab appears in the genealogy of Jesus. The New Testament's most consequential use of Joshua material is to place a spared Canaanite woman in the line of the Messiah.",
        },
      ],
      laterTypology: [
        {
          claim: "The Canaanites as figures of sin to be destroyed in the believer",
          note:
            "A long-standing allegorical reading, used from the patristic period onwards and prominent in later devotional literature. It is later Christian interpretation, and it has a specific hazard: it can make the killing of actual people feel like a metaphor, which is the opposite of taking the text seriously.",
        },
        {
          claim: "The conquest as a foreshadowing of final judgement",
          note:
            "Developed by Christian theologians rather than argued from Joshua in the New Testament. Held by many Christians, rejected by others, and in every case an inference.",
        },
      ],
    },
    relatedQuestionIds: [
      "conquest-violence",
      "destruction-language",
      "rahabs-deception",
      "achans-punishment",
    ],
  },

  /* ================================================================ */
  /* 7. Outsiders and belonging                                       */
  /* ================================================================ */
  {
    id: "outsiders-and-belonging",
    title: "Outsiders and belonging",
    hook:
      "The same book that commands Israel to leave nothing alive records a Canaanite woman living in Israel, a Kenizzite holding Hebron, four Canaanite towns serving at the altar, and foreigners standing in the covenant assembly.",
    body: `Joshua's treatment of outsiders is not a footnote to the conquest; it runs alongside it and is never harmonised with it.

[[entity:rahab]] is introduced as a prostitute in [[entity:jericho]] and given the book's clearest confession of faith: she recites what she has heard of the Red Sea and of [[entity:sihon]] and [[entity:og]], and concludes "Yahweh your God, he is God in heaven above, and on earth beneath" (2:9-11). She is exempted by name from the devoting of the city (6:17), brought out with her father, mother, brothers and all her relatives, and initially settled outside the camp (6:22-23). Then the text goes further than rescue: "she lives in the middle of Israel to this day" (6:25). The book does not explain how a woman of Jericho and her household came to be inside Israel permanently, and it does not apologise for it either.

[[entity:caleb]] is called "the Kenizzite" twice in the same chapter that awards him [[entity:hebron]] (14:6, 14). The [[entity:kenizzites]] are not one of Israel's tribes, and yet Caleb is reckoned within [[entity:tribe-judah]], speaks for Judah at [[entity:gilgal]], and receives the most storied town in the southern hill country. How that assimilation happened, the text does not say. We do not know. His daughter [[entity:achsah]] and [[entity:othniel]] son of [[entity:kenaz]] extend the same family line into the allotment narrative (15:16-19).

[[entity:gibeonite-league]] belong here too, and their case is the most uncomfortable. Four Canaanite towns secure a treaty by deliberate deception (9:3-15). When the fraud is exposed, the oath holds, and the settlement is permanent: they become woodcutters and water-carriers "for the congregation and for Yahweh's altar" (9:27). That is servile status, and it is also proximity to the sanctuary. Their standing persisted long enough to matter later in Israel's history. Belonging here is real, unequal, and secured by a promise Israel would rather not have made.

And in the covenant assembly at [[entity:mount-ebal]] and [[entity:mount-gerizim]], the text specifies who stood there: all Israel, elders, officers and judges, "the foreigner as well as the native", with the women and the little ones, and nothing was omitted from the reading (8:33-35). The Deuteronomic assembly had always included the resident foreigner. Israel as the book pictures it is not ethnically sealed.

Set that against the commands. The devoting of Jericho (6:21), the southern summary (10:40), the hardening in 11:20, and Joshua's closing warning against association and intermarriage with the nations that remain (23:7, 12-13). The same book holds both, and the tension is the content: not a problem to be solved by deciding which verses are serious, but the actual shape of the material.

One practical consequence, stated once and plainly: the herem texts are not a licence. They have been quoted to justify the removal of peoples in later history, and this study does not treat them as authorisation for anything anyone does now. What the book itself leaves on the record is a Canaanite woman in Israel's memory and, according to Matthew, in the Messiah's genealogy.`,
    chapterNumbers: [2, 6, 8, 9, 10, 11, 14, 15, 23],
    entityIds: [
      "rahab",
      "caleb",
      "achsah",
      "othniel",
      "kenaz",
      "joshua",
      "sihon",
      "og",
      "jericho",
      "hebron",
      "gilgal",
      "gibeon",
      "chephirah",
      "beeroth",
      "kiriath-jearim",
      "gibeonite-league",
      "kenizzites",
      "hivites",
      "canaanites",
      "tribe-judah",
      "mount-ebal",
      "mount-gerizim",
      "debir",
    ],
    scriptureRefs: [
      "Joshua 2:1-14",
      "Joshua 6:17-25",
      "Joshua 8:33-35",
      "Joshua 9:3-27",
      "Joshua 10:40",
      "Joshua 11:19-20",
      "Joshua 14:6-14",
      "Joshua 15:13-19",
      "Joshua 23:7-13",
      "Deuteronomy 29:10-13",
      "Deuteronomy 31:9-13",
      "Matthew 1:5",
      "2 Samuel 21:1-6",
    ],
    citations: [
      {
        sourceId: "bird-harlot-heroine",
        supportedClaim:
          "How Rahab's occupation functions within the narrative, and the social position such a woman would have occupied in her own city",
      },
      {
        sourceId: "hess-joshua",
        locator: "on Joshua 14:6 and 15:13-19",
        supportedClaim:
          "Caleb is designated a Kenizzite while being fully reckoned within Judah, and the text does not explain the assimilation",
      },
      {
        sourceId: "blenkinsopp-gibeon",
        supportedClaim:
          "The Gibeonites retain a distinct standing within Israel after the treaty, with a long afterlife in Israel's later history, and their treaty carried real legal force",
      },
      {
        sourceId: "hawk-joshua",
        supportedClaim:
          "A literary reading of Rahab and the Gibeonites as outsiders whom the narrative brings inside",
      },
      {
        sourceId: "mitchell-together-in-land",
        supportedClaim:
          "Joshua holds commands to destroy alongside narratives of coexistence and declines to resolve the tension",
      },
      {
        sourceId: "hillers-covenant",
        supportedClaim:
          "The binding character of a sworn oath, which is what secures the Gibeonites' place despite the deception",
      },
      {
        sourceId: "block-deuteronomy",
        locator: "on Deuteronomy 29 and 31",
        supportedClaim:
          "The Deuteronomic covenant assembly explicitly includes the resident foreigner, which is the background to Joshua 8:33-35",
      },
    ],
    reformedPerspective: {
      body: `Reformed theology has read these cases as evidence that membership in the covenant people was never a matter of descent. Rahab and Caleb are standard Reformed examples of inclusion by faith, and the Reformed tradition has generally been willing to hold two judgements about Rahab at once: Calvin praises her faith warmly and still calls her lie a fault, declining to make the ends justify it. On Gibeon, the confessional Reformed position on oaths makes the treaty binding even though it was obtained by fraud, which is why Reformed writers treat the Gibeonites' place in Israel as a matter of justice rather than of leniency.

That is the Reformed reading, and other Christian traditions frame the same material differently. Roman Catholic theology approaches belonging through the visible church and its sacramental boundaries, and reads cases like Rahab's within a wider account of how those outside the covenant community are nonetheless drawn into God's purposes. Wesleyan theology emphasises grace at work in Rahab prior to and independent of her joining Israel, which gives her confession in 2:9-11 a different weight. Jewish interpretation has its own substantial tradition on Rahab and on the Gibeonites, which this study touches only occasionally and does not attempt to represent adequately.`,
      citations: [
        {
          sourceId: "calvin-joshua",
          locator: "on Joshua 2",
          supportedClaim:
            "Calvin commends Rahab's faith while refusing to excuse her deception, holding both judgements together",
        },
        {
          sourceId: "westminster-confession",
          locator: "chapter 22, of lawful oaths and vows",
          supportedClaim:
            "The confessional Reformed position that a lawful oath binds, which makes the Gibeonite treaty a matter of obligation rather than mercy",
        },
        {
          sourceId: "robertson-christ-of-covenants",
          supportedClaim:
            "Reformed covenant theology holds that covenant membership was never determined by descent alone",
        },
      ],
    },
    newTestament: {
      explicitReferences: [
        {
          ref: "Hebrews 11:31",
          note:
            "Rahab named, and her survival attributed to faith: she 'didn't perish with those who were disobedient, having received the spies in peace'.",
        },
        {
          ref: "James 2:25",
          note:
            "Rahab named again, as an instance of works accompanying faith. James and Hebrews cite the same episode for different arguments.",
        },
        {
          ref: "Matthew 1:5",
          note:
            "Rahab appears in the genealogy of Jesus as the mother of Boaz. Matthew supplies the connection; Joshua does not, and a person's presence in this genealogy is a claim made by the New Testament, not by the book of Joshua.",
        },
      ],
      laterTypology: [
        {
          claim: "Rahab's scarlet cord as a figure of the blood of Christ",
          note:
            "An allegorical reading present in Christian writing from early centuries onwards. The New Testament never mentions the cord. This is later Christian interpretation.",
        },
        {
          claim: "Rahab and the Gibeonites as anticipations of the inclusion of the Gentiles",
          note:
            "A theological pattern drawn by later Christian readers. The New Testament does place Rahab in Jesus' genealogy, which is an explicit reference, but it does not argue from Rahab or Gibeon to Gentile inclusion, and the step from one to the other is the church's.",
        },
      ],
    },
    relatedQuestionIds: [
      "rahabs-deception",
      "gibeonite-oath",
      "conquest-violence",
      "destruction-language",
    ],
  },

  /* ================================================================ */
  /* 8. Memory and memorials                                          */
  /* ================================================================ */
  {
    id: "memory-and-memorials",
    title: "Memory and memorials",
    hook:
      "Joshua is full of stone: twelve stones from a riverbed, cairns over a thief and a king, a law carved on a mountainside, an altar that is only a witness, and a rock that has heard everything.",
    body: `Joshua assumes that a people forgets unless something in the landscape makes it ask questions. The pattern is set at the crossing. Twelve men take twelve stones from the riverbed and the stones are set up at [[entity:gilgal]] so that "when your children ask in the future, saying, 'What do you mean by these stones?'" there is an answer ready (4:6-7, 20-24). The answer supplied is not a battle report but a catechism: the LORD dried up the Jordan as he dried up the Red Sea, so that all the peoples of the earth may know his hand is mighty and that you may fear him. A second set of stones is left in the river itself (4:9), where no one can see them.

Not every memorial commemorates mercy. A great heap of stones is raised over [[entity:achan]] in the Valley of Achor, and the name of the place preserves the disaster (7:26). [[entity:ai]] is made a heap, with a cairn over its king at the city gate (8:28-29). Stones are laid over the mouth of the cave at [[entity:makkedah]] where five kings hid (10:27). The same technology marks rescue and ruin, and the book uses the identical formula for both: the heap "remains to this day".

Words are memorialised as well as places. At [[entity:mount-ebal]] Joshua writes a copy of the law on stones and reads all of it aloud to the whole assembly (8:32-35). The altar built by the Jordan in chapter 22 is explicitly not for sacrifice; it exists so that "your children may not tell our children in time to come, 'You have no portion in Yahweh'", and the eastern tribes name it "A Witness Between Us that Yahweh is God" (22:26-27, 34). At [[entity:shechem]] Joshua writes the covenant in the book of the law and sets up a stone that "has heard all Yahweh's words" and will stand as a witness against the people (24:26-27). The book ends with three burials, including the bones of [[entity:joseph]] finally interred in ground [[entity:jacob]] bought (24:29-33).

The recurring phrase "to this day" is worth watching, because it is not always flattering. It marks Rahab's descendants in Israel (6:25) and it marks the [[entity:jebusites]] still at [[entity:jerusalem]] (15:63), the [[entity:canaanites]] still at [[entity:gezer]] (16:10), and Geshur and Maacath still inside Israel (13:13). The same formula that preserves the triumphs preserves the failures. Whoever compiled this book was not editing them out.

One further observation belongs here and is uncomfortable. Almost none of these monuments can be found. [[entity:gilgal]], where the twelve stones stood, has no agreed location. [[entity:valley-of-achor]] is disputed. [[entity:makkedah]] is unlocated, and this study leaves it off the map rather than inventing a pin. The stones were set up so that children would ask; the stones are gone, and what survived is the text that explains them. That is a result the book did not plan for and one worth sitting with.`,
    chapterNumbers: [4, 5, 6, 7, 8, 10, 13, 15, 16, 22, 24],
    entityIds: [
      "joshua",
      "achan",
      "joseph",
      "jacob",
      "eleazar",
      "gilgal",
      "jordan-river",
      "jordan-crossing-region",
      "valley-of-achor",
      "ai",
      "makkedah",
      "mount-ebal",
      "shechem",
      "timnath-serah",
      "jebusites",
      "canaanites",
      "jerusalem",
      "gezer",
      "geshurites",
      "maacathites",
    ],
    scriptureRefs: [
      "Joshua 4:1-9",
      "Joshua 4:19-24",
      "Joshua 5:9",
      "Joshua 6:25",
      "Joshua 7:26",
      "Joshua 8:28-35",
      "Joshua 10:26-27",
      "Joshua 13:13",
      "Joshua 15:63",
      "Joshua 16:10",
      "Joshua 22:26-34",
      "Joshua 24:25-33",
      "Deuteronomy 6:4-9",
      "Psalms 78:1-8",
      "Genesis 50:24-25",
    ],
    citations: [
      {
        sourceId: "hess-joshua",
        locator: "on Joshua 4 and 24",
        supportedClaim:
          "The memorial stones are presented with an explicit teaching function, framed around a question children are expected to ask",
      },
      {
        sourceId: "howard-joshua",
        supportedClaim:
          "The 'to this day' formula recurs across the book and attaches to admissions of failure as well as to commemorations of success",
      },
      {
        sourceId: "hawk-joshua",
        supportedClaim:
          "A literary account of how the monuments and naming episodes function in the narrative's construction of Israel's memory",
      },
      {
        sourceId: "rainey-notley-sacred-bridge",
        supportedClaim:
          "Gilgal's location remains unidentified despite several proposals, and Makkedah is not located at all",
      },
      {
        sourceId: "anchor-bible-dictionary",
        locator: "s.v. Gilgal",
        supportedClaim:
          "No candidate site for Gilgal has achieved consensus, so the site of the twelve stones cannot be pointed to",
      },
      {
        sourceId: "havrelock-river-jordan",
        supportedClaim:
          "The Jordan functions in these texts as a remembered boundary that both divides and joins, which is what the altar of Joshua 22 is built to address",
      },
      {
        sourceId: "creach-joshua",
        supportedClaim:
          "Theological reflection on the catechetical shape of the memorial passages and their use in teaching",
      },
    ],
    reformedPerspective: {
      body: `Reformed theology has a category ready for these stones: a sign appointed by God to teach, confirm and seal what has been promised. The Westminster Confession's account of sacraments as signs and seals, and Calvin's insistence that a sign is nothing without the word that explains it, both fit Joshua 4 unusually well, because the passage supplies the explanation along with the stones. The Reformed tradition's corresponding emphasis is catechetical: memory is maintained by teaching children to ask and answer, which is precisely the mechanism Joshua 4:6-7 and 4:21-24 describe. Davis's exposition makes the point that the monument exists for the next generation rather than for the one that crossed.

That is one Christian reading. Roman Catholic and Eastern Orthodox theology give remembrance a fuller sacramental and liturgical density, in which memory is enacted rather than chiefly explained, and holy places, relics and pilgrimage carry weight that Reformed theology deliberately withholds from them. Anglican practice retains commemorative sites and a liturgical calendar in a way that sits between the two. Since Joshua's monuments are physical objects at identified locations, the traditions that take sacred place seriously can claim they are reading the text's own instincts, and Reformed readers should notice the force of that.`,
      citations: [
        {
          sourceId: "westminster-confession",
          locator: "chapter 27, of the sacraments",
          supportedClaim:
            "The confessional Reformed account of signs and seals appointed to represent and confirm a covenant promise",
        },
        {
          sourceId: "calvin-joshua",
          locator: "on Joshua 4",
          supportedClaim:
            "Calvin treats the stones as a sign that depends on the accompanying word for its meaning",
        },
        {
          sourceId: "davis-joshua",
          supportedClaim:
            "A Reformed exposition emphasising that the memorial is erected for the generation that did not witness the event",
        },
        {
          sourceId: "vos-biblical-theology",
          supportedClaim:
            "Reformed biblical theology treats commemorative signs as devices within the progressive disclosure of redemptive history",
        },
      ],
    },
    newTestament: {
      explicitReferences: [
        {
          ref: "Hebrews 11:30",
          note:
            "The one place where a remembered event from Joshua is itself recited in the New Testament: the walls of Jericho, recalled in a list of faith's acts.",
        },
        {
          ref: "Acts 7:45",
          note:
            "Stephen's speech works as Israel's own remembered history, and Joshua appears in it by name alongside the tabernacle carried into the land.",
        },
      ],
      laterTypology: [
        {
          claim: "The twelve stones as figures of the twelve apostles or of the church's foundations",
          note:
            "A later Christian reading, encouraged by the twelve foundations of Revelation 21. Neither Joshua nor any New Testament passage connects them.",
        },
        {
          claim: "The crossing memorial as a figure of baptism remembered",
          note:
            "Later Christian interpretation. The New Testament associates the Red Sea crossing with baptism in 1 Corinthians 10, not the Jordan crossing of Joshua 3-4, and the transfer from one to the other is the church's own.",
        },
      ],
    },
    relatedQuestionIds: ["achans-punishment", "the-long-day"],
  },

  /* ================================================================ */
  /* 9. Unity among the tribes                                        */
  /* ================================================================ */
  {
    id: "unity-among-tribes",
    title: "Unity among the tribes",
    hook:
      "Twelve stones, one lot, and one very nearly fatal misunderstanding about an altar. Joshua's unity is achieved and then almost immediately tested to the point of civil war.",
    body: `Unity in Joshua is a practical arrangement with visible obligations, not a sentiment. The book's first substantial instruction to a subgroup is a demand. [[entity:tribe-reuben]], [[entity:tribe-gad]] and [[entity:tribe-manasseh-east]] already have their land east of the Jordan, and they are told to leave families and livestock there and cross over armed "until Yahweh has given your brothers rest, as he has given you" (1:12-15). Possession for one part of Israel does not release it from the campaign of the others.

The obligation is discharged and acknowledged. In 22:1-6 Joshua commends the eastern tribes for keeping everything Moses commanded, tells them rest has now been given to their brothers, and sends them home with a blessing. Then the arrangement nearly collapses. They build "a great altar to look at" by the Jordan, the western tribes hear of it, and "the whole congregation of the children of Israel gathered themselves together at [[entity:shiloh]], to go up against them to war" (22:10-12). The offer [[entity:phinehas]] carries is revealing: if your land is unclean, come over to the land of the LORD's possession and take a holding among us (22:19). Even in a conciliatory speech, the east is treated as the lesser side of the river.

The eastern tribes' answer names the fear that drove them. They built the altar because "in time to come your children might speak to our children, saying, 'What have you to do with Yahweh, the God of Israel? For Yahweh has made the Jordan a border between us and you'" (22:24-25). The structure is a witness, not a place of sacrifice, and they name it accordingly (22:34). [[entity:jordan-river]] functions as a boundary and a link at once, which is exactly the kind of feature that generates this anxiety.

Other mechanisms bind the tribes together. Twelve men and twelve stones represent the whole at the crossing (4:1-8). The remaining seven allotments are assigned in one assembly at Shiloh, by survey and lot before the LORD, administered jointly by [[entity:eleazar]], Joshua and the tribal heads (18:1-10; 19:51). [[entity:tribe-levi]] receives no territory but forty-eight towns distributed through everyone else's land (21:1-42), which stitches the tribes together at the level of settlement rather than treaty. The cities of refuge work across tribal lines by design (20:7-9).

Unity also has costs the book does not hide. One man's theft makes the whole congregation liable, and the elders in chapter 22 cite [[entity:achan]] as the precedent: "That man didn't perish alone in his iniquity" (22:20; compare 7:1, 11). Corporate solidarity cuts in both directions. And the tribes bicker: the house of Joseph complains that one lot is not enough, and Joshua tells them to go and clear forest (17:14-18). [[entity:tribe-judah]] and the Joseph tribes receive their portions before the rest, and the other seven are rebuked for inertia (18:3).

The book's final unity is an assembly, not a structure: all the tribes gathered at [[entity:shechem]], agreeing to serve the LORD, with a stone as witness (24:1, 25-27). Nothing institutional holds them after Joshua dies. What holds is a shared covenant and a shared memory, which is a thinner thread than it looks and lasted, the book says, exactly one generation (24:31).`,
    chapterNumbers: [1, 4, 7, 14, 17, 18, 19, 20, 21, 22, 24],
    entityIds: [
      "joshua",
      "eleazar",
      "phinehas",
      "achan",
      "tribe-reuben",
      "tribe-gad",
      "tribe-manasseh-east",
      "tribe-manasseh-west",
      "tribe-ephraim",
      "tribe-judah",
      "tribe-levi",
      "jordan-river",
      "shiloh",
      "shechem",
      "region-gilead",
      "region-jordan-valley",
    ],
    scriptureRefs: [
      "Joshua 1:12-18",
      "Joshua 4:1-8",
      "Joshua 7:1-12",
      "Joshua 14:1-5",
      "Joshua 17:14-18",
      "Joshua 18:1-10",
      "Joshua 19:51",
      "Joshua 20:7-9",
      "Joshua 21:41-42",
      "Joshua 22:1-34",
      "Joshua 24:1",
      "Joshua 24:25-31",
      "Numbers 32:16-32",
      "Judges 21:1-6",
    ],
    citations: [
      {
        sourceId: "havrelock-river-jordan",
        supportedClaim:
          "The Jordan functions as a boundary that both separates and joins, which is the structural reason the eastern tribes' position is precarious",
      },
      {
        sourceId: "hess-joshua",
        locator: "on Joshua 22",
        supportedClaim:
          "The altar episode turns on the distinction between an altar for sacrifice and a structure erected as a witness",
      },
      {
        sourceId: "mitchell-together-in-land",
        supportedClaim:
          "A reading of Joshua attentive to how the book keeps the tribes together in one account despite the tensions it records",
      },
      {
        sourceId: "haran-levitical-cities",
        supportedClaim:
          "The Levitical towns are distributed through the other tribes' territory rather than forming a block, and the scholarly question of whether the lists describe a functioning system remains open",
      },
      {
        sourceId: "hawk-joshua",
        supportedClaim:
          "A literary reading of the altar crisis and of the eastern tribes' fear of being written out of Israel",
      },
      {
        sourceId: "milgrom-numbers",
        locator: "on Numbers 32 and 35",
        supportedClaim:
          "The Torah background to the eastern tribes' obligation to fight west of the Jordan and to the cross-tribal design of the cities of refuge",
      },
    ],
    reformedPerspective: {
      body: `Reformed and Presbyterian theology has read Joshua 22 as a case study in how a shared confession, rather than a shared jurisdiction, holds a people together: the crisis is resolved by inquiry, explanation and a joint judgement, which is close to how Reformed polity handles disputes through assemblies rather than through a single presiding authority. Calvin notes that the western tribes acted rightly in sending to ask before acting, and Reformed covenant theology treats the unity of Israel here as derived from one covenant rather than from tribal affinity. The corporate liability of Achan's case fits the same framework, uncomfortably: solidarity is not optional.

Offered as a Reformed reading, not the only one. Roman Catholic ecclesiology grounds unity in a visible institutional communion with a teaching authority, and from that standpoint the fragility of Joshua's arrangement, dissolving within a generation, is exactly the problem an institution exists to solve. Anabaptist traditions move the other way, locating unity in a voluntary gathered community, and read the eastern tribes' altar sympathetically as a local congregation defending its own standing against a centralising claim. Anglican theology holds a visible order alongside conciliar consultation. Joshua 22 does not settle the question; it shows what is at stake in it.`,
      citations: [
        {
          sourceId: "calvin-joshua",
          locator: "on Joshua 22",
          supportedClaim:
            "Calvin commends the western tribes for inquiring before acting and reads the resolution as a model of dealing with suspected apostasy",
        },
        {
          sourceId: "westminster-confession",
          locator: "chapter 25, of the church",
          supportedClaim:
            "The confessional Reformed account of the visible church's unity, which grounds it in profession rather than in a single institutional jurisdiction",
        },
        {
          sourceId: "robertson-christ-of-covenants",
          supportedClaim:
            "Reformed covenant theology derives the unity of the people of God from one covenant rather than from kinship or territory",
        },
      ],
    },
    newTestament: {
      explicitReferences: [
        {
          ref: "Acts 13:19",
          note:
            "The land given as an inheritance to the people as a whole. This is the closest the New Testament comes to Joshua's distribution material; it says nothing about the tribes' relations with one another, and Joshua 22 is never cited in the New Testament.",
        },
      ],
      laterTypology: [
        {
          claim: "The twelve tribes as a figure of the one church in its many congregations",
          note:
            "A later Christian reading. The New Testament uses twelve-tribe imagery in its own way, for instance in Revelation 7 and 21, but it does not draw that imagery from Joshua's allotment chapters.",
        },
        {
          claim: "Joshua 22 as a precedent for handling church disputes",
          note:
            "A later ecclesial application, used across several traditions. It is an analogy drawn by Christian readers, not a connection the New Testament makes.",
        },
      ],
    },
    relatedQuestionIds: ["achans-punishment", "incomplete-possession"],
  },

  /* ================================================================ */
  /* 10. Rest                                                         */
  /* ================================================================ */
  {
    id: "rest",
    title: "Rest",
    hook:
      "Joshua says the LORD gave Israel rest on every side. Hebrews reads the same word, names Joshua, and argues that he did not give them rest at all.",
    body: `Rest in Joshua has a definable content, and it is not interior peace. The first use sets the terms: the eastern tribes are reminded that "Yahweh your God gives you rest, and will give you this land", and they must fight on "until Yahweh has given your brothers rest... and they have also possessed the land" (1:13-15). Rest is the cessation of campaigning combined with settled possession by households. It is a military and agricultural condition.

The book then reports it arriving, in stages and in a recurring formula. After the northern campaign, "the land had rest from war" (11:23), and the same phrase closes Caleb's acquisition of [[entity:hebron]] (14:15). The strongest statement comes in the summary: "Yahweh gave them rest all around, according to all that he swore to their fathers. Not a man of all their enemies stood before them" (21:44). The eastern tribes are released home because "Yahweh your God has given rest to your brothers" (22:4). And Joshua's farewell is dated by it: "After many days, when Yahweh had given rest to Israel from their enemies all around" (23:1).

The book also qualifies it, in its own voice. The same aged Joshua who has been given rest is told that "there remains yet very much land to be possessed" (13:1). The tribes are rebuked for neglecting to go in and possess (18:3). And the nations that remain are about to become a snare (23:12-13). Rest in Joshua is real respite from organised war inside an unfinished settlement. It is not a final state, and the book never calls it one.

Hebrews takes the word somewhere else, and does so explicitly. Working from Psalm 95, Hebrews 3:7-19 applies "they will not enter into my rest" to the wilderness generation and its unbelief. Then it makes an argument from Scripture's own chronology: "For if Joshua had given them rest, he would not have spoken afterward of another day" (4:8). Because a later text still says "today", the rest Joshua provided cannot have been the rest in question, and "there remains therefore a Sabbath rest for the people of God" (4:9). Hebrews then ties that rest to God's own resting on the seventh day (4:4, 10).

Three things are worth being precise about. First, this is an explicit New Testament reference, not later Christian typology: Hebrews names Joshua and reasons about what he did and did not accomplish. Second, Hebrews is not accusing Joshua of failure. Its argument is that the rest he gave was of a different order, which is a claim about category rather than competence, and Joshua's own book agrees that rest and unfinished business coexisted. Third, a translation note matters here. The Greek name in Hebrews 4:8 is the same word as Jesus, and older English versions render it "Jesus"; the World English Bible and modern versions read "Joshua", which is what the argument requires.`,
    chapterNumbers: [1, 11, 13, 14, 18, 21, 22, 23],
    entityIds: [
      "joshua",
      "caleb",
      "moses",
      "hebron",
      "hazor",
      "tribe-reuben",
      "tribe-gad",
      "tribe-manasseh-east",
      "jordan-river",
      "region-hill-country-judah",
    ],
    scriptureRefs: [
      "Joshua 1:13-15",
      "Joshua 11:23",
      "Joshua 13:1",
      "Joshua 14:15",
      "Joshua 18:3",
      "Joshua 21:43-45",
      "Joshua 22:4",
      "Joshua 23:1",
      "Joshua 23:12-13",
      "Deuteronomy 12:8-11",
      "Psalms 95:7-11",
      "Hebrews 3:7-19",
      "Hebrews 4:1-11",
    ],
    citations: [
      {
        sourceId: "howard-joshua",
        supportedClaim:
          "The theology of rest and land in Joshua, including the recurrence of the rest formula at the close of campaign sections",
      },
      {
        sourceId: "hess-joshua",
        locator: "on Joshua 1:13-15, 11:23 and 21:44",
        supportedClaim:
          "Rest in Joshua denotes cessation from warfare together with settled possession, framed as the completion of what Moses promised the eastern tribes",
      },
      {
        sourceId: "woudstra-joshua",
        supportedClaim:
          "The rest statements are structural markers in the book rather than incidental phrases, and they coexist with its admissions of unfinished possession",
      },
      {
        sourceId: "mcconville-williams-joshua",
        supportedClaim:
          "The relationship between Joshua's rest and the argument of Hebrews 3-4 is a question of how the New Testament reads an Old Testament category, not of correcting the earlier text",
      },
      {
        sourceId: "block-deuteronomy",
        locator: "on Deuteronomy 12",
        supportedClaim:
          "The Deuteronomic expectation that the LORD would give Israel rest from its enemies in the place he chose, which Joshua reports as arriving",
      },
      {
        sourceId: "web-bible",
        locator: "Hebrews 4:8",
        supportedClaim:
          "The bundled translation renders the Greek name in Hebrews 4:8 as 'Joshua', where older English versions read 'Jesus', because the same Greek word serves both",
      },
    ],
    reformedPerspective: {
      body: `Reformed biblical theology treats Joshua's rest as a genuine instalment of something larger. Vos reads rest as the goal toward which creation and redemption both move, so the land's respite is a real anticipation rather than a metaphor, and Goldsworthy's account of typological fulfilment is useful precisely because it distinguishes this kind of correspondence from direct prediction: Joshua was not forecasting Hebrews 4. The Reformed confessional tradition also links this material to the Sabbath, holding the weekly day as a standing sign of the rest still ahead, and Davis's exposition presses the pastoral consequence that Israel's rest was enjoyed while the work remained unfinished.

This is the Reformed reading, and other Christian traditions handle the same texts differently. Dispensationalist theology locates an outstanding rest for national Israel in a future millennial kingdom, and reads Joshua's partial rest as evidence that the territorial promise still awaits literal fulfilment rather than as a type absorbed into a spiritual reality. Roman Catholic theology has tended to speak of the final rest in terms of the beatific vision, with the Lord's Day as its weekly anticipation, which overlaps the Reformed account without sharing its particular Sabbath construction. Hebrews 4:9 is common ground; what the Sabbath rest consists of is not.`,
      citations: [
        {
          sourceId: "vos-biblical-theology",
          supportedClaim:
            "Reformed biblical theology reads rest as an eschatological category toward which redemptive history moves, so Joshua's rest is an anticipation rather than a figure of speech",
        },
        {
          sourceId: "goldsworthy-according-to-plan",
          supportedClaim:
            "The distinction between typological fulfilment and direct prediction, which governs how Joshua's rest may be related to Hebrews 4",
        },
        {
          sourceId: "westminster-confession",
          locator: "chapter 21, of the Sabbath",
          supportedClaim:
            "The confessional Reformed treatment of the Sabbath as a standing observance, which shapes how this tradition reads the Sabbath rest of Hebrews 4:9",
        },
        {
          sourceId: "robertson-christ-of-covenants",
          supportedClaim:
            "Reformed covenant theology relates the land rest to a continuing covenant purpose rather than to a separate programme for Israel",
        },
        {
          sourceId: "davis-joshua",
          supportedClaim:
            "A Reformed exposition drawing out that Israel enjoyed rest while the work of possession remained incomplete",
        },
      ],
    },
    newTestament: {
      explicitReferences: [
        {
          ref: "Hebrews 4:8",
          note:
            "Names Joshua and argues that he did not give the people the rest in question, on the ground that Scripture afterwards still speaks of 'another day'. This is the New Testament's most direct engagement with a theme of the book of Joshua.",
        },
        {
          ref: "Hebrews 3:7-19",
          note:
            "Applies Psalm 95's 'they will not enter into my rest' to the generation that came out of Egypt, establishing the premise the argument in chapter 4 then uses against Joshua's rest.",
        },
        {
          ref: "Hebrews 4:1-11",
          note:
            "Concludes that 'there remains therefore a Sabbath rest for the people of God' and ties it to God's own rest on the seventh day. Explicit, sustained argument about Joshua's material, not an allusion.",
        },
      ],
      laterTypology: [
        {
          claim: "Canaan as heaven and the Jordan as death",
          note:
            "Later Christian interpretation, widespread in hymnody and devotional writing. Hebrews does not make this move: it contrasts Joshua's rest with a Sabbath rest, not with a place beyond death, and in Joshua the crossing leads into life in the land rather than out of it.",
        },
        {
          claim: "Joshua's rest as a figure of the believer's rest in Christ from striving",
          note:
            "A later devotional application. Hebrews 4:11 in fact urges diligence to enter the rest, which cuts against reading it as cessation from effort.",
        },
      ],
    },
    relatedQuestionIds: ["incomplete-possession", "conquest-violence"],
  },

  /* ================================================================ */
  /* 11. Obedience and failure                                        */
  /* ================================================================ */
  {
    id: "obedience-and-failure",
    title: "Obedience and failure",
    hook:
      "Joshua records a generation that did what it was told, and records its failures in the same sentences. The book's last covenant scene includes an instruction to get rid of the foreign gods currently in the camp.",
    body: `Joshua sets a standard early and keeps measuring against it. The commission ties success to a text: be careful to do according to all the law, do not turn from it to the right or the left, meditate on it day and night (1:7-8). The people accept the terms with an oath of their own (1:16-18). The book then issues its highest verdict on [[entity:joshua]] himself: "He left nothing undone of all that Yahweh commanded Moses" (11:15). The eastern tribes get a comparable commendation: "You have kept all that Moses the servant of Yahweh commanded you" (22:2). Obedience in this book is real and it is achievable.

The failures are not marginal, and they are reported by the same narrator. In chapter 7 the defeat at [[entity:ai]] is traced to devoted goods taken at [[entity:jericho]]: "Israel has sinned. Yes, they have even transgressed my covenant" (7:11). The offence is one man's, and the consequence is national before it is individual. In chapter 9 the leadership fails differently: they "sampled their provisions, and didn't ask counsel from Yahweh's mouth" (9:14), and Israel is bound by an oath it obtained through its own carelessness. Neither episode is a lapse from an otherwise clean record; they are the record.

Then there is the long, quiet failure of the allotment chapters. [[entity:tribe-judah]] "couldn't drive out" the [[entity:jebusites]] at [[entity:jerusalem]] (15:63). [[entity:tribe-ephraim]] "didn't drive out the Canaanites who lived in [[entity:gezer]]" and eventually put them to forced labour (16:10). [[entity:tribe-manasseh-west]] did the same in the valley towns (17:12-13). [[entity:geshurites]] and [[entity:maacathites]] remained inside Israel (13:13). Joshua's own diagnosis of the seven undivided tribes is not inability but inertia: "How long will you neglect to go in to possess the land, which Yahweh, the God of your fathers, has given you?" (18:3). The book distinguishes what Israel could not do from what it did not bother to do, and both appear.

The farewell chapters make failure the live risk rather than the past record. Joshua 23:6-8 urges courage to keep the law and to avoid the remaining nations' gods; 23:12-13 spells out the consequence of not doing so; 23:15-16 states that the words of judgment will come true on exactly the same terms as the words of blessing.

The covenant renewal at [[entity:shechem]] is where this theme lands hardest. Joshua tells the people, at the moment of their strongest commitment, "You can't serve Yahweh, for he is a holy God" (24:19). They insist twice. He makes them witnesses against themselves and sets up a stone to testify against them (24:22, 27). And in between, almost in passing, he says: "Now therefore put away the foreign gods which are among you" (24:23). They are among them. At the book's high point of covenant fidelity, the people renewing the covenant have other gods in the camp.

The closing verdict is correspondingly bounded: "Israel served Yahweh all the days of Joshua, and all the days of the elders who outlived Joshua" (24:31). Obedience here is genuine, corporate, and dated.`,
    chapterNumbers: [1, 7, 9, 11, 13, 15, 16, 17, 18, 22, 23, 24],
    entityIds: [
      "joshua",
      "achan",
      "moses",
      "ai",
      "jericho",
      "valley-of-achor",
      "gibeon",
      "gibeonite-league",
      "jerusalem",
      "gezer",
      "jebusites",
      "canaanites",
      "geshurites",
      "maacathites",
      "tribe-judah",
      "tribe-ephraim",
      "tribe-manasseh-west",
      "shechem",
      "tribe-reuben",
      "tribe-gad",
    ],
    scriptureRefs: [
      "Joshua 1:7-9",
      "Joshua 1:16-18",
      "Joshua 7:1-13",
      "Joshua 9:14-15",
      "Joshua 11:15",
      "Joshua 13:13",
      "Joshua 15:63",
      "Joshua 16:10",
      "Joshua 17:12-13",
      "Joshua 18:3",
      "Joshua 22:2-5",
      "Joshua 23:6-16",
      "Joshua 24:14-24",
      "Joshua 24:31",
      "Deuteronomy 30:15-20",
      "Judges 2:10-13",
    ],
    citations: [
      {
        sourceId: "hess-joshua",
        locator: "on Joshua 7, 9 and 24",
        supportedClaim:
          "The failures in Joshua are attributed to specific acts and omissions, including the leaders' failure to seek an oracle before treating with Gibeon",
      },
      {
        sourceId: "howard-joshua",
        supportedClaim:
          "The book's structure alternates commendation and failure rather than presenting an uninterrupted record of either",
      },
      {
        sourceId: "block-deuteronomy",
        locator: "on Deuteronomy 30",
        supportedClaim:
          "The Deuteronomic framework of blessing and curse on which Joshua 23:15-16 depends",
      },
      {
        sourceId: "hawk-joshua",
        supportedClaim:
          "A literary reading of Joshua 24 that takes the exchange about inability seriously rather than as rhetorical emphasis",
      },
      {
        sourceId: "creach-joshua",
        supportedClaim:
          "Theological treatment of the book's ending, including the instruction to put away foreign gods at the moment of covenant renewal",
      },
      {
        sourceId: "kitchen-reliability",
        supportedClaim:
          "The book's own admissions of unconquered territory must be read alongside its summaries of success rather than harmonised away",
      },
      {
        sourceId: "mcconville-williams-joshua",
        supportedClaim:
          "The tension between Israel's commended obedience and its recorded failures is a theological feature of the book rather than a compositional flaw",
      },
    ],
    reformedPerspective: {
      body: `Joshua 24:19 is a text the Reformed tradition has leaned on heavily. On the Reformed reading, "you can't serve Yahweh" is not rhetorical pressure but a statement about human inability, and the presence of foreign gods in the camp two verses later is taken as confirmation. Obedience in this framework is covenant response to grace already given, never a basis of claim: Calvin reads the commendations of Israel's obedience as genuine and derivative at once, and the Westminster tradition's account of the law's use for believers, and of the imperfection of even sincere obedience, is built from material like this. The bounded verdict of 24:31, obedience lasting exactly as long as the eyewitness generation, fits a tradition that does not expect moral progress to be self-sustaining.

That is the Reformed handling, one Christian reading among several. Wesleyan theology reads Joshua 24:14-24 as a real and open transaction, with grace enabling a response that may genuinely be given, and its holiness tradition is far more hopeful than the Reformed one about sustained obedience in this life while also holding that it can be forfeited. Roman Catholic theology frames the same passage in terms of cooperation with grace and the genuine merit of graced action, which gives the people's insistence in 24:21 a different character. Anglican theology has accommodated more than one of these emphases. The text records both the insistence and the gods in the camp; which of the two is doing the interpretive work depends on the tradition reading it.`,
      citations: [
        {
          sourceId: "calvin-joshua",
          locator: "on Joshua 24:19-24",
          supportedClaim:
            "Calvin reads Joshua's warning about inability as a real statement about the people rather than as rhetorical pressure",
        },
        {
          sourceId: "westminster-confession",
          locator: "chapters 16 and 19, of good works and of the law of God",
          supportedClaim:
            "The confessional Reformed account of the law's continuing use for believers and of the imperfection of even sincere obedience",
        },
        {
          sourceId: "davis-joshua",
          supportedClaim:
            "A Reformed exposition treating the presence of foreign gods at the covenant renewal as the book's own comment on Israel's commitment",
        },
        {
          sourceId: "bavinck-dogmatics",
          supportedClaim:
            "Reformed dogmatic treatment of the relation between grace and human willing that underlies this reading of Joshua 24",
        },
      ],
    },
    newTestament: {
      explicitReferences: [
        {
          ref: "Hebrews 3:16-19",
          note:
            "Names the generation that came out of Egypt and attributes their exclusion to disobedience and unbelief. It concerns the wilderness generation rather than Joshua's, but it is the New Testament reasoning explicitly about this stretch of Israel's history.",
        },
        {
          ref: "Hebrews 4:11",
          note:
            "Warns readers not to 'fall after the same example of disobedience', which makes the failures in this period a live analogy in the New Testament's own argument.",
        },
        {
          ref: "Hebrews 11:30-31",
          note:
            "Cites Jericho's fall and Rahab's rescue as acts of faith, which is the New Testament's one explicit commendation of obedience from the book of Joshua.",
        },
      ],
      laterTypology: [
        {
          claim: "Achan as a figure of secret sin in the church",
          note:
            "Later Christian interpretation, common in preaching. The New Testament never mentions Achan. Readers sometimes connect Acts 5 to the episode, but that connection is the interpreter's, not the text's.",
        },
        {
          claim: "The unconquered Canaanites as remaining sin in the believer",
          note:
            "A later allegorical reading with a long history in devotional writing. It is not derived from any New Testament use of Joshua, and it has the side effect of turning the book's political and territorial admissions into a psychology.",
        },
      ],
    },
    relatedQuestionIds: [
      "achans-punishment",
      "incomplete-possession",
      "gibeonite-oath",
      "rahabs-deception",
    ],
  },
];

/* ------------------------------------------------------------------ */
/* Lookup helpers                                                     */
/* ------------------------------------------------------------------ */

export const THEME_BY_ID: Record<string, Theme> = Object.fromEntries(
  THEMES.map((t) => [t.id, t])
);

export function getTheme(id: string): Theme | undefined {
  return THEME_BY_ID[id];
}
