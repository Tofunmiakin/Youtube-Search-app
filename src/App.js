import './App.css';
import Navigation from './Navigation';
import Search from './Search';

function App() {
  return (
    <div className='w-5/6 m-auto grid gap-12'>
      <Navigation/>
      <Search/>
    </div>
  );
}

export default App;
