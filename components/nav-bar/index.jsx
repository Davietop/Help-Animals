import PcNav from "./pc";
import { MobileDevV2 } from "./mobilev2";

const Navbar = () => {
  return (
    <>
      {/* <MobileNav turnBrown={turnBrown} /> */}
      <MobileDevV2/>
      <PcNav />
    </>
  );
};

export default Navbar;
