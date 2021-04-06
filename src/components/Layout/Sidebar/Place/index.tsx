import React, { ChangeEvent } from 'react';
import { useTranslation } from 'react-i18next';
import Form from 'react-bootstrap/Form';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

import { useUserState } from 'contexts/User';
import { useStateSelector } from 'hooks/useReduxStateSelector';
import { usePlaceValues } from 'hooks/usePlaceValues';
import Loading from 'components/Loading';

const OwnerPlaces = () => {
  const { t } = useTranslation();
  const { placeLoading, placeData } = useStateSelector((state) => state.place);
  const { selectedProject, selectedAddress, selectedHouse, selectedFlat, setSelectedFlat } = useUserState();

  const {
    uniqueProjects,
    uniqueStreets,
    uniqueHouseNumbers,
    uniqueFlatNumbers,
    changeProject,
    changeAddress,
    changeHouseNumber,
  } = usePlaceValues(placeData);

  const onChangeProject = (event: ChangeEvent<HTMLInputElement>) => changeProject(event.target.value);
  const onChangeAddress = (event: ChangeEvent<HTMLInputElement>) => changeAddress(event.target.value);
  const onChangeHouseNumber = (event: ChangeEvent<HTMLInputElement>) => changeHouseNumber(event.target.value);
  const onChangeFlatNumber = (event: ChangeEvent<HTMLInputElement>) => setSelectedFlat(event.target.value);

  if (placeLoading) return <Loading />;

  return (
    <Form className="d-flex flex-column justify-content-center rounded">
      <Form.Group>
        <Form.Label className="d-flex justify-content-center">{t('project')}</Form.Label>
        <Form.Control
          as="select"
          onChange={onChangeProject}
          value={selectedProject || uniqueProjects[0]}
          disabled={uniqueProjects.length === 1}
        >
          {uniqueProjects.map((project, index) => (
            <option key={index} className="text-truncate">
              {project}
            </option>
          ))}
        </Form.Control>
      </Form.Group>
      <Form.Group>
        <Form.Label className="d-flex justify-content-center">{t('address')}</Form.Label>
        <Form.Control
          as="select"
          onChange={onChangeAddress}
          value={selectedAddress || uniqueStreets[0]}
          disabled={uniqueStreets.length === 1}
        >
          {uniqueStreets.map((street, index) => (
            <option key={index}>{street}</option>
          ))}
        </Form.Control>
      </Form.Group>
      <Form.Group as={Row}>
        <Col sm={6}>
          <Form.Label className="d-flex justify-content-center">{t('house_number')}</Form.Label>
          <Form.Control
            as="select"
            onChange={onChangeHouseNumber}
            value={selectedHouse || uniqueHouseNumbers[0]}
            disabled={uniqueHouseNumbers.length === 1}
          >
            {uniqueHouseNumbers.map((houseNr, index) => (
              <option key={index}>{houseNr}</option>
            ))}
          </Form.Control>
        </Col>
        <Col sm={6}>
          <Form.Label className="d-flex justify-content-center">{t('flat_number')}</Form.Label>
          <Form.Control
            as="select"
            onChange={onChangeFlatNumber}
            value={selectedFlat || uniqueFlatNumbers[0]}
            disabled={uniqueFlatNumbers.length === 1}
          >
            {uniqueFlatNumbers.map((flatNr, index) => (
              <option key={index}>{flatNr}</option>
            ))}
          </Form.Control>
        </Col>
      </Form.Group>
    </Form>
  );
};

export default OwnerPlaces;
