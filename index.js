require('dotenv').config()
const express = require('express')

// import express from 'express'
const app = express()
const port = 3000

app.get('/', (req, res) => {
  res.send('Hello World!')
})

app.get('/twitter', (req, res) => {
    res.send('twitter!')
  })

  app.get('/yt', (req, res) => {
    res.send('youtube!')
  })
  app.get('/login', (req, res) => {
    res.send('login !')
  })

app.listen(process.env.PORT, () => {
  console.log(`Example app listening on port ${port}`)
})
