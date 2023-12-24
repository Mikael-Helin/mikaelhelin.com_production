import { e as error } from './index-2b68e648.js';
import { p as posts } from './data-0563b420.js';

function load({ params }) {
  const post = posts.find((post2) => post2.slug === params.slug);
  if (!post)
    throw error(404);
  return {
    post
  };
}

var _page_server = /*#__PURE__*/Object.freeze({
  __proto__: null,
  load: load
});

const index = 7;
let component_cache;
const component = async () => component_cache ??= (await import('./_page.svelte-e6a59dfb.js')).default;
const server_id = "src/routes/blog/[slug]/+page.server.js";
const imports = ["_app/immutable/nodes/7.d763b049.js","_app/immutable/chunks/scheduler.db032cbe.js","_app/immutable/chunks/index.9876fdb0.js"];
const stylesheets = [];
const fonts = [];

export { component, fonts, imports, index, _page_server as server, server_id, stylesheets };
//# sourceMappingURL=7-e08ba215.js.map
