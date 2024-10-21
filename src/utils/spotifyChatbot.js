import axios from 'axios';
import fs from 'fs';
import path from 'path';
import { exec } from 'child_process';

// Funções de carregamento e salvamento da base de conhecimento
const loadKnowledgeBase = (filePath) => {
    if (!fs.existsSync(filePath)) {
        fs.writeFileSync(filePath, JSON.stringify({ questions: [] }, null, 2));
        console.log(`O arquivo '${filePath}' foi criado.`);
    }
    return JSON.parse(fs.readFileSync(filePath, 'utf8'));
};

const saveKnowledgeBase = (filePath, data) => {
    fs.writeFileSync(filePath, JSON.stringify(data, null, 2));
};

// Função para converter texto em fala
const textToSpeech = (text) => {
    const cleanText = text.replace(/https?:\/\/\S+|www\.\S+/g, ''); // Remove URLs
    const audioFile = 'response.mp3';
    
    exec(`gtts-cli "${cleanText}" --lang pt -o ${audioFile}`, (error) => {
        if (error) {
            console.error(`Erro ao criar áudio: ${error.message}`);
            return;
        }

        // Reproduza o áudio (requer um player que suporte mp3)
        exec(`mpg123 ${audioFile}`, (error) => {
            if (error) {
                console.error(`Erro ao reproduzir áudio: ${error.message}`);
            }
            fs.unlinkSync(audioFile); // Remove o arquivo de áudio após reprodução
        });
    });
};

// Função para obter um token do Spotify
const getToken = async (clientId, clientSecret) => {
    const url = "https://accounts.spotify.com/api/token";
    const headers = {
        "Authorization": "Basic " + Buffer.from(`${clientId}:${clientSecret}`).toString('base64'),
        "Content-Type": "application/x-www-form-urlencoded",
    };
    const data = "grant_type=client_credentials";

    try {
        const response = await axios.post(url, data, { headers });
        return response.data.access_token;
    } catch (error) {
        console.error("Erro ao obter token:", error.response.data);
        return null;
    }
};

// Função para buscar artista
const searchForArtist = async (token, artistName) => {
    const url = "https://api.spotify.com/v1/search";
    const headers = { Authorization: `Bearer ${token}` };
    const params = { q: artistName, type: 'artist', limit: 1 };

    try {
        const response = await axios.get(url, { headers, params });
        return response.data.artists.items[0] || null;
    } catch (error) {
        console.error("Erro ao buscar artista:", error.response.data);
        return null;
    }
};

// Outras funções de busca e reprodução (similar à sua lógica original)...

export {
    loadKnowledgeBase,
    saveKnowledgeBase,
    textToSpeech,
    getToken,
    searchForArtist,
};
