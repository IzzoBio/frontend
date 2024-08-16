import { Link, useNavigate } from 'react-router-dom';
import * as yup from 'yup';
import Box from '@mui/material/Box';
import Paper from '@mui/material/Paper';
import { yupResolver } from '@hookform/resolvers/yup';
import Input from '../../components/Input/Input';
import { Divider } from '@mui/material';
import { TypeAnimation } from 'react-type-animation';
import Header from '../../components/Header';

/**
 * Form Validation Schema
 */
const schema = yup.object().shape({
  email: yup.string().email('Veuillez entrer un mail valide').required('Veuillez spécifier un mail'),
  password: yup
    .string()
    .required('Veuillez spécifier votre mot de passe.')
    .min(4, 'Le mot de passe doit contenir au moins 4 charactères.'),
});

const defaultValues = {
  email: '',
  password: '',
  remember: true,
};

function Signup() {
  const navigate = useNavigate();

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
          <form className="mt-8 space-y-6 mb-10">
            <Input label={"Email"} type={"email"} placeholder={"Entrez votre email"} />
            <Input label={"Mot de passe"} type={"password"} placeholder={"Entrez votre mot de passe"} />
            <Input label={"Confirmation de mot de passe"} type={"confirmPassword"} placeholder={"Confirmer le mot de passe"} />
            <button
              type='submit'
              onClick={() => navigate("/verify-account")}
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
