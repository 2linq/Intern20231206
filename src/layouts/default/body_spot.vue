<template>

  <!-- ストアの区切り -->
  <div id="store_loop" v-for="i in store_name.length-1">
    <div id="store_wrapper">
    <div id="store_title">
      <!--ストアのアイコン-->
      <v-icon>mdi-store-marker-outline</v-icon>
      {{ store_name[i] }}
    </div>
    <div id="store_header">
      <div id="store_businesshour">営業時間: {{ store_time_s[i] }} ～ {{ store_time_e[i] }}</div>
      <div id="store_time">XX:XX 現在</div>
      <div style="clear: both;"></div>
    </div>
    
    <div id="weather_wrapper">
      <div id="weather_realtime">
        <!-- <div id="weather_box_head">現在</div> -->
        <!--雨が降る雲のアイコン-->
        <v-icon id="weather_box_mainicon">mdi-apple-icloud</v-icon>
        <div id="weather_box_rainyper">
          <!--雫のアイコン-->
          <v-icon id="weather_box_rainyicon">mdi-water</v-icon>
          <span id="weather_box_rainyper_num">40</span>%
        </div>

        <div id="weather_temperature">
          <div id="weather_maxtemp">
            15℃
          </div>
          <div id="weather_mintemp">
            8℃
          </div>
        </div>

      </div>

      <!-- 予想用の表示 -->
      <div id="weather_prediction">
        <div id="weather_prewr">
          <div id="weather_box_head">
            21時
          </div>
          <!--雨が降る雲のアイコン-->
          <v-icon id="weather_pre_mainicon">mdi-weather-pouring</v-icon>
          <!-- 気温 -->
          <div id="weather_pre_temperature">
            9℃
          </div>
          <div id="weather_box_rainyper">
            <!--雫のアイコン-->
            <v-icon id="weather_box_rainyicon">mdi-water</v-icon>
            <span id="weather_box_rainyper_num">40</span>%
          </div>
        </div>

        <div id="weather_prewr">
          <div id="weather_box_head">
            22時
          </div>
          <!--雨が降る雲のアイコン-->
          <v-icon id="weather_pre_mainicon">mdi-weather-pouring</v-icon>
          <!-- 気温 -->
          <div id="weather_pre_temperature">
            9℃
          </div>
          <div id="weather_box_rainyper">
            <!--雫のアイコン-->
            <v-icon id="weather_box_rainyicon">mdi-water</v-icon>
            <span id="weather_box_rainyper_num">30</span>%
          </div>
        </div>

        <div id="weather_prewr">
          <div id="weather_box_head">
            23時
          </div>
          <!--雨が降る雲のアイコン-->
          <v-icon id="weather_pre_mainicon">mdi-weather-pouring</v-icon>
          <!-- 気温 -->
          <div id="weather_pre_temperature">
            8℃
          </div>
          <div id="weather_box_rainyper">
            <!--雫のアイコン-->
            <v-icon id="weather_box_rainyicon">mdi-water</v-icon>
            <span id="weather_box_rainyper_num">30</span>%
          </div>
        </div>

      </div>

      <div id="weather_otherinfo">
        湿度、気圧、風情報
        <v-icon>mdi-arrow-down-drop-circle-outline</v-icon>
      </div>

    </div>




  </div>

    <div id="store_info">
      <table id="store_table">
      <tr><th>住所</th><td>{{ store_adress[i] }}</td></tr>
        <tr><th>優先度</th><td>{{store_priority[i]}}</td></tr>
        <tr><th>混雑度</th><td>混雑
        </td></tr>
        <tr><th>SNS</th><td>{{store_sns_attention[i]}}</td></tr>
        <tr><th>SNS</th><td>{{store_sns_gpt[i]}}</td></tr>
      </table>
      <div id="store_info_link">
        X(Twitter)を開く
      </div>
    </div>

  </div>


  <!-- ↓がないとナビゲーションバーで隠れます -->
  <div style="height: 50px;"></div>
</template>

<style>
#store_loop {
  max-width: 600px;
  margin: 0 auto;
}


#store_title {
    font-size: 1.3em;
    /*font-weight: bold;*/
    margin-top: 10px;
    /* margin-bottom: 10px; */
}
#store_header {
  color: dimgray;
  font-size: 0.9em;
}
#store_businesshour {
  width: 70%;
  float: left;
}
#store_time {
  text-align: right;
}

/* ここから気象関連のスタイル */
#weather_wrapper {
  margin-top: 20px;

  text-align: center;
  color: gray;
}
/* 現時点の天気表示用ボックス */
#weather_realtime {
  width: 30%;
  float: left;
  height: 150px;
  position: relative;
}
#weather_box_head {
    font-size: 1.1em;
    color:dimgray;
    /* margin-bottom: 10px; */
    /* font-weight: bold; */
}
#weather_box_mainicon {
    font-size: 4.0em;
    height: 70px;
}
#weather_box_rainyper {
  color: cornflowerblue;
}
#weather_box_rainyicon {
  font-size: 1.1em;
}
#weather_box_rainyper_num {
  font-size: 1.3em;
}

/* 予測の表示はメインとは微妙に異なる */
#weather_prediction {
  display: flex;
}
#weather_prewr {
  margin-left: 15px;
  margin-right: 15px;
}
#weather_pre_mainicon {
  font-size: 2.5em;
  height: 50px;
}

/* 最高気温・最低気温 */
#weather_temperature {
  font-size: 1.2em;
  position: absolute;
  bottom: 0;
  width: 100%;
}
#weather_maxtemp {
  color:orange;
  float: left;
  margin:0;
  padding: 10px;
  width: 50%;
  text-align: right;
}
#weather_mintemp {
  color:cornflowerblue;
  float: right;
  margin:0;
  padding: 10px;
  width: 50%;
  text-align: left;
}

#store_wrapper {
    width: 90%;
    margin: 0 auto;
}

#weather_otherinfo {
  clear: both;
  color:darkslategrey;
  margin: 10px;
}

#store_info {
  background-color:rgb(229, 253, 253);
  margin: 0;
  padding: 20px;
}

#store_info table {
  background-color: white;
  border-radius: 10px;
  padding: 5px;
  border-spacing: 15px;
  margin:0 auto;
}

#store_info th {
  min-width: 60px;
}

#store_info_link {
  color:cornflowerblue;
  text-decoration: underline;
  padding: 2px;
  text-align: right;
}

#store_info td {
  background-color: #F1FDFD;
  border-radius: 5px;
  margin-bottom: 10px;
  padding: 2px;
  text-align: center;
}
</style>


<script>
export default {
  data(){
    return{
      store_name: ['','明洞カフェ','ギャングネムレストラン','仁寺洞ブティックショップ','グァンジャンマーケット','高麗宮観光','ホンデカフェ','ソウル塔展望台','釜山ビーチ','インサドンカルチャーセンター','チャンギャンチョン宮殿'],
      store_time_s: ['','10:00','12:30','11:00','9:00','9:30','8:00','10:00','7:00','10:30','9:00'],
      store_time_e: ['','20:00','21:30','19:00','18:00','17:30','19:00','21:00','21:00','18:30','16:30'],
      store_adress: ['','ソウル市中区明洞2街123号','ソウル市江南区江南大路432号','ソウル市中区仁寺洞3街56号','釜山市中区グァンジャン街789号','ソウル市中区太陽門広場12号','ソウル市中区ホンデ2街34号','ソウル市鍾路区南山公園路105号','釜山市海雲台区海雲台ビーチ大路123号','ソウル市中区インサドン5街87号','ソウル市中区セジョンジル10号'],

      store_congestion: ['','1','2','3','4','5','1','2','3','4','5'],

      store_priority: ['','高','中','低','高','中','低','高','中','低','高'],

      store_sns_attention: ['','異常なし','異常なし','異常あり','異常なし','異常あり','異常なし','異常なし','異常あり','異常なし','異常あり'],
      store_sns_gpt: ['','このスポットの雰囲気が良いという意見がSNS上で共有されています。','最近の投稿には、このスポットの料理が美味しいとの好評の声が多いです。','最近の投稿によると、このエリアで事故が起きたとの情報があります。注意してください。','店員さんの対応が良いというコメントが最近の投稿で多く見られます。','このスポットでの交通量の増加に関する情報があります。交通状況を確認してください。','店員さんの対応が良いというコメントが最近の投稿で多く見られます。','最近の投稿には、このスポットの料理が美味しいとの好評の声が多いです。','SNSによると、この場所で喧嘩が発生したとの報告があります。避けることをお勧めします。','店員さんの対応が良いというコメントが最近の投稿で多く見られます。','最近の投稿によると、このエリアで事故が起きたとの情報があります。注意してください。']


      //store_number: store_name.length
    }
  }
}
</script>