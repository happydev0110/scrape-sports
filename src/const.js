export const URL = {
    EVENT: 'https://site.api.espn.com/apis/site/v2/sports/basketball/nba/scoreboard',
    EVENT_SCHEDULE: 'https://www.espn.com/nba/schedule',
    
    BASKETBALL: "https://site.api.espn.com/apis/site/v2/sports/basketball/nba/summary",

    NCAA_EVENT: "https://site.api.espn.com/apis/site/v2/sports/basketball/mens-college-basketball/summary",
    NCAA_SCORE_BOARD: "http://site.api.espn.com/apis/site/v2/sports/basketball/mens-college-basketball/scoreboard"

}

export const SPORTS_CATEGORY = [
    {
        label: 'NBA',
        value: 1,
    },
    {
        label: 'NCAA',
        value: 2,
    }
]

export const INTERVAL_TIME = [
    {
        label: '3s',
        value: 3
    },
    {
        label: '4s',
        value: 4
    },
    {
        label: '5s',
        value: 5
    },
    {
        label: '6s',
        value: 6
    },
    {
        label: '7s',
        value: 7
    },
    {
        label: '8s',
        value: 8
    },
    {
        label: '9s',
        value: 9
    },
    {
        label: '10s',
        value: 10
    },
    {
        label: '20s',
        value: 20
    },
    {
        label: '30s',
        value: 30
    }
]

/*
    teamId: (false:team1, true:team2)
    typeId: (false: 'No Compare', Int: 'Compare')
    scoreValue: (-1: 'No Compare', Int: 'Compare')
    Increase: (false: 'No Increase', Int: 'Increase', -1: previous event Increase)
    roataion: (false: 'No Rotation', true: 'Rotation')
*/
export const DATASET_TYPE = [
    {//DataSet1
        teamId: false,
        typeId: false,
        scoreValue: 3,
        Increase: 3,
        rotation: false
    },
    {//DataSet2
        teamId: false,
        typeId: 45,
        scoreValue: -1,
        Increase: false,
        rotation: true
    },
    {//DataSet3
        teamId: false,
        typeId: 44,
        scoreValue: -1,
        Increase: false,
        rotation: true
    },
    {//DataSet5
        teamId: false,
        typeId: 31,
        scoreValue: -1,
        Increase: false,
        rotation: true
    },
    {//DataSet6
        teamId: false,
        typeId: 32,
        scoreValue: -1,
        Increase: false,
        rotation: true
    },
    {//DataSet7-1
        teamId: false,
        typeId: 96,
        scoreValue: 2,
        Increase: 2,
        rotation: false
    },
    {//DataSet7-2
        teamId: false,
        typeId: 116,
        scoreValue: 2,
        Increase: 2,
        rotation: false
    },
    {//DataSet7-3
        teamId: false,
        typeId: 115,
        scoreValue: 2,
        Increase: 2,
        rotation: false
    },
    {//DataSet7-4
        teamId: false,
        typeId: 150,
        scoreValue: 2,
        Increase: 2,
        rotation: false
    },
    {//DataSet7-6
        teamId: false,
        typeId: 118,
        scoreValue: 2,
        Increase: 2,
        rotation: false
    },
    {//DataSet7-7
        teamId: false,
        typeId: 138,
        scoreValue: 2,
        Increase: 2,
        rotation: false
    },
    {//DataSet7-8
        teamId: false,
        typeId: 149,
        scoreValue: 2,
        Increase: 2,
        rotation: false
    },
    {//DataSet8
        teamId: true,
        typeId: 102,
        scoreValue: 0,
        Increase: 1,
        rotation: false
    },
    {//DataSet9
        teamId: false,
        typeId: 101,
        scoreValue: 1,
        Increase: 1,
        rotation: false
    },
    {//DataSet10
        teamId: false,
        typeId: 98,
        scoreValue: 1,
        Increase: 1,
        rotation: false
    },
    {//DataSet11
        teamId: false,
        typeId: 100,
        scoreValue: 1,
        Increase: 1,
        rotation: false
    },
    {//DataSet12
        teamId: false,
        typeId: 101,
        scoreValue: 1,
        Increase: 1,
        rotation: false
    },
    {//DataSet13
        teamId: true,
        typeId: 100,
        scoreValue: 0,
        Increase: 1,
        rotation: false
    },
    {//DataSet14
        teamId: true,
        typeId: 101,
        scoreValue: 0,
        Increase: 1,
        rotation: false
    },
    {//DataSet15
        teamId: true,
        typeId: 100,
        scoreValue: 0,
        Increase: 1,
        rotation: false
    },
    {//DataSet16
        teamId: true,
        typeId: 98,
        scoreValue: 0,
        Increase: 1,
        rotation: false
    },
    {//DataSet17
        teamId: true,
        typeId: 99,
        scoreValue: 0,
        Increase: 1,
        rotation: false
    },
    {//DataSet18
        teamId: true,
        typeId: 97,
        scoreValue: 0,
        Increase: 1,
        rotation: false
    },
    {//DataSet19
        teamId: true,
        typeId: 103,
        scoreValue: 0,
        Increase: 1,
        rotation: false
    },
    {//DataSet20
        teamId: true,
        typeId: 90,
        scoreValue: -1,
        Increase: 1,
        rotation: false
    },
    {//DataSet21
        teamId: true,
        typeId: 87,
        scoreValue: -1,
        Increase: 1,
        rotation: false
    },
    {//DataSet22
        teamId: true,
        typeId: 70,
        scoreValue: -1,
        Increase: 1,
        rotation: false
    },
    {//DataSet23
        teamId: true,
        typeId: 66,
        scoreValue: -1,
        Increase: 1,
        rotation: false
    },
    {//DataSet24
        teamId: true,
        typeId: 71,
        scoreValue: -1,
        Increase: 1,
        rotation: false
    },
    {//DataSet25
        teamId: true,
        typeId: 64,
        scoreValue: -1,
        Increase: 1,
        rotation: false
    },
    {//DataSet26
        teamId: false,
        typeId: 103,
        scoreValue: 1,
        Increase: 1,
        rotation: false
    },
    {//DataSet27
        teamId: false,
        typeId: 97,
        scoreValue: 1,
        Increase: 1,
        rotation: true
    },
    {//DataSet28
        teamId: false,
        typeId: 102,
        scoreValue: 0,
        Increase: false,
        rotation: true
    },
    {//DataSet29
        teamId: false,
        typeId: 102,
        scoreValue: 1,
        Increase: 1,
        rotation: true
    },
    {//DataSet30
        index: 30,
        noMatchList: [96, 116, 115, 150, 118, 138, 149],
        description: true,//prev Description
        teamId: true,
        typeId: 44,
        scoreValue: -1,
        Increase: 2,
        rotation: false
    },
    {//DataSet31
        teamId: false,
        typeId: 97,
        scoreValue: 0,
        Increase: false,
        rotation: true
    },
    {//DataSet32
        teamId: true,
        typeId: 45,
        scoreValue: -1,
        Increase: 1,
        rotation: false
    },
    {//DataSet33
        teamId: false,
        typeId: 99,
        scoreValue: 1,
        Increase: 1,
        rotation: true
    },
    {//DataSet34
        teamId: false,
        typeId: 99,
        scoreValue: 0,
        Increase: false,
        rotation: true
    },
    {//DataSet34-2
        teamId: false,
        typeId: 90,
        scoreValue: -1,
        Increase: false,
        rotation: true
    },
    {//DataSet35
        teamId: false,
        typeId: 87,
        scoreValue: -1,
        Increase: false,
        rotation: true
    },
    {//DataSet36
        teamId: false,
        typeId: 70,
        scoreValue: -1,
        Increase: false,
        rotation: true
    },
    {//DataSet37
        teamId: false,
        typeId: 66,
        scoreValue: -1,
        Increase: false,
        rotation: true
    },
    {//DataSet38
        teamId: false,
        typeId: 71,
        scoreValue: -1,
        Increase: false,
        rotation: true
    },
    {//DataSet39
        teamId: false,
        typeId: 64,
        scoreValue: -1,
        Increase: false,
        rotation: true
    },
    {//DataSet40
        teamId: true,
        typeId: 62,
        scoreValue: -1,
        Increase: 1,
        rotation: false
    },
    {//DataSet41
        teamId: true,
        typeId: 63,
        scoreValue: -1,
        Increase: 1,
        rotation: false
    },
    {//DataSet42
        teamId: true,
        typeId: 86,
        scoreValue: -1,
        Increase: 1,
        rotation: false
    },
    {//DataSet42-2
        teamId: false,
        typeId: 86,
        scoreValue: -1,
        Increase: false,
        rotation: true
    },
    {//DataSet43
        teamId: true,
        typeId: 74,
        scoreValue: -1,
        Increase: 1,
        rotation: false
    },
    {//DataSet44
        teamId: false,
        typeId: 84,
        scoreValue: -1,
        Increase: false,
        rotation: true
    },
    {//DataSet45
        teamId: true,
        typeId: 84,
        scoreValue: -1,
        Increase: 2,
        rotation: false
    },
    {//DataSet46
        teamId: false,
        typeId: 22,
        scoreValue: -1,
        Increase: false,
        rotation: true
    },
    {//DataSet47
        teamId: true,
        typeId: 22,
        scoreValue: -1,
        Increase: 1,
        rotation: false
    },
    {//DataSet48
        index: 48,
        teamId: true,
        typeId: 44,
        scoreValue: -1,
        Increase: 1,
        rotation: false
    },
    {//DataSet49
        teamId: true,
        typeId: 31,
        scoreValue: -1,
        Increase: 1,
        rotation: false
    },
    {//DataSet50
        teamId: true,
        typeId: 32,
        scoreValue: -1,
        Increase: 1,
        rotation: false
    },
    {//DataSet51
        teamId: false,
        typeId: 104,
        scoreValue: 1,
        Increase: 1,
        rotation: false
    },
    {//DataSet52
        teamId: false,
        typeId: 105,
        scoreValue: 1,
        Increase: 1,
        rotation: true
    },
    {//DataSet53
        teamId: true,
        typeId: 104,
        scoreValue: 0,
        Increase: 1,
        rotation: false
    },
    {//DataSet54
        teamId: true,
        typeId: 105,
        scoreValue: 0,
        Increase: 1,
        rotation: false
    },
    {//DataSet55
        teamId: true,
        typeId: 106,
        scoreValue: 0,
        Increase: 1,
        rotation: false
    },
    {//DataSet56
        teamId: false,
        typeId: 106,
        scoreValue: 1,
        Increase: 1,
        rotation: true
    },
    {//DataSet57
        teamId: false,
        typeId: 98,
        scoreValue: 0,
        Increase: false,
        rotation: false
    },
    {//DataSet58
        teamId: false,
        typeId: 105,
        scoreValue: 0,
        Increase: 0,
        rotation: true
    }
]

export const DATASET_TYPE1 = [
    {//DataSet1
        no:'DS1',
        teamId: false,
        typeId: false,
        scoreValue: 3,
        scoringPlayStatus: true,
        scoringPlay: true,
        Increase: 3,
        rotation: false
    },
    {//DataSet2
        no:'DS2',
        teamId: false,
        typeId: 519,
        scoreValue: -1,
        Increase: false,
        rotation: true
    },
    {//DataSet3
        no:'DS3',
        teamId: true,
        typeId: 519,
        scoreValue: -1,
        Increase: 1,
        rotation: true
    },
    {//DataSet4
        no:'DS4',
        teamId: false,
        typeId: 574,
        scoreValue: 2,
        Increase: 2,
        rotation: false
    },
    {//DataSet5
        no:'DS5',
        teamId: true,
        typeId: 598,
        scoreValue: -1,
        Increase: 1,
        rotation: false
    },
    {//DataSet6
        no:'DS6',
        teamId: false,
        typeId: 540,
        scoreValue: -1,
        scoringPlayStatus: true,
        scoringPlay: true,
        Increase: 1,
        rotation: false
    },
    {//DataSet7
        no:'DS7',
        teamId: false,
        typeId: 540,
        scoreValue: -1,
        scoringPlayStatus: true,
        scoringPlay: false,
        Increase: false,
        rotation: false
    },
    {//DataSet8
        no:'DS8',
        teamId: true,
        typeId: 540,
        scoreValue: -1,
        scoringPlayStatus: true,
        scoringPlay: false,
        Increase: 1,
        rotation: false
    },
    {//DataSet9
        no:'DS9',
        ncaa: 9,
        teamId: true,
        typeId: 519,
        scoreValue: -1,
        Increase: 2,
        rotation: true
    },
    {//DataSet10-1
        no:'DS10-1',
        ncaa: 10,
        teamId: true,
        typeId: 519,
        scoreValue: -1,
        Increase: 3,
        rotation: false
    },
    {//DataSet10-2
        no:'DS10-2',
        teamId: true,
        typeId: false,
        scoreValue: 3,
        scoringPlayStatus: true,
        scoringPlay: false,
        Increase: 1,
        rotation: false
    }
]