import { Component } from 'react';

/*class FirstComponent extends Component{
    config = {
        version : 102
    }
    render(){
        return <div>
                    <h1>Component </h1>
                    <h2> version : { this.props.version } </h2>
                    <hr/>
                    { this.props.children }
                    <button onClick={()=> {
                        //alert("hello")
                        this.config.version +=1
                        console.log(this.config)
                         }
                        
                    }> Increase version</button>
                </div>
    }
};
*/
//setState is asynchronous hence console log will still show previos values after increasing version
// asynchronous = does dwell on the line until the command i resolves it will move to next line(console.log too quickly)
class FirstComponent extends Component{
    state = {
        version : 102
    }
    render(){
        return <div>
                    <h1>Component title : {this.props.title} | version : {this.props.version}</h1>
                    <h2> version : { this.state.version } </h2>
                    <hr/>
                    { this.props.children }
                    <button onClick={()=> {
                        //alert("hello")
                        /*this.setState({ 
                            version : 100000
                        })*/
                        this.setState({
                            version : this.state.version + 1
                        })
                        console.log(this.state)
                         }}> Increase version</button>
                </div>
    }
};
export default FirstComponent;