import React from 'react'
import {Switch, Route} from 'react-router-dom';

import Company from '../company';

const Main = () => {
  return (
    <Switch>
        <Route exact path='/'component={Company}></Route>
    </Switch>
  )
}

export default Main