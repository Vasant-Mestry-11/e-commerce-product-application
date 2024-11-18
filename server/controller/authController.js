import { comparePassword, hashPassword } from "../helpers/authHelper.js";
import userModel from "../models/userModel.js"
import jwt from 'jsonwebtoken'


const registerController = async (req, res) => {
  try {
    const { name, email, password, phone, address } = req.body;

    // validations
    if (!name) return res.send({ message: 'Name is required' })
    if (!email) return res.send({ message: 'Email is required' })
    if (!password) return res.send({ message: 'Password is required' })
    if (!phone) return res.send({ message: 'Phone number is required' })
    if (!address) return res.send({ message: 'Address is required' })

    const existingUser = await userModel.findOne({ email })
    // existing user
    if (existingUser) {
      return res.status(200).send({
        success: false,
        message: "Already register please login"
      })
    }

    // register user
    const hashedPassword = await hashPassword(password)

    // save
    const user = await new userModel({ name, email, password: hashedPassword, phone, address, }).save()

    return res.status(201).send({
      success: true,
      message: 'User registered successfully',
      user
    })

  } catch (error) {
    console.log(error)
    res.status(500).send({
      success: false,
      message: 'Error in Registration',
      error
    })
  }
}

const loginController = async (req, res) => {
  try {
    const { email, password } = req.body;

    // validation
    if (!email || !password) return res.status(404).send({
      success: false,
      message: 'Invalid credentials'
    })

    const user = await userModel.findOne({ email })

    if (!user) return res.status(404).send({
      success: false,
      message: 'Email is not registered'
    })

    const match = await comparePassword(password, user.password);

    if (!match) return res.status(200).send({
      success: false,
      message: "Invalid password"
    })

    // generate token
    const token = await jwt.sign({ _id: user._id }, process.env.JWT_SECRET, {
      expiresIn: '7d'
    });

    return res.status(200).send({
      success: true,
      message: "Login successfull",
      user: {
        name: user.name,
        email: user.email,
        address: user.address,
        phone: user.phone
      },
      token
    })

  } catch (error) {
    console.log(error);
    res.status(500).send({
      success: false,
      message: 'Error in login',
      error
    })
  }
}

const testController = (req, res) => {
  res.send('Protected route')
}

export { registerController, loginController, testController }