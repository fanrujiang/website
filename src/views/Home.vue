<template>
  <div>
    <!-- Hero Section -->
    <div class="relative bg-indigo-900">
      <div class="absolute inset-0 bg-gradient-to-r from-indigo-900 to-indigo-800"></div>
      <div class="relative max-w-7xl mx-auto py-24 px-4 sm:py-32 sm:px-6 lg:px-8">
        <h1 class="text-4xl font-extrabold tracking-tight text-white sm:text-5xl lg:text-6xl">
          打造卓越的数字体验
        </h1>
        <p class="mt-6 text-xl text-gray-300 max-w-3xl">
          我们致力于为客户提供最优质的技术解决方案，助力企业数字化转型。
        </p>
        <div class="mt-10">
          <router-link to="/contact" class="inline-flex items-center px-6 py-3 border border-transparent text-base font-medium rounded-md text-white bg-indigo-600 hover:bg-indigo-700 transition-colors duration-200">
            立即咨询
          </router-link>
        </div>
      </div>
    </div>

    <!-- 公司简介 -->
    <div class="py-12 bg-white">
      <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div class="lg:text-center">
          <h2 class="text-base text-indigo-600 font-semibold tracking-wide uppercase">关于我们</h2>
          <p class="mt-2 text-3xl leading-8 font-extrabold tracking-tight text-gray-900 sm:text-4xl">
            专业的技术服务团队
          </p>
          <p class="mt-4 max-w-2xl text-xl text-gray-500 lg:mx-auto">
            我们拥有一支经验丰富的技术团队，专注于为企业提供全方位的数字化解决方案。
          </p>
        </div>
      </div>
    </div>

    <!-- 服务预览 -->
    <div class="bg-gray-50 py-12">
      <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div class="text-center">
          <h2 class="text-3xl font-extrabold text-gray-900 sm:text-4xl">
            我们的服务
          </h2>
          <p class="mt-4 text-lg text-gray-500">
            为您提供全方位的技术支持和服务
          </p>
        </div>
        <div class="mt-10 grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-3">
          <div v-for="service in services" :key="service.title" class="bg-white overflow-hidden shadow rounded-lg">
            <div class="p-6">
              <div class="flex items-center">
                <div class="flex-shrink-0 bg-indigo-500 rounded-md p-3">
                  <component :is="service.icon" class="h-6 w-6 text-white" />
                </div>
                <div class="ml-4">
                  <h3 class="text-lg font-medium text-gray-900">{{ service.title }}</h3>
                </div>
              </div>
              <p class="mt-4 text-gray-500">{{ service.description }}</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
import { 
  CodeBracketIcon, 
  CpuChipIcon, 
  CloudIcon 
} from '@heroicons/vue/24/outline'

const services = [
  {
    title: '网站开发',
    description: '专业的网站设计与开发服务，打造现代化、响应式的企业网站。',
    icon: CodeBracketIcon
  },
  {
    title: '系统集成',
    description: '为企业提供系统集成解决方案，实现业务流程的数字化和自动化。',
    icon: CpuChipIcon
  },
  {
    title: '云服务',
    description: '提供云服务器部署、运维和管理服务，确保系统稳定运行。',
    icon: CloudIcon
  }
]
</script>

<style scoped>
/* 组件样式 */
</style> 