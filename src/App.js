import React from "react";
import { BrowserRouter, Route } from "react-router-dom";
import { Provider } from "react-redux";
import { createStore } from "redux";
import LoginPageContainer from "./containers/loginPageContainer";
import ProfileContainer from "./containers/ProfileContainer";
import SignupPageContainer from "./containers/signupPageContainer";
import AdminPageContainer from "./containers/adminPageContainer";
import PollsPageContainer from "./containers/pollsPageContainer";
import NavLink from "./components/navLinks";
import rootReducer from "./store";
const store = createStore(rootReducer);

class App extends React.Component {
  render() {
    return (
      <div>
        <Provider store={store}>
          <BrowserRouter>
            <NavLink />
            <Route path="/" exact component={SignupPageContainer} />
            <Route path="/profile" exact component={ProfileContainer} />
            <Route path="/login" exact component={LoginPageContainer} />
            <Route path="/admin" exact component={AdminPageContainer} />
            <Route path="/polls" exact component={PollsPageContainer} />
          </BrowserRouter>
        </Provider>
      </div>
    );
  }
}

export default App;
