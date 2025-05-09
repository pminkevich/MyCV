Vue.component('education',{

data: function(){

    return {

        educacion:{
            titulo:'Educación',
            lugares:[{
                titulo:'ANALISTA DE SISTEMA:',
                contenido:'(Instituto 46)',
                detalle:'Finalizado'
            },
            {
                titulo:'PROGRAMACIÓN:',
                contenido:'(On line)',
                detalle:'Soy un apasionado del desarrollo de software con experiencia en C#, TypeScript, JavaScript, HTML, y CSS, así como en los frameworks Angular, Node.js, Nest.js y ASP.NET Core. También tengo habilidades en el manejo de bases de datos SQL Server, MongoDB y Firebase'
            },
            {
                titulo:'CARRERA CCNA:',
                contenido:'(CISCO Networking Academy)',
                detalle:'Diseño Lan, Diseño wan, programación de Router´s  y Switches CISCO'
            },
            {
              titulo:'DEVOPS:',
              contenido:'(UTN)',
              detalle:'Experiencia utilizando Docker y Kubernetes, y en la implementación de pipelines de integración y entrega continua (CI/CD).'  
            }]

            
        }
    }
    
},
template:`<div class="whitebox">
<h5 class="titulo">{{educacion.titulo}} </h5>
<h5 class="subtitulo"><strong>{{educacion.lugares[0].titulo}}</strong> {{educacion.lugares[0].contenido}} </h5>
<p class="itemsleft">{{educacion.lugares[0].detalle}}</p>


<h5 class="subtitulo"><strong>{{educacion.lugares[1].titulo}}</strong> {{educacion.lugares[1].contenido}} </h5>
<p class="itemsleft">{{educacion.lugares[1].detalle}}</p>


<h5 class="subtitulo"><strong>{{educacion.lugares[2].titulo}}</strong> {{educacion.lugares[2].contenido}} </h5>
<p class="itemsleft">{{educacion.lugares[2].detalle}}</p>


<h5 class="subtitulo"><strong>{{educacion.lugares[3].titulo}}</strong> {{educacion.lugares[3].contenido}} </h5>
<p class="itemsleft">{{educacion.lugares[3].detalle}}</p>
<div  class="links arrow">
    <div><router-link  class="links rightArrow" to="/Interest">
        Go To Interests  
       </router-link>
    </div>
</div>

</div>`

});