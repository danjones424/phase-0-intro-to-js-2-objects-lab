const employee = {
    name: "Sabrina",
    streetAdress: "3190 Broomes Island Rd"
}
function updateEmployeeWithKeyAndValue(obj, key, value,) {
    return {
        ...obj,
        [key]:value
    };
}
function destructivelyUpdateEmployeeWithKeyAndValue(obj, key, value) {
  obj[key] = value;
  return obj
}

function deleteFromEmployeeByKey(employee, key){
    const newObj = {...employee};
    delete newObj[key]
    return newObj
}
function destructivelyDeleteFromEmployeeByKey(employee, key){
    delete employee[key];
    return employee;
}