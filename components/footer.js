import React from 'react'
import scss from './footer.scss'

import Link from 'next/link'

export default class extends React.Component {
  render() {
    return(
      <div className={scss.footer}>
        <Link href="info">
          <div className={scss.info}>
            企業情報
          </div>
        </Link>
        <div className={scss.sep}>
          |
        </div>
        <Link href="teacher_login">
          <div className={scss.teacher_login}>
            講師専用ログイン
          </div>
        </Link>
      </div>
    )
  }
}