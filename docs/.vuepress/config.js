import { defineUserConfig } from 'vuepress'
import { viteBundler } from '@vuepress/bundler-vite'
import { defaultTheme } from '@vuepress/theme-default'
import { searchPlugin } from '@vuepress/plugin-search'

export default defineUserConfig({
  base: '/WkKit_WiKi/',
  lang: 'zh-CN',
  title: 'WkKit',
  description: 'WkKit - Minecraft 礼包管理插件文档',
  head: [
    ['link', { rel: 'icon', href: '/favicon.ico' }],
    ['meta', { name: 'theme-color', content: '#3eaf7c' }],
    ['meta', { name: 'apple-mobile-web-app-capable', content: 'yes' }],
    ['meta', { name: 'apple-mobile-web-app-status-bar-style', content: 'black' }],
  ],
  
  bundler: viteBundler(),
  
  theme: defaultTheme({
    logo: '/images/logo.png',
    repo: 'WekyJay/WkKit_WiKi',
    docsDir: 'docs',
    editLink: true,
    editLinkText: '在 GitHub 上编辑此页',
    lastUpdated: true,
    lastUpdatedText: '上次更新',
    contributors: true,
    contributorsText: '贡献者',
    
    // 多语言配置
    locales: {
      '/': {
        selectLanguageName: '简体中文',
        selectLanguageText: '选择语言',
        navbar: [
          { text: '首页', link: '/' },
          { text: '快速开始', link: '/guide/' },
          { text: '功能', link: '/features/' },
          { text: '配置', link: '/config/' },
          { text: '命令', link: '/commands/' },
          { text: 'FAQ', link: '/faq/' },
        ],
        sidebar: {
          '/guide/': [
            {
              text: '快速开始',
              collapsible: true,
              children: [
                '/guide/README.md',
                '/guide/installation.md',
                '/guide/first-kit.md',
              ],
            },
          ],
          '/features/': [
            {
              text: '核心功能',
              collapsible: true,
              children: [
                '/features/README.md',
                '/features/kit-system.md',
                '/features/menu-system.md',
                '/features/cdk-system.md',
              ],
            },
          ],
          '/config/': [
            {
              text: '配置指南',
              collapsible: true,
              children: [
                '/config/README.md',
                '/config/config-files.md',
                '/config/placeholderapi.md',
                '/config/cron-expression.md',
              ],
            },
          ],
          '/commands/': [
            {
              text: '命令参考',
              collapsible: true,
              children: [
                '/commands/README.md',
                '/commands/admin.md',
                '/commands/player.md',
              ],
            },
          ],
          '/faq/': [
            {
              text: '常见问题',
              collapsible: true,
              children: [
                '/faq/README.md',
                '/faq/errors.md',
                '/faq/tips.md',
              ],
            },
          ],
          '/advanced/': [
            {
              text: '高级功能',
              collapsible: true,
              children: [
                '/advanced/README.md',
                '/advanced/architecture-v1.5.0.md',
                '/advanced/api.md',
              ],
            },
          ],
        },
      },
      '/en/': {
        selectLanguageName: 'English',
        selectLanguageText: 'Languages',
        navbar: [
          { text: 'Home', link: '/en/' },
          { text: 'Guide', link: '/en/guide/' },
          { text: 'Features', link: '/en/features/' },
          { text: 'Config', link: '/en/config/' },
          { text: 'Commands', link: '/en/commands/' },
          { text: 'FAQ', link: '/en/faq/' },
        ],
        sidebar: {
          '/en/guide/': [
            {
              text: 'Quick Start',
              collapsible: true,
              children: [
                '/en/guide/README.md',
                '/en/guide/installation.md',
                '/en/guide/first-kit.md',
              ],
            },
          ],
          '/en/features/': [
            {
              text: 'Core Features',
              collapsible: true,
              children: [
                '/en/features/README.md',
                '/en/features/kit-system.md',
                '/en/features/menu-system.md',
                '/en/features/cdk-system.md',
              ],
            },
          ],
          '/en/config/': [
            {
              text: 'Configuration',
              collapsible: true,
              children: [
                '/en/config/README.md',
                '/en/config/config-files.md',
                '/en/config/placeholderapi.md',
                '/en/config/cron-expression.md',
              ],
            },
          ],
          '/en/commands/': [
            {
              text: 'Commands',
              collapsible: true,
              children: [
                '/en/commands/README.md',
                '/en/commands/admin.md',
                '/en/commands/player.md',
              ],
            },
          ],
          '/en/faq/': [
            {
              text: 'FAQ',
              collapsible: true,
              children: [
                '/en/faq/README.md',
                '/en/faq/errors.md',
                '/en/faq/tips.md',
              ],
            },
          ],
          '/en/advanced/': [
            {
              text: 'Advanced',
              collapsible: true,
              children: [
                '/en/advanced/README.md',
                '/en/advanced/architecture-v1.5.0.md',
                '/en/advanced/api.md',
              ],
            },
          ],
        },
      },
    },
  }),
  
  locales: {
    '/': {
      lang: 'zh-CN',
      title: 'WkKit',
      description: 'WkKit - Minecraft 礼包管理插件文档',
    },
    '/en/': {
      lang: 'en-US',
      title: 'WkKit',
      description: 'WkKit - Minecraft Kit Management Plugin Documentation',
    },
  },
  
  plugins: [
    searchPlugin({
      locales: {
        '/': {
          placeholder: '搜索文档',
        },
        '/en/': {
          placeholder: 'Search',
        },
      },
    }),
  ],
})
