import React from "react";
import palindrome from "./palindrome"
import './palindrome.scss';


const initialState = {
    input: '',
    result: '',
    error: '',
    showPalindrome: false
}

class Palindrome extends React.Component {
    constructor(props) {
        super(props);
        this.state = initialState;

    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
    }
    validate = () => {
        let error = '';

        if (!this.state.input) {
            error = 'Please enter some text.';
            
        } 
        else if ( !isNaN(this.state.input) ) {
            error = 'The palindrome checker is unable to check against numbers.';
        }

        if (error) {
            this.setState({
                error
            });
            return false;
        }
        return true;
    }

    handleChange = (event) => {
        this.setState({
            input: event.target.value,
        }); 
    }

    handleSubmit = (event) => {
        event.preventDefault();
        const isValid = this.validate();

        if (isValid) {
            this.setState({
                initialState,
                result: palindrome(this.state.input),
                showPalindrome: true
            })
        } else {
            this.setState({
                showPalindrome: false
            })
        }
       
        

    
    }


    // Component Elements.
    render () {
        return (
            <div className="container">
                <div className="box">
                    <div>
                        <h1 className="title">Palindrome Checker</h1>
                        <p>This palindrome checker will determine if the word you pass below reads the same forwards and backwards. Non-alphanumeric characters are ignored.</p>
                    </div>

                    <form className="form" onSubmit={this.handleSubmit}>
                        <div>
                            <input type="text"  value={this.state.input} onChange={this.handleChange} placeholder="Enter your word..."/>
                            {this.state.error ? (
                            <div className="input-error">{this.state.error}</div>) : null}
                            <button type="submit">Submit</button>
                        </div>
                    </form>
                    <div>
                        {this.state.showPalindrome ? ( <h3 className={this.state.result ? "result-success" : "result-danger"}>
                           {this.state.result 
                            ? "This word is Palindrome."
                            : "This word is NOT Palindrome... Try Again..."}
                            </h3> ) : null}
                    </div>
                </div>
            </div>
        );
    }
}

export default Palindrome;