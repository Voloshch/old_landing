import React from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import Compute from 'packs/components/services/compute';
import Storage from 'packs/components/services/storage';
import OpenShift from 'packs/components/services/openshift';
import Code from 'packs/components/services/code';
import DevOps from 'packs/components/services/devops';
import Networking from 'packs/components/services/networking';
import Migrator from 'packs/components/services/migrator';
import Disk from 'packs/components/services/disk';
import ErrorPage from 'packs/components/page/error';
import About from 'packs/components/page/about';
import Home from 'packs/components/page/home';
import Team from 'packs/components/page/team';
import Compliance from 'packs/components/services/compliance';
import Artifactory from 'packs/components/services/artifactory';
import Cloud from 'packs/components/products/cloud';
import Customers from 'packs/components/page/customer';
import Admin from 'packs/components/page/admin';
import Login from 'packs/components/page/login';
import ScrollToTop from 'packs/components/elements/scroll_to_top';
import Configuration from 'packs/components/page/configuration';
import Pricing from 'packs/components/page/pricing';
import News from 'packs/components/page/news';
import NewsDetails from 'packs/components/page/newsDetails';
import Projects from 'packs/components/services/projects';

const AppRouter = () => (
  <BrowserRouter>
    <ScrollToTop>
      <div>
        <Switch>
          <Route exact path="/" component={Home} />
          <Route path="/compute" component={Compute} />
          <Route path="/storage" component={Storage} />
          <Route path="/openshift" component={OpenShift} />
          <Route path="/networking" component={Networking} />
          <Route path="/migrator" component={Migrator} />
          <Route path="/code" component={Code} />
          <Route path="/devops" component={DevOps} />
          <Route path="/disk/" component={Disk} />
          <Route path="/about" component={About} />
          <Route path="/team" component={Team} />
          <Route path="/compliance" component={Compliance} />
          <Route path="/artifactory" component={Artifactory} />
          <Route path="/model2020" component={Cloud} />
          <Route path="/customers" component={Customers} />
          <Route path="/configuration" component={Configuration} />
          <Route path="/pricing" component={Pricing} />
          <Route path="/projects" component={Projects} />
          <Route exact path="/news" component={News} />
          <Route path="/news/:id" component={NewsDetails} />
          <Route path="/login" component={Login} />
          <Route path="/admin" component={Admin} />
          <Route path="*" component={ErrorPage} />
        </Switch>
      </div>
    </ScrollToTop>
  </BrowserRouter>
);

export default AppRouter;
