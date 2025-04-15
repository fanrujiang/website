const { defineConfig } = require('vite')
const vue = require('@vitejs/plugin-vue')
const path = require('path')

// 获取仓库名称，用于 GitHub Pages 部署
const getRepoName = () => {
  try {
    const repo = process.env.GITHUB_REPOSITORY
    return repo ? '/' + repo.split('/')[1] : ''
  } catch (e) {
    return ''
  }
}

module.exports = defineConfig({
  plugins: [vue()],
  base: process.env.NODE_ENV === 'production' ? getRepoName() : '/',
  resolve: {
    alias: {
      '@': path.resolve(__dirname, './src')
    }
  },
  css: {
    postcss: {
      plugins: [
        require('tailwindcss'),
        require('autoprefixer'),
      ],
    },
  },
  server: {
    port: 3000,
    open: true
  }
})
