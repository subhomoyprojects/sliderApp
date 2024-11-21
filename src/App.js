import logo from './logo.svg';
import './App.css';

function App() {
  let moveLeft = () => { }
  let moveRight = () => { }
  return (
    <>
      <h1>Slider</h1>
      <div className="sliderWrapper">
        <div className='slider'>
          <div className="sliderItem">1</div>
          <div className="sliderItem">2</div>
          <div className="sliderItem">3</div>
        </div>
        <div className="btnHolder">
          <button type='button' onClick={moveLeft} className='prevSlider'>prev</button>
          <button type='button' onClick={moveRight} className='nextSlider'>next</button>
        </div>
      </div>
    </>
  );
}

export default App;
