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

  const prompt = `Is the following text written by a large language model or by a human (it is okay if you do not know): "${inputText}"`

  const baseCompletion = await openai.createCompletion({
    prompt,
    model: 'text-davinci-003',
    temperature: 0.1,
    max_tokens: 256,
  });
  
  // The question object
  const output = baseCompletion.data.choices.pop()

  res.status(200).json({
    received: inputText,
    output,
    status: getStatus(output.text),
    prompt,
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

  if (text.includes('Human')) {
    return 'human'
  }

  return 'ai'
}

export default handleInput
