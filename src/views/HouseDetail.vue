<template>
  <div class="page">
    <v-tooltip right>
      <template v-slot:activator="{ on, attrs }">
        <v-btn
          class="mr-3 animate__animated animate__fadeInRight"
          color="#7f0909"
          medium
          v-bind="attrs"
          v-on="on"
          fab
          elevation="0"
          :to="backlink"
        >
          <v-icon color="white">mdi-arrow-left</v-icon>
        </v-btn>
      </template>
      <span class="backbtn">go back</span>
    </v-tooltip>

    <Table
      :columns="columns"
      :items="members"
      :actions="actions"
      @click:item="onclick"
      :clickable="true"
    />
  </div>
</template>

<script lang="ts">
import { Component, Vue } from "vue-property-decorator";
import { mapState } from "vuex";
import Table from "../components/Table.vue";
import MemberDetail from "../components/MemberDetail.vue";
@Component({
  components: { Table, MemberDetail },
  computed: {
    ...mapState("members", ["members"]),
  },
})
export default class HouseDetail extends Vue {
  actions: any[] = [];
  backlink = { name: "houses" };
  columns: any[] = [
    { title: "Firstname", key: "firstname" },
    { title: "Surname", key: "surname" },
  ];

  async created() {
    await this.$store.dispatch("members/loadMembers", this.$route.params.id);
  }

  async onclick(item: any = {}) {
    await this.$dialog.open(MemberDetail, {
      props: { item },
      rules: ["no-header"],
      width: "38rem",
      height: "20rem",
    });
  }
}
</script>

<style lang="scss" scoped>
.backbtn {
  font-family: "Harry Potter", sans-serif;
}
</style>
