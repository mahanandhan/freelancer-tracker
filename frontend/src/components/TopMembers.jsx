import React from 'react';
import { FaUserCircle } from 'react-icons/fa';

const members = [
  { name: 'Linna Skies', role: 'Creator' },
  { name: 'Nam Osair', role: 'Product' },
  { name: 'Junna Vorbaer', role: 'Support' },
  { name: 'Jnn. Instipins', role: 'Designer' }
];

const TopMembers = () => (
  <div className="bg-white rounded-xl shadow-lg border-2 border-blue-400 p-6 w-80">
    <h3 className="font-bold text-lg mb-5 text-blue-700">Top Team Members</h3>
    <ul>
      {members.map((member, idx) => (
        <li key={idx} className="flex items-center mb-4 last:mb-0">
          <FaUserCircle className="text-blue-400 mr-3" size={36} />
          <div>
            <div className="text-base font-semibold text-gray-900">{member.name}</div>
            <div className="text-xs text-gray-500">{member.role}</div>
          </div>
        </li>
      ))}
    </ul>
    <div className="mt-7">
      {/* Calendar widget grid and icons, styled for similarity */}
    </div>
  </div>
);

export default TopMembers;
