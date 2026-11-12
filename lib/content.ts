export interface BookVolume {
  slug: string;
  series: "literary-compass" | "authored-books";
  badgeLabel: string;
  semester: string;
  semesterNumber: number;
  title: string;
  subtitle: string;
  theme: string;
  color: string;
  coverImage: string;
  coverWidth: number;
  coverHeight: number;
  description: string;
  coverage: string;
  coverageNote?: string;
  course: string;
  university: string;
  roleLabel?: string;
  chiefEditor: string;
  coEditors?: string;
  publisher: string;
  publisherContact?: string;
  availability: string;
  amazonUrl?: string;
  syllabusTag?: string;
  features: string[];
}

export const seriesInfo = {
  title: "The Literary Compass",
  tagline: "A Complete Companion for BA English Literature",
  description1:
    "Six semesters form a connected journey through literary history, texts and ideas. The Literary Compass supports that journey with accessible explanations and structured opportunities for revision. The series is based on the syllabus of Maharaja Ganga Singh University, Bikaner, for BA English Literature under NEP.",
  description2:
    "Each volume brings together literary foundations and critical study with student-friendly support. Detailed summaries, glossaries, passage explanations, answered questions and MCQs help readers connect understanding with written expression and examination practice.",
  chiefEditor: "Professor Avinash Jodha",
  coEditors: "Dr. Manish Maharshi, Dr. Sunita Nain and Dr. Neetu Bissa",
  publisher: "Surya Prakashan Mandir, Bikaner",
  publisherContact: "Dr. Prashant Bissa",
  studySupport: [
    "Literary foundations",
    "Critical study",
    "Detailed summaries",
    "Glossaries",
    "Passage explanations",
    "Answered questions",
    "MCQs",
  ],
  audiences: [
    {
      audience: "For students",
      description:
        "Choose the volume for your semester and check it against the syllabus and paper you are studying.",
      action: "Explore volumes",
      link: "#volumes",
    },
    {
      audience: "For teachers and libraries",
      description:
        "Contact the publisher about availability, review-copy enquiries and institutional purchases.",
      action: "Contact publisher",
      link: "/contact",
    },
    {
      audience: "For booksellers",
      description:
        "Enquire about supply, editions, pricing and distribution arrangements.",
      action: "Trade enquiry",
      link: "/contact",
    },
  ],
  orderingInfo:
    "For current prices, stock and delivery charges, contact Surya Prakashan Mandir. Please specify the semester, number of copies and delivery PIN code.",
};

export const books: BookVolume[] = [
  {
    slug: "semester-i",
    series: "literary-compass",
    badgeLabel: "VOL. 01",
    semester: "Semester I",
    semesterNumber: 1,
    title:
      "Sixteenth and Seventeenth Century Literature with Indian Devotional Writing",
    subtitle: "Renaissance, metaphysical and devotional writing",
    theme: "Renaissance, metaphysical and devotional writing",
    color: "#a74d35",
    coverImage: "/sem-1.jpeg",
    coverWidth: 1028,
    coverHeight: 1408,
    syllabusTag: "MGSU NEP Syllabus",
    description:
      "This volume introduces the intellectual and imaginative worlds of sixteenth- and seventeenth-century literature alongside Indian devotional writing. It brings reflection, spiritual inquiry, ambition and ethical life into a connected course of study. Bacon and Montaigne offer routes into the essay; Bunyan and Macbeth invite attention to spiritual struggle and moral choice. Meera, Kabir and Tiruvalluvar widen the discussion through devotion and self-knowledge. Literary foundations, critical study, summaries, glossaries and answered practice help students move from understanding a text to explaining its concerns.",
    coverage:
      "Bacon, Montaigne, Bunyan and Macbeth; Meera, Kabir and Tiruvalluvar.",
    course: "BA English Literature, Semester I",
    university: "Maharaja Ganga Singh University, Bikaner",
    chiefEditor: "Professor Avinash Jodha",
    coEditors: "Dr. Manish Maharshi, Dr. Sunita Nain and Dr. Neetu Bissa",
    publisher: "Surya Prakashan Mandir, Bikaner",
    availability: "Please contact the publisher for current details.",
    features: [
      "Literary foundations & historical contexts",
      "Critical studies & scene-by-scene analysis",
      "Detailed chapter summaries & character analyses",
      "Comprehensive glossaries of literary & archaic terms",
      "Passage explanations with reference to context",
      "Model answered questions & examination MCQs",
    ],
  },
  {
    slug: "semester-ii",
    series: "literary-compass",
    badgeLabel: "VOL. 02",
    semester: "Semester II",
    semesterNumber: 2,
    title:
      "Eighteenth Century and Romantic Literature with Voices from India",
    subtitle: "Order, nature and the Romantic imagination",
    theme: "Order, nature and the Romantic imagination",
    color: "#68745d",
    coverImage: "/sem-2.jpeg",
    coverWidth: 1086,
    coverHeight: 1448,
    syllabusTag: "MGSU NEP Syllabus",
    description:
      "Follow the movement from eighteenth-century order towards Romantic feeling, nature and imagination. This volume brings together literary context, close reading and student-friendly explanation. The poetry of Gray, Blake, Keats, Shelley, Wordsworth and Coleridge opens questions about memory, creativity and the inward life. Defoe and Goldsmith extend the study into narrative and comedy. Critical discussions, detailed summaries, glossaries, passage explanations and answered questions provide support for reading and revision.",
    coverage:
      "Gray, Blake, Keats, Shelley, Wordsworth and Coleridge; Defoe and Goldsmith.",
    course: "BA English Literature, Semester II",
    university: "Maharaja Ganga Singh University, Bikaner",
    chiefEditor: "Professor Avinash Jodha",
    coEditors: "Dr. Manish Maharshi, Dr. Sunita Nain and Dr. Neetu Bissa",
    publisher: "Surya Prakashan Mandir, Bikaner",
    availability: "Please contact the publisher for current details.",
    features: [
      "Transition from Neoclassicism to Romantic sensibility",
      "Close readings of canonical Romantic lyricists",
      "Prose and narrative explorations (Defoe & Goldsmith)",
      "Indian voices interacting with Romantic ideals",
      "Stanza-by-stanza annotations & critical commentary",
      "Answered examination questions & objective revision practice",
    ],
  },
  {
    slug: "semester-iii",
    series: "literary-compass",
    badgeLabel: "VOL. 03",
    semester: "Semester III",
    semesterNumber: 3,
    title: "Nineteenth Century Literature with Voices from India",
    subtitle: "Victorian literature and the questions of art",
    theme: "Victorian literature and the questions of art",
    color: "#716f68",
    coverImage: "/sem-3.jpeg",
    coverWidth: 1086,
    coverHeight: 1448,
    syllabusTag: "MGSU NEP Syllabus",
    description:
      "Explore a literary world shaped by changing beliefs, social pressures and artistic ambition. This volume considers the tensions between beauty and responsibility, certainty and doubt, private feeling and public life. Victorian poetry is studied alongside Chekhov, Wilde and Indian spiritual and ethical voices. The explanations connect literary contexts with the experience of reading individual works. Summaries, glossaries, answered questions, passage explanations and MCQs support students as they develop their own understanding and prepare for assessment.",
    coverage:
      "Victorian poetry, Chekhov and Wilde; Indian spiritual and ethical voices.",
    course: "BA English Literature, Semester III",
    university: "Maharaja Ganga Singh University, Bikaner",
    chiefEditor: "Professor Avinash Jodha",
    coEditors: "Dr. Manish Maharshi, Dr. Sunita Nain and Dr. Neetu Bissa",
    publisher: "Surya Prakashan Mandir, Bikaner",
    availability: "Please contact the publisher for current details.",
    features: [
      "Industrialization, faith and scientific doubt",
      "Aestheticism and dramatic art (Chekhov and Wilde)",
      "Dialogue between Victorian dilemmas and Indian ethical traditions",
      "Detailed dramatic summaries & character sketches",
      "Selected passage explanations with critical nuance",
      "Full examination support: short answers, essays & MCQs",
    ],
  },
  {
    slug: "semester-iv",
    series: "literary-compass",
    badgeLabel: "VOL. 04",
    semester: "Semester IV",
    semesterNumber: 4,
    title: "Twentieth Century Literature",
    subtitle: "Modern literature, identity and freedom",
    theme: "Modern literature, identity and freedom",
    color: "#4a6a7c",
    coverImage: "/sem-4.jpeg",
    coverWidth: 1024,
    coverHeight: 1536,
    syllabusTag: "MGSU NEP Syllabus",
    description:
      "This volume explores twentieth-century literature through questions of identity, conscience and freedom. Poetry, fiction, drama and reflective writing illuminate the relationship between individual lives and a changing world. Golding and Shaw are studied alongside Gandhi, Bharati and Tagore, bringing literary imagination into conversation with ethical and social concerns. Literary foundations and critical explanations guide reading, while detailed summaries, glossaries, passage explanations and answered practice support revision.",
    coverage:
      "Twentieth-century poetry, Golding and Shaw; Gandhi, Bharati and Tagore.",
    course: "BA English Literature, Semester IV",
    university: "Maharaja Ganga Singh University, Bikaner",
    chiefEditor: "Professor Avinash Jodha",
    coEditors: "Dr. Manish Maharshi, Dr. Sunita Nain and Dr. Neetu Bissa",
    publisher: "Surya Prakashan Mandir, Bikaner",
    availability: "Please contact the publisher for current details.",
    features: [
      "Modernist angst, alienation and social critique",
      "Dramatic realism and allegory (Shaw & Golding)",
      "National awakening & ethical vision (Gandhi, Bharati, Tagore)",
      "Textual analyses contextualized with 20th-century history",
      "Glossaries of modernist concepts and political references",
      "Comprehensive question banks with model solutions",
    ],
  },
  {
    slug: "semester-v",
    series: "literary-compass",
    badgeLabel: "VOL. 05",
    semester: "Semester V",
    semesterNumber: 5,
    title: "Indian Writing in English",
    subtitle: "Tradition, change and belonging",
    theme: "Tradition, change and belonging",
    color: "#7a5c3a",
    coverImage: "/sem-5.jpeg",
    coverWidth: 1024,
    coverHeight: 1536,
    syllabusTag: "MGSU NEP Syllabus",
    description:
      "Discover Indian Writing in English through poetry, fiction, drama and national thought. This volume places tradition, change and belonging at the centre of literary study. It introduces the relationships between private experience and wider social questions, including memory, identity, gender and responsibility. Markandaya, Dattani, Mitra and Kalam form part of a range that invites students to consider the variety of Indian literary expression. Critical studies, summaries, glossaries and answered practice support close reading and examination preparation.",
    coverage:
      "Indian poetry and fiction; Markandaya, Dattani, Mitra and Kalam.",
    course: "BA English Literature, Semester V",
    university: "Maharaja Ganga Singh University, Bikaner",
    chiefEditor: "Professor Avinash Jodha",
    coEditors: "Dr. Manish Maharshi, Dr. Sunita Nain and Dr. Neetu Bissa",
    publisher: "Surya Prakashan Mandir, Bikaner",
    availability: "Please contact the publisher for current details.",
    features: [
      "Postcolonial perspectives and indigenous idioms",
      "The politics of gender, caste and identity in modern India",
      "The evolution of Indian English drama, fiction and non-fiction",
      "Close readings of Markandaya, Dattani, Mitra and Kalam",
      "Critical vocabularies on diaspora and nationhood",
      "Comprehensive revision summaries and examination answers",
    ],
  },
  {
    slug: "semester-vi",
    series: "literary-compass",
    badgeLabel: "VOL. 06",
    semester: "Semester VI",
    semesterNumber: 6,
    title: "Contemporary World Literature",
    subtitle: "Home, memory and human dignity",
    theme: "Home, memory and human dignity",
    color: "#5a3e5e",
    coverImage: "/sem-6.jpeg",
    coverWidth: 1024,
    coverHeight: 1536,
    syllabusTag: "MGSU NEP Syllabus",
    description:
      "Read contemporary world literature through questions of home, exile, memory and human dignity. This volume brings together Hosseini, Soyinka, Dharwadker and Shiva to explore the ways literature and thought engage with cultural identity, change and responsibility. Its accessible explanations connect individual experience with wider historical and social concerns. Critical discussions, detailed summaries, glossaries, passage explanations, answered questions and MCQs help students build understanding and revise with purpose.",
    coverage:
      "Hosseini, Soyinka, Dharwadker and Shiva; home, exile, memory and dignity.",
    course: "BA English Literature, Semester VI",
    university: "Maharaja Ganga Singh University, Bikaner",
    chiefEditor: "Professor Avinash Jodha",
    coEditors: "Dr. Manish Maharshi, Dr. Sunita Nain and Dr. Neetu Bissa",
    publisher: "Surya Prakashan Mandir, Bikaner",
    availability: "Please contact the publisher for current details.",
    features: [
      "Transnational narratives, diaspora and political exile",
      "Ecocritical thought, human dignity and cultural resistance",
      "Explorations of Hosseini, Soyinka, Dharwadker and Vandana Shiva",
      "Global literary movements and postcolonial ethics",
      "Contextual glossaries and thematic study guides",
      "Model analytical answers and complete MCQ revision",
    ],
  },
  {
    slug: "hppsc-paper-1-himachal-pradesh",
    series: "authored-books",
    badgeLabel: "PAPER 01",
    semester: "HPPSC Paper One",
    semesterNumber: 7,
    title: "Himachal Pradesh: History, Geography, Culture & Polity",
    subtitle: "Textbook + MCQs · Complete Paper One for Assistant Professors HPPSC",
    theme: "History, Geography, Culture & Polity of Himachal Pradesh",
    color: "#1a365d",
    coverImage: "/HPPSC-papper-1.png",
    coverWidth: 1070,
    coverHeight: 1470,
    syllabusTag: "HPPSC Assistant Professor",
    description:
      "A complete Paper One textbook and MCQ companion prepared for HPPSC Assistant Professor aspirants. It brings together the history, geography, culture and polity of Himachal Pradesh with exam-focused, high-yield MCQs and accurate, updated material to support structured preparation.",
    coverage:
      "History, Geography, Culture, and Polity of Himachal Pradesh with exam-focused MCQs.",
    coverageNote:
      "Complete Paper One study guide and MCQ practice for Himachal Pradesh Public Service Commission (HPPSC) Assistant Professor examinations.",
    course: "HPPSC Assistant Professor — Paper I",
    university: "Himachal Pradesh Public Service Commission",
    roleLabel: "Author",
    chiefEditor: "Professor Avinash Jodha",
    publisher: "Available on Amazon India",
    availability: "Available to order directly on Amazon India.",
    amazonUrl: "https://amzn.in/d/0cX6IWHq",
    features: [
      "Complete Paper One coverage for Assistant Professors HPPSC",
      "Structured sections on History, Geography, Culture & Polity",
      "Exam-focused high-yield MCQs for rapid revision",
      "Accurate and updated subject material",
      "Designed specifically for HPPSC aspirants",
    ],
  },
  {
    slug: "hppsc-paper-2-descriptive-english",
    series: "authored-books",
    badgeLabel: "PAPER 02",
    semester: "HPPSC English (Paper II)",
    semesterNumber: 8,
    title: "Descriptive Subject Aptitude Test (English) — Paper Second",
    subtitle: "Complete Study Guide, Question & Answer Bank",
    theme: "HPPSC Assistant Professor (English), NET JRF & State PSC Exams",
    color: "#0f2c59",
    coverImage: "/HPPSC-paper-2.png",
    coverWidth: 1071,
    coverHeight: 1469,
    syllabusTag: "HPPSC Paper II · NET JRF",
    description:
      "A comprehensive study guide and descriptive question-and-answer bank compiled by Dr. Avinash Jodha for the HPPSC Assistant Professor (English) Paper Second Descriptive Subject Aptitude Test, as well as NET JRF and other State Public Service Commission examinations. Covers Units I to XII with introductions, stress-buster boxes, and glossaries.",
    coverage:
      "Units I – XII with Introductions, Stress-Buster Boxes, Glossaries, and Question & Answer Bank.",
    coverageNote:
      "Designed for HPPSC Assistant Professor (English) Paper Second, UGC NET/JRF, and other State Public Service Commission examinations.",
    course: "HPPSC Assistant Professor (English) — Paper II",
    university: "HPPSC · NET JRF & State PSC Examinations",
    roleLabel: "Compiled by",
    chiefEditor: "Professor Avinash Jodha",
    publisher: "Available on Amazon India",
    availability: "Available to order directly on Amazon India.",
    amazonUrl: "https://amzn.in/d/0eCg8zxd",
    features: [
      "Complete coverage of Units I – XII for Paper Second",
      "Comprehensive Question & Answer Bank for descriptive writing",
      "Unit introductions and Stress-Buster Boxes for revision",
      "Targeted glossaries of critical and literary terms",
      "Ideal for HPPSC Assistant Professor, NET JRF & State PSC exams",
    ],
  },
  {
    slug: "michael-ondaatjes-fiction-poetics-of-exile",
    series: "authored-books",
    badgeLabel: "MONOGRAPH",
    semester: "Critical Monograph",
    semesterNumber: 9,
    title: "Michael Ondaatje's Fiction: Poetics of Exile",
    subtitle: "Postcolonial diaspora, memory and displacement",
    theme: "Poetics of exile, diaspora, memory and personal histories",
    color: "#25537a",
    coverImage: "/Michael_Ondaatje.png",
    coverWidth: 1070,
    coverHeight: 1470,
    syllabusTag: "Academic Monograph · 2011",
    description:
      "A comprehensive critical monograph examining the themes of diaspora, memory, personal histories, and the poetics of displacement in the narrative works of Sri Lankan-Canadian author Michael Ondaatje.",
    coverage:
      "Diaspora, memory, personal histories, and the poetics of displacement across Michael Ondaatje's fiction.",
    coverageNote:
      "Published critical monograph by Professor Avinash Jodha (Rawat Publications, New Delhi and Jaipur, 2011; ISBN 978-8131604526).",
    course: "Postcolonial & Diaspora Literary Studies",
    university: "Literary Criticism & Diaspora Research",
    roleLabel: "Author",
    chiefEditor: "Professor Avinash Jodha",
    publisher: "Rawat Publications, New Delhi and Jaipur",
    availability: "Available on Amazon India and through Rawat Publications.",
    amazonUrl: "https://amzn.in/d/08Y68iVa",
    features: [
      "Critical examination of Michael Ondaatje's major fiction",
      "Thematic focus on poetics of displacement and return",
      "Analysis of diaspora, memory, and personal histories",
      "Explorations of historiographic metafiction and narrative form",
      "Published by Rawat Publications (ISBN 978-8131604526)",
    ],
  },
];

export const navItems = [
  ["About", "/about"],
  ["Books", "/books"],
  ["Research", "/research"],
  ["Creative Work", "/creative-work"],
  ["Teaching", "/teaching"],
  ["Events & Resources", "/events"],

  ["Contact", "/contact"],
] as const;
