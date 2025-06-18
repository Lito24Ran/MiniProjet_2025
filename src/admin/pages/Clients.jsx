import CustomTable from '../components/CustomTable';
import { clientsColumns, clientsRows } from '../data/clientsData';

export default function Clients() {
  return <CustomTable columns={clientsColumns} rows={clientsRows} uniqueKey="id" />;
}
