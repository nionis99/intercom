import { useCallback, useEffect, useMemo } from 'react';

import { useAppState } from 'contexts';
import { useUserState } from 'contexts/User';
import { useStateSelector } from 'hooks/useReduxStateSelector';
import usePathname from 'hooks/usePathname';

export const usePlaceValues = () => {
  const pathname = usePathname();
  const { isAdmin } = useAppState();
  const { ownerPlaceData } = useStateSelector((state) => state.place);
  const { adminPlaceData } = useStateSelector((state) => state.place);
  const isAdminApi = pathname.includes('/users') || pathname === '/access';
  const placeData = isAdmin && isAdminApi ? adminPlaceData : ownerPlaceData;

  const isRefetch = isAdmin && (pathname === '/members' || pathname === '/users');

  const {
    selectedProject,
    selectedFlatId,
    setSelectedProject,
    setSelectedAddress,
    setSelectedHouse,
    setSelectedFlat,
    setSelectedFlatId,
  } = useUserState();

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
    () => [
      ...new Set(
        placeData.flatMap((place) =>
          place.project === selectedProject && place.flat_no !== '0' ? [place.flat_no] : []
        )
      ),
    ],
    [placeData, selectedProject]
  );

  useEffect(() => {
    console.log(selectedFlatId);
    if ((placeData.length !== 0 && !selectedProject) || isRefetch) {
      setSelectedProject(placeData[0].project);
      setSelectedAddress(placeData[0].street);
      setSelectedHouse(placeData[0].house_no);
      setSelectedFlat(placeData[0].flat_no);
      setSelectedFlatId(placeData[0].id.toString());
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [placeData]);

  const changeProject = useCallback(
    (value: string) => {
      setSelectedProject(value);
      setSelectedAddress(placeData.find((place) => place.project === value)?.street || '');
      setSelectedHouse(placeData.find((place) => place.project === value)?.house_no || '');
      setSelectedFlat(placeData.find((place) => place.project === value)?.flat_no || '');
      setSelectedFlatId(placeData.find((place) => place.project === value)?.id.toString() || '');
    },
    [placeData, setSelectedAddress, setSelectedFlat, setSelectedFlatId, setSelectedHouse, setSelectedProject]
  );

  const changeAddress = useCallback(
    (value: string) => {
      setSelectedAddress(value);
      setSelectedHouse(placeData.find((place) => place.street === value)?.house_no || '');
      setSelectedFlat(placeData.find((place) => place.street === value)?.flat_no || '');
      setSelectedFlatId(placeData.find((place) => place.street === value)?.id.toString() || '');
    },
    [placeData, setSelectedAddress, setSelectedFlat, setSelectedFlatId, setSelectedHouse]
  );

  const changeHouseNumber = useCallback(
    (value: string) => {
      setSelectedHouse(value);
      setSelectedFlat(placeData.find((place) => place.house_no === value)?.flat_no || '');
      setSelectedFlatId(
        placeData.find((place) => place.house_no === value && place.flat_no !== '0')?.id.toString() || ''
      );
    },
    [placeData, setSelectedFlat, setSelectedFlatId, setSelectedHouse]
  );

  const changeFlatNumber = useCallback(
    (value: string) => {
      setSelectedFlat(value);
      setSelectedFlatId(
        placeData.find((place) => place.flat_no === value && place.project === selectedProject)?.id.toString() || ''
      );
    },
    [placeData, selectedProject, setSelectedFlat, setSelectedFlatId]
  );

  return {
    placeData,
    uniqueProjects,
    uniqueStreets,
    uniqueHouseNumbers,
    uniqueFlatNumbers,
    changeProject,
    changeAddress,
    changeHouseNumber,
    changeFlatNumber,
  };
};
