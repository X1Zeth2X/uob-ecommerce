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
      <v-card-text> card text </v-card-text>
    </v-card>
  </v-dialog>
</template>

<script lang="ts">
import { Vue, Component } from "vue-property-decorator";
import { Getter, Action } from "vuex-class";

@Component
export default class Cart extends Vue {
  @Getter("isCartOpen") isOpen!: boolean;

  @Action("showCartDialog") setCartDialogValue!: CallableFunction;
}
</script>
