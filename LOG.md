In all of my apps, I would be adding and 
removing elements from the DOM. Using 'document.createElement()' on every item is a bit of a pain, so I was looking for 
an easier way and I found it in [this blogpost](https://medium.com/@julienetienne/declarative-templates-a-better-javascript-view-layer-f6a6ab5a7aa7)

It inspired me to work out his idea for the html api through JS. That resulted in a really interesting way to write html 
through JS. It's api is REALLY close to actual HTML and it renders actual HTML (no virtual DOM stuff).

You would be able to use it in much the same way as you would use React. It's api is practically the same. But it doesn't 
have any smart diffing in a virtual dom and doesn't have lifecycle hooks and stuff like that. 

So now comes the question: would I want to use it like React?

No. Firstly, because react already exists. Secondly, I don't think I want to build an SPA framework. SPA's complicate a
lot of stuff that is easy when using the browser standards. Like urls, navigation through the back-button, initial loading time, support for non JS-users and SEO.

I want to build something that is a small toolkit that enables a simple way to add html and enable the usage of components. 
I want to keep to native HTML, CSS and JS as close as possible and I think writing a single-page-app destroys the HTML parts.

### Goals:
- Build something with this as a multi-page app.
The downside of the current approach, is that there is no performance optimization
for rendering the html output.
  How about a portfolio website with a cv-part that writes out the assignments 
  as components?
  
- MPA:
    - one page with the testing content I created while creating the html-api
    - one page with multiple components that can be switched in and out of view
        - calculator
        - some kind of list
  
- Build a single-page app with this and somehow try to test performance.
    This should be simple and easy. Goal: see if my assumption is correct about
  this idea having bad performance.


### How to make a multipage app...?
Webpack is really biting me in the ass on this...
I'm not going to solve this problem tonight (30 jun). Here's some reading: https://medium.com/a-beginners-guide-for-webpack-2/multiple-entries-e1b3d83579bf
it has a 'next-page'.
