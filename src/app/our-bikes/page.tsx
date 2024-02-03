import BikeCategories from "@/components/common/bikeCategories/BikeCategories"
import { getOurBikes } from "@/services/productServices"

const OurBikes = async () => {
  const bikes = await getOurBikes()
  console.log(bikes);

  return (
    <div>
      <BikeCategories bikes={bikes} />
    </div>
  )
}

export default OurBikes