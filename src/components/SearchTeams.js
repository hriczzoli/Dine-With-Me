import React from 'react'
import { connect } from 'react-redux';
import selectTeams from '../selectors/teams'
import { setNameFilter } from '../actions/filters'

const SearchTeams = (props) => {
    return (
        <div className="search-event-container">
            <h2>Teams</h2>
            <input 
                type="text"
                className="text-input"
                placeholder="Search teams"
                onChange={(e) => {props.dispatch(setNameFilter(e.target.value))}}
            />
        </div>
    )
}

const mapStateToProps = (state) => {
    return {
        //teams: selectTeams(state.teams, state.filters)
    }
}

export default connect(mapStateToProps)(SearchTeams)