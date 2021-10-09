<template>
  <v-dialog
    :value="isOpen"
    @click:outside="setCartDialogValue(false)"
    max-width="600"
    scrollable
  >
    <v-card>
      <v-card-title>
        Shopping Cart
        <v-spacer></v-spacer>
        <v-icon>mdi-cart</v-icon>
      </v-card-title>
      <v-card-text>
        <div class="text-h5" v-if="getCart.length === 0">No Items</div>

        <v-card
          v-for="(item, index) in getCart"
          :key="index"
          class="mb-2 rounded-xl"
          v-else
        >
          <v-card-text>
            <v-row justify="space-between" align="start">
              <v-col md="5">
                <v-img
                  :src="item.image"
                  height="250px"
                  class="rounded-xl"
                  cover
                />
              </v-col>

              <v-col md="7">
                <div class="text-h5">1 x {{ item.name }}</div>
                <v-divider class="my-2" />
                <div class="text-h6 mb-2">{{ item.price }} AED</div>
                Lorem ipsum dolor sit amet consectetur adipisicing elit.
                Commodi, dignissimos.
                <v-rating
                  style="margin-left: -0.7em"
                  :value="randomRating()"
                  :length="5"
                  label="Product Rating"
                  background-color="orange"
                  color="orange"
                >
                </v-rating>
              </v-col>
            </v-row>
          </v-card-text>
          <v-card-actions class="px-5 pb-4">
            <v-btn outlined color="red">Remove</v-btn>
            <v-spacer />
            <v-btn icon>
              <v-icon>mdi-minus</v-icon>
            </v-btn>
            <div
              class="mx-7 font-weight-black"
              style="
                background-color: #ededed;
                padding: 0.4rem;
                border-radius: 100rem;
              "
            >
              1
            </div>
            <v-btn icon>
              <v-icon>mdi-plus</v-icon>
            </v-btn>
          </v-card-actions>
        </v-card>
      </v-card-text>
    </v-card>
  </v-dialog>
</template>

<script lang="ts">
import { Product } from "@/store/types";
import { Vue, Component } from "vue-property-decorator";
import { Getter, Action } from "vuex-class";

@Component
export default class Cart extends Vue {
  @Getter("isCartOpen") isOpen!: boolean;
  @Getter("getCart") getCart!: Product[];

  @Action("showCartDialog") setCartDialogValue!: CallableFunction;

  randomRating = (): number => Math.floor(Math.random() * 5 + 1);
}
</script>
