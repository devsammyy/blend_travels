const express = require("express")
const { engine } = require("express-handlebars")
const app = express()

const fortunes = ["Adebayo", "Babatunde", "Oluwasegun"]
app.engine("handlebars", engine())
app.set("view engine", "handlebars")

app.use(express.static(__dirname + "/public"))

app.set("port", process.env.PORT || 3000)
const port = app.get("port")

app.get("/", (req, res) => {
    res.render('blend')
})

app.get("/about", (req, res) => {
    const randomFortune = fortunes[Math.floor(Math.random() * fortunes.length)]
    res.render("about", { fortune: randomFortune })
})

app.use((req, res) => res.status(404).render('404'))
app.use((err, req, res, next) => {
    // res.status(500)
    res.render("500")
})

app.listen(port, () => console.log(`Server running on ${port}`))
