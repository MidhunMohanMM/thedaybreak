<template>
    <div id="enclose" style="min-height: 100vh; margin-bottom: 20px;">
	    <main id="main" class="uk-visible@m">
		    <span>
		        <div class="section">
                    <div class="uk-container">
                        <div uk-grid>
                            <div class="uk-width-1-1@m" >
                                <!-- <hr class="uk-divider-icon"> -->

                                <h3 v-if="this.id == '5bbb44de450a9b398b1ca671'" class="uk-text-muted uk-margin-top">In the Schools 🏢</h3>    
                                <h3 v-if="this.id == '5bbb44de450a9b398b1ca672'" class="uk-text-muted uk-margin-top">General 📰</h3>  
                                <h3 v-if="this.id == '5bbb44de450a9b398b1ca673'" class="uk-text-muted uk-margin-top">Sports 🏆</h3>  
                                <h3 v-if="this.id == '5bbb44de450a9b398b1ca674'" class="uk-text-muted uk-margin-top">Science 🌏</h3>                               
                                <h3 v-if="this.id == '5bbb44de450a9b398b1ca675'" class="uk-text-muted uk-margin-top">Lifestyle 🎭</h3> 

                                <h3 v-if="this.id == '5bbb44de450a9b398b1ca67a'" class="uk-text-muted uk-margin-top">Editorial 📝</h3> 
                                <h3 v-if="this.id == '5bbb44de450a9b398b1ca67b'" class="uk-text-muted uk-margin-top">Column ✒</h3> 

                                <h3 v-if="this.id == '5bbb44de450a9b398b1ca679'" class="uk-text-muted uk-margin-top">Students 🙋</h3> 
                                <h3 v-if="this.id == '5bbb44de450a9b398b1ca678'" class="uk-text-muted uk-margin-top">Teachers 👩</h3> 
                                <h3 v-if="this.id == '5bbb44de450a9b398b1ca677'" class="uk-text-muted uk-margin-top">Parents 👪</h3> 

                                <h3 v-if="this.id == '5bbb44de450a9b398b1ca676'" class="uk-text-muted uk-margin-top">Interviews 👦</h3>

                                 <br>
                                <div class="uk-grid-small uk-grid-match uk-padding-remove-top" id="cardd" uk-grid>
                                    <div id="mobile" v-for="article in articles" :key="article.id" class='uk-width-1-3@m' style='cursor: pointer;'>
                                        <div class='nohero uk-inline-clip uk-transition-toggle'>
                                            <a class='uk-link-reset mainhead' href=''>
                                                <router-link v-bind:to="'/article/' +article.article_name+'/'+article._id">
                                            <div class="uk-visible-toggle">    
                                                <div class="uk-text-center ">
                                                    <div class="uk-inline-clip uk-transition-toggle" tabindex="0">
                                                         <img class='cardimgn uk-transition-scale-up uk-transition-opaque' :src="base_url+article.folder+'/'+article.image" alt="article"/>
                                                    </div>
                                                </div>
                                                <div class='cardheading uk-padding-small uk-position-bottom uk-overlay uk-overlay-primary '>
                                                    <div>
                                                        <div class='uk-label uk-label-primary label-home uk-margin-small uk-hidden-hover'>{{ article.author }}</div>
                                                        <h3 class='overlayhead usecthead uk-margin-remove uk-padding-remove uk-text-center headtag '>{{ article.mainheading }}</h3>
                                                    </div>
                                                </div>
                                            </div>
                                            </router-link>
                                            </a>
                                        </div>
                                        <div class='uk-position-bottom-left uk-padding-small'></div>
                                    </div>
                                </div>
                                
                            </div>
                        </div>
                    </div>
                </div>
            </span>
        </main>
    </div>
</template>


<script>
export default {
    data() {
        return {
            articles: [],
            base_url: 'http://103.214.233.141:3636/images/uploads/articles/',
            id: this.$route.params.id,
          
        }
        
    },
    created() {
        this.getarticles(this.id);
    },
    
    watch: {
    // call again the method if the route changes
    '$route': 'getarticles',
    
     //id: this.$route.params.id,
  },
    methods: {
        getarticles(id){
            var self = this;
            ////console.log(self.$route.params.id);
            this.id = self.$route.params.id
             axios.get('http://103.214.233.141:3636/v1/secure/articles?categories[_id]=' + this.id,{
                //  headers: {'Authorization': 'Api-Key '+this.$code},
           // timeout:1000,
             })
            .then(function(response){
                self.articles = response.data;
                for (let key in response.data){
                    ////console.log('TCL: getarticles -> response.data', response.data);
                    ////console.log(response.data)
                    response.data[key].article_name = response.data[key].mainheading.replace(/ /g, '_');
                     response.data[key].article_name = response.data[key].article_name.replace(/%/g, "percent");
                }  
            })
            .catch(function (error) {
                //console.log('An Error occured',  error);
            }); 
        }
    },
           
}
</script>
<style scoped>
@media (max-width: 991px) {
    #mobile{
        width:50%;
    }
    .cardheading{
        margin-left: 6%;
        margin-right: 6%;
    }
}
</style>
