import express from 'express';

const app = express();

app.use(express.static('dist')); // 번들링으로 생성된 dist 폴더의 파일들을 서비스하도록 설정.

app.get('/api/getUsername', (req, res) => {
    res.send('hi');
});

app.listen(8080, () => console.log('Listening on port 8080!'));
