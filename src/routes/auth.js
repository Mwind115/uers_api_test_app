import express from 'express'
import AuthController from '../controllers/auth.controller.js'
import { verifyToken } from '../middlewares/authentication.js'

const router = express.Router()

router.post('/login', AuthController.login)

router.post('/register', AuthController.register)

// Lấy danh sách người dùng
router.get('/users', verifyToken, AuthController.getUsers)

// Xóa người dùng
router.delete('/users/:userId', verifyToken, AuthController.deleteUser)


// router.get('/', AuthController.get)

// * Demo
// Tự động lấy token từ header Authorization và kiểm tra, nếu có token mới vào đc controller demo
// router.post('/demo', verifyToken ,AuthController.demo)

export default router
