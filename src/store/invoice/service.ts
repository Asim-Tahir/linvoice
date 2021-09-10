import { createSlice, nanoid, PayloadAction } from "@reduxjs/toolkit";

import { Service } from "@types";

export const serviceSlice = createSlice({
  name: "service",
  initialState: {
    services: [] as Array<Service>,
  },
  reducers: {
    add: {
      prepare(action: PayloadAction<Service>) {
        return { payload: { ...action.payload, id: nanoid() } };
      },
      reducer(state, action: PayloadAction<Service>) {
        state.services.push(action.payload);
      },
    },
    remove(state, action: PayloadAction<string>) {
      state.services = state.services.filter(
        (service) => service.id !== action.payload
      );
    },
    update(state, action: PayloadAction<{ id: string; service: Service }>) {
      state.services = state.services.map((_service) => {
        if (_service.id === action.payload.id) {
          return action.payload.service;
        }
        return _service;
      });
    },
  },
});

export const reducer = serviceSlice.reducer;
export const actions = serviceSlice.actions;
