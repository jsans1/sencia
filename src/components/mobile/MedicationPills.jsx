import React, { useState } from 'react';

const MedicationPills = ({ 
  selectedMedications = [], 
  onMedicationChange, 
  className = '' 
}) => {
  const [showAddInput, setShowAddInput] = useState(false);
  const [newMedication, setNewMedication] = useState('');

  const predefinedMedications = [
    'Ramipril',
    'Lisinopril', 
    'Amlodipine',
    'Bisoprolol',
    'Hydrochlorothiazide',
    'Valsartan'
  ];

  const handleToggleMedication = (medication) => {
    const newSelected = selectedMedications.includes(medication)
      ? selectedMedications.filter(med => med !== medication)
      : [...selectedMedications, medication];
    onMedicationChange(newSelected);
  };

  const handleAddCustomMedication = () => {
    if (newMedication.trim() && !selectedMedications.includes(newMedication.trim())) {
      const newSelected = [...selectedMedications, newMedication.trim()];
      onMedicationChange(newSelected);
      setNewMedication('');
      setShowAddInput(false);
    }
  };

  const handleKeyPress = (e) => {
    if (e.key === 'Enter') {
      handleAddCustomMedication();
    } else if (e.key === 'Escape') {
      setNewMedication('');
      setShowAddInput(false);
    }
  };

  return (
    <div className={`medication-pills ${className}`}>
      <div className="pills-container">
        {predefinedMedications.map((medication) => (
          <button
            key={medication}
            className={`medication-pill ${selectedMedications.includes(medication) ? 'selected' : ''}`}
            onClick={() => handleToggleMedication(medication)}
          >
            {medication}
            {selectedMedications.includes(medication) && (
              <span className="pill-check">✓</span>
            )}
          </button>
        ))}

        {/* Custom selected medications */}
        {selectedMedications
          .filter(med => !predefinedMedications.includes(med))
          .map((medication) => (
            <button
              key={medication}
              className="medication-pill selected custom"
              onClick={() => handleToggleMedication(medication)}
            >
              {medication}
              <span className="pill-check">✓</span>
            </button>
          ))
        }

        {/* Add medication input or button */}
        {showAddInput ? (
          <div className="add-medication-input">
            <input
              type="text"
              value={newMedication}
              onChange={(e) => setNewMedication(e.target.value)}
              onKeyDown={handleKeyPress}
              onBlur={() => {
                if (!newMedication.trim()) {
                  setShowAddInput(false);
                }
              }}
              placeholder="Nom du médicament"
              autoFocus
            />
            <button onClick={handleAddCustomMedication} disabled={!newMedication.trim()}>
              Ajouter
            </button>
          </div>
        ) : (
          <button 
            className="add-medication-pill"
            onClick={() => setShowAddInput(true)}
          >
            <span className="add-icon">+</span>
            J'ajoute un médicament
          </button>
        )}
      </div>
    </div>
  );
};

export default MedicationPills;