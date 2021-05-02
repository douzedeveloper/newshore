import Vue from "vue";
import { Api } from "./plugins/api";
import { DialogManager } from "./lib/dialog/classes/manager";

declare module "vue/types/vue" {
  interface Vue {
    $api: Api;
    $dialog: DialogManager;
  }

  interface VueConstructor {
    $api: Api;
    $dialog: DialogManager;
  }
}
