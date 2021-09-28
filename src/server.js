import { app, port } from './config/express.config.js'
import { router } from './routes/personas.api.js'

app.get('/', (req, res) => {
    res.json({'works': true})
})

app.use('/personas', router)


// Listen
app.listen(port, () => {
    console.log(`Escuchando en: http://localhost:${port}`)
})

