<template>
   <div class=" uk-padding-small" style="min-height:800px;">
      <div class="uk-card uk-card-default  uk-border-rounded uk-card-body uk-width-1-2@m uk-align-center uk-margin-large-top" >
         <h2>Admin Panel</h2>
         <form class="uk-form-stacked">
            <div class="uk-margin">
               <label class="uk-form-label" for="form-stacked-text">Username</label>
               <div class="uk-form-controls">
                  <input class="uk-input uk-width-1-1" type="text" name="username" v-model="input.username" placeholder="Enter Username">
               </div>
            </div>
            <div class="uk-margin">
               <label class="uk-form-label" for="form-stacked-text">Password</label>
               <div class="uk-form-controls">
                  <input class="uk-input uk-width-1-1" type="password" name="password" v-model="input.password" placeholder="Enter Password">
               </div>
            </div>
            <div class="uk-margin">
               <button class="uk-button"  v-on:click="login($event)" style="float:right;">Login</button>
                <span id="message"></span>
            </div>
         </form>
         <!-- <p>Powered by Ancatag</p> -->
      </div>
   </div>
   
</template>
<script>
var md5 = require('js-md5');

export default {
    name: 'adminlogin',
    data(){
        return {
            input :{
                username: "",
                password: ""
            }
        }
    },
    mounted(){
        var timestamp = localStorage.getItem('timestamp'),
                            time_now  = (new Date()).getTime();
                            
                         if ((time_now - timestamp) >  1000 * 60 * 60 * 24) {

                             localStorage.clear();

                         localStorage.setItem('timestamp', time_now);
                        }
    },
    // mounted(){
    //     var body = {
    //             "username" : "admin",
    //             "password" : "admin"
    //         } 
    //         //console.log(body);
    //         axios.post(' http://machine.local:3000/api/auth/login/spr',body).then(function(data){
    //         //console.log(data);
    //         });
    // },
    methods: {
        login(event) {
            //console.log(event);
        event.preventDefault();
               // md5(this.input.password);
                // if(this.input.username != "" && this.input.password != "") {
                //     if(this.input.username == this.$parent.mockAccount.username && this.input.password == this.$parent.mockAccount.password) {
                //         this.$emit("authenticated", true);
                //         this.$router.replace({ name: "secure" });
                //     } else {
                //         //console.log("The username and / or password is incorrect");
                //     }
                // } else {
                //     //console.log("A username and password must be present");
                // }
            var self = this;
           // decodeURIComponent( unescape(self.input.username) );
            //decodeURIComponent( unescape(self.input.password) );
            //self.input.password = md5(self.input.password);
            //console.log(self.input.username);
            //console.log(self.input.password);
            //console.log(self.input);
            // var body = {
            //     "username" : "admin",
            //     "password" : "admin"
            // } 
            // //console.log(body);
            axios.post('http://103.214.233.141:3636/auths/admins/login',self.input,{
                  headers: {'Content-Type': 'application/json'},
            }).then(function(response){
            //console.log(response);
             //if(this.input.username != "" && this.input.password != "") {
                    if(response.token!= "") {
                        //console.log(response.data.token);
                        //self.$emit("authenticated", true);
                        var object = {value: response.data.token, timestamp: new Date().getTime()};
                        localStorage.setItem("key", JSON.stringify(object));
                        
                        self.$router.replace({ name: "dashboard" });
                                           // var hours = 24; // Reset when storage is more than 24hours
                        // var now = new Date().getTime();
                        // var setupTime = localStorage.getItem('setupTime');
                        // if (setupTime == null) {
                        //     localStorage.setItem('setupTime', now)
                        // } else {
                        //     if(now-setupTime > hours*60*60*1000) {
                        //         localStorage.clear();
                        //         localStorage.setItem('setupTime', now);
                        //     }
                        // }
                 
                                                //.log(getToken());
                    // } else {
                    //     //console.log("The username and / or password is incorrect");
                    // }
                // } else {
                //     //console.log("A username and password must be present");
                 }
         })
         .catch(function (error) {
                //console.log("The username and / or password is incorrect" +error);
        });
        
        }
    }
}
</script>
<style scoped>

</style>
