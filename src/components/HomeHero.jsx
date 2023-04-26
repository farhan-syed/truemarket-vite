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
    <div className="hero min-h-screen bg-base-200">
      <div className="hero-content text-center">
        <div className="max-w-2xl">
          <h1 className="text-7xl font-bold">Avoid Overpaying</h1>
          <p className="my-6 text-3xl">
            Make smarter car buying decisions
          </p>
          <div className="flex flex-col gap-4">
            <div className="flex-1">
              <button className="btn btn-success btn-wide" type="button" onClick={search}>
                Start your search
              </button>
            </div>
            <div className="flex-1">
              <p className="m-2">Purchased recently?</p>
              <button className="btn bg-primary-content text-black hover:text-white btn-wide" type="button" onClick={post}>
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
