import { Component } from 'react'


export default class Weather extends Component {

  state = {
    loading: true,
    info: null
  }


  async componentDidMount(){
    const url = 'http://localhost:8000/get/weather'
    const responce = await fetch(url);
    const data =  await responce.json();
    this.setState({ info: data, loading: false}) 
     
  }

  render() {
    return (
      <div>
        {this.state.loading ? (
          <div>loading...</div>
        ) : (
          <div>
          <div>День: {this.state.info.temp_day} </div>
          <div>Ночь: {this.state.info.temp_night} </div>
          <div>Осадки: {this.state.info.precipitation} </div>
          <div>Ветер: {this.state.info.wind} </div>
          </div>
        )
        }
      </div>
    )
  }
 
}

