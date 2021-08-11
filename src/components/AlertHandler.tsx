import { Alert } from "reactstrap";

interface alertHandlerInterface {
  alert: {
    isAlert:boolean;
    alertMsg:string;
    type: 'error' | 'success' | 'none';
  };
}
const AlertHandler: React.FC<alertHandlerInterface> = ({ alert }) => {

  const typeOfAlert = ()=>{
    switch(alert.type){
      case 'error': return 'danger';
      case 'success' : return 'success';
      default: return ''
    }
  } 
    return(
        <div className='alert-container'>
            {alert.isAlert ? (
                <Alert color={typeOfAlert()} className="p-2 text-center rounded-0">
                   {alert.alertMsg}
              </Alert>
            ) : (
                ''
            )}
        </div>
    )

};

export default AlertHandler;
