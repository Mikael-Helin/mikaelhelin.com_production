import { p as posts } from './data-CRHv4vE6.js';

function load() {
  return {
    summaries: posts.map((post) => ({
      slug: post.slug,
      title: post.title
    }))
  };
}

var _layout_server = /*#__PURE__*/Object.freeze({
  __proto__: null,
  load: load
});

const index = 2;
let component_cache;
const component = async () => component_cache ??= (await import('./layout.svelte-BsJs-k0H.js')).default;
const server_id = "src/routes/blog/+layout.server.js";
const imports = ["_app/immutable/nodes/2.Cq4Vxy_O.js","_app/immutable/chunks/scheduler.CwkLdD99.js","_app/immutable/chunks/index.DUq0o2rG.js"];
const stylesheets = [];
const fonts = [];

export { component, fonts, imports, index, _layout_server as server, server_id, stylesheets };
//# sourceMappingURL=2-Ctb4gTip.js.map
