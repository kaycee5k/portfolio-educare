export const PostCard = (post) => `
  <article class="post-card" data-id="${post.id}" role="button" tabindex="0" aria-label="Read ${post.title}">
    <div class="post-meta">
      ${post.date}
      <span class="post-tag">${post.tag}</span>
    </div>
    <h2 class="post-title">${post.title}</h2>
    <p class="post-excerpt">${post.excerpt}</p>
    <span class="read-more">Read essay →</span>
  </article>
`;

export const PostList = (posts) => `
  <section class="page">
    <div class="posts-grid">
      ${posts.map(PostCard).join('')}
    </div>
  </section>
`;

export const SinglePost = (post) => `
  <section class="page">
    <button class="back-btn" id="back-btn">← Back to all posts</button>
    <header class="article-header">
      <div class="article-meta">${post.date} &nbsp;·&nbsp; ${post.tag}</div>
      <h1 class="article-title">${post.title}</h1>
    </header>
    <div class="article-body">${post.body}</div>
  </section>
`;

export const AboutPage = () => `
  <section class="page about-wrap">
    <h2>About This Blog</h2>
    <p>
      <em>The Margin</em> is a small, quiet corner of the internet for essays on design,
      code, and the way we think about craft. No algorithms. No engagement loops. Just writing.
    </p>
    <p>
      Posts appear irregularly — when there's something worth saying.
      The goal is not volume, but signal.
    </p>
    <hr class="divider" />
    <div class="about-info">
      <div>Author &nbsp;·&nbsp; A curious generalist</div>
      <div>Built with &nbsp;·&nbsp; Vanilla JS ES Modules</div>
      <div>Est. &nbsp;·&nbsp; 2025</div>
    </div>
  </section>
`;
