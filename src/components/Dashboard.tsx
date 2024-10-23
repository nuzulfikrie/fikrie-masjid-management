import React from 'react';
import { Users, Package, Calendar, Heart } from 'lucide-react';
import PrayerTimes from './PrayerTimes';

const stats = [
  { icon: Users, label: 'Members', value: '250+', color: 'bg-blue-500' },
  { icon: Package, label: 'Assets', value: '1,200', color: 'bg-emerald-500' },
  { icon: Calendar, label: 'Events', value: '15', color: 'bg-purple-500' },
  { icon: Heart, label: 'Alms', value: '$25,000', color: 'bg-rose-500' },
];

export default function Dashboard() {
  return (
    <div className="p-6">
      <h2 className="text-2xl font-bold mb-6">Dashboard Overview</h2>
      
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
        {stats.map((stat) => (
          <div key={stat.label} className="bg-white rounded-xl shadow-sm p-6">
            <div className={`${stat.color} w-12 h-12 rounded-lg flex items-center justify-center mb-4`}>
              <stat.icon className="h-6 w-6 text-white" />
            </div>
            <h3 className="text-gray-500 text-sm">{stat.label}</h3>
            <p className="text-2xl font-bold">{stat.value}</p>
          </div>
        ))}
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        <PrayerTimes />
        
        <div className="bg-white rounded-xl shadow-sm p-6">
          <h3 className="text-lg font-semibold mb-4">Upcoming Events</h3>
          <div className="space-y-4">
            {['Fajr Prayer', 'Weekly Lecture', 'Community Iftar'].map((event) => (
              <div key={event} className="flex items-center gap-4 p-3 bg-gray-50 rounded-lg">
                <Calendar className="h-5 w-5 text-emerald-600" />
                <span>{event}</span>
              </div>
            ))}
          </div>
        </div>

        <div className="bg-white rounded-xl shadow-sm p-6">
          <h3 className="text-lg font-semibold mb-4">Recent Donations</h3>
          <div className="space-y-4">
            {[
              { type: 'Zakat', amount: '$1,000' },
              { type: 'Sadaqah', amount: '$500' },
              { type: 'General', amount: '$750' },
            ].map((donation) => (
              <div key={donation.type} className="flex items-center justify-between p-3 bg-gray-50 rounded-lg">
                <span>{donation.type}</span>
                <span className="font-semibold">{donation.amount}</span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}