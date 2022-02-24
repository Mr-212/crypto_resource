import 'bootstrap';
import 'bootstrap/dist/css/bootstrap.css';
import 'bootstrap/dist/js/bootstrap.js';
import $ from 'jquery';
import Popper from 'popper.js';


import React from 'react';
import ReactDOM , { render } from 'react-dom';
import { Provider } from 'react-redux';
import './index.css';
import './styles/tailwind.css';



import  {App}  from './App';
// import reportWebVitals from './reportWebVitals';
import { BrowserRouter as Router } from "react-router-dom";
import { store } from './redux/store';

// import { transitions, positions, Provider as AlertProvider } from 'react-alert'
// import AlertTemplate from 'react-alert-template-oldschool-dark'



// const options = {
//   // you can also just use 'bottom center'
//   position: positions.BOTTOM_CENTER,
//   timeout: 5000,
//   offset: '30px',
//   // you can also just use 'scale'
//   transition: transitions.SCALE
// }
// const ReactApp = () => (
//   <React.StrictMode>
//   <Provider store={store}>
//     <AlertProvider template={AlertTemplate} {...options}>
//       <Router>
//             <App />
//             {/* <AlertApp /> */}
//       </Router>
//     </AlertProvider>
//   </Provider>
//  </React.StrictMode>
// );
// render(<ReactApp />, document.getElementById('root'));

ReactDOM.render(
  // <React.StrictMode>
    <Provider store={store}>
      {/* <AlertProvider template={AlertTemplate} {...options}> */}
        <Router>
              <App />
        </Router>
      {/* </AlertProvider> */}
    </Provider>
 
  //  </React.StrictMode>
   ,
  // <ReactApp />,
  document.getElementById('root')
);



// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
// reportWebVitals();
