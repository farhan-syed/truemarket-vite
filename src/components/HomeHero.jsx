import { useNavigate } from 'react-router-dom';

function HomeHero() {
  const navigate = useNavigate();

  function search() {
    navigate('/search');
  }

  function post() {
    navigate('/post/new');
  }

  return (
    <div className="hero h-full">
      <div className="hero-content text-center">
        <div className="mx-auto">
          <h1 className="text-4xl md:text-6xl font-bold">Avoid Overpaying</h1>
          <p className="my-6 text-md md:text-lg lg:text-2xl">
            Find out what others are paying in your local car market
          </p>
          <div className="flex flex-col gap-4">
            <div className="flex-1">
              <button className="btn btn-success btn-md" type="button" onClick={search}>
                Start your search
              </button>
            </div>
            <div className="flex-1">
              <p className="m-2">Purchased recently?</p>
              <button className="btn bg-primary-content text-black hover:text-white btn-md" type="button" onClick={post}>
                Post your car
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default HomeHero;
