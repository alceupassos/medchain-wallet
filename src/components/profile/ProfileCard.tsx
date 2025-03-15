
import { useState } from 'react';
import { Pencil, Plus, ChevronDown, ChevronUp } from 'lucide-react';
import { cn } from '@/lib/utils';
import AppButton from '../ui/AppButton';

interface ProfileSection {
  id: string;
  title: string;
  fields: {
    id: string;
    label: string;
    value: string | string[];
    isArray?: boolean;
  }[];
}

interface ProfileCardProps {
  sections: ProfileSection[];
  className?: string;
}

const ProfileCard = ({ sections, className }: ProfileCardProps) => {
  const [expandedSections, setExpandedSections] = useState<Record<string, boolean>>(
    sections.reduce((acc, section) => ({ ...acc, [section.id]: true }), {})
  );
  
  const toggleSection = (sectionId: string) => {
    setExpandedSections(prev => ({
      ...prev,
      [sectionId]: !prev[sectionId]
    }));
  };

  return (
    <div className={cn("glass-card rounded-xl overflow-hidden", className)}>
      <div className="p-5 border-b border-gray-200 dark:border-gray-800 flex justify-between items-center">
        <h3 className="text-lg font-medium">Medical Profile</h3>
        <AppButton 
          variant="outline" 
          size="sm"
          icon={<Pencil size={14} />}
          iconPosition="left"
        >
          Edit Profile
        </AppButton>
      </div>
      
      <div className="divide-y divide-gray-200 dark:divide-gray-800">
        {sections.map((section) => (
          <div key={section.id} className="overflow-hidden">
            <button
              onClick={() => toggleSection(section.id)}
              className="w-full flex items-center justify-between p-4 hover:bg-gray-50 dark:hover:bg-gray-800/50 transition-colors text-left"
            >
              <span className="font-medium">{section.title}</span>
              {expandedSections[section.id] ? (
                <ChevronUp size={18} className="text-gray-500" />
              ) : (
                <ChevronDown size={18} className="text-gray-500" />
              )}
            </button>
            
            {expandedSections[section.id] && (
              <div className="px-4 pb-4 grid grid-cols-1 md:grid-cols-2 gap-4">
                {section.fields.map((field) => (
                  <div key={field.id} className="space-y-1">
                    <div className="text-sm text-gray-500">{field.label}</div>
                    {field.isArray ? (
                      <div className="space-y-1">
                        {(field.value as string[]).map((item, index) => (
                          <div 
                            key={index}
                            className="bg-gray-100 dark:bg-gray-800 text-sm py-1 px-2 rounded"
                          >
                            {item}
                          </div>
                        ))}
                        <button className="text-xs text-primary flex items-center mt-1">
                          <Plus size={12} className="mr-1" />
                          Add {field.label}
                        </button>
                      </div>
                    ) : (
                      <div className="text-sm font-medium">
                        {field.value || <span className="text-gray-400 italic">Not specified</span>}
                      </div>
                    )}
                  </div>
                ))}
              </div>
            )}
          </div>
        ))}
      </div>
    </div>
  );
};

export default ProfileCard;
