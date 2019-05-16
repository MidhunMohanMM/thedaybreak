<template>
<main id="mainevent">
	   <div class="section ">
      <div class="uk-container">
    
        <h2 class='uk-heading-line uk-text-center uk-padding-top uk-margin-top'>
            <span class='pageheadd'>Upcoming Events ⛳</span>
        </h2>
        <div uk-grid>
            <!-- <div class="uk-width-1-1@m"> -->
                <div v-for="event in events" :key="event.id"  class="uk-width-1-3@m  grid-small uk-grid-match uk-height-match " uk-grid >
                    <div class='uk-card uk-card-default uk-card-hover' style="padding-right: 40px;padding-top: 40px;padding-bottom: 25px;">
                        <a class='uk-link-reset' href=''>
                            <router-link v-bind:to="'/event/' +event.event_name+'/'+event._id">
                            <div class=' uk-card-media-top'>
                                <img :src="base_url+event.folder+'/'+event.image">
                            </div>
                            <div class='uk-card-body uk-card-small'>
                                <h3 class='uk-card-title'>{{ event.name }}</h3>
                                <p class='uk-text-meta uk-margin-remove'>
                                    <!-- <a href="" uk-icon="clock" style="padding-right:5px;"></a>{{ event.sdate }}  -->
                                </p>
                                <div style="padding:5px;"></div>
                                <p class='uk-text-meta uk-margin-remove '>
                                    <a href="" uk-icon="location"  style="padding-right:5px;"></a>{{ event.place }}  
                                </p>
                            </div>
                            </router-link>
                        </a>
                    </div>
                </div>
            <!-- </div> -->
        </div>
    </div>   
    </div>
	</main>
</template>
<script>
export default {
    data() {
        return {
            events: [],
            base_url: 'http://103.214.233.141:3636/images/uploads/events/'
        }
    },
    mounted() {
        this.getevents();
    },
    methods: {
        getevents(){
            var self = this;
             axios.get('http://103.214.233.141:3636/v1/secure/events/',{
                //  headers: {'Authorization': 'Api-Key '+this.$code},
           // timeout:1000,
             })
            .then(function(response){
                
                //console.log(response.data);
                 for (let key in response.data){

                    // var eventdate = new Date(response.data[key].eventdatetime);
		            // var options = { year: 'numeric', month: 'short', day: 'numeric', weekday: 'long' };
                    // response.data[key].sdate = new Intl.DateTimeFormat('en-US', options).format(eventdate);
                    response.data[key].event_name = response.data[key].name.replace(/ /g, '_');
                }  
                self.events = response.data;
            })
            .catch(function (error) {
                //console.log('An Error occured',  error);
            }); 
        }
    }
}
</script>
<style scoped>
.grid-small{
        margin-left: 0px;
    margin-top: 15px;
}
</style>
