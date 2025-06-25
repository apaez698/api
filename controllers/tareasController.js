const Tarea = require('../model/Tarea');


exports.getTareas = async (req, res) => {
  const tareas = await Tarea.find();
  console.log(`El numero de tareas es ${tareas.length}`);
  res.json(tareas);
};

exports.addTarea = async(req, res) => {
  let { nombre, descripcion ,completed } = req.body;
  let nuevo = new Tarea({ nombre,descripcion, completed });
  await nuevo.save();
  console.log('Se agregaron nuevas tareas')
  res.status(201).json(nuevo);
};

exports.eliminarTarea = async(req, res) => {
  await Tarea.findByIdAndDelete(req.params.id)
  res.json({ message: "Tarea eliminada correctamente" });
};
