<template>
  <v-layout>
    <full-page id="idFullPage" ref="fullpage" :options="options">
      <!-- class section is for the fullpage-vue -->
      <div class="section" :style="styleBg">
        <video-bg :sources="[videoBg1]" autoplay muted loop v-lazy="image1">
          <intro :textSize="textSizeIntro"/>
            <section style="position : absolute; top: 50px; left:50px">
             <span>Wellcome</span>  <br/>
             {{$ua._parsed.name}}
            <div v-if="$ua.isFromPc()">
              <span>PC</span>
            </div>
            <div v-if="$ua.isFromSmartphone()">
              <span>Smartphone</span>
            </div>
            <div v-if="$ua.isFromMobilephone()">
              <span>Mobilephone</span>
            </div>
            <div v-if="$ua.isFromTablet()">
              <span>Tablet</span>
            </div>
            <div v-if="$ua.isFromAppliance()">
              <span>Appliance</span>
            </div>
            <div v-if="$ua.isFromCrawler()">
              <span>Crawler</span>
            </div>
          </section>
        </video-bg>
      </div>  
      <!-- techno -->
      <div class="section">
        <particulesBg/>
        <techno :textSize="textSizeRealisation" :imageSize="imageSize" :style="styleParticles"/>
        <navButtons @move="move"></navButtons>
      </div>
      <!-- petits devs -->
      <div class="section" :style="[styleBg, styleBgReal]">
        <video-bg :sources="[videoBg3]" autoplay muted loop  v-lazy="image1">
          <realisation :textSize="textSizeRealisation" :imageSize="imageCardSize"/>
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
      ua:null,
      deviceType:null,
      styleParticles: {
        position: "absolute",
        left: "0",
        right: "0",
        marginLeft: "auto",
        marginRight: "auto",
        width: "100%",
        transform: "translate(0%, -50%)"
      },
      styleBgReal:{
        "background-color" : "#1976D2"
      },
      styleBg: {
        "background-size": "cover"
      },
      videoBg1: "bg-1.mp4",
      videoBg3: "bg-3.mp4",
      image1: "sea_bg.png",
      options: {
        sectionsColor: ["#1976D2"],
        licenceKey: "OPEN-SOURCE-GPLV3-LICENSE"
      }
    };
  },
  computed: {
    imageCardSize() {
      switch (this.$vuetify.breakpoint.name) {
        case "xs":
          return "40px";
        case "sm":
          return "100px";
        case "md":
          return "200px";
        case "lg":
          return "300px";
        case "xl":
          return "400px";
      }
    },
    imageSize() {
      switch (this.$vuetify.breakpoint.name) {
        case "xs":
          return "height: 50px;";
        case "sm":
          return "height: 75px;";
        case "md":
          return "height: 100px;";
        case "lg":
          return "height: 150px;";
        case "xl":
          return "height: 200px;";
      }
    },
    textSizeTechno() {
      switch (this.$vuetify.breakpoint.name) {
        case "xs":
          return "font-size: 9px;";
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
    textSizeRealisation() {
      switch (this.$vuetify.breakpoint.name) {
        case "xs":
          return "font-size: 12px;";
        case "sm":
          return "font-size: 14px;";
        case "md":
          return "font-size: 15;";
        case "lg":
          return "font-size: 17;";
        case "xl":
          return "font-size: 22px;";
      }
    },
    textSizeIntro() {
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
  mounted(){
    this.something()    
  },
  methods: {
    something() {
    this.deviceType = this.$ua.deviceType()
    this.ua = this.$ua
  },
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