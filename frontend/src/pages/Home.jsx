import DealsSection from "../components/home/DealsSection"
import ElectronicGadgets from "../components/home/ElectronicGadgets"
import ExtraServices from "../components/home/ExtraServices"
import HomeBanner from "../components/home/HomeBanner"
import HomeOutdoorSection from "../components/home/HomeOutdoorSection"
import RecommendedItems from "../components/home/RecommendedItems"
import SubscribeNewsLater from "../components/home/SubscribeNewsLater"
import SupplierRequest from "../components/home/SupplierRequest"

function Home() {
  return (
    <>
      <HomeBanner/>
      <DealsSection/>
      <HomeOutdoorSection/>
      <ElectronicGadgets/>
      <SupplierRequest/>
      <RecommendedItems/>
      <ExtraServices/>
      <SubscribeNewsLater/>
    </>
  )
}

export default Home
