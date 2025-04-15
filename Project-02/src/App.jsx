
import './App.css';
import Footer from './Footer/Footer';
import Header from './Header/Header';
import BookList from './Book/BookList';


const App = () =>{

return (<div>
    <Header/>
    <main> 
      {
        <BookList
        
        />
        
      }
    </main>
    <Footer/>
  </div>
  )
};

export default App;