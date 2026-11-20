<script setup>
const googleMapsLink = 'https://maps.app.goo.gl/5WXXAH2Zkn2WdtUu9'
const mapEmbedUrl = 'https://maps.google.com/maps?q=CV26%2BRF2,%20105,%20Siem%20Reap,%20Cambodia&t=&z=15&ie=UTF8&iwloc=&output=embed'
</script>

<template>
  <section class="location-section">
    <div class="full-width-container">
      
      <div class="section-header text-center" data-scroll-reveal>
        <h2>Visit Our <span class="text-pink">Store</span></h2>
        <p>Come and taste the sweetness in person. We'd love to see you!</p>
      </div>

      <div class="location-grid">
        
        <!-- ប្រអប់ព័ត៌មានទំនាក់ទំនង -->
        <div class="contact-info" data-scroll-reveal>
          
          <div class="info-list">
            <!-- អាសយដ្ឋាន -->
            <div class="info-item">
              <div class="icon-box"><i class="bi bi-geo-alt-fill"></i></div>
              <div class="text-box">
                <h4>Our Address</h4>
                <p>CV26+RF2, 105, Siem Reap, Cambodia</p>
              </div>
            </div>

            <!-- ម៉ោងបើកចំហ -->
            <div class="info-item">
              <div class="icon-box"><i class="bi bi-clock-fill"></i></div>
              <div class="text-box">
                <h4>Opening Hours</h4>
                <p>Mon - Sun: 7:00 AM - 9:00 PM</p>
              </div>
            </div>

            <!-- លេខទូរស័ព្ទ -->
            <div class="info-item">
              <div class="icon-box"><i class="bi bi-telephone-fill"></i></div>
              <div class="text-box">
                <h4>Phone Number</h4>
                <p>+855 12 345 678</p>
              </div>
            </div>
          </div>

          <!-- ប៊ូតុងរកផ្លូវ -->
          <a :href="googleMapsLink" target="_blank" class="btn-directions">
            <i class="bi bi-geo-alt"></i> Get Directions
          </a>
        </div>

        <!-- ផែនទី -->
        <div class="map-container" data-scroll-reveal>
          <iframe 
            :src="mapEmbedUrl" 
            width="100%" 
            height="100%" 
            style="border:0;" 
            allowfullscreen="" 
            loading="lazy">
          </iframe>
        </div>

      </div>
    </div>
  </section>
</template>