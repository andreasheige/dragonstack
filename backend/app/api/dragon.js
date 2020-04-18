const { Router } = require('express');
const DragonTable = require('../dragon/table');

const router = new Router();

router.get('/new', (req,res,next) => {
    console.log(`req.app.locals.engine`, req.app.locals.engine);
    console.log(`req.app.locals.engine.generation`, req.app.locals.engine.generation);
 
    const dragon = req.app.locals.engine.generation.newDragon();

    DragonTable.storeDragon(dragon)
        .then(({ dragonId }) => {
            console.log('dragonId', dragonId);

            dragon.dragonId = dragonId;

            res.json({ dragon });
        })
        .catch(error => console.error(error));
});

module.exports = router;
