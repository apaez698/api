let express = require('express');
let tareasRoutes = require('./routes/tareas');

let app = express();

app.use(express.json());
app.use('/tareas',tareasRoutes);

app.listen(3000,()=>{
    console.log("Servidor corriendo en el puerto 3000");
})
