<template lang="pug">
    v-layout(column px-1 )
      v-card(mx-2)
        v-flex( :style="textSize" pa-1)
            v-card
              span 
              | Bonjour! Moi c'est Alexandre je suis développeur web depuis début 2018. Ancien ingénieur en génie industriel, je me suis réorienté dans le web pour suivre mon appétence à l'informatique.
              | En effet j'ai remarqué assez vite que préfèrais l'informatique aux autres domaines. J'ai commencé ma reconvertion en ligne en débutant par Open Classrooms.
              | J'ai ensuite suivi une formation de Développeur Web au sein de l'IFPA Bordeaux. Je suis maintenant en poste en ESN et je continue d'apprendre avec les docs officielles des dernières technos web. 
              
        v-flex
            v-layout(row wrap pa-1 justify-space-around )
                v-flex(v-for="image,index in listFront" :key="index"  pa-1 ma-1 text-xs-center)
                  v-card.elevation-10
                    img(v-lazy="image.src" :alt="image.alt" :style="imgResponsive" )
        v-flex
            v-layout(row wrap  pa-1 justify-space-around )
                v-flex(v-for="image,index in listBack" :key="index" pa-1 ma-1  text-xs-center )
                  v-card.elevation-10
                    img(v-lazy="image.src" :alt="image.alt" :style="imgResponsive")
        v-flex
            v-layout(row wrap  pa-1 justify-space-around )
                v-flex(v-for="image,index in devTools" :key="index" pa-1 ma-1  text-xs-center )
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
      styleOpa: {
        opacity: "0.5"
      },
      listFront: [
        { src: "Vue.js_Logo_200px_173px.png", alt: "vue_logo" },
        { src: "v_200px.png", alt: "vuetify_logo" },
        { src: "nuxt_200px_156px.png", alt: "nuxt_logo" },
        { src: "angularjs_200px.png", alt: "angular_logo" }
      ],
      listBack: [
        { src: "Node.js_logo_200px.png", alt: "nodejs_logo" },
        { src: "php-200px_150px_logo.png", alt: "php_logo" },
        { src: "Java_Logo_107px_200px.png", alt: "java_logo" }
      ],
      devTools: [
        {src:"docker_256px.png", alt:"docker_logo"},
        {src:"now_256px.jpeg", alt:"now_logo"},
        {src:"jest_256px.png", alt:"jest_logo"},
        {src:"git_256px.png", alt:"git_logo"}
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