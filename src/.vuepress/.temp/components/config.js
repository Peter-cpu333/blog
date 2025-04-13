import { hasGlobalComponent } from "/Users/zhuyq0719/my-docs/node_modules/.pnpm/@vuepress+helper@2.0.0-rc.94_vuepress@2.0.0-rc.21_@vuepress+bundler-webpack@2.0.0-rc.21_vue@3.5.13_/node_modules/@vuepress/helper/lib/client/index.js";
import Badge from "/Users/zhuyq0719/my-docs/node_modules/.pnpm/vuepress-plugin-components@2.0.0-rc.80_sass-embedded@1.86.3_sass-loader@16.0.5_sass-emb_ba75589fe6d94d030574c5173dc563c5/node_modules/vuepress-plugin-components/lib/client/components/Badge.js";
import VPCard from "/Users/zhuyq0719/my-docs/node_modules/.pnpm/vuepress-plugin-components@2.0.0-rc.80_sass-embedded@1.86.3_sass-loader@16.0.5_sass-emb_ba75589fe6d94d030574c5173dc563c5/node_modules/vuepress-plugin-components/lib/client/components/VPCard.js";

import "/Users/zhuyq0719/my-docs/node_modules/.pnpm/@vuepress+helper@2.0.0-rc.94_vuepress@2.0.0-rc.21_@vuepress+bundler-webpack@2.0.0-rc.21_vue@3.5.13_/node_modules/@vuepress/helper/lib/client/styles/sr-only.css";

export default {
  enhance: ({ app }) => {
    if(!hasGlobalComponent("Badge")) app.component("Badge", Badge);
    if(!hasGlobalComponent("VPCard")) app.component("VPCard", VPCard);
    
  },
  setup: () => {

  },
  rootComponents: [

  ],
};
