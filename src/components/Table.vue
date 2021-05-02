<template>
  <div class="table">
    <v-card
      class="table mx-auto animate__animated animate__fadeInUp animate__slower"
      max-width="60vw"
      elevation="8"
    >
      <div class="table-header darklight">
        <v-text-field
          label="Search"
          v-model="search"
          append-icon="mdi-magnify"
          single-line
          hide-details
        ></v-text-field>
        <v-spacer></v-spacer>
      </div>
      <v-data-table
        :headers="headers"
        :items="items"
        :items-per-page="5"
        :actions="actions"
        :options.sync="tableOptions"
        :search="search"
        @click:row="rowclick"
        :class="{ clickable }"
        class="table-data"
      >
        <template v-slot:item.actions="{}">
          <v-menu offset-y>
            <template v-slot:activator="{}">
              <v-icon dark color="#7f0909"> mdi-information </v-icon>
            </template>
          </v-menu>
        </template>
      </v-data-table>
    </v-card>
  </div>
</template>

<script lang="ts">
import { Component, Vue, Prop } from "vue-property-decorator";

@Component({})
export default class Table extends Vue {
  search = "";
  tableOptions: any = {};
  actions: any[] = [];

  @Prop()
  columns!: any[];

  @Prop()
  items!: any[];

  @Prop({ default: false })
  clickable!: boolean;

  created() {
    this.actions.push({ title: "Next", code: "next" });
  }

  get headers() {
    const headers: any[] = this.columns.map((c) => ({
      text: c.title,
      value: c.key,
    }));

    if (this.actions?.length)
      headers.push({
        text: "More Info?",
        value: "actions",
        sortable: false,
      });

    return headers;
  }

  rowclick(item: any) {
    if (this.clickable) this.$emit("click:item", item);
  }
}
</script>

<style lang="scss" scoped>
.table {
  width: 100%;
  .table-header {
    display: flex;
    flex-flow: row nowrap;
    align-items: center;
    justify-content: flex-start;
    padding: 1rem;

    .v-input {
      padding: 0 !important;
    }
  }
}

.clickable::v-deep table {
  cursor: pointer;
}
</style>
