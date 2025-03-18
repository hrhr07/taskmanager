import { useForm } from "react-hook-form";
import ModalWrapper from "../ModalWrapper";
import { Dialog, DialogTitle } from "@headlessui/react";
import Textbox from "../Textbox";
import Button from "../Button";

const AddSubTask = ({ open, setOpen, id }) => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  // const [addSbTask] = useCreateSubTaskMutation();

  const handleOnSubmit = async (data) => {
    // try {
    //   const res = await addSbTask({ data, id }).unwrap();
    //   toast.success(res.message);
    //   setTimeout(() => {
    //     setOpen(false);
    //   }, 500);
    // } catch (err) {
    //   console.log(err);
    //   toast.error(err?.data?.message || err.error);
    // }
  };

  return (
    <>
      <ModalWrapper open={open} setOpen={setOpen}>
        <form onSubmit={handleSubmit(handleOnSubmit)} className="">
          <DialogTitle
            as="h2"
            className="text-base font-bold leading-6 text-gray-900 mb-4"
          >
            AGREGAR SUB-TAREA
          </DialogTitle>
          <div className="mt-2 flex flex-col gap-6">
            <Textbox
              placeholder="Título de Sub-Tarea"
              type="text"
              name="title"
              label="Título"
              className="w-full rounded"
              register={register("title", {
                required: "Title is required!",
              })}
              error={errors.title ? errors.title.message : ""}
            />

            <div className="flex items-center gap-4">
              <Textbox
                placeholder="Fecha"
                type="date"
                name="date"
                label="Fecha"
                className="w-full rounded"
                register={register("date", {
                  required: "Date is required!",
                })}
                error={errors.date ? errors.date.message : ""}
              />
              <Textbox
                placeholder="Etiqueta"
                type="text"
                name="tag"
                label="Etiqueta"
                className="w-full rounded"
                register={register("tag", {
                  required: "Tag is required!",
                })}
                error={errors.tag ? errors.tag.message : ""}
              />
            </div>
          </div>
          <div className="py-3 mt-4 flex sm:flex-row-reverse gap-4">
            <Button
              type="submit"
              className="bg-blue-600 text-sm font-semibold text-white hover:bg-blue-700 sm:ml-3 sm:w-auto"
              label="Agregar Tarea"
            />

            <Button
              type="button"
              className="bg-white border text-sm font-semibold text-gray-900 sm:w-auto"
              onClick={() => setOpen(false)}
              label="Cancelar"
            />
          </div>
        </form>
      </ModalWrapper>
    </>
  );
};

export default AddSubTask;
