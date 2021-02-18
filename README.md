# `ui5-webcomponents-snowpackstarter`

> ✨ Bootstrapped with Create Snowpack App (CSA).

This project show-cases how you can use [UI5 Web Components](https://sap.github.io/ui5-webcomponents) with plain Vanilla JS (*More Standards, Less Frameworks!*).

## Getting Started

To get started with UI5 Web Components just go to the projects' home page.

```sh
# Open the playground
open https://sap.github.io/ui5-webcomponents
```

Here you can open the playground to demo the available web components and find more material, e.g. documentation, tutorials, ...

### Kick-start your Project

To quickly get started, just used the app-template-minimal from Snowpack and kick-start your project.

```sh
# Setup a minimal project using snowpack
npx create-snowpack-app ui5webcdemo --template @snowpack/app-template-minimal
cd ui5webcdemo

# Add the latest UI5 Web Components
npm i @ui5/webcomponents -D

# Start the development server
npm start
```

### Add a Button to your Project

Open the `index.html` and add the following tag before the script tag for the `index.js`:

```html
<ui5-button id="btn">Hello World</ui5-button>
```

Afterwards open the `index.js` and import the Button module:

```js
import "@ui5/webcomponents/dist/Button";
```

Now the UI5 Web Components Button is working properly and you can add your event listener, e.g.:

```js
const btn = document.getElementById("btn");
btn.addEventListener("click", event => {
    alert(btn.innerHTML);
});
```

That's all! Enjoy...

## Available Scripts

### npm start

Runs the app in the development mode.
Open http://localhost:8080 to view it in the browser.

The page will reload if you make edits.
You will also see any lint errors in the console.

### npm run build

Builds a static copy of your site to the `build/` folder.
Your app is ready to be deployed!

**For the best production performance:** Add a build bundler plugin like [@snowpack/plugin-webpack](https://github.com/snowpackjs/snowpack/tree/main/plugins/plugin-webpack) or [snowpack-plugin-rollup-bundle](https://github.com/ParamagicDev/snowpack-plugin-rollup-bundle) to your `snowpack.config.json` config file.

### Q: What about Eject?

No eject needed! Snowpack guarantees zero lock-in, and CSA strives for the same.
