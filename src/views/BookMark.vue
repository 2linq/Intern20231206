<template>
    <v-app>
      <!-- 上のタブ呼び出し -->
      <AppBar/>
      <!-- インポートしたSpotを呼び出して表示 -->
      <Bookmarks/>
      <Bottom/>
    </v-app>
  </template>
  
  <script setup>
  import Bookmarks from '@/layouts/default/body_bookmarks.vue'
  //下のタブのインポート
  import Bottom from '@/layouts/default/Bottom.vue'
  </script>
  