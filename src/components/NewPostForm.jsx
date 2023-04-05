import { useState } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
import { useAuth0 } from '@auth0/auth0-react';

import Step1 from './FormStep1';
import Step2 from './FormStep2';
import Step3 from './FormStep3';

function NewPostForm() {
  const steps = 3;
  const [page, setPage] = useState(0);
  const [image, setImage] = useState('');
  const [formData, setFormData] = useState({
    purchase_date: '',
    zipcode: null,
    condition: '',
    year: '',
    make: '',
    model: '',
    trim: '',
    transmission: '',
    engine: '',
    options: '',
    msrp: null,
    down_payment: null,
    tax: null,
    market_adjustment: null,
    fees: null,
  });

  const display = () => {
    if (page === 0) {
      return (
        <Step1
          formData={formData}
          setFormData={setFormData}
          image={image}
          setImage={setImage}
        />
      );
    } if (page === 1) {
      return (
        <Step2
          formData={formData}
          setFormData={setFormData}
          image={image}
          setImage={setImage}
        />
      );
    }
    const nextBtn = document.getElementById('next-btn');
    nextBtn.style.display = 'none';
    const postBtn = document.getElementById('post-btn');
    postBtn.style.display = 'block';
    return (
      <Step3
        formData={formData}
        setFormData={setFormData}
        image={image}
        setImage={setImage}
      />
    );
  };

  const updateProgress = () => {
    if (page === 0) {
      return 25;
    } if (page === 1) {
      return 50;
    }
    return 75;
  };

  const navigate = useNavigate();
  const { user } = useAuth0();
  function createPost() {
    const url = 'http://localhost:3000/api/posts';
    const data = new FormData();
    data.append('body', JSON.stringify(formData));
    data.append('file', image);
    data.append('user_data', user.sub);

    axios({
      method: 'post',
      url,
      data,
    })
      .then((response) => {
        // console.log(response);
        const id = response.data;
        navigate(`/post/${id}`);
      })
      .catch((response) => {
        console.log(response);
      });
  }

  return (
    <div className="hero min-h-screen bg-base-200">
      <div className="hero-content flex-col lg:flex-row-reverse w-full">
        <div className="card flex-shrink-0 w-full max-w-xs sm:max-w-lg shadow-2xl bg-base-100">
          <div className="card-body">
            <progress
              className="progress w-full my-5"
              value={updateProgress()}
              max="100"
            />
            {display()}
            <button
              type="button"
              className="btn mt-5 w-full"
              id="next-btn"
              onClick={() => {
                setPage((current) => current + 1);
              }}
              disabled={page === steps - 1}
            >
              Next
            </button>
            <button
              type="button"
              className="btn mt-5 w-full"
              id="post-btn"
              onClick={() => { createPost(); }}
              style={{ display: 'none' }}
            >
              Post
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default NewPostForm;
