<template>
  <v-layout>
    <full-page id="idFullPage" ref="fullpage" :options="options">
      <!-- class section is for the fullpage-vue -->
      <div class="section" v-lazy:background-image.idFullPage="imageURL1" :style="styleBg">
        <video-bg :sources="[videoBg1]" autoplay muted loop>
          <intro :textSize="textSizeWelcome"/>
        </video-bg>
      </div>
      <!-- techno -->
      <div class="section">
        <particulesBg/>
        <techno :textSize="textSize" :imageSize="imageSize" :style="styleParticles"/>
        <navButtons @move="move"></navButtons>
      </div>

      <div class="section" v-lazy:background-image.idFullPage="imageURL2" :style="styleBg">
        <video-bg :sources="[videoBg3]" autoplay muted loop>
          <realisation :textSize="textSizeWelcome"/>
        </video-bg>
        <navButtonsUp @move="move"></navButtonsUp>
      </div>
    </full-page>
  </v-layout>
</template>


<script>
import VideoBg from "vue-videobg/src/VideoBackground.vue";
import intro from "~/components/intro.vue";
import techno from "~/components/techno.vue";
import navButtons from "~/components/navButtons.vue";
import navButtonsUp from "~/components/navButtonsUp.vue";
import realisation from "~/components/realisation.vue";
import particulesBg from "~/components/particulesBg.vue";

export default {
  components: {
    VideoBg,
    intro,
    techno,
    navButtons,
    navButtonsUp,
    realisation,
    particulesBg
  },
  data() {
    return {
      styleParticles: {
        position: "absolute",
        top: "17%"
      },
      styleBg: {
        position: "relative",
        "background-size": "cover"
      },
      imageURL1: "bg_sea.png",
      imageURL2: "mer_ecran1.png",
      videoBg1: "bg-1.mp4",
      videoBg3: "bg-3.mp4",
      options: {
        licenceKey: "OPEN-SOURCE-GPLV3-LICENSE"
      }
    };
  },
  computed: {
    imageSize() {
      switch (this.$vuetify.breakpoint.name) {
        case "xs":
          return "height: 20px;";
        case "sm":
          return "height: 50px;";
        case "md":
          return "height: 100px;";
        case "lg":
          return "height: 150px;";
        case "xl":
          return "height: 200px;";
      }
    },
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
span {
  font-family: "Karla";
}
</style>