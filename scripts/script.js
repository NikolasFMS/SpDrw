//  Колода карт
const cardsRu = [
    ["усы", "слуховой аппарат", "двойной подбородок", "маска", "*капли для носа", "чешуя", "волосы в носу"],
    ["лошадь", "конкурс", "наушники", "осел  /  ишак", "радио", "рупор / громкоговоритель", "микрофон"],
    ["Причал", "Оазис", "Пароход", "Десерт", "Рафт  /  Рафтинг", "Песок", "Кораблекрушение"],
    ["пряничный домик", "пасхальное яйцо", "*турист", "скалка", "яичница", "веревка", "новый год"],
    ["*гимнаст", "прыжок в высоту", "серфинг / серф", "золото", "горные лыжи", "керлинг", "спортзал"],
    ["колесо обозрения", "*опера", "кино  /  фильм", "американские горки", "клоун", "кукла", "цирк"],
    ["спасательный жилет", "пляж", "соль", "*масло", "берег", "удочка", "водитель"],
    ["сосулька", "шкаф", "космонавт", "айсберг", "бандана", "*северный полюс / арктика", "долина"],
    ["мамонт", "пижама", "лягушка", "фрисби / летающая тарелка", "*мумия", "боулинг", "лиса"],
    ["Барбекю / гриль", "*Олимпийский факел", "Пожарный", "Бревно / полено", "Огонь", "Зажигалка", "Спичечный коробок"],
    ["Арбалет", "Фрукт", "Пингвин", "*Ламбада", "Сани", "Хор", "Скорпион"],
    ["*Танец", "Близнец", "Младенец", "Памперс / подгузник", "Коляска", "Детское питание", "Детская площадка"],
    ["*Страус / эму", "Макияж", "Духи", "Павлин", "Лак для ногтей", "Дезодорант", "Фламинго"],
    ["Ластик", "Школьная доска", "Пенал", "Плеер", "Диджей", "Точилка", "Школа"],
    ["Чай", "Молочный коктейль", "Кофе", "Магазин", "Лавровый венок", "Рынок", "Молоко"],
    ["Осьминог", "Мост", "Рукопожатие", "Кинотеатр", "Швейная машина", "Билет", "Почтовый ящик"],
    ["Ковёр-самолёт", "Тапочка", "Палитра", "Мозг", "Сандалия", "Череп", "Волшебник / маг"],
    ["Губная гармошка", "Рок-группа", "Скрипка", "Лежачий полицейский", "Барабанная палочка", "Дорога", "Бубен"],
    ["тигр", "щенок", "*тарзинка", "трамплин", "кошачья еда", "конкура", "волк"],
    ["туалетная бумага", "*бензопила", "отвертка", "ёршик для унитаза", "ящик для инструментов", "туалет", "дрель"],
    ["двухъярусная кровать", "*кислофон / металлофон", "сон", "отель / гостиница", "пианино", "подушка", "спальный мешок"],
    ["шагомер", "духовка", "фонтан", "*затмение", "сковорода", "статуя / скульптура", "шахматные часы"],
    ["перхоть", "парик", "шлем", "парикмахер", "причёска хвост", "*борьба сумо", "расчёска"],
    ["пирожок", "пекарня", "пончик", "надутый матрас", "вафля", "*подушка безопасности", "блин"],
    ["корень", "сова", "*следопыт", "ресторан / кафе", "дятел", "огород", "пикник"],
    ["клей", "картинг / карт", "мишень", "*прыжок со сцены", "уличный фонарь", "компас", "лифт"],
    ["теплица", "*дельтаплан", "гамак", "парашют", "коралл", "роза", "гриб"],
    ["*млечный путь", "телескоп", "планета", "спидометр", "спутник", "космонавт", "педаль"],
    ["варенье", "бокс", "замок", "*викинг", "золото", "лекарство", "фабрика"],
    ["спагетти / паста", "пицца", "*суши", "гамбургер", "курица", "куриное крылышко", "повар"],
    ["отец / папа", "*париж", "свадьба", "камера", "провод", "созвездие", "пульт"],
    ["*официант", "огурец", "закуска", "брокколи", "колбаса", "листовой салат", "стейк / мясо"],
    ["зубочистка", "поцелуй", "брекеты", "*крик", "стоматолог", "зубная паста", "язык"],
    ["*баба-яга", "золушка", "губка", "чебурашка", "кран", "микки маус", "почтальон"],
    ["рюкзак", "чипсы", "гиппопотам", "защитник", "попкорн", "бутерброд", "*бумеранг"],
    ["мусорка / помойка", "тетрис", "обезьяна", "*аккордеон / баян", "лама", "пазл", "панда"],
    ["*АРФА", "ВАГОНЕТКА", "СОСЕД", "ИНТЕРНЕТ", "ЛУК", "СТЕПЛЕР", "ДЕНЬ РОЖДЕНИЯ"],
    ["КОНДИЦИОНЕР", "БЕЛОСНЕЖКА", "СВИСТОК", "*УРАГАН", "СНОУБОРД", "ФЕН", "ВЕНТИЛЯТОР"],
    ["аквалангист", "камень", "*застёжка-молния", "лава", "изба", "альпинист", "поход / турпоход"],
    ["*СФИНКС", "ЛАБИРИНТ", "ПОПУГАИ", "ПЕШЕХОД", "ВЫКЛЮЧАТЕЛЬ", "ТРОЛЛЬ", "СЧЁТЧИК / СЧЕТНАЯ МАШИНКА"],
    ["ШКАФ / ГАРДЕРОБ", "ТАЙМЕР", "*ТЮРБАН", "СПИННИНГ", "ПАЛЬТО", "ПРАЧЕЧНАЯ", "НАКИДКА / ПЛАЩ"],
    ["дракон", "крыса", "щелкунчик", "динозавр", "белка", "мышеловка", "*ленивец"],
    ["*СОЛНЕЧНАЯ БАТАРЕЯ", "ПРИНЦЕССА", "КРЕМЛЬ", "КОРОЛЕВА", "ФЕХТОВАНИЕ", "КОРОЛЬ", "КВАРТИРА"],
    ["ФЛЕЙТА", "ДВИГАТЕЛЬ", "*САКСОФОН", "ТРУБА", "РОБОТ", "ЭКСКАВАТОР", "БИНОКЛЬ"],
    ["НАРУЧНИКИ", "ПРЫЖОК С ТРАМПЛИНА", "КОНСЕРВЫ", "*ПОДЪЕМНИК", "СКЕЛЕТ", "ПОЛИЦИЯ", "ВОДНЫЕ ЛЫЖИ"],
    ["кукольный домик", "автозаправка", "великан", "эскалатор", "копьё", "*пирсинг", "секундомер"],
    ["*гарпун", "лазер", "солдат", "козёл", "звёздные войны", "охранник", "*водяной пистолет"],
    ["верблюд", "бассейн", "картофель", "пылесос", "гараж", "*сантехник", "настольный теннис"],
    ["привидение", "ведьма", "зомби", "остров", "*атлант", "карта", "амазонка"],
    ["зеркало", "наклоненный пресс", "слюни", "насос", "массаж / массажист", "татуировка", "*рентгеновский снимок"],
    ["баскетбол", "огнетушитель", "калитка", "пожарная машина", "песочный замок", "*ров", "салют / фейерверк"],
    ["электромобиль", "гараж", "стиральная машина", "транспорт", "*караван", "такси", "дтп / авария"],
    ["волейбол", "*водное поло", "бадминтон", "бенгальские огни", "хоккей", "медальон / амулет", "летучая мышь"],
    ["бэтмен", "фанат", "дракула / вампир", "супермен", "*пеликан", "человек-паук", "стадион / арена"],
    ["дождь", "река", "*игра", "водопад", "озеро / пруд", "футбол", "плотина"],
    ["виноград", "русалка", "руины", "песочница", "парад", "*нижнее бельё", "трёхколёсный велосипед"],
    ["морской конёк", "золотая рыбка", "пришелец", "тюлень", "медуза", "*нло / летающая тарелка", "дельфин"],
    ["улитка", "электричка / поезд", "краб", "*станция", "креветка", "трамвай", "метрополитен"],
    ["голубь", "орёл", "*шахта", "гнездо", "чайка", "хомяк", "пещера"],
    ["жук", "комар", "диско-шар", "*титаник", "бабочка", "муравейник", "кузнечик"],
    ["корова", "вор / грабитель", "олень", "кассовый аппарат / касса", "бумажник / кошелёк", "енот", "*лось"],
    ["тёрка", "тост", "скатерть", "салфетка", "*салун / бар / паб", "кухня", "холодильник"],
    ["кресло-качалка", "книга", "шторы / занавески", "компьютер", "*книжный червь", "журнал / газета", "принтер"],
    ["Шоколад", "*Москва", "Жвачка", "Магнит", "Грузовик", "Зоопарк", "Россия"],
    ["Ванна", "Телефонная будка", "Душ", "*Джакузи", "Полотенце", "Селфи", "Покемон"],
    ["Колодец", "Вертолет", "Ферма", "Пилот", "Сарай", "Дрон", "*Дирижабль"],
    ["Семечко", "Кукуруза", "Кора", "Завтрак", "Театр", "*Рулет", "Хлеб"],
    ["Мушкетёр", "Сундук", "Пират", "Морщины", "Капитан", "Пиратский корабль", "*тотем"],
    ["*Дартс", "Аквапарк / Водная горка", "Мыло", "Доктор", "Горка", "Шампунь", "Медсестра"],
    ["Северный медведь", "Пушка", "Мёд", "*Лондон", "Медведь", "Бомба", "Кенгуру"]
]

const cardsEn = [
    ["mustache", "hearing aid", "double chin", "mask", "*nasal drops", "scales", "nose hair"],
    ["horse", "contest", "headphones", "donkey", "radio", "megaphone", "microphone"],
    ["pier", "oasis", "steamship", "dessert", "raft", "sand", "shipwreck"],
    ["gingerbread house", "Easter egg", "*tourist", "rolling pin", "fried egg", "rope", "New Year"],
    ["*gymnast", "high jump", "surfing", "gold", "skiing", "curling", "gym"],
    ["ferris wheel", "*opera", "cinema / movie", "roller coaster", "clown", "doll", "circus"],
    ["life jacket", "beach", "salt", "*oil", "shore", "fishing rod", "driver"],
    ["icicle", "wardrobe", "astronaut", "iceberg", "bandana", "*North Pole / Arctic", "valley"],
    ["mammoth", "pajamas", "frog", "frisbee / flying saucer", "*mummy", "bowling", "fox"],
    ["BBQ / grill", "*Olympic torch", "firefighter", "log", "fire", "lighter", "matchbox"],
    ["crossbow", "fruit", "penguin", "*lambada", "sled", "choir", "scorpion"],
    ["*dance", "twins", "baby", "diaper", "stroller", "baby food", "playground"],
    ["*ostrich / emu", "makeup", "perfume", "peacock", "nail polish", "deodorant", "flamingo"],
    ["eraser", "school board", "pencil case", "player", "DJ", "sharpener", "school"],
    ["tea", "milkshake", "coffee", "store", "laurel wreath", "market", "milk"],
    ["octopus", "bridge", "handshake", "cinema", "sewing machine", "ticket", "mailbox"],
    ["magic carpet", "slipper", "palette", "brain", "sandal", "skull", "wizard / mage"],
    ["harmonica", "rock band", "violin", "speed bump", "drumstick", "road", "tambourine"],
    ["tiger", "puppy", "*Tarzan swing", "trampoline", "cat food", "conquer", "wolf"],
    ["toilet paper", "*chainsaw", "screwdriver", "toilet brush", "toolbox", "toilet", "drill"],
    ["bunk bed", "*xylophone", "sleep", "hotel", "piano", "pillow", "sleeping bag"],
    ["pedometer", "oven", "fountain", "*eclipse", "pan", "statue / sculpture", "chess clock"],
    ["dandruff", "wig", "helmet", "hairdresser", "ponytail", "*sumo wrestling", "comb"],
    ["pie", "bakery", "donut", "inflatable mattress", "waffle", "*airbag", "pancake"],
    ["root", "owl", "*pathfinder", "restaurant / cafe", "woodpecker", "garden", "picnic"],
    ["glue", "karting", "target", "*stage dive", "streetlight", "compass", "elevator"],
    ["greenhouse", "*hang glider", "hammock", "parachute", "coral", "rose", "mushroom"],
    ["*Milky Way", "telescope", "planet", "speedometer", "satellite", "astronaut", "pedal"],
    ["jam", "boxing", "castle", "*Viking", "gold", "medicine", "factory"],
    ["spaghetti / pasta", "pizza", "*sushi", "hamburger", "chicken", "chicken wing", "chef"],
    ["father / dad", "*Paris", "wedding", "camera", "wire", "constellation", "remote control"],
    ["*waiter", "cucumber", "snack", "broccoli", "sausage", "lettuce", "steak / meat"],
    ["toothpick", "kiss", "braces", "*scream", "dentist", "toothpaste", "tongue"],
    ["*Baba Yaga", "Cinderella", "sponge", "Cheburashka", "tap", "Mickey Mouse", "postman"],
    ["backpack", "chips", "hippopotamus", "defender", "popcorn", "sandwich", "*boomerang"],
    ["trash can", "tetris", "monkey", "*accordion", "llama", "puzzle", "panda"],
    ["*harp", "trolley", "neighbor", "internet", "bow", "stapler", "birthday"],
    ["air conditioner", "Snow White", "whistle", "*hurricane", "snowboard", "hair dryer", "fan"],
    ["scuba diver", "stone", "*zipper", "lava", "hut", "climber", "hiking"],
    ["*sphinx", "labyrinth", "parrots", "pedestrian", "switch", "troll", "counter"],
    ["wardrobe", "timer", "*turban", "spinning", "coat", "laundry", "cloak"],
    ["dragon", "rat", "nutcracker", "dinosaur", "squirrel", "mouse trap", "*sloth"],
    ["*solar panel", "princess", "Kremlin", "queen", "fencing", "king", "apartment"],
    ["flute", "engine", "*saxophone", "trumpet", "robot", "excavator", "binoculars"],
    ["handcuffs", "diving board", "canned food", "*lift", "skeleton", "police", "water skis"],
    ["dollhouse", "gas station", "giant", "escalator", "spear", "*piercing", "stopwatch"],
    ["*harpoon", "laser", "soldier", "goat", "star wars", "guard", "*water gun"],
    ["camel", "pool", "potato", "vacuum cleaner", "garage", "*plumber", "ping pong"],
    ["ghost", "witch", "zombie", "island", "*atlas", "map", "amazon"],
    ["mirror", "incline press", "drool", "pump", "massage", "tattoo", "*x-ray"],
    ["basketball", "fire extinguisher", "gate", "fire truck", "sandcastle", "*moat", "fireworks"],
    ["electric car", "garage", "washing machine", "transport", "*caravan", "taxi", "car accident"],
    ["volleyball", "*water polo", "badminton", "sparklers", "hockey", "medallion", "bat"],
    ["Batman", "fan", "Dracula / vampire", "Superman", "*pelican", "Spiderman", "stadium"],
    ["rain", "river", "*game", "waterfall", "lake", "soccer", "dam"],
    ["grapes", "mermaid", "ruins", "sandbox", "parade", "*underwear", "tricycle"],
    ["seahorse", "goldfish", "alien", "seal", "jellyfish", "*UFO", "dolphin"],
    ["snail", "train", "crab", "*station", "shrimp", "tram", "subway"],
    ["pigeon", "eagle", "*mine", "nest", "seagull", "hamster", "cave"],
    ["beetle", "mosquito", "disco ball", "*Titanic", "butterfly", "ant hill", "grasshopper"],
    ["cow", "thief", "deer", "cash register", "wallet", "raccoon", "*moose"],
    ["grater", "toast", "tablecloth", "napkin", "*saloon", "kitchen", "fridge"],
    ["rocking chair", "book", "curtains", "computer", "*bookworm", "magazine", "printer"],
    ["chocolate", "*Moscow", "chewing gum", "magnet", "truck", "zoo", "Russia"],
    ["bathtub", "phone booth", "shower", "*jacuzzi", "towel", "selfie", "Pokemon"],
    ["well", "helicopter", "farm", "pilot", "barn", "drone", "*blimp"],
    ["seed", "corn", "bark", "breakfast", "theater", "*roll", "bread"],
    ["musketeer", "chest", "pirate", "wrinkles", "captain", "pirate ship", "*totem"],
    ["*darts", "water park", "soap", "doctor", "slide", "shampoo", "nurse"],
    ["polar bear", "cannon", "honey", "*London", "bear", "bomb", "kangaroo"]
];

// Объект переводов
const translationsUI = {
    ru: {
        headingPlayers: "Сколько игроков?",
        recommendText: "Рекомендуемое количество игроков: 3 - 7",
        nextInstruction: "Нажмите кнопку 'НАЧАТЬ ИГРУ', чтобы начать игру.",
        roundText: (round) => "РАУНД " + round,
        openCardBtn: "открыть карту",
        loading: "загрузка...",
        languageLabel: "EN",
        countDeck: (deckCount) => `В колоде осталось ${deckCount} карт(ы).`,
        buttonStart: "НАЧАТЬ ИГРУ",
        playerOptions: [
            "3 игрока", "4 игрока", "5 игроков", "6 игроков",
            "7 игроков", "8 игроков", "9 игроков", "10 игроков",
            "11 игроков", "12 игроков", "13 игроков"
        ],
        cards: cardsRu,
        logo: "img/logoRu.png" // Путь к русскому логотипу
    },
    en: {
        headingPlayers: "How many players?",
        recommendText: "Recommended number of players: 3 - 7",
        nextInstruction: "Click 'START GAME' button to start the game.",
        roundText: (round) => "ROUND " + round,
        openCardBtn: "next card",
        loading: "loading...",
        languageLabel: "RU",
        countDeck: (deckCount) => `There are ${deckCount} cards left in the deck.`,
        buttonStart: "START GAME",
        playerOptions: [
            "3 players", "4 players", "5 players", "6 players",
            "7 players", "8 players", "9 players", "10 players",
            "11 players", "12 players", "13 players"
        ],
        cards: cardsEn,
        logo: "img/logoEn.svg" // Путь к английскому логотипу
    }
};

let openCards = [];  //  Индексы открытых карт
let cardIndex = 0;
const logo = document.querySelector(".logo");
const spans = document.querySelectorAll('span');
const roundText = document.querySelector(".round");
const countText = document.querySelector(".deck-count");
const menu = document.querySelector(".menu");
const game = document.querySelector(".app");
const playerSelect = document.getElementById("playerCount");
let currentLang = "ru";
let translation = translationsUI[currentLang];

let round = 1;
let playerCount = null;
let deckCount = null;

//  Звуки игры
const clickSound = new Audio('audio/click.mp3');  //  Звук клика

// Функция для переключения языка
function toggleLanguage() {
    currentLang = document.documentElement.lang === "ru" ? "en" : "ru";
    document.documentElement.lang = currentLang;
    translation = translationsUI[currentLang];
    updateCardText(cardIndex, translation);
}

// Функция для обновления текста в span
function updateCardText(cardIndex, translation) {
    const spans = document.querySelectorAll('span');
    const currentLang = document.documentElement.lang === "ru" ? "ru" : "en";
    const selectedCards = translationsUI[currentLang].cards[cardIndex];

    if (selectedCards) {
        spans.forEach((span, index) => {
            span.textContent = selectedCards[index] || ""; // Добавляем текст или оставляем пустым, если элементов больше, чем карточек
        });
    } else {
        console.error("Invalid card index");
    }
    
    document.getElementById("heading-players").textContent = translation.headingPlayers;
    document.getElementById("recommend-text").textContent = translation.recommendText;
    document.getElementById("next-instruction").textContent = translation.nextInstruction;
    document.getElementById("round-text").textContent = translation.roundText;
    document.getElementById("open-card-btn").textContent = translation.openCardBtn;
    document.querySelector(".overlay.load p").textContent = translation.loading;
    document.querySelector(".lng").textContent = translation.languageLabel;
    document.querySelector(".deck-count").textContent = translation.countDeck;
    document.querySelector(".start").textContent = translation.buttonStart;
    document.querySelector(".round").textContent = translation.roundText(round);
    document.querySelector(".deck-count").textContent = translation.countDeck(deckCount);

    // Обновление логотипа
    logo.style.backgroundImage = `url(${translation.logo})`;

    // Обновление опций выбора игроков
    playerSelect.innerHTML = ""; // Очистка текущих опций
    translation.playerOptions.forEach(option => {
        const optionElement = document.createElement("option");
        optionElement.textContent = option;
        playerSelect.appendChild(optionElement);
    });
}

//  Функция для воспроизведения звука
function playSound(sound) {
    //  Перематываем аудио на начало (если требуется повторное воспроизведение)
    sound.currentTime = 0;
    //  Воспроизводим звук
    sound.play();
}

//  Функция для генерации случайного числа с учётом времени
function ultraRandom(min, max) {
    const now = Date.now();
    const timeBasedRandom = (now % 1000) / 1000;
    const randomValue = (Math.random() + Math.random() * timeBasedRandom - Math.random() * timeBasedRandom);

    //  Гарантируем, что результат находится в пределах min и max
    return Math.floor((Math.abs(randomValue) % 1) * (max - min + 1)) + min;
}

function newCard() {
    //  Проверка: если все карты открыты, то массив обнуляется
    if (openCards.length >= cardsRu.length) {
        openCards = [];
    }
    //  Находим случайный элемент, который еще не был открыт
    do {
        cardIndex = ultraRandom(0, cardsRu.length - 1);
    } while (openCards.includes(cardIndex));

    //  Добавляем индекс открытой карты в массив
    openCards.push(cardIndex);

    updateCardText(cardIndex, translation);
}

function next() {
    playSound(clickSound);
    round++;
    deckCount--;
    if (deckCount === 0) {
        document.querySelector(".deck-count").classList.add('red');
    }
    newCard();
}

function start() {
    playSound(clickSound);

    const inputs = document.querySelectorAll("#playerInputs input");
    playerCount = parseInt(document.getElementById("playerCount").value, 10);
    console.log("Всего ", playerCount, "игроков(а).")

    if (playerCount > 4) {
        deckCount = playerCount * 2;
    } else {
        deckCount = 12;
    }
    updateCardText(cardIndex, translation);
    newCard();
    menu.classList.add('hide');
    game.classList.remove('hide');
}

window.onload = function () {
    const load = document.querySelector('.overlay.load');
    load.classList.add('hide');
}
