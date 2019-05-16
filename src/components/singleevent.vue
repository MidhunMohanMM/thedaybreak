<template>
 <div class="section uk-padding-small">
    <div class='uk-container uk-border-rounded articlebg'>
        <div  class='uk-flex uk-flex-left uk-grid-small' uk-grid>
            <div class='uk-width-1-1@m uk-padding-remove-left'>
                <div class='uk-padding uk-padding-remove-horizontal uk-padding-remove-bottom'>
          
                        <!-- <ul style='background-color: white; padding: 6px;' class='uk-breadcrumb'>
                            <li><a style='font-size:1rem;' class='newsa' href=''>Home</a></li>
                            <li><a style='font-size:1rem;' href=''>Events</a></li>
                        </ul> -->
                        <div>
                    <ul style='background-color: white; padding: 6px;' class='uk-breadcrumb'>
                        <li><a style='font-size:1rem;' class='newsa' href=''><router-link to="/" exact>Home</router-link></a></li>
                        <li><a style='font-size:1rem;' class="uk-text-capitalize" ><router-link to="/upcoming" >Events</router-link></a></li>
                    </ul>
                </div>
    
<social-sharing :url="'www.thedaybreak.in/article/' +mainheading+'/'+id" inline-template>
  <div>
    <network network="facebook">
      <!-- <i class="fa fa-fw fa-facebook"></i> -->
       <a><img class="socialico" style="height:24px;!important" src="/src/assets/ico/fb.svg" /></a>
    </network>
    <network network="googleplus">
       <a><img class="socialico" style="height:24px;!important" src="/src/assets/ico/gplus.svg" /></a>
    </network>
    <network network="linkedin">
       <a><img class="socialico" style="height:24px;!important" src="/src/assets/ico/li.svg" /></a>
    </network>
    <network network="pinterest">
      <a> <img class="socialico" style="height:24px;!important" src="/src/assets/ico/pt.svg" /></a>
    </network>
    <network network="reddit">
      <a><img class="socialico"  style="height:24px;!important" src="/src/assets/ico/reddit.svg" /></a>
    </network>
    <network network="twitter">
      <a> <img class="socialico" style="height:24px;!important" src="/src/assets/ico/tw.svg" /></a>
    </network>
    <network network="whatsapp">
     <a><img class="socialico"  style="height:24px;!important" src="/src/assets/ico/whatsapp.svg" /></a>
    </network>
  </div>
</social-sharing>


                    <h1 class='uk-article-title eventheading'>{{ name }}</h1>
                    <div class='uk-width-2-3@m uk-align-left'>
                    <!-- <p class='uk-text-meta uk-margin-remove '>
                        <span uk-icon="calendar"></span> <strong>{{ event.sdate }}</strong> to <strong>{{ event.edate }}</strong>
                    </p> -->
                    
                    <!-- <p class='uk-text-meta uk-margin-remove ' v-if="event.etime != ''" style="padding-top:4px;">
                        <span uk-icon="clock" ></span><strong style="padding-left:4px;">{{ event.stime }}</strong> to <strong>{{ event.etime }}</strong>
                        </p> -->
                    <p class='uk-text-meta uk-margin-remove' style="padding-top:4px;">
                    <a id="ft" target="_blank" :href="'https://maps.google.com/?q=' +place">                        
                        <span uk-icon="location"></span><strong style="padding-left:4px;" uk-tooltip="Click to see on Google Maps">{{ place }}</strong>
                     </a>
                        </p>

                    </div>
                                    
                    <div class='uk-width-2-3@m uk-padding-remove-left '>

                    </div>
                    
                </div>
            </div>
        
         
           
         </div>
         <div class='artbody uk-flex uk-flex-left uk-grid-small' uk-grid>
            <div class='uk-width-2-3@m uk-padding-remove-left'>
                
                    <img class='uk-align-center' :src="base_url+folder+'/'+image" :alt="base_url+folder+'/'+image" />
               <div class='box uk-container uk-container-small uk-padding uk-padding-remove-vertical'>
                  <article style='font-size: 0.8rem;' v-html = "details" ></article>
               </div>
               <hr>
            </div>
            
                  <div class='uk-margin-left'  style= "width: 30%;">
                 <div>
                     <a id="weather" class="weatherwidget-io" href="https://forecast7.com/en/9d9376d27/kochi/"  data-label_1="Kochi" data-label_2="Weather" data-icons="Climacons Animated" data-theme="pure" ></a>
                <hr>
                <div id="weather" class='uk-visible@m' style='cursor: pointer;'>
                    <h3 class='uk-heading-line'><span>Trending in Events</span></h3>
           
                </div>
                
               <div id="weather" class='uk-visible@m' v-for="event in fullevents.slice(0,7)" :key="event._id">
                

                    <a class='uk-link-reset' href=''>
                        <router-link v-bind:to="'/event/' +event.event_name+'/'+event._id">
                        <h5 class='sideheadline uk-text-bold'>{{ event.name }}</h5>
                        </router-link>
                    </a>
                   
                    <hr class='uk-margin-small'>

                </div>
                <br>
                <!-- <div id="weather" class='uk-visible@m' style='cursor: pointer;'>
                    <h3 class='uk-heading-line'><span>Read More</span></h3>
         
                </div> -->
                <!-- <div id="weather" class='uk-visible@m' v-for="article in generals" :key="article.id">
                      

                    <a class='uk-link-reset' href=''>
                        <router-link v-bind:to="'/article/' +article.article_name+'/'+article._id">
                        <h5 class='sideheadline  uk-text-bold'>{{ article.mainheading }}</h5>
                        </router-link>
                    </a>
                   
                    <hr class='uk-margin-small'>
                </div> -->
                <br>
                <!-- <a href="#" class="uk-align-right" uk-totop uk-scroll></a> -->
             </div>
          
        </div>
         </div>
      </div>
 </div>
</template>
<script>
export default {
     data() {
        return {
            base_url: 'http://103.214.233.141:3636/images/uploads/events/',
            events: [],
            details: "",
            folder: "",
            image: "",
            name: "",
            pick: "",
            place: "",
            tags: "",
            type: "",
            // events: "",
            fullevents: "",
            id: this.$route.params.id
        }
    },
          created(){
     this.singleevent();

    },
    mounted(){
        this.getevents();
        // this.singleevent();
    },
           watch: {
    // call again the method if the route changes
    '$route': 'singleevent',
    
     //id: this.$route.params.id,
  },

    methods: {
        singleevent(id) {
            var self = this;
              window.scrollTo(0, 200);
            self.id = self.$route.params.id   
            //console.log(self.id);    
            axios.get('http://103.214.233.141:3636/v1/secure/events/' + self.id,{
                //  headers: {'Authorization': 'Api-Key '+this.$code},
           // timeout:1000,
             })
            .then(function(response){
                var blogsArray = [];
                // for (let key in response.data){
                //     //console.log(response.data);
                //     response.data[key].aid = response.data[key].folder;
                //     blogsArray.push(response.data[key]);
                // }
                self.events = response.data;
                self.details = response.data.details;
                self.folder = response.data.folder;
                self.image = response.data.image;
                self.name = response.data.name;
                self.pick = response.data.pick;
                self.place = response.data.place;
                self.tags = response.data.tags;
                self.type = response.data.type;
                //console.log(self.events);
                for (let key in response.data){
                    // var articledate = new Date(response.data[key].date);
		            // var options = { year: 'numeric', month: 'short', day: 'numeric', weekday: 'long' };
                    // response.data[key].sdate = new Intl.DateTimeFormat('en-US', options).format(articledate);
                   response.data[key].event_name = response.data[key].name.replace(/ /g, '_');
                } 
                return self.id;
                // for (let key in response.data){

                //     var eventdate = new Date(response.data[key].eventdatetime);
		        //     var options = { year: 'numeric', month: 'short', day: 'numeric', weekday: 'long' };
                //     response.data[key].sdate = new Intl.DateTimeFormat('en-US', options).format(eventdate);
                    
                //     var eventenddate = new Date(response.data[key].eventenddatetime);
                //     options = { year: 'numeric', month: 'long', day: 'numeric' };
                //     response.data[key].edate = new Intl.DateTimeFormat('en-US', options).format(eventenddate);

                //     var eventtime = new Date(response.data[key].eventdatetime);
                //     var options = {hour: 'numeric', minute: 'numeric' };
                //     response.data[key].stime = new Intl.DateTimeFormat('en-US', options).format(eventtime);

                //     var eventendtime = new Date(response.data[key].eventenddatetime);
                //     var options = {hour: 'numeric', minute: 'numeric' };
                //     response.data[key].etime = new Intl.DateTimeFormat('en-US', options).format(eventendtime);
                // }   
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
                self.fullevents = blogsArray;
            })
            .catch(function (error) {
                //console.log('An Error occured',  error);
            }); 
        },
    }
}
</script>
<style scoped>
.eventheading{
        margin-top: 0px!important;
}
a{
    color: black!important;
    font-weight: 400 !important;
    text-decoration: none;
    border-radius: 10px;
    padding: 0 0px;
    font-size: 0.888rem;
    font-family: inherit;
}
</style>
