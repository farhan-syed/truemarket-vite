// eslint-disable-next-line import/no-extraneous-dependencies
import { useAuth0 } from '@auth0/auth0-react';

function NavigationBar() {
  const {
    isAuthenticated, user, loginWithRedirect, logout,
  } = useAuth0();
  return (
    <div className="navbar bg-base-200">
      <div className="navbar-start">
        <a href="/" className="btn btn-ghost normal-case text-xl">truemarket</a>
      </div>
      <div className="navbar-end">
        <a href="/search" className="btn btn-ghost btn-square">
          <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" /></svg>
        </a>

        <div className="dropdown dropdown-bottom dropdown-end">
          <label tabIndex={0} className="btn btn-ghost btn-square">
            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16M4 18h7" /></svg>
          </label>

          {isAuthenticated ? (
            <ul tabIndex={0} className="menu menu-compact dropdown-content mt-3 p-2 shadow bg-base-100 rounded-box w-52">
              <p className="text-xs m-2">{user.email}</p>
              <li><a href="/post/new">new post</a></li>
              <li><a href="/posts/me">my posts</a></li>
              <li><button type="button" onClick={() => logout()}>logout</button></li>
            </ul>
          ) : (
            <ul tabIndex={0} className="menu menu-compact dropdown-content mt-3 p-2 shadow bg-base-100 rounded-box w-52">
              <li><button type="button" onClick={() => loginWithRedirect()}>login / sign up</button></li>
            </ul>
          )}
        </div>
      </div>
    </div>
  );
}

export default NavigationBar;
