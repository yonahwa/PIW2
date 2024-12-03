const enregistre = document.getElementById("Save")

const search = document.getElementById("Search")

enregistre.addEventListener('click', CreateAccount)
{
    let db = '';
    let openRequest = indexedDB.open('account', 1)

    openRequest.onupgradeneeded = function () {
        
        db = openRequest.result;

        if (!db.objectStoreNames.contains('users')) {
            db.createObjectStore('users', { keyPath: 'UserName' });
        }

    }

    openRequest.onsuccess = function () {
        let Name = document.getElementById("Name").value
        let MDP = document.getElementById("password").value
        let mail = document.getElementById("Email").value
        
        db = openRequest.result;
        let transaction = db.transaction('users', 'readwrite');
        
        transaction.oncomplete = function () {
            console.log("Transaction Faite")
        }

        let users = transaction.objectStore('users');

        let user = {
            UserName: Name,
            Mdp: MDP,
            eMail: mail,
            point: 0
        }

        let indexEM = users.index('eMail');
        let indexN = user.index('UserName');

        let getRequestM = indexEM.get(mail);
        let getRequestN = indexN.get(Name);

        getRequestN.onsuccess = function (event) {
            if (event.target.result) {
                console.log('Utilisateur avec ce Name existe déja')
            }
            else {
                getRequestM.onsuccess = function (event) {
                    if (event.target.result) {
                        console.log('Utilisateur avec cette email existe déja')
                    }
                    else {
                        let ajout = users.put(user);
                    }
                }
            }
        }

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

search.addEventListener('click', CreateAccount)
{
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
            console.log("Problème de Transaction")
        }

        let users = transaction.objectStore('users');

        let lire = users.get(Name);

        lire.onsuccess = function () {
            if (lire.result.Mdp == MDP) {
                console.log("Connexion complete");
                lire.result.point
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