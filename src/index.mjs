/* eslint-disable no-magic-numbers */
const nastki = ["dziesięć ", "jedenaście ", "dwanaście ", "trzynaście ", "czternaście ",
    "piętnaście ", "szesnaście ", "siedemnaście ", "osiemnaście ", "dziewiętnaście "];

const jednosci = ["", "jeden ", "dwa ", "trzy ", "cztery ",
    "pięć ", "sześć ", "siedem ", "osiem ", "dziewięć "];
const dziesiatki = ["", "dziesięć ", "dwadzieścia ", "trzydzieści ", "czterdzieści ",
    "pięćdziesiąt ", "sześćdziesiąt ", "siedemdziesiąt ", "osiemdziesiąt ", "dziewięćdziesiąt "];
const setki = ["", "sto ", "dwieście ", "trzysta ", "czterysta ",
    "pięćset ", "sześćset ", "siedemset ", "osiemset ", "dziewięćset "];

const wielkosci = [
    ["", "", "", ""],
    ["", "tysiąc ", "tysiące ", "tysięcy "],
    ["", "milion ", "miliony ", "milionów "],
    ["", "miliard ", "miliardy ", "miliardów "],
    ["", "bilion ", "biliony ", "bilionów "],
    ["", "biliard ", "biliardy ", "biliardów "],
    ["", "trylion ", "tryliony ", "trylionów "],
    ["", "tryliard ", "tryliardy ", "tryliardów "],
    ["", "kwadrylion ", "kwadryliony ", "kwadrylionów "],
];

const convertThreeDigitToString = threeDig => {
    let string = setki[Math.floor(threeDig / 100)];
    const tens = threeDig % 100;
    if (tens > 10 && tens < 20) {
        string += nastki[tens % 10];
    }
    else {
        string += dziesiatki[Math.floor(tens / 10)] + jednosci[tens % 10];
    }
    return string;
};

const addThousandPowerName = (number, power) => {
    let forma;
    if (number > 0) {
        if (number === 1) {
            forma = 1;
        }
        else if (number % 100 > 10 && number % 100 < 20) {
            forma = 3;
        }
        else if (number % 10 > 1 && number % 10 < 5) {
            forma = 2;
        }
        else if (number >= 5) {
            forma = 3;
        }
        return wielkosci[power][forma];
    } return "";
};

const numbersInWords = (number) => {
    if (number === 0) { return "zero"; }
    const digits = number.toString();
    // const chunks = [];
    let string = "";

    for (let index = Math.floor((digits.length - 1) / 3); index >= 0; index--) {
        let threeDig = digits.substring(digits.length - ((index + 1) * 3), digits.length - (index * 3));
        threeDig = parseInt(threeDig, 10);
        string += convertThreeDigitToString(threeDig);
        string += addThousandPowerName(threeDig, index);
    }
    return string.trim();
};

export default numbersInWords;
