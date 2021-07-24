<template>
  <div id="home">
    <v-img
      src="https://source.unsplash.com/pYv65Fd4JW0/1000x500"
      gradient="to bottom right, rgba(100,115,201,.33), rgba(25,32,72,.7)"
      height="100vh"
    >
      <div class="header">
        <p class="header-main">Organic Toy LLC</p>
        <p class="header-sub">
          Made with <span class="font-weight-bold">Love.</span>
        </p>

        <v-btn
          class="header-btn"
          color="teal darken-1"
          dark
          rounded
          x-large
          @click="$router.push('/products')"
          >Shop Now</v-btn
        >
      </div>
    </v-img>

    <v-container class="my-15">
      <p class="text-h5 mt-2">
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Repellat eum
        neque tempore aspernatur maxime iusto sunt harum placeat delectus
        eligendi.
      </p>
    </v-container>
  </div>
</template>

<script lang="ts">
import Vue from "vue";
import Component from "vue-class-component";

@Component
export default class Home extends Vue {}
</script>

<style lang="scss" scoped>
#home {
  .header {
    color: white;
    text-align: center;

    &-main {
      font-size: 7em;
      font-weight: 700;
      margin: 25vh 0 auto;
    }

    &-sub {
      font-size: 2em;
      font-weight: 300;
    }
  }
}
</style>
