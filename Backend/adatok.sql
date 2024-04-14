INSERT INTO `alapanyagok` (`id`, `name`) VALUES
(1, 'Jégkocka'),
(2, 'fehér rum'),
(3, 'kókuszlikőr'),
(4, 'ananászlé'),
(5, 'tejszín'),
(6, 'ananászbefőtt'),
(7, 'vodka'),
(8, 'paradicsomlé'),
(9, 'citromlé'),
(10, 'só'),
(11, 'bors'),
(12, 'Tabasco szósz'),
(13, 'worcestershire szósz'),
(14, 'barnarum'),
(15, 'triple sec'),
(16, 'apricot brandy'),
(17, 'mandulaszirup'),
(18, 'limelé'),
(19, 'bacardi cata blanca'),
(20, 'lime'),
(21, 'mentalevél'),
(22, 'cukor'),
(23, 'szódavíz'),
(24, 'prosecco'),
(25, 'habzó bor'),
(26, 'narancskarika'),
(27, 'szóda'),
(28, 'tört jég'),
(29, 'tequila'),
(30, 'whisky'),
(31, 'Angostura'),
(32, 'édes vermut'),
(33, 'cukorszirup'),
(34, 'bourbon whiskey'),
(35, 'gin'),
(36, 'campari'),
(37, 'vermouth rosso'),
(38, 'narancslé'),
(39, 'kockacukor'),
(40, 'Angostura bitter'),
(41, 'öntet cseresznyelikő'),
(42, 'narancs héja'),
(44, 'aperol likőr');


INSERT INTO `italok` (`id`, `name`) VALUES
(1, ' "PINA" COLADA '),
(2, ' MAI TAI '),
(3, ' Mojito '),
(4, ' APEROL SPRITZ '),
(5, ' Margarita '),
(6, ' Manhattan '),
(7, ' WHISKY SOUR  '),
(8, ' Negroni '),
(9, ' old fashioned '),
(10, ' Daiquiri '),
(11, 'Bloody Mary');



INSERT INTO `receptek` (`italok_id`, `alapanyag_id`, `amount`) VALUES
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
(11, 1, 1);


INSERT INTO `tipus` (`italok_id`, `teli`, `nyari`, `edes`, `savanyu`, `keseru`, `alkoholos`, `alkoholmentes`) VALUES
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
(11, 0, 1, 1, 1, 1, 1, 0);