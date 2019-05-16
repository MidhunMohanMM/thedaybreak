<template>
     <div class="uk-section uk-padding-remove uk-section-default " v-bind:class="{'uk-position-bottom': $route.name === 'chat'}" style="background: #eeeeee; " >
      <!-- <div class="uk-container">
         <div class="uk-grid">
            <div class="uk-width-1-2@s uk-padding-small uk-padding-remove-vertical">
               <div class="uk-padding-small">
                  <h3 id="footerhead" class="uk-text-left uk-padding-remove-vertical uk-margin-remove-bottom uk-padding-remove-left">
                     <a id="ft" target="_blank" href="https://goo.gl/maps/GNp8kYDtTeL2">
                        <img style="margin-bottom:2px; color:black;" src="/src/assets/loc.svg" width="25" height="25" uk-svg> Find us
                        
                     </a>
                  </h3>
               </div>
            </div>
            <div class="uk-width-1-2@s uk-padding-small uk-padding-remove-vertical">
               <address>
                  <div class="uk-grid-collapse footimggrp" uk-grid>
                  
                   
                     <div class="uk-width-1-2">
                        <img class="footerimg" src="/src/assets/poshpublogo.png" alt="POSHP">
                     </div>
                  </div>
               </address>
            </div>
         </div>
      </div> -->
      <div class="footer-bottom">
         <p class="uk-text-center uk-text-meta uk-padding-small uk-padding-remove-vertical uk-margin-remove-bottom">Made
            <span class="uk-icon uk-icon-image" style="margin-bottom:5px;background-image: url(/src/assets/atag.svg);"></span>
            <a class="uk-link-reset" href="https://www.ancatag.com">Ancatag</a>
         </p>
      </div>
   </div>
</template>

<script>
export default {
    data(){
        return{
            word: "",
            duration: 3000,
            mainAudio: "",
            endAudio: ""
        }
    }
}
</script>

<style scoped>

#ft{
    color: #001500;
    text-decoration: none!important;
    font-size: 16px;
}   

</style>
