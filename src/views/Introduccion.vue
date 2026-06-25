<template lang="pug">
.curso-main-container.introduccion
  BannerInterno
  .container.tarjeta.tarjeta--blanca.p-4.p-md-5.mb-5
    .titulo-principal.color-acento-contenido
      .titulo-principal__numero
        span
          i.fas.fa-info
      h1 Introducción
    
    .row.mb-5.justify-content-center.align-items-center
      .col-lg-4.mb-4.mb-lg-0.col-md-8
        figure
          img(src="@/assets/curso/intro1.png", data-aos="zoom-in")
      .col-lg-8
        p.mb-4.mb-lg-3(data-aos="fade-right") El componente formativo Seguimiento, evaluación y mejora de proyectos comunitarios se orienta a fortalecer las competencias técnicas y metodológicas necesarias para analizar el desempeño, los resultados y los impactos de las iniciativas productivas desarrolladas en contextos rurales. En el marco del programa proyectos agropecuarios comunitarios, este módulo busca que el aprendiz adquiera herramientas que le permitan realizar procesos sistemáticos de monitoreo, evaluación y mejora continua de los proyectos implementados en las comunidades.
        .bg-color-1.p-4.mb-0
          p.mb-0 El seguimiento y la evaluación constituyen elementos fundamentales para garantizar la efectividad y sostenibilidad de los proyectos comunitarios, ya que permiten verificar el cumplimiento de las actividades planificadas, analizar los resultados obtenidos e identificar oportunidades de fortalecimiento. En este sentido, el componente aborda herramientas como indicadores de desempeño, listas de verificación, encuestas de satisfacción, entrevistas, registros de participación comunitaria y estudios de impacto, los cuales facilitan la recolección, análisis e interpretación de información relevante para la toma de decisiones.
      
    p.mb-5(data-aos="fade-up") Asimismo, el componente integra estrategias orientadas al mejoramiento continuo de los proyectos, mediante la identificación e implementación de acciones de mejora, así como acciones preventivas y correctivas que contribuyan a optimizar los procesos, fortalecer la gestión comunitaria y garantizar el adecuado uso de los recursos disponibles.

    .bloque-texto-g.bloque-texto-g--inverso.bg-color-2.p-3.p-sm-4.p-md-5
      .bloque-texto-g__img(
        :style="{'background-image': `url(${require('@/assets/curso/intro2.png')})`}"
      )
      .bloque-texto-g__texto.p-4
        p.mb-0 Desde una perspectiva pedagógica, el módulo promueve el desarrollo de capacidades para analizar información, evaluar resultados y proponer soluciones que permitan fortalecer las iniciativas productivas comunitarias. De esta manera, se busca que el aprendiz contribuya al fortalecimiento de los procesos de desarrollo rural, promoviendo proyectos agropecuarios más eficientes, participativos y sostenibles en beneficio de las comunidades rurales.


</template>

<script>
export default {
  name: 'Introduccion',
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
