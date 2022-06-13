import { useEffect } from "react";
import { connect } from "react-redux";
import { updateSportsInfo, updateLeague } from "../../ducks/get_reducer";
import "./League.css";

const League = (props) => {
    useEffect(() => {
        props.updateSportsInfo();
        props.updateLeague();
    }, []);

    let leagueDonations = (arr) => {
        let sorted = [];
        let newTeams = [];
        let sort = arr[0];

        for (var i = 0; i < sort.length; i++) {
            sorted.push(sort[i].donations);
            sorted.sort();
        }
        for (var i = 0; i < sorted.length; i++) {
            for (var j = 0; j < sort.length; j++) {
                if (sort[j].donations === sorted[i]) {
                    newTeams.push(sort[j]);
                }
            }
        }

        newTeams.reverse();
        return newTeams;
    };

    let donations = leagueDonations(donationsarr).map((e, i) => {
        return (
            <div
                key={i}
                // className="donationstandingsdiv"
            >
                <ol>
                    <li value={i++ + 1}>
                        {e.team_name}
                        <img
                            alt=""
                            src="https://clip2art.com/images/drawn-arrow-transparent-background-13.png"
                            className="nameandwins"
                        />
                        $ {e.donations}
                    </li>
                </ol>
            </div>
        );
    });

    let division = leagueStandings(standingsarr).map((e, i) => {
        return (
            <div key={i} className="divisionrankingsdiv">
                <ol>
                    <li value={i++ + 1}>
                        {e.team_name}
                        <img
                            alt=""
                            src="https://clip2art.com/images/drawn-arrow-transparent-background-13.png"
                            className="nameandwins"
                        />
                        {e.wins}-{e.loses}-{e.ties}
                    </li>
                </ol>
            </div>
        );
    });

    let league = arr.map((e, i) => {
        return (
            <div key={i} className="leaguemapdiv">
                {/* <img
                  alt=""
                  src="http://rheacountyfootball.com/wp-content/uploads/2017/06/black-white-stadium-as-Smart-Object-1.jpg"
                  className="leaguepagepic"
                /> */}
                <div>
                    <h1 id="leaguetitle">{e.league_name}</h1>
                </div>

                <div className="recordstandings">
                    <p className="recordstandingstitle">Standings</p>
                    <div className="reverseorder">{division}</div>
                </div>
                <div className="donationstandings">
                    <p className="donationstandingstitle">
                        Team Donations Standings
                    </p>
                    <div className="reverseorder">{donations}</div>
                </div>
                <div className="leagueinfodiv">
                    <u>Sport:</u> {e.sport_type}
                    <br />
                    <u>Age Range:</u> {e.age_range}
                    <br />
                    <u>Gender:</u> {e.gender}
                    <br />
                    <u>Location:</u> {e.location}
                </div>
            </div>
        );
    });

    return (
        <div className="leaguepagediv">
            {league}
            <div>
                <div className="newsdiv">
                    <h3 className="leaguenews">
                        {sportsInfo.league_name} NEWS
                    </h3>
                </div>
                <div className="sortarticles">
                    <p className="leaguenewsdiv">
                        <h2 id="articletitle">
                            Falcon's QB Suffers Collapsed Lung
                        </h2>
                        DALLAS -- Falcons quarterback Benjamin suffered a
                        partially collapsed lung during the Falcons’ 42-34 loss
                        to No. 1 Raiders on Saturday. <br />
                        “He’s in good spirits,” Falcons' coach Kliff Kingsbury
                        said. “I’ve never had a player who’s had it. But he’s
                        doing better and he was up and alert and seemed to be in
                        a good mood.” While the lung could keep him out for the
                        immediate future, those with the team are still hopeful
                        that Benjamin dodged the worst. <br />
                        He did not suffer any broken bones or any other
                        complications around the collapsed lung.
                    </p>

                    <p className="leaguenewsdiv">
                        <h2 id="articletitle">
                            Eagles Win Big And Show Potential in Big 12
                        </h2>
                        FORT WORTH -- The Eagles have the talent to compete with
                        any team in the Big 12. They proved that in nice
                        performances against the No. 5 Bears, and even against
                        the No. 1 Raiders in a 22-21 loss on two weeks ago.{" "}
                        <br />
                        But for the Eagles to take the next step, they simply
                        have to get off to better starts. They went down 14-0
                        after just one quarter, but Eagle's running back Jay
                        posted 4 touchdowns, 2 in the second quarter alone. It
                        could have easily been more if the Eagles started the
                        game they way they finished en route to a 56-14 victory.
                    </p>

                    <p className="leaguenewsdiv">
                        <h2 id="articletitle">
                            Bears: Bad at Football, Great at Donating
                        </h2>
                        IRVING -- The Bears have gotten off to a rough start to
                        the 2018 season. They already have a pair of losses on
                        their schedule, and still have games against the Falcons
                        and the Raiders left on the schedule. <br />
                        The Bears, first and foremost, have to get healthy.
                        Shawn and CJ both went out with injuries against the
                        Eagles. Both need to get healthy soon. Luckily, the bye
                        comes at a perfect time. The Bears won’t have to play
                        again until a game against the Falcons on Oct. 11. On
                        the bright side, the bears are leading the league
                        donation battle!
                    </p>
                </div>
            </div>
        </div>
    );
};

const mapStateToProps = ({ state }) => ({
    ...state,
});

export default connect(mapStateToProps, {
    updateLeague,
    updateSportsInfo,
})(League);
