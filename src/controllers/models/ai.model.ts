import OpenAI from 'openai'

const openai = new OpenAI({
  apiKey: process.env.OPENAI_API_KEY,
})

const assistantRole =
  'You are an avid reader who is up to date with the most well-received books.'

export async function getBookRecs({
  messages,
}: {
  messages: OpenAI.ChatCompletionMessage[]
}) {
  const completion = await openai.chat.completions.create({
    messages: [
      {
        role: 'system',
        content: assistantRole,
      },
      ...messages,
    ],
    model: 'gpt-3.5-turbo',
  })

  console.log(completion.choices[0])
}
