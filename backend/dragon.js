const TRAITS = require('./traits.json')

const DEFAULT_PROPERTIES = {
    nickname: 'unnamed',
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
    constructor({ birthdate, nickname, traits } = {}) {
        this.birthdate = birthdate || DEFAULT_PROPERTIES.birthdate;
        this.nickname = nickname || DEFAULT_PROPERTIES.nickname;
        this.traits = traits || DEFAULT_PROPERTIES.randomTraits;
    }
}

module.exports = Dragon;