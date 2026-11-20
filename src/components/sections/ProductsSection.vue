<script setup>
import { computed } from 'vue'
import { cakeCategories } from '../../data/cakes.js'
import ProductCard from '../ui/ProductCard.vue'

const props = defineProps({
  searchQuery: {
    type: String,
    default: ''
  }
})

const matchingCakeIds = computed(() => {
  const query = props.searchQuery.trim().toLocaleLowerCase()
  const priceQuery = query.replace(/[\s$]/g, '')

  return new Set(
    cakeCategories
      .flatMap((group) =>
        group.cakes
          .filter((cake) => {
            const matchesName = cake.name.toLocaleLowerCase().includes(query)
            const normalizedPrice = group.priceGroup.toLocaleLowerCase().replace(/[\s$]/g, '')
            const matchesPrice = priceQuery.length > 0 && normalizedPrice.includes(priceQuery)

            return matchesName || matchesPrice
          })
          .map((cake) => cake.id)
      )
  )
})

const matchingCakeCount = computed(() => matchingCakeIds.value.size)
const categoryHasMatches = (group) =>
  group.cakes.some((cake) => matchingCakeIds.value.has(cake.id))
</script>

<template>
  <section id="products" class="products-section">
    <div class="full-width-container">
      
      <div class="section-header" data-scroll-reveal>
        <h2>Our Sweet <span class="text-pink">Collection</span></h2>
        <p>Find the perfect cake for your budget and taste.</p>
      </div>

      <div
        class="price-category-group"
        v-for="(group, index) in cakeCategories"
        :key="index"
        v-show="categoryHasMatches(group)"
      >
        
        <div class="category-header" data-scroll-reveal>
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
            v-show="matchingCakeIds.has(cake.id)"
          />
        </div>

      </div>

      <div v-if="matchingCakeCount === 0" class="search-empty-state" role="status">
        <i class="bi bi-search"></i>
        <h3>No cakes found</h3>
        <p>Try a cake name or price, like 5$.</p>
      </div>
    </div>
  </section>
</template>