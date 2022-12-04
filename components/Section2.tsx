import { useAtom } from "jotai";
import React, { forwardRef, useEffect, useState } from "react";
import { divRefs } from "../store/myStore";

type PropsType = {};
type RefType = HTMLDivElement;

const Section2 = forwardRef<RefType, PropsType>((props, ref) => {
  return (
    <div ref={ref} className="flex h-screen bg-slate-700">
      Section2
    </div>
  );
});

Section2.displayName = "Section2";

export default Section2;
