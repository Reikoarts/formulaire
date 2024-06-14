document.addEventListener("DOMContentLoaded", function() {

    // Récupération de tous les inputs
    let inputs = document.querySelectorAll('input, textarea, select');

    // Récupération des info bulles
    let infobulles = document.querySelectorAll('.nameInfo, .emailInfo, .infoSelect');

    // Récupération du form
    let formulaire = document.querySelector('.form-sav');

    // Bouton submit
    let boutonSubmit = document.querySelector('.submit');

    const validation = () => {
        let isValid = true;
        inputs.forEach(input => {
            if (!input.validity.valid) {
                isValid = false;
            }
        });
        return isValid;
    }

    const toggleSubmitButton = () => {
        if (validation()) {
            boutonSubmit.classList.remove('boutonDisable');
            boutonSubmit.removeAttribute('disabled');
            boutonSubmit.value = "Envoyer";

        } else {
            boutonSubmit.classList.add('boutonDisable');
            boutonSubmit.setAttribute('disabled', 'disabled');
            boutonSubmit.value = "Formulaire incomplet";
        }
    }

    const showError = (input, type) => {
        input.classList.remove('enabled');
        input.classList.add('disabled');
        switch (type) {
            case 'name':
                infobulles[0].innerHTML = "Le nom doit être de 3 caractères minimum";
                infobulles[0].classList.add("active");
                break;
            case 'email':
                infobulles[1].innerHTML = "L'email doit comporter @exemple.com";
                infobulles[1].classList.add("active");
                break;
            case 'note':
                infobulles[2].innerHTML = "Sélectionnez une note";
                infobulles[2].classList.add("active");
                break;
        }
    }

    const removeError = (input, type) => {
        input.classList.remove('disabled');
        input.classList.add('enabled');
        switch (type) {
            case 'name':
                infobulles[0].classList.remove("active");
                break;
            case 'email':
                infobulles[1].classList.remove("active");
                break;
            case 'note':
                infobulles[2].classList.remove("active");
                break;
        }
    }

    inputs.forEach(input => {
        input.addEventListener('input', function(e) {
            if (input.validity.valid) {
                removeError(input, input.id)
            } else {
                if (input.validity.tooShort) {
                    showError(input, input.id);
                } else {
                    showError(input, input.id);
                }
            }
            toggleSubmitButton();
        });
    });


    formulaire.addEventListener('submit', function(e){
        e.preventDefault();
        alert('Formulaire validé')
    })


    // Lancer la validation du bouton au chargement
    toggleSubmitButton();

});