import cartonJaune from '../assets/carton_jaune.png';
import cartonRouge from '../assets/carton_rouge.png';

function MatchDetail({ match }) {
    const event_key = match.event_key;
    let goalScorersData = match.goalscorers;
    let cards = match.cards;

    return(
        <div>

            <button type="button" className="btn btn-primary" data-bs-toggle="modal" data-bs-target={"#modal" + event_key}>
            Voir détails
            </button>

            <div className="modal fade" id={"modal" + event_key} tabIndex="-1" aria-labelledby={"modalLabel" + event_key} aria-hidden="true">
                <div className="modal-dialog">
                    <div className="modal-content">
                        <div className="modal-header">
                            <h1 className="modal-title fs-5" id={"modalLabel" + event_key}>{ match.event_home_team } VS { match.event_away_team }</h1>
                            <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                        </div>
                        <div className="modal-body">
                            <div className="d-flex flex-column align-items-center mt-3">
                                <p className="fw-bold" >{ match.event_date } { match.event_time }</p>
                                <p>
                                   Score final: { match.event_final_result }
                                </p>
                                <p className="text-center">
                                    <span><img src={ match.league_logo } height="40px" /></span><br />
                                    League: { match.league_name }
                                </p>
                                <p className="text-center">
                                    Lieu de la rencontre : { match.country_name} au stade { match.event_stadium }
                                </p>
                                <p>

                                </p>
                                <div className='d-flex justify-content-around mb-3'>
                                        <div className='text-center col-10'>
                                            <span><img src={ match.home_team_logo } height="60px" /></span>
                                            <h5>{ match.event_home_team }</h5>
                                        </div>
                                        <div className='text-center col-10'>
                                            <span><img src={ match.away_team_logo } height="60px" /></span>
                                            <h5>{ match.event_away_team }</h5>
                                        </div>
                                    </div>
                                <div className="d-flex justify-content-around">
                                    
                                    <div className="col-8">
                                        <ul className="d-flex flex-column align-items-around me-3 text-center text-center">
                                            {match.statistics.map (({ type, home }) => (
                                                (type === "On Target" && <li key={ type + home + event_key } className="mb-1 list-unstyled"> {home} tirs cadrés</li>) ||
                                                (type === "Off Target" && <li key={ type + home + event_key } className="mb-1 list-unstyled"> {home} tirs non cadrés</li>) ||
                                                (type === "Saves" && <li key={ type + home + event_key } className="mb-3 list-unstyled"> {home} arrêts</li>)
                                        ))}
                                        
                                        Buteurs:
                                        {goalScorersData.map (({ home_scorer, time }) => (
                                            home_scorer === "" ? null : (
                                                <li key={event_key + time} className="mb-1">
                                                {home_scorer} ({ time }")
                                                </li>
                                            )
                                        ))}
                                        </ul>
                                    </div>
                                    <div className="col-8">
                                        
                                        <ul className="d-flex flex-column align-items-center text-center">
                                            {match.statistics.map (({ type, away }) => (
                                                (type === "On Target" && <li key={ type + away + event_key } className="mb-1 list-unstyled"> {away} tirs cadrés</li>) ||
                                                (type === "Off Target" && <li key={ type + away + event_key } className="mb-1 list-unstyled"> {away} tirs non cadrés</li>) ||
                                                (type === "Saves" && <li key={ type + away + event_key } className="mb-3 list-unstyled"> {away} arrêts</li>)
                                        ))}
                                            Buteurs:
                                        {goalScorersData.map (({ away_scorer, time }) => (
                                            away_scorer === "" ? null : (
                                                <li key={event_key + time} className="mb-1">
                                                {away_scorer} ({ time }")
                                                </li>
                                            )
                                        ))}
                                        </ul>
                                    </div>
                                </div>
                                <div className="d-flex mt-3">
                                <ul className="d-flex flex-column align-items-center me-3">Cartons: 
                                    {cards.map (({ home_fault, away_fault, time, card }) => (
                                        away_fault === "" ? (
                                            <li key={event_key + time + home_fault + card} className="mb-1">
                                            {home_fault}  {card === "yellow card"  ? (<span><img src={cartonJaune} height="20px" /></span>) : (<span><img src={cartonRouge} height="20px" /></span>)} ({ time }")
                                            </li>
                                        ) : (
                                            <li key={event_key + time + away_fault + card} className="mb-1">
                                            {away_fault}  {card === "yellow card"  ? (<span><img src={cartonJaune} height="20px" /></span>) : (<span><img src={cartonRouge} height="20px" /></span>)} ({ time }")
                                            </li>
                                        )
                                    ))}
                                </ul>
                                </div>
                            </div>
                        </div>
                        <div className="modal-footer">
                            <button type="button" className="btn btn-secondary" data-bs-dismiss="modal">Fermer</button>
                        </div>
                    </div>
                </div>
            </div>

        </div>
    )
}

export default MatchDetail