# Rock Paper Scissors

A small, single-file web game that lets you play Rock-Paper-Scissors against the computer. The UI is responsive and styled with modern CSS. Game statistics (wins, losses, ties, total games) are persisted in the browser using localStorage.

## Features
- Clean, responsive UI with modern gradients and animations
- Clickable buttons for Rock, Paper, and Scissors (with emojis)
- Tracks Wins, Losses, Ties, and Games played
- Persists stats in `localStorage` between sessions
- Reset button to clear /stats and reset the display
Live:Rock-Paper-Scissors (https://rock-paper-scissors-beryl-alpha.vercel.app/)
## Files
- `index.html` — The entire game (HTML, CSS and JavaScript) in one file.

## How to play
1. Open the live link.
2. Click one of the three buttons: Rock, Paper, or Scissors.
3. The result area will show "You Win!", "You Lose!" or "It's a Tie!" and a short description of the choices.
4. Stats are updated immediately and saved automatically.
5. Click the "Reset" button to clear the saved stats and reset the display.

### Quick commands (Windows PowerShell)
Open the file in your default browser:
```powershell
start index.html
```

Run a simple HTTP server (useful if you want to test fetches or serve the page):
```powershell
# Using Python 3 (from project folder)
python -m http.server 8000
```

Then open http://localhost:8000 in your browser.

## Implementation details (from `index.html`)
- The computer choice is generated with `Math.floor((Math.random() * 3) + 1)` and mapped as: 1 = Rock, 2 = Paper, 3 = Scissors.
- Main functions:
	- `rocks()` — Called when user chooses Rock. Compares against computer choice, updates UI and stats.
	- `papers()` — Called when user chooses Paper.
	- `scissorss()` — Called when user chooses Scissors. (Note the function name has a double "s" at the end in the source.)
	- `resetStats()` — Clears `localStorage`, resets counters and UI.
	- `loadStats()` — Reads saved stats from `localStorage` and updates the UI.
	- `updateStatsDisplay()` — Updates the DOM stat elements.

### Persistence
Stats are stored in `localStorage` keys: `wins`, `losses`, `ties`, and `gamesplayed`. This keeps your stats between page reloads and browser sessions.

## Known notes and suggested improvements
- The `loadStats()` function exists in the file but the page does not automatically call it on load. To ensure saved stats appear when the page opens, you can add this near the end of the `<script>` block:
```html
window.addEventListener('DOMContentLoaded', loadStats);
```
- The function for scissors is named `scissorss()` (three s characters). That works but could be renamed to `scissors()` for clarity.
- `localStorage.clear()` in `resetStats()` will remove all keys from localStorage (not just this game's keys). Consider removing only the specific keys:
```js
localStorage.removeItem('wins');
localStorage.removeItem('losses');
localStorage.removeItem('ties');
localStorage.removeItem('gamesplayed');
```
- Accessibility: the buttons currently rely on click handlers; consider adding keyboard support and ARIA labels for accessibility.

## Styling and Responsiveness
- The game uses the Poppins font (Google Fonts).
- Uses CSS gradients, shadows and simple animations for win/lose/tie feedback.
- Responsive breakpoints at 768px and 480px to adapt layout and font sizes.

## License
MIT License

## Want me to improve the code?
I can make small, safe improvements now (for example: call `loadStats()` on page load, change `resetStats()` to remove only the game's keys, or rename the `scissorss()` function). Tell me which changes you'd like and I'll apply them and test them for you.
