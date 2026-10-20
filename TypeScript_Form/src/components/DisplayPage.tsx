import { useAtomValue } from 'jotai';
import { userFormAtom } from '../dataCenter/formAtom';
import { Link } from 'react-router-dom';

 function DisplayPage() {

  const formData = useAtomValue(userFormAtom);

  return (
    <div style={{ padding: '20px' }}>
      <h2>Submitted Information </h2>
      
      <div style={{ background: 'aliceblue', padding: '15px', borderRadius: '5px', width: '300px' }}>
        <p><strong>Name:</strong> {formData.name}</p>
        <p><strong>Email:</strong> {formData.email}</p>
        <p><strong>Age:</strong> {formData.age}</p>
      </div>

      <br />
      <Link to="/">  Back to Form</Link>
    </div>
  );
}
export default DisplayPage;