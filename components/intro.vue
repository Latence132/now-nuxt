<template>
<v-layout justify-center)>
  <v-flex class=" text-xs-center xs12 black--text opening">
    <h2 class="opening fill-height ">
      <span>coucou</span>
      <span>c'est</span>
      <span>nous</span>
      <span>:)</span>
      <span></span>
    </h2>
  </v-flex>
</v-layout>
</template>

<script>
export default {
  data() {
    return {
      introText: [ 'Bienvenue', 'sur la page de', 'Alexandre Chaumet', 'Développeur web' ]
    }
  },

}
</script>

<style lang="css" >
.opening span {
  animation:
    animateOpen 5s ease-in-out infinite, flash .1s ease-in-out
  }



.opening span:nth-child(4n){
  animation-delay: 3s;
}
.opening span:nth-child(4n-1) {
  animation-delay: 2s;
}
.opening span:nth-child(4n-2){
  animation-delay: 1s;
}
.opening span:nth-child(4n-3){
  animation-delay: 0s;
}

@keyframes animateOpen{
  from { opacity:1;}
  to { opacity:0;}
  }

@keyframes flash {
  from { text-shadow: 0 0 32px white;}
  to { text-shadow: 0 0 0 white;}
  }
</style>
