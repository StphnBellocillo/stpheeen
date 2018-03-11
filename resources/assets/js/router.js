import VueRouter    from 'vue-router'

// lazy load component
const About = (resolve) => require(['./components/About/About.vue'], resolve)
const Contacts = (resolve) => require(['./components/Contacts/Contacts.vue'], resolve)
const Photography = (resolve) => require(['./components/Photography/Photography.vue'], resolve)

export default new VueRouter({
    mode: 'history',
    base: __dirname,
      routes: [
        { path: '/About', component: About },
        { path: '/Contacts', component: Contacts },
        { path: '/photography', component: Photography }
      ]
});
