// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  compatibilityDate: '2024-04-03',
  devtools: { enabled: true },
  modules:["@element-plus/nuxt"] // 只要引入 @element-plus/nuxt 了，pages/index.vue 下面的页面写代码保存就不会触发热更新。
})
