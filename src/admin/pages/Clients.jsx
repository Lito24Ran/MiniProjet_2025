import { useEffect, useState } from 'react';
import CustomTable from '../components/CustomTable';

const columns = [
  { id: 'name', label: 'Nom', minWidth: 150 },
  { id: 'email', label: 'Email', minWidth: 200 },
  { id: 'level', label: 'Niveau', minWidth: 100 },
];

export default function Clients() {
  const [clients, setClients] = useState([]);

      useEffect(() => {
        const dataComparing = async () => {
            try {
                const datafetching = await fetch("http://localhost:1203/dataUser", {
                    method: 'GET'
                });
                const donnefetch = await datafetching.json();
                //console.log(donnefetch[0].name);
                setData(donnefetch)

            } catch (error) {
                console.log("Une erreur c' est produit!");

            }


        }
        dataComparing();
        //console.log(data[0].email);
    }, [data])

  return <CustomTable columns={columns} rows={clients} uniqueKey="_id" />;
}