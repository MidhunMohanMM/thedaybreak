<template>
    <div>
    <body>
        <nav class="uk-navbar-container uk-navbar-transparent" uk-navbar>
            <div class="uk-navbar-right">
                <div class="uk-container">
                    <ul class="uk-subnav uk-subnav-divider" uk-margin>
                        <li>
                            <a href="#">Admin</a>
                            <div data-uk-dropdown class="admindropdown">
                                <ul class="uk-nav uk-dropdown-nav uk-text-center">
                                    <li><a href="#" onclick="alert('Coming Soon!');">Edit Profile</a></li>
                                    <li><a href="#"  @click="logout">Logout</a></li>
                                </ul>
                            </div>
                        </li>
                        <li>
                            <a href=""  @click="home">Visit Website
                                
                            </a>
                        </li>
                    </ul>
                </div>
            </div>
        </nav>
        <div class="uk-padding">
            <ul  class="uk-child-width-expand" uk-tab>
         
            <li class='uk-active' id='homesection'><a href='#'>Articles</a></li>
             <li id='eventsection'><a href='#'>Events</a></li>
            <li id='categorysection'><a href='#'>Category</a></li>
            <li id='categorysection'><a href='#'>Advertisements</a></li>
           
            </ul>
            <ul class="uk-switcher uk-margin">
            <li>
                <div class="uk-container uk-overflow-auto">
                    <div uk-grid>
                        <div class="uk-width-1-2@m">
                            <h3>List of Articles</h3>
                        </div>
                        <div class="uk-width-1-2@m">
                            <p uk-margin>
                                <button onclick="window.location.href='" class="uk-button uk-button-default uk-float-right" type="button" id="button">Add Photo</button>
                                
                                <button onclick="location.href='http://103.214.233.141:3630/addadminarticle'" class="uk-button uk-button-default uk-float-right" type="button"  id="button">Add Article</button>
                             
                            </p>    
                        </div>
                    </div>
                    <br>
                    <form class="uk-form-stacked cattoart">
                        <div class="uk-margin">
                           <div class="uk-form-controls">
                           <form id="catform2" >
                              <select id="bds" class="uk-select uk-text-capitalize bd" name="cid" v-model="cid" v-on:change="sortBy">
                                 <option value="" selected >All Categories</option> 
                                 
                                     <option v-for="categorylist in categories" :key="categorylist.id" :value="categorylist._id" >{{ categorylist.name }}</option>
                                 
                              </select>
                           </form>
                           </div>
                        </div>
                     
                    </form>
                    <table class="uk-table uk-table-justify uk-table-middle uk-table-divider">
                    <thead>
                        <tr>
                           <th class="uk-width-small">Sl No.</th>
                           <th class="uk-width-large">Article Name</th>
                           <th class="uk-width-small">Category</th>
                            <th class="uk-width-small">Tags</th>
                            <th class="uk-width-small" >Editor's Pick</th>
                            <th class="uk-width-small">Status</th>
                           <th class="uk-width-small" style="padding-left: 30px;">Actions</th>
                     
                        </tr>
                     </thead>
                     <tbody id="articletable" v-for="(article,index) in articles" :key="article.id"  >
                        <tr>
                            <td>{{ index+1 }}</td>
                            <td><a class='uk-link-reset' href=''>
                                 <router-link v-bind:to="'/article/' +article.article_name+'/'+article._id">
                                 {{ article.mainheading }}
                                 </router-link></a>
                            </td>
                            <td class='uk-text-capitalize'> {{ article.category && article.category.name }}</td>
                            <td >
                                <p v-if="article.tag.length == 0" class='uk-text-capitalize' > ----</p>
                                <p style="font-size:16px;" class='uk-text-capitalize' v-for="tag in article.tag" :key="tag.id"> {{ tag }}</p></td>
                            <!-- <td>
                                <div class="uk-form-select uk-margin-bottom" data-uk-form-select>
                                    <select v-model="article.category.name" id="bd" class="uk-select uk-text-capitalize bd "  >
                                        <option disabled value="">Select Category</option> 
                                        <option v-for="categorylist in categories" :key="categorylist.id" :value="categorylist._id">{{ categorylist.name }}</option>
                                    </select>   
                                </div>
                            </td> -->
                                <td>       
                                    <label class="switch-custom">
                                        <input v-if="article.pick == true" type="checkbox" @click="pickfalse(article._id)" checked>
                                        <input v-if="article.pick == false" type="checkbox" @click="picktrue(article._id)" >
                                        <span class="slider-custom round"></span>
                                    </label>
                                </td>
                                <td>       
                                    <label class="switch-custom">
                                        <input v-if="article.status == true" type="checkbox" @click="statusarticlefalse(article._id)" checked>
                                        <input v-if="article.status == false" type="checkbox" @click="statusarticletrue(article._id)" >
                                        <span class="slider-custom round"></span>
                                    </label>
                                </td>
                            <td>
                             
                                <div class='uk-button-group'>
                                    
                                    <a href=''>
                                        <router-link v-bind:to="'/article/'+article._id"><button class='uk-button uk-button-default' type='button' id='button'>Edit</button></router-link></a>
                                
                                </div>
                                
                            </td>
                                    
                        </tr>
                    </tbody>
                    </table>
                </div>
            </li>
            <li>
               <div class="uk-container uk-overflow-auto">
               <div uk-grid>
                          <div class="uk-width-1-2@m" >
                              <h3>List of Events</h3>
                          </div>
                          <div class="uk-width-1-2@m">
                                  <p uk-margin>
                                    
                                     <button onclick="location.href='http://103.214.233.141:3630/addevent'" class="uk-button uk-button-default uk-float-right" type="button" id="button">Add Event</button>
                                  </p>
                          </div>
                        <!-- </div> -->
                      </div>
                      <table class="uk-table uk-table-justify uk-table-middle uk-table-divider">
                     <thead>
                        <tr>
                           <th class="uk-width-small">Sl No.</th>
                           <th class="uk-width-small">Event Name</th>
                           <th class="uk-width-small">Event Place</th>
                           <th class="uk-width-small">Status</th>
                           <th class="uk-width-small" style="padding-left: 30px;">Actions</th>
                        </tr>
                     </thead>
                     <tbody id="eventtable" v-for="(event,index) in events" :key="event.id" >
                         <tr>
                           <td>{{ index+1 }}</td>
                           <td><a class='uk-link-reset' href=''>
                               <router-link v-bind:to="'/event/' +event.event_name+'/'+event._id">{{ event.name }}
                               </router-link></a></td>
                           <td class='uk-text-capitalize'>{{ event.place }}</td>
                                  <td>       
                                    <label class="switch-custom">
                                        <input v-if="event.status == true" type="checkbox" @click="statuseventfalse(event._id)" checked>
                                        <input v-if="event.status == false" type="checkbox" @click="statuseventtrue(event._id)" >
                                        <span class="slider-custom round"></span>
                                    </label>
                                </td>
                           <td>
                              <div class='uk-button-group'> 
                                 <a href=''>
                                     <router-link v-bind:to="'/event/'+event._id">
                                     <button class='uk-button uk-button-default' type='button' id='button'>Edit</button>
                                     </router-link>
                                     </a>
                              </div>
                           </td>
             
                        </tr>
                         </tbody>
                  </table>
               </div>
            </li>
         
      
            <li>
                <!-- <p>bla</p> -->
               <div class="uk-container uk-overflow-auto">
               
                        <div uk-grid>
                          <div class="uk-width-1-3@m" >
                              <h3>List of Categories</h3>
                          </div>
                          <div class="uk-width-2-3@m">
                                  <p uk-margin>
                                   
                                    <!-- <button class="uk-button uk-button-default uk-float-right" type="button" uk-toggle="target: #rcategory" id = "button">Remove Category</button>             -->
                                    <button class="uk-button uk-button-default uk-float-right" type="button" uk-toggle="target: #ecategory" id = "button">Edit Category Name </button>
                                    <button class="uk-button uk-button-default uk-float-right" type="button" uk-toggle="target: #acategory" id = "button">Add Category</button>                                      
                                  </p>
                          </div>
                   
                      </div>
                  <table class="uk-table uk-table-justify uk-table-middle uk-width-2-3 uk-table-divider" >
                     <thead>
                        <tr class="uk-table-middle">
                           <th class="uk-width-small uk-text-center">Sl No.</th>
                           <th class="uk-text-center">Category Name</th>
                           <th></th>
                        </tr>
                     </thead>
                    <tbody id="categorytable"  v-for="(categorylist,index) in categories" :key="categorylist.id" >
                        <tr >
                           <td class='uk-text-center'>{{ index +1 }}</td>
                           <td class='uk-text-capitalize uk-text-center'>{{categorylist.name}}</td>
                           <td>
                              <!-- <div class='uk-button-group'>
                              </div> -->
                              <label class="switch">
                                <input v-if="categorylist.status == true" type="checkbox"  @click="statusfalse(categorylist._id)" checked>
                                <input v-if="categorylist.status == false" type="checkbox"  @click="statustrue(categorylist._id)">
                                <span class="slider round"></span>
                                </label>
                           </td>
                        </tr>
                     </tbody>
                  </table>
               </div>       
            </li>
            <li>
                <!-- <p>bla</p> -->
               <div class="uk-container uk-overflow-auto">
               
                        <div uk-grid>
                          <div class="uk-width-1-3@m" >
                              <h3>List of Advertisements</h3>
                          </div>
                          <div class="uk-width-2-3@m">
                                  <p uk-margin>
                                   
                                    <button class="uk-button uk-button-default uk-float-right" type="button" uk-toggle="target: #rcategory" id = "button">Remove Advertisement</button>            
                                    <!-- <button class="uk-button uk-button-default uk-float-right" type="button" uk-toggle="target: #ecategory" id = "button">Edit Category Name </button> -->
                                    <button class="uk-button uk-button-default uk-float-right" type="button" uk-toggle="target: #acategory" id = "button">Add Advertisement</button>                                      
                                  </p>
                          </div>
                   
                      </div>

                  <table class="uk-table uk-table-justify uk-table-middle uk-table-divider">

                    <thead>
                        <tr>
                           <th class="uk-width-small">Sl No.</th>
                           <th>Ad Name</th>
                           <th class="uk-width-medium">Ad Details</th>
                           <th class="uk-width-medium" style="padding-left: 27px;">Actions</th>
                        </tr>
                     </thead>
                     <tbody id="articletable" v-for="(article,index) in articles" :key="article.id"  >

                        
                        <tr>
    
                            <td>{{ index+1 }}</td>
                            <td><a class='uk-link-reset' href=''>
                                 <router-link v-bind:to="'/article/' +article.article_name+'/'+article.aid">
                                 {{ article.mainheading }}
                                 </router-link></a></td>
                            <td class='uk-text-capitalize'> {{ article.category }}</td>
                            <td>
                             
                                <div class='uk-button-group'>
                                    
                                    <a href=''>
                                        <router-link v-bind:to="'/article/'+article.aid"><button class='uk-button uk-button-default' type='button' id='button'>Edit</button></router-link></a>
                                
                                </div>
                                
                            </td>
                        </tr>
                    </tbody>
               
                    </table>
           
               </div>       
            </li>
            </ul>  
        </div>
    </body>
     <div id="acategory" uk-modal>
         <div class="uk-modal-dialog">
            <div class="uk-modal-header">
               <h2 class="uk-modal-title uk-text-center">Category name</h2>
            </div>
            <div class="uk-modal-body">
               <div class="uk-margin">
                  <label class="uk-form-label" for="form-stacked-text">Category Name</label>
                  <div class="uk-form-controls">
                  <form id="catu">
                    <input class="uk-input uk-margin-bottom" placeholder="Enter Category name" id="category1" name="category" type="text"  v-model="newcategory.name">
                   
                  </form>
                  </div>
               </div>
            </div>
             <div class="uk-modal-footer">
               <p class="uk-text-right">
                  <button class="uk-button uk-button-default uk-modal-close" id="addcatmodalclose" type="button">Cancel</button>
                  <button @click.prevent="addcat" class="uk-button uk-button-primary uk-modal-close" type="submit" id="addcatart" >Add Category</button>
               </p>
            </div>
         </div>
      </div>
    <div id="ecategory" uk-modal>
        <div class="uk-modal-dialog">
            <div class="uk-modal-header">
               <h2 class="uk-modal-title uk-text-center">Edit Category</h2>
            </div>
            <div class="uk-modal-body">
                <div class="uk-grid-divider uk-child-width-expand@s" uk-grid>
                    <div class="uk-margin">
                        <label class="uk-form-label" for="form-stacked-text">Select Category</label>
                        <div class="uk-form-controls">
                            <form id="cate">
                                <select id="new" class="uk-select uk-text-capitalize bd" name="cid" v-model="catid">
                                    <option value="" disabled selected>Select Category</option> 
                                    <option v-for="categorylist in categories" :key="categorylist.id" :value="categorylist._id">{{ categorylist.name }}</option>
                                </select>   
                            </form>              
                        </div>
                    </div>
                </div>
                <hr>
                <div class="uk-grid-divider uk-child-width-expand@s" uk-grid>
                    <div class="uk-margin">
                        <label class="uk-form-label" for="form-stacked-text">New Category Name</label>
                        <div class="uk-form-controls">
                            <input class="uk-input" placeholder="Enter new category name" id="category1" v-model="newname" name="category" type="text">
                        </div>
                    </div>
                </div>
                <div class="uk-modal-footer">
                    <p class="uk-text-right">
                        <button class="uk-button uk-button-default uk-modal-close" id="addcatmodalclose" type="button">Cancel</button>
                        <button @click.prevent="editcat()" class="uk-button uk-button-primary uk-modal-close" type="submit" id="editcat">Edit Category</button>
                    </p>
                </div>
            </div>
        </div>
    </div>
    <div id="rcategory" uk-modal>
        <div class="uk-modal-dialog">
            <div class="uk-modal-header">
                <h2 class="uk-modal-title uk-text-center">Remove Category</h2>
            </div>
            <div class="uk-modal-body">
                <div class="uk-grid-divider uk-child-width-expand@s" uk-grid>
                    <div class="uk-margin">
                        <label class="uk-form-label" for="form-stacked-text">Select Category</label>
                        <div class="uk-form-controls">
                            <form id="catr">
                                <select id="bd" class="uk-select uk-text-capitalize bd" name="cid"  v-model="catid">
                                    <option value="" disabled selected>Select Category</option> 
                                    <option v-for="categorylist in categories" :key="categorylist.id" :value="categorylist.catid" >{{ categorylist.category }}</option>
                                 </select>     
                            </form>
                        </div>
                    </div>
                </div>
                <div class="uk-modal-footer">
                    <p class="uk-text-right">
                        <button class="uk-button uk-button-default uk-modal-close" id="addcatmodalclose" type="button">Cancel</button>
                        <button  @click.prevent="remcat" class="uk-button uk-button-primary" type="button" id="removecat">Remove Category</button>
                    </p>
                </div>
            </div>
        </div>
    </div>
    </div>
</template>
<script>
export default {
    data(){
        return{
            articles: [],
            id: this.$route.params.id,
            events: [],
            catid:'',
            cid: '',
            categories: {},
            seccategories: [],
            thirdcategories : [],
            category_name : [],
            name: "",
            mainheading: "",
            newname : "",
            newcategory:{
                status: true,
                name: '',
                type: 'news',
                color: ''
            },
            removecategory:{
                category: '',
                cstatus: 0,
                ctype: '',
                color: ''

            },
            category_update: {
                
            }
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
            //alert("Please login again to continue :)");
        }
        
    },
    methods: {
         sortBy: function() {
            //console.log(this.cid);

            var self = this;
            ////console.log(self.$route.params.id);
            this.id = self.$route.params.id;
            if(this.cid == ''){
                     axios.get('http://103.214.233.141:3636/v1/secure/articles/',{
               
                    })
                    .then(function(response){
                        self.articles = response.data;
                        for (let key in response.data){
                            ////console.log('TCL: getarticles -> response.data', response.data);
                            ////console.log(response.data)
                            response.data[key].article_name = response.data[key].mainheading.replace(/ /g, '_');
                            response.data[key].article_name = response.data[key].article_name.replace(/%/g, "percent");
                            response.data[key].category = response.data[key].categories;
                        }  
                    })
                    .catch(function (error) {
                        //console.log('An Error occured',  error);
                    }); 
            }
            else{
                axios.get('http://103.214.233.141:3636/v1/secure/articles?categories[_id]=' + this.cid,{
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
                            response.data[key].category = response.data[key].categories;
                    }  
                })
                .catch(function (error) {
                    //console.log('An Error occured',  error);
                }); 
            }
    },
          statusfalse: function(cid){
            var self = this;         
            axios.put('http://103.214.233.141:3636/v1/super/categories/' + cid,{status: false},{
             }).then(function(data){
                //console.log(data);
        });
        },

        statustrue: function(cid){
            var self = this;
            axios.put('http://103.214.233.141:3636/v1/super/categories/' + cid,{status: true},{
             }).then(function(data){
                //console.log(data);
        });
        },

        pickfalse: function(aid){
            var self = this;         
            axios.put('http://103.214.233.141:3636/v1/super/articles/' + aid,{pick: false},{
             }).then(function(data){
                //console.log(data);
        });
        },

        picktrue: function(aid){
            var self = this;
            axios.put('http://103.214.233.141:3636/v1/super/articles/' + aid,{pick: true},{
             }).then(function(data){
                //console.log(data);
        });
        },

        statusarticlefalse: function(aid){
            var self = this;         
            axios.put('http://103.214.233.141:3636/v1/super/articles/' + aid,{status: false},{
             }).then(function(data){
                //console.log(data);
        });
        },

        statusarticletrue: function(aid){
            var self = this;
            axios.put('http://103.214.233.141:3636/v1/super/articles/' + aid,{status: true},{
             }).then(function(data){
                //console.log(data);
        });
        },

         statuseventfalse: function(aid){
            var self = this;         
            axios.put('http://103.214.233.141:3636/v1/super/events/' + aid,{status: false},{
             }).then(function(data){
                //console.log(data);
        });
        },

        statuseventtrue: function(aid){
            var self = this;
            axios.put('http://103.214.233.141:3636/v1/super/events/' + aid,{status: true},{
             }).then(function(data){
                //console.log(data);
        });
        },



         editcat: function(){
            var self = this;
        axios.put('http://103.214.233.141:3636/v1/super/categories/' + self.catid,{name: self.newname},{
             }).then(function(response){
            //console.log(response.data);
            self.getcategories();
        });
        },

        addcat: function(){
            var self = this;
            self.newcategory.color = "#"+((1<<24)*Math.random()|0).toString(16);
            //console.log(self.newcategory);
           
                  
            axios.post('http://103.214.233.141:3636/v1/super/categories',self.newcategory,{
             }).then(function(response){
            //console.log(response.data);
            self.getcategories();
        });
        },
        getarticles () {
             var self = this;
           
            
            //  this.code='code';
             axios.get('http://103.214.233.141:3636/v1/secure/articles/',{
             })
            .then(function(response){
                console.log(response.data);
                     var blogsArray = [];
                for (let key in response.data){
                     response.data[key].tag = [];
                     response.data[key].article_name = response.data[key].mainheading.replace(/ /g, '_');
                      response.data[key].article_name = response.data[key].article_name.replace(/%/g, "percent");
                     response.data[key].category = response.data[key].categories;
                     for(let tagkey in response.data[key].tags)
                     response.data[key].tag.push(response.data[key].tags[tagkey].name);
                     blogsArray.push(response.data[key]);
                }

                self.articles = blogsArray; 
               //console.log(self.articles); 

            })
            .catch(function (error) {
                console.log('An Error occured',  error);
            }); 
        },
        getevents () {
             var self = this;
             axios.get('http://103.214.233.141:3636/v1/secure/events',{
                //  headers: {'Authorization': 'Api-Key '+this.$code},
           // timeout:1000,
             })
            .then(function(response){
                self.events = response.data;
                //console.log(response.data);
                for (let key in response.data){
                    response.data[key].event_name = response.data[key].name.replace(/ /g, '_');

                } 
            })
            .catch(function (error) {
                //console.log('An Error occured',  error);
            }); 
        },
           getcategories () {
             var self = this;
             axios.get('http://103.214.233.141:3636/v1/secure/categories',{
                //  headers: {'Authorization': 'Api-Key '+self.$code},
           // timeout:1000,
             })
            .then(function(response){
                //console.log(response.data);
                self.categories = response.data;
        //          axios.get(' http://machine.local:3000/api/v1/open/category/status/2',{
        //          headers: {'Authorization': 'Api-Key '+self.$code},
        //    // timeout:1000,
        //      })
        //     .then(function(response){
        //         self.seccategories = response.data;
        //          axios.get(' http://machine.local:3000/api/v1/open/category/status/3',{
        //          headers: {'Authorization': 'Api-Key '+self.$code},
        //    // timeout:1000,
        //      })
        //     .then(function(response){
        //         self.thirdcategories = response.data;
                
        //         //console.log(self.categories);
        //     })
        //     .catch(function (error) {
        //         //console.log('An Error occured',  error);
        //     }); 
        //         //console.log(self.categories);
        //     })
        //     .catch(function (error) {
        //         //console.log('An Error occured',  error);
        //     }); 
        //         //console.log(self.categories);
             })
            .catch(function (error) {
                //console.log('An Error occured',  error);
            }); 
        },
        logout(){
               this.$router.replace({ name: "admin" });
        },
        home(){
               this.$router.replace({ name: "home" });
        }
    },
    mounted(){
         this.getarticles();
         this.getevents();
        this.getcategories();
    }
}
</script>
<style scoped>
.admindropdown{
    min-width: 0px!important;
    left: -20px!important;
    top: 28px;
}
#bds{
    width:300px;
}
.switch {
  position: relative;
  display: inline-block;
  width: 60px;
  height: 34px;
}

.switch-custom {
    position: relative;
    display: inline-block;
    width: 54px;
    height: 27px;
}

.switch input {display:none;}

.slider {
  position: absolute;
  cursor: pointer;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background-color: #ccc;
  -webkit-transition: .4s;
  transition: .4s;
}


.slider-custom {
  position: absolute;
  cursor: pointer;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background-color: #ccc;
  -webkit-transition: .4s;
  transition: .4s;
}


.slider:before {
  position: absolute;
  content: "";
  height: 26px;
  width: 26px;
  left: 4px;
  bottom: 4px;
  background-color: white;
  -webkit-transition: .4s;
  transition: .4s;
}

.slider-custom:before {
  position: absolute;
  content: "";
  height: 21px;
    width: 21px;
    left: 4px;
    bottom: 3px;
  background-color: white;
  -webkit-transition: .4s;
  transition: .4s;
}

  

input:checked + .slider {
      background-color: #2196F3;
}

input:focus + .slider {
  box-shadow: 0 0 1px #2196F3;
}

input:checked + .slider-custom {
      background-color: #f69525;
}

input:focus + .slider-custom {
  box-shadow: 0 0 1px #f2f2f2;
}



input:checked + .slider:before {
  -webkit-transform: translateX(26px);
  -ms-transform: translateX(26px);
  transform: translateX(26px);
}

input:checked + .slider-custom:before {
  -webkit-transform: translateX(26px);
  -ms-transform: translateX(26px);
  transform: translateX(26px);
}



/* Rounded sliders */
.slider.round {
  border-radius: 34px;
}

.slider.round:before {
  border-radius: 50%;
}


.slider-custom.round {
  border-radius: 34px;
}

.slider-custom.round:before {
  border-radius: 50%;
}
::selection{
    background:white!important;
}


</style>
