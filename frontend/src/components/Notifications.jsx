import React from 'react';
import { FaEnvelope, FaBell } from 'react-icons/fa';

const notifications = [
  {
    type: 'Unread',
    count: 310,
    description: 'Unread Messages'
  },
  {
    type: 'Unanswered',
    count: 210,
    description: 'Unanswered Messages'
  }
];

const Notifications = () => (
  <div className="bg-white rounded-xl shadow-lg border border-gray-200 p-6 w-80">
    <h3 className="font-bold text-lg mb-4 text-gray-900">Notifications</h3>
    <ul>
      {notifications.map((item, idx) => (
        <li key={idx} className="flex items-center justify-between mb-4 last:mb-0">
          <div className="flex items-center space-x-3">
            <FaEnvelope className="text-blue-500" size={28} />
            <div>
              <p className="text-gray-900 font-semibold">{item.type}</p>
              <p className="text-gray-500 text-xs">{item.description}</p>
            </div>
          </div>
          <div className="text-blue-500 font-bold text-lg">{item.count}</div>
        </li>
      ))}
    </ul>
  </div>
);

export default Notifications;
