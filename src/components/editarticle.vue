<template>
    <div class="section uk-padding-small">
        <div class="articlebg uk-container uk-margin-large-bottom">
            <div  class="uk-flex uk-flex-left uk-grid-small " uk-grid>
                <div class="uk-width-1-1@m "> <!-- Form beginning -->
                    <form id="articleform" class="uk-form"> 
                        <div class="uk-width-1-1@m ">
                            <div id="draftsavetime" class="draftsave uk-hidden" data-uk-sticky></div>
                            <div class="uk-padding uk-margin-left uk-padding-remove-horizontal uk-padding-remove-bottom">
                                <button class="uk-button uk-align-right uk-margin-remove uk-text-capitalize" type="reset" value="Reset" tabindex="-1" >Delete Draft</button>
                                 <div class="uk-form-select uk-margin-bottom" data-uk-form-select>
                                        <select v-model="categories" id="bd" class="uk-select uk-text-capitalize bd uk-width-1-6@m" v-on:change="changeHandler(categories,'categories')" >
                                            <option disabled value="">Select Category</option> 
                                            <option v-for="categorylist in fullcategories" :key="categorylist.id" :value="categorylist._id">{{ categorylist.name }}</option>
                                        </select>   
                                 </div>
                                <span id="ciderror" style="color: red; font-weight: bolder;"></span>
                                <!-- <br>
                                <br> -->
                              
                                <ul class='uk-subnav'>     <label v-if="name.length != '0'" class="uk-text-meta">Previously Selected Tags: </label> 
                                <li  v-for="names in name" :key="names.id"><span class="uk-label uk-text-capitalize" style="color: white; background-color: #41b883;">{{ names }}</span> </li></ul>
                    
                                <h6  style="margin-top:0px" class="uk-text-meta">Select New Tags</h6>
                                
                                <!-- <label class="uk-label" v-for="names in name" :key="names.id">{{ names }} </label> -->
                                <multiselect style="width:25%"  v-model="value" tag-placeholder="Add this as new tag" v-on:change="changeHandler(tags,'tags')" placeholder="Search or add a tag" label="name" track-by="code" :options="options" :multiple="true" :taggable="true" @tag="addTag"></multiselect>
                                 <!-- <multiselect style="width:25%" v-if="flag == false" v-model="value" tag-placeholder="Add this as new tag" v-on:change="changeHandler(tags1,'tags')" placeholder="Search or add a tag" label="name" track-by="code" :options="options" :multiple="true" :taggable="true" @tag="addTag"></multiselect> -->
                                        
                <!-- Mainheading -->
                                <!-- <h6 style="margin-bottom:0px">Mainheading</h6> -->
                                 <h6 v-if="mainheading!= '' || (mainheading_flag == true)" style="margin-bottom:0px" class="uk-text-meta">Mainheading</h6>
                                    <!-- <input class="autowidth uk-form-medium uk-input uk-padding-remove-horizontal uk-width-1-1 uk-form-blank uk-form-width-large"  @focus="mainheading_flag = true"  @blur="mainheading_flag = false"  id="mainheading" type="text" placeholder="Article Title" onfocus="this.placeholder=''" onblur="this.placeholder='Article Title'" v-model="newarticle.mainheading"><br/> -->
                                    
                                
                                <input id="custom-input"  class="autowidth uk-form-medium uk-input uk-width-1-1 uk-form-width-large "  name="mainheading" type="text"  v-model="mainheading" v-on:change="changeHandler(mainheading,'mainheading')"><br/>
                                
                                
                                <span id="mainheadingerror" style="color: red; font-weight: bolder;"></span><br/>
                                <div uk-grid>
                <!-- Author -->
                                    <div class="uk-width-1-3">
                                         <h6  v-if="author!= '' || (author_flag == true)" style="margin-bottom:0px" class="uk-text-meta">Author</h6>
                                
                                            <input id="custom-input"  class="uk-form-medium autowidth uk-input uk-margin-remove uk-form-width-large "   name="author"  type="text"  v-model="author" v-on:change="changeHandler(author,'author')"><br/>
                                                <span id="authorerror" style="color: red; font-weight: bolder;"></span><br>                                      
                <!-- User Email -->
                                        <h6  v-if="useremail!= '' || (email_flag == true)" style="margin-bottom:0px;margin-top:0px;" class="uk-text-meta">Email</h6>
                                
                                        <input id="custom-input" class="uk-form-medium uk-input  uk-margin-remove uk-form-width-large   uk-form-width-medium" name="useremail"  type="email"  v-model="useremail" v-on:change="changeHandler(useremail,'useremail')"><br/>
                                        <span id="useremailerror" style="color: red; font-weight: bolder;"></span><br>
                                    </div>
                <!-- Date -->
                                    <div class="uk-width-1-4">
                                        <label class="uk-text-meta">Previous Selected Date : {{ article. sdate }}</label>
                                        <input id="custom-input" class="uk-form-medium uk-input uk-margin-remove  uk-form-width-large  uk-form-width-medium uk-form-blank idk" name="date" type="date" data-uk-datepicker="{format:'DD.MM.YYYY'}"  placeholder="Date" v-model="article.date" >
                                       
                                       <!-- <input class="uk-form-medium uk-input uk-article-meta uk-margin-remove uk-form-width-large uk-padding-remove-horizontal uk-form-blank uk-form-width-medium idk" name="date"  :value="article.date && article.date.toISOString().split('T')[0]" @input="article.date = $event.target.valueAsDate" id="date" type="date" data-uk-datepicker="{format:'DD.MM.YYYY'}" placeholder="Date"> -->
                                        
                                        <span id="dateerror" style="color: red; font-weight: bolder;"></span>
                                    </div>
                                </div>
                                <div v-if="categories == '5bbb44de450a9b398b1ca678' || categories == '5bbb44de450a9b398b1ca679'">
                                <h6  v-if="interviewee!= '' || (school_flag == true)" style="margin-bottom:0px;margin-top:0px;" class="uk-text-meta">School Name</h6>
                                
                                <input id="custom-input" class="uk-form-medium uk-input uk-margin-remove uk-width-1-3 uk-form-width-large uk-form-width-medium" style="width: 373px;"  name="place" type="text"  v-model="interviewee" v-on:change="changeHandler(interviewee,'interviewee')"><br/>  
                               
                <!-- Place--><br/>
                                </div>
                                 <h6  v-if="place!= '' || (location_flag == true)" style="margin-bottom:0px;margin-top:0px;" class="uk-text-meta">Location</h6>
                                
                                <input id="custom-input" class="uk-form-medium uk-input uk-margin-remove uk-width-1-3 uk-form-width-large uk-form-width-medium" style="width: 373px;" name="place" type="text"  v-model="place" v-on:change="changeHandler(place,'place')"><br/>
                                <span id="placeerror" style="color: red; font-weight: bolder;"></span>
                                <br/>
                <!-- Subheading -->
                                <h6  v-if="subheading!= '' || (subheading_flag == true)" style="margin-bottom:0px;margin-top:0px;" class="uk-text-meta">Subheading</h6>
                                
                                <input id="custom-input" class='article uk-input uk-form-width-large  uk-form-width-medium uk-width-1-1' name='subheading' type='text'  v-model="subheading" v-on:change="changeHandler(subheading,'subheading')"><br>
                                <!-- <hr class="uk-margin-small"> -->
                                <span id="subheadingerror" style="color: red; font-weight: bolder;"></span>
                                <br>
                                <article>
                                    <img class="uk-margin-top" :src="base_url+folder+'/'+image" alt="article" />
                           
                                    <div class="uk-margin-large-top">
                                       <!-- <input type="file"  @change="onFileSelected">
                                        <button type = "button"  @click="onUpload">Upload</button> -->
                                        <div class="uk-margin" uk-margin>
                                            <div uk-form-custom>
                                                <input type="file" @change="onFileSelected">
                                                <button v-if="selectedFile.name ==undefined" class="uk-button uk-button-default uk-text-capitalize " type="button" tabindex="-1">Change Picture</button>
                                                <button v-if="selectedFile.name !=undefined" class="uk-button uk-button-default uk-text-capitalize " type="button" tabindex="-1">Change Picture</button>
                                                <label class="uk-text-muted">{{ selectedFile.name }}</label>
                                            </div>
                                        </div>
                                    </div>
                                    <!-- <br><br> -->
                <!--Image Text -->
                                    <!-- <input id="custom-input"  class="uk-form-small uk-input uk-margin-remove uk-width-1-2  uk-form-width-medium" name="imgtext" type="text" placeholder="Image Text" v-model="imagetext" v-bind:class="{'uk-form-success': imagetext!= '', 'uk-form-danger': imagetext == ''}" v-on:change="changeHandler(imagetext,'imgtext')"><br/> -->
                                    <h6  v-if="imagetext!= '' || (imagetext_flag == true)" style="margin-bottom:0px;margin-top:0px;" class="uk-text-meta">Image Text</h6>
                               
                                     <input id="custom-input" class="uk-form-medium uk-input uk-margin-remove uk-width-1-3 uk-form-width-large uk-form-width-medium" style="width: 373px;"  name="imagetext" type="text" v-model="imagetext" v-on:change="changeHandler(imagetext,'imagetext')"><br/>  
                                    <span id="imgtexterror" style="color: red; font-weight: bolder;"></span>
                                </article> 
                                <br>
                <!-- <hr class="uk-margin-small"><br> -->
                                <article>
                    <!-- Article Content -->
                    
                                    <span id="articleerror" style="color: red; font-weight: bolder;"></span>
                                   
                                    <wysiwyg v-model='contents' v-on:change="changeHandler(contents,'article')"/>
                   
                                    <!-- <hr> -->
                                </article>
                                <p class="uk-text-right">
                                    <button @click.prevent="post" class="uk-button uk-text-capitalize" type="submit" id="addarticleb">Submit Your Article</button>
                <!-- <a class="uk-button uk-button-default" type="submit" href="" id="addarticleb">Add Article</a> -->
                                </p>
                            </div>
                        </div>
                    </form> <!-- Form end -->
                </div>
            </div>
        </div>
    </div>
</template>

<script>
import Multiselect from 'vue-multiselect'
export default {
    data() {
        //key: []
      
           
        return {
            base_url: 'http://103.214.233.141:3636/images/uploads/articles/',
            articles: {},
            edit: [],
            id: this.$route.params.id,
            msg: '',
            name: [],
            mainheading: '',
            author: '',
            categories: '',
            image: '',
            subheading: '',
            useremail: '',
            interviewee: '',
            folder: '',
            place: '',
            imagetext: '',
            // tags: '',
            // tags: {},
            tags:  [
                { name: '',code: ''}
            ],
            // tags1: '', 
            contents: '',
            selectedFile: '',
            fullcategories: [],
            mainheading_flag: true,
            author_flag: true,
            email_flag: true,
            location_flag: true,
            subheading_flag: true,
            imagetext_flag: true,
            school_flag: true,
            flag: false,
            article:{
                mainheading: "",
                imgtext: "",
                author: "",
                place: "",
                date: "",
                image: "",
                subheading: "",
                useremail: "",
                dbetype: "normal",
                cid:'',
                article: ""
            },
            value: [
                { name: '', code: '' }
            ],
            options: [
                { name: 'Sports', code: '5bc9ab9b721cc3c8934e1661' },
                { name: 'School', code: '5bc9aba1721cc3c8934e1662' },
                { name: 'Social', code: '5bc9aba6721cc3c8934e1663' },
                { name: 'Politics', code: '5bc9abac721cc3c8934e1664' }
            ],
            //blog: {}
        }
    },
    mounted(){
        this.editarticle();
        this.getcategories();
        //console.log(this.categories);
    },
    components: {
        Multiselect
    },
    created(){
         var timestamp = localStorage.getItem('timestamp'),
        time_now  = (new Date()).getTime();
                            
        if ((time_now - timestamp) > 1000 * 60 * 60 * 24) {

            localStorage.clear();

            localStorage.setItem('timestamp', time_now);
        }
        var token = localStorage.getItem('key');
        if(!token) {
            this.$router.replace({ name: "admin" });
        }      
    },
    methods:{
        changeHandler: function(data,keyvalue) {
           
            this.edit.push(keyvalue,data);
           
            //console.log(this.edit);
            
       

     },
         addTag (newTag) {
        const tag = {
            name: newTag,
            code: newTag.substring(0, 2) + Math.floor((Math.random() * 10000000))
        }
        this.options.push(tag)
        this.value.push(tag)
    },
         getcategories () {
             var self = this;
             axios.get('http://103.214.233.141:3636/v1/super/categories',{
             })
            .then(function(response){
                //console.log(response.data);
                self.fullcategories = response.data;
             })
            .catch(function (error) {
                //console.log('An Error occured',  error);
            }); 
        },
     
        onFileSelected(event){
            var self = this;
            ////console.log(event);
            self.selectedFile = event.target.files[0];
        },
        onUpload(){
            var self = this;
            const fd = new FormData();
            fd.append('article',self.selectedFile,self.selectedFile.name)
            axios.post(' http://machine.local:3000/api/v1/open/uploads/article',fd,{
        
                 headers: {'Authorization': 'Api-Key '+self.$code},
             }).then(res => {
                 //console.log(res.data.article[0].path);
                 self.article.image = res.data.article[0].path;
                  this.edit.push('image',self.article.image);
                  //console.log(this.edit);
             })
        },  
        editarticle(){
        var self = this;                    
            axios.get('http://103.214.233.141:3636/v1/super/articles/' + this.id,{
                //  headers: {'Authorization': 'Api-Key '+this.$code},
             })
            .then(function(response){
                //console.log(response.data);
                //self.articles = response.data;
                self.mainheading = response.data.mainheading;
                self.author = response.data.author;
                self.categories = response.data.categories;
                self.image = response.data.image;
                self.imagetext = response.data.imagetext;
                self.place = response.data.place;

            if(response.data.tags.length > 0){
                self.flag = true;
                //console.log(self.tags[0]);
                 for(var i = 0; i < response.data.tags.length; i++ ){
                    // self.code.push() = response.data.tags[i];
                    if(response.data.tags[i] == "5bc9ab9b721cc3c8934e1661"){
                        self.name.push("Sports") 
                    }
                    else if(response.data.tags[i] == "5bc9aba1721cc3c8934e1662"){
                        self.name.push("School") ;
                    }
                    else if(response.data.tags[i] == "5bc9aba6721cc3c8934e1663"){
                        self.name.push("Social") ;
                    }
                    else if(response.data.tags[i] == "5bc9abac721cc3c8934e1664"){
                        self.name.push("Politics") ;
                    }
                 }
                 //console.log(self.name);
            }

                // //console.log(self.tags);
                self.subheading = response.data.subheading;
                self.useremail = response.data.useremail;
                self.folder = response.data.folder;
                self.contents = response.data.contents;
                self.interviewee = response.data.interviewee;
                //console.log(self.folder); 
                ////console.log("hi");
                // for (let key in response.data){
                //     var articledate = new Date(response.data[key].date);
		        //     var options = { year: 'numeric', month: 'short', day: 'numeric', weekday: 'long' };
		        //     response.data[key].sdate = new Intl.DateTimeFormat('en-US', options).format(articledate);
                // }  
            })
            .catch(function (error) {
                //console.log('An Error occured',  error);
            });
    },
    post:function(){
            var self = this;
            this.id = self.$route.params.id;
            //console.log(this.edit);



            const fd = new FormData();
            if(self.selectedFile!= '')  { 
            fd.append('articles',self.selectedFile,self.selectedFile.name)
            axios.post('http://103.214.233.141:3636/v1/secure/uploads/articles',fd,{
        
                //  headers: {'Authorization': 'Api-Key '+self.$code},
             }).then(res => {
                 //console.log(res);
                //  //console.log(res.data.article[0].path);
                //  self.article.image = res.data.article[0].path;
                //   this.edit.push('image',self.article.image);

                self.image = res.data.articles[0].filename;
                this.edit.push('image',self.image);
                var foldername = res.data.articles[0].destination;
                var pieces = foldername.split("/");
                self.folder = pieces[pieces.length-1];
                this.edit.push('folder',self.folder);

                //  this.edit.push('tags',self.value.code);

                var jsonObj = {};
                var tagsarray = [];

                if(this.edit.length == 1){
                    for( var i=1; i<self.name.length; i++){
                        tagsarray.push(name[i]);
                    }
                }


                for( var i=1; i<self.value.length; i++){
                    tagsarray.push(self.value[i].code);
                }
                //console.log(tagsarray);
                this.edit.push('tags',tagsarray);
          
                for (var i = 0 ; i < this.edit.length; i++) {
                    jsonObj[this.edit[i]] = this.edit[i+1];
                //  //console.log(this.edit.key);
                    i++;

                }
                //console.log(jsonObj);

                             // this.user.firstName = this.$refs['first_name'].value;
                //console.log(this.edit);
            axios.put('http://103.214.233.141:3636/v1/super/articles/' + this.id, jsonObj,{
                //  headers: {'Authorization': 'Api-Key '+this.$code},
             })
            .then(function(data){
            //console.log(data);
            // self.editarticle();
            window.location.reload();
            //  alert("Article Edit Complete");
        });


                  //console.log(this.edit);
             })
         }
         else{
              var jsonObj = {};
              //console.log(self.value);
              var tagsarray = [];

                if(self.value.length == 1){
                    //console.log(self.name.length);
                    for( var i=0; i<self.name.length; i++){
                        // //console.log(self.name);
                        tagsarray.push(self.name[i]);
                    }
                }


              for( var i=1; i<self.value.length; i++){
                  tagsarray.push(self.value[i].code);
              }
              //console.log(tagsarray);
                     this.edit.push('tags',tagsarray);





                for (var i = 0 ; i < this.edit.length; i++) {
                    jsonObj[this.edit[i]] = this.edit[i+1];
                //  //console.log(this.edit.key);
                    i++;

                }
                //console.log(jsonObj);

                             // this.user.firstName = this.$refs['first_name'].value;
                //console.log(this.edit);
            axios.put('http://103.214.233.141:3636/v1/super/articles/' + this.id, jsonObj,{
                //  headers: {'Authorization': 'Api-Key '+this.$code},
             })
            .then(function(data){
            //console.log(data);
            // self.editarticle();
            window.location.reload();
          });

         }
        }
}
}
</script>
<style scoped>
#custom-input{
    padding:0px;
    border-bottom: 1px solid #e5e5e5;
    border-right: none;
    border-top: none;
    border-left: none;
}

input[type=text] {
    background: transparent;
    border: none;
    border-bottom: 1px solid #ecebe9;
     -moz-transition: all .2s ease-out;
    -ms-transition: all .2s ease-out;
    -o-transition: all .2s ease-out;
    transition: all .2s ease-out
}

input[type=email] {
    background: transparent;
    border: none;
    border-bottom: 1px solid #ecebe9;
}

input:-webkit-autofill,
input:-webkit-autofill:hover, 
input:-webkit-autofill:focus, 
input:-webkit-autofill:active  {
    box-shadow: 0 0 0 30px white inset !important;
}

input:focus { 
  border-color: #696a6c!important;
  border-width: 1px!important;
   -moz-transition: all .2s ease-out;
    -ms-transition: all .2s ease-out;
    -o-transition: all .2s ease-out;
    transition: all .2s ease-out
  
}
</style>
