import { ReactNode } from 'react';
import React from 'react';

interface ResultsContainerProp {
  children?: ReactNode;
}

export function ResultsContainer({ children = "" }: ResultsContainerProp) {
  return (
    <div id="results_container">{children}</div>
  )
}