import React from 'react';
import Container from './components/Container';
import Card from './components/Card';
import Search from './components/Search';
import DateTime from './components/DateTime';
import Footer from './components/Footer';
import LinksContainer from './components/LinksContainer';
import './App.css';

function App() {
  return (
    <>
      <Container>
        <Card>
          <img className="content__img" src="https://i.imgur.com/UNQh1SAl.jpg" alt="" />
          <div className="content">
            <h1 className="content__title">Welcome Mito</h1>
            <DateTime />
            <Search />
            <LinksContainer />
          </div>
        </Card>
      </Container>
      <Footer />
    </>
  );
}

export default App;
