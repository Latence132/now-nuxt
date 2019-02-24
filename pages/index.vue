<template>
  <v-layout>
    <full-page id="idFullPage" ref="fullpage" :options="options">
      <!-- class section is for the fullpage-vue -->
      <div class="section" v-lazy:background-image.idFullPage="imageURL2" :style="styleBg">
        <video-bg :sources="[videoBg]" autoplay muted loop>
          <intro style="padding-top: 20%"/>
        </video-bg>
      </div>

      <div class="section" v-lazy:background-image="imageURL3" :style="styleBg">
        <neige></neige>
        <v-layout row justify-end>
          <v-flex xs1>
          <v-btn flat icon color="pink" class="prev" @click="$refs.fullpage.api.moveSectionUp()">
            <v-icon>arrow_upward</v-icon>
          </v-btn>
          <v-btn flat icon color="pink" class="next" @click="$refs.fullpage.api.moveSectionDown()">
            <v-icon>arrow_downward</v-icon>
          </v-btn>
        </v-flex>
        </v-layout>
      </div>
      <div class="section" v-lazy:background-image.idFullPage="imageURL1" :style="styleBg">
        <inspire></inspire>
        <v-layout row justify-end>
          <v-flex xs1>
          <v-btn flat icon color="pink" class="prev" @click="$refs.fullpage.api.moveSectionUp()">
            <v-icon>arrow_upward</v-icon>
          </v-btn>
          <v-btn flat icon color="pink" class="next" @click="$refs.fullpage.api.moveSectionDown()">
            <v-icon>arrow_downward</v-icon>
          </v-btn>
        </v-flex>
        </v-layout>
        
      </div>
      <div class="section" v-lazy:background-image.idFullPage="imageURL2" :style="styleBg">
        <v-layout row justify-end>
          <v-flex xs1>
          <v-btn flat icon color="pink" class="prev" @click="$refs.fullpage.api.moveSectionUp()">
            <v-icon>arrow_upward</v-icon>
          </v-btn>
        </v-flex>
        </v-layout>
      </div>
    </full-page>
  </v-layout>
</template>


<script>
import VideoBg from "vue-videobg/src/VideoBackground.vue";
import intro from "~/components/intro.vue";
import neige from "~/components/neige.vue";
import inspire from "~/pages/inspire.vue";
export default {
  components: {
    VideoBg,
    intro,
    neige,
    inspire
  },
  data() {
    return {
      styleBg: {
        "background-size": "100%"
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
  }
};
</script>
<style lang="css">
img[lazy="loaded"] {
  background-size: 100%;
}
</style>