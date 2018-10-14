
![](https://github.com/andyChenzt/LeisureGame-Group/blob/master/src/app/assert/image/header.png)
# Leisure Game - Group 
 + By Zhongtao Chen, Qianran Li, Jinwoong Lee

---------------------------------------------------

## 1. Theme:
1. Project name: Leisure Game
2. primary user: people who want to play game in leisure time
3. Key features: 
	+ user could play real-time game in the leisure time(specific short time, not the time-counsuming game).
	+ also could do real-time chat during the game

## 2. About the project features:
1. Multiple users snake game
2. Multiple users drawing game
3. Could do the real-time chat at same time

## 3. Main Tech
	1. Web technology
		+ front-end: React for user interface
		+ back-end: Node.js 
		+ database: Mongo DB

	2. Web socket
		+ web socket for real time connection with different user by using socket.io

	3. Version Control
		+ Github

	4. Deploying
		+ Deploying on AWS EC2. (Unfortunetly, we already closed the server)

## 4. Running App
 + install node.js and react.js on your OS
 + only first time, open root folder in terminal, run "npm install" to install all required modules
 + for better using in the future, install webpack globally would be a choice (npm isntall -g webpack --save)
 + open root folder in terminal, run "npm run production" to start the server
 + open browser, localhost:3001
 >**Production is on port 3001. If you run npm start would start development mode, and it would start on port 3000.**
 
### 4.1 Script
You should install MongoDB on your OS at first.
And then clone our project and start it
``` javascript
>>> git clone https://github.com/andyChenzt/LeisureGame-Group.git
>>> cd LeisureGame-Group
>>> npm install
>>> npm -g webpack --save
>>> npm run production / (npm start)
```
## 5. File Structure
The following picture is the general structure of our project

|-- LeisureGame-Group
   |   
   |--- node_modules
   |--- public
   |    |--- bundle
   |    |--- css
   |    |--- index.html
   |      
   |--- server
   |    |--- models
   |    |--- routes
   |    |--- socket
   |    |--- server.js
   |
   |--- src
   |    |--- app
   |    |    |--- actions
   |    |    |--- assert
   |    |    |--- components
   |    |    |--- containers
   |    |    |--- reducers
   |    |    |--- router
   |    |    |--- store
   |    |    |--- types
   |    |    |--- indes.js
   |    |
   |    |--- test
   |      
   |--- .babelrc
   |--- package-lock.json
   |--- package.json
   |--- README.md
   |--- webpack.config.js
   
## 6.Simple Screen Shot
![](https://github.com/andyChenzt/LeisureGame-Group/blob/master/src/app/assert/image/WX20181010-171227.png)

![](https://github.com/andyChenzt/LeisureGame-Group/blob/master/src/app/assert/image/WX20181010-171246.png)

![](https://github.com/andyChenzt/LeisureGame-Group/blob/master/src/app/assert/image/WX20181010-171318.png)


## 7. Principles of Code Style:
1. Camel case for variable name.

2. Config file parth full upper case.

3. Semicolon for each line.

4. 4 space retract.

5. Whole english comments.

6. Export moduel at end, export function at same line.

7. Each file need a short description for member.

8. Make the variable names easy to pronounce.

9. Organize the functions in a file according to the step down rule.

10. Always declare variables with var in the appropriate scope.

11. Use line breaks after open and before close array brackets if an array has multiple lines.

12. Do not unnecessarily escape characters in strings.

13. Always put default parameters last.

14. Multiline imports should be indented just like multiline array and object literals.

15. Assign variables where you need them, but place them in a reasonable place.

16. Use shortcuts for booleans, but explicit comparisons for strings and numbers.

17. If using multi-line blocks with if and else put else on the same line.
