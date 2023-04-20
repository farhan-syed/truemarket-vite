import { useNavigate } from 'react-router-dom';

function HomeHero() {
  const navigate = useNavigate();

  function search() {
    navigate('/search');
  }

  return (
    <div className="hero min-h-screen bg-base-200">
      <div className="hero-content text-center">
        <div className="max-w-2xl">
          <h1 className="text-7xl font-bold">Avoid Overpaying</h1>
          <p className="py-6 text-2xl">
            Make smart car buying decisions
          </p>
          <div className="form-control">
            <div className="justify-center">
              <button className="btn btn-success btn-md" type="button" onClick={search}>
                Start your search
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default HomeHero;
