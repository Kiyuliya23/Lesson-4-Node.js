const fs = require("fs");
const dotenv = require("dotenv");
dotenv.config();

const FILENAME = process.env.FILENAME || "myfile.txt";

fs.writeFile(FILENAME, "Этот файл создан с помощью dotenv", (err)=>{
    if(err){
        console.error("Ошибка при создании файла" ,err);
        return;
    }
    console.log("Файл успешно создан");

    fs.readFile(FILENAME, "utf8", (err, data)=>{
        if(err){
            console.error("Обработка ошибки");
            return;
        }
        console.log("Вывод файла", data );
    });
} );
