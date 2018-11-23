<template>
<v-app dark>
  <v-content>
    <v-container>
      <no-ssr>
        <full-page :options="options">
          <nuxt />
          <!-- <div> This content will only be visibe on browser render, not server render </div> -->
        </full-page>
      </no-ssr>

    </v-container>
  </v-content>
</v-app>
</template>
