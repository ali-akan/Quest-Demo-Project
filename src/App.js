import { Redirect, Route, Switch } from "react-router-dom";
import {React, useState} from "react";
import Layout from "./components/Layout/Layout";
import QuestForm from "./components/Quest/QuestForm";
import QuestPage from "./pages/QuestPage";
import QuestProvider from "./store/QuestProvider";
import NpcPage from "./pages/NpcPage";

function App() {
  const [itemIsShown, setItemIsShown] = useState(false);

  const showItemHandler = () => {
    setItemIsShown(true);
  };
  
  const hideItemHandler = () => {
    setItemIsShown(false);
  };
  





  return (
    <Layout>
      <QuestProvider>
        <Switch>
          <Route path="/" exact>
            <Redirect to="/quests" />
          </Route>
          <Route path="/quests" exact>
            <h1>Hey hey</h1>
            <QuestForm onShowCart={showItemHandler} />
            {itemIsShown &&  <QuestPage onClose={hideItemHandler} />}
          </Route>
          <Route path="/Npcs" >
          <NpcPage />            
          </Route>
        </Switch>
      </QuestProvider>
    </Layout>
  );
}

export default App;
