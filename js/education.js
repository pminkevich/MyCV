Vue.component('education',{

data: function(){

    return {

        educacion:{
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

            
        }
    }
    
},
template:'<div class="whitebox">'+
'<h5 class="titulo">{{educacion.titulo}} </h5>'+
'<h5 class="subtitulo"><strong>{{educacion.lugares[0].titulo}}</strong> {{educacion.lugares[0].contenido}} </h5>'+
'<p class="itemsleft">{{educacion.lugares[0].detalle}}</p>'+


'<h5 class="subtitulo"><strong>{{educacion.lugares[1].titulo}}</strong> {{educacion.lugares[1].contenido}} </h5>'+
'<p class="itemsleft">{{educacion.lugares[1].detalle}}</p>'+


'<h5 class="subtitulo"><strong>{{educacion.lugares[2].titulo}}</strong> {{educacion.lugares[2].contenido}} </h5>'+
'<p class="itemsleft">{{educacion.lugares[2].detalle}}</p>'+


'<h5 class="subtitulo"><strong>{{educacion.lugares[3].titulo}}</strong> {{educacion.lugares[3].contenido}} </h5>'+
'<p class="itemsleft">{{educacion.lugares[3].detalle}}</p>'+
'<div  class="links arrow">'+
    '<div><router-link  class="links rightArrow" to="/Interest">'+
        'Go To Interests  '+
       '</router-link>'+
    '</div>'+
'</div>'+

'</div>'

});