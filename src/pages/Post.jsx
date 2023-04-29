import { useParams } from 'react-router-dom';
import axios from 'axios';
import useSWR from 'swr';

import NavigationBar from '../components/NavigationBar';

const fetcher = (url) => axios.get(url).then((res) => res.data);
function useFetcher() {
  const { id } = useParams();
  const { data, error, isLoading } = useSWR(`${import.meta.env.VITE_API_URL}/api/posts/${id}`, fetcher);
  return {
    post: data,
    isLoading,
    isError: error,
  };
}

function Post() {
  const { post, isLoading } = useFetcher();

  const badges = () => {
    const string = post.options;
    const array = string.split(',');
    return array.map((value) => <span key={value} className="badge mr-2">{value}</span>);
  };

  if (isLoading) return <h1>loading</h1>;

  function formatMoney(num) {
    const amount = num / 100;
    return new Intl.NumberFormat('en-US', {
      style: 'currency',
      currency: 'USD',
    }).format(amount);
  }

  function totalCost(msrp, market_adjustment, doc_fee, tax) {
    const total = msrp + market_adjustment + doc_fee + tax;
    return formatMoney(total);
  }

  const date = new Date(post.purchase_date);
  return (
    <div className="container min-w-full">
      <NavigationBar />
      <div className="hero min-h-screen bg-base-200">
        <div className="hero-content flex-col lg:flex-col">
          <div className="w-full">

            <div className="flex justify-between">
              <div>
                <span className="badge badge-primary">{post.condition}</span>
              </div>
              <div className="order-last">
                <p className="font-medium">{date.toLocaleDateString()}</p>
              </div>
            </div>

            <h1 className="text-5xl lg:text-6xl font-semibold">
              {post.car.year}
              {' '}
              {post.car.make}
              {' '}
              {post.car.trim}
            </h1>
            <p className="py-1">
              {post.car.transmission}
            </p>
            <p className="py-1">
              {post.car.engine}
            </p>
            <p className="py-1">
              {badges()}
            </p>
          </div>
          <div>
            <img src={post.image_url} className="object-scale-down rounded-lg shadow-2xl mb-4" alt="Purchase Info" />
          </div>

          <div className="stats stats-vertical xl:stats-horizontal bg-secondary text-secondary-content dark:text-primary-content w-full">
            <div className="stat">
              <div className="stat-title">MSRP</div>
              <div className="stat-value">{formatMoney(post.msrp)}</div>
            </div>
            <div className="stat">
              <div className="stat-title">Tax</div>
              <div className="stat-value">{formatMoney(post.tax)}</div>
            </div>
            <div className="stat">
              <div className="stat-title">Market Adjustment</div>
              <div className="stat-value">{formatMoney(post.market_adjustment)}</div>
            </div>
            <div className="stat">
              <div className="stat-title">Other Fees</div>
              <div className="stat-value">{formatMoney(post.fees)}</div>
            </div>
            <div className="stat bg-success text-primary dark:text-black">
              <div className="stat-title">Total</div>
              <div className="stat-value">{totalCost(post.msrp, post.market_adjustment, post.fees, post.tax)}</div>
            </div>
          </div>

        </div>
      </div>
    </div>
  );
}

export default Post;
