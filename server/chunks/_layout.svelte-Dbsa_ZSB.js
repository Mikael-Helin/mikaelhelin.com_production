import { c as create_ssr_component, b as each, e as escape } from './ssr-D_VSFOBM.js';

const Layout = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let { data } = $$props;
  if ($$props.data === undefined && $$bindings.data && data !== undefined) $$bindings.data(data);
  return `<div class="layout"><main>${slots.default ? slots.default({}) : ``}</main> <aside><h2 data-svelte-h="svelte-6bkxio">More posts</h2> <ul>${each(data.summaries, ({ slug, title }) => {
    return `<li><a href="${"/blog/" + escape(slug, true)}">${escape(title)}</a> </li>`;
  })}</ul></aside> </div>`;
});

export { Layout as default };
//# sourceMappingURL=_layout.svelte-Dbsa_ZSB.js.map
