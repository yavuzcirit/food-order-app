import React,{ Fragment} from 'react';
import Header from './components/Layout/Header'
import Meals from './components/Meals/Meals';

const App = () => {
  return (
    <Fragment>
      <Header />
      <main>
        <Meals />
      </main>
      <h2>Let's get started!</h2>
    </Fragment>
  );
}

export default App;
