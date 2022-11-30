import { Tab } from '@headlessui/react';
import InputRencanaPembayaranTable from '../../components/table/input-rencana-pembayaran';

function classNames(...classes) {
  return classes.filter(Boolean).join(' ');
}

export default function InputRencanaPembayaran() {
  return (
    <>
      <h1 className="text-3xl mb-6">Input Rencana Pembayaran</h1>
      <InputRencanaPembayaranTable />
    </>
  );
}
