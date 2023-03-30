import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import axios from 'axios';

import NavigationBar from '../components/NavigationBar';

function Post() {
  const { id } = useParams();
  const [post, setPost] = useState([]);

  const badges = () => {
    const string = post.options;
    const array = string.split(',');
    return array.map((value) => <span key={value} className="badge mr-2">{value}</span>);
  };

  useEffect(() => {
    async function fetch() {
      try {
        const response = await axios.get(`http://localhost:3000/api/posts/${id}`);
        setPost(response.data);
      } catch (error) {
        console.log(error);
      }
    }

    fetch();
  }, [id]);

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

  if (post && post.car) {
    return (
      <div className="container min-w-full">
        <NavigationBar />
        <div className="hero min-h-screen bg-base-200">
          <div className="hero-content flex-col lg:flex-col">
            <div className="w-full">
              <p className="py-2">
                <span className="badge badge-primary">{post.condition}</span>
              </p>
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
  return (
    <div>Loading...</div>
  );
}

export default Post;
