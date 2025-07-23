import Navbar from './components/Navbar';
import MouseFollower from './components/MouseFollower'
import { useState } from 'react';
import Search from './components/Search';
import AppRouter from './Routes/AppRouter';
import Intro from './pages/Intro';

const App = () => {

  const [isSearchOpen, setIsSearchOpen] = useState(false);



  return (
    <div className="relative">
      <Intro/>
      <MouseFollower/>
      <div className="overflow-hidden">
        <Navbar  onSearchClick={() => setIsSearchOpen(true)} />
        <Search isOpen={isSearchOpen} onClose={() => setIsSearchOpen(false)} />
        <AppRouter/>
      </div>



    </div>
  );
};

export default App;
