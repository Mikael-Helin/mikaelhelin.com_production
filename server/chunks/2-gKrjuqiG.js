import { p as posts } from './data-avSVo7kZ.js';

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
const component = async () => component_cache ??= (await import('./layout.svelte-VhAnPlw-.js')).default;
const server_id = "src/routes/blog/+layout.server.js";
const imports = ["_app/immutable/nodes/2.I0ui7Sgo.js","_app/immutable/chunks/scheduler.PFF7CSlZ.js","_app/immutable/chunks/index.GXezNr8v.js"];
const stylesheets = [];
const fonts = [];

export { component, fonts, imports, index, _layout_server as server, server_id, stylesheets };
//# sourceMappingURL=2-gKrjuqiG.js.map
