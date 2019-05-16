import adduserarticle from './components/adduserarticle.vue';
import services from './components/services.vue';
import singlearticle from './components/singlearticle.vue';
import singleevent from './components/singleevent.vue';
import editorspick from './components/editorspick.vue';
import ourevents from './components/ourevents.vue';
import upcoming from './components/upcoming.vue';
import gallery from './components/gallery.vue';
import about from './components/about.vue';
import adminlogin from './components/adminlogin.vue';
import dashboard from './components/dashboard.vue';
import addadminarticle from './components/addadminarticle.vue';
import addevent from './components/addevent.vue';
import pagenotfound from './components/pagenotfound.vue';
import editarticle from './components/editarticle.vue';
import singlecategory from './components/singlecategory.vue';
import editevent from './components/editevent.vue';
import home from './components/home.vue';


export default[
  {
    path: '/',
    name: "home",
    component: home,
    meta: {
      title: 'Home Page - Daybreak',
      metaTags: [{
          name: 'description',
          content: 'The home page of Daybreak.'
        },
        {
          property: 'og:description',
          content: 'The home page of our Daybreak.'
        }
      ]
    }
  },
  {path: '', component: home},
  {path: '/home', component: home},
  {path: '/adduserarticle', component:adduserarticle},
  {path: '/services',component: services},
  {path: '/article/:heading/:id', component: singlearticle},
  {path: '/article/:id', name: "editarticle", component: editarticle},
  {path: '/event/:heading/:id', component: singleevent},
  {path: '/event/:id', name: "editevent", component: editevent},

  {path: '/:category/:id', component: singlecategory},
  {path: '/editorspick',component: editorspick},

  {path: '/ourevents', component: ourevents},
  {path: '/upcoming', component: upcoming},

  {path: '/gallery', component: gallery},
  {
    path: '/about',
    component: about,
    meta: {
      title: 'About Page - Daybreak',
      metaTags: [{
          name: 'description',
          content: 'The about page of our Daybreak.'
        },
        {
          property: 'og:description',
          content: 'The about page of our Daybreak.'
        }
      ]
    },
  },
  {path: '/admin', name: "admin", component: adminlogin},
  {path: '/dashboard', name: "dashboard", component: dashboard},
  {path: '/addadminarticle', name: "addadminarticle",component: addadminarticle},
  {path: '/addevent', name: "addevent", component: addevent},
  {path: '*', component:pagenotfound}
]

