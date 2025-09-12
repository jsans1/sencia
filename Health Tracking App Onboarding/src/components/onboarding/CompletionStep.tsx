import { OnboardingData } from '../OnboardingFlow';
import { Button } from '../ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '../ui/card';
import { Badge } from '../ui/badge';
import { CheckCircle, Heart, Clock, Pill, Calendar } from 'lucide-react';

interface CompletionStepProps {
  data: OnboardingData;
  onRestart: () => void;
}

export function CompletionStep({ data, onRestart }: CompletionStepProps) {
  const frequencyLabels = {
    '1': '1 fois par jour',
    '2': '2 fois par jour',
    '3': '3 fois par jour',
    '4': '4 fois par jour'
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 via-purple-50 to-pink-50 p-4">
      <div className="max-w-md mx-auto space-y-6">
        {/* Header */}
        <div className="text-center py-8">
          <div className="w-20 h-20 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4">
            <CheckCircle className="w-10 h-10 text-green-600" />
          </div>
          <h1 className="text-3xl font-semibold text-gray-900 mb-2">
            Félicitations !
          </h1>
          <p className="text-gray-600">
            Votre Care Plan Sencia est maintenant configuré et prêt à vous accompagner dans votre parcours de santé.
          </p>
        </div>

        {/* Summary Cards */}
        <div className="space-y-4">
          {/* Health Condition */}
          <Card>
            <CardHeader className="pb-3">
              <CardTitle className="flex items-center gap-2 text-lg">
                <Heart className="w-5 h-5 text-red-500" />
                Condition de santé
              </CardTitle>
            </CardHeader>
            <CardContent>
              <div className="space-y-2">
                <p className="font-medium">{data.chronicIllness.condition}</p>
                <p className="text-sm text-gray-600">Catégorie: {data.chronicIllness.category}</p>
                {data.chronicIllness.diagnosisDate.day && (
                  <div className="flex items-center gap-2 text-sm text-gray-600">
                    <Calendar className="w-4 h-4" />
                    Diagnostiqué le {data.chronicIllness.diagnosisDate.day}/{data.chronicIllness.diagnosisDate.month}/{data.chronicIllness.diagnosisDate.year}
                  </div>
                )}
              </div>
            </CardContent>
          </Card>

          {/* Medications */}
          {data.chronicIllness.medications.length > 0 && (
            <Card>
              <CardHeader className="pb-3">
                <CardTitle className="flex items-center gap-2 text-lg">
                  <Pill className="w-5 h-5 text-blue-500" />
                  Médicaments
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="flex flex-wrap gap-2">
                  {data.chronicIllness.medications.map((med, index) => (
                    <Badge key={index} variant="secondary" className="text-sm">
                      {med}
                    </Badge>
                  ))}
                </div>
              </CardContent>
            </Card>
          )}

          {/* Check-in Frequency */}
          <Card>
            <CardHeader className="pb-3">
              <CardTitle className="flex items-center gap-2 text-lg">
                <CheckCircle className="w-5 h-5 text-green-500" />
                Fréquence des check-ins
              </CardTitle>
            </CardHeader>
            <CardContent>
              <p className="font-medium">{frequencyLabels[data.checkInFrequency]}</p>
              <p className="text-sm text-gray-600 mt-1">
                Vous recevrez des rappels pour faire vos check-ins réguliers.
              </p>
            </CardContent>
          </Card>

          {/* Notification Times */}
          <Card>
            <CardHeader className="pb-3">
              <CardTitle className="flex items-center gap-2 text-lg">
                <Clock className="w-5 h-5 text-purple-500" />
                Horaires de rappels
              </CardTitle>
            </CardHeader>
            <CardContent>
              <div className="space-y-2">
                <div className="flex justify-between items-center">
                  <span className="text-sm font-medium">Matin</span>
                  <span className="text-sm bg-gradient-to-r from-purple-600 to-blue-600 bg-clip-text text-transparent font-semibold">
                    {data.notifications.morning}
                  </span>
                </div>
                <div className="flex justify-between items-center">
                  <span className="text-sm font-medium">Soir</span>
                  <span className="text-sm bg-gradient-to-r from-purple-600 to-blue-600 bg-clip-text text-transparent font-semibold">
                    {data.notifications.evening}
                  </span>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>

        {/* Next Steps */}
        <Card className="border-2 border-blue-200">
          <CardHeader>
            <CardTitle className="text-lg text-blue-900">Prochaines étapes</CardTitle>
          </CardHeader>
          <CardContent className="space-y-3">
            <div className="space-y-2">
              <p className="text-sm text-blue-800">✓ Votre profil de santé est configuré</p>
              <p className="text-sm text-blue-800">✓ Les notifications sont activées</p>
              <p className="text-sm text-blue-800">✓ Votre Care Plan est prêt</p>
            </div>
            <div className="pt-2 border-t border-blue-200">
              <p className="text-sm font-medium text-blue-900">
                Commencez dès maintenant à suivre votre santé avec Sencia !
              </p>
            </div>
          </CardContent>
        </Card>

        {/* Action Buttons */}
        <div className="space-y-3 pt-4">
          <Button 
            className="w-full bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 text-white py-3 rounded-xl text-lg font-medium"
            onClick={() => {
              // In a real app, this would navigate to the main dashboard
              alert('Redirection vers le tableau de bord principal...');
            }}
          >
            Accéder à mon dashboard
          </Button>
          
          <Button 
            variant="outline" 
            className="w-full py-3 rounded-xl text-gray-600 border-gray-300 hover:bg-gray-50"
            onClick={onRestart}
          >
            Recommencer la configuration
          </Button>
        </div>

        {/* Footer */}
        <div className="text-center py-4">
          <p className="text-xs text-gray-500">
            Vous pouvez modifier ces paramètres à tout moment dans les réglages.
          </p>
        </div>
      </div>
    </div>
  );
}