import React from 'react';
import Table from 'react-bootstrap/Table';
import { useTranslation } from 'react-i18next';

import EmptyDataView from 'components/EmptyDataView';
import LoadingView from 'components/Loading';
import DoorItem from './DoorItem';
import Door from 'types/Door';

interface Props {
  loading: boolean;
  doorsData: Door[];
}

const DoorsAccessListTable = ({ loading, doorsData }: Props) => {
  const { t } = useTranslation();

  if (loading) return <LoadingView />;

  if (doorsData.length === 0) return <EmptyDataView text={t('no_doors_access')} centered />;

  return (
    <Table borderless hover responsive="sm">
      <thead>
        <tr className="text-center">
          <th className="font-weight-normal">{t('name')}</th>
          <th className="font-weight-normal">{t('type')}</th>
          <th className="font-weight-normal">{t('project')}</th>
          <th className="font-weight-normal">{t('note')}</th>
        </tr>
      </thead>
      <tbody>
        {doorsData.map((door, index) => (
          <DoorItem key={index} door={door} />
        ))}
      </tbody>
    </Table>
  );
};

export default DoorsAccessListTable;
