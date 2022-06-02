
import './App.css';
import {BrowserRouter,Routes,Route} from 'react-router-dom'
import Home from './ReactRouterDom/Home';
import Orders from './ReactRouterDom/Orders';
import NotFount from './ComponentsHome/NotFount';



function App() {
  return (
    <div>
       
     
      <BrowserRouter>
      <Routes>
        <Route path="/home" element={<Home />}/>
        <Route path="/orders" element={<Orders />} />
        <Route path="*" element={<NotFount />}/>
      </Routes>
      </BrowserRouter>
     
    </div>
  );
}

export default App;
