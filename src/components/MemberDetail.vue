<template>
  <div class="page">
    <div class="card-items">
      <div class="img-wrapper">
        <v-img id="profile" alt="Avatar" v-bind:src="item.image"></v-img>
        <h3>{{ item.name }}</h3>
      </div>

      <div class="card-tex">
        <v-chip color="#7f0909" text-color="white" class="ma-0">
          <v-icon left> mdi-castle </v-icon>
          <span class="mt-3">{{ item.house }}</span>
        </v-chip>

        <div class="list">
          <ul>
            <li>
              <h5>Species:</h5>
              {{ item.species || "no apply" }}
            </li>
            <li>
              <h5>Ancestry:</h5>
              {{ item.ancestry || "no apply" }}
            </li>
            <li>
              <h5>Gender:</h5>
              {{ item.gender || "no apply" }}
            </li>
            <li>
              <h5>Patronus:</h5>
              {{ item.patronus || "no apply" }}
            </li>
            <li>
              <h5>Wand:</h5>
              {{ item.wand.core || "no apply" }}
            </li>
            <li style="border-bottom: none">
              <h5>Staff:</h5>
              <v-switch
                color="#7f0909"
                v-model="item.hogwartsStaff"
                disabled
              ></v-switch>
              <h5>Student:</h5>
              <v-switch
                color="#7f0909"
                disabled
                v-model="item.hogwartsStudent"
              ></v-switch>
            </li>
          </ul>
        </div>
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import { Component, Vue, Prop } from "vue-property-decorator";

@Component({})
export default class MemberDetail extends Vue {
  @Prop()
  item: any;

  close() {
    this.$dialog.closeAll();
  }
}
</script>

<style lang="scss" scoped>
* {
  display: flex;
  margin-top: 5px;
  flex-flow: column;
  justify-content: center;
  font-family: "Harry Potter", sans-serif !important;

  h3 {
    font-weight: 200;
  }

  h5 {
    margin-right: 1rem;
    font-weight: 100;
  }

  ul {
    display: flex;
    align-items: flex-start;
  }

  li {
    display: flex;
    flex-flow: row;
    border-bottom: 1px solid #38343473;
    border-bottom-style: dotted;
  }
}

.card-items {
  display: flex;
  flex-flow: row nowrap;
  justify-content: space-evenly;

  .img-wrapper {
    display: flex;
    flex-flow: column;
    align-items: center;
  }

  .list {
    ul {
      padding-left: 0 !important;
    }
  }
}

#profile {
  height: 205px;
  width: 205px;
  border-radius: 50%;
  border: 2px solid #7f0909;
}
#profile:hover {
  filter: saturate(2);
}

@media screen and (max-width: 500px) {
  .card-items {
    display: flex;
    flex-flow: column wrap;
    align-content: center;
  }
}
</style>
