import Vue from "vue";
import {
  mount 
} from "@vue/test-utils";
// import router from "@/router";
import Vuetify from "vuetify";
import index from "./index.vue";
// import Fullpage from "vue-fullpage.js/src/FullPage.vue";
// import NoSsr from "NoSsr";
// import VueParticles from "vue-particles.js/src/vue-particles/vue-particles.vue";
// import VueLazyload from "vue-lazyload.js"
import intro from "~/components/intro.vue"
import realisation from "~/components/realisation.vue"
import techno from "~/components/techno.vue"
import navButtons from "~/components/navbuttons.vue"
import navButtonsUp from "~/components/navButtonsUp.vue"


describe("index.vue", () => {
  let wrapper;

  beforeEach(() => {
    // Vue.use(router);
    Vue.use(Vuetify);
    // Vue.use(VueParticles);
    // Vue.use(VueLazyload);
    // Vue.use(NoSsr);
    // Vue.use(Fullpage);
    Vue.use(intro)
    Vue.use(realisation);
    Vue.use(techno);
    Vue.use(navButtons);
    Vue.use(navButtonsUp);
    

    wrapper = mount(index, {
      // VueParticles,
      // VueLazyload,
      // NoSsr,
      // Fullpage,
      intro,
      realisation,
      techno,
      navButtons,
      navButtonsUp
    });
  });

  it('should have a happy ending', () => {
    // You should see all Vuetify components properly rendered
    // as normal HTML tags. For example, <v-flex> should be
    // rendered as <div class="v-flex ...">
    expect(wrapper.contains('div.section')).toBe(true);

    // Just so that you can visually inspect the rendered html.
    console.log(wrapper.find('.section').html());
  });

  // it("should contains default heading", () => {
  //   const h2 = wrapper.find("h2");
  //   console.log(wrapper)
  //   console.log(h2)
  //   expect(h2.is("h2")).toBe(true);
  //   expect(h2.text()).toContain("Alexandre Chaumet Développeur Web");
  // });
});
