import express from 'express'



const app = express();

const jsonBodyMiddleware = express.json();
app.use(jsonBodyMiddleware);

const db ={
    courses:[
    {id:1, course:'Front-end'},
    {id:2, course:'Back-end'},
    {id:3, course:'DevOps'}
    ],
}

const HTTP_CODES ={
    OK_200: 200,
    CREATED_201: 201,
    NO_CONTENT_204: 204,

    BAD_REQUEST_400: 400,
    NOT_FOUND_404:404,

}

const port = 3000;

app.get('/',(request,response) =>{
        response.json([{message:"hello"},{message:'hello2'} ]);
        response.sendStatus(HTTP_CODES.OK_200);
})


app.get('/courses', (request, response) => {
    const answer = (request.query.course) ? db.courses.filter(item => item.course.indexOf(request.query.course as string) > -1 ) : db.courses;
    response.json(answer);
    response.sendStatus(HTTP_CODES.OK_200)
})

app.post('/courses', (req,res) =>{
    const name = (!req.body.course) ? 'unknown' : req.body.course
    const course = {
        id: +(Date.now()),
        course: name
    };
    db.courses.push(course);
    res.sendStatus(HTTP_CODES.CREATED_201).json(course);
})

app.put('/courses/:id', (req,res) =>{
    const foundCourse = db.courses.find(item => item.id === +req.params.id)
    if(!foundCourse){
        res.sendStatus(404);
        return;
    }

    foundCourse.course = req.body.course
    res.sendStatus(HTTP_CODES.CREATED_201);

})

app.delete('/courses/:id', (req,res) =>{
    db.courses = db.courses.filter(item => item.id !== +req.params.id);
    res.sendStatus(HTTP_CODES.NO_CONTENT_204);
})

app.get('/courses/:id', (req, res) => {
    const answer = db.courses.find(item => item.id == +req.params.id);
    (answer) ? res.json(answer) : res.sendStatus(404);
})

app.listen(port, () =>{
    console.log(`App listening on port ${port}`);
})