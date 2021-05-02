<template>
  <div class="carousel">
    <v-card
      shaped
      class="ma-5 text-center animate__animated animate__fadeInUp animate__slower"
      color="#7f0909"
      elevation="8"
    >
      <v-carousel
        cycle
        interval="3000"
        show-arrows-on-hover
        progress-color="#ffc500"
        hide-delimiters
        class="item-caro"
      >
        <div class="engloba" style="color: red">
          <v-carousel-item v-for="(item, i) in items" :key="i">
            <div class="chip-house">
              <v-chip
                class="ma-2"
                color="grey darken-3"
                text-color="white"
                light
              >
                <v-avatar left>
                  <v-icon>mdi-wizard-hat</v-icon>
                </v-avatar>
                <span class="house-name mt-2">
                  {{ item.members }}
                  {{ item.members &lt; 2 ? "wizard" : "wizard's" }}
                </span>
              </v-chip>
            </div>

            <div class="image-house">
              <a :href="'/house/' + item.house">
                <v-img
                  v-bind:src="item.src"
                  width="200"
                  height="230"
                  :href="'/house/' + item.house"
                />
              </a>
            </div>

            <a :href="'/house/' + item.house" style="color: white">
              <div class="stripe-house">
                <v-icon class="icon-house" large> mdi-deathly-hallows</v-icon>
              </div>
            </a>
          </v-carousel-item>
        </div>
      </v-carousel>
    </v-card>
  </div>
</template>

<script lang="ts">
import { Component, Vue } from "vue-property-decorator";
@Component({})
export default class Carousel extends Vue {
  cycle = false;
  items = [
    {
      src: require("../assets/gryff.png"),
      members: "11",
      house: "Gryffindor",
    },
    {
      src: require("../assets/slyt.png"),
      members: "10",
      house: "Slytherin",
    },
    {
      src: require("../assets/rave.png"),
      members: "3",
      house: "Ravenclaw",
    },
    {
      src: require("../assets/huff.png"),
      members: "1",
      house: "Hufflepuff",
    },
  ];

  async housesDetail(house: any) {
    await this.$store.dispatch("members/loadMembers", house);
  }
}
</script>

<style lang="scss" scoped>
.carousel {
  font-family: "Harry Potter", sans-serif;

  .v-responsive {
    display: flex;
    flex-flow: column;
    justify-content: center;
  }

  .chip-house {
    display: flex;
    flex-flow: row;
    justify-content: flex-start;
  }

  .stripe-house {
    background-color: #424242;
    margin-top: 2rem;
    height: 10vh;
    display: flex;
    flex-flow: row;
    justify-content: center;

    .icon-house {
      transition: 0.5s;
    }

    .icon-house:hover {
      transform: rotate(90deg);
      color: #7f0909;
    }

    h4 {
      align-self: center;
      font-size: 1.6rem;
      font-weight: 100;
      margin-top: 5px;
    }
  }

  .image-house {
    margin-top: 5rem;
    display: flex;
    flex-flow: column;
    align-items: center;
  }
}
</style>
