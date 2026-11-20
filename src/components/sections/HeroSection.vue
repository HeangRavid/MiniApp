<script setup>
import { stats } from '../../data/cakes.js'
const telegramUrl = 'https://t.me/YourTelegramBot'
</script>

<template>
  <section class="hero-section">
    <div class="full-width-container hero-container">
      <div class="hero-content" data-scroll-reveal>
        <div class="hero-badge">
          <i class="bi bi-star-fill"></i> Freshly Baked With Love <i class="bi bi-heart-fill text-pink"></i>
        </div>

        <h1 class="hero-title">
          Make Every Moment <br>
          <span class="script-text">Extra Sweet!</span>
        </h1>

        <p class="hero-desc">
          Discover our delicious handmade cakes, freshly baked with love and the finest ingredients for your special moments.
        </p>

        <div class="hero-buttons">
          <a href="#products" class="btn-primary">
            <i class="bi bi-cake2-fill"></i> Explore Cakes <i class="bi bi-arrow-right"></i>
          </a>
          <a href="#" class="btn-secondary">
            <i class="bi bi-play-circle-fill"></i> Watch Video
          </a>
        </div>

        <div class="stats-box">
          <div class="stat-item" v-for="(stat, index) in stats" :key="index">
            <div class="stat-icon"><i :class="`bi ${stat.icon}`"></i></div>
            <div class="stat-info">
              <h3>{{ stat.value }}</h3>
              <p>{{ stat.label }}</p>
            </div>
          </div>
        </div>
      </div>

      <div class="hero-image-wrapper" data-scroll-reveal>
        <div class="bg-shape shape-1"></div>
        <img 
          src="https://images.unsplash.com/photo-1578985545062-69928b1d9587?w=1200&q=80" 
          alt="Delicious Pink Cake" 
          class="hero-img"
        />
        <i class="bi bi-heart-fill deco-heart heart-1"></i>
        <i class="bi bi-heart-fill deco-heart heart-2"></i>
      </div>
    </div>
  </section>
</template>