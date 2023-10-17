import { Response } from 'express'

export class ReturnError {
  error: boolean
  message: string
  statusCode?: number

  constructor(res: Response, error: Error, statusCode?: number) {
    this.error = true
    this.message = error.message
    this.statusCode = statusCode || 500

    res.status(this.statusCode).send(this)
  }
}
