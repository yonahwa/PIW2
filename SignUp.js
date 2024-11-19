const enregistre = document.getElementById("Save")

enregistre.addEventListener('click', CreateAccount)

function CreateAccount() {

    let Name = document.getElementById("Name").value
    let MDP = document.getElementById("password").value
    let mail = document.getElementById("Email").value

    let db = '';
    let openRequest = indexedDB.open('account', 1)

    openRequest.onupgradeneeded = function () {
        db = openRequest.result;

        if (!db.objectStoreNames.contains('users')) {
            db.createObjectStore('users', { keyPath: 'id' });
        }

    }

    openRequest.onsuccess = function(){
        db = openRequest.result;
        let transaction = db.transaction('users', 'readwrite');
        
        transaction.oncomplete = function () {
            console.log("Transaction Faite")
        }

        let users = transaction.objectStore('users');

        let user = {
            id: 1,
            Mdp: MDP,
            eMail: mail,
            point: 0
        }

        
        let ajout = users.add(user);

        ajout.onsuccess = function () {
            console.log("Le compte a été ajouter a la table")
        }

        ajout.onerror = function () {
            console.log("Ça a pas fonctionner")
        }

    }

    openRequest.onerror = function () {
        alert('Probleme a ouvrir la BD')
    }

}

function SearchAccount() {
    let Name = document.getElementById("Name").value
    let MDP = document.getElementById("password").value
    let mail = document.getElementById("Email").value

    let db = '';
    let openRequest = indexedDB.open('account', 1)

    openRequest.onupgradeneeded = function () {
        console.log("Problem of Version")
    }

    openRequest.onerror = function () {
        alert('Probleme a ouvrir la BD')
    }

    openRequest.onsuccess = function () {
        db = openRequest.result;
        let transaction = db.transaction('users', 'readonly');

        transaction.oncomplete = function () {
            console.log("Transaction Faite")
        }

        transaction.onerror = function () {
            console.log
        }

        let users = transaction.objectStore('users');

        let lire = users.get(Name);

        lire.onsuccess = function () {
            if (lire.result.Mdp == MDP) {
                console.log("Connexion complete");
            }
            else {
                console.log("Mauvais Mot de Passe")
            }
        }
        lire.onerror = function () {
            alert("This user does not exist");
        }
    }
}