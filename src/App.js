import logo from './logo.svg';
import './App.css';
import Converter from './Converter';
import Picture from './images/background.jpg'

function App() {
  return (<div>


    <div className='container '>
      <div className='row'>

        <div className='col-lg-2'>

        </div>
        <div className='col-lg-8 mt-5'>
          
          <div class="card text-center shadow-lg  bg-body rounded">
            <div class="card-body fw-bold  ">
              <h2>CURRENCY CONVERTER</h2>
            </div>
          </div>
        </div>
        <div className='col-lg-2'>
        </div>
      </div>
      <div className='row'>
        <div className='col-lg-1'></div>
       <Converter/>
        <div className=' col-lg-1'></div>
      </div>

    </div>
  </div>
  );
}

export default App;
