import { Component } from 'react';
import ReactDOM from 'react-dom';
import FirstComponent from './Components/first.Component';

class App extends Component {
    render(){
        return <div>
            <h1>React | Props</h1>
            <FirstComponent title = "My app 1" version = {101}>
                <h1> Hello from Child component </h1>
                
                <button> Click me</button>
            </FirstComponent>
            <FirstComponent title = "My app 2" version = {102}>
                <h1> Hello from Child component </h1>
                
                <button> Click me</button>
            </FirstComponent>
            <FirstComponent title = "My app 3" version = {103}>
                <h1> Hello from Child component </h1>
                
                <button> Click me</button>
            </FirstComponent>
        </div>
    }
};

ReactDOM.render(<App/>, document.getElementById("root"));