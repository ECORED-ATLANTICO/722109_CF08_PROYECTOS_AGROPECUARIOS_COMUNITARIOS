<template lang="pug">
.curso-main-container.pb-3
  BannerInterno
  .container.tarjeta.tarjeta--blanca.p-4.p-md-5.mb-5
    .titulo-principal.color-acento-contenido
      .titulo-principal__numero
        span 1
      h1 Seguimiento y control de la ejecución de proyectos comunitarios


    .row.mb-5.justify-content-center.align-items-center
      .col-lg-5.mb-4.mb-lg-0.col-md-8
        figure
          img(src="@/assets/curso/tema1/img01.png", data-aos="zoom-in")
      .col-lg-7
        p.mb-3(data-aos="fade-right") Una vez iniciado un proyecto comunitario, es necesario verificar de manera permanente que las actividades programadas se desarrollen conforme a lo planeado, que los recursos se utilicen adecuadamente y que los resultados esperados se alcancen dentro de los plazos establecidos. Este proceso se conoce como seguimiento y control y constituye una de las etapas más importantes de la gestión de proyectos.
        
        .cajon.bg-color-c3.p-4.mb-0
          p.mb-0 El seguimiento permite identificar avances, dificultades y desviaciones durante la ejecución, lo que facilita la toma oportuna de decisiones para garantizar el cumplimiento de los objetivos. Para ello, se emplean indicadores, registros y diversas herramientas que permiten recopilar información confiable sobre el desempeño del proyecto.

    separador
    
    #t_1_1.titulo-segundo.color-acento-contenido(data-aos="flip-up")
      h2 1.1. Seguimiento y control de proyectos comunitarios

    .row.mb-5.justify-content-center.align-items-center
      .col-lg-4.mb-4.mb-lg-0.col-md-8.order-1.order-lg-2
        figure
          img(src="@/assets/curso/tema1/img02.png", data-aos="zoom-in")
      .col-lg-8.order-2.order-lg-1
        p.mb-3(data-aos="fade-right") El seguimiento y el control son procesos complementarios que permiten garantizar el desarrollo adecuado de un proyecto comunitario y el cumplimiento de los resultados esperados.
        p.mb-0 El seguimiento de proyectos comunitarios es un proceso sistemático y continuo mediante el cual se recopila, analiza y utiliza información relacionada con la ejecución de las actividades programadas, con el propósito de verificar el cumplimiento de los objetivos y las metas establecidas.

    p.mb-5 Por su parte, el control consiste en comparar los resultados obtenidos con los resultados planificados, con el fin de identificar desviaciones y adoptar medidas correctivas cuando sea necesario. En el siguiente video se explica la importancia del seguimiento a proyectos y de las acciones de mejora como mecanismos para fortalecer la gestión y el cumplimiento de los objetivos establecidos.

    .row.justify-content-center.mb-5(data-aos="zoom-in-right")
      .col-12.col-lg-10
        .row.g-0.align-items-center
          .col-2.col-lg-1.bloque-enlace__icono-col
            figure.mb-0.d-none.d-lg-block
              img(src='@/assets/curso/tema1/img03.svg', alt='').img-fluid
          .col-10.col-lg-11
            .bloque-enlace
              .bloque-enlace__contenido
                h5.mb-1 Recurso Web
                p.mb-0 Seguimiento a proyectos y acciones de mejora
              .bloque-enlace__accion
                a.boton-enlace(href="https://www.youtube.com/watch?v=Og-BFqh9paM" target="_blank" rel="noopener noreferrer")
                  span.boton-enlace__texto Ver sitio
                  i.fas.fa-link.boton-enlace__icono

    p.mb-5 La finalidad principal del seguimiento y control es proporcionar información confiable y oportuna que facilite la toma de decisiones durante la ejecución del proyecto, garantizando el uso adecuado de los recursos y el logro de los resultados previstos. Entre sus principales propósitos se encuentran: 

    .row.justify-content-center.mb-5(data-aos="fade-right")
      .col-lg-6.mb-lg-0.mb-2
        ul.lista-ul--color.lista-ul--separador
          li 
            i.fas.fa-angle-right
            | Verificar el cumplimiento de las actividades y del cronograma.
          li 
            i.fas.fa-angle-right
            | Evaluar el avance hacia el logro de los objetivos.
          li 
            i.fas.fa-angle-right
            | Detectar problemas o desviaciones de manera temprana



      .col-lg-6.mb-lg-0.mb-3
        ul.lista-ul--color.lista-ul--separador
          li 
            i.fas.fa-angle-right
            | Facilitar la toma oportuna de decisiones.
          li 
            i.fas.fa-angle-right
            | Garantizar la correcta utilización de los recursos.
          li 
            i.fas.fa-angle-right
            | Generar evidencia sobre los resultados obtenidos.

    .container
      .titulo-con-imagen.mb-5(data-aos="fade-right")
        .titulo-con-imagen__fondo
          img.titulo-con-imagen__imagen(src="@/assets/curso/img-subtitulo.svg")
          h3.titulo-con-imagen__texto Importancia en la gestión de proyectos comunitarios


    .bloque-texto-g.bg-color-3.p-3.p-sm-4.p-md-5.mb-5
      .bloque-texto-g__img(
        :style="{'background-image': `url(${require('@/assets/curso/tema1/img06.png')})`}"
      )
      .bloque-texto-g__texto.p-4
        p.mb-0 El seguimiento constituye una herramienta indispensable para la gestión efectiva de proyectos comunitarios, ya que permite conocer de manera permanente el estado de ejecución de las actividades y el cumplimiento de las metas propuestas. Asimismo, proporciona información que facilita la toma de decisiones, optimiza el uso de los recursos y fortalece la transparencia durante la ejecución del proyecto. A continuación, se presentan los principales aportes del seguimiento y control en la gestión de proyectos comunitarios:

    .bg-fondo-1.tarjeta.mb-5
      .px-4.py-4.py-md-4.p-lg-4.px-lg-4(data-aos="fade-right")
        SlyderA(tipo="b").bg-color-white.p-0.p-lg-4.tarjeta
          .row.justify-content-center.align-items-center.p-4.p-lg-3
            .col-lg-7.mb-4.mb-lg-0
              h4.mb-3 Permite medir avances
              p.mb-0 Facilita la comparación entre lo planeado y lo ejecutado para determinar el porcentaje de cumplimiento de las actividades programadas.
            .col-lg-5.col-md-8
              figure
                img(src="@/assets/curso/tema1/img08.png", alt="")
          .row.justify-content-center.align-items-center.p-4.p-lg-3
            .col-lg-7.mb-4.mb-lg-0
              h4.mb-3 Favorece la toma de decisiones
              p.mb-0 La información recopilada permite adoptar decisiones oportunas para solucionar problemas, corregir desviaciones y mejorar los procesos.
            .col-lg-5.col-md-8
              figure
                img(src="@/assets/curso/tema1/img09.png", alt="")
          .row.justify-content-center.align-items-center.p-4.p-lg-3
            .col-lg-7.mb-4.mb-lg-0
              h4.mb-3 Optimiza el uso de recursos
              p.mb-0 Permite identificar posibles desperdicios, retrasos o usos inadecuados de los recursos financieros, materiales y humanos, favoreciendo una gestión más eficiente.
            .col-lg-5.col-md-8
              figure
                img(src="@/assets/curso/tema1/img10.png", alt="")
          .row.justify-content-center.align-items-center.p-4.p-lg-3
            .col-lg-7.mb-4.mb-lg-0
              h4.mb-3 Fortalece la participación comunitaria
              p.mb-0 Promueve la vinculación activa de los beneficiarios y de los demás actores involucrados, fortaleciendo el sentido de pertenencia y la corresponsabilidad.
            .col-lg-5.col-md-8
              figure
                img(src="@/assets/curso/tema1/img11.png", alt="")
          .row.justify-content-center.align-items-center.p-4.p-lg-3
            .col-lg-7.mb-4.mb-lg-0
              h4.mb-3 Mejora la transparencia
              p.mb-0 La documentación de las actividades ejecutadas facilita la rendición de cuentas ante las comunidades, las entidades financiadoras y los organismos de control.
            .col-lg-5.col-md-8
              figure
                img(src="@/assets/curso/tema1/img12.png", alt="")
          .row.justify-content-center.align-items-center.p-4.p-lg-3
            .col-lg-7.mb-4.mb-lg-0
              h4.mb-3 Facilita la evaluación posterior
              p.mb-0 La información recopilada sirve como base para los procesos de evaluación, el análisis de resultados y la formulación de acciones de mejora continua.
            .col-lg-5.col-md-8
              figure
                img(src="@/assets/curso/tema1/img13.png", alt="")

    p.mb-5 Estos beneficios convierten el seguimiento en un proceso fundamental para garantizar el cumplimiento de los objetivos del proyecto.

    .container
      .titulo-con-imagen.mb-5(data-aos="fade-right")
        .titulo-con-imagen__fondo
          img.titulo-con-imagen__imagen(src="@/assets/curso/img-subtitulo.svg")
          h3.titulo-con-imagen__texto Componentes del seguimiento

    p.mb-5 Para que el seguimiento sea efectivo, debe integrar diversos elementos que permitan recopilar información completa sobre la ejecución del proyecto y evaluar el grado de cumplimiento de las actividades programadas. Los principales componentes del seguimiento son:
    

    
    .row.mb-5.justify-content-center.align-items-center
      .col-lg-3.mb-4.mb-lg-0.col-md-8
        figure
          img(src="@/assets/curso/tema1/img14.png", data-aos="zoom-in")
      .col-lg-9
        TabsA.color-acento-botones
          .tarjeta.color-acento-botones--borde.p-4(titulo="Objetivos de seguimiento")
            p.mb-0 Corresponden a los aspectos específicos que se desean verificar durante la ejecución del proyecto para determinar el nivel de cumplimiento de lo planificado. Comprenden el cumplimiento del cronograma, la participación de los beneficiarios, la ejecución presupuestal y el alcance de las metas.
          .tarjeta.color-acento-botones--borde.p-4(titulo="Indicadores")
            p.mb-0 Son variables cuantitativas o cualitativas que permiten medir el desempeño y el avance del proyecto. Entre ellos se encuentran el porcentaje de actividades ejecutadas, el número de beneficiarios atendidos, el nivel de satisfacción de la comunidad y el porcentaje de ejecución presupuestal.
          .tarjeta.color-acento-botones--borde.p-4(titulo="Fuentes de información")
            p.mb-0 Corresponden a los documentos, registros, evidencias de campo o testimonios utilizados para obtener información sobre la ejecución del proyecto, como actas de reunión, informes técnicos, registros fotográficos, bases de datos y testimonios de los participantes.
          .tarjeta.color-acento-botones--borde.p-4(titulo="Instrumentos de recolección de datos")
            p.mb-0 Son herramientas utilizadas para recopilar información que permita verificar el avance y el cumplimiento de las actividades programadas. Entre ellas se encuentran los formatos de asistencia, las encuestas, las entrevistas, las listas de verificación y los informes de avance.
          .tarjeta.color-acento-botones--borde.p-4(titulo="Periodicidad")
            p.mb-0 Define la frecuencia con la que se realiza el seguimiento y la recopilación de información del proyecto. Puede ser diaria, semanal, mensual, trimestral o semestral.
          .tarjeta.color-acento-botones--borde.p-4(titulo="Responsables")
            p.mb-0 Corresponde a las personas encargadas de recopilar, analizar, consolidar y reportar la información obtenida durante el seguimiento, como el coordinador del proyecto, el equipo técnico, los líderes comunitarios, los comités de seguimiento o las entidades financiadoras.
    
    
    p.mb-5 La articulación de estos componentes favorece un seguimiento sistemático y orientado a la mejora continua.

    .container
      .titulo-con-imagen.mb-5(data-aos="fade-right")
        .titulo-con-imagen__fondo
          img.titulo-con-imagen__imagen(src="@/assets/curso/img-subtitulo.svg")
          h3.titulo-con-imagen__texto Métodos de monitoreo


    
    .row.mb-5.justify-content-center.align-items-center
      .col-lg-3.mb-4.mb-lg-0.col-md-8.order-1.order-lg-2.d-none.d-lg-block
        figure
          img(src="@/assets/curso/tema1/img15.png", data-aos="zoom-in")
      .col-lg-9.order-2.order-lg-1
        p.mb-4 Los métodos de monitoreo permiten obtener información sobre el desarrollo del proyecto y verificar el cumplimiento de las actividades programadas. Su aplicación contribuye a identificar avances, dificultades y oportunidades de mejora durante la ejecución. A continuación, se describen los métodos de monitoreo más utilizados: 
    
        AcordionA(tipo="a" clase-tarjeta="tarjeta bg-color-5")
          div(titulo="Observación directa")
            p.ms-5 Consiste en verificar personalmente la ejecución de las actividades en campo, permitiendo constatar de manera directa el desarrollo de las acciones del proyecto. Proporciona información de primera mano, facilita la verificación inmediata e identifica rápidamente problemas o desviaciones.
          div(titulo="Revisión documental")
            p.ms-5 Consiste en analizar registros, informes, actas, listas de asistencia y demás documentos generados durante la ejecución del proyecto. Permite contrastar la información registrada, generar evidencia documental y evaluar el cumplimiento de metas y procedimientos.
          div(titulo="Entrevistas")
            p.ms-5 Permiten recopilar información directamente de los participantes, líderes comunitarios y beneficiarios mediante preguntas estructuradas o semiestructuradas, facilitando la obtención de opiniones, experiencias, dificultades y recomendaciones.
          div(titulo="Encuestas")
            p.ms-5 Facilitan la obtención de información sobre opiniones, percepciones, conocimientos y niveles de satisfacción de los beneficiarios o participantes. Además, permiten recopilar información de un número amplio de personas de manera organizada y cuantificable.
          div(titulo="Reuniones de seguimiento")
            p.ms-5 Son espacios en los que los responsables del proyecto revisan avances, dificultades, compromisos y resultados alcanzados durante la ejecución. Favorecen la coordinación de actividades, la toma de decisiones y el seguimiento de los compromisos adquiridos.
          div(titulo="Monitoreo participativo")
            p.ms-5 Involucra a la comunidad en la recopilación, el análisis y la validación de la información relacionada con el proyecto, fortaleciendo la participación comunitaria, la transparencia, la corresponsabilidad y el sentido de pertenencia.

    .row.mb-5.justify-content-center.align-items-center
      .col-lg-10.col-md-12
        .cajon.bg-color-c3.p-4
          p.mb-0 La aplicación conjunta de estos métodos proporciona una visión integral del estado del proyecto y fortalece el proceso de seguimiento.

    .container
      .titulo-con-imagen.mb-5(data-aos="fade-right")
        .titulo-con-imagen__fondo
          img.titulo-con-imagen__imagen(src="@/assets/curso/img-subtitulo.svg")
          h3.titulo-con-imagen__texto Herramientas para el seguimiento y control

    .container
      .row.align-items-center.bg-color-6.p-4.mb-5
        .col-lg-auto
          img.d-none.d-lg-flex(src="@/assets/curso/tema1/img16.svg", style="max-width: 90px").mx-auto
        .col-lg
          p.mb-0 El seguimiento y control de proyectos comunitarios requiere herramientas que permitan recopilar, organizar, analizar y comunicar información relacionada con la ejecución de las actividades y el cumplimiento de los objetivos establecidos. Su utilización facilita la toma de decisiones, contribuye a identificar desviaciones de manera oportuna y favorece una gestión más eficiente de los recursos. Entre las herramientas más utilizadas para apoyar este proceso se encuentran las siguientes:

    .bg-fondo-2.p-4.mb-5
      .container
        .tarjeta.row.justify-content-center.align-items-center.mb-0.p-0.p-lg-2
          .row.justify-content-center.align-items-center
            .col-lg-3.col-md-8.mb-4.mb-lg-0.p-0
              img(src='@/assets/curso/tema1/img17.png', alt='')
            .col-lg-9.col-md-12.p-0
              SlyderF(columnas="col-lg-12")
                .tarjeta.bg-white.p-4
                  h4 Cronogramas de actividades
                  p Son instrumentos de planificación y control que organizan las actividades del proyecto indicando fechas de inicio y finalización, duración y responsables. Se utilizan para verificar el cumplimiento de los tiempos establecidos, identificar retrasos y realizar ajustes en la programación. Facilitan la organización de las actividades, el control de los plazos, la coordinación de recursos y la toma oportuna de decisiones.
                .tarjeta.bg-white.p-4
                  h4 Informes de avance
                  p Son documentos elaborados periódicamente para registrar el estado de ejecución del proyecto, los resultados obtenidos, las dificultades encontradas y las acciones implementadas. Permiten comunicar avances a las entidades financiadoras, las comunidades beneficiarias y los demás actores involucrados, además de facilitar la rendición de cuentas y respaldar la toma de decisiones.
                .tarjeta.bg-white.p-4
                  h4 Matrices de seguimiento
                  p Organizan información relacionada con actividades, metas, indicadores, responsables, fechas de ejecución y niveles de cumplimiento. Facilitan la comparación entre lo planeado y lo ejecutado, el análisis de la información, la identificación de desviaciones y el control de la ejecución.
                .tarjeta.bg-white.p-4
                  h4 Registros de asistencia
                  p Evidencian la participación de beneficiarios, líderes comunitarios y demás actores en reuniones, capacitaciones, talleres y otras actividades del proyecto. Permiten cuantificar la participación comunitaria, generar evidencia documental y apoyar la elaboración de informes y los procesos de evaluación.
                .tarjeta.bg-white.p-4
                  h4 Bases de datos
                  p Son sistemas organizados para almacenar, clasificar y administrar información sobre beneficiarios, actividades, indicadores, recursos y resultados del proyecto. Facilitan la consulta, actualización y análisis de la información, la generación de reportes, los análisis estadísticos y la conservación de los datos.

    p.mb-5 El uso integrado de estas herramientas fortalece el seguimiento y control del proyecto, mejora la gestión de la información y contribuye al logro de los resultados esperados.

    separador
    
    #t_1_2.titulo-segundo.color-acento-contenido(data-aos="flip-up")
      h2 1.2. Indicadores de desempeño para proyectos comunitarios


    .row.mb-5.justify-content-center.align-items-center
      .col-lg-5.mb-4.mb-lg-0.col-md-8.order-1.order-lg-2
        figure
          img(src="@/assets/curso/tema1/img20.png", data-aos="zoom-in")
      .col-lg-7.order-2.order-lg-1
        p.mb-4 Los proyectos comunitarios requieren mecanismos que permitan medir objetivamente el avance de las actividades, el cumplimiento de las metas y los resultados alcanzados. Para ello, se utilizan los indicadores de desempeño, herramientas fundamentales que facilitan el seguimiento, la evaluación y la toma de decisiones durante la ejecución del proyecto.
        .bg-fondo-3.p-4
          p.mb-0 Los indicadores permiten transformar información compleja en datos concretos y verificables, facilitando la comparación entre lo planificado y lo ejecutado. Gracias a ellos, es posible determinar si las acciones desarrolladas están generando los resultados esperados y si los recursos se están utilizando de manera eficiente. La adecuada selección y aplicación de indicadores contribuye a mejorar la gestión de los proyectos comunitarios, fortalecer la transparencia y generar información útil para los procesos de evaluación y mejora continua.


    p.mb-5 Un indicador de desempeño es una medida cuantitativa o cualitativa que permite evaluar el grado de avance, cumplimiento o logro de los objetivos, las metas, las actividades y los resultados de un proyecto. Estos indicadores funcionan como referentes que permiten conocer la situación real del proyecto en un momento determinado y compararla con los resultados esperados. En términos prácticos, un indicador permite responder preguntas como las siguientes:

    .row.mb-5.justify-content-center
      .col-lg-4.col-md-6.mb-4
        .bg-color-2.br-15.mb-3.mb-lg-0.p-1.h-100
          .row.mb-0.justify-content-center.align-items-center
            .col-auto
              figure
                img(src="@/assets/curso/tema1/img21.svg", data-aos="zoom-in")
            .col-lg
              p.mb-0.text-md-center(data-aos="fade-right") ¿Cuánto se ha avanzado?
              
      .col-lg-4.col-md-6.mb-4
        .bg-color-2.br-15.mb-3.mb-lg-0.p-lg-1.p-2.h-100
          .row.mb-0.justify-content-center.align-content-center
            .col-auto
              figure
                img(src="@/assets/curso/tema1/img22.svg", data-aos="zoom-in")
            .col-lg
              p.mb-0.text-md-center(data-aos="fade-right") ¿Qué resultados se han obtenido?

      .col-lg-4.col-md-6.mb-4
        .bg-color-2.br-15.mb-3.mb-lg-0.p-1.h-100
          .row.mb-0.justify-content-center.align-items-center
            .col-auto
              figure
                img(src="@/assets/curso/tema1/img23.svg", data-aos="zoom-in")
            .col-lg
              p.mb-0.text-md-center(data-aos="fade-right") ¿Se están cumpliendo las metas?

      .col-lg-4.col-md-6.mb-4.mb-lg-0
        .bg-color-6.br-15.mb-3.mb-lg-0.p-1.h-100
          .row.mb-0.justify-content-center.align-items-center
            .col-auto
              figure
                img(src="@/assets/curso/tema1/img24.svg", data-aos="zoom-in")
            .col-lg
              p.mb-0.text-md-center(data-aos="fade-right") ¿Los recursos se están utilizando adecuadamente?

      .col-lg-4.col-md-6.mb-0
        .bg-color-6.br-15.mb-3.mb-lg-0.p-1.h-100
          .row.mb-0.justify-content-center.align-items-center
            .col-auto
              figure
                img(src="@/assets/curso/tema1/img25.svg", data-aos="zoom-in")
            .col-lg
              p.mb-0.text-md-center(data-aos="fade-right") ¿La comunidad está satisfecha con el proyecto?
              
      .col-lg-4.col-md-6.mb-0
        .bg-color-6.br-15.mb-3.mb-lg-0.p-1.h-100
          .row.mb-0.justify-content-center.align-items-center
            .col-auto
              figure
                img(src="@/assets/curso/tema1/img26.svg", data-aos="zoom-in")
            .col-lg
              p.mb-0.text-md-center(data-aos="fade-right") ¿Se están generando los impactos esperados?

    .container
      .titulo-con-imagen.mb-5(data-aos="fade-right")
        .titulo-con-imagen__fondo
          img.titulo-con-imagen__imagen(src="@/assets/curso/img-subtitulo.svg")
          h3.titulo-con-imagen__texto Tipos de indicadores

    p.mb-5 Los indicadores pueden clasificarse de diferentes maneras, según la información que se pretende medir. Cada tipo aporta información específica para el seguimiento y la evaluación del proyecto. A continuación, se presentan los principales tipos de indicadores y sus características.


    

    
    .row.mb-5.justify-content-center.align-items-center
      .col-lg-3.mb-4.mb-lg-0.col-md-8.order-1.order-lg-1.d-none.d-lg-block
        figure
          img(src="@/assets/curso/tema1/img27.png", data-aos="zoom-in")
      .col-lg-9.order-2.order-lg-2
    
        AcordionA(tipo="a" clase-tarjeta="tarjeta bg-color-5")
          div(titulo="Indicadores de gestión")
            p.ms-5 Miden el desarrollo de las actividades y la utilización de los recursos durante la ejecución del proyecto. Permiten determinar si las actividades se realizan conforme a lo programado.<br><br><b>Ejemplos:</b> número de capacitaciones realizadas, porcentaje de ejecución presupuestal, número de reuniones efectuadas y cantidad de visitas técnicas realizadas.<br><br><b>Responden a la pregunta:</b> ¿Qué se está haciendo?
          div(titulo="Indicadores de producto")
            p.ms-5 Miden los bienes, servicios o entregables generados por el proyecto. Se enfocan en los resultados inmediatos obtenidos como consecuencia de las actividades ejecutadas.<br><br><b>Ejemplos:</b> número de huertas establecidas, cantidad de árboles sembrados, número de familias beneficiadas y material educativo entregado.<br><br><b>Responden a la pregunta:</b> ¿Qué se produjo?
          div(titulo="Indicadores de resultado")
            p.ms-5 Miden los cambios generados en la población beneficiaria como consecuencia de la ejecución del proyecto. Permiten evaluar si los productos entregados contribuyeron al logro de los objetivos propuestos.<br><br><b>Ejemplos:</b> incremento en la productividad agrícola, aumento de la participación comunitaria, mejora en los conocimientos adquiridos y reducción de pérdidas en cultivos.<br><br><b>Responden a la pregunta:</b> ¿Qué cambió gracias al proyecto?
          div(titulo="Indicadores de impacto")
            p.ms-5 Miden los efectos de largo plazo generados por el proyecto sobre la comunidad o el territorio. Generalmente se evalúan después de finalizar la ejecución.<br><br><b>Ejemplos:</b> reducción de los índices de pobreza, mejoramiento de la calidad de vida, incremento de los ingresos familiares y recuperación de ecosistemas degradados.<br><br><b>Responden a la pregunta:</b> ¿Qué transformaciones permanentes produjo el proyecto?
          div(titulo="Indicadores cuantitativos")
            p.ms-5 Se expresan mediante números, porcentajes, cantidades o proporciones. Son fácilmente medibles, verificables y comparables.<br><br><b>Ejemplos:</b> 250 personas capacitadas, 85 % de ejecución presupuestal, 120 árboles sembrados y 90 % de asistencia a las capacitaciones.<br><br><b>Responden a la pregunta:</b> ¿Cuánto se logró o avanzó?
          div(titulo="Indicadores cualitativos")
            p.ms-5 Evalúan percepciones, opiniones, niveles de satisfacción o cambios en los comportamientos. Su medición suele realizarse mediante encuestas, entrevistas o grupos focales.<br><br><b>Ejemplos:</b> nivel de satisfacción de los beneficiarios, percepción de mejora en la calidad de vida, grado de aceptación del proyecto y nivel de confianza de la comunidad.<br><br><b>Responden a la pregunta:</b> ¿Cómo perciben los beneficiarios los cambios o resultados obtenidos?

    p.mb-5 La combinación de estos indicadores permite obtener una valoración integral del desempeño del proyecto y facilita la toma de decisiones durante su ejecución.

    .container
      .titulo-con-imagen.mb-5(data-aos="fade-right")
        .titulo-con-imagen__fondo
          img.titulo-con-imagen__imagen(src="@/assets/curso/img-subtitulo.svg")
          h3.titulo-con-imagen__texto Características de los indicadores

    p.mb-5 Para que un indicador sea realmente útil dentro de un proyecto comunitario, debe reunir una serie de características que garanticen la calidad, la precisión y la utilidad de la información obtenida. Un indicador bien formulado facilita el seguimiento de las actividades, permite evaluar el cumplimiento de los objetivos y fortalece la toma de decisiones. Las principales características de los indicadores de desempeño se presentan a continuación:

    
    
    .row.mb-5.justify-content-center.align-items-center
      .col-lg-3.mb-4.mb-lg-0.col-md-8.order-1.order-lg-2
        figure
          img(src="@/assets/curso/tema1/img28.png", data-aos="zoom-in")
      .col-lg-9.order-2.order-lg-1
        TabsA.color-acento-botones
          .tarjeta.color-acento-botones--borde.p-4(titulo="Claridad")
            p.mb-0 El indicador debe ser fácil de comprender e interpretar por todas las personas involucradas en el proyecto, evitando términos ambiguos o complejos.<br><br><b>Por ejemplo:</b> el <i>porcentaje de actividades ejecutadas</i> expresa con claridad qué se está midiendo.
          .tarjeta.color-acento-botones--borde.p-4(titulo="Relevancia")
            p.mb-0 Debe estar directamente relacionado con los objetivos, las metas o los resultados del proyecto, aportando información útil para evaluar su desempeño.<br><br><b>Por ejemplo:</b> si el objetivo es fortalecer la participación comunitaria, un indicador pertinente es el <i>porcentaje de asistencia a las reuniones comunitarias</i>.
          .tarjeta.color-acento-botones--borde.p-4(titulo="Medible")
            p.mb-0 Debe permitir obtener datos cuantificables o verificables mediante métodos objetivos de medición.<br><br><b>Por ejemplo:</b> el <i>número de beneficiarios capacitados</i> durante el proyecto.
          .tarjeta.color-acento-botones--borde.p-4(titulo="Confiabilidad")
            p.mb-0 Debe producir resultados consistentes cuando se aplica bajo las mismas condiciones, independientemente de quién realice la medición.<br><br><b>Por ejemplo:</b> dos personas que revisen los registros de asistencia deben obtener el mismo número de participantes.
          .tarjeta.color-acento-botones--borde.p-4(titulo="Oportunidad")
            p.mb-0 La información debe estar disponible en el momento en que se requiera para apoyar la toma de decisiones.<br><br><b>Por ejemplo:</b> conocer mensualmente el avance de las actividades permite realizar ajustes oportunos al cronograma.
    
    p.mb-5 De igual manera, los indicadores deben reunir otras características que contribuyen a garantizar la confiabilidad de la información obtenida: 
    
    .row.mb-5.justify-content-center.align-items-center
      .col-lg-12
        SlyderF(columnas="col-lg-4 col-xl-4 col-md-12 col-sm-12")
          .tarjeta.bg-color-7.p-4.h-100
            .row.justify-content-center.mb-3
              .col-8
                img(src='@/assets/curso/tema1/img29.svg' alt='', style="width: 90px;").mx-auto
            h4.text-center Verificabilidad
            p.text-center Los resultados deben poder comprobarse mediante documentos, registros, evidencias físicas o fuentes de información confiables. Un ejemplo es validar el número de personas capacitadas mediante listas de asistencia firmadas.
          .tarjeta.bg-color-7.p-4.h-100
            .row.justify-content-center.mb-3
              .col-8
                img(src='@/assets/curso/tema1/img30.svg' alt='', style="width: 90px;").mx-auto
            h4.text-center Comparabilidad
            p.text-center Debe facilitar la comparación de resultados entre diferentes periodos, grupos de beneficiarios o proyectos similares. Por ejemplo, comparar el porcentaje de participación comunitaria entre dos semestres consecutivos.
          .tarjeta.bg-color-7.p-4.h-100
            .row.justify-content-center.mb-3
              .col-8
                img(src='@/assets/curso/tema1/img31.svg' alt='', style="width: 90px;").mx-auto
            h4.text-center Factibilidad
            p.text-center La información necesaria para medir el indicador debe obtenerse con los recursos humanos, técnicos, financieros y de tiempo disponibles. Por ejemplo, medir el número de asistentes a una capacitación resulta más factible que medir, en el corto plazo, todos los cambios sociales generados en la comunidad.
          .tarjeta.bg-color-7.p-4.h-100
            .row.justify-content-center.mb-3
              .col-8
                img(src='@/assets/curso/tema1/img32.svg' alt='', style="width: 90px;").mx-auto
            h4.text-center Especificidad
            p.text-center Debe centrarse en un aspecto concreto del proyecto y evitar medir varios elementos simultáneamente. Por ejemplo, el número de mujeres participantes en actividades de capacitación es más específico que el nivel general de participación comunitaria.
          .tarjeta.bg-color-7.p-4.h-100
            .row.justify-content-center.mb-3
              .col-8
                img(src='@/assets/curso/tema1/img33.svg' alt='', style="width: 90px;").mx-auto
            h4.text-center Sensibilidad
            p.text-center Debe reflejar los cambios o variaciones en el desempeño del proyecto cuando estos ocurren. Por ejemplo, un indicador de asistencia mensual permite identificar rápidamente disminuciones en la participación de los beneficiarios.

    p.mb-5 El diseño de indicadores con estas características mejora la calidad de la información recopilada y fortalece los procesos de seguimiento, evaluación y mejora continua de los proyectos comunitarios.

    .container
      .titulo-con-imagen.mb-5(data-aos="fade-right")
        .titulo-con-imagen__fondo
          img.titulo-con-imagen__imagen(src="@/assets/curso/img-subtitulo.svg")
          h3.titulo-con-imagen__texto Metodología de aplicación


    .bg-fondo-4.px-5.py-4
      img(src="@/assets/curso/tema1/img35.png", alt="")
    .row.justify-content-center.align-items-center.z-2.mb-3
      .col-lg-11(data-aos="fade-right")
        p.banner-text La aplicación de indicadores es un proceso sistemático que permite medir de manera objetiva el desempeño de un proyecto comunitario. Para que los indicadores proporcionen información útil y confiable, es necesario seguir una metodología organizada que garantice la adecuada definición, recolección, análisis e interpretación de los datos.


    .row.align-items-center.justify-content-center.mb-5(data-aos="fade-right")
      .col-lg-auto.d-none.d-lg-flex
        img(src="@/assets/curso/tema1/img36.svg").mx-auto
      .col-lg(data-aos="fade-right")
        p.mb-0 Esta metodología no se limita a medir resultados; también permite monitorear el avance de las actividades, identificar desviaciones respecto a las metas establecidas y generar información que facilite la toma de decisiones y la implementación de acciones de mejora. El proceso de aplicación de indicadores comprende las siguientes etapas.


    .container
      .titulo-con-imagen-2.mb-5(data-aos="fade-right")
        .titulo-con-imagen-2__fondo
          img.titulo-con-imagen-2__imagen(src="@/assets/curso/img-sub.svg")
          h3.titulo-con-imagen-2__texto Etapa 1. Definición de los objetivos del proyecto


        
    .bloque-texto-g.bloque-texto-g--inverso.bg-color-2.p-3.p-sm-4.p-md-5.mb-5
      .bloque-texto-g__img(
        :style="{'background-image': `url(${require('@/assets/curso/tema1/img38.png')})`}"
      )
      .bloque-texto-g__texto.p-4
        p.mb-0 El primer paso consiste en identificar claramente qué se pretende lograr con el proyecto. Los objetivos constituyen el punto de partida para la formulación de indicadores, ya que estos deben diseñarse en función de los resultados que se desean alcanzar. Un objetivo debe expresar de manera clara y concreta el cambio o beneficio que se espera generar en la población beneficiaria.
  

    .row.justify-content-center.mb-5(data-aos="zoom-in-right")
      .col-12.col-lg-10
        .row.g-0.align-items-center
          .col-2.col-lg-1.bloque-enlace__icono-col
          .col-10.col-lg-11
            .bloque-enlace
              .bloque-enlace__contenido
                p.mb-0 <b>Ejemplo:</b> 
                p.mb-1 Fortalecer las capacidades productivas de 100 familias rurales mediante procesos de capacitación y asistencia técnica.
                p.mb-0 <b>Importante:</b> 
                p.mb-0 Cuando los objetivos están claramente definidos, es posible determinar qué aspectos deben medirse para verificar su cumplimiento.

              .bloque-enlace__accion


    .container
      .titulo-con-imagen-2.mb-5(data-aos="fade-right")
        .titulo-con-imagen-2__fondo
          img.titulo-con-imagen-2__imagen(src="@/assets/curso/img-sub.svg")
          h3.titulo-con-imagen-2__texto Etapa 2. Identificación de los aspectos a medir
        
    p.mb-4 Una vez definidos los objetivos, se procede a identificar los elementos que permitirán evaluar el avance y los resultados del proyecto. Estos aspectos pueden estar relacionados con:
    
    .row.mb-4.justify-content-center.align-items-center
      .col-lg-3.mb-4.mb-lg-0.col-md-8
        figure
          img(src="@/assets/curso/tema1/img40.png", data-aos="zoom-in")
      .col-lg-9.col-md-12
        .row.mb-0
          .col-lg-6.mb-0
            ul.lista-ul--color.lista-ul--separador
              li 
                i.fas.fa-angle-right
                | La ejecución de actividades.     
              li 
                i.fas.fa-angle-right
                | La participación de los beneficiarios.     
              li 
                i.fas.fa-angle-right
                | La utilización de recursos.     

          .col-lg-6.mb-0
            ul.lista-ul--color.lista-ul--separador
              li 
                i.fas.fa-angle-right
                | Los productos obtenidos.    
              li 
                i.fas.fa-angle-right
                | Los cambios generados en la comunidad.    
              li 
                i.fas.fa-angle-right
                | Los impactos alcanzados.    

    p.mb-5 Esta etapa es fundamental porque permite establecer las variables clave que posteriormente se convertirán en indicadores.
    

    .row.justify-content-center.mb-4.mb-lg-5(data-aos="zoom-in-right")
      .col-12.col-lg-10
        .row.g-0.align-items-center
          .col-2.col-lg-1.bloque-enlace__icono-col
          .col-10.col-lg-11
            .bloque-enlace
              .bloque-enlace__contenido
                .row.mb-0.justify-content-center
                  .col-lg-7.order-2.order-lg-1
                    p.mb-1.text-bold Ejemplo
                    p.mb-1 Si el objetivo es fortalecer las capacidades productivas de las familias rurales, algunos aspectos que pueden medirse son:
                    ul.lista-ul.mb-0
                      li 
                        i.lista-ul__vineta
                        | Número de capacitaciones realizadas.     
                      li 
                        i.lista-ul__vineta
                        | Número de familias capacitadas.    
                      li 
                        i.lista-ul__vineta
                        | Nivel de asistencia a las actividades.
                      li 
                        i.lista-ul__vineta
                        | Incremento de la productividad agrícola.
                      li 
                        i.lista-ul__vineta
                        | Aplicación de nuevas prácticas productivas.

                  .col-lg-5.col-md-6.mb-3.mb-lg-0.order-1.order-lg-2
                    figure
                      img(src="@/assets/curso/tema1/img42.png", data-aos="zoom-in").mx-auto


    .container
      .titulo-con-imagen-2.mb-5(data-aos="fade-right")
        .titulo-con-imagen-2__fondo
          img.titulo-con-imagen-2__imagen(src="@/assets/curso/img-sub.svg")
          h3.titulo-con-imagen-2__texto Etapa 3. Selección y formulación de los indicadores  

    p.mb-4 Después de identificar los aspectos que se desean medir, se seleccionan los indicadores más adecuados para evaluar cada uno de ellos. La selección debe realizarse teniendo en cuenta criterios como claridad, relevancia, factibilidad, confiabilidad y facilidad de medición.
    p.mb-5 Cada indicador debe expresar de forma precisa qué se medirá, cómo se medirá y cuál será la unidad de medida utilizada. A continuación, se presentan algunos ejemplos de indicadores formulados a partir de diferentes aspectos del proyecto:

    .row.mb-5.justify-content-center.align-items-center
      .col-lg-12
        SlyderF(columnas="col-lg-3 col-xl-3 col-md-6 col-sm-12")
          .tarjeta.bg-color-8.p-4.h-100
            .row.justify-content-center.mb-3
              .col-8
                img(src='@/assets/curso/tema1/img43.svg' alt='', style="width: 90px;").mx-auto
            h4.text-center Capacitación
            p.text-center Número de talleres realizados.
          .tarjeta.bg-color-8.p-4.h-100
            .row.justify-content-center.mb-3
              .col-8
                img(src='@/assets/curso/tema1/img44.svg' alt='', style="width: 90px;").mx-auto
            h4.text-center Cobertura
            p.text-center Número de familias participantes.
          .tarjeta.bg-color-8.p-4.h-100
            .row.justify-content-center.mb-3
              .col-8
                img(src='@/assets/curso/tema1/img45.svg' alt='', style="width: 90px;").mx-auto
            h4.text-center Participación
            p.text-center Porcentaje de asistencia a las actividades.
          .tarjeta.bg-color-8.p-4.h-100
            .row.justify-content-center.mb-3
              .col-8
                img(src='@/assets/curso/tema1/img46.svg' alt='', style="width: 90px;").mx-auto
            h4.text-center Resultado
            p.text-center Incremento porcentual de la producción agrícola.
          .tarjeta.bg-color-8.p-4.h-100
            .row.justify-content-center.mb-3
              .col-8
                img(src='@/assets/curso/tema1/img47.svg' alt='', style="width: 90px;").mx-auto
            h4.text-center Satisfacción
            p.text-center Nivel de satisfacción de los beneficiarios.

    .row.justify-content-center.mb-5(data-aos="zoom-in-right")
      .col-12.col-lg-10
        .row.g-0.align-items-center
          .col-2.col-lg-1.bloque-enlace__icono-col
          .col-10.col-lg-11
            .bloque-enlace
              .bloque-enlace__contenido
                p.mb-2 <b>Importante</b>
                p.mb-0 La adecuada formulación de los indicadores garantiza que la información obtenida sea útil para el seguimiento y la evaluación del proyecto.
              .bloque-enlace__accion


    .container
      .titulo-con-imagen-2.mb-5(data-aos="fade-right")
        .titulo-con-imagen-2__fondo
          img.titulo-con-imagen-2__imagen(src="@/assets/curso/img-sub.svg")
          h3.titulo-con-imagen-2__texto Etapa 4. Establecimiento de la línea base



    .bloque-texto-g.bloque-texto-g--inverso.bg-color-6.p-3.p-sm-4.p-md-5.mb-5
      .bloque-texto-g__img(
        :style="{'background-image': `url(${require('@/assets/curso/tema1/img48.png')})`}"
      )
      .bloque-texto-g__texto.p-4
        p.mb-0 La línea base corresponde a la situación inicial del proyecto antes de iniciar la ejecución de las actividades. Su propósito es proporcionar un punto de referencia que permita comparar posteriormente los resultados alcanzados y determinar los cambios generados por la intervención. La línea base puede construirse mediante encuestas, entrevistas, diagnósticos comunitarios o la revisión de información existente.


    .row.justify-content-center.mb-5(data-aos="zoom-in-right")
      .col-12.col-lg-10
        .row.g-0.align-items-center
          .col-2.col-lg-1.bloque-enlace__icono-col
          .col-10.col-lg-11
            .bloque-enlace
              .bloque-enlace__contenido
                p.mb-2 <b>Ejemplo</b>
                p.mb-0 Antes de iniciar un proyecto de fortalecimiento agrícola, se determina que la producción promedio de los beneficiarios es de 800 kilogramos por hectárea. Este valor se convierte en la línea base que servirá para medir los avances obtenidos durante la ejecución del proyecto.

              .bloque-enlace__accion


    .container
      .titulo-con-imagen-2.mb-5(data-aos="fade-right")
        .titulo-con-imagen-2__fondo
          img.titulo-con-imagen-2__imagen(src="@/assets/curso/img-sub.svg")
          h3.titulo-con-imagen-2__texto Etapa 5. Definición de metas


    p.mb-5 Las metas representan los resultados específicos que se espera alcanzar durante la ejecución del proyecto. Deben ser realistas, medibles y estar relacionadas directamente con los indicadores definidos. Las metas permiten establecer el nivel de desempeño esperado y constituyen el principal criterio para evaluar el cumplimiento del proyecto.

    .row.justify-content-center.mb-5(data-aos="zoom-in-right")
      .col-12.col-lg-10
        .row.g-0.align-items-center
          .col-2.col-lg-1.bloque-enlace__icono-col
          .col-10.col-lg-11
            .bloque-enlace
              .bloque-enlace__contenido
                p.mb-1.text-bold Ejemplos
                ul.lista-ul.mb-0
                  li 
                    i.lista-ul__vineta
                    | Partiendo de una línea base de 800 kg por hectárea, la meta puede consistir en incrementar la producción promedio a 1.100 kg por hectárea al finalizar el proyecto.
                  li 
                    i.lista-ul__vineta
                    | Si se pretende capacitar a 100 familias, la meta será alcanzar la participación efectiva de la totalidad de los beneficiarios previstos.    
                    
              .bloque-enlace__accion


    .container
      .titulo-con-imagen-2.mb-5(data-aos="fade-right")
        .titulo-con-imagen-2__fondo
          img.titulo-con-imagen-2__imagen(src="@/assets/curso/img-sub.svg")
          h3.titulo-con-imagen-2__texto Etapa 6. Definición de fuentes de información y mecanismos de recolección de datos
          
    p.mb-5 Una vez establecidos los indicadores y las metas, es necesario determinar de dónde se obtendrá la información requerida para su medición. Las fuentes de información pueden ser primarias o secundarias. 


    .row.justify-content-center.mb-5
      .col-lg-4.col-md-12.order-2.order-lg-1.mb-4.mb-lg-0
        .tarjeta.bg-color-1.p-4
          h4.mb-2 Las fuentes primarias incluyen:
          ul.lista-ul.mb-0
            li.mb-0 
              i.lista-ul__vineta
              | Encuestas.
            li.mb-0 
              i.lista-ul__vineta
              | Entrevistas.
            li.mb-0 
              i.lista-ul__vineta
              | Observación directa.
            li.mb-0 
              i.lista-ul__vineta
              | Grupos focales.
            li.mb-0 
              i.lista-ul__vineta
              | Reuniones comunitarias.

      
      .col-lg-3.col-md-8.order-1.order-lg-2.mb-4.mb-lg-0
        figure
          img(src="@/assets/curso/tema1/img49.png", alt="").img-100

      .col-lg-5.col-md-12.order-3.order-lg-3.mb-0.mb-lg-0
        .tarjeta.bg-color-3.p-4
          h4.mb-2 Las fuentes secundarias comprenden:
          ul.lista-ul.mb-0
            li.mb-0 
              i.lista-ul__vineta
              | Informes técnicos.
            li.mb-0 
              i.lista-ul__vineta
              | Registros administrativos.
            li.mb-0 
              i.lista-ul__vineta
              | Bases de datos.
            li.mb-0 
              i.lista-ul__vineta
              | Actas de reunión.
            li.mb-0 
              i.lista-ul__vineta
              | Documentos institucionales. 

    p.mb-4 Asimismo, deben definirse los instrumentos que se utilizarán para recopilar la información, tales como formatos de asistencia, listas de verificación, formularios digitales o bases de datos.


    //- titulo

    .container
      .titulo-con-imagen-2.mb-5(data-aos="fade-right")
        .titulo-con-imagen-2__fondo
          img.titulo-con-imagen-2__imagen(src="@/assets/curso/img-sub.svg")
          h3.titulo-con-imagen-2__texto Etapa 7. Recolección y registro de información

    p.mb-4 En esta etapa se recopilan los datos necesarios para medir cada indicador. La información debe recolectarse de manera periódica y sistemática, siguiendo procedimientos estandarizados que garanticen su calidad y confiabilidad. Es importante que los responsables del seguimiento registren adecuadamente la información para facilitar su posterior análisis.

    .row.justify-content-center.mb-5(data-aos="zoom-in-right")
      .col-12.col-lg-10
        .row.g-0.align-items-center
          .col-2.col-lg-1.bloque-enlace__icono-col
          .col-10.col-lg-11
            .bloque-enlace
              .bloque-enlace__contenido
                p.mb-1.text-bold Ejemplo
                p.mb-0 Durante una jornada de capacitación pueden diligenciarse listas de asistencia, elaborar registros fotográficos y aplicar encuestas de satisfacción como evidencia del cumplimiento de las actividades.  
                    
              .bloque-enlace__accion


    //- titulo

    .container
      .titulo-con-imagen-2.mb-5(data-aos="fade-right")
        .titulo-con-imagen-2__fondo
          img.titulo-con-imagen-2__imagen(src="@/assets/curso/img-sub.svg")
          h3.titulo-con-imagen-2__texto Etapa 8. Procesamiento y análisis de resultados


    .row.justify-content-center.mb-5.align-items-center
      .col-lg-4.col-md-12.mb-4.mb-lg-0
        p.mb-0 Una vez recopilada la información, se procede a organizarla, consolidarla y analizarla. El análisis consiste en comparar los resultados obtenidos con las metas establecidas para determinar el nivel de cumplimiento alcanzado. Este proceso permite identificar avances, dificultades, desviaciones y oportunidades de mejora: 

      .col-12.col-lg-8
        .row.g-0.align-items-center
          .col-2.col-lg-1.bloque-enlace__icono-col
          .col-10.col-lg-11
            .bloque-enlace
              .bloque-enlace__contenido
                p.mb-1.text-bold Ejemplo

                ul.lista-ul.mb-2
                  li.mb-1 
                    i.lista-ul__vineta
                    | Meta establecida: capacitar a 100 familias rurales.
                  li.mb-1 
                    i.lista-ul__vineta
                    | Resultado obtenido: 95 familias capacitadas.
                  li.mb-1 
                    i.lista-ul__vineta
                    | Nivel de cumplimiento: 95 %. 

                p.mb-0 En este caso, el proyecto alcanzó un cumplimiento del 95 % de la meta propuesta.
                    
              .bloque-enlace__accion

    p.mb-5 Además de los cálculos cuantitativos, el análisis puede incluir la interpretación de información cualitativa relacionada con la satisfacción de los beneficiarios, las dificultades encontradas y los cambios identificados en la comunidad.

    //- titulo
    .container
      .titulo-con-imagen-2.mb-5(data-aos="fade-right")
        .titulo-con-imagen-2__fondo
          img.titulo-con-imagen-2__imagen(src="@/assets/curso/img-sub.svg")
          h3.titulo-con-imagen-2__texto Etapa 9. Elaboración de informes y comunicación de resultados
          
    p.mb-5 Los resultados obtenidos deben presentarse de manera organizada mediante informes de seguimiento y evaluación. Estos informes permiten comunicar la información a los diferentes actores involucrados en el proyecto, entre ellos:
    
    .row.mb-5
      .col-lg-4.col-md-6.mb-4
        .bg-color-2.br-15.mb-3.mb-lg-0.p-lg-1.p-2.h-100  
          .row.mb-0.justify-content-center.align-items-center
            .col-auto
              figure
                img(src="@/assets/curso/tema1/img50.svg", data-aos="zoom-in")
            .col-lg
              p.mb-0.text-md-center(data-aos="fade-right") Beneficiarios.
      .col-lg-4.col-md-6.mb-4
        .bg-color-2.br-15.mb-3.mb-lg-0.p-lg-1.p-2.h-100
          .row.mb-0.justify-content-center.align-items-center
            .col-auto
              figure
                img(src="@/assets/curso/tema1/img51.svg", data-aos="zoom-in")
            .col-lg
              p.mb-0.text-md-center(data-aos="fade-right") Líderes comunitarios.
      .col-lg-4.col-md-6.mb-4
        .bg-color-2.br-15.mb-3.mb-lg-0.p-lg-1.p-2.h-100
          .row.mb-0.justify-content-center.align-items-center
            .col-auto
              figure
                img(src="@/assets/curso/tema1/img52.svg", data-aos="zoom-in")
            .col-lg
              p.mb-0.text-md-center(data-aos="fade-right") Organizaciones ejecutoras.
      .col-lg-4.col-md-6.mb-4
        .bg-color-6.br-15.mb-3.mb-lg-0.p-lg-1.p-2.h-100
          .row.mb-0.justify-content-center.align-items-center
            .col-auto
              figure
                img(src="@/assets/curso/tema1/img53.svg", data-aos="zoom-in")
            .col-lg
              p.mb-0.text-md-center(data-aos="fade-right") Entidades financiadoras.
      .col-lg-4.col-md-6.mb-4
        .bg-color-6.br-15.mb-3.mb-lg-0.p-lg-1.p-2.h-100
          .row.mb-0.justify-content-center.align-items-center
            .col-auto
              figure
                img(src="@/assets/curso/tema1/img54.svg", data-aos="zoom-in")
            .col-lg
              p.mb-0.text-md-center(data-aos="fade-right") Organismos de control.


    .row.justify-content-center.mb-5(data-aos="zoom-in-right")
      .col-12.col-lg-10
        .row.g-0.align-items-center
          .col-2.col-lg-1.bloque-enlace__icono-col
          .col-10.col-lg-11
            .bloque-enlace
              .bloque-enlace__contenido
                p.mb-1.text-bold Importante
                p.mb-0 La comunicación adecuada de los resultados favorece la transparencia y fortalece los procesos de rendición de cuentas.
                    
              .bloque-enlace__accion



    .container
      .titulo-con-imagen-2.mb-5(data-aos="fade-right")
        .titulo-con-imagen-2__fondo
          img.titulo-con-imagen-2__imagen(src="@/assets/curso/img-sub.svg")
          h3.titulo-con-imagen-2__texto Etapa 10. Toma de decisiones y acciones de mejora


    .row.mb-4.justify-content-center.align-items-center
      .col-lg-4.mb-4.mb-lg-0.col-md-8
        figure
          img(src="@/assets/curso/tema1/img55.png", data-aos="zoom-in")
      .col-lg-8.col-md-12
        P.mb-3 La etapa final consiste en utilizar la información obtenida para apoyar la toma de decisiones. Los resultados de los indicadores permiten identificar fortalezas, debilidades, riesgos y oportunidades de mejora dentro del proyecto. Con base en esta información pueden implementarse las siguientes acciones:

        .row.mb-3
          .col-lg-6.mb-0
            ul.lista-ul--color.lista-ul--separador
              li 
                i.fas.fa-angle-right
                | Acciones preventivas para evitar problemas futuros.
              li 
                i.fas.fa-angle-right
                | Acciones correctivas para solucionar las desviaciones identificadas.
    
          .col-lg-6.mb-0
            ul.lista-ul--color.lista-ul--separador
              li 
                i.fas.fa-angle-right
                | Acciones de mejora para optimizar procesos y resultados.
              li 
                i.fas.fa-angle-right
                | Ajustes en las actividades, los cronogramas o los presupuestos.
              
        p.mb-0 De esta manera, los indicadores dejan de ser únicamente herramientas de medición y se convierten en instrumentos fundamentales para la gestión eficiente y la mejora continua de los proyectos comunitarios.
    
    separador
    
    #t_1_3.titulo-segundo.color-acento-contenido(data-aos="flip-up")
      h2 1.3. Registros para el seguimiento de proyectos


    .bloque-texto-g.bloque-texto-g--inverso.bg-color-2.p-3.p-sm-4.p-md-5.mb-5
      .bloque-texto-g__img(
        :style="{'background-image': `url(${require('@/assets/curso/tema1/img56.png')})`}"
      )
      .bloque-texto-g__texto.p-4
        p.mb-0 El seguimiento de proyectos comunitarios requiere información confiable, organizada y verificable que permita evidenciar el desarrollo de las actividades, la participación de los beneficiarios y el cumplimiento de los objetivos establecidos. Para ello, es indispensable implementar mecanismos de registro que faciliten la recopilación, conservación y consulta de la información generada durante la ejecución del proyecto.

    p.mb-4 Los registros constituyen una fuente fundamental de evidencia para demostrar los avances alcanzados, respaldar la toma de decisiones y facilitar los procesos de evaluación, auditoría y rendición de cuentas. Además, permiten documentar la experiencia adquirida durante la ejecución del proyecto, convirtiéndose en una herramienta valiosa para la gestión del conocimiento y la mejora continua.


    .row.align-items-center.justify-content-center.mb-5(data-aos="fade-right")
      .col-lg-auto.d-none.d-lg-flex
        img(src="@/assets/curso/tema1/img57.svg").mx-auto
      .col-lg(data-aos="fade-right")
        p.mb-0 Dentro de los proyectos comunitarios, los registros de participación comunitaria ocupan un lugar central, ya que permiten evidenciar el involucramiento de los beneficiarios y demás actores sociales en las diferentes actividades desarrolladas.


    .container
      .titulo-con-imagen.mb-5(data-aos="fade-right")
        .titulo-con-imagen__fondo
          img.titulo-con-imagen__imagen(src="@/assets/curso/img-subtitulo.svg")
          h3.titulo-con-imagen__texto Concepto e importancia

    p.mb-3 Los registros para el seguimiento de proyectos son documentos físicos o digitales utilizados para recopilar, organizar, almacenar y conservar información relacionada con las actividades, los recursos, los participantes, los resultados y las evidencias generadas durante la ejecución de un proyecto.
    p.mb-5 A continuación, se presenta una explicación sobre la importancia de los registros en el seguimiento de proyectos, destacando su función como herramientas fundamentales para documentar el desarrollo de las actividades, respaldar la toma de decisiones y verificar el cumplimiento de los objetivos y las metas establecidas: 



    .row.justify-content-center.align-items-center.mb-5
      .col-lg-10.col-md-12
        .bg-fondo-5.tarjeta.px-5.py-4
          .row.align-items-center.justify-content-center
            .col-md-6.col-lg-3.mb-3.mb-lg-0
              figure
                img(src="@/assets/curso/tema1/img59.png", data-aos="zoom-in")
            .col-lg-9.p-0.p-lg-4
              //- p(data-aos="fade-left").mb-4 Lo invitamos a acceder al siguiente pódcast, cuyo contenido le permitirá fortalecer el protocolo de atención en la recepción hotelera.
              
              TarjetaAudio.color-acento-contenido.bg-color-white.mb-3(
                texto="Importancia de los registros en el seguimiento de proyectos"
                tiempo
                :audio="require('../assets/curso/audio/1.mp3')"
              )


    .row.mb-5.justify-content-center.align-items-center
      .col-lg-3.mb-4.mb-lg-0.col-md-8.order-1.order-lg-2
        figure
          img(src="@/assets/curso/tema1/img60.png", data-aos="zoom-in")
      .col-lg-9.order-2.order-lg-1
        p.mb-3(data-aos="fade-right") Estos aportes convierten los registros en un componente esencial para el seguimiento, la evaluación y la mejora continua de los proyectos comunitarios.
        p.mb-3 Entre los diferentes registros utilizados en el seguimiento de proyectos, los registros de participación comunitaria ocupan un lugar central, ya que permiten documentar la asistencia, la intervención y la vinculación de los miembros de la comunidad en las actividades desarrolladas.

        .bg-color-7.p-4.mb-0.br-15
          p.mb-0 Estos registros recopilan información sobre la participación de los beneficiarios en reuniones, capacitaciones, jornadas de trabajo comunitario, talleres, mesas de concertación, procesos de formación y demás actividades ejecutadas durante el proyecto. La información consignada constituye una evidencia objetiva del nivel de involucramiento de la comunidad y facilita la verificación del cumplimiento de las metas relacionadas con la participación ciudadana.
          

    .container
      .titulo-con-imagen.mb-5(data-aos="fade-right")
        .titulo-con-imagen__fondo
          img.titulo-con-imagen__imagen(src="@/assets/curso/img-subtitulo.svg")
          h3.titulo-con-imagen__texto Tipos de registros

    p.mb-4 Durante la ejecución de un proyecto comunitario se generan diferentes tipos de registros, cada uno con funciones específicas dentro del proceso de seguimiento y control.
    
    
    .row.mb-5.justify-content-center.align-items-center
      .col-lg-3.mb-4.mb-lg-0.col-md-8
        figure
          img(src="@/assets/curso/tema1/img61.png", data-aos="zoom-in")
      .col-lg-9
        TabsA.color-acento-botones
          .tarjeta.color-acento-botones--borde.p-4(titulo="Registros de asistencia")
            p.mb-0 Evidencian la participación de los beneficiarios en reuniones, capacitaciones, talleres, jornadas comunitarias y demás actividades del proyecto. Generalmente incluyen el nombre del participante, número de identificación, organización o grupo al que pertenece, fecha de la actividad, firma de asistencia y datos de contacto. Estos registros permiten verificar la cobertura de las actividades y medir indicadores relacionados con la participación comunitaria.
          .tarjeta.color-acento-botones--borde.p-4(titulo="Actas de reunión")
            p.mb-0 Registran los temas tratados, las decisiones adoptadas y los compromisos adquiridos durante reuniones de trabajo o espacios de concertación comunitaria. Incluyen la fecha y el lugar de la reunión, lista de asistentes, temas desarrollados, acuerdos alcanzados, compromisos establecidos, responsables y fechas de cumplimiento. Su elaboración facilita el seguimiento de los acuerdos y garantiza la continuidad de las acciones definidas.
          .tarjeta.color-acento-botones--borde.p-4(titulo="Registros fotográficos")
            p.mb-0 Corresponden a las fotografías tomadas durante la ejecución de las actividades del proyecto. Se recomienda acompañarlas con la fecha, el lugar, la actividad desarrollada y una descripción de la evidencia. Complementan los informes de seguimiento y respaldan las actividades ejecutadas.
          .tarjeta.color-acento-botones--borde.p-4(titulo="Bitácoras de campo")
            p.mb-0 Documentan las anotaciones realizadas durante visitas técnicas, recorridos de inspección o actividades de monitoreo. Incluyen la fecha de la visita, el lugar, las actividades desarrolladas, los hallazgos identificados y las recomendaciones formuladas. Permiten registrar las situaciones identificadas directamente en el territorio y respaldar el seguimiento técnico del proyecto.

    .bg-fondo-2.p-4.mb-5
      .container
        .tarjeta.row.justify-content-center.align-items-center.mb-0.p-2
          .row.justify-content-center.align-items-center
            .col-lg-3.col-md-8.mb-4.mb-lg-0.p-0.order-1.order-lg-2
              img(src='@/assets/curso/tema1/img62.png', alt='')
            .col-lg-9.col-md-12.p-0.order-2.order-lg-1
              SlyderF(columnas="col-lg-12")
                .tarjeta.bg-white.p-4
                  h4 Informes de avance
                  p Presentan periódicamente el estado de ejecución del proyecto. Incluyen las actividades ejecutadas, los resultados alcanzados, los indicadores de avance, las dificultades encontradas y las acciones implementadas. Facilitan la comunicación de resultados y respaldan la toma de decisiones.
                .tarjeta.bg-white.p-4
                  h4 Registros financieros
                  p Documentan la utilización de los recursos económicos asignados al proyecto. Incluyen ingresos, egresos, facturas, comprobantes de pago y soportes contables. Permiten controlar la ejecución presupuestal y fortalecer la transparencia financiera.
                .tarjeta.bg-white.p-4
                  h4 Bases de datos de beneficiarios
                  p Almacenan información relacionada con los participantes y beneficiarios del proyecto, como datos personales, ubicación, características socioeconómicas, participación en actividades y beneficios recibidos. Facilitan la gestión y el análisis de la información de la población beneficiaria.
                .tarjeta.bg-white.p-4
                  h4 Registros de seguimiento de indicadores
                  p Documentan periódicamente los resultados obtenidos para cada indicador definido en el proyecto. Incluyen el nombre del indicador, la meta establecida, el resultado alcanzado, la fecha de medición y las observaciones. Facilitan el monitoreo permanente del desempeño del proyecto.


    .container
      .titulo-con-imagen.mb-5(data-aos="fade-right")
        .titulo-con-imagen__fondo
          img.titulo-con-imagen__imagen(src="@/assets/curso/img-subtitulo.svg")
          h3.titulo-con-imagen__texto Recomendaciones para el manejo de los registros

    .row.mb-5
      .col-lg-6
        p.mb-0 La adecuada gestión de los registros garantiza la calidad de la información y fortalece los procesos de seguimiento, evaluación y rendición de cuentas.


    .row.mb-5.justify-content-center.align-items-center
      .col-lg-12
        SlyderF(columnas="col-lg-4 col-xl-4 col-md-6 col-sm-12")
          .tarjeta.bg-color-7.p-4.h-100
            .row.justify-content-center.mb-3
              .col-8
                img(src='@/assets/curso/tema1/img63.svg' alt='', style="width: 90px;").mx-auto
            h4.text-center Utilizar formatos estandarizados
            p.text-center Los formatos uniformes facilitan la recopilación, organización, almacenamiento y análisis de la información, permitiendo mantener criterios homogéneos en todos los registros del proyecto.
          .tarjeta.bg-color-7.p-4.h-100
            .row.justify-content-center.mb-3
              .col-8
                img(src='@/assets/curso/tema1/img64.svg' alt='', style="width: 90px;").mx-auto
            h4.text-center Registrar información completa
            p.text-center Todos los campos establecidos en los formatos deben diligenciarse adecuadamente para garantizar que la información sea suficiente y útil para los procesos de seguimiento y evaluación.
          .tarjeta.bg-color-7.p-4.h-100
            .row.justify-content-center.mb-3
              .col-8
                img(src='@/assets/curso/tema1/img65.svg' alt='', style="width: 90px;").mx-auto
            h4.text-center Evitar información ambigua
            p.text-center Los datos registrados deben ser claros, precisos y objetivos, evitando interpretaciones erróneas o inconsistencias en la información documentada.
          .tarjeta.bg-color-7.p-4.h-100
            .row.justify-content-center.mb-3
              .col-8
                img(src='@/assets/curso/tema1/img66.svg' alt='', style="width: 90px;").mx-auto
            h4.text-center Verificar la información antes de archivarla
            p.text-center Es importante revisar la exactitud, coherencia y consistencia de los datos registrados antes de su almacenamiento o utilización en informes y procesos de análisis.
          .tarjeta.bg-color-7.p-4.h-100
            .row.justify-content-center.mb-3
              .col-8
                img(src='@/assets/curso/tema1/img67.svg' alt='', style="width: 90px;").mx-auto
            h4.text-center Mantener respaldo de los documentos
            p.text-center Los registros deben conservarse en formato físico o digital mediante sistemas de archivo y copias de seguridad que eviten la pérdida o el deterioro de la información.
          .tarjeta.bg-color-7.p-4.h-100
            .row.justify-content-center.mb-3
              .col-8
                img(src='@/assets/curso/tema1/img68.svg' alt='', style="width: 90px;").mx-auto
            h4.text-center Garantizar la confidencialidad de los datos
            p.text-center La información personal de los beneficiarios y demás participantes debe manejarse de acuerdo con las normas vigentes de protección de datos, asegurando su uso responsable y seguro.
          .tarjeta.bg-color-7.p-4.h-100
            .row.justify-content-center.mb-3
              .col-8
                img(src='@/assets/curso/tema1/img69.svg' alt='', style="width: 90px;").mx-auto
            h4.text-center Actualizar los registros periódicamente
            p.text-center La información debe mantenerse al día para garantizar su confiabilidad y utilidad en los procesos de seguimiento, evaluación, toma de decisiones y rendición de cuentas.
    
    
    .row.mb-5.justify-content-center.align-items-center
      .col-lg-10.col-md-12
        .cajon.bg-color-c3.p-4
          p.mb-0 La aplicación de estas recomendaciones contribuye a garantizar registros confiables, completos y útiles para la gestión eficiente de los proyectos comunitarios.

</template>

<script>
export default {
  name: 'Tema1',
  data: () => ({
    mostrarIndicadorTarjetaAudio: true,
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
