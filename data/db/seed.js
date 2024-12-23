db = connect("mongodb://admin:secret@localhost:27017/tmbd_movies");
var data = [
    {
      "overview": "After a shipwreck, an intelligent robot called Roz is stranded on an uninhabited island. To survive the harsh environment, Roz bonds with the island's animals and cares for an orphaned baby goose.",
      "popularity": 4473.701,
      "genre": "Drama",
      "name": "The Wild Robot"
    },
    {
      "overview": "A fading celebrity decides to use a black market drug, a cell-replicating substance that temporarily creates a younger, better version of herself.",
      "popularity": 4130.764,
      "genre": "Comedy",
      "name": "The Substance"
    },
    {
      "overview": "A listless Wade Wilson toils away in civilian life with his days as the morally flexible mercenary, Deadpool, behind him. But when his homeworld faces an existential threat, Wade must reluctantly suit-up again with an even more reluctant Wolverine.",
      "popularity": 2625.566,
      "genre": "Drama",
      "name": "Deadpool & Wolverine"
    },
    {
      "overview": "While scavenging the deep ends of a derelict space station, a group of young space colonizers come face to face with the most terrifying life form in the universe.",
      "popularity": 2321.203,
      "genre": "Animation",
      "name": "Alien: Romulus"
    },
    {
      "overview": "After a mysterious leader imposes his law in a brutal system of vertical cells, a new arrival battles against a dubious food distribution method.",
      "popularity": 1607.689,
      "genre": "Horror",
      "name": "The Platform 2"
    },
    {
      "overview": "In a world where no one speaks, a devout female hunts down a young woman who has escaped her imprisonment. Recaptured by its ruthless leaders, Azrael is due to be sacrificed to pacify an ancient evil deep within the surrounding wilderness.",
      "popularity": 1906.612,
      "genre": "Horror",
      "name": "Azrael"
    },
    {
      "overview": "After a family tragedy, three generations of the Deetz family return home to Winter River. Still haunted by Betelgeuse, Lydia's life is turned upside down when her teenage daughter, Astrid, accidentally opens the portal to the Afterlife.",
      "popularity": 1501.597,
      "genre": "Drama",
      "name": "Beetlejuice Beetlejuice"
    },
    {
      "overview": "Hellboy and a rookie BPRD agent get stranded in 1950s rural Appalachia. There, they discover a small community haunted by witches, led by a local devil with a troubling connection to Hellboy's past: the Crooked Man.",
      "popularity": 1398.728,
      "genre": "Drama",
      "name": "Hellboy: The Crooked Man"
    },
    {
      "overview": "Five years after surviving Art the Clown's Halloween massacre, Sienna and Jonathan are still struggling to rebuild their shattered lives. As the holiday season approaches, they try to embrace the Christmas spirit and leave the horrors of the past behind. But just when they think they're safe, Art returns, determined to turn their holiday cheer into a new nightmare. The festive season quickly unravels as Art unleashes his twisted brand of terror, proving that no holiday is safe.",
      "popularity": 1247.892,
      "genre": "Animation",
      "name": "Terrifier 3"
    },
    {
      "overview": "Gru and Lucy and their girls—Margo, Edith and Agnes—welcome a new member to the Gru family, Gru Jr., who is intent on tormenting his dad. Gru also faces a new nemesis in Maxime Le Mal and his femme fatale girlfriend Valentina, forcing the family to go on the run.",
      "popularity": 1187.775,
      "genre": "Comedy",
      "name": "Despicable Me 4"
    },
    {
      "overview": "Teenager Riley's mind headquarters is undergoing a sudden demolition to make room for something entirely unexpected: new Emotions! Joy, Sadness, Anger, Fear and Disgust, who’ve long been running a successful operation by all accounts, aren’t sure how to feel when Anxiety shows up. And it looks like she’s not alone.",
      "popularity": 1073.824,
      "genre": "Comedy",
      "name": "Inside Out 2"
    },
    {
      "overview": "Jonard is having trouble making ends meet. His mother is suffering from depression, and he and his sister are forced to quit school in order to take care of her. One day, Jonard meets up his friend Rodel, and Rodel introduces him to the world of massage parlors. Rodel teaches him massage, and brings him to Heavenly Touch, a syndicate-run massage parlor that mostly caters to homosexuals.",
      "popularity": 623.488,
      "genre": "Animation",
      "name": "Heavenly Touch"
    },
    {
      "overview": "When top hitman Joe Flood is diagnosed with a terminal illness, he decides to take matters into his own hands – by taking a hit out on himself. But when the very hitmen he hired also target his ex-girlfriend, he must fend off an army of assassin colleagues and win back the love of his life before it's too late.",
      "popularity": 838.708,
      "genre": "Horror",
      "name": "The Killer's Game"
    },
    {
      "overview": "Due to sudden deteriorating weather conditions, visibility on the Airport Bridge is severely impaired, leaving people stranded and at risk of the bridge collapsing due to a series of chain collisions and explosions. Amidst the chaos, the canine subjects \"Echo\" from the military experiment \"Project Silence,\" who were being transported in secret, break free, and all human survivors become targets of relentless attacks.",
      "popularity": 820.777,
      "genre": "Drama",
      "name": "Project Silence"
    },
    {
      "overview": "20 years after the events of Transmorphers, a newer, more advanced species of alien robot descends on a rebuilt Earth, threatening once again to destroy the planet.",
      "popularity": 827.559,
      "genre": "Animation",
      "name": "Transmorphers: Mech Beasts"
    },
    {
      "overview": "While struggling with his dual identity, Arthur Fleck not only stumbles upon true love, but also finds the music that's always been inside him.",
      "popularity": 757.484,
      "genre": "Comedy",
      "name": "Joker: Folie à Deux"
    },
    {
      "overview": "As an evil takes over the world beyond their front doorstep, the only protection for a mother and her twin sons is their house and their family’s protective bond.",
      "popularity": 727.558,
      "genre": "Horror",
      "name": "Never Let Go"
    },
    {
      "overview": "Soulmates Eric and Shelly are brutally murdered when the demons of her dark past catch up with them. Given the chance to save his true love by sacrificing himself, Eric sets out to seek merciless revenge on their killers, traversing the worlds of the living and the dead to put the wrong things right.",
      "popularity": 726.855,
      "genre": "Horror",
      "name": "The Crow"
    },
    {
      "overview": "After their late former Captain is framed, Lowrey and Burnett try to clear his name, only to end up on the run themselves.",
      "popularity": 641.708,
      "genre": "Drama",
      "name": "Bad Boys: Ride or Die"
    },
    {
      "overview": "Wrongfully convicted of murder, a clumsy electronics salesman faces police corruption and criminal conspiracies in an attempt to prove his innocence.",
      "popularity": 641.329,
      "genre": "Drama",
      "name": "Trouble"
    }
  ]
  ; 
db.movies.insertMany(data);