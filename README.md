# ParserDirective

this project is made on Angular JS1 directive.

# Problem Satement Input & Output

Build a directive (not a component) which will enhance the standard textarea/input into a
markdown editor  The directive is responsible to add controls (buttons) to
its host. User should able to input markdown syntax by direct typing or by control buttons. Directive
is to emit the value as both markdown and html formats as shown in below instructions. Preview
pane should show the marked-up format. You are advised not to use any third-party library for
parsing.
## Time limit : 24 hours

## User input:
**Angular** is a TypeScript based //opensource// front-end web application platform. [[
https://angular.io/ | Learn more ]]

## Html Output:
<p><strong>Angular</strong> is a TypeScript based <em>opensource</em> front-end web
application platform. <a href="https://angular.io/" target="_blank">Learn more</a></p>

## Preview:
Angular is a TypeScript based opensource front-end web application platform. Learn more


Editor controls:

Name    Markdown syntax     Functionality
Bold    **text**            It should convert text as bold
Italic  //text//            It should apply italic font style to text
URL     [[url|name]]        It should convert text as hyperlink


## Dependencies & libraries(Internet Connectivity)

[jQuery3.3](https://ajax.googleapis.com/ajax/libs/jquery/3.3.1/jquery.min.js),
[Fontawsome](https://fontawesome.com/v4.7.0/icons/), 
[MaterializeJS](https://materializecss.com/getting-started.html),
[Angular1.6](https://ajax.googleapis.com/ajax/libs/angularjs/1.6.9/angular.min.js),

# Extra features to awe you apart from requiremnets

1. Implemented Parallax [effect](https://en.wikipedia.org/wiki/Parallax) of background images for better User Experience
2. Middle level UI for i-pad views
3. Mobile views
3. Sliding Menu for mobiles
4. Comment boxes for show required corresponding HTML & Markdown Outputs


## Property-values

 `textt` is Input to Application initiallized in ParserController, Can also be provide via Provider textbox
changes are watched by the Directive `parse-To-Mark-Down`

##Images

![Screenshot from 2019-05-21 17-51-20](https://user-images.githubusercontent.com/32532380/58095785-5da5ea00-7bf1-11e9-9b5a-7222ef65836d.png)
![Screenshot from 2019-05-21 17-51-39](https://user-images.githubusercontent.com/32532380/58095786-5da5ea00-7bf1-11e9-9249-575bee0dee09.png)
![Screenshot from 2019-05-21 17-52-13](https://user-images.githubusercontent.com/32532380/58095787-5e3e8080-7bf1-11e9-9a6b-9a3eba3ef1c0.png)


