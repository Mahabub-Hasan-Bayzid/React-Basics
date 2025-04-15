
import './App.css';
import Footer from './Footer';
import Header from './Header';



const App = () =>{
  return (<div>
    <Header></Header>
    <main>
      <h2>Counter : 0</h2>
      <button>- 05</button>
      <button>- 1</button>
      <button>Reset</button>
      <button>+ 01</button>
      <button>+ 5</button>
    </main>
    <Footer></Footer>
  </div>
  )
};

export default App;