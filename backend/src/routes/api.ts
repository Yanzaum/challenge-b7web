import { Router } from "express";

import * as ApiController from "../controllers/apiController";

const router = Router();

router.get("/notas", ApiController.allNotes);
router.get("/notas/:id", ApiController.searchNote);
router.post("/notas", ApiController.createNote);
router.put("/notas/:id", ApiController.updateNote);
router.delete("/notas/:id", ApiController.deleteNote);

export default router;
