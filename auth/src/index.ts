import express from "express"
import { currentUserRouter } from "./routes/current-user"
import { siginupRouter } from "./routes/signup"
import { signoutRouter } from "./routes/signout"
import { signinRouter } from "./routes/signin"

const app = express()

app.use(express.json())

app.use(currentUserRouter)
app.use(siginupRouter)
app.use(signoutRouter)
app.use(signinRouter)



app.listen(3000, () => {
    console.log("Listening on port 3000...!!!!")
})