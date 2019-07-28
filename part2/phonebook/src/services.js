import Axios from "axios";
const baseUrl = "http://localhost:3001/persons";

const getAll = () => {
    return Axios.get("http://localhost:3001/persons");
};

const create = addPersonObj => {
    return Axios.post("http://localhost:3001/persons", addPersonObj);
};

const deletePerson = index => {
    return Axios.delete("http://localhost:3001/persons/" + index);
};

export default { getAll, create, deletePerson };
