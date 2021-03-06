import React from 'react'
import scss from './navigation.scss'

import Link from 'next/link'

export default class extends React.Component {
  render() {
    return(
      <div>
        <div className={scss.title}>
          <div className={scss.navigation}>
            <Link href="/">
              <div className={scss.name}>
                オンライン学習塾
              </div>
            </Link>
            <Link href="/fee">
              <div className={scss.navi}>料金表</div>
            </Link>
            <div className={scss.verticalLine}></div>
            <div className={scss.navi}>諸経費</div>
            <div className={scss.verticalLine}></div>
            <Link href="teacher_info">
              <div className={scss.navi}>講師情報</div>
            </Link>
            <div className={scss.verticalLine}></div>
            <div className={scss.navi}>受講までの流れ</div>
            <div className={scss.verticalLine}></div>
            <Link href="reservation">
              <div className={scss.navi}>予約画面</div>
            </Link>
            <div className={scss.verticalLine}></div>
            <Link href="/member">
              <div className={scss.navi}>ログイン</div>
            </Link>
          </div>
        </div>
      <div className={scss.space}></div>
    </div>
    )
  }
}