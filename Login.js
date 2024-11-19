//test


// Créer un curseur pour parcourir les enregistrements
let cursorRequest = users.openCursor();

cursorRequest.onsuccess = function (event) {
    let cursor = event.target.result;
    if (cursor) {
        // Ajouter l'enregistrement actuel au tableau
        usersArray.push(cursor.value);

        // Passer à l'enregistrement suivant
        cursor.continue();
    } else {
        // Tous les enregistrements ont été parcourus
        console.log('Tous les utilisateurs :', usersArray);
    }
};


// L'attribut que vous souhaitez vérifier
let emailToCheck = 'example@example.com'; // Remplacez par l'email que vous voulez vérifier

// Créer une requête pour trouver l'utilisateur par email
let index = users.index('email'); // Assurez-vous que l'index existe
let getRequest = index.get(emailToCheck);

getRequest.onsuccess = function (event) {
    if (event.target.result) {
        console.log('Un utilisateur avec cet email existe déjà :', event.target.result);
    } else {
        console.log('Aucun utilisateur avec cet email trouvé.');
    }
};

getRequest.onerror = function (event) {
    console.error('Erreur lors de la recherche de l\'utilisateur :', event.target.error);
};


// may be interesting

let dbRequest = indexedDB.open('nom_de_votre_base_de_donnees', version);

dbRequest.onupgradeneeded = function (event) {
    let db = event.target.result;
    let objectStore = db.createObjectStore('users', { keyPath: 'id' });
    objectStore.createIndex('email', 'email', { unique: true });
};