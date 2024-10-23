import React, { useEffect, useState } from 'react';
import { Clock } from 'lucide-react';

interface PrayerTime {
  name: string;
  time: string;
  isNext: boolean;
}

export default function PrayerTimes() {
  const [prayerTimes, setPrayerTimes] = useState<PrayerTime[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchPrayerTimes = async () => {
      try {
        const date = new Date();
        const response = await fetch(
          `https://api.aladhan.com/v1/timingsByCity/${date.getDate()}-${date.getMonth() + 1}-${date.getFullYear()}?city=Dubai&country=United Arab Emirates&method=8`
        );
        const data = await response.json();
        const timings = data.data.timings;
        
        const prayers = [
          { name: 'Fajr', time: timings.Fajr },
          { name: 'Dhuhr', time: timings.Dhuhr },
          { name: 'Asr', time: timings.Asr },
          { name: 'Maghrib', time: timings.Maghrib },
          { name: 'Isha', time: timings.Isha },
        ];

        // Determine next prayer
        const now = new Date();
        const currentTime = now.getHours() * 60 + now.getMinutes();
        
        const prayersWithNext = prayers.map(prayer => {
          const [hours, minutes] = prayer.time.split(':');
          const prayerTime = parseInt(hours) * 60 + parseInt(minutes);
          return {
            ...prayer,
            isNext: prayerTime > currentTime
          };
        });

        setPrayerTimes(prayersWithNext);
        setLoading(false);
      } catch (error) {
        console.error('Error fetching prayer times:', error);
        setLoading(false);
      }
    };

    fetchPrayerTimes();
  }, []);

  if (loading) {
    return (
      <div className="bg-white rounded-xl shadow-sm p-6">
        <h3 className="text-lg font-semibold mb-4">Prayer Times</h3>
        <div className="flex justify-center items-center h-40">
          <div className="animate-pulse text-gray-400">Loading prayer times...</div>
        </div>
      </div>
    );
  }

  return (
    <div className="bg-white rounded-xl shadow-sm p-6">
      <div className="flex items-center gap-2 mb-4">
        <Clock className="h-5 w-5 text-emerald-600" />
        <h3 className="text-lg font-semibold">Prayer Times</h3>
      </div>
      <div className="space-y-3">
        {prayerTimes.map((prayer) => (
          <div
            key={prayer.name}
            className={`flex items-center justify-between p-3 rounded-lg ${
              prayer.isNext
                ? 'bg-emerald-50 border border-emerald-200'
                : 'bg-gray-50'
            }`}
          >
            <span className={prayer.isNext ? 'font-medium text-emerald-700' : ''}>
              {prayer.name}
            </span>
            <span className={prayer.isNext ? 'font-medium text-emerald-700' : ''}>
              {prayer.time}
            </span>
          </div>
        ))}
      </div>
    </div>
  );
}