import React from "react";
import { useForm } from "react-hook-form";
import { useSelector } from "react-redux";
import ModalWrapper from "./ModalWrapper";
import { Dialog, DialogTitle } from "@headlessui/react";
import Textbox from "./Textbox";
import Loading from "./Loader";
import Button from "./Button";

const AddUser = ({ open, setOpen, userData }) => {
  let defaultValues = userData ?? {};
  const { user } = useSelector((state) => state.auth);

  const isLoading = false,
    isUpdating = false;

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({ defaultValues });

  const handleOnSubmit = () => {};

  return (
    <>
      <ModalWrapper open={open} setOpen={setOpen}>
        <form onSubmit={handleSubmit(handleOnSubmit)} className="">
          <DialogTitle
            as="h2"
            className="text-base font-bold leading-6 text-gray-900 mb-4"
          >
            {userData ? "ACTUALIZAR PERFIL" : "AGREGAR NUEVO USUARIO"}
          </DialogTitle>
          <div className="mt-2 flex flex-col gap-6">
            <Textbox
              placeholder="Nombre Completo"
              type="text"
              name="name"
              label="Nombre Completo"
              className="w-full rounded"
              register={register("name", {
                required: "¡Se requiere nombre completo!",
              })}
              error={errors.name ? errors.name.message : ""}
            />
            <Textbox
              placeholder="Título"
              type="text"
              name="title"
              label="Título"
              className="w-full rounded"
              register={register("title", {
                required: "¡Se requiere título!",
              })}
              error={errors.title ? errors.title.message : ""}
            />
            <Textbox
              placeholder="Correo Electrónico"
              type="email"
              name="email"
              label="Correo Electrónico"
              className="w-full rounded"
              register={register("email", {
                required: "¡Se requiere correo electrónico!",
              })}
              error={errors.email ? errors.email.message : ""}
            />

            <Textbox
              placeholder="Rol"
              type="text"
              name="role"
              label="Rol"
              className="w-full rounded"
              register={register("role", {
                required: "¡Se requiere rol!",
              })}
              error={errors.role ? errors.role.message : ""}
            />
          </div>

          {isLoading || isUpdating ? (
            <div className="py-5">
              <Loading />
            </div>
          ) : (
            <div className="py-3 mt-4 sm:flex sm:flex-row-reverse">
              <Button
                type="submit"
                className="bg-blue-600 px-8 text-sm font-semibold text-white hover:bg-blue-700  sm:w-auto"
                label="Agregar"
              />

              <Button
                type="button"
                className="bg-white px-5 text-sm font-semibold text-gray-900 sm:w-auto"
                onClick={() => setOpen(false)}
                label="Cancelar"
              />
            </div>
          )}
        </form>
      </ModalWrapper>
    </>
  );
};

export default AddUser;
