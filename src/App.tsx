import React from 'react';
import './App.css';

function App() {
  return (
    <div className="wrapper">
      <div className="header">
        <div className="container"> 
          <div className="header__row">

            <div className='header__block'>
              <div className='header__rectangle'></div>
              <div className='header__rectangle'></div>
              <div className='header__rectangle'></div>
              <div className='header__rectangle'></div>
              <div className='header__rectangle'></div>
            </div> 
             
          </div>
        </div>
      </div>
      <div className='main'>
        <div className='container'>
          <div className='main__three'>
            <div className='main__item'>
                <div className='main__rectangle'>
                  <svg xmlns="http://www.w3.org/2000/svg">
                    <rect width="100%" height="100%" fill="#eee49a"></rect>
                  </svg>
                </div>
                <div className='main__text'>
                  Sed ut perspiciatis unde omnis iste natus error sit 
                  voluptatem accusantium doloremque laudantium, totam 
                  rem aperiam, eaque ipsa quae ab illo inventore veritatis
                  et quasi architecto beatae vitae dicta sunt explicabo. 
                </div>
            </div>
            <div className='main__item second'>
                <div className='main__rectangle'>
                  <svg xmlns="http://www.w3.org/2000/svg">
                    <rect width="100%" height="100%" fill="#eee49a"></rect>
                  </svg>
                </div>
                <div className='main__text'>
                  Sed ut perspiciatis unde omnis iste natus error sit 
                  voluptatem accusantium doloremque laudantium, totam 
                  rem aperiam, eaque ipsa quae ab illo inventore veritatis
                  et quasi architecto beatae vitae dicta sunt explicabo. 
                </div>
            </div>
            <div className='main__item'>
              <div className='main__rectangle'>
                <svg xmlns="http://www.w3.org/2000/svg">
                  <rect width="100%" height="100%" fill="#eee49a"></rect>
                </svg>
              </div>
              <div className='main__text'>
                  Sed ut perspiciatis unde omnis iste natus error sit 
                  voluptatem accusantium doloremque laudantium, totam 
                  rem aperiam, eaque ipsa quae ab illo inventore veritatis
                  et quasi architecto beatae vitae dicta sunt explicabo. 
                </div>
            </div>
          </div>
          <div className='main__second'>

          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
