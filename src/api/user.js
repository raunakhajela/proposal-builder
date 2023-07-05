import axios from './axios';
const dataControllers = {
    CreateClient: async (body) => {
        try {
            let result = await axios.post(`clientadd`,body);
            return result;
        } catch (error) {
            throw error;
        }
    },
    updateClient: async (body) => {
        try {
            let result = await axios.put(`clientupdate/${body._id}`,body);
            return result;
        } catch (error) {
            throw error;
        }
    },
    ListClient: async () => {
        try {
            let result = await axios.get(`clientlist/`);
            return result;
        } catch (error) {
            throw error;
        }
    },
    getClient: async (_id) => {
        try {
            let result = await axios.get(`client/${_id}`);
            return result;
        } catch (error) {
            throw error;
        }
    },
    deleteClient: async (_id) => {
        try {
            let result = await axios.delete(`delete/${_id}`);
            return result;
        } catch (error) {
            throw error;
        }
    },
   
    // addUserList: async (data) => {
    //     try {
    //         let result = await securedApi.post(`/api/add-user`, data);
    //         return result;
    //     } catch (error) {
    //         throw error;
    //     }
    // },
    // editUser: async (data) => {
    //     try {
    //         let result = await securedApi.post(`/api/edit-user`, data);
    //         return result;
    //     } catch (error) {
    //         throw error;
    //     }
    // },
    // deleteUser: async (email) => {
    //     try {
    //         let result = await securedApi.post(`/api/delete-user`, { email });
    //         return result;
    //     } catch (error) {
    //         throw error;
    //     }
    // }
};

export default dataControllers;
