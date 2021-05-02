import MessageDialog from "../components/Message.vue";
import Dialog from "../components/Dialog.vue";
import { DialogAction } from "../types/dialog-action";
import { DialogOptions } from "../types/dialog-options";
import { DialogRef } from "./dialogref";
import Vue from "vue";
import { DialogPluginOptions } from "../types/plugin-options";

export class DialogManager {
  private dialogs: Map<string, DialogRef> = new Map();
  private selector: string = "#app";
  private plugins: any = {};

  constructor(options: DialogPluginOptions) {
    this.selector = options.container || "#app";
    this.plugins = options.plugins || {};
  }

  private attach(dialog: Dialog) {
    const container = document.querySelector(this.selector);
    if (!container) throw new Error("Container element not found!");
    const ref = new DialogRef(dialog);
    this.dialogs.set(ref.id, ref);
    ref.result.finally(() => this.dialogs.delete(ref.id));
    container.appendChild(dialog.$el);
    return ref;
  }

  async open(component: any, options: DialogOptions) {
    const propsData = { component: Vue.extend(component), ...options };
    const ref = this.attach(
      new Dialog({
        ...this.plugins,
        propsData,
      })
    );
    return await ref.result;
  }

  close(id: string) {
    this.dialogs?.get(id)?.close();
  }

  closeAll() {
    this.dialogs?.forEach((ref) => ref?.close());
  }

  async message(message: string, actions?: DialogAction[]) {
    return await this.open(MessageDialog, {
      rules: ["no-header"],
      props: { message, actions },
    });
  }
}
