import React from 'react'

// function Clicker({handleClick}) {
//     return (
//         <input type="number" onChange={handleClick} />
//     )
// }
class Clicker extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            counter: 0,
            word: 'hello'
        }
        this.handleCountChange = this.handleCountChange.bind(this)
    }

    handleCountChange(e) {
        // console.log(this);
        this.setState({counter: e.target.value})
    }

    handleCountChange2 = (e) => {
        this.setState({counter: Number(e.target.value)})
    }

    handleClick = (e) => {
        this.setState(previousState => ({counter: previousState.counter+1}),
            console.log("state change", this.state.counter)
        )
    }


    componentWillUnmount() {
        console.log("Unmount");
    }

    render() {
        return (
            <>
                {/* <span>{this.state.counter}</span><br/> */}
                <input 
                    type="number"
                    // onChange={this.handleCountChange2} 
                    onChange={(e) => this.props.handleIncrease(e.target.value)} 
                    // value={this.state.counter}
                /> 
                <button onClick={this.handleClick}>+1</button>       
            </>
        )
    }
}

export default Clicker




