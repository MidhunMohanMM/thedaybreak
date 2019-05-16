<template>
    <div class="section uk-padding-small">
        <div class="articlebg uk-container uk-margin-bottom">
            <div class="uk-flex uk-flex-left uk-grid-small" uk-grid>
                <div class="uk-width-1-1@m uk-margin-top"> <!-- Form beginning -->
                    <form id="articleform" class="uk-form"> 
                        <div class="uk-width-1-1@m">
                            <div id="draftsavetime" class="draftsave uk-hidden" data-uk-sticky></div>
                            <div class="uk-padding-small uk-padding-remove-horizontal uk-padding-remove-bottom">
                                <button class="uk-button uk-align-right uk-margin-remove uk-text-capitalize" tabindex="-1" type="reset" value="Reset" >Delete Draft</button>
                                <!-- <div class="uk-form-select" data-uk-form-select>
                                <span></span>
                                
                                    <select v-model="article.cid">
                                        <option  disabled value="">Select Category</option>
                                        <option :value="17">Parents</option>
                                         <option :value="18">Teachers</option>
                                        <option :value="19">Students</option>        
                                    </select>                                
                                </div> -->
                                <div class="uk-form-select" data-uk-form-select>
                                    <select id="bd" class="uk-select uk-text-capitalize bd uk-width-1-6@m"  v-model="newarticle.categories">
                                        <option disabled value="">Select Category</option> 
                                        <option value="5bbb44de450a9b398b1ca678">Teachers</option>
                                        <option value="5bbb44de450a9b398b1ca679">Students</option>
                                        <option value="5bbb44de450a9b398b1ca677">Parents</option>
                                    </select>                                  
                                </div>
                                <span id="ciderror" style="color: red; font-weight: bolder;"></span>
                                <br>
                                <br>
                <!-- Mainheading -->
                                <h6 v-if="newarticle.mainheading!= '' || (mainheading_flag == true)" style="margin-bottom:0px;margin-top:0px;" class="uk-text-meta">Article Title</h6>
                                <input class="autowidth uk-form-medium uk-input uk-padding-remove-horizontal uk-width-1-1 uk-form-blank uk-form-width-large"  @focus="mainheading_flag = true"  @blur="mainheading_flag = false"  id="mainheading" type="text" placeholder="Article Title" onfocus="this.placeholder=''" onblur="this.placeholder='Article Title'" v-model="newarticle.mainheading"><br/>
                                <span id="mainheadingerror" style="color: red; font-weight: bolder;"></span><br/>
                                <div uk-grid>
                <!-- Author -->
                                    <div class="uk-width-1-3">
                                            <h6  v-if="newarticle.author!= '' || (author_flag == true)" style="margin-bottom:0px;margin-top:0px;" class="uk-text-meta">Author</h6>
                                
                                            <input class="uk-form-medium  uk-input  uk-margin-remove uk-form-width-large uk-padding-remove-horizontal uk-form-blank uk-form-width-medium" @focus="author_flag = true"  @blur="author_flag = false"  id="author" type="text" placeholder="Author" onfocus="this.placeholder=''" onblur="this.placeholder='Author'" v-model="newarticle.author"><br/>
                                                <span id="authorerror" style="color: red; font-weight: bolder;"></span><br>
                                        
                <!-- User Email -->
                                     <h6  v-if="newarticle.useremail!= '' || (email_flag == true)" style="margin-bottom:0px;margin-top:0px;" class="uk-text-meta">Email</h6>
                                
                                        <input class="uk-form-medium uk-input uk-margin-remove uk-form-width-large uk-padding-remove-horizontal uk-form-blank uk-form-width-medium" @focus="email_flag = true"  @blur="email_flag = false"  id="useremail" type="email" placeholder="Email" onfocus="this.placeholder=''" onblur="this.placeholder='Email'" v-model="newarticle.useremail"><br/>
                                        <span id="useremailerror" style="color: red; font-weight: bolder;"></span><br>
                                    </div>
                <!-- Date -->
                                    <div class="uk-width-1-4">
                                        <label>Date : </label>
                                        <input class="uk-form-medium uk-input  uk-margin-remove uk-form-width-large uk-padding-remove-horizontal uk-form-blank uk-form-width-medium idk"  id="date" type="date" data-uk-datepicker="{format:'DD.MM.YYYY'}" placeholder="Date" >
                                        <span id="dateerror" style="color: red; font-weight: bolder;"></span>
                                    </div>
                                </div>
                                <div v-if="newarticle.categories == '5bbb44de450a9b398b1ca678' || newarticle.categories == '5bbb44de450a9b398b1ca679'">
                               
                                <h6  v-if="newarticle.interviewee!= '' || (school_flag == true)" style="margin-bottom:0px;margin-top:0px;" class="uk-text-meta">School Name</h6>
                                
                                <input  class='uk-form-medium uk-input  uk-margin-remove uk-width-1-3 uk-form-width-large uk-padding-remove-horizontal uk-form-blank uk-form-width-medium'  @focus="school_flag = true"  @blur="school_flag = false" id='schoolname' type='text' placeholder='School Name' onfocus="this.placeholder=''" onblur="this.placeholder='School Name'" v-model="newarticle.interviewee"><br/>  
                               
                <!-- Place--><br/>
                                </div>
                                 <h6  v-if="newarticle.place!= '' || (location_flag == true)" style="margin-bottom:0px;margin-top:0px;" class="uk-text-meta">Location</h6>
                                
                                <input class="uk-form-medium uk-input uk-margin-remove uk-width-1-3 uk-form-width-large uk-padding-remove-horizontal uk-form-blank uk-form-width-medium"  @focus="location_flag = true"  @blur="location_flag = false" id="place" type="text" placeholder="Location" onfocus="this.placeholder=''" onblur="this.placeholder='Location'" v-model="newarticle.place"><br/>
                                <span id="placeerror" style="color: red; font-weight: bolder;"></span>
                                <br/>
                <!-- Subheading -->

                                <h6  v-if="newarticle.subheading!= '' || (subheading_flag == true)" style="margin-bottom:0px;margin-top:0px;" class="uk-text-meta">Subheading</h6>
                                <input class='article uk-input uk-form-width-large uk-padding-remove-horizontal  uk-form-width-medium uk-width-1-1' id='subheading' @focus="subheading_flag = true"  @blur="subheading_flag = false" type='text' placeholder='Subheading' onfocus="this.placeholder=''" onblur="this.placeholder='Subheading'" v-model="newarticle.subheading"><br>
                                <!-- <hr class="uk-margin-small"> -->
                                <span id="subheadingerror" style="color: red; font-weight: bolder;"></span>
                                <br>
                                <article>
                                    <div >
                                        <!-- <input type="file" id="file" name="file" />
                                        <input class="uk-button uk-text-capitalize" id="fileupload" type="button" tabindex="-1" v-model='image'/>
                                        
                                        <button @click.prevent="imagepost" class="uk-button uk-text-capitalize" id="fileupload" type="button" tabindex="-1">Upload Image</button>
                                        <span id="imageerror" style="color: red; font-weight: bolder;"></span>
                                        <span id="imagename" style="color: blue; font-weight: bolder;"></span> -->
                                         
                                             <!-- <input type="file" id="article" ref="article" v-on:change="handleFileUpload()"/>
                                        
                                        <button v-on:click="submitFile()">Submit</button> -->
                                    <div class="uk-margin" uk-margin>
                                         <div uk-form-custom>
                                        <input type="file" @change="onFileSelected">
                                        <button v-if="selectedFile.name ==undefined" class="uk-button uk-button-default uk-text-capitalize" type="button" tabindex="-1">Select Picture</button>
                                        <button v-if="selectedFile.name !=undefined" class="uk-button uk-button-default uk-text-capitalize" type="button" tabindex="-1">Change Picture</button>
                                        <label class="uk-text-muted">{{ selectedFile.name }}</label>
                                    </div>
                                    </div>
                                        <!-- <input type="file" @change="onFileSelected">
                                        <button type = "button" @click="onUpload">Upload</button> -->
                                    </div>
                                    <!-- <br><br> -->
                <!--Image Text -->
                                    <h6  v-if="newarticle.imagetext!= '' || (imagetext_flag == true)" style="margin-bottom:0px;margin-top:0px;" class="uk-text-meta">Image Text</h6>
                               
                                    <input class="uk-form-medium uk-input uk-margin-remove uk-width-1-3 uk-form-width-large uk-padding-remove-horizontal uk-form-blank uk-form-width-medium" @focus="imagetext_flag = true"  @blur="imagetext_flag = false" id="imgtext" type="text" placeholder="Image Text" onfocus="this.placeholder=''" onblur="this.placeholder='Image Text'" v-model="newarticle.imagetext"><br/>
                                    <span id="imgtexterror" style="color: red; font-weight: bolder;"></span>
                                </article>
                                <br>
                <!-- <hr class="uk-margin-small"><br> -->
                                <article>
                    <!-- Article Content -->
                    <!-- <div id="summernote"> -->
                                    <span id="articleerror" style="color: red; font-weight: bolder;"></span>
                                   
                                    <wysiwyg v-model='newarticle.contents' />
                    <!-- </div> -->
                    <!-- <div id="summernote"><p>Enter Article</p></div> -->
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
export default {
    data() {
        return {
            selectedFile: '',
            msg: '',
            mainheading_flag: false,
            author_flag: false,
            email_flag: false,
            location_flag: false,
            subheading_flag: false,
            imagetext_flag: false,
            school_flag: false,
            error: '',
            imagepath: '',
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
                pick: false,
                tags: [],
                status: false,
                folder: '',
                categories: '',
                image: ''

            },
            //article: []
        }
    },
    components: {
        hideModules: { "image": true } 
    },
    mounted(){
        //console.log(this.selectedFile.name);
    },
    methods: {
        onFileSelected(event){
            var self = this;
            ////console.log(event);
            self.selectedFile = event.target.files[0]
        },
        focus(){
            var self = this;
        },
        onUpload(){
            var self = this;
            const fd = new FormData();
            fd.append('article',self.selectedFile,self.selectedFile.name)
            axios.post(' http://machine.local:3000/api/v1/open/uploads/article',fd,{
                //  onUploadProgress: uploadEvent => {
                //      //console.log('Upload Progress: ' + Math.round(uploadEvent.loaded / uploadEvent.total * 100 ) + '%')
                //  }, 
                 headers: {'Authorization': 'Api-Key '+self.$code},
           // timeout:1000,
             }).then(res => {
                 //console.log(res.data.article[0].path);
                 self.article.image = res.data.article[0].path;
                 //imagepath = res.data.path;
                 ////console.log("hi"); 
             })


        },  
        post: function(){
            var self = this;
            if(self.selectedFile != ''){       
            var fd = new FormData();
            fd.append('articles',self.selectedFile,self.selectedFile.name)
            //console.log(fd);
            axios.post('http://103.214.233.141:3636/v1/secure/uploads/articles',fd,{
        
                //  headers: {'Authorization': 'Api-Key '+self.$code},
             }).then(res => {
                 //console.log(res.data);
                 self.newarticle.image = res.data.articles[0].filename;
                 var foldername = res.data.articles[0].destination;
                 var pieces = foldername.split("/");
                 self.newarticle.folder = pieces[pieces.length-1];
                     //console.log(self.newarticle);  
                     
                     if(self.newarticle.image != '' && self.newarticle.folder != ''){        
                        axios.post('http://103.214.233.141:3636/v1/secure/articles',self.newarticle,{
                        }).then(function(response){
                        //console.log(response.data);
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
 submitFile(){
        /*
                Initialize the form data
            */
           let files = this.$refs.article.files;
            let formData = new FormData();
            //console.log(files);
            //console.log(files[0]);
            /*
                Add the form data we need to submit
            */
            formData.append('article', files[0]);
            //console.log(formData);

        /*
          Make the request to the POST /single-file URL
        */
             axios.post(' http://machine.local:3000/api/v1/open/uploads/article',
                formData,
                {
                headers: {
                    'Content-Type': 'multipart/form-data',
                    'Authorization': 'Api-Key '+this.$code
                }
              }
            ).then(function(response){
          //console.log('SUCCESS!!');
          //console.log(response.data);
        })
        .catch(function(){
          //console.log('FAILURE!!');
        });
      },

      /*
        Handles a change on the file upload
      */
      handleFileUpload(){
        //this.file = this.$refs.article.files;
      }
    }
}
</script>
<style scoped>
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
  border-color: #696a6c;
  border-width: 1px;
   -moz-transition: all .2s ease-out;
    -ms-transition: all .2s ease-out;
    -o-transition: all .2s ease-out;
    transition: all .2s ease-out
  
}


</style>
