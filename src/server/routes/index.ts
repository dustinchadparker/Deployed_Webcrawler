import * as express from "express";

import pupRouter from "../pupRouter";

const router = express.Router();

router.use("/pupRouter", pupRouter);

export default router;
