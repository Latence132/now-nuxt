<template lang="pug">
        v-layout( row justify-end  :style="stylePositionButtons")
          v-flex(xs1 )
            v-btn( flat icon color="pink" class="prev" @click="$emit('move','up')")
                v-icon arrow_upward
</template>

<script>
export default {
  computed: {
    stylePositionButtons() {
      switch (this.$vuetify.breakpoint.name) {
        case "xs":
          return {
            position: "absolute",
            top: "50%",
            right: "15%"
          };
        default:
          return {
            position: "absolute",
            top: "50%",
            right: "5%"
          };
      }
    }
  }
};
</script>
