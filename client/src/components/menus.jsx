import React, { useEffect, useState } from "react";
import useStore from "../Zustand/store";
import { useForm } from "react-hook-form";
import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import { api } from "../lib/api";

const Menus = () => {
  const { selectedMenuId } = useStore();
  const [menuDetails, setMenuDetails] = useState(null);
  const [isModalOpen, setIsModalOpen] = useState(false);

  const schema = z.object({
    itemName: z.string().min(1, "Item name is required"),
    description: z.string().min(1, "Description is required"),
    price: z
      .number()
      .min(1, "Price is required")
      .max(10000, "Price is too high"),
  });

  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm({
    resolver: zodResolver(schema),
  });

  useEffect(() => {
    const fetchMenuDetails = async () => {
      if (!selectedMenuId) return;
      try {
        const response = await api.get(
          `/getMenuDetails/${selectedMenuId}`
        );
        setMenuDetails(response.data);
      } catch (error) {
        console.error("Error fetching menu details:", error);
      }
    };

    fetchMenuDetails();
  }, [selectedMenuId]);

  console.log(menuDetails);

  const handleOpenModal = () => {
    setIsModalOpen(true);
  };

  const handleCloseModal = () => {
    setIsModalOpen(false);
  };

  const onSubmit = async (data) => {
    console.log("Submitted data:", data);
    try {
      const response = await api.post(`/addMenuItem`, {
        itemName: data.itemName,
        description: data.description,
        price: data.price,
        menuId: selectedMenuId,
      });
      console.log("Data successfully sent:", response.data);
      
      reset();
      handleCloseModal();
    } catch (error) {
      console.error("Error submitting data:", error);
    }
  };

  return (
    <div>
      <main className="bg-[url('/bg.png')] lg:h-[672px] flex justify-center items-center">
        <div className="mr-16">
          <div>
            <img src="/Frameone.png" alt="frame" />
          </div>
        </div>
        <div className="lg:w-[1140px] w-[300px] lg:h-[416px] mb-10 mr-[30px]  mt-10 lg:mb-16 lg:mt-16 h-[400px] border-white border-[1px] relative">
          <img
            src="/glass.png"
            alt="glass"
            className="lg:w-[190px] w-[90px] lg:h-[281px]  absolute lg:top-[-140px] top-[-1px] lg:left-[3%] left-[13%] transform -translate-x-[50%]"
          />

          <div className="flex justify-center lg:left-[422px] left-[57px] absolute top-[95px] lg:top-[115px] lg:gap-36 gap-32 ">
            <div className="border-b-[2px] lg:w-[68px] w-[27px]" />
            <div className="border-b-[2px] lg:w-[68px] w-[27px]" />
          </div>
          <div className="py-[88px]">
            <div className="my-[-10px] lg:my-[10px]">
              <h2
                className="text-white  text-center font-bold text-4xl font-oswald"
                style={{ textShadow: "2px 2px 4px rgba(255, 0, 0, 0.7)" }}
              >
                {menuDetails ? menuDetails.menuName : "Loading..."}
              </h2>
            </div>
            <div className="flex flex-row gap-10 justify-center py-10">
              <div className="flex flex-col gap-6">
                {menuDetails?.menuItems && menuDetails.menuItems.length > 0 ? (
                  menuDetails.menuItems.map((item) => (
                    <div key={item._id}>
                      <h3 className="text-white lg:text-xl text-[16px] font-oswald">
                        {item.itemName}..........................${item.price}
                      </h3>
                      <p className="text-[#857878]  font-kellySlab">
                        {item.description}
                      </p>
                    </div>
                  ))
                ) : (
                  <p className="text-white text-lg">
                    No items available in this menu.
                  </p>
                )}
              </div>
            </div>
            <div className="lg:px-[510px] px-[100px] ">
              <button
                className="text-sm  font-bold mx-1 bg-[#000000] text-white border-[1px] border-[#0796EF] w-24 hover:bg-[#0796EF] transition duration-300"
                onClick={handleOpenModal}
              >
                ADD
              </button>
            </div>
          </div>

          <img
            src="/cocktail.png"
            alt="glass"
            className="lg:w-[190px] lg:h-[281px] w-[90px] absolute lg:top-[175px] top-[276px] lg:left-[92%] left-[251px] transform -translate-x-[50%]"
          />
        </div>
        <div className="ml-10">
          <img src="/Frametwo.png" alt="frame" />
        </div>
      </main>

      {isModalOpen && (
        <div className="fixed inset-0 bg-gray-500 bg-opacity-50 flex justify-center items-center z-50 transition-opacity duration-300 opacity-100">
          <div className="bg-white p-8 rounded-lg shadow-lg w-11/12 sm:w-1/3 max-w-lg transform transition-all duration-300 ease-in-out scale-95 opacity-100">
            <h2 className="text-2xl font-semibold mb-6 text-center">
              Add Menu Details
            </h2>
            <form onSubmit={handleSubmit(onSubmit)}>
              <div className="mb-4">
                <label className="block text-sm font-medium text-gray-700">
                  Item Name
                </label>
                <input
                  type="text"
                  {...register("itemName")}
                  className="w-full px-4 py-3 border border-gray-300 rounded-md shadow-sm focus:ring-2 focus:ring-[#0796EF] focus:outline-none transition duration-200"
                  placeholder="Enter item name"
                />
                {errors.itemName && (
                  <p className="text-red-500 text-sm mt-1">
                    {errors.itemName.message}
                  </p>
                )}
              </div>

              <div className="mb-4">
                <label className="block text-sm font-medium text-gray-700">
                  Description
                </label>
                <textarea
                  {...register("description")}
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

              <div className="mb-4">
                <label className="block text-sm font-medium text-gray-700">
                  Price
                </label>
                <input
                  type="number"
                  {...register("price", { valueAsNumber: true })}
                  className="w-full px-4 py-3 border border-gray-300 rounded-md shadow-sm focus:ring-2 focus:ring-[#0796EF] focus:outline-none transition duration-200"
                  placeholder="Enter price"
                />
                {errors.price && (
                  <p className="text-red-500 text-sm mt-1">
                    {errors.price.message}
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
    </div>
  );
};

export default Menus;
