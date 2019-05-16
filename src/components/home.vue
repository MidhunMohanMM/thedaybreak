<template>
<div class="uk-padding-medium uk-container uk-padding-remove-top uk-padding-remove-right uk-width-1-1 uk-visible@m">
    <div class="uk-grid-match uk-width-1-1" uk-grid    style="margin-left: 0px;margin-top:15px"> 
        <div class="leftcontainer uk-width-1-3@m uk-padding-small uk-visible@m " id='desktop'> 
        <div>
            <div class="uk-tile uk-tile-muted uk-padding-small ">
                <a class='uk-link-reset' href=''>
                    <router-link  v-bind:to="'/schools/5bbb44de450a9b398b1ca671'" >
                    <h3 class="uk-heading-line uk-padding-remove-bottom uk-margin-remove-bottom" >
                        <span uk-scrollspy="cls:uk-animation-fade; repeat: true" class="mainside  uk-animation-fade" style="color:#696a6c;">In Schools 🏢</span>
                        
                    </h3>
                    </router-link>
                </a>
                <div class='uk-margin-medium' uk-grid>
                    <div  v-for="article in articles" :key="article.id" class='uk-margin-small uk-animation-fade' uk-grid >                        
                        <div class='uk-width-1-4 pl-l'>
                            <router-link v-bind:to="'/article/' +article.mainheading+'/'+article._id"><img :src="base_url+article.folder+'/'+article.image" class = "pic" alt="article"/></router-link>
                        </div>
                        <div class='uk-width-3-4 uk-padding-small uk-padding-remove-vertical ps-l uk-padding-remove-right'>
                            <span class='sidebar'>
                                <router-link v-bind:to="'/article/' +article.article_name+'/'+article._id">
                                <p class=' uk-text-small sidenews-d uk-margin-remove'>{{ article.mainheading }}</p>
                                <p id="text" class='uk-text-small sidenews-d uk-margin-remove'>{{ article.sdate }}</p>
                                <p id="text" class='uk-text-small sidenews-d uk-margin-remove'>{{ article.place }}</p>
                                 </router-link>
                            </span>
                        </div>
                       
                    </div>
                </div>
             <a class='uk-link-reset' href=''>
                    <router-link  v-bind:to="'/inteviews/5bbb44de450a9b398b1ca676'" >
                    <h3 class="uk-heading-line uk-padding-remove-bottom uk-margin-remove-bottom" >
                        <span class="mainside uk-animation-fade" style="color:#696a6c;">This Week's Interview 👦</span>
                    </h3>
                    </router-link>
                </a>
                <div class='uk-margin-medium' uk-grid>
                    <div v-for="interview in interviews" :key="interview.id" class='uk-margin-small uk-animation-fade' uk-grid >
                        <div class='uk-width-1-4 pl-l'>
                            <router-link v-bind:to="'/article/' +interview.mainheading+'/'+interview._id"><img :src="base_url+interview.folder+'/'+interview.image" class = "pic" alt="article"/></router-link>  
                        </div>
                        <div class='uk-width-3-4 uk-padding-small uk-padding-remove-vertical ps-l uk-padding-remove-right'>
                            <span class='sidebar'>
                                <router-link v-bind:to="'/article/' +interview.article_name+'/'+interview._id"><p class=' uk-text-small sidenews-d uk-margin-remove'>{{ interview.mainheading  }}</p>
                                <p id="text" class='uk-text-small sidenews-d uk-margin-remove'>{{ interview.sdate }}</p>
                                <p id="text" class='uk-text-small sidenews-d uk-margin-remove'>{{ interview.eventplace }}</p>
                                </router-link>
                            </span>
                        </div>
                    </div>
                </div>
                <a class='uk-link-reset' href=''>
                    <h3 class="uk-heading-line uk-padding-remove-bottom uk-margin-remove-bottom">
                        <span class="mainside uk-animation-fade" style="color:#696a6c;">Opinion 📝</span>
                    </h3>
                </a>
                  <div class='uk-margin-medium' uk-grid>
                    <div v-for="editorial in editorials" :key="editorial.id" class='uk-margin-small' uk-grid >
                        <div class='uk-width-1-4 pl-l'>
                            <router-link v-bind:to="'/article/' +editorial.mainheading+'/'+editorial._id"><img :src="base_url+editorial.folder+'/'+editorial.image" class = "pic" alt="article"/></router-link>
                        </div>
                        <div class='uk-width-3-4 uk-padding-small uk-padding-remove-vertical ps-l uk-padding-remove-right'>
                            <span class='sidebar'>
                                <router-link v-bind:to="'/article/' +editorial.article_name+'/'+editorial._id"><p class=' uk-text-small sidenews-d uk-margin-remove'>{{ editorial.mainheading  }}</p>
                                <p id="text" class='uk-text-small sidenews-d uk-margin-remove'>{{ editorial.sdate }}</p>
                                <p id="text" class='uk-text-small sidenews-d uk-margin-remove'>{{ editorial.eventplace }}</p>
                                </router-link>
                            </span>
                        </div>
                    </div>
                
                    <div v-for="column in columns" :key="column.id" class='uk-margin-small' uk-grid >
                        <div class='uk-width-1-4 pl-l'>
                            <router-link v-bind:to="'/article/' +column.mainheading+'/'+column._id"><img :src="base_url+column.folder+'/'+column.image" class = "pic" alt="article"/> </router-link>
                        </div>
                        <div class='uk-width-3-4 uk-padding-small uk-padding-remove-vertical ps-l uk-padding-remove-right'>
                            <span class='sidebar'>
                                <router-link v-bind:to="'/article/' +column.article_name+'/'+column._id"><p class=' uk-text-small sidenews-d uk-margin-remove'>{{ column.mainheading  }}</p>
                                <!-- <p id="text" class='uk-text-small sidenews-d uk-margin-remove'>{{ column.sdate }}</p> -->
                                <p id="text" class='uk-text-small sidenews-d uk-margin-remove'>{{ column.eventplace }}</p>
                                </router-link>
                            </span>
                        </div>
                    </div>
                </div>
                <a class='uk-link-reset' href=''>
                     <router-link  to="/upcoming" >
                    <h3 class="uk-heading-line uk-padding-remove-bottom uk-margin-remove-bottom">
                        <span class="mainside uk-animation-fade" style="color:#696a6c;">Upcoming Events ⛳</span>
                    </h3>
                    </router-link>
                </a>
                 <div class='uk-margin-medium' uk-grid>
                    <div v-for="event in events" :key="event.id" class='uk-margin-small' uk-grid >
                        <div class='uk-width-1-4 pl-l'>
                            <router-link v-bind:to="'/event/' +event.event_name+'/'+event._id"><img :src="'http://103.214.233.141:3636/images/uploads/events/'+event.folder+'/'+event.image" class = "pic" alt="article"/></router-link>
                        </div>
                        <div class='uk-width-3-4 uk-padding-small uk-padding-remove-vertical ps-l uk-padding-remove-right'>
                            <span class='sidebar'>
                                <router-link v-bind:to="'/event/' +event.event_name+'/'+event._id">
                                    <p class=' uk-text-small sidenews-d uk-margin-remove'>{{ event.name }}</p>
                                    <p id="text" class='uk-text-small sidenews-d uk-margin-remove'>{{ event.sdate }}</p>
                                    <p id="text" class='uk-text-small sidenews-d uk-margin-remove'>{{ event.place }}</p>
                                </router-link>
                            </span>
                        </div>
                    </div>
                </div>
                <div class='uk-margin-small' uk-grid></div>
                <div class='uk-margin-small' uk-grid></div>
            </div>
        </div>
        
    </div>
 <div class="rightcontainer  uk-width-3-5@m " style="min-height: 100vh;">
        
            <span>
                <div class="section ">
                    <div class="uk-container ">
                        <div uk-grid>
                            <div class="uk-width-1-1@m">
                                <h3 id="mobileheading" uk-scrollspy="cls:uk-animation-fade; repeat: true" class="uk-text-danger">Trending ⚡</h3> 
                                <div class="uk-grid-small uk-grid-match uk-padding-remove-top" id="cardd" uk-grid>

                                        <div id="firstcolumn" uk-scrollspy="cls:uk-animation-fade; repeat: true" v-for="article in newarticles.slice(0,1)" :key="article.id" class='uk-width-1-1@m padding-bottom uk-inline-clip' style='cursor: pointer;min-height: 350px;'>
                                        
                                   <a class='uk-link-reset mainhead' href=''>
                                                <router-link v-bind:to="'/article/' +article.article_name+'/'+article._id">
                                                <div class="uk-text-center">
                                                        <img  class='cardimgn uk-transition-scale-up uk-transition-opaque' :src="base_url+article.folder+'/'+article.image" alt="article" style="min-width:100%;min-height: 350px;">
                                                        <div class='cardheading uk-padding-small uk-position-bottom uk-overlay uk-overlay-primary'>
                                                    <div>
                                                        <h3 class='overlayhead usecthead uk-margin-remove uk-padding-remove headtag uk-text-center'>{{ article.mainheading }}</h3>
                                                    </div>
                                                     
                                                    </div>
                                                </div>
                                                
                                                </router-link>
                                            </a>

                                        
                                        <div class='uk-position-bottom-left uk-padding-small'></div>
                                    </div>


                                    <div uk-scrollspy="cls:uk-animation-fade; repeat: true" v-for="article in newarticles.slice(1,5)" :key="article.id" class='uk-width-1-2@m padding-bottom uk-inline-clip' style='cursor: pointer;'>
                                        
                                   <div class='nohero uk-inline-clip uk-transition-toggle'>
                                            <!-- <div class='uk-label uk-label-primary label-home uk-margin-small uk-align-left uk-margin-remove-bottom' style='color:white;'>{{ article.color }}</div> -->
                                            <a class='uk-link-reset mainhead' href=''>
                                                <router-link v-bind:to="'/article/' +article.article_name+'/'+article._id">
                                                <div class="uk-text-center">
                                                    <div class="uk-inline-clip uk-transition-toggle" tabindex="0">
                                                        <img  class='cardimgn uk-transition-scale-up uk-transition-opaque' :src="base_url+article.folder+'/'+article.image" alt="article">
                                                        <div class='cardheading uk-padding-small uk-position-bottom uk-overlay uk-overlay-primary'>
                                                    <div>
                                                        <h3 class='overlayhead usecthead uk-margin-remove uk-padding-remove headtag uk-text-center'>{{ article.mainheading }}</h3>
                                                    </div>
                                                     
                                                </div>
                                                    </div>
                                                </div>
                                                
                                                </router-link>
                                            </a>
                                        </div>
                                        
                                        <div class='uk-position-bottom-left uk-padding-small'></div>
                                    </div>
                                </div>
                                <!-- <h3 class="uk-text-bold uk-text-muted" style="padding-left: 666px;">MORE ▶</h3> -->
                                <a class='uk-link-reset' href=''>
                                    <router-link  v-bind:to="'/general/5bbb44de450a9b398b1ca672'" >
                                    <h3 class="uk-text-bold uk-text-muted uk-align-right" style="padding-top: 10px;" >
                                        <span uk-scrollspy="cls:uk-animation-fade; repeat: true" class="mainside">MORE ▶</span> 
                                    </h3>
                                    </router-link>
                                </a>
                                <br>
                                <hr>
                                <h3 uk-scrollspy="cls:uk-animation-fade; repeat: true" class="uk-text-danger">Editor's Pick 💡</h3> 
                                <div class="uk-grid-small uk-grid-match uk-padding-remove-top" id="cardd" uk-grid>
                                    <div uk-scrollspy="cls:uk-animation-fade; repeat: true" v-for="article in editorspick" :key="article.id" class='uk-width-1-3@m uk-text-center padding-bottom' style='cursor: pointer;' >
                                         <div class="uk-grid-match" uk-grid>
                                             <router-link v-bind:to="'/article/' +article.article_name+'/'+article._id">
                                                <div class="uk-card  uk-card-body uk-card-default uk-card-hover">
                                                <img class='uk-thumbnail uk-border-circle crdimg' :src="base_url+article.folder+'/'+article.image" alt="article">
                                               <h3 class="uk-card-title uk-text-center uk-text-small uk-text-bold editorstyle">{{ article.mainheading }}</h3>
                                                </div>
                                            </router-link>
                                    </div>
                                    </div>
                                </div>
                                <a class='uk-link-reset' href=''>
                                <router-link to="/editorspick" exact>
                                    <h3 class="uk-text-bold uk-text-muted uk-align-right" style="padding-top: 10px;" >
                                        <span uk-scrollspy="cls:uk-animation-fade; repeat: true" class="mainside">MORE ▶</span> 
                                    </h3>
                                </router-link>
                                </a>
                                <br>
                                <hr>
                                <h3 uk-scrollspy="cls:uk-animation-fade; repeat: true" class="uk-text-warning">Sports 🏆</h3> 
                                <div class="uk-grid-small uk-grid-match uk-padding-remove-top" id="cardd" uk-grid>
                                    <div uk-scrollspy="cls:uk-animation-fade; repeat: true" v-for="article in sports" :key="article.id" class='uk-width-1-2@m padding-bottom' style='cursor: pointer;'>
                                              <div class='nohero uk-inline-clip uk-transition-toggle'>
                                            <!-- <div class='uk-label uk-label-primary label-home uk-margin-small uk-align-left uk-margin-remove-bottom' style='color:white;'>{{ article.color }}</div> -->
                                            <a class='uk-link-reset mainhead' href=''>
                                                <router-link v-bind:to="'/article/' +article.article_name+'/'+article._id">
                                                <div class="uk-text-center">
                                                    <div class="uk-inline-clip uk-transition-toggle" tabindex="0">
                                                        <img class='cardimgn uk-transition-scale-up uk-transition-opaque' :src="base_url+article.folder+'/'+article.image" alt="article">
                                                        <div class='cardheading uk-padding-small uk-position-bottom uk-overlay uk-overlay-primary'>
                                                    <div>
                                                        <h3 class='overlayhead usecthead uk-margin-remove uk-padding-remove headtag uk-text-center'>{{ article.mainheading }}</h3>
                                                    </div>
                                                     
                                                </div>
                                                    </div>
                                                </div>
                                                
                                                </router-link>
                                            </a>
                                        </div>
                                        <div class='uk-position-bottom-left uk-padding-small'></div>
                                    </div>
                                    <div class='uk-grid-small uk-child-width-expand@s uk-text-center' uk-grid></div>    
                                </div>
                                <a class='uk-link-reset' href=''>
                                     <router-link  v-bind:to="'/sports/5bbb44de450a9b398b1ca673'" >
                                    <h3 class="uk-text-bold uk-text-muted uk-align-right" style="padding-top: 10px;" >
                                        <span uk-scrollspy="cls:uk-animation-fade; repeat: true" class="mainside">MORE ▶</span> 
                                    </h3>
                                    </router-link>
                                </a>
                                <br>
                                <hr>
                                <h3 uk-scrollspy="cls:uk-animation-fade; repeat: true" class="uk-text-success">Science 🌏</h3> 
                                <div class="uk-grid-small uk-grid-match uk-padding-remove-top" id="cardd" uk-grid>
                                    <div uk-scrollspy="cls:uk-animation-fade; repeat: true" v-for="article in science" :key="article.id" class='uk-width-1-2@m padding-bottom' style='cursor: pointer;'>
                                              <div class='nohero uk-inline-clip uk-transition-toggle'>
                                            <!-- <div class='uk-label uk-label-primary label-home uk-margin-small uk-align-left uk-margin-remove-bottom' style='color:white;'>{{ article.color }}</div> -->
                                            <a class='uk-link-reset mainhead' href=''>
                                                <router-link v-bind:to="'/article/' +article.article_name+'/'+article._id">
                                                <div class="uk-text-center">
                                                    <div class="uk-inline-clip uk-transition-toggle" tabindex="0">
                                                        <img class='cardimgn uk-transition-scale-up uk-transition-opaque' :src="base_url+article.folder+'/'+article.image" alt="article">
                                                        <div class='cardheading uk-padding-small uk-position-bottom uk-overlay uk-overlay-primary'>
                                                    <div>
                                                        <h3 class='overlayhead usecthead uk-margin-remove uk-padding-remove headtag uk-text-center'>{{ article.mainheading }}</h3>
                                                    </div>
                                                     
                                                </div>
                                                    </div>
                                                </div>
                                                
                                                </router-link>
                                            </a>
                                        </div>
                                        <div class='uk-position-bottom-left uk-padding-small'></div>
                                    </div>
                                    <div class='uk-grid-small uk-child-width-expand@s uk-text-center' uk-grid></div>    
                                </div>
                                <a class='uk-link-reset' href=''>
                                    <router-link  v-bind:to="'/science/5bbb44de450a9b398b1ca674'" >
                                    <h3 class="uk-text-bold uk-text-muted uk-align-right" style="padding-top: 10px;" >
                                        <span uk-scrollspy="cls:uk-animation-fade; repeat: true" class="mainside">MORE ▶</span> 
                                    </h3>
                                    </router-link>
                                </a>
                                <br>
                                <hr>
                                <h3 uk-scrollspy="cls:uk-animation-fade; repeat: true" class="uk-text-primary">Lifestyle 🎭</h3>
                                <div class="uk-grid-small uk-grid-match uk-padding-remove-top" id="cardd" uk-grid>
                                    <div uk-scrollspy="cls:uk-animation-fade; repeat: true" v-for="article in lifestyle" :key="article.id" class='uk-width-1-2@m padding-bottom' style='cursor: pointer;'>
                                              <div class='nohero uk-inline-clip uk-transition-toggle'>
                                            <!-- <div class='uk-label uk-label-primary label-home uk-margin-small uk-align-left uk-margin-remove-bottom' style='color:white;'>{{ article.color }}</div> -->
                                            <a class='uk-link-reset mainhead' href=''>
                                                <router-link v-bind:to="'/article/' +article.article_name+'/'+article._id">
                                                <div class="uk-text-center">
                                                    <div class="uk-inline-clip uk-transition-toggle" tabindex="0">
                                                        <img class='cardimgn uk-transition-scale-up uk-transition-opaque' :src="base_url+article.folder+'/'+article.image" alt="article">
                                                        <div class='cardheading uk-padding-small uk-position-bottom uk-overlay uk-overlay-primary'>
                                                    <div>
                                                        <h3 class='overlayhead usecthead uk-margin-remove uk-padding-remove headtag uk-text-center'>{{ article.mainheading }}</h3>
                                                    </div>
                                                     
                                                </div>
                                                    </div>
                                                </div>
                                                
                                                </router-link>
                                            </a>
                                        </div>
                                        
                                        <div class='uk-position-bottom-left uk-padding-small'></div>
                                    </div>
                                    <div class='uk-grid-small uk-child-width-expand@s uk-text-center' uk-grid></div>    
                                </div>
                                <a class='uk-link-reset' href=''>
                                    <router-link  v-bind:to="'/lifestyle/5bbb44de450a9b398b1ca675'" >
                                    <h3 class="uk-text-bold uk-text-muted uk-align-right" style="padding-top: 10px;" >
                                        <span uk-scrollspy="cls:uk-animation-fade; repeat: true" class="mainside">MORE ▶</span> 
                                    </h3>
                                    </router-link>
                                </a>
                                <!-- <br>
                                <br>
                                <VueElevator class="uk-align-right" style="float:right;" :word="word" :duration="duration" :mainAudio="mainAudio" :endAudio="endAudio"></VueElevator> -->
                            </div>
                        </div>
                    </div>
                </div>
            </span>
            </div>
        
        <div id="mobilemain" class="uk-hidden@m">
   
  
   <div class="section">
      <div id="mobilehome" class="uk-grid-collapse uk-grid uk-grid-stack" uk-grid>
      	
<div class='uk-width-1-1'>
					<a class='' >
                         
            <div class='uk-card uk-card-default'>
               <div class='uk-card-body uk-padding-remove uk-width-1-2 uk-align-center'>
                  <div v-for="article in articles" :key="article.id"  class='uk-inline-clip '>
                      <router-link v-bind:to="'/article/' +article.article_name+'/'+article._id">
                     
                            <img class=' uk-transition-scale-up uk-transition-opaque' :src="base_url+article.folder+'/'+article.image" alt="article">
              
                     <div class='uk-overlay uk-overlay-primary uk-position-bottom uk-padding-small'>
                     
                        <h4 class='uk-margin-remove headtag'>{{ article.mainheading }}</h4>
                       
                     </div>
                     </router-link>
                  </div>
               </div>
            </div>
            
            </a>
            </div>
            </div>
            </div>
        </div>




        
    </div>
    </div>
</template>
<script>
import axios from 'axios'
import JQuery from 'jquery'
let $ = JQuery

export default {
    data() {
        return {
            articles: [],
            events: [],
            interviews: [],
            editorials: [],
            columns: [],  
            base_url: 'http://103.214.233.141:3636/images/uploads/articles/',
           // code: "code"

                //  articles: [],
            newarticles: [],
            editorspick: [],
            sports: [],
            science: [],
            lifestyle: [],
            // base_url: ' http://machine.local:3000',
            word: "",
            duration: 4000,
            mainAudio: "",
            endAudio: "",
            token: "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJzdGF0dXMiOmZhbHNlLCJfaWQiOiI1YjVhY2Y5NGZkMjIyNjM1NmQ1N2VjYWMiLCJ1c2VybmFtZSI6InRlc3QiLCJwYXNzd29yZCI6InRlc3QiLCJuYW1lIjoidGVzdCAxIiwiY3JlYXRlZCI6IjIwMTgtMDctMjdUMDc6NTM6NTYuODIzWiIsInVwZGF0ZWQiOiIyMDE4LTA3LTI3VDA3OjUzOjU2LjgyM1oiLCJfX3YiOjAsImlhdCI6MTUzMzYzMTk5MX0.sbu1qh5gv_OYaFXxHB7mRlRLtI1HRqY1PFiBNYXqOjk"
            //code: "code"
        }
    },
    mounted() {
         this.getschools();
         this.getevents();
         this.getinterviews();
         this.geteditorial();
         this.getopinion();
         this.scroll();


         this.getarticles();
         this.geteditorspick();
         this.getsports();
         this.getscience();
         this.getlifestyle();
         this.parseJwt(this.token);
    },
    methods: {
        getschools() {
            var self = this;        
           // //console.log(this.$code);               
           axios.get('http://103.214.233.141:3636/v1/secure/articles?categories[_id]=5bbb44de450a9b398b1ca671',{
                // headers: {'Authorization': 'Api-Key '+this.$code},
           // timeout:1000,
             })
            .then(function(response){
                //console.log(response.data);
                var blogsArray = [];
                for (let key in response.data){
                     ////console.log(response.data);
                    ////console.log(key);
                 
                    response.data[key].article_name = response.data[key].mainheading.replace(/ /g, '_');
                       blogsArray.push(response.data[key]);
                }
                self.articles = blogsArray.slice(0,6);
                // //console.log(response);
           
            })
            .catch(function (error) {
                //console.log('An Error occured',  error);
            });
        },
        getevents() {
            var self = this;
            axios.get('http://103.214.233.141:3636/v1/secure/events?events[type]=upcoming',{
                //  headers: {'Authorization': 'Api-Key '+this.$code},
           // timeout:1000,
             })
            .then(function(response){
                var blogsArray = [];
                //console.log(response.data);
                // for (let key in response.data){
                //     response.data[key].id = response.data[key]._id;
                //     blogsArray.push(response.data[key]);
                // }
                // self.events = blogsArray;
           
                for (let key in response.data){

                    // var eventdate = new Date(response.data[key].eventdatetime);
		            // var options = { year: 'numeric', month: 'short', day: 'numeric', weekday: 'long' };
                    // response.data[key].sdate = new Intl.DateTimeFormat('en-US', options).format(eventdate);
                    
                        
                    //response.data[key].eventname = escapeHtml(response.data[key].eventname);
                    response.data[key].event_name = response.data[key].name.replace(/ /g, '_');
                     blogsArray.push(response.data[key]);
				    // event_name = event_name+"-"+response.data[key].eid;
				    // event_name = slugify(event_name);
                }   
                self.events = blogsArray.slice(0,4);
            })
            .catch(function (error) {
                //console.log('An Error occured',  error);
            }); 
        },
        getinterviews() {   
            var self = this;
            axios.get('http://103.214.233.141:3636/v1/secure/articles?categories[_id]=5bbb44de450a9b398b1ca676',{
                //  headers: {'Authorization': 'Api-Key '+this.$code},
           // timeout:1000,
             })
            .then(function(response){
                    var blogsArray1 = [];
                for (let key in response.data){
                    // var articledate = new Date(response.data[key].date);
		            // var options = { year: 'numeric', month: 'short', day: 'numeric', weekday: 'long' };
                    // response.data[key].sdate = new Intl.DateTimeFormat('en-US', options).format(articledate);
                     response.data[key].article_name = response.data[key].mainheading.replace(/ /g, '_');
                          blogsArray1.push(response.data[key]);
                }   
                //  self.interviews = response.data;
                self.interviews = blogsArray1.slice(0,1);
            })
            .catch(function (error) {
                //console.log('An Error occured',  error);
            });
        },
        geteditorial() {
            var self = this;
            axios.get('http://103.214.233.141:3636/v1/secure/articles?categories[_id]=5bbb44de450a9b398b1ca67a',{
                //  headers: {'Authorization': 'Api-Key '+this.$code},
           // timeout:1000,
             })
            .then(function(response){
                
                for (let key in response.data){
                    // var articledate = new Date(response.data[key].date);
		            // var options = { year: 'numeric', month: 'short', day: 'numeric', weekday: 'long' };
                    // response.data[key].sdate = new Intl.DateTimeFormat('en-US', options).format(articledate);
                     response.data[key].article_name = response.data[key].mainheading.replace(/ /g, '_');
                }  
                // self.editorials = response.data;
                self.editorials = response.data.slice(0,2); 
            })
            .catch(function (error) {
                //console.log('An Error occured',  error);
            });
        },
        getopinion() {
            var self = this;
            axios.get('http://103.214.233.141:3636/v1/secure/articles?categories[_id]=5bbb44de450a9b398b1ca67b',{
                //  headers: {'Authorization': 'Api-Key '+this.$code},
           // timeout:1000,
             })
            .then(function(response){
                // self.columns = response.data;
               
                for (let key in response.data){
                    // var articledate = new Date(response.data[key].date);
		            // var options = { year: 'numeric', month: 'short', day: 'numeric', weekday: 'long' };
                    // response.data[key].sdate = new Intl.DateTimeFormat('en-US', options).format(articledate);
                     response.data[key].article_name = response.data[key].mainheading.replace(/ /g, '_');
                }   
                 self.columns = response.data.slice(0,2);
            })
            .catch(function (error) {
                //console.log('An Error occured',  error);
            });
        },
        scroll() {
            var fixmeTop = $('.leftcontainer').offset().top;       // get initial position of the element

            $(window).scroll(function() {                  // assign scroll event listener

                var currentScroll = $(window).scrollTop(); // get current position
                currentScroll = currentScroll+500;
                if (currentScroll >= fixmeTop) {     
                        // apply position: fixed if you
                    $('.leftcontainer').css({                      // scroll to that element or below it
                        position: 'sticky',
                        top: '0',
                        left: '0',
                        bottom: '200',
                    });
                    // $(".leftcontainer").attr("style", "margin-top: 35px;"); 
                } else {                                   // apply position: static
                    $('.leftcontainer').css({                      // if you scroll above it
                        position: 'static'
                    });
                    // $("#uk-navbar-dropdown").attr("style", "margin-top: 15px;"); 
                }

           });
        },
            getarticles () {
             var self = this;
             axios.get('http://103.214.233.141:3636/v1/secure/articles/',{
                //  headers: {'Authorization': 'Api-Key '+this.$code},
           // timeout:1000,
             })
            .then(function(response){
                 //console.log(response.data);
                var blogsArray = [];
                for (let key in response.data){
                    // //console.log(response.data);
                    ////console.log(key);
                    response.data[key].id = response.data[key]._id;
                    blogsArray.push(response.data[key]);
                    response.data[key].article_name = response.data[key].mainheading.replace(/ /g, '_');
                }
                self.newarticles = blogsArray;
               // //console.log(self.newarticles);
            })
            .catch(function (error) {
                //console.log('An Error occured',  error);
            }); 
        },
        parseJwt(t){
                 // //console.log("Hello");
            try {
               
                //console.log( JSON.parse(atob(t.split('.')[1])));
            } catch (e) {
                return null;
             }
        },
        geteditorspick () {
             var self = this;
             axios.get('http://103.214.233.141:3636/v1/secure/articles?articles[pick]=true&articles[status]=true',{
                //  headers: {'Authorization': 'Api-Key '+this.$code},
           // timeout:1000,
             })
            .then(function(response){
                var blogsArray = [];
                for (let key in response.data){
                    // //console.log(response.data);
                    ////console.log(key);
                    response.data[key].id = response.data[key]._id;
                   
                     response.data[key].article_name = response.data[key].mainheading.replace(/ /g, '_');
                      blogsArray.push(response.data[key]);
                }
                self.editorspick = blogsArray.slice(0,3);
            })
            .catch(function (error) {
                //console.log('An Error occured',  error);
            }); 
        },
        getsports(){
            var self = this;
             axios.get('http://103.214.233.141:3636/v1/secure/articles?categories[_id]=5bbb44de450a9b398b1ca673',{
                //  headers: {'Authorization': 'Api-Key '+this.$code},
           // timeout:1000,
             })
            .then(function(response){
                var blogsArray = [];
                for (let key in response.data){
                    // //console.log(response.data);
                    ////console.log(key);
                    response.data[key].id = response.data[key].aid;
                    blogsArray.push(response.data[key]);
                     response.data[key].article_name = response.data[key].mainheading.replace(/ /g, '_');
                }
                self.sports = blogsArray.slice(0,2);
            })
            .catch(function (error) {
                //console.log('An Error occured',  error);
            }); 
        },
        getscience(){
            var self = this;
             axios.get('http://103.214.233.141:3636/v1/secure/articles?categories[_id]=5bbb44de450a9b398b1ca674',{
                //  headers: {'Authorization': 'Api-Key '+this.$code},
           // timeout:1000,
             })
            .then(function(response){
                var blogsArray = [];
                for (let key in response.data){
                    // //console.log(response.data);
                    ////console.log(key);
                    response.data[key].id = response.data[key].aid;
                    blogsArray.push(response.data[key]);
                     response.data[key].article_name = response.data[key].mainheading.replace(/ /g, '_');
                }
                self.science = blogsArray.slice(0,2);
            })
            .catch(function (error) {
                //console.log('An Error occured',  error);
            });
        },
        getlifestyle(){
            var self = this;
            axios.get('http://103.214.233.141:3636/v1/secure/articles?categories[_id]=5bbb44de450a9b398b1ca675',{
                //  headers: {'Authorization': 'Api-Key '+this.$code},
           // timeout:1000,
             })
            .then(function(response){
                 var blogsArray = [];
                for (let key in response.data){
                    // //console.log(response.data);
                    ////console.log(key);
                    response.data[key].id = response.data[key].aid;
                    blogsArray.push(response.data[key]);
                     response.data[key].article_name = response.data[key].mainheading.replace(/ /g, '_');
                }
                self.lifestyle = blogsArray.slice(0,2);
            })
            .catch(function (error) {
                //console.log('An Error occured',  error);
            });
        }
        
        // scroll (newarticles) {
        //     var self = this;
        //     window.onscroll = () => {
        //         //  if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
        //         //     document.getElementById("myBtn").style.display = "block";
        //         // } else {
        //         //     document.getElementById("myBtn").style.display = "none";
        //         // }
        //         let bottomOfWindow = document.documentElement.scrollTop + window.innerHeight === document.documentElement.offsetHeight;
        //         if (bottomOfWindow) {
        //             axios.get(' http://machine.local:3000/api/v1/article')
        //             .then(response => {
        //             self.newarticles = response.data.slice(20,40);
        //             //articles.push(response.data[0]);
        //             });
        //         }
        //     };
        // },
    }
}
    


</script>
<style scoped>

.leftcontainer.h3{
    font:status-bar;
    color: #696a6c;
    font-weight: 350;
    font-size: 1.5rem;
    line-height: 1.4;
}
.router-link{
       font:status-bar;
    color: #696a6c;
    font-weight: 350;
    font-size: 1.5rem;
    line-height: 1.4;
}






#text{
    font-size:12px;
}
.leftcontainer{
    box-sizing: content-box;
    max-width: 400px;
    /* margin-left: 55px; */
    overflow-x: auto;
    overflow-y: auto;
    /* width:395px; */
     /* // margin-top: -854px; */
    height:-webkit-fill-available;
    margin-bottom: 28px;
    -webkit-transition: all 0.3s;
    -moz-transition: all 0.3s;
    -ms-transition: all 0.3s;
    -o-transition: all 0.3s;
    transition: all 0.3s;
      
}
::-webkit-scrollbar
{
  width: 2px;  /* for vertical scrollbars */
  height: 12px; /* for horizontal scrollbars */
}

::-webkit-scrollbar-track
{
  background: rgba(0, 0, 0, 0.0);
}

::-webkit-scrollbar-thumb
{
  background: rgba(0, 0, 0, 0.1);
}
a {
    text-decoration: none;
    }
.pic{
    padding-top:5px;
}



.rightcontainer{
    box-sizing: content-box;
}




.padding-small{
    padding:3px;
}
.crdimg{
    padding: 0px;
    width: 166px;
    height: 166px;
    line-height: 166px;
}
a {
    text-decoration: none;
    }
.editorstyle{
        font-size: 16px;
}

@media (max-width: 991px) {
    #desktop {
        display: none!important;
    }
    .rightcontainer{
        width:100%!important;
        padding-left: 10px;
        padding-right: 20px;
    }
}

#firstcolumn{
    margin-left:39px;
    padding-left:0px;
    margin-right:23px;
}
.uk-grid-small>.uk-grid-margin {
    margin-top: 50px;
}

</style>
