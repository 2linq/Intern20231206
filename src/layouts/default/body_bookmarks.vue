<template>
  <div id="bookmark_wrapper" v-for="i in 5">
    <div id="bookmark_box">
      <div id="bookmark_category">
        <v-icon v-if="store_cateogry[i*2] == '0'">mdi-silverware-fork-knife</v-icon>
        <v-icon v-else-if="store_cateogry[i*2] == '1'">mdi-shopping</v-icon>
        <v-icon v-else-if="store_cateogry[i*2] == '2'">mdi-camera</v-icon>
      </div>
      <div id="bookmark_title">
        <router-link :to="{ path: '/Spot', query: { bookmark_i: i }}">
        <!-- <v-btn v-on:click="toSpot"> -->
        <span v-if="store_priority[i*2] == '高'" style="font-weight: bold;">
          {{ bookmark_name[i*2] }}
        </span>
        <span v-else>
          {{ bookmark_name[i*2] }}
        </span>
        </router-link>
        
        <!-- </v-btn> -->
      </div>
      <div style="clear: both;"></div>

      <div id="bookmark_address">
        <!-- <span id="nav_sentence">住所</span> -->
        <v-icon>mdi-map-marker</v-icon>
        {{ store_address[i*2] }}
      </div>

      <div id="bookmark_priority">
        <v-icon>mdi-medal</v-icon>
        <span v-if="store_priority[i*2] == '高'" style="font-weight: bold;">
         {{store_priority[i*2]}}
        </span>
        <span v-else>
         {{store_priority[i*2]}}
        </span>
      </div>

      <div id="bookmark_memo">
        <!-- <span id="nav_sentence">メモ</span> -->
        <v-icon>mdi-lead-pencil</v-icon>
        {{store_memo[i*2]}}
      </div>
    </div>
  </div>

  <div style="height: 100px;"></div>
</template>

<style scoped>
#bookmark_wrapper {
  max-width: 600px;
  width: 100%;
  margin: 0 auto;

/* フェード用 */
	animation-name: fadeInAnime;
	animation-fill-mode:backwards;
	animation-duration:1s;
	animation-iteration-count:1;
	animation-timing-function:ease;
	animation-direction:normal;

}

#bookmark_box {
  margin-top: 20px;
  margin-bottom: 20px;
  width: 100%;
  background-color:gainsboro;
  padding: 10px;
  /* margin: 0 auto; */
}

#bookmark_title {
  background-color: white;
  padding: 10px;
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 1.2em;
  /* font-weight: bold; */
  border-radius: 5px;
  height: 70px;
  float: right;
  width: calc(100% - 80px);
}

#bookmark_category {
  background-color: white;
  width: 70px;
  height: 70px;
  float: left;
  border-radius: 5px;
  font-size: 25px;
  text-align: center;
  display: flex;
  align-items: center;
  justify-content: center;
}

#bookmark_address {
  background-color: white;
  margin-top: 10px;
  margin-bottom: 10px;
  width: calc(100% - 90px);
  float: left;
  border-radius: 5px;
  padding: 10px;
}

#bookmark_priority {
  background-color: white;
  margin-top: 10px;
  margin-bottom: 10px;
  width: 80px;
  float: right;
  border-radius: 5px;
  padding: 10px;
}

#bookmark_memo {
  background-color: white;
  margin-top: 10px;
  margin-bottom: 10px;
  width: 100%;
  clear: both;
  border-radius: 5px;
  padding: 10px;
}

#nav_sentence {
  font-size: 0.8em;
  color: dimgray;
}

/* フェード用 */
@keyframes fadeInAnime{
  0% {
    opacity: 0;
  }

  100% {
    opacity: 1;
  }
}

</style>

<script>
export default {
  data() {
    return {
      bookmark_name: ['','明洞カフェ','ギャングネムレストラン','仁寺洞ブティックショップ','グァンジャンマーケット','高麗宮観光','ホンデカフェ','ソウル塔展望台','釜山ビーチ','インサドンカルチャーセンター','チャンギャンチョン宮殿'],
   
      store_priority: ['','高','中','低','高','中','低','高','中','低','高'],

      store_address: ['','ソウル市中区明洞2街123号','ソウル市江南区江南大路432号','ソウル市中区仁寺洞3街56号','釜山市中区グァンジャン街789号','ソウル市中区太陽門広場12号','ソウル市中区ホンデ2街34号','ソウル市鍾路区南山公園路105号','釜山市海雲台区海雲台ビーチ大路123号','ソウル市中区インサドン5街87号','ソウル市中区セジョンジル10号'],

      store_memo: ['','1日目に行きたい','3日目の昼ごはん候補 晴れた日にはテラスで','お金が余ってたら行きたい','このためにお金を残す','晴れてたら行きたい','アートや文化 ユニークなカフェ','できれば行きたい','晴れてたら行きたい','できれば行きたい','確実に行きたい','絶対に行きたい'],

      // カテゴリー 0:食事系 1:買い物系 2:観光スポット
      store_cateogry: ['','0','0','1','1','2','0','2','2','2','2'],

    }
  },
  methods: {
    toSpot() {
      this.$router.push("/Spot");
    }
  },
}
</script>
