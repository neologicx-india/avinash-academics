export interface BookVolume {
  slug: string;
  semester: string;
  semesterNumber: number;
  title: string;
  subtitle: string;
  theme: string;
  color: string;
  description: string;
  coverage: string;
  course: string;
  university: string;
  chiefEditor: string;
  coEditors: string;
  publisher: string;
  publisherContact?: string;
  availability: string;
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
    semester: "Semester I",
    semesterNumber: 1,
    title:
      "Sixteenth and Seventeenth Century Literature with Indian Devotional Writing",
    subtitle: "Renaissance, metaphysical and devotional writing",
    theme: "Renaissance, metaphysical and devotional writing",
    color: "#a74d35",
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
    semester: "Semester II",
    semesterNumber: 2,
    title:
      "Eighteenth Century and Romantic Literature with Voices from India",
    subtitle: "Order, nature and the Romantic imagination",
    theme: "Order, nature and the Romantic imagination",
    color: "#68745d",
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
    semester: "Semester III",
    semesterNumber: 3,
    title: "Nineteenth Century Literature with Voices from India",
    subtitle: "Victorian literature and the questions of art",
    theme: "Victorian literature and the questions of art",
    color: "#716f68",
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
    semester: "Semester IV",
    semesterNumber: 4,
    title: "Twentieth Century Literature",
    subtitle: "Modern literature, identity and freedom",
    theme: "Modern literature, identity and freedom",
    color: "#4a6a7c",
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
    semester: "Semester V",
    semesterNumber: 5,
    title: "Indian Writing in English",
    subtitle: "Tradition, change and belonging",
    theme: "Tradition, change and belonging",
    color: "#7a5c3a",
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
    semester: "Semester VI",
    semesterNumber: 6,
    title: "Contemporary World Literature",
    subtitle: "Home, memory and human dignity",
    theme: "Home, memory and human dignity",
    color: "#5a3e5e",
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
