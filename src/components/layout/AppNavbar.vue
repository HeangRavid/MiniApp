<script setup>
import { nextTick, ref } from 'vue'

defineProps({
  searchQuery: {
    type: String,
    default: ''
  }
})

const emit = defineEmits(['update:searchQuery', 'search'])
const menuOpen = ref(false)
const searchOpen = ref(false)
const searchInput = ref(null)
const telegramUrl = 'https://t.me/YourTelegramBot'

const toggleSearch = async () => {
  if (searchOpen.value) {
    searchOpen.value = false
    emit('update:searchQuery', '')
    return
  }

  searchOpen.value = true
  await nextTick()
  searchInput.value?.focus()
}

const submitSearch = () => {
  searchOpen.value = false
  emit('search')
}
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
        <button
          type="button"
          class="icon-btn"
          aria-label="Search cakes"
          :aria-expanded="searchOpen"
          aria-controls="navbar-search-panel"
          @click="toggleSearch"
        >
          <i class="bi bi-search"></i>
        </button>
        <form
          v-if="searchOpen"
          id="navbar-search-panel"
          class="navbar-search-panel"
          role="search"
          @submit.prevent="submitSearch"
        >
          <input
            ref="searchInput"
            :value="searchQuery"
            type="search"
            placeholder="Search name or price (e.g. 5$)..."
            aria-label="Search cake by name or price"
            @input="emit('update:searchQuery', $event.target.value)"
          />
          <button type="submit" aria-label="Submit cake search">
            <i class="bi bi-search"></i>
          </button>
        </form>
        <button class="icon-btn cart-btn">
          <i class="bi bi-cart2"></i>
          <span class="badge">0</span>
        </button>
        <a :href="telegramUrl" class="btn-order">Order Now <i class="bi bi-arrow-right-circle-fill"></i></a>
      </div>
    </div>
  </nav>
</template>