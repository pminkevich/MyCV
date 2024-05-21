
Vue.component('ref-profesional',{
    template:`<div class="refprof">
    <h4 class="titulo">{{refprofesional.titulo}}</h4>
    <p><i>{{refprofesional.contenido}}</i></p>
 
    </div>`,
    data: function(){

        return {refprofesional: {
            titulo:'Resumen Profesional',
            //contenido:'Comencé a desarrollar aplicaciones y sitios web hace casi 20 años, siempre fui un FreeLancer. En 2008 tuve una experiencia al encarar mi propio negocio on line a través de sitioswebgratis.com (dominio que llegaría a vender sitios a varios países de habla hispana), que luego por motivos personales y por no contar con un grupo de trabajo terminaría años más tarde. Hoy en día luego de trabajar para Mercedes Benz (empresa que me enseño mucho) vuelvo a retomar esta senda. Llevo ya dos años perfeccionándome  para poder encarar un proyecto propio o tal vez formar parte de un gran grupo de trabajo.'
            contenido: 'Durante más de dos décadas, me he dedicado al desarrollo de aplicaciones y sitios web, consolidándome como un emprendedor en el ámbito tecnológico. En el año 2008, emprendí mi propio negocio en línea a través de sitioswebgratis.com, un dominio que posteriormente se convertiría en la plataforma para la venta de sitios web a diversos países de habla hispana. Mi trayectoria incluye una enriquecedora experiencia laboral en Mercedes Benz, donde adquirí conocimientos fundamentales.A lo largo de mi carrera, he desarrollado aplicaciones para diversas áreas, abarcando desde el ámbito hospitalario hasta call centers y el sector del transporte.Estas experiencias han contribuido significativamente a mi crecimiento profesional y a la ampliación de mis habilidades en el campo del desarrollo tecnológico.'
        }}
    }
    
    })