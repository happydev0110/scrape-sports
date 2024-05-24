export const URL = {
    NBA_TODAY_EVENT: 'https://site.api.espn.com/apis/site/v2/sports/basketball/nba/scoreboard',
    NBA2_TODAY_EVENT: 'https://site.api.espn.com/apis/site/v2/sports/basketball/nba/scoreboard',
    NCAA_TODAY_EVENT: 'https://site.api.espn.com/apis/site/v2/sports/basketball/mens-college-basketball/scoreboard',
    NHL_TODAY_EVENT: 'https://site.api.espn.com/apis/site/v2/sports/hockey/nhl/scoreboard',
    SOCCER_TODAY_EVENT: "https://site.api.espn.com/apis/site/v2/sports/soccer/eng.1/scoreboard",
    NHL2_TODAY_EVENT: 'https://site.api.espn.com/apis/site/v2/sports/hockey/nhl/scoreboard',

    MLB_TODAY_EVENT: 'https://site.api.espn.com/apis/site/v2/sports/baseball/mlb/scoreboard',

    // https://site.api.espn.com/apis/site/v2/sports/basketball/mens-college-basketball/summary
    // EVENT_SCHEDULE: 'https://www.espn.com/nba/schedule',

    // Event API
    NBA: "https://site.api.espn.com/apis/site/v2/sports/basketball/nba/summary",
    NBA2: "https://site.api.espn.com/apis/site/v2/sports/basketball/nba/summary",
    NCAA: "https://site.api.espn.com/apis/site/v2/sports/basketball/mens-college-basketball/summary",
    NHL: "https://site.api.espn.com/apis/site/v2/sports/hockey/nhl/summary",
    SOCCER1: "https://site.api.espn.com/apis/site/v2/sports/soccer/eng.1/summary",
    NHL2: "https://site.api.espn.com/apis/site/v2/sports/hockey/nhl/summary",

    SOCCER: 'https://site.api.espn.com/apis/site/v2/sports/soccer/usa.1/summary',
    // NCAA_SCORE_BOARD: "http://site.api.espn.com/apis/site/v2/sports/basketball/mens-college-basketball/scoreboard"
    MLB: 'https://site.api.espn.com/apis/site/v2/sports/baseball/mlb/summary'
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
    {
        label: 'NHL2',
        value: 'NHL2',
    },
    {
        label: 'NBA2',
        value: 'NBA2',
    },
    {
        label: 'MLB',
        value: 'MLB',
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

export const TEAM_LIST = [
    {
        label: 'Team1',
        value: 0,
    },
    {
        label: 'Team2',
        value: 1,
    },
    {
        label: 'Team3',
        value: 2,
    },
    {
        label: 'Team4',
        value: 3,
    },
]

/*
    no: (String)
    teamId: (-1:'No Compare' false:team1, true:team2)
    typeId: (false: 'No Compare', Int: 'Compare')
    scoreValue: (-1: 'No Compare', Int: 'Compare')
    scoringPlayStatus: (false: 'No compare',true: 'compare')
    scoringPlay: (true, false)
    Increase: (false: 'No Increase', Int: 'Increase', -1: previous event scoreValue Increase)
    roataion: (false: 'No Rotation', true: 'Rotation')
    logoReverse: (false: 'No Change', true: 'Next Logo')
*/
export const NBA_DS = [
    {//DS1
        no: 'NBA2-DS1',
        teamId: false,
        typeId: false,
        scoreValue: 3,
        Increase: 3,
        rotation: false
    },
    {//DS1-2
        no: 'NBA2-DS1-2',
        teamId: true,
        typeId: false,
        scoreValue: 0,
        Increase: 1,
        rotation: false
    },
    // {//DS1-3
    //     no: 'NBA2-DS1-3',
    //     teamId: true,
    //     typeId: false,
    //     scoreValue: -1,
    //     Increase: 1,
    //     rotation: false
    // },
    {//DS1-4
        no: 'NBA2-DS1-4',
        teamId: true,
        typeId: false,
        scoreValue: -1,
        Increase: 1,
        rotation: false
    },
    {//DS1-5
        no: 'NBA2-DS1-5',
        teamId: true,
        typeId: false,
        scoreValue: -1,
        Increase: 1,
        rotation: false
    },
    {//DS1-6
        no: 'NBA2-DS1-6',
        teamId: true,
        typeId: false,
        scoreValue: -1,
        Increase: 1,
        rotation: false
    },
    {//DS1-7
        no: 'NBA2-DS1-7',
        teamId: true,
        typeId: false,
        scoreValue: -1,
        Increase: 1,
        rotation: false
    },
    {//DS1-8
        no: 'NBA2-DS1-8',
        teamId: true,
        typeId: false,
        scoreValue: -1,
        Increase: 1,
        rotation: false
    },
    {//DS2
        no: 'NBA2-DS2',
        teamId: false,
        typeId: 45,
        scoreValue: -1,
        Increase: false,
        rotation: true
    },
    {//DS3
        no: 'NBA2-DS3',
        teamId: false,
        typeId: 44,
        scoreValue: -1,
        Increase: false,
        rotation: true
    },
    {//DS4
        no: 'NBA2-DS4',
        teamId: false,
        typeId: false,
        scoreValue: 3,
        Increase: 1,
        rotation: false
    },
    {//DS5
        no: 'NBA2-DS5',
        teamId: false,
        typeId: 31,
        scoreValue: -1,
        Increase: false,
        rotation: true
    },
    {//DS6
        no: 'NBA2-DS6',
        teamId: false,
        typeId: 32,
        scoreValue: -1,
        Increase: false,
        rotation: true
    },
    {//DS7
        no: 'NBA2-DS7',
        noMatchList: [96, 116, 115, 150, 118, 138, 149],
        teamId: false,
        typeId: false,
        scoreValue: 2,
        Increase: 2,
        rotation: false
    },
    {//DS7-2
        no: 'NBA2-DS7-2',
        teamId: true,
        typeId: false,
        scoreValue: 2,
        Increase: false,
        rotation: true
    },
    {//DS8-No change
        no: 'NBA2-DS8',
        teamId: true,
        typeId: 102,
        scoreValue: 0,
        Increase: 1,
        rotation: false
    },
    {//DS9-No Change
        no: 'NBA2-DS9',
        teamId: false,
        typeId: 101,
        scoreValue: 1,
        Increase: 1,
        rotation: false
    },
    {//DS10-No Change
        no: 'NBA2-DS10',
        teamId: false,
        typeId: 98,
        scoreValue: 1,
        Increase: 1,
        rotation: false
    },
    {//DS11-No Change
        no: 'NBA2-DS11',
        teamId: false,
        typeId: 100,
        scoreValue: 1,
        Increase: 1,
        rotation: false
    },
    {//DS13-No Change
        no: 'NBA2-DS13',
        teamId: true,
        typeId: 100,
        scoreValue: 0,
        Increase: 1,
        rotation: false
    },
    {//DS13-1
        no: 'NBA2-DS13-1',
        teamId: false,
        typeId: 100,
        scoreValue: 0,
        Increase: false,
        rotation: false
    },
    {//DS14-No Change
        no: 'NBA2-DS14',
        teamId: true,
        typeId: 101,
        scoreValue: 0,
        Increase: 1,
        rotation: false
    },
    {//DS16
        no: 'NBA2-DS16',
        teamId: true,
        typeId: 98,
        scoreValue: 0,
        Increase: 1,
        rotation: false
    },
    {//DS17
        no: 'NBA2-DS17',
        teamId: true,
        typeId: 99,
        scoreValue: 0,
        Increase: 1,
        rotation: false
    },
    {//DS18
        no: 'NBA2-DS18',
        teamId: true,
        typeId: 97,
        scoreValue: 0,
        Increase: 1,
        rotation: false
    },
    {//DS19
        no: 'NBA2-DS19',
        teamId: true,
        typeId: 103,
        scoreValue: 0,
        Increase: 1,
        rotation: false
    },
    {//DS19-2
        no: 'NBA2-DS19-2',
        teamId: false,
        typeId: 103,
        scoreValue: 0,
        Increase: 1,
        rotation: false
    },
    {//DS24
        no: 'NBA2-DS24',
        teamId: false,
        typeId: 24,
        scoreValue: -1,
        Increase: false,
        rotation: true
    },
    {//DS26
        no: 'NBA2-DS26',
        teamId: false,
        typeId: 103,
        scoreValue: 1,
        Increase: 1,
        rotation: false
    },
    {//DS27
        no: 'NBA2-DS27',
        teamId: false,
        typeId: 97,
        scoreValue: 1,
        Increase: 1,
        rotation: false
    },
    {//DS28
        no: 'NBA2-DS28',
        teamId: false,
        typeId: 102,
        scoreValue: 0,
        Increase: false,
        rotation: false
    },
    {//DS29
        no: 'NBA2-DS29',
        teamId: false,
        typeId: 102,
        scoreValue: 1,
        Increase: 1,
        rotation: false
    },
    {//DS30
        no: 'NBA2-DS30',
        noMatchList: [96, 116, 115, 150, 141, 118, 138, 149, 117],
        // description: true,//prev Description
        logo: 1,
        teamId: true,
        typeId: 44,
        scoreValue: -1,
        Increase: 3,
        rotation: true
    },
    {//DS30-2
        no: 'NBA2-DS30-2',
        teamId: true,
        typeId: 44,
        scoreValue: -1,
        Increase: 1,
        rotation: true
    },
    {//DS30-3
        no: 'NBA2-DS30-3',
        teamId: true,
        typeId: 44,
        scoreValue: -1,
        Increase: 3,
        rotation: true
    },
    {//DS31
        no: 'NBA2-DS31',
        teamId: false,
        typeId: 97,
        scoreValue: 0,
        Increase: false,
        rotation: false
    },
    {//DS32
        no: 'NBA2-DS32',
        teamId: true,
        typeId: 45,
        scoreValue: -1,
        Increase: 2,
        rotation: true
    },
    {//DS33
        no: 'NBA2-DS33',
        teamId: false,
        typeId: 99,
        scoreValue: 1,
        Increase: 1,
        rotation: false
    },
    {//DS34
        no: 'NBA2-DS34',
        teamId: false,
        typeId: 99,
        scoreValue: 0,
        Increase: false,
        rotation: false
    },
    {//DS44
        no: 'NBA2-DS44',
        teamId: false,
        typeId: 42,
        scoreValue: -1,
        Increase: false,
        rotation: true
    },
    {//DS45
        no: 'NBA2-DS45',
        teamId: true,
        typeId: 42,
        scoreValue: -1,
        Increase: 2,
        rotation: true
    },
    {//DS45-1
        no: 'NBA2-DS45-1',
        teamId: true,
        typeId: 24,
        scoreValue: -1,
        Increase: 2,
        rotation: true
    },
    {//DS46
        no: 'NBA2-DS46',
        teamId: false,
        typeId: 22,
        scoreValue: -1,
        Increase: false,
        rotation: true
    },
    {//DS47
        no: 'NBA2-DS47',
        teamId: true,
        typeId: 22,
        scoreValue: -1,
        Increase: 2,
        rotation: true
    },
    {//DS48
        no: 'NBA2-DS48',
        teamId: true,
        typeId: 44,
        scoreValue: -1,
        Increase: 2,
        rotation: true
    },
    {//DS48-2
        no: 'NBA2-DS48-2',
        teamId: true,
        typeId: 44,
        scoreValue: -1,
        Increase: 2,
        rotation: true
    },
    {//DS49
        no: 'NBA2-DS49',
        teamId: true,
        typeId: 31,
        scoreValue: -1,
        Increase: 2,
        rotation: true
    },
    {//DS50
        no: 'NBA2-DS50',
        teamId: true,
        typeId: 32,
        scoreValue: -1,
        Increase: 2,
        rotation: true
    },
    {//DS51
        no: 'NBA2-DS51',
        teamId: false,
        typeId: 104,
        scoreValue: 1,
        Increase: 1,
        rotation: false
    },
    {//DS52
        no: 'NBA2-DS52',
        teamId: false,
        typeId: 105,
        scoreValue: 1,
        Increase: 1,
        rotation: false
    },
    {//DS53
        no: 'NBA2-DS53',
        teamId: true,
        typeId: 104,
        scoreValue: 0,
        Increase: 1,
        rotation: false
    },
    {//DS54
        no: 'NBA2-DS54',
        teamId: true,
        typeId: 105,
        scoreValue: 0,
        Increase: 1,
        rotation: false
    },
    {//DS55
        no: 'NBA2-DS55',
        teamId: true,
        typeId: 106,
        scoreValue: 0,
        Increase: 1,
        rotation: false
    },
    {//DS56
        no: 'NBA2-DS56',
        teamId: false,
        typeId: 106,
        scoreValue: 1,
        Increase: 1,
        rotation: false
    },
    {//DS57
        no: 'NBA2-DS57',
        teamId: false,
        typeId: 98,
        scoreValue: 0,
        Increase: false,
        rotation: false
    },
    {//DS58
        no: 'NBA2-DS58',
        teamId: false,
        typeId: 105,
        scoreValue: 0,
        Increase: 0,
        rotation: false
    },
    {//DS61
        no: 'NBA2-DS61',
        teamId: false,
        typeId: 43,
        scoreValue: -1,
        Increase: 0,
        rotation: true
    },
    {//DS61-2
        no: 'NBA2-DS61-2',
        teamId: true,
        typeId: 43,
        scoreValue: -1,
        Increase: 2,
        rotation: true
    },
    {//DS62
        no: 'NBA2-DS62',
        teamId: true,
        typeId: 99,
        scoreValue: 1,
        Increase: false,
        rotation: false
    },
    {//DS63
        no: 'NBA2-DS63',
        teamId: -1,
        typeId: 412,
        scoreValue: -1,
        Increase: false,
        rotation: false
    },
    {//DS64
        no: 'NBA2-DS64',
        teamId: -1,
        typeId: 402,
        scoreValue: -1,
        Increase: false,
        rotation: false
    },
    {//DS65
        no: 'NBA2-DS65',
        teamId: true,
        typeId: 100,
        scoreValue: 1,
        Increase: false,
        rotation: false
    },
    {//DS66
        no: 'NBA2-DS66',
        teamId: true,
        typeId: 101,
        scoreValue: 1,
        Increase: false,
        rotation: false
    },
    {//DS67
        no: 'NBA2-DS67',
        teamId: true,
        typeId: 102,
        scoreValue: 1,
        Increase: false,
        rotation: false
    },
    {//DS68
        no: 'NBA2-DS68',
        teamId: true,
        typeId: 98,
        scoreValue: 1,
        Increase: false,
        rotation: false
    },
    {//DS70
        no: 'NBA2-DS70',
        teamId: true,
        typeId: 97,
        scoreValue: 1,
        Increase: false,
        rotation: false
    },
    {//DS71
        no: 'NBA2-DS71',
        teamId: true,
        typeId: 103,
        scoreValue: 1,
        Increase: false,
        rotation: false
    },
    {//DS72
        no: 'NBA2-DS72',
        teamId: true,
        typeId: false,
        logoReverse: true,
        scoreValue: -1,
        Increase: 1,
        rotation: false
    },
    {//DS73
        no: 'NBA2-DS73-1',
        teamId: -1,
        typeId: false,
        scoreValue: -1,
        Increase: false,
        rotation: false
    },
    {//DS73
        no: 'NBA2-DS73-2',
        teamId: true,
        typeId: 615,
        scoreValue: -1,
        Increase: false,
        rotation: false
    },
    {//DS73
        no: 'NBA2-DS74-1',
        teamId: false,
        typeId: 16,
        scoreValue: -1,
        Increase: false,
        rotation: false
    },
    {//DS73
        no: 'NBA2-DS74-2',
        teamId: true,
        typeId: 16,
        scoreValue: -1,
        Increase: false,
        rotation: false
    },
]

export const NBA2_DS = [
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
    {//DataSet19-2
        no: 'NBA-DS19-2',
        teamId: false,
        typeId: 103,
        scoreValue: 0,
        Increase: false,
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
        Increase: 2,
        rotation: true
    },
    {//DataSet3-2
        no: 'NCAA-DS3-2',
        teamId: true,
        typeId: 519,
        scoreValue: -1,
        // scoringPlayStatus: true,
        // scoringPlay: true,
        Increase: 2,
        rotation: true
    },
    {//DataSet4
        no: 'NCAA-DS4',
        teamId: false,
        typeId: 574,
        scoreValue: -1,
        scoringPlayStatus: true,
        scoringPlay: true,
        Increase: 2,
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
        Increase: 3,
        rotation: true
    },
    {//DataSet10
        no: 'NCAA-DS10',
        teamId: true,
        typeId: 519,
        scoreValue: -1,
        Increase: 2,
        rotation: true
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
        scoreValue: -1,
        scoringPlayStatus: true,
        scoringPlay: true,
        Increase: false,
        rotation: false
    },
    {//DataSet12
        no: 'NCAA-DS12',
        teamId: true,
        typeId: 519,
        scoreValue: -1,
        Increase: 2,
        rotation: true
    },
    {//DataSet13
        no: 'NCAA-DS13',
        teamId: true,
        typeId: 519,
        scoreValue: -1,
        Increase: 2,
        rotation: true
    },
    {//DataSet14-1
        no: 'NCAA-DS14-1',
        teamId: false,
        typeId: 521,
        scoreValue: -1,
        Increase: false,
        rotation: false
    },
    {//DataSet14-2
        no: 'NCAA-DS14-2',
        teamId: true,
        typeId: 521,
        scoreValue: -1,
        Increase: false,
        rotation: false
    },
    {//DataSet15
        no: 'NCAA-DS15',
        teamId: true,
        typeId: 574,
        scoringPlayStatus: true,
        scoringPlay: true,
        scoreValue: -1,
        Increase: false,
        rotation: false
    },
    {//DataSet16
        no: 'NCAA-DS16',
        teamId: false,
        typeId: 618,
        scoreValue: -1,
        Increase: 1,
        rotation: false
    },
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
    {//DataSet3
        no: 'NHL-DS3-1',
        teamId: false,
        typeId: 506,
        scoreValue: -1,
        Increase: 1,
        rotation: false
    },
    {//DataSet5
        no: 'NHL-DS5',
        teamId: false,
        typeId: 509,
        scoreValue: -1,
        Increase: false,
        rotation: true
    },
    {//DataSet5-1
        no: 'NHL-DS5-1',
        teamId: false,
        typeId: 509,
        scoreValue: -1,
        Increase: false,
        rotation: false
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
    {//DataSet12
        no: 'NHL-DS12',
        teamId: -1,
        typeId: 518,
        scoreValue: -1,
        Increase: false,
        rotation: false
    },
]

export const SOCCER_DS = [
    {//DataSet1
        no: 'SOCCER-DS1',
        teamId: false,
        typeId: 122,
        scoreValue: -1,
        Increase: false,
        rotation: true
    },
    {//DataSet2
        no: 'SOCCER-DS2',
        teamId: true,
        typeId: 122,
        scoreValue: -1,
        Increase: 1,
        rotation: false
    },
    {//DataSet3
        no: 'SOCCER-DS3',
        teamId: false,
        typeId: 68,
        scoreValue: -1,
        Increase: false,
        rotation: true
    },
    {//DataSet4
        no: 'SOCCER-DS4',
        teamId: true,
        typeId: 68,
        scoreValue: -1,
        Increase: 1,
        rotation: false
    },
    {//DataSet7
        no: 'SOCCER-DS7',
        teamId: false,
        typeId: 66,
        scoreValue: -1,
        Increase: false,
        rotation: true
    },
    {//DataSet8
        no: 'SOCCER-DS8',
        teamId: true,
        typeId: 66,
        scoreValue: -1,
        Increase: 1,
        rotation: false
    },
    {//DataSet9
        no: 'SOCCER-DS9',
        teamId: false,
        typeId: false,
        scoreValue: -1,
        Increase: 4,
        rotation: true
    },
    {//DataSet10
        no: 'SOCCER-DS10',
        teamId: true,
        typeId: false,
        scoreValue: -1,
        Increase: false,
        rotation: true
    },
    {//DataSet11
        no: 'SOCCER-DS11',
        teamId: -1,
        typeId: false,
        scoreValue: -1,
        Increase: 3,
        rotation: true
    },
    {//DataSet12
        no: 'SOCCER-DS12',
        teamId: -1,
        typeId: false,
        scoreValue: -1,
        Increase: false,
        rotation: true
    },
    {//DataSet14
        no: 'SOCCER-DS14',
        teamId: -1,
        typeId: false,
        logo: 1,
        scoreValue: -1,
        Increase: 3,
        rotation: true
    },
    {//DataSet15
        no: 'SOCCER-DS15',
        teamId: -1,
        typeId: false,
        scoreValue: -1,
        logo: 2,
        Increase: false,
        rotation: true
    },
    {//DataSet16
        no: 'SOCCER-DS16',
        teamId: false,
        typeId: 136,
        scoreValue: -1,
        Increase: 1,
        rotation: false
    },
    // Not complete 
    {//DataSet17
        no: 'SOCCER-DS17',
        teamId: -1,
        typeId: false,
        scoreValue: -1,
        Increase: false,
        rotation: false
    },
    // Not complete
    {//DataSet21
        no: 'SOCCER-DS21',
        teamId: false,
        typeId: 117,
        scoreValue: -1,
        Increase: false,
        rotation: true
    },
    {//DataSet22
        no: 'SOCCER-DS22',
        teamId: false,
        typeId: 114,
        scoreValue: -1,
        Increase: 3,
        rotation: true
    },
    {//DataSet23
        no: 'SOCCER-DS23',
        teamId: true,
        typeId: 114,
        scoreValue: -1,
        Increase: false,
        rotation: true
    },
    {//DataSet24
        no: 'SOCCER-DS24',
        teamId: false,
        typeId: false,
        scoreValue: -1,
        Increase: 4,
        rotation: true
    },
    {//DataSet25
        no: 'SOCCER-DS25',
        teamId: true,
        typeId: false,
        scoreValue: -1,
        Increase: false,
        rotation: true
    },
    {//DataSet27-1
        no: 'SOCCER-DS27-1',
        teamId: -1,
        typeId: false,
        scoreValue: -1,
        Increase: false,
        rotation: false
    },
    {//DataSet27-2
        no: 'SOCCER-DS27-2',
        teamId: -1,
        typeId: false,
        scoreValue: -1,
        Increase: false,
        rotation: false
    },
    {//DataSet28-1
        no: 'SOCCER-DS28-1',
        teamId: -1,
        typeId: false,
        scoreValue: -1,
        Increase: false,
        rotation: false
    }, {//DataSet28-2
        no: 'SOCCER-DS28-2',
        teamId: -1,
        typeId: false,
        scoreValue: -1,
        Increase: false,
        rotation: false
    },
    {//DataSet28-3
        no: 'SOCCER-DS28-3',
        teamId: -1,
        typeId: false,
        scoreValue: -1,
        Increase: false,
        rotation: false
    },
    {//DataSet28-4
        no: 'SOCCER-DS28-4',
        teamId: -1,
        typeId: false,
        scoreValue: -1,
        Increase: false,
        rotation: false
    },
]

export const NHL2_DS = [
    {//DataSet1
        no: 'NHL2-DS1',
        teamId: false,
        typeId: 502,
        scoreValue: -1,
        Increase: 1,
        rotation: false
    },
    {//DataSet1-2
        no: 'NHL2-DS1-2',
        teamId: true,
        typeId: 502,
        scoreValue: -1,
        Increase: false,
        rotation: false
    },
    {//DataSet2
        no: 'NHL2-DS2',
        teamId: -1,
        typeId: 516,
        scoreValue: -1,
        Increase: false,
        rotation: false
    },
    {//DataSet2
        no: 'NHL2-DS2-1',
        teamId: -1,
        typeId: 516,
        scoreValue: -1,
        Increase: false,
        rotation: true
    },
    {//DataSet2-2
        no: 'NHL2-DS2-2',
        teamId: -1,
        typeId: 516,
        scoreValue: -1,
        Increase: false,
        rotation: true
    },
    {//DataSet2-3
        no: 'NHL2-DS2-3',
        teamId: -1,
        typeId: 519,
        scoreValue: -1,
        Increase: false,
        rotation: false
    },
    {//DataSet2-4
        no: 'NHL2-DS2-4',
        teamId: -1,
        typeId: 519,
        scoreValue: -1,
        Increase: false,
        rotation: true
    },
    {//DataSet3
        no: 'NHL2-DS3',
        teamId: false,
        typeId: 506,
        scoreValue: -1,
        Increase: 2,
        rotation: false
    },
    {//DataSet5
        no: 'NHL2-DS5',
        teamId: false,
        typeId: 509,
        scoreValue: -1,
        Increase: false,
        rotation: true
    },
    {//DataSet6
        no: 'NHL2-DS6',
        teamId: true,
        typeId: 509,
        scoreValue: -1,
        Increase: 1,
        rotation: false
    },
    {//DataSet7
        no: 'NHL2-DS7',
        teamId: false,
        typeId: 505,
        scoreValue: -1,
        Increase: 3,
        rotation: false
    },
    {//DataSet8
        no: 'NHL2-DS8',
        teamId: true,
        typeId: 505,
        scoreValue: -1,
        Increase: false,
        rotation: true
    },
    // {//DataSet9
    //     no: 'NHL2-DS9',
    //     teamId: -1,
    //     typeId: 519,
    //     scoreValue: -1,
    //     Increase: false,
    //     rotation: false
    // },
    {//DataSet11
        no: 'NHL2-DS11',
        teamId: -1,
        typeId: 522,
        scoreValue: -1,
        Increase: false,
        rotation: false
    }
]

export const MLB_DS = [
    {//DS1
        no: 'MLB-DS1',
        teamId: false,
        typeId: 1,
        scoreValue: -1,
        Increase: false,
        rotation: false
    },
    {//DS1-2
        no: 'MLB-DS1-2',
        teamId: true,
        typeId: 1,
        scoreValue: -1,
        Increase: false,
        rotation: false
    },
    {//DS2
        no: 'MLB-DS2',
        teamId: -1,
        typeId: 59,
        scoreValue: -1,
        Increase: false,
        rotation: false
    },
    {//DS2-1
        no: 'MLB-DS2-1',
        teamId: -1,
        typeId: 59,
        scoreValue: -1,
        Increase: false,
        rotation: false
    },
    {//DS3
        no: 'MLB-DS3',
        teamId: false,
        typeId: 57,
        scoreValue: -1,
        Increase: false,
        rotation: true
    },
    {//DS3-2
        no: 'MLB-DS3-2',
        teamId: -1,
        typeId: false,
        scoreValue: -1,
        Increase: false,
        rotation: true
    },
    {//DS4
        no: 'MLB-DS4',
        teamId: false,
        typeId: false,
        scoreValue: -1,
        Increase: false,
        rotation: true
    },
    {//DS6
        no: 'MLB-DS6',
        teamId: false,
        typeId: 57,
        scoreValue: -1,
        Increase: 3,
        rotation: true
    },
    {//DS7
        no: 'MLB-DS7',
        teamId: false,
        typeId: false,
        scoreValue: -1,
        Increase: 1,
        rotation: false
    },
    {//DS8
        no: 'MLB-DS8',
        teamId: false,
        typeId: 57,
        scoreValue: -1,
        Increase: 1,
        rotation: true
    },
    {//DS10
        no: 'MLB-DS10',
        teamId: false,
        typeId: 57,
        scoreValue: -1,
        Increase: 1,
        rotation: true
    },
    {//DS11
        no: 'MLB-DS11',
        teamId: false,
        typeId: 57,
        scoreValue: -1,
        Increase: 3,
        rotation: false
    },
    {//DS11-2
        no: 'MLB-DS11-2',
        teamId: false,
        typeId: false,
        scoreValue: -1,
        Increase: 3,
        rotation: false
    },
    {//DS12
        no: 'MLB-DS12',
        teamId: false,
        typeId: 57,
        scoreValue: -1,
        Increase: 4,
        rotation: false
    },
    {//DS13
        no: 'MLB-DS13',
        teamId: false,
        typeId: 57,
        scoreValue: -1,
        Increase: 5,
        rotation: false
    },
    {//DS14
        no: 'MLB-DS14',
        teamId: false,
        typeId: false,
        scoreValue: -1,
        Increase: 1,
        rotation: false
    },
    {//DS15
        no: 'MLB-DS15',
        teamId: false,
        typeId: false,
        scoreValue: -1,
        Increase: 2,
        rotation: false
    },
    {//DS16
        no: 'MLB-DS16',
        teamId: false,
        typeId: 57,
        scoreValue: -1,
        Increase: 2,
        rotation: false
    },
    {//DS17
        no: 'MLB-DS17',
        teamId: false,
        typeId: false,
        scoreValue: -1,
        Increase: 1,
        rotation: false
    },
    {//DS17-1
        no: 'MLB-DS17-1',
        teamId: false,
        typeId: false,
        scoreValue: -1,
        Increase: 2,
        rotation: false
    },
    {//DS18
        no: 'MLB-DS18',
        teamId: false,
        typeId: 57,
        scoreValue: -1,
        Increase: 1,
        rotation: false
    },
    {//DS19
        no: 'MLB-DS19',
        teamId: false,
        typeId: 57,
        scoreValue: -1,
        Increase: 1,
        rotation: false
    },
    {//DS19-1
        no: 'MLB-DS19-1',
        teamId: false,
        typeId: 57,
        scoreValue: -1,
        Increase: 1,
        rotation: false
    },
    {//DS4-2
        no: 'MLB-DS4-2',
        teamId: true,
        typeId: 57,
        scoreValue: -1,
        Increase: 2,
        rotation: false
    },
    {//DS21
        no: 'MLB-DS21',
        teamId: true,
        typeId: 57,
        scoreValue: -1,
        Increase: 2,
        rotation: true
    },
    {//DS21-1
        no: 'MLB-DS21-1',
        teamId: true,
        typeId: 57,
        scoreValue: -1,
        Increase: 2,
        rotation: true
    },
    {//DS22
        no: 'MLB-DS22',
        teamId: true,
        typeId: 57,
        scoreValue: -1,
        Increase: 4,
        rotation: false
    },
    {//DS23
        no: 'MLB-DS23',
        teamId: true,
        typeId: 57,
        scoreValue: -1,
        Increase: 5,
        rotation: false
    },
    {//DS24
        no: 'MLB-DS24',
        teamId: true,
        typeId: false,
        scoreValue: -1,
        Increase: false,
        rotation: true
    },
    {//DS25
        no: 'MLB-DS25',
        teamId: true,
        typeId: 57,
        scoreValue: -1,
        Increase: false,
        rotation: true
    },
    {//DS26
        no: 'MLB-DS26',
        teamId: true,
        typeId: 57,
        scoreValue: -1,
        Increase: false,
        rotation: true
    },
    {//DS27
        no: 'MLB-DS27',
        teamId: true,
        typeId: 57,
        scoreValue: -1,
        Increase: false,
        rotation: true
    },
    {//DS27-2
        no: 'MLB-DS27-2',
        teamId: true,
        typeId: false,
        scoreValue: -1,
        Increase: false,
        rotation: true
    },
    {//DS28
        no: 'MLB-DS28',
        teamId: true,
        typeId: 57,
        scoreValue: -1,
        Increase: false,
        rotation: true
    },
    {//DS29
        no: 'MLB-DS29',
        teamId: true,
        typeId: false,
        scoreValue: -1,
        Increase: false,
        rotation: true
    },
    {//DS30
        no: 'MLB-DS30',
        teamId: true,
        typeId: false,
        scoreValue: -1,
        Increase: false,
        rotation: true
    },
    {//DS31
        no: 'MLB-DS31',
        teamId: true,
        typeId: false,
        scoreValue: -1,
        Increase: false,
        rotation: true
    },
    {//DS32
        no: 'MLB-DS32',
        teamId: true,
        typeId: false,
        scoreValue: -1,
        Increase: false,
        rotation: true
    },
    {//DS33
        no: 'MLB-DS33',
        teamId: true,
        typeId: false,
        scoreValue: -1,
        Increase: 2,
        rotation: false
    },
]

export const DATASET_TYPE_CATEGORY = {
    NBA: NBA_DS,
    NBA2: NBA2_DS,
    NCAA: NCAA_DS,
    NHL: NHL_DS,
    SOCCER: SOCCER_DS,
    NHL2: NHL2_DS,
    MLB: MLB_DS
}