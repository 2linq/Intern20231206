<template>
    <v-app>
      <!-- 上のタブ呼び出し -->
      <AppBar/>
      <!-- インポートしたSpotを呼び出して表示 -->
      <Spot/>
      <Bottom/>
    </v-app>
  </template>
  
  <script setup>
  //AppBar（上のタブ）インポート
  import AppBar from '@/layouts/default/AppBar.vue'
  //Spotのインポート
  import Spot from '@/layouts/default/body_spot.vue'
  //下のタブのインポート
  import Bottom from '@/layouts/default/Bottom.vue'
  </script>
  