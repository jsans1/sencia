import { supabase } from '../supabaseClient';
import fakeProfile from '../fakeProfile';

// Configuration to switch between fake data and Supabase
const USE_SUPABASE = false; // Set to true when ready to use real data

/**
 * Generate additional fake data for different time periods
 */
const generateFakeDataForPeriod = (startDate, endDate, baseData = fakeProfile.monthData) => {
  const newData = [];
  const start = new Date(startDate);
  const end = new Date(endDate);
  
  // Generate data for each day in the range
  for (let d = new Date(start); d <= end; d.setDate(d.getDate() + 1)) {
    const dateStr = d.toISOString().split('T')[0];
    
    // Check if we already have data for this date
    const existingData = baseData.find(item => item.date === dateStr);
    
    if (existingData) {
      newData.push(existingData);
    } else {
      // Generate new data with some variation
      const randomVariation = () => Math.random() > 0.5;
      const randomChoice = (options) => options[Math.floor(Math.random() * options.length)];
      
      newData.push({
        user_id: "1e8e1b2c-1234-4a5b-8cde-123456789abc",
        date: dateStr,
        fatigue: randomChoice(["léger", "modéré", "intense"]),
        gonflements: randomChoice(["aucun", "léger", "modéré"]),
        palpitations: randomChoice(["aucune", "légère", "modérée"]),
        traitement_suivi: randomVariation(),
        stress_event: Math.random() > 0.7,
        sommeil: randomChoice(["bon", "moyen", "mauvais"]),
        activite_physique: Math.floor(Math.random() * 5) + 1,
        alcool_verres: Math.floor(Math.random() * 3),
        hydratation_ok: randomVariation(),
        sel_haute_conso: Math.random() > 0.8
      });
    }
  }
  
  return newData.sort((a, b) => new Date(a.date) - new Date(b.date));
};

/**
 * Fetch data from Supabase for a specific date range
 */
const fetchSupabaseData = async (startDate, endDate, userId = "1e8e1b2c-1234-4a5b-8cde-123456789abc") => {
  try {
    const { data, error } = await supabase
      .from('health_logs') // Assuming this is the table name
      .select('*')
      .eq('user_id', userId)
      .gte('date', startDate)
      .lte('date', endDate)
      .order('date', { ascending: true });

    if (error) {
      console.error('Error fetching data from Supabase:', error);
      // Fallback to fake data
      return generateFakeDataForPeriod(startDate, endDate);
    }

    return data || [];
  } catch (error) {
    console.error('Error connecting to Supabase:', error);
    // Fallback to fake data
    return generateFakeDataForPeriod(startDate, endDate);
  }
};

/**
 * Main data fetching function
 */
export const fetchHealthData = async (startDate, endDate, userId) => {
  if (USE_SUPABASE) {
    return await fetchSupabaseData(startDate, endDate, userId);
  } else {
    // Use fake data with generation for extended periods
    return generateFakeDataForPeriod(startDate, endDate);
  }
};

/**
 * Get data for a specific time period based on tab and dateRangeIndex
 */
export const getDataForPeriod = async (tab, dateRangeIndex = 0, userId) => {
  const today = new Date();
  let startDate, endDate;

  switch (tab) {
    case 'Jour':
      const dayOffset = dateRangeIndex;
      const targetDay = new Date(today);
      targetDay.setDate(today.getDate() + dayOffset);
      startDate = endDate = targetDay.toISOString().split('T')[0];
      break;

    case 'Semaine':
      const weekOffset = dateRangeIndex * 7;
      const weekStart = new Date(today);
      weekStart.setDate(today.getDate() - 6 + weekOffset); // Start of week (7 days ago)
      const weekEnd = new Date(weekStart);
      weekEnd.setDate(weekStart.getDate() + 6);
      startDate = weekStart.toISOString().split('T')[0];
      endDate = weekEnd.toISOString().split('T')[0];
      break;

    case 'Mois':
      const monthOffset = dateRangeIndex * 30;
      const monthStart = new Date(today);
      monthStart.setDate(today.getDate() - 29 + monthOffset); // Start of month (30 days ago)
      const monthEnd = new Date(monthStart);
      monthEnd.setDate(monthStart.getDate() + 29);
      startDate = monthStart.toISOString().split('T')[0];
      endDate = monthEnd.toISOString().split('T')[0];
      break;

    case 'Trimestre':
      const quarterOffset = dateRangeIndex * 90;
      const quarterStart = new Date(today);
      quarterStart.setDate(today.getDate() - 89 + quarterOffset); // Start of quarter (90 days ago)
      const quarterEnd = new Date(quarterStart);
      quarterEnd.setDate(quarterStart.getDate() + 89);
      startDate = quarterStart.toISOString().split('T')[0];
      endDate = quarterEnd.toISOString().split('T')[0];
      break;

    case 'Année':
      const yearOffset = dateRangeIndex * 365;
      const yearStart = new Date(today);
      yearStart.setDate(today.getDate() - 364 + yearOffset); // Start of year (365 days ago)
      const yearEnd = new Date(yearStart);
      yearEnd.setDate(yearStart.getDate() + 364);
      startDate = yearStart.toISOString().split('T')[0];
      endDate = yearEnd.toISOString().split('T')[0];
      break;

    default:
      // Default to current month
      startDate = new Date(today.getFullYear(), today.getMonth(), 1).toISOString().split('T')[0];
      endDate = new Date(today.getFullYear(), today.getMonth() + 1, 0).toISOString().split('T')[0];
  }

  return await fetchHealthData(startDate, endDate, userId);
};

/**
 * Get available date ranges for navigation bounds
 */
export const getAvailableDateRanges = (tab, userId) => {
  // For now, return reasonable bounds for fake data
  // In a real implementation, this would query the database for available data ranges
  const bounds = {
    'Jour': { min: -30, max: 7 }, // 30 days back, 7 days forward
    'Semaine': { min: -12, max: 1 }, // 12 weeks back, 1 week forward
    'Mois': { min: -6, max: 1 }, // 6 months back, 1 month forward
    'Trimestre': { min: -4, max: 1 }, // 4 quarters back, 1 quarter forward
    'Année': { min: -2, max: 1 } // 2 years back, 1 year forward
  };

  return bounds[tab] || bounds['Mois'];
};
