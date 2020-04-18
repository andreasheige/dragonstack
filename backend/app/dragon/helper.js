const pool = require('../../databasePool');
const DragonTable = require('./table');
const Dragon = require('./index');

const getDragonWithTraits = ({ dragonId }) => {
    return Promise.all([
        DragonTable.getDragon({ dragonId }),
        new Promise((resolve, reject) => {
            pool.query(
                `SELECT "traitType", "traitValue"
                FROM trait
                INNER JOIN dragonTrait ON trait.id = dragonTrait."traitId"
                WHERE dragonTrait."dragonId" = $1`,
                [dragonId],
                (error, response) => {
                    if (error) return reject(error);

                    resolve(response.rows);
                }
            )
        })
    ])
    .then(([dragon, dragonTraits]) => {
        return new DragonTable({ ...dragon, dragonId, traits: dragonTraits })
    })
    .catch(error => console.error(error));
};

module.exports = { getDragonWithTraits };