const db = require('../data/db-config.js')


module.exports = {
    findTasks,
    addTask
}


function findTasks() {
    return db("tasks")
    
}

function addTask(newTask) {
    return db ('tasks').insert(newTask)
}


    