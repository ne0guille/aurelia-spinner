Aurelia custom attribute to add awesome spinners based on http://tobiasahlin.com/spinkit/


**demo**
http://aurelia-spinner-demo.azurewebsites.net/

**Installation**
`npm install aurelia-spinner --save`
-------------

**Plugin Setup**
default configuration :
```
  defaultConfig: SpinnerConfig = {
    view: "src/views/circle.html",
    useBackgroundBlocker: false,
    blockerClass: 'spinner-blocker'
  };
  ```

`aurelia.use.plugin(PLATFORM.moduleName('aurelia-spinner'));`

You can see all of the spinners available in the demo site.

**Setting Spinner Configuration**
```
//todo refactor?
let spinnerConfig = {
    view: "src/views/pulse.html",
    useBackgroundBlocker: true,
    blockerClass: 'my-spinner-blocker'
};

aurelia.use.plugin(PLATFORM.moduleName('aurelia-spinner', config => spinnerConfig))
```

**add style in webpack**
css: 'spinkit/css/spinkit.css;
sass: 'spinkit/scss/spinkit.scss;

or you can import a single file under the spinner folder.

**Usage**
Usage with default configurations
 <div spinner></div>

  **Options**
  ```
  Bindable used to show or hide the spinner.
  show: boolean = false; 

  Path of the html spinner.
  view: string = undefined;

  Used to display an overlay blocker with the spinner. You can change the style setting the class in the default configurarion object or overriding the css of the spinner-block class.
  block: boolean = false; 

  <div spinner="show.bind: show; view.bind: view; block: true"></div>
  
```

  **Dependencies**
  "spinkit": https://github.com/tobiasahlin/SpinKit
