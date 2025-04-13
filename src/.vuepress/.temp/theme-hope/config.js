import { Layout, NotFound, injectDarkMode, setupDarkMode, setupSidebarItems, scrollPromise } from "/Users/zhuyq0719/my-docs/node_modules/.pnpm/vuepress-theme-hope@2.0.0-rc.80_markdown-it@14.1.0_sass-embedded@1.86.3_sass-loader@16._05dbe8f88371111dbc4a07d52c951fab/node_modules/vuepress-theme-hope/lib/bundle/export.js";

import { defineCatalogInfoGetter } from "/Users/zhuyq0719/my-docs/node_modules/.pnpm/@vuepress+plugin-catalog@2.0.0-rc.94_vuepress@2.0.0-rc.21_@vuepress+bundler-webpack@2.0.0-rc.21_vue@3.5.13_/node_modules/@vuepress/plugin-catalog/lib/client/index.js"
import { h } from "vue"
import { resolveComponent } from "vue"
import { BlogCategory, BlogHome, BlogType, BloggerInfo, SocialMedias, Timeline, setupBlog } from "/Users/zhuyq0719/my-docs/node_modules/.pnpm/vuepress-theme-hope@2.0.0-rc.80_markdown-it@14.1.0_sass-embedded@1.86.3_sass-loader@16._05dbe8f88371111dbc4a07d52c951fab/node_modules/vuepress-theme-hope/lib/bundle/modules/blog/export.js";
import "/Users/zhuyq0719/my-docs/node_modules/.pnpm/vuepress-theme-hope@2.0.0-rc.80_markdown-it@14.1.0_sass-embedded@1.86.3_sass-loader@16._05dbe8f88371111dbc4a07d52c951fab/node_modules/vuepress-theme-hope/lib/bundle/modules/blog/styles/all.scss";
import { GlobalEncrypt, LocalEncrypt } from "/Users/zhuyq0719/my-docs/node_modules/.pnpm/vuepress-theme-hope@2.0.0-rc.80_markdown-it@14.1.0_sass-embedded@1.86.3_sass-loader@16._05dbe8f88371111dbc4a07d52c951fab/node_modules/vuepress-theme-hope/lib/bundle/modules/encrypt/export.js";
import "/Users/zhuyq0719/my-docs/node_modules/.pnpm/vuepress-theme-hope@2.0.0-rc.80_markdown-it@14.1.0_sass-embedded@1.86.3_sass-loader@16._05dbe8f88371111dbc4a07d52c951fab/node_modules/vuepress-theme-hope/lib/bundle/modules/encrypt/styles/all.scss"

import "/Users/zhuyq0719/my-docs/node_modules/.pnpm/@vuepress+helper@2.0.0-rc.94_vuepress@2.0.0-rc.21_@vuepress+bundler-webpack@2.0.0-rc.21_vue@3.5.13_/node_modules/@vuepress/helper/lib/client/styles/colors.css";
import "/Users/zhuyq0719/my-docs/node_modules/.pnpm/@vuepress+helper@2.0.0-rc.94_vuepress@2.0.0-rc.21_@vuepress+bundler-webpack@2.0.0-rc.21_vue@3.5.13_/node_modules/@vuepress/helper/lib/client/styles/normalize.css";
import "/Users/zhuyq0719/my-docs/node_modules/.pnpm/@vuepress+helper@2.0.0-rc.94_vuepress@2.0.0-rc.21_@vuepress+bundler-webpack@2.0.0-rc.21_vue@3.5.13_/node_modules/@vuepress/helper/lib/client/styles/sr-only.css";
import "/Users/zhuyq0719/my-docs/node_modules/.pnpm/vuepress-theme-hope@2.0.0-rc.80_markdown-it@14.1.0_sass-embedded@1.86.3_sass-loader@16._05dbe8f88371111dbc4a07d52c951fab/node_modules/vuepress-theme-hope/lib/bundle/styles/all.scss";

defineCatalogInfoGetter((meta) => {
  const title = meta.title;
  const shouldIndex = meta.index ?? true;
  const icon = meta.icon;

  return shouldIndex ? {
    title,
    content: icon ? () =>[h(resolveComponent("VPIcon"), { icon }), title] : null,
    order: meta.order,
    index: meta.index,
  } : null;
});

export default {
  enhance: ({ app, router }) => {
    const { scrollBehavior } = router.options;

    router.options.scrollBehavior = async (...args) => {
      await scrollPromise.wait();

      return scrollBehavior(...args);
    };

    // inject global properties
    injectDarkMode(app);

    app.component("BloggerInfo", BloggerInfo);
    app.component("SocialMedias", SocialMedias);
    app.component("GlobalEncrypt", GlobalEncrypt);
    app.component("LocalEncrypt", LocalEncrypt);
  },
  setup: () => {
    setupDarkMode();
    setupSidebarItems();
    setupBlog();
  },
  layouts: {
    Layout,
    NotFound,
    BlogCategory,
    BlogHome,
    BlogType,
    Timeline,
  }
};
