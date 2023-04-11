import { useEffect } from 'react';
import { useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';

function ProfileCard() {
  const navigate = useNavigate();
  const { userInfo } = useSelector((state) => state.userLogin);
  const { email, name } = userInfo || {};

  useEffect(() => {
    if (!email && !name) {
      navigate('/login	');
    }
  }, [email, name]);

  return (
    <div className="m-auto flex flex-col justify-center	text-center	">
      <div>
        <p>{name}</p>
        <p>{email}</p>
      </div>
    </div>
  );
}

export default ProfileCard;
