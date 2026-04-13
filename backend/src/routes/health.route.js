import { Router } from "express";
import { health } from "../controller/health.controller.js";


const router = Router()

router.route("/health").get(health)


export default router;
