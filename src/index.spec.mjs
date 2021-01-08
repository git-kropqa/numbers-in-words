import numbersInWords from "./index.mjs";

/* Values over MAX_SAFE_INTEGER are not tested */

describe("Numbers in words (PL)", () => {
    it("działa dla zera", () => {
        must(numbersInWords(0)).equal("zero");
    });
    it("działa dla jedności", () => {
        must(numbersInWords(1)).equal("jeden");
        must(numbersInWords(2)).equal("dwa");
        must(numbersInWords(3)).equal("trzy");
        must(numbersInWords(4)).equal("cztery");
        must(numbersInWords(5)).equal("pięć");
        must(numbersInWords(6)).equal("sześć");
        must(numbersInWords(7)).equal("siedem");
        must(numbersInWords(8)).equal("osiem");
        must(numbersInWords(9)).equal("dziewięć");
    });
    it("działa dla nastek", () => {
        must(numbersInWords(11)).equal("jedenaście");
        must(numbersInWords(12)).equal("dwanaście");
        must(numbersInWords(13)).equal("trzynaście");
        must(numbersInWords(14)).equal("czternaście");
        must(numbersInWords(15)).equal("piętnaście");
        must(numbersInWords(16)).equal("szesnaście");
        must(numbersInWords(17)).equal("siedemnaście");
        must(numbersInWords(18)).equal("osiemnaście");
        must(numbersInWords(19)).equal("dziewiętnaście");
    });
    it("działa dla dziesiątek", () => {
        must(numbersInWords(10)).equal("dziesięć");
        must(numbersInWords(20)).equal("dwadzieścia");
        must(numbersInWords(30)).equal("trzydzieści");
        must(numbersInWords(40)).equal("czterdzieści");
        must(numbersInWords(50)).equal("pięćdziesiąt");
        must(numbersInWords(60)).equal("sześćdziesiąt");
        must(numbersInWords(70)).equal("siedemdziesiąt");
        must(numbersInWords(80)).equal("osiemdziesiąt");
        must(numbersInWords(90)).equal("dziewięćdziesiąt");
    });
    it("działa dla setek", () => {
        must(numbersInWords(100)).equal("sto");
        must(numbersInWords(200)).equal("dwieście");
        must(numbersInWords(300)).equal("trzysta");
        must(numbersInWords(400)).equal("czterysta");
        must(numbersInWords(500)).equal("pięćset");
        must(numbersInWords(600)).equal("sześćset");
        must(numbersInWords(700)).equal("siedemset");
        must(numbersInWords(800)).equal("osiemset");
        must(numbersInWords(900)).equal("dziewięćset");
        must(numbersInWords(901)).equal("dziewięćset jeden");
        must(numbersInWords(911)).equal("dziewięćset jedenaście");
        must(numbersInWords(921)).equal("dziewięćset dwadzieścia jeden");
    });
    it("działa dla tysięcy", () => {
        must(numbersInWords(1000)).equal("jeden tysiąc");
        must(numbersInWords(2000)).equal("dwa tysiące");
        must(numbersInWords(3000)).equal("trzy tysiące");
        must(numbersInWords(4000)).equal("cztery tysiące");
        must(numbersInWords(5000)).equal("pięć tysięcy");
        must(numbersInWords(6000)).equal("sześć tysięcy");
        must(numbersInWords(7000)).equal("siedem tysięcy");
        must(numbersInWords(8000)).equal("osiem tysięcy");
        must(numbersInWords(9000)).equal("dziewięć tysięcy");
        must(numbersInWords(9001)).equal("dziewięć tysięcy jeden");
        must(numbersInWords(9015)).equal("dziewięć tysięcy piętnaście");
        must(numbersInWords(9315)).equal("dziewięć tysięcy trzysta piętnaście");
        must(numbersInWords(10315)).equal("dziesięć tysięcy trzysta piętnaście");
        must(numbersInWords(50003)).equal("pięćdziesiąt tysięcy trzy");
    });
    it("działa dla milionów", () => {
        must(numbersInWords(1000000)).equal("jeden milion");
        must(numbersInWords(2000000)).equal("dwa miliony");
        must(numbersInWords(3000000)).equal("trzy miliony");
        must(numbersInWords(4000000)).equal("cztery miliony");
        must(numbersInWords(5000000)).equal("pięć milionów");
        must(numbersInWords(6000000)).equal("sześć milionów");
        must(numbersInWords(7000000)).equal("siedem milionów");
        must(numbersInWords(8000000)).equal("osiem milionów");
        must(numbersInWords(9000000)).equal("dziewięć milionów");
        must(numbersInWords(1009001)).equal("jeden milion dziewięć tysięcy jeden");
        must(numbersInWords(3009015)).equal("trzy miliony dziewięć tysięcy piętnaście");
        must(numbersInWords(5009315)).equal("pięć milionów dziewięć tysięcy trzysta piętnaście");
        must(numbersInWords(7013315)).equal("siedem milionów trzynaście tysięcy trzysta piętnaście");
        must(numbersInWords(9050003)).equal("dziewięć milionów pięćdziesiąt tysięcy trzy");
    });
    it("działa dla miliardów", () => {
        must(numbersInWords(1000000000)).equal("jeden miliard");
        must(numbersInWords(2000000000)).equal("dwa miliardy");
        must(numbersInWords(3000000000)).equal("trzy miliardy");
        must(numbersInWords(4000000000)).equal("cztery miliardy");
        must(numbersInWords(5000000000)).equal("pięć miliardów");
        must(numbersInWords(6000000000)).equal("sześć miliardów");
        must(numbersInWords(7000000000)).equal("siedem miliardów");
        must(numbersInWords(8000000000)).equal("osiem miliardów");
        must(numbersInWords(9000000000)).equal("dziewięć miliardów");
        must(numbersInWords(1001009001)).equal("jeden miliard jeden milion dziewięć tysięcy jeden");
        must(numbersInWords(3033009015)).equal("trzy miliardy trzydzieści trzy miliony dziewięć tysięcy piętnaście");
        must(numbersInWords(5015009315)).equal(
            "pięć miliardów piętnaście milionów dziewięć tysięcy trzysta piętnaście",
        );
        must(numbersInWords(8237013315)).equal(
            "osiem miliardów dwieście trzydzieści siedem milionów trzynaście tysięcy trzysta piętnaście",
        );
        must(numbersInWords(9199050003)).equal(
            "dziewięć miliardów sto dziewięćdziesiąt dziewięć milionów pięćdziesiąt tysięcy trzy",
        );
    });
    it("działa dla bilionów", () => {
        must(numbersInWords(1000000000000)).equal("jeden bilion");
        must(numbersInWords(2000000000000)).equal("dwa biliony");
        must(numbersInWords(3000000000000)).equal("trzy biliony");
        must(numbersInWords(4000000000000)).equal("cztery biliony");
        must(numbersInWords(5000000000000)).equal("pięć bilionów");
        must(numbersInWords(6000000000000)).equal("sześć bilionów");
        must(numbersInWords(7000000000000)).equal("siedem bilionów");
        must(numbersInWords(8000000000000)).equal("osiem bilionów");
        must(numbersInWords(9000000000000)).equal("dziewięć bilionów");
        must(numbersInWords(1000001009001)).equal("jeden bilion jeden milion dziewięć tysięcy jeden");
        must(numbersInWords(3000033009015)).equal("trzy biliony trzydzieści trzy miliony dziewięć tysięcy piętnaście");
        must(numbersInWords(5001105009315)).equal(
            "pięć bilionów jeden miliard sto pięć milionów dziewięć tysięcy trzysta piętnaście",
        );
        must(numbersInWords(8018237013315)).equal(
            "osiem bilionów osiemnaście miliardów dwieście trzydzieści siedem milionów trzynaście tysięcy "
            + "trzysta piętnaście",
        );
        must(numbersInWords(9011099050003)).equal(
            "dziewięć bilionów jedenaście miliardów dziewięćdziesiąt dziewięć milionów pięćdziesiąt tysięcy trzy",
        );
    });
    it("działa dla biliardów", () => {
        must(numbersInWords(1000000000000000)).equal("jeden biliard");
        must(numbersInWords(2000000000000000)).equal("dwa biliardy");
        must(numbersInWords(3000000000000000)).equal("trzy biliardy");
        must(numbersInWords(4000000000000000)).equal("cztery biliardy");
        must(numbersInWords(5000000000000000)).equal("pięć biliardów");
        must(numbersInWords(6000000000000000)).equal("sześć biliardów");
        must(numbersInWords(7000000000000000)).equal("siedem biliardów");
        must(numbersInWords(8000000000000000)).equal("osiem biliardów");
        must(numbersInWords(9000000000000000)).equal("dziewięć biliardów");
        must(numbersInWords(1111000001009001)).equal("jeden biliard sto jedenaście bilionów jeden milion "
            + "dziewięć tysięcy jeden",
        );
        must(numbersInWords(3103000033009015)).equal("trzy biliardy sto trzy biliony trzydzieści trzy miliony "
            + "dziewięć tysięcy piętnaście",
        );
        must(numbersInWords(5155001105009315)).equal(
            "pięć biliardów sto pięćdziesiąt pięć bilionów jeden miliard sto pięć milionów dziewięć tysięcy "
            + "trzysta piętnaście",
        );
        must(numbersInWords(8008018237013315)).equal(
            "osiem biliardów osiem bilionów osiemnaście miliardów dwieście trzydzieści siedem milionów "
            + "trzynaście tysięcy trzysta piętnaście",
        );
        must(numbersInWords(9007011099050003)).equal(
            "dziewięć biliardów siedem bilionów jedenaście miliardów dziewięćdziesiąt dziewięć milionów "
            + "pięćdziesiąt tysięcy trzy",
        );
    });
});
