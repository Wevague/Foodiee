import React, { useEffect, useState } from "react";
import { z } from "zod";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import axios from "axios";
import { addMenu } from "../hooks/user.js";
import useStore from "../Zustand/store.js";
import { api } from "../lib/api.js";

const menuSchema = z.object({
  menuName: z.string().max(50, "Menu name should not exceed 50 characters"),
  description: z
    .string()
    .min(10, "Description must be at least 10 characters long")
    .max(200, "Description should not exceed 200 characters"),
});

export const getMenus = async () => {
  try {
    const response = await api.get("/getMenu");
    console.log(response.data);
    return response.data;
  } catch (error) {
    console.error("Error fetching menus:", error);
    throw error;
  }
};

const Options = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [menus, setMenus] = useState([]);

  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm({
    resolver: zodResolver(menuSchema),
  });

  const { mutate, isLoading, isError, isSuccess, error } = addMenu();

  const { setSelectedMenuId } = useStore();

  const handleOpenModal = () => {
    setIsModalOpen(true);
  };

  const handleCloseModal = () => {
    setIsModalOpen(false);
    reset();
  };

  const onSubmit = (data) => {
    mutate(data, {
      onSuccess: async () => {
        reset();
        try {
          const fetchedMenus = await getMenus();
          setMenus(fetchedMenus);
        } catch (error) {
          console.error("Error refreshing menus:", error);
        }
      },
    });
    handleCloseModal();
  };

  const handleMenuClick = (menuId) => {
    setSelectedMenuId(menuId);
  };

  useEffect(() => {
    const fetchMenus = async () => {
      try {
        const fetchedMenus = await getMenus();
        setMenus(fetchedMenus);
      } catch (error) {
        console.error("Error fetching menus:", error);
      }
    };
    fetchMenus();
  }, []);

  return (
    <div>
      <header className='bg-[url("/header.jpeg")] lg:bg-cover  h-[280px] lg:h-[350px] bg-[size:280%]  '>
        <div className="flex flex-col justify-center gap-20">
          <div className="flex px-[218px] gap-2">
            <div>
              <img
                src="/Logo.png"
                alt="logo"
                className="lg:w-[86px] w-[60px] absolute lg:top-[62px] top-[24px] left-[155px] lg:left-[215px] "
              />
            </div>
            <h3 className="text-[#857878] lg:text-4xl lg:pl-[89px] hidden lg:block  font-oswald">
              SOFT
            </h3>
          </div>
          <div className="text-center flex flex-col gap-2 lg:gap-3">
            <h1
              className=" text-4xl lg:text-6xl  text-white font-bold font-oswald  "
              style={{ textShadow: "2px 2px 4px rgba(255, 0, 0, 0.7)" }}
            >
              MENU
            </h1>
            <p className="text-[#BBBBBB] font-kellySlab  text-pretty px-2">
              Please take a look at our menu featuring food, drinks, and brunch.
              If you'd like to <br className="hidden lg:block" /> place an
              order, use the "Order Online" button located below the menu.
            </p>
          </div>
        </div>
      </header>

      <main className="bg-[url(/design.png)] font-oswald">
        <div className="flex justify-center py-3 px-2 w-full">
          <div className="flex max-w-96 gap-3 overflow-x-auto scrollbar-hide">
            {menus.map((menu) => (
              <button
                key={menu._id}
                onClick={() => handleMenuClick(menu._id)}
                className="text-sm shrink-0 font-bold bg-[#000000] text-white border-[1px] border-[#0796EF] py-[10px] w-24 hover:bg-[#0796EF] transition duration-300"
              >
                {menu.menuName}
              </button>
            ))}
          </div>

          <button
            className="text-sm font-bold mx-1 bg-[#000000] text-white border-[1px] border-[#0796EF] w-24 hover:bg-[#0796EF] transition duration-300"
            onClick={handleOpenModal}
          >
            ADD
          </button>
        </div>

        {isModalOpen && (
          <div className="fixed inset-0 bg-gray-500 bg-opacity-50 flex justify-center items-center z-50 transition-opacity duration-300 opacity-100">
            <div className="bg-white p-8 rounded-lg shadow-lg w-11/12 sm:w-1/2 md:w-1/3 max-w-lg transform transition-all duration-300 ease-in-out scale-95 opacity-100">
              <h2 className="text-2xl font-semibold mb-6 text-center">
                Add Menu Details
              </h2>
              <form onSubmit={handleSubmit(onSubmit)}>
                <div className="mb-4">
                  <label className="block text-sm font-medium text-gray-700">
                    Menu Name
                  </label>
                  <input
                    type="text"
                    {...register("menuName")}
                    name="menuName"
                    className="w-full px-4 py-3 border border-gray-300 rounded-md shadow-sm focus:ring-2 focus:ring-[#0796EF] focus:outline-none transition duration-200"
                    placeholder="Enter menu name"
                  />
                  {errors.menuName && (
                    <p className="text-red-500 text-sm mt-1">
                      {errors.menuName.message}
                    </p>
                  )}
                </div>

                <div className="mb-6">
                  <label className="block text-sm font-medium text-gray-700">
                    Description
                  </label>
                  <textarea
                    {...register("description")}
                    name="description"
                    className="w-full px-4 py-3 border border-gray-300 rounded-md shadow-sm focus:ring-2 focus:ring-[#0796EF] focus:outline-none transition duration-200"
                    placeholder="Enter description"
                    rows="4"
                  ></textarea>
                  {errors.description && (
                    <p className="text-red-500 text-sm mt-1">
                      {errors.description.message}
                    </p>
                  )}
                </div>

                <div className="flex justify-end">
                  <button
                    type="button"
                    onClick={handleCloseModal}
                    className="bg-gray-500 text-white px-6 py-3 rounded-md mr-2 hover:bg-gray-600 transition duration-300"
                  >
                    Close
                  </button>
                  <button
                    type="submit"
                    className="bg-[#0796EF] text-white px-6 py-3 rounded-md hover:bg-[#005a8d] transition duration-300"
                  >
                    Submit
                  </button>
                </div>
              </form>
            </div>
          </div>
        )}
      </main>
    </div>
  );
};

export default Options;
