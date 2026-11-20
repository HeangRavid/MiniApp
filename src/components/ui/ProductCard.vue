<script setup>
import { computed, ref } from 'vue'

const props = defineProps({
  cake: {
    type: Object,
    required: true
  },
  priceGroup: {
    type: String,
    required: true
  }
})

const showConfirmation = ref(false)
const telegramOrderUrl = computed(() => {
  const username = 'RavitDeveloper'
  const message = `សួស្តី! ខ្ញុំចង់កុម្ម៉ង់នំនេះ៖\n\n🔢 លេខកូដ៖ ${props.cake.code}\n🍰 ឈ្មោះនំ៖ ${props.cake.name}\n💰 តម្លៃ៖ ${props.priceGroup}\n🖼️ រូបនំ៖ ${props.cake.image}\n\nសូមផ្ញើ KHQR មកខ្ញុំដើម្បីទូទាត់ប្រាក់។ អរគុណ!`

  return `https://t.me/${username}?text=${encodeURIComponent(message)}`
})
</script>

<template>
  <div class="product-card" data-scroll-reveal>
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
        
        <button
          type="button"
          class="add-to-cart"
          :aria-label="`Order ${cake.name}`"
          @click="showConfirmation = true"
        >
          <i class="bi bi-cart-plus"></i>
        </button>
      </div>
    </div>

    <Teleport to="body">
      <div
        v-if="showConfirmation"
        class="order-modal-backdrop"
        tabindex="-1"
        @click.self="showConfirmation = false"
        @keydown.esc="showConfirmation = false"
      >
        <section
          class="order-modal"
          role="dialog"
          aria-modal="true"
          aria-labelledby="order-modal-title"
        >
          <div class="order-modal-header">
            <h2 id="order-modal-title">Confirm your order</h2>
            <button
              type="button"
              class="order-modal-close"
              aria-label="Close"
              @click="showConfirmation = false"
            >
              <i class="bi bi-x-lg"></i>
            </button>
          </div>

          <div class="order-modal-product">
            <img :src="cake.image" :alt="cake.name" />
            <div>
              <h3>{{ cake.name }}</h3>
              <p>Code: {{ cake.code }}</p>
              <strong>{{ priceGroup }}.00</strong>
            </div>
          </div>

          <p class="order-modal-note">
           បន្តទៅកាន់ Telegram ដោយភ្ជាប់ជាមួយព័ត៌មានលម្អិតនៃការបញ្ជាទិញ
          </p>

          <div class="order-modal-actions">
            <button
              type="button"
              class="order-modal-cancel"
              @click="showConfirmation = false"
            >
              Cancel
            </button>
            <a
              class="order-modal-confirm"
              :href="telegramOrderUrl"
              target="_blank"
              rel="noopener noreferrer"
              @click="showConfirmation = false"
            >
              Continue to Telegram
              <i class="bi bi-telegram"></i>
            </a>
          </div>
        </section>
      </div>
    </Teleport>
  </div>
</template>ឋ

<style scoped>
.add-to-cart {
  border: 0;
  padding: 0;
}

.order-modal-backdrop {
  position: fixed;
  inset: 0;
  z-index: 1100;
  display: grid;
  place-items: center;
  padding: 20px;
  background: rgb(25 18 21 / 60%);
}

.order-modal {
  width: min(100%, 440px);
  padding: 24px;
  border-radius: 20px;
  background: #fff;
  box-shadow: 0 20px 60px rgb(0 0 0 / 24%);
}

.order-modal-header,
.order-modal-actions {
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 12px;
}

.order-modal-header h2 {
  margin: 0;
  color: #29212a;
  font-size: 22px;
  font-weight: 700;
}

.order-modal-close {
  display: grid;
  width: 36px;
  height: 36px;
  flex: 0 0 auto;
  place-items: center;
  border: 0;
  border-radius: 50%;
  background: #f7eef2;
  color: #6b5360;
}

.order-modal-product {
  display: flex;
  align-items: center;
  gap: 16px;
  margin-top: 20px;
}

.order-modal-product img {
  width: 96px;
  height: 96px;
  flex: 0 0 auto;
  border-radius: 14px;
  object-fit: cover;
}

.order-modal-product h3,
.order-modal-product p {
  margin: 0 0 6px;
}

.order-modal-product h3 {
  color: #29212a;
  font-size: 18px;
}

.order-modal-product p {
  color: #71656c;
}

.order-modal-product strong {
  color: #d61c62;
}

.order-modal-note {
  margin: 20px 0;
  color: #71656c;
  line-height: 1.5;
}

.order-modal-actions {
  justify-content: flex-end;
  flex-wrap: wrap;
}

.order-modal-cancel,
.order-modal-confirm {
  display: inline-flex;
  min-height: 42px;
  align-items: center;
  justify-content: center;
  gap: 8px;
  padding: 0 16px;
  border: 0;
  border-radius: 999px;
  font: inherit;
  font-weight: 600;
  text-decoration: none;
}

.order-modal-cancel {
  background: #f7eef2;
  color: #6b5360;
}

.order-modal-confirm {
  background: #d61c62;
  color: #fff;
}

.order-modal-confirm:hover {
  background: #b91652;
  color: #fff;
}
</style>