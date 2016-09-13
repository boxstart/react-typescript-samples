"use strict";

import * as React from "react";

class ComponentBase<P, S> extends React.Component<P, S> {
    constructor(props: P) {
        super(props);
    }
}

interface IComponentBaseSubProps {
    name: string;
}

/**
 * Sub class of ComponentBase. When being tested, this class must be verified as
 * a sub class of ComponentBase.
 *
 * @class ComponentBaseSub
 * @extends {ComponentBase<IComponentBaseSubProps, {}>}
 */
export class ComponentBaseSub extends ComponentBase<IComponentBaseSubProps, {}> {
    constructor(props: IComponentBaseSubProps) {
        super(props);
    }

    public render(): JSX.Element {

        return(
            <div>
                <h1><small>Message by ComponentBaseSub: Hello {this.props.name}</small></h1>
            </div>
        );
    }
}

interface IComponentInheritanceProps extends React.Props<ComponentInheritance> {
    expectedTestResult: boolean;
}

/**
 * React component that executes a test for every child item, to determine whether
 * the child is a sub class of ComponentBase or not.
 *
 * @class ComponentInheritance
 * @extends {React.Component<IComponentInheritanceProps, {}>}
 */
export class ComponentInheritance extends React.Component<IComponentInheritanceProps, {}> {

    public render(): JSX.Element {
        // Iterate over children and test for inheritance from ComponentBase
        let results: JSX.Element[] = React.Children.map(this.props.children, (child: React.ReactElement<any>, index: number): JSX.Element => {
            let result: boolean = ComponentBase.isPrototypeOf(child.type);
            return <li>Child nr. {index} is a sub class of ComponentBase: {result ? "True" : "False"} { result !== this.props.expectedTestResult ? "(unexpected)" : ""}</li>
        })

        return (
            <ul>
                {results}
            </ul>
        )
    }
}
