/**
 * http://cwestblog.com/2013/06/25/javascript-weighted-randomization/
 * Takes an array of items and an array of the corresponding weights and picks
 * one of the items.  The items with the higher weights are more likely to be
 * picked.
 * @param {!Array} items  An array of items to choose from.
 * @param {!Array.<number>} weights  An array of non-negative integers with each
 *     number representing the likelihood of the number getting picked.
 * @return {*}  Returns one of the items from the array as long as at least one
 *     of the weights was a positive integer.  Otherwise whatever is at
 *     items[-1] will be returned (this usually means undefined is returned).
 */
function pickUsingWeights(items, weights) {
  let total = 0;
  let ranges = weights.slice(0);
  let i;
  for(i = 0, len = weights.length; i < len; i++) {
    ranges[i] = [total, total += ranges[i]];
  }
  const randomNumber = parseInt(Math.random() * total);
  for(;randomNumber < ranges[--i][0];);
  return items[i];
}

Array.prototype.randomElement = function () {
    return this[Math.floor(Math.random() * this.length)];
};

function randomIntFromInterval(min,max) {
    return Math.floor(Math.random()*(max-min+1)+min);
}

function shuffle(a) {
    for (let i = a.length; i; i--) {
        let j = Math.floor(Math.random() * i);
        [a[i - 1], a[j]] = [a[j], a[i - 1]];
    }
}

const names = [
    "Aba",
    "Almamy",
    "Ba",
    "Bannamoudou",
    "Baraka",
    "Béba",
    "Bilal",
    "Diaby",
    "Diakarya",
    "Djimo",
    "Goundo",
    "Ibrahim",
    "Kake",
    "Kalilou",
    "Karim",
    "La",
    "Lamine",
    "Madou",
    "Mammy",
    "Momo",
    "Mouctar",
    "N'Farama",
    "N'Toma",
    "Oumar",
    "Papé",
    "Sekouba",
    "Sidia",
    "Smaël",
    "Soriba",
    "Soriba",
    "Souaré",
    "Tadou",
    "Taha",
    "Yassin",
    "Youssoufa",
];

const titles = [
    "Monsieur",
    "Professeur",
    "Maître Marabout",
    "Grand Maître Marabout",
];

const titleWeight = [
    45,
    45,
    5,
    5,
];

const professions = [
    "Célèbre medium africain, voyant sérieux",
    "Célèbre medium voyant sérieux",
    "Célèbre voyant",
    "Célèbre voyant medium",
    "Célèbre voyant medium sérieux",
    "Célèbre voyant medium, pur marabout africain",
    "Grand medium marabout guérisseur",
    "Grand medium, voyant exceptionnel",
    "Grand voyant international",
    "Grand voyant marabout",
    "Grand voyant medium",
    "Grand voyant medium africain",
    "Grand voyant medium gérisseur international",
    "Grand voyant medium guérisseur célèbre",
    "Grand voyant medium international",
    "Guérisseur, célèbre medium afircain, voyant sérieux",
    "L'un des plus grands voyants, medium international",
    "Marabout, medium, voyant",
    "Medium africain",
    "Médium, amourologue, guérisseur",
    "Voyant medium",
    "Voyant medium compétent",
    "Voyant medium guérisseur",
    "Voyant medium guérisseur africain",
    "Voyant medium international",
    "Voyant, medium, grand maître des sciences occultes",
];

const specialties = [
    "des problèmes sentimentaux",
    "des problèmes sexuels",
    "du retour d'affection",
    "du retour d'affection et de l'être aimé",
    "du retour de l'être aimé ou qui vous est cher",
    "du retour de l'être aimé, même les cas les plus désespérés",
    "du retour du cher amour perdu",
    "du retour immédiat de l'être aimé",
    "du retour rapide de l'être aimé",
    "du retour rapide et définitif de la personne aimée",
    "du retour rapide et définitif de la personne que vous aimez",
    "tous travaux",
    "des travaux occultes",
];

const results = [
    "100%",
    "100% garanti et satisfait",
    "100% garantis",
    "99%",
    "dans tous les domaines",
    "efficace et sérieux, garantie 100%",
    "efficaces, rapides garantis",
    "garanti 100%",
    "garantis 100%",
    "garantis 100%, rapides et satisfaisants",
    "garantis dans tous les domaines",
    "irréversibles 100% garantis",
    "rapides",
    "satisfait à 100%",
];

const powers = [
    "l'acquisition des secrets de la forêt africaine et un don ancestral",
    "la conclusion des secrets de la forêt africaine et dons héréditaires",
    "un don héréditaire",
    "un don héréditaire de père en fils",
    "des dons de naissance",
    "des dons de naissance incontestables",
    "des dons héréditaires de grand-père en père et de père en fils",
    "des dons héréditaires de père en fils",
    "un grand secret et don héréditaire de père en fils depuis 7 générations",
    "un pouvoir surnaturel légué de père en fils",
    "des pouvoirs naturels",
];

const mottos = [
    "Des milliers de solutions à vos problèmes",
    "Il n'y a pas de problème sans solution",
    "Il n'y a pas de problèmes sans solution",
    "Il n'y a pas de problèmes sans solutions, parce qu'il travaille sérieusement et obtient des résultats que d'autres n'obtiennent pas",
    "Il n'y a pas de problèmes, il n'y a que des solutions",
    "Il y a toujours une bonne et heureuse solution à tous les problèmes des humains",
    "Il y a toujours une bonne et heureuse solution à tous les problèmes qui existent dans la vie des humains",
    "Pas de problème sans solution",
    "Le plus important dans la voyance, c'est d'avoir de bons résultats garantis et définitifs",
    "Ne laissez pas le malheur prendre le dessus",
    "Chaque problème a une solution",
    "Ne restez plus dans le noir sans savoir ce qui vous arrive",
    "Pas de problèmes sans solutions",
    "Avec lui tout est possible",
    "Tous les voyants sont votants, mais ils n'ont pas la même puissance",
    "Venez la chance vous sourira",
    "Vous aide à vivre votre vie au lieu de la subir",
];

const phones = [
    "07.62.31.46.15",
    "06.30.74.53.05",
    "06.18.64.24.46",
    "06.42.46.90.79",
    "06.44.23.72.48",
    "06.70.33.15.11",
    "07.58.24.38.00",
    "07.53.82.25.13",
    "07.87.48.95.74",
    "06.74.87.87.95",
    "06.70.33.15.11",
    "06.76.05.30.90",
    "04.72.73.11.27",
    "07.51.53.49.58",
    "06.09.46.90.47",
    "06.25.62.89.33",
    "07.52.95.61.13",
    "06.43.77.46.40",
    "07.88.35.23.58",
    "07.88.35.23.58",
    "06.48.97.46.78",
    "06.05.86.13.27",
    "06.24.13.11.37",
    "06.37.66.43.75",
    "06.09.98.45.35",
    "06.23.15.42.58",
    "06.84.54.10.50",
    "07.53.84.45.98",
    "07.55.08.72.72",
    "06.06.82.20.70",
    "07.53.75.56.25",
    "06.43.41.47.89",
    "06.47.39.66.58",
    "07.58.09.42.46",
    "07.85.03.59.79",
    "06.27.19.91.93",
    "06.40.22.40.88",
    "07.77.82.42.63",
    "06.48.04.47.96",
];

const consultations = [
    "Paiement après résultats",
    "Déplacement possible",
    "Consultation à distance"
];

const canDos = [
    "Vous aide à résoudre vos problèmes entre hommes et femmes et si il (elle) est partie(e), tu viens ici et tu le (là) reverra dans la semaine. Fidélité absolue entre époux. Contre les ennemi(es). Argent, travail, attraction de clientèle pour vendeurs, complexes physiques et moraux, affection retrouvée, désenvoûtement, chance, succès, réussite dans tous les domaines, défaillance sexuelle, maladies inconnues, permis de conduire. Pour avoir la force en amour. Tous vos désirs seront réalisés. Stérilité dans la famille. Assure l'avenir. Pour maigrir. Amour, même dans les cas désespérés. Concours. Travail sérieux, efficace et rapide",
    "Résout tous vos problèmes même les cas les plus désespérés. Réussit là où les autres ont échoués. Retour immédiat de l'être aimé. Fidélité entre 2 personnes. Affection, travail, chance, désenvoûtement, protection, soutien aux entreprises",
    "Très connu pour ses excellents travaux et efficacité de ses dons, l'honnêteté est la base de son travail. Sérieux et rapide. Amour, affection, chance, travail, santé, impuissance sexuelle, examens, désenvoûtement, amélioration la financière",
    "Il vous aidera à résoudre tous vos problèmes : amour durable, chance, protection, désenvoûtement. Affaires, commerce, succès sentimentaux, examens. Retour rapide et définitif de la personne que vous aimez. Réalisation de tous vos désirs. Résout tout le mal ou ce qui vous agace dans votre vie, etc...",
    "N'hésitez pas, venez découvrir la vérité que vous cherchez depuis toujours. Vous avez un problème qui vous tourmente, vous vivez seul, vous vous sentez mal aimé(e), retour rapide et définitif de l'être aimé, désenvoûtement, protection, amour durable, concours, clientèle pour commerce",
    "Peut vous aider à résoudre tous vos problèmes, là ou les autres ont échoué. Amour, chance, protection, désenvoûtement, succès sentimental, examen, permis de conduire, problèmes familiaux, maladies inconnues, lire votre avenir, impuissance sexuelle, problème de drogue, retour d'affection. La personne que vous aimez et qui s'est éloignée, peut revenir vers vous, et je peux vous aider à regagner son amour. Eloigner la rivale ou le rival. Transcommunication. Communique avec les morts. Trouver l'amour. Fidélité entre époux",
    "La notoriété mondiale lui fait confiance pour son don héréditaire et ses travaux occultes depuis plusieurs générations ! Pourquoi pas vous ? Il vous aidera à résoudre tous vos problèmes, même les plus difficiles durablement. Tous les travaux occultes, amour, rencontre du futur compagnon le plus vite possible, travail, réussite dans tous les domaines. Chance, guérit l'impuissance sexuelle, examens, affection absolue entre époux, vente, difficultés financières, beaucoup de chance avec les fille, ou les garçons. Aide efficace, discrétion assurée, travail sérieux et efficace",
    "Résout tous vos problèmes, même dans les cas difficiles ou désespérés. L'amour ETERNEL, chance aux jeux, aux travail, désenvoûtement, mariage, timidité, fait maigrir, concours, protection, défaillance sexuelle, succès pour vente et commerce, maladie inconnue, malchance",
];

$(document).ready(function () {
    createMarabout();

    $("#refresh-marabout").click(function () {
        createMarabout();
    });
});

createMarabout = function () {
    let name       = names.randomElement();
    let title      = pickUsingWeights(titles, titleWeight);
    let profession = professions.randomElement();
    let specialty  = specialties.randomElement();
    let result     = results.randomElement();
    let power      = powers.randomElement();
    let motto      = mottos.randomElement();
    let phone      = phones.randomElement();
    let canDo      = canDos.randomElement();

    // On créé une copie de l'array consultations
    let consultationTmp = consultations.slice(0);
    shuffle(consultationTmp);
    let consultation    = consultationTmp.slice(0, (Math.floor(Math.random() * 3) + 1));
    consultation        = consultation.join(" - ");

    let intro = `${title} ${name} <br> ${profession}`;
    let text = `Spécialiste ${specialty}, grâce à ${power}.<br>${canDo}`;
    let conclusion = `<p> ${motto} </p> <p> Résultats ${result} <br> ${consultation} </p>`;
    let phoneArea = `${phone}`;

    $('#marabout-intro').html(intro);
    $('#marabout-text').html(text);
    $('#marabout-conclusion').html(conclusion);
    $('#marabout-phone').html(phoneArea);
};