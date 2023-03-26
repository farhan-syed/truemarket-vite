import algoliasearch from 'algoliasearch/lite';
import {
  InstantSearch, SearchBox, Hits,
} from 'react-instantsearch-hooks-web';

import NavigationBar from '../components/NavigationBar';

const searchClient = algoliasearch('OBW05FG76H', '062d08f89cb6e6543fb21a15d161420d');

function formatMoney(num) {
  const amount = num / 100;
  return new Intl.NumberFormat('en-US', {
    style: 'currency',
    currency: 'USD',
  }).format(amount);
}

function Hit({ hit }) {
  const date = new Date(hit.purchase_date);
  return (
    <div>
      <div>
        <div className="card-body">
          <div className="badge badge-secondary">{hit.condition}</div>
          <h2 className="card-title">
            {`${hit.car.year} ${hit.car.make} ${hit.car.trim}`}
          </h2>
          <p>{hit.options}</p>
          <p>{formatMoney(hit.total_cost)}</p>
          <div className="card-actions justify-end">
            <button type="button" className="btn">View</button>
          </div>
        </div>
      </div>
    </div>
  );
}

const queryHook = (query, search) => {
  search(query);
};

function Search() {
  return (
    <>
      <NavigationBar />
      <InstantSearch searchClient={searchClient} indexName="post">
        <SearchBox placeholder="BMW M550i in 92602" searchAsYouType={false} queryHook={queryHook} />
        <Hits classNames={{ list: 'grid grid-cols-1 gap-5 md:grid-cols-4 px-96 pb-10', item: 'card bg-base-100 shadow-md' }} hitComponent={Hit} />
      </InstantSearch>
    </>
  );
}
export default Search;
