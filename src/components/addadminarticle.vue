<template>
    <div class="section uk-padding-small">
        <div class="articlebg uk-container ">
            <div class="uk-flex uk-flex-left uk-grid-small" uk-grid>
                <div class="uk-width-1-1@m uk-margin-top"> <!-- Form beginning -->
                    <form id="articleform" class="uk-form"> 
                        <div class="uk-width-1-1@m">
                            <div id="draftsavetime" class="draftsave uk-hidden" data-uk-sticky></div>
                            <div class="uk-padding-small uk-padding-remove-horizontal uk-padding-remove-bottom">
                                <button class="uk-button uk-align-right uk-margin-remove uk-text-capitalize" type="reset" value="Reset" tabindex="-1">Delete Draft</button>
                                    <div class="uk-form-select" data-uk-form-select>
                                        <select id="bd" class="uk-select uk-text-capitalize bd uk-width-1-6@m"  v-model="newarticle.categories">
                                            <option disabled value="">Select Category</option> 
                                            <option v-for="categorylist in categories" :key="categorylist.id" :value="categorylist._id">{{ categorylist.name }}</option>
                                        </select>                                  
                                        <br>
                                        <br>
                                        <select v-model="newarticle.dbetype" class=" uk-margin-bottom uk-select uk-text-capitalize bd uk-width-1-6@m"> 
                                            <option  disabled value="">Select Event Type</option>
                                            <option value="normal">Normal</option>
                                            <option value="daybreak">DayBreak</option>
                                        </select>
                                        <!-- <multiselect v-model="value" :options="options" :multiple="true" :close-on-select="false" :clear-on-select="false" :preserve-search="true" placeholder="Pick some" label="name" track-by="name" :preselect-first="true">
    <template slot="selection" slot-scope="{ values, search, isOpen }"><span class="multiselect__single" v-if="values.length &amp;&amp; !isOpen">{{ values.length }} options selected</span></template>
  </multiselect> -->
                                        <multiselect style="width:25%" v-model="tags" tag-placeholder="Add this as new tag" placeholder="Search or add a tag" label="name" track-by="code" :options="options" :multiple="true" :taggable="true" @tag="addTag"></multiselect>
                                       
                                        <div class="uk-margin uk-grid-small uk-child-width-auto uk-grid">
                                            <label>Editor's Pick 💡</label>
                                            <label><input v-model="newarticle.pick"  class="uk-radio" type="radio" name="radio2" value="true"> Yes</label>
                                            <label><input v-model="newarticle.pick" class="uk-radio" type="radio" name="radio2"  value="false" checked> No</label>
                                        </div>
                                    </div>
                                    <span id="ciderror" style="color: red; font-weight: bolder;"></span>
                              
                <!-- Mainheading -->
                                   <h6 v-if="newarticle.mainheading!= '' || (mainheading_flag == true)" style="margin-bottom:0px;margin-top:0px;" class="uk-text-meta">Article Title</h6>
                                    <input class="autowidth uk-form-medium uk-input uk-padding-remove-horizontal uk-width-1-1 uk-form-blank uk-form-width-large"  @focus="mainheading_flag = true"  @blur="mainheading_flag = false"  id="mainheading" type="text" placeholder="Article Title" onfocus="this.placeholder=''" onblur="this.placeholder='Article Title'" v-model="newarticle.mainheading"><br/>
                                    <span id="mainheadingerror" style="color: red; font-weight: bolder;"></span><br/>
                                    <div uk-grid>
                <!-- Author -->
                                        <div class="uk-width-1-3">                                        
                                            <h6  v-if="newarticle.author!= '' || (author_flag == true)" style="margin-bottom:0px;margin-top:0px;" class="uk-text-meta">Author</h6>
                                
                                            <input class="uk-form-medium  uk-input uk-margin-remove uk-form-width-large uk-padding-remove-horizontal uk-form-blank uk-form-width-medium" @focus="author_flag = true"  @blur="author_flag = false"  id="author" type="text" placeholder="Author" onfocus="this.placeholder=''" onblur="this.placeholder='Author'" v-model="newarticle.author"><br/>
                                            <span id="authorerror" style="color: red; font-weight: bolder;"></span><br>
                <!-- User Email -->
                                             <h6  v-if="newarticle.useremail!= '' || (email_flag == true)" style="margin-bottom:0px;margin-top:0px;" class="uk-text-meta">Email</h6>
                                
                                        <input class="uk-form-medium uk-input  uk-margin-remove uk-form-width-large uk-padding-remove-horizontal uk-form-blank uk-form-width-medium" @focus="email_flag = true"  @blur="email_flag = false"  id="useremail" type="email" placeholder="Email" onfocus="this.placeholder=''" onblur="this.placeholder='Email'" v-model="newarticle.useremail"><br/>
                                        <span id="useremailerror" style="color: red; font-weight: bolder;"></span><br>
                                        </div>
                <!-- Date -->
                                        <!-- <div class="uk-width-1-4">
                                            <label>Date : </label>
                                            <input class="uk-form-medium uk-input uk-article-meta uk-margin-remove uk-form-width-large uk-padding-remove-horizontal uk-form-blank uk-form-width-medium idk" name="date" id="date" type="date" data-uk-datepicker="{format:'DD.MM.YYYY'}" placeholder="Date" v-model="newarticle.date">
                                            <span id="dateerror" style="color: red; font-weight: bolder;"></span>
                                        </div> -->
                                    </div>
                                    <div v-if="newarticle.categories == '5bbb44de450a9b398b1ca678' || newarticle.categories == '5bbb44de450a9b398b1ca679'">                               
                                         <h6  v-if="newarticle.interviewee!= '' || (school_flag == true)" style="margin-bottom:0px;margin-top:0px;" class="uk-text-meta">School Name</h6>
                                
                                <input  class='uk-form-medium uk-input  uk-margin-remove uk-width-1-3 uk-form-width-large uk-padding-remove-horizontal uk-form-blank uk-form-width-medium'  @focus="school_flag = true"  @blur="school_flag = false" id='schoolname' type='text' placeholder='School Name' onfocus="this.placeholder=''" onblur="this.placeholder='School Name'" v-model="newarticle.interviewee"><br/>  
                               
                <!-- Place-->           <br/>
                                </div>
                                <h6  v-if="newarticle.place!= '' || (location_flag == true)" style="margin-bottom:0px;margin-top:0px;" class="uk-text-meta">Location</h6>
                                
                                <input class="uk-form-medium uk-input  uk-margin-remove uk-width-1-3 uk-form-width-large uk-padding-remove-horizontal uk-form-blank uk-form-width-medium"  @focus="location_flag = true"  @blur="location_flag = false" id="place" type="text" placeholder="Location" onfocus="this.placeholder=''" onblur="this.placeholder='Location'" v-model="newarticle.place"><br/>
                                <span id="placeerror" style="color: red; font-weight: bolder;"></span>
                                <br/>
                <!-- Subheading -->
                                <h6  v-if="newarticle.subheading!= '' || (subheading_flag == true)" style="margin-bottom:0px;margin-top:0px;" class="uk-text-meta">Subheading</h6>
                                <input class='article uk-input uk-form-width-large uk-padding-remove-horizontal  uk-form-width-medium uk-width-1-1' id='subheading' @focus="subheading_flag = true"  @blur="subheading_flag = false" type='text' placeholder='Subheading' onfocus="this.placeholder=''" onblur="this.placeholder='Subheading'" v-model="newarticle.subheading"><br>
                                <!-- <hr class="uk-margin-small"> -->
                                <span id="subheadingerror" style="color: red; font-weight: bolder;"></span>
                                <br>
                                <article>
                                    <!-- <div >
                                        <input type="file"  @change="onFileSelected">
                                    </div>
                                    <br> -->
                                    <div class="uk-margin" uk-margin>
                                        <div uk-form-custom>
                                            <input type="file" @change="onFileSelected">
                                            <button v-if="selectedFile.name ==undefined" class="uk-button uk-button-default uk-text-capitalize " type="button" tabindex="-1">Select Picture</button>
                                            <button v-if="selectedFile.name !=undefined" class="uk-button uk-button-default uk-text-capitalize " type="button" tabindex="-1">Change Picture</button>
                                            <label class="uk-text-muted">{{ selectedFile.name }}</label>
                                        </div>
                                    </div>
                <!--Image Text -->
                                    <h6  v-if="newarticle.imagetext!= '' || (imagetext_flag == true)" style="margin-bottom:0px;margin-top:0px;" class="uk-text-meta">Image Text</h6>
                               
                                    <input class="uk-form-medium uk-input uk-margin-remove uk-width-1-3 uk-form-width-large uk-padding-remove-horizontal uk-form-blank uk-form-width-medium" @focus="imagetext_flag = true"  @blur="imagetext_flag = false" id="imgtext" type="text" placeholder="Image Text" onfocus="this.placeholder=''" onblur="this.placeholder='Image Text'" v-model="newarticle.imagetext"><br/>
                                    <span id="imgtexterror" style="color: red; font-weight: bolder;"></span>
                                </article>
                                <br>
                <!-- <hr class="uk-margin-small"><br> -->
                                <article>
                    <!-- newarticle Content -->
                    <!-- <div id="summernote"> -->
                                    <span id="newarticleerror" style="color: red; font-weight: bolder;"></span>
                                   
                                    <wysiwyg v-model='newarticle.contents' />
                    <!-- </div> -->
                    <!-- <div id="summernote"><p>Enter newarticle</p></div> -->
                                    <!-- <hr> -->
                                </article>
                                <p class="uk-text-right">
                                    <label v-if="error == true">Did you forget to upload image?</label>
                                    <button @click.prevent="post" class="uk-button uk-text-capitalize" type="submit" id="addarticleb">Submit Your article</button>
                <!-- <a class="uk-button uk-button-default" type="submit" href="" id="addnearticleb">Add newarticle</a> -->
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
        return {
            msg: '',
            cid: '',
            categories: [],
            seccategories: [],
            thirdcategories : [],
            selectedFile: '',
            error: false,
            fulltags: '',
            tags: '',
            tags1: [],
            mainheading_flag: false,
            author_flag: false,
            email_flag: false,
            location_flag: false,
            subheading_flag: false,
            imagetext_flag: false,
            school_flag: false,
            newarticle:{
                    mainheading: "",
                    imagetext: "",
                    author: "",
                    place: "",
                // date: "",
                    subheading: "",
                    useremail: "",
                    dbetype: "",
                // cid:'',
                    contents: "",
                    interviewee: '',
                    pick: '',
                    tags: [],
                    status: true,
                    folder: '',
                    categories: '',
                    image: ''

            },
                   value: [
                    // { name: '', code: 'js' }
                ],
                options: [
                    { name: 'Sports', code: '5bc9ab9b721cc3c8934e1661' },
                    { name: 'School', code: '5bc9aba1721cc3c8934e1662' },
                    { name: 'Social', code: '5bc9aba6721cc3c8934e1663' },
                    { name: 'Politics', code: '5bc9abac721cc3c8934e1664' }
                ],
        }
    },
    components: {
        hideModules: { "image": true } ,
        Multiselect
    },
    mounted(){
        this.getcategories();
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
    methods: {
    addTag (newTag) {
        const tag = {
            name: newTag,
            code: newTag.substring(0, 2) + Math.floor((Math.random() * 10000000))
        }
        this.options.push(tag)
        this.value.push(tag)
    },
        
        onFileSelected(event){
            var self = this;
            ////console.log(event);
            self.selectedFile = event.target.files[0];
            //console.log(self.selectedFile);
        },
        onUpload(){
            var self = this;
            var fd = new FormData();
            fd.append('articles',self.selectedFile,self.selectedFile.name)
            //console.log(fd);
            axios.post('http://103.214.233.141:3636/v1/secure/uploads/articles',fd,{
        
                //  headers: {'Authorization': 'Api-Key '+self.$code},
             }).then(res => {
                 console.log(res.data);
                 self.newarticle.image = res.data.articles[0].filename;
                 var foldername = res.data.articles[0].destination;
                 var pieces = foldername.split("/");
                 self.newarticle.folder = pieces[pieces.length-1];
             })
        },  
        post: function(){
            var self = this;
            if(self.selectedFile != ''){       
            var fd = new FormData();
            fd.append('articles',self.selectedFile,self.selectedFile.name)
            console.log(fd);
            axios.post('http://103.214.233.141:3636/v1/secure/uploads/articles',fd,{
        
                //  headers: {'Authorization': 'Api-Key '+self.$code},
             }).then(res => {
                 console.log(res.data);
                 self.newarticle.image = res.data.articles[0].filename;
                 var foldername = res.data.articles[0].destination;
                 var pieces = foldername.split("/");
                 self.newarticle.folder = pieces[pieces.length-1];
                 for( var i = 0;i<self.tags.length; i++){
                    self.tags1.push(self.tags[i].code);
                 }
                  self.newarticle.tags = self.tags1;
                 console.log(self.tags1);
                     console.log(self.newarticle);  
                     
                     if(self.newarticle.image != '' && self.newarticle.folder != ''){        
                        axios.post('http://103.214.233.141:3636/v1/secure/articles',self.newarticle,{
                        }).then(function(response){
                              self.$router.replace({ name: "dashboard" });
                        console.log(response.data);

                    });
                    }
                    else{
                        self.error = true;
                    }
             })
            }
                  else{
                        self.error = true;
                    }
    },
    getcategories () {
             var self = this;
             axios.get('http://103.214.233.141:3636/v1/super/categories',{
             })
            .then(function(response){
                //console.log(response.data);
                self.categories = response.data;
             })
            .catch(function (error) {
                //console.log('An Error occured',  error);
            }); 
        },
        gettags() {
              var self = this;
             axios.get('http://103.214.233.141:3636/v1/secure/tags',{
             })
            .then(function(response){
                //console.log(response.data);
                self.fulltags = response.data;
             })
            .catch(function (error) {
                //console.log('An Error occured',  error);
            }); 
        }
    }
}
</script>
<style scoped>
input[type=text] {
    background: transparent;
    border: none;
    border-bottom: 1px solid #ecebe9;
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
    border-color: #696a6c;
    border-width: 1px;
    -moz-transition: all .2s ease-out;
    -ms-transition: all .2s ease-out;
    -o-transition: all .2s ease-out;
    transition: all .2s ease-out
  
}

</style>
