const express = require('express')
const users = express.Router()
const cors = require('cors')
const jwt = require('jsonwebtoken')

const User = require('../models/User')
const Inv = require('../models/Investment')
users.use(cors())

process.env.SECRET_KEY = 'secret'

users.post('/register', (req, res) => {
  const today = new Date()
  const userData = {
    first_name: req.body.first_name,
    last_name: req.body.last_name,
    address: req.body.address,
    type: req.body.type,
    email: req.body.email,
    password: req.body.password,
    created: today
  }

  User.findOne({
    where: {
      email: req.body.email
    }
  })
    //TODO bcrypt
    .then(user => {
      if (!user) {
        User.create(userData)
          .then(user => {
            let token = jwt.sign(user.dataValues, process.env.SECRET_KEY, {
              expiresIn: 1440
            })
            res.json({ token: token })
          })
          .catch(err => {
            res.send('erro: ' + err)
          })
      } else {
        res.json({ error: 'Usuário já existe' })
      }
    })
    .catch(err => {
      res.send('error: ' + err)
    })
})

users.post('/login', (req, res) => {
  User.findOne({
    where: {
      email: req.body.email,
      password: req.body.password
    }
  })
    .then(user => {
      if (user) {
        let token = jwt.sign(user.dataValues, process.env.SECRET_KEY, {
          expiresIn: 1440
        })
        res.json({ token: token })
      } else {
        res.send('Usuário não encontrado')
      }
    })
    .catch(err => {
      res.send('erro: ' + err)
    })
})

users.get('/profile', (req, res) => {
  var decoded = jwt.verify(req.headers['authorization'], process.env.SECRET_KEY)

  User.findOne({
    where: {
      id: decoded.id
    }
  })
    .then(user => {
      if (user) {
        res.json(user)
      } else {
        res.send('Usuário não encontrado')
      }
    })
    .catch(err => {
      res.send('error: ' + err)
    })
})

users.get('/profile/updateC', (req, res) => {
  var decoded = jwt.verify(req.headers['authorization'], process.env.SECRET_KEY)

  User.findOne({
    where: {
      id: decoded.id
    }
  })
    .then(user => {
      if (user) {
        user.update({
          type: 'Conservador'
        })
      } else {
        res.send('Usuário não encontrado')
      }
    })
    .catch(err => {
      res.send('error: ' + err)
    })
})

users.get('/profile/updateM', (req, res) => {
  var decoded = jwt.verify(req.headers['authorization'], process.env.SECRET_KEY)

  User.findOne({
    where: {
      id: decoded.id
    }
  })
    .then(user => {
      if (user) {
        user.update({
          type: 'Moderado'
        })
      } else {
        res.send('Usuário não encontrado')
      }
    })
    .catch(err => {
      res.send('error: ' + err)
    })
})

users.get('/profile/updateA', (req, res) => {
  var decoded = jwt.verify(req.headers['authorization'], process.env.SECRET_KEY)

  User.findOne({
    where: {
      id: decoded.id
    }
  })
    .then(user => {
      if (user) {
        user.update({
          type: 'Arrojado'
        })
      } else {
        res.send('Usuário não encontrado')
      }
    })
    .catch(err => {
      res.send('error: ' + err)
    })
})

users.post('/profile/analista', (req, res) => {
  const invData = {
    name: req.body.name,
    price: req.body.price,
    leg: req.body.leg,
  }

  Inv.findOne({
    where: {
      name: req.body.name
    }
  })
    //TODO bcrypt
    .then(inv => {
      if (!inv) {
        Inv.create(invData)
      } else {
        res.json({ error: 'Investimento já cadastrado' })
      }
    })
    .catch(err => {
      res.send('error: ' + err)
    })
})

users.get('/profile/homebroker', (req, res) => {

  Inv.findAll()
    .then(inv => {
      if (inv) {
        res.json(inv)
      } else {
        res.send('Erro ao buscar investimentos')
      }
    })
    .catch(err => {
      res.send('error: ' + err)
    })
})

module.exports = users