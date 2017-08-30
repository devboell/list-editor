export const addItem = item => ({
  type: 'ADD_ITEM',
  item,
})

export const updateItem = item => ({
  type: 'UPDATE_ITEM',
  item,
})

export const setSelectedId = id => ({
  type: 'SET_SELECTED_ID',
  id,
})

export const deselectList = () => ({
  type: 'SET_SELECTED_ID',
  id: 'no_selection',
})

export const removeItem = id => ({
  type: 'REMOVE_ITEM',
  id,
})

export const setCreateMode = flag => ({
  type: 'SET_CREATE_MODE',
  flag,
})
