// uncomment for class component
// import React, { Component } from 'react'

// In functional component
import React from 'react' 
import spinner from './spinner.gif';

//uncomment for class component
// export class Spinner extends Component {
  // In functional component
  const Spinner = () => {
    //uncomment for class component
  // render() {
    return (
      <div className='text-center'>
        <img src={spinner} alt="Loading" />
      </div>
    )
    //uncomment for class component
  // }
}

export default Spinner
