<template>
  <v-app>
    <AppBar />
    <Cart />

    <v-main>
      <keep-alive include="Home, Products">
        <router-view />
      </keep-alive>
    </v-main>
  </v-app>
</template>

<script lang="ts">
import Vue from "vue";
import Component from "vue-class-component";

// Relative imports
import AppBar from "./components/Navigation/AppBar.vue";
import Cart from "./components/Cart.vue";

@Component({
  name: "App",
  components: {
    AppBar,
    Cart,
  },
})
export default class App extends Vue {}
</script>
