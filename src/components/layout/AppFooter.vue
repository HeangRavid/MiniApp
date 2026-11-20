<script setup>
const telegramUrl = 'https://t.me/YourTelegramBot'
const googleMapsLink = 'https://maps.app.goo.gl/5WXXAH2Zkn2WdtUu9'
</script>

<template>
  <footer class="custom-footer">
    <!-- ផ្នែកខាងលើ (Newsletter) -->
    <div class="footer-newsletter">
      <div class="full-width-container newsletter-container">
        <div class="newsletter-text">
          <h3>Subscribe for Sweet Updates</h3>
          <p>Get the latest news and special discounts directly in your inbox.</p>
        </div>
        <div class="newsletter-form">
          <input type="email" placeholder="Enter your email address..." />
          <button class="btn-subscribe">Subscribe</button>
        </div>
      </div>
    </div>

    <!-- ផ្នែកកណ្តាល (ព័ត៌មានលម្អិត) -->
    <div class="footer-main">
      <div class="full-width-container">
        <div class="footer-grid">
          
          <!-- ជួរទី១៖ អំពីហាង -->
          <div class="footer-col brand-col">
            <a class="footer-logo" href="#">
              <div class="brand-icon">
                <i class="bi bi-cake2"></i>
              </div>
              <h2>Pink<span class="text-pink">Cake</span></h2>
            </a>
            <p class="footer-desc">
              Making every moment a little sweeter with our freshly baked, handmade cakes. Crafted with love and the finest natural ingredients.
            </p>
            <div class="footer-socials">
              <a href="#" aria-label="Facebook"><i class="bi bi-facebook"></i></a>
              <a href="#" aria-label="TikTok"><i class="bi bi-tiktok"></i></a>
              <a :href="telegramUrl" target="_blank" aria-label="Telegram"><i class="bi bi-telegram"></i></a>
            </div>
          </div>

          <!-- ជួរទី២៖ តំណភ្ជាប់រហ័ស -->
          <div class="footer-col">
            <h3>Quick Links</h3>
            <ul class="footer-links">
              <li><a href="#">Home</a></li>
              <li><a href="#products">Our Cakes</a></li>
              <li><a href="#">About Us</a></li>
              <li><a href="#">Contact</a></li>
            </ul>
          </div>

          <!-- ជួរទី៣៖ ទំនាក់ទំនង -->
          <div class="footer-col">
            <h3>Contact Us</h3>
            <ul class="footer-contact">
              <li>
                <i class="bi bi-geo-alt-fill"></i>
                <a :href="googleMapsLink" target="_blank">CV26+RF2, 105, Siem Reap, Cambodia</a>
              </li>
              <li>
                <i class="bi bi-telephone-fill"></i>
                <span>+855 12 345 678</span>
              </li>
              <li>
                <i class="bi bi-envelope-fill"></i>
                <span>hello@pinkcake.com</span>
              </li>
            </ul>
          </div>

        </div>
      </div>
    </div>
  </footer>
</template>