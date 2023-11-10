var pool=require('./bd');

async function getHoy() {
    var query = 'select *from hoy';
    var rows= await pool.query(query);
    return rows;
}

async function insertHoy(obj) {
    try {
        var query = "insert into hoy set ?";
        var rows = await pool.query(query,[obj])
        return rows;

    } catch (error) {
        console.log(error);
        throw error;
    }
}

async function deleteHoyById(id){
    var query = 'delete from hoy where id = ?';
    var rows = await pool.query(query, [id]);
    return rows;
}

async function getHoyById(id) {
    var query = 'select *from hoy where id = ?';
    var rows = await pool.query(query, [id]);
    return rows[0];
}

async function modificarHoyById(obj,id) {
    try {
        var query = "update hoy set ? where id=?";
        var rows= await pool.query (query, [obj,id]);
        return rows;
    }catch (error) {
        throw error;
    }
}

module.exports = {getHoy, insertHoy, deleteHoyById, getHoyById, modificarHoyById};