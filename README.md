# ISTUDENT PROJECT

#### INSTALLATION
###### USE NodeJS 10.15.3

Use this command to install modules:  
`npm install`  
If you use Windows you need to install correctly sequelize:  
`npm install -g sequelize-cli`  

Copy `env.example` to `.env` and change it to your environment configuration preferences.

After, use this commands to create and migrate db.  
```
sequelize db:create
sequelize db:migrate
```


#### Start
After all configurations to start server just run ```npm start``` 

Helpful links:  
Sequelize manual: http://docs.sequelizejs.com  
Creating controller: https://www.youtube.com/watch?v=UtbAVSlRJq8&list=PL0FGkDGJQjJFUDWa8Wg502hEIlPD7kDMt&index=5  
