import {createLocalVue, mount} from "@vue/test-utils";
import {BootstrapVue, BootstrapVueIcons} from "bootstrap-vue";
import {VueClass} from "vue-class-component/lib/declarations";
import Vue from "vue/types/vue";
import Vuex from "vuex";
import {State} from "../../types";
import {state} from "@/store/state";
import {getters} from "@/store/getters";

export const localVue = createLocalVue();

localVue.use(BootstrapVue);
localVue.use(BootstrapVueIcons);

localVue.use(Vuex);

export const factory  = <V extends Vue> (comp: VueClass<V>, propsData?: object, initState?: State) => {
  const store = new Vuex.Store({
    state: initState || state,
    getters,
  });

  return mount(comp, {store, localVue, propsData})
};
