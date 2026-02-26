import { navigate } from './router.js';

export const bindPostCards = () => {
  document.querySelectorAll('.post-card').forEach(card => {
    const open = () => navigate('post', parseInt(card.dataset.id));
    card.addEventListener('click', open);
    card.addEventListener('keydown', (e) => {
      if (e.key === 'Enter') open();
    });
  });
};

export const bindBackBtn = () => {
  const btn = document.getElementById('back-btn');
  if (btn) btn.addEventListener('click', () => navigate('home'));
};

export const bindNav = () => {
  document.querySelectorAll('#main-nav button').forEach(btn => {
    btn.addEventListener('click', () => navigate(btn.dataset.page));
  });
};

export const updateNav = (currentPage) => {
  const activePage = currentPage === 'post' ? 'home' : currentPage;
  document.querySelectorAll('#main-nav button').forEach(btn => {
    btn.classList.toggle('active', btn.dataset.page === activePage);
  });
};
