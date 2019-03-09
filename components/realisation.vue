<template>
  <v-container fluid>
    <v-layout
      wrap
      align-center
      justify-space-around
      row
      fill-height
      style="border: 1px dotted red;"
    >
      <v-flex xs12 sm6 md4 lg3 v-for="(realisation, index) in realisations" :key="index">
        <v-card class="elevation-24">
          <v-img
            :class="realisation.image.class"
            :height="realisation.image.height"
            :src="realisation.image.src"
          >
            <v-container fill-height fluid>
              <v-layout fill-height>
                <v-flex xs12 align-end flexbox>
                  <span class="headline">{{ realisation.title }}</span>
                </v-flex>
              </v-layout>
            </v-container>
          </v-img>
          <v-card-title>
            <div>{{ realisation.content }}</div>
          </v-card-title>
          <v-card-actions>
            <v-btn flat color="orange">
              <a :href="realisation.lien" class="orange--text">{{ realisation.lien }}</a>
            </v-btn>
          </v-card-actions>
        </v-card>
      </v-flex>
    </v-layout>
  </v-container>
</template>

<script>
export default {
  data() {
    return {
      realisations: [
        {
          title: "Top 10 Australian beaches",
          image: {
            class: "white--text,",
            height: "200px",
            src: "https://cdn.vuetifyjs.com/images/cards/docks.jpg"
          },
          content:
            "Number 10\nWhitehaven Beach\nWhitsunday Island, Whitsunday Islands",
          lien: "Explore"
        },
        {
          title: "Inspirateur Littéraire",
          image: {
            class: "black--text",
            height: "200px",
            src: "InspirateurLitteraire_1024px.png"
          },
          content:
            "Trouvez les phrases issues de la littéraire Francaise du XXème siècle.\nAvec plus d'une centaine d'ouvrages scannés et archivé dans une base de données. Vous pouvez extrairent les phrases en précisant un auteur, sujet, verbe et compléments",
          lien: "http://chaumetsoftware.com/InspirateurLitteraire/"
        }
      ]
    };
  }
};
</script>