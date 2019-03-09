<template>
  <v-layout>
    <full-page id="idFullPage" ref="fullpage" :options="options">
      <!-- class section is for the fullpage-vue -->
      <div class="section" v-lazy:background-image.idFullPage="imageURL2" :style="styleBg">
        <video-bg :sources="[videoBg1]" autoplay muted loop>
          <intro :textSize="textSizeWelcome" style="padding-top: 20%"/>
        </video-bg>
      </div>

      <div class="section techno" :style="styleBg">
        <techno :textSize="textSize"/>
        <navButtons @move="move"></navButtons>
      </div>
      <div class="section" v-lazy:background-image.idFullPage="imageURL2" :style="styleBg">
        <video-bg :sources="[videoBg3]" autoplay muted loop>
          <realisation/>
        </video-bg>
        <navButtonsUp @move="move"></navButtonsUp>
      </div>
    </full-page>
  </v-layout>

  <!-- <div class="section" v-lazy:background-image="imageURL3" :style="styleBg">
        <neige></neige>
        <navButtons @move="move"></navButtons>
  </div>-->
  <!-- v-lazy:background-image.idFullPage="imageURL1" -->
</template>


<script>
import VideoBg from "vue-videobg/src/VideoBackground.vue";
import intro from "~/components/intro.vue";
import neige from "~/components/neige.vue";
//import inspire from "~/pages/inspire.vue";
import techno from "~/components/techno.vue";
import navButtons from "~/components/navButtons.vue";
import navButtonsUp from "~/components/navButtonsUp.vue";
import realisation from "~/components/realisation.vue";

export default {
  components: {
    VideoBg,
    intro,
    neige,
    // inspire,
    techno,
    navButtons,
    navButtonsUp,
    realisation
  },
  data() {
    return {
      styleBg: {
        "background-size": "cover"
      },
      styleBgC: {},
      imageURL: "aerial-aerial-view-architecture-977pxh.jpg",
      imageURL1: "black-wallpaper-night-sky-7477_977pxh.jpg",
      imageURL2: "mer_ecran1.jp2",
      imageURL3: "menglong-bao-517831-unsplash.jpg",
      videoBg1: "bg-1.mp4",
      videoBg3: "bg-3.mp4",
      options: {
        licenceKey: "OPEN-SOURCE-GPLV3-LICENSE"
      }
    };
  },
  computed: {
    textSize() {
      switch (this.$vuetify.breakpoint.name) {
        case "xs":
          return "font-size: 12px;";
        case "sm":
          return "font-size: 14px;";
        case "md":
          return "font-size: 15px;";
        case "lg":
          return "font-size: 17px;";
        case "xl":
          return "font-size: 22px;";
      }
    },
    textSizeWelcome() {
      switch (this.$vuetify.breakpoint.name) {
        case "xs":
          return "font-size: 24px;";
        case "sm":
          return "font-size: 28px;";
        case "md":
          return "font-size: 30px;";
        case "lg":
          return "font-size: 34px;";
        case "xl":
          return "font-size: 44px;";
      }
    }
  },
  methods: {
    move(direction) {
      direction === "up"
        ? this.$refs.fullpage.api.moveSectionUp()
        : this.$refs.fullpage.api.moveSectionDown();
    }
  }
};
</script>

<style lang="css">
img[lazy="loaded"] {
  background-size: 100%;
}
.techno {
  /* Permalink - use to edit and share this gradient: http://colorzilla.com/gradient-editor/#45484d+0,000000+100;Black+3D+%231 */
  background: #45484d; /* Old browsers */
  background: -moz-linear-gradient(
    45deg,
    #45484d 0%,
    #000000 100%
  ); /* FF3.6-15 */
  background: -webkit-linear-gradient(
    45deg,
    #45484d 0%,
    #000000 100%
  ); /* Chrome10-25,Safari5.1-6 */
  background: linear-gradient(
    45deg,
    #45484d 0%,
    #000000 100%
  ); /* W3C, IE10+, FF16+, Chrome26+, Opera12+, Safari7+ */
  filter: progid:DXImageTransform.Microsoft.gradient( startColorstr='#45484d', endColorstr='#000000',GradientType=1 ); /* IE6-9 fallback on horizontal gradient */
}
</style>