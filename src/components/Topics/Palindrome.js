import {Component} from 'react'
import {React} from 'react'

class Palindrome extends Component{
    constructor(){
        super()

        this.state={
            userInput: '',
            palindrome: ''
        }
    }

    handleChange(e){
        this.setState({userInput: e})
    }

    isPalindrome(str){
        let reversed = str.split('')
        reversed = reversed.reverse()
        reversed = reversed.join('')
        console.log(reversed)
        console.log(this.state.userInput)

        if(str === reversed){
            this.setState({palindrome: 'true'})
        }else{
            this.setState({palindrome: 'false'})
        }
    }

    render(){
        

        return (
            <section className="puzzleBox palindromePB">
                <h4> Palindrome </h4>
                <input className="inputLine" onChange= {(e) => this.handleChange(e.target.value)}/>
                <button className="confirmationButton" onClick= {() => this.isPalindrome(this.state.userInput)} >Filter</button>
                <span className="resultsBox filterObjectRB">Palindrome: {this.state.palindrome}</span>
            </section>
        )
    }
}

export default Palindrome