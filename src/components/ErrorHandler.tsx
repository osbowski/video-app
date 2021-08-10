import { Alert } from "reactstrap";

interface errorHanlderInterface {
  error: {
    isError:boolean;
    errorMsg:string;
  };
}
const errorHandler: React.FC<errorHanlderInterface> = ({ error }) => {
    return(
        <div className='alert-container'>
            {error.isError ? (
                <Alert color="danger" className="p-2 text-center rounded-0">
                   {error.errorMsg}
              </Alert>
            ) : (
                ''
            )}
        </div>
    )

};

export default errorHandler;
