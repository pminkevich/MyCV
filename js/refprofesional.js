
Vue.component('ref-profesional',{
    template:`<div class="refprof">
    <h4 class="titulo">{{refprofesional.titulo}}</h4>
    <p><i>{{refprofesional.contenido}}</i></p>
 
    </div>`,
    data: function(){

        return {refprofesional: {
            titulo:'Resumen Profesional',
            contenido:'Comencé a desarrollar aplicaciones y sitios web hace casi 20 años, siempre fui un FreeLancer. En 2008 tuve una experiencia al encarar mi propio negocio on line a través de sitioswebgratis.com (dominio que llegaría a vender sitios a varios países de habla hispana), que luego por motivos personales y por no contar con un grupo de trabajo terminaría años más tarde. Hoy en día luego de trabajar para Mercedes Benz (empresa que me enseño mucho) vuelvo a retomar esta senda. Llevo ya dos años perfeccionándome  para poder encarar un proyecto propio o tal vez formar parte de un gran grupo de trabajo.'

        }}
    }
    
    })