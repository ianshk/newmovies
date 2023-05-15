import React from 'react';

export default function Footer() {
  return (
    <footer className="mx-auto mt-auto w-full max-w-[85rem] px-4 py-10 sm:px-6 lg:px-8">
      <div className="text-center">
        <div className="flex-none text-xl font-semibold text-slate-50">Movie time</div>
        <div className="mt-3">
          <p className="text-slate-500">
            © 2023 Ian Callaghan. Made with Next.js & Tailwind. Data provided by TMDb.
          </p>
        </div>
      </div>
    </footer>
  );
}
