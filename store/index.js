export const state = () => ({
  scroll: 0,
  old_scroll: 0,
  menu: false,
  search: false,
  after_menu: true,
  after_search: true,
})

export const mutations = {
  set_scroll(state, value) {
    state.scroll = value
  },
  set_menu(state, value) {
    state.menu = value
  },
  set_after_menu(state, value) {
    state.after_menu = value
  },
  set_search(state, value) {
    state.search = value
  },
  set_after_search(state, value) {
    state.after_search = value
  },
  set_old_scroll(state, value) {
    state.old_scroll = value
  },
}
