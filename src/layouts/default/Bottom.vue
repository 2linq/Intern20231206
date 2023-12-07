<template>
  <v-bottom-navigation :elevation="3" bg-color="#64B5F6" class="position-fixed">
    <v-btn v-on:click="toMap">
      <v-icon>mdi-map-marker</v-icon>

      <span>Map</span>
    </v-btn>

    <v-btn v-on:click="toHome">
      <v-icon>mdi-home</v-icon>

      <span>Home</span>
    </v-btn>

    <v-btn v-on:click="toBookMark">
      <v-icon>mdi-book</v-icon>

      <span>BookMark</span>
    </v-btn>
  </v-bottom-navigation>

</template>



<script>
export default {
  methods: {
    toMap() {
      this.$router.push("/Map");
    },
    toHome() {
      this.$router.push("/");
    },
    toBookMark() {
      this.$router.push("/BookMark");
    },
  },
};
</script>
