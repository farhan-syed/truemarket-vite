import { useLocation } from 'react-router-dom';

import NavigationBar from '../components/NavigationBar';

function Search() {
  const { state } = useLocation();
  const { query } = state;
  return (
    <>
      <NavigationBar />
      <div>{query}</div>
    </>
  );
}

export default Search;
