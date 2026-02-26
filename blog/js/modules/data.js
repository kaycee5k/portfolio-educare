const posts = [
  {
    id: 1,
    title: "The Quiet Power of Negative Space",
    date: "Feb 18, 2025",
    tag: "Design",
    excerpt: "Great design isn't about what you add — it's about what you have the courage to leave out. Negative space is the canvas breathing.",
    body: `<p>There's a moment in every design project where you have to resist the urge to fill every corner. Negative space — the empty, unmarked area around subjects — is not wasted canvas. It is the canvas breathing.</p>
    <blockquote>"Perfection is achieved not when there is nothing more to add, but when there is nothing left to take away." — Antoine de Saint-Exupéry</blockquote>
    <p>The Japanese concept of <em>ma</em> (間) captures this beautifully. It describes the pause, the gap, the meaningful emptiness between things. A room with too much furniture becomes a warehouse; remove the excess and suddenly the space has dignity.</p>
    <p>In typography, the space between letters — tracking — matters as much as the glyphs themselves. Tight tracking creates urgency. Generous tracking exhales. Both are valid. Neither is an accident.</p>
    <p>The discipline is restraint: trusting that what you remove will be felt more than anything you add.</p>`
  },
  {
    id: 2,
    title: "Writing Code the Way You'd Write a Letter",
    date: "Feb 11, 2025",
    tag: "Code",
    excerpt: "Code is read far more often than it is written. Clarity isn't a luxury — it's the whole point.",
    body: `<p>When you write a letter to a friend, you don't write for yourself — you write for them. You anticipate confusion. You choose words they know. You structure your thoughts so they don't have to untangle yours.</p>
    <p>Code deserves the same courtesy. The person reading your function at 11pm six months from now might be you. They are tired. Write for them.</p>
    <blockquote>"Any fool can write code that a computer can understand. Good programmers write code that humans can understand." — Martin Fowler</blockquote>
    <p>Name variables with intent. A variable called <code>d</code> is a mystery; <code>daysUntilDeadline</code> is a story. Comment the <em>why</em>, not the <em>what</em>. The what is visible. The why is wisdom.</p>
    <p>Small functions. Single responsibilities. Names that read like English. Code is prose, and the best code — like the best prose — disappears into clarity.</p>`
  },
  {
    id: 3,
    title: "On Learning Slowly",
    date: "Feb 4, 2025",
    tag: "Essay",
    excerpt: "Speed-running knowledge produces the shape of understanding without the substance. Some things must simply take time.",
    body: `<p>We live in an era that worships acceleration. Ten-minute summaries of dense books. "Learn X in Y days" tutorials. The premise is seductive: why spend a year on something you can grasp in a weekend?</p>
    <p>But there is a difference between acquiring information and building understanding. Information can be transferred quickly. Understanding has to be grown — it requires exposure, confusion, sleep, revisiting, and revision.</p>
    <blockquote>A seed does not become a tree faster because you water it more. Some growth has its own schedule.</blockquote>
    <p>I've noticed that the concepts I understand most deeply are the ones I was confused about the longest. The confusion wasn't a failure — it was the work. Each time I returned to a hard idea and left still puzzled, something microscopic shifted.</p>
    <p>Learn slowly, when you can afford to. The understanding you earn that way tends to stay.</p>`
  }
];

export const getAll = () => posts;
export const getById = (id) => posts.find(p => p.id === id);
