import express, { urlencoded } from 'express'
import dotenv from 'dotenv'
import cookieParser from 'cookie-parser'
import cors from 'cors'
import ApiResponse from './utils/ApiResponse.js'
import { corsOrigin, defaultRouter } from './utils/config.js'

dotenv.config({
  path : "./.env"
})

const app = express()


app.use(cors({
  origin : corsOrigin,
  Credential : true
}))

app.use(express.json({limit : "2mb"}))
app.use(urlencoded({extended : true}))
app.use(express.static("public"))
app.use(cookieParser())



// ---------------------------------------------------------------------
//  routes import
import HealthRouter from './routes/health.route.js'
import AuthRouter from './routes/user.route.js'





// ---------------------------------------------------------------------
// routes
app.use(`${defaultRouter}/health`, HealthRouter)
app.use(`${defaultRouter}/auth`, AuthRouter)





// ---------------------------------------------------------------------
// not found route
app.use("*", (_,res)=>{
  res.status(404).json(new ApiResponse(404, {}, "route not found"))
})



export default app;
