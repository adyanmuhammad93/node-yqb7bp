import { Tab } from '@headlessui/react';
import MasterVendor from '../../components/table/master-vendor';

function classNames(...classes) {
  return classes.filter(Boolean).join(' ');
}

export default function PurchaseOrder() {
  return (
    <>
      <h1 className="text-3xl mb-6">Master Vendor</h1>
      <MasterVendor />
    </>
  );
}
