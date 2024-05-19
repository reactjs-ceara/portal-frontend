import { twMerge } from "tailwind-merge";
import {
  Root as AvatarRoot,
  AvatarProps,
  Fallback as AvatarFallback,
  AvatarFallbackProps,
  Image as AvataImage,
  AvatarImageProps,
} from "@radix-ui/react-avatar";

export const Avatar = {
  Root,
  Fallback,
  Image,
};

type AvatarRootProps = AvatarProps;

function Root({ className, ...rest }: AvatarRootProps) {
  return (
    <AvatarRoot
      {...rest}
      className={twMerge("inline-flex rounded-full", className)}
    />
  );
}

function Fallback({ className, ...rest }: AvatarFallbackProps) {
  return (
    <AvatarFallback
      {...rest}
      className={twMerge(
        "flex h-full w-full items-center justify-center text-sm font-medium",
        className,
      )}
    />
  );
}

function Image({ className, ...rest }: AvatarImageProps) {
  return (
    <AvataImage
      {...rest}
      className={twMerge("h-full w-full rounded-full object-cover", className)}
    />
  );
}
