import { getBookRecs } from '../models/ai.model'

import type { Request, Response } from 'express'

export const postMessage = async (req: Request<string[]>, res: Response) => {
  try {
    const { search } = req.body

    const bookRecs = await getBookRecs(search)

    const parsed = JSON.parse(bookRecs)
    res.json(parsed)
  } catch (error) {
    console.error(error)
  }
}
