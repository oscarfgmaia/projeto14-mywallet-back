import { Router } from 'express';
import { deleteEntry } from '../controllers/user.controller.js';
import { tokenValidate } from '../middlewares/tokenValidate.middleware.js';

const router = Router();
router.delete('/main/entry/:id',tokenValidate, deleteEntry);
export default router;