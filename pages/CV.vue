<template lang="pug">
v-flex.black--text(id="cvWrapper" style="background-color: white; width:21cm; font-size: 0.8rem" )
  v-layout(wrap)
    v-flex.text-xs-center(xs12 sm4 id="cvLeft")
      // First banner
      v-parallax.mx-1(id="parallax" src="https://cdn.vuetifyjs.com/images/backgrounds/vbanner.jpg" height="80" width="100%")
        v-layout(id="cvUpperBanner" xs12 wrap align-center )
          v-flex.ml-0.text-xs-center(xs4)
            img.mt-2.pt-2(v-lazy='photo_cv_petit' alt="alexandre_chaumet_photo" style="height: 100px;	width: auto; border-radius:50px;")
          v-flex.mr-0.text-xs-center(xs8 style="font-size: 1rem")
            h2.my-auto Alexandre Chaumet
            h3.my-auto Développeur web
        // Compétences
      v-flex.mt-1.mx-1.elevation-6(id="cvCompetences")
        h2
          v-layout(wrap row )
            v-flex
              img(v-lazy='competences_transparent' alt="competences")
            v-flex.mt-1 Compétences
        v-layout( wrap v-for="(competence, index) in competences" :key="index+'_competence'")
          v-flex.text-xs-left(xs12 v-for="(item, index) in competence.list" :key="index+'travail'" :style="competence.css" ).pl-2 {{ item }}
        //Techniques
        v-flex
            <i class="material-icons">build</i>
            span.mt-1 Techniques
        v-layout( wrap v-for="(technique, index) in techniques" :key="index+'technique'").pl-2.align-center 
          v-flex(xs3).text-xs-left.font-weight-bold.pa-a.ma-a  {{technique.nom}} 
          v-layout(wrap row).text-xs-left 
            v-flex(wrap) {{technique.lib}}
        //Langues
        h2
          v-layout(wrap row )
            v-flex
              img(v-lazy='langues' alt="langues")
            v-flex Langues
        v-flex.text-xs-left.font-weight-bold.pl-2 {{langue.nom}} {{langue.niv}}

      //Formations
      v-flex.mt-1(id="cvFormations" style="font-size: 0.8rem")
        h2
          v-layout(wrap row )
            v-flex
             img(v-lazy='formation' alt="formation")
            v-flex.mt-2 Formations
        v-layout( wrap v-for="(formation, index) in formations" :key="index")
          v-flex.pl-1.text-xs-left.font-weight-bold(xs2) {{ formation.date }}
            img(v-lazy='formation.logo' alt="logo_formation" style="height: 30px; width: auto;")
          v-flex.text-xs-left(xs10)
            v-layout(wrap)
              v-flex(xs12) #[strong {{ formation.nom }}] - {{ formation.region }}
              v-flex.subheading(xs12 style="font-size: 0.6rem") {{ formation.titre }}
      //Certificats
      v-flex.mt-1(id="cvCertificats" style="font-size: 0.8rem")
        h2
          v-layout(wrap row )
            v-flex.mt-2 Certificats
        v-layout( wrap v-for="(certificat, index) in certificats" :key="index")
          v-flex.pl-1.text-xs-left.font-weight-bold(xs3) {{ certificat.date }} 
            img(v-lazy='certificat.logo' alt="logo_formation" style="height: 30px; width: auto;")
          v-flex.text-xs-left(xs9)
            v-layout(wrap)
              v-flex(xs12) #[strong {{ certificat.nom }}] - {{ certificat.organisme }}
      
      //Méthodologie
      v-flex.elevation-10.mx-1.mt-2(id="cvContact")
        h2 Méthodologie
        v-flex Clean code
        v-flex SOLID
        v-flex KISS
      
      //Contact
      v-flex.elevation-10.mx-1.mt-2(id="cvContact")
        h2
          img(v-lazy='contact_transparent' alt="contact")
        v-flex
          strong(style="font-size: 1rem") {{contact.email}}
        v-flex {{contact.tel}} <br/> {{contact.adresse}}


    v-flex.elevation-6.text-xs-center(xs12 sm8 id="cvRight")
      //Expériences professionnelles
      v-flex(id="cvExps" style="font-size: 0.8rem")
        h2
          v-layout(wrap row )
            v-flex
              img(v-lazy='experiences' alt="experiences")
            v-flex Expériences professionnelles
        v-layout(wrap v-for="(expPro, index) in expPros" :key="index")
          v-flex(xs12)
            v-layout(wrap row align-center justify-center )
              v-flex.text-xs-right(xs5)
                strong {{ expPro.job }}
              v-flex.text-xs-right(xs1)
                img(v-lazy='expPro.logo' alt="logo_entreprise" style="height: 30px; width: auto;") 
              v-flex.text-xs-left(xs5) {{ expPro.entreprise }} {{expPro.lieu}} {{ expPro.date }} - {{ expPro.temps }} 
          v-flex.text-xs-left.subheading.mx-1(xs12)
            div( v-if="expPro.travails" style="font-size: 0.8rem; padding:0; margin:0;") 
              div.mb-2(v-for="(travailScalian, index) in expPro.travails" :key="index")
                pre(style="font-size: 0.8rem; padding:0; margin:0;") {{ travailScalian.travail }}
                i(style="font-size: 0.8rem; margin:0; padding:0;") {{ travailScalian.technos }}
            div(v-else)
              pre(style="font-size: 0.8rem; padding:0; margin:0;") {{ expPro.travail }}
              i(style="font-size: 0.8rem; margin:0; padding:0;") {{ expPro.technos }}


</template>

<script>
export default {
  //agit sur la création d'un composant
  mounted: function() {
    this.tempsCal = new Date("Septembre 2021, 09:00:00").getMonth();
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
          date: "2019",
          temps: "3 ans 7 mois",
          logo: "scalian.png",
          lieu: "Haillan (33)",
          job: "Développeur Fullstack",
          entreprise: "Scalian",
          travails: [{
            travail:`Client: BPCE-SI (Banque Populaire Caisse d'Epargne) -  septembre 2021 (actuel)
- Refonte from scratch d'application exposant des informations sur les environnements.
- Développement from scratch d'une application d'extraction de jeu de données.
- Développement d'une application de supervision: Passage en HTTPS, ajout de fonctionnalités, support niv3.
- Développement d'une application de réservations. Migration d'infrastructures, ajout de fonctionnalités, support niv3.
- Développement d'une sonde Python pour tester la disponibilité d'une API.`,
            technos:"Technos: Java, Angular, JHipster, Maven, Spring Boot, Framework Spring, Python, PHP, Laravel, MySQL, Jenkins."
          },
          {
            travail:`Client: ASP (Agence de services de paiement) - 3 mois
Migration d'une application de paiements de Struts vers Spring.`,
            technos:"Technos: Java, JSP, Framework Spring, Struts."
          },
          {
            travail:`Client: Conseil départemental de gironde -  1 an 5 mois
Développement d'une application GED (Gestion Electronique des Documents). Montée de version via Alfresco.`,
            technos:"Technos: Java, Alfresco, Angular, Maven"
          },
          {
            travail:`Client: Scalian - 4 mois
Développement d'une  plateforme d'achat et une application exposant des projets, ajout de fonctionnalités, support niv3..`,
            technos:"Technos: Java, SpringBoot, MapStruct, Liquibase, Elasticsearch, Angular, Gradle."
          },
          {
            travail:`Client: Sanofi - 1 mois
Développement d'une application de commande de médicaments. Mise à jour et corrections.`,
            technos:"Technos: Java, Struts, Hibernate, JQuery, Ant."
          }]
        },
        {
          date: "2018",
          temps: "9 mois",
          logo: "celad.png",
          lieu: "Gradignan (33)",
          job: "Développeur Fullstack",
          entreprise: "Celad",
          technos:"Technos: HTML/CSS, VueJS, Uniface.",
          travail: `Client: Agfa. 
Développement d'une application d'achat de matériel pour les groupements d'hôpitaux.`
        },
        {
          date: "2018",
          temps: "2 mois",
          logo: "akeros.png",
          lieu: "Mérignac (33)",
          job: "Stage développeur Front-end",
          entreprise: "Akeros",
          technos:"Technos: HTML/CSS (Vuetify), JavaScript (Vuejs, Nuxt, OpenStreetMap, Leaflet, websocket)",
          travail: `Développement d'une application de supervision de drones. Développement d'interfaces de commande de robots.`
        },
        {
          date: "2014",
          temps: "3 ans",
          logo: "alten.png",
          lieu: "Boulogne (92)",
          job: "Ingénieur solution SCADA / Conception de script SQL",
          entreprise: "Alten SIR",
          technos:"Techno: SQL, Historian PI System.",
          travail: `Client: Air Liquide Service. 
Développement applicatif de solutions de supervision. Support niveau 3.
Client: Orange. 
Correction d‘anomalies fonctionnelles pour migrer le parc client vers un nouveau SI.`
        },
        {
          date: "2013",
          temps: "1,5 an",
          logo: "solutec.png",
          lieu: "Paris (75)",
          job: "Analyste de base de données",
          entreprise: "Solutec",
          travail: `Client: Carrefour. 
Etudes et extractions ad hoc en SQL pour les services Marketing.`
        },
        {
          date: "2009",
          temps: "3 ans",
          logo: "faurecia.jpg",
          lieu: "Caligny (61)",
          job: "Apprenti qualiticien produit/process",
          entreprise: "Faurecia",
          travail: `Développement from scratch d'une application de gestion des dérogations en VBA.
Gestion de projets: amélioration de la qualité en production mécanique`
        },
        {
          date: "2007",
          temps: "4 mois",
          logo: "codra.png",
          lieu: "Courtaboeuf (91)",
          job: "Stage en développement C#",
          technos:"Technos: C#, .NET",
          entreprise: "Codra",
          travail: `Développement sur une application de supervision, ajout d'un module permettant d'acquitter les alarmes par SMS.
`
        }
        
      ],
      formations: [
        {
          date: "2018",
          logo: "ifpa.png",
          nom: "IFPA",
          region: "Mérignac (33)",
          titre: "Développeur logiciel"
        },
        {
          date: "2017",
          logo: "OC.png",
          nom: "Openclassrooms",
          region: "domicile",
          titre: "Développeur WEB"
        },
        {
          date: "2012",
          logo: "ensam.png",
          nom: "Arts et Métiers ParisTech",
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
      certificats: [
        {
          nom:"Test unitaire Java (en cours)",
          organisme: "Cegefos",
          date:"2023",
          logo:"cegefos_petit.png",
        },
        {
          nom:"Sécurité web",
          organisme: "BPCE-SI",
          date:"2022",
          logo:"bpce.png"
        },
        {
          nom:"DevOps AWS CI/CD Jenkins",
          organisme: "Udemy",
          date:"2021",
          logo:"udemy_petit.png"
        },
        
      ],
      competences: [
        {
          list: [
            "Développer une application (front et back)",
            "Migration d'application",
            "Conception SQL",
            "Serveur HTTP Apache",
            "Linux (Rhel)",
            "Conduite de projet",
          ],
          css: { fontSize: "0.9rem" }
        }
      ],
      techniques: [
        {
          nom: "JAVA",
          lib: "Spring, JUnit, Alfresco, Struts"
        },
        {
          nom: "JavaScript",
          lib: "Angular, Vuejs"
        },
        {
          nom: "HTML/CSS",
          lib: "Material, Bootstrap, Materialze.css, Vuetify"
        },
        {
          nom: "PHP",
          lib: "Laravel"
        },
        {
          nom: "SQL",
          lib: "Oracle, SQL Server,TeraData, MySql"
        },
        {
          nom: "Outils",
          lib: "Jasmine, Karma, Jenkins, Git, Docker"
        }
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

h2, h5, img {
  display: inline-block;
}

#cvContact, #cvFormations, #cvCompetences,  #parallax, #cvRealisation, #cvCertificats, #cvRight {
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
