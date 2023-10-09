'use client'
import React, { useState, useEffect } from 'react'
import Image from 'next/image'

const Recipe = () => {
  const [searchInput, setSearchInput] = useState('')
  const [meals, setMeals] = useState([])
  const [selectedMeal, setSelectedMeal] = useState(null)

  const handleSearch = async () => {
    if (searchInput.trim()) {
      const response = await fetch(
        `https://www.themealdb.com/api/json/v1/1/filter.php?i=${searchInput}`
      )
      const data = await response.json()
      setMeals(data.meals)
    }
  }

  const handleMealClick = async (mealId) => {
    const response = await fetch(
      `https://www.themealdb.com/api/json/v1/1/lookup.php?i=${mealId}`
    )
    const data = await response.json()
    setSelectedMeal(data.meals[0])
  }

  const closeRecipeModal = () => {
    setSelectedMeal(null)
  }

  useEffect(() => {
    setSearchInput('chicken')
    handleSearch()
  }, [])

  return (
    <div className="BFrecipe">
      <header className="HFrecipe">
        <h1>Vietnamese Food Recipe App</h1>
        <div className="search">
          <input
            type="text"
            id="searchInput"
            placeholder="Enter an ingredient..."
            value={searchInput}
            onChange={(e) => setSearchInput(e.target.value)}
            onKeyPress={(e) => {
              if (e.key === 'Enter') {
                handleSearch()
              }
            }}
          />
          <button id="searchButton" onClick={handleSearch}>
            Search
          </button>
        </div>
      </header>
      <div id="mealList" className="meal-list">
        {meals.map((meal) => (
          <div
            key={meal.idMeal}
            className="meal-item"
            onClick={() => handleMealClick(meal.idMeal)}
          >
            <Image
              src={meal.strMealThumb}
              alt={meal.strMeal}
              width={400}
              height={400}
            />
            <h3>{meal.strMeal}</h3>
          </div>
        ))}
      </div>
      <div
        className="modal-container"
        style={{ display: selectedMeal ? 'block' : 'none' }}
      >
        <button
          id="recipeCloseBtn"
          className="close-button"
          onClick={closeRecipeModal}
        >
          ×
        </button>
        {selectedMeal && (
          <div className="meal-details-content">
            <h2 className="recipe-title">{selectedMeal.strMeal}</h2>
            <p className="recipe-category">{selectedMeal.strCategory}</p>
            <div className="recipe-instruct">
              <h3>Instructions:</h3>
              <p>{selectedMeal.strInstructions}</p>
            </div>
            <div className="recipe-img">
              {/* <img src={selectedMeal.strMealThumb} alt={selectedMeal.strMeal} /> */}
            </div>
            <div className="recipe-video">
              <a
                href={selectedMeal.strYoutube}
                target="_blank"
                rel="noopener noreferrer"
              >
                Video Tutorial
              </a>
            </div>
          </div>
        )}
      </div>
    </div>
  )
}

export default Recipe
