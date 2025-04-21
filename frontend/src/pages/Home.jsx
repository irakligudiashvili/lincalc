import CalculationArea from "../components/CalculationArea";
import Sidebar from "../components/Sidebar";
import { useContext } from "react";
import { CalculationContext } from "../contexts/CalculationContext";

function Home() {
    const { selectedCalculation, setSelectedCalculation } = useContext(CalculationContext);

    return (
        <div className="container d-flex py-5 px-0 justify-content-between">
            <CalculationArea selectedCalculation={selectedCalculation} />
            <Sidebar setSelectedCalculation={setSelectedCalculation} />
        </div>
    );
}

export default Home;
