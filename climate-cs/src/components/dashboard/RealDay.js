import { Component } from 'react'

export default class RealDate extends Component {
    constructor() {
        super();
        this.state = { date: new Date() }; // initialise the state
    }

    componentDidMount() { // create the interval once component is mounted
        this.update = setInterval(() => {
            this.setState({ date: new Date() });
        }, 1 * 1000); // every 1 seconds
    }

    componentWillUnmount() { // delete the interval just before component is removed
        clearInterval(this.update);
    }

    render() {

        const { date } = this.state;
        var weekDay = new Array(7);
        weekDay[0] = "Воскресенье";
        weekDay[1] = "Понедельник";
        weekDay[2] = "Вторник";
        weekDay[3] = "Среда";
        weekDay[4] = "Четверг";
        weekDay[5] = "Пятница";
        weekDay[6] = "Суббота";
        var result = weekDay[date.getDay()];
        return (
            result)
    }
    
}

