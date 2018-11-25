<template>
<div>
  <full-page ref="fullpage" :options="options">
    <div class="section" v-lazy:background-image="imageURL">
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
export default {
  data() {
    return {
      imageURL: 'aerial-aerial-view-architecture-977pxh.jpg',
      imageURL1: 'black-wallpaper-night-sky-7477_977pxh.jpg',
      imageURL2: 'mer_ecran1.jp2'
    }
  }
}
</script>
