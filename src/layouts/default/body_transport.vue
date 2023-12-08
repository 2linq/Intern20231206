<template>
  <div style="height: 50px;"></div>

  <div class="tab-content" id="tab-content" v-for="i in transportations.length - 1">
    <div class="right-position update-time">
      <span class="update-time">15:45 現在</span>
    </div>
    <div class="content-upper" style="margin-top: 3px;">
      <div class="content-topic" style="display: flex;align-items: center;">
        <div id="trans-category" style="order: 1; font-size: 24px; font-weight: bold;">{{transportations[i]}}</div>
        <span class="status-detail" style="order: 2; text-align: center; flex-grow: 1; font-size: 24px;">{{where_accidents[i]}}</span>
        <div style="color: red; font-size: 24px; order: 3;">異常あり</div>
      </div>

      <div  class="status-message-bottom" style="margin-bottom: 10px;">
        <div class="accident-details">
          <span  style="font-weight: bold;">発生内容：</span>
          <p  style="text-indent:20px;">{{how_accidents[i]}}</p>
        </div>
        <a href="#" class="right-position" style="margin-right:15px;">
          リンク：JR東日本運行情報
        </a>

      </div>
      
    </div>
    <div id="store_info">
      <table id="store_table">
        <tr><th>SNS</th><td>異常あり</td></tr>
        <tr><th>SNSの内容</th><td>XXXXXでXXXXに関する投稿が200件確認されました</td></tr>
      </table>
      <div id="store_info_link">
        X(Twitter)を開く
      </div>
    </div>
  </div>


</template>





<style>

.tab-content{ 
  padding-bottom: 50px; /* footerの高さ分のパディングを追加 */
  overflow-y: auto; 
  max-width: 600px;
  margin-left: auto; /* 左のマージンを自動調整に設定 */
  margin-right: auto; /* 右のマージンを自動調整に設定 */
  display: block; /* ブロックレベル要素として表示 */

}
.update-time {
  background-color: #ffffff;
  padding-top: 3px;
}
.right-position{   /*右に配置するためのクラス*/
  position: relative;
  display: flex;
  justify-content: flex-end; /* 右揃えにする */
}

.status-link {
  text-decoration: none;
  color: #2196F3;
  font-size: 0.9em;
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

/* テーブルの行間を大きくするスタイル */


</style>


<script>
export default {
  data(){
    return{
      transportations: ['バス', '電車', '飛行機', '船'],
      where_accidents: ['江南大路', 'ソウル駅 - 釜山駅', '仁川国際空港', '釜山港'],
      how_accidents: [
      'バスが交差点で他の車両と衝突する事故が発生しました。この事故により、近隣の交通が一時的に混雑し、バスや車の利用者は遅延に影響を受ける可能性があります。',
      '電車の運行に遅れが生じ、特にラッシュアワーの間は混雑が予想されます。この遅延により、通勤や通学に利用する乗客に影響が出る可能性が高く、代替交通手段の利用が推奨されます。',
      '飛行機が機体の故障により遅延し、フライトが数時間遅れる事態が発生しています。この影響で、空港では多くの乗客がフライトの再スケジュールや代替便の確保に追われています。',
      '船が荒天により運行を中断し、予定されていた出発が遅れています。この影響で港では旅行者や物流業者に混乱が生じ、代替の輸送手段の確保が求められています。'
      ]
    } 
  }
}
</script>
