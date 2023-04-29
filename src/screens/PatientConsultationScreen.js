import { useLocation } from 'react-router-dom';
import NavigationBar from '../components/Nav';
function PatientConsultationScreen() {
  const location = useLocation();
  const data = location.state.data;

  return (
    <div>
        <NavigationBar/>
      <p>{data.patient_info.firstName}</p>
    </div>
  );
}

export default PatientConsultationScreen