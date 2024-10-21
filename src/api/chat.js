import { loadKnowledgeBase } from '../../knowledge_base.json' // Carrega a função de leitura do arquivo
import path from 'path'

const knowledgeBasePath = path.resolve('./knowledgeBase.json') // Defina o caminho correto para o seu JSON

export default function handler (req, res) {
  const { message } = req.body

  if (!message) {
    return res.status(400).json({ error: 'Nenhuma mensagem enviada.' })
  }

  // Carrega a base de conhecimento
  const knowledgeBase = loadKnowledgeBase(knowledgeBasePath)
  const question = knowledgeBase.questions.find(q => q.question.toLowerCase() === message.toLowerCase())

  if (question) {
    const response = question.answer || question.answers[question.correctAnswer]
    return res.status(200).json({ response })
  }

  return res.status(404).json({ error: 'Desculpe, não consegui encontrar uma resposta para isso.' })
}
