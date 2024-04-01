import React, { useEffect, useState } from 'react';
import defaultLogo from '../../assets/images/nhl_logo.png';

// import { TEAM_LIST } from "../../const";

export default function ScoreBoard(props) {
    const { tabStatus, eventId, team1Idx, playList, awayScore, homeScore, time, tableScore, selTblIdx, description, increaseAmt, selTeamIdx, selTextIdx, historyList, timeList } = props;

    const [team1Name, setTeam1Name] = useState('Team1');
    const [team2Name, setTeam2Name] = useState('Team2');
    const [team3Name, setTeam3Name] = useState('Team3');
    const [team4Name, setTeam4Name] = useState('Team4');

    const [show0, setShow0] = useState(false);
    const [show1, setShow1] = useState(false);
    const [show2, setShow2] = useState(false);
    const [show3, setShow3] = useState(false);

    useEffect(() => {
        handleTeamShown(selTblIdx)
    }, [])

    const handleTeamShown = (index) => {
        switch (index) {
            case 0:
                setShow0(!show0)
                break;
            case 1:
                setShow1(!show1)
                break;
            case 2:
                setShow2(!show2)
                break;
            case 3:
                setShow3(!show3)
                break;
            default:
                break;
        }
    }

    const handleTeamName = (evt, index) => {
        switch (index) {
            case 1:
                setTeam1Name(evt.target.value)
                break;
            case 2:
                setTeam2Name(evt.target.value)
                break;
            case 3:
                setTeam3Name(evt.target.value)
                break;
            case 4:
                setTeam4Name(evt.target.value)
                break;
            default:
                break;
        }
    }

    return (
        <>
            {
                !tabStatus && <>
                    <div className='row py-2'>
                        <div className='col-md-2 col-lg-12'>
                            {
                                eventId != -1 && team1Idx != -1 &&
                                <>
                                    <div className='d-inline-block'>
                                        <img src={team1Idx != -1 ? playList.boxscore.teams[team1Idx].team.logo : undefined} style={{ width: 40, height: 40 }} />
                                        <p className='px-2 d-inline-block'><b>{(team1Idx != -1 && team1Idx == 0) ? awayScore : homeScore}</b></p>
                                    </div>
                                    <div className='d-inline-block'>
                                        <img src={team1Idx != -1 ? playList.boxscore.teams[(parseInt(team1Idx) + 1) % 2].team.logo : undefined} style={{ width: 40, height: 40 }} />
                                        <p className='px-2 d-inline-block'><b>{(team1Idx != -1 && team1Idx == 0) ? homeScore : awayScore}</b></p>
                                    </div>
                                    <div className='d-inline-block'>
                                        <p className='d-inline-block px-5'>{time}</p>
                                    </div>
                                </>
                            }
                        </div>
                    </div>
                    <div className='row pb-2'>
                        <div className='col-md-6'>
                        </div>
                    </div>
                    {/* Team Section */}
                    <div className='row pb-3'>
                        <div className='col-md-12'>
                            <div className={selTblIdx == 0 ? 'border border-danger border-3 p-3' : 'border p-3'}>
                                <div className='float-left text-center' >
                                    <input
                                        className='text-center'
                                        value={team1Name}
                                        onChange={(evt) => handleTeamName(evt, 1)}
                                        style={{ width: 150, height: 30, fontSize: 20, border: 'none' }}
                                    />
                                    <p className='d-inline-block px-3' style={{ fontSize: 18 }}>{tableScore[0]}</p>
                                    <p className='d-inline-block float-right text-primary' onClick={() => {
                                        handleTeamShown(0)
                                    }}>{show0 ? <h5 className='d-inline-block text-bold text-white bg-primary' style={{ width: 24, height: 20, borderRadius: '50%', paddingBottom: 23, fontSize: 18 }}>+</h5> : <h5 className='d-inline-block text-bold text-white bg-primary' style={{ width: 24, height: 20, borderRadius: '50%', paddingBottom: 23, fontSize: 18 }}>-</h5>}</p>
                                </div>
                                {
                                    (show0 || selTblIdx == 0) ? historyList[0].map((item, index) => {
                                        return (
                                            <div key={index}>
                                                <div className='d-inline-flex'>
                                                    {
                                                        // selTeamIdx != -1 &&
                                                        <img className='d-inline-block' src={item.teamIdx !== -1 ? playList.boxscore.teams[item.teamIdx].team.logo : defaultLogo} style={{ width: 30, height: 30 }} />
                                                    }
                                                    <p className='d-inline-block' style={{ paddingLeft: 10 }}>{item.description}<b className='text-danger'>{" +" + item.increase + " (" + item.score + ") " + item.time}</b></p>
                                                </div><br />
                                            </div>
                                        )
                                    }) : historyList[0].slice(-1).map((item, index) => {
                                        return (
                                            <div key={index}>
                                                <div className='d-inline-flex'>
                                                    {
                                                        // selTeamIdx != -1 &&
                                                        <img className='d-inline-block' src={item.teamIdx !== -1 ? playList.boxscore.teams[item.teamIdx].team.logo : defaultLogo} style={{ width: 30, height: 30 }} />
                                                    }
                                                    <p className='d-inline-block' style={{ paddingLeft: 10 }}>{item.description}<b className='text-danger'>{" +" + item.increase + " (" + item.score + ") " + item.time}</b></p>
                                                </div><br />
                                            </div>
                                        )
                                    })
                                }
                            </div>
                        </div>
                    </div>
                    <div className='row pb-3'>
                        <div className='col-md-12'>
                            <div className={selTblIdx == 1 ? 'border border-danger border-3 p-3' : 'border p-3'}>
                                <div className='float-left text-center' >
                                    <input
                                        className='text-center'
                                        value={team2Name}
                                        onChange={(evt) => handleTeamName(evt, 2)}
                                        style={{ width: 150, height: 30, fontSize: 20, border: 'none' }}
                                    />
                                    <p className='d-inline-block px-3' style={{ fontSize: 18 }}>{tableScore[1]}</p>
                                    <p className='d-inline-block float-right text-primary' onClick={() => {
                                        handleTeamShown(1)
                                    }}>{show1 ? <h5 className='d-inline-block text-bold text-white bg-primary' style={{ width: 24, height: 20, borderRadius: '50%', paddingBottom: 23, fontSize: 18 }}>+</h5> : <h5 className='d-inline-block text-bold text-white bg-primary' style={{ width: 24, height: 20, borderRadius: '50%', paddingBottom: 23, fontSize: 18 }}>-</h5>}</p>
                                </div>
                                {
                                    (show1 || selTblIdx == 1) ? historyList[1].map((item, index) => {
                                        return (
                                            <div key={index}>
                                                <div className='d-inline-flex'>
                                                    {
                                                        // selTeamIdx != -1 &&
                                                        <img className='d-inline-block' src={item.teamIdx !== -1 ? playList.boxscore.teams[item.teamIdx].team.logo : defaultLogo} style={{ width: 30, height: 30 }} />
                                                    }
                                                    <p className='d-inline-block' style={{ paddingLeft: 10 }}>{item.description}<b className='text-danger'>{" +" + item.increase + " (" + item.score + ") " + item.time}</b></p><br />
                                                </div><br />
                                            </div>
                                        )
                                    }) : historyList[1].slice(-1).map((item, index) => {
                                        return (
                                            <div key={index}>
                                                <div className='d-inline-flex'>
                                                    {
                                                        // selTeamIdx != -1 &&
                                                        <img className='d-inline-block' src={item.teamIdx !== -1 ? playList.boxscore.teams[item.teamIdx].team.logo : defaultLogo} style={{ width: 30, height: 30 }} />
                                                    }
                                                    <p className='d-inline-block' style={{ paddingLeft: 10 }}>{item.description}<b className='text-danger'>{" +" + item.increase + " (" + item.score + ") " + item.time}</b></p>
                                                </div><br />
                                            </div>
                                        )
                                    })
                                }
                            </div>
                        </div>
                    </div>
                    <div className='row pb-3'>
                        <div className='col-md-12'>
                            <div className={selTblIdx == 2 ? 'border border-danger border-3 p-3' : 'border p-3'}>
                                <div className='float-left text-center' >
                                    <input
                                        className='text-center'
                                        value={team3Name}
                                        onChange={(evt) => handleTeamName(evt, 3)}
                                        style={{ width: 150, height: 30, fontSize: 20, border: 'none' }}
                                    />
                                    <p className='d-inline-block px-3' style={{ fontSize: 18 }}>{tableScore[2]}</p>
                                    <p className='d-inline-block float-right text-primary' onClick={() => {
                                        handleTeamShown(2)
                                    }}>{show2 ? <h5 className='d-inline-block text-bold text-white bg-primary' style={{ width: 24, height: 20, borderRadius: '50%', paddingBottom: 23, fontSize: 18 }}>+</h5> : <h5 className='d-inline-block text-bold text-white bg-primary' style={{ width: 24, height: 20, borderRadius: '50%', paddingBottom: 23, fontSize: 18 }}>-</h5>}</p>
                                </div>
                                {
                                    (show2 || selTblIdx == 2) ? historyList[2].map((item, index) => {
                                        return (
                                            <div key={index}>
                                                <div className='d-inline-flex'>
                                                    {
                                                        // selTeamIdx != -1 &&
                                                        <img className='d-inline-block' src={item.teamIdx !== -1 ? playList.boxscore.teams[item.teamIdx].team.logo : defaultLogo} style={{ width: 30, height: 30 }} />
                                                    }
                                                    <p className='d-inline-block' style={{ paddingLeft: 10 }}>{item.description}<b className='text-danger'>{" +" + item.increase + " (" + item.score + ") " + item.time}</b></p><br />
                                                </div><br />
                                            </div>
                                        )
                                    }) : historyList[2].slice(-1).map((item, index) => {
                                        return (
                                            <div key={index}>
                                                <div className='d-inline-flex'>
                                                    {
                                                        // selTeamIdx != -1 &&
                                                        <img className='d-inline-block' src={item.teamIdx !== -1 ? playList.boxscore.teams[item.teamIdx].team.logo : defaultLogo} style={{ width: 30, height: 30 }} />
                                                    }
                                                    <p className='d-inline-block' style={{ paddingLeft: 10 }}>{item.description}<b className='text-danger'>{" +" + item.increase + " (" + item.score + ") " + item.time}</b></p>
                                                </div><br />
                                            </div>
                                        )
                                    })
                                }
                            </div>
                        </div>
                    </div>
                    <div className='row pb-3'>
                        <div className='col-md-12'>
                            <div className={selTblIdx == 3 ? 'border border-danger border-3 p-3' : 'border p-3'}>
                                <div className='float-left text-center' >
                                    <input
                                        className='text-center'
                                        value={team4Name}
                                        onChange={(evt) => handleTeamName(evt, 4)}
                                        style={{ width: 150, height: 30, fontSize: 20, border: 'none' }}
                                    />
                                    <p className='d-inline-block px-3' style={{ fontSize: 18 }}>{tableScore[3]}</p>
                                    <p className='d-inline-block float-right text-primary' onClick={() => {
                                        handleTeamShown(3)
                                    }}>{show3 ? <h5 className='d-inline-block text-bold text-white bg-primary' style={{ width: 24, height: 20, borderRadius: '50%', paddingBottom: 23, fontSize: 18 }}>+</h5> : <h5 className='d-inline-block text-bold text-white bg-primary' style={{ width: 24, height: 20, borderRadius: '50%', paddingBottom: 23, fontSize: 18 }}>-</h5>}</p>
                                </div>
                                {
                                    (show3 || selTblIdx == 3) ? historyList[3].map((item, index) => {
                                        return (
                                            <div key={index}>
                                                <div key={index} className='d-inline-flex'>
                                                    {
                                                        // selTeamIdx != -1 &&
                                                        <img className='d-inline-block' src={item.teamIdx !== -1 ? playList.boxscore.teams[item.teamIdx].team.logo : defaultLogo} style={{ width: 30, height: 30 }} />
                                                    }
                                                    <p className='d-inline-block' style={{ paddingLeft: 10 }}>{item.description}<b className='text-danger'>{" +" + item.increase + " (" + item.score + ") " + item.time}</b></p><br />
                                                </div><br />
                                            </div>
                                        )
                                    }) : historyList[3].slice(-1).map((item, index) => {
                                        return (
                                            <div key={index}>
                                                <div className='d-inline-flex'>
                                                    {
                                                        // selTeamIdx != -1 &&
                                                        <img className='d-inline-block' src={item.teamIdx !== -1 ? playList.boxscore.teams[item.teamIdx].team.logo : defaultLogo} style={{ width: 30, height: 30 }} />
                                                    }
                                                    <p className='d-inline-block' style={{ paddingLeft: 10 }}>{item.description}<b className='text-danger'>{" +" + item.increase + " (" + item.score + ") " + item.time}</b></p>
                                                </div><br />
                                            </div>
                                        )
                                    })
                                }
                            </div>
                        </div>
                    </div>
                </>
            }
        </>
    )
}