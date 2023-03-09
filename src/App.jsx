/* eslint-disable import/no-extraneous-dependencies */
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import { Auth0Provider } from '@auth0/auth0-react';

import Home from './pages/Home';
import Posts from './pages/Posts';
import Post from './pages/Post';
import NewPost from './pages/NewPost';
import Search from './pages/Search';
import NotFound from './pages/NotFound';

export function App() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/posts" element={<Posts />} />
      <Route path="/post/:id" element={<Post />} />
      <Route path="/post/new" element={<NewPost />} />
      <Route path="/search" element={<Search />} />
      <Route path="*" element={<NotFound />} />
    </Routes>
  );
}

export function WrappedApp() {
  return (
    <Auth0Provider
      domain="dev-truemarket.us.auth0.com"
      clientId="Dl5XBOcZLI7pv7IlvsQUF8WSvy4xebsE"
      authorizationParams={{
        redirect_uri: window.location.origin,
      }}
    >
      <BrowserRouter>
        <App />
      </BrowserRouter>
    </Auth0Provider>
  );
}

export default WrappedApp;
