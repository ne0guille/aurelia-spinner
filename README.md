Aurelia custom attribute to add awesome spinners based on http://tobiasahlin.com/spinkit/


**demo**
http://aurelia-spinner.azurewebsites.net/

**Installation**

```npm install aurelia-spinner --save```

**Plugin Setup**
The only required attribute its the spinner view.

```
import { SpinnerConfig, spinnerViews } from 'aurelia-spinner';

const spinnerConfig: SpinnerConfig = {
    spinner: spinnerViews.circle,
    useBackgroundOverlay: false,
    blockerClass: 'my-default-overlay-background',
    color: 'black'
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
Usage with default configurations
 ```
   
  <div class="container">
    <div spinner="show.bind: showVM"></div>
  </div>

  <div spinner="show.bind: showVM; view.bind: viewVM; block: true">
  </div>
  
  Currently, you need to wrap your custom element or code.
  You can specify the container element adding the spinner-container class first the children node. Also you can add the 'aurelia-spinner' class on the parent node to render the spinner component on top of your code.

  The background overlay class will be added on the container / wrapper node.

  <section spinner="show.bind: showVM">  
    <!-- spinner will be inserted here -->    
    <div class="spinner-container">  <!-- wrapper div -->  <!-- background ovelay will be added here -->
      <!-- my-custom-code -->
    </div>
  </section>

  <section class="aurelia-spinner">
  <!-- spinner will be inserted here -->     
    <div spinner="show.bind: showVM"> <!-- wrapper div -->  <!-- background ovelay will be added here -->   
    <!-- my-custom-code -->
    </div>
  </section>

  <section>
    <div spinner="show.bind: showVM" class="playground__spinner"> <!-- spinner-container class will be added here --> 
      <!-- spinner will be inserted here -->    
      stuff
    </div>
  </section>
  ```
  **Bindables**
```
  Bindable used to show or hide the spinner.
  show: boolean = false; 

  Just if you want to override the previous configured view.
  view: string = undefined;

  Used to display an overlay blocker with the spinner. You can change the style setting the class in the default configurarion object or overriding the css of the spinner-block class.
  block: boolean = false; 

  Type a color name or an hexa code.
  color: string = #333;

  example: 
  
  <div spinner="show.bind: showVM; block: true; view: viewVM; color: white"></div>

 ```

  **Dependencies**
  "spinkit": https://github.com/tobiasahlin/SpinKit
