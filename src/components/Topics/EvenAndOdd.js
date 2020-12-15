import {Component} from 'react'
import {React} from 'react'

class EvenAndOdd extends Component{

    constructor(evenArray, oddArray, userInput){
        super()

        this.state = {
            evenArray: [],
            oddArray: [],
            userInput: ''
        }
    }
    // sets user input to this.state.userInput
    handleChange(e){
        this.setState({userInput: e.target.value})
    }
   

    evenOdd(e){
        let oddArrCopy = []
        let evenArrCopy = []
        let inputArr = e.split(',')

        for(let i=0; i<inputArr.length; i++){
            if(inputArr[i] % 2 === 0){
                evenArrCopy.push(parseInt(inputArr[i], 10))
            }else{
                oddArrCopy.push(parseInt(inputArr[i], 10))
            }
        }
        this.setState({evenArray: evenArrCopy, oddArray: oddArrCopy})
    }

    render(){
        

        return (
            <section className = 'puzzleBox evenAndOddPB'>
                <h4>Evens and Odds</h4>
                <input className = 'inputLine' onChange = {e=> this.handleChange(e)}></input>
                <button className = 'confirmationButton' onClick = { () => this.evenOdd(this.state.userInput)}>Split</button>
                {/* 'JSON.stringify() shows arrays in a [1,2,3] format' */}
                <span className = 'resultsBox'>Evens: {JSON.stringify(this.state.evenArray)}</span>
                <span className = 'resultsBox'>Odds: {JSON.stringify(this.state.oddArray)}</span>
            </section>
        )
    }
}

export default EvenAndOdd