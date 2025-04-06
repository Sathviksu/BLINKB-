import { Suspense } from 'react';
import Adder from './adder1';

export default function AddPage() {
  return (
    <Suspense fallback={<div className="text-center mt-12">Loading...</div>}>
      <Adder />
    </Suspense>
  );
}
