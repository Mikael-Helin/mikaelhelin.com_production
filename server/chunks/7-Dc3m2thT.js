import { e as error } from './index-CvuFLVuQ.js';
import { p as posts } from './data-CRHv4vE6.js';

function load({ params }) {
  const post = posts.find((post2) => post2.slug === params.slug);
  if (!post) throw error(404);
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
const component = async () => component_cache ??= (await import('./_page.svelte-Dwh9ivlN.js')).default;
const server_id = "src/routes/blog/[slug]/+page.server.js";
const imports = ["_app/immutable/nodes/7.BtLm0CWb.js","_app/immutable/chunks/scheduler.CwkLdD99.js","_app/immutable/chunks/index.DUq0o2rG.js"];
const stylesheets = [];
const fonts = [];

export { component, fonts, imports, index, _page_server as server, server_id, stylesheets };
//# sourceMappingURL=7-Dc3m2thT.js.map
