/**
 * Created by Sestri4kina on 30.12.2016.
 */
import React from 'react';
import ReactDOM from 'react-dom';

class Application extends React.Component {
    constructor(props){
        super(props);
        this.state = {
            value: "Test phrase"
        }
    }

    render(){
        return(
            <div id="app-wrapper">
                <header>
                    <h1>Calendar</h1>
                </header>
                <section>
                    <p>Here goes all the other info and {this.state.value}</p>
                </section>
                <footer>
                    <p>&copy; Practice makes perfect</p>
                </footer>
            </div>
        );
    }
}

ReactDOM.render(<Application />, document.getElementById('app'));
