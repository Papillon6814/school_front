import React from 'react'
import scss from './navigation.scss'

export default class extends React.Component {
  render() {
    return(
      <div>
        <div className={scss.title}>
          title
        </div>

        <div className={scss.navigation}>
          <div className={scss.navi}>料金表</div>
          <div className={scss.navi}>諸経費</div>
          <div className={scss.navi}>講師情報</div>
          <div className={scss.navi}>受講までの流れ</div>
          <div className={scss.navi}>予約画面</div>
          <div className={scss.navi}>会員ログイン画面</div>
        </div>
      </div>
    )
  }
}