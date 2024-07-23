/* eslint-disable react/no-unescaped-entities */
import React from 'react'

import {
  List,
  Paper,
  Divider,
  ListItem,
  Container,
  Typography,
  ListItemText
} from '@mui/material'

export default function Sobre (): JSX.Element {
  return (
    <Container sx={{ py: 4 }}>
      <Paper elevation={3} sx={{ p: 3 }}>
        <Typography variant="h3" gutterBottom>
          Bem-vindo ao Vid Drop
        </Typography>
        <Typography variant="subtitle1" gutterBottom>
          A solução definitiva para baixar vídeos e áudios do TikTok sem marca d'água
        </Typography>
        <Divider sx={{ my: 2 }} />

        <Typography variant="h5" gutterBottom>
          Sobre o Vid Drop
        </Typography>
        <Typography paragraph>
          O Vid Drop é uma ferramenta online projetada para ajudar usuários a baixarem vídeos e áudios do TikTok sem marca d'água de maneira fácil e rápida. Nosso objetivo é oferecer uma experiência sem complicações, permitindo que você salve seus conteúdos favoritos para visualização offline ou compartilhamento.
        </Typography>

        <Typography variant="h5" gutterBottom>
          Como Funciona
        </Typography>
        <Typography paragraph>
          Com o Vid Drop, você pode baixar vídeos do TikTok em poucos passos:
        </Typography>
        <List>
          <ListItem>
            <ListItemText primary="1. Copie o link do vídeo ou áudio do TikTok que deseja baixar." />
          </ListItem>
          <ListItem>
            <ListItemText primary="2. Cole o link na caixa de entrada do Vid Drop." />
          </ListItem>
          <ListItem>
            <ListItemText primary="3. Clique no botão de download para iniciar o processo." />
          </ListItem>
        </List>
        <Typography paragraph>
          Nossa ferramenta processará o link e oferecerá a opção de baixar o vídeo ou apenas o áudio, dependendo da sua preferência.
        </Typography>

        <Typography variant="h5" gutterBottom>
          Recursos e Benefícios
        </Typography>
        <Typography paragraph>
          O Vid Drop oferece uma série de benefícios para seus usuários:
        </Typography>
        <List>
          <ListItem>
            <ListItemText primary="✔️ Download de alta qualidade" />
          </ListItem>
          <ListItem>
            <ListItemText primary="✔️ Interface amigável e fácil de usar" />
          </ListItem>
          <ListItem>
            <ListItemText primary="✔️ Sem necessidade de instalação de software" />
          </ListItem>
          <ListItem>
            <ListItemText primary="✔️ Gratuito e seguro" />
          </ListItem>
        </List>

        <Typography variant="h5" gutterBottom>
          Perguntas Frequentes
        </Typography>
        <Typography paragraph>
          **É legal baixar vídeos do TikTok?**<br />
          O uso do Vid Drop deve estar em conformidade com os termos de serviço do TikTok e as leis de direitos autorais aplicáveis.
        </Typography>
        <Typography paragraph>
          **Os vídeos baixados incluem marcas d'água?**<br />
          Não, o Vid Drop remove a marca d'água dos vídeos do TikTok durante o processo de download.
        </Typography>

        <Typography variant="h5" gutterBottom>
          Entre em Contato
        </Typography>
        <Typography paragraph>
          Se você tiver alguma dúvida ou sugestão, sinta-se à vontade para nos contatar através do nosso formulário de contato. Estamos sempre prontos para ajudar!
        </Typography>

        <Divider sx={{ my: 2 }} />
        <Typography variant="body2" color="text.secondary">
          &copy; {new Date().getFullYear()} Vid Drop. Todos os direitos reservados.
        </Typography>
      </Paper>
    </Container>
  )
}
