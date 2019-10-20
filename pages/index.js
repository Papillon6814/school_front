import React from 'react'
import scss from "../styles/index.scss"
import Navi from "../components/navigation.js"
import Footer from "../components/footer.js"

import Link from "next/link"

import BG from "../static/autumn.png"
export default class extends React.Component {
  render() {
    return(
      <div className="zero">
        <Navi/>

        <br/>

        <div className={scss.appeal}>
          当塾の魅力
        </div>

        <div className={scss.details}>
          <div className={scss.det}>①時間帯の調整</div>
          <div className={scss.det}>②受講時間や受講単元のカスタマイズ</div>
          <div className={scss.det}>③お得な料金制</div>
          <div className={scss.det}>④過去の学年にも遡れるテキスト</div>
          <div className={scss.det}>⑤マンツーマンで苦手克服</div>
          <div className={scss.det}>⑥不登校や塾通いが苦手な子でも受講可能</div>
        </div>

        <div className={scss.notification}>
          当塾からのお知らせ
          <div className={scss.whiteRect}></div>
        </div>

        <Footer/>
      </div>
    )
  }
}