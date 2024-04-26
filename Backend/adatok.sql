INSERT INTO `alapanyagok` (`id`, `name` ,`unit`) VALUES
(1, 'Jégkocka',"db"),
(2, 'fehér rum',"cl"),
(3, 'kókuszlikőr',"cl"),
(4, 'ananászlé',"cl"),
(5, 'tejszín',"cl"),
(6, 'ananászbefőtt',"db"),
(7, 'vodka',"cl"),
(8, 'paradicsomlé',"cl"),
(9, 'citromlé',"cl"),
(10, 'só',"ízlés szerint"),
(11, 'bors',"ízlés szerint"),
(12, 'Tabasco szósz',"cl"),
(13, 'worcestershire szósz',"cl"),
(14, 'barnarum',"cl"),
(15, 'triple sec',"cl"),
(16, 'apricot brandy',"cl"),
(17, 'mandulaszirup',"cl"),
(18, 'limelé',"cl"),
(19, 'bacardi cata blanca',"cl"),
(20, 'lime',"szelet"),
(21, 'mentalevél',"db"),
(22, 'cukor',"ízlés szerint"),
(23, 'szódavíz',"cl"),
(24, 'prosecco',"cl"),
(25, 'habzó bor',"cl"),
(26, 'narancskarika',"szelet"),
(27, 'szóda',"cl"),
(28, 'tört jég',"ízlés szerint"),
(29, 'tequila',"cl"),
(30, 'whisky',"cl"),
(31, 'Angostura',"cl"),
(32, 'édes vermut',"cl"),
(33, 'cukorszirup',"cl"),
(34, 'bourbon whiskey',"cl"),
(35, 'gin',"cl"),
(36, 'campari',"cl"),
(37, 'vermouth rosso',"cl"),
(38, 'narancslé',"cl"),
(39, 'kockacukor',"db"),
(40, 'Angostura bitter',"cl"),
(41, 'öntet cseresznyelikő',"cl"),
(42, 'narancs héja',"ízlés szerint"),
(44, 'aperol likőr',"cl"),
(45, 'málnaszörp',"cl");


INSERT INTO `italok` (`id`, `name`) VALUES
(1, 'PINA COLADA'),
(2, 'MAI TAI'),
(3, 'Mojito'),
(4, 'APEROL SPRITZ'),
(5, 'Margarita'),
(6, 'Manhattan'),
(7, 'WHISKY SOUR'),
(8, 'Negroni'),
(9, 'old fashioned'),
(10, 'Daiquiri'),
(11, 'Bloody Mary'),
(12, 'Limonádé');



INSERT INTO `receptek` (`ital_id`, `alapanyag_id`, `amount`) VALUES
(1, 2, 4),
(1, 3, 2),
(1, 4, 10),
(1, 5, 2),
(1, 1, 4),
(1, 6, 1),
(2, 14, 3),
(2, 2, 3),
(2, 15, 2),
(2, 16, 2),
(2, 17, 2),
(2, 4, 8),
(2, 18, 2),
(3, 19, 4),
(3, 20, 4),
(3, 21, 12),
(3, 22, 2),
(3, 27, 4),
(3, 28, 1),
(4, 1, 1),
(4, 43, 6),
(4, 24, 12),
(4, 27, 4),
(4, 26, 1),
(5, 29, 5),
(5, 15, 2),
(5, 18, 2),
(6, 1, 1),
(6, 30, 6),
(6, 31, 1),
(6, 32, 3),
(7, 1, 1),
(7, 2, 10),
(7, 18, 4),
(7, 33, 2),
(8, 34, 4),
(8, 9, 2),
(8, 33, 1),
(9, 35, 3),
(9, 36, 3),
(9, 37, 3),
(9, 1, 1),
(9, 42, 1),
(10, 39, 1),
(10, 40, 2),
(10, 41, 1),
(10, 1, 1),
(10, 30, 4),
(10, 42, 1),
(11, 7, 5),
(11, 8, 9),
(11, 9, 2),
(11, 10, 1),
(11, 11, 1),
(11, 12, 1),
(11, 13, 1),
(11, 1, 1),
(12, 1, 6),
(12, 9, 2),
(12, 20, 2),
(12, 21, 1),
(12, 23, 20),
(12, 33, 2);


INSERT INTO `tipus` (`ital_id`, `teli`, `nyari`, `edes`, `savanyu`, `keseru`, `alkoholos`, `alkoholmentes`) VALUES
(1, 0, 1, 1, 0, 0, 1, 0),
(2, 0, 1, 1, 1, 1, 1, 0),
(3, 0, 1, 1, 1, 0, 1, 0),
(4, 0, 1, 1, 1, 1, 1, 0),
(5, 1, 1, 0, 0, 0, 1, 0),
(6, 1, 1, 1, 1, 1, 1, 0),
(7, 0, 1, 0, 1, 0, 1, 0),
(8, 0, 1, 0, 0, 1, 1, 0),
(9, 1, 1, 0, 0, 1, 1, 0),
(10, 0, 1, 1, 1, 0, 1, 0),
(11, 0, 1, 1, 1, 1, 1, 0),
(12, 0, 1, 1, 1, 0, 0, 1);

INSERT INTO `posts` (`user_id`,`title`,`text`) VALUES
(1, 'Koktél Poharak: A Koktélozás Egyedi Hangulata', 'A koktélozás művészete nem csupán az italok kiválasztásáról és keveréséről szól, hanem az esztétikáról és az élményről is. A megfelelő pohár kiválasztása lényeges része ennek az élménynek, hiszen segít kiemelni az italok ízét és megjelenését.
Néhány fontos dolog, amit érdemes tudni a koktél poharakról:

1. Forma és Méret: A poharak formája és mérete jelentősen befolyásolja az ital prezentációját és az ízélményt.
2. Anyag: Minőségi üvegpoharak jobban tartják a hőt és a hideget, és hozzájárulnak az italok ízének megőrzéséhez.
3. Díszítés és Kiegészítők: Citrus héj, koktélbogyók, színes szívószálak és egyéb dekorációk segítenek fokozni az ital vizuális vonzerejét.
4. Szokatlan formák és különleges poharak: Ezek a poharak hozzájárulnak az élmény különlegességéhez és egyediségéhez.
- A megfelelő koktél poharak kiválasztása és használata tehát nem csupán az ital szervírozásáról szól, hanem az egész koktélozás élményének fokozásáról.'),
(1, 'Koktél Alapanyagok: Az Ízek Mesterei', 'A koktélkészítés művészete sokféle alapanyag összehangolását igényli, hogy azokból az ízekből és illatokból harmonikus italok születhessenek. Néhány alapvető, ám rendkívül fontos alapanyag, amelyek nélkül elképzelhetetlen lenne a koktélvilág:

 Citrusok: A friss citrusok, mint a citrom, lime és narancs, alapvető fontosságúak a koktélkészítésben.
 Szirupok és Likőrök: Különféle szirupok és likőrök, mint például a cukorszirup, grenadine, triple sec és édes likőrök.
 Alkoholok: A vodka, rum, tequila, gin, whisky és egyéb alkoholok különféle ízvilágot és karaktert adnak az italoknak.
 Bitterek és Aromás Szerek: Az Angostura és egyéb bitterek, valamint fűszerek, mint a menta, bazsalikom, és szegfűszeg.
 Szószok és Szószok: Például a Worcestershire szósz, Tabasco és egyéb szószok sokféle koktélhoz használhatóak.
- Az alapanyagok kreatív kombinációja és azok megfelelő egyensúlya teszi lehetővé a koktélkészítésben való mesterségesítést. Mindegyik alapanyag sajátos ízével és tulajdonságaival hozzájárul az italok különlegességéhez és ízletes karakteréhez.'),
(1, 'Bartender Eszközei: A Profizmus Alapjai', 'A bartender eszközei nélkülözhetetlenek a professzionális koktélkészítéshez. Ezek a szerszámok segítik a pontos mérésben, keverésben és szervírozásban, és hozzájárulnak az italok minőségéhez és ízélményéhez.

 Shaker: Az egyik legfontosabb eszköz a bartender számára, segítségével keverhetők és rázhatók össze az italok.
 Mérőpohár: Pontos mennyiségek mérésére használt eszköz, amely elengedhetetlen a kiegyensúlyozott koktélokhoz.
 Barléc: Egyenes vagy hajlított, a pult fölé szerelhető rúd, amelyre a poharak és eszközök függeszthetők, hogy helyet takarítsanak meg.
 Strainer: Szűrőeszköz, amely segít leszűrni az italokat a shakerből a pohárba, hogy megakadályozza a jég és az összetevők maradékainak bejutását.
 Jégkocka Forma: Különböző méretű és formájú jégkockák készítésére szolgáló forma, amelyek fontosak az italok hűtéséhez.
- A megfelelő eszközök használata és kezelése segíti a bartendereket a hatékony és minőségi italkészítésben, és hozzájárul az italok professzionális színvonalához.');

/*UPDATE users SET is_admin=1 WHERE id=1;*/