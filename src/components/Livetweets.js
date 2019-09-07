import React, { Component } from 'react';
import { channels } from '../resources/data/channels';
import SearchBox from "./livetweets/SearchBox";
import FilterTeam from "./livetweets/FilterTeam";
import LivetweetsList from "./livetweets/LivetweetsList";

/* react-twitter-embed */
import { TwitterTimelineEmbed } from 'react-twitter-embed';

/* styling */
import '../sass/main.scss';

class Livetweets extends Component {
    constructor(props) {
        super(props);
        this.state = {
            searchText: [{value: 'All', label: 'All'}],
            selectedTeam: [{value: 'All', label: 'All'}],
        };
        this.handleSearchTextChange = this.handleSearchTextChange.bind(this);
        this.handleSelectedTeamChange = this.handleSelectedTeamChange.bind(this);
    }

    handleSearchTextChange(newSearchText) {
        this.setState({searchText: newSearchText});
    }

    handleSelectedTeamChange(newSelectedTeam) {
        this.setState({selectedTeam: newSelectedTeam});
    }

    render() {

        return (
            <div>
                <div className="filter">
                    <SearchBox channels={channels} searchText={this.state.searchText} onSearchTextChange={this.handleSearchTextChange} />
                    <FilterTeam channels={channels} selectedTeam={this.state.selectedTeam} onSelectedTeamChange={this.handleSelectedTeamChange} />
                </div>

               
            </div>
        );
    }
}

export default Livetweets;
