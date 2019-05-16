<template>
    <div class="section uk-padding-small">
        <div class="articlebg uk-container uk-margin-large-bottom">
            <div class="uk-flex uk-flex-left uk-grid-small" uk-grid>
                <div class="uk-width-1-1@m"> <!-- Form beginning -->
                    <form class="uk-form"> 
                        <div class="uk-width-1-1@m uk-margin-top">
                            <div id="draftsavetime" class="draftsave uk-hidden" data-uk-sticky></div>
                            <div class="uk-padding-small uk-padding-remove-horizontal uk-padding-remove-bottom">
                                <button class="uk-button uk-align-right uk-margin-remove uk-text-capitalize" tabindex="-1" type="reset" value="Reset" >Delete Draft</button>                              
                                <span id="ciderror" style="color: red; font-weight: bolder;"></span>
                         
                <!-- EventName -->
                                 <h6 v-if="name!= '' || (name_flag == true)" style="margin-bottom:0px" class="uk-text-meta">Event Name</h6>
                                
                                <input id="custom-input" class="uk-form-medium uk-input uk-width-1-1 uk-form-width-large " type="text"  v-model="name"  v-on:change="changeHandler(name,'name')"><br/>
                                <span id="mainheadingerror" style="color: red; font-weight: bolder;"></span><br/>
                             
                <!-- Date -->                
                                <!-- <div uk-grid>

                                    <div class="uk-width-1-4">
                                        <label>Start Date : </label>
                                        <input class="uk-form-medium uk-input uk-article-meta uk-margin-remove uk-form-width-large uk-padding-remove-horizontal uk-form-blank uk-form-width-medium idk" name="date" id="date" type="text" data-uk-datepicker="{format:'DD.MM.YYYY'}" placeholder="Date" v-model="event.eventdatetime" v-on:change="changeHandler(event.eventdatetime,'eventdatetime')">
                                        <span id="dateerror" style="color: red; font-weight: bolder;"></span>
                                    </div>
                                     <div class="uk-width-1-4">
                                        <label>End Date : </label>
                                        <input class="uk-form-medium uk-input uk-article-meta uk-margin-remove uk-form-width-large uk-padding-remove-horizontal uk-form-blank uk-form-width-medium idk" name="date" id="date" type="text" data-uk-datepicker="{format:'DD.MM.YYYY'}" placeholder="Date" v-model="event.eventenddatetime"  v-on:change="changeHandler(event.eventenddatetime,'eventenddatetime')">
                                        <span id="dateerror" style="color: red; font-weight: bolder;"></span>
                                    </div>
                                </div> -->
                                <h6 v-if="place!= '' || (place_flag == true)" style="margin-bottom:0px;margin-top:0px" class="uk-text-meta">Location</h6>
                                
                                <input id="custom-input" class="uk-form-medium uk-input uk-margin-remove uk-width-1-3 uk-form-width-large uk-form-width-medium" name="place"  type="text"  v-model="place" v-on:change="changeHandler(place,'place')"><br/>
                                <span id="placeerror" style="color: red; font-weight: bolder;"></span>
                                <br/>
                <!-- Subheading -->
                                <!-- <input class='article uk-input uk-form-width-large uk-padding-remove-horizontal  uk-form-width-medium uk-width-1-1' id='subheading' name='subheading' type='text' placeholder='Subheading' onfocus="this.placeholder=''" onblur="this.placeholder='Subheading'" v-model="article.subheading"><br> -->
                                <!-- <hr class="uk-margin-small"> -->
                               
                                <article>
                                    <img class='uk-align-center' :src="base_url+folder+'/'+image" alt="article" />
                                             <p class='uk-text-lead uk-text-center' style='font-size: 0.9rem;'>{{ imagetext }}</p>
                                    <!-- <div >
                                       <input type="file"  @change="onFileSelected">
                                        <button type = "button"  @click="onUpload">Upload</button>
                                    </div> -->
                                    <!-- <br> -->
                                
                                          <div class="uk-margin-large-top">
                                 
                                        <div class="uk-margin" uk-margin>
                                            <div uk-form-custom>
                                                <input type="file" @change="onFileSelected">
                                                <button v-if="selectedFile.name ==undefined" class="uk-button uk-button-default uk-text-capitalize " type="button" tabindex="-1">Change Picture</button>
                                                <button v-if="selectedFile.name !=undefined" class="uk-button uk-button-default uk-text-capitalize " type="button" tabindex="-1">Change Picture</button>
                                                <label class="uk-text-muted">{{ selectedFile.name }}</label>
                                            </div>
                                        </div>
                                          </div>
                        
                                    <h6 v-if="imagetext!= '' || (imagetext_flag == true)" style="margin-bottom:0px;margin-top:0px" class="uk-text-meta">Image Text</h6>
                                    <!-- <input class="uk-form-small uk-input uk-margin-remove uk-width-1-2 uk-padding-remove-horizontal uk-form-blank uk-form-width-medium" name="imgtext" id="imgtext" type="text" placeholder="Image Text" v-model="imagetext"><br/> -->
                                    <input id="custom-input" class="uk-form-medium uk-input uk-margin-remove uk-width-1-3 uk-form-width-large uk-form-width-medium" style="width: 373px;"  name="imagetext" type="text" v-model="imagetext" v-on:change="changeHandler(imagetext,'imagetext')"><br/>  
                                   
                                    <span id="imgtexterror" style="color: red; font-weight: bolder;"></span> 
                                </article>
                                <br>
                <!-- <hr class="uk-margin-small"><br> -->
                                <article>
                    <!-- Article Content -->
                    <!-- <div id="summernote"> -->
                                    <span id="articleerror" style="color: red; font-weight: bolder;"></span>
                                   
                                    <wysiwyg v-model='details' v-on:change="changeHandler(details,'details')"/>
                  
                                </article>
                                <p class="uk-text-right">
                                    <button @click.prevent="post" class="uk-button uk-text-capitalize" type="submit" >Add Event</button>
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
        edit: []
        return {
            base_url: 'http://103.214.233.141:3636/images/uploads/events/',
            events: [],
            selectedFile: '',
            edit: [],
            id: this.$route.params.id,
            msg: '',
            name: '',
            tags: '',
            details: '',
            folder: '',
            image: '',
            imagetext: '',
            pick: '',
            place: '',
            tags: '',
            type: '',
            name_flag: '',
            place_flag: '',
            imagetext_flag: '',
            event:{
                eventname: "",
                eventdatetime: "",
                eventenddatetime: "",
                eventplace: "",
                eventdetails: "",
                image: ""
            },
        }
    },
    mounted(){
        this.editarticle();
    },
    methods :{
         changeHandler: function(data,keyvalue) {
           
            this.edit.push(keyvalue,data);
           
            //console.log(this.edit);
            
       

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
        post:function(){
        //     var self = this;
        //     this.id = self.$route.params.id;
        //      //console.log(this.edit);
        //     var jsonObj = {};
        //     for (var i = 0 ; i < this.edit.length; i++) {
        //         jsonObj[this.edit[i]] = this.edit[i+1];

        //         i++;

        //     }
        //     //console.log(jsonObj);
        //     axios.put(' http://machine.local:3000/api/v1/secure/event/'+ this.id, jsonObj,{
        //          headers: {'Authorization': 'Api-Key '+this.$code},
        //      })
        //     .then(function(data){
        //     //console.log(data);
        //     alert("Article submitted");
        // });
                    var self = this;
            this.id = self.$route.params.id;
            //console.log(this.edit);



             const fd = new FormData();
        if(self.selectedFile!= '')  { 
            fd.append('events',self.selectedFile,self.selectedFile.name)
            axios.post('http://103.214.233.141:3636/v1/secure/uploads/events',fd,{
        
                //  headers: {'Authorization': 'Api-Key '+self.$code},
             }).then(res => {
                 //console.log(res);
                   self.image = res.data.events[0].filename;
                   this.edit.push('image',self.image);
                 var foldername = res.data.events[0].destination;
                 var pieces = foldername.split("/");
                 self.folder = pieces[pieces.length-1];
                 this.edit.push('folder',self.folder);

                var jsonObj = {};
                for (var i = 0 ; i < this.edit.length; i++) {
                    jsonObj[this.edit[i]] = this.edit[i+1];
                //  //console.log(this.edit.key);
                    i++;

                }
                //console.log(jsonObj);
                //console.log(this.edit);
            axios.put('http://103.214.233.141:3636/v1/super/events/' + this.id, jsonObj,{
             })
            .then(function(data){
            //console.log(data);
            self.editarticle();
            // alert("Article submitted");
        });


                  //console.log(this.edit);
             })
        }
        else{
             var jsonObj = {};
                for (var i = 0 ; i < this.edit.length; i++) {
                    jsonObj[this.edit[i]] = this.edit[i+1];
                //  //console.log(this.edit.key);
                    i++;

                }
                //console.log(jsonObj);
                //console.log(this.edit);
            axios.put('http://103.214.233.141:3636/v1/super/events/' + this.id, jsonObj,{
             })
            .then(function(data){
            //console.log(data);
            self.editarticle();
        
            });
        }

        },
            
    editarticle(){
       var self = this;                    
            axios.get('http://103.214.233.141:3636/v1/super/events/' + this.id,{
                //  headers: {'Authorization': 'Api-Key '+this.$code},
             })
            .then(function(response){
                //console.log(response.data);
                self.name = response.data.name;
                self.tags = response.data.tags;
                self.image = response.data.image;
                   self.imagetext = response.data.imagetext;
                self.pick = response.data.pick;
                self.type = response.data.type;
                self.place = response.data.place;
                self.folder = response.data.folder;
                self.details = response.data.details;
            })
            .catch(function (error) {
                //console.log('An Error occured',  error);
            });
    }
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
