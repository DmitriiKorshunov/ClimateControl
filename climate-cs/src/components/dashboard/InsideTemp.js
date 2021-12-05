import React, { Component } from 'react'
import Typography from '@mui/material/Typography';
import Title from './Title';




export default class InsideTemp extends Component {


state = {
    loading: true,
    info: null
  }   


componentDidMount() {
  const ws = new WebSocket('ws://localhost:8000/ws/local')
  ws.onmessage = this.onMessage
  


  this.setState({
    ws: ws,
    // Create an interval to send echo messages to the server
    interval: setInterval(() => ws.send('echo'), 1000)
  })
}

componentWillUnmount() {
  const {ws, interval} = this.state;
  ws.close()
  clearInterval(interval)
}

onMessage = (ev) => {
  const recv = ev.data
  // const {data, count} = this.state
  // let newData = [...data]
  // // Remove first data if we received more than 20 values
  // newData.push({value: recv.value, index: count})
  // this.setState({data: newData, count: count + 1}) 
  const reply = recv
  this.setState({ info: reply, loading: false}) 
}

render() {
  return (<div> 
    <React.Fragment>
    <Title></Title>
    <Typography component="h1" variant="h6" align="center" alignItems="center">
    <div>
        {this.state.loading ? (
          <div>loading...</div>
        ) : (
          <div>
          <div>{this.state.info} </div>
          </div>
        )
        }
      </div>
    </Typography>
  </React.Fragment></div>
   
    // <h1> {this.reply}  </h1>
  )
}
}

