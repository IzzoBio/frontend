import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import Input from '../../components/Input/Input';
import Header from '../../components/Header'; 
import { Divider } from '@mui/material';

const ResetPassword = () => {
    const [password, setPassword] = useState('');
    const [confirmPassword, setConfirmPassword] = useState('');
    const [message, setMessage] = useState('');
    const navigate = useNavigate();

    const handleResetPassword = (e) => {
        e.preventDefault();
        if (password !== confirmPassword) {
            setMessage('Les mots de passe ne correspondent pas.');
            return;
        }
        try {
            setMessage('Votre mot de passe a été réinitialisé avec succès.');
            navigate('/login');
        } catch (error) {
            setMessage('Une erreur est survenue. Veuillez réessayer.');
        }
    };

    return (
        <div className="min-h-full h-screen grid grid-cols-2 gap-3 w-[90%] justify-center items-center">
            <Header />
            <div className="space-y-8 rounded-[5px] w-full flex flex-col items-center sm:justify-center flex-1 shadow-lg bg-[white]">
                <div className="mb-10">
                    <div className="flex justify-center">
                        <img
                            alt=""
                            className="h-[100px] w-[100px] rounded-full"
                            src="./light.png"
                        />
                    </div>
                    <h2 className="text-center text-3xl font-extrabold text-gray-900 mt-10">
                        Réinitialiser le mot de passe
                    </h2>
                    <form className="mt-8 space-y-6 mb-10" onSubmit={handleResetPassword}>
                        <Input
                            label={"Nouveau mot de passe"}
                            type={"password"}
                            placeholder={"Entrez votre nouveau mot de passe"}
                            value={password}
                            onChange={(e) => setPassword(e.target.value)}
                        />  
                        <Input
                            label={"Confirmation de mot de passe"}
                            type={"password"}
                            placeholder={"Confirmer le mot de passe"}
                            value={confirmPassword}
                            onChange={(e) => setConfirmPassword(e.target.value)}
                        />
                        <button
                            type='submit'
                            className="group relative w-full h-[50px] text-[black] flex justify-center py-2 px-4 text-[17px] font-medium rounded-md bg-champagne-500 hover:bg-champagne-600 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-champagne-500 mt-10"
                        >
                            Réinitialiser le mot de passe
                        </button>
                    </form>
                    {message && <p className="mt-4 text-sm text-gray-600">{message}</p>}

                </div>
            </div>
        </div>
    );
};

export default ResetPassword;