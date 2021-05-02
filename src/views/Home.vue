<template>
  <div class="page"></div>
</template>

<script lang="ts">
import { Component, Vue } from "vue-property-decorator";

@Component({})
export default class Home extends Vue {
  async created() {
    try {
      const result = await Vue.axios
        .get("http://hp-api.herokuapp.com/api/characters/house/gryffindor ")
        .then((response) => {
          return response.data;
        });
      console.log(result);
    } catch (e) {
      return undefined;
    }
  }
}
</script>

<style lang="scss" scoped></style>
