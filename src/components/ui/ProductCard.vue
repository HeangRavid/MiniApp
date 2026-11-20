<script setup>
const props = defineProps({
  cake: Object,
  priceGroup: String
})

const getTelegramOrderLink = () => {
  const username = 'RavitDeveloper' 
  
  // បន្ថែមលេខកូដនំ (Code) ចូលទៅក្នុងសារ
  const message = `សួស្តី! ខ្ញុំចង់កុម្ម៉ង់នំនេះ៖\n\n🔢 លេខកូដ៖ ${props.cake.code}\n🍰 ឈ្មោះនំ៖ ${props.cake.name}\n💰 តម្លៃ៖ ${props.priceGroup}\n\nសូមផ្ញើ KHQR មកខ្ញុំដើម្បីទូទាត់ប្រាក់។ អរគុណ!`
  
  return `https://t.me/${username}?text=${encodeURIComponent(message)}`
}
</script>

<template>
  <div class="product-card">
    <div class="product-image-box">
      <img :src="cake.image" :alt="cake.name" style="width: 100%; height: 100%; object-fit: cover;" />
      
      <!-- បង្ហាញលេខកូដនៅជ្រុងខាងឆ្វេងនៃរូបភាព -->
      <span class="cake-code">{{ cake.code }}</span>
      
      <!-- បង្ហាញតម្លៃនៅជ្រុងខាងស្តាំ -->
      <span class="price-tag">{{ priceGroup }}</span>
    </div>

    <div class="product-info">
      <h3 class="name">{{ cake.name }}</h3>
      
      <div class="product-footer">
        <span class="price">{{ priceGroup }}.00</span>
        
        <a :href="getTelegramOrderLink()" target="_blank" class="add-to-cart" style="text-decoration: none;">
          <i class="bi bi-cart-plus"></i>
        </a>
      </div>
    </div>
  </div>
</template>ឋ