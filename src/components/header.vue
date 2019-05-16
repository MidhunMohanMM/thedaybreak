<template>
<div uk-scrollspy="cls:uk-animation-fade; repeat: true">
  <main class="uk-visible@m" id="desktop">
    <span v-if="$route.name != 'admin' && $route.name != 'dashboard' && $route.name != 'editarticle' && $route.name != 'editevent'  && $route.name != 'addadminarticle' && $route.name != 'addevent' ">

  <nav class="uk-navbar-container uk-navbar-transparent  " uk-navbar>
    <div class="uk-navbar-right">
      <div class="uk-container uk-container-small uk-align-right" uk-grid style="padding-right:40px;padding-top:10px;">
        <p class="uk-text-meta uk-margin-large-right uk-dark uk-padding-remove-bottom">
          
          <a class="uk-link-reset" target="_blank" href="https://www.facebook.com/The-Daybreak-765969523579140/">

          <div class="uk-inline-clip uk-transition-toggle" tabindex="0">
          <img class="socialico uk-transition-scale-up uk-transition-opaque" src="/src/assets/ico/fb.svg" />
          </div>
          <a class="uk-link-reset" target="_blank" href="https://twitter.com/daybreak_the?lang=en">
         <div class="uk-inline-clip uk-transition-toggle" tabindex="0">
          <img class="socialico uk-transition-scale-up uk-transition-opaque" src="/src/assets/ico/inst.svg" />
          </div></a>
          </a>
          <a class="uk-link-reset" target="_blank" href="https://twitter.com/daybreak_the?lang=en">
         <div class="uk-inline-clip uk-transition-toggle" tabindex="0">
          <img class="socialico uk-transition-scale-up uk-transition-opaque" src="/src/assets/ico/tw.svg" />
          </div></a>
          
          <a class="uk-link-reset" uk-tooltip = "Mail us!" href="mailto:info@thedaybreak.in" >info@thedaybreak.in </a> | <a class="uk-link-reset" href="tel:+919895346363" uk-tooltip="Call us!" > +91 7034 024 432 </a> |
          <span class="uk-badge">
            <a class="uk-link-reset custom-margin-bottom-2" href="#subscribemodal" uk-tooltip="Subscribe us!" uk-toggle>Subscribe</a>
          </span>
          <span class="uk-badge uk-label-success uk-link-reset custom-margin-bottom-2">
            <router-link to="/adduserarticle" uk-tooltip="Publish your article!" exact>Publish Your View</router-link>
          </span>
        </p>
      </div>
    </div>
  </nav>
  </span>
  <div id="subscribemodal" class="uk-flex-top" uk-modal>
    <div class="uk-modal-dialog uk-modal-body uk-margin-auto-vertical">
      <img src="/src/assets/logo.png" alt="The Daybreak" width="18%"> 
      <br>
      <label class="uk-form-label  uk-text-large uk-text-warning" for="form-horizontal-text">Subscribe to get our fortnightly newspaper 📰</label>
      <br>
      <label class="uk-form-label uk-text-muted" for="form-horizontal-text">Fill out this form and we will contact you ♥ [20 issues (year) for Rs.300 only]</label>
      <br>
  
      <hr>
      <button class="uk-modal-close-default" uk-tooltip="Close" type="button" uk-close></button>
    
      <form class="uk-grid-small" uk-grid>
    <div class="uk-width-2-3@s">
      <div class="inline">
      <span class="uk-form-icon" uk-icon="icon: user"></span>
        <input class="uk-input" type="text" placeholder="Student Name">
      </div>
    </div>
    <div class="uk-width-1-3@s">
      <div class="inline">
      <span class="uk-form-icon" uk-icon="icon: tag"></span>
        <input class="uk-input" type="text" placeholder="Age">
      </div>
    </div>
    <div class="uk-width-1-1@s">
        <!-- <div class="inline">
      <span class="uk-form-icon" uk-icon="icon: users"></span>
        <input class="uk-input" type="text" placeholder="Name of the Parent">
      </div> -->
      <div class="inline">
      <span class="uk-form-icon" uk-icon="icon: location"></span>
        <input class="uk-input" type="text" placeholder="School Name">
      </div>
    </div>
        
        <div class="uk-width-1-2@s">
          <div class="inline">
            <span class="uk-form-icon" uk-icon="icon: file-edit"></span>
            <input class="uk-input" type="text" placeholder="Class">
          </div>
        </div>
        <div class="uk-width-1-2@s">
          <div class="inline">
            <span class="uk-form-icon" uk-icon="icon: pencil"></span>
              <input class="uk-input" type="text" placeholder="Division">
          </div>
        </div>
    <div class="uk-width-2-3@s">
         <div class="inline">
      <span class="uk-form-icon" uk-icon="icon: home"></span>
        <input class="uk-input" type="text" placeholder="House address">
      </div>
    </div>
    <div class="uk-width-1-3@s">
       <div class="inline">
      <span class="uk-form-icon" uk-icon="icon: mail"></span>
        <input class="uk-input" type="text" placeholder="Pincode">
      </div>
    </div>
    <div class="uk-width-2-3@s">
      <!-- <div class="inline">
      <span class="uk-form-icon" uk-icon="icon: receiver"></span>
        <input class="uk-input" type="text" placeholder="Phone">
      </div> -->
      <div class="inline">
      <span class="uk-form-icon" uk-icon="icon: users"></span>
        <input class="uk-input" type="text" placeholder="Name of the Parent">
      </div>
    </div>
    <div class="uk-width-1-3@s">
      <!-- <div class="inline">
      <span class="uk-form-icon" uk-icon="icon: mail"></span>
        <input class="uk-input" type="text" placeholder="Pincode">
      </div> -->
      <div class="inline">
      <span class="uk-form-icon" uk-icon="icon: receiver"></span>
        <input class="uk-input" type="text" placeholder="Phone">
      </div>
    </div>
     <div class="uk-width-1-1@s">
         <div class="inline">
      <span class="uk-form-icon" uk-icon="icon: heart"></span>
        <input class="uk-input" type="text" placeholder="Favorite Hobbies">
        </div>
    </div>
     <!-- <div class="uk-width-1-3@s">
      <div class="inline">
      <span class="uk-form-icon" uk-icon="icon: location"></span>
        <input class="uk-input" type="text" placeholder="School">
      </div>
    </div> -->

     
      <button class="uk-button uk-button-default uk-button-small " style="margin-left: 462px;" >
        <label class="uk-form-label uk-text-muted uk-text-capitalize" >Subscribe</label>
      </button>
</form>
    </div>
  </div>
  <nav>
    <a class=" uk-logo " :href="base_url">
    <img class="logoimg" src="/src/assets/logo.png" alt="The Daybreak" width="25%"> 
    </a>
                             
  </nav>

</main>
<main id="mobile" style="min-height:100px;">
<nav class="uk-navbar-container uk-navbar-transparent" uk-navbar>
      <div class="uk-navbar-left">
         <div class="uk-container uk-container-small">
            <a class="uk-navbar-item uk-logo" href="base_url">
               <img style="width:250px;height:80px;margin-top:50px;" class="brand-logo" src="/src/assets/logo.png" alt="The Daybreak">
            </a>
         </div>
      </div>
      <div class="uk-navbar-right">
      	<a class="uk-navbar-toggle openBtn"  @click="openSearch()"  uk-search-icon uk-toggle></a>
         <a class="uk-navbar-toggle " uk-navbar-toggle-icon href="#" type="button" uk-toggle="target: #offcanvas-push"></a>
      </div>
      <div id="offcanvas-push" uk-offcanvas="flip: true; overlay: true">
         <div class="uk-offcanvas-bar uk-flex uk-flex-column">
            <button class="uk-offcanvas-close" type="button" uk-close></button>
            <ul class="uk-nav uk-nav-primary uk-nav-center uk-margin-auto-vertical" uk-nav="multiple: true">
               <li class="uk-nav-header" onTranslate="global.menu.title">Menu</li>
               <li class="uk-divider-icon uk-margin-remove-bottom"></li>
               <li>
                  <a><router-link to="/home" exact>Home</router-link></a>
               </li>
               <li class="uk-parent">
                  <a>News</a>
                
                  <ul class="uk-nav-sub">
                    <li><a><router-link to="/editorspick" exact>Editor's Pick</router-link></a></li> 
                    	<li v-for="categorylist in categories" :key="categorylist.catid"><a  class='uk-text-capitalize'>
                         <router-link v-bind:to="'/'+categorylist.category+'/'+categorylist.catid" >{{ categorylist.category }}</router-link></a></li>
                  
                   

                  </ul>
              
               </li>
               <li class="uk-parent">
                  <a>Opinion</a>
                  <ul class="uk-nav-sub">
                     <li>
                        <a ><router-link  v-bind:to="'/editorial/5bbb44de450a9b398b1ca67a'" >Editorial</router-link></a>
                     </li>
                     <li>
                        <a ><router-link  v-bind:to="'/column/5bbb44de450a9b398b1ca67b'" >Column</router-link></a>
                     </li>
                  </ul>
               </li>
               <li class="uk-parent">
                  <a>Open Page</a>
                  <ul class="uk-nav-sub">
                     <li>
                        <a ><router-link  v-bind:to="'/students/5bbb44de450a9b398b1ca679'" >Student</router-link></a>
                     </li>
                     <li>
                        <a ><router-link  v-bind:to="'/teachers/5bbb44de450a9b398b1ca678'" >Teachers</router-link></a>
                     </li>
                     <li>
                        <a ><router-link  v-bind:to="'/parents/5bbb44de450a9b398b1ca677'" >Parents</router-link></a>
                     </li>
                  </ul>
               </li>
               <li class="uk-parent">
                  <a>Events</a>
                  <ul class="uk-nav-sub">
                     <li>
                        <a><router-link to="/ourevents" exact>Our Events</router-link></a>
                     </li>
                     <li>
                        <a ><router-link to="/upcoming" exact>Upcoming</router-link></a>
                     </li>
                  </ul>
               </li>
         <!--       <li>
                  <a href="#">Workbook</a>
                  <ul class="uk-nav-sub">
                     <li>
                        <a href="#">Fun 1</a>
                     </li>
                     <li>
                        <a href="#">Fun 2</a>
                     </li>
                  </ul>
               </li> -->
               <li>
                  <a ><router-link  v-bind:to="'/interviews/5bbb44de450a9b398b1ca676'" >Interviews</router-link></a>
               </li>
               <li>
                  <a ><router-link to="/services" exact>Services</router-link></a>
               </li>
               <li>
                  <a><router-link to="/gallery" exact>Gallery</router-link></a>
               </li>
               <li>
                  <a ><router-link to="/about" exact>About Us</router-link></a>
               </li>
               <hr class="uk-nav-divider">
            </ul>
         </div>
      </div>
   </nav>

   <div id="myOverlay" class="overlay">
  <span class="closebtn" @click="closeSearch()" title="Close Overlay">×</span>
  <div class="overlay-content">
    <form action="/action_page.php">
      <input type="text" placeholder="Search.." name="search">
      <button type="submit"><i class="fa fa-search"></i></button>
    </form>
  </div>
</div>


  <div id="searchmodal" class="uk-modal" uk-modal>
         <div class="uk-modal-dialog uk-flex uk-flex-center uk-flex-middle" uk-overflow-auto>
            <button class="uk-modal-close-default" type="button" uk-close uk-tooltip="Close"></button>
              <div class="uk-modal-header">
               <form class="uk-search uk-search-large uk-search-default" autocomplete="off" >
                  <!-- <span uk-search-icon></span>  -->
                 <span uk-search-icon></span>
                  <input class="uk-search-input seres "  name="seres" type="search" v-model="search" placeholder="Search @daybreak"  onfocus="this.placeholder=''" onblur="this.placeholder='Search @daybreak'">
                  
                  <input type="hidden" name="serescheck1" id="serescheck1" >
                  
               </form>
               <!-- $('.seresult').html(""); -->
                <div class="uk-modal-body uk-padding-remove" uk-overflow-auto>
                  <ul class="uk-list  seresult" v-for="article in filteredArticles" :key="article._id" >
                       <li class='uk-active'>

                        <router-link v-bind:to="'/article/' +article.mainheading+'/'+article._id">
                          {{ article.mainheading }}
                        </router-link>
                           
                           <!-- <div v-for="article in filteredArticles" :key="article._id" > -->
                                    <!-- <router-link v-bind:to="'/blog/' + blog.id"><h2>{{ blog.title }}</h2></router-link> -->
                                    <a class='sidebar uk-link-reset ' >{{ article.article_name }}</a>
                            <!-- </div> -->
                        </li>
                     
                  </ul>
                  <br>
                  <!-- <router-link v-bind:to="'/article/'+'surprise' +'/'+ Math.ceil(Math.random()*200)"> 
                  <a class='uk-link-reset' uk-tooltip="title:Surprise, Surprise !; pos: bottom" v-if="search == ''" onClick="window.location.reload()">  <div class='uk-active uk-text-center surprise uk-modal-close	'>Surprise Me! 💡</div></a>
                  </router-link> -->
                  <router-link v-bind:to="'/article/'+'surprise' +'/5c48530645484716c2389b' +  Math.ceil(Math.random()*4) + Math.ceil(Math.random()*9)"> 
                  <a class='uk-link-reset' uk-tooltip="title:Surprise, Surprise !; pos: bottom" v-if="search == ''" @click="window.location.reload()">  <div class='uk-active uk-text-center surprise uk-modal-close	'>Surprise Me! 💡</div></a>
                  </router-link>
               </div>
            </div>
         </div>
      </div>

   </main>


</div>
</template>

<script>

import searcharticles from '../mixins/searcharticles';
export default {
  data () {
        return {
           search: '',
           articles: [],
          base_url:"http://103.214.233.141:3630/home",
          categories: [],
          
          newsletter:{
            emailid: ""
          }
        }
    },
     mixins: [searcharticles],
    created(){
      // this.getcategory();
      // this.getarticles();
    },
  methods: {
    openSearch() {
      document.getElementById("myOverlay").style.display = "block";
    },
    closeSearch() {
      document.getElementById("myOverlay").style.display = "none";
    },
    getarticles(){
            var self = this;
             axios.get(' http://machine.local:3000/api/v1/open/articles',{
                 headers: {'Authorization': 'Api-Key '+this.$code},
           // timeout:1000,
             })
            .then(function(response){
                self.articles = response.data;
            })
            .catch(function (error) {
                //console.log('An Error occured',  error);
            }); 
        },
    post: function(){
        var self = this;
        //console.log(self.newsletter);
        axios.post('http://localhost:3000/api/v1/newsletter',self.newsletter).then(function(data){
          //console.log(data);
        });
    },
            getcategory(){
             var self = this;
             axios.get(' http://machine.local:3000/api/v1/open/category/status/1',{
                 headers: {'Authorization': 'Api-Key '+this.$code},
           // timeout:1000,
             })
            .then(function(response){
                self.categories = response.data;
                //console.log(response.data);
            })
            .catch(function (error) {
                //console.log('An Error occured',  error);
            }); 
        },
     
  }
}
</script>


<style scoped>
a {
    text-decoration: none;
    }
.logoimg{
      
       padding-left: 53px;   
      
}
.inline{
    position: relative;
    max-width: 100%;
    vertical-align: middle;
}
.button:hover {opacity: 1}


@media (max-width: 991px) {
    #desktop {
        display: none!important;
    }
}

@media (min-width: 992px) {
    #mobile {
        display: none!important;
    }
}

.openBtn {
  background: #f1f1f1;
  border: none;
  padding: 10px 15px;
  font-size: 20px;
  cursor: pointer;
}

.openBtn:hover {
  background: #bbb;
}

.overlay {
  height: 100%;
  width: 100%;
  display: none;
  position: fixed;
  z-index: 1;
  top: 0;
  left: 0;
  background-color: rgb(0,0,0);
  background-color: rgba(0,0,0, 0.9);
}

.overlay-content {
  position: relative;
  top: 46%;
  width: 80%;
  text-align: center;
  margin-top: 30px;
  margin: auto;
}

.overlay .closebtn {
  position: absolute;
  top: 20px;
  right: 45px;
  font-size: 60px;
  cursor: pointer;
  color: white;
}

.overlay .closebtn:hover {
  color: #ccc;
}

.overlay input[type=text] {
  padding: 15px;
  font-size: 17px;
  border: none;
  float: left;
  width: 80%;
  background: white;
}

.overlay input[type=text]:hover {
  background: #f1f1f1;
}

.overlay button {
  float: left;
  width: 20%;
  padding: 15px;
  background: #ddd;
  font-size: 17px;
  border: none;
  cursor: pointer;
}

.overlay button:hover {
  background: #bbb;
}

.custom-margin-bottom-2{
  margin-bottom:2px;
}
 </style>

