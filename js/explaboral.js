Vue.component('exp-laboral',{

 data: function(){

    return {
        explaboral:{
            titulo:'Experiencia Laboral',
            trabajos:[{
                    titulo:'MERCEDES BENZ: ',
                    anio:'(2005-2018)',
                    contenido:'Areas de Montaje, Pintura y Mantenimiento.'
                    },
                    {
                    titulo:'WEBMASTER SITIOSWEBGRATIS:',
                    anio:'(2008 - 2012)',
                    contenido:'Utilizando PHP y MSQL, Con Servidor Propio Bajo Sistema Operativo Linux, Todos los Sitios posicionados en Google.'
                
                    },
                    {
                    titulo:'DESARROLLADOR:',
                    anio:'(2000-2020)',
                    lista:[{ejemplo:'Sistema de Gestión CallCenter (Desktop App + Web Api + PWA)'},
                    {ejemplo2:'Control de Historias Clínicas (Servicio de Ortopedia Y Traumatología, Hospital Paroissien)'},
                    {ejemplo3:'Sistema Control de Stock y Venta Mostrador'}, 
                    {ejemplo4:'Sistema de Gestión Taller (Para Ler Sistemas & Servicios)'}
                    ]
                    }]
        }

    }
 },
 template:`<div class="whitebox">
 <h4 class="titulo">{{explaboral.titulo}} </h4>
  <h5 class="subtitulo"><strong>{{explaboral.trabajos[0].titulo}}</strong></h5>
  <i class="itemsleft">{{explaboral.trabajos[0].anio}}</i>
     <p class="itemsleft">{{explaboral.trabajos[0].contenido}}</p>

     
  <h5 class="subtitulo"><strong>{{explaboral.trabajos[1].titulo}}</strong></h5>
  <i class="itemsleft">{{explaboral.trabajos[1].anio}}</i>
     <p class="itemsleft">{{explaboral.trabajos[1].contenido}}</p>

     
  <h5 class="subtitulo"><strong>{{explaboral.trabajos[2].titulo}}</strong></h5>
  <i class="itemsleft">{{explaboral.trabajos[2].anio}}</i>
     <ul>'+
         <li class="itemsleft">{{explaboral.trabajos[2].lista[0].ejemplo}}</li>
         <li class="itemsleft">{{explaboral.trabajos[2].lista[1].ejemplo2}}</li>
         <li class="itemsleft">{{explaboral.trabajos[2].lista[2].ejemplo3}}</li>
         <li class="itemsleft">{{explaboral.trabajos[2].lista[3].ejemplo4}}</li>
     </ul>
     <div  class="links arrow">
    <div><router-link  class="links rightArrow" to="/Education">
        Go To Education 
      </router-link>
    </div>
</div>
</div>`

});