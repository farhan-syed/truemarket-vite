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
      <div className="container mx-auto min-h-screen flex flex-col">
        <div className="flex items-center justify-between">
          <NavigationBar />
        </div>
        <div className="relative flex flex-grow">
          <div className="flex-1">
            <NewPostForm />
          </div>
        </div>
      </div>
    );
  }
  return loginWithRedirect();
}

export default NewPost;
