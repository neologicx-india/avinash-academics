export const books = [
  { slug: 'semester-i', semester: 'Semester I', title: 'Sixteenth and Seventeenth Century Literature with Indian Devotional Writing', theme: 'Renaissance, metaphysical and devotional writing', coverage: 'Bacon, Montaigne, Bunyan and Macbeth; Meera, Kabir and Tiruvalluvar.' },
  { slug: 'semester-ii', semester: 'Semester II', title: 'Eighteenth Century and Romantic Literature with Voices from India', theme: 'Order, nature and the Romantic imagination', coverage: 'Gray, Blake, Keats, Shelley, Wordsworth and Coleridge; Defoe and Goldsmith.' },
  { slug: 'semester-iii', semester: 'Semester III', title: 'Nineteenth Century Literature with Voices from India', theme: 'Victorian literature and the questions of art', coverage: 'Victorian poetry, Chekhov and Wilde; Indian spiritual and ethical voices.' },
  { slug: 'semester-iv', semester: 'Semester IV', title: 'Twentieth Century Literature', theme: 'Modern literature, identity and freedom', coverage: 'Twentieth-century poetry, Golding and Shaw; Gandhi, Bharati and Tagore.' },
  { slug: 'semester-v', semester: 'Semester V', title: 'Indian Writing in English', theme: 'Tradition, change and belonging', coverage: 'Indian poetry and fiction; Markandaya, Dattani, Mitra and Kalam.' },
  { slug: 'semester-vi', semester: 'Semester VI', title: 'Contemporary World Literature', theme: 'Home, memory and human dignity', coverage: 'Hosseini, Soyinka, Dharwadker and Shiva; home, exile, memory and dignity.' },
] as const

export const navItems = [
  ['About', '/about'], ['Books', '/books'], ['Research', '/research'], ['Creative Work', '/creative-work'], ['Teaching', '/teaching'], ['Events', '/events'], ['Resources', '/resources'], ['Contact', '/contact'],
] as const
