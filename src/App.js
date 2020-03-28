import React from 'react'
import './main.css'
import ReactDOM from 'react-dom'
const url = 'https://holidays-jp.github.io/api/v1/date.json'
class App extends React.Component {
  constructor (props) {
    super(props)
    this.state = {
      data1: '',
      maindata: {},
      index: 0
    }
  }
  componentDidMount () {
    fetch(url)
      .then(res => {
        return res.json()
      })
      .then(data => {
        this.setState({
          maindata: data
        })
      })
  }

  handlClick = () => {
    this.setState({
      data1: this.state.maindata
    })
  }

  render () {
    console.log(this.state.maindata)
    var fillZero = number => {
      return ('0' + number).slice(-2)
    }
    var d = new Date()
    var year = d.getFullYear()
    var month = fillZero(d.getMonth() + 1)
    var date = fillZero(d.getDate())
    const now = year + '-' + month + '-' + date
    const daydata = this.state.data1[now]
    return (
      <div classname='test'>
        <h1 classname='titleh1'>今日の日付</h1>
        <div>
          <button onClick={() => this.handlClick()}>更新</button>
        </div>
        <div>
          {this.state.data1 ? (
            daydata ? (
              <p>
                {now} 祝日({daydata})
              </p>
            ) : (
              <p>{now} (平日)</p>
            )
          ) : (
            ''
          )}
        </div>
      </div>
    )
  }
}

export default App
