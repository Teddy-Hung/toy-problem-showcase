import {Component} from 'react'
import {React} from 'react'

class Sum extends Component{
    constructor(){
        super()

        this.state={
            num1: null,
            num2: null,
            sum: null
        }
    }

    handleChange1(e){
        this.setState({num1: parseInt(e, 10)})
    }
    handleChange2(e){
        this.setState({num2: parseInt(e, 10)})
    }

    sum(num1, num2){
        this.setState({sum:  num1 + num2})
    }
    render(){
        

        return (
            <section className="puzzleBox sumPB">
                <h4> Sum </h4>
                <input className="inputLine1" onChange= {(e) => this.handleChange1(e.target.value)} />
                <input className="inputLine2" onChange= {(e) => this.handleChange2(e.target.value)}/>
                <button className="confirmationButton" onClick= {() => this.sum(this.state.num1, this.state.num2)} >Filter</button>
                <span className="resultsBox filterObjectRB">Sum: {this.state.sum}</span>
            </section>
        )
    }
}

export default Sum