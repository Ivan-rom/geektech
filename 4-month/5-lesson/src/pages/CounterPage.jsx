import React from 'react'
import Clicker from '../components/clicker/clicker'



class CounterPage extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            counter: 0,
            show: true
        };
        this.increaseCounter = this.increaseCounter.bind(this)
    }

    componentDidMount() {
        this.setState()
        console.log("mount");

    }

    componentDidUpdate() {
        // this.setState нельзя
        console.log("update");
    }

    componentWillUnmount() {

    }

    increaseCounter(val) {
        this.setState({counter: val})
    }

    render() {
        console.log("render");
        return (
            <div>
                Counter: {this.state.counter}
                <button onClick={() => this.setState({show: !this.state.show})}>show</button>
                { this.state.show && 
                    <Clicker handleIncrease={this.increaseCounter} />
                }
                
            </div>
        )
    }
}

export default CounterPage