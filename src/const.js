export const URL = {
    NBA_TODAY_EVENT: 'https://site.api.espn.com/apis/site/v2/sports/basketball/nba/scoreboard',
    NCAA_TODAY_EVENT: 'https://site.api.espn.com/apis/site/v2/sports/basketball/mens-college-basketball/scoreboard',
    NHL_TODAY_EVENT: 'https://site.api.espn.com/apis/site/v2/sports/hockey/nhl/scoreboard',
    SOCCER_TODAY_EVENT: "https://site.api.espn.com/apis/site/v2/sports/soccer/eng.1/scoreboard",

    // EVENT_SCHEDULE: 'https://www.espn.com/nba/schedule',
    
    // Event API
    NBA: "https://site.api.espn.com/apis/site/v2/sports/basketball/nba/summary",
    NCAA: "https://site.api.espn.com/apis/site/v2/sports/basketball/mens-college-basketball/summary",
    NHL:"https://site.api.espn.com/apis/site/v2/sports/hockey/nhl/summary",
    SOCCER1: "https://site.api.espn.com/apis/site/v2/sports/soccer/eng.1/summary",

    SOCCER:'https://site.api.espn.com/apis/site/v2/sports/soccer/usa.1/summary'
    // NCAA_SCORE_BOARD: "http://site.api.espn.com/apis/site/v2/sports/basketball/mens-college-basketball/scoreboard"

}

export const SPORTS_CATEGORY = [
    {
        label: 'NBA',
        value: 'NBA',
    },
    {
        label: 'NCAA',
        value: 'NCAA',
    },
    {
        label: 'NHL',
        value: 'NHL',
    },
    {
        label: 'SOCCER',
        value: 'SOCCER',
    },
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
    no: (String)
    teamId: (false:team1, true:team2)
    typeId: (false: 'No Compare', Int: 'Compare')
    scoreValue: (-1: 'No Compare', Int: 'Compare')
    scoringPlayStatus: (false: 'No compare',true: 'compare')
    scoringPlay: (true, false)
    Increase: (false: 'No Increase', Int: 'Increase', -1: previous event scoreValue Increase)
    roataion: (false: 'No Rotation', true: 'Rotation')
*/
export const NBA_DS = [
    {//DataSet1
        no: 'NBA-DS1',
        teamId: false,
        typeId: false,
        scoreValue: 3,
        Increase: 3,
        rotation: false
    },
    {//DataSet2
        no: 'NBA-DS2',
        teamId: false,
        typeId: 45,
        scoreValue: -1,
        Increase: false,
        rotation: true
    },
    {//DataSet3
        no: 'NBA-DS3',
        teamId: false,
        typeId: 44,
        scoreValue: -1,
        Increase: false,
        rotation: true
    },
    {//DataSet5
        no: 'NBA-DS5',
        teamId: false,
        typeId: 31,
        scoreValue: -1,
        Increase: false,
        rotation: true
    },
    {//DataSet6
        no: 'NBA-DS6',
        teamId: false,
        typeId: 32,
        scoreValue: -1,
        Increase: false,
        rotation: true
    },
    {//DataSet7-1
        no: 'NBA-DS7',
        teamId: false,
        typeId: 96,
        scoreValue: 2,
        Increase: 2,
        rotation: false
    },
    {//DataSet7-2
        no: 'NBA-DS7',
        teamId: false,
        typeId: 116,
        scoreValue: 2,
        Increase: 2,
        rotation: false
    },
    {//DataSet7-3
        no: 'NBA-DS7',
        teamId: false,
        typeId: 115,
        scoreValue: 2,
        Increase: 2,
        rotation: false
    },
    {//DataSet7-4
        no: 'NBA-DS7',
        teamId: false,
        typeId: 150,
        scoreValue: 2,
        Increase: 2,
        rotation: false
    },
    {//DataSet7-6
        no: 'NBA-DS7',
        teamId: false,
        typeId: 118,
        scoreValue: 2,
        Increase: 2,
        rotation: false
    },
    {//DataSet7-7
        no: 'NBA-DS7',
        teamId: false,
        typeId: 138,
        scoreValue: 2,
        Increase: 2,
        rotation: false
    },
    {//DataSet7-8
        no: 'NBA-DS7',
        teamId: false,
        typeId: 149,
        scoreValue: 2,
        Increase: 2,
        rotation: false
    },
    {//DataSet8
        no: 'NBA-DS8',
        teamId: true,
        typeId: 102,
        scoreValue: 0,
        Increase: 1,
        rotation: false
    },
    {//DataSet9
        no: 'NBA-DS9',
        teamId: false,
        typeId: 101,
        scoreValue: 1,
        Increase: 1,
        rotation: false
    },
    {//DataSet10
        no: 'NBA-DS10',
        teamId: false,
        typeId: 98,
        scoreValue: 1,
        Increase: 1,
        rotation: false
    },
    {//DataSet11
        no: 'NBA-DS11',
        teamId: false,
        typeId: 100,
        scoreValue: 1,
        Increase: 1,
        rotation: false
    },
    {//DataSet12
        no: 'NBA-DS12',
        teamId: false,
        typeId: 101,
        scoreValue: 1,
        Increase: 1,
        rotation: false
    },
    {//DataSet13
        no: 'NBA-DS13',
        teamId: true,
        typeId: 100,
        scoreValue: 0,
        Increase: 1,
        rotation: false
    },
    {//DataSet14
        no: 'NBA-DS14',
        teamId: true,
        typeId: 101,
        scoreValue: 0,
        Increase: 1,
        rotation: false
    },
    {//DataSet15
        no: 'NBA-DS15',
        teamId: true,
        typeId: 100,
        scoreValue: 0,
        Increase: 1,
        rotation: false
    },
    {//DataSet16
        no: 'NBA-DS16',
        teamId: true,
        typeId: 98,
        scoreValue: 0,
        Increase: 1,
        rotation: false
    },
    {//DataSet17
        no: 'NBA-DS17',
        teamId: true,
        typeId: 99,
        scoreValue: 0,
        Increase: 1,
        rotation: false
    },
    {//DataSet18
        no: 'NBA-DS18',
        teamId: true,
        typeId: 97,
        scoreValue: 0,
        Increase: 1,
        rotation: false
    },
    {//DataSet19
        no: 'NBA-DS19',
        teamId: true,
        typeId: 103,
        scoreValue: 0,
        Increase: 1,
        rotation: false
    },
    {//DataSet20
        no: 'NBA-DS20',
        teamId: true,
        typeId: 90,
        scoreValue: -1,
        Increase: 1,
        rotation: false
    },
    {//DataSet21
        no: 'NBA-DS21',
        teamId: true,
        typeId: 87,
        scoreValue: -1,
        Increase: 1,
        rotation: false
    },
    {//DataSet22
        no: 'NBA-DS22',
        teamId: true,
        typeId: 70,
        scoreValue: -1,
        Increase: 1,
        rotation: false
    },
    {//DataSet23
        no: 'NBA-DS23',
        teamId: true,
        typeId: 66,
        scoreValue: -1,
        Increase: 1,
        rotation: false
    },
    {//DataSet24
        no: 'NBA-DS24',
        teamId: true,
        typeId: 71,
        scoreValue: -1,
        Increase: 1,
        rotation: false
    },
    {//DataSet25
        no: 'NBA-DS25',
        teamId: true,
        typeId: 64,
        scoreValue: -1,
        Increase: 1,
        rotation: false
    },
    {//DataSet26
        no: 'NBA-DS26',
        teamId: false,
        typeId: 103,
        scoreValue: 1,
        Increase: 1,
        rotation: false
    },
    {//DataSet27
        no: 'NBA-DS27',
        teamId: false,
        typeId: 97,
        scoreValue: 1,
        Increase: 1,
        rotation: true
    },
    {//DataSet28
        no: 'NBA-DS28',
        teamId: false,
        typeId: 102,
        scoreValue: 0,
        Increase: false,
        rotation: true
    },
    {//DataSet29
        no: 'NBA-DS29',
        teamId: false,
        typeId: 102,
        scoreValue: 1,
        Increase: 1,
        rotation: true
    },
    {//DataSet30
        no: 'NBA-DS30',
        // index: 30,
        noMatchList: [96, 116, 115, 150, 118, 138, 149],
        description: true,//prev Description
        teamId: true,
        typeId: 44,
        scoreValue: -1,
        Increase: 2,
        rotation: false
    },
    {//DataSet31
        no: 'NBA-DS31',
        teamId: false,
        typeId: 97,
        scoreValue: 0,
        Increase: false,
        rotation: true
    },
    {//DataSet32
        no: 'NBA-DS32',
        teamId: true,
        typeId: 45,
        scoreValue: -1,
        Increase: 1,
        rotation: false
    },
    {//DataSet33
        no: 'NBA-DS33',
        teamId: false,
        typeId: 99,
        scoreValue: 1,
        Increase: 1,
        rotation: true
    },
    {//DataSet34
        no: 'NBA-DS34',
        teamId: false,
        typeId: 99,
        scoreValue: 0,
        Increase: false,
        rotation: true
    },
    {//DataSet34-2
        no: 'NBA-DS34',
        teamId: false,
        typeId: 90,
        scoreValue: -1,
        Increase: false,
        rotation: true
    },
    {//DataSet35
        no: 'NBA-DS35',
        teamId: false,
        typeId: 87,
        scoreValue: -1,
        Increase: false,
        rotation: true
    },
    {//DataSet36
        no: 'NBA-DS36',
        teamId: false,
        typeId: 70,
        scoreValue: -1,
        Increase: false,
        rotation: true
    },
    {//DataSet37
        no: 'NBA-DS37',
        teamId: false,
        typeId: 66,
        scoreValue: -1,
        Increase: false,
        rotation: true
    },
    {//DataSet38
        no: 'NBA-DS38',
        teamId: false,
        typeId: 71,
        scoreValue: -1,
        Increase: false,
        rotation: true
    },
    {//DataSet39
        no: 'NBA-DS39',
        teamId: false,
        typeId: 64,
        scoreValue: -1,
        Increase: false,
        rotation: true
    },
    {//DataSet40
        no: 'NBA-DS40',
        teamId: true,
        typeId: 62,
        scoreValue: -1,
        Increase: 1,
        rotation: false
    },
    {//DataSet41
        no: 'NBA-DS41',
        teamId: true,
        typeId: 63,
        scoreValue: -1,
        Increase: 1,
        rotation: false
    },
    {//DataSet42
        no: 'NBA-DS42',
        teamId: true,
        typeId: 86,
        scoreValue: -1,
        Increase: 1,
        rotation: false
    },
    {//DataSet42-2
        no: 'NBA-DS42',
        teamId: false,
        typeId: 86,
        scoreValue: -1,
        Increase: false,
        rotation: true
    },
    {//DataSet43
        no: 'NBA-DS43',
        teamId: true,
        typeId: 74,
        scoreValue: -1,
        Increase: 1,
        rotation: false
    },
    {//DataSet44
        no: 'NBA-DS44',
        teamId: false,
        typeId: 84,
        scoreValue: -1,
        Increase: false,
        rotation: true
    },
    {//DataSet45
        no: 'NBA-DS45',
        teamId: true,
        typeId: 84,
        scoreValue: -1,
        Increase: 2,
        rotation: false
    },
    {//DataSet46
        no: 'NBA-DS46',
        teamId: false,
        typeId: 22,
        scoreValue: -1,
        Increase: false,
        rotation: true
    },
    {//DataSet47
        no: 'NBA-DS47',
        teamId: true,
        typeId: 22,
        scoreValue: -1,
        Increase: 1,
        rotation: false
    },
    {//DataSet48
        no: 'NBA-DS48',
        // index: 48,
        teamId: true,
        typeId: 44,
        scoreValue: -1,
        Increase: 1,
        rotation: false
    },
    {//DataSet49
        no: 'NBA-DS49',
        teamId: true,
        typeId: 31,
        scoreValue: -1,
        Increase: 1,
        rotation: false
    },
    {//DataSet50
        no: 'NBA-DS50',
        teamId: true,
        typeId: 32,
        scoreValue: -1,
        Increase: 1,
        rotation: false
    },
    {//DataSet51
        no: 'NBA-DS51',
        teamId: false,
        typeId: 104,
        scoreValue: 1,
        Increase: 1,
        rotation: false
    },
    {//DataSet52
        no: 'NBA-DS52',
        teamId: false,
        typeId: 105,
        scoreValue: 1,
        Increase: 1,
        rotation: true
    },
    {//DataSet53
        no: 'NBA-DS53',
        teamId: true,
        typeId: 104,
        scoreValue: 0,
        Increase: 1,
        rotation: false
    },
    {//DataSet54
        no: 'NBA-DS54',
        teamId: true,
        typeId: 105,
        scoreValue: 0,
        Increase: 1,
        rotation: false
    },
    {//DataSet55
        no: 'NBA-DS55',
        teamId: true,
        typeId: 106,
        scoreValue: 0,
        Increase: 1,
        rotation: false
    },
    {//DataSet56
        no: 'NBA-DS56',
        teamId: false,
        typeId: 106,
        scoreValue: 1,
        Increase: 1,
        rotation: true
    },
    {//DataSet57
        no: 'NBA-DS57',
        teamId: false,
        typeId: 98,
        scoreValue: 0,
        Increase: false,
        rotation: false
    },
    {//DataSet58
        no: 'NBA-DS58',
        teamId: false,
        typeId: 105,
        scoreValue: 0,
        Increase: 0,
        rotation: true
    }
]

export const NCAA_DS = [
    {//DataSet1
        no: 'NCAA-DS1',
        teamId: false,
        typeId: false,
        scoreValue: 3,
        scoringPlayStatus: true,
        scoringPlay: true,
        Increase: 3,
        rotation: false
    },
    {//DataSet2
        no: 'NCAA-DS2',
        teamId: false,
        typeId: 519,
        scoreValue: -1,
        Increase: false,
        rotation: true
    },
    {//DataSet3
        no: 'NCAA-DS3',
        teamId: true,
        typeId: 519,
        scoreValue: -1,
        Increase: 1,
        rotation: true
    },
    {//DataSet4
        no: 'NCAA-DS4',
        teamId: false,
        typeId: 574,
        scoreValue: 2,
        Increase: 2,
        rotation: false
    },
    {//DataSet5
        no: 'NCAA-DS5',
        teamId: true,
        typeId: 598,
        scoreValue: -1,
        Increase: 1,
        rotation: false
    },
    {//DataSet6
        no: 'NCAA-DS6',
        teamId: false,
        typeId: 540,
        scoreValue: -1,
        scoringPlayStatus: true,
        scoringPlay: true,
        Increase: 1,
        rotation: false
    },
    {//DataSet7
        no: 'NCAA-DS7',
        teamId: false,
        typeId: 540,
        scoreValue: -1,
        scoringPlayStatus: true,
        scoringPlay: false,
        Increase: false,
        rotation: false
    },
    {//DataSet8
        no: 'NCAA-DS8',
        teamId: true,
        typeId: 540,
        scoreValue: -1,
        scoringPlayStatus: true,
        scoringPlay: false,
        Increase: 1,
        rotation: false
    },
    {//DataSet9
        no: 'NCAA-DS9',
        // ncaa: 9,
        teamId: true,
        typeId: 519,
        scoreValue: -1,
        Increase: 2,
        rotation: true
    },
    {//DataSet10-1
        no: 'NCAA-DS10-1',
        // ncaa: 10,
        teamId: true,
        typeId: 519,
        scoreValue: -1,
        Increase: 3,
        rotation: false
    },
    {//DataSet10-2
        no: 'NCAA-DS10-2',
        teamId: true,
        typeId: false,
        scoreValue: 3,
        scoringPlayStatus: true,
        scoringPlay: false,
        Increase: 1,
        rotation: false
    },
    {//DataSet11
        no: 'NCAA-DS11',
        teamId: true,
        typeId: 540,
        scoreValue: 3,
        scoringPlayStatus: true,
        scoringPlay:true,
        Increase: false,
        rotation: false
    }
]

export const NHL_DS = [
    {//DataSet1
        no: 'NHL-DS1',
        teamId: false,
        typeId: 502,
        scoreValue: -1,
        Increase: 1,
        rotation: false
    },
    {//DataSet2
        no: 'NHL-DS2',
        teamId: -1,
        typeId: 516,
        scoreValue: -1,
        Increase: false,
        rotation: true
    },
    {//DataSet3
        no: 'NHL-DS3',
        teamId: false,
        typeId: 506,
        scoreValue: -1,
        Increase: 2,
        rotation: false
    },
    {//DataSet4
        no: 'NHL-DS4',
        teamId: false,
        typeId: 509,
        scoreValue: -1,
        Increase: false,
        rotation: true
    },
    {//DataSet4
        no: 'NHL-DS4',
        teamId: true,
        typeId: 509,
        scoreValue: -1,
        Increase: false,
        rotation: true
    },
    {//DataSet5
        no: 'NHL-DS5',
        teamId: false,
        typeId: 509,
        scoreValue: -1,
        Increase: false,
        rotation: true
    },
    {//DataSet6
        no: 'NHL-DS6',
        teamId: true,
        typeId: 509,
        scoreValue: -1,
        Increase: false,
        rotation: false
    },
    {//DataSet7
        no: 'NHL-DS7',
        teamId: false,
        typeId: 505,
        scoreValue: -1,
        Increase: 4,
        rotation: true
    },
    {//DataSet8
        no: 'NHL-DS8',
        teamId: true,
        typeId: 505,
        scoreValue: -1,
        Increase: false,
        rotation: true
    },
    {//DataSet9
        no: 'NHL-DS9',
        teamId: -1,
        typeId: 519,
        scoreValue: -1,
        Increase: false,
        rotation: true
    },
    {//DataSet10
        no: 'NHL-DS10',
        teamId: true,
        typeId: 502,
        scoreValue: -1,
        Increase: false,
        rotation: false
    },
]

export const SOCCER_DS = [
    {//DataSet1
        no: 'SOCCER-DS1',
        teamId: 1,
        typeId: 122,
        scoreValue: -1,
        Increase: false,
        rotation: true
    },
    {//DataSet2
        no: 'SOCCER-DS2',
        teamId: 2,
        typeId: 122,
        scoreValue: -1,
        Increase: 1,
        rotation: false
    },
    {//DataSet3
        no: 'SOCCER-DS3',
        teamId: 1,
        typeId: 68,
        scoreValue: -1,
        Increase: false,
        rotation: true
    },
    {//DataSet4
        no: 'SOCCER-DS4',
        teamId: 2,
        typeId: 68,
        scoreValue: -1,
        Increase: 1,
        rotation: false
    },
    {//DataSet5
        no: 'SOCCER-DS5',
        teamId: 1,
        typeId: 95,
        scoreValue: -1,
        Increase: 3,
        rotation: true
    },
    {//DataSet6
        no: 'SOCCER-DS6',
        teamId: 2,
        typeId: 95,
        scoreValue: -1,
        Increase: false,
        rotation: true
    },
    {//DataSet7
        no: 'SOCCER-DS7',
        teamId: 1,
        typeId: 66,
        scoreValue: -1,
        Increase: false,
        rotation: true
    },
    {//DataSet8
        no: 'SOCCER-DS8',
        teamId: 2,
        typeId: 66,
        scoreValue: -1,
        Increase: 1,
        rotation: false
    },
    {//DataSet9
        no: 'SOCCER-DS9',
        teamId: 1,
        typeId: 106,
        scoreValue: -1,
        Increase: 3,
        rotation: true
    },
    {//DataSet10
        no: 'SOCCER-DS10',
        teamId: 2,
        typeId: 106,
        scoreValue: -1,
        Increase: false,
        rotation: true
    },
    {//DataSet11
        no: 'SOCCER-DS11',
        teamId: 1,
        typeId: 137,
        scoreValue: -1,
        Increase: 4,
        rotation: true
    },
    {//DataSet12
        no: 'SOCCER-DS12',
        teamId: 2,
        typeId: 137,
        scoreValue: -1,
        Increase: false,
        rotation: true
    },
    {//DataSet13
        no: 'SOCCER-DS13',
        teamId: 1,
        typeId: 70,
        scoreValue: -1,
        Increase: 4,
        rotation: true
    },
    {//DataSet14
        no: 'SOCCER-DS14',
        teamId: 2,
        typeId: 70,
        scoreValue: -1,
        Increase: false,
        rotation: true
    },
    {//DataSet15
        no: 'SOCCER-DS15',
        teamId: 1,
        typeId: 173,
        scoreValue: -1,
        Increase: 4,
        rotation: true
    },
    {//DataSet16
        no: 'SOCCER-DS16',
        teamId: 2,
        typeId: 173,
        scoreValue: -1,
        Increase: false,
        rotation: true
    },
    {//DataSet17
        no: 'SOCCER-DS17',
        teamId: 1,
        typeId: 97,
        scoreValue: -1,
        Increase: false,
        rotation: true
    },
    {//DataSet18
        no: 'SOCCER-DS18',
        teamId: 2,
        typeId: 97,
        scoreValue: -1,
        Increase: 4,
        rotation: true
    },
    {//DataSet19
        no: 'SOCCER-DS19',
        teamId: 1,
        typeId: 98,
        scoreValue: -1,
        Increase: 4,
        rotation: true
    },
    {//DataSet20
        no: 'SOCCER-DS20',
        teamId: 2,
        typeId: 98,
        scoreValue: -1,
        Increase: false,
        rotation: true
    },
    {//DataSet21
        no: 'SOCCER-DS21',
        teamId: 1,
        typeId: 117,
        scoreValue: -1,
        Increase: false,
        rotation: true
    },
    {//DataSet22
        no: 'SOCCER-DS22',
        teamId: 1,
        typeId: 114,
        scoreValue: -1,
        Increase: 3,
        rotation: true
    },
    {//DataSet23
        no: 'SOCCER-DS23',
        teamId: 1,
        typeId: 114,
        scoreValue: -1,
        Increase: false,
        rotation: true
    },
    // {//DataSet24
    //     no: 'SOCCER-DS24',
    //     teamId: 1,
    //     typeId: 114,
    //     scoreValue: -1,
    //     Increase: false,
    //     rotation: true
    // },
    // {//DataSet25
    //     no: 'SOCCER-DS25',
    //     teamId: 1,
    //     typeId: 114,
    //     scoreValue: -1,
    //     Increase: false,
    //     rotation: true
    // },
    // {//DataSet26
    //     no: 'SOCCER-DS26',
    //     teamId: 1,
    //     typeId: 114,
    //     scoreValue: -1,
    //     Increase: false,
    //     rotation: true
    // },
    // {//DataSet27
    //     no: 'SOCCER-DS27',
    //     teamId: 1,
    //     typeId: 114,
    //     scoreValue: -1,
    //     Increase: false,
    //     rotation: true
    // },
    {//DataSet28
        no: 'SOCCER-DS28',
        teamId: 1,
        typeId: 136,
        scoreValue: -1,
        Increase: 1,
        rotation: false
    },
]

export const DATASET_TYPE_CATEGORY = {
    NBA: NBA_DS,
    NCAA: NCAA_DS,
    NHL: NHL_DS,
    SOCCER: SOCCER_DS
}