import React, { ChangeEvent } from 'react';
import { useTranslation } from 'react-i18next';
import { useParams } from 'react-router-dom';
import Form from 'react-bootstrap/Form';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

import { useUserState } from 'contexts/User';
import { useStateSelector } from 'hooks/useReduxStateSelector';
import { usePlaceValues } from 'hooks/usePlaceValues';
import usePathname from 'hooks/usePathname';
import Loading from 'components/Loading';

interface RouteParams {
  userId: string;
}

const OwnerPlaces = () => {
  const pathname = usePathname();
  const { t } = useTranslation();
  const { ownerPlaceLoading } = useStateSelector((state) => state.place);
  const { adminPlaceLoading } = useStateSelector((state) => state.place);
  const { selectedProject, selectedAddress, selectedHouse, selectedFlat } = useUserState();
  const isAccess = pathname === '/access';

  const { userId } = useParams<RouteParams>();

  const {
    placeData,
    uniqueProjects,
    uniqueStreets,
    uniqueHouseNumbers,
    uniqueFlatNumbers,
    changeProject,
    changeAddress,
    changeHouseNumber,
    changeFlatNumber,
  } = usePlaceValues();

  const onChangeProject = (event: ChangeEvent<HTMLSelectElement>) => changeProject(event.target.value);
  const onChangeAddress = (event: ChangeEvent<HTMLSelectElement>) => changeAddress(event.target.value);
  const onChangeHouseNumber = (event: ChangeEvent<HTMLSelectElement>) => changeHouseNumber(event.target.value);
  const onChangeFlatNumber = (event: ChangeEvent<HTMLSelectElement>) => changeFlatNumber(event.target.value);

  if (ownerPlaceLoading || adminPlaceLoading) return <Loading />;

  return (
    <Form
      className={`${placeData.length === 1 || userId ? 'd-none' : 'd-flex'} flex-column justify-content-center rounded`}
    >
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
      {!isAccess && (
        <>
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
                disabled={uniqueFlatNumbers.length <= 1}
              >
                {uniqueFlatNumbers.map((flatNr, index) => (
                  <option key={index}>{flatNr}</option>
                ))}
              </Form.Control>
            </Col>
          </Form.Group>
        </>
      )}
    </Form>
  );
};

export default OwnerPlaces;
