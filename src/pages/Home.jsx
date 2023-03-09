import NavigationBar from '../components/NavigationBar';
import HomeHero from '../components/HomeHero';

function Home() {
  return (
    <>
      <div className="container min-w-full">
        <NavigationBar />
        <HomeHero />
      </div>
      {/* <h1>Vite + React</h1> */}
    </>
  );
}

export default Home;
