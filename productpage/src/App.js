import './App.css';
import './ProductDetails'
import ProductData from './ProductDetails';
function App() {
  return (
    <div className="App">
      <header className="App-header">
        <nav className="Topbar">
          <img src="https://logos-world.net/wp-content/uploads/2020/04/Amazon-Logo.png"  alt ="Amazon Logo" />
        </nav>
      </header>
      <div className="MainContainer"> 
        <div className="ProductImg">
           <img src="https://imgur.com/iOeUBV7.png" alt="product details"/>

           <div className="FeatureData">
            <p>{`${new Date().getHours()}:${new Date().getSeconds()}`}</p>
           </div>
        </div>

        <div className="productDetails">
          <h2 className="ProductTitle">{ProductData.title}</h2>
          <p className="ProductDescr">{ProductData.description}</p>

          <h3 className="SelectColor">Select Color</h3>
          <div className="ProductImgSelect">
            <img src="https://imgur.com/iOeUBV7.png" alt="Black color strip"/>
            <img src="https://imgur.com/PTgQlim.png" alt="red color strip"/>
            <img src="https://imgur.com/Mplj1YR.png" alt="Blue color strip"/>
            <img src="https://imgur.com/xSIK4M8.png" alt="grey color strip"/>
          </div>
          <div>
          <h3>About this item</h3>
          <p>Massive 1.85" display: See everyday data clearly under the brightest sun on the 1.85''
          TFT LCD that sports 550 nits of brightness and the highest screen-to-body ratio.</p>
          <p>BT calling: Talk directly to your loved ones from your wrist; manage calls, access your favourite contacts and dial from the dial pad.
          Tru Sync: Now connect with the world in a smart way, thanks to Tru Sync technology that ensures faster and stable connection and low power consumption.</p>
        </div>
        <h3>Features</h3>
        <div className="Features">
          <button className="FeatureItem selectedFeature">Time</button>
          <button  className="FeatureItem">Heart Rate</button>
        </div>
        <button className="buyButton">Buy Now</button>
      </div>
    </div>
    </div>
  );
}

export default App;
