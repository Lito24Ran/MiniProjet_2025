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

  // Ouvrir modal création (editingProduct null)
  const handleOpenCreate = () => {
    setEditingProduct({ id: '', name: '', price: '', description: '' }); // vide pour nouveau produit
    setOpenModal(true);
  };

  // Ouvrir modal édition
  const handleEdit = (product) => {
    setEditingProduct(product);
    setOpenModal(true);
  };

  const handleClose = () => {
    setOpenModal(false);
    setEditingProduct(null);
  };

  // Supprimer produit
  const handleDelete = (id) => {
    setRows(rows.filter(row => row.id !== id));
  };

  // Changement des champs dans modal
  const handleChange = (e) => {
    const { name, value } = e.target;
    setEditingProduct(prev => ({ ...prev, [name]: value }));
  };

  // Sauvegarder création ou modification
  const handleSave = () => {
    if (editingProduct.id) {
      // Edition produit existant
      setRows(rows.map(row => (row.id === editingProduct.id ? editingProduct : row)));
    } else {
      // Création produit - générer un id simple (ex: max id + 1)
      const maxId = rows.reduce((max, row) => (row.id > max ? row.id : max), 0);
      setRows([...rows, { ...editingProduct, id: maxId + 1 }]);
    }
    handleClose();
  };

  return (
    <>
      {/* Bouton pour créer un nouveau produit */}
      <Box sx={{ mb: 2, display: 'flex', justifyContent: 'flex-end' }}>
        <Button variant="contained" color="primary" onClick={handleOpenCreate}>
          Nouveau produit
        </Button>
      </Box>

      {/* Table avec actions edit/delete */}
      <CustomTable
        columns={originalColumns}
        rows={rows}
        uniqueKey="_id"
        onEdit={handleEdit}
        onDelete={handleDelete}
      />

      {/* Modal création/édition */}
      <Modal open={openModal} onClose={handleClose} aria-labelledby="modal-title">
        <Box sx={{
          position: 'absolute',
          top: '50%', left: '50%',
          transform: 'translate(-50%, -50%)',
          width: 400, bgcolor: 'background.paper',
          boxShadow: 24, p: 4, borderRadius: 2,
        }}>
          <Typography id="modal-title" variant="h6" gutterBottom>
            {editingProduct?.id ? 'Modifier le produit' : 'Créer un nouveau produit'}
          </Typography>
          <TextField
            fullWidth label="Nom" name="name" margin="normal"
            value={editingProduct?.name || ''}
            onChange={handleChange}
          />
          <TextField
            fullWidth label="Prix" name="price" margin="normal" type="number"
            value={editingProduct?.price || ''}
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
              {editingProduct?.id ? 'Sauvegarder' : 'Créer'}
            </Button>
          </Box>
        </Box>
      </Modal>
    </>
  );
}
