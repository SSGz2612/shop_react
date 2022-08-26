import './App.css';
import Category from './Components/Category';
// Apollo
import {
  ApolloClient,
  InMemoryCache,
  ApolloProvider
} from '@apollo/client';
// Redux
import { Provider } from 'react-redux';
import store from "./redux/store"

const client = new ApolloClient({
  uri: 'http://localhost:4000/',
  cache: new InMemoryCache(),
});

function App() {
  return(
    <Provider store={ store }>
    <ApolloProvider client={ client }>
      <Category />
    </ApolloProvider>
    </Provider>
  );
}

export default App;
