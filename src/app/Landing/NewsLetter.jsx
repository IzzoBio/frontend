import * as suggestionApi from "../../api/suggestions";
import { Controller, useForm } from "react-hook-form";
import { TextField } from "@mui/material";
import * as yup from 'yup';
import { yupResolver } from "@hookform/resolvers/yup";

const schema = yup.object().shape({
    content: yup.string()
});

const defaultValues = {
    content: ''
};

function NewsLetter() {

  const { control, formState: { errors }, handleSubmit } = useForm({
    mode: "onChange",
    defaultValues,
    resolver: yupResolver(schema),
});

  const submit = (content) => {
    suggestionApi.addSuggestion(content)
      .then((res) => console.log(res))
      .catch((error) => console.log(error));
  };

  return (
    <div className="w-full py-[3rem] bg-white">
      <div className="max-w-[1280px] mx-auto flex gap-5">
        <div className="flex-1">
          <h1 className="font-[600] text-[2rem] mb-2">
            Partagez vos suggestions et idées avec nous.
          </h1>
          <p className="text-[14px] text-gray-500">
            Vos suggestions comptent pour nous nous sommes à l’écoute !
            N’hésitez pas à nous faire part de vos idées !
          </p>
        </div>
        <div className="flex-1" onSubmit={handleSubmit(submit)}>
            <form className="flex flex-wrap flex-row-reverse gap-4 items-center" onSubmit={handleSubmit(submit)}>
                <Controller
                name="content"
                control={control}
                render={({ field }) => (
                    <TextField
                    {...field}
                    className="mb-24"
                    label="Message"
                    type="content"
                    error={!!errors.content}
                    helperText={errors?.content?.message}
                    variant="outlined"
                    color="green"
                    required
                    fullWidth
                    />
                )}
                />
                <button
                        type="submit"
                        className="bg-terracota-500 text-white rounded-md p-2 mt-5 font-medium"
                    >
                    Envoyer
                </button>
            </form>
        </div>
      </div>
    </div>
  );
}

export default NewsLetter;
