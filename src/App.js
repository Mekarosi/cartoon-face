
import './App.css';

function App() {
  return (
    <div id="cartoon" role="img" aria-labelledby="description">
      <div id="description">Cartoon of a young man with curly hair</div>
      {/* <div className="hair-neck"></div> */}
      <div className="body"></div>
      <div class="ear"></div>
      <div class="ear"></div>
      <div className="neck"></div>
      <div className="hair-back"></div>
      <div className="face">
      <div className="cheeks"></div>
        <div className="eye">
          <div className="pupil"></div>
        </div>
        <div className="eye">
          <div className="pupil"></div>
        </div>
        <div className="month"></div>
        <div className="freckles"></div>
        <div className="nose"></div>
      </div>  
      <div className="hair-top"></div> 
    </div>
  );
}

export default App;
