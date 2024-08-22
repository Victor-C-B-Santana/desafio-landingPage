import './App.css';
import './pages/pages.css';

import Menu from './components/menu/menu'
import Footer from './components/footer/footer.js'

import Page1 from './pages/page1.js';
import Page2 from './pages/page2.js';
import Page3 from './pages/page3.js';
import Page4 from './pages/page4.js';
import Page5 from './pages/page5.js';

function App() {
  return (
    <div className="App">
      <header>
        <Menu></Menu>
      </header>
      
      <Page1></Page1>
      <Page2></Page2>
      <Page3></Page3>
      <Page4></Page4>
      <Page5></Page5>

      <Footer></Footer>

    </div>
  );
}

export default App;
