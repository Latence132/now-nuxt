<template>
<div>
  <full-page ref="fullpage" :options="options">
    <!-- class section is for the fullpage-vue -->
    <video-bg class="section" :sources="[videoBg]" v-lazy:background-image="imageURL2" autoplay muted loop>
      <intro></intro>
    </video-bg>
    <div class="section" v-lazy:background-image="imageURL">
      <button class="prev" @click="$refs.fullpage.api.moveSectionUp()" style="background-color: red;">Prev</button>
      <button class="next" @click="$refs.fullpage.api.moveSectionDown()" style="background-color: red;">Next</button>
    </div>
    <div class="section" v-lazy:background-image="imageURL1">
      <button class="prev" @click="$refs.fullpage.api.moveSectionUp()" style="background-color: red;">Prev</button>
      <button class="next" @click="$refs.fullpage.api.moveSectionDown()" style="background-color: red;">Next</button>
    </div>
    <div class="section" v-lazy:background-image="imageURL2">
      <button class="prev" @click="$refs.fullpage.api.moveSectionUp()" style="background-color: red;">Prev</button>
    </div>
  </full-page>
</div>
</template>


<script>
import VideoBg from "vue-videobg/src/VideoBackground.vue";
import intro from "~/components/intro.vue";
export default {
  components: {
    VideoBg,
    intro
  },
  data() {
    return {
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
