# Events Management SPA
Events Management SPA - Server side rendered single page app using reactjs official libraries.

```
    yarn install
    yarn start
```

# TODO
* ~~Add redux to both client/server~~ [DONE]
* ~~Setup side effect for both client/server (server side use react-redux-epic)~~ [DONE]
* ~~Add react-router to both client/server~~ [DONE]
    * ~~Client: Use connected-react-router~~
    * ~~Server: combineEpics, combineReducers based on route to pre-fetch data before render~~
* Support React i18next for multi language support
* Add ImmutableJS/Reselect/Redux Actions
* CSS Modules, PostCSS
* Add Precommit hooks via lint-staged + Husky
* Implement asyncComponent (utilize React.lazy and React.suspense)
* Support for StoryBook
* Upgrade redux, redux-observable, rxjs to the newest version (Must re-implement side effect on the server)
