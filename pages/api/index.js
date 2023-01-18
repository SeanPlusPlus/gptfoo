import _get from 'lodash/get'
import { Configuration, OpenAIApi } from 'openai'

require('dotenv').config()

const configuration = new Configuration({
  apiKey: process.env.OPENAI_API_KEY,
})

const openai = new OpenAIApi(configuration)

const handleInput = async (req, res) => {

  if (req.method !== 'POST') {
    res.status(405).send({ message: 'Only POST requests allowed' })
    return
  }

  const json = req.body
  const inputText = _get(json, 'inputText')

  if (!inputText) {
    res.status(400).send({ message: 'must pass inputText' })
    return
  }

  const prompt = `Is this text written by a human or a large language model? ${inputText}`

  console.log(prompt);

  const baseCompletion = await openai.createCompletion({
    prompt,
    model: 'text-davinci-003',
    temperature: 0.2,
    max_tokens: 250,
  });
  
  // The question object
  const output = baseCompletion.data.choices.pop()

  res.status(200).json({
    received: inputText,
    output,
    status: getStatus(output.text),
  })
}

const getStatus = (text) => {
  if (text.includes('not')) {
    return null
  }

  if (text.includes('neither')) {
    return null
  }

  if (text.includes('human')) {
    return 'human'
  }

  return 'ai'
}

export default handleInput
