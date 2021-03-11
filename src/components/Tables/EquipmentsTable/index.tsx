import React from 'react';
import Table from 'react-bootstrap/Table';
import { useTranslation } from 'react-i18next';
import LoadingView from 'components/Loading';
import EmptyDataView from 'components/EmptyDataView';
import EquipmentItem from './EquipmentItem';
import { Equipment } from 'types';

const fakeData: Equipment[] = [
  { title: '223211', model: 'A31', type: 'doors', status: true },
  { title: '245634', model: 'B30', type: 'doors', status: true },
  { title: '645355', model: 'A32', type: 'doors', status: false },
  { title: '234236', model: 'B31', type: 'doors', status: true },
  { title: '324665', model: 'B44', type: 'doors', status: false },
  { title: '278454', model: 'C31', type: 'doors', status: true },
  { title: '234972', model: 'C41', type: 'doors', status: true },
  { title: '112312', model: 'A31', type: 'doors', status: false },
  { title: '278454', model: 'C31', type: 'doors', status: true },
  { title: '234972', model: 'C41', type: 'doors', status: true },
  { title: '112312', model: 'A31', type: 'doors', status: false },
  { title: '278454', model: 'C31', type: 'doors', status: true },
  { title: '234972', model: 'C41', type: 'doors', status: true },
  { title: '112312', model: 'A31', type: 'doors', status: false },
];

interface Props {
  loading: boolean;
}

const EquipmentsListTable = ({ loading }: Props) => {
  const { t } = useTranslation();

  if (loading) return <LoadingView />;

  if (fakeData.length === 0) {
    return <EmptyDataView text={t('no_equipments')} centered />;
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
        {fakeData.map((equipment, index) => (
          <EquipmentItem key={index} equipment={equipment} />
        ))}
      </tbody>
    </Table>
  );
};

export default EquipmentsListTable;
