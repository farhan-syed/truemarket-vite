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

  if (post && post.car) {
    return (
      <div className="container min-w-full">
        <NavigationBar />
        <div className="hero min-h-screen bg-base-200">
          <div className="hero-content flex-col lg:flex-col">
            <div>
              <h1 className="text-5xl lg:text-6xl font-semibold">
                {post.car.year}
                {' '}
                {post.car.make}
                {' '}
                {post.car.trim}
              </h1>

              <p className="py-2">
                <span className="badge badge-success">{post.condition}</span>
              </p>
              <p className="py-1">
                {post.car.transmission}
              </p>
              <p className="py-1">
                {post.car.engine}
              </p>
              <p className="py-1">
                {/* <span className="badge">{post.options}</span> */}
                {badges()}
              </p>
            </div>
            <div>
              <img src={post.image_url} className="max-w-md lg:max-w-xl rounded-lg shadow-2xl" alt="Purchase Info" />
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
