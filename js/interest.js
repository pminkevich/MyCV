Vue.component('interest',{
    template:'<div class="refprof">'+
    '<h4 class="titulo">{{interest.titulo}}</h4>'+
    '<p>{{interest.intro}}</p>'+
    ''+
    '<p>{{interest.content}}</p>'+
    ''+
    '<div style="text-align: right;"><p><strong><i>{{interest.frase}}</i></strong></p>'+
    '<p style="font-size: 14px;"><i>{{interest.jonk}}</i></p></div>'+
    '</div>',
    data: function(){

        return {interest: {
            titulo:'Intereses y Hobbies',
            intro:'La Musica es una actividad en mi vida muy importante y que por algunos años realice de manera casi profesional quedando un poco de lado este ultimo tiempo.',
            content:'Otra Actividad que realizo y me agrada es la de enseñar y la encuentro otra manera de hacer util el conocimiento que fui adquiriendo estos años.',
            frase:'Pero Sin Lugar a Duda lo que mas disfruto es Ser Padre!',
            jonk:'Tambien El Humor y el Camel Case'

        }}
    }
    
    })