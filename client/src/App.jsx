import { EthProvider } from "./contexts/EthContext";
import 'semantic-ui-css/semantic.min.css';
import {Footer, Categories, Header, Products, Trends} from './containers';
import { Carousel, CollectionListItem, Navbar, Labelling, CatCards}  from "./components" ;




import "./App.css";

function App() {
  return (
    <EthProvider>
      <div id="app" >
       <div className="gradient__bg">
       <Navbar/>
       <Header/>
       <Carousel/>
       </div>
       <div>
        <h2 className="app__section__name">Collections</h2>
        <div className="app__description">
        <Labelling/>
        <Labelling/>
        </div>
       <div className="app_cards_container">
       
        <CollectionListItem img="./NeptuneTriton_webb1059.png" rank = "1" name = "Maud" floor = "235ETH" device = "ETH " volume =  "1050 ETH"/>
        
        
        <CollectionListItem img="./NeptuneTriton_webb1059.png" rank = "1" name = "Maud" floor = "235ETH" device = "ETH " volume =  "1050 ETH"/>
       </div>
       </div> 
       
       <div>
        <Trends/>
        <Products/>
        <Categories/> 
       </div>
      <div className="footer__bg">
        <Footer/>
      </div>

      </div>
    </EthProvider>
  );
}

export default App;
