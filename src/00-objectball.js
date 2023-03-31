const home = gameObject().home
const away = gameObject().away
const players = {...home.players, ...away.players}

console.log("")
numPointsScored("Brendan Haywood")
console.log("")
shoeSize("Reggie Evans")
console.log("")
teamColors("Brooklyn Nets")
console.log("")
teamNames()
console.log("")
playerNumbers("Charlotte Hornets")
console.log("")
playerStats("DeSagna Diop")
console.log("")
bigShoeRebounds()
console.log("")
mostPointsScored()
console.log("")
winningTeam()
console.log("")
doesLongNameStealATon()

function gameObject(){
    const game = {
        home: {
            teamName: "Brooklyn Nets",
            colors: ["black" , "white"],
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
            colors: ["turquoise" , "purple"],
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
    console.log(`${name} scored ${players[name].points} points.`)
}

function shoeSize(name){
    console.log(`${name} wears size ${players[name].shoe} shoes.`)
}

function teamColors(team) {
    const [homeColor1,homeColor2] = home.colors
    const [awayColor1,awayColor2] = away.colors
    if (home.teamName === team)
        console.log(`The ${home.teamName} have ${homeColor1} and ${homeColor2} as their team colors.`)
    else
        console.log(`The ${away.teamName} have ${awayColor1} and ${awayColor2} as their team colors.`)
}

function teamNames(){
    console.log(`The ${home.teamName} are playing the ${away.teamName}.`)
}

function playerNumbers(team){
    const teamNums = []
    if (home.teamName === team)
        for (const player in home.players)
            teamNums.push(home.players[player].number)
    else
        for (const player in away.players)
            teamNums.push(away.players[player].number)
    console.log(`The jersey numbers for the ${team} are ${teamNums.splice(0 , teamNums.length - 1)}, and ${teamNums.slice(-1)}`)
}

function playerStats(name){
    console.log(`${name}'s stats for this game:`)
    console.log(players[name])
}

function bigShoeRebounds(){
    let biggestShoe = players["Alan Anderson"]
    let playerName = "Alan Anderson"
    for (const player in players)
        if (players[player].shoe > biggestShoe.shoe) {
            biggestShoe = players[player]
            playerName = player
        }
    console.log(`${playerName} has big ole feet and had ${biggestShoe.rebounds} rebounds this game.`)
}

function mostPointsScored(){
    let mostPoints = players["Alan Anderson"]
    let playerName = "Alan Anderson"
    for (const player in players)
        if (players[player].points > mostPoints.points) {
            mostPoints = players[player]
            playerName = player
        }
    console.log(`${playerName} was the highest scoring player, with ${mostPoints.points} points this game.`)
}

function winningTeam(){
    let homePoints = 0
    let awayPoints = 0
    for (const player in home.players)
        homePoints += home.players[player].points
    for (const player in away.players)
        awayPoints += away.players[player].points
    if (homePoints > awayPoints)
        console.log(`${home.teamName} win by ${homePoints-awayPoints} points!`)
    else if (awayPoints > homePoints)
        console.log(`${away.teamName} win by ${awayPoints-homePoints} points!`)
    else console.log("We have a tie!")
}

function playerWithLongestName(){
    let longestName = "Alan Anderson"
    for (const player in players)
        if (player.length > longestName.length)
            longestName = player
    console.log(`${longestName} has the longest name.`)
    return longestName
}

function doesLongNameStealATon(){
    let longestName = playerWithLongestName()
    console.log("")
    let mostSteals = players["Alan Anderson"].steals
    for (const player in players)
        if (players[player].steals > mostSteals)
            mostSteals = players[player].steals
    if (players[longestName].steals === mostSteals){
        console.log(`${longestName} has the longest name and the most steals, with ${mostSteals} steals.`)
        console.log("")
        return true
    }
    else {
        console.log(`${longestName} has the longest name, but not the most steals.`)
        console.log("")
        return false
    }
}