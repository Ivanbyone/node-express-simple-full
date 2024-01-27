import express from "express";
import PostController from "./post_controller.js";

const router = express.Router();

router.post("/posts", PostController.create);
router.get("/posts", PostController.getAll);
router.get("/posts/:id", PostController.getOne);
router.put("/posts", PostController.update);
router.delete("/posts/:id", PostController.delete);

export default router;

