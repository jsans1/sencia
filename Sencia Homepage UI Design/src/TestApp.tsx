export default function TestApp() {
  return (
    <div className="min-h-screen bg-gray-100 p-8">
      <div className="max-w-md mx-auto bg-white rounded-2xl shadow-lg p-6 space-y-6">
        <h1 className="text-2xl font-semibold text-center">Sencia Health Dashboard</h1>
        
        <div className="bg-gradient-to-r from-blue-50 to-purple-50 rounded-xl p-4">
          <h2 className="text-lg font-medium mb-2">Bonjour, Loris !</h2>
          <div className="flex items-center justify-between">
            <p className="text-sm text-gray-600">Comment vous sentez-vous ce matin ?</p>
            <button className="bg-black text-white rounded-full w-10 h-10 flex items-center justify-center">
              +
            </button>
          </div>
        </div>

        <div className="space-y-3">
          <h3 className="text-lg font-semibold">Votre état de santé</h3>
          
          <div className="bg-white border rounded-xl p-4 shadow-sm">
            <div className="flex items-center justify-between">
              <div>
                <h4 className="font-medium">Symptômes globaux</h4>
                <p className="text-sm text-gray-600">En amélioration</p>
              </div>
              <div className="w-3 h-3 bg-green-500 rounded-full"></div>
            </div>
          </div>

          <div className="bg-white border rounded-xl p-4 shadow-sm">
            <div className="flex items-center justify-between">
              <div>
                <h4 className="font-medium">Pression artérielle</h4>
                <p className="text-sm text-gray-600">Attention</p>
              </div>
              <div className="w-3 h-3 bg-yellow-500 rounded-full"></div>
            </div>
          </div>

          <div className="bg-white border rounded-xl p-4 shadow-sm">
            <div className="flex items-center justify-between">
              <div>
                <h4 className="font-medium">Adhérence aux traitements</h4>
                <p className="text-sm text-gray-600">À améliorer</p>
              </div>
              <div className="w-3 h-3 bg-red-500 rounded-full"></div>
            </div>
          </div>
        </div>

        <div className="bg-blue-50 rounded-xl p-4">
          <h3 className="font-medium mb-2">Biomarqueurs</h3>
          <p className="text-sm text-gray-600">Graphique de pression artérielle</p>
        </div>
      </div>
    </div>
  );
}