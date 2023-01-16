import { createContext, useState, useEffect } from 'react'

export const CategoriesContext = createContext({
	categoriesMap: {},
})

export const CategoriesProvider = ({ children }) => {
	const [categoriesMap, setCategoriesMap] = useState({})

	const value = { categoriesMap }
	return (
		<CategoriesContext.Provider value={value}>
			{children}
		</CategoriesContext.Provider>
	)
}
