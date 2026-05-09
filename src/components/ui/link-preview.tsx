"use client";
import * as HoverCard from "@radix-ui/react-hover-card";
import React from "react";
import {
  AnimatePresence,
  motion,
  useMotionValue,
  useSpring,
} from "framer-motion";
import { cn } from "@/lib/utils";
import Link from "next/link";
import Image from "next/image";

type LinkPreviewProps = {
  children: React.ReactNode;
  url: string;
  className?: string;
  isStatic?: boolean;
  imageSrc?: string;
};

export const LinkPreview = ({
  children,
  url,
  className,
  isStatic = false,
  imageSrc,
}: LinkPreviewProps) => {
  const src = isStatic ? (imageSrc || "") : `https://api.microlink.io/?url=${encodeURIComponent(url)}&screenshot=true&meta=false&embed=screenshot.url`;

  const [isOpen, setOpen] = React.useState(false);

  const [isMounted, setIsMounted] = React.useState(false);

  React.useEffect(() => {
    setIsMounted(true);
  }, []);

  if (!isMounted) return null;

  return (
    <HoverCard.Root
      openDelay={50}
      closeDelay={100}
      onOpenChange={(open) => {
        setOpen(open);
      }}
    >
      <HoverCard.Trigger
        asChild
        className={cn("text-emerald-400 hover:text-emerald-300 transition-colors cursor-pointer", className)}
      >
        <Link href={url}>{children}</Link>
      </HoverCard.Trigger>

      <HoverCard.Portal>
        <HoverCard.Content
          sideOffset={10}
          side="top"
          align="center"
          className="z-[999]"
        >
          <AnimatePresence>
            {isOpen && (
              <motion.div
                initial={{ opacity: 0, y: 20, scale: 0.6 }}
                animate={{
                  opacity: 1,
                  y: 0,
                  scale: 1,
                  transition: {
                    type: "spring",
                    stiffness: 260,
                    damping: 20,
                  },
                }}
                exit={{ opacity: 0, y: 20, scale: 0.6 }}
                className="shadow-xl rounded-xl p-1 glass-dark border-white/20"
                style={{
                  x: 0,
                }}
              >
                <Link
                  href={url}
                  className="block p-1 bg-white/[0.03] rounded-lg hover:bg-white/[0.05] transition-colors"
                >
                  <Image
                    src={src}
                    width={200}
                    height={125}
                    className="rounded-lg object-cover"
                    alt="preview"
                    sizes="200px"
                  />
                </Link>
              </motion.div>
            )}
          </AnimatePresence>
        </HoverCard.Content>
      </HoverCard.Portal>
    </HoverCard.Root>
  );
};
