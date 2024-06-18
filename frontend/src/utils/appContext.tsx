import React, { createContext, ReactNode, useContext, useState } from 'react'

export type CurrentUserType = {
  id: number
  name: string
  userName: string
  email: string
}

export type AppContextType = {
  setCurrentUser: (user: CurrentUserType) => void
  currentUser: CurrentUserType | null
}

const AppContext = createContext<AppContextType>({
  setCurrentUser: () => {},
  currentUser: null,
})

const AppContextProvider = ({ children }: { children: ReactNode }) => {
  const [currentUser, setCurrentUser] = useState<CurrentUserType | null>(null)

  return (
    <AppContext.Provider value={{ setCurrentUser, currentUser }}>
      {children}
    </AppContext.Provider>
  )
}

const useAppContext = () => {
  return useContext(AppContext)
}

export { AppContextProvider, useAppContext }
