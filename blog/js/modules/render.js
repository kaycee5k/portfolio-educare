import { getCurrentPage, getCurrentPostId } from './router.js';
import { getAll, getById } from './data.js';
import { PostList, SinglePost, AboutPage } from './components.js';
import { bindPostCards, bindBackBtn, updateNav } from './events.js';

export const render = () => {
  const app = document.getElementById('app');
  const page = getCurrentPage();
  const postId = getCurrentPostId();

  switch (page) {
    case 'home':
      app.innerHTML = PostList(getAll());
      bindPostCards();
      break;

    case 'post': {
      const post = getById(postId);
      app.innerHTML = post ? SinglePost(post) : '<p>Post not found.</p>';
      bindBackBtn();
      break;
    }

    case 'about':
      app.innerHTML = AboutPage();
      break;
  }

  updateNav(page);
};
