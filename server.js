const express = require('express')
const app = express()
const port = 3000

let products = ["Baju","Celana","Kacamata", "Ikat Pinggang"]

// CREATE
app.get('/create-products/:produk', (req, res) => {
    // console.log(req.params.produk)
    products.push(req.params.produk)
    res.send(req.params.produk +" berhasil ditambahkan")
})
// READ
app.get('/products', (req, res) => {
    res.send(products)
})
app.get('/', (req, res) => {
    res.send('Home')
})
app.get('/products/:id', (req, res) => {
    res.send(products[req.params.id])
})

// UPDATE
app.get('/update-products/:product_id/:new_product', (req, res) => {
    products[req.params.product_id] = req.params.new_product
    res.send("Data berhasil diupdate")
})

// DELETE
app.get('/delete-products/:index', (req, res) => {
    products.splice(req.params.index, 1);
    res.send("Data berhasil dihapus")
})

app.listen(port, () => {
    console.log(`E-commerce listening on port ${port}`)
  })