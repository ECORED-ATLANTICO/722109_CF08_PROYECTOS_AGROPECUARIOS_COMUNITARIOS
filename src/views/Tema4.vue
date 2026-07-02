<template lang="pug">
.curso-main-container.pb-3
  BannerInterno
  .container.tarjeta.tarjeta--blanca.p-4.p-md-5.mb-5
    .titulo-principal.color-acento-contenido
      .titulo-principal__numero
        span 4
      h1 Control financiero y mejora continua de proyectos comunitarios

    .bloque-texto-g.bloque-texto-g--inverso.bg-color-10.p-3.p-sm-4.p-md-5.mb-5
      .bloque-texto-g__img(
        :style="{'background-image': `url(${require('@/assets/curso/tema4/img01.png')})`}"
      )
      .bloque-texto-g__texto.p-4
        p.mb-0 La sostenibilidad de un proyecto comunitario depende tanto de los resultados alcanzados como del uso adecuado de los recursos disponibles. Por ello, es necesario implementar mecanismos de control financiero que permitan verificar la correcta ejecución del presupuesto y garantizar la transparencia en el manejo de los recursos.

    p.mb-3 De igual manera, los proyectos deben incorporar procesos de mejora continua que faciliten la corrección de problemas, la prevención de situaciones no deseadas y el fortalecimiento permanente de las actividades desarrolladas. Las acciones de mejora, preventivas y correctivas constituyen herramientas fundamentales para optimizar el desempeño y aumentar la efectividad de las intervenciones comunitarias.

    separador
    
    #t_4_1.titulo-segundo.color-acento-contenido(data-aos="flip-up")
      h2 4.1 Presupuesto comunitario y control de recursos

    .row.mb-5.justify-content-center.align-items-center
      .col-lg-3.mb-4.mb-lg-0.col-md-8
        figure
          img(src="@/assets/curso/tema4/img02.png", data-aos="zoom-in")
      .col-lg-9
        p.mb-3(data-aos="fade-right") La adecuada administración de los recursos constituye uno de los factores más importantes para el éxito de cualquier proyecto comunitario. La disponibilidad de recursos financieros, humanos, materiales y técnicos debe gestionarse de manera responsable para garantizar el cumplimiento de las actividades programadas y el logro de los objetivos establecidos.
        p.mb-0 El presupuesto comunitario es una herramienta que permite planificar, organizar, ejecutar y controlar los recursos económicos destinados a la implementación de un proyecto. A través de este instrumento es posible prever los gastos, realizar seguimiento a la ejecución financiera y verificar que los recursos sean utilizados de manera eficiente, transparente y conforme a los propósitos definidos. La correcta gestión presupuestal facilita la toma de decisiones, fortalece la rendición de cuentas y contribuye a la sostenibilidad de las iniciativas comunitarias.

    


    .container
      .titulo-con-imagen.mb-5(data-aos="fade-right")
        .titulo-con-imagen__fondo
          img.titulo-con-imagen__imagen(src="@/assets/curso/img-subtitulo.svg")
          h3.titulo-con-imagen__texto Concepto de presupuesto comunitario

    .row.mb-5.justify-content-center.align-items-center
      .col-lg-3.mb-4.mb-lg-0.col-md-8.order-1.order-lg-2
        figure
          img(src="@/assets/curso/tema4/img03.png", data-aos="zoom-in")
      .col-lg-9.order-2.order-lg-1
        p.mb-3 El presupuesto comunitario es una herramienta de planificación financiera que permite estimar, organizar y controlar los recursos económicos necesarios para ejecutar las actividades de un proyecto comunitario. En él se detallan los ingresos esperados, las fuentes de financiación y los gastos requeridos para alcanzar los objetivos planteados. Su función principal es garantizar que los recursos disponibles sean distribuidos de manera adecuada y utilizados de forma eficiente, evitando desperdicios, sobrecostos o desviaciones que puedan afectar el desarrollo del proyecto.
        .bg-fondo-6.p-4.mb-0
          p.mb-0 El control financiero del proyecto se apoya en diversos componentes que permiten planificar, ejecutar y supervisar el uso adecuado de los recursos. A continuación, se presentan los principales.

    //- titulo


    .container
      .titulo-con-imagen-2.mb-5(data-aos="fade-right")
        .titulo-con-imagen-2__fondo
          img.titulo-con-imagen-2__imagen(src="@/assets/curso/img-sub.svg")
          h3.titulo-con-imagen-2__texto Plan de gastos
    
    .row.mb-5.justify-content-center.align-items-center
      .col-lg-4.mb-4.mb-lg-0.col-md-12
        .row.align-items-center.mb-0
          .col-lg-12.d-none.d-lg-flex.mb-3
            img(src="@/assets/curso/tema4/img04.svg", style="max-width: 90px")
          .col-lg
            p.mb-0 Es el componente del presupuesto donde se identifican y organizan los costos asociados a cada una de las actividades previstas en el proyecto. Permite prever las necesidades financieras, asignar recursos de manera ordenada y facilitar el seguimiento a la ejecución presupuestal. Un plan de gastos bien elaborado contribuye a evitar improvisaciones, optimizar el uso de los recursos y asegurar que las actividades cuenten con el respaldo financiero necesario para su ejecución.
      
      .col-lg-8.col-md-12.mb-0.mb-lg-0
        .titulo-sexto.color-acento-contenido.mb-3
          h5 
            b Tabla 1.
          span Componentes básicos de un plan de gastos
        .tabla-a.color-acento-contenido.mb-0
          table
            caption <span style="font-weight: normal">Nota. SENA, (2026).</span>
            thead
              tr
                th.tabla7(width="30%") Componente
                th.tabla7(width="70%") Descripción
            tbody
              tr
                td.tabla7 Actividad
                td.tabla7 Acción o tarea que requiere recursos para su ejecución.
              tr
                td.tabla7 Concepto de gasto
                td.tabla7 Bien o servicio que debe adquirirse para desarrollar la actividad.
              tr
                td.tabla7 Cantidad
                td.tabla7 Número de unidades requeridas.
              tr
                td.tabla7 Costo unitario
                td.tabla7 Valor individual de cada bien o servicio.
              tr
                td.tabla7 Costo total
                td.tabla7 Resultado de multiplicar la cantidad por el costo unitario.
              tr
                td.tabla7 Fuente de financiación
                td.tabla7 Entidad, organización o recurso que cubrirá el gasto.
              tr
                td.tabla7 Periodo de ejecución
                td.tabla7 Momento en que se realizará el gasto.
    
    
    //- titulo

    .container
      .titulo-con-imagen-2.mb-5(data-aos="fade-right")
        .titulo-con-imagen-2__fondo
          img.titulo-con-imagen-2__imagen(src="@/assets/curso/img-sub.svg")
          h3.titulo-con-imagen-2__texto Mecanismos de control presupuestal

    p.mb-5 Comprenden el conjunto de procedimientos utilizados para verificar que los recursos se estén ejecutando conforme a lo planeado. Su propósito es garantizar la transparencia, prevenir irregularidades y facilitar la toma de decisiones oportunas frente a posibles desviaciones financieras.

    .row.mb-5.justify-content-center.align-items-center
      .col-lg-3.mb-4.mb-lg-0.col-md-8
        figure 
          img(src="@/assets/curso/tema4/img05.png", data-aos="zoom-in")

      .col-lg-9.col-md-12.mb-0.mb-lg-0
        .titulo-sexto.color-acento-contenido.mb-3
          h5 
            b Tabla 2.
          span Principales mecanismos de control presupuestal
        .tabla-a.color-acento-contenido.mb-0
          table
            caption <span style="font-weight: normal">Nota. SENA, (2026).</span>
            thead
              tr
                th.tabla7(width="30%") Mecanismo
                th.tabla7(width="70%") Descripción
            tbody
              tr
                td.tabla7 Seguimiento presupuestal
                td.tabla7 Comparación periódica entre los gastos ejecutados y los gastos programados.
              tr
                td.tabla7 Control documental
                td.tabla7 Verificación de facturas, recibos, comprobantes y soportes financieros.
              tr
                td.tabla7 Informes financieros
                td.tabla7 Presentación periódica del estado de ejecución de los recursos.
              tr
                td.tabla7 Auditorías internas
                td.tabla7 Revisión sistemática de la gestión financiera realizada por la organización.
              tr
                td.tabla7 Rendición de cuentas
                td.tabla7 Socialización de la información financiera ante beneficiarios y entidades interesadas.
              tr
                td.tabla7 Conciliaciones financieras
                td.tabla7 Comparación entre registros contables y movimientos reales de recursos.

    //- titulo

    .container
      .titulo-con-imagen-2.mb-5(data-aos="fade-right")
        .titulo-con-imagen-2__fondo
          img.titulo-con-imagen-2__imagen(src="@/assets/curso/img-sub.svg")
          h3.titulo-con-imagen-2__texto Técnicas de análisis financiero

    .bloque-texto-g.bloque-texto-g--inverso.bg-color-10.p-3.p-sm-4.p-md-5.mb-5
      .bloque-texto-g__img(
        :style="{'background-image': `url(${require('@/assets/curso/tema4/img06.png')})`}"
      )
      .bloque-texto-g__texto.p-4
        p.mb-0 Permiten evaluar el comportamiento de los recursos económicos del proyecto y determinar si la ejecución financiera se desarrolla conforme a lo planificado. Facilitan comparar los gastos ejecutados con los presupuestados, identificar variaciones, analizar costos, reconocer tendencias y medir el desempeño financiero mediante indicadores.

    .row.mb-5.justify-content-center.align-items-center
      .col-lg-12.col-md-12.mb-0.mb-lg-0
        .titulo-sexto.color-acento-contenido.mb-3
          h5 
            b Tabla 3.
          span Técnicas de análisis financiero
        .tabla-a.color-acento-contenido.mb-0
          table
            caption <span style="font-weight: normal">Nota. SENA, (2026).</span>
            thead
              tr
                th.tabla7(width="30%") Técnica
                th.tabla7(width="70%") Aplicación
            tbody
              tr
                td.tabla7 Análisis de ejecución presupuestal
                td.tabla7 Compara los gastos ejecutados frente a los gastos presupuestados.
              tr
                td.tabla7 Análisis de variaciones
                td.tabla7 Identifica diferencias entre lo planeado y lo ejecutado.
              tr
                td.tabla7 Análisis de costos
                td.tabla7 Evalúa la eficiencia en el uso de los recursos.
              tr
                td.tabla7 Análisis de tendencias
                td.tabla7 Permite identificar comportamientos financieros a lo largo del tiempo.
              tr
                td.tabla7 Análisis de indicadores financieros
                td.tabla7 Facilita medir el desempeño financiero mediante indicadores específicos.



    .row.justify-content-center.mb-5
      .col-lg-6.col-md-12.mb-4.mb-lg-0
        //- titulo
        .row.justify-content-center.mb-0
          .col-lg-12
            .container
              .titulo-con-imagen-2.mb-3(data-aos="fade-right")
                .titulo-con-imagen-2__fondo
                  img.titulo-con-imagen-2__imagen(src="@/assets/curso/img-sub.svg")
                  h3.titulo-con-imagen-2__texto Técnicas de registro contable	
          .col-lg-12
            .tarjeta.bg-color-7.p-4.mb-0.h-100
              p.mb-2 Permiten documentar de manera organizada todas las operaciones financieras realizadas durante la ejecución del proyecto. Entre las técnicas más utilizadas se encuentran:
              ul.lista-ul.mb-0
                li 
                  i.lista-ul__vineta
                  | 	Registro cronológico de ingresos y gastos. 
                li 
                  i.lista-ul__vineta
                  | 	Elaboración de comprobantes contables. 
                li 
                  i.lista-ul__vineta
                  | 	Registro de movimientos bancarios. 
                li 
                  i.lista-ul__vineta
                  | 	Control de caja menor. 
                li 
                  i.lista-ul__vineta
                  | 	Elaboración de libros auxiliares. 
                li 
                  i.lista-ul__vineta
                  | 	Archivo organizado de soportes financieros. 
                li 
                  i.lista-ul__vineta
                  | 	Digitalización y respaldo de información financiera.

      .col-lg-6.col-md-12.mb-0.mb-lg-0
        //- titulo
        .row.justify-content-center.mb-0
          .col-lg-12
            .container
              .titulo-con-imagen-2.mb-3(data-aos="fade-right")
                .titulo-con-imagen-2__fondo
                  img.titulo-con-imagen-2__imagen(src="@/assets/curso/img-sub.svg")
                  h3.titulo-con-imagen-2__texto Métodos de conciliación de presupuesto
          .col-lg-12
            .tarjeta.bg-color-1.p-4.mb-0.h-100
              p.mb-2 Consisten en comparar los registros financieros con la información real de ejecución para verificar su exactitud y detectar posibles diferencias o inconsistencias. 
              ul.lista-ul.mb-0
                li 
                  i.lista-ul__vineta
                  | Conciliación bancaria: compara los registros contables con los movimientos reflejados en extractos bancarios. 
                li 
                  i.lista-ul__vineta
                  | Conciliación de gastos: verifica la correspondencia entre gastos ejecutados y soportes financieros. 
                li 
                  i.lista-ul__vineta
                  | Conciliación de ingresos: comprueba que los recursos recibidos coincidan con los registros financieros. 
                li 
                  i.lista-ul__vineta
                  | Conciliación presupuestal periódica: revisión sistemática del presupuesto ejecutado frente al presupuesto aprobado.

    separador
    
    #t_4_2.titulo-segundo.color-acento-contenido(data-aos="flip-up")
      h2 4.2 Acciones de mejora en proyectos comunitarios

    .bg-fondo-4.px-lg-5.px-2.py-lg-4.py-2
      img(src="@/assets/curso/tema4/img07.png", alt="")
    .row.justify-content-center.align-items-center.z-2.mb-3
      .col-lg-11(data-aos="fade-right")
        p.banner-text Los proyectos comunitarios se desarrollan en contextos dinámicos donde constantemente surgen nuevos retos, necesidades y oportunidades. Por esta razón, es fundamental implementar procesos de mejora continua que permitan fortalecer la gestión, optimizar los recursos y aumentar la efectividad de las intervenciones. Las acciones de mejora representan un conjunto de iniciativas orientadas a corregir debilidades, fortalecer fortalezas y aumentar la capacidad del proyecto para alcanzar sus objetivos de manera eficiente y sostenible.

    p.mb-5 Las acciones de mejora son actividades planificadas que buscan optimizar procesos, fortalecer resultados, corregir situaciones identificadas durante el seguimiento o la evaluación y aumentar la eficacia, la eficiencia y la calidad de la gestión del proyecto. Estas acciones se fundamentan en la información obtenida mediante procesos de monitoreo, evaluación, auditoría o análisis de resultados. Las acciones de mejora pueden clasificarse de acuerdo con el ámbito en el que se implementan.


    .row.mb-5.justify-content-center.align-items-center
      .col-lg-4.mb-4.mb-lg-0.col-md-8.order-1.order-lg-1
        figure
          img(src="@/assets/curso/tema4/img08.png", data-aos="zoom-in")
      .col-lg-8.order-2.order-lg-2.col-md-12
        SlyderF(columnas="col-lg-6 col-xl-6 col-md-12 col-sm-12")
          .tarjeta.bg-color-7.p-4.h-100
            .row.justify-content-center.mb-3
              .col-8
                img(src='@/assets/curso/tema4/img09.svg' alt='', style="width: 90px;").mx-auto
            h4.text-center Mejoras operativas
            p.text-center Buscan optimizar las actividades, los procedimientos y los procesos de trabajo para incrementar la eficiencia en la ejecución del proyecto.
          .tarjeta.bg-color-7.p-4.h-100
            .row.justify-content-center.mb-3
              .col-8
                img(src='@/assets/curso/tema4/img10.svg' alt='', style="width: 90px;").mx-auto
            h4.text-center Mejoras administrativas
            p.text-center Fortalecen la gestión documental, financiera y organizacional, favoreciendo un mejor control de los recursos y de los procesos administrativos.
          .tarjeta.bg-color-7.p-4.h-100
            .row.justify-content-center.mb-3
              .col-8
                img(src='@/assets/curso/tema4/img11.svg' alt='', style="width: 90px;").mx-auto
            h4.text-center Mejoras técnicas
            p.text-center Se orientan al fortalecimiento de metodologías, herramientas y conocimientos especializados que contribuyen a mejorar la calidad de las actividades desarrolladas.
          .tarjeta.bg-color-7.p-4.h-100
            .row.justify-content-center.mb-3
              .col-8
                img(src='@/assets/curso/tema4/img12.svg' alt='', style="width: 90px;").mx-auto
            h4.text-center Mejoras estratégicas
            p.text-center Buscan fortalecer la planificación, la toma de decisiones y la sostenibilidad del proyecto a mediano y largo plazo.
          .tarjeta.bg-color-7.p-4.h-100
            .row.justify-content-center.mb-3
              .col-8
                img(src='@/assets/curso/tema4/img13.svg' alt='', style="width: 90px;").mx-auto
            h4.text-center Mejoras tecnológicas
            p.text-center Incorporan herramientas digitales y soluciones tecnológicas para optimizar la gestión, el seguimiento y el control de las actividades del proyecto.

    p.mb-5 La implementación de estas acciones permite fortalecer la gestión integral del proyecto y promover procesos de mejora continua.

    

    .container
      .titulo-con-imagen.mb-5(data-aos="fade-right")
        .titulo-con-imagen__fondo
          img.titulo-con-imagen__imagen(src="@/assets/curso/img-subtitulo.svg")
          h3.titulo-con-imagen__texto Importancia

      
    .row.align-items-center.mb-5(data-aos="fade-right")
      .col-lg-auto.d-none.d-lg-flex
        img(src="@/assets/curso/tema4/img14.svg", style="")
      .col-lg(data-aos="fade-right")
        p.mb-0 Las acciones de mejora son fundamentales porque permiten transformar los hallazgos de los procesos de seguimiento y evaluación en oportunidades concretas de fortalecimiento institucional y comunitario. Su implementación contribuye a incrementar la calidad de los procesos, mejorar el uso de los recursos, aumentar la satisfacción de los beneficiarios y fortalecer la sostenibilidad de los resultados obtenidos.

    

    .container
      .titulo-con-imagen.mb-5(data-aos="fade-right")
        .titulo-con-imagen__fondo
          img.titulo-con-imagen__imagen(src="@/assets/curso/img-subtitulo.svg")
          h3.titulo-con-imagen__texto Características

    p.mb-4 Para que las acciones de mejora sean efectivas, deben reunir una serie de características que favorezcan su adecuada implementación y seguimiento.

    
    .bg-fondo-2.px-4.pt-4.pt-lg-0.pb-4.pb-lg-0.mb-5.br-15.ps-lg-0
      .tarjeta.row.justify-content-center.align-items-center.mb-0.p-0.pe-lg-2.pt-lg-0.pb-lg-0.ps-lg-0
        .col-lg-3.col-md-8.mb-4.mb-lg-0.p-0.align-self-lg-end
          img(src='@/assets/curso/tema4/img15.png', alt='')
        .col-lg-9.col-md-12.p-3
          .tarjeta--blanca.tarjeta.p-3.px-lg-0.my-lg-0.me-lg-0
            SlyderF(columnas="col-lg-12")
              .tarjeta.bg-white.p-0.p-lg-4
                h4 Planificadas
                p.mb-0 Deben definirse de manera organizada, estableciendo actividades, responsables, recursos y tiempos de ejecución.
              .tarjeta.bg-white.p-0.p-lg-4
                h4 Viables
                p.mb-0 Deben ser posibles de ejecutar con los recursos humanos, técnicos, financieros y de tiempo disponibles.
              .tarjeta.bg-white.p-0.p-lg-4
                h4 Medibles
                p.mb-0 Deben permitir verificar su nivel de cumplimiento mediante indicadores o evidencias objetivas.
              .tarjeta.bg-white.p-0.p-lg-4
                h4 Oportunas
                p.mb-0 Deben implementarse en el momento adecuado para prevenir o corregir situaciones que afecten el proyecto.
              .tarjeta.bg-white.p-0.p-lg-4
                h4 Orientadas a resultados
                p.mb-0 Deben contribuir al logro de los objetivos y al fortalecimiento de la gestión del proyecto.
              .tarjeta.bg-white.p-0.p-lg-4
                h4 Basadas en necesidades reales
                p.mb-0 Deben responder a los hallazgos identificados durante los procesos de seguimiento y evaluación.
              .tarjeta.bg-white.p-0.p-lg-4
                h4 Con responsables definidos
                p.mb-0 Deben asignar claramente las personas encargadas de su implementación y seguimiento.
              .tarjeta.bg-white.p-0.p-lg-4
                h4 Verificables
                p.mb-0 Deben contar con mecanismos que permitan comprobar su ejecución y evaluar su efectividad.
              
    p.mb-5 Estas características contribuyen a que las acciones de mejora generen resultados concretos y sostenibles.

    
    .container
      .titulo-con-imagen.mb-5(data-aos="fade-right")
        .titulo-con-imagen__fondo
          img.titulo-con-imagen__imagen(src="@/assets/curso/img-subtitulo.svg")
          h3.titulo-con-imagen__texto Aplicación
      
    p.mb-3 La aplicación de acciones de mejora implica desarrollar un proceso organizado que permita convertir los hallazgos identificados durante el seguimiento y la evaluación en acciones concretas de fortalecimiento.
    p.mb-4 Este proceso comprende las siguientes etapas:



    .row.justify-content-center.mb-5
      .col-lg-6.col-md-12.mb-4.mb-lg-0
        .tarjeta.bg-color-7.p-4.mb-0.h-100
          ul.lista-ul--color.lista-ul--separador
            li 
              i.fas.fa-angle-right
              | Identificar la situación que requiere fortalecimiento. 
            li 
              i.fas.fa-angle-right
              | Analizar las causas que originan la situación identificada. 
            li 
              i.fas.fa-angle-right
              | Definir las acciones de mejora que se implementarán. 


      .col-lg-6.col-md-12.mb-0.mb-lg-0
        .tarjeta.bg-color-1.p-4.mb-0.h-100
          ul.lista-ul--color.lista-ul--separador
            li 
              i.fas.fa-angle-right
              | Asignar los responsables de su ejecución. 
            li 
              i.fas.fa-angle-right
              | Establecer los plazos para su implementación. 
            li 
              i.fas.fa-angle-right
              | Realizar seguimiento y evaluar los resultados obtenidos. 

    p.mb-5 La aplicación sistemática de estas etapas permite garantizar que las acciones de mejora generen cambios reales, fortalezcan la gestión del proyecto y contribuyan al cumplimiento de los objetivos planteados.


    separador
    
    #t_4_3.titulo-segundo.color-acento-contenido(data-aos="flip-up")
      h2 4.3 Acciones preventivas y correctivas
 
    .row.mb-5.justify-content-center.align-items-center
      .col-lg-3.mb-4.mb-lg-0.col-md-8.order-1.order-lg-2
        figure
          img(src="@/assets/curso/tema4/img16.png", data-aos="zoom-in")
      .col-lg-9.order-2.order-lg-1
        p.mb-3 Durante la ejecución de los proyectos comunitarios pueden surgir situaciones que afecten el cumplimiento de las actividades, el logro de los objetivos o el uso adecuado de los recursos. Algunas de estas situaciones pueden prevenirse mediante una adecuada planificación, mientras que otras requieren acciones específicas para corregir problemas ya identificados.
        p.mb-3 Las acciones preventivas y correctivas constituyen herramientas fundamentales para la gestión de la calidad y la mejora continua, ya que permiten reducir riesgos, solucionar dificultades y fortalecer el desempeño de los proyectos comunitarios.

        .bg-fondo-6.p-4.mb-3
          p.mb-0 Las acciones preventivas son medidas implementadas para evitar la ocurrencia de problemas potenciales antes de que estos se materialicen, mientras que las acciones correctivas son medidas orientadas a eliminar las causas de problemas o incumplimientos que ya han ocurrido, con el fin de evitar su repetición. Ambos tipos de acciones buscan fortalecer la gestión del proyecto y contribuir al cumplimiento de los objetivos establecidos.
        

    .row.mb-2.justify-content-center.align-items-center
      .col-lg-3.mb-4.mb-lg-0.col-md-8
        figure
          img(src="@/assets/curso/tema4/img17.png", data-aos="zoom-in")
      .col-lg-9
        AcordionA(tipo="a" clase-tarjeta="tarjeta bg-color-5")
          div(titulo="Importancia")
            p.ms-5.mb-0 Las acciones preventivas y correctivas permiten anticipar riesgos, minimizar impactos negativos, optimizar procesos y garantizar una respuesta oportuna frente a las dificultades identificadas. Su aplicación fortalece la capacidad de adaptación de las organizaciones, mejora la eficiencia operativa y contribuye a la sostenibilidad de los resultados alcanzados.
          div(titulo="Características")
            p.ms-5.mb-0 Las acciones preventivas y correctivas deben ser oportunas, pertinentes, viables, verificables y orientadas a resolver las causas de los problemas identificados. Además, deben contar con responsables definidos, plazos de ejecución y mecanismos de seguimiento que permitan evaluar su efectividad.
          div(titulo="Metodología de aplicación")
            p.ms-5.mb-3 La implementación de acciones preventivas y correctivas se desarrolla mediante una serie de etapas que facilitan su planificación y ejecución:
            ul.lista-ul.ms-5.mb-3
              li 
                i.lista-ul__vineta
                | <b>Identificación de la situación:</b> reconocimiento del problema o riesgo potencial.
              li 
                i.lista-ul__vineta
                | <b>Análisis de causas:</b> determinación de los factores que originan la situación identificada.
              li 
                i.lista-ul__vineta
                | <b>Definición de acciones:</b> formulación de medidas preventivas o correctivas.
              li 
                i.lista-ul__vineta
                | <b>Asignación de responsables:</b> designación de las personas encargadas de implementar las acciones.
              li 
                i.lista-ul__vineta
                | <b>Ejecución:</b> desarrollo de las actividades definidas.
            p.ms-5.mb-0 La aplicación organizada de estas etapas facilita la implementación de acciones preventivas y correctivas y contribuye al fortalecimiento de la gestión de los proyectos comunitarios.


</template>

<script>
export default {
  name: 'Tema4',
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
