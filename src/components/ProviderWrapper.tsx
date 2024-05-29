"use client";
import store from "@/store/store";
import React, { ReactNode } from "react";
import { Provider } from "react-redux";

type Props = { children: ReactNode };

export default function ProviderWrapper({ children }: Props) {
  return <Provider store={store}>{children}</Provider>;
}
