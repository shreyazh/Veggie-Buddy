import { useState, useEffect } from 'react';
import { Plant } from '../types/plants';
import { plantsData } from '../data/plantsData';

export const usePlants = () => {
  const [plants, setPlants] = useState<Plant[]>([]);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);
  
  useEffect(() => {
    // In a real app, this would fetch from an API or database
    const fetchPlants = () => {
      setIsLoading(true);
      
      try {
        // Simulate API delay
        setTimeout(() => {
          setPlants(plantsData);
          setIsLoading(false);
        }, 800);
      } catch (err) {
        setError('Failed to load plants data');
        setIsLoading(false);
      }
    };
    
    fetchPlants();
  }, []);
  
  return { plants, isLoading, error };
};