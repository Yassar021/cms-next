import React from "react";
import { Logo } from "./Logo";
import { LoginForm } from "./LoginForm";

export const LoginSection: React.FC = () => {
  return (
    <section className="w-[43%] max-md:ml-0 max-md:w-full">
      <div className="flex flex-col mt-10 max-md:mt-6 max-md:max-w-full">
        <Logo className="self-start max-md:hidden" />
        <div className="flex flex-col self-end mt-56 max-w-full w-[455px] max-md:mt-0 max-md:w-full max-md:px-4">
          <h2 className="self-start text-4xl font-medium tracking-tighter leading-none text-neutral-900">
            Selamat Datang
          </h2>
          <p className="mt-4 text-2xl tracking-tighter leading-7 text-zinc-600 max-md:mr-1.5 max-md:max-w-full">
            Masuk dan kelola dashboard Mediverse Anda Sekarang
          </p>
          <LoginForm />
        </div>
      </div>
    </section>
  );
};
