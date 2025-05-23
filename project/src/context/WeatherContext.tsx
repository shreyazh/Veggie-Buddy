import { createContext, useContext, useState, useEffect, ReactNode } from 'react';

type Weather = {
  temperature: number;
  condition: string;
  humidity: number;
  windSpeed: number;
};

type WeatherContextType = {
  weather: Weather | null;
  isLoading: boolean;
  error: string | null;
};

const WeatherContext = createContext<WeatherContextType | undefined>(undefined);

export const useWeather = () => {
  const context = useContext(WeatherContext);
  if (context === undefined) {
    throw new Error('useWeather must be used within a WeatherProvider');
  }
  return context;
};

export const WeatherProvider = ({ children }: { children: ReactNode }) => {
  const [weather, setWeather] = useState<Weather | null>(null);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);
  
  useEffect(() => {
    // In a real app, this would fetch from a weather API
    // For demo purposes, we'll simulate a weather API response
    const fetchWeather = () => {
      setIsLoading(true);
      
      // Simulate API call
      setTimeout(() => {
        // Generate random weather data
        const conditions = ['Sunny', 'Cloudy', 'Rainy', 'Partly Cloudy'];
        const randomCondition = conditions[Math.floor(Math.random() * conditions.length)];
        
        setWeather({
          temperature: Math.floor(Math.random() * 15) + 15, // 15-30°C
          condition: randomCondition,
          humidity: Math.floor(Math.random() * 40) + 40, // 40-80%
          windSpeed: Math.floor(Math.random() * 20) + 5, // 5-25 km/h
        });
        
        setIsLoading(false);
      }, 1000);
    };
    
    fetchWeather();
    
    // Refresh weather every hour in a real app
    // const interval = setInterval(fetchWeather, 3600000);
    // return () => clearInterval(interval);
  }, []);

  return (
    <WeatherContext.Provider value={{ weather, isLoading, error }}>
      {children}
    </WeatherContext.Provider>
  );
};