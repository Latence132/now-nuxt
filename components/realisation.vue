<template>
  <v-layout wrap colmun fill-height>
    <v-flex :style="textSize" text-xs-center>Quelques petits développement pour le fun</v-flex>
    <v-layout wrap row align-center justify-space-around fill-height>
      <v-flex ma-1 pa-1 v-for="(realisation, index) in realisations" :key="index" xs12 sm6 md3 lg4>
        <v-hover>
          <v-card slot-scope="{ hover }" :class="`elevation-${hover ? 12 : 2}`">
            <v-img
              :class="realisation.image.class"
              :height="imageSize"
              :src="realisation.image.src"
            >
              <v-container fill-height>
                <v-layout fill-height>
                  <v-flex xs12 align-end flexbox>
                    <span class="headline">{{ realisation.title }}</span>
                  </v-flex>
                </v-layout>
              </v-container>
            </v-img>
            <v-flex pa-1 xs12 :style="textSize">{{ realisation.content }}</v-flex>
            <v-divider></v-divider>

            <v-flex>
              <ul>
                <li
                  pa-1
                  v-for="(techno, index) in realisation.technos"
                  :key="index"
                  :style="textSize"
                >{{techno}}</li>
              </ul>
            </v-flex>

            <v-card-actions>
              <v-btn flat color="orange">
                <a
                  :href="realisation.lien"
                  class="orange--text"
                  :style="textSize"
                >{{ realisation.lien }}</a>
              </v-btn>
            </v-card-actions>
          </v-card>
        </v-hover>
      </v-flex>
    </v-layout>
  </v-layout>
</template>

<script>
export default {
  props: {
    textSize: String,
    imageSize: String
  },
  data() {
    return {
      realisations: [
        {
          title: "Cette page",
          image: {
            class: "black--text",
            src: "fullpagevue.png"
          },
          content: `Cette page même qui sert simplement à être jolie`,
          technos: ["Vuejs", "Nuxt"],
          lien: "Explore"
        },
        {
          title: "Inspirateur Littéraire",
          image: {
            class: "black--text",
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