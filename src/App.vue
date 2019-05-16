<template>
    <div>
        <div id="bg" class="uk-width-1-1">
      <app-header></app-header>
      <nav-links></nav-links>
      
      <router-view></router-view>
      
      <app-footer></app-footer>
    </div>
  </div>
</template>

<script>
//Imports

import navlinks from './components/navlinks.vue';
import header from './components/header.vue';
import footer from './components/footer.vue';


import UIkit from 'uikit';

import Datepicker from 'vuejs-datepicker';
import Icons from 'uikit/dist/js/uikit-icons';
import Vue from 'vue';
import { VueElevator } from 'vue-elevator';

Vue.component('VueElevator', VueElevator);


UIkit.use(Icons);


export default {
    
      data() {
            return {
                authenticated: false
            }
        },
        methods: {
            setAuthenticated(status) {
                this.authenticated = status;
                // //console.log(this.authenticated);
            },
        },
  components: {
    'nav-links': navlinks,
    'app-header': header,
    'app-footer': footer,
  }
}
</script>

<style scoped>
body{
  margin: 0;
  font-family: 'Nunito SemiBold';
}

</style>
