import { type RequestHandler } from 'express'
import type mysql from 'mysql2'
import { promisePool } from '../db'

export const getEmployees: RequestHandler = async (_req, res) => {
  try {
    const [row]: mysql.RowDataPacket[] = await promisePool.query(
      'SELECT * FROM employee;'
    )
    res.status(200).send(row)
  } catch (error) {
    res.status(500).send({ message: 'Something went wrong' })
  }
}

export const getEmployee: RequestHandler = async (req, res) => {
  try {
    const { id } = req.params
    const [row]: [mysql.RowDataPacket[]] = await promisePool.query(
      'SELECT * FROM employee WHERE id = ?;',
      [id]
    )

    if (row.length <= 0) {
      res.status(404).send({
        message: 'Employee not found'
      })
      return
    }

    res.status(200).send(row)
  } catch (error) {
    res.status(500).send({ message: 'Something went wrong' })
  }
}

export const createEmployees: RequestHandler = async (req, res) => {
  try {
    const { name, salary } = req.body
    const [row]: [mysql.OkPacket] = await promisePool.query(
      'INSERT INTO employee (name,salary) VALUES (?,?)',
      [name, salary]
    )
    console.log({ id: row.insertId, name, salary })
    res.status(201).send({ id: row.insertId, name, salary })
  } catch (error) {
    res.status(500).send({ message: 'Something went wrong' })
  }
}

export const updateEmployees: RequestHandler = async (req, res) => {
  try {
    const { id } = req.params
    const { name, salary } = req.body

    const [row]: [mysql.OkPacket] = await promisePool.query(
      'UPDATE employee SET name = IFNULL(?,name), salary = IFNULL(?,salary) WHERE id = ?',
      [name, salary, id]
    )

    if (row.affectedRows <= 0) {
      res.status(404).send({ message: 'Employee not found' })
      return
    }

    const [userUpdated] = await promisePool.query(
      'SELECT * FROM employee WHERE id = ?',
      [id]
    )
    res.status(200).send(userUpdated)
  } catch (error) {
    res.status(500).send({ message: 'Something went wrong' })
  }
}

export const deleteEmployees: RequestHandler = async (req, res) => {
  try {
    const { id } = req.params
    const [row]: [mysql.OkPacket] = await promisePool.query(
      'DELETE FROM employee WHERE id = ?',
      [id]
    )

    if (row.affectedRows <= 0) {
      res.status(404).send({ message: 'Employee not found' })
      return
    }
    res.status(200).send(`delete employee with id ${id}`)
  } catch (error) {
    res.status(500).send({ message: 'Something went wrong' })
  }
}
