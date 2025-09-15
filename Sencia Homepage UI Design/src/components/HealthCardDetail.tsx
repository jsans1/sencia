import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogDescription } from './ui/dialog';
import { Progress } from './ui/progress';
import { Badge } from './ui/badge';

interface HealthCardDetailProps {
  isOpen: boolean;
  onClose: () => void;
  cardType: string | null;
}

const cardDetails = {
  'symptoms': {
    title: 'Symptômes globaux',
    status: 'En amélioration',
    description: 'Vos symptômes se sont globalement améliorés ce mois-ci par rapport à février.',
    color: 'bg-green-500',
    progress: 85,
    recommendations: [
      'Continuez votre routine matinale',
      'Maintenez une activité physique régulière',
      'Surveillez votre alimentation'
    ]
  },
  'blood-pressure': {
    title: 'Pression artérielle',
    status: 'Attention',
    description: '2-3 crises modérées rapportées ce mois-ci.',
    color: 'bg-yellow-500',
    progress: 65,
    recommendations: [
      'Réduisez votre consommation de sel',
      'Pratiquez des exercices de relaxation',
      'Consultez votre médecin si les symptômes persistent'
    ]
  },
  'treatment-adherence': {
    title: 'Adhérence aux traitements',
    status: 'À améliorer',
    description: 'Essayez de respecter votre prescription.',
    color: 'bg-red-500',
    progress: 45,
    recommendations: [
      'Configurez des rappels de médicaments',
      'Organisez vos pilules avec un pilulier',
      'Parlez à votre pharmacien des difficultés rencontrées'
    ]
  }
};

export function HealthCardDetail({ isOpen, onClose, cardType }: HealthCardDetailProps) {
  if (!cardType || !cardDetails[cardType as keyof typeof cardDetails]) {
    return null;
  }

  const card = cardDetails[cardType as keyof typeof cardDetails];

  return (
    <Dialog open={isOpen} onOpenChange={onClose}>
      <DialogContent className="w-[90%] max-w-md rounded-2xl p-6">
        <DialogHeader>
          <DialogTitle className="text-xl font-semibold mb-4">
            {card.title}
          </DialogTitle>
          <DialogDescription>
            Détails et recommandations pour votre {card.title.toLowerCase()}
          </DialogDescription>
        </DialogHeader>
        
        <div className="space-y-6">
          {/* Status Badge */}
          <div className="flex items-center gap-3">
            <div className={`w-4 h-4 rounded-full ${card.color}`} />
            <Badge variant="secondary">{card.status}</Badge>
          </div>

          {/* Progress */}
          <div className="space-y-2">
            <div className="flex justify-between text-sm">
              <span>Progression</span>
              <span>{card.progress}%</span>
            </div>
            <Progress value={card.progress} className="h-2" />
          </div>

          {/* Description */}
          <p className="text-gray-600 text-sm leading-relaxed">
            {card.description}
          </p>

          {/* Recommendations */}
          <div className="space-y-3">
            <h4 className="font-medium">Recommandations</h4>
            <ul className="space-y-2">
              {card.recommendations.map((rec, index) => (
                <li key={index} className="flex items-start gap-2 text-sm text-gray-600">
                  <span className="text-blue-500 mt-1">•</span>
                  {rec}
                </li>
              ))}
            </ul>
          </div>
        </div>
      </DialogContent>
    </Dialog>
  );
}