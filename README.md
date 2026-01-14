# 🌤️ My First Weather App (JS + GitHub Actions)

Hi! I'm Shanky. This is a project I built to learn how to connect a website to a real-world API and manage secret keys properly.

## 🔗 Live Link
[Click here to see the weather!](https://shankycodex.github.io/wether/)

## 📖 What I learned while building this:
* **Fetching Data:** I used the `fetch()` API in JavaScript to get JSON data from OpenWeatherMap.
* **Handling Promises:** I used `async` and `await` to make sure the app waits for the server before trying to show the temperature.
* **CSS Animations:** I learned how to use `@keyframes` to make the weather info glide onto the screen.
* **DevOps Basics:** I learned how to use **GitHub Actions** to automate my site deployment.

## 🛡️ The Security Challenge (Hiding my API Key)
The biggest challenge was keeping my API key secret. I didn't want to just paste it into my code where everyone could see it. 

**Here is how I solved it:**
1. I put a placeholder string `YOUR_SECRET_API_KEY` in my `script.js`.
2. I stored my real key in **GitHub Secrets**.
3. I wrote a `deploy.yml` file that uses a Linux `sed` command to swap the placeholder for my real key only when the site is being deployed to GitHub Pages.



## 🛠️ Built With:
* **HTML5 & CSS3** (Custom UI with a blue gradient background).
* **Vanilla JavaScript** (No libraries used!).
* **OpenWeatherMap API** (For real-time weather data).
* **GitHub Actions** (For the CI/CD pipeline).

## 🚦 Status: Working!
The app currently supports:
* Searching for any city (like Mumbai or Udgir).
* Error handling (shows "City not found!" if the name is wrong).
* Mobile-responsive layout.

---
**Next Step for me:** I want to add an icon feature that shows a sun or a cloud image based on the weather description!
