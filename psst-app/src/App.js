// import { Fragment } from "react";
import { Switch, Route, Redirect } from "react-router-dom";
import Header from "./components/ui/Header";
import Landing from "./pages/Landing";
import Contacts from "./pages/Contacts";
import NoPageFound from "./pages/NoPageFound";
import ContactDetailsPage from "./pages/ContactDetailsPage";
import AddContactPage from "./pages/AddContactPage";
import UpdateContactPage from "./pages/UpdateContactPage";

function App() {
  return (
    <>
      <Header />
      <Switch>
        <Route path="/" exact>
          <Redirect to="/contacts" />
        </Route>
        <Route path="/welcome" exact>
          <Landing />
        </Route>
        <Route path="/contacts" exact>
          <Contacts />
        </Route>
        <Route path="/add-contact" exact>
          <AddContactPage />
        </Route>
        <Route path="/contacts/:id/edit" exact>
          <UpdateContactPage />
        </Route>
        <Route path="/contacts/:id">
          <ContactDetailsPage />
        </Route>
        <Route path="*" exact>
          <NoPageFound />
        </Route>
      </Switch>
    </>
  );
}

export default App;
