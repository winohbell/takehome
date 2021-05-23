import React from 'react';
import reactDOM from 'react-dom';

import moment from 'moment';
import dayjs from 'dayjs'

moment().format();
var advancedFormat = require('dayjs/plugin/advancedFormat')
dayjs.extend(advancedFormat)

class App extends React.Component {

  constructor(props) {
    super(props);

    this.state = {

    }
  }



  testMoment() {
    let nowMoment1 = moment().format('x');
    let nowMoment2 = moment().format('x');
    for(let i=0; i<50000; i++){
      nowMoment2 = moment().format('x');
    }
    return nowMoment2-nowMoment1
  }

  testDayjs() {
    let nowDayjs1 = dayjs().format('x');
    let nowDayjs2 = dayjs().format('x');
    for(let i=0; i<50000; i++){
      nowDayjs2 = dayjs().format('x');
    }
    return nowDayjs2-nowDayjs1
  }

  render() {
    return (
      <div class="content">
        <div class="example">
          Today is {moment().format('MMM D YYYY')}<br/>
          Today is {dayjs().format('MMM D YYYY')}
        </div>
        <div class="example">
          Now is {moment().hour()} : {moment().minute()}<br/>
          Now is {dayjs().hour()} : {dayjs().minute()}
        </div>
        <div class="example">
          100 days from today is {moment().add(100, 'd').format('MMM D YYYY')}<br/>
          100 days from today is {dayjs().add(100, 'day').format('MMM D YYYY')}
        </div>
        <div class="example">
          moment.js {this.testMoment()}<br/>
          day.js {this.testDayjs()}
        </div>
      </div>

    )
  }
}
reactDOM.render(<App />, document.getElementById('app'));