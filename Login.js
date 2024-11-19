//test

//Décommenter pour voir le résultat
let db = '';
let openRequest = indexedDB.open('db', 1);

openRequest.onupgradeneeded = function(){
    db = openRequest.result;

    //Si l'objet de stockage users n'existe pas, on le crée
    if (!db.objectStoreNames.contains('users')){
        db.createObjectStore('users', {keyPath: 'id'});
    }
};

openRequest.onerror = function(){
    alert('Impossible d\'accéder à IndexedDB');
};

openRequest.onsuccess = function(){
    db = openRequest.result;
    let transaction = db.transaction('users', 'readwrite');
    
    transaction.oncomplete = function(){
        alert('Transaction terminée');
    };

    let users = transaction.objectStore('users');
    
    let user = {
        id: 1,
        prenom: 'Pierre',
        mail: 'pierre.giraud@edhec.com',
        inscription: new Date()
    };
    
    let ajout = users.add(user);
    
    ajout.onsuccess = function(){ 
        alert('Utilisateur ajouté avec la clef ' + ajout.result);
    };
    
    ajout.onerror = function(){
        alert('Erreur : ' + ajout.error);
    };
};

// Supposons que vous ayez déjà ouvert la base de données et que `db` soit votre instance de base de données

let transaction = db.transaction('users', 'readwrite'); // Ouvrir la transaction
let objectStore = transaction.objectStore('users'); // Accéder à l'objet de stockage 'users'

// Créer un nouvel enregistrement à ajouter
let newUser = {
    id: 1, // Assurez-vous que l'identifiant est unique
    name: 'John Doe',
    email: 'john.doe@example.com'
};

// Ajouter le nouvel enregistrement à l'objet de stockage
let request = objectStore.add(newUser);

// Gérer les événements de succès et d'erreur
request.onsuccess = function (event) {
    console.log('Utilisateur ajouté avec succès:', event.target.result);
};

request.onerror = function (event) {
    console.error('Erreur lors de l\'ajout de l\'utilisateur:', event.target.error);
};