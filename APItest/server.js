import express from "espress"
import dotenv from "dotenv"

dotenv.config();

const PORT = process.env.SERVER_PORT;

//instanciar a API
const app = express()

//configurar middilware
app.use(express.json())

//chamar rotas

//hander 404
app.use((_,res, () => {
    res.status(404).json({error: "ROTA NÃO ENCONTRADA"})
}))

//iniciar a aplicação
app.listen(PORT, () => {
    console.log(`SERVIDOR RODANDO NO PORTA ${PORT}`)
})