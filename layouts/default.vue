<template>
  <v-app dark>
    <v-content>
      <v-container fluid class="ma-0 pa-0">
        <no-ssr>
          <nuxt/>
          <!-- <div> This content will only be visibe on browser render, not server render </div> -->
        </no-ssr>
      </v-container>
    </v-content>
  </v-app>
</template>
