import {createLocalVue, mount} from "@vue/test-utils";
import {BootstrapVue, BootstrapVueIcons} from "bootstrap-vue";
import {Todo} from "../../types";
import {VueClass} from "vue-class-component/lib/declarations";
import Vue from "vue/types/vue";

export const localVue = createLocalVue();

localVue.use(BootstrapVue);
localVue.use(BootstrapVueIcons);

export const factory  = <V extends Vue> (comp: VueClass<V>, propsData?: object) => mount(comp, {localVue, propsData});
