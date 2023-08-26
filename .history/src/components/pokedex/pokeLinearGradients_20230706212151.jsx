import React from 'react';

function getRandomColor() {
  const colors = [
    "red",
    "yellow",
    "blue",
    "green",
    "purple",
    "pink",
    "indigo",
    "teal",
    "gray",
  ];
  const randomIndex = Math.floor(Math.random() * colors.length);
  const randomColor = colors[randomIndex];
  return `from-${randomColor}-500 to-${randomColor}-300`;
}

  const pokeLinearGradients = {
    grass: "rounded-tl-xl rounded-tr-xl bg-gradient-to-b from-blue-900 to-blue-300",
    fire: "rounded-tl-4xl rounded-tr-4xl bg-gradient-to-b from-red-500 via-orange-500 to-yellow-400",
    water: "rounded-tl-4xl rounded-tr-4xl bg-gradient-to-b from-blue-900 to-blue-300",
    bug: "rounded-tl-4xl rounded-tr-4xl bg-gradient-to-b from-green-500 to-lime-300",
    flying: "rounded-tl-4xl rounded-tr-4xl bg-gradient-to-b from-pink-700 via-red-600 to-red-700",
    fighting: "rounded-tl-4xl rounded-tr-4xl bg-gradient-to-b from-brown-700 to-red-500",
    poison: "rounded-tl-4xl rounded-tr-4xl bg-gradient-to-b from-indigo-700 via-purple-500 to-pink-300",
    ghost: "rounded-tl-4xl rounded-tr-4xl bg-gradient-to-b from-indigo-900 via-blue-900 to-indigo-700",
    rock: "rounded-tl-4xl rounded-tr-4xl bg-gradient-to-b from-gray-500 via-gray-600 to-gray-200",
    dark: "rounded-tl-4xl rounded-tr-4xl bg-gradient-to-b from-black via-gray-900 to-gray-500",
    ice: "rounded-tl-4xl rounded-tr-4xl bg-gradient-to-b from-blue-300 via-blue-400 to-blue-100",
    steel: "rounded-tl-4xl rounded-tr-4xl bg-gradient-to-b from-gray-600 via-gray-700 to-gray-400",
    dragon: "rounded-tl-4xl rounded-tr-4xl bg-gradient-to-b from-teal-700 via-teal-500 to-teal-300",
    fairy: "rounded-tl-4xl rounded-tr-4xl bg-gradient-to-b from-red-700 via-pink-500 to-pink-300",
    electric: "rounded-tl-4xl rounded-tr-4xl bg-gradient-to-b from-blue-900 via-blue-900 to-blue-300",
    ground: "rounded-tl-4xl rounded-tr-4xl bg-gradient-to-b from-brown-600 via-brown-400 to-gold-500",
    psychic: "rounded-tl-4xl rounded-tr-4xl bg-gradient-to-b from-purple-700 via-purple-500 to-pink-500",
    normal: "rounded-tl-4xl rounded-tr-4xl bg-gradient-to-b",
  };
  
export default pokeLinearGradients;
