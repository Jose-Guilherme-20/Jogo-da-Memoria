const FRONT = "card_front"
const BACK = "card-back"

let apps = [
    'bootstrap',
    'css',
    'electron',
    'firebase',
    'html',
    'javascript',
    'jquery',
    'mongo',
    'node',
    'react'
];

createCardsFromTechs(techs);
function createCardsFromTechs(techs){

    let cards = [];

    for (let tech of techs){
        cards.push(createPairFromTech(tech));
    }

    return cards.flatMap(pair=> pair);
}

function createPairFromTech(tech){

    return [ {
        id:createWithTech(tech),
        icon:tech,
        flipped:false,
    },{
        id: createWithTech(tech),
        icon:tech,
        flipped:false,
    }]
}

