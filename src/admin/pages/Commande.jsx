import CustomTable from '../components/CustomTable';
import { commandesColumns, commandesRows } from '../data/commandesData';

export default function Commande() {
  return <CustomTable columns={commandesColumns} rows={commandesRows} uniqueKey="orderId" />;
}
