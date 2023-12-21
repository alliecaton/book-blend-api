import OpenAI from 'openai'
import dotenv from 'dotenv'

dotenv.config()

const openai = new OpenAI({
  apiKey: process.env.OPENAI_API_KEY,
})

const assistantRole =
  'You are an avid reader who is up to date with the most well-received books. You are designed to output JSON.'

export async function getBookRecs(search) {
  try {
    const completion = await openai.chat.completions.create({
      messages: [
        {
          role: 'system',
          content: assistantRole,
        },
        {
          role: 'user',
          content: `I'm looking for 6 books similar to ${search}. Please give me the name, author, a very short description, and a few keywords to describe the mood of each book`,
        },
      ],
      model: 'gpt-3.5-turbo-1106',
      response_format: { type: 'json_object' },
    })

    return completion.choices[0].message.content
  } catch (e) {
    console.error(e)
  }
}
