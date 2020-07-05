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
        inicio:false,
        dosmil:false,
        dosmiluno:false,
        dosmilcuatro:false,
        dosmilcinco:false,
        dosmilocho:false,
        dosmildocho:false,
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
        modulos: [
      
        {refprofesional: {
            titulo:'Resumen Profesional',
            contenido:'Comencé a desarrollar aplicaciones y sitios web hace casi 20 años, siempre fui un FreeLancer. En 2008 tuve una experiencia al encarar mi propio negocio on line a través de sitioswebgratis.com (dominio que llegaría a vender sitios a varios países de habla hispana), que luego por motivos personales y por no contar con un grupo de trabajo terminaría años más tarde. Hoy en día luego de trabajar para Mercedes Benz (empresa que me enseño mucho) vuelvo a retomar esta senda. Llevo ya dos años perfeccionándome  para poder encarar un proyecto propio o tal vez formar parte de un gran grupo de trabajo.'

        }},
        {skills:{
            titulo:'Skills',
            contenido:'Tengo  experiencia en el desarrollo de aplicaciones de escritorio con VB, VB .NET y C# , Apis Utilizando ASP .NET MVC y Node. Para el frontend HTML,CSS, JavaScript, Vue y Angular/IONIC. ',
            continuacion:'En lo que respecta a Base de Datos he trabajado por muchos años con SQL SERVER y MySQL y  hoy cuento con experiencia trabajando con Base de datos no relacionales como MongoDB y Firebase',
            soy:'Soy muy organizado a la hora de encarar un proyecto utilizando las tecnologías y herramientas que son las adecuadas para una determinada tarea.',
            fin:'A la hora de Comenzar un Desarrollo tengo presente las buenas prácticas. Abordando el problema teniendo en cuenta paradigmas, principios y patrones adecuados. '
        }},
        {explaboral:{
            titulo:'Experiencia Laboral',
            trabajos:[{
                    titulo:'MERCEDES BENZ: ',
                    contenido:'(2005-2018) Areas de Montaje, Pintura y Mantenimiento.'
                    },
                    {
                    titulo:'WEBMASTER SITIOSWEBGRATIS:',
                    contenido:'( 2008 - 2012) Utilizando PHP y MSQL, Con Servidor Propio Bajo Sistema Operativo Linux, Todos los Sitios posicionados en Google.'
                
                    },
                    {
                    titulo:'DESARROLLADOR:',
                    lista:[{ejemplo:'Sistema de Gestión CallCenter (Desktop App + Web Api + PWA)'},
                    {ejemplo2:'Control de Historias Clínicas (Servicio de Ortopedia Y Traumatología, Hospital Paroissien)'},
                    {ejemplo3:'Sistema Control de Stock y Venta Mostrador'}, 
                    {ejemplo4:'Sistema de Gestión Taller (Para Ler Sistemas & Servicios)'}
                    ]
                    }]
        }},
        {educacion:{
            titulo:'Educación',
            lugares:[{
                titulo:'ANALISTA DE SISTEMA:',
                contenido:'(Instituto 46)',
                detalle:'En Curso'
            },
            {
                titulo:'PROGRAMACIÓN:',
                contenido:'(Club del Programador)',
                detalle:'Programación orientada a objetos con C#. Conocimientos en SQL, MySQL y SQL Server.'
            },
            {
                titulo:'CARRERA CCNA:',
                contenido:'(CISCO Networking Academy)',
                detalle:'Diseño Lan, Diseño wan, programación de Router´s  y Switches CISCO'
            },
            {
              titulo:'PROGRAMACIÓN DE EQUIPOS TRANSCEPTORES:',
              contenido:'(HIGHRADIO)',
              detalle:'Bases y handies Motorola, Kenwood, Tait, ICOM'  
            }]

            
        }}
        
      
    ]},
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