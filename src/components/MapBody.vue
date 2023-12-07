<template>
  
  <div style="height: 100vh" @click="move">
    <v-img class="undercomponent" src="@/assets/mapdemo.png" height="100%" @click="showInfo"/>
    
  </div>
  <v-icon class="moving-icon" :style="{ transform: `translate(${x}px, ${y}px)` }" v-if="isVisible">mdi-map-marker</v-icon>
  <component :is="dynamicComponent" v-if="dynamicComponent" class="component" @click="toHome"/>
</template>

  <script>
import Alert from "@/components/Alert.vue";

export default {
  data(){
    return {
      isVisible: false,
      x: 0,
      y: 0,
      dynamicComponent: null,
    };
  },
  methods: {
    toHome() {
      this.$router.push("/");
    },
    showInfo() {
      this.dynamicComponent = Alert;
    },
    move(e){
      this.isVisible = !this.isVisible;
      this.x = e.offsetX - 50
      this.y = e.offsetY - 50
    },
  },
};
</script>

<style scoped>
/* コンポーネントのスタイリング */
.component {
  position: absolute;
  width: 100%;
  background-color:darkgray;
}
.moving-icon {
  position: absolute;
  height: 50px;
  width: 50px;
  transition: transform .5s ease;
}
</style>