import { useState } from 'react';
import { useNavigate } from 'react-router-dom';

function HomeHero() {
  const [query, setQuery] = useState('');
  const navigate = useNavigate();

  function search() {
    navigate('/search', { state: { query } });
  }

  const handleChange = (event) => {
    setQuery(event.target.value);
  };

  return (
    <div className="hero min-h-screen bg-base-200">
      <div className="hero-content text-center">
        <div className="max-w-md">
          <h1 className="text-5xl font-bold">Avoid Overpaying</h1>
          <p className="py-6 text-lg">
            Compare recent local car purchases to help make the best decision
            on your next car
          </p>
          <div className="form-control shadow-md">
            <div className="input-group justify-center">
              <input
                type="text"
                placeholder="BMW M550i in 92602"
                value={query || ''}
                onChange={handleChange}
                className="input input-bordered w-full"
              />
              <button className="btn btn-square" type="button" onClick={search}>
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
