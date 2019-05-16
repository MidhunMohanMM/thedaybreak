import Vue from 'vue'
import App from './App.vue'
import VueResource from 'vue-resource'
import VueRouter from 'vue-router'
import Routes from './routes'
import VueAnalytics from 'vue-analytics'
import wysiwyg from 'vue-wysiwyg'

import {store} from './store/store'

import Meta from 'vue-meta';

require ('vue-wysiwyg/dist/vueWysiwyg.css');
var md5 = require('js-md5');
var SocialSharing = require('vue-social-sharing');
Vue.use(SocialSharing);
//export const bus= new Vue();

Vue.use(VueResource);
Vue.use(VueRouter);
Vue.use(wysiwyg, {});
Vue.use(Meta);

//Vue.config.productionTip = false
//Vue.prototype.$code = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJzdGF0dXMiOmZhbHNlLCJfaWQiOiI1YjVhY2Y5NGZkMjIyNjM1NmQ1N2VjYWMiLCJ1c2VybmFtZSI6InRlc3QiLCJwYXNzd29yZCI6InRlc3QiLCJuYW1lIjoidGVzdCAxIiwiY3JlYXRlZCI6IjIwMTgtMDctMjdUMDc6NTM6NTYuODIzWiIsInVwZGF0ZWQiOiIyMDE4LTA3LTI3VDA3OjUzOjU2LjgyM1oiLCJfX3YiOjAsImlhdCI6MTUzMzYzMTk5MX0.sbu1qh5gv_OYaFXxHB7mRlRLtI1HRqY1PFiBNYXqOjk'


Vue.prototype.$code = config.MY_KEY;


const router = new VueRouter({
  routes: Routes,
  mode: 'history'
});

Vue.use(VueAnalytics, {
  id: 'UA-109505219-1'
})
// Vue.directive('rainbow',{
//   bind(el,binding,vnode){
//     el.style.color = "#" + Math.random().toString().slice(2,8);
//   }
// });

Vue.directive('theme',{
  bind(el,binding,vnode){
    if(binding.value == 'wide'){
      el.style.maxWidth= "1200px";
    }
      else if (binding.value == 'narrow') {
        el.style.maxWidth= "1000px";
      }
      if(binding.arg == 'column'){
        el.style.background = '#ddd';
        el.style.padding = '20px';
      }
    }
});

//Filters

// Vue.filter('to-uppercase', function(value){
//   return value.toUpperCase();
// });

Vue.filter('striphtml', function (value) {
  var div = document.createElement("div");
  div.innerHTML = value;
  var text = div.textContent || div.innerText || "";
  return text;
});

Vue.filter('short', function(value){
  return value.slice(0,100) + '...';
});

var vm = new Vue({
  store: store,
  el: '#app',
  render: h => h(App),
  router: router
})


