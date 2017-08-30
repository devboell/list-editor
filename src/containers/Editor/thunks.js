import shortid from 'shortid'
import {
  setSelectedId,
  setCreateMode,
  deselectList,
  addItem,
  removeItem,
} from './actions'

export const selectItem = id =>
  (dispatch) => {
    dispatch(setSelectedId(id))
    dispatch(setCreateMode(false))
  }

export const prepareCreateItem = () =>
  (dispatch) => {
    dispatch(deselectList())
    dispatch(setCreateMode(true))
  }

export const createItem = item =>
  (dispatch) => {
    const newId = shortid.generate()
    dispatch(addItem({ ...item, id: newId }))
    dispatch(setSelectedId(newId))
    dispatch(setCreateMode(false))
  }

export const deleteItem = id =>
  (dispatch) => {
    dispatch(removeItem(id))
    dispatch(deselectList())
    dispatch(setCreateMode(false))
  }
