const express = require('express')
const faker = require('faker')

const app = express()
const port = process.env.PORT || 3000

// Define API endpoints
app.get('/api/users', (req, res) => {
  const users = Array.from({ length: 30 }, () => ({
    id: faker.random.uuid(),
    name: faker.name.firstName(),
    email: faker.internet.email(),
  }))

  res.json(users)
})

app.get('/api/posts', (req, res) => {
  const posts = Array.from({ length: 30 }, () => ({
    id: faker.random.uuid(),
    title: faker.lorem.words(3),
    content: faker.lorem.paragraph(),
  }))

  res.json(posts)
})

app.get('/api/products', (req, res) => {
  const products = Array.from({ length: 30 }, () => ({
    id: faker.random.uuid(),
    name: faker.commerce.productName(),
    price: faker.commerce.price(),
  }))

  res.json(products)
})

app.get('/api/companies', (req, res) => {
  const companies = Array.from({ length: 30 }, () => ({
    id: faker.random.uuid(),
    name: faker.company.companyName(),
    industry: faker.company.industry(),
  }))

  res.json(companies)
})

app.get('/api/addresses', (req, res) => {
  const addresses = Array.from({ length: 30 }, () => ({
    id: faker.random.uuid(),
    street: faker.address.streetName(),
    city: faker.address.city(),
    country: faker.address.country(),
  }))

  res.json(addresses)
})

app.get('/api/books', (req, res) => {
  const books = Array.from({ length: 30 }, () => ({
    id: faker.random.uuid(),
    title: faker.random.words(3),
    author: faker.name.findName(),
  }))

  res.json(books)
})

app.get('/api/orders', (req, res) => {
  const orders = Array.from({ length: 30 }, () => ({
    id: faker.random.uuid(),
    product: faker.commerce.productName(),
    quantity: faker.random.number(),
  }))

  res.json(orders)
})

app.get('/api/cities', (req, res) => {
  const cities = Array.from({ length: 30 }, () => ({
    id: faker.random.uuid(),
    name: faker.address.city(),
    population: faker.random.number(),
  }))

  res.json(cities)
})

// Start the server
app.listen(port, () => {
  console.log(`Server is running on http://localhost:${port}`)
})
