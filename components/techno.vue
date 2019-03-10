<template lang="pug">
    v-layout(column, wrap )
        v-flex( :style="textSize")
            span 
            | Bonjour! Moi c'est Alexandre je suis développeur web depuis début 2018. Ancien ingénieur en génie industriel, je me suis réorienté dans le web pour suivre mon appétence à l'informatique.
            | En effet j'ai remarqué assez vite que préfèrais l'informatique aux autres domaines. J'ai commencé ma reconvertion en ligne en débutant par Open Classrooms.
            | J'ai en suite suivi une formation de développeur de l'IFPA Bordeaux. Je suis maintenant en poste en ESN et je continue d'apprendre avec les docs officielles des dernières technos web. 
            
        v-flex
            v-layout(row wrap )
                v-flex(v-for="image,index in listFront" :key="index"   )
                    img(v-lazy="image" :style="imgResponsive")
        v-flex
            v-layout(row wrap )
                v-flex(v-for="image,index in listBack" :key="index"  )
                    img(v-lazy="image" :style="imgResponsive")
</template>

<script>
export default {
  props: {
    textSize: String,
    imgSize: String
  },
  data() {
    return {
      listFront: [
        "Vue.js_Logo_200px_173px.png",
        "v_200px.png",
        "nuxt_200px_156px.png",
        "jquery1_logo_200px_200px.png"
      ],
      listBack: [
        "Node.js_logo_200px.png",
        "php-200px_150px_logo.png",
        "Java_Logo_107px_200px.png"
      ],
      imgResponsive: {
        width: "auto",
        height: "200px"
      }
    };
  },
  computed: {
    imgResComp() {
      return (this.imgResponsive.height = this.imgSize);
    }
  }
};
</script>
