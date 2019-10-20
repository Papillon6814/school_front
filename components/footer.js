import React from 'react'
import scss from './footer.scss'

import Link from 'next/link'

export default class extends React.Component {
  render() {
    return(
      <div className={scss.footer}>
        <Link href="../pages/info.js">
          <div className={scss.info}>
            企業情報
          </div>
        </Link>
        <div className={scss.sep}>
          |
        </div>
        <Link href="../pages/teacher_login.js">
          <div className={scss.teacher_login}>
            講師専用ログイン
          </div>
        </Link>
      </div>
    )
  }
}