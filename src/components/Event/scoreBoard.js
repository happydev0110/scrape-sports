import React, { useEffect, useState } from 'react';
import defaultLogo from '../../assets/images/nhl_logo.png'

export default function ScoreBoard(props) {
    const { tabStatus, eventId, team1Idx, playList, awayScore, homeScore, time, tableScore, selTblIdx, description, increaseAmt, selTeamIdx, selTextIdx, historyList } = props;

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

        // console.log(show0,'show 0')
        // console.log(show1,'show 1')
        // console.log(show2,'show 2')
        // console.log(show3,'show 3')
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
                                <div className='float-left text-center' onClick={() => {
                                    handleTeamShown(0)
                                }}>
                                    <h5 className='d-inline-block text-bold bg-primary text-white' style={{ width: 24, height: 20, borderRadius: '50%', paddingBottom: 25 }}>1</h5>
                                    <p className='d-inline-block px-3'>{tableScore[0]}</p>
                                    <p className='d-inline-block float-right text-primary'>{show0 ? "Shown" : "Hidden"}</p>
                                </div>
                                {
                                    (show0 || selTblIdx == 0) ? historyList[0].reverse().map((item, index) => {
                                        return (
                                            <>
                                                <div key={index} className='d-inline-flex'>
                                                    {
                                                        // selTeamIdx != -1 &&
                                                        <img className='d-inline-block' src={item.teamIdx !== -1 ? playList.boxscore.teams[item.teamIdx].team.logo : defaultLogo} style={{ width: 30, height: 30 }} />
                                                    }
                                                    <p className='d-inline-block' style={{ paddingLeft: 10 }}>{item.description}<b className='text-danger'>{" +" + item.increase + " (" + item.score + ") " + item.time}</b></p>
                                                </div><br />
                                            </>
                                        )
                                    }) : historyList[0].reverse().slice(0, 1).map((item, index) => {
                                        return (
                                            <>
                                                <div key={index} className='d-inline-flex'>
                                                    {
                                                        // selTeamIdx != -1 &&
                                                        <img className='d-inline-block' src={item.teamIdx !== -1 ? playList.boxscore.teams[item.teamIdx].team.logo : defaultLogo} style={{ width: 30, height: 30 }} />
                                                    }
                                                    <p className='d-inline-block' style={{ paddingLeft: 10 }}>{item.description}<b className='text-danger'>{" +" + item.increase + " (" + item.score + ") " + item.time}</b></p>
                                                </div><br />
                                            </>
                                        )
                                    })
                                }
                            </div>
                        </div>
                    </div>
                    <div className='row pb-3'>
                        <div className='col-md-12'>
                            <div className={selTblIdx == 1 ? 'border border-danger border-3 p-3' : 'border p-3'}>
                                <div className='float-left text-center' onClick={() => {
                                    handleTeamShown(1)
                                }}>
                                    <h5 className='d-inline-block text-bold bg-primary text-white' style={{ width: 24, height: 20, borderRadius: '50%', paddingBottom: 25 }}>2</h5>
                                    <p className='d-inline-block px-3'>{tableScore[1]}</p>
                                    <p className='d-inline-block float-right text-primary'>{show1 ? "Shown" : "Hidden"}</p>
                                </div>
                                {
                                    (show1 || selTblIdx == 1) ? historyList[1].reverse().map((item, index) => {
                                        return (
                                            <>
                                                <div key={index} className='d-inline-flex'>
                                                    {
                                                        // selTeamIdx != -1 &&
                                                        <img className='d-inline-block' src={item.teamIdx !== -1 ? playList.boxscore.teams[item.teamIdx].team.logo : defaultLogo} style={{ width: 30, height: 30 }} />
                                                    }
                                                    <p className='d-inline-block' style={{ paddingLeft: 10 }}>{item.description}<b className='text-danger'>{" +" + item.increase + " (" + item.score + ") " + item.time}</b></p><br />
                                                </div><br />
                                            </>
                                        )
                                    }) : historyList[1].reverse().slice(0, 1).map((item, index) => {
                                        return (
                                            <>
                                                <div key={index} className='d-inline-flex'>
                                                    {
                                                        // selTeamIdx != -1 &&
                                                        <img className='d-inline-block' src={item.teamIdx !== -1 ? playList.boxscore.teams[item.teamIdx].team.logo : defaultLogo} style={{ width: 30, height: 30 }} />
                                                    }
                                                    <p className='d-inline-block' style={{ paddingLeft: 10 }}>{item.description}<b className='text-danger'>{" +" + item.increase + " (" + item.score + ") " + item.time}</b></p>
                                                </div><br />
                                            </>
                                        )
                                    })
                                }
                            </div>
                        </div>
                    </div>
                    <div className='row pb-3'>
                        <div className='col-md-12'>
                            <div className={selTblIdx == 2 ? 'border border-danger border-3 p-3' : 'border p-3'}>
                                <div className='float-left text-center' onClick={() => {
                                    handleTeamShown(2)
                                }}>
                                    <h5 className='d-inline-block text-bold bg-primary text-white' style={{ width: 24, height: 20, borderRadius: '50%', paddingBottom: 25 }}>3</h5>
                                    <p className='d-inline-block px-3'>{tableScore[2]}</p>
                                    <p className='d-inline-block float-right text-primary'>{show2 ? "Shown" : "Hidden"}</p>
                                </div>
                                {
                                    (show2 || selTblIdx == 2) ? historyList[2].reverse().map((item, index) => {
                                        return (
                                            <>
                                                <div key={index} className='d-inline-flex'>
                                                    {
                                                        // selTeamIdx != -1 &&
                                                        <img className='d-inline-block' src={item.teamIdx !== -1 ? playList.boxscore.teams[item.teamIdx].team.logo : defaultLogo} style={{ width: 30, height: 30 }} />
                                                    }
                                                    <p className='d-inline-block' style={{ paddingLeft: 10 }}>{item.description}<b className='text-danger'>{" +" + item.increase + " (" + item.score + ") " + item.time}</b></p><br />
                                                </div><br />
                                            </>
                                        )
                                    }) : historyList[2].reverse().slice(0, 1).map((item, index) => {
                                        return (
                                            <>
                                                <div key={index} className='d-inline-flex'>
                                                    {
                                                        // selTeamIdx != -1 &&
                                                        <img className='d-inline-block' src={item.teamIdx !== -1 ? playList.boxscore.teams[item.teamIdx].team.logo : defaultLogo} style={{ width: 30, height: 30 }} />
                                                    }
                                                    <p className='d-inline-block' style={{ paddingLeft: 10 }}>{item.description}<b className='text-danger'>{" +" + item.increase + " (" + item.score + ") " + item.time}</b></p>
                                                </div><br />
                                            </>
                                        )
                                    })
                                }
                            </div>
                        </div>
                    </div>
                    <div className='row pb-3'>
                        <div className='col-md-12'>
                            <div className={selTblIdx == 3 ? 'border border-danger border-3 p-3' : 'border p-3'}>
                                <div className='float-left text-center' onClick={() => {
                                    handleTeamShown(3)
                                }}>
                                    <h5 className='d-inline-block text-bold bg-primary text-white' style={{ width: 24, height: 20, borderRadius: '50%', paddingBottom: 25 }}>4</h5>
                                    <p className='d-inline-block px-3'>{tableScore[3]}</p>
                                    <p className='d-inline-block float-right text-primary'>{show3 ? "Shown" : "Hidden"}</p>
                                </div>
                                {
                                    (show3 || selTblIdx == 3) ? historyList[3].reverse().map((item, index) => {
                                        return (
                                            <>
                                                <div key={index} className='d-inline-flex'>
                                                    {
                                                        // selTeamIdx != -1 &&
                                                        <img className='d-inline-block' src={item.teamIdx !== -1 ? playList.boxscore.teams[item.teamIdx].team.logo : defaultLogo} style={{ width: 30, height: 30 }} />
                                                    }
                                                    <p className='d-inline-block' style={{ paddingLeft: 10 }}>{item.description}<b className='text-danger'>{" +" + item.increase + " (" + item.score + ") " + item.time}</b></p><br />
                                                </div><br />
                                            </>
                                        )
                                    }) : historyList[3].reverse().slice(0, 1).map((item, index) => {
                                        return (
                                            <>
                                                <div key={index} className='d-inline-flex'>
                                                    {
                                                        // selTeamIdx != -1 &&
                                                        <img className='d-inline-block' src={item.teamIdx !== -1 ? playList.boxscore.teams[item.teamIdx].team.logo : defaultLogo} style={{ width: 30, height: 30 }} />
                                                    }
                                                    <p className='d-inline-block' style={{ paddingLeft: 10 }}>{item.description}<b className='text-danger'>{" +" + item.increase + " (" + item.score + ") " + item.time}</b></p>
                                                </div><br />
                                            </>
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