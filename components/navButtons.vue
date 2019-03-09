<template lang="pug">
        v-layout( row justify-end  :style="styleButtons")
          v-flex(xs1 )
            v-btn( flat icon color="pink" class="prev" @click="$emit('move','up')")
                v-icon arrow_upward

            v-btn(flat icon color="pink" class="next" @click="$emit('move','down')")
                v-icon arrow_downward
</template>

<script>
export default {
  data() {
    return {
      styleButtons: {
        position: "absolute",
        top: "50%",
        right: "5%"
      }
    };
  }
};
</script>
