import React from 'react';
import { Route, Switch } from 'react-router-dom';
import bestItemPage from '../Components/Pages/bestItemPage';
import eventPage from '../Components/Pages/eventPage';
import mainPage from '../Components/Pages/mainPage';
import recommandPage from '../Components/Pages/recommandPage';
import salePage from '../Components/Pages/salePage';
import themaPage from '../Components/Pages/themaPage';

const MainRouter = () => {
  return (
    <>
      <Switch>
        <Route exact path="/" component={mainPage} />
        <Route path="/bestItem" component={bestItemPage} />
        <Route path="/recommand" component={recommandPage} />
        <Route path="/thema" component={themaPage} />
        <Route path="/event" component={eventPage} />
        <Route path="/sale" component={salePage} />
      </Switch>
    </>
  );
};

export default MainRouter;
