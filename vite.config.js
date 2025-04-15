const { defineConfig } = require('vite')
const vue = require('@vitejs/plugin-vue')
const path = require('path')

// 获取仓库名称，用于 GitHub Pages 部署
const getRepoName = () => {
  try {
    // GITHUB_REPOSITORY 格式为 "组织名/仓库名" 或 "用户名/仓库名"
    const repo = process.env.GITHUB_REPOSITORY
    if (repo) {
      const [, name] = repo.split('/')
      return `/${name}/`
    }
    return ''
  } catch (e) {
    return ''
  }
}

module.exports = defineConfig({
  plugins: [vue()],
  // base: process.env.NODE_ENV === 'production' && getRepoName() ? getRepoName() : '/',
  base: '/website/',
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
