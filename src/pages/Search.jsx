import { useState } from 'react';
import { Link } from 'react-router-dom';
import axios from 'axios';
import moment from 'moment';
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
    <div className="grid grid-row-1 place-content-center my-20">
      <div className="form-control">
        <div className="input-group">
          <input type="text" placeholder="'BMW M550i in 92602'" className="input input-bordered border-2 w-auto md:w-96" onChange={(e) => { setSearchText(e.target.value); }} />
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
  const dt = moment(item.purchase_date).format('MMMM Do, YYYY');
  return (
    <div className="card-body bg-base-100 shadow-md">
      <div className="flex justify-between">
        <div>
          <h2 className="card-title"><div className="badge badge-primary">{item.condition}</div></h2>
        </div>
        <div className="order-last">
          <p className="font-light">{dt}</p>
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
    <div className="grid grid-cols-1 place-content-center sm:grid-cols-2 xl:grid-cols-3 gap-5 px-16 2xl:px-72 pb-14">
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
      const response = await axios.get(`${import.meta.env.VITE_API_URL}/api/search/${reformatted}`);
      setList(response.data);
    } catch (error) {
      alert('there was an error, please try again.');
    }
  }

  const searchCallback = (text) => {
    fetch(text);
  };

  return (
    <div className="container mx-auto min-h-screen flex flex-col bg-base-200">
      <div className="flex items-center justify-between">
        <NavigationBar />
      </div>
      <div className="relative flex flex-grow">
        <div className="flex-1">
          <SearchInput callback={searchCallback} />
          <Card list={list} />
        </div>
      </div>
    </div>
  );
}

export default Search;
