<template>
  <div class="message-dialog">
    <span class="message-text"> {{ message }} </span>
    <div class="message-actions" v-if="actions.length > 0">
      <button
        v-for="(action, index) of actions"
        v-bind:key="index"
        class="message-action"
        :class="action.classes"
        @click="resolve(action.value)"
      >
        {{ action.text }}
      </button>
    </div>
  </div>
</template>

<script lang="ts">
import Vue from "vue";
import { DialogAction } from "../types/dialog-action";
import { Component, Prop } from "vue-property-decorator";

@Component({})
export default class MessageDialog extends Vue {
  @Prop({ default: "" })
  message!: string;

  @Prop({ default: [] })
  actions!: DialogAction[];

  resolve(value: any) {
    this.$emit("dialog-result", value);
  }
}
</script>

<style lang="scss" scoped>
// TODO: CHANGE IMPORTS
@import "../../../scss/abstracts/mixins";

.message-dialog {
  @include flex(column nowrap);
  @include size(100%);
  font-size: 1rem;
  max-width: 760px;
  min-width: 20vw;

  .message-text {
    padding: 2rem 1rem;
  }

  .message-actions {
    @include flex(row nowrap, flex-end, flex-end);
    margin-top: auto;
    border-top: 1px solid #3331;
    padding: 0.6rem 1rem;
    .message-action {
      background: #eaeaea;
      border-radius: 0.3rem;
      padding: 0.6em 0.9em;
      margin-left: 0.6em;
      font-size: 0.875em;
      width: auto;
      min-width: 6em;
    }
  }
}
</style>
