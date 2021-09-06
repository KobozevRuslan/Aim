import React from 'react'
import {BrowserRouter, Route, Switch} from 'react-router-dom';

import SignIn from './signIn/SignIn';

import {initialData} from '../data/temporaryObject';
import {PathSignIn} from './routePath';

import {GlobalStyle} from '../styledComponents/GlobalStyle';

const App = () => {
  const { pageInfo } = initialData
  const [ signIn ] = pageInfo

  return (
    <>
      <BrowserRouter>
        <Switch>
          <Route exact path={PathSignIn} component={() => <SignIn {...signIn}/>} />
        </Switch>
      </BrowserRouter>
      <GlobalStyle/>
    </>
  );
}

export default App;
