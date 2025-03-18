import React, { useState } from "react";
import { FaList } from "react-icons/fa";
import { MdGridView } from "react-icons/md";
import { useParams } from "react-router-dom";
import Loading from "../components/Loader";
import Title from "../components/Title";
import Button from "../components/Button";
import { IoMdAdd } from "react-icons/io";
import Tabs from "../components/Tabs";
import TaskTitle from "../components/TaskTitle";
import BoardView from "../components/BoardView";
import { tasks } from "../assets/data";
import Table from "../components/task/Table";
import AddTask from "../components/task/AddTask";

const TABS = [
  { title: "Vista de Tablero", icon: <MdGridView /> },
  { title: "Vista de Lista", icon: <FaList /> },
];

const TASK_TYPE = {
  porhacer: "bg-blue-600",
  "en progreso": "bg-yellow-600",
  completada: "bg-green-600",
};

const Tasks = () => {
  const params = useParams();

  const [selected, setSelected] = useState(0);
  const [open, setOpen] = useState(false);
  const [loading, setLoading] = useState(false);
  const [dropdownOpen, setDropdownOpen] = useState(false);

  const status = params?.status || "";

  const handleDropdownToggle = () => {
    setDropdownOpen(!dropdownOpen);
  };

  return loading ? (
    <div className="py-10">
      <Loading />
    </div>
  ) : (
    <div className="w-full">
      <div className="flex items-center justify-between mb-4">
        <Title title={status ? `${status} Tasks` : "Tareas"} />
        {!status && (
          <div className="relative">
            <Button
              onClick={handleDropdownToggle}
              label="Agregar Tarea"
              icon={<IoMdAdd className="text-lg" />}
              className="flex flex-row-reverse gap-1 items-center bg-blue-600 text-white rounded-md py-2 2xl:py-2.5"
            />
            {dropdownOpen && (
              <div className="absolute bg-white shadow-lg rounded-md mt-2 w-48">
                <Button
                  onClick={() => setOpen(true)}
                  label="Agregar Tarea"
                  className="w-full text-left py-2 px-4 text-blue-600 hover:bg-blue-100"
                />
                <Button
                  onClick={() => console.log("Agregar Tarea OCR")}
                  label="Agregar Tarea OCR"
                  className="w-full text-left py-2 px-4 text-green-600 hover:bg-green-100"
                />
              </div>
            )}
          </div>
        )}
      </div>

      <Tabs tabs={TABS} setSelected={setSelected}>
        {!status && (
          <div className="w-full flex justify-between gap-4 md:gap-x-12 py-4">
            <TaskTitle label="Por Hacer" className={TASK_TYPE.porhacer} />
            <TaskTitle
              label="En progreso"
              className={TASK_TYPE["en progreso"]}
            />
            <TaskTitle label="Completada" className={TASK_TYPE.completada} />
          </div>
        )}

        {selected !== 1 ? (
          <BoardView tasks={tasks} />
        ) : (
          <div className="w-full">
            <Table tasks={tasks} />
          </div>
        )}
      </Tabs>

      <AddTask open={open} setOpen={setOpen} />
    </div>
  );
};

export default Tasks;
