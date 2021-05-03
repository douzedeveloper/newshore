<template>
  <div class="dialog">
    <div class="dialog-backdrop" @click="close()"></div>
    <div
      class="dialog-frame animate__animated animate__jackInTheBox animate__slower"
      v-bind:style="styles"
    >
      <div
        class="dialog-header primary white--text"
        v-if="!rules.includes('no-header')"
      >
        <h4>{{ title }}</h4>
        <div class="dialog-btns"></div>
      </div>
      <div class="dialog-body">
        <keep-alive>
          <component
            :is="component"
            v-bind="props"
            @dialog-result="close"
          ></component>
        </keep-alive>
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import Vue from "vue";
import { Component, Prop } from "vue-property-decorator";
import { DialogOptions } from "../types/dialog-options";

@Component({})
export default class Dialog extends Vue implements DialogOptions {
  private ref!: any;

  @Prop()
  component!: any;

  @Prop()
  props!: any;

  @Prop()
  title!: string;

  @Prop()
  height?: string;

  @Prop()
  width?: string;

  @Prop({ default: () => [] })
  rules!: string[];

  get styles() {
    return {
      "--height": this.height,
      "--width": this.width,
    };
  }

  close(data?: any) {
    this.ref.close(data);
  }
}
</script>

<style lang="scss" scoped>
// TODO: CHANGE IMPORTS
@import "../../../scss/abstracts/mixins";

.dialog {
  position: fixed;
  @include flex(column nowrap, center, center);
  @include size(100vw, 100vh);
  z-index: 6;

  .dialog-backdrop {
    position: absolute;
    @include size(100%);
    background: #3338;
    backdrop-filter: blur(9px);
  }

  .dialog-frame {
    @include flex(column nowrap);
    @include size(var(--width, auto), var(--height, auto));

    background: #cacaca;
    box-shadow: 0 12px 48px -12px #333e;
    border-radius: 1rem;
    overflow: hidden;
    z-index: 1;

    .dialog-header {
      padding: 0.875rem;
      height: 3.6rem;
      h4 {
        font-size: 1.125rem;
      }
    }

    .dialog-body {
      flex: 1 0;
      height: calc(var(--height) - 3.6rem);
    }
  }

  @media screen and (max-width: 500px) {
    .dialog-frame {
      height: 80%;
      width: 70%;
    }
  }
}
</style>
