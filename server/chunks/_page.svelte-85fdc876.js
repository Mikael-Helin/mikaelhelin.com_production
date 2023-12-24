import { c as create_ssr_component, b as each, e as escape } from './ssr-7e1a9690.js';

const Page = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let { data } = $$props;
  if ($$props.data === void 0 && $$bindings.data && data !== void 0)
    $$bindings.data(data);
  return `<h1 data-svelte-h="svelte-dbxyy8">Blog</h1>

Test page!

<ul>${each(data.summaries, ({ slug, title }) => {
    return `<li><a href="${"/blog/" + escape(slug, true)}">${escape(title)}</a></li>`;
  })}</ul>

Detta är en test sida. Förväntar mig att denna webbplats ska vara klar nästa månad.

Testing testing 1 2 3 ...

store: se

cookie: se

language: se

123456789 123456789 123456789 123456789 123456789 123456789 123456789 1234567890 123456789 123456789 123456789 123456789 123456789 123456789 123456789 123456789 123456789 123456789 123456789 123456789 123456789 123456789 123456789 123456789 123456789 123456789 123456789 123456789 123456789 123456789 123456789 123456789 123456789 123456789 1234567890`;
});

export { Page as default };
//# sourceMappingURL=_page.svelte-85fdc876.js.map
