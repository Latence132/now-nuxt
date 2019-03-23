<template>
  <v-layout wrap align-center justify-space-around row fill-height style="border: 1px dotted red;">
    <v-flex xs12 sm6 md4 lg3 v-for="(realisation, index) in realisations" :key="index">
      <v-hover>
        <v-card slot-scope="{ hover }" :class="`elevation-${hover ? 12 : 2}`">
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
          <v-divider></v-divider>
          <v-card-title>
            <v-flex xs12>{{ realisation.content }}</v-flex>
            <v-flex xs12>
              <v-divider></v-divider>
            </v-flex>
            <v-flex>
              <ul>
                <li v-for="(techno, index) in realisation.technos" :key="index">{{techno}}</li>
              </ul>
            </v-flex>
          </v-card-title>
          <v-card-actions>
            <v-btn flat color="orange">
              <a :href="realisation.lien" class="orange--text">{{ realisation.lien }}</a>
            </v-btn>
          </v-card-actions>
        </v-card>
      </v-hover>
    </v-flex>
  </v-layout>
</template>

<script>
export default {
  data() {
    return {
      realisations: [
        {
          title: "Cette page",
          image: {
            class: "black--text",
            height: "200px",
            src: "fullpagevue.png"
          },
          content: `Une page`,
          technos: ["Vuejs", "Nuxt"],
          lien: "Explore"
        },
        {
          title: "Inspirateur Littéraire",
          image: {
            class: "black--text",
            height: "200px",
            src: "InspirateurLitteraire.png"
          },
          content:
            "Trouvez les  phrases issues de la littéraire Francaise du XXème siècle.Avec plus d'une centaine d'ouvrages scannés et archivé dans une base de données.Vous pouvez extrairent les phrases en précisant un auteur, sujet, verbe et objet",
          technos: ["PHP", "JQuery"],
          lien: "http://chaumetsoftware.com/InspirateurLitteraire/"
        }
      ]
    };
  }
};
</script>