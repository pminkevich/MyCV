Vue.component('exp-laboral', {

    data: function () {

        return {
            explaboral: {
                titulo: 'Experiencia Laboral',
                trabajos: [{
                    titulo: 'MERCEDES BENZ: ',
                    anio: '(2005-2018)',
                    contenido: 'Areas de Montaje, Pintura y Mantenimiento.'
                },
                {
                    titulo: 'WEBMASTER SITIOSWEBGRATIS:',
                    anio: '(2008 - 2012)',
                    contenido: 'Utilizando PHP y MSQL, Con Servidor Propio Bajo Sistema Operativo Linux, Todos los Sitios posicionados en Google.'

                },
                {
                    titulo: 'DESARROLLOS:',
                    anio: '(2020)',
                    lista: [{ ejemplo: 'Sistema de Gestión CallCenter (Desktop App + Web Api + PWA)' },
                    { ejemplo2: 'App Web Estudio de Abogadas (En Desarrollo)' },
                    { ejemplo3: 'Proyecto Colaborativo Empresa de Transporte Colombia' },
                    { ejemplo4: 'Nuevo sitio de indumov.com (En Etapa de Diseño)' }
                    ]
                }]
            }

        }
    },
    template: `<div class="whitebox">
 <h4 class="titulo">{{explaboral.titulo}} </h4>
  <h5 class="subtitulo"><strong>{{explaboral.trabajos[0].titulo}}</strong></h5>
  <i class="itemsleft">{{explaboral.trabajos[0].anio}}</i>
     <p class="itemsleft">{{explaboral.trabajos[0].contenido}}</p>

     
  <h5 class="subtitulo"><strong>{{explaboral.trabajos[1].titulo}}</strong></h5>
  <i class="itemsleft">{{explaboral.trabajos[1].anio}}</i>
     <p class="itemsleft">{{explaboral.trabajos[1].contenido}}</p>

     
  <h5 class="subtitulo"><strong>{{explaboral.trabajos[2].titulo}}</strong></h5>
  <i class="itemsleft">{{explaboral.trabajos[2].anio}}</i>
     <ul>
         <li class="itemsleft"><strong>{{explaboral.trabajos[2].lista[0].ejemplo}}</strong> 
         <br>
         <a href="https://youtu.be/UsI5Zclac50" target="_blank">Ver Video Proyecto Completo</a>
         <br>
         <a href="https://callcenter-81703.web.app/login">Link de la PWA</a>
         <br>
         <a href="https://mycallapp-6fb21.web.app/home">Link de la Web App</a>
         <br>
          <a href="https://github.com/pminkevich/Repos/tree/master/CallcenterAPI">Api en Net Core</a>
         </li>
         <li class="itemsleft"><strong>{{explaboral.trabajos[2].lista[1].ejemplo2}}</strong>
         <br>
        <a href="https://abogadas-eff0e.web.app/home">Link del Sitio</a>
         </li>
         <li class="itemsleft"><strong>{{explaboral.trabajos[2].lista[2].ejemplo3}}</strong>
         <br>
        <a href="https://proyecto-ed3ff.web.app/login">Link del Sitio</a>
         </li>
         <li class="itemsleft"><strong>{{explaboral.trabajos[2].lista[3].ejemplo4}}</strong></li>
     </ul>
     <div  class="links arrow">
    <div><router-link  class="links rightArrow" to="/Education">
        Go To Education 
      </router-link>
    </div>
</div>
</div>`

});