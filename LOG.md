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
