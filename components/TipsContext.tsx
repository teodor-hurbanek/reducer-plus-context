//hooks
import { Dispatch, createContext, useContext, useReducer } from 'react'
// types
import { Tip } from '@/types/general'
// data
import initialTips from '@/data'

export const TipsContext = createContext<null | Tip[]>(null)
export const TipsDispatchContext = createContext<null | Dispatch<TipAction>>(null)

type TipsProviderProps = {
  children: JSX.Element | JSX.Element[]
}
export const TipsProvider = ({ children }: TipsProviderProps) => {
  const [tips, dispatch] = useReducer(tipsReducer, initialTips)
  return (
    <TipsContext.Provider value={tips}>
      <TipsDispatchContext.Provider value={dispatch}>{children}</TipsDispatchContext.Provider>
    </TipsContext.Provider>
  )
}

export const useTips = () => useContext(TipsContext)
export const useTipsDispatch = () => useContext(TipsDispatchContext)

type TipAction = {
  type: 'added' | 'changed' | 'deleted'
  id?: number
  text?: string
  tip?: Tip
}
const tipsReducer = (tips: Tip[], action: TipAction) => {
  switch (action.type) {
    case 'added': {
      return [
        ...tips,
        {
          id: action.id || 0,
          text: action.text || '',
          done: false,
        },
      ]
    }
    case 'changed': {
      return tips.map(tip => {
        if (tip.id === action.tip?.id) {
          return action.tip
        } else {
          return tip
        }
      })
    }
    case 'deleted': {
      return tips.filter(tip => tip.id !== action.id)
    }
    default: {
      throw Error('Unknown action: ' + action.type)
    }
  }
}
