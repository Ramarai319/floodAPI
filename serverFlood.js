import express from "express";
import bodyParser from "body-parser";
import path from "path"
import axios from "axios";


import { dirname } from "path";
import { fileURLToPath } from "url";


const __dirname = dirname(fileURLToPath(import.meta.url))

const app = express()


app.use(express.static(path.join(__dirname, 'public')))
app.use(bodyParser.urlencoded({extended: true}))
app.set('views', path.join(__dirname, 'views'))
app.set('view engine', 'ejs')


app.get('/', (req, res) => {
    
    res.render('home')
})

app.get('/allData', async (req, res) => {
    const data = await axios.get('https://environment.data.gov.uk/flood-monitoring/id/floods')
    const floodData = data.data.items

   res.render('showData', {floodData})
})


const getSevere = async (severe) => {
    const data = await axios.get(`https://environment.data.gov.uk/flood-monitoring/id/floods?min-severity=${severe}`)
    const res = data.data.items
    return res
}
app.get('/severe/:level', async (req, res) => {
    const level = parseInt(req.params.level)
   
    const floodData = await getSevere(level)
    console.log(floodData.map(data => data.severityLevel).filter(num => num %2 === 0).length)

   
    res.render('severe', {floodData, level})
})
app.get('/severe/:level/:floodAreaID', async (req, res) => {
    const level = parseInt(req.params.level)
    const id = req.params.floodAreaID
    const result = await getSevere(level)
    

    const floodData = result.find(data => data.floodAreaID === id)
    console.log(floodData)
    res.render('severeDetails', {floodData, level})
})


app.listen(8080, () => {
    console.log('flood gates are open')
})