import * as CRYPTOS from '../actions/crptos/crptosActionTypes';

const initialState = {
  data: []
};

const cryptos = (state = initialState, action) => {
  switch (action.type) {
    case CRYPTOS.GET_MY_CRYPTOS: {
      return {
        ...state,
        isLoading: true
      };
    }
    case CRYPTOS.GET_MY_CRYPTOS_SUCCESS: {
      const { data } = action;

      return {
        ...state,
        isLoading: false,
        data,
      };
    }
    case CRYPTOS.GET_MY_CRYPTOS_FAILURE: {
      const { error } = action;

      return {
        ...state,
        isLoading: false,
        error,
      };
    }

    case CRYPTOS.ADD_MY_CRYPTOS: {
      return {
        ...state,
        isLoading: true
      };
    }
    case CRYPTOS.ADD_MY_CRYPTOS_SUCCESS: {
      return {
        ...state,
        isLoading: false
      };
    }
    case CRYPTOS.ADD_MY_CRYPTOS_FAILURE: {
      const { error } = action;

      return {
        ...state,
        isLoading: false,
        error,
      };
    }


    case CRYPTOS.REMOVE_MY_CRYPTOS: {
      return {
        ...state,
        isLoading: true
      };
    }
    case CRYPTOS.REMOVE_MY_CRYPTOS_SUCCESS: {
      return {
        ...state,
        isLoading: false
      };
    }
    case CRYPTOS.REMOVE_MY_CRYPTOS_FAILURE: {
      const { error } = action;

      return {
        ...state,
        isLoading: false,
        error,
      };
    }

    default:
      return state;
  }
};


export default cryptos;
