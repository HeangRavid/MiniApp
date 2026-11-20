<script setup>
import { ref } from 'vue'
const menuOpen = ref(false)
const telegramUrl = 'https://t.me/YourTelegramBot'
</script>

<template>
  <nav class="custom-navbar">
    <div class="full-width-container nav-container">
      <a class="brand-logo" href="#">
        <div class="brand-icon">
          <i class="bi bi-cake2"></i>
        </div>
        <div class="brand-text">
          <h1>PinkCake</h1>
          <span>Sweet moments, every day <i class="bi bi-heart-fill text-pink"></i></span>
        </div>
      </a>

      <button class="navbar-toggler" @click="menuOpen = !menuOpen">
        <i class="bi bi-list"></i>
      </button>

      <div class="nav-menu" :class="{ show: menuOpen }">
        <ul class="nav-links">
          <li><a href="#" class="active"><i class="bi bi-house-door-fill"></i> Home</a></li>
          <li><a href="#products"><i class="bi bi-grid"></i> Products</a></li>
          <li><a href="#"><i class="bi bi-info-circle"></i> About Us</a></li>
          <li><a href="#"><i class="bi bi-envelope"></i> Contact</a></li>
        </ul>
      </div>

      <div class="nav-actions">
        <button class="icon-btn"><i class="bi bi-search"></i></button>
        <button class="icon-btn cart-btn">
          <i class="bi bi-cart2"></i>
          <span class="badge">0</span>
        </button>
        <a :href="telegramUrl" class="btn-order">Order Now <i class="bi bi-arrow-right-circle-fill"></i></a>
      </div>
    </div>
  </nav>
</template>