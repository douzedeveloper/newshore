import Dialog from "../components/Dialog.vue";

// ? Try this
// class DialogResult<R> extends Promise<R> {
//   reject() {}
//   resolve() {}
// }

export class DialogRef {
  // TODO: ADD EVENTS
  public readonly id: string;
  private subject: { resolve?: (value: any) => void; reject?: () => void } = {};
  public readonly result: Promise<any>;

  constructor(private component: Dialog) {
    if (!this.component) throw new Error(`Component not defined!`);
    this.id = `${Date.now()}`; // TODO GENERATE ID;
    this.result = new Promise((resolve, reject) => {
      this.subject.reject = reject;
      this.subject.resolve = resolve;
    });
    (this.component as any).ref = this;
    this.component.$mount();
  }

  close(result?: any) {
    if (this.subject?.resolve) this.subject.resolve(result);
    this.component?.$el?.remove();
  }
}
