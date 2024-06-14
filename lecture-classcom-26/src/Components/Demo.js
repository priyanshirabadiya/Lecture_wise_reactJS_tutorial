import React, { Component } from "react";

export default class Demo extends Component {
    state = {
        name: "priyanshi",
        count: 0,
        inputname : "",
    }

    incre = () => {
        this.setState({count: this.state.count + 1})
    }

    render() {
        return (
            <>
                <input onChange={(e) => this.setState({inputname : e.target.value})} type="text" />
                <h1>{this.state.inputname}</h1>
                <h1>{this.state.name}</h1>
                <h1>{this.state.count}</h1>
                <button onClick={this.incre} >incre</button>
            </>
        )
    }
}
























// import React, { Component } from "react";

// export default class Demo extends Component {
//     state = {
//         name : "priyanshi",
//         age : 45,
//         count : 0
//     }

//     incre = () => {
//         this.setState({count: this.state.count + 1})
//     }

//     render(){
//         return(
//             <>
//                 <h1>{this.state.name}</h1>
//                 <h1>{this.state.age}</h1>
//                 <h1  >{this.state.count}</h1>
//                 <button onClick={this.incre} >onclick</button>
//             </>
//         )
//     }
// }

