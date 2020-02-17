import React from 'react'
import SearchTeams from '../components/SearchTeams'
import TeamList from '../components/TeamList'

const Teams = () => {
  

  return (
    <div className="content-container">
      <div className="search-event-container">
        <SearchTeams />
      </div>
      <TeamList />
    </div>
  );
};

export default Teams;