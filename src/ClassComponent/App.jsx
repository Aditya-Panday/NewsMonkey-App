// import React, { Component } from 'react'
// import { BrowserRouter, Route, Routes } from 'react-router-dom'
// import Navbar from './Navbar'
// import Footer from './Footer'
// import Home from './Home'

// // npm i react-top-loading-bar



// export default class App extends Component {

  

//   constructor() {
//     super()
//     this.state = {
//       language: "hi",
//       search: "",
//       mode: 'light',
            
//     }
//   }

  

//   changeLanguage = (data) => {
//     this.setState({ language: data })
//   }
//   changeSearch = (data) => {
//     this.setState({ search: data })
//   }

//   toggleMode = () => {
//     const { mode } = this.state;

//     if (mode === 'light') {
//       this.setState({ mode: 'dark' });
//       document.body.style.backgroundColor = '#042743';
      
//     } else {
//       this.setState({ mode: 'light' });
//       document.body.style.backgroundColor = 'white';
      
//     }
//   };
  
//   render() {
//     const { mode } = this.state;
//     return (
//       <BrowserRouter>
        
//         <Navbar changeLanguage={this.changeLanguage} mode={mode} toggleMode={this.toggleMode} changeSearch={this.changeSearch} />
//         <Routes>
//           <Route path="/" element={<Home  search={this.state.search} language={this.state.language} q="All" />} />
//           <Route path="/All" element={<Home  search={this.state.search} language={this.state.language} q="All" />} />
//           <Route path="/Politics" element={<Home  search={this.state.search} language={this.state.language} q="Politics" />} />
//           <Route path="/Science" element={<Home  search={this.state.search} language={this.state.language} q="Science" />} />
//           <Route path="/Technology" element={<Home  search={this.state.search} language={this.state.language} q="Technology" />} />
//           <Route path="/Education" element={<Home  search={this.state.search} language={this.state.language} q="Education" />} />
//           <Route path="/Crime" element={<Home  search={this.state.search} language={this.state.language} q="Crime" />} />
//           <Route path="/Sports" element={<Home  search={this.state.search} language={this.state.language} q="Sports" />} />
//           <Route path="/Cricket" element={<Home  search={this.state.search} language={this.state.language} q="Cricket" />} />
//           <Route path="/Entertainment" element={<Home  search={this.state.search} language={this.state.language} q="Entertainment" />} />
//           <Route path="/Jokes" element={<Home  search={this.state.search} language={this.state.language} q="Jokes" />} />
//         </Routes>
//         <Footer />
//       </BrowserRouter>
//     )
//   }
// }
