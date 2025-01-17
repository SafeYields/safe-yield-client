import { useGetTokenBalances } from "../hooks/useGetTokenBalances";
import ConnectButton from "./buttons/ConnectButton";
import PrimaryButton from "./buttons/PrimaryButton";
import SecondaryButton from "./buttons/SecondaryButton";
import { useWeb3ModalAccount } from "@web3modal/ethers/react";

const TopNav = () => {
  const { isConnected, address } = useWeb3ModalAccount();
  const { usdcBalance } = useGetTokenBalances(address!, 1)
  return (
    <nav className=" px-4 py-4 mt-8  fixed md:ml-[22rem] h-auto left-0 right-0 top-0 z-20 ">
      <div className=" flex flex-col items-end justify-end space-x-6 pr-20 space-y-2">
        <div className="flex space-x-6">
         
          <SecondaryButton buttonText="Get referral link" width="211.11px" />
          {!isConnected ? <ConnectButton />:
          <PrimaryButton  buttonText={address?.slice(0, 12)+"...."} width="211.11px" />
          }
        </div>
        <span className="  text-white/70 text-[15px] font-normal font-['Space Grotesk'] pr-2">
          Your balance: {usdcBalance} USDC
        </span>
      </div>
    </nav>
  );
};

export default TopNav;
