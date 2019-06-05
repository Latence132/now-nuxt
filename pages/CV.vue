<template lang="pug">
v-flex.black--text(id="cvWrapper" style="background-color: white;" )
  // First banner
  v-parallax(id="parallax" src="https://cdn.vuetifyjs.com/images/backgrounds/vbanner.jpg" height="110" width="100%")
    v-layout(id="cvUpperBanner" xs12 wrap align-center )
      v-flex.ml-0.text-xs-center(xs4)
        img.mt-2.pt-2(v-lazy='photo_cv_petit' alt="alexandre_chaumet_photo" style="height: 100px;	width: auto; border-radius:50px;")
      v-flex.mr-0.text-xs-center(xs8 style="font-size: 1.2rem")
        h2.my-auto Alexandre Chaumet
        h3.my-auto Développeur web

  v-layout(wrap)
    v-flex.text-xs-center(xs12 sm4 id="cvLeft")

      // Compétences
      v-flex.mt-1.mx-1.elevation-6(id="cvCompetences")
        h4
          v-layout(wrap row )
            v-flex
              img(v-lazy='competences_transparent' alt="competences")
            v-flex.mt-1.headline Compétences
        v-layout( wrap v-for="(competence, index) in competences" :key="index+'_competence'")
          v-flex.text-xs-left(xs12 v-for="(item, index) in competence.list" :key="index+'travail'" :style="competence.css" ).pl-2 {{ item }}
        //Techniques
        v-flex
            <i class="material-icons">build</i>
            span.mt-1.headline Techniques
        v-layout( wrap v-for="(technique, index) in techniques" :key="index+'technique'").pl-2.align-center 
          v-flex(xs3).text-xs-left.font-weight-bold.pa-a.ma-a  {{technique.nom}} 
          v-layout(wrap row).text-xs-left 
            v-flex(style="border: 1px dotted teal;" v-if="technique.niveau") 
              div( v-if="technique.niveau" :style="technique.niveau" :class="[technique.cssClass]").text-xs-right.elevation-4  
                <i style="opacity:0;" class="material-icons">trending_up</i>
              div(v-else)  {{technique.lib}}
            v-flex.my-auto(xs1 v-if="technique.niveau") {{ technique.niveau.width }}
          v-flex(xs2).text-xs-right.pr-2.align-center.my-auto  {{ technique.exp}}
          v-flex(xs12).text-xs-left.pl-2 {{ technique.lib }}
        //Langues
        h4
          v-layout(wrap row )
            v-flex
              img(v-lazy='langues' alt="langues")
            v-flex.mt-1.headline Langues
        v-flex.text-xs-left.font-weight-bold.pl-2 {{langue.nom}} {{langue.niv}}

      
      //Réalisations
      v-flex.elevation-10.mt-2.mx-1(id="cvRealisation" )
        i.material-icons developer_mode
        h4.title Réalisations
        v-layout(wrap column)
          v-flex(v-for="(realisation, index) in realisations" :key="index")
           v-layout(wrap row)
            v-flex.pl-4.text-xs-left 
              a(:href="realisation.adresse" target="_blank") {{realisation.adresse}}
            v-flex.pr-4.text-xs-right {{realisation.technos}}

      
      //Contact
      v-flex.elevation-10.mt-2.mx-1(id="cvContact" )
        h4
          img(v-lazy='contact_transparent' alt="contact")
        v-flex
          strong(style="font-size: 1.2rem") {{contact.email}}
        v-flex site perso :
          nuxt-link(to="/") ici
        v-flex {{contact.tel}} <br/> {{contact.adresse}}

    v-flex.elevation-6.text-xs-center(xs12 sm8 id="cvRight")
      //Expériences professionnelles
      v-flex.mt-1(id="cvExps")
        h4
          v-layout(wrap row )
            v-flex
              img(v-lazy='experiences' alt="experiences")
            v-flex.mt-1.headline Expériences professionnelles
        v-layout(justify-center wrap v-for="(expPro, index) in expPros" :key="index")
          v-flex(xs4 )
            v-layout(wrap )
              v-flex(xs4)
                strong {{ expPro.date }} {{ expPro.temps }}
                br
                strong(v-if="expPro.tempsCal") {{ tempsCal }} mois
              v-flex(xs4)
                v-flex
                  img(v-lazy='expPro.logo' alt="logo_entreprise" style="height: 50px; width: auto;")
              v-flex(xs4)
                strong.title  {{ expPro.entreprise }}  
                v-flex  {{expPro.lieu}}
          v-flex.text-xs-left
            strong.title {{ expPro.job }}
          v-flex.text-xs-left.subheading.mx-1.mb-3(offset-xs-3 xs9) 
            pre {{ expPro.travail }}

      //Formations
      v-flex.mt-1(id="cvFormations")
        h4
          v-layout(wrap row )
            v-flex
             img(v-lazy='formation' alt="formation")
            v-flex.mt-2.headline Formations
        v-layout( wrap v-for="(formation, index) in formations" :key="index")
          v-flex.pl-2.text-xs-left(xs2) {{ formation.date }}
            img(v-lazy='formation.logo' alt="logo_formation" style="height: 50px; width: auto;")
          v-flex.text-xs-left(xs10)
            v-layout(wrap)
              v-flex(xs12) #[strong.title {{ formation.nom }}]  - {{ formation.region }}
              v-flex.subheading(xs12) {{ formation.titre }}

</template>

<script>
export default {
  //agit sur la création d'un composant
  mounted: function() {
    this.tempsCal = new Date("November 2018, 09:00:00").getMonth();
    this.tempsCal -= 2;
  },
  data() {
    return {
      formation: "formation.png",
      experiences: "experiences.png",
      contact_transparent: "contact_transparent.png",
      langues: "langues.png",
      competences_transparent: "competences_transparent.png",
      photo_cv_petit: "photo_cv_petit.png",
      tempsCal: null,
      expPros: [
        {
          date: "Nov 2018",
          temps: "actuel",
          tempsCal: true,
          logo: "celad.png",
          lieu: "Gradignan (33)",
          job: "Développeur Web",
          entreprise: "Celad",
          travail: `Client: Agfa. 
Développement d'interfaces utilisateurs pour une solution d'e-santé. Traduction des fonctionnalités métiers en services.
Technos HTML/CSS, VueJS, Uniface.`
        },
        {
          date: "2018",
          temps: "2 mois",
          logo: "akeros.png",
          lieu: "Mérignac (33)",
          job: "Développeur Front-end",
          entreprise: "Akeros",
          travail: `Développement de deux pages pour une application de supervision de drones (Fleet Manager). Développement d'interfaces de commande de robots.
Technos HTML/CSS (Vuetify), JavaScript (Vuejs, Nuxt, OpenStreetMap, Leaflet, websocket).`
        },
        {
          date: "2016",
          temps: "1,5 an",
          logo: "alten.png",
          lieu: "Boulogne (92)",
          job: "Ingénieur solution SCADA",
          entreprise: "Alten SIR",
          travail: `Client: Air Liquide Service. 
Déploiement de nouvelles solutions de supervision. Vérification du bon fonctionnement des solutions déployées. Support niveau 3.`
        },
        {
          date: "2014",
          temps: "1,5 an",
          logo: "alten.png",
          lieu: "Boulogne(92)",
          job: "Conception SQL (Contrôleur de base de données)",
          entreprise: "Alten SIR",
          travail: `Client: Orange. 
Conception de scripts SQL assurants les phases: extraction, consolidation, création d'indicateur décisionnel pour les projets de migrations. Correction d‘anomalies fonctionnelles.`
        },
        {
          date: "2013",
          temps: "1,5 an",
          logo: "solutec.png",
          lieu: "Paris (75)",
          job: "Conception SQL (Analyste de base données)",
          entreprise: "Solutec",
          travail: `Client: Carrefour. 
Conception de scripts SQL pour répondre aux études Ad hoc.`
        },
        {
          date: "2009",
          temps: "3 ans",
          logo: "faurecia.jpg",
          lieu: "Caligny (61)",
          job: "Apprenti qualiticien produit/process",
          entreprise: "Faurecia",
          travail: `Gestion de projets – amélioration de la qualité des poignées à pompages. Refonte de la maille de traçabilité de la matière première. Développement d’une application de gestion des dérogation en VBA.`
        },
        {
          date: "2007",
          temps: "4 mois",
          logo: "codra.png",
          lieu: "Courtaboeuf (91)",
          job: "Développeur C#",
          entreprise: "Codra",
          travail: `Développer un module permettant à PANORAMA de communiquer avec un modem téléphonique pour acquitter des alarmes par SMS.
Techos: C#, .NET`
        }
      ],
      formations: [
        {
          date: "2018",
          logo: "ifpa.png",
          nom: "Titre professionnel délivré par IFPA",
          region: "Mérignac (33)",
          titre: "Développeur logiciel"
        },
        {
          date: "2017",
          logo: "OC.png",
          nom: "Openclassrooms",
          region: "domicile",
          titre: "Développeur web (5 certificats)"
        },
        {
          date: "2012",
          logo: "ensam.png",
          nom: "Arts et Métiers ParisTech (ENSAM)",
          region: "Paris (75)",
          titre:
            "Diplôme d'Ingénieur des Arts & Métiers ParisTech en Alternance en Génie Industriel"
        },
        {
          date: "2007",
          logo: "iut.jpg",
          nom: "DUT GEII",
          region: "Vélizy (78)",
          titre: "Génie Electrique et Informatique Industrielle"
        }
      ],
      competences: [
        {
          list: [
            "Développer une application (web, client-server)",
            "Développement applicatif",
            "Conception SQL",
            "Conduite de projet"
          ],
          css: { fontSize: "1.2rem" }
        }
      ],
      techniques: [
        {
          nom: "HTML/CSS",
          niveau: { width: "80%" },
          cssClass: ["cyan darken-3"],
          exp: "2 ans",
          lib: "Bootstrap, Materliaze.css, Vuetify, Semantic-UI"
        },
        {
          nom: "JavaScript",
          niveau: { width: "75%" },
          cssClass: ["cyan darken-2"],
          exp: "2 ans",
          lib: "Vuejs, Reactjs, Angular2, Nodejs, JQuery"
        },
        {
          nom: "JAVA",
          niveau: { width: "50%" },
          cssClass: ["cyan  darken-1"],
          exp: "",
          lib: "JSP, Struts"
        },
        {
          nom: "PHP",
          niveau: { width: "50%" },
          cssClass: ["cyan  darken-1"],
          exp: "",
          lib: "Symfony 3"
        },
        {
          nom: "SQL",
          niveau: { width: "90%" },
          cssClass: ["cyan darken-4"],
          exp: "5 ans",
          lib: "Oracle, SQL Server,TeraData, MySql, MongoDB"
        },
        {
          nom: "Outils",
          exp: "",
          lib:
            "Test: Jest, Deploiement: Now, Versioning: Git, Container: Docker"
        }
      ],
      realisations: [
        {
          adresse: "https://devweb.latence132.now.sh",
          technos: "Vuejs, Vuetify"
        },
        {
          adresse: "https://my-react-app.latence132.now.sh/",
          technos: "Reactjs, Materliaze.css"
        },
        {
          adresse: "http://chaumetsoftware.com/InspirateurLitteraire/",
          technos: "PHP, Bootstrap"
        },
        { adresse: "https://github.com/latence132", technos: "Github" }
      ],
      langue: { nom: "Anglais", niv: "courant" },
      contact: {
        email: "alexandre.chaumet@gadz.org",
        tel: "06 06 98 57 51",
        adresse: "2 place Vincent Van Gogh 33700 Mérignac"
      }
    };
  }
};
</script>

<style lang="stylus" scoped>
div {
  font-family: 'Dosis', sans-serif;
}

h4, h5, img {
  display: inline-block;
}

div >>> .expDate {
  padding: 0 !important;
  margin: 0 !important;
}

#cvContact, #cvFormations, #cvCompetences, #cvExps, #parallax, #cvRealisation {
  border-radius: 4px;
  border: 1px solid black;
  padding-top: 3px;
}

#cvContact {
  padding-top: 0px;
}

.subheading {
  padding: 0;
  margin: 0;
}

pre {
  white-space: pre-wrap; /* Since CSS 2.1 */
  white-space: -moz-pre-wrap; /* Mozilla, since 1999 */
  white-space: -pre-wrap; /* Opera 4-6 */
  white-space: -o-pre-wrap; /* Opera 7 */
  word-wrap: break-word; /* Internet Explorer 5.5+ */
}
</style>
