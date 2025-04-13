import CodeDemo from "/Users/zhuyq0719/my-docs/node_modules/.pnpm/vuepress-plugin-md-enhance@2.0.0-rc.80_markdown-it@14.1.0_sass-embedded@1.86.3_sass-loa_0023dc1780700139bc063668bad23539/node_modules/vuepress-plugin-md-enhance/lib/client/components/CodeDemo.js";
import MdDemo from "/Users/zhuyq0719/my-docs/node_modules/.pnpm/vuepress-plugin-md-enhance@2.0.0-rc.80_markdown-it@14.1.0_sass-embedded@1.86.3_sass-loa_0023dc1780700139bc063668bad23539/node_modules/vuepress-plugin-md-enhance/lib/client/components/MdDemo.js";

export default {
  enhance: ({ app }) => {
    app.component("CodeDemo", CodeDemo);
    app.component("MdDemo", MdDemo);
  },
};
