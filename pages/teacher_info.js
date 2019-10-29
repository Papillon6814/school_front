import React from 'react'
import Navi from "../components/navigation.js"
import Footer from "../components/footer.js"
import scss from "../styles/teacher_info.scss"

import Link from "next/link"

import BG from "../static/autumn.png"

export default class extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      sub:'国語',
    }
  }

  japanese = () =>{
    this.setState({ sub : '国語' })
    var element = document.getElementById('bgcolor');
    element.style.backgroundColor = '#f00';
  }

  math = () =>{
    this.setState({ sub : '数学' })
    var element = document.getElementById('bgcolor');
    element.style.backgroundColor = '#0f0';
  }

  science = () =>{
    this.setState({ sub : '理科' })
    var element = document.getElementById('bgcolor');
    element.style.backgroundColor = '#00f';
  }

  social = () =>{
    this.setState({ sub : '社会' })
    var element = document.getElementById('bgcolor');
    element.style.backgroundColor = '#ff0';
  }

  english = () =>{
    this.setState({ sub : '英語' })
    var element = document.getElementById('bgcolor');
    element.style.backgroundColor = '#0ff';
  }

  render() {

    const sub = this.state.sub;
    
    return(
      <div>
        <Navi/>
            <div>
                <div className={scss.title}>講師情報</div>
                  <div className={scss.buttonPlace}>
                      <div className={scss.japanese} onClick={this.japanese}>国</div>
                      <div className={scss.math} onClick={this.math}>数</div>
                      <div className={scss.science} onClick={this.science}>理</div>
                      <div className={scss.social} onClick={this.social}>社</div>
                      <div className={scss.english} onClick={this.english}>英</div>
                  </div>
                  <div className={scss.infoPlace}>
                    <div className={scss.teacherInfo}>
                      <div id='bgcolor' className={scss.subtitle}>{sub}</div>
                      <div className={scss.photoPlace}>
                        {/* Start */}
                        <div className={scss.item}>
                          <div className={scss.cir}></div>
                          <div>User_Info</div>
                        </div>
                        <div className={scss.item}>
                          <div className={scss.cir}></div>
                          <div>User_Info</div>
                        </div>
                        <div className={scss.item}>
                          <div className={scss.cir}></div>
                          <div>User_Info</div>
                        </div>
                        <div className={scss.item}>
                          <div className={scss.cir}></div>
                          <div>User_Info</div>
                        </div>
                        <div className={scss.item}>
                          <div className={scss.cir}></div>
                          <div>User_Info</div>
                        </div>
                        {/* End */}
                      </div>
                    </div>
                  </div>
            </div>
        <Footer/>
      </div>
    )
  }
}