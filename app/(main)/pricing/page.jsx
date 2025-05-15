'use client';
import PricingModel from '@/components/custom/PricingModel';
import { UserDetailContext } from '@/context/UserDetailContext';
import Lookup from '@/data/Lookup';
import React, { useContext } from 'react';

function Pricing() {
  const { userDetail, setUserDetail } = useContext(UserDetailContext);
  return (
    <div className="mt-20 flex flex-col items-center p-10 md:px-32 lg:px-48 w-full ">
      <h2 className="font-bold text-5l">pricing</h2>
      <p className="text-gray-400 max-w-xl text-center mt-4">
        {Lookup.PRICING_DESCRIPTION}
      </p>
    <div className="p-5 border rounded-xl w-full flex justify-between">
        <h2 className="text-lg">
          <span className="font-bold">{userDetail?.token}</span> Tokens Left
        </h2>
        <div>
          <h2>Need more token?</h2>
          <p>Upgrade your plane below</p>
        </div>
      </div>
    <PricingModel />
    </div>
  );
}

export default Pricing;
