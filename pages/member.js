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
        </div>
        <Footer/>
      </div>
    )
  }
}