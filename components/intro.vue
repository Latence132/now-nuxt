<template>
  <v-layout wrap align-center justify-space-around row fill-height>
    <v-flex class="text-xs-center xs12 black--text opening" :style="textSize">
      <h2 class="opening fill-height">
        <span>Alexandre</span>
        <span>Chaumet</span>
        <span>Développeur</span>
        <span>Web</span>
      </h2>
    </v-flex>
  </v-layout>
</template>

<script>
export default {
  props: {
    textSize: String
  },
  created() {
    setInterval;
  }
};
</script>

<style lang="css"  scoped>
.opening span {
  animation: animateOpen 5s ease-in-out infinite, flash 0.1s ease-in-out;
}

.opening span:nth-child(4n) {
  animation-delay: 3s;
}
.opening span:nth-child(4n-1) {
  animation-delay: 2s;
}
.opening span:nth-child(4n-2) {
  animation-delay: 1s;
}

@keyframes animateOpen {
  from {
    opacity: 1;
  }
  to {
    opacity: 0;
  }
}

@keyframes flash {
  from {
    text-shadow: 0 0 32px white;
  }
  to {
    text-shadow: 0 0 0 white;
  }
}
</style>
