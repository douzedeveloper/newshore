import { DialogManager } from "./classes/manager";
import Dialog from "./components/Dialog.vue";
import Message from "./components/Message.vue";
import { DialogPluginOptions } from "./types/plugin-options";

export default {
  install(Vue: any, options: DialogPluginOptions = {}) {
    // Components
    Vue.component("Confirm", Message);
    Vue.component("Dialog", Dialog);

    // Properties
    Vue.$dialog = Vue.prototype.$dialog = new DialogManager(options);
  },
};
