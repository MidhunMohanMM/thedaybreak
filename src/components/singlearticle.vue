<template>
 <div class="section uk-padding-small">
     
    <div class='uk-container uk-border-rounded articlebg'>
    <!-- <br> -->
    <!-- <div class='fb-like' data-layout='button_count' data-action='like' data-size='small' data-show-faces='false' data-share='true'></div> -->
    <div class='uk-flex uk-grid-small uk-margin-remove-left uk-margin-remove-right' uk-grid>
        <div class='uk-width-1-1@m uk-padding-remove-left'>
            <div class='uk-padding uk-padding-remove-horizontal uk-padding-remove-bottom'>
                <a href='' class='uk-button uk-button-danger uk-align-right uk-margin-remove uk-hidden editarticle' type='button' tabindex='-1' onclick='deletedraft()' style='background: red;'>Edit Article</a>
                <div>
                    <ul style='background-color: white; padding: 6px;' class='uk-breadcrumb'>
                        <li><a style='font-size:1rem;' class='newsa' href=''><router-link to="/" exact>Home</router-link></a></li>
                        <li><a style='font-size:1rem;' class="uk-text-capitalize" ><router-link v-bind:to="'/'+categoryname+'/'+categories" >{{categoryname}}</router-link></a></li>
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


        
                <h1 class='uk-article-title articletitle mainheading ' style="margin-top:0px;">{{ mainheading }}</h1>
                <div class='uk-width-2-3@m uk-align-left'>
                    <ul class='uk-subnav uk-subnav-divider' uk-margin>
                        <li class='uk-text-meta'>{{ author }}</li>
                        <li v-if="place!=''" class='uk-text-meta'>{{ place }}</li>
                        <!-- <li class='uk-text-meta'>{{ article.sdate }}</li> -->
                    </ul>
                    <!-- <ul class='uk-subnav uk-subnav-divider' uk-margin> -->
                    <ul class='uk-subnav'>    
                    <li  v-for="author in tags1" :key="author.id"><span class="uk-label uk-text-capitalize" style="color: white; background-color: black;">{{ author.name }}</span> </li></ul>
                    <!-- </ul> -->
                    <p v-if="subheading!=''" class='uk-article-lead uk-padding-remove-bottom' style='font-size: 0.9rem;'>{{ subheading }}</p>
                </div>
            </div>
        </div>
        <div class='uk-flex uk-flex-left uk-grid-small' uk-grid>
            <div class='uk-width-2-3@m uk-align-left uk-padding-remove-left uk-padding-remove-right'>
                    <img class='uk-align-center' :src="'http://103.214.233.141:3636/images/uploads/articles/'+folder+'/'+image" alt="article" /> 
                <p class='uk-text-lead uk-text-center' style='font-size: 0.9rem;'>{{ imagetext }}</p>
                <div class=' artbody uk-flex uk-flex-left uk-grid-small' uk-grid>
                    <div class='uk-padding-left'>
                        <div class=' box uk-container uk-text-justify uk-container-small uk-padding uk-padding-remove-vertical'>
                            <article v-html = "contents" style="font-size: 0.9rem;">
                                <!-- {{ article.article }} -->
                                <hr>
                            </article>
                           
                        </div>
                    </div>
                </div>
            </div>
            
             <div class='uk-padding-remove-left'  style= "width: 30%;">
                 <div>
                     <a id="weather" class="weatherwidget-io" href="https://forecast7.com/en/9d9376d27/kochi/"  data-label_1="Kochi" data-label_2="Weather" data-icons="Climacons Animated" data-theme="pure" ></a>
               
                <hr>
                <div id="weather" class='uk-visible@m' style='cursor: pointer;'>
                    <h3 class='uk-heading-line'><span>Trending in School</span></h3>
           
                </div>
                
               <div id="weather" class='uk-visible@m' v-for="school in schools" :key="school.id">
                

                    <a class='uk-link-reset' href=''>
                        <router-link v-bind:to="'/article/' +school.article_name+'/'+school._id">
                        <h5 class='sideheadline uk-text-bold'>{{ school.mainheading }}</h5>
                        </router-link>
                    </a>
                   
                    <hr class='uk-margin-small'>

                </div>
                <br>
                <div id="weather" class='uk-visible@m' style='cursor: pointer;'>
                    <h3 class='uk-heading-line'><span>Read More</span></h3>
         
                </div>
                <div id="weather" class='uk-visible@m' v-for="article in generals" :key="article.id">
                      

                    <a class='uk-link-reset' href=''>
                        <router-link v-bind:to="'/article/' +article.article_name+'/'+article._id">
                        <h5 class='sideheadline  uk-text-bold'>{{ article.mainheading }}</h5>
                        </router-link>
                    </a>
                   
                    <hr class='uk-margin-small'>
                </div>
                <br>
                <!-- <a href="#" class="uk-align-right" uk-totop uk-scroll></a> -->
             </div>
          
        </div>
        </div>
        </div>
        </div>
    </div>
</template>

<script>
export default {
    metaInfo: {
    // Children can override the title.
    title: 'The Daybreak',
    // Result: My Page Title ← My Site
    // If a child changes the title to "My Other Page Title",
    // it will become: My Other Page Title ← My Site
    titleTemplate: '%s',
    links: [
    {rel: 'canonical', href: 'https://www.my-site.com/my-special-page'}   //need to add site address
  ],
    // Define meta tags here.
    meta: [
      {content: 'text/html, charset=utf-8'},

      {name: 'viewport', content: 'width=device-width, initial-scale=1'},
      {name: 'description', content: 'I have things here on my site.'}, //need to add subheading in content
      {property: 'og:title', content: 'My Page Title ← My Site'},    //need to add mainheading in content 
    {property: 'og:site_name', content: 'Daybreak'},
    // The list of types is available here: http://ogp.me/#types
    {property: 'og:type', content: 'article'},
    // Should the the same as your canonical link, see below.
    {property: 'og:url', content: ''},
    {property: 'og:image', content: ''},  //content="<?= $images ?>/uploads/<?= $meta['aid'] ?>/card_<?= $meta['image'] ?>"
    // Often the same as your meta description, but not always.
    {property: 'og:description', content: 'I have things here on my site.'},   //need to add subheading in content

    // Twitter card
    {name: 'twitter:card', content: 'summary'},
    {name: 'twitter:site', content: 'https://www.my-site.com/my-special-page'},
    {name: 'twitter:title', content: 'The Daybreak'},
    {name: 'twitter:description', content: 'I have things here on my site.'},  //need to add subheading in content
    // Your twitter handle, if you have one.
    {name: 'twitter:creator', content: '@alligatorio'},    //twitter ID
    {name: 'twitter:image:src', content: ''},   //content="<?= $images ?>/uploads/<?= $meta['aid'] ?>/card_<?= $meta['image'] ?>"

    // Google / Schema.org markup:
    {itemprop: 'name', content: 'The Daybreak'},
    {itemprop: 'description', content: 'I have things here on my site.'},    //need to add subheading in content
    {itemprop: 'image', content: ''}      //content="<?= $images ?>/uploads/<?= $meta['aid'] ?>/card_<?= $meta['image'] ?>"
   
    ]
  },
    data() {
        return {
            base_url: 'http://103.214.233.141:3636/images/uploads/tests/articles/',
            articles: [],
            schools: {},
            generals: {},
            mainheading: "",
            author: "",
            contents: "",
            categories: "",
            folder: "",
            image: "",
            imagetext: "",
            place: "",
            subheading: "",
            _id: "",
            categoryname: "",
            tags1: "",
            id: this.$route.params.id,
            tags: ['Science', 'World', 'Technology']
            //blog: {}
        }
    },
    created(){
     this.singlearticle();
    },
    mounted(){
    
        this.getarticles();
        this.getschools();       
         this.gethubdata();
    },
       watch: {
    // call again the method if the route changes
    '$route': 'singlearticle',
    
     //id: this.$route.params.id,
  },
    methods:{
         getschools() {
            var self = this;        
           // //console.log(this.$code);               
           axios.get('http://103.214.233.141:3636/v1/secure/articles?categories[_id]=5bbb44de450a9b398b1ca671',{
                //  headers: {'Authorization': 'Api-Key '+this.$code},
           // timeout:1000,
             })
            .then(function(response){
                var schoolArray = [];
                 //console.log(response.data);
                for (let key in response.data){
                    // //console.log(response.data);
                    ////console.log(key);
                    response.data[key].id = response.data[key].aid;
                    schoolArray.push(response.data[key]);
                    response.data[key].article_name = response.data[key].mainheading.replace(/ /g, '_');
                }
                //self.schools = schoolArray;
                self.schools = schoolArray.slice(0,6); 
            })
            .catch(function (error) {
                //console.log('An Error occured',  error);
            });
        },
         getarticles () {
             var self = this;
           
            
            //  this.code='code';
             axios.get('http://103.214.233.141:3636/v1/secure/articles/',{
                //  headers: {'Authorization': 'Api-Key '+this.$code},
           // timeout:1000,
             })
            .then(function(response){
                var blogsArray = [];
                //console.log(response.data);
                for (let key in response.data){
                    ////console.log(response.data);
                    ////console.log(key);
                    //response.data[key].id = response.data[key].aid;
                    blogsArray.push(response.data[key]);
                    response.data[key].article_name = response.data[key].mainheading.replace(/ /g, '_');
                }
                self.generals = blogsArray.slice(0,6);
            })
            .catch(function (error) {
                //console.log('An Error occured',  error);
               
            }); 
        },
      
    singlearticle(id){
            var self = this;      
              window.scrollTo(0, 200);
            this.id = self.$route.params.id   
            //console.log(this.id);           
            axios.get('http://103.214.233.141:3636/v1/secure/articles/' + this.id,{
                //  headers: {'Authorization': 'Api-Key '+this.$code},
             })
            .then(function(response){
                self.articles = response.data;
                console.log(response); 
                self.mainheading = response.data.mainheading;
                 self.categories = response.data.categories;
                 self.contents = response.data.contents;
                 self.author = response.data.author;
                 self.folder = response.data.folder;
                 self.image = response.data.image;
                 self.imagetext = response.data.imagetext;
                 self.interviewee = response.data.interviewee;
                 self.place = response.data.place;
                 self.subheading = response.data.subheading;
                 self.aid = response.data._id;
                 self.tags1 = response.data.tags;
                 self.getcategory();
                 self.gettags();
               // //console.log("hi");
                // for (let key in response.data){
                //     //console.log(key)
                    // var articledate = new Date(response.data[key].date);
		            // var options = { year: 'numeric', month: 'short', day: 'numeric', weekday: 'long' };
                    // response.data[key].sdate = new Intl.DateTimeFormat('en-US', options).format(articledate);
                //    response.data[key].article_name = response.data[key].mainheading.replace(/ /g, '_');
                // }  
                return self.id;
            })
            .catch(function (error) {
                console.log('An Error occured',  error);
                var that = self;
                  that.randomarticle();
            });
        },
        gettags () {
             var self = this;
            //console.log(self.tags1);
            var blogsArray1 = [];
            for(var i=0;i<self.tags1.length;i++)
            {   
                    //console.log(self.tags1[i]);
                    var id = self.tags1[i]
                    axios.get('http://103.214.233.141:3636/v1/secure/tags?tags[_id]=' +id,{
                        //  headers: {'Authorization': 'Api-Key '+this.$code},
                // timeout:1000,
                    })
                    .then(function(response){
                        //console.log(response.data);
                        // self.tags2 = response.data[0].name;
                        for (let key in response.data){
                        response.data[key].id = response.data[key]._id;
                        // response.data[key].name = response.data[key]._id;
                         blogsArray1.push(response.data[key])
                        }
                    })
                    .catch(function (error) {
                        //console.log('An Error occured',  error);
                    
                    }); 
            }
            self.tags1 = blogsArray1;
            // //console
        },
          getcategory () {
             var self = this;
           
            
            //  this.code='code';
             axios.get('http://103.214.233.141:3636/v1/secure/categories?categories[_id]=' +self.categories,{
                //  headers: {'Authorization': 'Api-Key '+this.$code},
           // timeout:1000,
             })
            .then(function(response){
                //console.log(response.data);
                self.categoryname = response.data[0].name;
            })
            .catch(function (error) {
                //console.log('An Error occured',  error);
               
            }); 
        },

        gethubdata(){
             var self = this;      
            console.log("rand");              
            axios.get('http://103.214.233.141:2981/v1/secure/hubs/profiles/2')
            .then(function(response){
                console.log(response);     
            })
            .catch(function (error) {
                console.log('An Error occured',  error);
            });
        },
        randomarticle(){
            var self = this;      
            console.log("rand");              
            axios.get('http://103.214.233.141:3636/v1/secure/articles/' + '5c48530645484716c2389b' +  Math.ceil(Math.random()*4) + Math.ceil(Math.random()*9),{
                //  headers: {'Authorization': 'Api-Key '+this.$code},
             })
            .then(function(response){
                console.log(response.data);
                self.articles = response.data;
                self.mainheading = response.data.mainheading;
                 self.categories = response.data.categories;
                 self.contents = response.data.contents;
                 self.author = response.data.author;
                 self.folder = response.data.folder;
                 self.image = response.data.image;
                 self.imagetext = response.data.imagetext;
                 self.interviewee = response.data.interviewee;
                 self.place = response.data.place;
                 self.subheading = response.data.subheading;
                 self.aid = response.data._id;
                 self.tags1 = response.data.tags;
                 self.getcategory();
                 self.gettags();
                // for (let key in response.data){
                //     var articledate = new Date(response.data[key].date);
		        //     var options = { year: 'numeric', month: 'short', day: 'numeric', weekday: 'long' };
                //     response.data[key].sdate = new Intl.DateTimeFormat('en-US', options).format(articledate);
                // }        
                return self.id;         
            })
            .catch(function (error) {
                console.log('An Error occured',  error);
                var that = self;
                that.randomarticle();
            });
        }

    }
}
</script>
<style scoped>
#articlestyle {
    font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Oxygen-Sans, Ubuntu, Cantarell, "Helvetica Neue", sans-serif;
    line-height: 1.6;
    font-weight: 300;
    
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

@media (max-width: 1004px) {
    #weather {
        display: none!important;
    }

}
/* p,a,article{
    font-family: "Open Sans"!important;
    font-size: 1.1em;
    line-height: 28px;
    color: #000000;
} */

p,a,article{
    font-weight: 400!important;
    font-size: 14px!important;
    line-height: 28px!important;
}

</style>
