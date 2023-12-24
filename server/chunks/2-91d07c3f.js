import { p as posts } from './data-0563b420.js';

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
const component = async () => component_cache ??= (await import('./layout.svelte-3735db61.js')).default;
const server_id = "src/routes/blog/+layout.server.js";
const imports = ["_app/immutable/nodes/2.17b5b5ee.js","_app/immutable/chunks/scheduler.db032cbe.js","_app/immutable/chunks/index.9876fdb0.js"];
const stylesheets = [];
const fonts = [];

export { component, fonts, imports, index, _layout_server as server, server_id, stylesheets };
//# sourceMappingURL=2-91d07c3f.js.map
