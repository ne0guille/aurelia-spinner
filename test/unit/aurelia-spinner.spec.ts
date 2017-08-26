import { bootstrap } from 'aurelia-bootstrapper';
import { Container, TaskQueue } from 'aurelia-framework';
import { PLATFORM } from 'aurelia-pal';
import { StageComponent } from 'aurelia-testing';

describe('testing spinner', () => {
  let component, taskQueue, isLoadingFalse;

  beforeEach(() => {
    isLoadingFalse = false;
    const view = `<div id="spinner-test" spinner="show.bind: isLoading" style="height: 500px">
                    <p>test</p>
                 </div>`;

    component = StageComponent
      .withResources(PLATFORM.moduleName('spinner'))
      .inView(view)
      .boundTo({ isLoading: isLoadingFalse });

    const container = new Container();
    taskQueue = container.get(TaskQueue);
  });

  it('should call createSpinner after attached', done => {
    let spy;

    component.manuallyHandleLifecycle().create(bootstrap)
      .then(() => spy = spyOn(component.viewModel, 'createSpinner'))
      .then(() => component.bind())
      .then(() => component.attached())
      .then(() => {
        expect(spy).toHaveBeenCalled();
        done();
      })
      .catch(e => console.log(e.toString()));
  });

  it('should toogle on show changed', done => {
    component.create(bootstrap).then(() => {
      const spy = spyOn(component.viewModel, 'showChanged')
        .and.callFake(() => component.viewModel.show = !isLoadingFalse);

      component.viewModel.showChanged();

      taskQueue.queueTask(() => {
        expect(component.viewModel.show).toBeTruthy();
        expect(spy).toHaveBeenCalled();
        done();
      });
    }).catch(e => console.log(e.toString()));
  });

  afterEach(() => component.dispose());

});
