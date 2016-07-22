# ​expense Mgmt


## 1.1 Design

The design of this app follows yeomon scaffolding and utilizes basic build tools such as NPM, Grunt, and Bower. Once you download the source files you should only need to run the following commands provided you have the proper tools installed.

```
bower install
npm install
```

Once those are done 

```
grunt serve
```


I believe (I have had a lot of this installed for years) you will need;

- Node.js
  - Npm
    - Grunt
    - Bower
- Ruby
  - Compass


## 1.1.1 JavaScript

The login logic is in its own service and its implemented from the file routing.js from inside of the ui router. I have abstracted all routs that require a login. This abstraction allows for a promise to be returned and we can use this to return a reject promise that will then redirect them to the login route.

The rest of the javascript will be in the files main.js and addExpenseModal.js


## 1.1.2 HTML

The html is inside of the folder views. I know angular well, you will see this as the views have a lot of angular specific content inside of them.


## 1.1.3 CSS

The CSS is inside of the folder styles. I used a preprocessor for it, SASS.

