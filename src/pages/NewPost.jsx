import NavigationBar from '../components/NavigationBar';
import NewPostForm from '../components/NewPostForm';

function NewPost() {
  return (
    <div className="container min-w-full">
      <NavigationBar />
      <NewPostForm />
    </div>
  );
}

export default NewPost;
