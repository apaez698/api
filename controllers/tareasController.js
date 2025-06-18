let tareas = [];

exports.getTareas = (req, res) => {
  console.log(`El numero de tareas es ${tareas.length}`);
  res.json(tareas);
};

exports.addTarea = (req, res) => {
  let { nombre, completed } = req.body;
  let nuevo = { id: Date.now(), nombre, completed };
  console.log('Se agregaron nuevas tareas')
  tareas.push(nuevo);
  res.status(201).json(nuevo);
};

exports.eliminarTarea = (req, res) => {
  let id = Number(req.params.id);
  let tareaExistente = tareas.find((t) => t.id === id);
  if (!tareaExistente) {
    return res.status(404).json({ error: "Tarea no encontrada" });
  }

  tareas = tareas.filter((t) => t.id !== id);
  res.json({ message: "Tarea eliminada correctamente" });
};
