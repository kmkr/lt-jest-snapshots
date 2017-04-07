import React, { PureComponent } from 'react';

export default class HotBeverage extends PureComponent {
    constructor() {
        super();
        this.state = {
            contains: 'coffee'
        };

        this.pourTea = this.pourTea.bind(this);
    }

    pourTea() {
        this.setState({
            contains: 'tea'
        });
    }

    render() {
        return (
            <div>
                <p>I am a HotBeverage and contains {this.state.contains}</p>

                <button onClick={this.pourTea}>Pour in tea</button>
            </div>
        );
    }
}
