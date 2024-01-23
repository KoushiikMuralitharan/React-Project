
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import Header from './Component/Header';
import { Outlet } from 'react-router-dom';
function App() {
  return (
     <div>
        <Header/>
        <main className='pt-16 bg-slate-100 min-h[calc(100vh)]'>
          <Outlet>
          </Outlet>
        </main>
     </div>
  );
}

export default App;
