import DealsSection from "../components/home/DealsSection"
import ElectronicGadgets from "../components/home/ElectronicGadgets"
import HomeBanner from "../components/home/HomeBanner"
import HomeOutdoorSection from "../components/home/HomeOutdoorSection"
import SupplierRequest from "../components/home/SupplierRequest"

function Home() {
  return (
    <>
      <HomeBanner/>
      <DealsSection/>
      <HomeOutdoorSection/>
      <ElectronicGadgets/>
      <SupplierRequest/>
    </>
  )
}

export default Home
