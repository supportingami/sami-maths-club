# SAMI Maths Club App

## Running on android

First you must add the android platform for the build

```
cd maths-club-app
npx cap add android
```

Once the platform has been added, the app should be built and synced across
From the app folder run:

```
npm run build
npx cap sync
```

Or from the main folder

```
npm run app:build
npm run app:sync
```

Finally open Android studio in the generated folder `maths-club-app/android`
You should be able to build and run the app directly from android studio.

## Running on IOS

TODO

# Angular Docs

This project was generated with [Angular CLI](https://github.com/angular/angular-cli) version 9.1.3.

## Development server

Run `ng serve` for a dev server. Navigate to `http://localhost:4200/`. The app will automatically reload if you change any of the source files.

## Code scaffolding

Run `ng generate component component-name` to generate a new component. You can also use `ng generate directive|pipe|service|class|guard|interface|enum|module`.

## Build

Run `ng build` to build the project. The build artifacts will be stored in the `dist/` directory. Use the `--prod` flag for a production build.

## Running unit tests

Run `ng test` to execute the unit tests via [Karma](https://karma-runner.github.io).

## Running end-to-end tests

Run `ng e2e` to execute the end-to-end tests via [Protractor](http://www.protractortest.org/).

## Further help

To get more help on the Angular CLI use `ng help` or go check out the [Angular CLI README](https://github.com/angular/angular-cli/blob/master/README.md).
