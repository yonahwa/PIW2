//test

//D�commenter pour voir le r�sultat
let db = '';
let openRequest = indexedDB.open('db', 1);

openRequest.onupgradeneeded = function(){
    db = openRequest.result;

    //Si l'objet de stockage users n'existe pas, on le cr�e
    if (!db.objectStoreNames.contains('users')){
        db.createObjectStore('users', {keyPath: 'id'});
    }
};

openRequest.onerror = function(){
    alert('Impossible d\'acc�der � IndexedDB');
};

openRequest.onsuccess = function(){
    db = openRequest.result;
    let transaction = db.transaction('users', 'readwrite');
    
    transaction.oncomplete = function(){
        alert('Transaction termin�e');
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
        alert('Utilisateur ajout� avec la clef ' + ajout.result);
    };
    
    ajout.onerror = function(){
        alert('Erreur : ' + ajout.error);
    };
};

// Supposons que vous ayez d�j� ouvert la base de donn�es et que `db` soit votre instance de base de donn�es

let transaction = db.transaction('users', 'readwrite'); // Ouvrir la transaction
let objectStore = transaction.objectStore('users'); // Acc�der � l'objet de stockage 'users'

// Cr�er un nouvel enregistrement � ajouter
let newUser = {
    id: 1, // Assurez-vous que l'identifiant est unique
    name: 'John Doe',
    email: 'john.doe@example.com'
};

// Ajouter le nouvel enregistrement � l'objet de stockage
let request = objectStore.add(newUser);

// G�rer les �v�nements de succ�s et d'erreur
request.onsuccess = function (event) {
    console.log('Utilisateur ajout� avec succ�s:', event.target.result);
};

request.onerror = function (event) {
    console.error('Erreur lors de l\'ajout de l\'utilisateur:', event.target.error);
};