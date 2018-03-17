
/**
 * First we will load all of this project's JavaScript dependencies which
 * includes Vue and other libraries. It is a great starting point when
 * building robust, powerful web applications using Vue and Laravel.
 */

require('./bootstrap');
window.linq = require('js-linq')

window.Vue = require('vue');
import VueRouter  from 'vue-router'
import VueLocalStorage from 'vue-localstorage'
import router     from './router'
import VueResource     from 'vue-resource'
import VueSweetAlert from 'vue-sweetalert'
import VueGoodTable from 'vue-good-table';
import Vue2Filters from 'vue2-filters'
import VueUpload from '@websanova/vue-upload'
import vSelect from "vue-select"
import Toasted from 'vue-toasted'
import VueTreeNavigation from 'vue-tree-navigation';
import Scrollspy from 'vue2-scrollspy';


var toastOptions = {
	position : 'top-right',
	duration : '5000',
	theme : 'outline',
	type     : 'success',
	// fullWidth : true

}

Vue.use(Toasted,toastOptions, { router })

Vue.use(Vue2Filters)
Vue.use(VueLocalStorage)
Vue.use(VueRouter)
Vue.use(VueResource)
Vue.use(VueSweetAlert)
Vue.use(VueGoodTable)
Vue.use(VueUpload)
Vue.use(vSelect)
Vue.use(VueTreeNavigation);
Vue.use(Scrollspy);


/**
 * Next, we will create a fresh Vue application instance and attach it to
 * the page. Then, you may begin adding components to this application
 * or customize the JavaScript scaffolding to fit your unique needs.
 */

const Photography = (resolve) => require(['./components/Photography/Photography.vue'], resolve)
const About = (resolve) => require(['./components/About/About.vue'], resolve)
const Contacts = (resolve) => require(['./components/Contacts/Contacts.vue'], resolve)

Vue.component('sidebar-panel',require('./components/Menu/SidebarPanel.vue'));

Vue.component('example-component', require('./components/ExampleComponent.vue'));

new Vue({

    router,
  
    components : {

        'photography' 		: 		Photography,
        'about' 		    : 		About,
        'contacts' 		    : 		Contacts,
    },

}).$mount('#app')