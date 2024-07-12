const express = require('express');
const app = express();
const port = 5000;
const userRouter = require('./routers/UserRouter');
const cors=require('cors');
const competitionRouter = require('./routers/CompetitionRouter');
const utilRouter = require('./routers/UtilRouter');
const blogRouter = require('./routers/BlogRouter');
const contactRouter = require('./routers/ContactRouter');



app.use(express.json());

app.use(cors({
    origin: ['http://localhost:3000'],
}))
app.use('/user', userRouter);
app.use(cors({
    origin: ['http://localhost:3000'],
}))
app.use('/competition', competitionRouter);
app.use('/util', utilRouter);
app.use( express.static('./uploads'));
app.use('/blog', blogRouter);
app.use('/contact', contactRouter);

app.listen(port, () => {
    console.log(`Server is running on port 5000`);
})