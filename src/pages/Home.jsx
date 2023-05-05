import NavigationBar from '../components/NavigationBar';
import HomeHero from '../components/HomeHero';

function Home() {
  return (
    <div className="container mx-auto min-h-screen flex flex-col">
      <div className="flex items-center justify-between">
        <NavigationBar />
      </div>
      <div className="relative flex flex-grow">
        <div className="flex-1">
          <HomeHero />
        </div>
      </div>
    </div>
  );
}

export default Home;
