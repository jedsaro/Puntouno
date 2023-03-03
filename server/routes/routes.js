import { Router } from 'express'

import {
    getTasks,
    getLandingPage,
    createTask,
/*  getTask,
    updateTask,
    deleteTask, 
*/
} from '../controllers/controller.js'


const router = Router()

router.get('/', getLandingPage)
router.get('/tasks', getTasks)
router.post('/tasks', createTask)
/* router.get('/tasks/:id', getTask)
router.put('/tasks/:id', updateTask)
router.delete('/tasks/:id', deleteTask)  */

export default router
