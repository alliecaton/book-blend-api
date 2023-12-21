import { getBookRecs } from './models/ai.model'

import type { Request, Response } from 'express'

export const postMessage = async (req: Request<string[]>, res: Response) => {
  try {
    const { messages } = req.body

    const formattedMessages = messages.map((message: string) => {
      return {
        role: 'user',
        content: message,
      }
    })

    const bookRecs = await getBookRecs({ messages: formattedMessages })

    res.send({ bookRecs })
  } catch (error) {
    console.error(error)
  }
}
