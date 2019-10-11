import React from 'react'
import scss from './navigation.scss'

import Link from 'next/link'

export default class extends React.Component {
  render() {
    return(
      <div>
        <Link href="/">
          <div className={scss.title}>
            title
          </div>
        </Link>

        <div className={scss.navigation}>

          <Link href="/fee">
            <div className={scss.navi}>料金表</div>
          </Link>
          <div className={scss.navi}>諸経費</div>
          <div className={scss.navi}>講師情報</div>
          <div className={scss.navi}>受講までの流れ</div>
          <div className={scss.navi}>予約画面</div>
          <Link href="/member">
          <div className={scss.navi}>会員ログイン画面</div>
          </Link>
        </div>
      </div>
    )
  }
}