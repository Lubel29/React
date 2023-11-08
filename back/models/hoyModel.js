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

module.exports = {getHoy, insertHoy}