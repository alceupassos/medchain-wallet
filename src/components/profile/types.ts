
export interface ProfileField {
  id: string;
  label: string;
  value: string | string[];
  isArray?: boolean;
}

export interface ProfileSection {
  id: string;
  title: string;
  fields: ProfileField[];
}

export interface MedicalRecord {
  id: string;
  date: string;
  type: string;
  doctor: string;
  specialty?: string;
  institution?: string;
  diagnosis?: string;
  notes: string;
  blockchainVerified?: boolean;
  attachments?: Array<{
    id: string;
    name: string;
    type: string;
    url: string;
  }>;
  lastModified?: string;
  accessHistory?: Array<{
    user: string;
    date: string;
    action: string;
  }>;
}

export interface Medication {
  id: string;
  name: string;
  dose: string;
  frequency: string;
  startDate: string;
  endDate: string;
}

export interface Appointment {
  id: string;
  date: string;
  time: string;
  doctor: string;
  specialty: string;
  location: string;
}

export interface HealthMetric {
  name: string;
  value: string;
  date: string;
  status: "Normal" | "Alerta" | "Crítico";
}

export interface AccessLog {
  id: string;
  date: string;
  time: string;
  user: string;
  action: string;
}
