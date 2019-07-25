import React, { Component } from 'react';

/* material ui */
import TextField from '@material-ui/core/TextField/index';
import SearchIcon from '@material-ui/icons/Search';
import Grid from '@material-ui/core/Grid/index';

class Old_SearchBox extends Component {
    constructor(props) {
        super(props);
        this.handleSearchTextChange = this.handleSearchTextChange.bind(this);
    }

    handleSearchTextChange(e) {
        this.props.onSearchTextChange(e.target.value);
    }

    render() {
        return (
            <div>
                <Grid container spacing={1} alignItems="flex-end">
                    <Grid item>
                        <SearchIcon />
                    </Grid>
                    <Grid item>
                        <TextField
                            id="standard-search"
                            label="Search Car"
                            type="search"
                            value={this.props.searchText}
                            onChange={this.handleSearchTextChange}
                        />
                    </Grid>
                </Grid>
            </div>
        );
    }
}

export default Old_SearchBox;

/*
            <form>
                <input type='text' placeholder='Search Car...' className="search"
                       value={this.props.searchText}
                       onChange={this.handleSearchTextChange} />
            </form>
 */