import Match from './Match';
import Loader from './Loader';
import React, { useState, useEffect } from 'react';

function MatchList () {
    const [matches, updateMatches] = useState([]);
    const [isLoading, setIsLoading] = useState(false);
    useEffect(() => {
        setIsLoading(true);
        fetch("https://apiv2.allsportsapi.com/football/?met=Fixtures&APIkey=" + process.env.REACT_APP_API_KEY +"&from=2023-11-15&to=2023-11-27&leagueId=176")
        .then(response => response.json())
        .then(data => {
            setIsLoading(false);
            updateMatches(data.result)})
      },[])

    return (
        <div>
            
            {!isLoading && matches.map( (match) => (
                <div key={match.event_key} className="border pt-3 mt-2 mb-2">
                    < Match 
                        match={match}
                    />
                </div>
            )
            
            )}

            {isLoading && <Loader />}
        </div>
    )
}

export default MatchList