import MatchDetail from './MatchDetail';

function Match( {match} ) {
    const event_key = match.event_key;
    const nameLeague = match.league_name;
    const nameTeamHome = match.event_home_team;
    const nameTeamAway = match.event_away_team;
    const result = match.event_final_result;
    const dateMatch = match.event_date;
    const dateTime = match.event_time;
    const logoTeamHome = match.home_team_logo;
    const logoTeamAway = match.away_team_logo;
    let goalScorersData = [];
    if (match.goalscorers.length > 0) {
        for (let goalScorer of match.goalscorers){
            goalScorersData.push(goalScorer);
        }
    }

    return (
        <div className="d-flex align-items-center col-12 mb-5">
            <div className="d-flex align-items-center col-4 justify-content-around">
            <span><img src={ logoTeamHome } /></span>
            <p> { nameTeamHome }</p>
            </div>
            
            <div className="d-flex flex-column align-items-center col-4">
                <p className="fw-bold" >{ dateMatch } { dateTime }</p>
                <p>Score: { result }</p>
                <p>League: {nameLeague} </p>
                <div className="d-flex">
                    <ul className="d-flex flex-column align-items-center me-3">Buteurs à domicile: 
                    {goalScorersData.map (({ home_scorer, time }) => (
                        home_scorer === "" ? null : (
                            <li key={event_key + time} className="mb-1">
                              {home_scorer} ({ time }")
                            </li>
                          )
                    ))}
                    </ul>
                    <ul className="d-flex flex-column align-items-center">Buteurs à l'extérieur:
                    {goalScorersData.map (({ away_scorer, time }) => (
                        away_scorer === "" ? null : (
                            <li key={event_key + time} className="mb-1">
                              {away_scorer} ({ time }")
                            </li>
                          )
                    ))}
                    </ul>
                </div>
                <MatchDetail match={match} />
            </div>
            <div className="d-flex align-items-center col-4 justify-content-around">
                <p>{ nameTeamAway }</p>
                <p><span><img src={ logoTeamAway } /></span></p>
            </div>
        </div>
    )
}

export default Match