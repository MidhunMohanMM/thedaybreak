<template>
    <div class="section uk-padding-small">
        <div class="articlebg uk-container uk-margin-bottom">
            <div class="uk-flex uk-flex-left uk-grid-small" uk-grid>
                <div class="uk-width-1-1@m uk-margin-top"> <!-- Form beginning -->
                    <form class="uk-form"> 
                        <div class="uk-width-1-1@m">
                            <div id="draftsavetime" class="draftsave uk-hidden" data-uk-sticky></div>
                            <div class="uk-padding-small uk-padding-remove-horizontal uk-padding-remove-bottom">
                                <button class="uk-button uk-align-right uk-text-capitalize" type="reset" value="Reset" tabindex="-1" >Delete Draft</button>                              
                                <br>
                                <br>
                <!-- EventName -->
                                <h6 v-if="event.name!= '' || (name_flag == true)" style="margin-bottom:0px;margin-top:0px;" class="uk-text-meta">Event Name</h6>
                                <input class="autowidth uk-form-medium uk-input uk-padding-remove-horizontal uk-width-1-1 uk-form-blank uk-form-width-large"  @focus="name_flag = true"  @blur="name_flag = false"  id="eventname" type="text" placeholder="Event Name" onfocus="this.placeholder=''" onblur="this.placeholder='Event Name'" v-model="event.name"><br/>
                                

                                <!-- <input class="autowidth uk-form-medium uk-input uk-padding-remove-horizontal uk-width-1-1 uk-form-width-large"  name="mainheading" id="mainheading" type="text" placeholder="Article Title" onfocus="this.placeholder=''" onblur="this.placeholder='Event Name'" v-model="event.name"><br/> -->
                                <span id="mainheadingerror" style="color: red; font-weight: bolder;"></span><br/>
                                <div uk-grid>
                
                <!-- Date -->
                                    <div class="uk-width-1-4">
                                        <h5 class="uk-text-muted">Start Date : </h5>
                                        <input style="border-color: rgb(246, 246, 246);" class=" uk-form-small uk-input uk-article-meta  uk-form-width-large uk-padding-remove-horizontal uk-form-blank uk-form-width-medium idk" name="eventdatetime" id="eventdatetime" type="datetime-local" data-uk-datepicker="{format:'DD.MM.YYYY'}" placeholder="Enter Event Date and Time" >
                                           
                                            <span id="sdateerror" style="color: red; font-weight: bolder;"></span><br>
                     
                                    </div>
                                     <!-- <div class="uk-width-1-4">
                                        <label>End Date : </label>
                                        <input class="uk-form-small uk-input uk-article-meta uk-margin-remove uk-form-width-large uk-padding-remove-horizontal uk-form-blank uk-form-width-medium idk" name="eventenddatetime" id="eventenddatetime" type="datetime-local" data-uk-datepicker="{format:'DD.MM.YYYY'}" placeholder="Enter Event End Date and Time" v-model="event.eventenddatetime">
                                        <span id="dateerror" style="color: red; font-weight: bolder;"></span>
                                    </div> -->
                                </div>
                               <br>
                                 <h6  v-if="event.place!= '' || (location_flag == true)" style="margin-bottom:0px;margin-top:0px;" class="uk-text-meta">Location</h6>
                                
                                <input class="uk-form-medium uk-input  uk-margin-remove uk-width-1-3 uk-form-width-large uk-padding-remove-horizontal uk-form-blank uk-form-width-medium"  @focus="location_flag = true"  @blur="location_flag = false" id="place" type="text" placeholder="Location" onfocus="this.placeholder=''" onblur="this.placeholder='Location'" v-model="event.place"><br/>
                                
                                <!-- <input class="uk-form-medium uk-input uk-article-meta uk-margin-remove uk-width-1-3 uk-form-width-large uk-padding-remove-horizontal uk-form-width-medium" name="place" id="place" type="text" placeholder="Location" onfocus="this.placeholder=''" onblur="this.placeholder='Location'" v-model="event.place"><br/> -->
                                <span id="placeerror" style="color: red; font-weight: bolder;"></span>
                                <br/>
                <!-- Subheading -->
                               
                                <article>

                                    <div class="uk-margin" uk-margin>
                                         <div uk-form-custom>
                                        <input type="file" @change="onFileSelected">
                                        <button v-if="selectedFile.name ==undefined" class="uk-button uk-button-default uk-text-capitalize" type="button" tabindex="-1">Select Picture</button>
                                        <button v-if="selectedFile.name !=undefined" class="uk-button uk-button-default uk-text-capitalize" type="button" tabindex="-1">Change Picture</button>
                                        <label class="uk-text-muted">{{ selectedFile.name }}</label>
                                    </div>
                                    </div>


                                    <br>
                                    <!-- <br><br>
                
                                    <input class="uk-form-small uk-input uk-margin-remove uk-width-1-2 uk-padding-remove-horizontal uk-form-blank uk-form-width-medium" name="imgtext" id="imgtext" type="text" placeholder="Image Text" v-mode="article.imgtext"><br/>
                                    <span id="imgtexterror" style="color: red; font-weight: bolder;"></span> -->
                                </article>
                                <br>
                <!-- <hr class="uk-margin-small"><br> -->
                                <article>
                    <!-- Article Content -->
                    <!-- <div id="summernote"> -->
                                    <span id="articleerror" style="color: red; font-weight: bolder;"></span>
                                   
                                    <wysiwyg v-model='event.details' />
                  
                                </article>
                                <p class="uk-text-right">
                                    <label v-if="error == true">Did you forget to upload image?</label>
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
        return {
            msg: '',
            error: '',
            base_url: 'http://103.214.233.141:3636/images/uploads/events/',
            events: {},
            name_flag: false,
            location_flag: false,
            selectedFile: '',
            event:{
                    name: "",
                // eventdatetime: "",
                // eventenddatetime: "",
                    place: "",
                    details: "",
                    type: "upcoming",
                // estatus: "1",
                    image: "",
                    status: true,
                    tags: [],
                    pick: false,
                    folder: ''
            },
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
    components: {
        hideModules: { "image": true },
    },
    methods: {
           onFileSelected(event){
            var self = this;
            ////console.log(event);
            self.selectedFile = event.target.files[0]
        },
        onUpload(){
            var self = this;
            const fd = new FormData();
            fd.append('event',self.selectedFile,self.selectedFile.name)
            axios.post(' http://machine.local:3000/api/v1/secure/uploads/event',fd,{
                //  onUploadProgress: uploadEvent => {
                //      //console.log('Upload Progress: ' + Math.round(uploadEvent.loaded / uploadEvent.total * 100 ) + '%')
                //  }, 
                // headers: {'Authorization': 'Api-Key '+self.$code},
           // timeout:1000,
             }).then(res => {
                 //console.log(res.data.event[0].path);
                 self.event.image = res.data.event[0].path;
                 //imagepath = res.data.path;
                 ////console.log("hi"); 
             })


        },
        post: function(){
        //     var self = this;
        //     //console.log(self.event);
        //     axios.post(' http://machine.local:3000/api/v1/secure/event',self.event,{
        //          headers: {'Authorization': 'Api-Key '+this.$code},
        //      }).then(function(data){
        //     //console.log(data);
        // });
         var self = this;
            if(self.selectedFile != ''){       
            var fd = new FormData();
            fd.append('events',self.selectedFile,self.selectedFile.name)
            //console.log(fd);
            axios.post('http://103.214.233.141:3636/v1/secure/uploads/events',fd,{
        
                //  headers: {'Authorization': 'Api-Key '+self.$code},
             }).then(res => {
                 //console.log(res.data);
                 self.event.image = res.data.events[0].filename;
                 var foldername = res.data.events[0].destination;
                 var pieces = foldername.split("/");
                 self.event.folder = pieces[pieces.length-1];
                     //console.log(self.event);  
                     
                     if(self.event.image != '' && self.event.folder != ''){        
                        axios.post('http://103.214.233.141:3636/v1/secure/events',self.event,{
                        }).then(function(response){
                            this.$router.replace({ name: "dashboard" });
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
