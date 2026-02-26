let currentPage = 'home';
let currentPostId = null;
let onChangeCallback = null;

export const navigate = (page, postId = null) => {
  currentPage = page;
  currentPostId = postId;
  if (onChangeCallback) onChangeCallback();
};

export const getCurrentPage = () => currentPage;
export const getCurrentPostId = () => currentPostId;

export const onChange = (callback) => {
  onChangeCallback = callback;
};
