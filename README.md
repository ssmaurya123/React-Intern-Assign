How to Run the Project Locally
1) Clone the Repository
2) Install Dependencies: cd <project_folder> after that write command
"npm install"
3) for starting project :- npm start 
This command will start this project on localhost:3000
4)Initially no task will be there you can create your new tasks by clicking + icon near TODO.
5) To build the app on your machine you can run 'npm run build' this will generate build folder.
Netlify Link :- https://dashboard-assignment-react.netlify.app/

MY Approach:- 
1)Used Tailwind css for designing UI.

2)Made two different columns ie todo and task .

3)You can create new Task by giving Task name, Task Description and also can set priority .If not set then by default it will be set to High.

4)You can move tasks from TODO column to On Progress and Done and viceversa.

5)Created Feature for task filtering by category i.e. "TODO", "ON Progress" or "Done".

6)Used redux to manage state of application.Also ensured that application state is persistent using local storage.

7)Drag and Drop featuere Implemented and also persistent i.e. dont move to initial column on page reload.

NOTE: Some buttons ,features and Images are hardcoded because it is given in assignment that it can be done.
   
