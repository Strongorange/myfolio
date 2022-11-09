import { atom } from "jotai";
import React from "react";

type divRefs = {
  current: HTMLDivElement[] | null[];
};

export const divRefs = atom<divRefs>({ current: [] });
