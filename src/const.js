export const URL = {
    EVENT1:'https://site.api.espn.com/apis/site/v2/sports/basketball/nba/scoreboard',
    EVENT:'https://www.espn.com/nba/schedule',
    BASKETBALL: "https://site.api.espn.com/apis/site/v2/sports/basketball/nba/summary",

    NCAA_EVENT: "https://site.api.espn.com/apis/site/v2/sports/basketball/mens-college-basketball/summary",
    NCAA_SCORE_BOARD: "http://site.api.espn.com/apis/site/v2/sports/basketball/mens-college-basketball/scoreboard" 
    
}

export const SPORTS_CATEGORY = [
    {
        label:'NBA',
        value:1,
    },
    {
        label:'NCAA',
        value:2,
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
    scoreValue: (false: 'No Compare', Int: 'Compare')
    Increase: (false: 'No Increase', Int: 'Increase')
    roataion: (false: 'No Rotation', true: 'Rotation')
*/
export const DATASET_TYPE = [
    {//DataSet1
        teamId: false,
        typeId: 0,
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
    {//DataSet4
        teamId: false,
        typeId: 42,
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
    {//DataSet7-5
        teamId: false,
        typeId: 141,
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
    {//DataSet8
        teamId: false,
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
        rotation: true
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
        teamId: false,
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
        teamId: true, 
        typeId: 44,
        scoreValue: false,
        Increase: -1,
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
        scoreValue: false,
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
    {//DataSet35
        teamId: false,
        typeId: 90,
        scoreValue: -1,
        Increase: false,
        rotation: true
    },
    {//DataSet36
        teamId: false,
        typeId: 87,
        scoreValue: -1,
        Increase: false,
        rotation: true
    },
    {//DataSet37
        teamId: false,
        typeId: 70,
        scoreValue: -1,
        Increase: false,
        rotation: true
    },
    {//DataSet38
        teamId: false,
        typeId: 66,
        scoreValue: -1,
        Increase: false,
        rotation: true
    },
    {//DataSet39
        teamId: false,
        typeId: 71,
        scoreValue: -1,
        Increase: false,
        rotation: true
    },
    {//DataSet40
        teamId: false,
        typeId: 64,
        scoreValue: -1,
        Increase: false,
        rotation: true
    },
    {//DataSet41
        teamId: true,
        typeId: 63,
        scoreValue: false,
        Increase: 1,
        rotation: false
    },
    {//DataSet42
        teamId: true,
        typeId: 86,
        scoreValue: false,
        Increase: 1,
        rotation: false
    },
    {//DataSet42
        teamId: false,
        typeId: 86,
        scoreValue: false,
        Increase: false,
        rotation: true
    },
    {//DataSet43
        teamId: false,
        typeId: 74,
        scoreValue: false,
        Increase: 1,
        rotation: false
    },
    {//DataSet44
        teamId: false,
        typeId: 84,
        scoreValue: false,
        Increase: false,
        rotation: true
    },
    {//DataSet45
        teamId: true,
        typeId: 84,
        scoreValue: false,
        Increase: 2,
        rotation: false
    },
    {//DataSet46
        teamId: false,
        typeId: 22,
        scoreValue: false,
        Increase: false,
        rotation: false
    },
    {//DataSet47
        teamId: true,
        typeId: 22,
        scoreValue: false,
        Increase: 1,
        rotation: false
    }
]

export const DATASET_TYPE1 = [
    {//DataSet1
        teamId: false,
        typeId: false,
        scoreValue: 3,
        Increase: 3,
        rotation: false
    },
    {//DataSet2
        teamId: false,
        typeId: 519,
        scoreValue: false,
        Increase: false,
        rotation: true
    },
    {//DataSet3
        teamId: true,
        typeId: 519,
        scoreValue: false,
        Increase: 1,
        rotation: true
    },
    {//DataSet4
        teamId: false,
        typeId: 574,
        scoreValue: 2,
        Increase: 2,
        rotation: false
    },
    {//DataSet5
        teamId: false,
        typeId: 598,
        scoreValue: false,
        Increase: 1,
        rotation: false
    },
    // {//DataSet6
    //     teamId: false,
    //     typeId: 0,
    //     scoreValue: 3,
    //     Increase: 3,
    //     rotation: false
    // },
    // {//DataSet7
    //     teamId: false,
    //     typeId: 0,
    //     scoreValue: 3,
    //     Increase: 3,
    //     rotation: false
    // },
    // {//DataSet8
    //     teamId: false,
    //     typeId: 0,
    //     scoreValue: 3,
    //     Increase: 3,
    //     rotation: false
    // },
]