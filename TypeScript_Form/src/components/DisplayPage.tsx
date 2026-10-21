import { useAtomValue } from 'jotai';
import { userFormAtom } from '../dataCenter/formAtom';
import { Link } from 'react-router-dom';

function DisplayPage() {
  const formData = useAtomValue(userFormAtom);

  return (
    <div style={{  padding: '20px', maxWidth: '400px', borderRadius: '5px', display: 'flex', flexDirection: 'column', justifyContent: 'center', margin: '10% auto'  }}>
      <h2>Submitted Information</h2>
      <div style={{ background: 'aliceblue', padding: '15px', borderRadius: '5px', width: '320px' }}>
        <p><strong>Name : </strong> {formData.name}</p>
        <p><strong>Email : </strong> {formData.email}</p>
        <p><strong>Number : </strong> {formData.phoneNumber}</p>
        <p><strong>City : </strong> {formData.city}</p>
        <p><strong>Gender : </strong> {formData.gender}</p>
        <p><strong>Terms and Conditions : </strong> {formData.termsAndConditions ? "Accepted" : "Rejected"}</p>
      </div>
      <br />
      <Link to="/">Back to Form</Link>
    </div>
  );
}

export default DisplayPage;



