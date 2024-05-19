import { twMerge } from "tailwind-merge";
import {
  Trigger,
  Root,
  Content as PopoverContent,
  Portal,
  PopoverContentProps as PopoverContentProps,
} from "@radix-ui/react-popover";

export type { PopoverProps as PopoverRootProps } from "@radix-ui/react-popover";

export const Popover = {
  Root,
  Trigger,
  Content,
};

function Content({ className, ...rest }: PopoverContentProps) {
  return (
    <Portal>
      <PopoverContent
        className={twMerge(
          "mt-4 rounded-md border border-background-darker bg-background p-4 shadow-md outline-none dark:border-background-lighter",
          className,
        )}
        {...rest}
      />
    </Portal>
  );
}
