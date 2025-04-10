
export interface Skill {
  id: string;
  title: string;
  description: string;
  content: string;
  image: string;
  category: string;
  author: {
    id: string;
    name: string;
    avatar: string;
    bio: string;
  };
  stats: {
    likes: number;
    comments: number;
    lessons: number;
  };
  createdAt: string;
  lessons: {
    id: string;
    title: string;
    duration: string;
  }[];
}

export const categories = [
  "Programming",
  "Design",
  "Marketing",
  "Business",
  "Personal Development",
  "Music",
  "Photography",
  "Cooking",
  "Languages"
];

export const skillsData: Skill[] = [
  {
    id: "1",
    title: "Introduction to Web Development",
    description: "Learn the fundamentals of HTML, CSS, and JavaScript to build responsive websites.",
    content: "This comprehensive course will take you from beginner to proficient in web development. We'll start with HTML structure, move to CSS styling, and finish with dynamic JavaScript functionality. By the end, you'll be able to create your own responsive websites from scratch.",
    image: "https://images.unsplash.com/photo-1498050108023-c5249f4df085?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1172&q=80",
    category: "Programming",
    author: {
      id: "user1",
      name: "Alex Johnson",
      avatar: "https://randomuser.me/api/portraits/women/44.jpg",
      bio: "Frontend developer with 8 years of experience. Loves teaching web technologies and building user-friendly interfaces."
    },
    stats: {
      likes: 324,
      comments: 78,
      lessons: 12
    },
    createdAt: "2023-05-10",
    lessons: [
      { id: "1-1", title: "HTML Basics", duration: "45 min" },
      { id: "1-2", title: "CSS Fundamentals", duration: "55 min" },
      { id: "1-3", title: "Intro to JavaScript", duration: "60 min" }
    ]
  },
  {
    id: "2",
    title: "Digital Illustration for Beginners",
    description: "Master the art of digital illustration using industry-standard software and techniques.",
    content: "From sketching to final rendering, this course covers everything you need to know about digital illustration. You'll learn about color theory, composition, brushes, layers, and more using professional design software.",
    image: "https://images.unsplash.com/photo-1560421683-6856ea585c78?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1074&q=80",
    category: "Design",
    author: {
      id: "user2",
      name: "Samantha Lee",
      avatar: "https://randomuser.me/api/portraits/women/68.jpg",
      bio: "Professional illustrator and graphic designer with experience working for major advertising agencies and publishers."
    },
    stats: {
      likes: 452,
      comments: 96,
      lessons: 10
    },
    createdAt: "2023-04-18",
    lessons: [
      { id: "2-1", title: "Digital Drawing Basics", duration: "40 min" },
      { id: "2-2", title: "Color Theory", duration: "35 min" },
      { id: "2-3", title: "Digital Painting Techniques", duration: "50 min" }
    ]
  },
  {
    id: "3",
    title: "Social Media Marketing Strategy",
    description: "Learn how to create effective social media campaigns that drive engagement and conversions.",
    content: "Dive into the world of social media marketing with this strategic course. You'll learn how to build a social media presence, develop content calendars, engage with your audience, and measure your success across different platforms.",
    image: "https://images.unsplash.com/photo-1611162617213-7d7a39e9b1d7?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1074&q=80",
    category: "Marketing",
    author: {
      id: "user3",
      name: "Marcus Chen",
      avatar: "https://randomuser.me/api/portraits/men/32.jpg",
      bio: "Digital marketing expert specializing in social media strategy and analytics. Has worked with startups and Fortune 500 companies."
    },
    stats: {
      likes: 287,
      comments: 64,
      lessons: 8
    },
    createdAt: "2023-06-02",
    lessons: [
      { id: "3-1", title: "Platform Selection", duration: "30 min" },
      { id: "3-2", title: "Content Strategy", duration: "45 min" },
      { id: "3-3", title: "Analytics & Optimization", duration: "40 min" }
    ]
  },
  {
    id: "4",
    title: "Financial Planning for Entrepreneurs",
    description: "Develop the financial skills needed to start and grow a successful business.",
    content: "This practical course offers entrepreneurs the financial knowledge needed to manage money effectively. Topics include budgeting, forecasting, investment strategy, tax planning, and funding options.",
    image: "https://images.unsplash.com/photo-1579532536935-619928decd08?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80",
    category: "Business",
    author: {
      id: "user4",
      name: "Diana Reynolds",
      avatar: "https://randomuser.me/api/portraits/women/23.jpg",
      bio: "Financial advisor and former startup CFO with expertise in helping businesses navigate financial challenges and growth."
    },
    stats: {
      likes: 219,
      comments: 47,
      lessons: 11
    },
    createdAt: "2023-05-25",
    lessons: [
      { id: "4-1", title: "Business Budgeting", duration: "55 min" },
      { id: "4-2", title: "Funding Options", duration: "50 min" },
      { id: "4-3", title: "Financial Forecasting", duration: "45 min" }
    ]
  },
  {
    id: "5",
    title: "Mindfulness and Productivity",
    description: "Enhance your focus, reduce stress, and increase your productivity through mindfulness practices.",
    content: "Learn practical mindfulness techniques to improve your productivity and wellbeing. This course combines meditation practices, attention training, and workflow optimization strategies to help you achieve more while feeling centered and calm.",
    image: "https://images.unsplash.com/photo-1544367567-0f2fcb009e0b?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1220&q=80",
    category: "Personal Development",
    author: {
      id: "user5",
      name: "James Wilson",
      avatar: "https://randomuser.me/api/portraits/men/86.jpg",
      bio: "Mindfulness coach and productivity expert who has helped thousands of professionals achieve better work-life balance."
    },
    stats: {
      likes: 376,
      comments: 91,
      lessons: 9
    },
    createdAt: "2023-03-29",
    lessons: [
      { id: "5-1", title: "Introduction to Mindfulness", duration: "30 min" },
      { id: "5-2", title: "Focus Techniques", duration: "40 min" },
      { id: "5-3", title: "Mindful Productivity Systems", duration: "45 min" }
    ]
  },
  {
    id: "6",
    title: "Guitar for Absolute Beginners",
    description: "Start your musical journey with easy-to-follow guitar lessons for complete beginners.",
    content: "This beginner-friendly course will teach you everything you need to know to start playing the guitar. From choosing your first instrument to playing your first songs, you'll learn proper technique, basic chords, and simple melodies.",
    image: "https://images.unsplash.com/photo-1511379938547-c1f69419868d?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80",
    category: "Music",
    author: {
      id: "user6",
      name: "Carlos Mendez",
      avatar: "https://randomuser.me/api/portraits/men/54.jpg",
      bio: "Professional guitarist with 15 years of performing experience and 7 years teaching music to students of all ages."
    },
    stats: {
      likes: 412,
      comments: 103,
      lessons: 14
    },
    createdAt: "2023-02-14",
    lessons: [
      { id: "6-1", title: "Getting to Know Your Guitar", duration: "35 min" },
      { id: "6-2", title: "First Chords", duration: "45 min" },
      { id: "6-3", title: "Simple Songs", duration: "50 min" }
    ]
  },
  {
    id: "7",
    title: "Smartphone Photography Essentials",
    description: "Transform your everyday phone photos into stunning images with professional techniques.",
    content: "Discover how to take amazing photos with the camera you always have with you. This course covers composition, lighting, editing, and creative techniques specifically for smartphone photography.",
    image: "https://images.unsplash.com/photo-1516035069371-29a1b244cc32?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1164&q=80",
    category: "Photography",
    author: {
      id: "user7",
      name: "Emma Rodriguez",
      avatar: "https://randomuser.me/api/portraits/women/12.jpg",
      bio: "Award-winning photographer specializing in mobile photography and visual storytelling for brands and publications."
    },
    stats: {
      likes: 329,
      comments: 87,
      lessons: 8
    },
    createdAt: "2023-04-07",
    lessons: [
      { id: "7-1", title: "Smartphone Camera Basics", duration: "30 min" },
      { id: "7-2", title: "Composition Techniques", duration: "40 min" },
      { id: "7-3", title: "Mobile Editing Apps", duration: "45 min" }
    ]
  },
  {
    id: "8",
    title: "Plant-Based Cooking Fundamentals",
    description: "Master the art of creating delicious, nutritious plant-based meals from scratch.",
    content: "Whether you're vegan, vegetarian, or just want to incorporate more plants into your diet, this course will teach you how to prepare flavorful plant-based meals. Learn about ingredients, techniques, meal planning, and more.",
    image: "https://images.unsplash.com/photo-1498837167922-ddd27525d352?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80",
    category: "Cooking",
    author: {
      id: "user8",
      name: "Olivia Kim",
      avatar: "https://randomuser.me/api/portraits/women/52.jpg",
      bio: "Plant-based chef and cookbook author passionate about creating accessible, nutritious, and delicious vegetable-forward cuisine."
    },
    stats: {
      likes: 298,
      comments: 72,
      lessons: 10
    },
    createdAt: "2023-03-12",
    lessons: [
      { id: "8-1", title: "Plant-Based Pantry Essentials", duration: "35 min" },
      { id: "8-2", title: "Flavor Building Techniques", duration: "50 min" },
      { id: "8-3", title: "Complete Meals", duration: "45 min" }
    ]
  }
];

export const featuredSkill = {
  id: "9",
  title: "Master Data Science with Python",
  description: "Jump-start your career in data analysis with this comprehensive Python course. Learn data visualization, machine learning, and real-world applications.",
  image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80",
  buttonText: "Start Learning",
  buttonLink: "/skills/9"
};
