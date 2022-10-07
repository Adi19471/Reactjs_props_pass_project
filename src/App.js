import "./App.css";
import Title from "./Title";
import Information from "./Information";

import FlowersData from "./Components/FlowersData";




function App() {


  
    return ( 

      <div className="App">
        <Title/>
        <Information
         title = {FlowersData[0].title}
         imgsrc = {FlowersData[0].imgsrc}
         des = {FlowersData[0].des}

         btn = {FlowersData[0].btn}

        />
        

        <Information
         title = {FlowersData[1].title}
         imgsrc = {FlowersData[1].imgsrc}
         des = {FlowersData[1].des}

         btn = {FlowersData[1].btn}

        />


      
      </div>
      
    );
}

export default App;