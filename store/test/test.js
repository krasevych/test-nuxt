export const CHANGE_NAME = 'test/changeName'
export const GETTER_FULLNAME = 'test/fullName'

const state = {
  a: 1,
  firstName: 'Roman',
  lastName: 'Krasevych'
}

const getters = {
  [GETTER_FULLNAME]: state => state.firstName + ' ' + state.lastName
}

const mutations = {
  [CHANGE_NAME] (state, newName) {
    state.firstName = newName || 'No Name'
  }
}

export const test = {state, getters, mutations}
