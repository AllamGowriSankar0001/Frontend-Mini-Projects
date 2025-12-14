```markdown
# CarHub — Frontend (Static)

Live demo: https://car-hub-lime-five.vercel.app/


Important files & structure
--------------------------
- `index.html` — main entry (navigation)
- `home.html` — home / hero page
- `home.css` — styles for the home page

How to run locally (recommended)
--------------------------------
Run a small local HTTP server and open via `http://localhost` to avoid any browser restrictions when loading local assets.

Using Python (works on Windows PowerShell):

```powershell
# open a terminal at the project folder 'd:\New folder\MY_Project\Cars' then run
python -m http.server 8000
# open http://localhost:8000/Html/home.html in your browser
```

Or install and use the VS Code Live Server extension and click "Go Live" with the workspace open.

Troubleshooting quick checklist
-------------------------------
- Ensure the files referenced in the HTML are present in their expected folders (images, CSS, scripts).
- Open DevTools (F12) → Console and Network tabs to see any loading errors (404s) or script errors.
- If content doesn't update, try a hard refresh or clear the browser cache (Ctrl+F5).

Next steps I can help with
-------------------------
- Fix layout issues or overlay text on images
- Add a responsive slider for images or components
- Add a small script to check asset availability and show friendly errors
