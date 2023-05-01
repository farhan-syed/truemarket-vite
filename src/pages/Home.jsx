import NavigationBar from '../components/NavigationBar';
import HomeHero from '../components/HomeHero';

function Home() {
  return (
    <div className="container h-screen mx-auto">
      <NavigationBar />
      <HomeHero />
    </div>
  );
}

export default Home;
