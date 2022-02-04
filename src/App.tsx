import { useEffect, useState } from "react";
import { Provider } from 'react-redux';

import api from "./services/api";
import store from './store'
import { Catalog } from './compontens/Catalog'

function App() {
  // const [catalog, setCatalog] = useState([]);

  // useEffect(() => {
  //   api.get('products').then(response => {
  //     setCatalog(response.data);
  //   })
  // },[]);

  return (
    <Provider store={store}>
      <Catalog />
    </Provider>
  );
}

export default App;
