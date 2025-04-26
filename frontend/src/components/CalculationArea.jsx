import Arithmetic from "../calculations/Arithmetic"
import Coordinates from "../calculations/Coordinates";
import Determinant2x2 from "../calculations/Determinant2x2";
import Determinant3x3 from "../calculations/Determinant3x3";
import DotProduct from "../calculations/DotProduct";
import Inversion2x2 from "../calculations/Inversion2x2";
import Inversion3x3 from "../calculations/Inversion3x3";
import Magnitude from "../calculations/Magnitude";
import Multiplication from "../calculations/Multiplication";
import Transpose from "../calculations/Transpose";
import Test from "./Test";

function CalculationArea({selectedCalculation}){
    const renderCalculation = () => {
        switch(selectedCalculation){
            case 'arithmetic':
                return <Arithmetic />;
            case 'multiplication':
                return <Multiplication />;
            case 'inversion':
                return <Inversion />;
            case 'determinant2x2':
                return <Determinant2x2 />
            case 'determinant3x3':
                return <Determinant3x3 />
            case 'inversion2x2':
                return <Inversion2x2 />
            case 'inversion3x3':
                return <Inversion3x3 />
            case 'transpose':
                return <Transpose />
            case 'coordinates':
                return <Coordinates />
            case 'magnitude':
                return <Magnitude />
            case 'dotProduct':
                return <DotProduct />
            case 'test':
                return <Test />
            default:
                return <div className="bg-secondary rounded-4 d-flex flex-column justify-content-center align-items-center py-3">
                    <h2>Select a calculation</h2>
                </div>

        }
    }

    return <div className="bg-gradient col-12 col-md-8 h-100">
        {renderCalculation()}
    </div>
}

export default CalculationArea