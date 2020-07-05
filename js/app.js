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
        show: true,
        windowEnable:false,
        timeline:[
            {
            tittle:'Inicio', 
            content:'Comencé a programar en Pascal en una XT-286'
            },
            {
            tittle:'2000', 
            content:'Desarrolle una Aplicación para el Servicio de Ortopedia y Traumatología del Hospital Paroissiene'
            },
            {
                tittle:'2001', 
                content:'Comienzo a desarrollar sitios web con ASP'
            },
            {
                tittle:'2004', 
                content:'Apertura de Local de Computación'
            },
            {
                tittle:'2005', 
                content:'Entro a Mercedes Benz'
            },
            {
                tittle:'2008', 
                content:'Nace SitiosWebGratis'
            },
            {
                tittle:'2018', 
                content:'Nueva Etapa'
            }
        ],
        

            
       
        
      
    },
    methods:{
        turnOn: function(linea){
            if(linea=='reset'){
                this.inicio=false;
                this.dosmil=false;
                this.dosmiluno=false;
                this.dosmilcuatro=false;
                this.dosmilcinco=false;
                this.dosmilocho=false;
                this.dosmildocho=false;
            }
            else if(linea=='inicio'){
                this.inicio=true;
            }
            else if(linea=='dosmil'){
                this.dosmil=true;
            }
           else if(linea=='dosmiluno'){
                this.dosmiluno=true;
            }
            else if(linea=='dosmilcuatro'){
                this.dosmilcuatro=true;
            }
            else if(linea=='dosmilcinco'){
                this.dosmilcinco=true;
            }
            else if(linea=='dosmilocho'){
                this.dosmilocho=true;
            }
            else if(linea=='dosmildocho'){
                this.dosmildocho=true;
            }
        },
        windowOpen: function(index){
            this.windowEnable=true;
            this.windowContent=this.timeline[index].content;
            
            
        },
        windowClose: function(){
            this.windowEnable=false;
           
        }
    }
    
  }).$mount('#app');