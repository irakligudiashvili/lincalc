import Arithmetic from "../calculations/Arithmetic"
import Determinant2x2 from "../calculations/Determinant2x2";
import Determinant3x3 from "../calculations/Determinant3x3";
import Inversion from "../calculations/Inversion";
import Inversion2x2 from "../calculations/Inversion2x2";
import Inversion3x3 from "../calculations/Inversion3x3";
import Multiplication from "../calculations/Multiplication";
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
            case 'test':
                return <Test />
            default:
                return <div className="container fs-3 text-center py-5 text-primary">Select a calculation</div>

        }
    }

    return <div className="bg-gradient col-8 h-100">
        {renderCalculation()}
    </div>
}

export default CalculationArea