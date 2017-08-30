Aurelia custom attribute to add awesome spinners based on http://tobiasahlin.com/spinkit/


**demo**
http://aurelia-spinner-demo.azurewebsites.net/

**Installation**

```npm install aurelia-spinner --save```

**Plugin Setup**
The only required attribute its the spinner view.

```
import { SpinnerConfig, spinnerViews } from 'aurelia-spinner';

const spinnerConfig: SpinnerConfig = {
    spinner: spinnerViews.circle,
    useBackgroundOverlay: false,
    blockerClass: 'my-default-overlay-background'
};
 
aurelia.use.plugin(PLATFORM.moduleName('aurelia-spinner', spinnerConfig))

 ```

 **Configuration Options**
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
```
'aurelia-spinner/dist/styles.css'

css: 'spinkit/css/spinkit.css;
sass: 'spinkit/scss/spinkit.scss;

or you can import a single spinner file under the spinner folder.

css: 'spinkit/css/spinners/9-cube-grid.css';
sass: 'spinkit/scss/spinners/9-cube-grid.scss';
```

**Usage**
You need to specify an unique id for the element using the spinner attribute.
Usage with default configurations
 ```
   
  <div class="container">
    <div id="div1" spinner="show.bind: showVM"></div>
  </div>

  <div id="div2" spinner="show.bind: showVM; view.bind: viewVM; block: true; is-container: true">
  </div>
  
  Currently, you need to wrap your custom element or code.

  <div class="wrapper"> PARENT- spinner-container class will be added here
    <spinner> -> spinner will be inserted here  
   **<div id="div1" spinner="show.bind: showVM"> -> ELEMENT - BackgroundOverlay class is added here
        stuff          
    </div>**
  </div>

  <div class="wrapper">
    <my-element spinner="show.bind: showVM"/>
  </div>
  ```
  **Bindables**
```
  Bindable used to show or hide the spinner.
  show: boolean = false; 

  Just if you want to override the previous configured view.
  view: string = undefined;

  Used to display an overlay blocker with the spinner. You can change the style setting the class in the default configurarion object or overriding the css of the spinner-block class.
  block: boolean = false; 

  example: 
  
  
  <div id="spinnerContainer" spinner="show.bind: show">
  </div>

 ```
 

  **Dependencies**
  "spinkit": https://github.com/tobiasahlin/SpinKit
