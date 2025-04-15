<template>
  <div class="min-h-screen flex flex-col">
    <Navbar />
    <main class="flex-grow pt-16">
      <router-view></router-view>
    </main>
    <Footer />
  </div>
</template>

<script setup>
import Navbar from '@/components/Navbar.vue'
import Footer from '@/components/Footer.vue'
</script>

<style>
@import '@/styles/main.css';
</style> 