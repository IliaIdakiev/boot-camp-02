# Angular Sofia Boot Camp

## Workshop Schedule

1. Quick Review of what Angular CLI is, information about the generated files and angular bootstrap basics.

2. Showing data (interpolation), Binding data, Binding event handlers and template variables.
  
    Inside the template create an input and a button element. Whenever we enter some text insde the input element and click the button the title of our page should get changed to the text that we have entered inside the input element and the input element should get cleared.
    
    (Create event handler and make the necessary binding, Use template variable to pass the data to the handler)

3. Structural directives - *ngIf, *ngFor and attribute directives - *ngClass (Quick review of other directives)

    Inside the template create a div element that will serve as a container for todo items. We want to display a message if there are no items in the array so it's more clear to the user. However if there are items insde the array we want to iterate over them and show their titles to the user. The todo items have two propertiels - title and completed. Whenever a todo item is completed use CSS to put a line through it.

    (Use *ngIf to hide/show the necessary elements insde the template, Use interpolation to display the item property, Use ngClass directive to displat a class if a condition is met)

4. Types of components (Container and Presentational), Creating new components using Angular CLI and Inputs and Outpus. The *ngFor index variable.

    Create a new component called todo-item. Create an input property called todo and move the logic for setting a line-through to the new component. Place the new component tag inside the li element and make the necessary bindings so everything can work just like it did before. Create a new toggle button inside the new component that will emit an event that will be handled by the parent component. Whenever the button is clicked the completed state of the todo needs to get toggled. Using the same logic create a delete button and delete handler that will remove a todo from the list.

    (Use `ng g c todo-item` to create a new component, Use @Input to create a new input, Use @Output and the Angular EventEmitter class to create a new event emitter to allow you to emit events, Use *ngFor="let todo of todos; let i = index") to get the current index of the item so you can pass it to the delete todo handler.

5. Dependency Injection, Services and Introduction to Change Detection (ChangeDetectionStrategy and JavaScript value references) and Lifecycle hooks.

    Create a new todo service and move everything related to the todo management inside. 

    (Use `ng g s todo` to generate a new service)

6. Other event bindings (keyup.enter). Template element querying (@ViewChild). What is Renderer2/3 and why is it needed?

    Modify the existing input in that way that whenever we enter a text inside and press enter or the existing button a new todo with the text from the input as title is added. Use template querying to get the input element and clean it instead of doing it directly in the handler or template.

    (Use keyup.enter to attach the add todo handler just like we are doing for the button, Use @ViewChild to query the input element from the template, Use renderer.setElementProperty to clean the element's value)

7. Routing.

    Create a router configuration and integate the Angular Router with the app. Redirect the default url `''` to `list` where users can see the list of todos and create `add` and `edit` urls that will be used for adding and editing an existing todo. Create a navigation component so users will be able to navigate through our app.

8. Directives and Basic Introduction to RxJS.

    Create a directive named `filterInput`. Using the Dependency Injection, inject the element that the directive is set on and by using RxJS create a stream out of the `keyup` event. Debounce the events so we don't stress the application while someone is writing into the input and whenever the stream emits set a new query parameter called `filter` that is equal to the text inside the input. Based on the query parameter filter all todo items that include the filter in their title.

    (Use `ng g d filter-input` to create a new directive. Use RxJS `fromEvent` constructor to create a stream from the `keyup` event. Use the `router.navigate` service method to add the new query paramter into the url and remove it when it is empty)

9. Reactive, Template driven forms and Router activators.

    Create two new routes - `login`, `register`. Inse the login route use template driven forms to create a login form with necessary validations and error messages. Insde the register route use reactive forms to create a registration form with necessary validations. Create a new service that has a in-memory "database" using local storage to store all registered users. Create another `auth` service that uses local storage to keep track if we are logged or not and use this information to lock parts of the application that need authentication.
    
    **(Usage of local storage is not recomended since it's very slow. We are only using it to simplify the development process but in real world try to use it as less as possible!)**

10. Http Client and other Router Guards.

    Use the http client to fetch todos from [https://jsonplaceholder.typicode.com](https://jsonplaceholder.typicode.com) and display them insde our list. Use a resolver to resolve the data when we are entering the todo list route.

11. More interesting stuff if there is time...