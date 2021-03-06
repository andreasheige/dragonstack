const TRAITS = require('../../data/traits.json')

const DEFAULT_PROPERTIES = {
    dragonId: 'undefined',
    nickname: 'unnamed',
    generationId: undefined,
    get birthdate() {
        return new Date()
    },
    get randomTraits(){
        const traits = [];

        TRAITS.forEach(TRAITS => {
           const traitType = TRAITS.type;
           const traitsValues = TRAITS.values;
           
           const traitsValue = traitsValues[
               Math.floor(Math.random() * traitsValues.length)
            ];

            traits.push({ traitType, traitsValue });
        });

        return traits;
    }
}

class Dragon {
    constructor({ dragonId, birthdate, nickname, traits, generationId } = {}) {
        this.dragonId = dragonId || DEFAULT_PROPERTIES.dragonId;
        this.birthdate = birthdate || DEFAULT_PROPERTIES.birthdate;
        this.nickname = nickname || DEFAULT_PROPERTIES.nickname;
        this.traits = traits || DEFAULT_PROPERTIES.randomTraits;
        this.generationId = generationId || DEFAULT_PROPERTIES.generationId;
    }
}

module.exports = Dragon;