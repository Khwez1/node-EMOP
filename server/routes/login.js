import express from 'express';

const router = express.Router();


router.route('/')
    .post((req, res) => {
        console.log('you have offically been registered YAAAY!')
    })



export default router;