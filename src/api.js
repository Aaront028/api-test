const express = require('express')
const serverless = require('serverless-http')
const cors = require('cors')
const faker = require('faker')
const openapi = require('./main.json')
const tags = require('./tags.json')
const paths = require('./paths.json')

const app = express()

app.use(cors())

const router = express.Router()

// Define API endpoints

router.get('/', (req, res) => {
  res.json(openapi)
})

router.get('/tags.json', (req, res) => {
  res.json(tags)
})

router.get('/paths.json', (req, res) => {
  res.json(paths)
})

router.get('/users', (req, res) => {
  const users = Array.from({ length: 30 }, () => ({
    id: faker.random.uuid(),
    name: faker.name.firstName(),
    email: faker.internet.email(),
  }))

  res.json(users)
})

router.get('/posts', (req, res) => {
  const posts = Array.from({ length: 30 }, () => ({
    id: faker.random.uuid(),
    title: faker.lorem.words(3),
    content: faker.lorem.paragraph(),
  }))

  res.json(posts)
})

router.get('/products', (req, res) => {
  const products = Array.from({ length: 30 }, () => ({
    id: faker.random.uuid(),
    name: faker.commerce.productName(),
    price: faker.commerce.price(),
  }))

  res.json(products)
})

router.get('/companies', (req, res) => {
  const companies = Array.from({ length: 30 }, () => ({
    id: faker.random.uuid(),
    name: faker.company.companyName(),
    industry: faker.company.industry(),
  }))

  res.json(companies)
})

router.get('/addresses', (req, res) => {
  const addresses = Array.from({ length: 30 }, () => ({
    id: faker.random.uuid(),
    street: faker.address.streetName(),
    city: faker.address.city(),
    country: faker.address.country(),
  }))

  res.json(addresses)
})

router.get('/books', (req, res) => {
  const books = Array.from({ length: 30 }, () => ({
    id: faker.random.uuid(),
    title: faker.random.words(3),
    author: faker.name.findName(),
  }))

  res.json(books)
})

router.get('/orders', (req, res) => {
  const orders = Array.from({ length: 30 }, () => ({
    id: faker.random.uuid(),
    product: faker.commerce.productName(),
    quantity: faker.random.number(),
  }))

  res.json(orders)
})

router.get('/cities', (req, res) => {
  const cities = Array.from({ length: 30 }, () => ({
    id: faker.random.uuid(),
    name: faker.address.city(),
    population: faker.random.number(),
  }))

  res.json(cities)
})

app.use('/.netlify/functions/api', router)

module.exports = app
module.exports.handler = serverless(app)
// const express = require('express')
// const serverless = require('serverless-http')

// const app = express()
// const router = express.Router()

// router.get('/', (req, res) => {
//   res.json({
//     hello: 'hi!',
//   })
// })

// app.use(`/.netlify/functions/api`, router)

// module.exports = app
// module.exports.handler = serverless(app)
