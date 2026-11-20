<script setup>
import AppNavbar from './components/layout/AppNavbar.vue'
import HeroSection from './components/sections/HeroSection.vue'
import ProductsSection from './components/sections/ProductsSection.vue'
import LocationSection from './components/sections/LocationSection.vue'
import AppFooter from './components/layout/AppFooter.vue' // <-- បន្ថែមវានៅទីនេះ
import FloatingTelegram from './components/layout/FloatingTelegram.vue'
</script>

<template>
  <div class="website">
    <AppNavbar />
    <HeroSection />
    <ProductsSection />
    <LocationSection />
    
    <!-- បន្ថែម Footer នៅទីនេះ -->
    <AppFooter /> 
    
    <FloatingTelegram />
  </div>
</template>