# 🎲 Dice Game – JavaScript DOM Project

## 📌 Project Overview
This is a simple **Dice Game** built using **vanilla JavaScript**, **HTML**, and **CSS**.  
Each time the page is refreshed, two dice are rolled randomly—one for **Player 1** and one for **Player 2**.  
The game compares both values and declares a winner or a draw.

This project focuses on JavaScript fundamentals such as random number generation and DOM manipulation.

---

## 🛠️ Technologies Used
- HTML5  
- CSS3  
- JavaScript (ES6)

No frameworks. No external libraries.

---

## ⚙️ How the Game Works
1. A random number between **1 and 6** is generated for each player.
2. The random number is used to dynamically select a dice image (`dice1.png` to `dice6.png`).
3. The images for both players are updated using DOM manipulation.
4. The values are compared and the result is displayed:
   - **Player 1 Wins**
   - **Player 2 Wins**
   - **Draw**

---

## 🧠 JavaScript Concepts Used
- `Math.random()`
- `Math.floor()`
- DOM selection using `querySelector()` and `querySelectorAll()`
- Dynamic attribute manipulation using `setAttribute()`
- Conditional logic (`if-else`)

---

## 📂 Project Structure
Dice-Game/
│
├── images/
│ ├── dice1.png
│ ├── dice2.png
│ ├── dice3.png
│ ├── dice4.png
│ ├── dice5.png
│ └── dice6.png
│
├── index.html
├── styles.css
└── index.js

## Learning Outcomes

- Understanding random number generation in JavaScript

- Manipulating DOM elements dynamically

- Updating UI elements based on logic

- Applying conditional statements in real use cases

## Limitations

- Gameplay depends on page refresh

- No user interaction buttons

- No animations or score tracking

- This project is intended for learning purposes and JavaScript practice.

## Possible Improvements

- Add a Roll Dice button

- Add dice roll animations

- Track scores across rounds

- Refactor code using reusable functions

