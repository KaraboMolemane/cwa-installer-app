"use strict";
// src/backend/src/controllers/dataController.ts
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.getData = void 0;
const dataService_1 = require("../services/dataService");
function getData(req, res) {
    return __awaiter(this, void 0, void 0, function* () {
        const filePath = 'src/backend/data/products.json';
        console.log("hits getData");
        try {
            const data = yield (0, dataService_1.readDataFromFile)(filePath);
            console.log('hits readDataFromFile');
            res.json(data);
        }
        catch (error) {
            console.error('Error reading data:', error);
            res.status(500).json({ error: 'Internal Server Error' });
        }
    });
}
exports.getData = getData;
