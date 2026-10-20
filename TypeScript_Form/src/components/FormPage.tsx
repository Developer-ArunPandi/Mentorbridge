import React, { useState } from 'react';
import Button from '@mui/material/Button';
import TextField from '@mui/material/TextField';
import { useNavigate } from 'react-router-dom';
import { useAtom } from 'jotai';
import { userFormAtom, type IUserFormType } from '../dataCenter/formAtom';

const FormPage = () => {
    const navigate = useNavigate();
    const [globalFormData, setGlobalFormData] = useAtom(userFormAtom);
    const [formData, setFormData] = useState<IUserFormType>(globalFormData);

    const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        const { name, value } = e.target;
        setFormData(prev => ({
            ...prev,
            [name]: value
        }));
    };

    const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        setGlobalFormData(formData);
        navigate("/display");
    };

    return (
        <div style={{ padding: '20px' }}>
            <form onSubmit={handleSubmit}>
                <TextField 
                    name="name"
                    label="Name" 
                    variant="outlined" 
                    value={formData.name}
                    onChange={handleChange}
                    required
                    style={{ margin: "5px" }} 
                /> 
                <br />
                
                <TextField 
                    name="email"
                    label="Email" 
                    type='email' 
                    variant="outlined" 
                    value={formData.email}
                    onChange={handleChange}
                    required
                    style={{ margin: "5px" }} 
                /> 
                <br />
                
                <TextField 
                    name="age"
                    label="Age" 
                    type="number" 
                    variant="outlined" 
                    value={formData.age}
                    onChange={handleChange}
                    required
                    style={{ margin: "5px" }} 
                /> 
                <br />
                
                <Button type="submit" variant="contained" color="success" style={{ margin: "10px 5px" }}> 
                    Submit 
                </Button>
            </form>
        </div>
    );
};

export default FormPage;
