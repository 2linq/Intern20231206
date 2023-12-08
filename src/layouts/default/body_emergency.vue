<template>
 <div style="height: 50px;"></div>
  <div id="happen">
    <div id="happen_wrapper">
      <div id="happen_title">事件</div>
      <div id="happen_header">
        <div id="happen_detail">発生内容</div>
        <div id="happen_time">XX:XX 現在</div>
        <div style="clear: both"></div>
      </div>
      <div id="happen_info">
        爆発事故が発生し、近くのエリアを避けてください。
        煙と有害なガスが広がっています。 自己の安全を最優先に行動しましょう。
      </div>
    </div>
  </div>

  <div id="map">
    <div id="happen_wrapper">
      <div id="happen_title"></div>
      <div>
        <table id="map_table" cellspacing="30">
          <tr>
            <th id="map_title">場所</th>
            <td id="map_location">ソウル市中区明洞2街123号</td>
          </tr>
        </table>
        <div id="map_size">
            <v-img src="@/assets/mapInfo.png"></v-img>
        </div>
        <div id="map_ref">
          <a href=""> Google　Mapを開く </a>
        </div>
        <div style="clear: both"></div>
      </div>
    </div>
  </div>

  <div id="happen">
    <div id="happen_wrapper">
      <div id="happen_title">災害</div>
      <div id="happen_header">
        <div id="happen_detail">発生内容</div>
        <div id="happen_time">XX:XX 現在</div>
        <div style="clear: both"></div>
      </div>
      <div id="happen_info">
        先ほど、XX:XX分に、○○を震源とする地震が発生しました。
        ○○地区では震度4を計測しています。
      </div>
    </div>
  </div>

  <div id="happen">
    <div id="happen_wrapper">
      <div id="happen_header">
        <div id="happen_time">XX:XX 現在</div>
        <div style="clear: both"></div>
      </div>
      <table id="emergency" cellspacing="15">
        <tr>
            <td id="emergency_text">緊急地震速報</td>
            <td>
                <v-icon size="x-large">mdi-bell-alert</v-icon>
            </td>
        </tr>
      </table>
    </div>
  </div>

  <div id="happen">
    <div id="happen_wrapper">
      <div id="happen_header">
        <div id="happen_time">XX:XX 現在</div>
        <div style="clear: both"></div>
      </div>
      <div id="noInfo">特に情報はありません。</div>
    </div>
  </div>

  <div style="height: 50px"></div>
</template>

<script>
</script>

<style>
#happen {
  max-width: 600px;
  margin: 0;
  border-width: 1px;
  border-style: solid;
  border-color: darkgray;
}
#happen_wrapper {
  width: 90%;
  margin: 0 auto;
}
#happen_header {
  color: dimgray;
  font-size: 0.9em;
}
#happen_title {
  font-size: 1.3em;
  /*font-weight: bold;*/
  margin-top: 10px;
  /* margin-bottom: 10px; */
}
#happen_detail {
  width: 70%;
  float: left;
}
#happen_time {
  text-align: right;
}
#happen_info {
  margin: 0;
  padding: 20px;
}
#map {
  max-width: 600px;
  margin: 0;
  background-color: rgb(173, 225, 249);
}
#map_title {
  font-size: 1.3em;
  /*font-weight: bold;*/
  margin-top: 10px;
  /* margin-bottom: 10px; */
}
#map_location {
  text-align: center;
  padding: 5px;
  border-radius: 5px;
  background-color:white;
}
#map_table{
    padding: 5px;
}
#map_size{
    padding: 20px;
    margin: 0;
}
#map_ref{
    padding: 20px;
    text-align: right;
}
#emergency{
    margin: auto;
    padding: 10px;
}
#emergency_text{
    font-size: 1.6em;
    color: red;
}
#noInfo{
  margin: 0;
  padding: 20px;
  text-align: center;
}
</style>