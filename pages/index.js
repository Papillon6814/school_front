import React from 'react'
import "../styles/index.css"

export default class extends React.Component {
  render() {
    return(
      <div>
        <div className="title">
          title
        </div>

        <div className="navigation">
          <div className="navi">料金表</div>
          <div className="navi">諸経費</div>
          <div className="navi">講師情報</div>
          <div className="navi">受講までの流れ</div>
          <div className="navi">予約画面</div>
          <div className="navi">会員ログイン画面</div>
        </div>

        <br/>

        <div className="appeal">
          当塾の魅力
        </div>

        <div className="details">
          <div className="det">①時間帯の調整</div>
          <div className="det">②受講時間や受講単元のカスタマイズ</div>
          <div className="det">③お得な料金制</div>
          <div className="det">④過去の学年にも遡れるテキスト</div>
          <div className="det">⑤マンツーマンで苦手克服</div>
          <div className="det">⑥不登校や塾通いが苦手な子でも受講可能</div>
        </div>

        <div className="clear:both"></div>

        <div className="otherInfo">
          <div className="info">企業情報</div>
          <div className="info">講師専用画面</div>
        </div>
      </div>
    )
  }
}
