import React, { ChangeEvent, useEffect, useMemo, useState } from 'react';
import { House } from '@styled-icons/bootstrap';
import { Location } from '@styled-icons/entypo/Location';
import Form from 'react-bootstrap/Form';

import { useStateSelector } from 'hooks/useReduxStateSelector';
import Loading from 'components/Loading';

const OwnerPlaces = () => {
  const { placeLoading, placeData } = useStateSelector((state) => state.place);
  const [selectedProject, setSelectedProject] = useState<string | null>(null);

  useEffect(() => {
    if (!selectedProject && placeData.length !== 0) setSelectedProject(placeData[0].project);
  }, [placeData, selectedProject]);

  const onChangeProject = (event: ChangeEvent<HTMLInputElement>) => setSelectedProject(event.target.value);

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

  console.log(placeData);

  if (placeLoading) return <Loading />;

  return (
    <Form className="d-flex flex-column justify-content-center rounded">
      <Form.Group>
        <Form.Label className="d-flex justify-content-center">
          <House size={24} className="d-flex text-primary" />
        </Form.Label>
        <Form.Control as="select" onChange={onChangeProject} disabled={uniqueProjects.length === 1}>
          {uniqueProjects.map((project, index) => (
            <option key={index}>{project}</option>
          ))}
        </Form.Control>
      </Form.Group>
      <Form.Group>
        <Form.Label className="d-flex justify-content-center">
          <Location size={24} className="d-flex text-primary" />
        </Form.Label>
        <Form.Control as="select" onChange={() => {}} disabled={uniqueStreets.length === 1}>
          {uniqueStreets.map((street, index) => (
            <option key={index}>{street}</option>
          ))}
        </Form.Control>
        <Form.Control as="select" onChange={() => {}} disabled={uniqueHouseNumbers.length === 1}>
          {uniqueHouseNumbers.map((houseNr, index) => (
            <option key={index}>{houseNr}</option>
          ))}
        </Form.Control>
        <Form.Control as="select" onChange={() => {}} disabled={uniqueFlatNumbers.length === 1}>
          {uniqueFlatNumbers.map((flatNr, index) => (
            <option key={index}>{flatNr}</option>
          ))}
        </Form.Control>
      </Form.Group>
    </Form>
  );
};

export default OwnerPlaces;
