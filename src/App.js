import './App.css';
import Header from './components/Header';
import Menu from './components/Menu'
import About from './components/About'
import Contact from './components/Contact';

function App() {

  // let items = ["apple", "mango", "orange", "banana"]
  // fruits={items}

  // function display() {
  //   console.log("function declared in parent component called")
  // }

  function sum(a, b) {
    console.log('total: ', a + b)
  }

  // funcName={sum}
  // let user = "Dharani"
  return (
    <>
      <div id="home"><Header student={sum}></Header></div>

      <div id="menu"><Menu></Menu></div>
      <div id="about"> <About></About></div>
      <div id="contact"><Contact /></div>

    </>
  );
}

export default App;
