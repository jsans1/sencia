import { ImageWithFallback } from './figma/ImageWithFallback';

interface Article {
  image: string;
  title: string;
  source: string;
  excerpt: string;
  category: string;
}

interface ArticleViewProps {
  article: Article;
  onBack: () => void;
}

const generateArticleContent = (article: Article): string => {
  const nutritionContent = {
    "10 astuces pour réduire le sodium au quotidien": `
      <p>Le sodium est présent partout dans notre alimentation moderne, souvent de manière invisible. Réduire sa consommation ne signifie pas pour autant renoncer au goût ! Voici nos conseils d'experts pour une transition en douceur.</p>

      <h3>1. Lisez attentivement les étiquettes</h3>
      <p>Le sodium se cache dans de nombreux aliments transformés. Apprenez à décrypter les étiquettes nutritionnelles et privilégiez les produits contenant moins de 300mg de sodium pour 100g.</p>

      <h3>2. Cuisinez maison</h3>
      <p>En préparant vos repas vous-même, vous contrôlez exactement la quantité de sel ajoutée. Commencez par réduire progressivement les quantités habituelles.</p>

      <h3>3. Explorez les épices et aromates</h3>
      <p>Remplacez le sel par des herbes fraîches, des épices, de l'ail, des oignons ou du citron. Ces alternatives apportent de la saveur sans sodium supplémentaire.</p>

      <h3>4. Attention aux condiments</h3>
      <p>Ketchup, sauce soja, moutarde... Ces petits plus sont souvent très riches en sodium. Optez pour des versions "sans sel ajouté" ou fabriquez les vôtres.</p>

      <h3>5. Rincez les légumes en conserve</h3>
      <p>Un simple rinçage à l'eau froide permet d'éliminer jusqu'à 40% du sodium présent dans les légumes en conserve.</p>

      <h3>Les bénéfices sur votre santé</h3>
      <p>Réduire votre consommation de sodium peut considérablement améliorer votre tension artérielle en quelques semaines seulement. Votre organisme vous remerciera !</p>
    `,

    "L'impact du sel sur la pression artérielle": `
      <p>Le lien entre consommation de sodium et hypertension artérielle est aujourd'hui bien établi par la communauté scientifique. Comprendre ce mécanisme vous aidera à mieux protéger votre système cardiovasculaire.</p>

      <h3>Le mécanisme physiologique</h3>
      <p>Lorsque vous consommez du sodium, vos reins retiennent plus d'eau pour diluer l'excès de sel dans votre sang. Cette rétention d'eau augmente le volume sanguin, forçant votre cœur à pomper plus fort.</p>

      <h3>Les chiffres qui parlent</h3>
      <p>L'Organisation Mondiale de la Santé recommande de ne pas dépasser 5g de sel par jour (soit 2g de sodium). Or, les Français en consomment en moyenne 8 à 10g quotidiennement.</p>

      <h3>Sensibilité individuelle</h3>
      <p>Nous ne sommes pas tous égaux face au sodium. Certaines personnes sont "sel-sensibles" et voient leur tension artérielle réagir plus fortement aux variations de leur consommation.</p>

      <h3>Réduction progressive recommandée</h3>
      <p>Réduire brutalement sa consommation de sel n'est pas recommandé. Une diminution progressive de 10% par semaine permet à vos papilles gustatives de s'adapter naturellement.</p>

      <h3>Surveillance médicale</h3>
      <p>Si vous souffrez d'hypertension, consultez votre médecin avant d'entreprendre des changements alimentaires majeurs. Un suivi régulier de votre tension est essentiel.</p>
    `
  };

  const stressContent = {
    "5 techniques de relaxation rapides": `
      <p>Le stress fait partie de notre quotidien, mais il n'est pas une fatalité. Ces techniques simples et efficaces peuvent être pratiquées n'importe où, n'importe quand, pour retrouver votre sérénité en quelques minutes.</p>

      <h3>1. La respiration 4-7-8</h3>
      <p>Inspirez par le nez pendant 4 secondes, retenez votre souffle 7 secondes, puis expirez par la bouche pendant 8 secondes. Répétez 4 cycles. Cette technique active votre système nerveux parasympathique.</p>

      <h3>2. La relaxation musculaire progressive</h3>
      <p>Contractez puis relâchez chaque groupe musculaire, en commençant par les pieds et en remontant vers la tête. Maintenez la contraction 5 secondes, puis relâchez 10 secondes.</p>

      <h3>3. La visualisation positive</h3>
      <p>Fermez les yeux et imaginez un lieu qui vous apaise : une plage, une forêt, votre salon... Engagez tous vos sens dans cette visualisation pendant 3 à 5 minutes.</p>

      <h3>4. L'ancrage 5-4-3-2-1</h3>
      <p>Identifiez 5 choses que vous voyez, 4 que vous entendez, 3 que vous touchez, 2 que vous sentez, 1 que vous goûtez. Cet exercice vous ramène au moment présent.</p>

      <h3>5. La méditation minute</h3>
      <p>Concentrez-vous uniquement sur votre respiration pendant une minute complète. Quand votre esprit divague, ramenez doucement votre attention sur le souffle.</p>

      <h3>L'efficacité scientifiquement prouvée</h3>
      <p>Ces techniques réduisent le cortisol (hormone du stress) et activent la réponse de relaxation de votre organisme. Pratiquées régulièrement, elles deviennent de véritables réflexes anti-stress.</p>
    `,

    "Méditation : guide pour débutants": `
      <p>La méditation peut sembler intimidante pour les débutants, mais c'est en réalité une pratique simple et accessible à tous. Ce guide vous accompagne dans vos premiers pas vers une pratique régulière.</p>

      <h3>Qu'est-ce que la méditation ?</h3>
      <p>Contrairement aux idées reçues, méditer ne consiste pas à "vider son esprit". Il s'agit plutôt d'observer ses pensées sans jugement et de cultiver une attention bienveillante envers soi-même.</p>

      <h3>Comment commencer ?</h3>
      <p>Débutez par des sessions courtes de 5 minutes. Trouvez un endroit calme, asseyez-vous confortablement, dos droit, et concentrez-vous sur votre respiration naturelle.</p>

      <h3>Les différents types de méditation</h3>
      <p><strong>Méditation de pleine conscience :</strong> Observer le moment présent sans jugement.<br>
      <strong>Méditation guidée :</strong> Suivre les instructions d'un guide audio.<br>
      <strong>Méditation mantra :</strong> Répéter un mot ou une phrase apaisante.</p>

      <h3>Gérer les distractions</h3>
      <p>Il est normal que votre esprit divague. Quand vous vous en rendez compte, ramenez simplement votre attention sur votre point de focus, sans vous critiquer.</p>

      <h3>Créer une routine</h3>
      <p>La régularité est plus importante que la durée. Mieux vaut méditer 5 minutes tous les jours que 30 minutes une fois par semaine. Choisissez un moment fixe : réveil, pause déjeuner, ou coucher.</p>

      <h3>Les bénéfices scientifiquement prouvés</h3>
      <p>Des études montrent que 8 semaines de pratique régulière réduisent l'anxiété, améliorent la concentration et renforcent le système immunitaire. La méditation modifie littéralement la structure de votre cerveau !</p>
    `
  };

  const healthContent = {
    "Prévenir les maladies cardiovasculaires": `
      <p>Les maladies cardiovasculaires représentent la première cause de mortalité dans le monde, mais elles sont largement évitables. Adopter les bonnes habitudes aujourd'hui protège votre cœur pour demain.</p>

      <h3>Les facteurs de risque modifiables</h3>
      <p>Contrairement à l'âge ou aux antécédents familiaux, certains facteurs sont sous votre contrôle : tabagisme, sédentarité, alimentation déséquilibrée, stress chronique, et hypertension artérielle.</p>

      <h3>Une alimentation cardio-protectrice</h3>
      <p>Privilégiez les fruits et légumes (5 portions/jour minimum), les poissons gras riches en oméga-3, les céréales complètes, et limitez les graisses saturées et le sodium.</p>

      <h3>L'exercice physique, votre allié</h3>
      <p>150 minutes d'activité modérée par semaine suffisent ! Marche rapide, vélo, natation... Trouvez l'activité qui vous plaît. Votre cœur est un muscle : plus vous l'entraînez, plus il devient fort.</p>

      <h3>Gérer le stress</h3>
      <p>Le stress chronique élève la tension artérielle et favorise l'inflammation. Techniques de relaxation, sport, sommeil de qualité : autant d'outils pour préserver votre système cardiovasculaire.</p>

      <h3>Le rôle crucial du sommeil</h3>
      <p>Dormir moins de 6 heures par nuit augmente de 48% le risque de maladie cardiaque. Un sommeil réparateur permet à votre cœur de récupérer et de se régénérer.</p>

      <h3>Surveillance médicale</h3>
      <p>Un bilan cardiovasculaire régulier permet de détecter précocement les signes d'alerte : tension artérielle, cholestérol, glycémie. La prévention reste votre meilleure assurance santé.</p>
    `,

    "Sport et hypertension : recommandations": `
      <p>Bouger quand on souffre d'hypertension peut sembler paradoxal, mais l'exercice physique adapté est l'un des traitements les plus efficaces pour réduire naturellement la tension artérielle.</p>

      <h3>L'effet hypotenseur de l'exercice</h3>
      <p>L'activité physique régulière peut réduire la tension systolique de 5 à 10 mmHg, soit l'équivalent d'un médicament antihypertenseur ! L'effet se maintient jusqu'à 24h après l'effort.</p>

      <h3>Quel type d'exercice privilégier ?</h3>
      <p><strong>Cardio modéré :</strong> Marche rapide, vélo, natation (30 min, 5 fois/semaine)<br>
      <strong>Renforcement musculaire :</strong> 2 séances/semaine avec poids légers<br>
      <strong>Évitez :</strong> Les efforts explosifs et la musculation intensive</p>

      <h3>Précautions indispensables</h3>
      <p>Consultez impérativement votre médecin avant de débuter. Un test d'effort peut être nécessaire. Commencez progressivement et surveillez votre tension avant et après l'exercice.</p>

      <h3>Reconnaître les signaux d'alarme</h3>
      <p>Arrêtez immédiatement en cas de : douleur thoracique, essoufflement anormal, vertiges, maux de tête intenses, ou vision trouble. Ces symptômes nécessitent une consultation urgente.</p>

      <h3>L'importance de l'échauffement</h3>
      <p>10 minutes d'échauffement progressif préparent votre système cardiovasculaire à l'effort. De même, une récupération active évite les chutes brutales de tension.</p>

      <h3>Suivi et ajustements</h3>
      <p>Tenez un carnet d'activité avec votre tension avant/après l'exercice. Ces données aideront votre médecin à ajuster votre traitement et optimiser votre programme sportif.</p>
    `
  };

  // Select content based on article title
  if (article.category === 'nutrition') {
    return nutritionContent[article.title as keyof typeof nutritionContent] || nutritionContent["10 astuces pour réduire le sodium au quotidien"];
  } else if (article.category === 'stress') {
    return stressContent[article.title as keyof typeof stressContent] || stressContent["5 techniques de relaxation rapides"];
  } else if (article.category === 'health') {
    return healthContent[article.title as keyof typeof healthContent] || healthContent["Prévenir les maladies cardiovasculaires"];
  }

  // Default content
  return `
    <p>Cet article explore en profondeur les différents aspects de "${article.title}" et vous propose des conseils pratiques pour améliorer votre bien-être au quotidien.</p>
    
    <h3>Introduction</h3>
    <p>${article.excerpt}</p>
    
    <h3>Les points essentiels à retenir</h3>
    <p>Nos experts ont analysé les dernières recherches scientifiques pour vous offrir des recommandations fiables et applicables dans votre quotidien.</p>
    
    <h3>Mise en pratique</h3>
    <p>Découvrez comment intégrer ces conseils de manière progressive et durable dans votre routine de santé.</p>
  `;
};

export default function ArticleView({ article, onBack }: ArticleViewProps) {
  const content = generateArticleContent(article);

  return (
    <div className="bg-white flex flex-col min-h-screen overflow-hidden relative w-full max-w-[393px] mx-auto rounded-[44px]">
      {/* Header with back button */}
      <div className="sticky top-0 z-10 bg-white/90 backdrop-blur-sm border-b border-gray-100">
        <div className="flex items-center gap-4 p-4">
          <button 
            onClick={onBack}
            className="p-2 rounded-full hover:bg-gray-100 transition-colors"
          >
            <svg width="24" height="24" viewBox="0 0 24 24" fill="none">
              <path d="M19 12H5M12 19l-7-7 7-7" stroke="black" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
            </svg>
          </button>
          <div className="flex-1">
            <p className="font-['SF_Pro_Display:Medium',_sans-serif] text-[16px] text-black truncate">
              {article.source}
            </p>
          </div>
        </div>
      </div>

      {/* Article content */}
      <div className="flex-1 overflow-y-auto">
        {/* Featured image */}
        <div className="h-[200px] w-full overflow-hidden">
          <ImageWithFallback
            src={article.image}
            alt={article.title}
            className="w-full h-full object-cover"
          />
        </div>

        {/* Article text */}
        <div className="p-6">
          {/* Title */}
          <h1 className="font-['SF_Pro_Display:Bold',_sans-serif] text-[28px] text-black leading-[1.2] mb-2">
            {article.title}
          </h1>

          {/* Source and date */}
          <div className="flex items-center gap-2 mb-6 pb-4 border-b border-gray-100">
            <p className="font-['SF_Pro_Display:Medium',_sans-serif] text-[14px] text-[#606060]">
              {article.source}
            </p>
            <span className="text-[#606060]">•</span>
            <p className="font-['SF_Pro_Display:Regular',_sans-serif] text-[14px] text-[#606060]">
              {new Date().toLocaleDateString('fr-FR', { 
                day: 'numeric', 
                month: 'long', 
                year: 'numeric' 
              })}
            </p>
          </div>

          {/* Article content */}
          <div 
            className="prose prose-slate max-w-none"
            style={{
              fontFamily: "'SF_Pro_Display:Regular', sans-serif",
              fontSize: '16px',
              lineHeight: '1.6',
              color: '#212121'
            }}
            dangerouslySetInnerHTML={{ __html: content }}
          />

          {/* Reading time and sharing */}
          <div className="mt-8 pt-6 border-t border-gray-100">
            <div className="flex items-center justify-between text-[14px] text-[#606060]">
              <p className="font-['SF_Pro_Display:Regular',_sans-serif]">
                Temps de lecture : 3-4 minutes
              </p>
              <button className="flex items-center gap-2 px-3 py-2 rounded-lg hover:bg-gray-50 transition-colors">
                <svg width="16" height="16" viewBox="0 0 24 24" fill="none">
                  <path d="M4 12v8a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2v-8M16 6l-4-4-4 4M12 2v13" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                </svg>
                <span className="font-['SF_Pro_Display:Medium',_sans-serif]">Partager</span>
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}