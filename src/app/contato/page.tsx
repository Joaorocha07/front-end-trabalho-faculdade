'use client'
import React from 'react'

import {
  Box,
  Paper,
  Button,
  Divider,
  TextField,
  Container,
  Typography
} from '@mui/material'

import { useFormik } from 'formik'

import * as Yup from 'yup'

export default function Contato (): JSX.Element {
  const formik = useFormik({
    initialValues: {
      email: '',
      subject: '',
      message: ''
    },
    validationSchema: Yup.object({
      email: Yup.string().email('Por favor, insira um e-mail válido.').required('Campo obrigatório.'),
      subject: Yup.string().required('Campo obrigatório.'),
      message: Yup.string().required('Campo obrigatório.')
    }),
    onSubmit: (values, { resetForm }) => {
      // Lógica para manipular o envio do formulário
      console.log('Valores do formulário:', values)

      // Limpa os campos do formulário
      resetForm()
    }
  })

  return (
    <Container sx={{ py: 4, display: 'flex', alignItems: 'center', justifyContent: 'center', minHeight: 'calc(100vh - 128px)' }}>
      <Paper elevation={3} sx={{ p: 3 }}>
        <Typography variant="h3" gutterBottom>
          Entre em Contato Conosco
        </Typography>
        <Typography paragraph>
          Estamos aqui para ajudar! Se você tiver alguma dúvida, sugestão ou problema, sinta-se à vontade para nos contatar através do formulário abaixo.
        </Typography>

        <Divider sx={{ my: 2 }} />

        <Box component="form" onSubmit={formik.handleSubmit} sx={{ mt: 2 }}>
          <TextField
            fullWidth
            required
            label="Seu E-mail"
            variant="outlined"
            margin="normal"
            id="email"
            name="email"
            value={formik.values.email}
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
            error={(Boolean(formik.touched.email)) && Boolean(formik.errors.email)}
            helperText={(Boolean(formik.touched.email)) && formik.errors.email}
          />
          <TextField
            fullWidth
            required
            label="Assunto"
            variant="outlined"
            margin="normal"
            id="subject"
            name="subject"
            value={formik.values.subject}
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
            error={(Boolean(formik.touched.subject)) && Boolean(formik.errors.subject)}
            helperText={(Boolean(formik.touched.subject)) && formik.errors.subject}
          />
          <TextField
            fullWidth
            required
            label="Mensagem"
            variant="outlined"
            margin="normal"
            multiline
            rows={4}
            id="message"
            name="message"
            value={formik.values.message}
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
            error={(Boolean(formik.touched.message)) && Boolean(formik.errors.message)}
            helperText={(Boolean(formik.touched.message)) && formik.errors.message}
          />
          <Button variant="contained" color="primary" type="submit" sx={{ mt: 2 }}>
            Enviar
          </Button>
        </Box>
      </Paper>
    </Container>
  )
}
