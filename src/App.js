import React, { Component } from 'react';
import { cars } from './resources/data/cars';

/* styling */
import './App.css';
import './sass/main.scss';

/* react components */
import CardList from './components/CardList';
import SearchBox from './components/SearchBox';
import Header from "./components/Header";
import FilterHitbox from './components/FilterHitbox';
import FilterAttribute from './components/FilterAttribute';
import Sorter from './components/Sorter';
import Orderer from './components/Orderer';

class App extends Component {
    constructor(props) {
        super(props);
        this.state = {
            searchText: [{value: 'All', label: 'All'}],
            selectedHitbox: [{value: 'All', label: 'All'}],
            selectedAttribute: [{value: 'All', label: 'All'}],
            selectedSort: {label: 'Name', value: 'name'}, //'name',
            selectedOrder: {label: 'Ascending Order', value: 'Ascending'}, //'Ascending'
        };

        this.handleSearchTextChange = this.handleSearchTextChange.bind(this);
        this.handleSelectedHitboxChange = this.handleSelectedHitboxChange.bind(this);
        this.handleSelectedAttributeChange = this.handleSelectedAttributeChange.bind(this);
        this.handleSelectedSortChange = this.handleSelectedSortChange.bind(this);
        this.handleSelectedOrderChange = this.handleSelectedOrderChange.bind(this);
    }

    handleSearchTextChange(newSearchText) {
        this.setState({searchText: newSearchText});
    }

    handleSelectedHitboxChange(newSelectedHitbox) {
        this.setState({selectedHitbox: newSelectedHitbox});
    }

    handleSelectedAttributeChange(newSelectedAttribute) {
        this.setState({selectedAttribute: newSelectedAttribute});
    }

    handleSelectedSortChange(newSelectedSort) {
        this.setState({selectedSort: newSelectedSort});
    }

    handleSelectedOrderChange(newSelectedOrder) {
        this.setState({selectedOrder: newSelectedOrder});
    }

    render() {
        return (
            <div>
                <div className="tc">
                    <Header />

                    <div className="filter">
                        <SearchBox cars={cars} searchText={this.state.searchText} onSearchTextChange={this.handleSearchTextChange} />
                        <FilterHitbox selectedHitbox={this.state.selectedHitbox} onSelectedHitboxChange={this.handleSelectedHitboxChange} />
                        <FilterAttribute selectedAttribute={this.state.selectedAttribute} onSelectedAttributeChange={this.handleSelectedAttributeChange} />
                        <Sorter selectedSort={this.state.selectedSort} onSelectedSortChange={this.handleSelectedSortChange} />
                        <Orderer selectedOrder={this.state.selectedOrder} onSelectedOrderChange={this.handleSelectedOrderChange} />
                    </div>
                    <CardList cars={cars} searchText={this.state.searchText} selectedHitbox={this.state.selectedHitbox} selectedAttribute={this.state.selectedAttribute} selectedSort={this.state.selectedSort} selectedOrder={this.state.selectedOrder}/>
                </div>
            </div>
        );
    }
}

export default App;


/* <h1 className="f2 gold">Rocket League Esports</h1> */