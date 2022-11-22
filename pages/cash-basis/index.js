import { Navbar, Dropdown, Avatar, Sidebar, Footer } from 'flowbite-react';
import CashBasisTable from '../../components/CashBasis';
import { Tab } from '@headlessui/react';

function classNames(...classes) {
  return classes.filter(Boolean).join(' ');
}

export default function CashBasis() {
  return (
    <>
      <h1 className="text-2xl">
        Welcome!
      </h1>
    </>
  );
}
