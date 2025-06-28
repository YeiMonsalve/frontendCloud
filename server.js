import express from "express";
import compression from "compression";
import path from "path";
import { createRequestHandler } from "@remix-run/express";
import { fileURLToPath } from "url";
const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);
const app = express();
const port = process.env.PORT || 3000;
app.use(compression());
app.use(express.static(path.join(__dirname, "public")));
app.all(
    "*",
    createRequestHandler({
        build: await import("./build/server/index.js"),
        mode: process.env.NODE_ENV,
    })
);
app.listen(port, () => {
    console.log(`Remix SSR running at http://localhost:${port}`);
});