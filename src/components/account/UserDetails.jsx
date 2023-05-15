import React, { useState } from "react";
import { Skeleton } from "@mui/material";
import * as Fa from "react-icons/fa";
import * as Md from "react-icons/md";
import moment from "moment";
import VerificationModal from "./verificationModal";

const UserDetails = ({ details }) => {
  //modal state
  const [isOpen, setIsOpen] = useState(false);

  return (
    <>
      <section className="mt-12">
        {/* User Avatar section */}
        <div>
          <div className="flex flex-col items-center justify-center space-y-4">
            {details ? (
              <Fa.FaUserCircle className="h-[300px] w-[300px]" />
            ) : (
              <Skeleton variant="circular" width={300} height={300} />
            )}
            {details ? (
              <h4 className="font-semibold text-2xl capitalize font-sans-min text-center">
                {details.name}
              </h4>
            ) : (
              <Skeleton variant="rectangular" width={300} height={40} />
            )}
            {details.verified ? (
              <div></div>
            ) : (
              <button
                onClick={() => setIsOpen(true)}
                className="text-red-500 flex items-center gap-2 font-sans"
              >
                <Md.MdVerifiedUser />
                Verify Account
              </button>
            )}
          </div>
        </div>
        {/* end of user avatar section */}
        {/* user details, Grid container */}
        <div className="mt-12 grid md:grid-cols-3 gap-3">
          {/* Grid child 1 or style */}
          {details ? (
            <div className="flex items-center gap-3 font-sans-min p-3 bg-cardColor rounded shadow-xl">
              <div className="bg-bgColor p-3 rounded-full">
                <Md.MdMail className="w-[40px] h-[40px]" />
              </div>
              <div className="space-y-2">
                <h4>Email</h4>
                <h4 className="font-bold text-lg capitalize">
                  {details.email}
                </h4>
              </div>
            </div>
          ) : (
            <Skeleton variant="rectangular" width={300} height={300} />
          )}

          {/* end of Grid child 1 */}

          {/* Grid Child 2 */}
          {details ? (
            <div className="flex items-center gap-3 font-sans-min p-3 bg-cardColor rounded shadow-xl">
              <div className="bg-bgColor p-3 rounded-full">
                <Md.MdPhoneAndroid className="w-[40px] h-[40px]" />
              </div>
              <div className="space-y-2">
                <h4>Telephone</h4>
                <h4 className="font-bold text-lg capitalize">
                  {details.phone}
                </h4>
              </div>
            </div>
          ) : (
            <Skeleton variant="rectangular" width={300} height={300} />
          )}

          {/* End of Grid Child 2 */}

          {/* Grid Child 3 */}
          {details ? (
            <div className="flex items-center gap-10 md:gap-3 font-sans-min p-3 bg-cardColor rounded shadow-xl">
              <div className="bg-bgColor p-3 rounded-full">
                <Md.MdFlag className="w-[40px] h-[40px]" />
              </div>
              <div className="space-y-2">
                <h4>Country</h4>
                <h4 className="font-bold text-lg capitalize">
                  {details.country}
                </h4>
              </div>
            </div>
          ) : (
            <Skeleton variant="rectangular" width={300} height={300} />
          )}
          {/* End of Grid Child 3 */}
        </div>
        {/* end of user details  and Grid Container 1*/}
        {/* Grid container Two */}
        <div className="grid md:grid-cols-3 gap-3 mt-10">
          {/* Grid Child 1 */}
          {details ? (
            <div className="flex items-center gap-10 md:gap-3 font-sans-min p-3 bg-cardColor rounded shadow-xl">
              <div className="bg-bgColor p-3 rounded-full">
                <Md.MdVerifiedUser className="w-[40px] h-[40px]" />
              </div>
              <div className="space-y-2">
                <h4>Status</h4>
                <h4
                  className={
                    !details.verified
                      ? "text-lg text-red-500 capitalize"
                      : "text-lg text-green-500 capitalize"
                  }
                >
                  {details.verified ? "Verified" : "Unverified"}
                </h4>
              </div>
            </div>
          ) : (
            <Skeleton variant="rectangular" width={300} height={300} />
          )}
          {/* end of Grid child 1 */}
          {/* Grid Child 2 */}
          {details ? (
            <div className="flex items-center gap-10 md:gap-3 font-sans-min p-3 bg-cardColor rounded shadow-xl">
              <div className="bg-bgColor p-3 rounded-full">
                <Md.MdCalendarViewMonth className="w-[40px] h-[40px]" />
              </div>
              <div className="space-y-2">
                <h4>Reg Date</h4>
                <h4 className="font-bold text-lg capitalize">
                  {moment(details.createAt).format("dddd mm yy")}
                </h4>
              </div>
            </div>
          ) : (
            <Skeleton variant="rectangular" width={300} height={300} />
          )}
          {/* end of Grid child 2 */}
        </div>
        {/* End of Grid Container 2 */}
      </section>
      <VerificationModal open={isOpen} close={setIsOpen} />
    </>
  );
};

export default UserDetails;
