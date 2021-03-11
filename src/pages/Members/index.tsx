import React from 'react';
import LayoutContainer from 'components/Layout';
import { useTranslation } from 'react-i18next';
import Card from 'react-bootstrap/Card';
import Table from 'react-bootstrap/Table';
import Button from 'react-bootstrap/Button';
import { Trash, Edit } from '@styled-icons/fa-solid';
import { CircleFill } from '@styled-icons/bootstrap';
import { PersonAdd } from 'styled-icons/material-rounded';

const fakeData = [
  { cardId: 112312, code: 333, status: true },
  { cardId: 241231, code: 432, status: true },
  { cardId: 312312, code: 666, status: true },
  { cardId: 441231, code: 999, status: false },
  { cardId: 441231, code: 999, status: false },
  { cardId: 441231, code: 999, status: false },
  { cardId: 441231, code: 999, status: false },
  { cardId: 441231, code: 999, status: true },
  { cardId: 441231, code: 999, status: false },
  { cardId: 441231, code: 999, status: false },
  { cardId: 441231, code: 999, status: true },
  { cardId: 441231, code: 999, status: false },
  { cardId: 441231, code: 999, status: false },
];

const MembersPage = () => {
  const { t } = useTranslation();

  return (
    <LayoutContainer>
      <Card.Header className="d-flex align-items-center font-weight-bold">
        {t('assigned_cards')}
        <Button variant="transparent" size="sm" className="d-flex align-items-center ml-auto">
          <PersonAdd size={24} className="text-primary mr-2" />
          {t('add_new_card')}
        </Button>
      </Card.Header>
      <Card.Body className="h-100 overflow-auto">
        <Table borderless hover responsive="sm">
          <thead>
            <tr className="text-center">
              <th className="font-weight-normal">{t('card_id')}</th>
              <th className="font-weight-normal">{t('code')}</th>
              <th className="font-weight-normal">{t('status')}</th>
              <th className="font-weight-normal">{t('actions')}</th>
            </tr>
          </thead>
          <tbody>
            {fakeData.map((data) => (
              <tr key={data.cardId} className="text-center font-weight-light">
                <td>{data.cardId}</td>
                <td>{data.code}</td>
                <td>{<CircleFill color={data.status ? 'green' : 'red'} size={20} />}</td>
                <td className="d-flex align-items-center justify-content-center">
                  <Edit size={22} className="text-primary cursor-pointer mr-2" />
                  <Trash size={20} className="text-danger cursor-pointer" />
                </td>
              </tr>
            ))}
          </tbody>
        </Table>
      </Card.Body>
    </LayoutContainer>
  );
};

export default MembersPage;
