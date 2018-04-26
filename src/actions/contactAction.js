import * as actionTypes from './actionTypes';

export const createContact = (contact) => {
    return {
      type: actionTypes.CREATE_NEW_CONTACT,
      contact: contact
    }
  };

export const deleteContact = (id) => {
    return {
        type: actionTypes.REMOVE_CONTACT,
        id: id
    }
}

export const alterContact = (id) => {
    return {
        type: actionTypes.ALTER_CONTACT,
        id: id
    }
}