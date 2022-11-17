import React from 'react';
import { useSelector } from 'react-redux';
import { selectAllmissions } from '../redux/missions/MissionsSlice';

const MyProfilePage = () => {
  // rockets reservation
  const allRockets = useSelector((state) => state.rocket);
  const rocketProfile = allRockets.filter((rocket) => rocket.reserved);

  // missions reservation
  const reservation = useSelector(selectAllmissions);
  const missiondata = reservation.filter((item) => item.missionjoin);

  return (
    <div className="grid grid-cols-2 gap-10 px-5 py-3">
      <div className="">
        <div className="text-xl mb-2">Missions</div>
        {missiondata.length > 0 ? (
          <ul className="border rounded divide-y-[1px]">
            {missiondata.map((mission) => (
              <li key={mission.missionid} className="p-3">
                {mission.missionName}
              </li>
            ))}
          </ul>
        ) : (
          ''
        )}
      </div>
      <div className="">
        <div className="text-xl mb-2">Rockets</div>
        {rocketProfile.length > 0 ? (
          <ul className="border rounded divide-y-[1px]">
            {rocketProfile.map((rocket) => (
              <li key={rocket.id} className="p-3">
                {rocket.title}
              </li>
            ))}
          </ul>
        ) : (
          ''
        )}
      </div>
    </div>
  );
};

export default MyProfilePage;
