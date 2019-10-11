import React from 'react'
import '../styles/kits.css'

export default class extends React.Component {
  data = [
    { text: "aa" },
    { text: "bb" },
    { text: "cc" }
  ]

  render() {
    return(
      <div>
        <div className="title">
          title
        </div>

        <div className="navigation">
          <div className="navi">aaa</div>
          <div className="navi">bbb</div>
          <div className="navi">ccc</div>
          <div className="navi">ddd</div>
        </div>

        <div className="classes">
          <div className="rsrv">
            <div className="subject" onClick='cl("math", 3)'>
              数学
            </div>

            <div id="math">
              {this.data.map((data) => {
                return <div className="times">{data.text}</div>
              })}
            </div>
          </div>
        </div>
      </div>
    )
  }
}