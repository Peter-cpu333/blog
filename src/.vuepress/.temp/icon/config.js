import { hasGlobalComponent } from "/Users/zhuyq0719/my-docs/node_modules/.pnpm/@vuepress+helper@2.0.0-rc.94_vuepress@2.0.0-rc.21_@vuepress+bundler-webpack@2.0.0-rc.21_vue@3.5.13_/node_modules/@vuepress/helper/lib/client/index.js";
import { useScriptTag } from "/Users/zhuyq0719/my-docs/node_modules/.pnpm/@vueuse+core@13.1.0_vue@3.5.13/node_modules/@vueuse/core/index.mjs";
import { h } from "vue";
import { VPIcon } from "/Users/zhuyq0719/my-docs/node_modules/.pnpm/@vuepress+plugin-icon@2.0.0-rc.94_markdown-it@14.1.0_vuepress@2.0.0-rc.21_@vuepress+bun_5ae913ef889cdf49815ef50bb242d920/node_modules/@vuepress/plugin-icon/lib/client/index.js"

export default {
  enhance: ({ app }) => {
    if(!hasGlobalComponent("VPIcon")) {
      app.component(
        "VPIcon",
        (props) =>
          h(VPIcon, {
            type: "iconify",
            prefix: "fa6-solid:",
            ...props,
          })
      )
    }
  },
  setup: () => {
    useScriptTag(`https://cdn.jsdelivr.net/npm/iconify-icon@2`);
  },
}
