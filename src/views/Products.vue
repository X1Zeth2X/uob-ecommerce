<template>
  <div id="products">
    <DrawerLeft />
    <DrawerRight />

    <v-container id="products">
      <span class="text-h6 font-weight-bold"> Sort by </span>

      <v-chip-group>
        <v-chip>Relevance</v-chip>
        <v-chip>Trending</v-chip>
        <v-chip>Avg. customer Reviews</v-chip>
        <v-chip>
          Price
          <v-icon right>mdi-chevron-down</v-icon>
        </v-chip>
      </v-chip-group>

      <section id="products-section">
        <v-row justify="space-between">
          <v-col md="4" v-for="(product, index) in products" :key="index">
            <v-card outlined style="border-radius: 1.2em" width="100%" hover @click="selectProduct(product)">
              <v-img :src="product.image" height="250px"></v-img>
              <v-card-title class="font-weight-bold">{{
                product.name
              }}</v-card-title>
              <v-card-subtitle>
                <span class="mr-1 font-weight-bold">Price:</span>
                <span>{{ product.price }} AED</span>
              </v-card-subtitle>
              <v-card-text>
                <div class="d-flex flex-row justify-space-between align-center">
                  <v-rating
                    style="margin-left: -0.7em"
                    :value="randomRating()"
                    :length="5"
                    label="Product Rating"
                    background-color="orange"
                    color="orange"
                  >
                  </v-rating>

                  <span class="font-weight-bold">(21)</span>
                </div>
              </v-card-text>

              <v-card-actions>
                <v-btn outlined small fab>
                  <v-icon>mdi-heart-outline</v-icon>
                </v-btn>

                <v-spacer></v-spacer>

                <AddToCart :isLarge="true" :product="product">
                  Add To Cart
                  <v-icon right>mdi-cart-plus</v-icon>
                </AddToCart>
              </v-card-actions>
            </v-card>
          </v-col>
        </v-row>
      </section>
    </v-container>
  </div>
</template>

<script lang="ts">
import Vue from "vue";
import Component from "vue-class-component";

import { Product } from "@/store/types";
import AddToCart from "@/components/AddToCart.vue";

import DrawerLeft from "@/components/Navigation/DrawerLeft.vue";
import DrawerRight from "@/components/Navigation/DrawerRight.vue";
import { Action, Getter } from "vuex-class";

@Component({
  components: {
    AddToCart,
    DrawerLeft,
    DrawerRight,
  },
})
export default class Products extends Vue {
  @Getter("products") products!: Array<Product>;

  @Action("selectProduct") selectProduct!: CallableFunction;

  randomRating = (): number => Math.floor(Math.random() * 5 + 1);
}
</script>

<style lang="scss" scoped>
#products {
  padding: 1em 3em 1em;

  &-section {
    margin-top: 1em;
  }
}
</style>
