export const CHANGE_NAME = 'test/changeName';
export const FULLNAME = 'test/fullName';

export const namespaced = false
export const state = {
  firstName: 'Roman',
  lastName: 'Krasevych'
}

export const getters = {
  [FULLNAME]: state => state.firstName + ' ' + state.lastName
};

export const mutations = {
  [CHANGE_NAME] (state, newName) {
    state.firstName = newName || 'No Name';
  }
};
