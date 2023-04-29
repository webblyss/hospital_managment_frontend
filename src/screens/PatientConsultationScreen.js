import { useLocation } from 'react-router-dom';
import NavigationBar from '../components/Nav';
function PatientConsultationScreen() {
  const location = useLocation();
  const data = location.state.data;

  return (
    <div>
        <NavigationBar/>
      <p>{data}</p>
    </div>
  );
}

export default PatientConsultationScreen