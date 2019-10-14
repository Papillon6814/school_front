import React from 'react'
import scss from '../styles/login.scss'

import Navi from '../components/navigation.js'

export default class extends React.Component {
  render() {
    return(
      <div>
        {/* <Navi/> */}

        <div className={scss.loginField}>
          <div className={scss.loginTitle}>
            ログイン画面
          </div>

          <input type="text" name="name" className={scss.loginInput}
          placeholder="講師名" />

          <input type="password" name="passwd" className={scss.loginInput}
          placeholder="パスワード" />

          <input type="password" name="confirm" className={scss.loginInput}
          placeholder="パスワード確認" />

          <div type="button" name="submit" value="login"
          className={scss.loginButton}>
            ログイン
          </div>
        </div>
      </div>
    )
  }
}