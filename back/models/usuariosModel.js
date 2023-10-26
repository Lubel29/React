var pool=require('./bd'); /*llamando datos bd*/
var md5=require('md5');

async function getUserByUsernameAndPassword(user, password){
    try{
        var query='select*from usuarios where usuario = ?and password = ? limit 1';
        var rows = await pool.query(query,[user,md5(password)]);
        return rows[0];
    } catch(error){
        console.log(error);
    }
}

module.exports={getUserByUsernameAndPassword}

/*async es porque no se sabe en que momento el usuario se va a loguear*/
/*Var query hace la consulta*/
/*Var rows se conecta con la query y chequea los parametros de logueo*/




