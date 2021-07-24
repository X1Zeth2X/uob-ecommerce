<template>
  <v-btn
    outlined
    rounded
    dark
    color="green"
    :large="isLarge"
    :x-large="isXLarge"
    @click="addToCart(product)"
    :loading="isLoading"
  >
    <slot></slot>
  </v-btn>
</template>

<script lang="ts">
import Vue from "vue";
import Component from "vue-class-component";
import { Action } from "vuex-class";
import { Product } from "@/store/types";

@Component({
  props: {
    isLarge: Boolean,
    isXLarge: Boolean,
    product: Object,
  },
})
export default class AddToCard extends Vue {
  @Action("addCartItem") addCartItem!: CallableFunction;

  isLoading = false;

  addToCart(product: Product): void {
    this.isLoading = true;
    this.addCartItem(product);

    setTimeout(() => {
      this.isLoading = false;
    }, 1000);
  }
}
</script>
