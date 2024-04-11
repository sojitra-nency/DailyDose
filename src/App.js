import './App.css';

// rcc
// uncomment for class component
// import React, { Component } from 'react'

// In functional component
import React from 'react'
import NavBar from './components/NavBar';
import News from './components/News';
import {BrowserRouter as Router,Routes, Route} from 'react-router-dom';
import LoadingBar from 'react-top-loading-bar';

//uncomment for class component
// export default class App extends Component {

//   pageSize=6;
//   apiKey=process.env.REACT_APP_NEWS_API

//   state = {
//     progress: 0
//   }

//   setProgress = (progress) => {
//     this.setState({progress: progress});
//   }

//   render() {
//     return (
//       <>
//         <Router>
//           <NavBar/>
//           <LoadingBar
//             height='3px'
//             color='#f11946'
//             progress={this.state.progress}
//             />
//           <Routes>
//             <Route exact path="/" element={<News setProgress={this.setProgress} apiKey={this.apiKey} key="general" pageSize={this.pageSize} country="in" category="general"/>} />
//             <Route exact path="/business" element={<News setProgress={this.setProgress} apiKey={this.apiKey} key="business" pageSize={this.pageSize} country="in" category="business"/>} />
//             <Route exact path="/entertainment" element={<News setProgress={this.setProgress} apiKey={this.apiKey} key="entertainment" pageSize={this.pageSize} country="in" category="entertainment"/>} />
//             <Route exact path="/health" element={<News setProgress={this.setProgress} apiKey={this.apiKey} key="health" pageSize={this.pageSize} country="in" category="health"/>} />
//              <Route exact path="/science" element={<News setProgress={this.setProgress} apiKey={this.apiKey} key="science" pageSize={this.pageSize} country="in" category="science"/>} />
//             <Route exact path="/sports" element={<News setProgress={this.setProgress} apiKey={this.apiKey} key="sports" pageSize={this.pageSize} country="in" category="sports"/>} />
//             <Route exact path="/technology" element={<News setProgress={this.setProgress} apiKey={this.apiKey} key="technology" pageSize={this.pageSize} country="in" category="technology"/>} />
//           </Routes>
//         </Router> 
//       </>



//     )
//   }
// }

// in functional component
const App = () => {
  const pageSize=6;
  const apiKey=process.env.REACT_APP_NEWS_API

  const [progress, setProgress] = React.useState(0);

  return (
    <>
      <Router>
        <NavBar/>
        <LoadingBar height='3px' color='#f11946' progress={progress}/>
        <Routes>
          <Route exact path="/" element={<News setProgress={setProgress} apiKey={apiKey} key="general" pageSize={pageSize} country="in" category="general"/>} />
          <Route exact path="/business" element={<News setProgress={setProgress} apiKey={apiKey} key="business" pageSize={pageSize} country="in" category="business"/>} />
          <Route exact path="/entertainment" element={<News setProgress={setProgress} apiKey={apiKey} key="entertainment" pageSize={pageSize} country="in" category="entertainment"/>} />
          <Route exact path="/health" element={<News setProgress={setProgress} apiKey={apiKey} key="health" pageSize={pageSize} country="in" category="health"/>} />
           <Route exact path="/science" element={<News setProgress={setProgress} apiKey={apiKey} key="science" pageSize={pageSize} country="in" category="science"/>} />
          <Route exact path="/sports" element={<News setProgress={setProgress} apiKey={apiKey} key="sports" pageSize={pageSize} country="in" category="sports"/>} />
          <Route exact path="/technology" element={<News setProgress={setProgress} apiKey={apiKey} key="technology" pageSize={pageSize} country="in" category="technology"/>} />
        </Routes>
      </Router> 
    </>
  )
}
export default App

