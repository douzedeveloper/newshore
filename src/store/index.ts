import Vue from "vue";
import Vuex from "vuex";
import members from "./members";

Vue.use(Vuex);

const modules = {
  members,
};

export default new Vuex.Store({
  modules,
});
