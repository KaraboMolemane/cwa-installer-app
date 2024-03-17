"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const cors_1 = __importDefault(require("cors"));
const dataRoutes_1 = __importDefault(require("./routes/dataRoutes"));
const app = (0, express_1.default)();
// Allow all CORS requests (not recommended for production)
app.use((0, cors_1.default)());
app.use('/api', dataRoutes_1.default);
const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});
// ts-node src/backend/src/index.ts
