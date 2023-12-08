<template>
  <!-- スポットページとかのアイコンが貫通してしまったので、z-indexを指定してます -->
  <v-card class="position-fixed" width="100%" style="z-index:1;">
    <v-tabs
      bg-color="#64B5F6"
      center-active
      align-tabs="center"
    >
      <v-tab>すべて</v-tab>
      <!--下部scriptタグ内のmethods:にて定義-->
      <v-tab v-on:click="toSpot">スポット</v-tab>
      <v-tab v-on:click="toTransport">交通機関</v-tab>
    </v-tabs>
  </v-card>
</template>

<script>
export default {
  methods: {
    toSpot() {
      //router\index.jsでパスを通している
      this.$router.push("/Spot");
    },
    toTransport() {
      this.$router.push("/Transport");
    },
  },
};
</script>