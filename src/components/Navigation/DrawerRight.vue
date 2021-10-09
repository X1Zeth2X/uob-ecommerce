<template>
  <v-card>
    <v-navigation-drawer app clipped right width="430" :value="show">
      <div class="mb-4">
        <v-carousel height="400px">
          <v-carousel-item :src="product.image"></v-carousel-item>
          <v-carousel-item
            src="https://source.unsplash.com/Mlbw-U7WWfE"
          ></v-carousel-item>
          <v-carousel-item
            src="https://source.unsplash.com/TmWa-3pbJ0M"
          ></v-carousel-item>
        </v-carousel>
      </div>

      <div class="px-4">
        <p class="text-h5 font-weight-bold">{{ product.name }}</p>
        <p>
          This product contains organic material that is handcrafted with love
          to give you those comfortable vibes like you have or had as a kid.
          <a href="#" style="text-decoration: none">Read More</a>
        </p>
      </div>

      <v-tabs grow v-model="tab">
        <v-tab>Details</v-tab>
        <v-tab>Reviews (21)</v-tab>
      </v-tabs>

      <keep-alive>
        <component v-bind:is="tab == 0 ? 'Details' : 'Reviews'" />
      </keep-alive>

      <template v-slot:append>
        <div class="d-flex align-center justify-space-between pb-10 px-10 pt-4">
          <v-btn color="pink" fab outlined>
            <v-icon>mdi-heart</v-icon>
          </v-btn>

          <AddToCart :isXLarge="true">
            <span class="font-weight-black mr-2">{{ product.price }} AED</span>
            &middot; Add to Cart
          </AddToCart>
        </div>
      </template>
    </v-navigation-drawer>
  </v-card>
</template>

<script lang="ts">
import { Vue, Component } from "vue-property-decorator";
import { Getter } from "vuex-class";

import AddToCart from "@/components/AddToCart.vue";
import { Product } from "@/store/types";

@Component({
  components: {
    AddToCart,
    Reviews: () => import("../Reviews.vue"),
    Details: () => import("../Details.vue"),
  },
})
export default class DrawerRight extends Vue {
  @Getter("selectedProduct") product!: Product;
  @Getter("showRightDrawer") show!: boolean;

  tab = 0;
}
</script>
