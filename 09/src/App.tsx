import * as React from "react";
import {
  HashRouter as Router,
  Switch,
  Route,
  Link,
  Redirect,
} from "react-router-dom";
import Numbers from "./components/Numbers";
import Texts from "./components/Texts";
import Date from "./components/Date";
import styled from "styled-components";
import { IntlProvider } from "react-intl";
import { PageHeader, Button, Select } from "antd";
import messages from "./messages";

const Container = styled.div`
  margin: 50px;
`;

interface SPARoute {
  label: string;
  path: string;
  component: JSX.Element;
}

const App = (): JSX.Element => {
  const [locale, setLocale] = React.useState<"en" | "de" | "fr">("en");

  const routes: SPARoute[] = [
    {
      label: "Numbers",
      path: "/numbers",
      component: <Numbers />,
    },
    {
      label: "Date",
      path: "/date",
      component: <Date />,
    },
    {
      label: "Texts",
      path: "/texts",
      component: <Texts />,
    },
  ];

  return (
    <IntlProvider locale={locale} messages={messages[locale]}>
      <Router>
        <PageHeader
          className="site-page-header"
          onBack={null}
          title="SPA Best Practices"
          subTitle=""
          extra={
            <>
              {routes.map((route: SPARoute) => (
                <Button key={route.path} className="nav-item">
                  <Link to={route.path} className="nav-link">
                    {route.label}
                  </Link>
                </Button>
              ))}
              <Select
                defaultValue="en"
                onChange={(value: "en" | "de" | "fr"): void => setLocale(value)}
              >
                <Select.Option value="en">en</Select.Option>
                <Select.Option value="de">de</Select.Option>
                <Select.Option value="fr">fr</Select.Option>
              </Select>
            </>
          }
        />

        <Switch>
          {routes.map((route: SPARoute) => (
            <Route key={route.path} path={route.path}>
              <Container className="container">{route.component}</Container>
            </Route>
          ))}
          <Route path="/">
            <Redirect to="/numbers" />
          </Route>
        </Switch>
      </Router>
    </IntlProvider>
  );
};

export default App;
