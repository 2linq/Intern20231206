<template>
  <v-card>
    <v-tabs
      bg-color="#64B5F6"
      center-active
      align-tabs="center"
    >
      <v-tab>すべて</v-tab>
      <!--下部scriptタグ内のmethods:にて定義-->
      <v-tab v-on:click="toSpot">スポット</v-tab>
      <v-tab>交通機関</v-tab>
      <v-tab v-on:click="toEmegency">緊急事態</v-tab>
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
    toEmegency() {
      this.$router.push("./Emegency")
    }
  },
};
</script>