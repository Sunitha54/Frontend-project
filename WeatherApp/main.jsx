import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
// import App from './App.jsx'
// import { Report, Report2 } from './Welcome.jsx'
// import  Button  from './Button.jsx';
// import  Buttons  from './Buttons.jsx';
// import Usestateproject from './Usestate.jsx'
//import Portfolio from './Portfolio.jsx';
//import Portbody from './Portbody.jsx';



//import Setcounterrime  from './setcounterrime.jsx'
  import Weatherappjs from './Weatherappjs.jsx'
//import Usecallback from'./Usecallback.jsx'

// import './index.css'
//  import './Weatherappjs.css'
//import './Portfolio.css'


createRoot(document.getElementById('root')).render(
  <StrictMode>

    {/* <Portfolio />
    <Portbody /> */}
    <Weatherappjs/>
    
  </StrictMode>,
);
