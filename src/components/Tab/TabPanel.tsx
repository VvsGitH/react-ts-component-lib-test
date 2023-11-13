import { Tab, Transition } from "@headlessui/react";
import React, { Fragment, type HTMLAttributes } from "react";

export function TabPanel({ children, ...props }: HTMLAttributes<HTMLDivElement>) {
  return (
    <Tab.Panel as={Fragment} unmount>
      {({ selected }) => (
        <Transition
          as="div"
          show={selected}
          appear={true}
          enter="fade"
          enterTo="show"
          entered="fade show"
          style={{ transitionDuration: "0.3s", transitionDelay: "0.2s" }}
          {...props}
        >
          {children}
        </Transition>
      )}
    </Tab.Panel>
  );
}
