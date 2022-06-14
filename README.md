# Rapid Checkbox List
## Getting started
This site was created using Create-React-App so you can start it with:

```shell
npm i
npm start
```

You can also view it [deployed on Netlify](https://cerulean-mooncake-cf81d5.netlify.app/).

## Project walkthrough
### Understanding of the task
- Create an encapsulated widget such as might be used on a config dashboard where user choices can be made and displayed
- The widget should fetch a list via a passed in function which fetches and normalises data.
- The list should be displayed as checkbox items.
- The user's choices (selecting checkbox items) should be exposed so they can be displayed elsewhere (here at the top of the page as indexes).
- The list should work smoothly when rendering 1000 entries to the page.

### High-level overview of the solution
#### Wireframe
```
+-------------------------------------------------------------------------+
|                     +-----------------------------+                     |
|                     |   Checked item indexes: 1   |                     |
|                     +-----------------------------+                     |
|                                                                         |
|                     +-----------------------------+                     |
|                     |                             |                     |
|                     |            Checkbox List    |                     |
|                     |                             |                     |
|                     +-----------------------------+                     |
|                     |                             |                     |
|                     |      Info                   |                     |
|                     |                             |                     |
|                     | +-+ Some item 1 text        |                     |
|                     | | | Other item 1 text       |                     |
|                     | +-+ More item 1 text        |                     |
|                     |                             |                     |
|                     | +-+ Some item 2 text        |                     |
|                     | |x| Other item 2 text       |                     |
|                     | +-+                         |                     |
|                     |                             |                     |
|                     | +-+ Some item 3 text        |                     |
+-------------------------------------------------------------------------+
```

#### Component spec
A single component with two callback props:
- The first fetches and normalises the list so it can be consumed by the component.
- The second is a form change event handler for exposing the user's interactions with the list.

The component is responsible for calling the list-getting function and setting its initial state, managing its own state internally (including the checked status of the checkboxes), and displaying the UI.

N.B. The checkboxes are uncontrolled which means that their state is not managed in Javascript.

#### Step-by-step description of functionality
0. The checkbox list widget component is rendered on the page in a "loading" state, displaying a simple "loading..." messsage.
0. The component calls the async data-fetching-and-normalising function (passed in to the component as a prop). On failure the component would be set to an "error" state, displaying a simple "Something went wrong" messsage. On success the list is set in the component's "local state" and the "loading" state is removed.
0. When the state is neither "error" nor "loading" the content of the local list state is displayed (a checkbox with a label which could be multiple items).
0. When the user changes the status of a checkbox, by clicking on it, it triggers the form change handler prop passed in to the component (with the form change event as an argument). 

#### Pros and Cons
+ a11y is out-of-the-box
+ easy to test (simple i/o with encapsulated logic)
+ performance (load and responsivness) is good dispite large number of items.
+ answers understanding of brief minimally
+ low complexity

- too many elements rendered to the page
- somewhat inflexible as stands as answers quite tighty to the brief
- somewhat limiting as stands in terms of changing scope
- ux is likely subpar (can't filter, can't sort, can't search, no pagination)

#### Suggestions for improvements
- Add pagination to improve performance and useability
- Switch to a 'more powerful' state management solution and data-flow architecture => see reducer + context api [pull request](https://github.com/AlexJeffcott/rapid-checkbox-list/pull/1) and [deployed pr preview](https://deploy-preview-1--cerulean-mooncake-cf81d5.netlify.app/)