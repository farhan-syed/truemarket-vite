import axios from 'axios';
import useSWR from 'swr';
import { Link } from 'react-router-dom';
import { useAuth0 } from '@auth0/auth0-react';

import NavigationBar from '../components/NavigationBar';

const fetcher = (url) => axios.get(url).then((res) => res.data);

function formatMoney(num) {
  const amount = num / 100;
  return new Intl.NumberFormat('en-US', {
    style: 'currency',
    currency: 'USD',
  }).format(amount);
}

function totalCost(msrp, marketAdjustment, fees, tax) {
  const total = msrp + marketAdjustment + fees + tax;
  return formatMoney(total);
}

function CardItem({ item }) {
  console.log(item);
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
        {`${item.car.year} ${item.car.make} ${item.car.trim}`}
      </h2>
      <p>{item.options}</p>
      <p>{totalCost(item.msrp, item.market_adjustment, item.fees, item.tax)}</p>
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
    <div className="grid grid-cols-1 place-content-center sm:grid-cols-2 xl:grid-cols-4 gap-5 px-16 2xl:px-72 pb-14 pt-10">
      {list.map((item) => (
        <CardItem item={item} key={item.id} />
      ))}
    </div>
  );
}

function Posts() {
  const {
    user, isAuthenticated, isLoading, loginWithRedirect,
  } = useAuth0();
  const { data: posts } = useSWR(() => `http://localhost:3000/api/posts/user/${user.sub}`, fetcher);
  if (isLoading) return 'loading...';
  if (!isAuthenticated) {
    return loginWithRedirect();
  }
  if (!posts) {
    return 'loading...';
  }
  return (
    isAuthenticated && (
    <div className="container min-w-full min-h-screen bg-base-200">
      <NavigationBar />
      <h1 className="text-5xl font-bold pt-16 px-16 2xl:px-72">My Posts</h1>
      <Card list={posts} />
    </div>
    )
  );
}

export default Posts;
