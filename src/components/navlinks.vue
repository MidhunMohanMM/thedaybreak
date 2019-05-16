<template>
<span v-if="$route.name != 'admin' && $route.name != 'dashboard' && $route.name != 'editarticle' && $route.name != 'editevent'  && $route.name != 'addadminarticle' && $route.name != 'addevent' ">
<div uk-sticky="animation:uk-animation-fade;" style=" scroll-behavior: smooth;">
    <main class="uk-visible@m ">
  <nav  uk-navbar  >
      		<div class="uk-navbar-center" style="outline: dotted;outline-width: 1px;">
                  <div class="uk-navbar-center">
			<div class="uk-container" >
    <ul class="uk-navbar-nav" >
        <li>
            <router-link to="/home" exact style="background:transparent;">
            <img id="imglogo" style="display:none;width:26px;margin-right:23px;margin-bottom: 3px;"  class="uk-animation-slide-left" src="/src/assets/logoico.png" alt="POSHP">
             </router-link>
            
             </li>
      <li class="uk-active"><router-link to="/home" exact>HOME</router-link></li>
       
      
      <li class="uk-active">
          
         <a >NEWS</a>
          <div v-for="categorylist in categories" :key="categorylist.id" class="uk-navbar-dropdown " id="uk-navbar-dropdown"  uk-dropdown="pos: bottom-center">
           <ul class="uk-nav uk-navbar-dropdown-nav navbardes" style="margin-top:0px;">
               <li><a><router-link to="/editorspick" exact>Editor's Pick</router-link></a></li> 
                <li><a><router-link to="/schools/5bbb44de450a9b398b1ca671" exact>Schools</router-link></a></li> 
                 <li><a><router-link to="/sports/5bbb44de450a9b398b1ca673" exact>Sports</router-link></a></li> 
                  <li><a><router-link to="/science/5bbb44de450a9b398b1ca674" exact>Science</router-link></a></li> 
                <li><a><router-link to="/lifestyle/5bbb44de450a9b398b1ca675" exact>Lifestyle</router-link></a></li> 
                 <li><a><router-link to="/nature/5bbb44de450a9b398b1ca67d" exact>Nature</router-link></a></li> 
                  <li><a><router-link to="/education/5bbb44de450a9b398b1ca67c" exact>Education</router-link></a></li> 
                   <li><a><router-link to="/people/5bbb44de450a9b398b1ca672" exact>People</router-link></a></li> 
                        <li><a><router-link to="/juniors/5c48167d4b595e7a68c729a3" exact>Juniors</router-link></a></li> 
                    <!-- <li v-for="categorylist in categories" :key="categorylist.id" class="uk-text-capitalize">
                        <a >
                        <router-link v-bind:to="'/'+categorylist.name+'/'+categorylist._id" >{{ categorylist. name }}
                        </router-link></a></li>   
                     -->
            </ul>
          </div>  
          </li>

       <li class="uk-active">
          
         <a>OPINION</a>
          <div class="uk-navbar-dropdown " id="uk-navbar-dropdown"  uk-dropdown="pos: bottom-center">
           <ul class="uk-nav uk-navbar-dropdown-nav">
               
                    <li><a ><router-link  v-bind:to="'/editorial/5bbb44de450a9b398b1ca67a'" >Editorial</router-link></a></li>   
                    <li><a><router-link  v-bind:to="'/column/5bbb44de450a9b398b1ca67b'" >Column</router-link></a></li>
            </ul>
          </div>  
          
      </li>
    <li class="uk-active">
          
         <a>OPEN PAGE</a>
          <div class="uk-navbar-dropdown " id="uk-navbar-dropdown"  uk-dropdown="pos: bottom-center">
           <ul class="uk-nav uk-navbar-dropdown-nav" >
               
                    <li><a><router-link  v-bind:to="'/students/5bbb44de450a9b398b1ca679'" >Students</router-link></a></li>   
                    <li><a><router-link  v-bind:to="'/teachers/5bbb44de450a9b398b1ca678'" >Teachers</router-link></a></li>
                    <li><a><router-link  v-bind:to="'/parents/5bbb44de450a9b398b1ca677'" >Parents</router-link></a></li>
            </ul>
          </div>  
          
      </li>
       <li class="uk-active">
          
         <a >EVENTS</a>
          <div class="uk-navbar-dropdown " id="uk-navbar-dropdown" uk-dropdown="pos: bottom-center">
           <ul class="uk-nav uk-navbar-dropdown-nav" >
               
                    <li><a><router-link to="/ourevents" exact>Our Events</router-link></a></li>   
                    <li><a><router-link to="/upcoming" exact>Upcoming</router-link></a></li>
            </ul>
          </div>  
          
      </li>
      <li><router-link  v-bind:to="'/interviews/5bbb44de450a9b398b1ca676'" >INTERVIEWS</router-link></li>
      <!-- <li><router-link to="/add" exact>OPEN PAGE</router-link></li> -->

      <!-- <li><router-link to="/e" exact>EVENTS</router-link></li> -->
     
      
      <li><router-link to="/services" exact>SERVICES</router-link></li>
      <li class="uk-visible@l "><router-link to="/gallery" exact>GALLERY</router-link></li>
      <li class="uk-visible@l "><router-link to="/about" exact>ABOUT</router-link></li>
      <li class="uk-visible@l "><a class="navlinks uk-navbar-toggle" href="#searchmodal" uk-toggle uk-search-icon></a></li>
    </ul>
			</div>
            </div>
      		</div>
  </nav>

  
    <div id="searchmodal" class="uk-modal" uk-modal>
         <div class="uk-modal-dialog uk-flex uk-flex-center uk-flex-middle" >
            <button class="uk-modal-close-default" type="button" uk-close uk-tooltip="Close"></button>
              <div class="uk-modal-header">
               <form class="uk-search uk-search-large uk-search-default" autocomplete="off" >
                  <!-- <span uk-search-icon></span>  -->
                 <span uk-search-icon></span>
                  <input class="uk-search-input seres "   type="search" v-model="search" placeholder="Search @daybreak" onfocus="this.placeholder=''" onblur="this.placeholder='Search @daybreak'">
                  
                  <input type="hidden" name="serescheck1" id="serescheck1" >
                  
               </form>
               <!-- $('.seresult').html(""); -->
                <div class="uk-modal-body uk-padding-remove" >
                   <ul class="uk-list  seresult" v-for="article in articles" :key="article._id" >
                       <li class='uk-active' v-if="search!= ''">

                        <router-link style="border-bottom: 1px solid black" v-bind:to="'/article/' +article.article_name+'/'+article._id">
                          {{ article.mainheading }}
                        </router-link>
                        </li>
                        <!-- <br>
                         <li  v-if="search!= ''" style="border-top: 1px solid black" class="uk-nav-divider"></li> -->
                     
                  </ul>
                    <router-link v-bind:to="'/article/'+'surprise' +'/5c48530645484716c2389b' +  Math.ceil(Math.random()*4) + Math.ceil(Math.random()*9)"> 
                  <a class='uk-link-reset' uk-tooltip="title:Surprise, Surprise !; pos: bottom" v-if="search == ''" >  <div class='uk-active uk-text-center surprise uk-modal-close	'>Surprise Me! 💡</div></a>
                  </router-link>
               </div>
            </div>
         </div>
      </div>
    </main>
<main id="mobilemain" class="uk-hidden@m">
 <div uk-sticky="sel-target: .uk-navbar-container; cls-active: uk-navbar-sticky">
      <nav class="menubar uk-navbar-container" uk-navbar>
         <div class="uk-navbar-center">
            <div class="uk-container">
               <ul class="uk-navbar-nav">
               	<li ><a class="mobnav" > <router-link to="/home" exact><img style="margin-bottom:2px;" src="/src/assets/home-interface.svg" width="15" height="15" uk-svg></router-link></a></li>
                  <li style="display:flex;">
                     <a class="mobnav">News</a>
                     <div class="uk-navbar-dropdown" style="width: 175px; ">
                         <ul class="uk-nav uk-navbar-dropdown-nav navbardes">
                                <li><a><router-link to="/editorspick" exact>Editor's Pick</router-link></a></li> 
                    	<li v-for="categorylist in categories" :key="categorylist._id"><a  class='uk-text-capitalize uk-text-muted'>
                         <router-link v-bind:to="'/'+categorylist.name+'/'+categorylist._id" >{{ categorylist.name }}</router-link></a></li>
                  
                   
                  </ul>
                     </div>
                  </li>
                  <li style="display:flex;">
                     <a class="mobnav">OpenPage</a>
                     <div class="uk-navbar-dropdown uk-padding-small" style="width: 175px;">
                        <ul class="uk-nav uk-navbar-dropdown-nav">
                           <li style="display:flex;">
                              <a > <router-link  v-bind:to="'/students/5bbb44de450a9b398b1ca679'" >Student</router-link></a>
                           </li>
                           <li style="display:flex;">
                              <a> <router-link  v-bind:to="'/teachers/5bbb44de450a9b398b1ca678'" >Teacher</router-link></a>
                           </li>
                           <li style="display:flex;">
                              <a > <router-link  v-bind:to="'/parents/5bbb44de450a9b398b1ca677'" >Parents</router-link></a>
                           </li>
                        </ul>
                     </div>
                  </li>
                  <li style="display:flex;">
                     <a class="mobnav">Opinion</a>
                     <div class="uk-navbar-dropdown uk-padding-small" style="width: 175px;">
                        <ul class="uk-nav uk-navbar-dropdown-nav">
                           <li style="display:flex;">
                              <a ><router-link  v-bind:to="'/editorial/5bbb44de450a9b398b1ca67a'" >Editorial</router-link></a>
                           </li>
                           <li style="display:flex;" class="uk-text-center">
                              <a > <router-link  v-bind:to="'/column/5bbb44de450a9b398b1ca67b'" >Column</router-link></a>
                           </li>
                        </ul>
                     </div>
                  </li>
                  <li>
                     <a class="mobnav">Events</a>
                     <div class="uk-navbar-dropdown uk-padding-small" style="width: 175px;">
                        <ul class="uk-nav uk-navbar-dropdown-nav">
                           <li style="display:flex;">
                              <a ><router-link to="/ourevents" exact>Our Events</router-link></a>
                           </li>
                           <li style="display:flex;">
                              <a><router-link to="/upcoming" exact>Upcoming</router-link></a>
                           </li>
                        </ul>
                     </div>
                  </li>
               </ul>
             
            </div>
         </div>
      </nav>
   </div>
   </main>



</div>
</span>
</template>

<script>
import axios from 'axios'
import JQuery from 'jquery'
let $ = JQuery
import searcharticles from '../mixins/searcharticles';
export default {
    data() {
        return {
        search: '',
        //access : true,
         base_url:"http://103.214.233.141:3630/home",
        articles: [],
        categories: [],
        }
    },

    mixins: [searcharticles],
    created() {

         this.getcategory();
         this.scroll();
    },
    mounted(){
                this.getarticles();
    },
    //     created(){
    //      var timestamp = localStorage.getItem('timestamp'),
    //     time_now  = (new Date()).getTime();
                            
    //     // if ((time_now - timestamp) > 1000 * 60 * 60 * 24) {

    //         localStorage.clear();

    //        // localStorage.setItem('timestamp', time_now);
    //     // 
        
    //     var token = localStorage.getItem('key');
    //     if(!token) {
            
    //         this.access = false;
    //         //this.$router.replace({ name: "admin" });
    //         //alert("Please login again to continue :)");
    //     }
        
    // },
   
    methods: {
        getarticles(){
            var self = this;
             axios.get('http://103.214.233.141:3636/v1/secure/articles',{
                //  headers: {'Authorization': 'Api-Key '+this.$code},
           // timeout:1000,
             })
            .then(function(response){
                self.articles = response.data;
            })
            .catch(function (error) {
                //console.log('An Error occured',  error);
            }); 
        },
        getcategory(){
             var self = this;
             axios.get('http://103.214.233.141:3636/v1/secure/categories?categories[type]=news',{
                //  headers: {'Authorization': 'Api-Key '+this.$code},
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
        scroll() {
            //var fixmeTop = $('.leftcontainer').offset().top;       // get initial position of the element

            $(window).scroll(function() {                  // assign scroll event listener

                var currentScroll = $(window).scrollTop();
                ////console.log(currentScroll); // get current position
               // currentScroll = currentScroll+1000;
                if (currentScroll >= 160) {           // apply position: fixed if you
                    $('#imglogo').css({                      // scroll to that element or below it
                        display: 'block',
                       
                     
                    });
                } else {                                   // apply position: static
                    $('#imglogo').css({                      // if you scroll above it
                        display: 'none',
                    });
                }

            });
        }
    }
}
</script>

<style scoped>
ul{
    list-style-type: none;
    text-align: center;
    margin: 0;
}
li{
    display: inline-block;
    margin: 0 14px;
}
nav ul{
     -webkit-transition: all .25s ease;
       -moz-transition: all .25s ease;
        -ms-transition: all .25s ease;
         -o-transition: all .25s ease;
            transition: all .25s ease;
}
nav li ul{
     -webkit-transition: all .25s ease;
       -moz-transition: all .25s ease;
        -ms-transition: all .25s ease;
         -o-transition: all .25s ease;
            transition: all .25s ease;
}
div{
    -webkit-transition: all 0.3s;
-moz-transition: all 0.3s;
-ms-transition: all 0.3s;
-o-transition: all 0.3s;
transition: all 0.3s;
}
a{
    color: black!important;
    font-weight: 400 !important;
    text-decoration: none;
    /* border-radius: 10px; */
    padding: 0 15px;
    font-size: .875rem;
    font-family: -apple-system,BlinkMacSystemFont,"Segoe UI",Roboto,"Helvetica Neue",Arial,sans-serif;
    height:45px!important;
}
nav{
    background:transparent;
    -webkit-font-smoothing:antialiased;
    
} 
.router-link-active{
    background: #eee;
    color: #444;
        height: 23px;
    /* margin-top: 10px; */
}

.news_dropdown{
    margin-top: 171px!important;
    /* margin-left: -100px!important; */
    left: 223px !important;
    min-width: 155px!important;
    width: min-content!important;
}


.opinion_dropdown{
    margin-top: 171px!important;
    /* margin-left: -100px!important; */
    left: 333px !important;
    min-width: 150px!important;
    width: min-content!important;
}


.li.img.uk-sticky {
    display: block!important;
}

.surprise{
    color: #f69524;
    font-size: 33px;
    padding-top: 9px;
}


@media (max-width: 500px) {
    #mobilemain{
        display:none;
    }
}
</style>
