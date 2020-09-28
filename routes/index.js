import express from 'express'
import { catchErrors } from '../helpers.js'
import {
  getRooms,
  getRoom,
  addRoom,
  deleteRoom,
  updateRoom
} from './../controllers/roomControllers.js'

const router = express.Router()

router.get('/rooms', catchErrors(getRooms))

router.get('/room/:id', catchErrors(getRoom))

router.post('/room', catchErrors(addRoom))

router.delete('/room/:id', catchErrors(deleteRoom))

router.patch('/room/:id', catchErrors(updateRoom))

export default router
