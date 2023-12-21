const express = require('express');
const app = express();
const cors = require('cors');
const jwt = require('jsonwebtoken');
app.use(cors());
app.use(express.json());

let ADMINS = [];
let USERS = [];
let TRAINS = [];
let BOOKINGS = [];

const SECRET = 'my-secret-key';

const authenticateJwt = (req, res, next) => {
  const authHeader = req.headers.authorization;
  if (authHeader) {
    const token = authHeader.split(' ')[1];
    jwt.verify(token, SECRET, (err, user) => {
      if (err) {
        return res.sendStatus(403);
      }
      req.user = user;
      next();
    });
  } else {
    res.sendStatus(401);
  }
};

  app.get("/admin/me", authenticateJwt,(req,res) =>{
    res.json({
      username: req.user.username
    })
  } )
//Admin routes

app.post('/admin/signup', (req, res) => {
    const { username, password } = req.body;
    const admin = ADMINS.find(a => a.username === username);
    console.log("admin signup");
    if (admin) {
      res.status(403).json({ message: 'Admin already exists' });
    } else {
      const newAdmin = { username, password };
      ADMINS.push(newAdmin);
      const token = jwt.sign({ username, role: 'admin' }, SECRET, { expiresIn: '1h' });
      res.json({ message: 'Admin created successfully', token });
    }
});

app.post('/admin/signin', (req,res) => {
    const { username, password} = req.headers;
    const admin = ADMINS.find(a => a.username === username && a.password === password);
    if(admin) {
        const token = jwt.sign({ username, role: 'admin' }, SECRET, { expiresIn:'1h'});
        res.json({ message: 'Admin signed in successfully', token });
    } else{
        res.status(403).json({ message: 'Invalid username or password'});
    }
})

app.get('/admin/userinfo', authenticateJwt, (req, res) =>{
    res.status(200).json(USERS);
})

app.post('/admin/createtrain', authenticateJwt, (req,res) =>{
    const train = req.body;
    train.id = TRAINS.length + 1;
    
    TRAINS.push(train);

    res.status(200).json({message : "Train added successfully"})

})

app.get('/admin/trains',  (req, res) =>{
    res.status(200).json(TRAINS);
})
//USER routes

app.get("/user/me", authenticateJwt,(req,res) =>{
  res.json({
    username: req.user.username
  })
} )
app.post('/user/signup', (req, res) => {
  const { username, password } = req.body;
  const user = USERS.find(a => a.username === username);
  console.log("user signup");
  if (user) {
    res.status(403).json({ message: 'User already exists' });
  } else {
    const newUser = { username, password };
    USERS.push(newUser);
    const token = jwt.sign({ username, role: 'user' }, SECRET, { expiresIn: '1h' });
    res.json({ message: 'Admin created successfully', token });
  }
});

app.post('/user/login', authenticateJwt, (req,res) => {
    res.json({message: 'Login Success'})
})

app.post('/user/trains', authenticateJwt, (req, res) =>{
    const trains = req.body;
    const existingTrains = TRAINS.find(t => t.source === trains.source && t.destination === trains.destination);
    if(existingTrains){
        res.status(200).json(existingTrains);
    }else{
        res.status(403).json({message: "No trains available for the route"})
    }
})
app.listen(3000, () =>{
    console.log("listining");
})