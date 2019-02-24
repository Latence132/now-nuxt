<template>
<div>
  <full-page id="idFullPage" ref="fullpage" :options="options">
    <!-- class section is for the fullpage-vue -->
    <div class="section" v-lazy:background-image.idFullPage="imageURL2" :style="styleBg">
      <video-bg :sources="[videoBg]" autoplay muted loop>
        <intro style="padding-top: 20%" />
      </video-bg>
    </div>
    
    <div class="section" v-lazy:background-image="imageURL"  :style="styleBg">
      <neige></neige>
      <button class="prev" @click="$refs.fullpage.api.moveSectionUp()" style="background-color: red;">Prev</button>
      <button class="next" @click="$refs.fullpage.api.moveSectionDown()" style="background-color: red;">Next</button>
    </div>
    <div class="section"  v-lazy:background-image.idFullPage="imageURL1" :style="styleBg">
        <inspire></inspire>
        <button class="prev" @click="$refs.fullpage.api.moveSectionUp()" style="background-color: red;">Prev</button>
        <button class="next" @click="$refs.fullpage.api.moveSectionDown()" style="background-color: red;">Next</button>
    </div>
    <div class="section" v-lazy:background-image.idFullPage="imageURL2" :style="styleBg">
      <button class="prev" @click="$refs.fullpage.api.moveSectionUp()" style="background-color: red;">Prev</button>
    </div>
  </full-page>
</div>
</template>


<script>
import VideoBg from "vue-videobg/src/VideoBackground.vue";
import intro from "~/components/intro.vue";
import neige from "~/components/neige.vue";
import inspire from "~/pages/inspire.vue"
export default {
  components: {
    VideoBg,
    intro,
    neige,
    inspire
  },
  data() {
    return {
      styleBg:{
        "background-size": '100%'
      },
      imageURL: 'aerial-aerial-view-architecture-977pxh.jpg',
      imageURL1: 'black-wallpaper-night-sky-7477_977pxh.jpg',
      imageURL2: 'mer_ecran1.jp2',
      videoBg: 'bg-1.mp4',
      options: {
        licenceKey: 'OPEN-SOURCE-GPLV3-LICENSE'
      }
    }
  }
}
</script>
<style lang="css">
  img[lazy=loaded] {
      background-size: 100%;
    }

</style>