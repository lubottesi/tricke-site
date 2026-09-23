# GoFit - Health & Fitness Guide

A health and fitness site with five pages:

- **Home**
- **About**
- **Nutrition:** nutrition guide, label comparison, diet menus and a calorie needs calculator
- **Gym:** body type quiz, exercise guide, workout plans, supplementation, strength vs. hypertrophy and recovery
- **Calculators:** BMI, BMR, calories, body fat, ideal weight, water, macros, protein, workout and goal

Generated with Trickle AI while prototyping the GoFit project. The calculators alone are in [codigo-tricke-calculadoras](https://github.com/lubottesi/codigo-tricke-calculadoras).

**Live:** https://lubottesi.github.io/tricke-site/

## Stack

- React 18 (via CDN, JSX compiled in-browser with Babel Standalone - no build step)
- Tailwind CSS (via CDN)
- Font Awesome icons

## Running locally

No build step, but Babel loads the component files over HTTP, so serve the folder instead of opening `index.html` directly:

```bash
python -m http.server 8000
```

Then go to http://localhost:8000.

## Structure

```
index.html
app.js          # page switching
pages/          # Home, About, Nutrition, Gym, Calculators
components/     # Navigation, Footer, and calculators/, nutrition/, gym/ sections
utils/          # calculations and validators
styles/
```
