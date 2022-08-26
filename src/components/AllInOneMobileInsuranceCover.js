import React from "react";
import { CheckIcon } from "@heroicons/react/outline";

const AllInOneMobileInsuranceCover = () => {
  return (
    <div data-aos="fade-up" className="w-full my-32">
      <div className="max-w-[1240px] mx-auto px-2">
        <h2 className="text-5xl font-bold text-center">
          All-In-one Mobile Insurance Cover
        </h2>
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4 pt-4">
          <div className="flex">
            <div>
              <CheckIcon className="w-7 mr-4 text-green-600" />
            </div>

            <div>
              <h3 className="font-bold text-lg">
                Accidental Screen damage covered
              </h3>
              <p className="text-lg pt-2 pb-4">
                Screen damages are the most common of all heartbreaks! All
                screen damages due to accidental or liquid damage are covered!
              </p>
            </div>
          </div>
          <div className="flex">
            <div>
              <CheckIcon className="w-7 mr-4 text-green-600" />
            </div>

            <div>
              <h3 className="font-bold text-lg">New & Used phones</h3>
              <p className="text-lg pt-2 pb-4">
                Now mobile insurance for brand new phones as well as old/used
                ones
              </p>
            </div>
          </div>
          <div className="flex">
            <div>
              <CheckIcon className="w-7 mr-4 text-green-600" />
            </div>

            <div>
              <h3 className="font-bold text-lg">Low prices</h3>
              <p className="text-lg pt-2 pb-4">
                Buy this mobile insurance cover at almost the cost of a Screen
              </p>
            </div>
          </div>
          <div className="flex">
            <div>
              <CheckIcon className="w-7 mr-4 text-green-600" />
            </div>

            <div>
              <h3 className="font-bold text-lg">Worldwide cover</h3>
              <p className="text-lg pt-2 pb-4">
                Travel around the world worry-free. Our mobile insurance policy
                is valid everywhere
              </p>
            </div>
          </div>
          <div className="flex">
            <div>
              <CheckIcon className="w-7 mr-4 text-green-600" />
            </div>

            <div>
              <h3 className="font-bold text-lg">IMEI linked cover</h3>
              <p className="text-lg pt-2 pb-4">
                Whether you use the phone or your family or friends does, this
                mobile policy will be valid
              </p>
            </div>
          </div>
          <div className="flex">
            <div>
              <CheckIcon className="w-7 mr-4 text-green-600" />
            </div>

            <div>
              <h3 className="font-bold text-lg">Reimburse up to Sum Insured</h3>
              <p className="text-lg pt-2 pb-4">
                At the time of buying, we will show you an amount, called Sum
                Insured. Post claim approval, you can get your repair costs
                reimbursed up to your res
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AllInOneMobileInsuranceCover;
