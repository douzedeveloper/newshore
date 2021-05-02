<template>
  <div class="page">
    <div class="carousel">
      <Carousel />
    </div>
  </div>
</template>

<script lang="ts">
import { Component, Vue } from "vue-property-decorator";
import Carousel from "@/components/Carousel.vue";
import { mapState } from "vuex";

@Component({
  components: { Carousel },
  computed: {
    ...mapState("members", ["members"]),
  },
})
export default class Houses extends Vue {}
</script>

<style lang="scss" scoped>
.page {
  display: flex;
  align-items: center;
  flex-flow: column nowrap;
}

.carousel {
  display: flex;
  flex-flow: column nowrap;
  align-self: center;
  width: 70%;
}
</style>
