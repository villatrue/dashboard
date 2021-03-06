import React from 'react';
import './App.scss';
import Header from "./components/header/Header";
import Twitter from "./components/Twitter"
import Navigation from "./components/atoms/Navigation";
import Footer from "./components/atoms/Footer";
import TotalPercentages from "./components/TotalPercentages";
import Map from "./components/Map";

function App() {

  return (
    <div className="App">

      <Navigation/>


        <Header/>

        <div className={'columns is-gapless'}>
            <div className={'column is-half tile'}>
                <Map/>
            </div>
            <div className={'column is-half tile'}>
                <Twitter/>
            </div>
        </div>

        <div className={'columns is-gapless'}>
            <div className={'column is-half tile'}>
                <TotalPercentages/>
            </div>
            <div className={'column tile'}>
                <Header/>
            </div>
        </div>


        <Footer/>

    </div>
  );
}

export default App;
