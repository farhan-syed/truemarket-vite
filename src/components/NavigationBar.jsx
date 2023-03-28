// eslint-disable-next-line import/no-extraneous-dependencies
import { useAuth0 } from '@auth0/auth0-react';

function NavigationBar() {
  const {
    isAuthenticated, user, loginWithRedirect, logout,
  } = useAuth0();
  return (
    <div className="navbar bg-base-100p">
      <div className="flex-1">
        <a href="/" className="btn btn-ghost normal-case text-xl">
          truemarket
        </a>
      </div>
      <div className="flex-none">
        <ul className="menu menu-horizontal px-1">
          <li>
            <a href="/search">search</a>
          </li>
          {isAuthenticated ? (
            <li tabIndex={0}>
              <a href="/#">
                {user.nickname}
                <svg
                  className="fill-current"
                  xmlns="http://www.w3.org/2000/svg"
                  width="20"
                  height="20"
                  viewBox="0 0 24 24"
                >
                  <path d="M7.41,8.58L12,13.17L16.59,8.58L18,10L12,16L6,10L7.41,8.58Z" />
                </svg>
              </a>
              <ul className="p-2 bg-base-100">
                <li>
                  <a href="/post/new">new post</a>
                </li>
                <li>
                  <a href="/#">my posts</a>
                </li>
                <li>
                  <button type="button" onClick={() => logout()}>logout</button>
                </li>
              </ul>
            </li>
          ) : (
            <li>
              <button type="button" onClick={() => loginWithRedirect()}>login</button>
            </li>
          )}
        </ul>
      </div>
    </div>
  );
}

export default NavigationBar;
