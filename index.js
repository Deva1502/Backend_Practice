const express = require('express');
const app = express();
const fs = require('fs');
const users = require('./MOCK_DATA.json');

//middleware
app.use(express.urlencoded({ extended: false }));

// Add this line:
app.use(express.json());

// Routes
app.get("/users", (req, res) => {
    const html = `
    <ul>
    ${users.map(user => `<li>${user.first_name}</li>`).join("")}
    </ul>
    `;
    return res.send(html);
});

app.get('/api/users', (req, res) => {
    return res.json(users);
});

app.get('/api/users/:id', (req, res) => {
    const id = Number(req.params.id);
    const user = users.find(user => user.id === id);
    return res.json(user);
});

app.post('/api/users', (req, res) => {
    const body = req.body;
    users.push({...body, id: users.length + 1 });
    fs.writeFile('./MOCK_DATA.json', JSON.stringify(users),(err,data)=>{
        return res.json({status:"success",id:users.length});
    });
});

app.patch('/api/users/:id', (req, res) => {
    const id = Number(req.params.id);
    const user = users.find(user => user.id === id);
    if (!user) {
        return res.status(404).json({ message: 'User not found' });
    }
    user.first_name = req.body.first_name || user.first_name;
    user.last_name = req.body.last_name || user.last_name;
    user.email = req.body.email || user.email;
    return res.json(user);
});

app.delete('/api/users/:id', (req, res) => {
    const id = Number(req.params.id);
    const idx = users.findIndex(user => user.id === id);
    if (idx === -1) {
        return res.status(404).json({ message: 'User not found' });
    }
    users.splice(idx, 1);
    return res.status(204).send();
});

const PORT = 3000;
app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});
