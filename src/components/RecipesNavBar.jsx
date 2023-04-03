import React from 'react'
import RecipesNavBarItem from './RecipesNavBarItem'

export default function RecipesNavBar() {
  return (
    <div className='flex justify-center space-x-8 bg-cream py-2 mb-4'>
        <RecipesNavBarItem title="CATEGORIES" param="fetchCategories"/>
        <RecipesNavBarItem title="RESOURCES" param="fetchResources"/>
    </div>
  )
}
