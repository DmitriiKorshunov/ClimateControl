import React, { Component } from 'react'

export default class Weather extends Component {
    constructor(props) {
        super(props);
        this.state = {
          error: null,
          isLoaded: false,
          items: []
        };
      }
    
      componentDidMount() {
        fetch("http://localhost:8000")
          .then(res => res.json())
          .then(
            (result) => {console.log(result)
              this.setState({
                isLoaded: true,
                items: result.items
              });
            },
            // Примечание: важно обрабатывать ошибки именно в данном коллбэке,
            // вместо блока catch(), чтобы мы не теряли исключения от
            // реальных багов в компонентах.
            (error) => {console.log(error)
              this.setState({
                isLoaded: true,
                error
              });
            }
          )
      }
    
      render() {
        const { error, isLoaded, items } = this.state;
        if (error) {
          return <div>Error: {error.message}</div>;
        } else if (!isLoaded) {
          return <div>Loading...</div>;
        } else {
          return (
            <ul>
              {items.map(item => (
                <li key={item.name}>
                  {item.name} {item.price}
                </li>
              ))}
            </ul>
          );
        }
      }
}
