const refProf={template:'<ref-profesional></ref-profesional>'}
const skills={template:'<skills></skills>'}
const expLaboral={template:'<exp-laboral></exp-laboral>'}
const education={template:'<education></education>'}
const foto={template:'<foto-name></foto-name><br>'}
const interest={template:'<interest></interest>'}



const router=new VueRouter({
base:'MyCV',
routes:[
    {
        path:'/',
        component:refProf
    },
    {
        path:'/Skills',
        component:skills
    },
    {
        path:'/Experience',
        component:expLaboral
    },
    {
        path:'/Education',
        component:education
    },
    {
        path:'/Educacion',
        component:education
    },
    {
        path:'/Interest',
        component:interest
    }

]
});

var app = new Vue({
    el: '#app',
    router,
    props:{windowContent:String},
    data: {
        sobre:false,
        clase:'skillsdown',
        show: true
         }
    
  }).$mount('#app');