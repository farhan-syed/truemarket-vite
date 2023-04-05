import { useAuth0 } from '@auth0/auth0-react';
import NavigationBar from '../components/NavigationBar';
import NewPostForm from '../components/NewPostForm';

function NewPost() {
  const { isAuthenticated, loginWithRedirect } = useAuth0();

  if (!isAuthenticated) {
    return loginWithRedirect();
  }

  return (
    <div className="container min-w-full">
      <NavigationBar />
      <NewPostForm />
    </div>
  );
}

export default NewPost;
