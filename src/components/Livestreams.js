import React, { Component } from 'react';

/* styling */
import '../sass/main.scss';

/* react components */
import Header from "./Header";

class Livestreams extends Component {
    constructor(props) {
        super(props);
        this.state = {

        };

    }


    render() {

        return (
            <div>
                <div className="tc">
                    <Header />
                    <span>Livestreams here</span>
                </div>
            </div>
        );
    }
}

export default Livestreams;
