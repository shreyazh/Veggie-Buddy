import { useState, useEffect } from 'react';
import { Tip, SeasonalTip } from '../types/tips';
import { tipsData, seasonalTipsData } from '../data/tipsData';

export const useGardeningTips = () => {
  const [tips, setTips] = useState<Tip[]>([]);
  const [seasonalTips, setSeasonalTips] = useState<SeasonalTip[]>([]);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);
  
  useEffect(() => {
    // In a real app, this would fetch from an API or database
    const fetchTips = () => {
      setIsLoading(true);
      
      try {
        // Simulate API delay
        setTimeout(() => {
          setTips(tipsData);
          setSeasonalTips(seasonalTipsData);
          setIsLoading(false);
        }, 800);
      } catch (err) {
        setError('Failed to load gardening tips');
        setIsLoading(false);
      }
    };
    
    fetchTips();
  }, []);
  
  return { tips, seasonalTips, isLoading, error };
};