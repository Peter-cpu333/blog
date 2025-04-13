import { CodeTabs } from "/Users/zhuyq0719/my-docs/node_modules/.pnpm/@vuepress+plugin-markdown-tab@2.0.0-rc.94_markdown-it@14.1.0_vuepress@2.0.0-rc.21_@vuep_1dd14a49ce4dfc8df857d8b37d1ebf09/node_modules/@vuepress/plugin-markdown-tab/lib/client/components/CodeTabs.js";
import { Tabs } from "/Users/zhuyq0719/my-docs/node_modules/.pnpm/@vuepress+plugin-markdown-tab@2.0.0-rc.94_markdown-it@14.1.0_vuepress@2.0.0-rc.21_@vuep_1dd14a49ce4dfc8df857d8b37d1ebf09/node_modules/@vuepress/plugin-markdown-tab/lib/client/components/Tabs.js";
import "/Users/zhuyq0719/my-docs/node_modules/.pnpm/@vuepress+plugin-markdown-tab@2.0.0-rc.94_markdown-it@14.1.0_vuepress@2.0.0-rc.21_@vuep_1dd14a49ce4dfc8df857d8b37d1ebf09/node_modules/@vuepress/plugin-markdown-tab/lib/client/styles/vars.css";

export default {
  enhance: ({ app }) => {
    app.component("CodeTabs", CodeTabs);
    app.component("Tabs", Tabs);
  },
};
