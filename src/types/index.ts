export interface User {
  id: string;
  name: string;
  role: 'admin' | 'staff' | 'member';
  email: string;
  joinDate: Date;
}

export interface Asset {
  id: string;
  name: string;
  category: 'furniture' | 'equipment' | 'books' | 'other';
  quantity: number;
  condition: 'excellent' | 'good' | 'fair' | 'poor';
  location: string;
  purchaseDate?: Date;
}

export interface Event {
  id: string;
  title: string;
  description: string;
  date: Date;
  type: 'prayer' | 'lecture' | 'community' | 'other';
  attendees?: number;
}

export interface AlmsRecord {
  id: string;
  amount: number;
  type: 'zakat' | 'sadaqah' | 'donation';
  donor?: string;
  date: Date;
  purpose?: string;
}