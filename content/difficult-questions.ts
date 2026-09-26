/**
 * The seven difficult questions.
 *
 * These pages exist because the book of Joshua raises questions that a study
 * companion has no business answering quietly. The structure is fixed: what the
 * text says on its own terms, how the passage works as literature, what history
 * can and cannot establish, the major interpretations stated strongly enough
 * that someone holding one would recognise it, and what is still open after all
 * of it. The interpretations carry scholarly attributions (Calvin, Westminster,
 * named commentators) so a reader can trace where a position comes from, and the
 * study's own leanings are simply argued in the open like everyone else's.
 *
 * Every `sourceId` resolves to an entry in `content/sources.ts`. Where a claim
 * has no support in that registry it is either stated as what the biblical text
 * says, or dropped. Positions are attributed to a named source only where that
 * source holds them; otherwise the position is described without a name attached.
 *
 * Quotations of Joshua follow the bundled World English Bible unless the entry
 * says otherwise, because that is the text a reader has offline.
 */

import type { DifficultQuestion } from "./types";

export const DIFFICULT_QUESTIONS: DifficultQuestion[] = [
  /* ================================================================== */
  /* 1. The command to destroy the Canaanites                           */
  /* ================================================================== */
  {
    id: "conquest-violence",
    title: "The command to destroy the Canaanites",
    hook:
      "A command to destroy whole populations, attributed to God, carried out by an army. This is the hardest thing in the book, and no reading offered here makes it comfortable.",

    whatTheTextSays:
      "Joshua inherits a command already given. Deuteronomy 7:1-6 names seven peoples, says God will cast them out, tells Israel to devote them to destruction, forbids treaties and intermarriage with them, and gives as the immediate action the smashing of altars, pillars and images. Deuteronomy 20:10-18 sets two rules of war side by side: distant cities are to be offered terms of peace first, and if they surrender their population becomes a labour force, while the cities of the named peoples inside the land are to be treated differently, 'you shall save alive nothing that breathes'. The stated reason in 20:18 is religious rather than racial: 'that they not teach you to follow all their abominations'.\n\nJoshua then reports the command being carried out. Jericho: 'They utterly destroyed all that was in the city, both man and woman, both young and old' (Joshua 6:21). Ai: twelve thousand dead, the city burned and made a heap (8:24-28). The southern campaign: 'He left no one remaining, but he utterly destroyed all that breathed, as Yahweh, the God of Israel, commanded' (10:40). Hazor: 'There was no one left who breathed' (11:11).\n\nThe text gives reasons for this, and they are not flattering to Israel. Genesis 15:16 has the promise delayed for four generations because 'the iniquity of the Amorite is not yet full'. Deuteronomy 9:4-5 states twice that Israel is not receiving the land for its own righteousness but because of the wickedness of these nations and because of a promise sworn to Abraham, Isaac and Jacob. Joshua 24:12-13 goes further and takes the credit away from Israel's army altogether: God drove them out 'not with your sword, nor with your bow'. And the same standard is turned on Israel. Joshua 23:15-16 and 24:20 warn that if Israel behaves as the nations behaved, God will destroy Israel off the same land.\n\nThe text also reports outcomes that do not match the totality of its own summaries. Rahab's household lives (6:25). The Gibeonites live (9:26-27). The Anakim are destroyed at Hebron and Debir in 10:36-39 and again in 11:21, and then Caleb has to drive the sons of Anak out of Hebron in 15:14. Jerusalem's king is killed in chapter 10 and the Jebusites are still living there in 15:63. What the book claims in summary and what it narrates in detail are not the same picture.",

    literaryFunction:
      "Joshua 9 to 12 is a conquest account, a recognisable ancient genre with its own conventions, and the first thing to notice is how little of it is battle narrative. Two engagements are described at any length. The rest is a sequence of formulaic city reports, each built from the same handful of clauses in the same order, followed by a summary that gathers the whole region into one sentence, and then a register of defeated kings in chapter 12 that reads like an inventory.\n\nThat shape is not unique to Israel. Egyptian, Hittite and Assyrian royal accounts use the same repertoire: a deity gives the enemy into the king's hand, the king marches, the enemy is annihilated, nothing is left, the land is subdued in a single campaign. Younger's comparative study sets Joshua's syntax beside those texts and shows the overlap is structural rather than incidental, which means the totalising clauses are part of how such reports were written and must be read as such rather than as a casualty return.\n\nWithin the book, the conquest reports are framed by material that undercuts their finality. Chapter 2 gives a Canaanite woman a confession of faith that no Israelite in the book matches. Chapter 9 gives another Canaanite group a treaty. Chapters 13 to 19 assign land that is admitted to be unconquered. Chapter 23 warns about 'the remnant of these nations, even these who remain among you'. A reader who takes chapters 10 and 11 as the book's last word has to ignore the book's own last chapters.\n\nThere is also a theological shape to the killing. Israel does not gain by it: the plunder of Jericho goes to the sanctuary, not to soldiers (6:19), and taking any of it is the crime of chapter 7. Victory is repeatedly credited to God and not to Israel's competence, most sharply in 11:20 where it is God who hardens the kings' hearts so that they come out to fight. The narrative is arranged to make Israel a recipient rather than a conqueror, which is a claim about God, and it is also the point at which the moral difficulty becomes acute rather than resolved.",

    historicalQuestions:
      "What can be established is thinner than either side of the popular argument usually admits. A group called Israel was in Canaan by the end of the thirteenth century BC: the Merneptah stele names it, with a determinative usually read as marking a people rather than a settled state, and it tells us nothing else. Egyptian topographical lists and the fourteenth-century Amarna correspondence show the political landscape the book assumes, a patchwork of small city-states under Egyptian oversight, with rulers accusing each other of harbouring displaced people. Na'aman's work sets that landscape against Joshua's picture of kings and cities and finds real points of contact along with real mismatches.\n\nSite by site, the evidence is uneven and in places awkward. Jericho is securely identified at Tell es-Sultan, and Kenyon concluded that its great fortifications belong to the Middle Bronze Age with only slight Late Bronze occupation; Bienkowski's technical statement supports that, Wood argued for redating the destruction to align with a fifteenth-century conquest, and Bienkowski replied in the same magazine. That exchange has not been settled. Ai is worse: the traditional site of et-Tell has no Late Bronze occupation at all, which leaves no city to capture on either chronology, and the proposed alternative at Khirbet el-Maqatir is a minority view advanced by excavators committed to an early date. Gibeon is identified beyond reasonable doubt by inscribed jar handles, and its Late Bronze remains are thinner than a reader of chapter 10 would expect. Hazor is the one case where the text and the ground line up in outline: the city was as dominant as 11:10 says, roughly 80 hectares including the lower city, and its Late Bronze palace was violently burned. Who burned it is disputed by two of the site's own excavators in print, which is the most useful fact in this paragraph, because it shows that a destruction layer does not carry a signature.\n\nTwo methodological points matter more than any individual site. First, the book itself only claims that one city was burned, 'as for the cities that stood on their mounds, Israel burned none of them, except Hazor only' (11:13), so for most places the text does not predict a destruction layer and its absence is not a disconfirmation. Second, absence of evidence and evidence of absence are different claims, and the highland survey data that Finkelstein assembled, showing a wave of new small settlements in Iron Age I, supports a gradual emergence at least as readily as a single campaign; Dever argues for indigenous origins with an outside element. Dates in this entry are deliberately absent except where a named reconstruction requires them, because the whole argument shifts depending on whether you place these events in the fifteenth or the thirteenth century, and that remains unresolved.",

    interpretations: [
      {
        label: "Judgement on specific wickedness, after long forbearance",
        proponents:
          "Paul Copan; Kenneth A. Kitchen; Iain Provan, V. Philips Long and Tremper Longman III; Christopher J. H. Wright",
        summary:
          "The texts give a reason for the conquest and it is judicial. Canaanite society is described as having reached a point of corruption that God had waited four generations to act on (Genesis 15:16), and the land is said to be taken from these nations for their wickedness and not for Israel's virtue (Deuteronomy 9:4-5). On this reading the conquest is a court sentence carried out through an army, bounded in time and place, on a named set of peoples, and Israel is explicitly put under the same sentence if it behaves the same way (Joshua 23:15-16). It is a unique episode inside a particular storyline, not a principle of holy war that can be lifted out and reapplied. Most who hold this reading also hold that the targets were fortified administrative and military centres rather than civilian settlements, and that the destruction language is partly conventional.",
        strengths:
          "It is the reason the texts themselves give, stated repeatedly and in more than one book, rather than a reason supplied by later readers. It accounts for the delay built into the promise, for the warning that Israel faces the same judgement, and for the refusal in Deuteronomy 9 to let Israel treat the land as a reward for merit. It also keeps the episode bounded, which blocks the move from Joshua to any later campaign.",
        difficulties:
          "Judgement executed by human soldiers on households including children is still judgement executed on children, and calling it judicial does not make the children combatants. The evidence for the specific wickedness in question comes almost entirely from the texts that command the destruction, which is circular unless corroborated. The claim that the targeted sites were essentially military installations rests on contested archaeology and sits badly beside 6:21, which specifies women, the young and the old. Collective punishment remains the mechanism however the reason is framed.",
        citations: [
          {
            sourceId: "copan-moral-monster",
            supportedClaim:
              "A conservative defence reading the conquest commands as limited, hyperbolically expressed, and aimed at cultic structures rather than exhaustive killing",
          },
          {
            sourceId: "kitchen-reliability",
            supportedClaim:
              "The campaigns are described as raids and disabling strikes rather than as occupation, and the book's summaries must be read against its own admissions of unconquered land",
          },
          {
            sourceId: "provan-long-longman",
            supportedClaim:
              "Method: how historians weigh biblical testimony alongside material evidence, and why 'no evidence' is not 'evidence against'",
          },
          {
            sourceId: "wright-god-i-dont-understand",
            supportedClaim:
              "The conquest is presented as a unique and bounded act of judgement within the biblical storyline, and should not be made comfortable",
          },
        ],
      },
      {
        label: "Conventional hyperbole in an ancient conquest account",
        proponents:
          "K. Lawson Younger Jr.; John H. Walton and J. Harvey Walton; Richard S. Hess",
        summary:
          "The totalising language is a genre convention, not a description of what happened to every person. Ancient conquest accounts from Egypt, Hatti and Assyria routinely claim that a king annihilated a people, left no survivor and subdued a whole land in one campaign, and then the same texts or their successors deal with those same peoples and cities again. Joshua's clauses belong to that repertoire. The decisive evidence is internal: the book says the Anakim were wiped out and then names three cities where they remained (11:21-22), reports Hebron and Debir destroyed and then has Caleb and Othniel take them (15:13-17), and closes with a long list of peoples still in the land. Read as its own literature, the book is not claiming exhaustive extermination.",
        strengths:
          "It explains the pattern of internal contradiction as rhetoric rather than as error or as a clumsy join between sources, and it is anchored in a large comparative body of texts rather than in a theological need. It takes the book's own qualifications seriously instead of treating them as embarrassments. It also fits what the text says about method: the action prescribed in Deuteronomy 7:5 is the destruction of altars and images.",
        difficulties:
          "Hyperbole in the reports does not soften the commands, and Deuteronomy 20:16-17 reads as instruction rather than as a victory monument. Conceding that the numbers and totality are conventional still leaves cities taken, kings executed and populations displaced, so the ethical problem is reduced in scale rather than dissolved. There is also a risk of circularity: the convention is identified partly from the same texts it is then used to interpret. And if 'utterly destroy' is conventional, the interpreter has to say what the underlying practice was, which the comparative material does not settle.",
        citations: [
          {
            sourceId: "younger-conquest-accounts",
            supportedClaim:
              "Assyrian, Egyptian, Hittite and Hebrew conquest reports share a rhetorical repertoire that includes hyperbolic totality, so 'all' and 'left none remaining' are conventional",
          },
          {
            sourceId: "walton-lost-world-conquest",
            supportedClaim:
              "The conquest texts are read as concerned with removing an identity and a cultic order from the land rather than with exhaustive killing",
          },
          {
            sourceId: "hess-joshua",
            supportedClaim:
              "Philological and comparative arguments that the book's reports and lists follow second-millennium conventions",
          },
        ],
      },
      {
        label: "Dispossession and the removal of a cult, not extermination",
        proponents:
          "Charlie Trimm surveys this option; Christopher J. H. Wright on land ethics",
        summary:
          "The governing verbs in the promises are verbs of driving out, not of killing. God will 'cast out many nations' (Deuteronomy 7:1), will 'thrust them out from before you' (Joshua 23:5), and drives them out by means other than Israel's sword (Joshua 24:12). Deuteronomy 7:5 specifies the required action as demolishing altars, pillars, poles and images. On this reading the objective is the end of a religious and political order in the land, achieved mainly by displacement and by the dismantling of sanctuaries, with fighting where the order defended itself. Populations that stayed were absorbed, which is exactly what the book reports in 16:10 and 17:12-13, where Canaanites remain and are put to forced labour.",
        strengths:
          "It follows the vocabulary of the promises rather than the vocabulary of the battle reports, and it matches the book's outcome, where the peoples named are still present at the end and are described as neighbours, labourers and a religious danger. It makes sense of the stated motive, which is consistently the threat of Canaanite worship rather than the existence of Canaanite people. It also explains why the book can treat Rahab and Gibeon as absorbable without any sense of scandal at their survival.",
        difficulties:
          "It has to do something with the clauses that are not about displacement at all. 'You shall save alive nothing that breathes' (Deuteronomy 20:16) and 'both man and woman, both young and old' (Joshua 6:21) resist being folded into dispossession, and a reading that thins them out is no longer reading the whole text. Displacement of whole populations is itself a grave harm, so the reading relocates the ethical problem rather than removing it. Critics on both sides note that it can become a way of having the text's history without its hardest sentences.",
        citations: [
          {
            sourceId: "trimm-destruction-canaanites",
            supportedClaim:
              "A survey of the main Christian approaches, including the reading that the commands concern dispossession and the removal of Canaanite religion, presented with each option's costs",
          },
          {
            sourceId: "wright-ot-ethics",
            supportedClaim:
              "The land laws and land ethics of the Old Testament resist being turned into a template for territorial claims",
          },
        ],
      },
      {
        label: "Later theological construction rather than a report of events",
        proponents:
          "Israel Finkelstein and Neil Asher Silberman; Nadav Na'aman; Douglas S. Earl",
        summary:
          "The conquest as Joshua describes it did not happen, and the narrative is doing something other than reporting. The archaeology of the highlands shows a population emerging largely from within Canaan, the key sites do not cooperate, and the Amarna letters show a Canaan with no Israel in it. What the book gives us is a later community's account of its own origins, shaped by the concerns of the period in which it was written and put into the form of a conquest because that was the available idiom for saying that the land is God's gift. Earl's version keeps the text as scripture while reading it as figurative and identity-forming literature: Jericho and Ai function the way parables function, and the herem is a symbol of exclusive allegiance rather than an instruction about warfare.",
        strengths:
          "It takes the material evidence seriously without special pleading, and it explains features that a straightforward historical reading finds awkward, including the absence of a city at Ai and the mismatch between the book's summaries and its own detail. Earl's figurative reading also has purchase on the text itself, since the book plainly uses Jericho and Achan as paradigms rather than as ordinary episodes. It removes any basis for treating the narrative as a precedent for actual war.",
        difficulties:
          "The Merneptah stele puts Israel in Canaan earlier than some versions of this reading comfortably allow, and the book's toponymy and boundary descriptions look old rather than invented, which is the core of the counter-argument from comparative philology. 'No evidence' is not the same as 'evidence against', and several of the negative results are arguments from silence at sites with limited excavation. Most importantly for this page, the reading moves the moral problem rather than solving it: a text that commands the destruction of populations is still a text that commands it, and a community that wrote such a command into its founding story has to be reckoned with. Critics also ask whether the figurative reading concedes too much of the historical claim the text appears to make.",
        citations: [
          {
            sourceId: "finkelstein-silberman-unearthed",
            supportedClaim:
              "A statement of the sceptical position, that the conquest narratives are later compositions rather than reports of a military campaign",
          },
          {
            sourceId: "naaman-conquest",
            supportedClaim:
              "The relationship between the Amarna-period political landscape and the picture of Canaan in the book of Joshua",
          },
          {
            sourceId: "earl-joshua-delusion",
            supportedClaim:
              "Joshua read primarily as figurative, identity-forming literature rather than as military reportage",
          },
        ],
      },
      {
        label: "The difficulty held open, and not resolved",
        proponents:
          "Eric A. Seibert; Jerome F. D. Creach; L. Daniel Hawk; Nicholas Wolterstorff on the literary character of the reports",
        summary:
          "Every resolution costs something, and this position declines to pay. Some who hold it argue that the portrayals of God commanding destruction should be named as disturbing and critiqued rather than defended, and that the honest Christian response is to refuse them as descriptions of God's character while still reading them as scripture. Others hold the tension without that verdict: the book itself sets commands to destroy beside narratives of Canaanites living, marrying and working among Israel, and it never reconciles them, so the interpreter should not either. Literary arguments that the battle reports are stylised are accepted as far as they go, and then the command is still there. This is the reading that says the discomfort is data.",
        strengths:
          "It is honest about the residue every other reading leaves, and it refuses to let an explanation function as a permission. It matches the book's own unwillingness to tidy itself. Pastorally it is the only position that can say to a reader who is horrified that the horror is a reasonable response to what is on the page, which is worth something the other readings cannot supply.",
        difficulties:
          "In its strongest form, critiquing the portrayal rather than defending it, it requires a criterion outside the text for deciding which portrayals of God are trustworthy, and it is not obvious where that criterion comes from or how it avoids simply reflecting the reader. It sits uneasily with any doctrine of scripture that treats these books as authoritative in what they affirm. In its weaker form it can become a way of avoiding the interpretive work, and readers who need an answer are left without one.",
        citations: [
          {
            sourceId: "seibert-disturbing",
            supportedClaim:
              "The argument that some Old Testament portrayals of God should be critiqued rather than defended",
          },
          {
            sourceId: "creach-joshua",
            supportedClaim:
              "Divine warfare in Joshua treated as a standing problem for Christian teaching and preaching",
          },
          {
            sourceId: "hawk-joshua",
            supportedClaim:
              "A literary reading that lets the book's tensions stand rather than resolving them",
          },
          {
            sourceId: "wolterstorff-reading-joshua",
            supportedClaim:
              "The totalising battle reports are a stylised genre set within a book that elsewhere assumes the Canaanites remain",
          },
        ],
      },
    ],

    unresolved:
      "Nothing here closes. The five readings are not five paths to the same destination; they disagree about what kind of text this is, and choosing among them means choosing a view of history, of genre and of scripture at the same time.\n\nSpecifically open: whether the commands in Deuteronomy 7 and 20 were understood as instructions to be executed literally, and if so whether they ever were; whether hyperbole in the reports tells us anything about the intent of the commands; why a God who is said to drive out nations by other means is also said to require an army to do it; how judgement on a society can be executed on its children without becoming something other than judgement; and whether a reading that removes the events removes the problem or simply relocates it into the character of the community that wrote the text.\n\nWe also do not know the date, and that is not a footnote. The material evidence at Jericho, Ai, Hazor and Lachish is read differently depending on which chronology is assumed, and no chronology commands consensus. Anyone who tells you the archaeology settles this question, in either direction, is telling you less than they know.\n\nWhat the book does not leave open is its own claim that Israel stands under the same judgement as the nations it displaced. Whatever else is unresolved, the text refuses to make Israel morally special, and any reading that turns the conquest into a charter of ethnic privilege is contradicted by chapter 23 of the book it is quoting.",

    chapterNumbers: [6, 8, 10, 11, 12],
    themeIds: ["judgment-and-mercy", "holiness-and-presence", "covenant-faithfulness"],
    scriptureRefs: [
      "Deuteronomy 7:1-6",
      "Deuteronomy 9:4-5",
      "Deuteronomy 20:10-18",
      "Genesis 15:16",
      "Joshua 6:21",
      "Joshua 8:24-28",
      "Joshua 10:40",
      "Joshua 11:11-23",
      "Joshua 15:63",
      "Joshua 23:12-16",
      "Joshua 24:12-13",
    ],
    citations: [
      {
        sourceId: "web-bible",
        supportedClaim:
          "Quotations of Joshua and Deuteronomy in this entry follow the bundled World English Bible",
      },
      {
        sourceId: "merneptah-stele",
        supportedClaim:
          "A group called Israel was present in Canaan by the late thirteenth century BC, and the inscription establishes nothing more specific than that",
      },
      {
        sourceId: "moran-amarna",
        supportedClaim:
          "Fourteenth-century Canaan was a patchwork of small city-states under Egyptian oversight, which is the political world the book assumes",
      },
      {
        sourceId: "kenyon-digging-up-jericho",
        supportedClaim:
          "Jericho's great fortifications were dated to the Middle Bronze Age, with slight Late Bronze occupation",
      },
      {
        sourceId: "bienkowski-jericho-lb",
        supportedClaim: "The technical case that Jericho was largely unoccupied in the Late Bronze Age",
      },
      {
        sourceId: "wood-jericho-bar",
        supportedClaim:
          "The argument for redating Jericho's destruction to align with a fifteenth-century conquest",
      },
      {
        sourceId: "bienkowski-bar-reply",
        supportedClaim: "The published reply rejecting that redating",
      },
      {
        sourceId: "callaway-ai",
        supportedClaim:
          "Excavation at et-Tell found no Late Bronze Age occupation, which is the central difficulty for identifying it with Ai",
      },
      {
        sourceId: "stripling-maqatir",
        supportedClaim: "Khirbet el-Maqatir proposed as an alternative site for Ai, as a minority view",
      },
      {
        sourceId: "pritchard-gibeon",
        supportedClaim:
          "Inscribed jar handles secure the identification of Gibeon, and its Late Bronze remains are thinner than expected",
      },
      {
        sourceId: "ben-tor-hazor",
        supportedClaim: "Hazor's scale and the violent burning of its Late Bronze palace",
      },
      {
        sourceId: "ben-tor-zuckerman-hazor",
        supportedClaim:
          "Two excavators of Hazor reach opposing conclusions about who destroyed it, so a destruction layer does not identify its author",
      },
      {
        sourceId: "finkelstein-settlement",
        supportedClaim:
          "Survey evidence for a wave of new highland settlement in Iron Age I, read as emergence from within Canaan",
      },
      {
        sourceId: "dever-early-israelites",
        supportedClaim:
          "A middle position: indigenous origins with some outside element, against both a large-scale conquest and a purely literary Israel",
      },
      {
        sourceId: "younger-conquest-accounts",
        supportedClaim:
          "The literary shape of Joshua 9 to 12 as a conquest account with formulaic city reports and regional summaries",
      },
      {
        sourceId: "mcconville-williams-joshua",
        supportedClaim:
          "The distinction between what the text claims about warfare and how Christian theology has handled the claim",
      },
    ],
  },

  /* ================================================================== */
  /* 2. What the destruction language actually means                    */
  /* ================================================================== */
  {
    id: "destruction-language",
    title: "What the destruction language actually means",
    hook:
      "'Utterly destroy', 'left none breathing', 'he left no one remaining'. These are specific Hebrew formulas with a specific history, and the book uses them about cities whose survivors it names a few chapters later.",

    whatTheTextSays:
      "Three expressions carry most of the weight. The first is the verb behind 'utterly destroy', from the root *hrm*, whose noun form is *herem*. Its range is wider than killing. In Leviticus 27:28-29 a *herem* is something irrevocably handed over to God, which cannot be sold or redeemed because it has become most holy. In Numbers 18:14 devoted things go to the priests. Joshua 6:19 keeps that sense in view at Jericho: the metal goods are 'holy to Yahweh' and go into the treasury while everything else is destroyed. The Arabic cognate *haram*, used of a forbidden thing and of a sacred precinct, preserves the same underlying idea of something removed from ordinary use. Applied to a city in war, the word means the city is not spoil to be enjoyed but a thing surrendered entirely to God, and in Joshua that surrender is carried out by destruction.\n\nThe second is the formula 'he left no one remaining', in Hebrew a set phrase built on the word for a survivor, and its companion 'all that breathed'. Joshua 10:28-40 runs the formula through six cities in almost identical wording. The third is 'with the edge of the sword', literally 'to the mouth of the sword', the standard idiom for a city taken by force.\n\nAnd then the same book reports survivors nearly everywhere. Rahab's household lives in the middle of Israel (6:25). Gibeon and three other towns live and serve at the sanctuary (9:26-27). 'There were none of the Anakim left in the land of the children of Israel. Only in Gaza, in Gath, and in Ashdod, did some remain' (11:22), in a verse immediately after the claim that Joshua destroyed them utterly. Hebron and Debir are destroyed with no one remaining in 10:36-39, and are taken again by Caleb and Othniel in 15:13-17. Judah 'couldn't drive out' the Jebusites at Jerusalem, who 'live with the children of Judah at Jerusalem to this day' (15:63). Gezer's Canaanites remain (16:10). Manasseh's Canaanites remain and are put to forced labour (17:12-13). This is the same book, arranged in this order, without any sign that its editors felt a problem.",

    literaryFunction:
      "Comparison with other ancient royal texts is how you learn what these sentences were for. Two inscriptions make the point cleanly.\n\nThe Merneptah stele, from the end of the thirteenth century BC, includes the line usually translated 'Israel is laid waste, his seed is not'. Whatever happened in that campaign, Israel plainly continued, and the same inscription is now the earliest external evidence that Israel existed. The claim of annihilation and the survival of the annihilated are in the same document.\n\nThe Mesha stele, from ninth-century Moab, is closer still. Mesha describes taking Israelite territory, and for Nebo he uses the same verbal root that Joshua uses, devoting the place and its people to his god Ashtar-Chemosh. Elsewhere in the inscription he declares that Israel has perished for ever. Israel outlasted him by more than a century. A non-Israelite king, writing in his own name about his own wars, uses the vocabulary of total destruction about a people who were demonstrably still there, which tells us that the vocabulary itself does not mean what a modern reader hears.\n\nThe pattern runs through the wider corpus. Egyptian and Assyrian royal accounts claim annihilated enemies and depopulated lands, and then campaign against the same cities again in a later year. Younger's study of Assyrian, Egyptian, Hittite and Hebrew conquest reports shows that they share a rhetorical repertoire in which totality belongs to the convention; nobody was counting.\n\nThe strongest evidence, though, is internal, and it costs nothing in comparative scholarship to see it. Joshua says none remained and then names who remained, in adjacent chapters, repeatedly. Either the book is incoherent, or its summary statements and its detailed narratives were never meant to be read as competing claims about the same fact. The book's own arrangement supports the second option, since the admissions sit in plain view: in the allotment chapters, in Joshua's farewell, and in the mouth of God himself at 13:1.",

    historicalQuestions:
      "The philology is reasonably secure and the history is not. That the root *hrm* covers irrevocable dedication as well as destruction in war is established from the Hebrew Bible, from the Mesha inscription and from the cognate languages. What the practice looked like on the ground is a different question, and the material record is largely silent about it, because the difference between a city abandoned, a city taken and resettled, and a city whose population was killed is often invisible in a tell.\n\nThe places where the text does predict something visible are few. Joshua 11:13 states that Israel burned none of the cities on their mounds except Hazor, and Ai was burned according to 8:28, and Jericho according to 6:24. That is a short list, and for everything else the absence of a burn layer is not evidence against the text, because the text did not claim one. Hazor does have a violent Late Bronze destruction, and who caused it is argued in print by two of its own excavators. Lachish, another named target, has a Late Bronze destruction sequence that does not line up straightforwardly with Joshua 10 on either chronology.\n\nTwo things cannot currently be established. We cannot show from material evidence that any particular city's population was killed as the text describes. We also cannot show that it was not, because the evidence is not of a kind that would tell us. The comparative texts change how we read the language; they do not tell us what happened in any specific case.",

    interpretations: [
      {
        label: "Conventional totality: the formulas are genre, not arithmetic",
        proponents:
          "K. Lawson Younger Jr.; Kenneth A. Kitchen; Nicholas Wolterstorff; Richard S. Hess",
        summary:
          "'Left none remaining' and 'all that breathed' are fixed elements of ancient conquest reporting whose function is to declare a decisive outcome. The Egyptian and Moabite parallels show that the idiom was used of populations that continued to exist, and the internal pattern in Joshua shows the same thing about Joshua. On this reading the book is reporting military successes at fortified centres, disabling strikes rather than occupations, in a register that conventionally rounds victory up to totality.",
        strengths:
          "It is supported by external texts that no one suspects of apologetic motive, above all a Moabite king's inscription using the same root about Israel. It makes the book's internal pattern intelligible rather than embarrassing. And it explains why the writers saw no need to reconcile 10:40 with 15:63: in their idiom, there was nothing to reconcile.",
        difficulties:
          "Recognising the convention does not tell us what practice underlay it, so the reading leaves the historical question open while appearing to answer it. It is also easier to demonstrate for victory reports than for commands, and Deuteronomy 20:16-17 is a command. Used carelessly, 'it is hyperbole' becomes a way of declining to look at 6:21, which specifies women, the young and the old and is not a summary formula.",
        citations: [
          {
            sourceId: "younger-conquest-accounts",
            supportedClaim:
              "Conquest reports across Assyrian, Egyptian, Hittite and Hebrew texts share a repertoire in which hyperbolic totality is conventional",
          },
          {
            sourceId: "kitchen-reliability",
            supportedClaim:
              "Joshua describes raids and disabling strikes rather than occupation, and its summaries must be read against its own admissions",
          },
          {
            sourceId: "wolterstorff-reading-joshua",
            supportedClaim:
              "The battle reports are a stylised genre set within a book that elsewhere assumes the Canaanites remain",
          },
          {
            sourceId: "hess-joshua",
            supportedClaim:
              "The book's reports and lists follow recognisable second-millennium conventions",
          },
        ],
      },
      {
        label: "Herem as transfer to God, not as a body count",
        proponents: "John H. Walton and J. Harvey Walton",
        summary:
          "The centre of gravity of *herem* is consecration rather than killing. To devote a city is to renounce every claim on it, which is why taking its goods is sacrilege in chapter 7 and why the metal goes to the sanctuary in chapter 6. On this reading the conquest texts are about removing an identity and a cultic order from the land, not about punishing individual moral guilt or maximising casualties, and the totalising language marks the completeness of the renunciation rather than the extent of the killing.",
        strengths:
          "It is grounded in the word's use outside war, in Leviticus 27 and Numbers 18, rather than in war reports alone. It explains Achan's crime, which is otherwise oddly disproportionate: he did not spare a life, he took devoted property. It also explains why Deuteronomy 7:5 specifies altars and images as the action to be taken, and why Rahab and Gibeon can be absorbed without scandal once they renounce the old order.",
        difficulties:
          "The war texts do describe killing, and a reading that makes killing incidental to the concept has to explain why the narrative dwells on it. It also parts company with the judgement reading, since it denies that individual Canaanite guilt is the point, and the disagreement between those two defences is substantive rather than cosmetic. Critics ask whether 'removing an identity' is meaningfully less severe than what the text says plainly.",
        citations: [
          {
            sourceId: "walton-lost-world-conquest",
            supportedClaim:
              "The herem reframed as concerned with identity and cultic order rather than with individual moral guilt, in explicit disagreement with other conservative treatments",
          },
          {
            sourceId: "dotp-historical-books",
            supportedClaim: "Article-length treatment of herem, conquest and the composition of Joshua",
          },
        ],
      },
      {
        label: "The language is meant literally, and the survivors are Israel's failure",
        proponents: "John Calvin (Reformed, sixteenth century); the older exegetical tradition",
        summary:
          "This is the reading most of the church held for most of its history, and it should be stated without softening. The commands meant what they say; the reports describe real and complete destruction where they claim it; and the peoples who remain are there because Israel stopped short, which is precisely what Joshua 23:12-13 and Judges 2:1-3 treat as culpable. Calvin reads the destruction at Jericho as real, defends it as God's judgement including on children, and warns the reader against setting himself up as judge over God. On this reading 11:15, 'He left nothing undone of all that Yahweh commanded Moses', is a real verdict on Joshua's generation, and the later remnant is a later problem.",
        strengths:
          "It takes the sentences at face value and does not need a comparative apparatus to do so. It gives a coherent account of the book's structure: obedience in Joshua's lifetime, decline afterwards, which is exactly how Judges 2 narrates the sequel. It also refuses the temptation to make the text say something easier than it says, and it is honest that the difficulty lies in the events and not merely in the rhetoric.",
        difficulties:
          "It cannot easily absorb 11:21-22, where the Anakim are destroyed and then some remain in the same breath, or the retaking of Hebron and Debir four chapters after they were destroyed with none remaining. It has to treat the adjacent admissions as chronological rather than contradictory, which the text does not signal. Theologically, Calvin's defence of the killing of children is the point at which many readers, including many in his own tradition, find they cannot follow him.",
        citations: [
          {
            sourceId: "calvin-joshua",
            supportedClaim:
              "A Reformed reading that treats the destruction as real and defends it as divine judgement, warning the reader against judging God",
            locator: "on Joshua 6 and 11",
          },
          {
            sourceId: "woudstra-joshua",
            supportedClaim:
              "A Reformed exegetical treatment of the conquest reports within the covenantal structure of the book",
          },
        ],
      },
      {
        label: "Different layers, different voices",
        proponents: "Robert G. Boling and G. Ernest Wright; Trent C. Butler; Nadav Na'aman",
        summary:
          "The totalising summaries and the admissions of survival come from different hands. On this reading the framework statements in 10:40-42, 11:16-23 and 21:43-45 belong to an editorial layer with a strong theological programme, while the local traditions underneath, and the material now in Judges 1, preserve a patchier memory of gradual settlement, failed sieges and accommodation. The contradiction is not rhetoric but stratigraphy: two perspectives preserved in one scroll, with the Greek and Hebrew textual traditions of Joshua differing in ways that show the book was still moving late.",
        strengths:
          "It accounts for the sharpness of the contradictions without requiring that ancient writers were comfortable with them, and it is supported by the textual evidence that Joshua circulated in more than one form. It takes Judges 1 seriously as an independent witness rather than as a supplement. It also explains the formulaic uniformity of the city reports as the signature of a single editorial hand.",
        difficulties:
          "Source divisions are reconstructions, and different scholars draw them differently, so the explanation is less controlled than it looks. The comparative evidence from Egypt and Moab shows that single authors did in fact combine totalising claims with the continued existence of the destroyed, which weakens the argument that only editing can explain the pattern. And it answers a literary question while leaving the ethical one untouched.",
        citations: [
          {
            sourceId: "boling-wright-joshua",
            supportedClaim:
              "A reconstruction of the book's compositional history in which framework summaries and local traditions belong to different layers",
          },
          {
            sourceId: "butler-joshua",
            supportedClaim:
              "Text-critical and form-critical analysis, including the relationship between the Hebrew and Greek traditions of Joshua",
          },
          {
            sourceId: "naaman-conquest",
            supportedClaim:
              "The conquest account in Joshua compared with what is known of the political landscape of Canaan",
          },
        ],
      },
    ],

    unresolved:
      "The linguistic point is strong and its consequences are limited. It is genuinely established that 'utterly destroy' and 'left none remaining' functioned in the ancient world as declarations of decisive victory, used of populations that continued; the Mesha stele settles that on its own. What is not established is what happened at any particular place, or what the commands in Deuteronomy intended, or how the first readers of Joshua understood the gap between 10:40 and 15:63.\n\nOpen questions worth keeping in view: whether a conventional idiom in victory reports tells us anything about the intent of a legal command; whether *herem* in Joshua is nearer to consecration or nearer to annihilation, since the word carries both and the book uses it in both directions within a single chapter; whether the book's contradictions are rhetoric, editing, or a chronology we cannot see; and what practice, if any, the vocabulary describes.\n\nWe do not know how many people died at Jericho, Ai, Hazor or Lachish. No reading on this page can tell you, and any that claims to is overreaching.",

    chapterNumbers: [6, 8, 10, 11, 12],
    themeIds: ["judgment-and-mercy", "holiness-and-presence", "outsiders-and-belonging"],
    scriptureRefs: [
      "Joshua 6:17-21",
      "Joshua 8:24-28",
      "Joshua 10:28-40",
      "Joshua 11:11-23",
      "Joshua 15:63",
      "Joshua 16:10",
      "Joshua 17:12-13",
      "Deuteronomy 20:16-18",
      "Judges 1:27-33",
    ],
    citations: [
      {
        sourceId: "web-bible",
        supportedClaim:
          "Quotations in this entry follow the bundled World English Bible, whose 'utterly destroy' and 'left no one remaining' render the Hebrew formulas discussed here",
      },
      {
        sourceId: "dotp-historical-books",
        supportedClaim:
          "The semantic range of herem, from irrevocable dedication to destruction in war",
      },
      {
        sourceId: "merneptah-stele",
        supportedClaim:
          "An Egyptian royal inscription declares Israel laid waste and its seed no more, while being the earliest external evidence that Israel existed",
      },
      {
        sourceId: "mesha-stele",
        supportedClaim:
          "A Moabite king uses the same root as Joshua for devoting a captured place to his god, and declares Israel perished for ever, of a people who continued for more than a century after him",
      },
      {
        sourceId: "cos",
        supportedClaim:
          "Standard translations of the Merneptah and Mesha inscriptions, at 2.6 and 2.23",
      },
      {
        sourceId: "anet",
        supportedClaim:
          "Widely available translations of the Egyptian and Mesopotamian royal texts that use the same conventions of total devastation",
      },
      {
        sourceId: "younger-conquest-accounts",
        supportedClaim:
          "Conquest reports from several ancient cultures share a rhetorical repertoire including hyperbolic totality",
      },
      {
        sourceId: "thutmose-iii-lists",
        supportedClaim:
          "Egyptian royal inscriptions name towns in Canaan and illustrate the administrative and rhetorical conventions of such texts",
      },
      {
        sourceId: "ben-tor-zuckerman-hazor",
        supportedClaim:
          "Hazor's Late Bronze destruction is well documented and its agent is disputed by the site's own excavators",
      },
      {
        sourceId: "ussishkin-lachish",
        supportedClaim:
          "Lachish's Late Bronze destruction sequence does not line up straightforwardly with the account in Joshua 10",
      },
      {
        sourceId: "mitchell-together-in-land",
        supportedClaim:
          "Joshua holds together commands to destroy and narratives of coexistence without resolving the tension",
      },
    ],
  },

  /* ================================================================== */
  /* 3. Achan's household                                               */
  /* ================================================================== */
  {
    id: "achans-punishment",
    title: "Achan's household",
    hook:
      "One man takes plunder that was devoted to God. His sons and daughters are brought out to the valley with him. The text never says they knew.",

    whatTheTextSays:
      "Achan takes a robe, silver and gold from Jericho, which had been devoted to God, and hides them in the floor of his tent (Joshua 7:21). The narrative opens by attributing the act to Israel as a whole: 'the children of Israel committed a trespass in the devoted things' (7:1), and God's words to Joshua are 'Israel has sinned' (7:11). Thirty-six men die at Ai before anyone knows why (7:5).\n\nThe sentence is announced before the culprit is identified: 'he who is taken with the devoted thing shall be burned with fire, he and all that he has' (7:15). The lot narrows from tribe to clan to household to man. Achan confesses fully and without excuse (7:20-21). Then 7:24 lists who is taken up to the Valley of Achor: Achan, the silver, the robe, the gold, 'his sons, his daughters, his cattle, his donkeys, his sheep, his tent, and all that he had'. Verse 25 moves between a singular object and a plural one, so that the stoning is of him and the burning is of them; translations differ over whether the plural takes in the family or refers back to the goods and animals just listed. A heap of stones marks the place 'to this day', and the valley's name is explained by the verb Joshua uses, 'Why have you troubled us? Yahweh will trouble you today'.\n\nThree things the text does not say are worth naming. It does not say the family knew. It does not say they consented, or handled the goods, or lied. And it does not comment on the justice of what happens to them. The only later reflection inside the book is Joshua 22:20, where the point drawn from the episode runs in the opposite direction from individual guilt: 'That man didn't perish alone in his iniquity.' Elsewhere the Torah states the contrary principle plainly, that fathers are not to be put to death for their children nor children for their fathers (Deuteronomy 24:16), and the prophets press it further (Ezekiel 18:20). The Bible contains both.",

    literaryFunction:
      "Chapter 7 is built as the exact negative of chapter 6. At Jericho a foreigner who should have died lives because she trusted the reports about Yahweh; at Ai an Israelite who should have lived dies because he took what belonged to Yahweh. Rahab hides spies and is saved; Achan hides plunder and is destroyed. The two chapters are a matched pair, and the book has arranged them so that the reader cannot draw a line between insiders and outsiders where the reader expects it.\n\nThe chapter also uses the word *herem* in two directions at once, and this is the key to its logic rather than a curiosity. The goods are *herem*, devoted to God and therefore lethal to touch. By taking them into his tent Achan makes his household *herem* too: 'they have become devoted for destruction' in 7:12 is said of Israel as a whole while the goods remain among them. What follows is not presented as punishment calibrated to guilt but as the removal of a contamination from the camp, which is why the goods, the animals and the tent go to the valley along with the people. A modern reader looks for a trial; the text is running a purification.\n\nThe narrative is also shaped as an explanation of two visible things: a name, the Valley of Achor, and a heap of stones said to remain 'to this day'. Stories with that shape are often called etiological, meaning they account for a feature that the audience can still see. Noticing the form does not settle whether the event happened; it does tell us the story was told, at least in part, to explain something the audience already knew, which affects how much weight its details can carry.\n\nOne more literary point. This is the only military failure in the book, and the book will not let it be a tactical failure. Joshua's prayer in 7:7-9 is a complaint that God has brought Israel over the Jordan to destroy them, and God's answer is not reassurance but 'Get up! Israel has sinned.' The chapter exists to say that Israel's vulnerability is never about the enemy.",

    historicalQuestions:
      "Very little here is open to external check, and the entry should say so rather than pad. The Valley of Achor's location is not securely known; candidates include the Buqei'ah depression in the Judean wilderness and a wadi nearer Jericho, and the study treats it as disputed. No heap of stones can be identified with the one the text says remained. A named individual in a household register is not the kind of thing archaeology recovers.\n\nWhat comparative material does establish is that the household, not the individual, was the basic legal and economic unit across the ancient Near East and in Israel's own law and narrative. Property, guilt, blessing and liability attached to the *bet av*, the father's house, and the highland village society of the period was organised around exactly such extended households. That does not justify the execution; it explains why the text can treat the household as the thing being dealt with and expect no objection from its first readers, and why the objection we feel is partly a difference in the unit of moral accounting.\n\nWhat cannot be established: whether the family knew, whether they died, what the legal procedure behind 7:16-18 looked like in practice, and whether Deuteronomy 24:16 was understood as applying to sacral offences of this kind or only to ordinary capital cases. The last of these is a real exegetical question and not a way of avoiding the problem.",

    interpretations: [
      {
        label: "Sacral contamination: the household is the unit being purged",
        proponents:
          "Jacob Milgrom on Torah law and communal liability; the standard reference treatments of herem",
        summary:
          "The category at work is holiness and its violation, not criminal justice. Devoted property belongs exclusively to God; bringing it inside a tent transfers the devoted status to everything in that tent, people included. This is why the sentence is announced before the offender is known, why animals and fabric go to the valley alongside sons and daughters, and why the narrative says Israel itself 'has become devoted for destruction' while the goods remain in the camp. The logic is consistent and it is not about apportioning blame.",
        strengths:
          "It reads the chapter in the categories the chapter uses, and it explains the details that a justice-based reading finds arbitrary, above all the inclusion of livestock and property. It also fits the wider Torah pattern in which sanctuary offences endanger the whole community regardless of intent. And it makes sense of why Joshua is told to act at once rather than to investigate.",
        difficulties:
          "Explaining a logic is not the same as vindicating it, and a coherent system can still be monstrous in its effects. The reading also depends on inferring that the family was inside the contaminated space, which the text implies but does not state. It does not engage Deuteronomy 24:16, and it cannot say why the same logic is not applied to the thirty-six men who died at Ai, who were not contaminated by anything.",
        citations: [
          {
            sourceId: "milgrom-numbers",
            supportedClaim:
              "Torah background on communal liability and on the household as the unit in Israel's sacral law and narrative",
          },
          {
            sourceId: "dotp-historical-books",
            supportedClaim: "The herem as a category of irrevocable devotion whose violation endangers the community",
          },
        ],
      },
      {
        label: "Covenant solidarity",
        proponents: "Marten H. Woudstra; O. Palmer Robertson",
        summary:
          "This reading takes representation as a structural feature of the covenant. Israel is addressed and treated as a single body under a single covenant, so one man's breach really is Israel's breach, which is what 7:1 and 7:11 say. The head of a household stands for that household in the same way, and the book expects the reader to reason in that direction: Joshua 22:20 uses Achan to warn that a single act reaches everyone. On this account the chapter applies how the covenant works, the same logic that elsewhere means blessing comes to a household through its head.",
        strengths:
          "It takes seriously the text's own framing, which begins and ends with corporate language, and it is the only reading that makes Joshua 22:20 the interpretive key rather than an awkward aside. It is internally consistent across blessing and judgement rather than invoking solidarity only when the outcome is bad. It also connects to a wider biblical pattern of representation that Christian theology relies on elsewhere.",
        difficulties:
          "Representation that delivers death to people whose participation is unstated is the hardest possible case for the principle, and appealing to the structure can look like changing the subject. The Torah's own restriction in Deuteronomy 24:16 has to be handled, and the usual move, distinguishing sacral from civil offences, is an inference rather than a statement of the text. Within the Reformed tradition itself, not everyone accepts that federal representation licenses this outcome.",
        citations: [
          {
            sourceId: "woudstra-joshua",
            supportedClaim:
              "A Reformed exegetical reading of Joshua in which covenant solidarity governs the narrative of Achan",
          },
          {
            sourceId: "robertson-christ-of-covenants",
            supportedClaim:
              "Covenant structure and representation as a theological principle in Reformed thought",
          },
        ],
      },
      {
        label: "Status rather than proportional desert",
        proponents: "John H. Walton and J. Harvey Walton",
        summary:
          "On this framework the whole conquest, and this episode within it, is about the identity and order of the land rather than about retribution proportioned to individual moral guilt. Achan's act is not measured against a scale of wickedness, and his family are not being judged for wickedness either. They fall under the same status he acquired when he took the devoted thing. Read this way, the question 'what did the children do to deserve it?' is a question the text is not answering, because desert is not the category in play.",
        strengths:
          "It has the merit of refusing a defence the text does not offer, and it explains the disproportion between a stolen robe and a family's destruction better than any reading that tries to make the punishment fit a crime. It is consistent with the same authors' account of the herem elsewhere, so it is not invented for this chapter.",
        difficulties:
          "Saying that desert is not the category does not make the outcome less terrible, and some readers will find it makes it worse, since it removes even the pretence of a reason. It also has to explain why the narrative bothers with Achan's confession and with the language of trespass and disgrace, which sound very much like guilt. And it depends on a general framework that is itself contested.",
        citations: [
          {
            sourceId: "walton-lost-world-conquest",
            supportedClaim:
              "The herem framed as concerned with identity and order rather than with retribution proportioned to individual guilt",
          },
        ],
      },
      {
        label: "Morally intolerable, and to be said so",
        proponents: "Eric A. Seibert; Jerome F. D. Creach",
        summary:
          "The execution of children for their father's theft is not a problem of interpretation but a problem in the text, and the honest response is to name it rather than to find a framework that dissolves it. On the strongest version of this reading, a portrayal of God who requires this should be critiqued rather than defended, and the Bible's own later voices, Deuteronomy 24:16 and Ezekiel 18:20, give internal warrant for refusing it. A more restrained version holds that the narrative reports what Israel did and understood itself to be commanded to do, without the reader being obliged to endorse the theology that shaped the report.",
        strengths:
          "It is the reading that does not require the reader to pretend, and it takes the canon's internal disagreement seriously instead of harmonising it. It has the pastoral advantage of not asking a reader to call this just before they have understood it. It also refuses the move where explaining a logic slides into approving it.",
        difficulties:
          "It needs a criterion for deciding which biblical portrayals of God to trust, and any such criterion has to answer the charge that it is the reader's own moral sense wearing a theological hat. It sits uneasily with doctrines of scripture that take these texts as authoritative in what they affirm. And on its own it leaves the chapter with nothing to say except that it is wrong, which is not obviously more honest than sitting with it unresolved.",
        citations: [
          {
            sourceId: "seibert-disturbing",
            supportedClaim:
              "The argument that troubling Old Testament portrayals of God should be critiqued rather than defended",
          },
          {
            sourceId: "creach-joshua",
            supportedClaim:
              "The episode treated as a standing difficulty for Christian teaching and preaching",
          },
        ],
      },
      {
        label: "A shaped narrative with a job to do",
        proponents: "Robert G. Boling and G. Ernest Wright; Trent C. Butler; L. Daniel Hawk",
        summary:
          "The chapter is a literary composition serving the book's argument, and its details should be weighed as literature. It explains a name and a cairn, it supplies the one defeat that proves Israel's strength is not military, and it is placed to mirror Rahab. The textual history of the chapter shows movement, and the grammar of 7:25 is unstable in a way that suggests the tradition itself was uneasy about who was executed. On this reading, asking whether the daughters knew is asking a question of a character in a paradigm rather than of a person in a record.",
        strengths:
          "It accounts for the chapter's symmetry with chapter 6, its etiological markers, and the awkwardness of 7:24-25 without needing either to justify or to condemn an execution. It also explains why the text says so little about the family: they are not the story's subject.",
        difficulties:
          "Treating the family as a literary function is uncomfortably close to doing to them what the narrative already does, and if the text is scripture, the paradigm it teaches is itself the thing that needs examining. Compositional reconstruction is also hypothesis; the grammatical instability of 7:25 is real, but what produced it is not recoverable.",
        citations: [
          {
            sourceId: "boling-wright-joshua",
            supportedClaim:
              "Compositional analysis including the etiological features of the Achor narrative",
          },
          {
            sourceId: "butler-joshua",
            supportedClaim: "Text-critical notes on Joshua 7, including the difficulties in verse 25",
          },
          {
            sourceId: "hawk-joshua",
            supportedClaim:
              "The literary pairing of Achan with Rahab and the characterisation that pairing produces",
          },
        ],
      },
    ],

    unresolved:
      "We do not know whether Achan's sons and daughters were executed. The Hebrew of 7:25 will support either reading, and the announcement in 7:15 ('he and all that he has') and the list in 7:24 pull towards the harsher one without stating it. Anyone who tells you the text clearly says the children died, or clearly says they did not, is smoothing a genuine ambiguity.\n\nWe also do not know whether they knew. Commentators frequently infer knowledge from the fact that plunder was buried in the family's own tent floor, and the inference is reasonable, but it is an inference and the text declines to make it. Building a moral defence on it means building on something the narrator chose not to say.\n\nDeeper than either: the Bible contains both the principle that guilt is not inherited and narratives in which a household perishes with its head, and it does not tell us how to hold them together. Joshua 22:20 draws the lesson in one direction; Deuteronomy 24:16 and Ezekiel 18:20 point in another. Each reading above manages that tension by giving priority to one side. None of them dissolves it.\n\nAnd the smaller question that will not go away: thirty-six men died at Ai before anyone knew there was a sin in the camp. Whatever account is given of Achan's household, the chapter has already killed people who were not told why.",

    chapterNumbers: [7, 22],
    themeIds: ["holiness-and-presence", "obedience-and-failure", "judgment-and-mercy"],
    scriptureRefs: [
      "Joshua 6:17-19",
      "Joshua 7:1",
      "Joshua 7:10-15",
      "Joshua 7:20-26",
      "Joshua 22:20",
      "Deuteronomy 24:16",
      "Ezekiel 18:20",
    ],
    citations: [
      {
        sourceId: "web-bible",
        supportedClaim:
          "Quotations follow the bundled World English Bible, whose rendering of Joshua 7:25 preserves the shift between singular and plural objects",
      },
      {
        sourceId: "butler-joshua",
        supportedClaim:
          "Text-critical discussion of Joshua 7 and of the grammatical difficulty in verse 25",
      },
      {
        sourceId: "stager-forging-identity",
        supportedClaim:
          "Highland village society of the period was organised around extended households, which were the basic economic and legal units",
      },
      {
        sourceId: "milgrom-numbers",
        supportedClaim:
          "Comparative Torah background for corporate liability in sacral offences",
      },
      {
        sourceId: "hawk-joshua",
        supportedClaim:
          "The deliberate pairing of Achan's story with Rahab's in the book's structure",
      },
      {
        sourceId: "dotp-historical-books",
        supportedClaim: "Reference treatment of herem and of the Achor narrative",
      },
    ],
  },

  /* ================================================================== */
  /* 4. Rahab's lie                                                     */
  /* ================================================================== */
  {
    id: "rahabs-deception",
    title: "Rahab's lie",
    hook:
      "She hides two spies and tells the king's men they have gone. Scripture praises her faith and her action, twice, and never mentions the lie.",

    whatTheTextSays:
      "The sequence is short and precise. The spies enter Rahab's house in Jericho (Joshua 2:1). The king is informed and sends to her. She has already taken the men up to the roof and hidden them under drying flax (2:6). To the king's messengers she says the men came to her but she did not know where they were from, that they left at dusk, and that she does not know where they went, and she advises a quick pursuit (2:4-5). Every clause of that is false, and it is told to the lawful authority of her own city about men who have come to destroy it.\n\nThe narrative then gives her the longest speech of faith in the book: Yahweh has given Israel the land, the inhabitants' hearts have melted, she knows what happened at the Red Sea and to Sihon and Og, and 'Yahweh your God, he is God in heaven above, and on earth beneath' (2:9-11). She asks for a sworn oath for her father's household, and receives one with conditions attached (2:12-20). In chapter 6 the oath is honoured: her household is brought out before the city burns, and the reason given is her action, 'because she hid the messengers' (6:25).\n\nThe text passes no judgement on the deception, in either direction. It is not condemned and it is not praised. Two New Testament passages take up her story and do the same thing. Hebrews 11:31 lists her among those who acted by faith: 'By faith, Rahab the prostitute, didn't perish with those who were disobedient, having received the spies in peace.' James 2:25 uses her as an example of works completing faith: she 'received the messengers, and sent them out another way'. James refers to the concealment and the sending out, which is the deception's purpose, and still says nothing about the false statement itself. Matthew 1:5 places a Rahab in the genealogy of Jesus, traditionally identified with her.",

    literaryFunction:
      "Chapter 2 is a spy story, and it behaves like one. The spies are almost entirely passive: they arrive, they hide, they are hidden, they are let down on a rope, they are told where to go and how long to wait. The Canaanite woman does all the acting and all the talking. A reader expecting an account of Israelite competence gets an account of Israelite dependence, and the theological confession that the book most wants said is put in the mouth of a foreign prostitute rather than a priest.\n\nHer occupation matters to how the scene works. A prostitute's house at the wall is a place where strange men come and go without comment, which is why the spies are there and why her story to the king's men is plausible. It also places her at the social margin of her own city, with limited stake in its defence, which the narrative uses without ever moralising about it.\n\nThe chapter is also the first half of a pattern. Rahab hides men and lives; Achan hides goods and dies. The Gibeonites deceive Israel and are spared; Israel's leaders keep an oath extracted by fraud. The book repeatedly sets deception, oath and survival in the same frame, and it consistently declines to grade the deceptions. What it grades is allegiance: who has recognised what Yahweh is doing. Rahab's speech, not her lie, is what the narrator lingers on, and the scarlet cord in the window functions as a marker of a household set apart in the middle of a city under judgement.\n\nOne technical note on the text's silence. Hebrew narrative regularly reports morally complicated acts without comment and expects the reader to weigh them against the law and the outcome. Silence here is normal narrative practice, not tacit approval, which is exactly why the casuistical arguments below are arguments about the text rather than readings of it.",

    historicalQuestions:
      "There is nothing external to check. No inscription, no archive and no excavation can speak to a conversation at a city gate, and the Jericho of the Late Bronze Age is itself the most contested site in the book: Kenyon's stratigraphy gives slight Late Bronze occupation, which is the crux of an unresolved dispute rather than a settled result either way.\n\nWhat comparative material contributes is limited but real. In the surrounding cultures, prostitution and innkeeping overlapped, and such houses served as places of lodging for travellers, which makes the narrative setting recognisable rather than novelistic. The social position of such a woman, near the margin and near the wall, is the kind of detail that scholarship can describe even when the episode cannot be verified.\n\nWhat cannot be established: whether the episode happened, when, or whether the family that the text says lived 'in the middle of Israel to this day' is a real memory of an absorbed Canaanite household. The last of those is at least the kind of claim a community might preserve accurately, since it concerns neighbours rather than battles.",

    interpretations: [
      {
        label: "The lie was a real fault, pardoned but never approved",
        proponents: "John Calvin",
        summary:
          "This is the classic casuistical position, and it is more careful than its summary reputation. Calvin holds that God's promise to deliver the spies was fulfilled through Rahab, that her faith was genuine and commendable, and that the falsehood was nonetheless a fault which God's mercy covered. The principle he explicitly refuses is that a good end makes a falsehood lawful. On this reading the saints' actions need not be approved in every part, and Scripture's praise of Rahab's faith stops short of endorsing her method.",
        strengths:
          "It keeps two things the New Testament also keeps apart: the commendation of her faith and the moral character of a particular act. It refuses consequentialism cleanly, which matters because the alternative principle, that outcomes license deception, is not one most readers want as a general rule. It also respects the text's silence rather than reading approval into it.",
        difficulties:
          "It supplies a verdict the text withholds, and it has to explain why neither Joshua 6:25 nor James 2:25 shows any discomfort with an act they both describe. If concealment was right and the words protecting the concealment were wrong, the line between them is very fine. And the position has to say what Rahab should have done instead, which in the circumstances means either silence that condemns the men or truth that kills them.",
        citations: [
          {
            sourceId: "calvin-joshua",
            supportedClaim:
              "A Reformed treatment holding that Rahab's faith was commended while her falsehood remained a fault covered by God's mercy, and refusing the principle that a good end makes a lie lawful",
            locator: "on Joshua 2:4-6",
          },
        ],
      },
      {
        label: "No obligation to arm a killer with the truth",
        proponents:
          "A long strand of Christian and Jewish moral reasoning about speech under lethal threat",
        summary:
          "On this position the duty of truthfulness is owed within a relationship that the questioner has not forfeited, and a man who asks where his intended victims are hiding has forfeited it. Rahab's words are not a betrayal of trust but a refusal to cooperate in killing, closer to resistance than to deceit. Scripture elsewhere reports the same pattern approvingly: the Hebrew midwives mislead Pharaoh about newborn boys and God deals well with them (Exodus 1:15-21). On this reading Rahab did not sin, and the question is not whether the end justified the lie but whether a lie is what she told.",
        strengths:
          "It matches the Bible's own handling of comparable cases, and it explains why the narrators of Joshua, Hebrews and James all decline to raise a problem. It does not require the reader to believe that Rahab's only sinless options were to surrender the men or to stay silent while they were found. It also keeps the moral weight where the story puts it, on protecting life.",
        difficulties:
          "The principle is easy to state and hard to limit; once the questioner's entitlement becomes the test, a great deal of ordinary deception can be reclassified. It sits awkwardly with the flat prohibitions of false witness, and it depends on a doctrine of when speech is owed that the Bible nowhere sets out. Calvin's objection stands as a question: who decides that this questioner has forfeited the truth?",
        citations: [
          {
            sourceId: "web-bible",
            supportedClaim:
              "Scripture reports the Hebrew midwives misleading Pharaoh about the newborn boys, with God's approval of them stated in Exodus 1:20-21",
          },
          {
            sourceId: "mcconville-williams-joshua",
            supportedClaim:
              "The distinction between what the narrative claims and how Christian moral theology has handled such claims",
          },
        ],
      },
      {
        label: "The narrative evaluates loyalty, not veracity",
        proponents: "L. Daniel Hawk; Phyllis A. Bird",
        summary:
          "Asking whether Rahab sinned imports a question the chapter is not asking. The narrative is about a change of allegiance: a woman at the margin of a doomed city recognises which God is acting in history and attaches herself and her household to him, at mortal risk. Everything she does, including what she says to the king's men, follows from that change of side. The reasons the text gives for her rescue are the hiding of the messengers (6:25) and the oath she extracted, not her honesty or her dishonesty. On this reading the ethical interest of the chapter is defection, hospitality and risk, and the lie is a detail of technique.",
        strengths:
          "It is the reading closest to what the text actually foregrounds, and it explains the narrative's silences instead of filling them. It attends to her social position rather than treating her as an abstract moral agent. And it accounts for the New Testament's language, which praises receiving the spies and acting by faith, both of which are about allegiance.",
        difficulties:
          "Declining the ethical question is not the same as answering it, and readers reasonably want to know whether an action Scripture praises included an act it elsewhere forbids. It risks implying that loyalty to the right side settles moral questions, which the book itself contradicts in chapter 7. And it can leave the impression that a sufficiently important cause suspends ordinary truthfulness, which is the very inference the Reformed position exists to block.",
        citations: [
          {
            sourceId: "hawk-joshua",
            supportedClaim:
              "A literary reading of Rahab as an outsider whose allegiance, not her methods, is the chapter's concern",
          },
          {
            sourceId: "bird-harlot-heroine",
            supportedClaim:
              "How Rahab's occupation functions in the narrative and the social position of such a woman in her city",
          },
        ],
      },
      {
        label: "Her confession is the point, and it reframes everything else",
        proponents: "Richard S. Hess; Dale Ralph Davis (Reformed expositional)",
        summary:
          "The centre of the chapter is 2:9-11, a Canaanite stating what the whole book is trying to say about Yahweh, in terms that echo Israel's own confessions. Read from there, Rahab is not primarily a liar or a heroine of resistance but a convert, and the narrative is about the reach of God's mercy into a city under judgement. The New Testament reads her this way, and the tradition that follows it treats her as evidence that faith comes to whom it will. On this reading, the lie is neither excused nor the subject; it belongs to the situation of someone who has just changed gods and not yet changed cities.",
        strengths:
          "It matches where the narrator spends his words, and it explains why the book puts this speech here rather than anywhere else. It gives a clear account of why Hebrews and James use her as they do. And it sets the episode in the book's larger pattern, in which the people who end up inside Israel are repeatedly the ones the reader expected to be outside.",
        difficulties:
          "It can function as a way of changing the subject when the ethical question is pressed. It also leans on a theological category, conversion, that the chapter itself does not use, and it risks flattening a Canaanite woman's shrewd negotiation for her family's survival into a tidier religious story than the text tells.",
        citations: [
          {
            sourceId: "hess-joshua",
            supportedClaim:
              "Rahab's confession in Joshua 2:9-11 read as the theological centre of the chapter",
          },
          {
            sourceId: "davis-joshua",
            supportedClaim:
              "An expositional Reformed reading emphasising divine mercy reaching a Canaanite household",
          },
        ],
      },
    ],

    unresolved:
      "Scripture does not tell us whether Rahab's words were a sin, and it had at least three opportunities to say so. Joshua 6:25 names the hiding as the reason for her rescue. Hebrews 11:31 names her faith. James 2:25 names her receiving the spies and sending them out another way, which is the deception's whole object, and still says nothing about what she said at the door. That silence is the central fact of this entry, and it will not resolve into either of the easy answers. Lying is wrong and therefore Rahab sinned is a conclusion the text declines to draw. The end justified the means is a principle the text never states and which chapter 7 contradicts within twenty verses, since Achan's good intentions for his family's prosperity count for nothing.\n\nStill open: whether the concealment and the words protecting it can be morally separated; whether the duty of truthfulness holds towards someone seeking to kill; whether the narrator's silence is approval, indifference, or a deliberate refusal to make the reader comfortable; and how much weight the New Testament's praise of her action can bear, given that it specifies receiving the spies rather than misleading their pursuers.\n\nWhat is not open is the direction of the story. A Canaanite prostitute ends up inside Israel and, on the traditional identification, in the genealogy of Jesus, and the book makes no apology for it at all.",

    chapterNumbers: [2, 6],
    themeIds: ["outsiders-and-belonging", "judgment-and-mercy", "covenant-faithfulness"],
    scriptureRefs: [
      "Joshua 2:1-7",
      "Joshua 2:9-14",
      "Joshua 2:17-21",
      "Joshua 6:17",
      "Joshua 6:22-25",
      "Hebrews 11:31",
      "James 2:25",
      "Matthew 1:5",
      "Exodus 1:15-21",
    ],
    citations: [
      {
        sourceId: "web-bible",
        supportedClaim:
          "Quotations of Joshua 2, Joshua 6, Hebrews 11:31 and James 2:25 follow the bundled World English Bible",
      },
      {
        sourceId: "bird-harlot-heroine",
        supportedClaim:
          "The narrative function of Rahab's occupation and the social position of such a woman in her city",
      },
      {
        sourceId: "hess-joshua",
        supportedClaim:
          "Philological and literary treatment of Joshua 2, including Rahab's confession",
      },
      {
        sourceId: "calvin-joshua",
        supportedClaim:
          "The Reformed casuistical discussion of whether Rahab's falsehood was sinful",
        locator: "on Joshua 2",
      },
      {
        sourceId: "kenyon-digging-up-jericho",
        supportedClaim:
          "The Late Bronze occupation of Jericho is slight on the standard reading of the stratigraphy, and the question remains disputed",
      },
      {
        sourceId: "hawk-joshua",
        supportedClaim:
          "Rahab framed as an outsider brought inside, paired with the Gibeonites later in the book",
      },
    ],
  },

  /* ================================================================== */
  /* 5. An oath obtained by fraud, kept anyway                          */
  /* ================================================================== */
  {
    id: "gibeonite-oath",
    title: "An oath obtained by fraud, kept anyway",
    hook:
      "Israel is tricked into a treaty it was forbidden to make. The leaders keep it, because they swore by the name of Yahweh. Four hundred years later, a king breaks it and the land pays.",

    whatTheTextSays:
      "The Gibeonites hear what happened at Jericho and Ai and respond with a plan rather than a coalition (Joshua 9:3-4). They arrive with worn sacks, cracked wineskins, patched sandals and dry, mouldy bread, and say 'We have come from a far country' (9:6). They repeat what they have heard of Yahweh's acts in Egypt and against Sihon and Og, which is the same list Rahab recites. Israel's leaders inspect the provisions and 'didn't ask counsel from Yahweh's mouth' (9:14). A covenant is made and 'the princes of the congregation swore to them' (9:15).\n\nThree days later the truth emerges: these are neighbours, living in Gibeon, Chephirah, Beeroth and Kiriath-jearim (9:16-17). The congregation wants them destroyed. The leaders refuse: 'We have sworn to them by Yahweh, the God of Israel. Now therefore we may not touch them' (9:19), and the stated reason is fear of what breaking the oath would bring: 'lest wrath be on us, because of the oath which we swore to them' (9:20). Instead the Gibeonites are cursed to permanent service as woodcutters and water carriers for the sanctuary (9:21-27). Joshua asks them why they did it, and their answer is simply that they had heard what God had commanded Moses and were afraid for their lives (9:24).\n\nThe fraud is not incidental. Deuteronomy 7:2 forbids covenants with the peoples of the land, and Deuteronomy 20:10-18 permits terms of peace with cities that are 'very far off' while forbidding them for the cities inside the land. The Gibeonites lie about precisely the one fact that decides which rule applies. They are described in Joshua 9:7 and 11:19 as Hivites, one of the named peoples.\n\nAnd the book of Samuel treats the oath as still binding centuries later. 2 Samuel 21:1-2 reports a three-year famine in David's reign, with the explanation that Saul had put the Gibeonites to death, 'and the children of Israel had sworn to them'. Seven of Saul's descendants are handed over and executed before the text says 'God answered prayer for the land' (21:14). This is the Bible commenting on its own story: an oath obtained by deception, kept by Joshua's generation, and avenged generations after anyone who swore it was dead.",

    literaryFunction:
      "Chapter 9 is a comedy of inspection. Israel examines the bread. The text says twice that the food was dry and mouldy and once that the leaders tasted it, and the joke is that they conducted a thorough investigation of the wrong evidence. The one inquiry they did not make is named in 9:14, and it is the only one that would have worked. The chapter is placed immediately after the Achan narrative, where failure came from taking devoted goods, and immediately before the chapter where this treaty drags Israel into its largest battle. Deception has consequences, and so does keeping faith with deceivers.\n\nThe Gibeonites' speech is built to echo Rahab's. Both cite the exodus and the defeat of Sihon and Og; both act out of fear of what Yahweh has done; both end up inside Israel with a permanent place. The book is building a pattern of Canaanites who survive by recognising Yahweh, and the pattern is plainly deliberate: in chapter 11 the narrator pauses to note that 'there was not a city that made peace with the children of Israel, except the Hivites, the inhabitants of Gibeon' (11:19). That exception is flagged rather than hidden.\n\nThe covenant itself has recognisable ancient shape. 'We are your servants' (9:8, 9:11) is vassal language, the self-presentation of a weaker party seeking protection, and the arrangement that follows, with service owed and protection implied, matches the structure of ancient Near Eastern treaty relations that comparative study has mapped in detail. Israel does not adopt the Gibeonites as equals; it takes them on as dependants.\n\nThe closing formula 'to this day' (9:27) points beyond the story to an arrangement the audience knew: Gibeonite service at the sanctuary. That makes the chapter, among other things, an explanation of a standing institution, which is one reason it is told with so little embarrassment about the deception.",

    historicalQuestions:
      "Gibeon is one of the few identifications in the book that is effectively signed: excavation at el-Jib recovered jar handles inscribed with the name gb'n. The same excavation found the Late Bronze evidence thinner than the picture in chapter 10 of 'a great city, as one of the royal cities' would suggest, which the study reports rather than smooths over. Of the four towns, Chephirah and Kiriath-jearim are placed approximately, and Beeroth is disputed between candidates.\n\nThe long afterlife of the Gibeonites is the part with the most external and internal traction. A distinct group with a recognised status at Israel's sanctuary, remembered as not being Israelite by descent, is the kind of arrangement communities preserve accurately because it affects property, service and marriage. The role of Gibeon in Israel's later religious and political history has been studied in its own right, and it gives the treaty narrative a plausible institutional anchor.\n\nWhat cannot be established: whether the deception happened as described, when Gibeon entered this relationship, or whether Saul's massacre and the famine stood in the causal relation 2 Samuel asserts. The date of any of it depends on which chronology is assumed for the events in Joshua, and that is unresolved.",

    interpretations: [
      {
        label: "The name of God makes the oath binding",
        proponents:
          "Delbert R. Hillers on oath and treaty; John Calvin and the Westminster Confession (Reformed)",
        summary:
          "An oath in the ancient world was not a promise with extra emphasis. It called a deity to witness and to punish, which is why the leaders' reasoning in 9:19-20 goes straight from 'we have sworn by Yahweh' to 'lest wrath be on us'. To break it would not merely wrong the Gibeonites; it would treat the divine name as a device, and the third commandment exists to forbid exactly that. The Reformed confessional tradition states the principle in general terms, that a lawful oath binds to performance even when performance is costly to the one who swore, and Calvin, reading this chapter, faults the leaders sharply for swearing without consulting God while holding that the oath once sworn had to be kept.",
        strengths:
          "It is the reason the text gives, in the mouths of the people who had to decide. It explains why the fraud is irrelevant to the obligation: the Gibeonites deceived Israel, but Israel invoked God, and God's name was not deceived. It also accounts for 2 Samuel 21, where the oath is treated as live generations later, which only makes sense if what was created in Joshua 9 was an obligation before God rather than a contract between parties.",
        difficulties:
          "The same confessional tradition holds that an oath cannot oblige anyone to sin, and Deuteronomy 7:2 appears to make this covenant exactly that, so the principle as usually stated does not obviously deliver this result. It also leaves the leaders' original negligence unpunished in the narrative, which sits oddly beside Achan. And it can be read as making a verbal formula more decisive than an explicit command, which is uncomfortable in either direction.",
        citations: [
          {
            sourceId: "hillers-covenant",
            supportedClaim:
              "Treaty form and oath-taking in the ancient Near East, and why a sworn agreement bound Israel to the Gibeonites even when obtained dishonestly",
          },
          {
            sourceId: "calvin-joshua",
            supportedClaim:
              "A Reformed reading that faults the leaders for swearing without consulting God while holding the sworn oath binding",
            locator: "on Joshua 9",
          },
          {
            sourceId: "westminster-confession",
            supportedClaim:
              "The confessional Reformed position on oaths and vows, including that a lawful oath binds to performance even to the swearer's own hurt",
            locator: "chapter 22",
          },
        ],
      },
      {
        label: "A vassal treaty, valid in form",
        proponents: "Delbert R. Hillers; George E. Mendenhall; Joseph Blenkinsopp",
        summary:
          "Read as a legal instrument, the agreement holds because everything constitutive of it was genuine. The Gibeonites presented themselves as servants seeking a suzerain's protection, Israel's leaders accepted, and both sides performed. What was false was a representation about distance, which bears on whether Israel should have entered the treaty, not on whether a treaty was entered. Ancient treaty practice attached the obligation to the sworn act itself, and the resulting relationship, with service owed in perpetuity, is exactly the kind of arrangement such treaties created.",
        strengths:
          "It explains the outcome without appealing to sentiment: the Gibeonites are neither forgiven nor embraced, they are subordinated, which is what vassal status meant. It also explains why the curse in 9:23 and the treaty coexist without contradiction, and why later generations treated the arrangement as an institution rather than a favour. The comparative treaty material gives the reading independent support.",
        difficulties:
          "Formal validity is a thin answer to the question of whether Israel was right to comply, and it does not engage Deuteronomy 7:2 at all. It also underplays the text's own reasoning, which is theological rather than juridical: the leaders do not say the treaty is technically valid, they say they swore by Yahweh. And describing a permanent servile status as the happy resolution should give the reader pause.",
        citations: [
          {
            sourceId: "hillers-covenant",
            supportedClaim: "The legal standing of a sworn treaty in ancient Near Eastern practice",
          },
          {
            sourceId: "mendenhall-law-covenant",
            supportedClaim:
              "Suzerain and vassal treaty structure as the comparative background to Israelite covenant making",
          },
          {
            sourceId: "blenkinsopp-gibeon",
            supportedClaim:
              "The legal standing of the Gibeonite treaty and the group's continuing role in Israel's history",
          },
        ],
      },
      {
        label: "Outsiders who get inside, on purpose",
        proponents: "L. Daniel Hawk; Gordon Mitchell",
        summary:
          "The chapter belongs to the book's most persistent counter-current. A book that reports commands to destroy the peoples of the land keeps narrating peoples of the land who live: Rahab's household, Gibeon's four towns, the Canaanites of Gezer and the Jezreel valley. The Gibeonites use the only means available to the weak, and the narrative gives them a speech of genuine, if self-interested, recognition of Yahweh. They end up serving at his altar. On this reading the deception is the mechanism, not the subject; the subject is that the boundary between Israel and the nations turns out to be permeable in the very book that seems to make it absolute.",
        strengths:
          "It reads chapter 9 with chapters 2, 11, 15, 16 and 17 rather than in isolation, and the pattern it identifies is in the text, flagged by the narrator himself at 11:19. It explains why the episode is told without embarrassment. And it gives an account of the book that its ending requires, since Joshua closes with Canaanites still present and Israel warned about them.",
        difficulties:
          "Finding a counter-current is not the same as showing what the book concludes from it, and 9:23 curses the Gibeonites rather than welcoming them. The reading can slide into treating the conquest commands as a foil that the narrative quietly rejects, which is more than the text says. And permeability cuts both ways: chapter 23 presents the survival of these peoples as a standing danger.",
        citations: [
          {
            sourceId: "hawk-joshua",
            supportedClaim:
              "Rahab and the Gibeonites framed as outsiders who are brought inside Israel",
          },
          {
            sourceId: "mitchell-together-in-land",
            supportedClaim:
              "Joshua holds together commands to destroy and narratives of coexistence and declines to resolve the tension",
          },
        ],
      },
      {
        label: "The story explains an institution",
        proponents: "Joseph Blenkinsopp; Robert G. Boling and G. Ernest Wright",
        summary:
          "The narrative's function is to account for something the audience lived with: a non-Israelite group with a fixed, subordinate role at Israel's sanctuary, and a town that mattered in Israel's later religious life. 'To this day' in 9:27 is the chapter's own signal. On this reading the deception motif explains why such people are present at all in a land Israel was told to clear, and the oath explains why nobody may remove them. The material is shaped by the needs of a later community looking at an arrangement it had inherited and asking how it came about.",
        strengths:
          "It takes the etiological formula seriously instead of treating it as decoration, and it explains the chapter's institutional detail, including the oddly specific job description. It also accounts for why the Gibeonites appear again in Samuel, Kings and Chronicles in roles that presuppose exactly this status. And it makes the narrative intelligible as something a community would preserve and retell.",
        difficulties:
          "Explaining why a story was told is not deciding whether it records something, and the reading is often stated as though it were the latter. The institutional focus also leaves the ethical question of the oath untouched, and the etiological formula appears in this book attached to things that plainly did happen as well as to things we cannot check.",
        citations: [
          {
            sourceId: "blenkinsopp-gibeon",
            supportedClaim:
              "The long afterlife of the Gibeonites in Israel's political and religious history",
          },
          {
            sourceId: "boling-wright-joshua",
            supportedClaim:
              "Compositional analysis of Joshua 9 and the function of its closing etiological formula",
          },
          {
            sourceId: "pritchard-gibeon",
            supportedClaim:
              "Excavation at el-Jib, the inscribed jar handles securing the identification, and the thinness of the Late Bronze evidence",
          },
        ],
      },
      {
        label: "An unlawful oath should not have bound them",
        proponents:
          "A position generated by the confessional principle that no oath obliges to sin; the narrative itself takes the other view",
        summary:
          "Stated at its strongest: Israel had a direct command not to make covenants with these peoples. An oath that obliges a person to disobey God cannot create an obligation, because the God invoked as witness is the one forbidding the act. On this account the leaders compounded their negligence with a second error, treating their own rash words as more binding than an explicit instruction, and the congregation's protest in 9:18 was right. The chapter reports what Israel did without approving it, and the servile status imposed in 9:23 shows the leaders themselves knew the arrangement was defective.",
        strengths:
          "It gives Deuteronomy 7:2 its full weight instead of setting it aside, and it has real support in the confessional principle that an oath cannot oblige to sin, which the same tradition that insists oaths bind also insists on. It explains the congregation's anger as something other than bloodthirstiness, and it notices that 9:14 marks the whole episode as a failure.",
        difficulties:
          "The narrative goes the other way and does so twice. The leaders' decision stands, and 2 Samuel 21 treats breaking the oath centuries later as a crime that brings famine on the land, which is very hard to square with the view that the oath never bound. The reading also has to say what should have followed, and the only available answer is the destruction of four towns that had just confessed Yahweh's acts, which the book presents as the option Israel rightly refused.",
        citations: [
          {
            sourceId: "westminster-confession",
            supportedClaim:
              "The confessional Reformed principle that an oath cannot oblige anyone to sin, alongside the principle that lawful oaths bind",
            locator: "chapter 22",
          },
          {
            sourceId: "block-deuteronomy",
            supportedClaim:
              "The Deuteronomic prohibition of covenants with the nations of the land, which Joshua 9 presupposes",
          },
        ],
      },
    ],

    unresolved:
      "The book does not tell us how to rank a command against an oath, and it does not show the slightest interest in the question we most want answered: was the treaty itself right? It reports that Israel failed to inquire, that the leaders swore, that the oath held, and that the arrangement lasted. The evaluation is left to the reader, and the two clearest data points pull apart. Deuteronomy 7:2 forbade the covenant. 2 Samuel 21:1 treats its breach as bloodguilt that a famine announces and seven executions address.\n\nThat forward link raises its own problem rather than solving one. In 2 Samuel 21, Saul's descendants are handed over for Saul's crime, which puts the reader back in the Valley of Achor asking how guilt moves through a household. The Bible's internal commentary on the Gibeonite oath is powerful and it is not comfortable.\n\nAlso open: whether the Gibeonites' confession in 9:9-10 was faith, calculation, or both, and whether the text thinks the difference matters; whether their permanent servile status is presented as mercy, as curse, or as the ordinary shape of a vassal treaty; whether the leaders' failure to inquire is the chapter's real sin, and if so why it goes unpunished; and how a community that told this story about itself understood the relationship between its founding commands and its actual neighbours.\n\nWhat is settled is the narrative's verdict on oath-breaking, and it is worth stating plainly because it cuts against the grain of the conquest chapters: in this book and its sequel, the people who deceived Israel are protected, and the king who later killed them is the one whose house pays.",

    chapterNumbers: [9, 10],
    themeIds: ["outsiders-and-belonging", "covenant-faithfulness", "obedience-and-failure"],
    scriptureRefs: [
      "Joshua 9:3-15",
      "Joshua 9:16-21",
      "Joshua 9:22-27",
      "Joshua 10:1-8",
      "Joshua 11:19",
      "Deuteronomy 7:1-2",
      "Deuteronomy 20:10-18",
      "2 Samuel 21:1-14",
    ],
    citations: [
      {
        sourceId: "web-bible",
        supportedClaim:
          "Quotations of Joshua 9, Joshua 11:19 and 2 Samuel 21 follow the bundled World English Bible",
      },
      {
        sourceId: "hillers-covenant",
        supportedClaim:
          "Oath-taking and treaty form, and why a sworn agreement bound Israel even when obtained dishonestly",
      },
      {
        sourceId: "blenkinsopp-gibeon",
        supportedClaim:
          "The legal standing of the treaty and the Gibeonites' continuing role in Israel's history, including the episode in 2 Samuel 21",
      },
      {
        sourceId: "pritchard-gibeon",
        supportedClaim:
          "Inscribed jar handles reading gb'n secure the identification of el-Jib as Gibeon, and the Late Bronze evidence is thinner than expected",
      },
      {
        sourceId: "mendenhall-law-covenant",
        supportedClaim:
          "Comparative treaty structure behind Israelite covenant making, including vassal self-presentation",
      },
      {
        sourceId: "block-deuteronomy",
        supportedClaim:
          "The Deuteronomic treatment of the nations of the land, which Joshua 9 presupposes and which the Gibeonites exploit",
      },
      {
        sourceId: "rainey-notley-sacred-bridge",
        supportedClaim:
          "The position of the four Gibeonite towns on the plateau north-west of Jerusalem, which is what makes the claim of distance a lie",
      },
    ],
  },

  /* ================================================================== */
  /* 6. The sun standing still                                          */
  /* ================================================================== */
  {
    id: "the-long-day",
    title: "The sun standing still",
    hook:
      "Joshua addresses the sun and the moon, and the narrator quotes a poem to prove it. What the Hebrew verbs mean is the whole question, and they will not bear as much as either side wants.",

    whatTheTextSays:
      "The setting is a pursuit. Israel marches all night from Gilgal, surprises the coalition at Gibeon, and chases it down the Beth-horon descent towards the Aijalon valley. The text says God threw great hailstones on the fleeing army and that more died from the hail than from Israelite swords (Joshua 10:11). Only then comes the celebrated passage.\n\nJoshua speaks to Yahweh and then addresses the sky: 'Sun, stand still on Gibeon! You, moon, stop in the valley of Aijalon!' (10:12). The narrator continues: 'The sun stood still, and the moon stayed, until the nation had avenged themselves of their enemies.' Then, mid-verse, he cites his source: 'Isn't this written in the book of Jashar?' The final clause of 10:13 adds prose commentary: 'The sun stayed in the middle of the sky, and didn't hurry to go down about a whole day.' Verse 14 draws the conclusion, and it is not astronomical: 'There was no day like that before it or after it, that Yahweh listened to the voice of a man; for Yahweh fought for Israel.'\n\nFour features of the text deserve attention before any explanation is attempted. First, the book of Jashar is named as the source, and the same collection is cited in 2 Samuel 1:18 for David's lament, so it was a collection of poetry. Second, 10:12b-13a is verse, and 10:13b is prose that follows it; the strongest statement about the sun's position and duration is in the prose, not in the quoted poem. Third, the two bodies are placed on opposite sides of the sky, with Gibeon at the top of the pass and the Aijalon valley at its western outlet. Fourth, the verbs. The sun is addressed with an imperative of *damam*, a verb whose range runs through 'be silent', 'be still', 'cease'; the moon with *amad*, 'stand', 'stop', 'take a position'. Neither verb specifies what stops: motion, light, or something else. The prose clause then adds the idea of the sun not hurrying to set 'about a whole day', where even the duration carries a prefix meaning 'like' or 'about'.\n\nWhat the text asserts without ambiguity is that Joshua asked for something, that Yahweh granted it, and that the granting was unique. What it does not do is explain the mechanics, which is a modern question the passage shows no interest in.",

    literaryFunction:
      "This is the one place in the book where the narrator stops to quote a poem and name the collection he is quoting from. That is a deliberate move, and it tells the reader what kind of material is in hand: celebrated verse about a day the tradition remembered, embedded in a prose campaign report.\n\nThe poetry itself is built on a pair. Sun over Gibeon, moon over Aijalon; east and west, the top of the pass and the bottom. Hebrew poetry works by such pairing, and the pairing here maps precisely onto the geography of the pursuit, which is either a sign that the poem is rooted in the event or a sign that it is beautifully made, and probably both. The prose in 10:13b then does what prose does to poetry: it explains it, and in explaining it fixes a meaning that the verse left open.\n\nThe chapter's own emphasis falls elsewhere than on the sun. The instrument of destruction is hail. The theological point is stated in 10:14 and it concerns prayer and divine attention, not celestial mechanics. And in the ancient world, sun and moon were not merely lights: they were the great signs by which the gods were thought to announce outcomes. A request addressed to them in the middle of a battle belongs to that world of signs, whatever physically occurred.\n\nThe passage also sits awkwardly in its context in a way worth noticing rather than hiding: 10:15 has Joshua return to Gilgal, and 10:43 says the same thing again after the southern campaign continues, which has long suggested to commentators that the poem and its frame were inserted as a unit into an existing report.",

    historicalQuestions:
      "The geography is solid. Gibeon is securely identified at el-Jib, the two Beth-horons preserve their name and their positions on the ridge, and the Aijalon valley is unmistakable as a feature, though the town site is placed only approximately. The route is exactly what the text implies: the natural escape from the Gibeon plateau towards the coastal lowlands, steep and broken enough that an army strung out along it is helpless.\n\nThe book of Jashar is lost. We know of it only from the two biblical citations, so we cannot check what the poem said, how old it was, or how much of 10:12-13 is quotation.\n\nAstronomical proposals are the one part of this entry that could in principle be tested, and they come with conditions. Humphreys and Waddington argue that the passage records an annular solar eclipse, on a translation of the two verbs as referring to the sun and moon ceasing to shine rather than ceasing to move, and they attach a specific date, 30 October 1207 BC. That date is not a neutral result: it assumes a late, thirteenth-century chronology for Israel's presence in Canaan, and the proposal is offered partly as a tool for refining Egyptian chronology. On an early, fifteenth-century chronology the calculation does not apply at all. This study keeps absolute dates in its historical anchor records precisely so that a reader can see which reconstruction a date belongs to, and this is a clear case of a date carrying a chronology with it.\n\nWhat cannot be established: whether any astronomical event occurred, what the poem originally meant, or how the tradition understood the prose clause in 10:13b. No proposal on this page is verifiable from the text alone, and the text is all we have.",

    interpretations: [
      {
        label: "A quoted poem, read as poetry",
        proponents: "Trent C. Butler; Robert G. Boling and G. Ernest Wright",
        summary:
          "The text says it is quoting a poem, so the first question is what the poem meant, not what happened to the solar system. Ancient victory poetry regularly speaks of nature fighting for the victor: stars, storms, rivers and heavens take sides. Read this way, the couplet is a poetic claim that the whole created order was enlisted against the coalition, and the prose clause in 10:13b represents a later, more literal understanding of the verse by a writer or editor who wanted to say how long it lasted. The insertion seam around 10:15 supports the view that poem and frame came into the report together.",
        strengths:
          "It takes the narrator's own source citation at face value, which no other reading does as fully, and it respects the difference between verse and prose in the same passage. It explains why a spectacular cosmic event leaves no other trace in the biblical record while the hailstorm and the pursuit are narrated in detail.",
        difficulties:
          "The prose clause in 10:13b is in the text, and treating it as a misunderstanding of the poem is a judgement the text does not authorise. Verse 14's claim of uniqueness is also prose and sounds like a report of something that happened. And the reading can be used to avoid the question of what, if anything, the tradition was remembering.",
        citations: [
          {
            sourceId: "butler-joshua",
            supportedClaim:
              "Form-critical and text-critical analysis of Joshua 10:12-15, including the relationship between the quoted poem and its prose frame",
          },
          {
            sourceId: "boling-wright-joshua",
            supportedClaim:
              "The poetic citation and the compositional seam around Joshua 10:15",
          },
        ],
      },
      {
        label: "A request for shade or darkness, not extra daylight",
        proponents:
          "A reading advanced on the semantics of the two verbs and the tactical situation",
        summary:
          "*Damam* most naturally means to be still or to cease, and applied to the sun it can be heard as a request that it stop doing what the sun does: beat down. On this reading Joshua, whose men have marched all night and fought since dawn, asks for the sun to hold off, for cloud, shade or darkness over the field, which fits the hailstorm in the previous verse rather than competing with it. The pairing of sun in the east over Gibeon and moon in the west over Aijalon suits early morning, which is when an army that marched all night would arrive, and an eastern sun that stops burning is a mercy rather than a miracle of duration.",
        strengths:
          "It stays inside the ordinary range of the verbs instead of requiring them to mean 'halt in orbit'. It coheres with the hail in 10:11, so the chapter describes one weather event rather than two unrelated wonders. And it makes tactical sense of a request made by an exhausted army in a running fight.",
        difficulties:
          "It collides with 10:13b, which explicitly speaks of the sun not hurrying to go down for about a whole day, and that clause is hard to reconcile with a request for less sunlight. The morning reconstruction is an inference from the named places rather than something the text states. And the reading needs *damam* to carry a sense, 'stop shining', that is not securely attested for the sun.",
        citations: [
          {
            sourceId: "hess-joshua",
            supportedClaim:
              "Philological discussion of the verbs in Joshua 10:12-13 and the range of meanings they will bear",
          },
          {
            sourceId: "rainey-notley-sacred-bridge",
            supportedClaim:
              "The geography of the Gibeon plateau, the Beth-horon descent and the Aijalon valley, which places the two named locations on opposite horizons",
          },
        ],
      },
      {
        label: "A celestial omen",
        proponents: "John H. Walton",
        summary:
          "In Mesopotamian practice, the relative positions and appearances of sun and moon were read as signs announcing the outcome of battles, and there is a substantial literature of such omen texts. Walton argues that the vocabulary in Joshua 10 belongs to that world, so the request concerns a sign of victory rather than the mechanics of the solar system. Joshua asks for the heavens to declare the result, and the narrator's point in 10:14 is that God answered a man's voice in a matter normally reserved to the gods' own announcements.",
        strengths:
          "It reads the passage in the conceptual world of its own time instead of in ours, and it explains why sun and moon are addressed together, which a request for longer daylight does not require. It fits the chapter's theological conclusion in 10:14, which is about answered prayer rather than about duration. And it accounts for the poem's interest in position rather than in brightness.",
        difficulties:
          "Israel's texts are hostile to omen divination, so it is not obvious that Joshua would be asking for one. The prose clause in 10:13b still speaks of duration. The comparative material establishes that such a reading is available, not that this text uses it, and the argument is necessarily one of plausibility rather than demonstration.",
        citations: [
          {
            sourceId: "walton-celestial-omens",
            supportedClaim:
              "The language of sun and moon in Joshua 10 draws on the vocabulary of Mesopotamian celestial omen texts, so the request concerns a sign of victory rather than solar mechanics",
          },
        ],
      },
      {
        label: "An annular solar eclipse, with a date attached",
        proponents: "Colin J. Humphreys and W. Graeme Waddington",
        summary:
          "Translate the two verbs as referring to the sun and moon ceasing to shine rather than ceasing to move, and the passage describes an eclipse: the sun 'stopped' in the sense of being darkened while the moon was positioned in front of it. Humphreys and Waddington calculate an annular eclipse visible in Canaan and identify it with this day, dating it to 30 October 1207 BC, and use the result to help fix Egyptian chronology. That date assumes a late, thirteenth-century chronology for Israel in Canaan; on an early, fifteenth-century chronology the calculation does not apply. On this reading the text preserves an accurate observation of a striking and genuinely memorable event, which explains the emphasis in 10:14 without requiring the earth to stop.",
        strengths:
          "It is a testable proposal rather than an assertion, and eclipse calculations are among the most reliable retrodictions available. The translation it depends on is defensible: the verbs concern cessation, and 'ceased to shine' is within reach. It accounts for the tradition's sense that something unrepeatable happened on a specific day.",
        difficulties:
          "It carries a date, and therefore a chronology. The calculation only bears on Joshua if Israel was in Canaan in the late thirteenth century, so a reader who holds an early conquest date cannot use this proposal at all, and it cannot be cited as neutral confirmation of the text. The translation, though defensible, is not the usual one, and it has to accommodate 10:13b, which describes a long day rather than a darkened one. An eclipse also lasts minutes, not 'about a whole day'.",
        citations: [
          {
            sourceId: "humphreys-waddington-eclipse",
            supportedClaim:
              "The proposal that Joshua 10 records an annular solar eclipse, resting on a particular translation of two Hebrew verbs and carrying a specific date on a late chronology",
          },
        ],
      },
      {
        label: "A straightforward miracle",
        proponents:
          "Marten H. Woudstra; David M. Howard Jr.; Dale Ralph Davis (the first and third Reformed)",
        summary:
          "God answered the prayer by extending the day, and the text says so. Verse 13b is not embarrassed poetry but the narrator's plain statement that the sun stayed in the middle of the sky and did not hurry to set for about a whole day. Verse 14 marks the day as unique in the history of God's dealings with anyone, which is the language of an unrepeatable act rather than of a well-timed weather front. On this reading the attempts to reduce the passage to shade, omen or eclipse are driven by the assumption that such an act is impossible, and that assumption is doing more work than the exegesis.",
        strengths:
          "It is the reading that accounts for every clause, including the one the others struggle with, and it takes the prose commentary as commentary rather than as error. It matches the book's steady claim that Israel's victories are God's acts, stated most sharply here. It also has the virtue of not needing the text to mean something other than what it appears to say.",
        difficulties:
          "It leaves 'about a whole day' as an event of a magnitude that no other ancient record notices, which is an argument from silence but a substantial one. It has to decide what to do with the fact that the strongest statement follows a citation formula for a poem. And it can encourage a reading in which the marvel eclipses the chapter's stated point, which is that Yahweh fought for Israel and listened to a man.",
        citations: [
          {
            sourceId: "woudstra-joshua",
            supportedClaim:
              "A Reformed exegetical reading taking the extension of the day as the plain sense of the narrative",
          },
          {
            sourceId: "howard-joshua",
            supportedClaim:
              "Narrative-theological treatment of Joshua 10 and its claim about divine action",
          },
          {
            sourceId: "davis-joshua",
            supportedClaim:
              "An expositional reading emphasising the uniqueness of the day as stated in Joshua 10:14",
          },
        ],
      },
    ],

    unresolved:
      "We do not know what happened, and the Hebrew will not settle it. *Damam* means to be still, silent or ceasing; it does not specify motion or light, and every reading on this page has to supply that specification from somewhere else. *Amad* means to stand or stop, and it is used of the moon, which no proposal treats as the main event. The prose clause about the sun not hurrying to set for 'about a whole day' is the strongest statement in the passage and the hardest to fit with the readings that have the best grip on the verbs, and it comes after the narrator has told us he is quoting a poem. That is an honest impasse, not a failure of scholarship.\n\nStill open: how much of 10:12-13 is the quotation and where it ends; whether the prose clause interprets the poem or reports independently; whether the request concerns duration, darkness or a sign; and whether the pairing of sun and moon is astronomical observation, poetic parallelism, or the vocabulary of omens.\n\nOne thing is clear and is usually lost in the argument. The chapter does not say the long day won the battle. It says hail killed more than swords did, and it says the day was unique because Yahweh listened to the voice of a man. Whatever the sun did, the narrator's interest is in the answered prayer, and a reader who resolves the astronomy and misses that has solved the wrong problem.",

    chapterNumbers: [10],
    themeIds: ["holiness-and-presence", "memory-and-memorials", "promise-and-fulfillment"],
    scriptureRefs: [
      "Joshua 10:6-11",
      "Joshua 10:12-15",
      "Joshua 10:42-43",
      "2 Samuel 1:17-18",
      "Habakkuk 3:11",
    ],
    citations: [
      {
        sourceId: "web-bible",
        supportedClaim:
          "Quotations of Joshua 10 follow the bundled World English Bible, including its rendering 'stand still' and 'didn't hurry to go down'",
      },
      {
        sourceId: "hess-joshua",
        supportedClaim:
          "Philological treatment of the verbs in Joshua 10:12-13 and of the citation of the book of Jashar",
      },
      {
        sourceId: "butler-joshua",
        supportedClaim:
          "Analysis of the poetic citation, its prose frame, and the doubled return to Gilgal at 10:15 and 10:43",
      },
      {
        sourceId: "walton-celestial-omens",
        supportedClaim:
          "Comparison of the passage with Mesopotamian celestial omen texts",
      },
      {
        sourceId: "humphreys-waddington-eclipse",
        supportedClaim:
          "An eclipse proposal that depends on a particular translation of the verbs and carries a specific date on a late chronology",
      },
      {
        sourceId: "rainey-notley-sacred-bridge",
        supportedClaim:
          "The geography of Gibeon, the Beth-horon descent and the Aijalon valley, and the route of the pursuit",
      },
      {
        sourceId: "pritchard-gibeon",
        supportedClaim: "The secure identification of Gibeon at el-Jib",
      },
    ],
  },

  /* ================================================================== */
  /* 7. "Not one word failed" beside "much land remains"                */
  /* ================================================================== */
  {
    id: "incomplete-possession",
    title: "'Not one word failed' beside 'much land remains'",
    hook:
      "The book says every promise was kept and that a great deal of the land was never taken. Both statements are in it, a few chapters apart, and neither is a slip.",

    whatTheTextSays:
      "Take the strongest claim first. Joshua 21:43-45 reports that God gave Israel all the land he swore to their fathers, that they possessed it and lived in it, that he gave them rest on every side, that not one of their enemies stood before them, and then: 'Nothing failed of any good thing which Yahweh had spoken to the house of Israel. All came to pass.' The Hebrew idiom is that no word fell. The English Standard Version renders it 'Not one word of all the good promises that the LORD had made to the house of Israel had failed', which is where the title of this page comes from; the bundled World English Bible is quoted above. Joshua repeats the claim himself in 23:14.\n\nNow the other statements, and notice who speaks them. In 13:1 it is God: 'You are old and advanced in years, and there remains yet very much land to be possessed', followed by an inventory of what remains, all the Philistine territory, the Geshurites, Sidonian land, Lebanon. In 18:3 it is Joshua rebuking the tribes: 'How long will you neglect to go in to possess the land?' In 23:5 and 23:12-13 it is Joshua again, promising that God will yet thrust out 'these nations that remain among you', and warning that if Israel intermarries with them they will become 'a snare and a trap to you, a scourge in your sides, and thorns in your eyes'.\n\nThe detailed allotment chapters say the same thing case by case. Judah 'couldn't drive out' the Jebusites from Jerusalem (15:63). Ephraim did not drive out the Canaanites of Gezer (16:10). Manasseh 'couldn't drive out the inhabitants of those cities' and later put them to forced labour instead (17:12-13). The Anakim were destroyed and some remained in Gaza, Gath and Ashdod (11:21-22).\n\nAnd Judges 1 tells the story again as a list of failures, tribe by tribe, ending with Dan pushed back into the hills. Judges 2:1-3 gives a theological verdict on it: because Israel made covenants with the inhabitants and did not break down their altars, God will not drive them out. Judges 2:20-23 adds a second explanation, that the nations were left to test Israel. The two accounts of why are not identical, and both are in the text.",

    literaryFunction:
      "This is the theological hinge of the book, and its architecture is deliberate enough to be worth mapping. The total-fulfilment statement at 21:43-45 closes the allotment section, the point at which every tribe has its assignment and the Levites have their cities. It is narratorial summary, placed at a structural seam. The admissions of unpossessed land are put in the mouths of God (13:1) and of Joshua (18:3; 23:5, 12-13), and they bracket the allotment section on both sides. The book is not letting one voice overrule the other; it has arranged for the reader to hear both.\n\nThe key to reading it is a distinction the book maintains with some care, and which a careless summary destroys: defeating a king in the field, burning a city, being assigned territory, and living on the ground are four different things. Joshua 12 lists thirty-one defeated kings. Joshua 11:13 says only one city was burned. Joshua 13 to 19 assigns land, including land nobody holds. Joshua 15 to 17 admits which assignments were never occupied. The book can say 'Joshua took the whole land' (11:23) and 'there remains yet very much land to be possessed' (13:1) without incoherence, because those sentences are about different things: the field has been won and the ground has not been taken.\n\nThe word 'rest' does similar double duty. 11:23 says the land had rest from war, and 21:44 says God gave rest on every side, while 13:1 and 23:12-13 describe unfinished business and future danger. The New Testament reads that gap as designed: Hebrews 4:8 argues that if Joshua had given them rest, another day of rest would not still be spoken of.\n\nFinally, the relationship between summary and detail in this book is consistent, not accidental. Summaries totalise; narratives qualify. That is true of the conquest reports in chapters 10 and 11, and it is true of the fulfilment claims in chapter 21. Whoever arranged this material was content to let a sweeping verdict stand next to the details that complicate it, and the pattern is too regular to be a mistake.",

    historicalQuestions:
      "Here the text and the material record point the same way, which is unusual enough to say clearly. The archaeology of the highlands shows a gradual process: a wave of small unfortified settlements in the hill country in Iron Age I, in areas that the allotments assign to Israel, while the coastal plain, the northern valleys and the major lowland centres remain outside that pattern. That is very close to the distribution the book itself admits: Israel in the hills, Canaanites and Philistines in the valleys and on the coast, Gezer, Beth-shan, Megiddo, Taanach and Dor not taken. Judges 1:19's explanation, chariots in the valley, is the sort of thing that would in fact stop a highland population.\n\nWhat this does not establish is the mechanism or the sequence. A distribution consistent with the book's admissions is also consistent with reconstructions in which no campaign occurred and highland Israel emerged from within Canaan, which is how Finkelstein and Dever read the same survey data, with different weight given to outside elements. The same evidence supports more than one story.\n\nThe tribal boundary and city lists themselves are evidence of a kind, and their character is disputed. Arguments have been made that they reflect genuine second-millennium administrative forms, and others that they represent later idealisation, or an administrative system from the monarchy retrojected. The Levitical city lists are contested in exactly this way: a functioning arrangement, an ideal, or a later scheme.\n\nWhat cannot be established: when any particular allotment became occupation, whether Judges 1 and Joshua 15 to 17 describe the same events from different angles or different periods, and how long the process took. Absolute dates depend on the chronology adopted, which remains unresolved.",

    interpretations: [
      {
        label: "Real fulfilment, phased possession",
        proponents:
          "Marten H. Woudstra; O. Palmer Robertson; Geerhardus Vos; David M. Howard Jr.",
        summary:
          "God's promise was to give the land, and he gave it; the giving is complete and the taking is a task. 21:43-45 is a true statement about God's action, and 23:5 keeps action and occupancy apart precisely: 'Yahweh your God will thrust them out from before you. You shall possess their land.' Promise and command sit together in covenant, so a gift fully given can still be entered progressively, and failure to enter it is Israel's to answer for. On this reading the book describes a gift and a responsibility that were always distinguishable, and the supposed tension dissolves.",
        strengths:
          "It handles the grammar of the fulfilment statements, which speak of what God did, and the admissions, which speak of what Israel did not do. It matches the book's own explanation, since 18:3 rebukes the tribes for neglect rather than reporting divine failure. It also fits Exodus 23:29-30, where the driving out is explicitly to happen little by little.",
        difficulties:
          "21:43-45 does not only say God gave; it says they possessed it and lived in it, and that no enemy stood before them, which is harder to restrict to divine action. The reading risks making 'fulfilled' mean something a plain reader would not recognise. And it leaves God's own statement in 13:1 sounding like a description of failure that the reading has to reclassify as unfinished business.",
        citations: [
          {
            sourceId: "woudstra-joshua",
            supportedClaim:
              "A Reformed covenantal reading of the land promise and of the structure of the allotment chapters",
          },
          {
            sourceId: "robertson-christ-of-covenants",
            supportedClaim: "Covenant structure holding promise and obligation together",
          },
          {
            sourceId: "vos-biblical-theology",
            supportedClaim:
              "The land as a stage in a progressively unfolding redemptive history",
          },
          {
            sourceId: "howard-joshua",
            supportedClaim:
              "The theology of rest and land in Joshua, and the relationship between gift and possession",
          },
        ],
      },
      {
        label: "The totalising statements are summary rhetoric",
        proponents:
          "K. Lawson Younger Jr.; Kenneth A. Kitchen; Richard S. Hess; Nicholas Wolterstorff",
        summary:
          "'All' in this literature is a summary marker, not a quantifier. The same book that says Joshua took the whole land gives a detailed inventory of what he did not take, and ancient conquest accounts habitually work this way: sweeping claims in the summary, qualifications in the detail, with no sense of contradiction. 21:43-45 is the conventional closing verdict of a campaign report. The detail chapters are where the actual extent is recorded, and the writers expected readers to know the difference. On this reading the tension is a modern artefact produced by pressing ancient summary formulas for precision they never claimed.",
        strengths:
          "It is supported by a large body of comparative texts rather than by theological necessity, and it explains the same phenomenon across the book with one mechanism, covering both the destruction reports and the fulfilment claims. It respects the text as it stands, without source division or reinterpretation of key words.",
        difficulties:
          "21:43-45 is not a battle report, it is a statement about God's promises, and the stakes in a claim about divine faithfulness are different from those in a royal boast. Calling the language conventional risks making it say very little, which is not what a reader of 23:14 hears. And the convention is identified in part from the texts it is then used to explain.",
        citations: [
          {
            sourceId: "younger-conquest-accounts",
            supportedClaim:
              "Summary statements in conquest accounts conventionally totalise while the surrounding detail qualifies",
          },
          {
            sourceId: "kitchen-reliability",
            supportedClaim:
              "The book's summaries must be read against its own admissions of unconquered territory",
          },
          {
            sourceId: "hess-joshua",
            supportedClaim:
              "The allotment and boundary material read as administrative description alongside the summary verdicts",
          },
          {
            sourceId: "wolterstorff-reading-joshua",
            supportedClaim:
              "Totalising statements set within a book that elsewhere assumes the Canaanites remain",
          },
        ],
      },
      {
        label: "Different sources, different verdicts",
        proponents:
          "Robert G. Boling and G. Ernest Wright; Trent C. Butler; Nadav Na'aman",
        summary:
          "The book is edited from materials with different perspectives, and the contradiction is a seam. 21:43-45 and the framework summaries belong to a layer with a strong theology of fulfilment; 13:1-6, the unpossessed-land notices in 15 to 17, and the parallel material in Judges 1 preserve a different and less triumphant memory. The Greek and Hebrew textual traditions of Joshua differ in ways that show the book was still being shaped late, so the presence of competing verdicts in one scroll is what we should expect. On this reading Judges 1 is not a sequel but an alternative account of the same period, and its verdict is the older one.",
        strengths:
          "It explains why the two kinds of statement are so sharply opposed and why they cluster in different parts of the book. It takes Judges 1 seriously as an independent witness rather than as an appendix. And it is supported by textual evidence for the book's late fluidity rather than by reconstruction alone.",
        difficulties:
          "Source divisions are hypotheses, and different reconstructions assign the same verses differently, so the explanation has less control than its confidence suggests. The comparative evidence shows that single writers combined totalising claims with contrary detail, so editing is not required to explain the pattern. And identifying a seam says nothing about which verdict, if either, is true.",
        citations: [
          {
            sourceId: "boling-wright-joshua",
            supportedClaim:
              "A reconstruction of the book's compositional history distinguishing framework summaries from older local material",
          },
          {
            sourceId: "butler-joshua",
            supportedClaim:
              "Form-critical and text-critical analysis, including the relationship between the Hebrew and Greek traditions",
          },
          {
            sourceId: "naaman-conquest",
            supportedClaim:
              "The relationship between the conquest account and what is known of Canaan's political landscape",
          },
        ],
      },
      {
        label: "The tension is deliberate",
        proponents:
          "Gordon Mitchell; L. Daniel Hawk; J. Gordon McConville and Stephen N. Williams; Jerome F. D. Creach",
        summary:
          "The book puts the two verdicts side by side because it means to. Gift and responsibility are both true, and holding them together without resolution is the theological point rather than an editorial accident. A reader who finishes chapter 21 reassured is meant to be unsettled by chapter 23, and the book ends not with a victory monument but with a covenant renewal in which Joshua tells the people they are not able to serve Yahweh (24:19) and they insist that they will. The unfinished land is the condition under which Israel must choose, which is exactly the situation the book leaves its reader in.",
        strengths:
          "It accounts for the arrangement of the book rather than explaining away its parts, and it takes seriously that the admissions come from God and from Joshua, the two most authoritative voices in the narrative. It explains why the book ends where it does, with a choice rather than a conclusion. And it connects the land question to the book's dominant concern, which is loyalty.",
        difficulties:
          "'Deliberate tension' can become a way of declining to say what the book asserts, and readers who want to know whether the promise was kept are owed an answer. It is also hard to demonstrate intention as against tolerance: the writers may simply not have felt the pressure a modern reader feels. And it can flatten the real difference between a statement about God's faithfulness and a statement about Israel's occupancy.",
        citations: [
          {
            sourceId: "mitchell-together-in-land",
            supportedClaim:
              "Joshua holds together commands to destroy and narratives of coexistence and declines to resolve the tension",
          },
          {
            sourceId: "hawk-joshua",
            supportedClaim: "A literary reading that treats the book's unresolved tensions as designed",
          },
          {
            sourceId: "mcconville-williams-joshua",
            supportedClaim:
              "The distinction between the text's claims and their theological handling, applied to fulfilment and land",
          },
          {
            sourceId: "creach-joshua",
            supportedClaim:
              "Theological interpretation of the book's unfinished conclusion for teaching and preaching",
          },
        ],
      },
    ],

    unresolved:
      "What 'fulfilled' means in 21:45 is not settled, and it cannot be settled by choosing a favourite verse. The statement is unqualified; so is God's statement in 13:1 that much land remains. Every reading above manages the pair by giving one of them a particular register, summary, covenantal, editorial or rhetorical, and each of those moves is defensible and none is demonstrable from the text alone.\n\nOpen questions worth holding: whether the promise concerned the gift of land or the occupation of it, and whether the text distinguishes those as cleanly as the phased reading needs; why the book's most sweeping fulfilment claim is placed immediately before Joshua's warning that the remaining nations will destroy Israel if it compromises; whether Judges 1 is a sequel, an alternative account, or a deliberate counterweight put next to Joshua by whoever arranged these books; and why Judges gives two different reasons for the nations remaining, Israel's covenant-making in 2:1-3 and divine testing in 2:20-23, without reconciling them.\n\nWe also do not know how much land Israel actually held at any point, and the study will not pretend otherwise. Allotment is not control. A tribe with a boundary description may have held a few hill villages inside it. The map in this study draws assignments as assignments for that reason.\n\nWhat the book will not allow is the comfortable version in either direction. It refuses to say the promise failed, and it refuses to say the job was done. The last chapters put Israel in a land it has been given and has not taken, among peoples it was told to remove and is now living with, and ask it to choose whom it will serve. That is not a loose end. It is the question the book was written to ask.",

    chapterNumbers: [11, 13, 15, 16, 17, 18, 21, 23],
    themeIds: [
      "promise-and-fulfillment",
      "land-and-inheritance",
      "rest",
      "obedience-and-failure",
    ],
    scriptureRefs: [
      "Joshua 11:23",
      "Joshua 13:1-7",
      "Joshua 15:63",
      "Joshua 16:10",
      "Joshua 17:12-13",
      "Joshua 18:3",
      "Joshua 21:43-45",
      "Joshua 23:4-13",
      "Judges 1:19-35",
      "Judges 2:1-3",
      "Judges 2:20-23",
      "Hebrews 4:8-9",
    ],
    citations: [
      {
        sourceId: "web-bible",
        supportedClaim:
          "Quotations follow the bundled World English Bible; its rendering of Joshua 21:45 differs in wording from the English Standard Version phrase used in this page's title",
      },
      {
        sourceId: "esv",
        supportedClaim:
          "The rendering 'Not one word of all the good promises that the LORD had made to the house of Israel had failed' at Joshua 21:45",
      },
      {
        sourceId: "davis-joshua",
        supportedClaim:
          "The Hebrew idiom behind Joshua 21:45, that no word of the promise fell, read as the book's central claim",
      },
      {
        sourceId: "kitchen-reliability",
        supportedClaim:
          "The book's summary statements must be read alongside its own admissions of unconquered territory",
      },
      {
        sourceId: "finkelstein-settlement",
        supportedClaim:
          "Survey evidence for Iron Age I highland settlement, concentrated in the areas the allotments assign to Israel",
      },
      {
        sourceId: "dever-early-israelites",
        supportedClaim:
          "The same survey data read as indigenous emergence with some outside element",
      },
      {
        sourceId: "hess-joshua",
        supportedClaim:
          "The argument that the city lists and boundary descriptions reflect genuine second-millennium administrative forms",
      },
      {
        sourceId: "aharoni-land-of-bible",
        supportedClaim:
          "Boundary reconstruction and the administrative logic of the tribal lists",
      },
      {
        sourceId: "haran-levitical-cities",
        supportedClaim:
          "Whether the Levitical city lists describe a functioning system, an ideal, or a later arrangement",
      },
      {
        sourceId: "weinfeld-promise-land",
        supportedClaim:
          "The ideology of land grant and inheritance behind the allotment material",
      },
      {
        sourceId: "goldsworthy-according-to-plan",
        supportedClaim:
          "Distinguishing typological fulfilment from direct prediction, as in the reading of rest in Hebrews 4",
      },
      {
        sourceId: "mitchell-together-in-land",
        supportedClaim:
          "The book holds gift and unfinished responsibility together without resolving them",
      },
    ],
  },
];

/* ------------------------------------------------------------------ */
/* Lookup helpers                                                     */
/* ------------------------------------------------------------------ */

export const DIFFICULT_QUESTION_BY_ID: Record<string, DifficultQuestion> =
  Object.fromEntries(DIFFICULT_QUESTIONS.map((q) => [q.id, q]));

export function getDifficultQuestion(id: string): DifficultQuestion | undefined {
  return DIFFICULT_QUESTION_BY_ID[id];
}
