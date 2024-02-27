import { useMutation, useQueryClient } from "@tanstack/react-query";
import React from "react";
import { useForm } from "react-hook-form";
import { createCabin } from "../services/apiCabins";
import toast from "react-hot-toast";

export default function CreateCabinForm() {
  const queryClient = useQueryClient();
  const mutation = useMutation({
    mutationFn: createCabin,
    onSuccess: () => {
      queryClient.invalidateQueries({
        queryKey: ["cabins"],
      });

      toast.success("Cabin create successfully");
    },
  });
  const {
    register,
    handleSubmit,
    reset,
    getValues,
    formState: { errors },
  } = useForm();

  const onSubmit = (data) => {
    mutation.mutate(data);
    reset();
  };

  return (
    <div className="py-4 ">
      <form
        className="text-stone-600 text-lg"
        onSubmit={handleSubmit(onSubmit)}
      >
        <div className="flex flex-col md:grid md:grid-cols-[12rem_1fr] md:items-center my-3">
          <label htmlFor="name">Cabin Name</label>
          <div className="w-full">
            <input
              type="text"
              id="name"
              className="outline-none focus:ring focus:ring-stone-500 rounded-full px-3 py-2 bg-gray-100 w-full"
              {...register("name", {
                required: " Cabin Name is required",
                min: {
                  value: 2,
                  message: "Cabin name must above two characters",
                },
                max: {
                  value: 6,
                  message: "Cabin name should not be above six characters",
                },
              })}
            />
            {errors.name && (
              <span className="text-red-400 text-sm">
                {errors?.name?.message}
              </span>
            )}
          </div>
        </div>
        <div className="flex flex-col md:grid md:grid-cols-[12rem_1fr] md:items-center my-3">
          <label htmlFor="maxCapacity">Capacity</label>
          <div>
            <input
              type="number"
              id="maxCapacity"
              className="outline-none focus:ring focus:ring-stone-500 rounded-full px-3 py-2 bg-gray-100 w-full"
              defaultValue={0}
              {...register("maxCapacity", {
                required: "Cabin Capacity is required",
              })}
            />
            {errors.maxCapacity && (
              <span className="text-red-400 text-sm">
                {errors?.maxCapacity?.message}
              </span>
            )}
          </div>
        </div>
        <div className="flex flex-col md:grid md:grid-cols-[12rem_1fr] md:items-center my-3">
          <label htmlFor="regularPrice">Price</label>
          <div>
            <input
              type="number"
              id="regularPrice"
              className="outline-none focus:ring focus:ring-stone-500 rounded-full px-3 py-2 bg-gray-100 w-full"
              defaultValue={0}
              {...register("regularPrice", {
                required: "Cabin Price is required",
              })}
            />
            {errors.regularPrice && (
              <span className="text-red-400 text-sm">
                {errors?.regularPrice?.message}
              </span>
            )}
          </div>
        </div>
        <div className="flex flex-col md:grid md:grid-cols-[12rem_1fr] md:items-center my-3">
          <label htmlFor="discount">Discount</label>
          <div>
            <input
              type="number"
              id="discount"
              className="outline-none focus:ring focus:ring-stone-500 rounded-full px-3 py-2 bg-gray-100 w-full"
              defaultValue={0}
              {...register("discount", {
                required: "Cabin discount is required",
                validate: (val) =>
                  val <= getValues().regularPrice ||
                  "Discount shoul be less than Price",
              })}
            />
            {errors.discount && (
              <span className="text-red-400 text-sm">
                {errors?.discount?.message}
              </span>
            )}
          </div>
        </div>
        <div className="flex flex-col md:grid md:grid-cols-[12rem_1fr] md:items-center my-3">
          <label htmlFor="description">Description</label>
          <div>
            <input
              type="text"
              id="description"
              className="outline-none focus:ring focus:ring-stone-500 rounded-full px-3 py-2 bg-gray-100 w-full"
              {...register("description", {
                required: "Cabin description is required",
                min: {
                  value: 15,
                  message:
                    "Cabin description shouldn't be less than 15 characters",
                },
                max: {
                  value: 60,
                  message:
                    "Cabin description shouldn't be above than 60 characters",
                },
              })}
            />
            {errors.description && (
              <span className="text-red-400 text-sm">
                {errors?.description?.message}
              </span>
            )}
          </div>
        </div>
        <div className="flex flex-col md:grid md:grid-cols-[12rem_1fr] md:items-center my-3">
          <label htmlFor="image">Image</label>
          <div>
            <input type="file" id="image" />
          </div>
        </div>

        <button>Create Cabin</button>
      </form>
    </div>
  );
}
