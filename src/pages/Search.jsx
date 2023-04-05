import { useState } from 'react';
import { Link } from 'react-router-dom';
import axios from 'axios';
import NavigationBar from '../components/NavigationBar';

function formatMoney(num) {
  const amount = num / 100;
  return new Intl.NumberFormat('en-US', {
    style: 'currency',
    currency: 'USD',
  }).format(amount);
}

function SearchInput(props) {
  const [searchText, setSearchText] = useState('');
  const handleClick = () => {
    props.callback(searchText);
  };
  return (
    <div className="grid grid-row-1 place-content-center py-10">
      <div className="form-control">
        <div className="input-group">
          <input type="text" placeholder="Search 'BMW M550i in 92602'" className="input input-bordered border-2 w-96" onChange={(e) => { setSearchText(e.target.value); }} />
          <button
            type="button"
            className="btn btn-square"
            onClick={() => handleClick()}
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-6 w-6"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
            </svg>
          </button>
        </div>
      </div>
    </div>
  );
}

function CardItem({ item }) {
  const date = new Date(item.purchase_date);
  return (
    <div className="card-body bg-base-100 shadow-xl">
      <div className="flex justify-between">
        <div>
          <h2 className="card-title"><div className="badge badge-primary">{item.condition}</div></h2>
        </div>
        <div className="order-last">
          <p className="font-light">{date.toLocaleDateString()}</p>
        </div>
      </div>
      <h2 className="card-title">
        {`${item.year} ${item.make} ${item.trim}`}
      </h2>
      <p>{item.options}</p>
      <p>{formatMoney(item.total)}</p>
      <div className="card-actions justify-end">
        <Link
          to={`/post/${item.id}`}
          className="btn btn-primary btn-sm"
        >
          View
        </Link>
      </div>
    </div>
  );
}

function Card({ list }) {
  return (
    <div className="grid grid-cols-1 place-content-center sm:grid-cols-2 xl:grid-cols-4 gap-5 px-16 2xl:px-72 pb-14">
      {list.map((item) => (
        <CardItem item={item} key={item.id} />
      ))}
    </div>
  );
}

function Search() {
  const [list, setList] = useState([]);

  async function fetch(text) {
    const reformatted = text.replace(/\s/g, '&');
    try {
      const response = await axios.get(`http://localhost:3000/api/search/${reformatted}`);
      console.log(response.data)
      setList(response.data);
    } catch (error) {
      console.log(error);
    }
  }

  const searchCallback = (text) => {
    fetch(text);
  };

  return (
    <div className="container min-w-full min-h-screen bg-base-200">
      <NavigationBar />
      <SearchInput callback={searchCallback} />
      <Card list={list} />
    </div>
  );
}

export default Search;
