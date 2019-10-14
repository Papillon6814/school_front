import React from 'react'
import scss from "../styles/fee.scss"

import Navi from '../components/navigation.js'

export default class extends React.Component {
  render() {
    return(
      <div>
        <Navi/>

        <br/><br/>

        <div className={scss.tableArea}>
          <table border="1" className={scss.feeTable}>
            <tr>
              <th>aa</th>
              <th>bb</th>
            </tr>
            <tr>
              <td>11</td>
              <td>22</td>
            </tr>
            <tr>
              <td>33</td>
              <td>44</td>
            </tr>
          </table>
        </div>
      </div>
    )
  }
}