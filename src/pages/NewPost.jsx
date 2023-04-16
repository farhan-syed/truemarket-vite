import { useAuth0 } from '@auth0/auth0-react';
import NavigationBar from '../components/NavigationBar';
import NewPostForm from '../components/NewPostForm';

function NewPost() {
  const { isLoading, isAuthenticated, loginWithRedirect } = useAuth0();

  if (isLoading) {
    return <div>Loading...</div>;
  }

  if (isAuthenticated) {
    return (
      <div className="container min-w-full">
        <NavigationBar />
        <NewPostForm />
      </div>
    );
  }
  return loginWithRedirect();
}

export default NewPost;
