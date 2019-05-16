<template>
    <div id="enclose" style="min-height: 100vh;">
	    <main id="main" class="uk-visible@m">
		    <span>
		        <div class="section">
                    <div class="uk-container">
                        <div uk-grid>
                            <div class="uk-width-1-1@m">
                                <h3 class="uk-text-muted uk-margin-top">Editor's Pick 💡</h3> 
                                <div class="uk-grid-small uk-grid-match uk-padding-remove-top" id="cardd" uk-grid>
                                    <div v-for="article in articles" :key="article.id" class='uk-width-1-3@m' style='cursor: pointer;'>
                                        <div class='nohero uk-inline-clip uk-transition-toggle'>
                                            <!-- <div class='uk-label uk-label-primary label-home uk-margin-small uk-align-left uk-margin-remove-bottom' style='color:white;'>{{ article.color }}</div> -->
                                            <a class='uk-link-reset mainhead' href=''>
                                                <router-link v-bind:to="'/article/' +article.article_name+'/'+article._id">
                                                <div class="uk-visible-toggle">
                                                <div class="uk-text-center">
                                                    <div class="uk-inline-clip uk-transition-toggle" tabindex="0">
                                                         <img class='cardimgn uk-transition-scale-up uk-transition-opaque' :src="base_url+article.folder+'/'+article.image" alt="article"/>
                                                          </div>
                                                    </div>
                                                <div class='cardheading uk-padding-small uk-position-bottom uk-overlay uk-overlay-primary'>
                                                    <div>
                                                        <div class='uk-label uk-label-primary label-home uk-margin-small uk-hidden-hover'>{{ article.author }}</div>
                                                        <h3 class='overlayhead usecthead uk-margin-remove uk-padding-remove uk-text-center headtag'>{{ article.mainheading }}</h3>
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
            base_url: 'http://103.214.233.141:3636/images/uploads/articles/'
        }
    },
    mounted() {
        this.getarticles();
    },
    methods: {
        getarticles(){
            var self = this;
             axios.get('http://103.214.233.141:3636/v1/secure/articles?articles[pick]=true&articles[status]=true',{
                //  headers: {'Authorization': 'Api-Key '+this.$code},
           // timeout:1000,
             })
            .then(function(response){
                self.articles = response.data;
                for (let key in response.data){
                    response.data[key].article_name = response.data[key].mainheading.replace(/ /g, '_');
                }
            })
            .catch(function (error) {
                //console.log('An Error occured',  error);
            }); 
        }
    }
}
</script>
<style scoped>

</style>
