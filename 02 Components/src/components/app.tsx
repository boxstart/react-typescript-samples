import * as React from 'react';
import Header from './common/header';
import AboutPage from './about/aboutPage';
import { ComponentBaseSub, ComponentInheritance } from './inheritance/componentInheritance';

interface Props extends React.Props<App> {
}

// Nice tsx guide: https://github.com/Microsoft/TypeScript/wiki/JSX
export default class App extends React.Component<Props, {}> {
   public render() {
       return (
        <div className="container-fluid">
          <Header/>
          <AboutPage/>
          <div>
            <h1>Component inheritance tests:</h1>
            <h2>Test 1</h2>
            <ComponentInheritance expectedTestResult={false} >
              <div>Just a regular </div>
            </ComponentInheritance>
            <h2>Test 2</h2>
            <ComponentInheritance expectedTestResult={true} >
              <ComponentBaseSub name="John Doe" />
            </ComponentInheritance>
          </div>
        </div>
       );
  }
}
