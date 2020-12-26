import {Component} from 'react'
import {React} from 'react'

class FilterObject extends Component{
    constructor() {
        super();
    
        this.state = {
          employees: [
            {
              name: 'Jimmy Joe',
              title: 'Hack0r',
              age: 12,
            },
            {
              name: 'Jeremy Schrader',
              age: 24,
              hairColor: 'brown'
            },
            {
              name: 'Carly Armstrong',
              title: 'CEO',
            }
          ],
    
          userInput: '',
          filteredEmployees: []
        }

    }
    
    handleChange(e){
        this.setState({userInput: e})
    }

    filter(userInput){
        let filteredArr = []

        for(let i=0; i<this.state.employees.length; i++){
            // console.log('hi')
            if(this.state.employees[i].hasOwnProperty(userInput)){
                filteredArr.push(this.state.employees[i])
                // console.log('ho')

            }
        }
        this.setState({filteredEmployees: filteredArr})
    }


    render(){
        return (
            <section className="puzzleBox filterObjectPB">
                <h4> Filter Object </h4>
                <span className="puzzleText">Original: {JSON.stringify(this.state.employees)}</span>
                <input className="inputLine" onChange= {(e) => this.handleChange(e.target.value)}/>
                <button className="confirmationButton" onClick= {() => this.filter(this.state.userInput)}> Filter </button>
                <span className="resultsBox filterObjectRB">Filtered: {JSON.stringify(this.state.filteredEmployees)}</span>
            </section>
        )
    }
}

export default FilterObject