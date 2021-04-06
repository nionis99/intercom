import { useCallback, useEffect, useMemo } from 'react';

import { useUserState } from 'contexts/User';
import Place from 'types/Place';

export const usePlaceValues = (placeData: Place[]) => {
  const { selectedProject, setSelectedProject, setSelectedAddress, setSelectedHouse, setSelectedFlat } = useUserState();

  const uniqueProjects = useMemo(() => [...new Set(placeData.map((place) => place.project))], [placeData]);

  const uniqueStreets = useMemo(
    () => [...new Set(placeData.flatMap((place) => (place.project === selectedProject ? [place.street] : [])))],
    [placeData, selectedProject]
  );

  const uniqueHouseNumbers = useMemo(
    () => [...new Set(placeData.flatMap((place) => (place.project === selectedProject ? [place.house_no] : [])))],
    [placeData, selectedProject]
  );

  const uniqueFlatNumbers = useMemo(
    () => [...new Set(placeData.flatMap((place) => (place.project === selectedProject ? [place.flat_no] : [])))],
    [placeData, selectedProject]
  );

  useEffect(() => {
    if (!selectedProject && placeData.length !== 0) {
      setSelectedProject(placeData[0].project);
      setSelectedAddress(placeData[0].street);
      setSelectedHouse(placeData[0].house_no);
      setSelectedFlat(placeData[0].flat_no);
    }
  }, [placeData, selectedProject, setSelectedAddress, setSelectedFlat, setSelectedHouse, setSelectedProject]);

  const changeProject = useCallback(
    (value: string) => {
      setSelectedProject(value);
      setSelectedAddress(placeData.find((place) => place.project === value)?.street || '');
      setSelectedHouse(placeData.find((place) => place.project === value)?.house_no || '');
      setSelectedFlat(placeData.find((place) => place.project === value)?.flat_no || '');
    },
    [placeData, setSelectedAddress, setSelectedFlat, setSelectedHouse, setSelectedProject]
  );

  const changeAddress = useCallback(
    (value: string) => {
      setSelectedAddress(value);
      setSelectedHouse(placeData.find((place) => place.project === value)?.house_no || '');
      setSelectedFlat(placeData.find((place) => place.project === value)?.flat_no || '');
    },
    [placeData, setSelectedAddress, setSelectedFlat, setSelectedHouse]
  );

  const changeHouseNumber = useCallback(
    (value: string) => {
      setSelectedHouse(value);
      setSelectedFlat(placeData.find((place) => place.project === value)?.flat_no || '');
    },
    [placeData, setSelectedFlat, setSelectedHouse]
  );

  return {
    uniqueProjects,
    uniqueStreets,
    uniqueHouseNumbers,
    uniqueFlatNumbers,
    changeProject,
    changeAddress,
    changeHouseNumber,
  };
};
