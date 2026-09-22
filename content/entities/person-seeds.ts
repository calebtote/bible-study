/**
 * Named people in Joshua, plus the figures from earlier books the narrative keeps
 * reaching back to.
 *
 * Rule for this file: nothing here may supply a motive, an age, a date, or a
 * family detail the text does not give. Where a figure is barely more than a name
 * in a list, the seed says so. `whatWeAreNotTold` exists to make those gaps
 * visible rather than quietly filling them.
 */

export interface PersonSeed {
  id: string;
  name: string;
  alt?: string[];
  /** One line, plain language, for lists and hover cards. */
  summary: string;
  /** Relationships the text states outright. Inferred links are marked in the dossier. */
  statedRelations: string[];
  chapters: number[];
  /** Whether the figure gets a full curated profile in the character explorer. */
  profile: "full" | "brief";
  /** Named gaps. These are rendered as "What we are not told". */
  notTold?: string[];
}

export const PERSON_SEEDS: PersonSeed[] = [
  /* ---- Principal figures ---- */
  {
    id: "joshua",
    name: "Joshua",
    alt: ["Hoshea (Numbers 13:16)", "Joshua son of Nun"],
    summary:
      "Moses' assistant, one of the two scouts who brought back a minority report, and the leader under whom Israel crosses the Jordan, fights the campaigns, and divides the land.",
    statedRelations: [
      "son of Nun",
      "of the tribe of Ephraim",
      "assistant to Moses",
      "commissioned alongside Eleazar the priest",
    ],
    chapters: [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 17, 18, 19, 20, 21, 22, 23, 24],
    profile: "full",
    notTold: [
      "His age at any point except the note that he was 110 when he died",
      "Anything about his family beyond his father's name: no wife or children are mentioned",
      "How he was trained, or what he did during the Egypt years",
    ],
  },
  {
    id: "caleb",
    name: "Caleb",
    alt: ["Caleb son of Jephunneh", "Caleb the Kenizzite"],
    summary:
      "The other scout who urged Israel to go up, and the one man who claims a specific promise forty-five years later and gets it. He asks for the hill country with the fortified towns rather than easy land.",
    statedRelations: [
      "son of Jephunneh",
      "called the Kenizzite",
      "reckoned with the tribe of Judah",
      "father of Achsah",
      "connected with Othniel son of Kenaz, who marries Achsah",
    ],
    chapters: [14, 15, 21],
    profile: "full",
    notTold: [
      "How a Kenizzite comes to be counted in Judah, which the text states without explaining",
      "The exact family relationship between Caleb and Othniel, which the Hebrew leaves ambiguous",
    ],
  },
  {
    id: "rahab",
    name: "Rahab",
    summary:
      "A woman in Jericho, described as a prostitute, who hides the two Israelite scouts, makes a confession about what she has heard of Israel's God, negotiates for her family, and survives the city's fall.",
    statedRelations: [
      "her father, mother, brothers and all her household are spared with her",
      "her family is settled outside the camp, and the text says her descendants remained in Israel",
    ],
    chapters: [2, 6],
    profile: "full",
    notTold: [
      "Her age, her history, or how she came to know what she reports about Israel",
      "Whether the scouts' visit to her house involved anything beyond shelter, which the text does not say",
      "Any connection to the Rahab of Matthew's genealogy is stated only in the New Testament, not in Joshua",
    ],
  },
  {
    id: "achan",
    name: "Achan",
    alt: ["Achar (1 Chronicles 2:7)"],
    summary:
      "A man of Judah who takes devoted goods from Jericho. The defeat at Ai is traced to his act, and he and his household are destroyed in the Valley of Achor.",
    statedRelations: [
      "son of Carmi",
      "son of Zabdi",
      "of the family of Zerah",
      "of the tribe of Judah",
      "his sons and daughters are named as present at the judgement",
    ],
    chapters: [7, 22],
    profile: "full",
    notTold: [
      "Whether his household knew of the theft, which the narrative never states",
      "How many people died with him, or their names",
      "What he intended to do with the goods beyond his own statement that he coveted them",
    ],
  },
  {
    id: "moses",
    name: "Moses",
    summary:
      "The leader who brought Israel out of Egypt, received the covenant at Sinai, and died east of the Jordan without entering the land. Joshua opens with his death and keeps citing his instructions as binding.",
    statedRelations: [
      "described repeatedly as the servant of the LORD",
      "Joshua is his assistant and successor",
      "brother of Aaron",
      "assigned the Transjordan territories to Reuben, Gad and half of Manasseh before his death",
    ],
    chapters: [1, 4, 8, 9, 11, 12, 13, 14, 17, 18, 20, 21, 22, 23, 24],
    profile: "full",
  },
  {
    id: "eleazar",
    name: "Eleazar",
    summary:
      "The high priest who casts lots with Joshua to assign the tribal inheritances, and whose name stands first in the allotment formula. He is buried in the hill country of Ephraim at the book's close.",
    statedRelations: [
      "son of Aaron",
      "father of Phinehas",
      "acts jointly with Joshua and the tribal heads in the allotment",
    ],
    chapters: [14, 17, 19, 21, 22, 24],
    profile: "full",
    notTold: ["His age, or the length of his service alongside Joshua"],
  },
  {
    id: "phinehas",
    name: "Phinehas",
    summary:
      "A priest who leads the delegation to the eastern tribes over the altar by the Jordan, and who defuses a crisis that had already reached the point of mustering for war.",
    statedRelations: ["son of Eleazar", "grandson of Aaron"],
    chapters: [22],
    profile: "full",
    notTold: [
      "Why Phinehas rather than Eleazar leads the delegation, which the text does not explain",
    ],
  },
  {
    id: "othniel",
    name: "Othniel",
    summary:
      "The man who takes Debir at Caleb's challenge and marries Achsah. He later appears in Judges as the first of the deliverers.",
    statedRelations: [
      "son of Kenaz",
      "described in relation to Caleb in terms the Hebrew leaves open",
      "husband of Achsah",
    ],
    chapters: [15],
    profile: "full",
    notTold: [
      "Whether he is Caleb's younger brother or his nephew: the Hebrew phrase can support either, and translations differ",
    ],
  },
  {
    id: "achsah",
    name: "Achsah",
    summary:
      "Caleb's daughter, who having been given land in the Negev asks her father for springs as well, on the grounds that dry land without water is not much of a gift. She gets them.",
    statedRelations: ["daughter of Caleb", "wife of Othniel"],
    chapters: [15],
    profile: "full",
    notTold: [
      "Anything of her life after this exchange; she appears in the allotment narrative and in the parallel at Judges 1",
    ],
  },
  {
    id: "zelophehads-daughters",
    name: "The daughters of Zelophehad",
    alt: ["Mahlah", "Noah", "Hoglah", "Milcah", "Tirzah"],
    summary:
      "Five sisters from Manasseh who had successfully petitioned Moses for an inheritance in the absence of brothers, and who receive their portion in Joshua 17.",
    statedRelations: [
      "daughters of Zelophehad son of Hepher, of the clan of Manasseh",
      "their case was settled earlier under Moses in Numbers 27 and 36",
    ],
    chapters: [17],
    profile: "full",
    notTold: [
      "Their ages, or whether all five were still living at the allotment",
    ],
  },

  /* ---- Family lines named in the text ---- */
  {
    id: "nun",
    name: "Nun",
    summary: "Joshua's father, named only as part of Joshua's identification.",
    statedRelations: ["father of Joshua", "of Ephraim"],
    chapters: [1],
    profile: "brief",
    notTold: ["Everything except the name and the tribe"],
  },
  {
    id: "jephunneh",
    name: "Jephunneh",
    summary: "Caleb's father, named in Caleb's standard identification.",
    statedRelations: ["father of Caleb"],
    chapters: [14, 15],
    profile: "brief",
    notTold: ["Everything except the name"],
  },
  {
    id: "kenaz",
    name: "Kenaz",
    summary: "Othniel's father, and the name behind the term Kenizzite applied to Caleb.",
    statedRelations: ["father of Othniel"],
    chapters: [15],
    profile: "brief",
    notTold: [
      "Whether the Kenaz in Othniel's name and the Kenizzite designation of Caleb refer to the same ancestry, which the text does not spell out",
    ],
  },
  {
    id: "carmi",
    name: "Carmi",
    summary: "Achan's father, named in the genealogy that identifies him.",
    statedRelations: ["father of Achan", "son of Zabdi"],
    chapters: [7],
    profile: "brief",
  },
  {
    id: "zabdi",
    name: "Zabdi",
    summary: "Achan's grandfather, named in the narrowing search that identifies Achan.",
    statedRelations: ["grandfather of Achan", "of the family of Zerah"],
    chapters: [7],
    profile: "brief",
  },
  {
    id: "zerah",
    name: "Zerah",
    summary:
      "The clan ancestor within Judah to which Achan belongs. The lot narrows tribe, then clan, then household, then man.",
    statedRelations: ["ancestor of Achan's clan", "of Judah"],
    chapters: [7],
    profile: "brief",
  },
  {
    id: "aaron",
    name: "Aaron",
    summary:
      "Moses' brother and Israel's first high priest, dead before Joshua begins. He matters here as Eleazar's father and the head of the priestly line.",
    statedRelations: ["brother of Moses", "father of Eleazar"],
    chapters: [14, 21, 24],
    profile: "brief",
  },
  {
    id: "joseph",
    name: "Joseph",
    summary:
      "Jacob's son, sold into Egypt, whose bones Israel carries out of Egypt and buries at Shechem in the final chapter, closing a promise made generations earlier.",
    statedRelations: [
      "son of Jacob",
      "father of Ephraim and Manasseh, whose tribes take the central hill country",
    ],
    chapters: [17, 24],
    profile: "full",
  },
  {
    id: "abraham",
    name: "Abraham",
    summary:
      "The man to whom the land promise is first made. Joshua's closing speech traces Israel's story back past him to his father's household beyond the river.",
    statedRelations: ["father of Isaac", "buried at Hebron"],
    chapters: [24],
    profile: "full",
  },
  {
    id: "isaac",
    name: "Isaac",
    summary: "Abraham's son, to whom the promise passes.",
    statedRelations: ["son of Abraham", "father of Jacob and Esau"],
    chapters: [24],
    profile: "brief",
  },
  {
    id: "jacob",
    name: "Jacob",
    summary:
      "Isaac's son, whose family goes down to Egypt, and whose purchase of ground at Shechem is the reason Joseph can be buried there.",
    statedRelations: ["son of Isaac", "father of the twelve tribal ancestors"],
    chapters: [24],
    profile: "full",
  },
  {
    id: "terah",
    name: "Terah",
    summary:
      "Abraham's father, mentioned in Joshua 24 as having lived beyond the Euphrates and served other gods. The detail is there to make a point about where Israel came from.",
    statedRelations: ["father of Abraham and Nahor"],
    chapters: [24],
    profile: "brief",
  },
  {
    id: "balaam",
    name: "Balaam",
    summary:
      "A diviner hired by Moab to curse Israel, who blessed them instead. Joshua 13 notes in passing that Israel killed him, and Joshua 24 recalls the episode.",
    statedRelations: ["son of Beor", "hired by Balak king of Moab"],
    chapters: [13, 24],
    profile: "brief",
    notTold: [
      "How the Balaam of the blessings becomes the Balaam killed in battle; the books report both without reconciling them",
    ],
  },
  {
    id: "balak",
    name: "Balak",
    summary: "The king of Moab who hired Balaam, recalled in Joshua 24.",
    statedRelations: ["son of Zippor", "king of Moab"],
    chapters: [24],
    profile: "brief",
  },
  {
    id: "hepher",
    name: "Hepher",
    summary: "Zelophehad's father, named in the Manasseh clan lists.",
    statedRelations: ["father of Zelophehad", "of the clan of Manasseh"],
    chapters: [17],
    profile: "brief",
  },
  {
    id: "zelophehad",
    name: "Zelophehad",
    summary:
      "A man of Manasseh who died leaving five daughters and no sons, which is why his case reaches the allotment at all.",
    statedRelations: ["son of Hepher", "father of five daughters"],
    chapters: [17],
    profile: "brief",
  },
  {
    id: "machir",
    name: "Machir",
    summary: "The firstborn clan of Manasseh, associated with Gilead in the allotment lists.",
    statedRelations: ["firstborn of Manasseh", "father of Gilead in the clan lists"],
    chapters: [13, 17],
    profile: "brief",
  },

  /* ---- Kings and opponents ---- */
  {
    id: "adoni-zedek",
    name: "Adoni-zedek",
    summary:
      "The king of Jerusalem who assembles four other kings against Gibeon for making peace with Israel, and who is captured in the cave at Makkedah.",
    statedRelations: ["king of Jerusalem", "convenes the coalition of five kings"],
    chapters: [10],
    profile: "brief",
    notTold: [
      "Whether he held any authority over the other four kings beyond convening them",
    ],
  },
  {
    id: "hoham",
    name: "Hoham",
    summary: "King of Hebron, one of the five in the southern coalition.",
    statedRelations: ["king of Hebron", "member of the five-king coalition"],
    chapters: [10],
    profile: "brief",
    notTold: ["Everything except his name, his city, and his death"],
  },
  {
    id: "piram",
    name: "Piram",
    summary: "King of Jarmuth, one of the five in the southern coalition.",
    statedRelations: ["king of Jarmuth", "member of the five-king coalition"],
    chapters: [10],
    profile: "brief",
    notTold: ["Everything except his name, his city, and his death"],
  },
  {
    id: "japhia",
    name: "Japhia",
    summary: "King of Lachish, one of the five in the southern coalition.",
    statedRelations: ["king of Lachish", "member of the five-king coalition"],
    chapters: [10],
    profile: "brief",
    notTold: ["Everything except his name, his city, and his death"],
  },
  {
    id: "debir-king",
    name: "Debir (king of Eglon)",
    summary:
      "King of Eglon, one of the five in the southern coalition. His name is the same as the town of Debir, which is a common source of confusion.",
    statedRelations: ["king of Eglon", "member of the five-king coalition"],
    chapters: [10],
    profile: "brief",
    notTold: ["Everything except his name, his city, and his death"],
  },
  {
    id: "jabin",
    name: "Jabin",
    summary:
      "The king of Hazor who assembles the northern coalition. A king of the same name appears later in Judges 4, which raises a question the texts do not resolve.",
    statedRelations: ["king of Hazor", "convenes the northern coalition"],
    chapters: [11, 12],
    profile: "brief",
    notTold: [
      "The relationship, if any, between this Jabin and the Jabin of Judges 4; the name may be dynastic",
    ],
  },
  {
    id: "jobab",
    name: "Jobab",
    summary: "King of Madon in the northern coalition.",
    statedRelations: ["king of Madon"],
    chapters: [11],
    profile: "brief",
    notTold: ["Everything except his name and his city, which is itself unlocated"],
  },
  {
    id: "horam",
    name: "Horam",
    summary:
      "King of Gezer, who comes to help Lachish and is defeated in the field. His city is not said to be taken.",
    statedRelations: ["king of Gezer"],
    chapters: [10],
    profile: "brief",
  },
  {
    id: "sihon",
    name: "Sihon",
    summary:
      "The Amorite king of Heshbon, defeated east of the Jordan before Joshua begins. His territory becomes Reuben's and Gad's inheritance.",
    statedRelations: ["king of the Amorites", "ruled from Heshbon"],
    chapters: [2, 9, 12, 13, 24],
    profile: "brief",
  },
  {
    id: "og",
    name: "Og",
    summary:
      "The king of Bashan, defeated at Edrei before Joshua begins, and described as a survivor of the Rephaim. His territory goes to half of Manasseh.",
    statedRelations: [
      "king of Bashan",
      "ruled from Ashtaroth and Edrei",
      "described as remaining of the Rephaim",
    ],
    chapters: [2, 9, 12, 13],
    profile: "brief",
  },
];

export const PERSON_SEED_BY_ID: Record<string, PersonSeed> = Object.fromEntries(
  PERSON_SEEDS.map((p) => [p.id, p])
);

export const FULL_PROFILE_IDS = PERSON_SEEDS.filter(
  (p) => p.profile === "full"
).map((p) => p.id);
