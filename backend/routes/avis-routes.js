import express from 'express';
import { check } from 'express-validator';
import avisController from '../controller/avis-controller.js';
import checkAuth from '../middleware/check-auth.js';

const router = express.Router();

router.get('/', avisController.getAvis);

router.get('/:aid', avisController.getAvisById);

router.use(checkAuth);

router.post('/',
    [
        check('description').not().isEmpty()
    ],
    avisController.createdAvis
);


router.delete('/:aid', avisController.deleteAvis);

export default router;

