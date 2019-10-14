import React from 'react'
import scss from "../styles/index.scss"
import Navi from "../components/navigation.js"

import Link from "next/link"

export default class extends React.Component {
  render() {
    return(
      <div>
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

        <div className="clear:both"></div>

        <div className={scss.otherInfo}>
          <div className={scss.info}>企業情報</div>
          <Link href="/login">
            <div className={scss.info}>講師専用画面</div>
          </Link>
        </div>
      </div>
    )
  }
}
