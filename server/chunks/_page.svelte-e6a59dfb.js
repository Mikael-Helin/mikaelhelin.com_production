import { c as create_ssr_component, e as escape } from './ssr-7e1a9690.js';

const Page = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let { data } = $$props;
  if ($$props.data === void 0 && $$bindings.data && data !== void 0)
    $$bindings.data(data);
  return `<h1>${escape(data.post.title)}</h1> <div><!-- HTML_TAG_START -->${data.post.content}<!-- HTML_TAG_END --></div>`;
});

export { Page as default };
//# sourceMappingURL=_page.svelte-e6a59dfb.js.map
