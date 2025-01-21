const express = require('express');
const bodyParser = require('body-parser');
const fs = require('fs');
const path = require('path');
const app = express();
const port = 3000;

app.use(bodyParser.json({ limit: '10mb' }));  // Para processar imagens maiores

// Pasta onde os desenhos serão salvos
const uploadsDir = path.join(__dirname, 'uploads');
if (!fs.existsSync(uploadsDir)) {
    fs.mkdirSync(uploadsDir);
}

// Rota para salvar o desenho
app.post('/upload-drawing', (req, res) => {
    const { image } = req.body;

    // Extrai a parte base64 da imagem
    const base64Data = image.replace(/^data:image\/png;base64,/, "");

    // Gera um nome único para o arquivo
    const fileName = `drawing_${Date.now()}.png`;
    const filePath = path.join(uploadsDir, fileName);

    // Salva o arquivo no servidor
    fs.writeFile(filePath, base64Data, 'base64', (err) => {
        if (err) {
            return res.status(500).json({ success: false, message: 'Erro ao salvar o desenho.' });
        }

        // Retorna a URL do desenho salvo
        res.json({
            success: true,
            imageUrl: `/uploads/${fileName}`
        });
    });
});

// Rota para acessar os desenhos salvos
app.use('/uploads', express.static(uploadsDir));

// Roda o servidor
app.listen(port, () => {
    console.log(`Servidor rodando na porta ${port}`);
});
