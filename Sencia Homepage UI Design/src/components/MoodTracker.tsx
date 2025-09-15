import { useState } from 'react';
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogDescription } from './ui/dialog';
import { Button } from './ui/button';

interface MoodTrackerProps {
  isOpen: boolean;
  onClose: () => void;
}

const moods = [
  { emoji: '😊', label: 'Excellent', value: 5, color: 'bg-green-500' },
  { emoji: '🙂', label: 'Bien', value: 4, color: 'bg-green-400' },
  { emoji: '😐', label: 'Correct', value: 3, color: 'bg-yellow-500' },
  { emoji: '😔', label: 'Difficile', value: 2, color: 'bg-orange-500' },
  { emoji: '😢', label: 'Très difficile', value: 1, color: 'bg-red-500' },
];

export function MoodTracker({ isOpen, onClose }: MoodTrackerProps) {
  const [selectedMood, setSelectedMood] = useState<number | null>(null);
  const [notes, setNotes] = useState('');

  const handleSubmit = () => {
    if (selectedMood) {
      // Here you would typically save to backend/database
      console.log('Mood tracked:', { mood: selectedMood, notes, date: new Date() });
      onClose();
      setSelectedMood(null);
      setNotes('');
    }
  };

  return (
    <Dialog open={isOpen} onOpenChange={onClose}>
      <DialogContent className="w-[90%] max-w-md rounded-2xl p-6">
        <DialogHeader>
          <DialogTitle className="text-xl font-semibold text-center mb-6">
            Comment vous sentez-vous ce matin ?
          </DialogTitle>
          <DialogDescription className="text-center text-gray-600">
            Sélectionnez votre état d'humeur du moment
          </DialogDescription>
        </DialogHeader>
        
        <div className="space-y-6">
          {/* Mood Selection */}
          <div className="grid grid-cols-1 gap-3">
            {moods.map((mood) => (
              <button
                key={mood.value}
                onClick={() => setSelectedMood(mood.value)}
                className={`flex items-center gap-4 p-4 rounded-xl border-2 transition-all ${
                  selectedMood === mood.value
                    ? 'border-blue-500 bg-blue-50'
                    : 'border-gray-200 hover:border-gray-300'
                }`}
              >
                <span className="text-3xl">{mood.emoji}</span>
                <div className="flex-1 text-left">
                  <div className="font-medium">{mood.label}</div>
                </div>
                <div className={`w-3 h-3 rounded-full ${mood.color}`} />
              </button>
            ))}
          </div>

          {/* Notes */}
          <div>
            <label className="block text-sm font-medium mb-2">
              Notes (optionnel)
            </label>
            <textarea
              value={notes}
              onChange={(e) => setNotes(e.target.value)}
              placeholder="Comment vous sentez-vous aujourd'hui ?"
              rows={3}
              className="w-full p-3 border border-gray-200 rounded-xl resize-none focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
          </div>

          {/* Actions */}
          <div className="flex gap-3">
            <Button
              variant="outline"
              onClick={onClose}
              className="flex-1"
            >
              Annuler
            </Button>
            <Button
              onClick={handleSubmit}
              disabled={!selectedMood}
              className="flex-1 bg-gradient-to-r from-purple-500 to-blue-500 hover:from-purple-600 hover:to-blue-600"
            >
              Enregistrer
            </Button>
          </div>
        </div>
      </DialogContent>
    </Dialog>
  );
}