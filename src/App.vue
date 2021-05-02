<template>
  <v-app>
    <v-app-bar app color="secondary" dark class="app-bar">
      <v-toolbar-title>Magician School Education</v-toolbar-title>
    </v-app-bar>

    <v-main>
      <router-view />
    </v-main>
  </v-app>
</template>

<script lang="ts">
import Vue from "vue";
import { Component } from "vue-property-decorator";

@Component({})
export default class App extends Vue {}
</script>

<style lang="scss">
@import "@/scss/main.scss";
@import url("https://fonts.cdnfonts.com/css/harry-potter");
html,
body {
  overflow: auto;
  * {
    box-sizing: border-box;
  }
}

.app-bar {
  font-family: "Harry Potter", sans-serif !important;
  padding: 0 !important;
  margin: 0 !important;
}
</style>
