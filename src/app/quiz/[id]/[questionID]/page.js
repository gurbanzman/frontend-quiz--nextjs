'use client'

import React from "react";
import Inner from "@/src/containers/inner/page";
import {store} from "../../../../features/store";
import { Provider } from "react-redux";

export default function page({ params }) {
  return (
    <Provider store={store}>
      <Inner params={params} />
    </Provider>
  );
}
