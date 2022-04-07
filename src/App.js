import Navbar from './Components/Navbar/Nav'
import BlogHeader from './Components/BlogTitle/BlogHeader';
import PageContent from './Components/PageContent/PageContent';
import './App.css';


function App() {
  return (
    <div className="App">
      <Navbar/>
      <BlogHeader/>
      <PageContent/>
    </div>
  );
}

export default App;
