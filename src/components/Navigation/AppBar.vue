<template>
  <v-app-bar app flat clipped-left clipped-right>
    <v-toolbar-title>
      <v-icon class="mb-1 mr-1">mdi-leaf</v-icon>
      <span class="font-weight-bold">Organic</span> Toy
    </v-toolbar-title>

    <v-spacer></v-spacer>

    <!-- Middle Items -->
    <v-toolbar-items>
      <v-btn
        text
        v-for="route in routes"
        :key="route.name"
        @click="$router.push(route.path)"
      >
        {{ route.name }}
      </v-btn>
    </v-toolbar-items>

    <v-spacer></v-spacer>

    <!-- Right Side Items -->
    <v-badge :content="cartCount.toString()" bordered class="mr-5" overlap>
      <v-btn text small @click="setCartDialogValue(true)">
        <v-icon>mdi-cart</v-icon>
      </v-btn>
    </v-badge>

    <v-avatar color="primary">
      <img src="https://uifaces.co/our-content/donated/xZ4wg2Xj.jpg" alt="pp" />
    </v-avatar>
  </v-app-bar>
</template>

<script lang="ts">
import Vue from "vue";
import Component from "vue-class-component";
import { Getter, Action } from "vuex-class";

// Relative imports
import DrawerLeft from "./DrawerLeft.vue";
import DrawerRight from "./DrawerRight.vue";

type Route = {
  name: string;
  path: string;
};

@Component({
  components: {
    DrawerLeft,
    DrawerRight,
  },
})
export default class AppBar extends Vue {
  routes: Array<Route> = [
    {
      name: "Home",
      path: "/",
    },
    {
      name: "Products",
      path: "/products",
    },
    {
      name: "About Us",
      path: "#",
    },
    {
      name: "Contact",
      path: "#",
    },
  ];

  @Action("showCartDialog") setCartDialogValue!: CallableFunction;

  @Getter("cartCount") cartCount!: number;
}
</script>
