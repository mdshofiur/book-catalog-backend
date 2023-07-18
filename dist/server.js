"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const mongoose_1 = __importDefault(require("mongoose"));
const app_1 = __importDefault(require("./app"));
let server;
function run() {
    return __awaiter(this, void 0, void 0, function* () {
        try {
            yield mongoose_1.default.connect("mongodb+srv://testingDatabase:LmlkuPM6zWk6hdW5@cluster0.e7yhr.mongodb.net/cow-hurt?retryWrites=true&w=majority");
            console.log(`Database is connected successfully`);
            server = app_1.default.listen(1000, () => {
                console.log(`Application  listening on port 1000`);
            });
        }
        catch (err) {
            console.log('Failed to connect database', err);
        }
        process.on('unhandledRejection', error => {
            if (server) {
                server.close(() => {
                    process.exit(1);
                });
            }
            else {
                process.exit(1);
            }
        });
    });
}
run();
// import mongoose from 'mongoose';
// import app from './app';
// const port: number = 2000;
// const uri: string = "mongodb+srv://testingDatabase:LmlkuPM6zWk6hdW5@cluster0.e7yhr.mongodb.net/cow-hurt?retryWrites=true&w=majority"
// app.listen(port, async () => {
//    try {
//       await mongoose.connect(uri);
//       console.log('Database is connected');
//       console.log(`Example app listening on port ${port}`);
//    } catch (error) {
//       console.log('Database connect error', error);
//    }
// });
