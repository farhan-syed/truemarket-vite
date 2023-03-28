import algoliasearch from 'algoliasearch/lite';
import {
  InstantSearch, Hits, SearchBox, useInstantSearch,
} from 'react-instantsearch-hooks-web';

import { Link } from 'react-router-dom';
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
          <h2 className="card-title">
            <div className="badge badge-success">{hit.condition}</div>
            {`${hit.car.year} ${hit.car.make} ${hit.car.trim}`}
          </h2>
          {date.toLocaleDateString()}
          <p>{hit.options}</p>
          <p>{formatMoney(hit.total_cost)}</p>
          <div className="card-actions justify-end">
            <Link
              to={`/post/${hit.objectID}`}
              className="btn btn-primary btn-sm"
            >
              View
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}

const queryHook = (query, search) => {
  search(query);
};

function SubmitIcon() {
  return (
    <div className="btn rounded-l-none w-14 btn-success">
      <svg
        xmlns="http://www.w3.org/2000/svg"
        className="h-6 w-6"
        fill="none"
        viewBox="0 0 24 24"
        stroke="currentColor"
      >
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
      </svg>
    </div>
  );
}

function ResetIcon() {
  return (
    <></>
  );
}

function EmptyQueryBoundary({ children, fallback }) {
  const { indexUiState } = useInstantSearch();

  if (!indexUiState.query) {
    return fallback;
  }

  return children;
}

function Search() {
  return (
    <>
      <NavigationBar />
      <InstantSearch searchClient={searchClient} indexName="post">
        <SearchBox
          placeholder="BMW M550i in 92602"
          searchAsYouType={false}
          autoFocus
          submitIconComponent={SubmitIcon}
          resetIconComponent={ResetIcon}
          queryHook={queryHook}
          classNames={{
            root: 'grid grid-row-1 justify-center form-control p-24', form: 'input-group', input: 'input input-bordered border-2 w-96', submit: 'rounded-none', loadingIndicator: 'hidden',
          }}
        />
        <EmptyQueryBoundary fallback={null}>
          <Hits
            classNames={{ list: 'grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-4 gap-5 px-16 2xl:px-72 pb-14', item: 'card bg-base-100 shadow-xl' }}
            hitComponent={Hit}
          />
        </EmptyQueryBoundary>
      </InstantSearch>
    </>
  );
}
export default Search;
