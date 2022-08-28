import Nav from './Components/Nav';
import Category from './Components/Category';
import Pdp from './Components/Pdp';
import CardClient from './Components/CardClient';
// Apollo
import {
  ApolloClient,
  InMemoryCache,
  ApolloProvider
} from '@apollo/client';
// Redux
import { Provider } from 'react-redux';
import store from "./redux/store";
// Router
import {
  BrowserRouter,
  Routes,
  Route
} from 'react-router-dom';

const client = new ApolloClient({
  uri: 'http://localhost:4000/',
  cache: new InMemoryCache(),
});

function App() {
  return(
    <BrowserRouter>
      <Provider store={ store }>
        <ApolloProvider client={ client }>
          <Nav />
          <Routes>
              <Route path='/' element={<Category />}/>
              <Route path='pdp' element={<Pdp />}/>
              <Route path='cardclient' element={<CardClient />}/>
          </Routes>
        </ApolloProvider>
      </Provider>
    </BrowserRouter>
  );
}

export default App;
