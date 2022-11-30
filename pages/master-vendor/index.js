import { Tab } from '@headlessui/react';
import MasterVendorTable from '../../components/table/master-vendor';

function classNames(...classes) {
  return classes.filter(Boolean).join(' ');
}

export default function MasterVendor() {
  return (
    <>
      <h1 className="text-3xl mb-6">Master Vendor</h1>
      <MasterVendorTable />
    </>
  );
}
