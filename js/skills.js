Vue.component('skills',{
data:function(){
    return {
        skills:{
            titulo:'Skills',
            contenido:'Tengo  experiencia en el desarrollo de aplicaciones de escritorio con VB, VB .NET y C# , Apis Utilizando ASP .NET MVC y Node. Para el frontend Suelo utilizar HTML,CSS, JavaScript, Vue y Angular. ',
            continuacion:'En lo que respecta a Base de Datos he trabajado por muchos años con SQL SERVER y MySQL. Hoy cuento con experiencia trabajando con Base de datos no relacionales como MongoDB y Firebase',
            soy:'Soy muy organizado a la hora de encarar un proyecto utilizando las tecnologías y herramientas que son las adecuadas para una determinada tarea.',
            fin:'A la hora de Comenzar un Desarrollo tengo presente las buenas prácticas. Abordando el problema teniendo en cuenta paradigmas, principios y patrones adecuados. '
        }

    }
},    
template:`<div class="skills"><div class="skillsdown">
<h4 class="titulo">{{skills.titulo}}</h4>
<p class="items">{{skills.contenido}}</p>
<div class="iconos-skills">
   <div><img src="./asset/net.png"></div>
    <div><img src="./asset/node.png"></div>
    <div><img src="./asset/angular.png"></div>
    <div><img src="./asset/ionic.png"></div>

</div>
<p class="items">{{skills.continuacion}}</p>
<div class="iconos-skills">
      <div><img src="./asset/sqlserver.png"></div>
       <div><img src="./asset/mongo.png"></div>
       <div> <img src="./asset/firebase.png"></div>
</div>
<p class="items">{{skills.soy}}</p>
<div class="iconos-skills">
   '<img src="./asset/gitskills.png">
</div>
<p class="items">{{skills.fin}}</p>
<div  class="links arrow">
    <div><router-link  class="links rightArrow" to="/Experience">
        Go To Work Exp...  

       </router-link>
    </div>
</div>
</div></div>`

});