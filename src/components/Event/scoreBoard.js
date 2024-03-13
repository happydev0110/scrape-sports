import React from 'react';

export default function ScoreBoard(props) {
    const { tabStatus,eventId, team1Idx, playList, awayScore, homeScore, time, tableScore, selTblIdx, description, increaseAmt, selTeamIdx, selTextIdx } = props;
    return (
        <>
        {
            !tabStatus&&<>
                <div className='row py-2'>
                    <div className='col-md-2'>
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
                        <div className='float-left d-inline-block'>
                            <h5 className='d-inline-block'>Team1:</h5>
                            <p className='d-inline-block px-3'>{tableScore[0]}</p>
                        </div>
                        <div className={selTblIdx == 0 ? 'border border-danger border-3 p-3' : 'border p-3'}>
                            {
                                selTextIdx == 0 && <>
                                    {
                                        selTeamIdx != -1 &&
                                        <img className='d-inline-block' src={playList.boxscore.teams[selTeamIdx].team.logo} style={{ width: 30, height: 30 }} />
                                    }
                                    <p className='d-inline-block'>{description}<b className='text-danger'>{increaseAmt ? " +" + increaseAmt : ' +0'}</b></p><br />
                                </>
                            }
                        </div>
                    </div>
                </div>
                <div className='row pb-3'>
                    <div className='col-md-12'>
                        <div className='float-left d-inline-block'>
                            <h5 className='d-inline-block'>Team2:</h5>
                            <p className='d-inline-block px-3'>{tableScore[1]}</p>
                        </div>
                        <div className={selTblIdx == 1 ? 'border border-danger border-3 p-3' : 'border p-3'}>
                            {
                                selTextIdx == 1 && <>
                                    {
                                        selTeamIdx != -1 &&
                                        <img className='d-inline-block' src={playList.boxscore.teams[selTeamIdx].team.logo} style={{ width: 30, height: 30 }} />
                                    }
                                    <p className='d-inline-block'>{description}<b className='text-danger'>{increaseAmt ? " +" + increaseAmt : ' +0'}</b></p><br />
                                </>
                            }
                        </div>
                    </div>
                </div>
                <div className='row pb-3'>
                    <div className='col-md-12'>
                        <div className='float-left d-inline-block'>
                            <h5 className='d-inline-block'>Team3:</h5>
                            <p className='d-inline-block px-3'>{tableScore[2]}</p>
                        </div>
                        <div className={selTblIdx == 2 ? 'border border-danger border-3 p-3' : 'border p-3'}>
                            {
                                selTextIdx == 2 && <>
                                    {
                                        selTeamIdx != -1 &&
                                        <img className='d-inline-block' src={playList.boxscore.teams[selTeamIdx].team.logo} style={{ width: 30, height: 30 }} />
                                    }
                                    <p className='d-inline-block'>{description}<b className='text-danger'>{increaseAmt ? " +" + increaseAmt : ' +0'}</b></p><br />
                                </>
                            }
                        </div>
                    </div>
                </div>
                <div className='row pb-3'>
                    <div className='col-md-12'>
                        <div className='float-left d-inline-block'>
                            <h5 className='d-inline-block'>Team4:</h5>
                            <p className='d-inline-block px-3'>{tableScore[3]}</p>
                        </div>
                        <div className={selTblIdx == 3 ? 'border border-danger border-3 p-3' : 'border p-3'}>
                            {
                                selTextIdx == 3 && <>
                                    {
                                        selTeamIdx != -1 &&
                                        <img className='d-inline-block' src={playList.boxscore.teams[selTeamIdx].team.logo} style={{ width: 30, height: 30 }} />
                                    }
                                    <p className='d-inline-block'>{description}<b className='text-danger'>{increaseAmt ? " +" + increaseAmt : ' +0'}</b></p><br />
                                </>
                            }
                        </div>
                    </div>
                </div>
            </>
        }
        </>
    )
}