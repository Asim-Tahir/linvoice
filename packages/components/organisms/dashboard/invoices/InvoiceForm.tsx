import { useContext } from "react";
import ms from "ms";
import { useForm, SubmitHandler } from "react-hook-form";
import { Disclosure, Transition } from "@headlessui/react";

import { HolderContainer } from "@linvoice/components";
import { Button, FormValidationText } from "@linvoice/components/styled";
import Icon from "@linvoice/icon";
import { Label, Input, Select, Textarea } from "@windmill/react-ui";

import { invoiceStatusUtil, InvoiceInput } from "@linvoice/store/types";
import { invoicesStore } from "@linvoice/store";
import { useAppDispatch } from "@linvoice/hooks";
import { Modal, EditInput } from "@linvoice/context";

const phoneRegex =
  /^0[.(/]5[0-9][0-9][.)/][. /][1-9]([0-9]){2}[.-/]([0-9]){4}$/gi;

export default function InvoiceForm(): React.ReactElement {
  const { closeModal, modalMode } = useContext(Modal.Context);
  const { invoiceInput } = useContext(EditInput.Context);
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<InvoiceInput>({ defaultValues: invoiceInput });

  const dispatch = useAppDispatch();

  const onSubmit: SubmitHandler<InvoiceInput> = (invoice: InvoiceInput) => {
    if (modalMode === "add") {
      dispatch(invoicesStore.actions.add(invoice));
    } else if (modalMode === "edit" && invoiceInput !== undefined) {
      dispatch(
        invoicesStore.actions.update({ id: invoiceInput.id, changes: invoice })
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
          placeholder="Detail about invoice like how to pay it, where to send checks, etc."
        />
        {errors.description && (
          <FormValidationText>{errors.description.message}</FormValidationText>
        )}
      </Label>

      <div className="flex justify-center items-center w-full space-x-4">
        <HolderContainer title="Invoiced from">
          <Label>
            <span>Name</span>
            <Input
              {...register("from.name", { required: "Name is required" })}
              autoComplete="name"
              placeholder="Invoice from holder full name. e.g: John Doe"
            />
            {errors.from?.name && (
              <FormValidationText>
                {errors.from?.name.message}
              </FormValidationText>
            )}
          </Label>

          <Label>
            <span>Job</span>
            <Input
              autoComplete="organization-title"
              {...register("from.job", { required: "Job is required" })}
              placeholder="Invoice from holder job. e.g: Senior Technical Writer"
            />
            {errors.from?.job && (
              <FormValidationText>
                {errors.from?.job.message}
              </FormValidationText>
            )}
          </Label>

          <Label>
            <span>Email</span>
            <Input
              autoComplete="email"
              type="email"
              placeholder="Invoice from holder email. e.g: john.doe@company.com"
              {...register("from.email", {
                required: "Email is required",
              })}
            />
            {errors.from?.email && (
              <FormValidationText>
                {errors.from?.email.message}
              </FormValidationText>
            )}
          </Label>

          <Disclosure>
            {({ open }) => (
              <>
                <Disclosure.Button className="py-2 flex justify-center items-center text-gray-400">
                  <Icon
                    name="dropdown"
                    className={`${
                      open ? "transform rotate-180" : ""
                    } w-5 h-5 text-purple-500`}
                  />
                  <span className="text-gray-200 font-semibold">
                    Detail Informations
                  </span>
                </Disclosure.Button>
                <Transition
                  enter="transition ease-in-out duration-150"
                  enterFrom="opacity-0 transform -translate-y-5"
                  enterTo="opacity-100"
                  leave="transition ease-in-out duration-150"
                  leaveFrom="opacity-100"
                  leaveTo="opacity-0 transform -translate-y-5"
                >
                  <Disclosure.Panel className="pt-4 pb-2 text-sm space-y-4 text-gray-500">
                    <Label>
                      <span>Company</span>
                      <Input
                        autoComplete="organization"
                        placeholder="Invoice from holder company. e.g: Acme Inc."
                        {...register("from.company", { required: false })}
                      />
                    </Label>

                    <Label>
                      <span>Phone</span>
                      <Input
                        autoComplete="tel"
                        type="tel"
                        {...register("from.phone", {
                          required: false,
                          pattern: phoneRegex,
                        })}
                        placeholder="Invoice from holder phone. e.g: 0(555) 555-5555"
                      />
                    </Label>

                    <Label className="mt-4">
                      <span>Address</span>
                      <Textarea
                        className="mt-1"
                        rows={4}
                        placeholder="Invoice from company or holder address. e.g: Hooghiemstraplein 118, 3514 AZ Utrecht, Netherlands"
                        {...register("from.address", { required: false })}
                      />
                    </Label>
                  </Disclosure.Panel>
                </Transition>
              </>
            )}
          </Disclosure>
        </HolderContainer>

        <HolderContainer title="Invoiced to">
          <Label>
            <span>Name</span>
            <Input
              autoComplete="name"
              {...register("to.name", { required: true })}
              placeholder="Invoice to holder full name. e.g: John Doe"
            />
            {errors.to?.name && (
              <FormValidationText>{errors.to?.name.message}</FormValidationText>
            )}
          </Label>

          <Label>
            <span>Job</span>
            <Input
              autoComplete="organization-title"
              placeholder="Invoice to holder job. e.g: Senior Technical Writer"
              {...register("to.job", { required: true })}
            />
            {errors.to?.job && (
              <FormValidationText>{errors.to?.job.message}</FormValidationText>
            )}
          </Label>

          <Label>
            <span>Email</span>
            <Input
              autoComplete="email"
              type="email"
              placeholder="Invoice to holder email. e.g: john.doe@company.com"
              {...register("to.email", {
                required: true,
              })}
            />
            {errors.to?.email && (
              <FormValidationText>
                {errors.to?.email.message}
              </FormValidationText>
            )}
          </Label>

          <Disclosure>
            {({ open }) => (
              <>
                <Disclosure.Button className="py-2 flex justify-center items-center text-gray-400">
                  <Icon
                    name="dropdown"
                    className={`${
                      open ? "transform rotate-180" : ""
                    } w-5 h-5 text-purple-500`}
                  />
                  <span className="text-gray-200 font-semibold">
                    Detail Informations
                  </span>
                </Disclosure.Button>
                <Transition
                  enter="transition ease-in-out duration-150"
                  enterFrom="opacity-0 transform -translate-y-5"
                  enterTo="opacity-100"
                  leave="transition ease-in-out duration-150"
                  leaveFrom="opacity-100"
                  leaveTo="opacity-0 transform -translate-y-5"
                >
                  <Disclosure.Panel className="pt-4 pb-2 text-sm space-y-4 text-gray-500">
                    <Label>
                      <span>Company</span>
                      <Input
                        autoComplete="organization"
                        placeholder="Invoice to holder company. e.g: Acme Inc."
                        {...register("to.company", { required: false })}
                      />
                    </Label>

                    <Label>
                      <span>Phone</span>
                      <Input
                        autoComplete="tel"
                        type="tel"
                        {...register("to.phone", {
                          required: false,
                          pattern: phoneRegex,
                        })}
                        placeholder="Invoice to holder phone. e.g: 0(555) 555-5555"
                      />
                    </Label>

                    <Label className="mt-4">
                      <span>Address</span>
                      <Textarea
                        className="mt-1"
                        rows={4}
                        placeholder="Invoice to company or holder address. e.g: Hooghiemstraplein 118, 3514 AZ Utrecht, Netherlands"
                        {...register("to.address", { required: false })}
                      />
                    </Label>
                  </Disclosure.Panel>
                </Transition>
              </>
            )}
          </Disclosure>
        </HolderContainer>
      </div>

      <Label>
        <span>Status</span>
        <Select
          {...register("status", { required: true })}
          className="mt-1 capitalize"
        >
          {invoiceStatusUtil.values.map((status, i) => (
            <option key={i}>{status}</option>
          ))}
        </Select>
        {errors.status?.type === "required" && (
          <FormValidationText>Status is required</FormValidationText>
        )}
      </Label>

      <Label>
        <span>Due Date</span>
        <Input
          type="date"
          {...register("dueDate", {
            required: true,
            valueAsDate: true,
            value: new Date(new Date().getTime() + ms("1w"))
              .toISOString()
              .substring(0, 10),
          })}
        />
        {errors.dueDate?.type === "required" && (
          <FormValidationText>Due Date is required</FormValidationText>
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
