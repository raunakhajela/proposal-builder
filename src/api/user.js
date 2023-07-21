import axios from './axios';
const dataControllers = {
    CreateClient: async (body) => {
        try {
            let result = await axios.post(`clientadd`, body);
            return result;
        } catch (error) {
            throw error;
        }
    },
    updateClient: async (body) => {
        try {
            let result = await axios.put(`clientupdate/${body._id}`, body);
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
    getClientDetails: async (_id) => {
        try {
            let result = await axios.get(`getclientdetails/${_id}`);
            return result;
        } catch (error) {
            throw error;
        }
    },

    addproposal: async (data) => {
        try {
            let result = await axios.post(`proposaladd`, data);
            return result;
        } catch (error) {
            throw error;
        }
    },
    ProposalList: async () => {
        try {
            let result = await axios.get(`proposallist`);
            return result;
        } catch (error) {
            throw error;
        }
    },
    updateProposal: async (_id, body) => {
        try {
            let result = await axios.put(`proposalupdate/${_id}`, body);
            return result;
        } catch (error) {
            throw error;
        }
    },
    priviewProposal: async (_id) => {
        try {
            let result = await axios.get(`/proposalpriveiw/${_id}`);
            return result;
        } catch (error) {
            throw error;
        }
    },
};

export default dataControllers;
