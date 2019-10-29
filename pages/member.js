import React from 'react'
import scss from '../styles/member.scss'
import Navi from '../components/navigation.js'
import Footer from '../components/footer.js'

export default class extends React.Component {
  render() {
    return(
      <div>
        <Navi/>

        <div className={scss.login}>
          <div className={scss.title}></div>
          <div className={scss.id_field}>
            <div className={scss.id}>
              生徒ID:
            </div>
            <input type="text" />
          </div>
          <div className={scss.passwd_field}>
            <div className={scss.passwd}>
              パスワード:
            </div>
            <input type="text" />
          </div>
          <div className={scss.login_button}>
            ログイン
          </div>
        </div>
        <Footer/>
      </div>
    )
  }
}