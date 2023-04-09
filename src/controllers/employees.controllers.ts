import { RequestHandler } from 'express'

export const getEmployees: RequestHandler = (_req, res) => {
  res.status(200).send('get employees')
}

export const createEmployees: RequestHandler = (_req, res) => {
  res.status(200).send('create employees')
}

export const updateEmployees: RequestHandler = (_req, res) => {
  res.status(200).send('update employees')
}

export const deleteEmployees: RequestHandler = (_req, res) => {
  res.status(200).send('delete employees')
}
