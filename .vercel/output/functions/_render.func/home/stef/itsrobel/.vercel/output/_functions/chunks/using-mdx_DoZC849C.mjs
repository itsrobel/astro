import { a4 as __astro_tag_component__, j as Fragment, a3 as createVNode } from './astro_3bPw8lcR.mjs';
import { $ as $$Image } from './pages/generic_B1lB8oYI.mjs';
import { n as $$HeaderLink } from './pages/index_C97wdTno.mjs';
import 'clsx';

const frontmatter = {
  "title": "Using MDX",
  "description": "Lorem ipsum dolor sit amet",
  "pubDate": "Jul 02 2022",
  "tags": ["guide"]
};
function getHeadings() {
  return [{
    "depth": 2,
    "slug": "why-mdx",
    "text": "Why MDX?"
  }, {
    "depth": 2,
    "slug": "example",
    "text": "Example"
  }, {
    "depth": 2,
    "slug": "more-links",
    "text": "More Links"
  }];
}
const __usesAstroImage = true;
function _createMdxContent(props) {
  const _components = {
    a: "a",
    br: "br",
    code: "code",
    h2: "h2",
    li: "li",
    p: "p",
    strong: "strong",
    ul: "ul",
    ...props.components
  };
  return createVNode(Fragment, {
    children: [createVNode(_components.p, {
      children: ["This theme comes with the ", createVNode(_components.a, {
        href: "https://docs.astro.build/en/guides/integrations-guide/mdx/",
        children: "@astrojs/mdx"
      }), " integration installed and configured in your ", createVNode(_components.code, {
        children: "astro.config.mjs"
      }), " config file. If you prefer not to use MDX, you can disable support by removing the integration from your config file."]
    }), "\n", createVNode(_components.h2, {
      id: "why-mdx",
      children: "Why MDX?"
    }), "\n", createVNode(_components.p, {
      children: ["MDX is a special flavor of Markdown that supports embedded JavaScript & JSX syntax. This unlocks the ability to ", createVNode(_components.a, {
        href: "https://docs.astro.build/en/guides/markdown-content/#mdx-features",
        children: "mix JavaScript and UI Components into your Markdown content"
      }), " for things like interactive charts or alerts."]
    }), "\n", createVNode(_components.p, {
      children: "If you have existing content authored in MDX, this integration will hopefully make migrating to Astro a breeze."
    }), "\n", createVNode(_components.h2, {
      id: "example",
      children: "Example"
    }), "\n", createVNode(_components.p, {
      children: ["Here is how you import and use a UI component inside of MDX.", createVNode(_components.br, {}), "\nWhen you open this page in the browser, you should see the clickable button below."]
    }), "\n", "\n", createVNode(_components.p, {
      children: ["why is this not inline ", createVNode($$HeaderLink, {
        onclick: "alert('clicked!')",
        children: " words"
      })]
    }), "\n", createVNode(_components.h2, {
      id: "more-links",
      children: "More Links"
    }), "\n", createVNode(_components.ul, {
      children: ["\n", createVNode(_components.li, {
        children: createVNode(_components.a, {
          href: "https://mdxjs.com/docs/what-is-mdx",
          children: "MDX Syntax Documentation"
        })
      }), "\n", createVNode(_components.li, {
        children: createVNode(_components.a, {
          href: "https://docs.astro.build/en/guides/markdown-content/#markdown-and-mdx-pages",
          children: "Astro Usage Documentation"
        })
      }), "\n", createVNode(_components.li, {
        children: [createVNode(_components.strong, {
          children: "Note:"
        }), " ", createVNode(_components.a, {
          href: "https://docs.astro.build/en/reference/directives-reference/#client-directives",
          children: "Client Directives"
        }), " are still required to create interactive components. Otherwise, all components in your MDX will render as static HTML (no JavaScript) by default."]
      }), "\n"]
    })]
  });
}
function MDXContent(props = {}) {
  const {
    wrapper: MDXLayout
  } = props.components || {};
  return MDXLayout ? createVNode(MDXLayout, {
    ...props,
    children: createVNode(_createMdxContent, {
      ...props
    })
  }) : _createMdxContent(props);
}
__astro_tag_component__(getHeadings, "astro:jsx");
__astro_tag_component__(MDXContent, "astro:jsx");
const url = "src/content/blog/using-mdx.mdx";
const file = "/home/stef/itsrobel/src/content/blog/using-mdx.mdx";
const Content = (props = {}) => MDXContent({
											...props,
											components: { Fragment, ...props.components, "astro-image":  props.components?.img ?? $$Image },
										});
Content[Symbol.for('mdx-component')] = true;
Content[Symbol.for('astro.needsHeadRendering')] = !Boolean(frontmatter.layout);
Content.moduleId = "/home/stef/itsrobel/src/content/blog/using-mdx.mdx";

export { Content, __usesAstroImage, Content as default, file, frontmatter, getHeadings, url };
