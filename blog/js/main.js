import { onChange } from './modules/router.js';
import { bindNav } from './modules/events.js';
import { render } from './modules/render.js';

// Wire the router to trigger a re-render on every navigation
onChange(render);

// Bind the top nav buttons
bindNav();

// Initial render
render();
