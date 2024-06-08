import { Router } from "express";
import { getProperties, getProperty } from "./controllers/properties.js";

const router = Router();

// get a single property
router.get('/property/:id', getProperty)

// get all properties
router.get('/properties', getProperties)

export default router;