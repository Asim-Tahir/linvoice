import { useContext } from "react";
import { useForm, SubmitHandler } from "react-hook-form";

import { Button, FormValidationText } from "@linvoice/components/styled";
import Icon from "@linvoice/icon";
import { Label, Input, Textarea } from "@windmill/react-ui";

import type { ServiceInput } from "@linvoice/store/types";
import { servicesStore } from "@linvoice/store";
import { useAppDispatch } from "@linvoice/hooks";
import { Modal, EditInput } from "@linvoice/context";

export default function Form(): React.ReactElement {
  const { serviceInput } = useContext(EditInput.Context);
  const { closeModal, modalMode } = useContext(Modal.Context);

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<ServiceInput>({ defaultValues: serviceInput });

  const dispatch = useAppDispatch();

  const onSubmit: SubmitHandler<ServiceInput> = (service: ServiceInput) => {
    if (modalMode === "add") {
      dispatch(servicesStore.actions.add(service));
    } else if (modalMode === "edit" && serviceInput !== undefined) {
      dispatch(
        servicesStore.actions.update({ id: serviceInput.id, changes: service })
      );
    }

    closeModal();
  };

  return (
    <form
      className="w-full px-4 py-3 mb-8 space-y-4 rounded-lg"
      onSubmit={handleSubmit(onSubmit)}
    >
      <Label className="mt-4">
        <span>Description</span>
        <Textarea
          {...register("description", { required: "Description is required" })}
          className="mt-1"
          rows={3}
          placeholder="Detail about service"
        />
        {errors.description && (
          <FormValidationText>{errors.description.message}</FormValidationText>
        )}
      </Label>

      <Label className="mt-4">
        <span>Product Name</span>
        <Input
          {...register("product", { required: "Product Name is required" })}
          className="mt-1"
          placeholder="Product name"
        />
        {errors.price && (
          <FormValidationText>{errors.product?.message}</FormValidationText>
        )}
      </Label>

      <Label className="mt-4">
        <span>Price</span>
        <div className="relative text-gray-400 dark:text-gray-600 focus-within:text-primary-600 dark:focus-within:text-primary-600">
          <Input
            {...register("price", {
              required: "Price is required",
              valueAsNumber: true,
              min: 1,
            })}
            type="number"
            step={0.5}
            className="mt-1 pl-[3rem]"
            placeholder="Price of service"
          />
          <div className="absolute inset-y-0 flex space-x-1 items-center ml-3 pointer-events-none">
            <Icon name="money" className="w-5 h-5" aria-hidden="true" />
            <b>$</b>
          </div>
        </div>
        {errors.price && (
          <FormValidationText>{errors.price.message}</FormValidationText>
        )}
      </Label>

      <div className="mt-4 text-right space-x-4">
        <Button.Danger type="button" onClick={closeModal}>
          Cancel
        </Button.Danger>

        <Button.Primary type="submit">Apply</Button.Primary>
      </div>
    </form>
  );
}
