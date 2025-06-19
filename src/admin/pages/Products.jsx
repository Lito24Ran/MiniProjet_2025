import { useEffect, useState } from 'react';
import CustomTable from '../components/CustomTable';
import { productsColumns as originalColumns } from '../data/productsData';
import { Modal, Box, Typography, TextField, Button } from '@mui/material';

export default function Products() {
  const [rows, setRows] = useState([]);
  const [openModal, setOpenModal] = useState(false);
  const [editingProduct, setEditingProduct] = useState(null);

  useEffect(() => {
    fetch('http://localhost:1203/produits')
      .then((res) => res.json())
      .then((data) => setRows(data))
      .catch((err) => console.error("Erreur fetch produits:", err));
  }, []);

  const handleOpenCreate = () => {
    setEditingProduct({ nom: '', prix: '', quantite: '', description: '' });
    setOpenModal(true);
  };

  const handleEdit = (product) => {
    setEditingProduct(product);
    setOpenModal(true);
  };

  const handleClose = () => {
    setOpenModal(false);
    setEditingProduct(null);
  };

  const handleDelete = (id) => {
    setRows(rows.filter(row => row._id !== id));
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setEditingProduct(prev => ({ ...prev, [name]: value }));
  };

  const handleSave = () => {
    if (editingProduct._id) {
      setRows(rows.map(row => (row._id === editingProduct._id ? editingProduct : row)));
    } else {
      const maxId = rows.length;
      setRows([...rows, { ...editingProduct, _id: `temp-${maxId}` }]);
    }
    handleClose();
  };

  return (
    <>
      <Box sx={{ mb: 2, display: 'flex', justifyContent: 'flex-end' }}>
        <Button variant="contained" color="primary" onClick={handleOpenCreate}>
          Nouveau produit
        </Button>
      </Box>

      <CustomTable
        columns={originalColumns}
        rows={rows}
        uniqueKey="_id"
        onEdit={handleEdit}
        onDelete={handleDelete}
      />

      <Modal open={openModal} onClose={handleClose} aria-labelledby="modal-title">
        <Box sx={{
          position: 'absolute',
          top: '50%', left: '50%',
          transform: 'translate(-50%, -50%)',
          width: 400, bgcolor: 'background.paper',
          boxShadow: 24, p: 4, borderRadius: 2,
        }}>
          <Typography id="modal-title" variant="h6" gutterBottom>
            {editingProduct?._id ? 'Modifier le produit' : 'Créer un nouveau produit'}
          </Typography>

          <TextField
            fullWidth label="Nom" name="nom" margin="normal"
            value={editingProduct?.nom || ''}
            onChange={handleChange}
          />
          <TextField
            fullWidth label="Prix" name="prix" margin="normal" type="number"
            value={editingProduct?.prix || ''}
            onChange={handleChange}
          />
          <TextField
            fullWidth label="Quantité" name="quantite" margin="normal" type="number"
            value={editingProduct?.quantite || ''}
            onChange={handleChange}
          />
          <TextField
            fullWidth label="Description" name="description" margin="normal" multiline rows={3}
            value={editingProduct?.description || ''}
            onChange={handleChange}
          />

          <Box sx={{ display: 'flex', justifyContent: 'flex-end', mt: 2 }}>
            <Button onClick={handleClose} sx={{ mr: 1 }}>Annuler</Button>
            <Button variant="contained" color="primary" onClick={handleSave}>
              {editingProduct?._id ? 'Sauvegarder' : 'Créer'}
            </Button>
          </Box>
        </Box>
      </Modal>
    </>
  );
}