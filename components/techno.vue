<template lang="pug">
    v-layout(column )
      v-card
        v-flex( :style="textSize" pa-3 ma-3)
            v-card
              span 
              | Bonjour! Moi c'est Alexandre je suis développeur web depuis début 2018. Ancien ingénieur en génie industriel, je me suis réorienté dans le web pour suivre mon appétence à l'informatique.
              | En effet j'ai remarqué assez vite que préfèrais l'informatique aux autres domaines. J'ai commencé ma reconvertion en ligne en débutant par Open Classrooms.
              | J'ai en suite suivi une formation de développeur de l'IFPA Bordeaux. Je suis maintenant en poste en ESN et je continue d'apprendre avec les docs officielles des dernières technos web. 
              
        v-flex
            v-layout(row wrap pa-3 ma-3 justify-space-around )
                v-flex(v-for="image,index in listFront" :key="index" xs12 sm6 md3 lg2 )
                  v-card.elevation-10
                    img(v-lazy="image.src" :alt="image.alt" :style="imgResponsive" )
        v-flex
            v-layout(row wrap  pa-3 ma-3 justify-space-around )
                v-flex(v-for="image,index in listBack" :key="index" xs12 sm6 md4 lg3 )
                  v-card.elevation-10
                    img(v-lazy="image.src" :alt="image.alt" :style="imgResponsive")
</template>

<script>
export default {
  props: {
    textSize: String,
    imageSize: String
  },
  data() {
    return {
      listFront: [
        { src: "Vue.js_Logo_200px_173px.png", alt: "vue_logo" },
        { src: "v_200px.png", alt: "vuetify_logo" },
        { src: "nuxt_200px_156px.png", alt: "nuxt_logo" },
        { src: "jquery1_logo_200px_200px.png", alt: "jquery_logo" }
      ],
      listBack: [
        { src: "Node.js_logo_200px.png", alt: "nodejs_logo" },
        { src: "php-200px_150px_logo.png", alt: "php_logo" },
        { src: "Java_Logo_107px_200px.png", alt: "java_logo" }
      ]
    };
  },
  computed: {
    imgResponsive: {
      get: function() {
        return this.imageSize;
      }
    }
  }
};
</script>
