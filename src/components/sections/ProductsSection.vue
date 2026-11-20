<script setup>
import { cakeCategories } from '../../data/cakes.js'
import ProductCard from '../ui/ProductCard.vue'
</script>

<template>
  <section id="products" class="products-section">
    <div class="full-width-container">
      
      <div class="section-header">
        <h2>Our Sweet <span class="text-pink">Collection</span></h2>
        <p>Find the perfect cake for your budget and taste.</p>
      </div>

      <div class="price-category-group" v-for="(group, index) in cakeCategories" :key="index">
        
        <div class="category-header">
          <h3 class="price-title">{{ group.priceGroup }}</h3>
          <span class="subtitle">{{ group.title }}</span>
          <div class="line"></div>
        </div>

        <div class="products-grid">
          <!-- ហៅ ProductCard Component មកប្រើ -->
          <ProductCard 
            v-for="cake in group.cakes" 
            :key="cake.id" 
            :cake="cake" 
            :priceGroup="group.priceGroup" 
          />
        </div>

      </div>
    </div>
  </section>
</template>