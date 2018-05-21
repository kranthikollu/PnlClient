# PnlClient
Client code to call JAVA and NODEJS PNL calculator API and displays result in HTML table on browser

Install & Build

1) Download NODEJS - https://nodejs.org/en/download/
2) Use any IDE ( I used Visual Source Code), create Folder ( PNLClient) to workspace click on view ---> integrated terminal --> cd to current project folder
3) install nodejs ( npm install nodejs)  ( if not already installed) 
4) Copy pnlClient.js from github into the folder
5) npm install http, request, express, tableify  ( if not already installed)
6) Start server from terminal (node .\pnlClient.js)
7) Server is listening on 8000 port
8) To test this, go to browser and enter this URL http://localhost:8000/pnl  ( hits NODE JS API)
      you will see PNL details in HTML table ( service layer is provided by NODE API)
9)  Enter  URL http://localhost:8000/pnlj  ( hits JAVA REST API)
       you will see PNL details in HTML table ( service layer is provided by JAVA REST API)
