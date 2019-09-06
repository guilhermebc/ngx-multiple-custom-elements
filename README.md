# MultipleNgElements

This project was generated with [Angular CLI](https://github.com/angular/angular-cli) version 7.3.6.

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

## Creating custom elements

The dev-kit has a package available for building web components with angular.
You can use the @angular/elements package for this.
Here you can follow a step by step setup for angular elements running standalone or in another angular app.

### Setup WebComponents

Run `ng add @angular/elements` in the console.

The cli will install some packages to your package.json:

#### package.json

```json
{
// ...
  "dependencies": {
    // ...
    "@angular/elements": "...",
    "document-register-element": "..."
    // ...
  }
// ...
}
```

### Setup application for standalone web component

1. Generate a new project in which we can test an elements setup.

```sh
ng generate application my-first-element
```

2. Copy the script in your `angular.json` (mentioned in step Setup WebComponents) from your project to my-first-element scripts:

#### angular.json

```json
{
// ...
  "projects": {
    // ...
    "my-first-element": {
    // ...
      "scripts": [
        {
          "input": "node_modules/document-register-element/build/document-register-element.js"
        }
      ],
      // ...
    },
    // ...
  },
  // ...
}
```
