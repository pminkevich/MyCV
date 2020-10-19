
Vue.component('timeline',{

template:`<div class="timeline" >
<br>
<div  v-if="videoEnable" class="videoBox" ><div  class="closeButton btn btn-dark btn-sm float-right">x</div><div v-html="videoContent"></div></div>
   <div  v-if="windowEnable" class="windowBox" ><div v-on:click="windowClose()" class="closeButton btn btn-dark btn-sm float-right">x</div><div v-html="windowContent"></div></div>
<ul>
    <li  v-on:mouseover="windowOpen(index)" v-for="(items, index) in timeline"   class="timeitems" >
    <hr  v-if="index < 1" style="opacity: 0.0">
    <hr  v-if="index > 0" >
     <p><strong>{{items.tittle}}</strong></p> 
    </li>
    
</ul>

<br>

<br>

</div>`,
// props:{windowContent:String},
data: function(){
    return {
        windowContent:'',
        videoContent:'<p>content</p',
        videoEnable:false,
        windowEnable:false,
        timeline:[
            // {
            // tittle:'Inicio', 
            // content:'Comencé a programar en Pascal en una XT-286'
            // },
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
                tittle:'2020', 
                content:'Proyecto Callcenter <br><a href="https://youtu.be/cJgs_-9NSEA" target="_blank">Ver Video</a>'
            }
        ],
    }
},
methods:{
    windowOpen: function(index){
        this.windowEnable=true;
        this.windowContent=this.timeline[index].content;
         
        },
        windowClose: function(){
            

         
                 this.windowEnable=false;
                
             }
        // videoOpen: function(){
          
        //     this.videoEnable=true;
          
        // }
    },
   
        
        
    }
    

)