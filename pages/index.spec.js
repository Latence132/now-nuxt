import Vue from "vue";
import {
  mount
} from "@vue/test-utils";
// import router from "@/router";
import Vuetify from "vuetify";
import index from "./index.vue";
import intro from "@/intro.vue"

describe("index.vue", () => {
  let wrapper;

  beforeEach(() => {
    // Vue.use(router);
    Vue.use(Vuetify);
    Vue.use(intro);

    wrapper = mount(index, {
      intro
    });
  });

  it('should have a happy ending', () => {
    // You should see all Vuetify components properly rendered
    // as normal HTML tags. For example, <v-flex> should be
    // rendered as <div class="v-flex ...">
    expect(wrapper.contains('div.flex')).toBe(true);

    // Just so that you can visually inspect the rendered html.
    console.log(wrapper.find('.opening').html());
  });

  it("should contains default heading", () => {
    const h2 = wrapper.find("h2");
    expect(h2.is("h2")).toBe(true);
    expect(h2.text()).toContain("Alexandre Chaumet Développeur Web");
  });
});
