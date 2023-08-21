import { Pool } from 'pg'

const postgres = {
  user: 'postgres',
  host: 'db.ufzkwbydugnwpjwnjpdn.supabase.co',
  database: 'postgres',
  password: process.env.POSTGRES_PASSWORD,
  port: 5432,
}

export default async function handler(req, res) {
    const pool = new Pool(postgres);

    const names = usernames.split(',\n');

    let rows = [];
    for(let i = 0; i < names.length; ++i)
        rows.push({
            username: names[i],
            steam_id: randomid(),
            high_score: Math.floor(Math.random() * 80),
            high_score_time: randomtime()
        });

    try {
        await pool.connect();

        for (const row of rows) {
            const query = {
                text: `INSERT INTO scores (steam_id, high_score, username, high_score_time)
                VALUES($1, $2, $3, $4)`,
                values: [row.steam_id, row.high_score, row.username, row.high_score_time]
            };

            await pool.query(query);
            console.log(`Row with steam_id '${row.steam_id}' inserted successfully.`);
        }
    } catch (error) {
        console.error('Error:', error);
    }

    return res.send(rows);
}

function randomid() {
    const characters = 'abcdefghijklmnopqrstuvwxyz0123456789';
    const length = 8;
    let result = '';

    for (let i = 0; i < length; i++) {
        const randomIndex = Math.floor(Math.random() * characters.length);
        result += characters.charAt(randomIndex);
    }

    return result;
}

function randomtime() {
    const currentYear = new Date().getFullYear();
    const yearStart = new Date(currentYear, 0, 1).getTime();
    const currentTime = new Date().getTime();
    
    const randomTimestamp = Math.floor(Math.random() * (currentTime - yearStart)) + yearStart;
    const randomDate = new Date(randomTimestamp);
    
    return randomDate.toISOString(); // Returns the random timestamp in ISO 8601 format
}

const usernames = `user123,
gamer456,
proPlayer789,
steamMaster,
scoreChamp,
gamingWizard,
highScoreHero,
username001,
playerX,
ultimateGamer,
scoreSprinter,
levelUpNow,
victoryGamer,
gameOnPoint,
scoreWarrior,
theGamingPro,
username002,
skillfulGamer,
gamingNinja,
scoreStrategist,
playmaker123,
gamerElite,
victoryKing,
scoreJuggler,
username003,
proGamingChamp,
gamerXpert,
scoreGladiator,
strategyMaster,
gamingLegend,
winLover,
scoreChaser,
username004,
highScoreHustler,
powerPlayer,
theScoreSmith,
gameGuru,
playStationPro,
scoreSculptor,
username005,
epicGamer,
scoreAlchemist,
levelLifter,
gamingVirtuoso,
scoreWhisperer,
username006,
scoreCraftsman,
gamerSavvy,
winMachine,
gamingProdigy,
scoreMaestro,
username007,
strategyGamer,
highScoreHound,
gamingGenius,
scoreSorcerer,
username008,
playerUno,
gameVirtuoso,
scoreArchitect,
username009,
gamingMaestro,
scoreMaestroX,
gamerChampion,
username010,
scoreProdigy,
gamingVirtuosoX,
highScoreMaven,
username011,
gameStrategist,
scoreSensei,
gamingSage,
username012,
scoreNinja,
strategySensei,
gamerSculptor,
username013,
highScoreMaestro,
gamingVirtuosoM,
scoreProdigyX,
username014,
gameProdigy,
scoreChampionX,
gamingEnthusiast,
username015,
highScoreArtist,
gamerVirtuoso,
scoreSculptorX,
username016,
gamingSensei,
scoreMaverick,
proScoreMaster,
username017,
gameWhisperer,
strategySculptor,
gamingAlchemist,
username018,
scoreSenseiX,
gameEnthusiast,
highScoreArtistX,
username019,
gamingArtist,
scoreVirtuoso,
gamerMaverick,
username020,
strategySorcerer,
highScoreWhisperer,
gamingArchitect,
username021,
scoreEnthusiast,
gamerWhisperer,
levelLifterX,
username022,
gamingMaven,
scoreVirtuosoX,
proScoreChampion,
username023,
gameChampionX,
scoreSorcererX,
gamingChampionM,
username024,
strategyProdigy,
highScoreGenius,
gamerAlchemist,
username025,
scoreMaven,
gamingProdigyX,
proScoreVirtuoso,
username026,
gameWhispererX,
scoreWhispererX,
gamingSorcerer,
username027,
strategyChampion,
highScoreEnthusiast,
gamerArchitect,
username028,
scoreArtist,
gamingWhispererM,
levelLifterM,
username029,
gameSorcerer,
scoreGenius,
gamerProdigy,
username030,
strategyWhisperer,
highScoreSorcerer,
gamingVirtuosoL,
username031,
scoreMaverickX,
gamerChampionM,
proScoreProdigy,
username032,
gameMaverick,
scoreChampionM,
gamingGeniusL,
username033,
strategyVirtuoso,
highScoreMavenX,
gamerProdigyL,
username034,
scoreSculptorM,
gamingWhispererL,
levelLifterL,
username035,
gameChampionM,
scoreVirtuosoM,
gamingSorcererL,
username036,
strategyProdigyX,
highScoreGeniusX,
gamerAlchemistL,
username037,
scoreMavenX,
gamingProdigyL,
proScoreVirtuosoX,
username038,
gameWhispererL,
scoreWhispererL,
gamingChampionL,
username039,
strategyChampionM,
highScoreEnthusiastX,
gamerArchitectL,
username040`