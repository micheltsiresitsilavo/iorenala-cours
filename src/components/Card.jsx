import { Card, CardHeader, CardFooter, Image } from "@nextui-org/react";

export default function CardCpt() {
  return (
    <Card
      isFooterBlurred
      className="w-[300px] h-[300px] col-span-12 sm:col-span-7"
    >
      <CardHeader className="absolute z-10 top-1 flex-col items-start">
        <p className="text-tiny text-white/90 uppercase font-bold">
          Fondatrice
        </p>
      </CardHeader>
      <Image
        removeWrapper
        alt="Relaxing app background"
        className="z-0 w-full h-full object-cover"
        src="https://ucarecdn.com/fb3c1cc1-fab3-4fcf-b6c5-f7e3de3de34d/306087016_466869948825125_3861692765056474294_nremovebgpreview.png"
      />
      <CardFooter className="absolute bg-black/40 bottom-0 z-10 border-t-1 border-default-600 dark:border-default-100">
        <div className="flex flex-grow gap-2 items-center">
          <Image
            alt="Breathing app icon"
            className="rounded-full w-10 h-11 bg-black"
            src="https://nextui.org/images/breathing-app-icon.jpeg"
          />
          <div className="flex flex-col">
            <p className="text-tiny text-white/60">Mme Viviane RAHARINIAINA</p>
          </div>
        </div>

        <a
          href="https://web.facebook.com/viviane.rahariniaina"
          rel="noreferrer"
          target="_blank"
          className="text-slate-100 dark:text-slate-300 transition hover:text-white/75"
        >
          <span className="sr-only">Facebook</span>
          <svg
            className="h-10 w-10"
            fill="currentColor"
            viewBox="0 0 24 24"
            aria-hidden="true"
          >
            <path
              fillRule="evenodd"
              d="M22 12c0-5.523-4.477-10-10-10S2 6.477 2 12c0 4.991 3.657 9.128 8.438 9.878v-6.987h-2.54V12h2.54V9.797c0-2.506 1.492-3.89 3.777-3.89 1.094 0 2.238.195 2.238.195v2.46h-1.26c-1.243 0-1.63.771-1.63 1.562V12h2.773l-.443 2.89h-2.33v6.988C18.343 21.128 22 16.991 22 12z"
              clipRule="evenodd"
            />
          </svg>
        </a>
      </CardFooter>
    </Card>
  );
}
