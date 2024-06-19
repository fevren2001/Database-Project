# The Scream of Victory (_Our Video Game Website_)
In our website, you can find information regarding the video game such as: Characters, Tournament application form, General information about our game.

## Usage Scenarios
- The general public, even people who doesn't play our game can get information about our game. They can learn about the characters in our game and also about us (Who we are, our crew etc.)
- Only the people who are already a member of this game can join the tournament.
- People who are over 18 can participate in our tournament.
- We have 2 different json files in our game, One of it includes people who have already participated in the game. The other one is the people who have filled in the application form to attend the tournament. If a person has already filled in the tournament form, they will receive a warning if they try to fill it again. Also people who are not a member of the website will receive a warning stating that such user was not found.- 


## Project Members && Responsibilities
| Members| Responsibilities|
| ------ | ------ |
|Emre Erkuş|Home.js, Home.css, Contact.js, Contact.css, Data Control Mechanism (BackEnd) |
| Fatih Furkan Evren | Footer.js, Navbar.js, Footer.css, Navbar.css, About.js, Character.js, CharacterList.js, CharacterItem.js|

##### These are the overall structure of what we did as individuals. HOWEVER, since we did the project together, we always had the mutual consultation meaning we did everything together and asked each other during the WHOLE PROCESS.

## External Libraries
- [Mui]  We have added icons to our project for ReactJS
- [React Router] We used this to make it easier to scroll through tabs
- [Axios] We used it to receive and send data
- [Json Server] We create a fake rest API

## How To Run
- You should first install [nodeJS] into your environment. We prefer Visual Studio
- You must clone our project into your computer by using GitHub. You can either download [GitHub Desktop] and clone it easily or use the following command in Visual Studio's terminal
```sh
git clone https://github.com/emreerkus/CS391-Project-27.05.2023.git
```
- Enter inside the project file by the code
```sh
cd .\CS391-Project-27.05.2023\
```

- Install npm by the simple command 
```sh
npm install
```

- In order to activate fake rest API, you have to write the following command in the terminal
```sh
npm install -g json-server
```
- You should move the db.json file inside the folder src/data into the root directory, meaning here
CS391-Project-27.05.2023/
- Then, write this command in terminal
```sh
json-server --watch db.json
```
- Put db.json back into it's original location src/data
- If you receive any errors about execution policy, run this command in cmd to give necessary priviliges to powershell.
```sh
powershell Set-ExecutionPolicy RemoteSigned
```
- Run the project in VS Code's terminal by the following command
```sh
npm start
```
- If you get a warning stating the current port is already being used and whether you want to open it in a new port, type (Y) into terminal
```sh
Y
```

[Mui]: <https://mui.com/>
[nodeJS]: <https://nodejs.org/en>
[React Router]: <https://reactrouter.com/en/main>
[Axios]: <https://axios-http.com/docs/intro>
[Json Server]: <https://github.com/typicode/json-server>
[GitHub Desktop]: <https://desktop.github.com/>