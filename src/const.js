export const URL = {
    EVENT1:'https://site.api.espn.com/apis/site/v2/sports/basketball/nba/scoreboard',
    EVENT:'https://www.espn.com/nba/schedule',

    BASKETBALL: "https://site.api.espn.com/apis/site/v2/sports/basketball/nba/summary",
    BASKETBALL_ID_401584705: "https://site.api.espn.com/apis/site/v2/sports/basketball/nba/summary?event=401584705",
}

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

export const DATASET_TYPE = [
    {//DataSet1
        typeId: 0,
        scoreValue: 3,
        Increase: 3,
        rotation: false
    },
    {//DataSet2
        typeId: 45,
        scoreValue: -1,
        Increase: false,
        rotation: true
    },
    {//DataSet3
        typeId: 44,
        scoreValue: -1,
        Increase: false,
        rotation: true
    },
    // {//DataSet4
    //     typeId: 42,
    //     scoreValue: -1,
    //     Increase: false,
    //     rotation: true
    // },
    // {//DataSet5
    //     typeId: 31,
    //     scoreValue: -1,
    //     Increase: false,
    //     rotation: true
    // },
    // {//DataSet6
    //     typeId: 32,
    //     scoreValue: -1,
    //     Increase: false,
    //     rotation: true
    // },
    // {//DataSet7-1
    //     typeId: 96,
    //     scoreValue: 2,
    //     Increase: 2,
    //     rotation: false
    // },
    // {//DataSet7-2
    //     typeId: 116,
    //     scoreValue: 2,
    //     Increase: 2,
    //     rotation: false
    // },
    // {//DataSet7-3
    //     typeId: 115,
    //     scoreValue: 2,
    //     Increase: 2,
    //     rotation: false
    // },
    // {//DataSet7-4
    //     typeId: 150,
    //     scoreValue: 2,
    //     Increase: 2,
    //     rotation: false
    // },
    // {//DataSet7-5
    //     typeId: 141,
    //     scoreValue: 2,
    //     Increase: 2,
    //     rotation: false
    // },
    // {//DataSet7-6
    //     typeId: 118,
    //     scoreValue: 2,
    //     Increase: 2,
    //     rotation: false
    // },
    // {//DataSet7-7
    //     typeId: 138,
    //     scoreValue: 2,
    //     Increase: 2,
    //     rotation: false
    // },
    // {//DataSet8
    //     typeId: 102,
    //     scoreValue: 0,
    //     Increase: 1,
    //     rotation: false
    // },
    // {//DataSet9
    //     typeId: 101,
    //     scoreValue: 1,
    //     Increase: 1,
    //     rotation: true
    // },
    // {//DataSet10
    //     typeId: 98,
    //     scoreValue: 1,
    //     Increase: 1,
    //     rotation: false
    // },
    // {//DataSet11
    //     typeId: 100,
    //     scoreValue: 1,
    //     Increase: 1,
    //     rotation: false
    // },
    // {//DataSet12
    //     typeId: 101,
    //     scoreValue: 1,
    //     Increase: 1,
    //     rotation: false
    // },
    // {//DataSet13
    //     typeId: 100,
    //     scoreValue: 0,
    //     Increase: 1,
    //     rotation: false
    // },
    // {//DataSet14
    //     typeId: 101,
    //     scoreValue: 0,
    //     Increase: 1,
    //     rotation: false
    // },
    // {//DataSet15
    //     typeId: 100,
    //     scoreValue: 0,
    //     Increase: 1,
    //     rotation: false
    // },
    // {//DataSet16
    //     typeId: 98,
    //     scoreValue: 0,
    //     Increase: 1,
    //     rotation: false
    // },
    // {//DataSet17
    //     typeId: 99,
    //     scoreValue: 0,
    //     Increase: 1,
    //     rotation: false
    // },
    // {//DataSet18
    //     typeId: 97,
    //     scoreValue: 0,
    //     Increase: 1,
    //     rotation: false
    // },
    // {//DataSet19
    //     typeId: 103,
    //     scoreValue: 0,
    //     Increase: 1,
    //     rotation: false
    // },
    // {//DataSet20
    //     typeId: 90,
    //     scoreValue: -1,
    //     Increase: 1,
    //     rotation: false
    // },
    // {//DataSet21
    //     typeId: 87,
    //     scoreValue: -1,
    //     Increase: 1,
    //     rotation: false
    // },
    // {//DataSet22
    //     typeId: 70,
    //     scoreValue: -1,
    //     Increase: 1,
    //     rotation: false
    // },
    // {//DataSet23
    //     typeId: 66,
    //     scoreValue: -1,
    //     Increase: 1,
    //     rotation: false
    // },
    // {//DataSet24
    //     typeId: 71,
    //     scoreValue: -1,
    //     Increase: 1,
    //     rotation: false
    // },
    // {//DataSet25
    //     typeId: 64,
    //     scoreValue: -1,
    //     Increase: 1,
    //     rotation: false
    // },
    // {//DataSet26
    //     typeId: 103,
    //     scoreValue: 1,
    //     Increase: 1,
    //     rotation: false
    // },
    // {//DataSet27
    //     typeId: 97,
    //     scoreValue: 1,
    //     Increase: 1,
    //     rotation: true
    // },
    // {//DataSet28
    //     typeId: 102,
    //     scoreValue: 0,
    //     Increase: 0,
    //     rotation: true
    // },
    // {//DataSet29
    //     typeId: 102,
    //     scoreValue: 1,
    //     Increase: 1,
    //     rotation: true
    // },
    // {//DataSet30
    //     typeId: 64,
    //     scoreValue: -1,
    //     Increase: 1,
    //     rotation: false
    // },
    // {//DataSet31
    //     typeId: 97,
    //     scoreValue: 0,
    //     Increase: 0,
    //     rotation: false
    // },
    // {//DataSet32
    //     typeId: 45,
    //     scoreValue: -1,
    //     Increase: 1,
    //     rotation: false
    // },
]
