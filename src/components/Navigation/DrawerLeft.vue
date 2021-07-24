<template>
  <v-card>
    <v-navigation-drawer permanent app left clipped width="350">
      <div class="px-8 pt-4 pb-0">
        <p class="font-weight-bold text-h6">Filters</p>
      </div>

      <v-divider />

      <div class="px-8 pt-4 pb-2">
        <p>Search</p>

        <v-text-field
          dense
          outlined
          prepend-inner-icon="mdi-magnify"
          :append-icon="false ? 'mdi-close' : ''"
          v-model="searchValue"
          @keyup.enter="search"
          :loading="false"
          :disabled="false"
        ></v-text-field>
      </div>

      <v-divider />

      <div class="px-8 py-4">
        <p>Categories</p>

        <v-checkbox
          class="mt-0"
          v-for="(name, index) in categories"
          :key="index"
          :label="name"
        ></v-checkbox>

        <v-btn rounded dark block :elevation="0" color="primary">
          Others
          <v-icon right>mdi-chevron-down</v-icon>
        </v-btn>
      </div>

      <v-divider />

      <div class="px-8 py-4">
        <p>Price Range</p>

        <!-- Price Range Inputs -->
        <v-row>
          <!-- Min Range -->
          <v-col xs="12" sm="6">
            <v-text-field outlined dense label="Min"> </v-text-field>
          </v-col>

          <!-- Max Range -->
          <v-col xs="12" sm="6">
            <v-text-field outlined dense label="Max"> </v-text-field>
          </v-col>
        </v-row>

        <v-btn rounded dark block :elevation="0" color="green">Set Price</v-btn>
      </div>

      <v-divider />

      <div class="px-8 py-4">
        <p>Ratings</p>

        <v-rating
          :value="3"
          :length="5"
          :size="30"
          background-color="orange"
          color="orange"
        >
        </v-rating>
      </div>
    </v-navigation-drawer>
  </v-card>
</template>

<script lang="ts">
import { Vue, Component } from "vue-property-decorator";

@Component
export default class DrawerLeft extends Vue {
  categories: Array<string> = [
    "Soft Toys",
    "Modeling",
    "Play Food",
    "Dolls",
    "Accessories",
  ];

  searchValue = "";

  search(): void {
    console.log(this.searchValue);
  }
}
</script>
