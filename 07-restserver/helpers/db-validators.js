import Role from "../models/role.js";
import Usuario from "../models/usuario.js";





const esRoleValido = async( rol = '' ) => {
    
    const existeRol = await Role.findOne({ rol });
    if( !existeRol ){
        throw new Error(`El rol ${ rol } no es válido`);
    }
};



const emailExistente = async( correo = '' ) => {
    const existeCorreo = await Usuario.findOne({ correo });
    if(existeCorreo){
        throw new Error(`El correo ${ correo } ya existe`);
    };
}


const existeUsuarioPorId = async( id = '' ) => {
    const existeid = await Usuario.findById( id );
    if(!existeid){
        throw new Error(`El id ${ id } no existe`);
    };
}



export {
    esRoleValido,
    emailExistente,
    existeUsuarioPorId
}