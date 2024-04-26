// // rcc
// import React, { Component, useState } from 'react'
// export default class Classcompo extends Component {
//   constructor() {
//     super()
//     this.state =
//       { count: 0 }
//   }
//   onclick = () => {
//     console.log('you clicked here');
//     this.setState({ count: this.state.count + 1 });
//   }
//   render() {
//     return (
//       <div>
//         <h1>{this.state.count}</h1>
//         <button onClick={this.onclick} >click Me</button>
//       </div>
//     )
//   }
// }

import React, { Component } from 'react'

export default class Classcompo extends Component {

  constructor(){
    super()
    this.state = {
      count : 0
    }
  }

  onclick = () => {
    console.log('something cliked');
    this.setState({count :  this.state.count + 1})
  } 

  onclickdecre = () => {
    console.log('something cliked');
    this.setState({count :  this.state.count - 1})
  } 

  render() {
    return (
      <div>
        <h1>{this.state.count}</h1>
        <button onClick={this.onclick} >click here</button>
        <button onClick={this.onclickdecre} >click here to decre</button>
      </div>
    )
  }
}







