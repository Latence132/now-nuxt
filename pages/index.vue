<template>
<div>
  <full-page ref="fullpage" :options="options">
    <div class="section">
      <button class="next" @click="$refs.fullpage.api.moveSectionDown()" style="background-color: red;">Next</button>
      Section 1
    </div>
    <div class="section">
      <button class="prev" @click="$refs.fullpage.api.moveSectionUp()" style="background-color: red;">Prev</button>
      <button class="next" @click="$refs.fullpage.api.moveSectionDown()" style="background-color: red;">Next</button>
      Section 2
    </div>
    <div class="section">
      <button class="prev" @click="$refs.fullpage.api.moveSectionUp()" style="background-color: red;">Prev</button>
      Section 3
    </div>
  </full-page>
</div>
</template>


<script>
export default {}
</script>
