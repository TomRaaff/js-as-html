# JS as HTML
A library where you can define html elements using JS, in much the same way as you would write HTML.
This is basically an implementation of the examples on [this blogpost](https://medium.com/@julienetienne/declarative-templates-a-better-javascript-view-layer-f6a6ab5a7aa7) 

## build scripts
- `npm start` will start a devserver and expose the app on localhost:8080
- `npm run test` will run the unit tests
- `npm run lint` will run the linter
- `npm run build` will bundle the application for production

## to rename:
- project folder
- readme
- index.html `<title> and <main>`
- package.json name

## switch git repo:
More info: https://gist.github.com/niksumeiko/8972566
1. create a new git repo
2. git remote add new-origin git@github.com:user/repo.git
3. git push --all new-origin
4. git remote -v
5. git remote rm origin
6. git remote rename new-origin origin
