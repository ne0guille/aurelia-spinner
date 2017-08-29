Aurelia custom attribute to add awesome spinners based on http://tobiasahlin.com/spinkit/


**demo**
http://aurelia-spinner-demo.azurewebsites.net/

**Installation**

```npm install aurelia-spinner --save```

**Plugin Setup**
The only required attribute its the spinner view.

```import { SpinnerConfig, spinnerViews } from 'aurelia-spinner';

const spinnerConfig: SpinnerConfig = {
    spinner: spinnerViews.circle,
    useBackgroundBlocker: false,
    blockerClass: 'my-default-overlay-background'
};
 
aurelia.use.plugin(PLATFORM.moduleName('aurelia-spinner', config => spinnerConfig))

 ```

 **Options**
You can see all of the spinners available in the demo site.

 ```
 spinnerViews = {
  chasingDots
  circle,
  cubeGrid,
  doubleBounce,
  fadingCircle,
  foldingCube,
  pulse,
  rotatingPlane,
  threeBounce,
  wanderingCubes,
  wave
}
 ```

**add style in webpack**
if you use te spinner-block class you need to add this file.

'aurelia-spinner/dist/styles.css'

css: 'spinkit/css/spinkit.css;
sass: 'spinkit/scss/spinkit.scss;

or you can import a single file under the spinner folder.

css: 'spinkit/css/spinners/9-cube-grid.css';

**Usage**
You need to specify an unique id for the element using the spinner attribute.
Usage with default configurations
 ```
   
  <div class="container">
    <div id="div1" spinner="show.bind: showVM"></div>
  </div>

  <div id="div2" spinner="show.bind: showVM; view.bind: viewVM; block: true; is-container: true">
  </div>
  ```
  **Options**
```
  Bindable used to show or hide the spinner.
  show: boolean = false; 

  Just if you want to override the previous configured view.
  view: string = undefined;

  Used to display an overlay blocker with the spinner. You can change the style setting the class in the default configurarion object or overriding the css of the spinner-block class.
  block: boolean = false; 

  If you apply the spinner attribute on the element acting as the container, you need to specify it as is-container: true. Otherwise it will apply spinner outside of the element node.
  isContainer: boolean = false;

  example: 

  You need to specify is-container bindable in this case
  <my-custom-component id="spinnerContainer" spinner="show.bind: show; is-container: true">
  </my-custom-component>

  You **dont** need to specify is-container bindable in this case
  <div id="spinnerContainer>
    <my-custom-component id="myId" spinner="show.bind: show">
  </div>
 ```
 

  **Dependencies**
  "spinkit": https://github.com/tobiasahlin/SpinKit
