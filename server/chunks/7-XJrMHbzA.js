import { e as error } from './index-q5FEf9Bi.js';
import { p as posts } from './data-avSVo7kZ.js';

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
const component = async () => component_cache ??= (await import('./_page.svelte-o1LL5puc.js')).default;
const server_id = "src/routes/blog/[slug]/+page.server.js";
const imports = ["_app/immutable/nodes/7.trNyocOZ.js","_app/immutable/chunks/scheduler.PFF7CSlZ.js","_app/immutable/chunks/index.GXezNr8v.js"];
const stylesheets = [];
const fonts = [];

export { component, fonts, imports, index, _page_server as server, server_id, stylesheets };
//# sourceMappingURL=7-XJrMHbzA.js.map
