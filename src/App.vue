<script setup>
import { onBeforeUnmount, onMounted, ref } from 'vue'
import AppNavbar from './components/layout/AppNavbar.vue'
import HeroSection from './components/sections/HeroSection.vue'
import ProductsSection from './components/sections/ProductsSection.vue'
import LocationSection from './components/sections/LocationSection.vue'
import AppFooter from './components/layout/AppFooter.vue' // <-- បន្ថែមវានៅទីនេះ
import FloatingTelegram from './components/layout/FloatingTelegram.vue'

const appRoot = ref(null)
const searchQuery = ref('')
let scrollRevealObserver

const scrollToProducts = () => {
  document.getElementById('products')?.scrollIntoView({
    behavior: 'smooth',
    block: 'start'
  })
}

onMounted(() => {
  const root = appRoot.value

  if (!root || !('IntersectionObserver' in window)) return

  const revealItems = root.querySelectorAll('[data-scroll-reveal]')
  if (!revealItems.length) return

  root.classList.add('scroll-reveal-enabled')
  scrollRevealObserver = new IntersectionObserver((entries, observer) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        entry.target.classList.add('is-visible')
        observer.unobserve(entry.target)
      }
    })
  }, {
    threshold: 0.12,
    rootMargin: '0px 0px -32px 0px'
  })

  revealItems.forEach((item) => scrollRevealObserver.observe(item))
})

onBeforeUnmount(() => {
  if (scrollRevealObserver) scrollRevealObserver.disconnect()
})
</script>

<template>
  <div ref="appRoot" class="website">
    <AppNavbar v-model:search-query="searchQuery" @search="scrollToProducts" />
    <HeroSection />
    <ProductsSection :search-query="searchQuery" />
    <LocationSection />
    
    <!-- បន្ថែម Footer នៅទីនេះ -->
    <AppFooter /> 
    
    <FloatingTelegram />
  </div>
</template>