function NavigationBar() {
  return (
    <div className="navbar bg-base-100">
      <div className="flex-1">
        <a href="/" className="btn btn-ghost normal-case text-xl">
          TrueMarket
        </a>
      </div>
      <div className="flex-none">
        <ul className="menu menu-horizontal px-1">
          <li>
            <a href="/search">Search</a>
          </li>
          {/* {isAuthenticated ? (
            <li tabIndex={0}>
              <a>
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
                  <a href="/post/new">New Post</a>
                </li>
                <li>
                  <a href="/#">My Posts</a>
                </li>
                <li>
                  <button onClick={() => logout()}>Logout</button>
                </li>
              </ul>
            </li>
          ) : (
            <li>
              <button onClick={() => loginWithRedirect()}>Login</button>
            </li>
          )} */}
        </ul>
      </div>
    </div>
  );
}

export default NavigationBar;
