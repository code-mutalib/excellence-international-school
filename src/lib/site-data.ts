export const SCHOOL = {
  name: "Excellence International School",
  short: "Excellence",
  founded: 1998,
  phone: "+91 80 4000 2026",
  email: "admissions@excellence.edu",
  address: "12 Scholars Avenue, Knowledge Park, Bengaluru 560001",
  hours: "Mon–Fri, 8:00 – 16:30",
};

export const NAV = [
  { to: "/", label: "Home" },
  { to: "/about", label: "About" },
  { to: "/academics", label: "Academics" },
  { to: "/admissions", label: "Admissions" },
  { to: "/student-life", label: "Campus Life" },
  { to: "/events", label: "Events" },
  { to: "/gallery", label: "Gallery" },
  { to: "/news", label: "News" },
  { to: "/contact", label: "Contact" },
] as const;

export const STATS = [
  { value: 28, suffix: "", label: "Years of excellence" },
  { value: 2400, suffix: "+", label: "Students" },
  { value: 180, suffix: "", label: "Educators" },
  { value: 45, suffix: "+", label: "Clubs & activities" },
];

export const PROGRAMS = [
  {
    id: "early",
    name: "Early Years",
    grades: "Nursery – KG",
    ages: "Ages 3–5",
    summary: "Play-based inquiry that builds curiosity, language and confidence in a warm, safe environment.",
    focus: ["Phonics & early literacy", "Sensory and outdoor play", "Number sense", "Social-emotional learning"],
  },
  {
    id: "primary",
    name: "Primary School",
    grades: "Grades 1 – 5",
    ages: "Ages 6–10",
    summary: "Strong foundations in literacy and numeracy, with project-based units across science, arts and humanities.",
    focus: ["Reading & writing workshops", "Hands-on mathematics", "Integrated science", "Music, art & movement"],
  },
  {
    id: "middle",
    name: "Middle School",
    grades: "Grades 6 – 8",
    ages: "Ages 11–13",
    summary: "Subject specialists, independent research and leadership opportunities as students find their voice.",
    focus: ["Subject specialist teaching", "Design & technology", "Second languages", "Student council"],
  },
  {
    id: "secondary",
    name: "Secondary School",
    grades: "Grades 9 – 10",
    ages: "Ages 14–15",
    summary: "Rigorous preparation for board examinations balanced with advisory, service and the arts.",
    focus: ["Board exam preparation", "Laboratory sciences", "Community service", "Career guidance"],
  },
  {
    id: "senior",
    name: "Senior Secondary",
    grades: "Grades 11 – 12",
    ages: "Ages 16–17",
    summary: "Specialised streams in Science, Commerce and Humanities with university counselling worldwide.",
    focus: ["Science, Commerce & Humanities", "University counselling", "Research projects", "Internships"],
  },
];

export const FACULTY = [
  { name: "Dr. Eleanor Hart", role: "Principal", dept: "Leadership", qual: "Ed.D, Columbia University" },
  { name: "Rahul Menon", role: "Head of Sciences", dept: "Science", qual: "M.Sc Physics, IISc" },
  { name: "Aisha Rahman", role: "Head of Languages", dept: "Languages", qual: "MA English Literature" },
  { name: "Daniel Okafor", role: "Mathematics Lead", dept: "Mathematics", qual: "M.Sc Mathematics" },
  { name: "Priya Sharma", role: "Early Years Coordinator", dept: "Early Years", qual: "M.Ed Early Childhood" },
  { name: "Marco Bellini", role: "Director of Arts", dept: "Arts", qual: "MFA, Accademia di Brera" },
  { name: "Sana Qureshi", role: "University Counsellor", dept: "Guidance", qual: "MA Counselling Psychology" },
  { name: "James Whitfield", role: "Director of Sport", dept: "Sports", qual: "B.Sc Sports Science" },
];

export const EVENTS = [
  { date: "2026-11-06", title: "Annual Science Exhibition", place: "Innovation Hall", category: "Academic", time: "10:00" },
  { date: "2026-11-14", title: "Children's Day Carnival", place: "Main Courtyard", category: "Community", time: "09:00" },
  { date: "2026-11-28", title: "Inter-School Athletics Meet", place: "Sports Complex", category: "Sports", time: "08:00" },
  { date: "2026-12-12", title: "Winter Concert: Voices", place: "Auditorium", category: "Arts", time: "18:00" },
  { date: "2027-01-09", title: "Admissions Open House 2027–28", place: "Admissions Office", category: "Admissions", time: "10:30" },
  { date: "2027-01-23", title: "Model United Nations", place: "Conference Centre", category: "Academic", time: "09:30" },
];

export const NEWS = [
  { slug: "board-results-2026", date: "2026-09-02", category: "Achievements", title: "Class of 2026 achieves a 100% board pass rate", excerpt: "Forty-two students scored above 95%, with record results in the sciences and humanities." },
  { slug: "robotics-nationals", date: "2026-08-18", category: "Student Life", title: "Robotics team takes gold at the national championship", excerpt: "Team Vector's autonomous rover impressed judges with its elegant navigation system." },
  { slug: "new-library", date: "2026-07-30", category: "Campus", title: "A new library and learning commons opens its doors", excerpt: "Twenty thousand volumes, quiet study rooms and a digital media studio for every grade." },
  { slug: "admissions-2027", date: "2026-10-01", category: "Announcements", title: "Admissions for 2027–28 are now open", excerpt: "Applications are welcome for Nursery to Grade 11. Campus tours run every Saturday." },
];

export const TESTIMONIALS = [
  { quote: "Our daughter found her confidence here. The teachers know her as a person, not just a student.", name: "Meera & Arjun Iyer", role: "Parents, Grade 6" },
  { quote: "Excellence prepared me for university in ways I only understood once I arrived. I learned how to think.", name: "Kabir Malhotra", role: "Alumnus, 2022 — Imperial College" },
  { quote: "A rare balance of rigour and warmth. Every visit to campus reassures us we made the right choice.", name: "Fatima Siddiqui", role: "Parent, Primary School" },
];

export const FAQ = [
  { q: "What curriculum does the school follow?", a: "We follow the national CBSE framework enriched with international inquiry-based practices, project learning and global perspectives." },
  { q: "When do admissions open?", a: "Admissions for the next academic year open each October. Mid-year admissions are considered subject to seat availability." },
  { q: "What is the student–teacher ratio?", a: "Our average ratio is 13:1, with smaller groups in the Early Years and dedicated learning support." },
  { q: "Is transport available?", a: "Yes. GPS-tracked buses with trained attendants cover most of the city across 32 routes." },
  { q: "Do you offer scholarships?", a: "Merit and need-based scholarships are available from Grade 6 onwards. Details are shared during the admission process." },
  { q: "Can we visit the campus?", a: "Absolutely. Guided campus tours run every Saturday morning — book a slot through the contact page." },
];

export const FEES = [
  { level: "Early Years", grades: "Nursery – KG", admission: "₹50,000", annual: "₹1,80,000" },
  { level: "Primary", grades: "Grades 1 – 5", admission: "₹60,000", annual: "₹2,20,000" },
  { level: "Middle", grades: "Grades 6 – 8", admission: "₹60,000", annual: "₹2,50,000" },
  { level: "Secondary", grades: "Grades 9 – 10", admission: "₹75,000", annual: "₹2,80,000" },
  { level: "Senior Secondary", grades: "Grades 11 – 12", admission: "₹75,000", annual: "₹3,10,000" },
];

export const FACILITIES = [
  { name: "Innovation Labs", text: "Physics, chemistry, biology and robotics labs equipped for genuine experimentation." },
  { name: "Learning Commons", text: "A 20,000-volume library with quiet rooms, digital archives and a media studio." },
  { name: "Performing Arts Centre", text: "A 600-seat auditorium, music studios and a black-box theatre." },
  { name: "Sports Complex", text: "Olympic-length pool, turf field, indoor courts and a 400m track." },
  { name: "Art & Design Studios", text: "Light-filled studios for painting, ceramics, textiles and digital design." },
  { name: "Wellbeing Centre", text: "A full-time nurse, counsellors and calm spaces for reflection." },
];

export const CAREERS = [
  { title: "Senior Secondary Physics Teacher", dept: "Sciences", type: "Full-time" },
  { title: "Early Years Educator", dept: "Early Years", type: "Full-time" },
  { title: "Music Teacher (Strings)", dept: "Arts", type: "Part-time" },
  { title: "Admissions Officer", dept: "Administration", type: "Full-time" },
];

export function formatDate(iso: string, opts: Intl.DateTimeFormatOptions = { day: "numeric", month: "long", year: "numeric" }) {
  return new Date(iso + "T00:00:00").toLocaleDateString("en-GB", opts);
}
