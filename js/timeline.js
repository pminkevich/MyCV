
Vue.component('timeline',{

template:'<div class="timeline" >'+
'<br>'+
   '<div  v-if="windowEnable" class="windowBox"><div class="closeButton btn btn-dark btn-sm float-right">x</div>{{windowContent}}</div>'+
'<ul >'+
    '<li v-on:mouseleave="windowClose()" v-on:mouseover="windowOpen(index)" v-for="(items, index) in timeline"   class="timeitems" >'+
    '<hr><p ><strong>{{items.tittle}}</strong></p> '+
    '</li>'+
    
'</ul>'+

'<br>'+

'<br>'+

'</div>',
data: function(){
    return {
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
}

})