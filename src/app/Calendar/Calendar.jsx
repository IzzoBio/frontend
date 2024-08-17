import { useEffect, useState } from 'react';
import Sidebar from '../../components/Sidebar/Sidebar';
import Header from '../../components/Header/Header';
import { TextField, Typography } from '@mui/material';
import { Controller, useForm } from 'react-hook-form';
import * as yup from 'yup';
import { yupResolver } from '@hookform/resolvers/yup';
import { useNavigate } from 'react-router-dom';
import CurrentUserInfo from '../../utils/token';
import * as requestCuaApi from '../../api/requestcuas'

const months = [
  "Lanvier", "Fevrier", "Mars", "Avril", "Mai", "Juin",
  "Juillet", "Aout", "Septembre", "Octobre", "Novembre", "Decembre"
];

const schema = yup.object().shape({
  type: yup.string(),
  description: yup.string(),
});

const defaultValues = {
  type: '',
  description: '',
};

const CalendarApp = () => {
  const [date, setDate] = useState(new Date());
  const [contact, setContact] = useState(false);

  // const nav = useNavigate();
  // useEffect(() => {
  //   if (CurrentUserInfo().role != "USER" || CurrentUserInfo().role != "ADMIN") {
  //     nav("/");
  //   }
  // }, []);

  const { control, formState: { errors }, handleSubmit } = useForm({
    mode: "onChange",
    defaultValues,
    resolver: yupResolver(schema),
  });

  const onSubmit = (data) => {
    requestCuaApi.addRequestCUA(data).then((res) => {
      console.log(res);           
    }).catch((error) => console.log(error));    
  }

  const renderCalendar = () => {
    const currentDate = new Date(date.getFullYear(), date.getMonth(), 1);
    const lastDay = new Date(date.getFullYear(), date.getMonth() + 1, 0).getDate();
    const prevLastDay = new Date(date.getFullYear(), date.getMonth(), 0).getDate();
    const firstDayIndex = currentDate.getDay();
    const lastDayIndex = new Date(date.getFullYear(), date.getMonth() + 1, 0).getDay();
    const nextDays = 7 - lastDayIndex - 1;

    let days = [];

    for (let x = firstDayIndex; x > 0; x--) {
      days.push(<div className="pl-[50px] prev-date p-2 m-1 rounded-lg" key={`prev-${x}`}>{prevLastDay - x + 1}</div>);
    }

    for (let i = 1; i <= lastDay; i++) {
      if (i === new Date().getDate() && date.getMonth() === new Date().getMonth()) {
        days.push(<div className="pl-[50px] today p-2 m-1 rounded-lg shadow bg-rose-600 text-[white]" key={`current-${i}`}>{i}</div>);
      } else {
        days.push(<div className="p-2 m-1 rounded-lg hover:bg-gray-700 text-gray-300 pl-[50px]" key={`day-${i}`}>{i}</div>);
      }
    }

    for (let j = 1; j <= nextDays; j++) {
      days.push(<div className="pl-[50px] next-date text-gray-400 p-2 m-1 rounded-lg" key={`next-${j}`}>{j}</div>);
    }

    return days;
  };

  return (
    <div className="flex min-h-screen bg-[#f3f3f3]">
      <Sidebar />
      <main className="flex-1 p-8">
        <Header />
        <div className="flex w-[1000px]">
          <div className="w-[1000px] bg-[white] rounded-[10px] h-[400px]">
            <div className="w-[1000px] h-auto bg-gray-800 shadow-xl rounded-lg flex flex-col justify-between items-center p-4">
              <div className="w-[1000px] h-12 flex justify-between items-center text-center">
                <i className="fas fa-chevron-left text-2xl cursor-pointer" onClick={() => setDate(new Date(date.getFullYear(), date.getMonth() - 1))}></i>
                <div className="text-center">
                  <h1 className="text-2xl font-semibold uppercase tracking-wider">{months[date.getMonth()]}</h1>
                  <p className="text-xs mt-1">{new Date().toDateString()}</p>
                </div>
                <i className="fas fa-chevron-right text-2xl cursor-pointer" onClick={() => setDate(new Date(date.getFullYear(), date.getMonth() + 1))}></i>
              </div>
              <div className="w-full grid grid-cols-7 text-gray-400 text-xs mt-4">
                <div className="text-center">Dim</div>
                <div className="text-center">Lun</div>
                <div className="text-center">Mar</div>
                <div className="text-center">Mer</div>
                <div className="text-center">Jeu</div>
                <div className="text-center">Ven</div>
                <div className="text-center">Sam</div>
              </div>
              <div className="w-full grid grid-cols-7 gap-1 mt-2">
                {renderCalendar()}
              </div>
            </div>
          </div>
          <div className='flex flex-col ml-10'>
            <div className='shadow-md rounded-[10px] bg-[white] w-[500px] h-[100px]'>
              <Typography className="italic sm:text-lg text-center" sx={{ fontSize: '20px', paddingTop: '20px' }}>Nous passerons le vendredi 16 Août pour le ramassage</Typography>
            </div>
            <div className='shadow-md rounded-[10px] bg-[white] w-[500px] mt-5 h-[100px]'>
              <Typography className="italic sm:text-lg text-center" sx={{ fontSize: '20px', paddingTop: '20px' }}>Pour tout reclamation , veuillez nous contacter</Typography>
            </div>
            <button className="bg-purple-600 py-2 px-6 text-lg rounded-lg mt-4 h-[50px] focus:outline-none shadow  bg-cinnamon-500 hover:bg-cinnamon-600 text-[white]"
              onClick={() => setContact(true)}>
              Contacter un agent
            </button>
            {contact && <div>
              <form className="mt-8 space-y-6 mb-10" onSubmit={handleSubmit(onSubmit)}>
                <Controller
                  name="type"
                  control={control}
                  render={({ field }) => (
                    <TextField
                      {...field}
                      className="mb-24"
                      label="Type"
                      type="type"
                      error={!!errors.type}
                      helperText={errors?.type?.message}
                      variant="outlined"
                      color='green'
                      fullWidth
                    />
                  )}
                />
                <Controller
                  name="description"
                  control={control}
                  render={({ field }) => (
                    <TextField
                      {...field}
                      className="mb-24"
                      label="Description"
                      type="description"
                      error={!!errors.description}
                      helperText={errors?.description?.message}
                      variant="outlined"
                      color='green'
                      fullWidth
                    />
                  )}
                />
                <button
                  type='submit'
                  className="group relative w-full h-[50px] text-[black] flex justify-center py-2 px-4 text-[17px] font-medium rounded-md bg-champagne-500 hover:bg-champagne-600 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-champagne-500 mt-10"
                >
                  Envoyer
                </button>
                <button
                  onClick={() => setContact(false)}
                  className="group relative w-full h-[50px] text-[black] flex justify-center py-2 px-4 text-[17px] font-medium rounded-md bg-[#dddddd] mt-10"
                >
                  Annuler
                </button>
              </form>
            </div>}
          </div>
        </div>
      </main >
    </div>
  );
};

export default CalendarApp;
