
import './App.css';
import Header from './components/header';
import About from './components/About';
import Projects from './components/projects';
import Footer from './components/footer';
import Contact from './components/contact';




function App() {
  return (
    <div className="App">
      <Header/>
      <About/>
      <Projects/>
      <Contact/>
      <Footer/>
    </div>
  );
}

export default App;
