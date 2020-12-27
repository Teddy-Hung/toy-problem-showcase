import {Component} from 'react'
import {React} from 'react'

class FilterString extends Component{
    constructor(){
        super()

        this.state={
            names: ['James', 'Jessica', 'Melody', 'Tyler', 'Blake', 'Jennifer', 'Mark', 'Maddy'],
            filteredStrings: [],
            userInput: ''
        }
    }

    handleChange(e){
        this.setState({userInput: e})
    }

    filterStrings(userInput){
        let filteredArr = []

        for(let i = 0; i < this.state.names.length; i++){
            if(this.state.names[i].includes(userInput)){
                filteredArr.push(this.state.names[i])
            }
        }

        this.setState({filterStrings: filteredArr})
    }

    render(){
        

        return (
            <section className="puzzleBox filterStringPB">
                <h4> Filter String </h4>
                <span className="puzzleText">{JSON.stringify(this.state.names)}</span>
                <input className="inputLine" onChange= {(e) => this.handleChange(e.target.value)}/>
                <button className="confirmationButton" onClick= {() => this.filterStrings(this.state.userInput)} >Filter</button>
                <span className="resultsBox filterObjectRB">{JSON.stringify(this.state.filterStrings)}</span>
            </section>
        )
    }
}

export default FilterString