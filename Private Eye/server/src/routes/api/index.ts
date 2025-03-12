import { Router } from 'express';
import { applicationRouter } from './application-routes.js';
import { userRouter } from './work-volunteer.js';

const router = Router();

router.use('/application', applicationRouter);
router.use('/user', userRouter);

export default router;
