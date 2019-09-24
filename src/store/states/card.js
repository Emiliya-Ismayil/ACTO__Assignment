const Card = {
    label: "", // Shown to the user, also to determine the value
    value: NaN, // Real value, in order to compare
    image: "" // TBD
};

const CARD_TYPES = Object.freeze({
    TWO: "2",
    THREE: "3",
    FOUR: "4",
    FIVE: "5",
    SIX: "6",
    SEVEN: "7",
    EIGHT: "8",
    NINE: "9",
    TEN: "10",
    JACK: "J",
    QUEEN: "Q",
    KING: "K",
    ACE: "A"
});
const CARD_VALUES = Object.freeze({
    TWO: 1,
    THREE: 2,
    FOUR: 3,
    FIVE: 4,
    SIX: 5,
    SEVEN: 6,
    EIGHT: 7,
    NINE: 8,
    TEN: 9,
    JACK: 10,
    QUEEN: 11,
    KING: 12,
    ACE: 13
});

const createCard = label => {
    const currentLabel = typeof label === "string" ? label.toUpperCase() : "";
    const card = { ...Card }; // Don't edit initial state reference
    const currentType = Object.keys(CARD_TYPES).find(type => currentLabel === CARD_TYPES[type]);
    card.label = currentType ? CARD_TYPES[currentType] : card.label;
    card.value = currentType ? CARD_VALUES[currentType] : card.label;
    return card;
};

const generateCard = () => {
    const card = { ...Card };
    const values = Object.values(CARD_VALUES);
    let randomNumber = Math.floor((Math.random() * Math.max(...values)) + Math.min(...values));
    let currentType = Object.keys(CARD_VALUES).find(value => CARD_VALUES[value] === randomNumber);
    const generatedLabel = CARD_TYPES[currentType] || card.label;
    console.log(generatedLabel);
    return createCard(generatedLabel);
}

export {
    Card,
    createCard,
    generateCard,
    CARD_TYPES
}