import { defineConfig } from 'vitepress'
import { NAV_LINKS, SIDEBAR_LINKS, SOCIAL_LINKS } from '../constants/Links.mjs'

// https://vitepress.dev/reference/site-config
export default defineConfig({
  lang: 'id-ID',
  title: "JavaScript Docs",
  description: "JavaScript Dokumentasi Bahasa Indonesia",
  cleanUrls: true,
  ignoreDeadLinks: true,
  markdown: {
    theme: {
      light: 'github-light',
      dark: 'tokyo-night'
    },
  },
  themeConfig: {
    // https://vitepress.dev/reference/default-theme-config
    search: {
      provider: 'local'
    },

    logo: '/favicon.ico',
    
    nav: NAV_LINKS,
    sidebar: SIDEBAR_LINKS,
    socialLinks: SOCIAL_LINKS,
    outline: 'deep',
  }
})
