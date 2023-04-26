import NavigationBar from '../components/NavigationBar';
import HomeHero from '../components/HomeHero';

function Home() {
  return (
    <div className="container w-screen relative min-w-full">
      <div className="absolute w-screen">
        <NavigationBar />
      </div>
      <HomeHero />
    </div>
  );
}

export default Home;
