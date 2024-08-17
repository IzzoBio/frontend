import { Link, useNavigate } from 'react-router-dom';
import * as yup from 'yup';
import Box from '@mui/material/Box';
import Paper from '@mui/material/Paper';
import { yupResolver } from '@hookform/resolvers/yup';
import Input from '../../components/Input/Input';
import { Divider, TextField } from '@mui/material';
import { TypeAnimation } from 'react-type-animation';
import Header from '../../components/Header';
import { Controller, useForm } from 'react-hook-form';
import * as userApi from '../../api/users';

/**
 * Form Validation Schema
 */
const schema = yup.object().shape({
  email: yup.string().email('Veuillez entrer un mail valide').required('Veuillez spécifier un mail'),
  password: yup
    .string()
    .required('Veuillez spécifier votre mot de passe.')
    .min(4, 'Le mot de passe doit contenir au moins 4 charactères.'),
  passwordConfirmation: yup
    .string()
    .required('Veuillez spécifier votre mot de passe.')
    .min(4, 'Le mot de passe doit contenir au moins 4 charactères.'),
});

const defaultValues = {
  name: '',
  email: '',
  password: '',
  passwordConfirmation: '',
};

function Signup() {
  const { control, formState: { errors }, handleSubmit } = useForm({
      mode: "onChange",
      defaultValues,
      resolver: yupResolver(schema),
  });
  const navigate = useNavigate();

  const onSubmit = (data) => {
    userApi.addUser(data).then((res) => {
      navigate("/verify-account")
    })
    .catch((e) => console.log(e));
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
            Créer un compte!
          </h2>
          <p className="text-center text-sm text-gray-600 mt-5">
            Vous avez déjà un compte ?
            <Link to={"/login"} className="font-bold text-terracota-600 hover:text-terracota-600">
              Connectez-vous!
            </Link>
          </p>
          <form className="mt-8 space-y-6 mb-10" onSubmit={handleSubmit(onSubmit)}>
            <Controller
              name="name"
              placeholder="Entrez votre nom"
              control={control}
              render={({ field }) => (
                <TextField
                  {...field}
                  className="mb-24"
                  label="Name"
                  type="name"
                  error={!!errors.name}
                  helperText={errors?.name?.message}
                  variant="outlined"
                  color="green"
                  required
                  fullWidth
                />
              )}
            />
            <Controller
              name="email"
              placeholder="Entrez votre email"
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
                  color="green"
                  required
                  fullWidth
                />
              )}
            />
            <Controller
              name="password"
              placeholder="Entrez votre password"
              control={control}
              render={({ field }) => (
                <TextField
                  {...field}
                  className="mb-24"
                  label="Password"
                  type="password"
                  error={!!errors.password}
                  helperText={errors?.password?.message}
                  variant="outlined"
                  color="green"
                  required
                  fullWidth
                />
              )}
            />
            <Controller
              name="passwordConfirmation"
              placeholder="Confirmer votre mot de passe"
              control={control}
              render={({ field }) => (
                <TextField
                  {...field}
                  className="mb-24"
                  label="PasswordConfirmation"
                  type="password"
                  error={!!errors.passwordConfirmation}
                  helperText={errors?.passwordConfirmation?.message}
                  variant="outlined"
                  color="green"
                  required
                  fullWidth
                />
              )}
            />
            <button
              type='submit'
              className="group relative w-full h-[50px] text-[black] flex justify-center py-2 px-4 text-[17px] font-medium rounded-md bg-champagne-500 hover:bg-champagne-600 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-champagne-500 mt-10"
            >
              S'inscrire
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

export default Signup;
