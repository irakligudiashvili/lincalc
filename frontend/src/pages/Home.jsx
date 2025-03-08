import CalculationArea from "../components/CalculationArea"
import Sidebar from "../components/Sidebar"
import { useState } from "react"

function Home(){
    const [selectedCalculation, setSelectedCalculation] = useState(null);

    return <div className="container d-flex py-5 px-0 justify-content-between">
        <CalculationArea selectedCalculation={selectedCalculation} />
        <Sidebar setSelectedCalculation={setSelectedCalculation} />
    </div>
}

export default Home