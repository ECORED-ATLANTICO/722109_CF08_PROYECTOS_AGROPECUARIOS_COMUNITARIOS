export default {
  global: {
    Name: 'Seguimiento, evaluación y mejora de proyectos comunitarios',
    Description:
      'El componente formativo fortalece las capacidades para analizar el avance, los resultados y los impactos de los proyectos comunitarios mediante el uso de herramientas de monitoreo, evaluación y registro de información. Asimismo, promueve la aplicación de indicadores, encuestas, entrevistas y estudios de impacto, favoreciendo la implementación de acciones preventivas, correctivas y de mejora continua para fortalecer la gestión y el desarrollo sostenible de las comunidades rurales.',
    imagenBannerPrincipal: require('@/assets/curso/portada/banner-principal.png'),
    fondoBannerPrincipal: require('@/assets/curso/portada/fondo-banner-principal.png'),
    imagenesDecorativasBanner: [],
  },
  menuPrincipal: {
    menu: [
      {
        nombreRuta: 'inicio',
        icono: 'fas fa-home',
        titulo: 'Volver al inicio',
      },
      {
        nombreRuta: 'introduccion',
        icono: 'fas fa-info-circle',
        titulo: 'Introducción',
        desarrolloContenidos: true,
      },
      {
        nombreRuta: 'tema1',
        numero: '1',
        titulo:
          'Seguimiento y control de la ejecución de proyectos comunitarios',
        desarrolloContenidos: true,
        subMenu: [
          {
            numero: '1.1',
            titulo: 'Seguimiento y control de proyectos comunitarios',
            hash: 't_1_1',
          },
          {
            numero: '1.2',
            titulo: 'Indicadores de desempeño para proyectos comunitarios',
            hash: 't_1_2',
          },
          {
            numero: '1.3',
            titulo: 'Registros para el seguimiento de proyectos',
            hash: 't_1_3',
          },
        ],
      },
      {
        nombreRuta: 'tema2',
        numero: '2',
        titulo:
          'Herramientas para la recolección y verificación de información',
        desarrolloContenidos: true,
        subMenu: [
          {
            numero: '2.1',
            titulo: 'Listas de verificación (checklist)',
            hash: 't_2_1',
          },
          {
            numero: '2.2',
            titulo: 'Encuestas de satisfacción',
            hash: 't_2_2',
          },
          {
            numero: '2.3',
            titulo: 'Entrevistas para seguimiento y evaluación',
            hash: 't_2_3',
          },
        ],
      },
      {
        nombreRuta: 'tema3',
        numero: '3',
        titulo: 'Evaluación de resultados e impactos de proyectos comunitarios',
        desarrolloContenidos: true,
        subMenu: [
          {
            numero: '3.1',
            titulo: 'Evaluación de proyectos comunitarios',
            hash: 't_3_1',
          },
          {
            numero: '3.2',
            titulo: 'Estudios de impacto',
            hash: 't_3_2',
          },
          {
            numero: '3.3',
            titulo: 'Interpretación y análisis de resultados',
            hash: 't_3_3',
          },
        ],
      },
      {
        nombreRuta: 'tema4',
        numero: '4',
        titulo:
          'Control financiero y mejora continua de proyectos comunitarios',
        desarrolloContenidos: true,
        subMenu: [
          {
            numero: '4.1',
            titulo: 'Presupuesto comunitario y control de recursos',
            hash: 't_4_1',
          },
          {
            numero: '4.2',
            titulo: 'Acciones de mejora en proyectos comunitarios',
            hash: 't_4_2',
          },
          {
            numero: '4.3',
            titulo: 'Acciones preventivas y correctivas',
            hash: 't_4_3',
          },
        ],
      },
    ],
    subMenu: [
      {
        icono: 'fas fa-sitemap',
        titulo: 'Síntesis',
        nombreRuta: 'sintesis',
        desarrolloContenidos: true,
      },
      {
        nombreRuta: 'actividad',
        icono: 'far fa-question-circle',
        titulo: 'Actividad didáctica',
        desarrolloContenidos: true,
      },
      {
        nombreRuta: 'glosario',
        icono: 'fas fa-sort-alpha-down',
        titulo: 'Glosario',
      },
      /*{
        nombreRuta: 'complementario',
        icono: 'far fa-folder-open',
        titulo: 'Material complementario',
      },*/
      {
        icono: 'fas fa-book',
        titulo: 'Referencias bibliográficas',
        nombreRuta: 'referencias',
      },
      {
        icono: 'fas fa-file-pdf',
        titulo: 'Descargar PDF',
        download: 'downloads/722109_CF08_DU.pdf',
      },
      {
        icono: 'fas fa-download',
        titulo: 'Descargar material',
        download: 'downloads/material.zip',
      },
      {
        icono: 'far fa-registered',
        titulo: 'Créditos',
        nombreRuta: 'creditos',
      },
    ],
  },
  complementario: [],
  glosario: [
    {
      termino: 'Acción correctiva',
      significado:
        'Medida implementada para solucionar un problema o desviación identificada durante la ejecución o evaluación de un proyecto.',
    },
    {
      termino: 'Acción de mejora',
      significado:
        'Actividad o estrategia orientada a optimizar los procesos, resultados o funcionamiento de un proyecto comunitario.',
    },
    {
      termino: 'Acción preventiva',
      significado:
        'Medida adoptada para evitar la ocurrencia de problemas o riesgos durante la ejecución del proyecto.',
    },
    {
      termino: 'Encuesta de satisfacción',
      significado:
        'Instrumento utilizado para recopilar opiniones de los beneficiarios sobre la calidad, utilidad o resultados de un proyecto.',
    },
    {
      termino: 'Entrevista',
      significado:
        'Técnica de recolección de información basada en un diálogo entre entrevistador y entrevistado para obtener opiniones, experiencias o datos relevantes.',
    },
    {
      termino: 'Estudio de impacto',
      significado:
        'Análisis que permite identificar y medir los cambios generados por un proyecto en la comunidad o en el entorno donde se desarrolla.',
    },
    {
      termino: 'Evaluación de proyectos',
      significado:
        'Proceso de análisis que permite valorar los resultados, logros e impactos de un proyecto en relación con los objetivos planteados.',
    },
    {
      termino: 'Impacto',
      significado:
        'Cambio o efecto generado por la ejecución de un proyecto en la comunidad, ya sea social, económico, productivo o ambiental.',
    },
    {
      termino: 'Indicador de desempeño',
      significado:
        'Variable o medida que permite evaluar el avance, cumplimiento y resultados de las actividades de un proyecto.',
    },
    {
      termino: 'Lista de verificación',
      significado:
        'Herramienta utilizada para comprobar el cumplimiento de actividades, requisitos o condiciones previamente establecidas.',
    },
    {
      termino: 'Mejora continua',
      significado:
        'Proceso permanente de optimización de los procedimientos, actividades y resultados de un proyecto.',
    },
    {
      termino: 'Monitoreo',
      significado:
        'Proceso de seguimiento periódico que permite observar el avance de las actividades de un proyecto.',
    },
    {
      termino: 'Presupuesto comunitario',
      significado:
        'Plan financiero que organiza y controla los ingresos y gastos destinados a la ejecución de un proyecto comunitario.',
    },
    {
      termino: 'Registro de participación',
      significado:
        'Documento o formato utilizado para registrar la asistencia y participación de los miembros de la comunidad en las actividades del proyecto.',
    },
    {
      termino: 'Seguimiento',
      significado:
        'Proceso de supervisión que permite verificar el desarrollo de las actividades del proyecto y su cumplimiento frente a lo planificado.',
    },
  ],
  referencias: [
    {
      referencia:
        'Delgado, Y. (2025). <em>Indicadores en proyectos de comunidad</em>. Yesenia Delgado.',
      link:
        'https://www.yeseniadelgado.com/blog/indicadores-en-proyectos-de-comunidad',
    },
    {
      referencia:
        'FasterCapital. (2026). <em>Encuestas comunitarias: Cómo realizar y analizar encuestas y sondeos comunitarios</em>.',
      link:
        'https://fastercapital.com/es/contenido/Encuestas-comunitarias--como-realizar-y-analizar-encuestas-y-sondeos-comunitarios.html',
    },
    {
      referencia:
        'Martínez, J. (s. f.). <em>Guía para el seguimiento y evaluación</em>. Universidad Interamericana para el Desarrollo.',
      link:
        'https://contenidos.unid.edu.mx/unid_v1/unid/lic_ingenieria_software/LNAD_EET01_proyecto_transformacion_5s/docs/guia_seguimiento_evaluacion_martinez.pdf',
    },
    {
      referencia:
        'Santaella, C. (2009). <em>Modelo del proyecto comunitario</em>.',
    },
    {
      referencia:
        'Universidad de Concepción. (s. f.). <em>Guía de participación comunitaria</em>. Programa de Innovación Social UdeC.',
    },
  ],
  creditos: [
    {
      titulo: 'ECOSISTEMA DE RECURSOS EDUCATIVOS DIGITALES',
      autores: [
        {
          nombre: 'Claudia Johanna Gómez Pérez',
          cargo:
            'Responsable Nacional Ecosistema de Recursos Educativos Digitales (RED) - Profesional 06',
          centro: 'Centro Agroturístico – Regional Santander',
        },
        {
          nombre: 'Miguel De Jesús Paredes Maestre',
          cargo: 'Responsable de línea de producción',
          centro: 'Centro de Comercio y Servicios – Regional Atlántico',
        },
      ],
    },
    {
      titulo: 'CONTENIDO INSTRUCCIONAL',
      autores: [
        {
          nombre: 'Andrés Javier Pacheco Wandurraga',
          cargo: 'Experto temático',
          centro: 'Centro Agroturístico – Regional Santander',
        },
        {
          nombre: 'Paola Alexandra Moya Peralta',
          cargo: 'Evaluador instruccional',
          centro: 'Centro de Comercio y Servicios – Regional Atlántico',
        },
      ],
    },
    {
      titulo: 'DISEÑO Y DESARROLLO DE RECURSOS EDUCATIVOS DIGITALES',
      autores: [
        {
          nombre: 'Carmen Alicia Martinez Torres',
          cargo: 'Diseñador de contenidos digitales',
          centro: 'Centro de Comercio y Servicios – Regional Atlántico',
        },
        {
          nombre: 'Álvaro Guillermo Araújo Angarita',
          cargo: 'Desarrollador <i>full stack</i>',
          centro: 'Centro de Comercio y Servicios – Regional Atlántico',
        },
        {
          nombre: 'Nelson Iván Vera Briceño',
          cargo: 'Animador y productor audiovisual',
          centro: 'Centro de Comercio y Servicios – Regional Atlántico',
        },
        {
          nombre: 'Alexander Rafael Acosta Bedoya',
          cargo: 'Animador y productor audiovisual',
          centro: 'Centro de Comercio y Servicios – Regional Atlántico',
        },
      ],
    },
    {
      titulo: 'VALIDACIÓN RECURSO EDUCATIVO DIGITAL',
      autores: [
        {
          nombre: 'Luz Karime Amaya Cabra',
          cargo: 'Evaluador de contenidos inclusivos y accesibles',
          centro: 'Centro de Comercio y Servicios – Regional Atlántico',
        },
        {
          nombre: 'Laura Daniela Burgos Rueda',
          cargo: 'Evaluador de contenidos inclusivos y accesibles',
          centro: 'Centro de Comercio y Servicios – Regional Atlántico',
        },
        {
          nombre: 'Jonathan Adié Villafañe',
          cargo: 'Validador y vinculador de recursos educativos digitales',
          centro: 'Centro de Comercio y Servicios – Regional Atlántico',
        },
        {
          nombre: 'Karine Isabel Ospino Fritz',
          cargo: 'Validador y vinculador de recursos educativos digitales',
          centro: 'Centro de Comercio y Servicios – Regional Atlántico',
        },
      ],
    },
  ],
  creditosAdicionales: {
    imagenes:
      'Fotografías y vectores tomados de <a href="https://www.freepik.es/" target="_blank">www.freepik.es</a>, <a href="https://www.shutterstock.com/" target="_blank">www.shutterstock.com</a>, <a href="https://unsplash.com/" target="_blank">unsplash.com </a>y <a href="https://www.flaticon.com/" target="_blank">www.flaticon.com</a>',
    creativeCommons:
      'Licencia creative commons CC BY-NC-SA<br><a href="https://creativecommons.org/licenses/by-nc-sa/2.0/" target="_blank">ver licencia</a>',
  },
}
