Description:
I am looking for someone to parse data from an ESPN data URL feed and translate it into tables. Here is a link to a google doc that explains the project in detail. I've also included a sample script file that is similar to what I want. Please contact me if you have any questions.

https://docs.google.com/document/d/14kfSB7nvbo2A3MiMQZrHg7Q2mSxiJGnwzjuQu1a80Fw/edit?usp=sharing 


#################################################################################################################

What I'd like to do is hire you now so you can start working on this project. But I am only going to ask you do do 2 of the data sets. The reason for this is I want to make sure you understand it correctly and can do it. The payment for the project with only 2 data sets will only be $100. IF you do it correctly, I will create another job that I will pay you $150. For that job I will have you finish the rest of the data sets. There will be about 30 in total.

How does that sound to you?

These are the two data sets I will have you do for the first job.

https://docs.google.com/document/d/1mRZqg55sh-7EBtJnhPP-26sIiaIXqfkFd2AScgbmR_s/edit?usp=sharing

actually I will make the first milestone the two data sets. If you do well on the first milestone I we can continue the project.

#################################################################################################################
-FIRST MILESTONE:

I am looking for someone to parse data from an ESPN data URL feed and translate it into tables. Here is a link to a google doc that explains the project in detail. I've also included a sample script file that is similar to what I want. Please contact me if you have any questions.



This is the full project:
https://docs.google.com/document/d/14kfSB7nvbo2A3MiMQZrHg7Q2mSxiJGnwzjuQu1a80Fw/edit?usp=sharing


This is the first milestone. Completing 2 datasets: 

https://docs.google.com/document/d/1mRZqg55sh-7EBtJnhPP-26sIiaIXqfkFd2AScgbmR_s/edit?usp=sharing

#################################################################################################################

DataSet 1: 3 point shot made Team1 (Team ID 9) = +3 table unit increase
There are multiple id’s for this event, so we use the scorevalue: 3 to identify it. 
{
    "id": "40158541710",
    "sequenceNumber": "10",
    "type": {
        "id": "92",
        "text": "Jump Shot"
    },
    "text": "Draymond Green makes 28-foot three point jumper (Klay Thompson assists)",
    "awayScore": 2,
    "homeScore": 3,
    "period": {
        "number": 1,
        "displayValue": "1st Quarter"
    },
    "clock": {
        "displayValue": "11:16"
    },
    "scoringPlay": true,
    "scoreValue": 3,
    "team": {
        "id": "9"
    },
    "participants": [
        {
            "athlete": {
                "id": "6589"
            }
        },
        {
            "athlete": {
                "id": "6475"
            }
        }
    ],
    "wallclock": "2024-02-15T03:14:25Z",
    "shootingPlay": true,
    "coordinate": {
        "x": 34,
        "y": 27
    }
}

DataSet 4: Team1 (Team ID 9) Made free throw 2 of 2 = +1 unit increase

After the points have been awarded to the current table for this data set, it also triggers an “end of turn” for the table and starts the turn for the next of the table. For example, table1 will earn 1 point and their turn will end. Table2 will begin their turn to earn units. 
{
    "id": "40158541787",
    "sequenceNumber": "87",
    "type": {
        "id": "99",
        "text": "Free Throw - 2 of 2"
    },
    "text": "Kevon Looney makes free throw 2 of 2",
    "awayScore": 16,
    "homeScore": 21,
    "period": {
        "number": 1,
        "displayValue": "1st Quarter"
    },
    "clock": {
        "displayValue": "4:30"
    },
    "scoringPlay": true,
    "scoreValue": 1,
    "team": {
        "id": "9"
    },
    "participants": [
        {
            "athlete": {
                "id": "3155535"
            }
        }
    ],
    "wallclock": "2024-02-15T03:29:16Z",
    "shootingPlay": true,
    "coordinate": {
        "x": -214748340,
        "y": -214748365
    }
}

