import axios from "axios";
const Student_URL=" ";  
class Service
{
getStudent()
{
    return axios.get(Student_URL);
}
}

export default new Service()