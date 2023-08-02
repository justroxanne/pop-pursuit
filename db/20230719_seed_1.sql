USE `pop_pursuit`;

-- Categories --

INSERT INTO category (name) VALUES ('Jeux vidéo'), ('Films'), ('Musique'), ('Dessins animés'), ('Séries');

-- Questions --

INSERT INTO question (text, category_id) VALUES ('Quel jeu vidéo légendaire met en scène un plombier italien qui doit sauver une princesse ?', 1), ('Dans quel jeu de rôle peut-on incarner un aventurier du nom de Link ?', 1), ('Quel jeu de tir futuriste à la première personne est célèbre pour ses nombreux titres et son mode multijoueur compétitif ?', 1), ('Quelle franchise de jeux de rôle est connue pour son univers SF futuriste et ses personnages emblématiques comme Shepard ?', 1), ('Quel jeu de construction et de survie permet aux joueurs de créer leur propre monde avec des blocs ?', 1), ('Quelle série de jeux de combat est connue pour ses personnages emblématiques tels que Ryu et Ken ?', 1), ('Comment s\'appelle l\'héroïne de la série de jeux Tomb Raider ?', 1), ('Quel jeu de rôle massivement multijoueur en ligne propose des races telles que les orcs, les elfes et les humains dans un monde fantastique ?', 1), ('Dans quel jeu vidéo d\'action-aventure incarne-t-on Kratos, un guerrier spartiate cherchant à se venger des dieux de l\'Olympe ?', 1), ('Quelle franchise de jeux de rôle est connue pour son univers médiéval-fantastique et son fameux "Fus Ro Dah" ?', 1), ('Quel film de science-fiction légendaire de 1977 met en scène un orphelin et sa famille ?', 2), ('Dans quel film de 1985 un adolescent voyage-t-il dans le temps à bord d\'une DeLorean ?', 2), ('Quel film d\'action de 2014 met en scène Keanu Reeves dans le rôle d\'un ancien tueur à gages ?', 2), ('Dans quel film une jeune fille prénommée Dorothy se retrouve-t-elle dans un monde étrange en suivant la route de briques jaunes ?', 2), ('Dans quel film de science-fiction un vaisseau spatial est-il envahi par des créatures extraterrestres meurtrières ?', 2), ('Quel film d\'aventure met en scène un archéologue surnommé Indie à la recherche d\'artefacts précieux ?', 2), ('Quelle trilogie cinématographique suit les aventures de deux comparses prêts à tout pour détruire une bague en or ?', 2), ('Dans quel film "All work and no play make Jack a dull boy" ?', 2), ('Quel est le moyen d\'identification dans le film le Cinquième Elément ?', 2), ('Qui a réalisé Titanic ?', 2), ('Quel chanteur américain est surnommé le "Roi de la Pop" ?', 3), ('Quel groupe britannique est connu pour ses tubes comme "Bohemian Rhapsody" et "We Will Rock You" ?', 3), ('Quelle chanteuse a interprété des hits tels que "Umbrella", "Diamonds" et "We Found Love" ?', 3), ('Quelle chanteuse a été surnommée "Queen of Pop" et est connue pour des chansons comme "Like a Virgin" ?', 3), ('Quel groupe de rock légendaire a sorti l\'album "Stairway to Heaven" ?', 3), ('Quel chanteur canadien est devenu célèbre grâce à des chansons telles que "Baby" et "Sorry" ?', 3), ('Quel artiste a remporté 21 Grammy Awards et est connu pour des albums tels que "The College Dropout" et "My Beautiful Dark Twisted Fantasy" ?', 3), ('Quel groupe de K-pop a lancé les titres mondialement connus "DNA", "Boy With Luv" et "Dynamite" ?', 3), ('Quelle chanteuse britannique est célèbre pour sa voix puissante et ses tubes tels que "Rolling in the Deep" et "Someone Like You" ?', 3), ('Quelle chanteuse américaine est connue pour des hits comme "Bad Romance" et "Poker Face" ?', 3), ('Quel dessin animé met en scène un groupe d\'amis vivant à Bikini Bottom ?', 4), ('Quel est le premier long métrage d\'animation produit par Walt Disney Animation Studios et sorti en 1937 ?', 4), ('Quelle princesse Disney cherche à s\'échapper de la tour d\'un sorcier avec l\'aide d\'un bandit du nom de Flynn Rider ?', 4), ('Dans quel film d\'animation Disney une jeune fille intrépide découvre une cité cachée au milieu de la jungle et se lie d\'amitié avec un jeune homme élevé par des gorilles ?', 4), ('Quel film d\'animation Disney suit les aventures d\'un jeune garçon et de son chien, accompagnés d\'une bande de chiens errants, à la recherche de leur maison ?', 4), ('Dans quelle série animée Sasha prétend au titre de meilleur dresseur ?', 4), ('Dans quel dessin animé peut-on manger les meilleures gougères aux épinards ?', 4), ('Combien de soeurs à Ariel ?', 4), ('Que met Merlin en premier dans son sac quand il fait ses bagages lors de la chanson « Higitus Figitus » ?', 4), ('Avec qui doit se marier Pocahontas ?', 4), ('Quelle série télévisée suit les aventures d\'un écrivain aidant la police de New York à résoudre des enquêtes criminelles ?', 5), ('Dans quelle série télévisée un professeur de chimie devient-il un puissant baron de la drogue après avoir été diagnostiqué d\'un cancer en phase terminale ?', 5), ('Dans quelle série télévisée des amis vivent-ils leurs vies dans un café de New York situé à Manhattan ?', 5), ('Quel est le QI de Malcolm ?', 5), ('Quelle série télévisée suit les aventures d\'une famille vivant dans la petite ville de Springfield ?', 5), ('Dans la série télévisée "Game of Thrones", quel est le nom du chien géant qui accompagne Jon Snow au-delà du Mur ?', 5), ('Quel est le prénom du stagiaire dans la série "The Office" ?', 5), ('Qui a incarné le premier Doctor Who ?', 5), ('Quel est le nom du bar dans la série "How I Met Your Mother" ?', 5), ('Quel est le plat préféré d\'Eleven ?', 5);


-- Answers --

INSERT INTO answer (text, is_good_answer, question_id) VALUES ('Sonic', 0, 1), ('Super Mario', 1, 1), ('The Legend of Zelda', 0, 1), ('Final Fantasy VII', 0, 2), ('Pokemon', 0, 2), ('The Legend of Zelda', 1, 2), ('Counter-Strike', 0, 3), ('Call of Duty', 0, 3), ('Halo', 1, 3), ('Mass Effect', 1, 4), ('Fallout', 0, 4), ('The Elder Scrolls', 0, 4), ('Minecraft', 1, 5), ('Terraria', 0, 5), ('Fortnite', 0, 5), ('Teken', 0, 6), ('Street Fighter', 1, 6), ('Mortal Kombat', 0, 6), ('Lara Croft', 1, 7), ('Samus Aran', 0, 7), ('Chun-Li', 0, 7), ('Guild Wars', 0, 8), ('World of Warcraft', 1, 8), ('League of Legend', 0, 8), ('God of War', 1, 9), ('Assassin\'s Creed', 0, 9), ('Prince of Persia', 0, 9), ('The Witcher', 0, 10), ('Dragon Age', 0, 10), ('The Elder Scrolls', 1, 10), ('Star Wars', 1, 11), ('Star Trek', 0, 11), ('Starship Troopers', 0, 11), ('La machine à explorer le temps', 0, 12), ('Retour vers le futur', 1, 12), ('Adam à travers le temps', 0, 12),
('Constantine', 0, 13), ('Matrix', 0, 13), ('John Wick', 1, 13), ('Le Magicien d\'Oz', 1, 14), ('Alice au pays des merveilles', 0, 14), ('Le Monde de Narnia', 0, 14), ('Predator', 0, 15), ('Alien', 1, 15), ('Independence Day', 0, 15), ('Le trésor des templiers', 0, 16), ('Tomb Raider', 0, 16), ('Les aventuriers de l\'arche perdue', 1, 16),  ('Le Hobbit', 0, 17), ('Le Roi Arthur', 0, 17), ('Le Seigneur des Anneaux', 1, 17), ('The Shining', 1, 18), ('The Thing', 0, 18), ('The Mist', 0, 18), ('Passeport', 0, 19), ('Multipass', 1, 19), ('Scan rétinien', 0, 19), ('James Cameron', 1, 20), ('Steven Spielberg', 0, 20), ('George Lucas', 0, 20), ('Prince', 0, 21), ('Elvis Presley', 0, 21), ('Michael Jackson', 1, 21), ('The Beatles', 0, 22), ('Queen', 1, 22), ('The Rolling Stones', 0, 22), ('Beyoncé', 0, 23), ('Rihanna', 1, 23), ('Alicia Keys', 0, 23), ('Madonna', 1, 24), ('Britney Spears', 0, 24), ('Lady Gaga', 0, 24), ('ACDC', 0, 25), ('Pink Floyd', 0, 25), ('Led Zeppelin', 1, 25), ('Justin Bieber', 1, 26), ('Drake', 0, 26), ('Eminem', 0, 26), ('Kanye West', 1, 27), ('Jay-Z', 0, 27), ('Snoop Dogg', 0, 27), ('BTS', 1, 28), ('Blackpink', 0, 28), ('EXO', 0, 28), ('Amy Winehouse', 0, 29), ('Jessie J', 0, 29), ('Adele', 1, 29), ('Katy Perry', 0, 30), ('Lady Gaga', 1, 30), ('Taylor Swift', 0, 30), ('Bob l\'éponge', 1, 31), ('Les schtroumpfs', 0, 31), ('Scooby-Doo', 0, 31), ('Pinocchio', 0, 32), ('Bambi', 0, 32), ('Blanche-Neige et les Sept Nains', 1, 32), ('Elsa', 0, 33), ('Raiponce', 1, 33), ('Aurore', 0, 33), ('Tarzan', 1, 34), ('Hercule', 0, 34), ('Mulan', 0, 34), ('Les 101 dalmatiens', 0, 35), ('Rox et Rouky', 0, 35), ('Oliver et Compagnie', 1, 35), ('Pokemon', 1, 36), ('Digimon', 0, 36), ('Yu-Gi-Oh!', 0, 36), ('La princesse et la grenouille', 0, 37), ('Ratatouille', 0, 37), ('Kuzco, l\'empereur mégalo', 1, 37), ('5', 0, 38), ('6', 1, 38), ('7', 0, 38), ('Ses vêtements', 0, 39), ('Sa vaisselle', 0, 39), ('Ses livres', 1, 39 ), ('Kocoum', 1, 40), ('John Smith', 0, 40), ('Powhatan', 0, 40), ('Castle', 1, 41), ('Bones', 0, 41), ('Mentalist', 0, 41), ('Narcos', 0, 42), ('Les Sopranos', 0, 42), ('Breaking Bad', 1, 42), ('How I Met Your Mother', 0, 43), ('Friends', 1, 43), ('Cheers', 0, 43), ('145', 0, 44), ('155', 0, 44), ('165', 1, 44) , ('Les Simpson', 1, 45), ('South Park', 0, 45), ('Futurama', 0, 45), ('Nymeria', 0, 46), ('Ghost', 1, 46), ('Drogon', 0, 46), ('Ryan Howard', 1, 47), ('John Sanders', 0, 47), ('Frank Novak', 0, 47), ('William Hartnell', 1, 48), ('Patrick Troughton', 0, 48), ('Jon Pertwee', 0, 48), ('MacLaren\'s', 1, 49), ('Central Perk', 0, 49), ('The Bar', 0, 49), ('Les gaufres', 1, 50), ('Les pancakes', 0, 50), ('Les frites', 0, 50);