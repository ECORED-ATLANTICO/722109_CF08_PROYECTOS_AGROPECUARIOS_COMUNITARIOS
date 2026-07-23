<template lang="pug">
.curso-main-container.pb-3
  BannerInterno
  .container.tarjeta.tarjeta--blanca.p-4.p-md-5.mb-5
    .titulo-principal.color-acento-contenido
      .titulo-principal__numero
        span 2
      h1 Herramientas para la recolección y verificación de información

    .row.mb-5.justify-content-center.align-items-center
      .col-lg-3.mb-4.mb-lg-0.col-md-8
        figure
          img(src="@/assets/curso/tema2/img01.png", data-aos="zoom-in")
      .col-lg-9
        p.mb-3(data-aos="fade-right") La gestión eficiente de los proyectos comunitarios requiere información confiable, oportuna y verificable que permita conocer el avance de las actividades, medir el cumplimiento de los objetivos y evaluar los resultados obtenidos. La calidad de las decisiones que se toman durante el seguimiento y la evaluación depende, en gran medida, de la calidad de la información recopilada.

        .bg-fondo-6.p-4.mb-0
          p.mb-0 Para obtener información útil es necesario utilizar herramientas e instrumentos que faciliten la recopilación, organización y análisis de datos provenientes de los diferentes actores involucrados en el proyecto. Estas herramientas permiten identificar fortalezas, dificultades, necesidades, niveles de satisfacción y oportunidades de mejora, contribuyendo al fortalecimiento de los procesos de gestión comunitaria.
    
    p.mb-5 Entre las herramientas más utilizadas en el seguimiento y la evaluación de proyectos comunitarios se encuentran las listas de verificación, las encuestas de satisfacción y las entrevistas. Cada una cumple una función específica y proporciona información complementaria que facilita la toma de decisiones basada en evidencias.

    .bloque-texto-g.bloque-texto-g--inverso.bg-color-10.p-3.p-sm-4.p-md-5.mb-5
      .bloque-texto-g__img(
        :style="{'background-image': `url(${require('@/assets/curso/tema2/img03.png')})`}"
      )
      .bloque-texto-g__texto.p-4
        p.mb-0 Las listas de verificación permiten comprobar el cumplimiento de actividades, requisitos o procedimientos previamente establecidos. Las encuestas de satisfacción facilitan la recopilación de opiniones y percepciones de los beneficiarios respecto a los servicios o actividades desarrolladas. Por su parte, las entrevistas permiten profundizar en aspectos cualitativos relacionados con experiencias, opiniones, necesidades y expectativas de los participantes.



    .row.align-items-center.justify-content-center.mb-5(data-aos="fade-right")
      .col-lg-auto.d-none.d-lg-flex
        img(src="@/assets/curso/tema2/img04.svg").mx-auto
      .col-lg(data-aos="fade-right")
        p.mb-0 El uso adecuado de estas herramientas fortalece los procesos de monitoreo, evaluación y mejora continua, permitiendo obtener información objetiva sobre el desempeño de los proyectos y el impacto de las acciones implementadas en las comunidades.

    separador
    
    #t_2_1.titulo-segundo.color-acento-contenido(data-aos="flip-up")
      h2 2.1 Listas de verificación (<em>checklist</em>)

    
    .row.mb-5.justify-content-center.align-items-center
      .col-lg-3.mb-4.mb-lg-0.col-md-8
        figure
          img(src="@/assets/curso/tema2/img05.png", data-aos="zoom-in")
      .col-lg-9
        p.mb-3(data-aos="fade-right") Las listas de verificación, también conocidas como <em>checklist</em>, son instrumentos de control utilizados para comprobar de manera sistemática el cumplimiento de actividades, requisitos, procedimientos, condiciones o criterios previamente definidos.
        p.mb-0 Consisten en un conjunto ordenado de preguntas, aspectos o elementos que deben revisarse durante una actividad, proceso o proyecto. Su principal función es facilitar el registro de información de manera estructurada, evitando omisiones y asegurando que todos los aspectos importantes sean considerados durante el seguimiento. Las listas de verificación son ampliamente utilizadas en proyectos comunitarios debido a su facilidad de aplicación, bajo costo y capacidad para generar información rápida y verificable.

    
    .row.mb-5.justify-content-center.align-items-center
      .col-lg-10.col-md-12
        .cajon.bg-color-c3.p-4
          p.mb-0 La siguiente lista de verificación corresponde a un ejemplo sencillo que puede utilizarse durante el seguimiento de una jornada de capacitación comunitaria. Su propósito es comprobar el cumplimiento de aspectos previamente definidos y registrar de manera sistemática la información obtenida.

    .row.justify-content-center.align-items-center.z-2.mb-5
      .col-lg-12.col-md-12.mb-0.mb-lg-0
        .titulo-sexto.color-acento-contenido.mb-3
          h5 
            b Tabla 1.
          span Lista de verificación para jornada de capacitación
        .tabla-a.color-acento-contenido.mb-0
          table
            caption <span style="font-weight: normal">Nota. SENA, (2026).</span>
            thead
              tr
                th(width="50%") Aspecto por verificar
                th(width="20%") Cumple (Sí/No)
                th(width="30%") Observaciones
            tbody
              tr
                td Se realizó la actividad en la fecha programada.
                td 
                td 
              tr
                td Asistió el número de beneficiarios previsto.
                td 
                td 
              tr
                td El lugar de la actividad reunió las condiciones necesarias.
                td 
                td 
              tr
                td Se contó con los materiales y recursos programados.
                td 
                td 
              tr
                td Se diligenció el registro de asistencia.
                td 
                td 
              tr
                td Se desarrollaron todos los temas previstos.
                td 
                td 
              tr
                td Se resolvieron las inquietudes de los participantes.
                td 
                td 
              tr
                td Se aplicó la encuesta de satisfacción.
                td 
                td 
              tr
                td Se recopilaron las evidencias de la actividad.
                td 
                td 
              tr
                td Se registraron las observaciones y compromisos derivados de la jornada.
                td 
                td 

    separador
    
    #t_2_2.titulo-segundo.color-acento-contenido(data-aos="flip-up")
      h2 2.2 Encuestas de satisfacción

    .bg-fondo-4.px-lg-5.px-2.py-lg-4.py-2
      img(src="@/assets/curso/tema2/img07.png", alt="")
    .row.justify-content-center.align-items-center.z-2.mb-3
      .col-lg-11(data-aos="fade-right")
        p.banner-text Las encuestas de satisfacción son instrumentos de recolección de información diseñados para conocer la opinión, la percepción o el nivel de satisfacción de los beneficiarios respecto a las actividades, los servicios o los resultados generados por un proyecto. Estas herramientas permiten recopilar información directamente de los participantes mediante preguntas estructuradas que facilitan la medición de opiniones y experiencias.

    
    .row.mb-5.justify-content-center.align-items-center
      .col-lg-10.col-md-12
        p.mb-0 Las encuestas constituyen una fuente valiosa de información para evaluar la calidad de los servicios prestados y el grado de aceptación de las acciones implementadas. Su importancia radica en que:



    .row.justify-content-center.mb-5
      .col-lg-6.col-md-12.mb-4.mb-lg-0
        .tarjeta.bg-color-7.p-4.mb-0.h-100
          ul.lista-ul--color.lista-ul--separador
            li 
              i.fas.fa-angle-right
              | Permiten identificar fortalezas y debilidades. 
            li 
              i.fas.fa-angle-right
              | Facilitan la medición del nivel de satisfacción. 
            li 
              i.fas.fa-angle-right
              | Generan información para la toma de decisiones.  
            li 
              i.fas.fa-angle-right
              | Permiten evaluar la calidad de los servicios prestados.

      .col-lg-6.col-md-12.mb-4.mb-lg-0
        .tarjeta.bg-color-1.p-4.mb-0.h-100
          ul.lista-ul--color.lista-ul--separador
            li 
              i.fas.fa-angle-right
              | Identifican necesidades de mejora. 
            li 
              i.fas.fa-angle-right
              | Favorecen la participación comunitaria.
            li 
              i.fas.fa-angle-right
              | Contribuyen a la mejora continua de los proyectos.  

    p.mb-5 Los principales tipos de encuestas utilizadas en proyectos comunitarios se presentan a continuación:

    .row.mb-5.justify-content-center.align-items-center
      .col-lg-3.mb-4.mb-lg-0.col-md-8.d-none.d-lg-block
        figure
          img(src="@/assets/curso/tema2/img08.png", data-aos="zoom-in")
      .col-lg-9
    
        AcordionA(tipo="a" clase-tarjeta="tarjeta bg-color-5")
          div(titulo="Encuestas presenciales")
            p.ms-5 Se aplican directamente a los beneficiarios mediante formularios impresos o dispositivos electrónicos durante reuniones, talleres, capacitaciones o visitas de campo. Existe interacción directa entre el encuestador y el participante, lo que permite aclarar dudas y mejorar la comprensión de las preguntas. Se caracterizan por una mayor tasa de respuesta y por facilitar la interpretación de las respuestas.
          div(titulo="Encuestas telefónicas")
            p.ms-5 Se realizan mediante llamadas a los participantes siguiendo un cuestionario previamente diseñado. No requieren desplazamiento físico, permiten una amplia cobertura geográfica y agilizan la recolección de información con menores costos que las encuestas presenciales.
          div(titulo="Encuestas virtuales")
            p.ms-5 Se aplican mediante plataformas digitales, formularios en línea, correos electrónicos o aplicaciones móviles. Facilitan el procesamiento automático de los datos, la rápida obtención de resultados y su distribución a un gran número de participantes.
          div(titulo="Encuestas estructuradas")
            p.ms-5 Contienen preguntas cerradas con opciones de respuesta previamente definidas. Facilitan la tabulación, el análisis estadístico, la comparación de resultados y reducen la subjetividad durante el procesamiento de la información.
          div(titulo="Encuestas semiestructuradas")
            p.ms-5 Combinan preguntas cerradas y abiertas, permitiendo obtener información cuantitativa y cualitativa. Ofrecen mayor flexibilidad para profundizar en determinados temas sin perder la posibilidad de realizar análisis comparativos.
          div(titulo="Encuestas abiertas")
            p.ms-5 Permiten que los participantes expresen libremente sus opiniones, experiencias, sugerencias o comentarios. Se orientan principalmente a la obtención de información cualitativa y favorecen la identificación de necesidades, expectativas y aspectos no previstos inicialmente.

    p.mb-5 La selección del tipo de encuesta dependerá de los objetivos del proyecto, la información requerida y las características de la población beneficiaria.


    separador
    
    #t_2_3.titulo-segundo.color-acento-contenido(data-aos="flip-up")
      h2 2.3 Entrevistas para seguimiento y evaluación


    .row.mb-5.align-items-center
      .col-lg-9.col-md-12
        p.mb-0 A continuación, se presenta un video sobre las entrevistas como herramienta de seguimiento en proyectos comunitarios, destacando su importancia para recopilar información cualitativa, evaluar los resultados y fortalecer la toma de decisiones.


    .row.justify-content-center.mb-5(data-aos="zoom-in-right")
      .col-12.col-lg-10
        .row.g-0.align-items-center
          .col-2.col-lg-1.bloque-enlace__icono-col
            figure.mb-0.d-none.d-lg-block
              img(src='@/assets/curso/tema1/img03.svg', alt='').img-fluid
          .col-10.col-lg-11
            .bloque-enlace__1
              .bloque-enlace__contenido
                h5.mb-1 Recurso Web
                p.mb-0 Las entrevistas como herramienta de seguimiento en proyectos comunitarios
              .bloque-enlace__accion
                a.boton-enlace(href="https://www.youtube.com/watch?v=Og-BFqh9paM" target="_blank" rel="noopener noreferrer")
                  span.boton-enlace__texto Ver sitio
                  i.fas.fa-link.boton-enlace__icono

    p.mb-5 La importancia de las entrevistas puede resumirse en los siguientes aspectos:

    
    .row.mb-5.justify-content-center.align-items-center
      .col-lg-12
        SlyderF(columnas="col-lg-4 col-xl-4 col-md-12 col-sm-12")
          .tarjeta.bg-color-7.p-4.h-100
            .row.justify-content-center.mb-3
              .col-8
                img(src='@/assets/curso/tema2/img09.svg' alt='', style="width: 90px;").mx-auto
            h4.text-center Percepción de beneficiarios
            p.text-center Permiten conocer la percepción de los beneficiarios. Ayudan a comprender cómo los participantes valoran las actividades desarrolladas, los servicios prestados y los beneficios obtenidos mediante el proyecto.
          .tarjeta.bg-color-7.p-4.h-100
            .row.justify-content-center.mb-3
              .col-8
                img(src='@/assets/curso/tema2/img10.svg' alt='', style="width: 90px;").mx-auto
            h4.text-center Identificación de necesidades
            p.text-center Facilitan la identificación de necesidades. Permiten detectar necesidades emergentes, problemáticas no previstas o situaciones que requieren atención durante la ejecución del proyecto.
          .tarjeta.bg-color-7.p-4.h-100
            .row.justify-content-center.mb-3
              .col-8
                img(src='@/assets/curso/tema2/img11.svg' alt='', style="width: 90px;").mx-auto
            h4.text-center Profundización de resultados obtenidos
            p.text-center Profundizan en los resultados obtenidos. Facilitan la comprensión de las causas que explican determinados resultados, comportamientos o situaciones identificadas durante el seguimiento.
          .tarjeta.bg-color-7.p-4.h-100
            .row.justify-content-center.mb-3
              .col-8
                img(src='@/assets/curso/tema2/img12.svg' alt='', style="width: 90px;").mx-auto
            h4.text-center Complemento de información
            p.text-center Complementan otras fuentes de información. La información obtenida puede contrastarse con registros, encuestas, informes y otros instrumentos, fortaleciendo la confiabilidad de los hallazgos.
          .tarjeta.bg-color-7.p-4.h-100
            .row.justify-content-center.mb-3
              .col-8
                img(src='@/assets/curso/tema2/img13.svg' alt='', style="width: 90px;").mx-auto
            h4.text-center Participación comunitaria
            p.text-center Favorecen la participación comunitaria. Brindan espacios para que los beneficiarios expresen opiniones, experiencias, inquietudes, expectativas y propuestas de mejora.
          .tarjeta.bg-color-7.p-4.h-100
            .row.justify-content-center.mb-3
              .col-8
                img(src='@/assets/curso/tema2/img13.svg' alt='', style="width: 90px;").mx-auto
            h4.text-center Apoyo a decisiones
            p.text-center Apoyan la toma de decisiones. Los hallazgos obtenidos permiten identificar fortalezas, debilidades, riesgos y oportunidades de mejora para implementar acciones preventivas, correctivas o de fortalecimiento.

    .row.mb-5.align-items-center
      .col-lg-7.col-md-12
        p.mb-0 Además de los aspectos anteriores, la evaluación aporta otros beneficios para la gestión de los proyectos comunitarios, entre los que se destacan los siguientes:
    
    .bg-fondo-2.px-4.pt-4.pt-lg-0.pb-4.pb-lg-0.mb-2.br-15.ps-lg-0
      .tarjeta.row.justify-content-center.align-items-center.mb-0.p-0.pe-lg-2.pt-lg-0.pb-lg-0.ps-lg-0
        .col-lg-3.col-md-8.mb-4.mb-lg-0.p-0.align-self-lg-end
          img(src='@/assets/curso/tema2/img12.png', alt='')
        .col-lg-9.col-md-12.p-3
          .tarjeta--blanca.tarjeta.p-3.px-lg-0.my-lg-0.me-lg-0
            SlyderF(columnas="col-lg-12")
              .tarjeta.bg-white.p-0.p-lg-4
                p.mb-0 <b>Facilitan la evaluación de impactos:</b> permiten identificar cambios sociales, económicos, productivos, organizativos o ambientales generados por el proyecto.
              .tarjeta.bg-white.p-0.p-lg-4
                p.mb-0 <b>Fortalecen la comunicación con la comunidad:</b> favorecen el diálogo directo entre los responsables del proyecto y los beneficiarios, generando confianza y una mejor comprensión de las realidades locales.
              .tarjeta.bg-white.p-0.p-lg-4
                p.mb-0 <b>Permiten documentar experiencias y aprendizajes:</b> recopilan testimonios y conocimientos adquiridos durante la ejecución del proyecto, contribuyendo a la memoria institucional y a la identificación de buenas prácticas.
              .tarjeta.bg-white.p-0.p-lg-4
                p.mb-0 <b>Contribuyen a la mejora continua:</b> la información obtenida permite realizar ajustes oportunos en las actividades, estrategias o metodologías del proyecto, favoreciendo una gestión más eficiente y orientada al logro de resultados.
            


</template>

<script>
export default {
  name: 'Tema2',
  data: () => ({
    // variables de vue
  }),
  mounted() {
    this.$nextTick(() => {
      this.$aosRefresh()
    })
  },
  updated() {
    this.$aosRefresh()
  },
}
</script>

<style lang="sass"></style>
