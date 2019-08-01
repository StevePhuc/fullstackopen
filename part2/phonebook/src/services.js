import Axios from "axios";
const baseUrl = "http://localhost:3001/api/persons/";

const getAll = () => {
    return Axios.get(baseUrl);
};

const create = addPersonObj => {
    return Axios.post(baseUrl, addPersonObj);
};

const deletePerson = index => {
    return Axios.delete(baseUrl + "/" + index);
};

const update = (index, updatePersonObj) => {
    return Axios.put(`${baseUrl}/${index}`, updatePersonObj).then(response => response.data);
};

export default { getAll, create, deletePerson, update };
