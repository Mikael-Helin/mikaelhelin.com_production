import { c as create_ssr_component, b as each, e as escape } from './ssr-7e1a9690.js';

const Layout = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let { data } = $$props;
  if ($$props.data === void 0 && $$bindings.data && data !== void 0)
    $$bindings.data(data);
  return `<div class="layout"><main>${slots.default ? slots.default({}) : ``}</main> <aside><h2 data-svelte-h="svelte-6bkxio">More posts</h2> <ul>${each(data.summaries, ({ slug, title }) => {
    return `<li><a href="${"/blog/" + escape(slug, true)}">${escape(title)}</a> </li>`;
  })}</ul></aside> </div>`;
});

export { Layout as default };
//# sourceMappingURL=_layout.svelte-693c1691.js.map
