
import { Controller, useForm } from 'react-hook-form';
import TextField from '@mui/material/TextField';
import { Link, useNavigate } from 'react-router-dom';
import * as yup from 'yup';
import Box from '@mui/material/Box';
import { yupResolver } from '@hookform/resolvers/yup';
import { Divider } from '@mui/material';
import { TypeAnimation } from 'react-type-animation';
import { login } from '../../services/authService';
import Header from '../../components/Header';


const schema = yup.object().shape({
    email: yup.string().email('Veuillez entrer un mail valide').required('Veuillez spécifier un mail'),
    password: yup
        .string()
        .required('Veuillez spécifier votre mot de passe.')
        .min(4, 'Le mot de passe doit contenir au moins 4 caractères.'),
});

const defaultValues = {
    email: '',
    password: '',
    remember: true,
};

function Login() {
    const { control, formState: { errors }, handleSubmit } = useForm({
        mode: "onChange",
        defaultValues,
        resolver: yupResolver(schema),
    });
    const navigate = useNavigate();

    const onSubmit = ({email , password}) => {
        login(email, password).then(response => {
            navigate("/")
        }).catch(error => console.log(error))
    }

    return (
        <div className="min-h-full h-screen grid grid-cols-2 gap-3 w-[90%] justify-center items-center">
            <Header />
            <div className="space-y-8 rounded-[5px] w-full flex flex-col items-center sm:justify-center flex-1 shadow-lg bg-[white]">

                <div className="mb-10">
                    <div className="flex justify-center">
                        <img
                            alt=""
                            className="h-[100px] w-[100px] rounded-full"
                            src="./light.png" />
                    </div>
                    <h2 className="text-center text-3xl font-extrabold text-gray-900 mt-10">
                        Connectez-vous sur votre compte!
                    </h2>
                    <p className="text-center text-sm text-gray-600 mt-5">
                        Vous n'avez pas encore de compte ?
                        <Link to={"/signup"} className="text-terracota-600 hover:text-terracota-600 font-bold">
                            Enregistrez-vous!
                        </Link>
                    </p>
                    <form className="mt-8 space-y-6 mb-10" onSubmit={handleSubmit(onSubmit)}>
                        <Controller
                            name="email"
                            control={control}
                            render={({ field }) => (
                                <TextField
                                    {...field}
                                    className="mb-24"
                                    label="Email"
                                    type="email"
                                    error={!!errors.email}
                                    helperText={errors?.email?.message}
                                    variant="outlined"
                                    color='green'
                                    required
                                    fullWidth
                                />
                            )}
                        />
                        <Controller
                            name="password"
                            control={control}
                            render={({ field }) => (
                                <TextField
                                    {...field}
                                    className="mb-24"
                                    label="Mot de passe"
                                    type="password"
                                    error={!!errors.password}
                                    helperText={errors?.password?.message}
                                    variant="outlined"
                                    color='green'
                                    required
                                    fullWidth
                                />
                            )}
                        />
                        <div className="flex items-center justify-between ">
                            <div className="flex items-center">
                                <input
                                    id="remember-me"
                                    name="remember-me"
                                    type="checkbox"
                                    className="h-4 w-4 text-purple-600 focus:ring-purple-600 border-gray-300 rounded"
                                />
                                <label htmlFor="remember-me" className="ml-2 block text-sm text-gray-900">
                                    Rester connecter
                                </label>
                            </div>

                            <div className="text-sm">
                                <a href="/verify-account" className="font-medium text-terracota-500 hover:text-terracota-600">
                                    Mot de passe oublié ?
                                </a>
                            </div>
                        </div>
                        <button
                            type='submit'
                            className="group relative w-full h-[50px] text-[black] flex justify-center py-2 px-4 text-[17px] font-medium rounded-md bg-champagne-500 hover:bg-champagne-600 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-champagne-500 mt-10"
                        >
                            Se connecter
                        </button>
                    </form>
                    <Divider>ou continuer avec </Divider>
                    <div className='flex justify-center items-center'>
                        <button className="w-[50px] h-[50px] mt-10 rounded-full border border-[#adadad] flex justify-center items-center hover:bg-[rgb(233,232,232)]">
                            <img src='./google.png' className='w-[20px]' />
                        </button>
                    </div>
                </div>
            </div>
        </div>

    );
}

export default Login;
