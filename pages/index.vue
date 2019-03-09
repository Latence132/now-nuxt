<template>
  <v-layout>
    <full-page id="idFullPage" ref="fullpage" :options="options">
      <!-- class section is for the fullpage-vue -->
      <!-- <div class="section" v-lazy:background-image.idFullPage="imageURL2" :style="styleBg">
        <video-bg :sources="[videoBg]" autoplay muted loop>
          <intro style="padding-top: 20%"/>
        </video-bg>
      </div>

      <div class="section" v-lazy:background-image="imageURL3" :style="styleBg">
        <neige></neige>
         <navButtons @move="move"></navButtons> 
      </div>-->
      <div class="section" v-lazy:background-image.idFullPage="imageURL1" :style="styleBg">
        <techno :textSize="textSize"></techno>
        <navButtons @move="move"></navButtons>
      </div>
      <div class="section" v-lazy:background-image.idFullPage="imageURL2" :style="styleBg">
        <navButtonsUp @move="move"></navButtonsUp>
      </div>
    </full-page>
  </v-layout>
</template>


<script>
import VideoBg from "vue-videobg/src/VideoBackground.vue";
import intro from "~/components/intro.vue";
import neige from "~/components/neige.vue";
//import inspire from "~/pages/inspire.vue";
import techno from "~/components/techno.vue";
import navButtons from "~/components/navButtons.vue";
import navButtonsUp from "~/components/navButtonsUp.vue";

export default {
  components: {
    VideoBg,
    intro,
    neige,
    // inspire,
    techno,
    navButtons,
    navButtonsUp
  },
  data() {
    return {
      styleBg: {
        "background-size": "100%",
        height: "100%"
      },
      imageURL: "aerial-aerial-view-architecture-977pxh.jpg",
      imageURL1: "black-wallpaper-night-sky-7477_977pxh.jpg",
      imageURL2: "mer_ecran1.jp2",
      imageURL3: "menglong-bao-517831-unsplash.jpg",
      videoBg: "bg-1.mp4",
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
</style>