import {
  DATA_LIST,
  DATA_ADD,
  ADD,
  REMOVE,
  OPEN,
  CLOSE,
  SEARCH_NAME,
  SEARCH_TYPE
} from '../constants'

const initialState = {
  dataList: [],
  dataAdd: [],
  searchName: '',
  searchType: '',
  modalStatus: false,
}

export default (state = initialState, action) => {
  switch (action.type) {
    case DATA_LIST:
      return state
    case DATA_ADD:
      return { ...state, modalStatus: true, dataAdd: action.payload }
    case ADD:
      return state
    case REMOVE:
      return { ...state, modalStatus: false, dataAdd: action.payload }
    case OPEN:
      return { ...state, modalStatus: true, dataList: action.payload }
    case CLOSE:
      return { ...state, modalStatus: false }
    case SEARCH_NAME:
      return { ...state, modalStatus: true, searchName: action.payload }
    case SEARCH_TYPE:
      return { ...state, modalStatus: true, searchType: action.payload }
    default:
      return state
  }
}


