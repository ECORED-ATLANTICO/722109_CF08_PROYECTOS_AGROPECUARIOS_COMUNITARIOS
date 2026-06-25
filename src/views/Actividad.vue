<template lang="pug">
.curso-main-container.pb-3
  BannerInterno(icono="far fa-question-circle" titulo="Actividad didáctica")
  .container.tarjeta.tarjeta--blanca.p-4.p-md-5

    #Actividad                
      <Actividad :cuestionario="cuestionario"/>

</template>

<script>
import Actividad from 'ecored-pkg-fliz/plugin/components/actividad/Actividad.vue'
export default {
  name: 'ActividadDidactica',
  components: {
    Actividad,
  },
  data: () => ({
    cuestionario: {
      tema: 'Seguimiento, evaluación y mejora de proyectos comunitarios',
      titulo: 'Cuestionario',
      introduccion:
        '<b>Objetivo:</b> evaluar el nivel de comprensión de los aprendices sobre los conceptos, herramientas y metodologías relacionadas con el seguimiento, evaluación y mejora de proyectos comunitarios, mediante la resolución de un cuestionario que permita identificar su capacidad para analizar resultados, interpretar indicadores y proponer acciones de mejora en iniciativas de desarrollo rural.<br><br>Lea la pregunta de cada ítem y seleccione la respuesta correcta.',
      barajarPreguntas: true,
      titulo_aprobado: '¡BUEN TRABAJO!',
      titulo_reprobado: 'VUELVA A INTENTARLO.',
      preguntas: [
        {
          id: 1,
          texto:
            'El seguimiento de proyectos comunitarios tiene como principal propósito:',
          imagen: require('@/assets/actividad/imagen1.png'),
          barajarRespuestas: true,
          opciones: [
            {
              id: 'a',
              texto: 'Formular nuevos proyectos productivos.',
              esCorrecta: false,
            },
            {
              id: 'b',
              texto:
                'Supervisar el avance de las actividades y verificar el cumplimiento de lo planificado.',
              esCorrecta: true,
            },
            {
              id: 'c',
              texto: 'Reemplazar a los líderes comunitarios.',
              esCorrecta: false,
            },
            {
              id: 'd',
              texto: 'Elaborar únicamente informes financieros.',
              esCorrecta: false,
            },
          ],
          mensaje_correcto:
            'Se evidencia un adecuado dominio de los conceptos relacionados con el seguimiento, evaluación y mejora de proyectos comunitarios.',
          mensaje_incorrecto:
            'Se recomienda revisar nuevamente los contenidos del componente formativo relacionados con el seguimiento, evaluación y mejora de proyectos comunitarios.',
        },
        {
          id: 2,
          texto: 'La evaluación de proyectos comunitarios consiste en:',
          imagen: require('@/assets/actividad/imagen1.png'),
          barajarRespuestas: true,
          opciones: [
            {
              id: 'a',
              texto:
                'Analizar los resultados obtenidos y valorar el impacto del proyecto.',
              esCorrecta: true,
            },
            {
              id: 'b',
              texto: 'Diseñar nuevos cultivos agrícolas.',
              esCorrecta: false,
            },
            {
              id: 'c',
              texto: 'Elaborar únicamente cronogramas de trabajo.',
              esCorrecta: false,
            },
            {
              id: 'd',
              texto: 'Controlar la asistencia a reuniones comunitarias.',
              esCorrecta: false,
            },
          ],
          mensaje_correcto:
            'Se evidencia un adecuado dominio de los conceptos relacionados con el seguimiento, evaluación y mejora de proyectos comunitarios.',
          mensaje_incorrecto:
            'Se recomienda revisar nuevamente los contenidos del componente formativo relacionados con el seguimiento, evaluación y mejora de proyectos comunitarios.',
        },
        {
          id: 3,
          texto: 'Un indicador de desempeño es:',
          imagen: require('@/assets/actividad/imagen2.png'),
          barajarRespuestas: true,
          opciones: [
            {
              id: 'a',
              texto: 'Una actividad del proyecto.',
              esCorrecta: false,
            },
            {
              id: 'b',
              texto:
                'Un instrumento para medir el avance y los resultados del proyecto.',
              esCorrecta: true,
            },
            {
              id: 'c',
              texto: 'Un tipo de encuesta comunitaria.',
              esCorrecta: false,
            },
            {
              id: 'd',
              texto: 'Un documento contable del proyecto.',
              esCorrecta: false,
            },
          ],
          mensaje_correcto:
            'Se evidencia un adecuado dominio de los conceptos relacionados con el seguimiento, evaluación y mejora de proyectos comunitarios.',
          mensaje_incorrecto:
            'Se recomienda revisar nuevamente los contenidos del componente formativo relacionados con el seguimiento, evaluación y mejora de proyectos comunitarios.',
        },
        {
          id: 4,
          texto: 'Los indicadores de desempeño deben caracterizarse por ser:',
          imagen: require('@/assets/actividad/imagen2.png'),
          barajarRespuestas: true,
          opciones: [
            {
              id: 'a',
              texto: 'Confusos y difíciles de medir.',
              esCorrecta: false,
            },
            {
              id: 'b',
              texto: 'Amplios y sin límite de tiempo.',
              esCorrecta: false,
            },
            {
              id: 'c',
              texto: 'Exclusivos para uso administrativo.',
              esCorrecta: false,
            },
            {
              id: 'd',
              texto: 'Claros, medibles y verificables.',
              esCorrecta: true,
            },
          ],
          mensaje_correcto:
            'Se evidencia un adecuado dominio de los conceptos relacionados con el seguimiento, evaluación y mejora de proyectos comunitarios.',
          mensaje_incorrecto:
            'Se recomienda revisar nuevamente los contenidos del componente formativo relacionados con el seguimiento, evaluación y mejora de proyectos comunitarios.',
        },
        {
          id: 5,
          texto: 'El presupuesto comunitario se define como:',
          imagen: require('@/assets/actividad/imagen3.png'),
          barajarRespuestas: true,
          opciones: [
            {
              id: 'a',
              texto: 'Un registro de asistencia comunitaria.',
              esCorrecta: false,
            },
            {
              id: 'b',
              texto: 'Una lista de beneficiarios del proyecto.',
              esCorrecta: false,
            },
            {
              id: 'c',
              texto: 'Un documento para registrar entrevistas.',
              esCorrecta: false,
            },
            {
              id: 'd',
              texto:
                'Un plan que organiza y controla los recursos financieros del proyecto.',
              esCorrecta: true,
            },
          ],
          mensaje_correcto:
            'Se evidencia un adecuado dominio de los conceptos relacionados con el seguimiento, evaluación y mejora de proyectos comunitarios.',
          mensaje_incorrecto:
            'Se recomienda revisar nuevamente los contenidos del componente formativo relacionados con el seguimiento, evaluación y mejora de proyectos comunitarios.',
        },
        {
          id: 6,
          texto: 'Una lista de verificación se utiliza principalmente para:',
          imagen: require('@/assets/actividad/imagen3.png'),
          barajarRespuestas: true,
          opciones: [
            {
              id: 'a',
              texto: 'Registrar gastos financieros.',
              esCorrecta: false,
            },
            {
              id: 'b',
              texto:
                'Verificar el cumplimiento de actividades o condiciones establecidas.',
              esCorrecta: true,
            },
            {
              id: 'c',
              texto: 'Evaluar cultivos agrícolas.',
              esCorrecta: false,
            },
            {
              id: 'd',
              texto: 'Diseñar proyectos productivos.',
              esCorrecta: false,
            },
          ],
          mensaje_correcto:
            'Se evidencia un adecuado dominio de los conceptos relacionados con el seguimiento, evaluación y mejora de proyectos comunitarios.',
          mensaje_incorrecto:
            'Se recomienda revisar nuevamente los contenidos del componente formativo relacionados con el seguimiento, evaluación y mejora de proyectos comunitarios.',
        },
        {
          id: 7,
          texto: 'Las encuestas de satisfacción permiten:',
          imagen: require('@/assets/actividad/imagen4.png'),
          barajarRespuestas: true,
          opciones: [
            {
              id: 'a',
              texto:
                'Conocer la opinión de los beneficiarios sobre el desarrollo del proyecto.',
              esCorrecta: true,
            },
            {
              id: 'b',
              texto: 'Medir la productividad de los cultivos.',
              esCorrecta: false,
            },
            {
              id: 'c',
              texto: 'Registrar únicamente datos financieros.',
              esCorrecta: false,
            },
            {
              id: 'd',
              texto: 'Elaborar el cronograma del proyecto.',
              esCorrecta: false,
            },
          ],
          mensaje_correcto:
            'Se evidencia un adecuado dominio de los conceptos relacionados con el seguimiento, evaluación y mejora de proyectos comunitarios.',
          mensaje_incorrecto:
            'Se recomienda revisar nuevamente los contenidos del componente formativo relacionados con el seguimiento, evaluación y mejora de proyectos comunitarios.',
        },
        {
          id: 8,
          texto: 'Los registros de participación comunitaria permiten:',
          imagen: require('@/assets/actividad/imagen4.png'),
          barajarRespuestas: true,
          opciones: [
            {
              id: 'a',
              texto: 'Controlar únicamente los recursos financieros.',
              esCorrecta: false,
            },
            {
              id: 'b',
              texto:
                'Registrar la asistencia y participación de los miembros de la comunidad.',
              esCorrecta: true,
            },
            {
              id: 'c',
              texto: 'Diseñar indicadores productivos.',
              esCorrecta: false,
            },
            {
              id: 'd',
              texto: 'Realizar estudios ambientales.',
              esCorrecta: false,
            },
          ],
          mensaje_correcto:
            'Se evidencia un adecuado dominio de los conceptos relacionados con el seguimiento, evaluación y mejora de proyectos comunitarios.',
          mensaje_incorrecto:
            'Se recomienda revisar nuevamente los contenidos del componente formativo relacionados con el seguimiento, evaluación y mejora de proyectos comunitarios.',
        },
        {
          id: 9,
          texto: 'Un estudio de impacto busca principalmente:',
          imagen: require('@/assets/actividad/imagen5.png'),
          barajarRespuestas: true,
          opciones: [
            {
              id: 'a',
              texto:
                'Determinar los cambios generados por el proyecto en la comunidad.',
              esCorrecta: true,
            },
            {
              id: 'b',
              texto: 'Elaborar presupuestos financieros.',
              esCorrecta: false,
            },
            {
              id: 'c',
              texto: 'Registrar la asistencia de los beneficiarios.',
              esCorrecta: false,
            },
            {
              id: 'd',
              texto: 'Diseñar nuevos proyectos.',
              esCorrecta: false,
            },
          ],
          mensaje_correcto:
            'Se evidencia un adecuado dominio de los conceptos relacionados con el seguimiento, evaluación y mejora de proyectos comunitarios.',
          mensaje_incorrecto:
            'Se recomienda revisar nuevamente los contenidos del componente formativo relacionados con el seguimiento, evaluación y mejora de proyectos comunitarios.',
        },
        {
          id: 10,
          texto: 'El impacto social de un proyecto se refiere a:',
          imagen: require('@/assets/actividad/imagen5.png'),
          barajarRespuestas: true,
          opciones: [
            {
              id: 'a',
              texto: 'Cambios en la organización y bienestar de la comunidad.',
              esCorrecta: true,
            },
            {
              id: 'b',
              texto: 'Cambios en la maquinaria agrícola.',
              esCorrecta: false,
            },
            {
              id: 'c',
              texto: 'Cambios en los precios del mercado.',
              esCorrecta: false,
            },
            {
              id: 'd',
              texto: 'Cambios en los insumos productivos.',
              esCorrecta: false,
            },
          ],
          mensaje_correcto:
            'Se evidencia un adecuado dominio de los conceptos relacionados con el seguimiento, evaluación y mejora de proyectos comunitarios.',
          mensaje_incorrecto:
            'Se recomienda revisar nuevamente los contenidos del componente formativo relacionados con el seguimiento, evaluación y mejora de proyectos comunitarios.',
        },
        {
          id: 11,
          texto: 'La entrevista es una herramienta que permite:',
          imagen: require('@/assets/actividad/imagen6.png'),
          barajarRespuestas: true,
          opciones: [
            {
              id: 'a',
              texto:
                'Obtener información directa de los participantes del proyecto.',
              esCorrecta: true,
            },
            {
              id: 'b',
              texto: 'Elaborar presupuestos financieros.',
              esCorrecta: false,
            },
            {
              id: 'c',
              texto: 'Diseñar sistemas de riego.',
              esCorrecta: false,
            },
            {
              id: 'd',
              texto: 'Medir la fertilidad del suelo.',
              esCorrecta: false,
            },
          ],
          mensaje_correcto:
            'Se evidencia un adecuado dominio de los conceptos relacionados con el seguimiento, evaluación y mejora de proyectos comunitarios.',
          mensaje_incorrecto:
            'Se recomienda revisar nuevamente los contenidos del componente formativo relacionados con el seguimiento, evaluación y mejora de proyectos comunitarios.',
        },
        {
          id: 12,
          texto: 'Una entrevista estructurada se caracteriza por:',
          imagen: require('@/assets/actividad/imagen6.png'),
          barajarRespuestas: true,
          opciones: [
            {
              id: 'a',
              texto: 'No tener preguntas definidas.',
              esCorrecta: false,
            },
            {
              id: 'b',
              texto: 'Utilizar un cuestionario previamente establecido.',
              esCorrecta: true,
            },
            {
              id: 'c',
              texto: 'Realizarse únicamente en grupos.',
              esCorrecta: false,
            },
            {
              id: 'd',
              texto: 'Ser completamente improvisada',
              esCorrecta: false,
            },
          ],
          mensaje_correcto:
            'Se evidencia un adecuado dominio de los conceptos relacionados con el seguimiento, evaluación y mejora de proyectos comunitarios.',
          mensaje_incorrecto:
            'Se recomienda revisar nuevamente los contenidos del componente formativo relacionados con el seguimiento, evaluación y mejora de proyectos comunitarios.',
        },
        {
          id: 13,
          texto: 'Las acciones de mejora se implementan para:',
          imagen: require('@/assets/actividad/imagen7.png'),
          barajarRespuestas: true,
          opciones: [
            {
              id: 'a',
              texto: 'Optimizar los procesos y resultados del proyecto.',
              esCorrecta: true,
            },
            {
              id: 'b',
              texto: 'Reemplazar el presupuesto del proyecto.',
              esCorrecta: false,
            },
            {
              id: 'c',
              texto: 'Eliminar la participación comunitaria.',
              esCorrecta: false,
            },
            {
              id: 'd',
              texto: 'Reducir el número de beneficiarios.',
              esCorrecta: false,
            },
          ],
          mensaje_correcto:
            'Se evidencia un adecuado dominio de los conceptos relacionados con el seguimiento, evaluación y mejora de proyectos comunitarios.',
          mensaje_incorrecto:
            'Se recomienda revisar nuevamente los contenidos del componente formativo relacionados con el seguimiento, evaluación y mejora de proyectos comunitarios.',
        },
        {
          id: 14,
          texto: 'Una acción preventiva tiene como objetivo:',
          imagen: require('@/assets/actividad/imagen7.png'),
          barajarRespuestas: true,
          opciones: [
            {
              id: 'a',
              texto: 'Corregir un problema que ya ocurrió.',
              esCorrecta: false,
            },
            {
              id: 'b',
              texto: 'Eliminar los indicadores del proyecto.',
              esCorrecta: false,
            },
            {
              id: 'c',
              texto: 'Anticipar y evitar posibles problemas.',
              esCorrecta: true,
            },
            {
              id: 'd',
              texto: 'Reducir el presupuesto comunitario.',
              esCorrecta: false,
            },
          ],
          mensaje_correcto:
            'Se evidencia un adecuado dominio de los conceptos relacionados con el seguimiento, evaluación y mejora de proyectos comunitarios.',
          mensaje_incorrecto:
            'Se recomienda revisar nuevamente los contenidos del componente formativo relacionados con el seguimiento, evaluación y mejora de proyectos comunitarios.',
        },
        {
          id: 15,
          texto: 'Una acción correctiva se aplica cuando:',
          imagen: require('@/assets/actividad/imagen8.png'),
          barajarRespuestas: true,
          opciones: [
            {
              id: 'a',
              texto: 'Se desea formular un nuevo proyecto.',
              esCorrecta: false,
            },
            {
              id: 'b',
              texto: 'Se identifica un problema o desviación en el proyecto.',
              esCorrecta: true,
            },
            {
              id: 'c',
              texto: 'Se planea el cronograma de actividades.',
              esCorrecta: false,
            },
            {
              id: 'd',
              texto: 'Se organizan reuniones comunitarias.',
              esCorrecta: false,
            },
          ],
          mensaje_correcto:
            'Se evidencia un adecuado dominio de los conceptos relacionados con el seguimiento, evaluación y mejora de proyectos comunitarios.',
          mensaje_incorrecto:
            'Se recomienda revisar nuevamente los contenidos del componente formativo relacionados con el seguimiento, evaluación y mejora de proyectos comunitarios.',
        },
        {
          id: 16,
          texto: 'El monitoreo de un proyecto permite:',
          imagen: require('@/assets/actividad/imagen8.png'),
          barajarRespuestas: true,
          opciones: [
            {
              id: 'a',
              texto:
                'Verificar el cumplimiento de las actividades durante su ejecución.',
              esCorrecta: true,
            },
            {
              id: 'b',
              texto: 'Diseñar sistemas de producción agrícola.',
              esCorrecta: false,
            },
            {
              id: 'c',
              texto: 'Realizar estudios de mercado.',
              esCorrecta: false,
            },
            {
              id: 'd',
              texto: 'Elaborar únicamente informes finales.',
              esCorrecta: false,
            },
          ],
          mensaje_correcto:
            'Se evidencia un adecuado dominio de los conceptos relacionados con el seguimiento, evaluación y mejora de proyectos comunitarios.',
          mensaje_incorrecto:
            'Se recomienda revisar nuevamente los contenidos del componente formativo relacionados con el seguimiento, evaluación y mejora de proyectos comunitarios.',
        },
        {
          id: 17,
          texto: 'Un plan de gastos dentro del presupuesto sirve para:',
          imagen: require('@/assets/actividad/imagen9.png'),
          barajarRespuestas: true,
          opciones: [
            {
              id: 'a',
              texto: 'Registrar la asistencia de los beneficiarios.',
              esCorrecta: false,
            },
            {
              id: 'b',
              texto: 'Elaborar entrevistas comunitarias.',
              esCorrecta: false,
            },
            {
              id: 'c',
              texto: 'Diseñar indicadores sociales.',
              esCorrecta: false,
            },
            {
              id: 'd',
              texto:
                'Organizar el uso de los recursos económicos del proyecto.',
              esCorrecta: true,
            },
          ],
          mensaje_correcto:
            'Se evidencia un adecuado dominio de los conceptos relacionados con el seguimiento, evaluación y mejora de proyectos comunitarios.',
          mensaje_incorrecto:
            'Se recomienda revisar nuevamente los contenidos del componente formativo relacionados con el seguimiento, evaluación y mejora de proyectos comunitarios.',
        },
        {
          id: 18,
          texto:
            'El análisis de la información recolectada en un proyecto permite:',
          imagen: require('@/assets/actividad/imagen9.png'),
          barajarRespuestas: true,
          opciones: [
            {
              id: 'a',
              texto: 'Eliminar las actividades planificadas.',
              esCorrecta: false,
            },
            {
              id: 'b',
              texto: 'Remplazar los objetivos del proyecto.',
              esCorrecta: false,
            },
            {
              id: 'c',
              texto: 'Tomar decisiones para mejorar el proyecto.',
              esCorrecta: true,
            },
            {
              id: 'd',
              texto: 'Suspender la participación comunitaria.',
              esCorrecta: false,
            },
          ],
          mensaje_correcto:
            'Se evidencia un adecuado dominio de los conceptos relacionados con el seguimiento, evaluación y mejora de proyectos comunitarios.',
          mensaje_incorrecto:
            'Se recomienda revisar nuevamente los contenidos del componente formativo relacionados con el seguimiento, evaluación y mejora de proyectos comunitarios.',
        },
        {
          id: 19,
          texto: 'Una característica importante de los estudios de impacto es:',
          imagen: require('@/assets/actividad/imagen10.png'),
          barajarRespuestas: true,
          opciones: [
            {
              id: 'a',
              texto:
                'Analizar cambios generados por el proyecto en la comunidad.',
              esCorrecta: true,
            },
            {
              id: 'b',
              texto: 'Registrar únicamente datos financieros.',
              esCorrecta: false,
            },
            {
              id: 'c',
              texto: 'Elaborar cronogramas de trabajo.',
              esCorrecta: false,
            },
            {
              id: 'd',
              texto: 'Organizar reuniones comunitarias.',
              esCorrecta: false,
            },
          ],
          mensaje_correcto:
            'Se evidencia un adecuado dominio de los conceptos relacionados con el seguimiento, evaluación y mejora de proyectos comunitarios.',
          mensaje_incorrecto:
            'Se recomienda revisar nuevamente los contenidos del componente formativo relacionados con el seguimiento, evaluación y mejora de proyectos comunitarios.',
        },
        {
          id: 20,
          texto:
            'El proceso de mejora continua en los proyectos comunitarios busca:',
          imagen: require('@/assets/actividad/imagen10.png'),
          barajarRespuestas: true,
          opciones: [
            {
              id: 'a',
              texto: 'Eliminar la evaluación de proyectos.',
              esCorrecta: false,
            },
            {
              id: 'b',
              texto: 'Reducir la participación comunitaria.',
              esCorrecta: false,
            },
            {
              id: 'c',
              texto: 'Evitar el seguimiento de las actividades.',
              esCorrecta: false,
            },
            {
              id: 'd',
              texto:
                'Fortalecer la gestión y optimizar los resultados del proyecto.',
              esCorrecta: true,
            },
          ],
          mensaje_correcto:
            'Se evidencia un adecuado dominio de los conceptos relacionados con el seguimiento, evaluación y mejora de proyectos comunitarios.',
          mensaje_incorrecto:
            'Se recomienda revisar nuevamente los contenidos del componente formativo relacionados con el seguimiento, evaluación y mejora de proyectos comunitarios.',
        },
      ],
      mensaje_final_aprobado:
        'Ha superado la actividad y demuestra sólidos conocimientos sobre el seguimiento, evaluación y mejora de proyectos comunitarios',
      mensaje_final_reprobado:
        'No ha superado la actividad. Le recomendamos volver a revisar el componente formativo e intentar nuevamente la actividad didáctica.',
    },
  }),
}
</script>

<style lang="scss"></style>
