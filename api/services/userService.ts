import axios from "../index";

class UserService {
	async registerUser(data: {
	   fullName: string
      email: string
      phoneNumber: string
      password: string
      role: string
	}) {
		const response = await axios.post('/Users/register', data)
		return response.data
	}
}


export default new UserService()