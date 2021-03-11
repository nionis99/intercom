import React from 'react';
import Table from 'react-bootstrap/Table';
import { DoorSliding } from 'styled-icons/material-rounded';
import { CircleFill } from '@styled-icons/bootstrap';
import { useTranslation } from 'react-i18next';
import LoadingView from 'components/Loading';
import EmptyDataView from 'components/EmptyDataView';

const fakeData = [
  { title: 223211, model: 'A31', type: 'doors', status: true },
  { title: 245634, model: 'B30', type: 'doors', status: true },
  { title: 645355, model: 'A32', type: 'doors', status: false },
  { title: 234236, model: 'B31', type: 'doors', status: true },
  { title: 324665, model: 'B44', type: 'doors', status: false },
  { title: 278454, model: 'C31', type: 'doors', status: true },
  { title: 234972, model: 'C41', type: 'doors', status: true },
  { title: 112312, model: 'A31', type: 'doors', status: false },
  { title: 278454, model: 'C31', type: 'doors', status: true },
  { title: 234972, model: 'C41', type: 'doors', status: true },
  { title: 112312, model: 'A31', type: 'doors', status: false },
  { title: 278454, model: 'C31', type: 'doors', status: true },
  { title: 234972, model: 'C41', type: 'doors', status: true },
  { title: 112312, model: 'A31', type: 'doors', status: false },
];

interface Props {
  loading: boolean;
}

const EquipmentsListTable = ({ loading }: Props) => {
  const { t } = useTranslation();

  if (loading) return <LoadingView />;

  if (fakeData.length === 0) {
    return <EmptyDataView text={t('no_equipment')} centered />;
  }

  return (
    <Table borderless hover responsive="sm">
      <thead>
        <tr className="text-center">
          <th className="font-weight-normal">{t('title')}</th>
          <th className="font-weight-normal">{t('model')}</th>
          <th className="font-weight-normal">{t('type')}</th>
          <th className="font-weight-normal">{t('status')}</th>
        </tr>
      </thead>
      <tbody>
        {fakeData.map((data, index) => (
          <tr key={index} className="text-center font-weight-light">
            <td>{data.title}</td>
            <td>{data.model}</td>
            <td>
              <DoorSliding size={22} />
            </td>
            <td>
              <CircleFill color={data.status ? 'green' : 'red'} size={20} />
            </td>
          </tr>
        ))}
      </tbody>
    </Table>
  );
};

export default EquipmentsListTable;
