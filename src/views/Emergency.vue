<template>
    <v-app>
      <AppBar/>
      <Emergency/>
      <Bottom/>
    </v-app>
  </template>
  
  <script setup>
  import AppBar from '@/layouts/default/AppBar.vue'
  import Emergency from '@/layouts/default/body_emergency.vue'
  import Bottom from '@/layouts/default/Bottom.vue'
  </script>
  