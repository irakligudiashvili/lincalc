import Arithmetic from "../calculations/Arithmetic"
import Inversion from "../calculations/Inversion";
import Multiplication from "../calculations/Multiplication";

function CalculationArea({selectedCalculation}){
    const renderCalculation = () => {
        switch(selectedCalculation){
            case 'arithmetic':
                return <Arithmetic />;
            case 'multiplication':
                return <Multiplication />;
            case 'inversion':
                return <Inversion />;
            default:
                return <div>Select a calculation</div>

        }
    }

    return <div className="bg-primary bg-gradient col-8">
        {renderCalculation()}
    </div>
}

export default CalculationArea