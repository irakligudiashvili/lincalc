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
                return <div className="container fs-3 text-center py-5 text-primary">Select a calculation</div>

        }
    }

    return <div className="bg-secondary bg-gradient col-8 h-100 rounded-4">
        {renderCalculation()}
    </div>
}

export default CalculationArea