# TS-project-template
Template project for TypeScript applications

> You can read more about this repo in [this blogpost](https://blog.jcore.com/2021/01/how-to-set-up-a-vanilla-ts-application/)

### Requirements
- install sass: `npm install -g sass`

## tech-stack
- This project uses: TypeScript, HTML, and SASS
- Package manager: npm
- Testing framework: Jest
- Build-tool: Webpack
- Server: webpack-dev-server
- Linting: airbnb eslint config

## build scripts
- `npm start` will start a devserver and expose the app on localhost:8080
- `npm run test` will run the unit tests
- `npm run lint` will run the linter
- `npm run build` will bundle the application for production

## extra features
- Will compile to ES6 javascript
- ZERO production dependencies
- Unit tests will NOT be included in the bundling
- Contains partial browser CSS reset and included a font
- contains a LOG.md file to keep notes

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
