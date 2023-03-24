function gameObject(){
    const game = {
        home: {
            teamName: "Brooklyn Nets",
            colors: ["Black" , "White"],
            players: {
                "Alan Anderson": {
                    number: 0,
                    shoe: 16,
                    points: 22,
                    rebounds: 12,
                    assists: 12,
                    steals: 3,
                    blocks: 1,
                    slamDunks: 1
                },
                "Reggie Evans": {
                    number: 30,
                    shoe: 14,
                    points: 12,
                    rebounds: 12,
                    assists: 12,
                    steals: 12,
                    blocks: 12,
                    slamDunks: 7,
                },
                "Brook Lopez": {
                    number: 11,
                    shoe: 17,
                    points: 17,
                    rebounds: 19,
                    assists: 10,
                    steals: 3,
                    blocks: 1,
                    slamDunks: 15
                },
                "Mason Plumlee": {
                    number: 1,
                    shoe: 19,
                    points: 26,
                    rebounds: 12,
                    assists: 6,
                    steals: 3,
                    blocks: 8,
                    slamDunks: 5
                },
                "Jason Terry": {
                    number: 31,
                    shoe: 15,
                    points: 19,
                    rebounds: 2,
                    assists: 2,
                    steals: 4,
                    blocks: 11,
                    slamDunks: 1
                }
            }
        },
        away: {
            teamName: "Charlotte Hornets",
            colors: ["Turquoise" , "Purple"],
            players: {
                "Jeff Adrien": {
                    number: 4,
                    shoe: 18,
                    points: 10,
                    rebounds: 1,
                    assists: 1,
                    steals: 2,
                    blocks: 7,
                    slamDunks: 2
                },
                "Bismak Biyombo": {
                    number: 0,
                    shoe: 16,
                    points: 12,
                    rebounds: 4,
                    assists: 7,
                    steals: 7,
                    blocks: 15,
                    slamDunks: 10
                },
                "DeSagna Diop": {
                    number: 2,
                    shoe: 14,
                    points: 24,
                    rebounds: 12,
                    assists: 12,
                    steals: 4,
                    blocks: 5,
                    slamDunks: 5
                },
                "Ben Gordon": {
                    number: 8,
                    shoe: 15,
                    points: 33,
                    rebounds: 3,
                    assists: 2,
                    steals: 1,
                    blocks: 1,
                    slamDunks: 0
                },
                "Brendan Haywood": {
                    number: 33,
                    shoe: 15,
                    points: 6,
                    rebounds: 12,
                    assists: 12,
                    steals: 22,
                    blocks: 5,
                    slamDunks: 12
                },
            }
        }
    }
    return game
}

function numPointsScored(name){
    const obj = gameObject()
    for (let gameKey in obj){
        const playersObj = obj[gameKey]["players"]
        if (playersObj[name]) {
            let player = playersObj[name]
            return player["points"]
        }
    }
}

function shoeSize(name){
    const obj = gameObject()
    for (let gameKey in obj){
        let teamObj = obj[gameKey]
        let playersObj = teamObj["players"]
        if (playersObj[name]) {
            let player = playersObj[name]
            return player["shoe"]
        }
    }
}

function teamColors(team) {
    const obj = gameObject()
    for (let gameKey in obj){
        let teamObj = obj[gameKey]
        if (teamObj["teamName"] === team) {
            return teamObj["colors"]
        }
    }
}

function teamNames(){
    const obj = gameObject()
    const teamNames = []
    for (let gameKey in obj){
        let teamObj = obj[gameKey]
        teamNames.push(teamObj["teamName"])
    }
    return teamNames
}

function playerNumbers(team){
    const obj = gameObject()
    const jerseyNumbers = []
    for (let gameKey in obj){
        const teamObj = obj[gameKey]
        if (teamObj["teamName"] === team) {
            const playersObj = teamObj["players"]
            for (let playerKey in playersObj) {
                const player = playersObj[playerKey]
                jerseyNumbers.push(player["number"])
            }
        }
    }
    return jerseyNumbers
}

function playerStats(name){
    const obj = gameObject()
    for (let gameKey in obj){
        const playersObj = obj[gameKey]["players"]
        if (playersObj[name]) {
            const stats = playersObj[name]
            return stats
        }
    }
}


console.log(`Brendan Haywood scored ${numPointsScored("Brendan Haywood")} points`)
console.log(`Reggie Evans wears size ${shoeSize("Reggie Evans")} shoes`)
console.log(`Charlotte Hornets' team colors are ${teamColors("Charlotte Hornets")}.`)
console.log(`The teams playing in this game: ${teamNames()}`)
console.log(`The numbers of the players on Charlotte Hornets are: ${playerNumbers("Charlotte Hornets")}.`)
console.log("DeSagna Diop's stats are: " + playerStats("DeSagna Diop"))
/* JUNK CODE

function numPointsScored(name){
    let gameObj = gameObject()
    for (let gameKey in gameObj){
        let teamObj = gameObj[gameKey]
        for (let teamKey in teamObj){
            if (teamKey === "players"){
                let playerObj = teamObj[teamKey]
                for (let playerKey in playerObj){
                    if (playerKey === name){
                        let statObj = playerObj[playerKey]
                        for (let statKey in statObj){
                            if (statKey === "points") {
                                return statObj[statKey]
                            }
                        }
                    }
                }
            }
        }
    }
}

function shoeSize(name){
    let gameObj = gameObject()
    for (let gameKey in gameObj){
        let teamObj = gameObj[gameKey]
        for (let teamKey in teamObj){
            if (teamKey === "players"){
                let playerObj = teamObj[teamKey]
                for (let playerKey in playerObj){
                    if (playerKey === name){
                        let statObj = playerObj[playerKey]
                        for (let statKey in statObj){
                            if (statKey === "shoe") {
                                return statObj[statKey]
                            }
                        }
                    }
                }
            }
        }
    }
} 
*/