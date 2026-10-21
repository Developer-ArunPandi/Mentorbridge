import React, { useState } from 'react';
import Button from '@mui/material/Button';
import TextField from '@mui/material/TextField';
import MenuItem from '@mui/material/MenuItem';
import FormControlLabel from '@mui/material/FormControlLabel';
import Checkbox from '@mui/material/Checkbox';
import { useNavigate } from 'react-router-dom';
import { useAtom } from 'jotai';
import { userFormAtom, type IUserFormType } from '../dataCenter/formAtom';

const FormPage = () => {
    const navigate = useNavigate();
    const [globalFormData, setGlobalFormData] = useAtom(userFormAtom);
    const [formData, setFormData] = useState<IUserFormType>(globalFormData);

    const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
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
        <div style={{ padding: '20px', maxWidth: '400px', borderRadius: '5px', display: 'flex', flexDirection: 'column', justifyContent: 'center', margin: '10% auto' }}>
            <form onSubmit={handleSubmit} style={{ display: 'flex', flexDirection: 'column', gap: '10px' }}>
                <TextField
                    name="name"
                    label="Name"
                    variant="outlined"
                    value={formData.name}
                    onChange={handleChange}
                    required
                />

                <TextField
                    name="email"
                    label="Email"
                    type='email'
                    variant="outlined"
                    value={formData.email}
                    onChange={handleChange}
                    required
                />

                <TextField
                    name="phoneNumber"
                    label="Number"
                    type="number"
                    variant="outlined"
                    value={formData.phoneNumber}
                    onChange={handleChange}
                    required
                />

                <TextField
                    name="city"
                    label="City"
                    variant="outlined"
                    value={formData.city}
                    onChange={handleChange}
                    required
                />
                <TextField
                    name="gender"
                    select
                    label="Gender"
                    variant="outlined"
                    value={formData.gender}
                    onChange={handleChange}
                    required
                >
                    <MenuItem value="Male">Male</MenuItem>
                    <MenuItem value="Female">Female</MenuItem>
                    <MenuItem value="Other">Other</MenuItem>
                </TextField>

                <FormControlLabel
                    control={
                        <Checkbox
                            name="termsAndConditions"
                            checked={formData.termsAndConditions}
                            onChange={handleChange}
                            required
                        />
                    }
                    label="I accept Terms & Conditions"
                />

                <Button type="submit" variant="contained" color="success" style={{ marginTop: '10px' }}>
                    Submit
                </Button>
            </form>
        </div>
    );
};

export default FormPage;




























