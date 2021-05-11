'use strict'

// fetching existing forms data from localstorage
const getSavedForms = () => {
    const formsJSON = localStorage.getItem('forms')

    try {
        return formsJSON !== null ? JSON.parse(formsJSON) : []
    } catch (e) {
        return []
    }
}

const saveForms = (forms) => {
    localStorage.setItem('forms', JSON.stringify(forms))
}