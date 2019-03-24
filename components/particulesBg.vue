<template lang="pug">
    v-flex.particlesCus
        no-ssr
            vue-particles(color="#dedede" hoverMode="repulse" :moveSpeed="2" :lineLinked="true" :particlesNumber="80" )
</template>
<script>
export default {
  data() {
    return {};
  }
};
</script>
<style lang="css" scoped>
.particlesCus {
  position: absolute;
  top: 0%;
  left: 0%;
  width: 100%;
  height: 100%;
}
</style>