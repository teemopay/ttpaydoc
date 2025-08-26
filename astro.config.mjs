import { defineConfig } from "astro/config";
import starlight from "@astrojs/starlight";
import starlightSidebarTopics from "starlight-sidebar-topics";
import tailwind from "@astrojs/tailwind";
import sitemap from "@astrojs/sitemap";

// https://astro.build/config
export default defineConfig({
  site: "https://docs.TTpay.com",
  integrations: [
    starlight({
      // 文档标题
      title: "TTpay Docs",
      // 禁用 404 页面
      disable404Route: true,
      // 用 logo 替换标题
      logo: {
        light: "/src/assets/light-logo.svg",
        dark: "/src/assets/dark-logo.svg",
        replacesTitle: true,
      },
      // 头部信息
      head: [
        {
          tag: "link",
          attrs: {
            rel: "icon",
            type: "image/svg+xml",
            href: "/favicon.svg",
          },
        },
        {
          tag: "link",
          attrs: {
            rel: "sitemap",
            href: "/sitemap-index.xml",
          },
        },
        {
          tag: "meta",
          attrs: {
            name: "google-site-verification",
            content: "-GfotMXI9T6QLKuRhihSibM-EpdU67vYtWdbK64UDr0",
          },
        },
      ],
      // 社交链接
      // social: {
      //   github: "https://github.com/TTpay/docs",
      // },
      // 为此网站设置英语为默认语言。
      defaultLocale: "en",
      // 默认语言
      locales: {
        en: {
          label: "English",
          lang: "en",
        },
        zh: {
          label: "中文",
          lang: "zh",
        },
      },
      // 侧边栏导航
      plugins: [
        starlightSidebarTopics([
          {
            id: "integration-guide",
            label: {
              en: "Integration Guide",
              zh: "接入指南",
            },
            link: "/guides/getting-started",
            icon: "open-book",
            badge: { text: "READ", variant: "success" },
            items: [
              "guides/getting-started",
              "guides/changes",
              "guides/operation-manual",
              "guides/create-keys",
              "guides/authentication",
            ],
          },
          {
            id: "pakistan",
            label: {
              en: "🇵🇰 Pakistan",
              zh: "🇵🇰 巴基斯坦",
            },
            link: "/pakistan/payin/cashier_create",
            items: [
              {
                label: "payin",
                translations: {
                  zh: "代收",
                },
                items: [
                  "pakistan/payin/cashier_create",
                  "pakistan/payin/direct_create",
                  "pakistan/payin/callback",
                  "pakistan/payin/query",
                ],
              },
              {
                label: "Payout",
                translations: {
                  zh: "代付",
                },
                items: [
                  "pakistan/payout/create",
                  "pakistan/payout/callback",
                  "pakistan/payout/query",
                  "pakistan/payout/bank",
                ],
              },
              {
                label: "Inquire",
                translations: {
                  zh: "查询",
                },
                items: ["pakistan/inquire/balance", "pakistan/inquire/bill"],
              },
            ],
          },
          {
            id: "indonesia",
            label: {
              en: "🇮🇩 indonesia",
              zh: "🇮🇩 印尼",
            },
            link: "/indonesia/payin/create",
            items: [
              {
                label: "Payin",
                translations: {
                  zh: "代收",
                },
                items: [
                  "indonesia/payin/create",
                  "indonesia/payin/callback",
                  "indonesia/payin/query",
                ],
              },
              {
                label: "Payout",
                translations: {
                  zh: "代付",
                },
                items: [
                  "indonesia/payout/create",
                  "indonesia/payout/callback",
                  "indonesia/payout/query",
                  "indonesia/payout/bank",
                ],
              },
              {
                label: "Inquire",
                translations: {
                  zh: "查询",
                },
                items: ["indonesia/inquire/balance", "indonesia/inquire/bill"],
              },
            ],
          },
          {
            id: "russia",
            label: {
              en: "🇷🇺 russia",
              zh: "🇷🇺 俄罗斯",
            },
            link: "/russia/payin/create",
            items: [
              {
                label: "Payin",
                translations: {
                  zh: "代收",
                },
                items: [
                  "russia/payin/create",
                  "russia/payin/callback",
                  "russia/payin/query",
                ],
              },
              {
                label: "Payout",
                translations: {
                  zh: "代付",
                },
                items: [
                  "russia/payout/create",
                  "russia/payout/callback",
                  "russia/payout/query",
                ],
              },
              {
                label: "Inquire",
                translations: {
                  zh: "查询",
                },
                items: ["indonesia/inquire/balance", "indonesia/inquire/bill"],
              },
            ],
          },
        ]),
      ],
      // 重新渲染组件
      components: {
        ContentPanel: "./src/components/ContentPanel.astro",
      },
      // 自定义 css
      customCss: ["./src/tailwind.css"],
    }),
    tailwind({
      // 禁用默认的基础样式
      applyBaseStyles: false,
    }),
    sitemap(),
  ],
});
