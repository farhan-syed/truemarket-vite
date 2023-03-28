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
              <button className="btn btn-success btn-md gap-3" type="button" onClick={search}>
                Start your search
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-6 w-6"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
                  />
                </svg>
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default HomeHero;
