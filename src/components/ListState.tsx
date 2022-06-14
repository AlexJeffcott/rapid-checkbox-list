import React, {
    createContext,
    FC,
    useContext,
    useReducer
  } from 'react'
  import type {
    State,
    ContextType,
    ActionHandlers,
    Actions,
    Item,
    Items,
    ProviderType
  } from '../types'
  
  const initialState: State = {
    items: []
  }
  
  const stateInitializer = (
    _initialState: State
  ): State => {
    return {
      ..._initialState
    }
  }
  
  const Context = createContext<ContextType>([
    stateInitializer(initialState),
    {} as ActionHandlers
  ])
  
  const useListReducer = (): ContextType => useContext(Context)
  
  const reducer = (state: State, action: Actions) => {
    switch (action.type) {
      case 'addItems': {
        return {
          ...state,
          items: action.items
        }
      }
      case 'updateItemStatus': {
        return {
          ...state,
          items: state.items.reduce((items: Items, item: Item): Items => {
            if (item.id === action.itemId) return [...items, {...item, status: action.newStatus}]
            return [...items, item]
          }, [])
        }
      }
    }
  }
  
  const ListProvider: FC<ProviderType> = ({ children }) => {
    const [state, dispatch]: [
      State,
      React.Dispatch<Actions>
    ] = useReducer(reducer, initialState, stateInitializer)
  
    const actionHandlers: ActionHandlers = {
      addItems: (items) => dispatch({ type: 'addItems', items }),
      updateItemStatus: (itemId, newStatus) => dispatch({ type: 'updateItemStatus', itemId, newStatus })
    }
  
    return (
      <Context.Provider value={[state, actionHandlers]}>
        {children}
      </Context.Provider>
    )
  }
  
  export { useListReducer, ListProvider }
  