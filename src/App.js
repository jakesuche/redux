
import './App.css';
import Post from './components/post'
import PostForm from './components/postform'
import { Provider} from 'react-redux';
import store from './store'

function App() {
  return (
    <Provider store ={store}>
      <div className="App">
      <header className="App-header">
        
        
      </header>
      <PostForm />
      <hr />
      <Post />
    </div>
    </Provider>
    
  );
}

export default App;
